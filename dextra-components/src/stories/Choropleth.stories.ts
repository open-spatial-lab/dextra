import { Meta } from "@storybook/web-components";
import { html } from "lit";
import "../components/marks/Geo/src/Geo.ts";
import "../components/Plot/src/Plot.ts";

export default {
  title: "Marks",
};

export const Choropleth = () => {
  return html`
    <osl-plot
      height="650"
      projection="albers"
      colorType="quantize"
      colorScheme="blues"
      colorLegend="true"
      colorDomain="[10000000, 500000000]"
      colorInterval="4"
      colorLabel="Area land"
      data="http://localhost:6006/data/choropleth.json"
      geoColumn="WKT"
      geoType="WKT"
    >
      <osl-geo
        fill="ALAND10"
        tip="true"
      ></osl-geo>
    </osl-plot>
  `;
};
