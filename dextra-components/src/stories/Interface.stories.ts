import { Meta } from "@storybook/web-components";
import { html } from "lit";
import "../components/Interface/src/Interface.ts";
import "../components/data/src/Data.ts";

export default {
  title: "Primitive",
};

export const Interface = () => {
  return html`
    Querying with a magnitude of: <osl-interface
      data="https://d3uldu0bz6pkei.cloudfront.net/data-query/6463ec5412b93e00099b0e05"
      option="mag"
      initialValue="7"
    > </osl-interface>
    <br/> <br/>
    <osl-data
      data="https://d3uldu0bz6pkei.cloudfront.net/data-query/6463ec5412b93e00099b0e05"
    ></osl-data>
  `;
};
