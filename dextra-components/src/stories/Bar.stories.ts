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
      marginLeft = 180
      data="https://d3uldu0bz6pkei.cloudfront.net/data-query/649d9a93b7c5c900081ad8dc"     
    >
      <osl-bar y="Active_Ingredient" x="Ingredient_Used_lb_per_acre" direction="horizontal"></osl-bar>
    </osl-plot>
    `
}