import { Meta } from "@storybook/web-components";
import { template as html } from "../utils/templateFunction";
import "../components/Interface/src/Interface.ts";
import "../components/data/src/Data.ts";

export default {
  title: "Primitive",
};

export const Interface = () => {
  return html`
    Querying with a magnitude of: <osl-interface
      data="http://localhost:6006/data/interaction.json"
      option="mag"
      initialValue="7"
    > </osl-interface>
    <br/> <br/>
    <osl-data
      data="http://localhost:6006/data/interaction.json"
    ></osl-data>
  `;
};
