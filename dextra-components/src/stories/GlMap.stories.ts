import { Meta } from "@storybook/web-components";
import { html } from "lit";
import "../components/GlMap/src/GlMap.ts";
// import "../components/MapLayer/src/MapLayer.ts";
import "../components/Slider/src/Slider.ts";

export default {
  title: "Data",
};

export const GlMap = () => {
  return html`
    <div style="height: 500px; width: 100%">
      <osl-glmap
        center="[-122.41669, 37.7853]"
        zoom="2"
        mapStyle="https://demotiles.maplibre.org/style.json"
      >
        <osl-map-layer
          type="scatter"
          getPosition="(d) => [d.LONGITUDE, d.LATITUDE]"
          data="http://localhost:6006/data/map.json"
        >
        </osl-map-layer>
      </osl-glmap>
    </div>
  `;
};
export const ChoroplethMap = () => {
  return html`
    <div style="height: 500px; width: 100%">
      <osl-glmap
        center="[-122.41669, 37.7853]"
        zoom="2"
        mapStyle="https://demotiles.maplibre.org/style.json"
      >
        <osl-map-layer
          layer="polygon"
          data="http://localhost:6006/data/choropleth.json"
          getPolygon="(d) => d.WKT"
          choroplethColumn="AWATER10"
        >
        </osl-map-layer>
      </osl-glmap>
    </div>
  `;
};

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

    <div style="height: 500px; width: 100%">
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
