import { Meta } from "@storybook/web-components";
import { html } from "lit";
import "../components/GlMap/src/GlMap.ts";
import "../components/MapLayer/src/MapLayer.ts";
import "../components/Slider/src/Slider.ts";
export default {
  title: "Data",
};

export const GlMap = () => {
  return html`
    <dexter-glmap
      center="[-122.41669, 37.7853]"
      zoom="2"
      mapStyle="https://demotiles.maplibre.org/style.json"
    >
      <dexter-map-layer
        type="scatter"
        getPosition="(d) => [d.x, d.y]"
        data="https://d2vloi59ojgfpi.cloudfront.net/data-query/6417b73afe20b50008149901"
      >
      </dexter-map-layer>
    </dexter-glmap>
  `;
};

export const ControlledGlMap = () => {
  return html`
    <dexter-slider
      data="https://d2vloi59ojgfpi.cloudfront.net/data-query/6417b73afe20b50008149901"
      option="mag"
      min="7"
      max="8"
      step="0.1"
      initialValue="7"
      title="Magnitude"
    ></dexter-slider>
    <br/><br/>
    <dexter-glmap
      center="[-122.41669, 37.7853]"
      zoom="2"
      mapStyle="https://demotiles.maplibre.org/style.json"
    >
      <dexter-map-layer
        type="scatter"
        getPosition="(d) => [d.x, d.y]"
        data="https://d2vloi59ojgfpi.cloudfront.net/data-query/6417b73afe20b50008149901"
      >
      </dexter-map-layer>
    </dexter-glmap>
  `;
};
