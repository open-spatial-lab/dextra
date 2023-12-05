import { html } from "lit";
import {
  // summary,
  // geo,
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
  CommunityAreaLabels,
  crashesOverTime,
  redLightTicketsOverTime,
  speedTicketsOverTime,
} from "./EquiticityUtils";
import { renderTemplateAsString } from "../../utils/renderTemplateAsString";
import { getRenderString } from "../utils";

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
        crashesOverTime,
        speedTicketsOverTime,
        redLightTicketsOverTime
      ])}
      option="start"
      title="Start date"
      initialValue="2019-01"
      optionsData=${dateOptions.url}
      optionsDataValueColumn=${dateOptions.valueCol}
      showAny="true"
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
        crashesOverTime,
        speedTicketsOverTime,
        redLightTicketsOverTime
      ])}
      option="end"
      optionsData=${dateOptions.url}
      optionsDataValueColumn=${dateOptions.valueCol}
      title="End date"
      initialValue="*"
      showAny="true"
    ></osl-select-control>
    <osl-select-control
      data=${JSON.stringify([
        communityAreasJoinedData,
        communityAreaSummary,
        zipData,
        zipSummary,
        tractData,
        tractSummary,
        crashesOverTime,
        speedTicketsOverTime,
        redLightTicketsOverTime
      ])}
      option="crashtype"
      optionsData=${crashTypeOptions.url}
      optionsDataValueColumn=${crashTypeOptions.valueCol}
      title="Crash Type"
      multipleSelect="true"
      initialValue="*"
      showAny="true"
    ></osl-select-control>
    <osl-select-control
      data=${JSON.stringify([
        communityAreasJoinedData,
        communityAreaSummary,
        redLightDot,
        speedDot,
        crashesOverTime,
        speedTicketsOverTime,
        redLightTicketsOverTime
      ])}
      option="crashhour"
      optionsData=${crashHourOptions.url}
      optionsDataValueColumn=${crashHourOptions.valueCol}
      title="Crash Hour"
      subTitle="Number is start of hour, (eg, 0 is midnight, 13 is 1pm)"
      multipleSelect="true"
      initialValue="*"
      showAny="true"
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
            showAny="true"
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
      labelFormat="currency:usd"
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
    ${CommunityAreaLabels}
  </osl-glmap></div>

  <div style="height:100%;width:100%">

  <osl-glmap 
    mapGroup="1"
    mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json" 
    legendPosition="top-left" 
    showNavigation='true'
    >
    ${CommunityAreaLabels}
    <osl-map-layer
      layer="circle"
      data="${redLightDot}"
      geoColumn="geometry"
      geoType="WKB"
      circleRadius="10"
      pointRadiusMaxPixels="10"
      radiusUnits="pixels"
      fixedRadius="true"
      dataColumn="Red Light Violations"
      legendtitle="Red Light Camera Locations and Violations"
      visible="false"
    >
    </osl-map-layer>
    <osl-map-layer
      layer="circle"
      data="${speedDot}"
      geoColumn="geometry"
      geoType="WKB"
      circleRadius="10"
      pointRadiusMaxPixels="10"
      radiusUnits="pixels"
      fixedRadius="true"
      dataColumn="SPEED_VIOLATIONS"
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
      showAny="true"
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
        geoId="FIPS"
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
        geoId="FIPS" 
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
        geoId="FIPS" 
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
        geoId="FIPS" 
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
      geoId="FIPS" 
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
      geoId="FIPS" 
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
      geoId="FIPS" 
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
      geoId="FIPS" 
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
      labelFormat="currency:usd"
      type="continuous" 
      bins='5' 
      colorScheme="YlGn" 
      filled='true' 
      attribution="CMAP" 
      layer="polygon" 
      beforeId="water" 
      method="QNT" 
      geoId="FIPS" 
      stroked='true' 
      data=${tractData}
    >
    </osl-map-layer>   
    ${CommunityAreaLabels}
  </osl-glmap></div>

  <div style="height:100%;width:100%">

  <osl-glmap 
    mapGroup="1"
    mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json" 
    legendPosition="top-left" 
    showNavigation='true'
    >
    ${CommunityAreaLabels}
    <osl-map-layer
      layer="circle"
      data="${redLightDot}"
      geoColumn="geometry"
      geoType="WKB"
      circleRadius="10"
      pointRadiusMaxPixels="10"
      radiusUnits="pixels"
      fixedRadius="true"
      dataColumn="Red Light Violations"
      legendtitle="Red Light Camera Locations and Violations"
      visible="false"
    >
    </osl-map-layer>
    <osl-map-layer
      layer="circle"
      data="${speedDot}"
      geoColumn="geometry"
      geoType="WKB"
      circleRadius="10"
      pointRadiusMaxPixels="10"
      radiusUnits="pixels"
      fixedRadius="true"
      dataColumn="SPEED_VIOLATIONS"
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
      showAny="true"
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
        geoId="zip"
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
        geoId="zip" 
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
        geoId="zip" 
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
        geoId="zip" 
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
      geoId="zip" 
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
      geoId="zip" 
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
      geoId="zip" 
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
      geoId="zip" 
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
      labelFormat="currency:usd"
      type="continuous" 
      bins='5' 
      colorScheme="YlGn" 
      filled='true' 
      attribution="CMAP" 
      layer="polygon" 
      beforeId="water" 
      method="QNT" 
      geoId="zip" 
      stroked='true' 
      data=${zipData}
    >
    

    </osl-map-layer>   
    ${CommunityAreaLabels}
  </osl-glmap></div>

  <div style="height:100%;width:100%">

  <osl-glmap 
    mapGroup="1"
    mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json" 
    legendPosition="top-left" 
    showNavigation='true'
    >
    ${CommunityAreaLabels}
    <osl-map-layer
      layer="circle"
      data="${redLightDot}"
      geoColumn="geometry"
      geoType="WKB"
      dataColumn="Red Light Violations"
      legendtitle="Red Light Camera Locations and Violations"
      visible="false"
      circleRadius="10"
      pointRadiusMaxPixels="10"
      radiusUnits="pixels"
      fixedRadius="true"
    >
    </osl-map-layer>
    <osl-map-layer
      layer="circle"
      data="${speedDot}"
      geoColumn="geometry"
      geoType="WKB"
      circleRadius="10"
      pointRadiusMaxPixels="10"
      radiusUnits="pixels"
      fixedRadius="true"
      dataColumn="SPEED_VIOLATIONS"
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
<div data-tab="Over Time" style="width:100%;min-height:100vh;">\
  <div>
    <osl-eq-grid breakpoint="lg">
      <osl-select-control
        data=${JSON.stringify([crashesOverTime, redLightTicketsOverTime, speedTicketsOverTime])}
        option="community"
        optionsData=${communityAreaOptions.url}
        optionsDataValueColumn=${communityAreaOptions.valueCol}
        optionsDataLabelColumn=${communityAreaOptions.labelCol}
        title="Filter by Community Area"
        initialValue="*"
        showAny="true"
      ></osl-select-control>
      <osl-select-control
        data=${JSON.stringify([crashesOverTime, redLightTicketsOverTime, speedTicketsOverTime])}
        option="tract"
        optionsData=${tractOptions.url}
        optionsDataValueColumn=${tractOptions.valueCol}
        title="Filter by Census Tract"
        initialValue="*"
        showAny="true"
      ></osl-select-control>
      <osl-select-control
          data=${JSON.stringify([crashesOverTime, redLightTicketsOverTime, speedTicketsOverTime])}
        option="zip"
        optionsData=${zipOptions.url}
        optionsDataValueColumn=${zipOptions.valueCol}
        title="Filter by Zip Code / Postal Code" 
        initialValue="*"
        showAny="true"
      ></osl-select-control>
    </osl-eq-grid>
  </div>
  <div style="height:50vh;">
    <osl-plot
      colorLegend="true"
      data=${crashesOverTime}
      marginBottom="80"
      marginLeft="80"
      marginRight="80"
      title="Crash Count Over Time"
      
      colorScheme="turbo"
    >
      <osl-line
        x="date"
        y="CRASH_COUNT"
      ></osl-line>
    </osl-plot>
  <div style="height:50vh;">
    <osl-plot
      colorLegend="true"
      data=${crashesOverTime}
      marginBottom="80"
      marginLeft="80"
      marginRight="80"
      title="Crash Injuries Over Time"
      
      colorScheme="turbo"
    >
      <osl-line
        x="date"
        y="CRASH_INJURIES"
      ></osl-line>
    </osl-plot>
  </div>
  <div style="height:50vh;">
    <osl-plot
      colorLegend="true"
      data=${crashesOverTime}
      marginBottom="80"
      marginLeft="80"
      marginRight="80"
      title="Crash Fatalities Over Time"
      
      colorScheme="turbo"
    >
      <osl-line
        x="date"
        y="CRASH_FATALITIES"
      ></osl-line>
    </osl-plot>
  </div>
  <div style="height:50vh;">
    <osl-plot
      colorLegend="true"
      data=${speedTicketsOverTime}
      marginBottom="80"
      marginLeft="80"
      marginRight="80"
      title="Automated Speed Tickets Over Time"
      
      colorScheme="turbo"
    >
      <osl-line
        x="date"
      y="SPEED_VIOLATIONS"
      ></osl-line>
    </osl-plot>
    <osl-plot
      colorLegend="true"
      data=${redLightTicketsOverTime}
      marginBottom="80"
      marginLeft="80"
      marginRight="80"
      title="Automated Red Light Tickets Over Time"
    >
      <osl-line
        x="date"
      y="RED_LIGHT_VIOLATIONS"
      ></osl-line>
    </osl-plot>
    </div>
  </div>
  <div>
  </div>
  <div>
  </div>
</div> 
</osl-tabs>
`;
};

console.log(getRenderString(Equiticity()));