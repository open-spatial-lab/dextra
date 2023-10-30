import { Meta } from "@storybook/web-components";
import { html } from "lit";
import "../components/ButtonGroup/src/ButtonGroup.ts";

export default {
  title: "Interface",
};

export const ButtonGroup = () => {
  return html`
    <osl-button-group
      data="http://localhost:6006/data/temperature.json"
      items="[1,2,3,4]"
      option="value"
      variant="secondary"
    >
    </osl-button-group>
  `;
};
