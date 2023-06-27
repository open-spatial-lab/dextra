import { Meta } from "@storybook/web-components";
import { html } from "lit";
import "../components/marks/Histogram/src/Histogram.ts";
import "../components/Plot/src/Plot.ts";

export default {
  title: "Marks",
};

export const Histogram = () => {
  return html` <osl-plot scheme="inferno"
  data="https://d3uldu0bz6pkei.cloudfront.net/data-query/646fd0f4e06ddb00081c002a"
  >
    <osl-histogram-plot x="MedianHouseholdIncome" fill="forestgreen"></osl-histogram-plot>
  </osl-plot>`;
};
