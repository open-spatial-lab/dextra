import { Meta } from "@storybook/web-components";
import { html } from "lit";
import "../components/Switch/src/Switch.ts";

export default {
  title: "Interface",
};

export const Switch = () => {
  return html`
  <osl-interface
    data="https://d3uldu0bz6pkei.cloudfront.net/data-query/6463ec5412b93e00099b0e05"
    option="mag"
    ></osl-interface>
    <br/>
    <osl-switch
      data="https://d3uldu0bz6pkei.cloudfront.net/data-query/6463ec5412b93e00099b0e05"
      option="mag"
      title="On or Off?"
    ></osl-switch>
  `;
};
