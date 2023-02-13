import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { DataSchema } from "../../../dextra-utils/src/schemas/interfaces";
import { AnalysisLayer } from "./core/analysis-layer";

@customElement("dextra-sql")
export class DextraSql extends AnalysisLayer {
  constructor() {
    super();
  }

  @property({ type: String })
  protected sqlString =
    'SELECT * FROM "https://raw.githubusercontent.com/Matico-Platform/sample-data/main/earthquakes/earthquakes.csv"';

  protected override async loadData(): Promise<void> {
    // const urls =
    // regex all URLs beginning with http or https
    // and replace trailing quotation makr with nothing
    const urls = (this.sqlString.match(/(https?:\/\/[^\s]+)/g) || [])
      .map((url) => url.replace(/"/g, ""))
      .filter((url) => !this.store.datasets[url]);
    
    const dataLoadResults = await Promise.all(
      urls.map((url) => this.loadFile("csv", `${url}`))
    );
    // load each data load result into this.store.datasets
    urls.forEach((url, i) => {
      this.store.datasets[url] = dataLoadResults[i]!;
    });
  }
  override async runAnalysis() {
    await this.loadData();
    const data = await this.query(this.sqlString);
    this.result = this.toObject(data.toArray());
  }

  protected override updateTriggers = ["sqlString"];

  dataSchema: DataSchema = null;

  private formatResult<T extends number | object | string>(result: T): string {
    return JSON.stringify(result, null, 2);
  }

  render() {
    return html`
      <code>
        ${this.sqlString}
      </code>
      <hr/>
    <code>

      ${this.formatResult(this.result)}
    </code>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "dextra-sql": DextraSql;
  }
}
