import { Meta } from "@storybook/web-components";
import { template as html } from "../utils/templateFunction";
import "../components/Checkbox/src/Checkbox.ts";
import "../components/CoreBundle/src/CoreBundle.ts";

export default {
  title: "Interface",
}

export const Checkbox = () => {
  return html`

The value is: 
  <osl-interface
    data="http://localhost:6006/data/interaction.json"
    option="mag"
    ></osl-interface>
    <br/>
    <hr/>
    <br/>
    <osl-checkbox
      options="[1,2,3]"
      initialValue="[]"
      option="mag"
      data="http://localhost:6006/data/interaction.json"

    >


    </osl-checkbox>
    `
}