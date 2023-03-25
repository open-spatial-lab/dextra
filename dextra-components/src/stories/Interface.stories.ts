import { Meta } from "@storybook/web-components";
import { html } from "lit";
import "../components/Interface/src/Interface.ts";
import "../components/data/src/Data.ts";

export default {
  title: "Primitive",
};

export const Interface = () => {
  return html`
    Querying with a magnitude of: <dexter-interface
      data="https://d2vloi59ojgfpi.cloudfront.net/data-query/6417b73afe20b50008149901"
      option="mag"
      initialValue="7"
    > </dexter-interface>
    <br/> <br/>
    <dexter-data
      data="https://d2vloi59ojgfpi.cloudfront.net/data-query/6417b73afe20b50008149901"
    ></dexter-data>
  `;
};
