import { html } from "lit";

import {
  complaints,
  dates,
  raw311,
  walkAudits,
  lineData,
} from "./CSDUtils"

export const CirculateSanDiego2 = () => {
  return html`<div style="height:auto; width:100%">
  <osl-flex-box breakpoint="md">

<osl-select-control
    data=${JSON.stringify([raw311])}
    option="month"
    options=${JSON.stringify(dates)}
    title="311 Complaints Month"
    initialValue="2023-01"
  ></osl-select-control>
<osl-select-control
    data=${JSON.stringify([raw311])}
    option="service"
    options=${JSON.stringify(complaints)}
    title="311 Complaints Type"
    initialValue="*"
  ></osl-select-control>
</osl-flex-box>
  <br/><br/>
    <osl-flex-box breakpoint="xl">
    <div style="height:80vh;width:50%;flex-grow:0;overflow-y:auto">
    <div style="height:400vh;width:100%">

    <osl-plot
colorLegend="true" 
data=${lineData}
marginRight="150"
>
<osl-line 
x="date"
y="count"
fy="service_name"
colorScheme="accent"
direction="horizontal"
></osl-line>
</osl-plot></div>
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
          circleRadius="30"
          dataColumn="service_name"
          pointRadiusMaxPixels="10"
          pointRadiusMinPixels="2"
        >
        </osl-map-layer>
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
          circleRadius="30"
          dataColumn="site"
          pointRadiusMaxPixels="10"
          pointRadiusMinPixels="2"
        >
        </osl-map-layer>


        
</osl-glmap>
</osl-flex-box>
    </div>
  </div>
  <br/>
  <hr/>
  <br/>
  <h3>311 Complaints table</h3>
<osl-data-table
  pagination="true"
  data=${raw311}
  columns='["service_name", "service_name_detail", "public_description", "street_address", "date", "status"]'
></osl-data-table>
  <br/>
  <hr/>
  <br/>
  <h3>Walk Audits Table</h3>
<osl-data-table
  pagination="true"
  data=${walkAudits}
  columns='["Name", "site", "Description"]'
></osl-data-table>
  `;
};
