import { Meta } from "@storybook/web-components";
import { html } from "lit";
import "../components/Slider/src/Slider.ts";

export default {
  title: "Interface",
};

export const Slider = () => {
  return html`
  The value is: 
  <osl-interface
    data="https://d3uldu0bz6pkei.cloudfront.net/data-query/6463ec5412b93e00099b0e05"
    option="mag"
    ></osl-interface>
    <br/>
    <hr/>
    <br/>
    <osl-slider
      data="https://d3uldu0bz6pkei.cloudfront.net/data-query/6463ec5412b93e00099b0e05"
      option="mag"
      min="7"
      max="8"
      step="0.1"
      initialValue="7"
      title="Magnitude"
    ></osl-slider>

  `;
};
