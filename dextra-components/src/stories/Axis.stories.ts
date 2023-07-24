import { Meta } from "@storybook/web-components";
import { html } from "lit";
import "../components/marks/Axis/src/Axis.ts";
import "../components/Plot/src/Plot.ts";
import "../components/marks/Line/src/Line.ts";

export default {
  title: "Marks",
};

export const Axis = () => {
  return html`
    <osl-plot
      data="http://localhost:6006/data/temperature.json"
      inset="10"
      grid="false"
      marginBottom="80"
    >
      <osl-line x="date" y="temp_min" z="weather" stroke="teal"></osl-line>
      <osl-axis
        ticks="month"
        anchor="bottom"
        tickPadding="5"
        tickSize="0"
        tickRotate="45"
        tickFormat="(d, i) => i % 40 === 0 ? (new Date(d)).toISOString().slice(0,10) : ''"
      ></osl-axis>
    </osl-plot>
  `;
};
