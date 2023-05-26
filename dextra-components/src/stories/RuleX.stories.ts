import { Meta } from "@storybook/web-components";
import { html } from "lit";
import "../components/marks/RuleX/src/RuleX.ts";
import "../components/Marks/Dot/src/Dot.ts";
import "../components/Plot/src/Plot.ts";

export default {
  title: "Marks",
};

export const RuleX = () => {
  return html`
    <osl-plot
      data="https://d3uldu0bz6pkei.cloudfront.net/data-query/646fd0f4e06ddb00081c002a"
    >
      <osl-dot-plot  x="MedianHouseholdIncome" y="UnEmplyPrc"> </osl-dot-plot>
      <osl-rulex-plot number="[4, 10]"></osl-rulex-plot>
    </osl-plot>
  `;
};

export const RuleXData = () => {
  return html`
    <osl-plot
      data="https://d3uldu0bz6pkei.cloudfront.net/data-query/646fd0f4e06ddb00081c002a"
    >
      <osl-dot-plot  x="MedianHouseholdIncome" y="UnEmplyPrc"> </osl-dot-plot>
      <osl-rulex-plot x="MedianHouseholdIncome"></osl-rulex-plot>
    </osl-plot>
  `;
};
