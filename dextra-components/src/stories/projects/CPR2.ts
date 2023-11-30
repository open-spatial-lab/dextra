import { html } from "lit";
import {
  townshipData,
  zipCodeColumns,
  demogZipCodeColumns,
  filteredDatasets,
  censusTractData,
} from "./CPRUtils";

import {
  CprDataDescription,
  CprFilterHeader,
} from "./CPRComponents";


export const CPR2 = () => {
  return html`
    <div style="width:100%;height:auto">
      ${CprFilterHeader()}
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
                (septile).
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
          </div>
        </div>
            </div>
      </div>
      <br />
      <hr/>
      <br />
      <div style="width:100%;height:60vh;position:relative">
        <osl-flex-box breakpoint="lg" style="height:100%;">
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
                legendTitle="Pounds of Chemical Used (Census Tract)"
                geoType="WKB"
                geoColumn="geometry"
                dataColumn="lbs_chm_used"
                type="continuous"
                bins="7"
                colorScheme="d3-magma"
                filled="true"
                attribution="California Pesticide Use Reporting (PUR)"
                layer="polygon"
                beforeId="water"
                method="QNT"
                geoId="FIPS"
                data=${censusTractData}
                visible="false"
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
                legendTitle="Total Population (Census Tract)"
                visible="false"
                geoType="WKB"
                geoColumn="geometry"
                dataColumn="Total Population"
                type="continuous"
                bins="7"
                colorScheme="PuBu"
                filled="true"
                attribution="American Community Survey (ACS) 2021 5-year estimates"
                layer="polygon"
                beforeId="water"
                method="QNT"
                geoId="FIPS"
                data=${censusTractData}
              >
              </osl-map-layer>

              <osl-map-layer
                legendTitle="Non Hispanic White Population (Census Tract)"
                visible="false"
                geoType="WKB"
                geoColumn="geometry"
                dataColumn="NH White"
                type="continuous"
                bins="7"
                colorScheme="PuBu"
                filled="true"
                attribution="American Community Survey (ACS) 2021 5-year estimates"
                layer="polygon"
                beforeId="water"
                method="QNT"
                geoId="FIPS"
                data=${censusTractData}
              >
              </osl-map-layer>
              <osl-map-layer
                legendTitle="Non Hispanic Black Population (Census Tract)"
                visible="false"
                geoType="WKB"
                geoColumn="geometry"
                dataColumn="NH Black"
                type="continuous"
                bins="7"
                colorScheme="PuBu"
                filled="true"
                attribution="American Community Survey (ACS) 2021 5-year estimates"
                layer="polygon"
                beforeId="water"
                method="QNT"
                geoId="FIPS"
                data=${censusTractData}
              >
              </osl-map-layer>

              <osl-map-layer
                legendTitle="Non Hispanic American Indian and Alaska Native Population (Census Tract)"
                visible="false"
                geoType="WKB"
                geoColumn="geometry"
                dataColumn="NH AIAN"
                type="continuous"
                bins="7"
                colorScheme="PuBu"
                filled="true"
                attribution="American Community Survey (ACS) 2021 5-year estimates"
                layer="polygon"
                beforeId="water"
                method="QNT"
                geoId="FIPS"
                data=${censusTractData}
              >
              </osl-map-layer>
              <osl-map-layer
                legendTitle="Non Hispanic Asian Population (Census Tract)"
                visible="false"
                geoType="WKB"
                geoColumn="geometry"
                dataColumn="NH Asian"
                type="continuous"
                bins="7"
                colorScheme="PuBu"
                filled="true"
                attribution="American Community Survey (ACS) 2021 5-year estimates"
                layer="polygon"
                beforeId="water"
                method="QNT"
                geoId="FIPS"
                data=${censusTractData}
              >
              </osl-map-layer>
              <osl-map-layer
                legendTitle="Non Hispanic Native Hawaiian and Pacific Islander Population (Census Tract)"
                visible="false"
                geoType="WKB"
                geoColumn="geometry"
                dataColumn="NH NHPI"
                type="continuous"
                bins="7"
                colorScheme="PuBu"
                filled="true"
                attribution="American Community Survey (ACS) 2021 5-year estimates"
                layer="polygon"
                beforeId="water"
                method="QNT"
                geoId="FIPS"
                data=${censusTractData}
              >
              </osl-map-layer>

              <osl-map-layer
                legendTitle="Non Hispanic Another Race Population (Census Tract)"
                visible="false"
                geoType="WKB"
                geoColumn="geometry"
                dataColumn="NH Other"
                type="continuous"
                bins="7"
                colorScheme="PuBu"
                filled="true"
                attribution="American Community Survey (ACS) 2021 5-year estimates"
                layer="polygon"
                beforeId="water"
                method="QNT"
                geoId="FIPS"
                data=${censusTractData}
              >
              </osl-map-layer>

              <osl-map-layer
                legendTitle="Non Hispanic Two or More Races Population (Census Tract)"
                visible="false"
                geoType="WKB"
                geoColumn="geometry"
                dataColumn="NH Two or More"
                type="continuous"
                bins="7"
                colorScheme="PuBu"
                filled="true"
                attribution="American Community Survey (ACS) 2021 5-year estimates"
                layer="polygon"
                beforeId="water"
                method="QNT"
                geoId="FIPS"
                data=${censusTractData}
              >
              </osl-map-layer>

              <osl-map-layer
                legendTitle="Hispanic or Latinx Population (Census Tract)"
                visible="false"
                geoType="WKB"
                geoColumn="geometry"
                dataColumn="Pop Hispanic or Latino"
                type="continuous"
                bins="7"
                colorScheme="PuBu"
                filled="true"
                attribution="American Community Survey (ACS) 2021 5-year estimates"
                layer="polygon"
                beforeId="water"
                method="QNT"
                geoId="FIPS"
                data=${censusTractData}
              >
              </osl-map-layer>
              <osl-map-layer
                legendTitle="Median Income (Census Tract)"
                visible="false"
                geoType="WKB"
                geoColumn="geometry"
                dataColumn="Median Income"
                type="continuous"
                bins="7"
                colorScheme="YlGn"
                filled="true"
                attribution="American Community Survey (ACS) 2021 5-year estimates"
                layer="polygon"
                beforeId="water"
                method="QNT"
                geoId="FIPS"
                data=${censusTractData}
              >
              </osl-map-layer>
            </osl-glmap>
          </div>
        </osl-flex-box>
        <br /><br />
        <div>
        </div>
        <div>
          <osl-data-table
            title="Census Tract Data"
            maxw="300vw"
            data=${censusTractData}
            columns=${demogZipCodeColumns}
            pagination="true"
          ></osl-data-table>
        </div>
        <div>
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
            data=${zipCodeColumns}
          ></osl-download>
          <osl-download
            title="Download Tract Code Summary Data"
            filename="tract-summary"
            parameterSuffixes=${JSON.stringify([
              "start",
              "end",
              "ai_class",
              "ai_type",
              "ai_type_specific",
              "site",
              "agtype",
            ])}
            data=${zipCodeColumns}
          ></osl-download>
        </div>
      </div>
    </div>
  `;
};