import { html } from "lit";
import {
  abbrs,
  specialties,
  statTable,
  countyData,
  zipData,
  visionProvidersData,
  CongressionalDistrictData,
  allDatasets,
  tableColumns,
  tooltipSpec,
  countyStatTable,
  congressStatTable,
  zipStatTable,
} from "./PreventBlindnessUtils";
export const PreventBlindness = () => {
  return html`
  <sp-theme>
    <div>
      <h1>US Vision Health Provider Data Explorer</h1>
    </div>  
    <osl-flex-box breakpoint="md">
      <div style="padding-right: 20px">
        <p>The US Vision Health Provider Data Explorer tool is an exploratory data and screening tool 
          for vision care providers across the US. The version of the tool providers data visualization
          by county for each state in the US and the subspecialties listed in the US Department of Health and 
          Human Services (HHS) National Provider Identifier (NPI) dataset. 
        </p>
        <p>
          On the left, you can filter by vision care provider subspecialty and state. Summary statistics will display in the table on the left and the map on the right
          will display the selected area and statistics. Click the layer icon on the map legend to visualize a different variable. Below, you can explore a full table of available providers
          and download the county summary data or a full list of providers for your query.
        </p>
        <p><b>Data Definitions</b></p>
        <ul>
          <li><b>Providers Per 100k Population</b> - The number of providers per 100,000 people in the geography</li>
          <li><b>Total Providers</b> - The total number of providers in the geography</li>
          <li><b>Percent with Vision Difficulty</b> - “Percentage of people who are blind or have serious difficulty seeing even when wearing glasses”</li>
          <li><b>Percent Without Health Insurance</b> - Percentage of people without health insurance coverage</li>
          <li><b>Percent Less than High School Education at Age 25</b> - Percentage of people age 25 and over with less than a high school diploma or equivalent</li>
          <li><b>Total Population</b> - Total population in the geography</li>

      </div>

    </osl-flex-box>
    <p style="font-size:0.75rem">
      Data sources: Providers - HHS NPI (Summer 2023); Population Data - ACS 2021 5-Year Estimates (via Social Explorer); 
      Geographies - US Census Administrative Boundaries (Counties - 2019)
    </p>
  </sp-theme>
  <br/>
  <hr/>
  <br/>
  <div style="display:flex;flex-direction:row;gap:1rem;">
    <div style="min-width:30%;">
      <div style="display:flex;flex-direction:column; gap:1rem;">
        <osl-select-control
          data=${allDatasets}
          option="state"
          options=${JSON.stringify(abbrs)}
          title="Filter by state"
          initialValue="IL"
        ></osl-select-control>

      <osl-checkbox
          options=${JSON.stringify(specialties)}
          title="Choose a specialty or subspecialty"
          option="taxonomy"
          data=${allDatasets}
          ></osl-checkbox>
      </div>
    </div>
    <div style="height: 80vh; width: 100%; position:relative; overflow:auto;">
    <osl-tabs>
      <div data-tab="Counties (Map)" style="position:relative;width:100%;height:100%;">
        <osl-glmap 
          mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json" 
          legendPosition="top-left" 
          showNavigation='true'
          showSingleLayer='true'
          mapGroup="1"
          >
          <osl-map-layer 
          source="65303b14fc2a290008152629" 
          legendTitle="Providers Per 100k Population" 
          visible='true' 
          geoType="WKB" 
          geoColumn="geometry" 
          dataColumn="providers_per_100k" 
          type="continuous" 
          bins='5' 
          colorScheme="RdYlBu" 
          filled='true' 
          attribution="HHS National Provider Identifier (2023)" 
          layer="polygon" 
          beforeId="water" 
          method="QNT" 
          geoId="FIPS" 
          stroked='true' 
          data=${countyData}
          tooltips=${tooltipSpec}
          >
          </osl-map-layer>
          <osl-map-layer 
          source="65303b14fc2a290008152629" 
          legendTitle="Total Providers" 
          visible='false' 
          geoType="WKB" 
          geoColumn="geometry" 
          dataColumn="providers_count" 
          type="continuous" 
          bins='5' 
          colorScheme="YlGnBu" 
          filled='true' 
          attribution="HHS National Provider Identifier (2023)" 
          layer="polygon" 
          beforeId="water" 
          method="QNT" 
          geoId="FIPS" 
          stroked='true' 
          data=${countyData}
          tooltips=${tooltipSpec}
          >
          </osl-map-layer>
          <osl-map-layer 
          source="65303b14fc2a290008152629" 
          legendTitle="Percent of People with Vision Difficulty" 
          labelFormat="percent"
          visible='false' 
          geoType="WKB" 
          geoColumn="geometry" 
          dataColumn="Vision Difficulty Rate" 
          type="continuous" 
          bins='5' 
          colorScheme="d3-cividis" 
          filled='true' 
          attribution="American Community Survey 2021 (5 Year Estimates)" 
          layer="polygon" 
          beforeId="water" 
          method="QNT" 
          geoId="FIPS" 
          stroked='true' 
          data=${countyData}
          tooltips=${tooltipSpec}
          >
          </osl-map-layer>
          <osl-map-layer 
          source="65303b14fc2a290008152629" 
          legendTitle="Percent Without Health Insurance" 
          visible='false' 
          geoType="WKB" 
          geoColumn="geometry" 
          dataColumn="Percent Without Health Insurance" 
          type="continuous" 
          bins='5' 
          colorScheme="PuRd" 
          filled='true' 
          attribution="American Community Survey 2021 (5 Year Estimates)" 
          layer="polygon" 
          beforeId="water" 
          method="QNT" 
          geoId="FIPS" 
          stroked='true' 
          data=${countyData}
          tooltips=${tooltipSpec}
          >
          </osl-map-layer>
          <osl-map-layer 
          legendTitle="Percent Less than High School" 
          visible='false' 
          geoType="WKB" 
          geoColumn="geometry" 
          dataColumn="Percent Less than High School" 
          type="continuous" 
          bins='5' 
          colorScheme="BuPu" 
          filled='true' 
          attribution="American Community Survey 2021 (5 Year Estimates)" 
          layer="polygon" 
          beforeId="water" 
          method="QNT" 
          geoId="FIPS" 
          stroked='true' 
          data=${countyData}
          tooltips=${tooltipSpec}
          >
          </osl-map-layer>
          <osl-map-layer 
          source="65303b14fc2a290008152629" 
          legendTitle="Total Population" 
          visible='false' 
          geoType="WKB" 
          geoColumn="geometry" 
          dataColumn="Total Population" 
          type="continuous" 
          bins='5' 
          colorScheme="PuBuGn" 
          filled='true' 
          attribution="American Community Survey 2021 (5 Year Estimates)"
          layer="polygon" 
          beforeId="water" 
          method="QNT" 
          geoId="FIPS" 
          stroked='true' 
          data=${countyData}
          tooltips=${tooltipSpec}
          >
          </osl-map-layer>
        </osl-glmap>
      </div>

      <div data-tab="Counties (Data Tables)" style="position:relative;width:100%;height:100%;">
        <div style="display:flex;flex-direction:column;gap:1rem;background-color:white;padding:1rem;">
            <osl-stat-table
              title="County Summary Statistics"
              suffixParam="state"
              data=${countyData}
              columns=${countyStatTable}
              columnNames=${JSON.stringify([
                "Providers Per 100k",
                "Total Providers",
                "Percent with Vision Difficulty",
                "Percent Without Health Insurance",
                "Percent Less than High School Education at Age 25",
                "Total Population",
              ])}
              columnFormats=${JSON.stringify([
                "nice",
                "nice",
                "percent",
                "percent",
                "percent",
                "nice",
              ])}
            ></osl-stat-table>
        </div>
      </div>
      <div data-tab="Congressional Districts (Map)" style="position:relative;width:100%;height:100%;">

      <osl-glmap 
          mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json" 
          legendPosition="top-left" 
          showNavigation='true'
          showSingleLayer='true'
          mapGroup="1"
          >
          <osl-map-layer 
          source="65303b14fc2a290008152629" 
          legendTitle="Providers Per 100k Population" 
          visible='true' 
          geoType="WKB" 
          geoColumn="geometry" 
          dataColumn="Providers Per 100k" 
          type="continuous" 
          bins='5' 
          colorScheme="RdYlBu" 
          filled='true' 
          attribution="HHS National Provider Identifier (2023)" 
          layer="polygon" 
          beforeId="water" 
          method="QNT" 
          geoId="name" 
          stroked='true' 
          data=${CongressionalDistrictData}
          tooltips=${tooltipSpec}
          >
          </osl-map-layer>
          <osl-map-layer 
          source="65303b14fc2a290008152629" 
          legendTitle="Total Providers" 
          visible='false' 
          geoType="WKB" 
          geoColumn="geometry" 
          dataColumn="providers_count" 
          type="continuous" 
          bins='5' 
          colorScheme="YlGnBu" 
          filled='true' 
          attribution="HHS National Provider Identifier (2023)" 
          layer="polygon" 
          beforeId="water" 
          method="QNT" 
          geoId="name" 
          stroked='true' 
          data=${CongressionalDistrictData}
          tooltips=${tooltipSpec}
          >
          </osl-map-layer>
          <osl-map-layer 
          source="65303b14fc2a290008152629" 
          legendTitle="Percent of People with Vision Difficulty" 
          labelFormat="percent"
          visible='false' 
          geoType="WKB" 
          geoColumn="geometry" 
          dataColumn="Vision Difficulty Rate" 
          type="continuous" 
          bins='5' 
          colorScheme="d3-cividis" 
          filled='true' 
          attribution="American Community Survey 2021 (5 Year Estimates)" 
          layer="polygon" 
          beforeId="water" 
          method="QNT" 
          geoId="name" 
          stroked='true' 
          data=${CongressionalDistrictData}
          tooltips=${tooltipSpec}
          >
          </osl-map-layer>
          <osl-map-layer 
          source="65303b14fc2a290008152629" 
          legendTitle="Percent Without Health Insurance" 
          visible='false' 
          geoType="WKB" 
          geoColumn="geometry" 
          dataColumn="Percent Without Health Insurance" 
          type="continuous" 
          bins='5' 
          colorScheme="PuRd" 
          filled='true' 
          attribution="American Community Survey 2021 (5 Year Estimates)" 
          layer="polygon" 
          beforeId="water" 
          method="QNT" 
          geoId="name" 
          stroked='true' 
          data=${CongressionalDistrictData}
          tooltips=${tooltipSpec}
          >
          </osl-map-layer>
          <osl-map-layer 
          legendTitle="Percent Less than High School" 
          visible='false' 
          geoType="WKB" 
          geoColumn="geometry" 
          dataColumn="Percent Less than High School" 
          type="continuous" 
          bins='5' 
          colorScheme="BuPu" 
          filled='true' 
          attribution="American Community Survey 2021 (5 Year Estimates)" 
          layer="polygon" 
          beforeId="water" 
          method="QNT" 
          geoId="name" 
          stroked='true' 
          data=${CongressionalDistrictData}
          tooltips=${tooltipSpec}
          >
          </osl-map-layer>
          <osl-map-layer 
          source="65303b14fc2a290008152629" 
          legendTitle="Total Population" 
          visible='false' 
          geoType="WKB" 
          geoColumn="geometry" 
          dataColumn="Total Population" 
          type="continuous" 
          bins='5' 
          colorScheme="PuBuGn" 
          filled='true' 
          attribution="American Community Survey 2021 (5 Year Estimates)"
          layer="polygon" 
          beforeId="water" 
          method="QNT" 
          geoId="name" 
          stroked='true' 
          data=${CongressionalDistrictData}
          tooltips=${tooltipSpec}
          >
          </osl-map-layer>
        </osl-glmap>
      </div>

      <div data-tab="Congressional Districts (Data Tables)" style="position:relative;width:100%;height:100%;">
        <div style="display:flex;flex-direction:column;gap:1rem;background-color:white;padding:1rem;">
            <osl-stat-table
              title="Congressional Districts Summary Statistics"
              suffixParam="state"
              data=${CongressionalDistrictData}
              columns=${congressStatTable}
              columnNames=${JSON.stringify([
                "Providers Per 100k",
                "Total Providers",
                "Percent with Vision Difficulty",
                "Percent Without Health Insurance",
                "Percent Less than High School Education at Age 25",
                "Total Population",
              ])}
              columnFormats=${JSON.stringify([
                "nice",
                "nice",
                "percent",
                "percent",
                "percent",
                "nice",
              ])}
            ></osl-stat-table>
        </div>
      </div>
      <div data-tab="Zip Codes / ZCTAs (Map)" style="position:relative;width:100%;height:100%;">
        <osl-glmap 
          mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json" 
          legendPosition="top-left" 
          showNavigation='true'
          showSingleLayer='true'
          mapGroup="1"
          >
          <osl-map-layer 
          source="65303b14fc2a290008152629" 
          legendTitle="Providers Per 100k Population" 
          visible='true' 
          geoType="WKB" 
          geoColumn="geometry" 
          dataColumn="Providers Per 100k" 
          type="continuous" 
          bins='5' 
          colorScheme="RdYlBu" 
          filled='true' 
          attribution="HHS National Provider Identifier (2023)" 
          layer="polygon" 
          beforeId="water" 
          method="QNT" 
          geoId="ZIPCODE" 
          stroked='true' 
          data=${zipData}
          tooltips=${tooltipSpec}
          >
          </osl-map-layer>
          <osl-map-layer 
          source="65303b14fc2a290008152629" 
          legendTitle="Total Providers" 
          visible='false' 
          geoType="WKB" 
          geoColumn="geometry" 
          dataColumn="providers_count" 
          type="continuous" 
          bins='5' 
          colorScheme="YlGnBu" 
          filled='true' 
          attribution="HHS National Provider Identifier (2023)" 
          layer="polygon" 
          beforeId="water" 
          method="QNT" 
          geoId="ZIPCODE" 
          stroked='true' 
          data=${zipData}
          tooltips=${tooltipSpec}
          >
          </osl-map-layer>
          <osl-map-layer 
          source="65303b14fc2a290008152629" 
          legendTitle="Percent of People with Vision Difficulty" 
          labelFormat="percent"
          visible='false' 
          geoType="WKB" 
          geoColumn="geometry" 
          dataColumn="Vision Difficulty Rate" 
          type="continuous" 
          bins='5' 
          colorScheme="d3-cividis" 
          filled='true' 
          attribution="American Community Survey 2021 (5 Year Estimates)" 
          layer="polygon" 
          beforeId="water" 
          method="QNT" 
          geoId="ZIPCODE" 
          stroked='true' 
          data=${zipData}
          tooltips=${tooltipSpec}
          >
          </osl-map-layer>
          <osl-map-layer 
          source="65303b14fc2a290008152629" 
          legendTitle="Percent Without Health Insurance" 
          visible='false' 
          geoType="WKB" 
          geoColumn="geometry" 
          dataColumn="Percent Without Health Insurance" 
          type="continuous" 
          bins='5' 
          colorScheme="PuRd" 
          filled='true' 
          attribution="American Community Survey 2021 (5 Year Estimates)" 
          layer="polygon" 
          beforeId="water" 
          method="QNT" 
          geoId="ZIPCODE" 
          stroked='true' 
          data=${zipData}
          tooltips=${tooltipSpec}
          >
          </osl-map-layer>
          <osl-map-layer 
          legendTitle="Percent Less than High School" 
          visible='false' 
          geoType="WKB" 
          geoColumn="geometry" 
          dataColumn="Percent Less than High School" 
          type="continuous" 
          bins='5' 
          colorScheme="BuPu" 
          filled='true' 
          attribution="American Community Survey 2021 (5 Year Estimates)" 
          layer="polygon" 
          beforeId="water" 
          method="QNT" 
          geoId="ZIPCODE" 
          stroked='true' 
          data=${zipData}
          tooltips=${tooltipSpec}
          >
          </osl-map-layer>
          <osl-map-layer 
          source="65303b14fc2a290008152629" 
          legendTitle="Total Population" 
          visible='false' 
          geoType="WKB" 
          geoColumn="geometry" 
          dataColumn="Total Population" 
          type="continuous" 
          bins='5' 
          colorScheme="PuBuGn" 
          filled='true' 
          attribution="American Community Survey 2021 (5 Year Estimates)"
          layer="polygon" 
          beforeId="water" 
          method="QNT" 
          geoId="ZIPCODE" 
          stroked='true' 
          data=${zipData}
          tooltips=${tooltipSpec}
          >
          </osl-map-layer>
        </osl-glmap>
      </div>

      <div data-tab="Zip Codes / ZCTAs (Data Tables)" style="position:relative;width:100%;height:100%;">
        <div style="display:flex;flex-direction:column;gap:1rem;background-color:white;padding:1rem;">
            <osl-stat-table
              title="Zip Code Summary Statistics"
              suffixParam="state"
              data=${zipData}
              columns=${zipStatTable}
              columnNames=${JSON.stringify([
                "Providers Per 100k",
                "Total Providers",
                "Percent with Vision Difficulty",
                "Percent Without Health Insurance",
                "Percent Less than High School Education at Age 25",
                "Total Population",
              ])}
              columnFormats=${JSON.stringify([
                "nice",
                "nice",
                "percent",
                "percent",
                "percent",
                "nice",
              ])}
            ></osl-stat-table>
        </div>
      </div>
    </osl-tabs>
    <osl-flex-box breakpoint="lg">
    </osl-flex-box> 
  </div>
</div>

</div>
&nbsp;

<div style="position:relative;display:block;">
      
      <osl-data-table
                title="Providers"
                suffixParam="state"
                maxw="200vw"
                data=${visionProvidersData}
                columns=${tableColumns}
                pagination="true"
              ></osl-data-table>
            <div>
              <osl-download
                title="Download County Summary Data"
                filename="counties-summary"
                parameterSuffixes=${JSON.stringify(["state", "taxonomy"])}
                data=${countyData}
                ></osl-download>
                <osl-download
                title="Download All Providers"
                filename="vision-providers"
                parameterSuffixes=${JSON.stringify(["state", "taxonomy"])}
                data=${countyData}
                ></osl-download>
            </div></div>
  `;
};
