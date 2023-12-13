import { Meta } from "@storybook/web-components";
import { template as html } from "../utils/templateFunction";
import "../components/DataTable/src/DataTable.ts";
import "../components/Slider/src/Slider.ts";

export default {
  title: "Data",
};

export const Table = () => {
  return html`
    <osl-data-table
      data="http://localhost:6006/data/household.json"
      columns='["State","FIPS"]'
    ></osl-data-table>
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
