import { Meta } from "@storybook/web-components";
import { html } from "lit";
import "../components/Chips/src/Chips.ts";

export default {
  title: "Interface",
};

export const Chips = () => {
  return html`
    <osl-chips
      data="http://localhost:6006/data/interaction.json"
      initialValue="[5,6,7,8]"
      title="Magnitude"
      option="morg"
      label="Enter a new magnitude value"
    >
    </osl-chips>
  `;
};
