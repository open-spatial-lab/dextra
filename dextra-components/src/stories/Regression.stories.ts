import { Meta } from "@storybook/web-components";
import { html } from "lit";
import "../components/marks/Regression/src/Regression.ts";
import "../components/Marks/Dot/src/Dot.ts";
import "../components/Plot/src/Plot.ts";

export default {
  title: "Marks",
}

export const LinearRegression = () => {
  return html`
    <dexter-plot
      data="https://d2vloi59ojgfpi.cloudfront.net/data-query/642da9a7cbd1580008828021"
    >
    <dexter-dot 
    x="avg_daily_pm25" 
    y="income_ratio"
    strokeOpacity=0.5
    > </dexter-dot>
      <dexter-regression x="avg_daily_pm25" y="income_ratio"></dexter-regression>
    </dexter-plot>
    `
}