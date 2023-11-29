import { Meta } from "@storybook/web-components";
import { html } from "lit";
import "../components/EqualSpacingGrid/src/EqualSpacingGrid.ts";

export default {
  title: "New",
};

export const EqualSpacingGrid = () => {
  return html`
    <div style="width:500px;border:1px solid skyblue">
      <osl-eq-grid breakpoint="lg">
        <div style="border:1px solid green;">1</div>
        <div style="border:1px solid yellow;">2</div>
        <div style="border:1px solid red;">3</div>
      </osl-eq-grid>
    </div>
  `;
};
