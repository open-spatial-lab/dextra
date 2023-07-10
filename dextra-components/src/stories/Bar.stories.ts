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
      data="https://d3uldu0bz6pkei.cloudfront.net/data-query/649d9a93b7c5c900081ad8dc"     
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
      axis_x = null
      data="https://d3uldu0bz6pkei.cloudfront.net/data-query/64a2e11ff85e5800085aab6d"     
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
      marginLeft = 60 
      colorLegend="true" 
      data="https://d3uldu0bz6pkei.cloudfront.net/data-query/64a2e11ff85e5800085aab6d"     
    >
    <osl-bar x="key" 
      y="population" 
      direction="vertical" 
      fill="state" 
    ></osl-bar>
    </osl-plot>
    `
}