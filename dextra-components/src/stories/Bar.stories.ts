import { Meta } from "@storybook/web-components";
import { template as html } from "../utils/templateFunction"; 
import "../components/marks/Bar/src/Bar.ts";
import "../components/Plot/src/Plot.ts";

export default {
  title: "Marks",
}

export const Bar = () => {
  return html`
  <div style="width: 100%; height: 500px">
  <osl-plot
      marginLeft="180"
      data="http://localhost:6006/data/pesticide.json"
      xAxisScaling="sqrt"     
    >
    <osl-bar y="Active_Ingredient" x="Ingredient_Used_lb_per_acre" direction="horizontal"></osl-bar>
    </osl-plot>
    </div>
    `
}

export const GroupedBar = () => {
  return html`
  <div style="height: 500px;width:700px;">
  <osl-plot
      marginLeft="80"
      colorLegend="true" 
      xAxisAnchor="null"
      data="http://localhost:6006/data/population-state-age.json"    
    >
    <osl-bar 
      x="key" 
      y="population" 
      direction="vertical" 
      fill="key" 
      fx="state"
    ></osl-bar>
    </osl-plot>
</div>
    `
}

export const StackedBar = () => {
  return html`
  <osl-plot
      marginLeft="65"
      colorLegend="true" 
      data="http://localhost:6006/data/population-state-age.json"     
    >
    <osl-bar 
      x="key" 
      y="population" 
      direction="vertical" 
      fill="state" 
    ></osl-bar>
    </osl-plot>
    `
}