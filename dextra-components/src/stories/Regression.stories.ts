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
    <osl-plot
      data="https://d3uldu0bz6pkei.cloudfront.net/data-query/646fd0f4e06ddb00081c002a"
    >
    <osl-dot 
    x="MedianHouseholdIncome" 
    y="UnEmplyPrc"
    strokeOpacity=0.5
    > </osl-dot>
      <osl-regression-plot x="MedianHouseholdIncome" y="UnEmplyPrc"></osl-regression-plot>
    </osl-plot>
    `
}