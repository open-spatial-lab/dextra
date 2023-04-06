import { Meta } from "@storybook/web-components";
import { html } from "lit";
import "../components/Checkbox/src/Checkbox.ts";

export default {
  title: "Interface",
}

export const Checkbox = () => {
  return html`
    <dexter-checkbox></dexter-checkbox>
    `
}