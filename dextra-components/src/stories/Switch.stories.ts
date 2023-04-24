import { Meta } from "@storybook/web-components";
import { html } from "lit";
import "../components/Switch/src/Switch.ts";

export default {
  title: "Interface",
};

export const Switch = () => {
  return html`
  <osl-interface
    data="https://d2vloi59ojgfpi.cloudfront.net/data-query/6417b73afe20b50008149901"
    option="mag"
    ></osl-interface>
    <br/>
    <osl-switch
      data="https://d2vloi59ojgfpi.cloudfront.net/data-query/6417b73afe20b50008149901"
      option="mag"
      title="On or Off?"
    ></osl-switch>
  `;
};
