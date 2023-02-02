import { Story, Meta } from "@storybook/web-components";
import "../components/summary-stats";
import { html } from "lit-html";
import * as ss from "simple-statistics";

// import { Button, ButtonProps } from './Button';

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: "Example/Text",
  // More on argTypes: https://storybook.js.org/docs/web-components/api/argtypes
  argTypes: {
    // data: {
    //   control: { type: 'select' },
    //   options: ['json', 'csv', 'parquet'],
    // },
    analysis: {
      control: { type: "select" },
      options: Object.keys(ss),
    },
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template: Story<Partial<any>> = (props) => {
  const analysisSchema = {
    type: props.analysis,
  };
  const medianSchema = {
    type: "median",
  };
  const modeSchema = {
    type: "mode",
  };

  return html`
    <h1>Summary Stats</h1>
    <p>Sample data of the population of capital cities across the world. Via Our World in Data (OWID).</p>
    <ul>
      <li>
        ${props.analysis}:
        <dextra-summary
          analysisSchema="${JSON.stringify(analysisSchema)}"
        ></dextra-summary>
      </li>
      <li>
        Median:
        <dextra-summary
          analysisSchema="{type:median}"
        ></dextra-summary>
      </li>
      <li>
        Mode:
        <dextra-summary
          analysisSchema="${JSON.stringify(modeSchema)}"
        ></dextra-summary>
      </li>
    </ul>
  `;
};
// Button(args);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/web-components/writing-stories/args
Primary.args = {
  analysis: "max",
};
