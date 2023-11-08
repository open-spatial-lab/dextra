import { Meta } from "@storybook/web-components";
import { html } from "lit";
import "../../components/marks/Density/src/Density.js";
import "../../components/Plot/src/Plot.js";

export default {
  title: "Marks",
};

export const Density = () => {
  return html`
    <osl-plot
      inset="50"
      data="http://localhost:6006/data/household.json"
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
