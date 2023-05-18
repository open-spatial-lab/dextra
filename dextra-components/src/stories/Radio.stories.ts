import { Meta } from "@storybook/web-components";
import { html } from "lit";
import "../components/Radio/src/Radio.ts";

export default {
  title: "Interface",
};

export const Radio = () => {
  return html`
  <osl-radio
    data="https://d3uldu0bz6pkei.cloudfront.net/data-query/6463ec5412b93e00099b0e05"
    option="mag"
    options="[5,6,7,8]"
    title="Magnitude"
    label="Select a minimum magnitude to filter the data"
  >
  </osl-radio>
  `;
};
