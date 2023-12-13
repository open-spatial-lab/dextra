import { Meta } from "@storybook/web-components";
import { template as html } from "../utils/templateFunction";
import "../components/FlexBox/src/FlexBox.ts";

export default {
  title: "New",
}

export const FlexBox = () => {
  return html`
    <osl-flexbox></osl-flexbox>
    `
}