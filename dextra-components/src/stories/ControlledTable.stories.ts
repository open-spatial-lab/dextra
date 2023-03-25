import { Meta } from "@storybook/web-components";
import { html } from "lit-html";

export interface TableProps {
}

export default {
  title: "Headless/ControlledTable",
}

export const Table = () => {
    const data =
      "https://d2vloi59ojgfpi.cloudfront.net/data-query/6417b73afe20b50008149901";
    return html`
      <h1>Data Table</h1>
      <!-- <dextra-table data="${data}"></dextra-table> -->
  
      <dextra-slider
        min="5"
        max="8"
        step="0.1"
        initialValue="8"
        data="${data}"
        variable="mag"
      ></dextra-slider>
      <dextra-slider
        min="5"
        max="8"
        step="0.1"
        initialValue="8"
        data="${data}"
        variable="mag"
      ></dextra-slider>
    `;
}