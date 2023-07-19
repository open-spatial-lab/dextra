import { Meta } from "@storybook/web-components";
import { html } from "lit";
import "../components/marks/Histogram/src/Histogram.ts";
import "../components/Plot/src/Plot.ts";

export default {
  title: "Marks",
};

export const Histogram = () => {
  return html` <osl-plot scheme="inferno"
  data="http://localhost:6006/data/household.json"
  >
    <osl-histogram-plot x="MedianHouseholdIncome" fill="forestgreen"></osl-histogram-plot>
  </osl-plot>`;
};
