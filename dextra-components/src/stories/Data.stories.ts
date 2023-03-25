import { Meta } from "@storybook/web-components";
import { html } from "lit";
import "../components/data/src/Data.ts";

export default {
  title: "Primitive",
}

export const Data = () => {
  return html`
    <dexter-data data="https://d2vloi59ojgfpi.cloudfront.net/data-query/6417b73afe20b50008149901"></dexter-data>
    `
}