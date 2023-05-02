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
    data="https://d2vloi59ojgfpi.cloudfront.net/data-query/642da9a7cbd1580008828021"
    >
    <osl-dot-plot x="avg_daily_pm25" y="income_ratio"> </osl-dot-plot>
    <osl-ruley-plot
    number="[5, 6, 7]"
    ></osl-ruley-plot>
    </osl-plot>
    `;
};

export const RuleYData = () => {
  return html`
    <osl-plot
      data="https://d2vloi59ojgfpi.cloudfront.net/data-query/642da9a7cbd1580008828021"
    >
      <osl-dot-plot x="avg_daily_pm25" y="income_ratio"> </osl-dot-plot>
      <osl-ruley-plot y="avg_daily_pm25"></osl-ruley-plot>
    </osl-plot>
  `;
};
