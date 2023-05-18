import { Meta } from "@storybook/web-components";
import { html } from "lit";
import "../components/data/src/Data.ts";

export default {
  title: "Primitive",
};

export const Data = () => {
  return html`
    <osl-data
      data="https://d3uldu0bz6pkei.cloudfront.net/data-query/6463ec5412b93e00099b0e05"
    ></osl-data>
  `;
};
