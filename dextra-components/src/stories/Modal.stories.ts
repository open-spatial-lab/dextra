import { Meta } from "@storybook/web-components";
import { html } from "lit";
import "../components/modal/src/modal.ts";

export default {
  title: "New",
};

export const Modal = () => {
  return html`
  <div style="width:100%;height:100vh;position:relative;">
      <osl-modal>
      <div>asdf222</div>
      </osl-modal>
</div>
  `;
};
