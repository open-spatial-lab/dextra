import { Meta } from "@storybook/web-components";
import { html } from "lit";
import "../components/Slider/src/Slider.ts";
import "../components/Select/src/Select.ts";
import "../components/Interface/src/Interface.ts";

export default {
  title: "Interface",
};

export const Slider = () => {
  const data = ["http://localhost:6006/data/interaction.json", "http://localhost:6006/data/summary.json"];
  const dataString = JSON.stringify(data);
  
  return html`
    The value is:
    <osl-slider
      data="${dataString}"
      option="mag"
      min="5"
      max="8"
      step="1"
      initialValue="7"
      title="Magnitude"
    ></osl-slider>
    <osl-interface
      data="http://localhost:6006/data/interaction.json"
      option="mag"
      initialValue="7"
    > </osl-interface><osl-interface
      data="http://localhost:6006/data/summary.json"
      option="mag"
      initialValue="7"
    > </osl-interface>
  `;
};

export const Range = () => {
  const data = ["http://localhost:6006/data/interaction.json", "http://localhost:6006/data/summary.json"];
  const dataString = JSON.stringify(data);
  
  return html`
    The value is:
    <osl-slider
      data="${dataString}"
      range="true"
      option="mag"
      min="5"
      max="8"
      step=".1"
      initialValue="[5,8]"
      title="Magnitude"
    ></osl-slider>
    <osl-interface
      data="http://localhost:6006/data/interaction.json"
      option="mag"
      initialValue="7"
    > </osl-interface><osl-interface
      data="http://localhost:6006/data/summary.json"
      option="mag"
      initialValue="7"
    > </osl-interface>
  `;
};
