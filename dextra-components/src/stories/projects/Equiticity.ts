import { html } from "lit";
import {
  dates,
  communityAreas,
  summary,
  geo,
  redLightDot,
  speedDot,
} from "./EquiticityUtils";

export const Equiticity = () => {
  return html`
<sp-theme>
  <div>
    <div style="display:flex;flex-direction:row; gap:1rem;">
    <h1>Transit Equity Explorer</h1>
    <osl-select-control
      data=${JSON.stringify([summary])}
      option="community"
      options=${JSON.stringify(communityAreas)}
      title="Select a Community Area"
      initialValue="43"
    ></osl-select-control>
    <osl-select-control
      data=${JSON.stringify([summary, geo, speedDot, redLightDot])}
      option="date"
      options=${JSON.stringify(dates)}
      title="Choose a date"
      initialValue="2023-09"
    ></osl-select-control>
    </div>
  </div>  
  <osl-flex-box breakpoint="md">
    <div style="max-width: calc(50% - 20px); padding-right: 20px">
      <p>
      </p>
    </div>
    <div style="max-width:50%">
      <p>
      </p>
    </div>  
  </osl-flex-box>
  <p style="font-size:0.75rem">
  </p>
</sp-theme>

<osl-flex-box
      breakpoint="sm"
    >
      <osl-stat
        title="Crashes"
        property="Crashes"
        data='https://d14xp4vykd1up4.cloudfront.net/data-query/6531dde2f46b22000893d375'
      >
      </osl-stat>
      <osl-stat
        title="Injuries from Crashes"
        property="Injuries"
        data='https://d14xp4vykd1up4.cloudfront.net/data-query/6531dde2f46b22000893d375'
      >
      </osl-stat>
      <osl-stat
        title="Fatalities from Crashes"
        property="Fatalities"
        data='https://d14xp4vykd1up4.cloudfront.net/data-query/6531dde2f46b22000893d375'
      >
      </osl-stat>
      <osl-stat
        title="Speed Camera Tickets"
        property="Speed Camera Violations"
        data='https://d14xp4vykd1up4.cloudfront.net/data-query/6531dde2f46b22000893d375'
      >
      </osl-stat>
      <osl-stat
        title="Right Light tickets"
        property="Red Light Violations"
        data='https://d14xp4vykd1up4.cloudfront.net/data-query/6531dde2f46b22000893d375'
      >
      </osl-stat>
    </osl-flex-box>
<br/>
<hr/>
<br/>
<div style="display:flex;flex-direction:row;gap:1rem;">
  <div style="height: 70vh; width: 50%; position:relative;">
    <osl-glmap 
      mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json" 
      legendPosition="top-left" 
      showNavigation='true'
    mapGroup="1"
      >

      <osl-map-layer 
 legendTitle="Red Light Tickets" 
 visible='false' 
 geoType="GeoJSON" 
 geoColumn="geometry" 
 dataColumn="Red Light Violations"
 type="continuous" 
 bins='5' 
 colorScheme="RdPu" 
 filled='true' 
 attribution="IDOT Crash Data" 
 layer="polygon" 
 beforeId="water" 
 method="QNT" 
 geoId="community" 
 stroked='true' 
 data="https://d14xp4vykd1up4.cloudfront.net/data-query/653267d6e26896000848fc3e"
>
</osl-map-layer>
      <osl-map-layer 
 legendTitle="Speed Tickets" 
 visible='true' 
 geoType="GeoJSON" 
 geoColumn="geometry" 
 dataColumn="Speed Camera Violations"
 type="continuous" 
 bins='5' 
 colorScheme="OrRd" 
 filled='true' 
 attribution="IDOT Crash Data" 
 layer="polygon" 
 beforeId="water" 
 method="JNK" 
 geoId="community" 
 stroked='true' 
 data="https://d14xp4vykd1up4.cloudfront.net/data-query/653267d6e26896000848fc3e"
>
</osl-map-layer>
      <osl-map-layer 
 legendTitle="Crashes" 
 visible='false' 
 geoType="GeoJSON" 
 geoColumn="geometry" 
 dataColumn="Crashes"
 type="continuous" 
 bins='5' 
 colorScheme="d3-viridis" 
 filled='true' 
 attribution="IDOT Crash Data" 
 layer="polygon" 
 beforeId="water" 
 method="QNT" 
 geoId="community" 
 stroked='true' 
 data="https://d14xp4vykd1up4.cloudfront.net/data-query/653267d6e26896000848fc3e"
>
</osl-map-layer>
      <osl-map-layer 
 legendTitle="Injuries from Crashes" 
 visible='false' 
 geoType="GeoJSON" 
 geoColumn="geometry" 
 dataColumn="injuries"
 type="continuous" 
 bins='5' 
 colorScheme="d3-magma" 
 filled='true' 
 attribution="IDOT Crash Data" 
 layer="polygon" 
 beforeId="water" 
 method="QNT" 
 geoId="community" 
 stroked='true' 
 data="https://d14xp4vykd1up4.cloudfront.net/data-query/653267d6e26896000848fc3e"
>
</osl-map-layer>
      <osl-map-layer 
 legendTitle="Fatalities from Crashes" 
 visible='false' 
 geoType="GeoJSON" 
 geoColumn="geometry" 
 dataColumn="fatalities"
 type="continuous" 
 bins='5' 
 colorScheme="OrRd" 
 filled='true' 
 attribution="IDOT Crash Data" 
 layer="polygon" 
 beforeId="water" 
 method="QNT" 
 geoId="community" 
 stroked='true' 
 data="https://d14xp4vykd1up4.cloudfront.net/data-query/653267d6e26896000848fc3e"
>
</osl-map-layer>        
</osl-glmap>
  </div>

  <div style="height: 70vh; width: 50%; position:relative;">
    <osl-glmap 
    mapGroup="1"
      mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json" 
      legendPosition="top-left" 
      showNavigation='true'
      >

<osl-map-layer
          layer="circle"
          data="https://d14xp4vykd1up4.cloudfront.net/data-query/6532789178d66b0009321d78"
          geoColumn="geometry"
          geoType="WKB"
          dataColumn="violations"
          legendtitle="Red Light Camera Locations and Violations"
          visible="false"
        >
        </osl-map-layer>
<osl-map-layer
          layer="circle"
          data="https://d14xp4vykd1up4.cloudfront.net/data-query/653289411fc91e0008ec7996"
          geoColumn="geometry"
          geoType="WKB"
          circleRadius="5"
          radiusUnits="pixels"
          fixedRadius="true"
          pointRadiusMaxPixels="5"
          dataColumn="violations"
          legendtitle="Speed Camera Locations and Violations"
          visible="true"
        >
        </osl-map-layer>

        
</osl-glmap>
  </div>
</div>
<br/><br/><hr/><br/><br/>
</div>
`;
};
