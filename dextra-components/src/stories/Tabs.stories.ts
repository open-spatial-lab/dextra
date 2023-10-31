import { Meta } from "@storybook/web-components";
import { html } from "lit";
import "../components/Tabs/src/Tabs.ts";

export default {
  title: "New",
}

export const Tabs = () => {
  return html`
  <div style="width:100%;height:100vh;position:relative;">
    <osl-tabs
      tabs="[1,2]"
    >
  <div slot="1">asdf</div>
  <div slot="2">asdfasdf</div>
  </osl-tabs>
</div>
    `
}