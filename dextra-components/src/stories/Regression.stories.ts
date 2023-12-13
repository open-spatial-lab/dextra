import { Meta } from "@storybook/web-components";
import { template as html } from "../utils/templateFunction";
import "../components/marks/Regression/src/Regression.ts";
import "../components/Marks/Dot/src/Dot.ts";
import "../components/Plot/src/Plot.ts";

export default {
  title: "Marks",
}

export const LinearRegressionY = () => {
  return html`
    <osl-plot
      data="http://localhost:6006/data/household.json"
    >
      <osl-dot-plot 
      x="MedianHouseholdIncome" 
      y="UnEmplyPrc"
      strokeOpacity=0.5
      > </osl-dot-plot>
      <osl-regression-plot x="MedianHouseholdIncome" y="UnEmplyPrc"></osl-regression-plot>
    </osl-plot>
    `
}
 

export const LinearRegressionX = () => {
  return html`
    <osl-plot
      data="http://localhost:6006/data/household.json"
    >
    <osl-dot-plot 
    x="MedianHouseholdIncome" 
    y="UnEmplyPrc"
    strokeOpacity=0.5
    > </osl-dot-plot>
      <osl-regression-plot regressionX="true" x="MedianHouseholdIncome" y="UnEmplyPrc"></osl-regression-plot>
    </osl-plot>
    `
}

