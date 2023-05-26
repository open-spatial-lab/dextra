import { Meta } from "@storybook/web-components";
import { html } from "lit";
import "../components/marks/RuleY/src/RuleY.ts";
import "../components/Marks/Dot/src/Dot.ts";
import "../components/Plot/src/Plot.ts";

export default {
  title: "Marks",
};

export const RuleY = () => {
  return html`
    <osl-plot
      data="https://d3uldu0bz6pkei.cloudfront.net/data-query/646fd0f4e06ddb00081c002a"
    >
    <osl-dot-plot x="MedianHouseholdIncome" y="UnEmplyPrc"> </osl-dot-plot>
    <osl-ruley-plot
    number="[5, 6, 7]"
    ></osl-ruley-plot>
    </osl-plot>
    `;
};

export const RuleYData = () => {
  return html`
    <osl-plot
      data="https://d3uldu0bz6pkei.cloudfront.net/data-query/646fd0f4e06ddb00081c002a"
    >
      <osl-dot-plot x="MedianHouseholdIncome" y="UnEmplyPrc"> </osl-dot-plot>
      <osl-ruley-plot y="MedianHouseholdIncome"></osl-ruley-plot>
    </osl-plot>
  `;
};
