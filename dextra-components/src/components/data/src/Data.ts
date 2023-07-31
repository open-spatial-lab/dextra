import { html } from "lit-html";
import { property } from "lit/decorators.js";
import { ValtioElement } from "../../core/state";
import { DataResult } from "../../core/state/types";

// @customElement("osl-data")
export class OslData extends ValtioElement {
  @property({ type: String })
  data = "";

  @property({ type: Array })
  currentResults: DataResult = [];

  @property({ type: String })
  status = "loading";

  @property({ type: String })
  currentParametersHash = "{}";

  // @property({type: Boolean})
  // isNectrBackend = true;

  protected syncDataFromStore(data: string) {
    const results = this.store.datasets[data].results;
    const currentParametersHash = JSON.stringify(
      this.store.datasets[data].parameters
    );
    this.currentResults = results[currentParametersHash];
    this.currentParametersHash = currentParametersHash;
  }

  protected initDataset(data: string) {
    if (!data) return;
    
    if (!this.store.datasets[data] && data !== "") {
      this.store.datasets[data] = {
        parameters: {},
        headless: true,
        results: {},
        status: "loading",
      };
    } else {
      this.syncDataFromStore(data);
    }

    this.subscribe(
      (store) => store.datasets[data].results,
      () => this.syncDataFromStore(data)
    );

    this.subscribe(
      (store) => store.datasets[data].parameters,
      () => this.syncDataFromStore(data)
    );
  }

  connectedCallback() {
    super.connectedCallback();
    this.data && this.initDataset(this.data);
  }

  template() {
    if (this.currentResults) {
      return html`<pre>${JSON.stringify(this.currentResults, null, 2)}</pre>`;
    } else {
      return html`<div>Loading...</div>`;
    }
  }
}
