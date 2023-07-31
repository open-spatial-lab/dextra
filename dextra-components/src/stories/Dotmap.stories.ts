import { Meta } from "@storybook/web-components";
import { html } from "lit";
import "../components/marks/Geo/src/Geo.ts";
import "../components/Plot/src/Plot.ts";

export default {
  title: "Marks",
}

export const DotMap = () => {
  return html`
    <osl-plot
    width = 800
    height = 450
    projection="equirectangular"
    >
      <osl-geo
      data="http://localhost:6006/data/world.json" 
      fill="currentColor"
      fillOpacity="0.2"
      ></osl-geo>

      <osl-geo
      data="http://localhost:6006/data/earthquack.json" 
      r="(d) => Math.pow(10, d.properties.mag)"
      fill="red",
      fillOpacity="0.2",
      stroke="red"
      tag="(d) => d.properties.title"
      href="(d) => d.properties.url"
      target="_blank"
      ></osl-geo>

    </osl-plot>
    `
}


