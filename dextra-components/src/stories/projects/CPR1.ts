import { template as html } from "../../utils/templateFunction";

import {
  townshipData,
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
    <div style="width:100%;display:block;">
      ${CprFilterHeader(filteredDatasets)}
      <br />
      <div style="width:100%;height:80vh;position:relative">
        <osl-flex-box breakpoint="lg" style="height:100%" >
          <div style="flex-basis:25%; flex-grow:0;">
            <div>
              <sp-theme>
                <p><b>Pesticide Use Map View</b></p>
                <p>
                  The map on the right displays pesticide use reporting data 
                  at the census tract or zip code scale. The colors on this map represent the pounds of pesticide used in each area.
                  The color scale in the legend show the range of use, based on quantile breaks (quintile).
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
                data='${JSON.parse(filteredDatasets)[0]}'
                parameters='${JSON.stringify([
                  "start",
                  "end",
                  "ai_class",
                  "ai_type",
                  "ai_type_specific",
                  "site",
                  "usetype",
                  "county",
                  "township",
                  "schooldistrict",
                  "tract",
                  "pctblack",
                  "pcthispanic",
                  "income"
                ])}'
                labels='${JSON.stringify([
                  "Start Date",
                  "End Date",
                  "Active Ingredient Class",
                  "Active Ingredient Type",
                  "Active Ingredient Type Specific",
                  "Site Type / Commodity",
                  "Use Type (ag/nonag)",
                  "County",
                  "Township",
                  "School District",
                  "Census Tract",
                  "Percent Black / African American Population",
                  "Percent Hispanic Population",
                  "Median Household Income (2021 dollars)"
                ])}'
                parameterTitle="Filter"
                title="Current Data Filters"
              ></osl-param-view>
            </div>
            <div>
              <br />
              ${CprDataDescription()}
            </div>
          </div>
          <div style="max-height:100vh;min-height:40vh;">
            <osl-tabs>
              <div data-tab="Tract" style="width:100%;height:100%;min-height:60vh;">
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
                    data='${censusTractData}'
                    visible="true"
                    stroked="true"
                    staticStroke="[255,255,255,120]"
                    isolatedValues="[0, null]"
                    isolatedColor="${zeroPesticideColor}"
                  >
                  </osl-map-layer>
                </osl-glmap>
                <osl-download
                  title="Download Census Tract Code Summary Data"
                  filename="census-tract-summary"
                  parameterSuffixes='${JSON.stringify([
                    "start",
                    "end",
                    "ai_class",
                    "ai_type",
                    "ai_type_specific",
                    "site",
                    "usetype",
                  ])}'
                  data='${censusTractData}'
                ></osl-download>
              </div>
              <div data-tab="County" style="width:100%;height:100%;min-height:60vh;">
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
                    data='${countyData}'
                    visible="true"
                    isolatedValues="[0, null]"
                    isolatedColor="${zeroPesticideColor}"
                  >
                  </osl-map-layer>
                </osl-glmap>
                <osl-download
                  title="County Summary Data"
                  filename="county-summary"
                  parameterSuffixes='${JSON.stringify([
                    "start",
                    "end",
                    "ai_class",
                    "ai_type",
                    "ai_type_specific",
                    "site",
                    "usetype",
                  ])}'
                  data='${countyData}'
                ></osl-download>
              </div>
              <div data-tab="School District" style="width:100%;height:100%;min-height:60vh;">
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
                    stroked="true"
                    staticStroke="[255,255,255,120]"
                    data='${schoolDistrictData}'
                    visible="true"
                    isolatedValues="[0, null]"
                    isolatedColor="${zeroPesticideColor}"
                  >
                  </osl-map-layer>
                </osl-glmap>
              <osl-download
                  title="School District Summary Data"
                  filename="school-district-summary"
                  parameterSuffixes='${JSON.stringify([
                    "start",
                    "end",
                    "ai_class",
                    "ai_type",
                    "ai_type_specific",
                    "site",
                    "usetype",
                  ])}'
                  data='${schoolDistrictData}'
                ></osl-download>
              </div>
              <div data-tab="Townships" style="width:100%;height:100%;min-height:60vh;">
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
                    data='${townshipData}'
                    isolatedValues="[0, null]"
                    isolatedColor="${zeroPesticideColor}"
                  >
                  </osl-map-layer>
                </osl-glmap>
                <osl-download
                  title="Download Township Summary Data"
                  filename="township-summary"
                  parameterSuffixes='${JSON.stringify([
                    "start",
                    "end",
                    "ai_class",
                    "ai_type",
                    "ai_type_specific",
                    "site",
                    "usetype",
                  ])}'
                  data='${townshipData}'
                ></osl-download>
              </div>
            </osl-tabs>
          </div>
        </osl-flex-box>
      </div>
    </div>
  </div>
  <!-- <osl-data-table
    title="Census Tract Data"
    maxw="200vw"
    data='${censusTractData}'
    columns='${censusTractColumns}'
    pagination="true"
  ></osl-data-table> -->
  </div>
</div>
  `;
};
