// import { Story, Meta } from "@storybook/web-components";
// import "../components/summary-stats";
// import { html } from "lit-html";
// import * as ss from "simple-statistics";
// import { Data } from "../../../dextra-utils/src/schemas/data";
// import { DataSchema } from "../../../dextra-utils/src/schemas/interfaces";

// // More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
// export default {
//   title: "Example/Worker",
//   // More on argTypes: https://storybook.js.org/docs/web-components/api/argtypes
//   argTypes: {},
// } as Meta;

// const Test = async () => {
//   const analyst = new Data();
//   await analyst.init();
//   const schema = {
//     type: "csv",
//     url: "https://raw.githubusercontent.com/owid/owid-datasets/master/datasets/Capital%20city%20population%20-%20UN%20Urbanization%20Prospects%20(2018)/Capital%20city%20population%20-%20UN%20Urbanization%20Prospects%20(2018).csv",
//   } satisfies DataSchema

//   const data = await analyst.loadData(schema);
//   // const dataView = await analyst.runAnalysis(
//   //   schema,
//   //   {
//   //     column: "Capital city population (UN Urbanization Prospects, 2018)"
//   //   },
//   //   {
//   //     type: "max"
//   //   }
//   // )
//   // console.log('sum', dataView);
// }

// const Template: Story<Partial<any>> = (props) => {
//   Test()
//   return html`
//     <h1>Summary Stats</h1>
//     </ul>
//   `;
// };

// export const Primary = Template.bind({});
// // More on args: https://storybook.js.org/docs/web-components/writing-stories/args
// Primary.args = {};
