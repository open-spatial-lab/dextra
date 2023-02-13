import { Story, Meta } from "@storybook/web-components";
import "../components/any-sql";
import { html } from "lit-html";

export default {
  title: "Dextra/SQL",
  argTypes: {
    sql: { control: "text" }
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template: Story<Partial<any>> = (props) => {
  
  return html`
    <dextra-sql
      sqlString=${props.sql} />
  `;
};
// Button(args);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/web-components/writing-stories/args
Primary.args = {
  sql: `SELECT * FROM "https://raw.githubusercontent.com/Matico-Platform/sample-data/main/earthquakes/earthquakes.csv"`
};
