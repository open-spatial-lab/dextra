import { Meta } from "@storybook/web-components";
import { html } from "lit";
import "../components/Table/src/Table.ts";
import "../components/Slider/src/Slider.ts";


export default {
  title: "Data",
};


export const Table = () => {
  return html`
    <osl-table
      data="https://d3uldu0bz6pkei.cloudfront.net/data-query/642da9a7cbd1580008828021"
    ></osl-table>
    `
}


export const ControlledTable = () => {
  return html`
  <p></p>
    <osl-slider
      data="https://d3uldu0bz6pkei.cloudfront.net/data-query/642da9a7cbd1580008828021"
      option="population"
      min="0"
      max="1000000"
      step="1000"
      title="Minimum Population"
      initialValue="0"
    ></osl-slider>

    <osl-table
      data="https://d3uldu0bz6pkei.cloudfront.net/data-query/642da9a7cbd1580008828021"
    ></osl-table>
  `;
};
