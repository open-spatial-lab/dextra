import { Meta } from "@storybook/web-components";
import { html } from "lit";
import "../components/Marks/Dot/src/Dot.ts";
import "../components/Plot/src/Plot.ts";

export default {
  title: "Marks",
};

export const Dot = () => {
  return html`
    <dexter-plot
      data="https://d2vloi59ojgfpi.cloudfront.net/data-query/642da9a7cbd1580008828021"
    >
      <dexter-dot x="avg_daily_pm25" y="income_ratio"> </dexter-dot>
    </dexter-plot>
  `;
};

export const ControlledDot = () => {
  return html`
    <dexter-slider
      data="https://d2vloi59ojgfpi.cloudfront.net/data-query/642da9a7cbd1580008828021"
      option="population"
      min="0"
      max="1000000"
      step="1000"
      title="Minimum Population"
      initialValue="0"
    ></dexter-slider>

    <dexter-plot
      data="https://d2vloi59ojgfpi.cloudfront.net/data-query/642da9a7cbd1580008828021"
    >
      <dexter-dot x="avg_daily_pm25" y="income_ratio"> </dexter-dot>
    </dexter-plot>
  `;
};
