import { Meta } from "@storybook/web-components";
import { template as html } from "../utils/templateFunction";
import "../components/ParamView/src/ParamView.ts";

export default {
  title: "Interface",
}

export const ParamView = () => {
  return html`
    <osl-paramview></osl-paramview>
    `
}