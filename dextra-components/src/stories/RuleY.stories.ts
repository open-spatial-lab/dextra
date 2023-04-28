import { Meta } from "@storybook/web-components";
import { html } from "lit";
import "../components/marks/RuleY/src/RuleY.ts";
import "../components/Marks/Dot/src/Dot.ts";
import "../components/Plot/src/Plot.ts";

export default {
  title: "Marks",
}

export const RuleY = () => {
  return html`
    <dexter-plot
    data="https://d2vloi59ojgfpi.cloudfront.net/data-query/642da9a7cbd1580008828021"
    >
    <dexter-dot x="avg_daily_pm25" y="income_ratio"> </dexter-dot>
    <dexter-ruley
    number="[5, 6, 7]"
    ></dexter-ruley>
    </dexter-plot>
    `
}

export const RuleYData = () => {
  return html`
    <dexter-plot
    data="https://d2vloi59ojgfpi.cloudfront.net/data-query/642da9a7cbd1580008828021"
    >
    <dexter-dot x="avg_daily_pm25" y="income_ratio"> </dexter-dot>
    <dexter-ruley
    y="avg_daily_pm25"
    ></dexter-ruley>
    </dexter-plot>
    `
}