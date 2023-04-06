import { Meta } from "@storybook/web-components";
import { html } from "lit";
import "../components/Chips/src/Chips.ts";

export default {
  title: "Interface",
};

export const Chips = () => {
  return html`
    <dexter-chips
      data="https://d2vloi59ojgfpi.cloudfront.net/data-query/6417b73afe20b50008149901"
      initialValue="[5,6,7,8]"
      title="Magnitude"
      option="morg"
      label="Enter a new magnitude value"
    >
    </dexter-chips>
  `;
};
