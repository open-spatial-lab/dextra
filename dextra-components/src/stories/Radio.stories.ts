import { Meta } from "@storybook/web-components";
import { template as html } from "../utils/templateFunction";
import "../components/Radio/src/Radio.ts";

export default {
  title: "Interface",
};

export const Radio = () => {
  return html`
  <osl-radio
    data="http://localhost:6006/data/interaction.json"
    option="mag"
    options="[5,6,7,8]"
    title="Magnitude"
    label="Select a minimum magnitude to filter the data"
  >
  </osl-radio>
  `;
};
