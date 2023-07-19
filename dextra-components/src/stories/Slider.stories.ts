import { Meta } from "@storybook/web-components";
import { html } from "lit";
import "../components/Slider/src/Slider.ts";
import "../components/CoreBundle/src/CoreBundle.ts";
import "../components/Select/src/Select.ts";

export default {
  title: "Interface",
};

export const Slider = () => {
  return html`
  The value is: 
    <osl-slider
      data="http://localhost:6006/data/interaction.json"
      option="mag"
      min="5"
      max="8"
      step="1"
      initialValue="7"
      title="Magnitude"
    ></osl-slider>
    <osl-select
      data="http://localhost:6006/data/interaction.json"
      option="mag"
      options="[5,6,7,8]"
    >
    </osl-select>

  `;
};
