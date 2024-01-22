import { template as html } from "../../utils/templateFunction";
import {
  townshipData,
  zipCodeColumns,
  demogZipCodeColumns,
  filteredDatasets,
  censusTractData,
  zeroPesticideColor,
  countyData,
  schoolDistrictData,
} from "./CPRUtils";

import {
  CprDataDescription,
  CprFilterHeader,
} from "./CPRComponents";


export const CPR2 = () => {
  return html`
    <div style="width:100%;height:auto">
      ${CprFilterHeader(filteredDatasets)}
      <br />
      <hr/>
      <br />
      <div>
        <div style="position:relative">
        <div style="display:flex;flex-direction:row; gap:1rem">
          <div style="flex-basis:50%">
            <sp-theme>
              <p><b>Pesticide Use and Demography Map View</b></p>
              <p>
                This data view shows a map of pesticide use reporting data and
                demographic data at the census tract or zip code scale. The
                colors on this map represent the pounds of pesticide used in
                each Area and various demographic characteristics from the US
                Census American Community Survey. The color scale in the legend
                show the ranges of the values based on quantile breaks
                (quintile).
                <br /><br />
                To change the scale from census tracts or zip codes, or change
                the demographic data displayed, click the layer icon on the
                legend on the bottom left of the map.
                <br /><br />
                To change the date range displayed, change the start date and
                end date drop downs above.
                <br /><br />
                To filter the data for particular active ingredient types,
                classes, or commodities, click the "Additional Filters" button
                for additional options.
                <br /><br />
                Your current filters are display on the right, along with a
                description of data sources.
                <br /><br />
                Below this map, there is a table of data at both the census
                tract and zip code scale.
              </p>

            </sp-theme>
            ${CprDataDescription()}
          </div>

          <div style="flex-basis:50%">
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
        </div>
            </div>
      </div>
      <br />
      <hr/>
      <br />
      <div style="height:60vh;">
        <osl-tabs>
          <div data-tab="Census Tracts" style="width:100%;height:100%;min-height:60vh;">
            <osl-eq-grid breakpoint="lg" style="height:100%;">
            <div>
              <osl-glmap
                mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
                legendPosition="bottom-left"
                showNavigation="true"
                showSingleLayer="true"
                center="[-120.1,36.9]"
                zoom="5"
                mapGroup="1"
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
                    method="QNT"
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
            </div>
            <div>
              <osl-glmap
                mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
                legendPosition="bottom-left"
                showNavigation="true"
                showSingleLayer="true"
                center="[-120.1,36.9]"
                zoom="5"
                mapGroup="1"
              >

              <osl-map-layer
                    legendtitle="Median Household Income (In 2021 Inflation Adjusted Dollars)"
                    geoType="WKB"
                    geoColumn="geometry"
                    dataColumn="Median Income"
                    type="continuous"
                    bins="5"
                    colorScheme="Greens"
                    filled="true"
                    attribution="American Community Survey 2021"
                    layer="polygon"
                    beforeId="water"
                    method="QNT"
                    geoId="FIPS"
                    data='${censusTractData}'
                    visible="true"
                    stroked="true"
                    staticStroke="[255,255,255,120]"
                  >
                  </osl-map-layer>
              <osl-map-layer
                    legendtitle="Percent Non-Hispanic Black or African American Population"
                    geoType="WKB"
                    geoColumn="geometry"
                    dataColumn="Pct Black"
                    type="continuous"
                    bins="5"
                    colorScheme="GnBu"
                    filled="true"
                    labelFormat="percent"
                    attribution="American Community Survey 2021"
                    layer="polygon"
                    beforeId="water"
                    method="QNT"
                    geoId="FIPS"
                    data='${censusTractData}'
                    visible="false"
                    stroked="true"
                    staticStroke="[255,255,255,120]"
                  >
                  </osl-map-layer>
              <osl-map-layer
                    legendtitle="Percent Hispanic"
                    geoType="WKB"
                    geoColumn="geometry"
                    dataColumn="Pct Hispanic"
                    type="continuous"
                    bins="5"
                    colorScheme="GnBu"
                    filled="true"
                    attribution="American Community Survey 2021"
                    layer="polygon"
                    beforeId="water"
                    method="QNT"
                    geoId="FIPS"
                    data='${censusTractData}'
                    visible="false"
                    stroked="true"
                    labelFormat="percent"
                    staticStroke="[255,255,255,120]"
                  >
                  </osl-map-layer>
              <osl-map-layer
                    legendtitle="Percent without a high school degree"
                    geoType="WKB"
                    geoColumn="geometry"
                    dataColumn="Pct No Hs"
                    type="continuous"
                    labelFormat="percent"
                    bins="5"
                    colorScheme="GnBu"
                    filled="true"
                    attribution="American Community Survey 2021"
                    layer="polygon"
                    beforeId="water"
                    method="QNT"
                    geoId="FIPS"
                    data='${censusTractData}'
                    visible="false"
                    stroked="true"
                    staticStroke="[255,255,255,120]"
                  >
                  </osl-map-layer>
              </osl-glmap>
            </div>
          </osl-eq-grid>
          </div>
          <div data-tab="County" style="width:100%;height:100%;min-height:60vh;">

          <osl-eq-grid breakpoint="lg" style="height:100%;">
            <div>
              <osl-glmap
                mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
                legendPosition="bottom-left"
                showNavigation="true"
                showSingleLayer="true"
                center="[-120.1,36.9]"
                zoom="5"
                mapGroup="1"
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
                    method="QNT"
                    geoId="county_cd"
                    data='${countyData}'
                    visible="true"
                    stroked="true"
                    staticStroke="[255,255,255,120]"
                    isolatedValues="[0, null]"
                    isolatedColor="${zeroPesticideColor}"
                  >
                  </osl-map-layer>
              </osl-glmap>
            </div>
            <div>
          <osl-glmap
                mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
                legendPosition="bottom-left"
                showNavigation="true"
                showSingleLayer="true"
                center="[-120.1,36.9]"
                zoom="5"
                mapGroup="1"
              >

              <osl-map-layer
                    legendtitle="Median Household Income (In 2021 Inflation Adjusted Dollars)"
                    geoType="WKB"
                    geoColumn="geometry"
                    dataColumn="Median Household Income (In 2021 Inflation Adjusted Dollars)"
                    type="continuous"
                    bins="5"
                    colorScheme="Greens"
                    filled="true"
                    attribution="American Community Survey 2021"
                    layer="polygon"
                    beforeId="water"
                    method="QNT"
                    geoId="county_cd"
                    data='${countyData}'
                    visible="true"
                    stroked="true"
                    staticStroke="[255,255,255,120]"
                  >
                  </osl-map-layer>
              <osl-map-layer
                    legendtitle="Percent Non-Hispanic Black or African American Population"
                    geoType="WKB"
                    geoColumn="geometry"
                    dataColumn="Pct Black"
                    type="continuous"
                    bins="5"
                    colorScheme="GnBu"
                    filled="true"
                    labelFormat="percent"
                    attribution="American Community Survey 2021"
                    layer="polygon"
                    beforeId="water"
                    method="QNT"
                    geoId="county_cd"
                    data='${countyData}'
                    visible="false"
                    stroked="true"
                    staticStroke="[255,255,255,120]"
                  >
                  </osl-map-layer>
              <osl-map-layer
                    legendtitle="Percent Hispanic"
                    geoType="WKB"
                    geoColumn="geometry"
                    dataColumn="Pct Hispanic"
                    type="continuous"
                    bins="5"
                    colorScheme="GnBu"
                    filled="true"
                    attribution="American Community Survey 2021"
                    layer="polygon"
                    beforeId="water"
                    method="QNT"
                    geoId="county_cd"
                    data='${countyData}'
                    visible="false"
                    stroked="true"
                    labelFormat="percent"
                    staticStroke="[255,255,255,120]"
                  >
                  </osl-map-layer>
              <osl-map-layer
                    legendtitle="Percent without a high school degree"
                    geoType="WKB"
                    geoColumn="geometry"
                    dataColumn="Pct No Hs"
                    type="continuous"
                    labelFormat="percent"
                    bins="5"
                    colorScheme="GnBu"
                    filled="true"
                    attribution="American Community Survey 2021"
                    layer="polygon"
                    beforeId="water"
                    method="QNT"
                    geoId="county_cd"
                    data='${countyData}'
                    visible="false"
                    stroked="true"
                    staticStroke="[255,255,255,120]"
                  >
                  </osl-map-layer>
              </osl-glmap>
            </div>
            </osl-eq-grid>
          </div>
          <div data-tab="School Districts" style="width:100%;height:100%;min-height:60vh;">

          <osl-eq-grid breakpoint="lg" style="height:100%;">
            <div>
              <osl-glmap
                mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
                legendPosition="bottom-left"
                showNavigation="true"
                showSingleLayer="true"
                center="[-120.1,36.9]"
                zoom="5"
                mapGroup="1"
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
                    method="QNT"
                    geoId="FIPS"
                    data='${schoolDistrictData}'
                    visible="true"
                    stroked="true"
                    staticStroke="[255,255,255,120]"
                    isolatedValues="[0, null]"
                    isolatedColor="${zeroPesticideColor}"
                  >
                  </osl-map-layer>
              </osl-glmap>
            </div>
            <div>
              <osl-glmap
                mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
                legendPosition="bottom-left"
                showNavigation="true"
                showSingleLayer="true"
                center="[-120.1,36.9]"
                zoom="5"
                mapGroup="1"
              >

              <osl-map-layer
                    legendtitle="Median Household Income (In 2021 Inflation Adjusted Dollars)"
                    geoType="WKB"
                    geoColumn="geometry"
                    dataColumn="Median Income"
                    type="continuous"
                    bins="5"
                    colorScheme="Greens"
                    filled="true"
                    attribution="American Community Survey 2021"
                    layer="polygon"
                    beforeId="water"
                    method="QNT"
                    geoId="FIPS"
                    data='${schoolDistrictData}'
                    visible="true"
                    stroked="true"
                    staticStroke="[255,255,255,120]"
                  >
                  </osl-map-layer>
              <osl-map-layer
                    legendtitle="Percent Non-Hispanic Black or African American Population"
                    geoType="WKB"
                    geoColumn="geometry"
                    dataColumn="Pct Black"
                    type="continuous"
                    bins="5"
                    colorScheme="GnBu"
                    filled="true"
                    labelFormat="percent"
                    attribution="American Community Survey 2021"
                    layer="polygon"
                    beforeId="water"
                    method="QNT"
                    geoId="FIPS"
                    data='${schoolDistrictData}'
                    visible="false"
                    stroked="true"
                    staticStroke="[255,255,255,120]"
                  >
                  </osl-map-layer>
              <osl-map-layer
                    legendtitle="Percent Hispanic"
                    geoType="WKB"
                    geoColumn="geometry"
                    dataColumn="Pct Hispanic"
                    type="continuous"
                    bins="5"
                    colorScheme="GnBu"
                    filled="true"
                    attribution="American Community Survey 2021"
                    layer="polygon"
                    beforeId="water"
                    method="QNT"
                    geoId="FIPS"
                    data='${schoolDistrictData}'
                    visible="false"
                    stroked="true"
                    labelFormat="percent"
                    staticStroke="[255,255,255,120]"
                  >
                  </osl-map-layer>
              <osl-map-layer
                    legendtitle="Percent without a high school degree"
                    geoType="WKB"
                    geoColumn="geometry"
                    dataColumn="Pct No Hs"
                    type="continuous"
                    labelFormat="percent"
                    bins="5"
                    colorScheme="GnBu"
                    filled="true"
                    attribution="American Community Survey 2021"
                    layer="polygon"
                    beforeId="water"
                    method="QNT"
                    geoId="FIPS"
                    data='${schoolDistrictData}'
                    visible="false"
                    stroked="true"
                    staticStroke="[255,255,255,120]"
                  >
                  </osl-map-layer>
              </osl-glmap>
            </div>
          </osl-eq-grid>
          </div>
          <div data-tab="Townships (Pesticide Data) / Tracts (Demography)" style="width:100%;height:100%;min-height:60vh;">


          <osl-eq-grid breakpoint="lg" style="height:100%;">
            <div>
              <osl-glmap
                mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
                legendPosition="bottom-left"
                showNavigation="true"
                showSingleLayer="true"
                center="[-120.1,36.9]"
                zoom="5"
                mapGroup="1"
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
                    method="QNT"
                    data='${townshipData}'
                    visible="true"
                    stroked="true"
                    staticStroke="[255,255,255,120]"
                    isolatedValues="[0, null]"
                    isolatedColor="${zeroPesticideColor}"
                  >
                  </osl-map-layer>
              </osl-glmap>
            </div>
            <div>

            <osl-glmap
                mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
                legendPosition="bottom-left"
                showNavigation="true"
                showSingleLayer="true"
                center="[-120.1,36.9]"
                zoom="5"
                mapGroup="1"
              >

              <osl-map-layer
                    legendtitle="Median Household Income (In 2021 Inflation Adjusted Dollars)"
                    geoType="WKB"
                    geoColumn="geometry"
                    dataColumn="Median Income"
                    type="continuous"
                    bins="5"
                    colorScheme="Greens"
                    filled="true"
                    attribution="American Community Survey 2021"
                    layer="polygon"
                    beforeId="water"
                    method="QNT"
                    geoId="FIPS"
                    data='${censusTractData}'
                    visible="true"
                    stroked="true"
                    staticStroke="[255,255,255,120]"
                  >
                  </osl-map-layer>
              <osl-map-layer
                    legendtitle="Percent Non-Hispanic Black or African American Population"
                    geoType="WKB"
                    geoColumn="geometry"
                    dataColumn="Pct Black"
                    type="continuous"
                    bins="5"
                    colorScheme="GnBu"
                    filled="true"
                    labelFormat="percent"
                    attribution="American Community Survey 2021"
                    layer="polygon"
                    beforeId="water"
                    method="QNT"
                    geoId="FIPS"
                    data='${censusTractData}'
                    visible="false"
                    stroked="true"
                    staticStroke="[255,255,255,120]"
                  >
                  </osl-map-layer>
              <osl-map-layer
                    legendtitle="Percent Hispanic"
                    geoType="WKB"
                    geoColumn="geometry"
                    dataColumn="Pct Hispanic"
                    type="continuous"
                    bins="5"
                    colorScheme="GnBu"
                    filled="true"
                    attribution="American Community Survey 2021"
                    layer="polygon"
                    beforeId="water"
                    method="QNT"
                    geoId="FIPS"
                    data='${censusTractData}'
                    visible="false"
                    stroked="true"
                    labelFormat="percent"
                    staticStroke="[255,255,255,120]"
                  >
                  </osl-map-layer>
              <osl-map-layer
                    legendtitle="Percent without a high school degree"
                    geoType="WKB"
                    geoColumn="geometry"
                    dataColumn="Pct No Hs"
                    type="continuous"
                    labelFormat="percent"
                    bins="5"
                    colorScheme="GnBu"
                    filled="true"
                    attribution="American Community Survey 2021"
                    layer="polygon"
                    beforeId="water"
                    method="QNT"
                    geoId="FIPS"
                    data='${censusTractData}'
                    visible="false"
                    stroked="true"
                    staticStroke="[255,255,255,120]"
                  >
                  </osl-map-layer>
              </osl-glmap>
            </div>
          </osl-eq-grid>
          </div>

        </osl-tabs>
      </div>
    </div>
  `;
};

