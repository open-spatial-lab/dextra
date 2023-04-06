import { Meta } from "@storybook/web-components";
import { html } from "lit";
import "../components/Radio/src/Radio.ts";

export default {
  title: "Interface",
};

export const Radio = () => {
  return html`
  <dexter-radio
    data="https://d2vloi59ojgfpi.cloudfront.net/data-query/6417b73afe20b50008149901"
    option="mag"
    options="[5,6,7,8]"
    title="Magnitude"
    label="Select a minimum magnitude to filter the data"
  >
  </dexter-radio>
  `;
};
