import { Meta } from "@storybook/web-components";
import { html } from "lit";
import "../components/marks/Density/src/Density.ts";
import "../components/Plot/src/Plot.ts";

export default {
  title: "Marks",
}

export const Density = () => {
  return html`
    <dexter-plot
      inset="50"
      data="https://d2vloi59ojgfpi.cloudfront.net/data-query/642da9a7cbd1580008828021"
    >
      <dexter-density x="avg_daily_pm25" y="income_ratio" bandwidth="6" stroke="red"></dexter-density>
    </dexter-plot>
    `
}