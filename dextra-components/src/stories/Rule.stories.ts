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
      data="http://localhost:6006/data/household.json"
    >
      <osl-dot-plot x="MedianHouseholdIncome" y="UnEmplyPrc"> </osl-dot-plot>
      <osl-rule-plot direction="vertical" x="0"></osl-rule-plot>
    </osl-plot>
  `;
};

export const RuleXData = () => {
  return html`
    <osl-plot
      data="http://localhost:6006/data/household.json"
    >
      <osl-dot-plot x="MedianHouseholdIncome" y="UnEmplyPrc"> </osl-dot-plot>
      <osl-rule-plot direction="vertical" x="MedianHouseholdIncome" strokeOpacity=0.1></osl-rule-plot>
    </osl-plot>
  `;
};

export const RuleY= () => {
  return html`
    <osl-plot
      data="http://localhost:6006/data/household.json"
    >
      <osl-dot-plot x="MedianHouseholdIncome" y="UnEmplyPrc"> </osl-dot-plot>
      <osl-rule-plot direction="horizontal" y="[0]"></osl-rule-plot>
    </osl-plot>
  `;
};

export const RuleYData = () => {
  return html`
    <osl-plot
      data="http://localhost:6006/data/household.json"
    >
      <osl-dot-plot x="MedianHouseholdIncome" y="UnEmplyPrc"> </osl-dot-plot>
      <osl-rule-plot direction="horizontal" y="UnEmplyPrc"></osl-rule-plot>
    </osl-plot>
  `;
};

export const RuleBound = () => {
  return html`
    <osl-plot
      data="http://localhost:6006/data/temperature.json"
    >
      <osl-rule-plot direction="vertical" x="date" y1="temp_min" y2="temp_max"></osl-rule-plot>
      <osl-rule-plot direction="horizontal" y=[0]></osl-rule-plot>
    </osl-plot>
  `;
};