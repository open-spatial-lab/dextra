import { Meta } from "@storybook/web-components";
import { html } from "lit";
import "../components/marks/Heatmap/src/Heatmap.ts";
import "../components/Plot/src/Plot.ts";

export default {
  title: "Marks",
}

export const Heatmap = () => {
  return html`
    <osl-plot
    data="https://d3uldu0bz6pkei.cloudfront.net/data-query/646fd0f4e06ddb00081c002a"
    >
      <osl-heatmap-plot x="MedianHouseholdIncome" y="UnEmplyPrc"></osl-heatmap-plot>
    </osl-plot>
    `
}