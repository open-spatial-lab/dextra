import { Meta } from "@storybook/web-components";
import { html } from "lit";
import "../components/marks/Box/src/Box.ts";
import "../components/Plot/src/Plot.ts";

export default {
  title: "Marks",
}

export const Box = () => {
  return html`
    <osl-plot
      marginLeft = 60
      marginBottom = 100
      data="https://d3uldu0bz6pkei.cloudfront.net/data-query/646fd0f4e06ddb00081c002a"
    >
      <osl-axis tickRotate="90"></osl-axis>
      <osl-box x="State" y="MedianHouseholdIncome"></osl-box>
    </osl-plot>
    `
}