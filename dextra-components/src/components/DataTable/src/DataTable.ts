import { html } from "lit";
import { property } from "lit/decorators.js";
import { OslData } from "../../data/src/Data";
import { interpretFuncJsonOrString } from "../../core/utils/converters";
import { safeCustomElement } from "../../core/decorators/safeCustomElement";
import "../../Table/src/Table";

@safeCustomElement("osl-data-table")
export class OslTable extends OslData {
  @property({ converter: interpretFuncJsonOrString })
  columns?: string[];

  template() {
    console.log(this.currentResults)
    return html`
    <osl-table .data=${this.currentResults} .columns=${this.columns}></osl-table>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "osl-data-table": OslTable;
  }
}
