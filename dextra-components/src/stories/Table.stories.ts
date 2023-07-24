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
      data="http://localhost:6006/data/household.json"
    ></osl-table>
  `;
};

export const ControlledTable = () => {
  return html`
    <p></p>
    <osl-slider
      data="http://localhost:6006/data/household.json"
      option="RsiSgrBlckRt"
      min="0"
      max="100"
      step="1"
      title="Segregation Rate"
      initialValue="0"
    ></osl-slider>

    <osl-table
      data="http://localhost:6006/data/household.json"
    ></osl-table>
  `;
};
