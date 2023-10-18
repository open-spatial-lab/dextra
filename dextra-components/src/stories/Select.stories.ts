import { Meta } from "@storybook/web-components";
import { html } from "lit";
import "../components/Select/src/SelectControl.ts";
import "../components/Interface/src/Interface.ts";


export default {
  title: "Interface",
}

export const Select = () => {
  const complexOptions = JSON.stringify([
    {
      label: "Magnitude",
      value: "mag",
    },
    {
      label: "Depth",
      value: "depth",
    },
    {
      label: "Time",
      value: "time",
    },
  ]);
  const options = JSON.stringify(["http://localhost:6006/data/interaction.json","http://localhost:6006/data/interaction2.json"])
  return html`
    The value is:
    <osl-interface
      data="http://localhost:6006/data/interaction.json"
      option="mag"
      initialValue="7"
    > </osl-interface>
    <br />
    <br />
    <osl-select-control
      data=${options}
      option="mag"
      options="[5,6,7,8]"
    >
    </osl-select-control>
    <br />
    <hr/>
    <br />
    The value is:
    <osl-interface
      data="http://localhost:6006/data/interaction.json"
      option="mag2"
      initialValue="mag"
    > </osl-interface>
    <br />
    <br />
    <osl-select-control
      data="http://localhost:6006/data/interaction.json"
      option="mag2"
      options=${complexOptions}
    >
    </osl-select-control>
  `;
}