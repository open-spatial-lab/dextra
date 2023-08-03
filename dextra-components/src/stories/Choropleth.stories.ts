import { Meta } from "@storybook/web-components";
import { html } from "lit";
import "../components/marks/Geo/src/Geo.ts";
import "../components/Plot/src/Plot.ts";

export default {
  title: "Marks",
}

export const Choropleth = () => {
  return html`
    <osl-plot
    width = 1000
    height = 650
    projection="identity" 
    colorType="quantize"
    colorScheme="blues"
    colorLegend="true"
    colorDomain="[1, 10]"
    colorInterval="9"
    colorLabel="Unemployment rate (%)"
    data="http://localhost:6006/data/unemployment.json" 
    >
      <osl-geo
      fill="(d) => d.properties.rate"
      tip="true"
      ></osl-geo>
    </osl-plot>
    `
}