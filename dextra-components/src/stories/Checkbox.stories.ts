import { Meta } from "@storybook/web-components";
import { html } from "lit";
import "../components/Checkbox/src/Checkbox.ts";
import "../components/CoreBundle/src/CoreBundle.ts";

export default {
  title: "Interface",
}

export const Checkbox = () => {
  return html`

The value is: 
  <osl-interface
    data="https://d3uldu0bz6pkei.cloudfront.net/data-query/6463ec5412b93e00099b0e05"
    option="mag"
    ></osl-interface>
    <br/>
    <hr/>
    <br/>
    <osl-checkbox
      options="[1,2,3]"
      initialValue="[1,2]"
      option="mag"
      data="https://d3uldu0bz6pkei.cloudfront.net/data-query/6463ec5412b93e00099b0e05"

    >


    </osl-checkbox>
    `
}