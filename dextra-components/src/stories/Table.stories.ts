import { Story, Meta } from "@storybook/web-components";
import "../components/table";
import { html } from "lit-html";

// import { Button, ButtonProps } from './Button';

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: "Example/Table",
  // More on argTypes: https://storybook.js.org/docs/web-components/api/argtypes
  argTypes: {
    // data: {
    //   control: { type: 'select' },
    //   options: ['json', 'csv', 'parquet'],
    // },
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template: Story<Partial<any>> = (props) => {

  return html`
    <h1>Data Table</h1>
    <dextra-table></dextra-table>
`;
};
// Button(args);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/web-components/writing-stories/args
Primary.args = {
  analysis: "max",
};
