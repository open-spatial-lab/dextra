import { html } from "lit-html";
import {
  dates,
  allDatasets,
  allAndLineDataset,
  congressionalDistricts,
} from "./WisconsinUtils";

export const Wisconsin = () => {
  // <sp-help-text>Star Rating</sp-help-text>
  // <osl-select-control
  // data=${allDatasets}
  // options=${JSON.stringify(starOptions)}
  // option="star"
  // initialValue="*"
  // >
  // </osl-select-control>
  return html`
  <div style="display:flex;flex-direction:row;gap:1rem;">
  <div style="display:flex;flex-direction:column">
  <div>
  <osl-flex-box breakpoint="md">
  <sp-help-text>Open On</sp-help-text>
  <osl-select-control
data=${allDatasets}
options=${JSON.stringify(dates)}
option="open_on"
initialValue="2021-03"
>
</osl-select-control></div>
<div>
<sp-help-text>Closed on</sp-help-text>
  <osl-select-control
data=${allDatasets}
options=${JSON.stringify(dates)}
option="closed_on"
initialValue="2023-09"
>
</osl-select-control>
<sp-help-text>Congressional District</sp-help-text>
  <osl-select-control
data=${allAndLineDataset}
options=${JSON.stringify(congressionalDistricts)}
option="congressional_district"
initialValue="*"
>
</osl-select-control>


</osl-flex-box>
</div>
</div><div style="flex-grow:1;width:100%">

<osl-flex-box
      breakpoint="sm"
    >

    <osl-stat
        title="LCC Capacity Closed"
        property="LCC Total Capacity Lost"
        statSize="1rem"
        data="https://d27ouidsqnp6r.cloudfront.net/data-query/653bc5df7ac484000866bdd4"
      >
      </osl-stat>
      <osl-stat
        title="Count of LCC Providers Closed"
        property="LCC Count of Providers Closings"
        statSize="1rem"
        data="https://d27ouidsqnp6r.cloudfront.net/data-query/653bc5df7ac484000866bdd4"
      >
      </osl-stat>
    <osl-stat
        title="CCC Capacity Closed"
        property="CCC Total Capacity Lost"
        statSize="1rem"
        data="https://d27ouidsqnp6r.cloudfront.net/data-query/653bc7487ac484000866bdd5"
      >
      </osl-stat>
      <osl-stat
        title="Count of CCC Providers Closed"
        property="CCC Count of Providers Closings"
        statSize="1rem"
        data="https://d27ouidsqnp6r.cloudfront.net/data-query/653bc7487ac484000866bdd5"
      >
      </osl-stat>
    </osl-flex-box>
<div style="height: 60vh; width: 100%;">

<osl-plot
colorLegend="true" 
data="https://d27ouidsqnp6r.cloudfront.net/data-query/653b1772972e0e0008812306"    
>
<osl-line 
x="Date"
y="total_capacity"
direction="horizontal"
></osl-line>
</osl-plot>
</div>
<hr/>
  <div style="height:80vh; width:100%">
  <osl-flex-box breakpoint="md">
  <h3>Closed during this period</h3>

  <osl-download
      title="Download Providers Data"
      filename="closed-summary"
      tsv
      parameterSuffixes=${JSON.stringify(["open_on", "closed_on"])}
      data="https://d27ouidsqnp6r.cloudfront.net/data-query/653baba66c4cd800085af0b2"
    ></osl-download>
  </osl-flex-box>
  <osl-data-table
      data="https://d27ouidsqnp6r.cloudfront.net/data-query/653baba66c4cd800085af0b2"
      columns='["Provider Number","ADDRESS", "CITY", "ZIP", "Capacity", "Application Type", "Star Level ", "CONGRESSIONAL_DISTRICT", "ASM2021", "SENATE_DISTRICT", "GEOID"]'
      pagination="true"
    ></osl-data-table>
    
  <div>
</div></div>`;
};
