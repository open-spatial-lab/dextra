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
    <osl-glmap
      center="[-122.41669, 37.7853]"
      zoom="2"
      mapStyle="https://demotiles.maplibre.org/style.json"
    >
      <osl-map-layer
        type="scatter"
        getPosition="(d) => [d.LONGITUDE, d.LATITUDE]"
        data="https://d3uldu0bz6pkei.cloudfront.net/data-query/646689a096f1f70008e1d3f1?zip=60640"
      >
      </osl-map-layer>
    </osl-glmap>
  `;
};
export const ChoroplethMap = () => {
  return html`
    <osl-glmap
      center="[-122.41669, 37.7853]"
      zoom="2"
      mapStyle="https://demotiles.maplibre.org/style.json"
    >
      <osl-map-layer
        layer="polygon"
        data="https://d3uldu0bz6pkei.cloudfront.net/data-query/6466e8ee505b900008f2c80d"
        getPolygon="(d) => d.WKT"
        choroplethColumn="AWATER10"
      >
      </osl-map-layer>
    </osl-glmap>
  `;
};

export const ControlledGlMap = () => {
  return html`
    <osl-slider
      data="https://d3uldu0bz6pkei.cloudfront.net/data-query/6463ec5412b93e00099b0e05"
      option="mag"
      min="7"
      max="8"
      step="0.1"
      initialValue="7"
      title="Magnitude"
    ></osl-slider>

    <osl-slider
      data="https://d3uldu0bz6pkei.cloudfront.net/data-query/6463ec5412b93e00099b0e05"
      option="xmin"
      min="-180"
      max="180"
      step="1"
      initialValue="-180"
      title="Min X"
    ></osl-slider>
    <osl-slider
      data="https://d3uldu0bz6pkei.cloudfront.net/data-query/6463ec5412b93e00099b0e05"
      option="xmax"
      min="-180"
      max="180"
      step="1"
      initialValue="180"
      title="Max X"
    ></osl-slider>
    <osl-slider
      data="https://d3uldu0bz6pkei.cloudfront.net/data-query/6463ec5412b93e00099b0e05"
      option="ymin"
      min="-90"
      max="90"
      step="1"
      initialValue="-90"
      title="Min Y"
    ></osl-slider>
    <osl-slider
      data="https://d3uldu0bz6pkei.cloudfront.net/data-query/6463ec5412b93e00099b0e05"
      option="ymax"
      min="-90"
      max="90"
      step="1"
      initialValue="90"
      title="Max Y"
    ></osl-slider>
    <br /><br />
    <osl-glmap
      center="[60, 22]"
      zoom="2"
      mapStyle="https://demotiles.maplibre.org/style.json"
    >
      <osl-map-layer
        type="scatter"
        getPosition="(d) => [d.x, d.y]"
        data="https://d3uldu0bz6pkei.cloudfront.net/data-query/6463ec5412b93e00099b0e05"
      >
      </osl-map-layer>
    </osl-glmap>

    <br /><br />
  `;
};
