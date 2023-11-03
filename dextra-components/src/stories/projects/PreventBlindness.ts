import { html } from "lit";
import {
  abbrs,
  specialties,
  statTable,
  bothDatasets,
  tableColumns,
  tooltipSpec,
} from "./PreventBlindnessUtils";
export const PreventBlindness = () => {
  return html`
  <sp-theme>
    <div>
      <h1>US Vision Health Provider Data Explorer</h1>
    </div>  
    <osl-flex-box breakpoint="md">
      <div style="max-width: calc(50% - 20px); padding-right: 20px">
        <p>The US Vision Health Provider Data Explorer tool is an exploratory data and screening tool 
          for vision care providers across the US. The version of the tool providers data visualization
          by county for each state in the US and the subspecialties listed in the US Department of Health and 
          Human Services (HHS) National Provider Identifier (NPI) dataset. 
        </p>
      </div>
      <div style="max-width:50%">
        <p>
          On the left, you can filter by vision care provider subspecialty and state. Summary statistics will display in the table on the left and the map on the right
          will display the selected area and statistics. Click the layer icon on the map legend to visualize a different variable. Below, you can explore a full table of available providers
          and download the county summary data or a full list of providers for your query.
        </p>
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
        data=${bothDatasets}
        option="state"
        options=${JSON.stringify(abbrs)}
        title="Filter by state"
        initialValue="IL"
      ></osl-select-control>
      <osl-select-control
        data=${bothDatasets}
        option="taxonomy"
        options=${JSON.stringify(specialties)}
        title="Choose a specialty or subspecialty"
        initialValue="*"
      ></osl-select-control>
      <osl-stat-table
        title="Summary Statistics"
        data="https://d36q6zt0rhsb35.cloudfront.net/data-query/65303b14fc2a290008152629"
        columns=${statTable}
        ></osl-stat-table>
      </div>
    </div>
    <div style="height: 80vh; width: 100%; position:relative;">
      <osl-glmap 
        mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json" 
        legendPosition="top-left" 
        showNavigation='true'
        showSingleLayer='true'
        center=[]
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
 geoId="County GEOID" 
 stroked='true' 
 data="https://d36q6zt0rhsb35.cloudfront.net/data-query/65303b14fc2a290008152629"
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
 geoId="County GEOID" 
 stroked='true' 
 data="https://d36q6zt0rhsb35.cloudfront.net/data-query/65303b14fc2a290008152629"
 tooltips=${tooltipSpec}
>
</osl-map-layer>
<osl-map-layer 
 source="65303b14fc2a290008152629" 
 legendTitle="Vision Difficulty Rate" 
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
 geoId="County GEOID" 
 stroked='true' 
 data="https://d36q6zt0rhsb35.cloudfront.net/data-query/65303b14fc2a290008152629"
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
 geoId="County GEOID" 
 stroked='true' 
 data="https://d36q6zt0rhsb35.cloudfront.net/data-query/65303b14fc2a290008152629"
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
 geoId="County GEOID" 
 stroked='true' 
 data="https://d36q6zt0rhsb35.cloudfront.net/data-query/65303b14fc2a290008152629"
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
 geoId="County GEOID" 
 stroked='true' 
 data="https://d36q6zt0rhsb35.cloudfront.net/data-query/65303b14fc2a290008152629"
 tooltips=${tooltipSpec}
>
</osl-map-layer>
</osl-glmap>
                   <osl-flex-box breakpoint="lg">
    <osl-download
      title="Download County Summary Data"
      filename="counties-summary"
      parameterSuffixes=${JSON.stringify(["state", "taxonomy"])}
      data="https://d36q6zt0rhsb35.cloudfront.net/data-query/65303b14fc2a290008152629"
    ></osl-download>
    <osl-download
      title="Download All Providers"
      filename="vision-providers"
      parameterSuffixes=${JSON.stringify(["state", "taxonomy"])}
      data="https://d36q6zt0rhsb35.cloudfront.net/data-query/65303831181b4500089e4fe6"
    ></osl-download></osl-flex-box> 
    </div>
</div>
<br/><br/><hr/><br/><br/>
</div>
<osl-data-table
title="Providers"
    maxw="200vw"
      data="https://d36q6zt0rhsb35.cloudfront.net/data-query/65303831181b4500089e4fe6"
      columns=${tableColumns}
      pagination="true"
    ></osl-data-table>
  `;
};
