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
      data="https://d3uldu0bz6pkei.cloudfront.net/data-query/6463ec5412b93e00099b0e05"
    >
      <osl-bar></osl-bar>
    </osl-plot>
    `
}