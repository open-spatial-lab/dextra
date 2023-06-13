import { Meta } from "@storybook/web-components";
import { html } from "lit";
import "../components/marks/Rule/src/Rule.ts";
import "../components/Marks/Dot/src/Dot.ts";
import "../components/Plot/src/Plot.ts";

export default {
  title: "Marks",
};

export const RuleX= () => {
  return html`
    <osl-plot
      data="https://d3uldu0bz6pkei.cloudfront.net/data-query/646fd0f4e06ddb00081c002a"
    >
      <osl-dot-plot x="MedianHouseholdIncome" y="UnEmplyPrc"> </osl-dot-plot>
      <osl-rule-plot vertical="true" x="0"></osl-rule-plot>
    </osl-plot>
  `;
};

export const RuleXData = () => {
  return html`
    <osl-plot
      data="https://d3uldu0bz6pkei.cloudfront.net/data-query/646fd0f4e06ddb00081c002a"
    >
      <osl-dot-plot x="MedianHouseholdIncome" y="UnEmplyPrc"> </osl-dot-plot>
      <osl-rule-plot vertical="true" x="MedianHouseholdIncome" strokeOpacity=0.1></osl-rule-plot>
    </osl-plot>
  `;
};

export const RuleY= () => {
  return html`
    <osl-plot
      data="https://d3uldu0bz6pkei.cloudfront.net/data-query/646fd0f4e06ddb00081c002a"
    >
      <osl-dot-plot x="MedianHouseholdIncome" y="UnEmplyPrc"> </osl-dot-plot>
      <osl-rule-plot y="[0]"></osl-rule-plot>
    </osl-plot>
  `;
};

export const RuleYData = () => {
  return html`
    <osl-plot
      data="https://d3uldu0bz6pkei.cloudfront.net/data-query/646fd0f4e06ddb00081c002a"
    >
      <osl-dot-plot x="MedianHouseholdIncome" y="UnEmplyPrc"> </osl-dot-plot>
      <osl-rule-plot y="UnEmplyPrc"></osl-rule-plot>
    </osl-plot>
  `;
};