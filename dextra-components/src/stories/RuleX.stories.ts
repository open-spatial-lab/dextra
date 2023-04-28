import { Meta } from "@storybook/web-components";
import { html } from "lit";
import "../components/marks/RuleX/src/RuleX.ts";
import "../components/Marks/Dot/src/Dot.ts";
import "../components/Plot/src/Plot.ts";

export default {
  title: "Marks",
}

export const RuleX = () => {
  return html`
    <dexter-plot
    data="https://d2vloi59ojgfpi.cloudfront.net/data-query/642da9a7cbd1580008828021"
    >
    <dexter-dot x="avg_daily_pm25" y="income_ratio"> </dexter-dot>
    <dexter-rulex
    number="[4, 10]"
    ></dexter-rulex>
    </dexter-plot>
    `
}

export const RuleXData = () => {
  return html`
    <dexter-plot
    data="https://d2vloi59ojgfpi.cloudfront.net/data-query/642da9a7cbd1580008828021"
    >
    <dexter-dot x="avg_daily_pm25" y="income_ratio"> </dexter-dot>
    <dexter-rulex
    x="uninsured_pct"
    ></dexter-rulex>
    </dexter-plot>
    `
}