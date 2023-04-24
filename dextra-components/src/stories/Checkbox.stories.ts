import { Meta } from "@storybook/web-components";
import { html } from "lit";
import "../components/Checkbox/src/Checkbox.ts";

export default {
  title: "Interface",
}

export const Checkbox = () => {
  return html`

The value is: 
  <osl-interface
    data="https://d2vloi59ojgfpi.cloudfront.net/data-query/6417b73afe20b50008149901"
    option="mag"
    ></osl-interface>
    <br/>
    <hr/>
    <br/>
    <osl-checkbox
      options="[1,2,3]"
      data="https://d2vloi59ojgfpi.cloudfront.net/data-query/6417b73afe20b50008149901"

    >


    </osl-checkbox>
    `
}