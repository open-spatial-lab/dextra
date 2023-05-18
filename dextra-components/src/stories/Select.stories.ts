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
      data="https://d3uldu0bz6pkei.cloudfront.net/data-query/6463ec5412b93e00099b0e05"
      option="mag"
      ></osl-interface>
      <br/>
      <hr/>
      <br/>
    <osl-select
      data="https://d3uldu0bz6pkei.cloudfront.net/data-query/6463ec5412b93e00099b0e05"
      option="mag"
      options="[5,6,7,8]"
    >
    </osl-select>
    `
}