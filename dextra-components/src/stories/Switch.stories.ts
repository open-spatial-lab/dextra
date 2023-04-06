import { Meta } from "@storybook/web-components";
import { html } from "lit";
import "../components/Switch/src/Switch.ts";

export default {
  title: "Interface",
}

export const Switch = () => {
  return html`
    <dexter-switch></dexter-switch>
    `
}