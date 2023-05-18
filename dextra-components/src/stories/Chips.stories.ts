import { Meta } from "@storybook/web-components";
import { html } from "lit";
import "../components/Chips/src/Chips.ts";

export default {
  title: "Interface",
};

export const Chips = () => {
  return html`
    <osl-chips
      data="https://d3uldu0bz6pkei.cloudfront.net/data-query/6463ec5412b93e00099b0e05"
      initialValue="[5,6,7,8]"
      title="Magnitude"
      option="morg"
      label="Enter a new magnitude value"
    >
    </osl-chips>
  `;
};
