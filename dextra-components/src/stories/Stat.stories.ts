import { Meta } from "@storybook/web-components";
import { html } from "lit";
import "../components/Stat/src/Stat.ts";
import "../components/FlexBox/src/FlexBox.ts";

export default {
  title: "Data",
};

export const Stat = () => {
  return html`
    <osl-flex-box
      breakpoint="md"
    >
      <osl-stat
        title="Stat 1"
        subtitle="A great explanation"
        property="mag"
        data="http://localhost:6006/data/summary.json"
      >
      </osl-stat>
      <osl-stat
        title="Stat 2"
        subtitle="Another very good stat"
        property="dmin"
        data="http://localhost:6006/data/summary.json"
      >
      </osl-stat>
      <osl-stat
        title="Stat 3"
        subtitle="Long Stat"
        property="title"
        statSize="1rem"
        data="http://localhost:6006/data/summary.json"
      >
      </osl-stat>
      <osl-stat
        title="Stat 3"
        subtitle="Formatted Stat"
        property="code"
        format="nice"
        data="http://localhost:6006/data/summary.json"
      >
      </osl-stat>
    </osl-flex-box>
  `;
};
