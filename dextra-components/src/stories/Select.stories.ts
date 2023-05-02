import { Meta } from "@storybook/web-components";
import { html } from "lit";
import "../components/Select/src/Select.ts";

export default {
  title: "Interface",
}

export const Select = () => {
  return html`
    The value is:
    <osl-interface
      data="https://d2vloi59ojgfpi.cloudfront.net/data-query/6417b73afe20b50008149901"
      option="mag"
      ></osl-interface>
      <br/>
      <hr/>
      <br/>
    <osl-select
      data="https://d2vloi59ojgfpi.cloudfront.net/data-query/6417b73afe20b50008149901"
      option="mag"
      options="[5,6,7,8]"
    >
    </osl-select>
    `
}