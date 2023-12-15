import { html } from "lit";
import { OslData } from "../../data/src/Data";
import { safeCustomElement } from "../../core/decorators/safeCustomElement";
import "@spectrum-web-components/help-text/sp-help-text.js";
import "@spectrum-web-components/action-button/sp-action-button.js";
import "@spectrum-web-components/action-group/sp-action-group.js";
import "@spectrum-web-components/tooltip/sp-tooltip.js";
import { property } from "lit/decorators.js";
import { interpretFuncJsonOrString } from "../../core/utils/converters";
import { nonReactiveStore } from "../../core/state/Store";

const helpText = {
  json: "Download the data in JSON format (Web)",
  csv: "Download the data in CSV format (Excel)",
  tsv: "Download the data in TSV format (Tab Separated Values)",
  markdown: "Download the data in Markdown format",
  text: "Download the data in Text format",
  geojson: "Download the data in GeoJSON format",
} as const;
type FORMATS = keyof typeof helpText;
const formats = Object.keys(helpText) as FORMATS[];

@safeCustomElement("osl-download")
export class OslDownload extends OslData {
  @property({ type: Boolean })
  json: boolean = true;
  @property({ type: Boolean })
  csv: boolean = true;
  @property({ type: Boolean })
  markdown: boolean = false;
  @property({ type: Boolean })
  text: boolean = false;
  @property({ type: Boolean })
  tsv: boolean = false;
  @property({ type: Boolean })
  geojson: boolean = false;
  @property({ type: String })
  size: string = "s";
  @property({ type: String })
  filename: string = "data";
  @property({ converter: interpretFuncJsonOrString })
  parameterSuffixes?: string[];
  
  isReady = true;
  showPreloader = false;
  

  resultsToRowlike(separator: string = ",") {
    const data = JSON.parse(JSON.stringify(this.currentResults));
    const keys = Object.keys(data[0]);
    const rows = data.map((row: any) => keys.map((key) => row[key]).join(separator))
    return {
      data,
      keys,
      rows,
    }
  }
  getFileSuffixes(){
    if(this.parameterSuffixes){
      const parameters = this.store.datasets[this.data]?.parameters

      return "-" + this.parameterSuffixes.map(suffix => parameters[suffix]).join("-")
    } else {
      return ""
    }
  }
  download(format: FORMATS) {
    const link = document.createElement("a");
    const suffixes = this.getFileSuffixes()
    let blob;
    switch (format) {
      case "json": {
        const data = JSON.stringify(this.currentResults);
        blob = new Blob([data], { type: "application/json" });
        link.download = `${this.filename}${suffixes}.json`;
        break;
      }
      case "geojson": {
        const keys = Object.keys(nonReactiveStore[this.data])
        const dataKey = keys.find(key => key.includes("geo") && key.includes(this.currentParametersHash))
        if (!dataKey) {
          alert("Sorry, this data cannot be downloaded as GeoJSON. Please reload the page and try again.")
          return;
        }
        const data = JSON.stringify({
          type: "FeatureCollection",
          // projection 4326
          crs: {
            type: "name",
            properties: {
              name: "EPSG:4326",
            },
          },
          features: nonReactiveStore[this.data][dataKey],
        })
        blob = new Blob([data], { type: "application/json" });
        link.download = `${this.filename}${suffixes}.geojson`;
        break;
      }
      case "csv": {
        const {
          keys,
          rows,
        } = this.resultsToRowlike();

        const csv = [
          keys,
          ...rows
        ].join("\n");
        blob = new Blob([csv], { type: "text/csv" });
        link.download = `${this.filename}${suffixes}.csv`;
        break;
      }
      case "markdown": {
        const {
          keys,
          rows,
        } = this.resultsToRowlike(' | ');
        const markdown = [
          keys.join(" | "),
          keys.map(() => "---").join(" | "),
          ...rows,
        ].join("\n");
        blob = new Blob([markdown], { type: "text/markdown" });
        link.download = `${this.filename}${suffixes}.md`;
        break
      }
      case "text": {
        const {
          keys,
          rows,
        } = this.resultsToRowlike();
        const text = `${keys.join(",")}\n${rows.join("\n")}`
        blob = new Blob([text], { type: "text/plain" });
        link.download = `${this.filename}${suffixes}.txt`;
        break
      }
      case "tsv": {
        const {
          keys,
          rows,
        } = this.resultsToRowlike('\t');
        const tsv = [
          keys,
          ...rows
        ].join("\n");
        blob = new Blob([tsv], { type: "text/tsv" });
        link.download = `${this.filename}${suffixes}.tsv`;
        break
      }
    }
    if (!blob) {
      return;
    }
    const url = URL.createObjectURL(blob);
    link.href = url;
    link.click();
  }

  renderButton(format: FORMATS) {
    if (this[format]) {
      return html`
        <sp-action-button @click="${() => this.download(format)}">
          ${format.toLocaleUpperCase()}
          <sp-tooltip self-managed>${helpText[format]}</sp-tooltip>
        </sp-action-button
        >
      `;
    }
    return html``;
  }
  
  template() {
    return html`
      <div style="position:relative">
        <sp-help-text>${this.title || "Download Data"}</sp-help-text>
        <sp-action-group size="${this.size}">
          ${formats.map(this.renderButton.bind(this))}
        </sp-action-group>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "osl-download": OslDownload;
  }
}
