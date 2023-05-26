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
      data="https://d3uldu0bz6pkei.cloudfront.net/data-query/646fd0f4e06ddb00081c002a"
    ></osl-table>
  `;
};

export const ControlledTable = () => {
  return html`
    <p></p>
    <osl-slider
      data="https://d3uldu0bz6pkei.cloudfront.net/data-query/646fd0f4e06ddb00081c002a"
      option="RsiSgrBlckRt"
      min="0"
      max="100"
      step="1"
      title="Segregation Rate"
      initialValue="0"
    ></osl-slider>

    <osl-table
      data="https://d3uldu0bz6pkei.cloudfront.net/data-query/646fd0f4e06ddb00081c002a"
    ></osl-table>
  `;
};
