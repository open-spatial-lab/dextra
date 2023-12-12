import { html } from "lit"
import { allDatasets, congressionalDistrictData, countyData, dateOptionList, mapDatasets, providerLocations, stateAssemblyData, stateSenateData, tractData } from "./WisconsinUtils"
import { getRenderString } from "../utils"

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
          ${makeLayers(countyData, 'NAMELSAD')}
        </div>
        
        <div data-tab="Census Tract" style="width:100%; height:80vh">
          ${makeLayers(tractData, 'GEOID')}
        </div>
        
        <div data-tab="State Senate" style="width:100%; height:80vh">
          ${makeLayers(stateSenateData, 'SEN2021')}
        </div>
        
        <div data-tab="State Assembly" style="width:100%; height:80vh">
          ${makeLayers(stateAssemblyData, 'ASM2021')}
        </div>
        
        <div data-tab="Congressional Districts" style="width:100%; height:80vh">
          ${makeLayers(congressionalDistrictData, 'DISTRICT')}
        </div>
        
  </div>
</main>
  
  `
}

const makeLayers = (data: string, idCol: string, asString: boolean = false) => {
  const elements = html`
    
    <osl-glmap
              mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
              legendPosition="bottom-left"
              showSingleLayer="true"
            >
            <osl-map-layer
              staticStroke="[255,255,255]"
              stroked="true"
              staticLineWidth="1"
              lineWidthUnits="pixels"
              legendTitle="Childcare Capacity (LCC/CCC)"
              visible="true"
              data="${data}"
              geoType="WKB"
              geoColumn="geometry"
              dataColumn="Capacity"
              type="continuous"
              bins="5"
              colorScheme="YlGn"
              beforeId="water"
              method="QNT"
              geoId="${idCol}"
              ></osl-map-layer>
            <osl-map-layer
              staticStroke="[255,255,255]"
              stroked="true"
              staticLineWidth="1"
              lineWidthUnits="pixels"
              legendTitle="Childcare Counts Funding"
              attribution="Wisconsin Childcare Counts"
              visible="false"
              data="${data}"
              geoType="WKB"
              geoColumn="geometry"
              dataColumn="Payment Amount"
              type="continuous"
              bins="5"
              colorScheme="GnBu"
              beforeId="water"
              method="QNT"
              geoId="${idCol}"
              ></osl-map-layer>
            <osl-map-layer
              staticStroke="[255,255,255]"
              stroked="true"
              staticLineWidth="1"
              lineWidthUnits="pixels"
              legendTitle="Enrollment"
              visible="false"
              data="${data}"
              geoType="WKB"
              geoColumn="geometry"
              dataColumn="Enrollment"
              type="continuous"
              bins="5"
              colorScheme="BuGn"
              beforeId="water"
              method="QNT"
              geoId="${idCol}"
              ></osl-map-layer>
            <osl-map-layer
              staticStroke="[255,255,255]"
              stroked="true"
              staticLineWidth="1"
              lineWidthUnits="pixels"
              legendTitle="Count of Providers"
              visible="false"
              data="${data}"
              geoType="WKB"
              geoColumn="geometry"
              dataColumn="count"
              type="continuous"
              bins="5"
              colorScheme="BuGn"
              beforeId="water"
              method="QNT"
              geoId="${idCol}"
              ></osl-map-layer>
            <osl-map-layer
              staticStroke="[255,255,255]"
              stroked="true"
              staticLineWidth="1"
              lineWidthUnits="pixels"
              legendTitle="Children with All Parent(s) Working"
              attribution="American Community Survey 5-Year Estimates 2021"
              visible="false"
              data="${data}"
              geoType="WKB"
              geoColumn="geometry"
              dataColumn="children_with_parents_working"
              type="continuous"
              bins="5"
              colorScheme="PuRd"
              beforeId="water"
              method="QNT"
              geoId="${idCol}"
              ></osl-map-layer>
            <osl-map-layer
              staticStroke="[255,255,255]"
              stroked="true"
              staticLineWidth="1"
              lineWidthUnits="pixels"
              legendTitle="Capacity Percent Coverage (Capacity/Children with All Parent(s) Working)"
              visible="false"
              data="${data}"
              attribution="American Community Survey 5-Year Estimates 2021"
              geoType="WKB"
              labelFormat="percent"
              geoColumn="geometry"
              dataColumn="capacity_over_children"
              type="continuous"
              bins="5"
              colorScheme="YlGnBu"
              beforeId="water"
              method="QNT"
              geoId="${idCol}"
              ></osl-map-layer>
            <osl-map-layer
              staticStroke="[255,255,255]"
              stroked="true"
              staticLineWidth="1"
              lineWidthUnits="pixels"
              legendTitle="Total Population"
              attribution="American Community Survey 5-Year Estimates 2021"
              visible="false"
              data="${data}"
              geoType="WKB"
              geoColumn="geometry"
              dataColumn="Total Population"
              type="continuous"
              bins="5"
              colorScheme="Purples"
              beforeId="water"
              method="QNT"
              geoId="${idCol}"
              ></osl-map-layer>
            <osl-map-layer
              staticStroke="[255,255,255]"
              stroked="true"
              staticLineWidth="1"
              lineWidthUnits="pixels"
              attribution="American Community Survey 5-Year Estimates 2021"
              visible="false"
              data="${data}"
              geoType="WKB"
              labelFormat="currency:usd"
              geoColumn="geometry"
              dataColumn="Median Household Income (In 2021 Inflation Adjusted Dollars)"
              type="continuous"
              bins="5"
              colorScheme="Purples"
              beforeId="water"
              method="QNT"
              geoId="${idCol}"
              ></osl-map-layer>
            <osl-map-layer
              staticStroke="[255,255,255]"
              stroked="true"
              staticLineWidth="1"
              lineWidthUnits="pixels"
              legendTitle="Percent of people over 16 unemployed"
              attribution="American Community Survey 5-Year Estimates 2021"
              visible="false"
              data="${data}"
              geoType="WKB"
              labelFormat="percent"
              geoColumn="geometry"
              dataColumn="Unemployment Pct"
              type="continuous"
              bins="5"
              colorScheme="YlOrRd"
              beforeId="water"
              method="QNT"
              geoId="${idCol}"
              ></osl-map-layer>
            <osl-map-layer
              staticStroke="[255,255,255]"
              stroked="true"
              staticLineWidth="1"
              lineWidthUnits="pixels"
              legendTitle="Percent of people over 25 with less than a High School Diploma"
              attribution="American Community Survey 5-Year Estimates 2021"
              visible="false"
              data="${data}"
              geoType="WKB"
              labelFormat="percent"
              geoColumn="geometry"
              dataColumn="Pct Less Than Hs"
              type="continuous"
              bins="5"
              colorScheme="RdPu"
              beforeId="water"
              method="QNT"
              geoId="${idCol}"
              ></osl-map-layer>
              
            <osl-map-layer
              staticStroke="[255,255,255]"
              stroked="true"
              staticLineWidth="1"
              lineWidthUnits="pixels"
              legendTitle="Provider Locations"
              visible="true"
              fixed="true"
              data="${providerLocations}"
              geoType="WKB"
              geoColumn="geometry"
              staticRadius="100"
              geoId="ADDRESS"
              type="static"
              staticFill="[0,0,0]"
              layer="point"
              pointRadiusScale="2"
              pointRadiusMinPixels="1"
              pointRadiusMaxPixels="20"

              ></osl-map-layer>
              
    </osl-glmap>
  `
  return asString ? getRenderString(elements) : elements
}