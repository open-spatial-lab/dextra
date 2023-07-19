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
    data="http://localhost:6006/data/household.json"
    >
      <osl-heatmap-plot x="MedianHouseholdIncome" y="UnEmplyPrc"></osl-heatmap-plot>
    </osl-plot>
    `
}