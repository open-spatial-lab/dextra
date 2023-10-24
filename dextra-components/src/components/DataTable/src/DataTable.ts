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

  @property({ type: String })
  maxw: string = "100%";

  @property({ type: Boolean })
  pagination: boolean = false;

  @property({ type: Number })
  pageSize: number = 10;

  template() {
    return html`
      <osl-table
        .title=${this.title}
        .maxw=${this.maxw}
        .data=${this.currentResults}
        .columns=${this.columns}
        .pagination=${this.pagination}
        .pageSize=${this.pageSize}
      ></osl-table>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "osl-data-table": OslTable;
  }
}
