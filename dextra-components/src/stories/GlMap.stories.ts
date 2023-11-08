import { html } from "lit";
import "../components/GlMap/src/GlMap.ts";
import "../components/GlMap/src/GlMapLayer.ts";
import "../components/Slider/src/Slider.ts";
import "../components/Select/src/SelectControl.ts";
import "../components/FlexBox/src/FlexBox.ts";
import "../components/StatTable/src/StatTable.ts";
import "../components/DataTable/src/DataTable.ts";
import "../components/Download/src/Download.ts";
import "../components/Stat/src/Stat.ts";
import "../components/marks/Line/src/Line.ts";
import "../components/marks/Axis/src/Axis.ts";
import "../components/Plot/src/Plot.ts";
import "../components/Modal/src/Modal.ts";
import "../components/Radio/src/Radio.ts";
import "../components/ParamView/src/ParamView.ts";
import "../components/Stat/src/Stat.ts";
import "../components/FlexBox/src/FlexBox.ts";

export default {
  title: "Data",
};

export const GlMap = () => {
  return html`
    <div>
      <div style="height: 500px; width: 100%">
        <osl-glmap
          mapstyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
        >
        </osl-glmap>
      </div>
    </div>
  `;
};

export const ChoroTest = () => {
  return html`
    <div style="height: 500px; width: 100%">
      <osl-glmap
        mapstyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
        ><osl-map-layer
          data="https://d15yl9qyw1y5mg.cloudfront.net/data-query/650c6cccf4d9060008210a9c"
          legendtitle="asdf"
          visible="true"
          attribution="asdf2"
          colorscheme="RdYlGn"
          geoid="GEOID"
          geotype="WKB"
          geocolumn="geometry"
          datacolumn="Median DBH"
          type="continuous"
          filled="true"
        >
        </osl-map-layer
      ></osl-glmap>
    </div>
  `;
};

export const ChoroplethMap = () => {
  //   <osl-map-layer
  //   layer="polygon"
  //   data="http://localhost:6006/data/choropleth.json"
  //   geoColumn="WKT"
  //   geoType="WKT"
  //   dataColumn="CITY"
  //   type="categorical"
  //   attribution="US Census 2020"
  //   bins="4"
  //   filled="false"
  //   stroked="true"
  //   method="JNK"
  //   colorScheme="d3-turbo"
  // >
  // </osl-map-layer>
  // <osl-map-layer
  //   layer="polygon"
  //   data="http://localhost:6006/data/choropleth.json"
  //   geoColumn="WKT"
  //   geoType="WKT"
  //   dataColumn="VISION_PROVIDERS"
  //   type="continuous"
  //   attribution="US Census 2020"
  //   colorScheme="d3-turbo"
  // >
  // </osl-map-layer>
  return html`
    <div style="height: 500px; width: 100%">
      <osl-glmap
        mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
        legendPosition="top-left"
      >
        <div slot="description">asdf</div>
      </osl-glmap>
      <br /><br />
    </div>
  `;
};

export const DotMap = () => {
  return html`
    <div style="height: 700px; width: 100%">
      <osl-glmap
        mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
        legendPosition="top-left"
      >
        <osl-map-layer
          layer="circle"
          data="https://d15yl9qyw1y5mg.cloudfront.net/data-query/650c8c7766874a0008027019"
          geoColumn="geometry"
          geoType="WKB"
          dataColumn="DBH"
          legendtitle="Diameter at Breast Height (DBH)"
          beforeId="building"
          attribution="Groundwork Bridgeport"
          visible="false"
        >
        </osl-map-layer>
        <osl-map-layer
          layer="circle"
          data="https://d15yl9qyw1y5mg.cloudfront.net/data-query/650c8c7766874a0008027019"
          geoColumn="geometry"
          geoType="WKB"
          dataColumn="Common Name"
          type="categorical"
          legendtitle="Species"
          circleRadius="10"
          radiusUnits="pixels"
          colorScheme="d3-turbo"
          attribution="Groundwork Bridgeport"
        >
        </osl-map-layer>
        <osl-map-layer
          layer="polygon"
          data="https://d15yl9qyw1y5mg.cloudfront.net/data-query/650c6cccf4d9060008210a9c"
          geoColumn="geometry"
          geoType="WKB"
          beforeId="water"
          dataColumn="Population Density (Per Sq. Mile)"
          attribution="Groundwork Bridgeport"
        >
        </osl-map-layer>
      </osl-glmap>
      <br /><br />
    </div>
  `;
};
// console.log(PreventBlindness())

export const ControlledGlMap = () => {
  return html`
    <osl-slider
      data="http://localhost:6006/data/interaction.json"
      option="mag"
      min="7"
      max="8"
      step="0.1"
      initialValue="7"
      title="Magnitude"
    ></osl-slider>

    <osl-slider
      data="http://localhost:6006/data/interaction.json"
      option="xmin"
      min="-180"
      max="180"
      step="1"
      initialValue="-180"
      title="Min X"
    ></osl-slider>
    <osl-slider
      data="http://localhost:6006/data/interaction.json"
      option="xmax"
      min="-180"
      max="180"
      step="1"
      initialValue="180"
      title="Max X"
    ></osl-slider>
    <osl-slider
      data="http://localhost:6006/data/interaction.json"
      option="ymin"
      min="-90"
      max="90"
      step="1"
      initialValue="-90"
      title="Min Y"
    ></osl-slider>
    <osl-slider
      data="http://localhost:6006/data/interaction.json"
      option="ymax"
      min="-90"
      max="90"
      step="1"
      initialValue="90"
      title="Max Y"
    ></osl-slider>
    <br /><br />

    <div style="height: 500px; width: 100%"></div>
    <div style="position:relative;height:500px;width:100%;">
      <osl-glmap
        center="[60, 22]"
        zoom="2"
        mapStyle="https://demotiles.maplibre.org/style.json"
      >
        <osl-map-layer
          type="scatter"
          getPosition="(d) => [d.x, d.y]"
          data="http://localhost:6006/data/interaction.json"
        >
        </osl-map-layer>
      </osl-glmap>
    </div>

    <br /><br />
  `;
};
