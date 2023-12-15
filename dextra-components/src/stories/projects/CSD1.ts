import { template as html } from "../../utils/templateFunction";

import {
  raw311,
  walkAudits,
  specificComplaintOptions,
  filterRow,
  keyStatBlock,
} from "./CSDUtils";

export const CirculateSanDiego = () => {
  return html`
  <div style="position:relative;height:fit-content;">
  <div>
${filterRow({
  monthDataToFilter: [raw311],
  yearDataToFilter: [raw311],
  complatintOptionsToFilter: [raw311, specificComplaintOptions.url],
  serviceDetailOptionsToFilter: [raw311],
  zipcodeDataToFilter: [raw311, walkAudits],
  cpcodeDataToFilter: [raw311, walkAudits],
  districtDataToFilter: [raw311, walkAudits],
})}
</div>
<hr style="margin:2rem 0 1rem 0"/>
  ${keyStatBlock()}
  </div>
  <osl-eq-grid breakpoint="xl" style="position:relative">
    <div style="height:80vh">
      <osl-glmap 
        mapGroup="1"
        mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json" 
        legendPosition="top-left" 
        showNavigation='true'
        center="[-117.2,32.7]"
        zoom="11"
        multipleSelect
        >
        <osl-map-layer
          layer="circle"
          data=${walkAudits}
          geoColumn="geometry"
          type="categorical"
          staticColor="[255,0,0]"
          geoType="WKB"
          legendtitle="Walk Audits"
          visible="true"
          colorscheme="d3-sinebow"
          staticRadius="30"
          dataColumn="site"
          pointRadiusMaxPixels="10"
          pointRadiusMinPixels="2"
        >
        </osl-map-layer>
      </osl-glmap>
    </div>
    <div style="height:80vh">
      <osl-glmap 
        mapGroup="1"
        mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json" 
        legendPosition="top-left" 
        showNavigation='true'
        center="[-117.2,32.7]"
        zoom="11"
        >

<osl-map-layer
          layer="circle"
          data=${raw311}
          geoColumn="geometry"
          type="categorical"
          staticColor="[255,0,0]"
          geoType="WKB"
          legendtitle="311 Complaints by Type"
          visible="true"
          colorscheme="d3-turbo"
          staticRadius="30"
          dataColumn="service_name"
          pointRadiusMaxPixels="10"
          pointRadiusMinPixels="2"
          multipleSelect
        >
        </osl-map-layer>

        
</osl-glmap>
</osl-eq-grid>
  `;
};
