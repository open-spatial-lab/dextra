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
      data="https://d2vloi59ojgfpi.cloudfront.net/data-query/642da9a7cbd1580008828021"
    >
      <osl-dot-plot x="avg_daily_pm25" y="income_ratio"> </osl-dot-plot>
      <osl-rulex-plot number="[4, 10]"></osl-rulex-plot>
    </osl-plot>
  `;
};

export const RuleXData = () => {
  return html`
    <osl-plot
      data="https://d2vloi59ojgfpi.cloudfront.net/data-query/642da9a7cbd1580008828021"
    >
      <osl-dot-plot x="avg_daily_pm25" y="income_ratio"> </osl-dot-plot>
      <osl-rulex-plot x="uninsured_pct"></osl-rulex-plot>
    </osl-plot>
  `;
};
