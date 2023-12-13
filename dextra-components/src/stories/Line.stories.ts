import { Meta } from "@storybook/web-components";
import { template as html } from "../utils/templateFunction";
import "../components/marks/Line/src/Line.ts";
import "../components/marks/Axis/src/Axis.ts";
import "../components/Plot/src/Plot.ts";
import "../components/Select/src/Select.ts";
import "../components/Select/src/SelectControl.ts";

export default {
  title: "Marks",
};
export const TestLine = () => {
  return html`
  <osl-select-control
data="https://d27ouidsqnp6r.cloudfront.net/data-query/653b1ac2972e0e000881230a"    
options='["1","2","3","4","5","6","7","8"]'
option="congressional_district"
defaultOption="1"
initialValue="1"
>
</osl-select-control>
<br/>&nbsp;
  <div style="height: 60vh; width: 100%">

<osl-plot
colorLegend="true" 
data="https://d27ouidsqnp6r.cloudfront.net/data-query/653b1ac2972e0e000881230a"    
>
<osl-line 
x="Date"
y="total_capacity"
direction="horizontal"
></osl-line>
</osl-plot>
</div>
  `
}

export const Line = () => {
  return html`
    <div style="height: 60vh; width: 100%">
      <osl-plot
        data="http://localhost:6006/data/temperature.json"
        marginBottom="80"
        marginRight="80"
      >
        <osl-line x="date" y="temp_min" stroke="teal"></osl-line>
      </osl-plot>
    </div>
  `;
};

export const LiveLine = () => {
  return html` <div style="height:60vh; width: 100%">
    <osl-plot
      colorLegend="true"
      data="https://d14xp4vykd1up4.cloudfront.net/data-query/65398b212a30750008bf0ef1?community=16"
    >
      <osl-line x="date" y="crashes" direction="horizontal"></osl-line>
    </osl-plot>
  </div>`;
};
