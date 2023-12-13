import { Meta } from "@storybook/web-components";
import { template as html } from "../utils/templateFunction";
import "../components/Tabs/src/Tabs.ts";

export default {
  title: "New",
}

export const Tabs = () => {
  return html`
  <div style="width:100%;height:100vh;position:relative;">
    <osl-tabs>
      <div data-tab="Tab 1">asdf</div>
      <div data-tab="Tab 2"> asdfasdf</div>
    </osl-tabs>
</div>
    `
}