import { Meta } from "@storybook/web-components";
import { html } from "lit"; 
import "../components/marks/Bar/src/Bar.ts";
import "../components/Plot/src/Plot.ts";

export default {
  title: "Marks",
}

export const Bar = () => {
  return html`
  <osl-plot
      width = 1000
      height = 500
      marginLeft = 180
      data="http://localhost:6006/data/pesticide.json"
      xAxisScaling="sqrt"     
    >
    <osl-bar y="Active_Ingredient" x="Ingredient_Used_lb_per_acre" direction="horizontal"></osl-bar>
    </osl-plot>
    `
}

export const GroupedBar = () => {
  return html`
  <osl-plot
      width = 1000
      height = 500
      marginLeft = 60
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
    `
}

export const StackedBar = () => {
  return html`
  <osl-plot
      width = 1000 
      height = 500 
      marginLeft = 65 
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