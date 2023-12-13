import { Meta } from "@storybook/web-components";
import { template as html } from "../utils/templateFunction";
import "../components/StatTable/src/StatTable.ts";

export default {
  title: "Data",
}

export const StatTable = () => {
  return html`
    <osl-stat-table
    
    data="http://localhost:6006/data/household.json"
      columns='["MedianHouseholdIncomeOr","MedianHouseholdIncome"]'
    ></osl-stat-table>
    `
}