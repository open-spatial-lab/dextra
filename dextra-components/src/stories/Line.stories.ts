import { Meta } from "@storybook/web-components";
import { html } from "lit";
import "../components/marks/Line/src/Line.ts";
import "../components/marks/Axis/src/Axis.ts";
import "../components/Plot/src/Plot.ts";

export default {
  title: "Marks",
}

export const Line = () => {
  return html`
    <osl-plot
      data="http://localhost:6006/data/temperature.json"
      marginBottom="80"
      grid="false"
      marginRight="80"
    >
      <osl-line
        x="date"
        y="temp_min"
        z="weather"
        stroke="teal"
        fy="weather"
      ></osl-line>
      <osl-line
        x="date"
        y="temp_max"
        stroke="maroon"
        fy="weather"
      ></osl-line>
    </osl-plot>
    `
}