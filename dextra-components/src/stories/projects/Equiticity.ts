import { html } from "lit";
import {
  summary,
  geo,
  redLightDot,
  speedDot,
  communityAreasJoinedData,
  CommunityAreaBoundaries,
  dateOptions,
  communityAreaOptions,
  communityAreaSummary,
  crashTypeOptions,
  crashHourOptions,
  zipData,
  zipSummary,
  tractData,
  tractSummary,
  tractOptions,
  zipOptions,
} from "./EquiticityUtils";

export const Equiticity = () => {
  return html`
<sp-theme>
  <div>
    <div style="display:flex;flex-direction:row; gap:1rem;">
    <h1>Transit Equity Explorer</h1>
    <osl-select-control
      data=${JSON.stringify([
        communityAreasJoinedData,
        communityAreaSummary,
        zipData,
        zipSummary,
        tractData,
        tractSummary,
        redLightDot,
        speedDot,
      ])}
      option="start"
      title="Start date"
      initialValue="*"
      optionsData=${dateOptions.url}
      optionsDataValueColumn=${dateOptions.valueCol}
    ></osl-select-control>
    <osl-select-control
      data=${JSON.stringify([
        communityAreasJoinedData,
        communityAreaSummary,
        zipData,
        zipSummary,
        tractData,
        tractSummary,
        redLightDot,
        speedDot,
      ])}
      option="end"
      optionsData=${dateOptions.url}
      optionsDataValueColumn=${dateOptions.valueCol}
      title="End date"
      initialValue="*"
    ></osl-select-control>
    <osl-select-control
      data=${JSON.stringify([
        communityAreasJoinedData,
        communityAreaSummary,
        zipData,
        zipSummary,
        tractData,
        tractSummary,
      ])}
      option="crashtype"
      optionsData=${crashTypeOptions.url}
      optionsDataValueColumn=${crashTypeOptions.valueCol}
      title="Crash Type"
      multipleSelect="true"
      initialValue="*"
    ></osl-select-control>
    <osl-select-control
      data=${JSON.stringify([
        communityAreasJoinedData,
        communityAreaSummary,
        redLightDot,
        speedDot,
      ])}
      option="crashhour"
      optionsData=${crashHourOptions.url}
      optionsDataValueColumn=${crashHourOptions.valueCol}
      title="Crash Hour"
      subTitle="Number is start of hour, (eg, 0 is midnight, 13 is 1pm)"
      multipleSelect="true"
      initialValue="*"
    ></osl-select-control>
    </div>
  </div>  
</sp-theme>
<osl-tabs>
  <div data-tab="Community Areas" style="height:80vh;width:100%;">
    <div>
      <osl-select-control
            data=${JSON.stringify([communityAreaSummary])}
            option="community"
            optionsData=${communityAreaOptions.url}
            optionsDataValueColumn=${communityAreaOptions.valueCol}
            optionsDataLabelColumn=${communityAreaOptions.labelCol}
            title="Select a Community Area"
            initialValue="43"
        ></osl-select-control>
    </div>
    <div style="padding:1rem 0;">
      <osl-eq-grid
          breakpoint="lg"
        >
      <osl-stat
        title="Crashes"
        property="CRASH_COUNT"
        data='${communityAreaSummary}'
      >
      </osl-stat>
      <osl-stat
        title="Injuries from Crashes"
        property="CRASH_INJURIES"
        data='${communityAreaSummary}'
      >
      </osl-stat>
      <osl-stat
        title="Fatalities from Crashes"
        property="CRASH_FATALITIES"
        data='${communityAreaSummary}'
      >
      </osl-stat>
      <osl-stat
        title="Speed Camera Tickets"
        property="SPEED_VIOLATIONS"
        data='${communityAreaSummary}'
      >
      </osl-stat>
      <osl-stat
        title="Right Light tickets"
        property="Red Light Violations"
        data='${communityAreaSummary}'
      >
      </osl-stat>
    </osl-eq-grid>
    </div>
    <osl-eq-grid breakpoint="lg">
      <div style="height:100%;width:100%">

      <osl-glmap 
      mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json" 
      legendPosition="top-left" 
      showNavigation='true'
      showSingleLayer='true'
    mapGroup="1"
      >
      <osl-map-layer 
        legendTitle="Red Light Tickets" 
        visible='false' 
        geoColumn="geometry" 
        dataColumn="Red Light Violations"
        type="continuous" 
        bins='5' 
        colorScheme="OrRd" 
        geoType="WKB"
        geoId="community"
        filled='true' 
        attribution="IDOT Crash Data" 
        beforeId="water" 
        method="QNT" 
        stroked='true' 
        data=${communityAreasJoinedData}
      >
      </osl-map-layer>     

      <osl-map-layer 
        legendTitle="Speed Tickets" 
        visible='true' 
        geoType="WKB" 
        geoColumn="geometry" 
        dataColumn="SPEED_VIOLATIONS"
        type="continuous" 
        bins='5' 
        colorScheme="RdPu" 
        filled='true' 
        attribution="IDOT Crash Data" 
        layer="polygon" 
        beforeId="water" 
        method="JNK" 
        geoId="community" 
        stroked='true' 
        data=${communityAreasJoinedData}
      >
      </osl-map-layer>
      <osl-map-layer 
        legendTitle="Crashes" 
        visible='false' 
        geoType="WKB" 
        geoColumn="geometry" 
        dataColumn="CRASH_COUNT"
        type="continuous" 
        bins='5' 
        colorScheme="PuRd" 
        filled='true' 
        attribution="IDOT Crash Data" 
        layer="polygon" 
        beforeId="water" 
        method="QNT" 
        geoId="community" 
        stroked='true' 
        data=${communityAreasJoinedData}
      >
      </osl-map-layer>
      <osl-map-layer 
        legendTitle="Injuries from Crashes" 
        visible='false' 
        geoType="WKB" 
        geoColumn="geometry" 
        dataColumn="CRASH_INJURIES"
        type="continuous" 
        bins='5' 
        colorScheme="YlOrRd" 
        filled='true' 
        attribution="IDOT Crash Data" 
        layer="polygon" 
        beforeId="water" 
        method="QNT" 
        geoId="community" 
        stroked='true' 
        data=${communityAreasJoinedData}
      >
      </osl-map-layer>
     <osl-map-layer 
      legendTitle="Fatalities from Crashes" 
      visible='false' 
      geoType="WKB" 
      geoColumn="geometry" 
      dataColumn="CRASH_FATALITIES"
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
      data=${communityAreasJoinedData}
    >
    </osl-map-layer>   
     <osl-map-layer 
      legendTitle="Percent Black or African American" 
      visible='false' 
      geoType="WKB" 
      geoColumn="geometry" 
      dataColumn="pct_black"
      labelFormat="percent"
      type="continuous" 
      bins='5' 
      colorScheme="GnBu" 
      filled='true' 
      attribution="CMAP" 
      layer="polygon" 
      beforeId="water" 
      method="QNT" 
      geoId="community" 
      stroked='true' 
      data=${communityAreasJoinedData}
    >
    </osl-map-layer>   
     <osl-map-layer 
      legendTitle="Percent Hispanic" 
      visible='false' 
      geoType="WKB" 
      geoColumn="geometry" 
      dataColumn="pct_hispanic"
      labelFormat="percent"
      type="continuous" 
      bins='5' 
      colorScheme="PuBu" 
      filled='true' 
      attribution="CMAP" 
      layer="polygon" 
      beforeId="water" 
      method="QNT" 
      geoId="community" 
      stroked='true' 
      data=${communityAreasJoinedData}
    >
    </osl-map-layer>   

    <osl-map-layer 
      legendTitle="Percent Walk or Bike to Work" 
      visible='false' 
      geoType="WKB" 
      geoColumn="geometry" 
      dataColumn="pct_walk_bike"
      labelFormat="percent"
      type="continuous" 
      bins='5' 
      colorScheme="PuBuGn" 
      filled='true' 
      attribution="CMAP" 
      layer="polygon" 
      beforeId="water" 
      method="QNT" 
      geoId="community" 
      stroked='true' 
      data=${communityAreasJoinedData}
    >
    </osl-map-layer>   
    <osl-map-layer 
      legendTitle="Median Income" 
      visible='false' 
      geoType="WKB" 
      geoColumn="geometry" 
      dataColumn="MEDINC"
      labelFormat="percent"
      type="continuous" 
      bins='5' 
      colorScheme="YlGn" 
      filled='true' 
      attribution="CMAP" 
      layer="polygon" 
      beforeId="water" 
      method="QNT" 
      geoId="community" 
      stroked='true' 
      data=${communityAreasJoinedData}
    >
    </osl-map-layer>   
    ${CommunityAreaBoundaries}
  </osl-glmap></div>

  <div style="height:100%;width:100%">

  <osl-glmap 
    mapGroup="1"
    mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json" 
    legendPosition="top-left" 
    showNavigation='true'
    >
    ${CommunityAreaBoundaries}
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
  </osl-eq-grid>
  </div>
</div>

<div data-tab="Census Tracts" style="height:80vh;width:100%;">
  <div>
    <osl-select-control
      data=${JSON.stringify([tractSummary])}
      option="tract"
      optionsData=${tractOptions.url}
      optionsDataValueColumn=${tractOptions.valueCol}
      title="Select a Census Tract"
      initialValue="17031839700"
    ></osl-select-control>
  </div>
    <div style="padding:1rem 0;">
      <osl-eq-grid
          breakpoint="lg"
        >
      <osl-stat
        title="Crashes"
        property="CRASH_COUNT"
        data='${tractSummary}'
      >
      </osl-stat>
      <osl-stat
        title="Injuries from Crashes"
        property="CRASH_INJURIES"
        data='${tractSummary}'
      >
      </osl-stat>
      <osl-stat
        title="Fatalities from Crashes"
        property="CRASH_FATALITIES"
        data='${tractSummary}'
      >
      </osl-stat>
      <osl-stat
        title="Speed Camera Tickets"
        property="SPEED VIOLATIONS"
        data='${tractSummary}'
      >
      </osl-stat>
      <osl-stat
        title="Right Light tickets"
        property="RED_LIGHT_VIOLATIONS"
        data='${tractSummary}'
      >
      </osl-stat>
    </osl-eq-grid>
    </div>
    <osl-eq-grid breakpoint="lg">
      <div style="height:100%;width:100%">

      <osl-glmap 
      mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json" 
      legendPosition="top-left" 
      showNavigation='true'
      showSingleLayer='true'
    mapGroup="1"
      >
      <osl-map-layer 
        legendTitle="Red Light Tickets" 
        visible='false' 
        geoColumn="geometry" 
        dataColumn="RED_LIGHT_VIOLATIONS"
        type="continuous" 
        bins='5' 
        colorScheme="OrRd" 
        geoType="WKB"
        geoId="community"
        filled='true' 
        attribution="IDOT Crash Data" 
        beforeId="water" 
        method="QNT" 
        stroked='true' 
        data=${tractData}
      >
      </osl-map-layer>     

      <osl-map-layer 
        legendTitle="Speed Tickets" 
        visible='true' 
        geoType="WKB" 
        geoColumn="geometry" 
        dataColumn="SPEED VIOLATIONS"
        type="continuous" 
        bins='5' 
        colorScheme="RdPu" 
        filled='true' 
        attribution="IDOT Crash Data" 
        layer="polygon" 
        beforeId="water" 
        method="JNK" 
        geoId="community" 
        stroked='true' 
        data=${tractData}
      >
      </osl-map-layer>
      <osl-map-layer 
        legendTitle="Crashes" 
        visible='false' 
        geoType="WKB" 
        geoColumn="geometry" 
        dataColumn="CRASH_COUNT"
        type="continuous" 
        bins='5' 
        colorScheme="PuRd" 
        filled='true' 
        attribution="IDOT Crash Data" 
        layer="polygon" 
        beforeId="water" 
        method="QNT" 
        geoId="community" 
        stroked='true' 
        data=${tractData}
      >
      </osl-map-layer>
      <osl-map-layer 
        legendTitle="Injuries from Crashes" 
        visible='false' 
        geoType="WKB" 
        geoColumn="geometry" 
        dataColumn="CRASH_INJURIES"
        type="continuous" 
        bins='5' 
        colorScheme="YlOrRd" 
        filled='true' 
        attribution="IDOT Crash Data" 
        layer="polygon" 
        beforeId="water" 
        method="QNT" 
        geoId="community" 
        stroked='true' 
        data=${tractData}
      >
      </osl-map-layer>
     <osl-map-layer 
      legendTitle="Fatalities from Crashes" 
      visible='false' 
      geoType="WKB" 
      geoColumn="geometry" 
      dataColumn="CRASH_FATALITIES"
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
      data=${tractData}
    >
    </osl-map-layer>   
     <osl-map-layer 
      legendTitle="Percent Black or African American" 
      visible='false' 
      geoType="WKB" 
      geoColumn="geometry" 
      dataColumn="pct_black"
      labelFormat="percent"
      type="continuous" 
      bins='5' 
      colorScheme="GnBu" 
      filled='true' 
      attribution="CMAP" 
      layer="polygon" 
      beforeId="water" 
      method="QNT" 
      geoId="community" 
      stroked='true' 
      data=${tractData}
    >
    </osl-map-layer>   
     <osl-map-layer 
      legendTitle="Percent Hispanic" 
      visible='false' 
      geoType="WKB" 
      geoColumn="geometry" 
      dataColumn="pct_hispanic"
      labelFormat="percent"
      type="continuous" 
      bins='5' 
      colorScheme="PuBu" 
      filled='true' 
      attribution="CMAP" 
      layer="polygon" 
      beforeId="water" 
      method="QNT" 
      geoId="community" 
      stroked='true' 
      data=${tractData}
    >
    </osl-map-layer>   

    <osl-map-layer 
      legendTitle="Percent Walk or Bike to Work" 
      visible='false' 
      geoType="WKB" 
      geoColumn="geometry" 
      dataColumn="pct_walk_bike"
      labelFormat="percent"
      type="continuous" 
      bins='5' 
      colorScheme="PuBuGn" 
      filled='true' 
      attribution="CMAP" 
      layer="polygon" 
      beforeId="water" 
      method="QNT" 
      geoId="community" 
      stroked='true' 
      data=${tractData}
    >
    </osl-map-layer>   
    <osl-map-layer 
      legendTitle="Median Income" 
      visible='false' 
      geoType="WKB" 
      geoColumn="geometry" 
      dataColumn="median hh income"
      labelFormat="percent"
      type="continuous" 
      bins='5' 
      colorScheme="YlGn" 
      filled='true' 
      attribution="CMAP" 
      layer="polygon" 
      beforeId="water" 
      method="QNT" 
      geoId="community" 
      stroked='true' 
      data=${tractData}
    >
    </osl-map-layer>   
    ${CommunityAreaBoundaries}
  </osl-glmap></div>

  <div style="height:100%;width:100%">

  <osl-glmap 
    mapGroup="1"
    mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json" 
    legendPosition="top-left" 
    showNavigation='true'
    >
    ${CommunityAreaBoundaries}
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
  </osl-eq-grid>
  </div>
</div>
</div>

<div data-tab="Zip Codes" style="height:80vh;width:100%;">
  <div>
    <osl-select-control
      data=${JSON.stringify([zipSummary])}
      option="zip"
      optionsData=${zipOptions.url}
      optionsDataValueColumn=${zipOptions.valueCol}
      title="Select a Zip Code"
      initialValue="60640"
    ></osl-select-control>
  </div>
    <div style="padding:1rem 0;">
      <osl-eq-grid
          breakpoint="lg"
        >
      <osl-stat
        title="Crashes"
        property="CRASH_COUNT"
        data='${zipSummary}'
      >
      </osl-stat>
      <osl-stat
        title="Injuries from Crashes"
        property="CRASH_INJURIES"
        data='${zipSummary}'
      >
      </osl-stat>
      <osl-stat
        title="Fatalities from Crashes"
        property="CRASH_FATALITIES"
        data='${zipSummary}'
      >
      </osl-stat>
      <osl-stat
        title="Speed Camera Tickets"
        property="SPEEDVIOLATIONS"
        data='${zipSummary}'
      >
      </osl-stat>
      <osl-stat
        title="Right Light tickets"
        property="Red Light Violations"
        data='${zipSummary}'
      >
      </osl-stat>
    </osl-eq-grid>
    </div>
    <osl-eq-grid breakpoint="lg">
      <div style="height:100%;width:100%">

      <osl-glmap 
      mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json" 
      legendPosition="top-left" 
      showNavigation='true'
      showSingleLayer='true'
    mapGroup="1"
      >
      <osl-map-layer 
        legendTitle="Red Light Tickets" 
        visible='false' 
        geoColumn="geometry" 
        dataColumn="Red Light Violations"
        type="continuous" 
        bins='5' 
        colorScheme="OrRd" 
        geoType="WKB"
        geoId="community"
        filled='true' 
        attribution="IDOT Crash Data" 
        beforeId="water" 
        method="QNT" 
        stroked='true' 
        data=${zipData}
      >
      </osl-map-layer>     

      <osl-map-layer 
        legendTitle="Speed Tickets" 
        visible='true' 
        geoType="WKB" 
        geoColumn="geometry" 
        dataColumn="SPEED_VIOLATIONS"
        type="continuous" 
        bins='5' 
        colorScheme="RdPu" 
        filled='true' 
        attribution="IDOT Crash Data" 
        layer="polygon" 
        beforeId="water" 
        method="JNK" 
        geoId="community" 
        stroked='true' 
        data=${zipData}
      >
      </osl-map-layer>
      <osl-map-layer 
        legendTitle="Crashes" 
        visible='false' 
        geoType="WKB" 
        geoColumn="geometry" 
        dataColumn="CRASH_COUNT"
        type="continuous" 
        bins='5' 
        colorScheme="PuRd" 
        filled='true' 
        attribution="IDOT Crash Data" 
        layer="polygon" 
        beforeId="water" 
        method="QNT" 
        geoId="community" 
        stroked='true' 
        data=${zipData}
      >
      </osl-map-layer>
      <osl-map-layer 
        legendTitle="Injuries from Crashes" 
        visible='false' 
        geoType="WKB" 
        geoColumn="geometry" 
        dataColumn="CRASH_INJURIES"
        type="continuous" 
        bins='5' 
        colorScheme="YlOrRd" 
        filled='true' 
        attribution="IDOT Crash Data" 
        layer="polygon" 
        beforeId="water" 
        method="QNT" 
        geoId="community" 
        stroked='true' 
        data=${zipData}
      >
      </osl-map-layer>
     <osl-map-layer 
      legendTitle="Fatalities from Crashes" 
      visible='false' 
      geoType="WKB" 
      geoColumn="geometry" 
      dataColumn="CRASH_FATALITIES"
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
      data=${zipData}
    >
    </osl-map-layer>   
     <osl-map-layer 
      legendTitle="Percent Black or African American" 
      visible='false' 
      geoType="WKB" 
      geoColumn="geometry" 
      dataColumn="pct_black"
      labelFormat="percent"
      type="continuous" 
      bins='5' 
      colorScheme="GnBu" 
      filled='true' 
      attribution="CMAP" 
      layer="polygon" 
      beforeId="water" 
      method="QNT" 
      geoId="community" 
      stroked='true' 
      data=${zipData}
    >
    </osl-map-layer>   
     <osl-map-layer 
      legendTitle="Percent Hispanic" 
      visible='false' 
      geoType="WKB" 
      geoColumn="geometry" 
      dataColumn="pct_hispanic"
      labelFormat="percent"
      type="continuous" 
      bins='5' 
      colorScheme="PuBu" 
      filled='true' 
      attribution="CMAP" 
      layer="polygon" 
      beforeId="water" 
      method="QNT" 
      geoId="community" 
      stroked='true' 
      data=${zipData}
    >
    </osl-map-layer>   

    <osl-map-layer 
      legendTitle="Percent Walk or Bike to Work" 
      visible='false' 
      geoType="WKB" 
      geoColumn="geometry" 
      dataColumn="pct_walk_bike"
      labelFormat="percent"
      type="continuous" 
      bins='5' 
      colorScheme="PuBuGn" 
      filled='true' 
      attribution="CMAP" 
      layer="polygon" 
      beforeId="water" 
      method="QNT" 
      geoId="community" 
      stroked='true' 
      data=${zipData}
    >
    </osl-map-layer>   
    <osl-map-layer 
      legendTitle="Median Income" 
      visible='false' 
      geoType="WKB" 
      geoColumn="geometry" 
      dataColumn="median hh income"
      labelFormat="percent"
      type="continuous" 
      bins='5' 
      colorScheme="YlGn" 
      filled='true' 
      attribution="CMAP" 
      layer="polygon" 
      beforeId="water" 
      method="QNT" 
      geoId="community" 
      stroked='true' 
      data=${zipData}
    >
    </osl-map-layer>   
    ${CommunityAreaBoundaries}
  </osl-glmap></div>

  <div style="height:100%;width:100%">

  <osl-glmap 
    mapGroup="1"
    mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json" 
    legendPosition="top-left" 
    showNavigation='true'
    >
    ${CommunityAreaBoundaries}
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
  </osl-eq-grid>
  </div>
</div>
</div>
</osl-tabs>
`;
};
