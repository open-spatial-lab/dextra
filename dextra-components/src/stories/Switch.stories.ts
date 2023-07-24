import { Meta } from "@storybook/web-components";
import { html } from "lit";
import "../components/Switch/src/Switch.ts";

export default {
  title: "Interface",
};

export const Switch = () => {
  return html`
  <osl-interface
    data="http://localhost:6006/data/interaction.json"
    option="mag"
    ></osl-interface>
    <br/>
    <osl-switch
      data="http://localhost:6006/data/interaction.json"
      option="mag"
      title="On or Off?"
    ></osl-switch>
  `;
};
