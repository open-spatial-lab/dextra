import { Meta } from "@storybook/web-components";
import { template as html } from "../utils/templateFunction";
import "../components/marks/Box/src/Box.ts";
import "../components/Plot/src/Plot.ts";

export default {
  title: "Marks",
}

export const Box = () => {
  return html`
    <osl-plot
      width = 1000
      height = 500
      marginLeft = 60
      marginBottom = 100
      data="http://localhost:6006/data/household.json"
    >
      <osl-axis tickRotate="90"></osl-axis>
      <osl-box x="State" y="MedianHouseholdIncome"></osl-box>
    </osl-plot>
    `
}