import { html } from "lit-html";
import { customElement, property } from "lit/decorators.js";
import { ValtioElement } from "../../core/state";
import { DataResult } from "../../core/state/types";

@customElement("dexter-data")
export class DexterData extends ValtioElement {
  @property({ type: String })
  data = "";

  @property({ type: Array })
  currentResults: DataResult = [];

  @property({ type: String })
  status = "loading";

  @property({ type: String })
  currentParametersHash = "{}";

  protected syncDataFromStore(){
    const results = this.store.datasets[this.data].results;
    const currentParametersHash = JSON.stringify(
      this.store.datasets[this.data].parameters
    );
    this.currentResults = results[currentParametersHash];
    this.currentParametersHash = currentParametersHash;
  }

  protected initDataset() {
    if (!this.store.datasets[this.data] && this.data !== "") {
      this.store.datasets[this.data] = {
        parameters: {},
        headless: true,
        results: {},
        status: "loading",
      };
    } else {
      this.syncDataFromStore()
    }

    this.subscribe(
      (store) => store.datasets[this.data].results,
      () => {
        this.syncDataFromStore()
      }
    );

    this.subscribe(
      (store) => store.datasets[this.data].parameters,
      () => {
        this.currentParametersHash = JSON.stringify(
          this.store.datasets[this.data].parameters
        );
      }
    );
  }

  override connectedCallback() {
    super.connectedCallback();
    this.initDataset();
  }

  render() {
    if (this.currentResults) {
      return html`<pre>${JSON.stringify(this.currentResults, null, 2)}</pre>`;
    } else {
      return html`<div>Loading...</div>`;
    }
  }
}
