import { template as html } from "../../utils/templateFunction";

import {
  tractJoined,
  complaintsOptions,
  filterRow,
  zipJoined
} from "./CSDUtils";

export const CirculateSanDiego3 = () => {
  return html`<div style="height:auto; width:100%">
${filterRow({
  monthDataToFilter: [tractJoined, zipJoined],
  yearDataToFilter: [tractJoined, zipJoined],
  complatintOptionsToFilter: [tractJoined, zipJoined, complaintsOptions.url],
  serviceDetailOptionsToFilter: [tractJoined, zipJoined],
  zipcodeDataToFilter: [tractJoined, zipJoined],
  cpcodeDataToFilter: [tractJoined, zipJoined],
  districtDataToFilter: [tractJoined, zipJoined],
})}  
<br/><br/>
<osl-tabs>  
  <div style="position:relative;width:100%;" data-tab="Census Tracts">
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
            dataColumn="walk audit count"
            type="continuous" 
            bins='5' 
            colorScheme="RdPu" 
            filled='true' 
            layer="polygon" 
            beforeId="water" 
            method="QNT" 
            geoId="FIPS" 
            stroked='true' 
            data="${tractJoined}"
            >
          </osl-map-layer>
        </osl-glmap>
      </div>
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
            dataColumn="311 count"
            type="continuous" 
            bins='5' 
            colorScheme="d3-magma" 
            filled='true' 
            layer="polygon" 
            beforeId="water" 
            method="QNT" 
            geoId="FIPS" 
            stroked='true' 
            data="${tractJoined}"
            >
          </osl-map-layer>
        </osl-glmap>
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
          dataColumn="Total Population"
          type="continuous" 
          bins='5' 
          colorScheme="RdPu" 
          filled='true' 
          layer="polygon" 
          beforeId="water" 
          method="QNT" 
          geoId="FIPS" 
          stroked='true' 
          data="${tractJoined}"
          >
        </osl-map-layer>
      </osl-glmap>
    </div>
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
          legendTitle="Median Household Income" 
          visible='true' 
          geoType="WKB" 
          geoColumn="geometry" 
          dataColumn="Median Household Income"
          type="continuous" 
          bins='5' 
          colorScheme="d3-viridis" 
          filled='true' 
          layer="polygon" 
          beforeId="water" 
          method="QNT" 
          geoId="FIPS" 
          stroked='true' 
          data="${tractJoined}"
          >
          </osl-map-layer>
      </osl-glmap>
    </div>
  </div>
</div>
  <div style="position:relative;width:100%;" data-tab="Zip Codes">
    <div style="position:relative;width:100%;display:flex;flex-direcion:row;">
      <div style="display:inline;width:100%;height:40vh">
        <osl-glmap 
          center="[-117.2,32.7]"
          zoom="11"
          mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json" 
          legendPosition="top-left" 
          showNavigation='true'
          mapGroup="2"
          >
          <osl-map-layer 
            legendTitle="Walk Audit Counts" 
            visible='true' 
            geoType="WKB" 
            geoColumn="geometry" 
            dataColumn="walk audit count"
            type="continuous" 
            bins='5' 
            colorScheme="RdPu" 
            filled='true' 
            layer="polygon" 
            beforeId="water" 
            method="QNT" 
            geoId="zipcode" 
            stroked='true' 
            data="${zipJoined}"
            >
          </osl-map-layer>
        </osl-glmap>
      </div>
      <div style="display:inline;width:100%;height:40vh">
        <osl-glmap 
          center="[-117.2,32.7]"
          zoom="11"
          mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json" 
          legendPosition="top-left" 
          showNavigation='true'
          mapGroup="2"
          >
          <osl-map-layer 
            legendTitle="311 Counts" 
            visible='true' 
            geoType="WKB" 
            geoColumn="geometry" 
            dataColumn="311 count"
            type="continuous" 
            bins='5' 
            colorScheme="d3-magma" 
            filled='true' 
            layer="polygon" 
            beforeId="water" 
            method="QNT" 
            geoId="zipcode" 
            stroked='true' 
            data="${zipJoined}"
            >
          </osl-map-layer>
        </osl-glmap>
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
      mapGroup="2"
      >
        <osl-map-layer 
          legendTitle="Population" 
          visible='true' 
          geoType="WKB" 
          geoColumn="geometry" 
          dataColumn="Total Population"
          type="continuous" 
          bins='5' 
          colorScheme="RdPu" 
          filled='true' 
          layer="polygon" 
          beforeId="water" 
          method="QNT" 
          geoId="zipcode" 
          stroked='true' 
          data="${zipJoined}"
          >
        </osl-map-layer>
      </osl-glmap>
    </div>
    <div style="display:inline;width:100%;height:40vh">
      <osl-glmap 
        center="[-117.2,32.7]"
        zoom="11"
        mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json" 
        legendPosition="top-left" 
        showNavigation='true'
        mapGroup="2"
        >
        <osl-map-layer 
          legendTitle="Median Household Income" 
          visible='true' 
          geoType="WKB" 
          geoColumn="geometry" 
          dataColumn="Median Household Income"
          type="continuous" 
          bins='5' 
          colorScheme="d3-viridis" 
          filled='true' 
          layer="polygon" 
          beforeId="water" 
          method="QNT" 
          geoId="zipcode" 
          stroked='true' 
          data="${zipJoined}"
          >
          </osl-map-layer>
      </osl-glmap>
    </div>
  </div>
</div>
</osl-tabs>
</div>
  `;
};
