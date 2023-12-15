import { template as html } from "../../utils/templateFunction";

import { raw311, walkAudits, lineData, filterRow, specificComplaintOptions, keyStatBlock } from "./CSDUtils";

export const CirculateSanDiego2 = () => {
  return html`<div style="height:auto; width:100%">
${filterRow({
  monthDataToFilter: [raw311, lineData],
  yearDataToFilter: [raw311, lineData],
  complatintOptionsToFilter: [raw311, specificComplaintOptions.url],
  serviceDetailOptionsToFilter: [raw311],
  zipcodeDataToFilter: [raw311, lineData, walkAudits],
  cpcodeDataToFilter: [raw311, lineData, walkAudits],
  districtDataToFilter: [raw311, lineData, walkAudits]
})}

<hr style="margin:2rem 0 1rem 0"/>
  ${keyStatBlock()}
<br/><br/>
<osl-eq-grid breakpoint="xl" style="height:80vh;">
  <div style="height:100%;width:100%;overflow-y:auto;">
    <div style="height:400vh;width:100%;">
      <osl-plot
        colorLegend="true" 
        data="${lineData}"
        marginRight="150"
        >
        <osl-line 
        x="date"
        y="count"
        fy="service_name"
        colorScheme="accent"
        direction="horizontal"
        ></osl-line>
      </osl-plot>
    </div>
  </div>
  <div style="height:100%;width:100%;">
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
          data="${raw311}"
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
        >
        </osl-map-layer>
      <osl-map-layer
          layer="circle"
          data="${walkAudits}"
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
  </osl-eq-grid>
</div>
<br/>
<hr/>
<br/>
<h3>311 Complaints table</h3>
<osl-data-table
  pagination="true"
  data="${raw311}"
  columns='["service_name", "service_name_detail", "public_description", "street_address", "date", "status"]'
></osl-data-table>
  <br/>
  <hr/>
  <br/>
  <h3>Walk Audits Table</h3>
<osl-data-table
  pagination="true"
  data="${walkAudits}"
  columns='["Name", "site", "Description"]'
></osl-data-table>
  `;
};
