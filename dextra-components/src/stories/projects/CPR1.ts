import { html } from "lit";

import {
  townshipData,
  zipCodeColumns,
  filteredDatasets,
  censusTractData,
  censusTractColumns,
  countyData,
  schoolDistrictData,
  zeroPesticideColor,
} from "./CPRUtils";

import { CprDataDescription, CprFilterHeader } from "./CPRComponents";

export const CPR = () => {
  return html`
    <div style="width:100%;padding-bottom:10vh;display:block;">
      ${CprFilterHeader()}
      <br />
      <div style="width:100%;height:100vh;position:relative">
        <osl-flex-box breakpoint="lg">
          <div style="flex-basis:25%; flex-grow:0;">
            <div>
              <sp-theme>
              <p><b>Pesticide Use Map View</b></p>
              <p>
                The map on the right displays pesticide use reporting data 
                at the census tract or zip code scale. The colors on this map represent the pounds of pesticide used in each area.
                The color scale in the legend show the range of use, based on quantile breaks (septile).
                <br/><br/> 
                To change the scale from census tracts or zip codes, 
                click on the layer icon on the legend on the bottom left of the map.
                <br/><br/>
                To change the date range displayed, change the start date and end date drop downs above.
                <br/><br/>
                To filter the data for particular active ingredient types, classes, or commodities, click the "Additional Filters" button for additional options.
                <br/><br/>
                Your current filters are display below, along with a description of data sources.
                <br/><br/>
                Below this map, there is a table of data at both the census tract and zip code scale.
              <hr/>
</sp-theme>
              <osl-param-view
                data=${JSON.parse(filteredDatasets)[0]}
                parameters=${JSON.stringify([
                  "start",
                  "end",
                  "ai_class",
                  "ai_type",
                  "ai_type_specific",
                  "site",
                  "agtype",
                ])}
                parameterTitle="Filter"
                title="Current Data Filters"
              ></osl-param-view>

        <div>
                <br/><br/>
        <osl-download
          title="Download Zip Code Summary Data"
          filename="zip-code-summary"
          parameterSuffixes=${JSON.stringify([
            "start",
            "end",
            "ai_class",
            "ai_type",
            "ai_type_specific",
            "site",
            "agtype",
          ])}
          data=${townshipData}
        ></osl-download>
        <osl-download
          title="Download Census Tract Code Summary Data"
          filename="census-tract-summary"
          parameterSuffixes=${JSON.stringify([
            "start",
            "end",
            "ai_class",
            "ai_type",
            "ai_type_specific",
            "site",
            "agtype",
          ])}
          data=${townshipData}
        ></osl-download>
        </div>
            </div>

            <div>
              <br />
              ${CprDataDescription()}
            </div>
          </div>
          <div style="max-height:80vh">
          <osl-tabs>

            <div data-tab="Tract" style="width:100%;height:100%;">
              <osl-glmap
                mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
                legendPosition="bottom-left"
                showNavigation="true"
                showSingleLayer="true"
                center="[-120.1,36.9]"
                zoom="5"
              >
                <osl-map-layer
                  legendTitle="Pounds of Chemical Used"
                  geoType="WKB"
                  geoColumn="geometry"
                  dataColumn="lbs_chm_used"
                  type="continuous"
                  bins="5"
                  colorScheme="Reds"
                  filled="true"
                  attribution="California Pesticide Use Reporting (PUR)"
                  layer="polygon"
                  beforeId="water"
                  method="JNK"
                  geoId="FIPS"
                  data=${censusTractData}
                  visible="true"
                  stroked="true"
                  staticStroke="[255,255,255,120]"
                  isolatedValues="[0, null]"
                  isolatedColor="${zeroPesticideColor}"
                >
                </osl-map-layer>
              </osl-glmap>
            </div>

          <div data-tab="County" style="width:100%;height:100%;">
              <osl-glmap
                mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
                legendPosition="bottom-left"
                showNavigation="true"
                showSingleLayer="true"
                center="[-120.1,36.9]"
                zoom="5"
              >
                <osl-map-layer
                  legendTitle="Pounds of Chemical Used"
                  geoType="WKB"
                  geoColumn="geometry"
                  dataColumn="lbs_chm_used"
                  stroked="true"
                  staticStroke="[255,255,255,120]"
                  type="continuous"
                  bins="5"
                  colorScheme="Reds"
                  filled="true"
                  attribution="California Pesticide Use Reporting (PUR)"
                  layer="polygon"
                  beforeId="water"
                  method="JNK"
                  data=${countyData}
                  visible="true"
                  isolatedValues="[0, null]"
                  isolatedColor="${zeroPesticideColor}"
                >
                </osl-map-layer>
              </osl-glmap>
            </div>

            <div data-tab="School District" style="width:100%;height:100%;">
              <osl-glmap
                mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
                legendPosition="bottom-left"
                showNavigation="true"
                showSingleLayer="true"
                center="[-120.1,36.9]"
                zoom="5"
              >
                <osl-map-layer
                  legendTitle="Pounds of Chemical Used"
                  geoType="WKB"
                  geoColumn="geometry"
                  dataColumn="lbs_chm_used"
                  type="continuous"
                  bins="5"
                  colorScheme="Reds"
                  filled="true"
                  attribution="California Pesticide Use Reporting (PUR)"
                  layer="polygon"
                  beforeId="water"
                  method="JNK"
                  geoId="SCID"
                  stroked="true"
                  staticStroke="[255,255,255,120]"
                  data=${schoolDistrictData}
                  visible="true"
                  isolatedValues="[0, null]"
                  isolatedColor="${zeroPesticideColor}"
                >
                </osl-map-layer>
              </osl-glmap>
            </div>

            <div data-tab="Townships" style="width:100%;height:100%;">
              <osl-glmap
                mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
                legendPosition="bottom-left"
                showNavigation="true"
                showSingleLayer="true"
                center="[-120.1,36.9]"
                zoom="5"
              >
                <osl-map-layer
                  legendTitle="Pounds of Chemical Used"
                  visible="true"
                  geoType="WKB"
                  geoColumn="geometry"
                  stroked="true"
                  staticStroke="[255,255,255,120]"
                  dataColumn="lbs_chm_used"
                  type="continuous"
                  bins="5"
                  colorScheme="Reds"
                  filled="true"
                  attribution="California Pesticide Use Reporting (PUR)"
                  layer="polygon"
                  beforeId="water"
                  method="JNK"
                  geoId="ZIP"
                  data=${townshipData}
                  isolatedValues="[0, null]"
                  isolatedColor="${zeroPesticideColor}"
                >
                </osl-map-layer>
              </osl-glmap>
            </div>
          </osl-tabs>
          </div>
        </osl-flex-box>
        </div></div>
        </div>
        <!-- <osl-data-table
          title="Zip Code Data"
          maxw="200vw"
          data=${townshipData}
          columns=${zipCodeColumns}
          pagination="true"
        ></osl-data-table> -->

        <osl-data-table
          title="Census Tract Data"
          maxw="200vw"
          data=${censusTractData}
          columns=${censusTractColumns}
          pagination="true"
        ></osl-data-table>

      </div>
    </div>
  `;
};
