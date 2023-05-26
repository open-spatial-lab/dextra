import { Meta } from "@storybook/web-components";
import { html } from "lit";
import "../components/Marks/Dot/src/Dot.ts";
import "../components/Plot/src/Plot.ts";
import "../components/Slider/src/Slider.ts";

export default {
  title: "Marks",
};

export const Dot = () => {
  return html`
    <osl-plot
      data="https://d3uldu0bz6pkei.cloudfront.net/data-query/646fd0f4e06ddb00081c002a"
    >
      <osl-dot-plot x="MedianHouseholdIncome" y="UnEmplyPrc"> </osl-dot-plot>
    </osl-plot>
  `;
};

export const ComplexDot = () => {
  return html`
    <p>Median Household Income vs Unemployment Percentage</p>
    <p>Size of the dot is Median Household Income</p>
    <p>Color by State</p>

    <osl-plot
      colorLegend="true"
      data="https://d3uldu0bz6pkei.cloudfront.net/data-query/646fd0f4e06ddb00081c002a"
    >
      <osl-dot-plot r="MedianHouseholdIncome" x="MedianHouseholdIncome" y="UnEmplyPrc" fill="State"> </osl-dot-plot>
      </osl-dot-plot>
    </osl-plot>
  `;
};

export const ControlledDot = () => {
  return html`
    <osl-slider
      data="https://d3uldu0bz6pkei.cloudfront.net/data-query/646fd0f4e06ddb00081c002a"
      option="RsiSgrBlckRt"
      min="0"
      max="100"
      step="1"
      title="Segregation Rate"
      initialValue="0"
    ></osl-slider>

    <osl-plot
      data="https://d3uldu0bz6pkei.cloudfront.net/data-query/646fd0f4e06ddb00081c002a"
    >
      <osl-dot-plot x="MedianHouseholdIncome" y="UnEmplyPrc"> </osl-dot-plot>
    </osl-plot>
  `;
};
