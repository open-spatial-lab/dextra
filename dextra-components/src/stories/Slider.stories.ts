import { Meta } from "@storybook/web-components";
import { html } from "lit";
import "../components/Slider/src/Slider.ts";

export default {
  title: "Interface",
};

export const Slider = () => {
  return html`
    <dexter-slider
      data="https://d2vloi59ojgfpi.cloudfront.net/data-query/6417b73afe20b50008149901"
      option="mag"
      min="7"
      max="8"
      step="0.1"
      initialValue="7"
    ></dexter-slider>

    <dexter-data
      data="https://d2vloi59ojgfpi.cloudfront.net/data-query/6417b73afe20b50008149901"
    ></dexter-data>
  `;
};
