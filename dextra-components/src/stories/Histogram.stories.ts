import { Meta } from "@storybook/web-components";
import { html } from "lit";
import "../components/marks/Histogram/src/Histogram.ts";
import "../components/Plot/src/Plot.ts";

export default {
  title: "Marks",
};

export const Histogram = () => {
  return html`
  <dexter-plot
    data="https://d2vloi59ojgfpi.cloudfront.net/data-query/642da9a7cbd1580008828021"
  >
    <dexter-histogram x="avg_daily_pm25"></dexter-histogram>
  </dexter-plot>
    <!-- <dexter-plot
      data="https://d2vloi59ojgfpi.cloudfront.net/data-query/642da9a7cbd1580008828021"
    >
      <dexter-histogram vertical="True" y="avg_daily_pm25"></dexter-histogram>
    </dexter-plot> -->
  `;
};
