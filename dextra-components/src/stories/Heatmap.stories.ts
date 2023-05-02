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
  data="https://d2vloi59ojgfpi.cloudfront.net/data-query/642da9a7cbd1580008828021"
    >
      <osl-heatmap-plot  x="avg_daily_pm25" y="income_ratio"></osl-heatmap-plot>
    </osl-plot>
    `
}