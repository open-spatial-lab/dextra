import { Story, Meta } from "@storybook/web-components";
import "../components/deck";
import { html } from "lit-html";

export default {
  title: "Dextra/Deck",
  argTypes: {
    sql: { control: "text" }
  },
} as Meta;

const Template: Story<Partial<any>> = (props) => {
  return html`
    <dextra-deck />
  `;
};

export const Primary = Template.bind({});
Primary.args = {
};
