import { Meta } from "@storybook/web-components";
import { html } from "lit";
import "../components/Download/src/Download.ts";

export default {
  title: "Data",
}

export const Download = () => {
  return html`
    <osl-download
      markdown
      text
      tsv
      title="Sample data"
      filename="sample"
      data="http://localhost:6006/data/map.json"
    ></osl-download>
    `
}