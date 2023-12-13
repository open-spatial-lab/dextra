import { template as html } from "../../utils/templateFunction";

import {
  tractJoined,
  complaints,
  walkAuditNames,
  dates,
} from "./CSDUtils"

export const CirculateSanDiego3 = () => {
  return html`<div style="height:auto; width:100%">
  <osl-flex-box breakpoint="md">

<osl-select-control
    data=${JSON.stringify([tractJoined])}
    option="month"
    options=${JSON.stringify(dates)}
    title="311 Complaints Month"
    initialValue="2023-01"
  ></osl-select-control>
<osl-select-control
    data=${JSON.stringify([tractJoined])}
    option="service"
    options=${JSON.stringify(complaints)}
    title="311 Complaints Type"
    initialValue="Sidewalk Repair Issue"
  ></osl-select-control>
<osl-select-control
    data=${JSON.stringify([tractJoined])}
    option="walkaudit_name"
    options=${JSON.stringify(walkAuditNames)}
    title="Walk Audit Issue Type"
    initialValue=${walkAuditNames[0]}
  ></osl-select-control>
</osl-flex-box>
  <br/><br/>
  <div style="position:relative;width:100%;display:flex;flex-direcion:row;">
  <div style="display:inline;width:100%;height:40vh">

  <osl-glmap 

      center="[-117.2,32.7]"
      zoom="11"
      mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json" 
      legendPosition="top-left" 
      showNavigation='true'
    mapGroup="1"
      >

      <osl-map-layer 
 legendTitle="Walk Audit Counts" 
 visible='true' 
 geoType="WKB" 
 geoColumn="geometry" 
 dataColumn="Walk Audit Count"
 type="continuous" 
 bins='5' 
 colorScheme="RdPu" 
 filled='true' 
 layer="polygon" 
 beforeId="water" 
 method="QNT" 
 geoId="GEOID" 
 stroked='true' 
 data=${tractJoined}
>
</osl-map-layer></div>
  <div style="display:inline;width:100%;height:40vh">

  <osl-glmap 

      center="[-117.2,32.7]"
      zoom="11"
      mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json" 
      legendPosition="top-left" 
      showNavigation='true'
    mapGroup="1"
      >

      <osl-map-layer 
 legendTitle="311 Counts" 
 visible='true' 
 geoType="WKB" 
 geoColumn="geometry" 
 dataColumn="311 Service Count"
 type="continuous" 
 bins='5' 
 colorScheme="d3-magma" 
 filled='true' 
 layer="polygon" 
 beforeId="water" 
 method="QNT" 
 geoId="GEOID" 
 stroked='true' 
 data=${tractJoined}
>
</osl-map-layer>

</div>
</div>
  <div style="position:relative;width:100%;display:flex;flex-direcion:row;">
  <div style="display:inline;width:100%;height:40vh">

  <osl-glmap 

      center="[-117.2,32.7]"
      zoom="11"
      mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json" 
      legendPosition="top-left" 
      showNavigation='true'
    mapGroup="1"
      >

      <osl-map-layer 
 legendTitle="Population" 
 visible='true' 
 geoType="WKB" 
 geoColumn="geometry" 
 dataColumn="Population"
 type="continuous" 
 bins='5' 
 colorScheme="RdPu" 
 filled='true' 
 layer="polygon" 
 beforeId="water" 
 method="QNT" 
 geoId="GEOID" 
 stroked='true' 
 data=${tractJoined}
>
</osl-map-layer></div>
  <div style="display:inline;width:100%;height:40vh">

  <osl-glmap 

      center="[-117.2,32.7]"
      zoom="11"
      mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json" 
      legendPosition="top-left" 
      showNavigation='true'
    mapGroup="1"
      >

      <osl-map-layer 
 legendTitle="Median Income" 
 visible='true' 
 geoType="WKB" 
 geoColumn="geometry" 
 dataColumn="Median Income"
 type="continuous" 
 bins='5' 
 colorScheme="d3-viridis" 
 filled='true' 
 layer="polygon" 
 beforeId="water" 
 method="QNT" 
 geoId="GEOID" 
 stroked='true' 
 data=${tractJoined}
>
</osl-map-layer>

</div>
</div>
  `;
};
