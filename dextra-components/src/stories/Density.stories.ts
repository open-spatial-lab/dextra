import { Meta } from "@storybook/web-components";
import { html } from "lit";
import "../components/marks/Density/src/Density.ts";
import "../components/Plot/src/Plot.ts";

export default {
  title: "Marks",
};

export const Density = () => {
  return html`
    <osl-plot
      inset="50"
      data="https://d3uldu0bz6pkei.cloudfront.net/data-query/646fd0f4e06ddb00081c002a"
    >
      <osl-density-plot
        x="MedianHouseholdIncome"
        y="UnEmplyPrc"
        bandwidth="6"
        stroke="red"
      ></osl-density-plot>
    </osl-plot>
  `;
};
