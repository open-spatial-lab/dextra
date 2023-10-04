import { Meta } from "@storybook/web-components";
import { html } from "lit";
import "../components/Select/src/Select.ts";
import "../components/Select/src/SelectControl.ts";

export default {
  title: "Interface",
}

export const Select = () => {
  return html`
    The value is:
      <br/>
      <hr/>
      <br/>
    <osl-select-control
      data="http://localhost:6006/data/interaction.json"
      option="mag"
      options="[5,6,7,8]"
    >
    </osl-select-control>
    `
}