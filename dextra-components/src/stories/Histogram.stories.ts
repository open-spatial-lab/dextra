import { Meta } from "@storybook/web-components";
import { html } from "lit";
import "../components/marks/Histogram/src/Histogram.ts";
import "../components/Plot/src/Plot.ts";

export default {
  title: "Marks",
};

export const Histogram = () => {
  return html`
  <osl-plot
    data="https://d2vloi59ojgfpi.cloudfront.net/data-query/642da9a7cbd1580008828021"
  >
    <osl-histogram x="avg_daily_pm25"></osl-histogram>
  </osl-plot>
    <!-- <osl-plot
      data="https://d2vloi59ojgfpi.cloudfront.net/data-query/642da9a7cbd1580008828021"
    >
      <osl-histogram vertical="True" y="avg_daily_pm25"></osl-histogram>
    </osl-plot> -->
  `;
};
