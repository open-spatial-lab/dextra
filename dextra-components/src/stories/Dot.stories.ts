import { html } from "lit";
import "../components/Marks/Dot/src/Dot.ts";
import "../components/Plot/src/Plot.ts";
import "../components/Slider/src/Slider.ts";

export default {
  title: "Marks",
};

export const Dot = () => {
  return html`
    <div style="height:75vh;width:100%;">
      <osl-plot>
        <osl-dot-plot
          data="http://localhost:6006/data/household.json"
          x="MedianHouseholdIncome"
          y="UnEmplyPrc"
        >
        </osl-dot-plot>
      </osl-plot>
    </div>
  `;
};

export const ComplexDot = () => {
  return html`
    <p>Median Household Income vs Unemployment Percentage</p>
    <p>Size of the dot is Median Household Income</p>
    <p>Color by State</p>

    <osl-plot
      colorLegend="true"
      data="http://localhost:6006/data/household.json"
    >
      <osl-dot-plot r="MedianHouseholdIncome" x="MedianHouseholdIncome" y="UnEmplyPrc" fill="State"> </osl-dot-plot>
      </osl-dot-plot>
    </osl-plot>
  `;
};

export const ControlledDot = () => {
  return html`
    <osl-slider
      data="http://localhost:6006/data/household.json"
      option="RsiSgrBlckRt"
      min="0"
      max="100"
      step="1"
      title="Segregation Rate"
      initialValue="0"
    ></osl-slider>

    <osl-plot data="http://localhost:6006/data/household.json">
      <osl-dot-plot x="MedianHouseholdIncome" y="UnEmplyPrc"> </osl-dot-plot>
    </osl-plot>
  `;
};
