import { template as html } from "../../utils/templateFunction";

import { months, years, complaints, raw311, walkAudits } from "./CSDUtils";

export const CirculateSanDiego = () => {
  let dates: string[] = [];
  years.forEach((year) => {
    months.forEach((month) => {
      dates.push(`${year}-${month}`);
    });
  });

  return html`
<div style="height:auto; width:100%">
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

        
</osl-glmap>
</osl-flex-box>
    </div>
  </div>
  `;
};
