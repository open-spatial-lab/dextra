import { Meta } from "@storybook/web-components";
import { html } from "lit";
import "../components/marks/Histogram/src/Histogram.ts";
import "../components/Plot/src/Plot.ts";

export default {
  title: "Marks",
};

export const Histogram = () => {
  return html` <osl-plot scheme="inferno"
    data="https://d3uldu0bz6pkei.cloudfront.net/data-query/642da9a7cbd1580008828021"
  >
    <osl-histogram-plot x="avg_daily_pm25" fill="forestgreen"></osl-histogram-plot>
  </osl-plot>`;
};
