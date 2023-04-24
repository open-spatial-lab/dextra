import { Meta } from "@storybook/web-components";
import { html } from "lit";
import "../components/Marks/Dot/src/Dot.ts";
import "../components/Plot/src/Plot.ts";

export default {
  title: "Marks",
};

export const Dot = () => {
  return html`
    <osl-plot
      data="https://d2vloi59ojgfpi.cloudfront.net/data-query/642da9a7cbd1580008828021"
    >
      <osl-dot x="avg_daily_pm25" y="income_ratio"> </osl-dot>
    </osl-plot>
  `;
};

export const ComplexDot = () => {
  return html`
    <p>Air quality vs income inequality ratio</p>
    <p>Size of the dot is population</p>
    <p>Color of the dot is presence of water quality violation</p>

    <osl-plot
      colorLegend="true"
      data="https://d2vloi59ojgfpi.cloudfront.net/data-query/642da9a7cbd1580008828021"
    >
      <osl-dot
        x="avg_daily_pm25"
        y="income_ratio"
        fill="water_violation"
        r="population"
      >
      </osl-dot>
    </osl-plot>
  `;
};

export const ControlledDot = () => {
  return html`
    <osl-slider
      data="https://d2vloi59ojgfpi.cloudfront.net/data-query/642da9a7cbd1580008828021"
      option="population"
      min="0"
      max="1000000"
      step="1000"
      title="Minimum Population"
      initialValue="0"
    ></osl-slider>

    <osl-plot
      data="https://d2vloi59ojgfpi.cloudfront.net/data-query/642da9a7cbd1580008828021"
    >
      <osl-dot x="avg_daily_pm25" y="income_ratio"> </osl-dot>
    </osl-plot>
  `;
};
