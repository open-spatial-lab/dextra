import { template as html } from "../../utils/templateFunction";
import { makeLayers } from "./WisconsinComponents";
import {
  congressionalDistrictData,
  countyData,
  dateOptionList,
  mapDatasets,
  stateAssemblyData,
  stateSenateData,
  tractData,
} from "./WisconsinUtils";

export const WisconsinMaps = () => {
  // filters for star level 1,2,3,4,5
  // month filter for availble dates
  // OSL tabs for tabs: Tract, County, Zip Code, State Senate, State Assembly and Congressional District
  // in each, put a osl-map
  return html`
<main>
  <div style="display:flex;flex-direction:column;gap:1rem;">
    <h1>Wisconsin Child Care Map Views</h1>
    <div>
      <div>
        <osl-select-control data=${mapDatasets}
        optionsData=${dateOptionList}
        optionsDataValueColumn="Date"
        initialValue="2023-09"
        option="date"
        title="Select Month"
        >
        </osl-select-control>
    </div>
    <div>
      <osl-select-control data=${mapDatasets}
        options=${JSON.stringify(["*", "1", "2", "3", "4", "5"])}
        initialValue="*"
        option="rating"
        title="Select Star Rating(s)"
        multipleSelect="true"
      >
      </osl-select-control>
    </div>
    </div>
    <div>
      <osl-tabs>
        <div data-tab="County" style="width:100%; height:80vh">
          ${makeLayers(countyData, "NAMELSAD")}
        </div>
        
        <div data-tab="Census Tract" style="width:100%; height:80vh">
          ${makeLayers(tractData, "GEOID")}
        </div>
        
        <div data-tab="State Senate" style="width:100%; height:80vh">
          ${makeLayers(stateSenateData, "SEN2021")}
        </div>
        
        <div data-tab="State Assembly" style="width:100%; height:80vh">
          ${makeLayers(stateAssemblyData, "ASM2021")}
        </div>
        
        <div data-tab="Congressional Districts" style="width:100%; height:80vh">
          ${makeLayers(congressionalDistrictData, "DISTRICT")}
        </div>
        
  </div>
</main>
  
  `;
};
