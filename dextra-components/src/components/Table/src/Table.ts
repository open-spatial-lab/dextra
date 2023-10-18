import { html } from "lit";
import { property } from "lit/decorators.js";
import "@spectrum-web-components/table/sp-table.js";
import "@spectrum-web-components/table/sp-table-body.js";
import "@spectrum-web-components/table/sp-table-cell.js";
import "@spectrum-web-components/table/sp-table-checkbox-cell.js";
import "@spectrum-web-components/table/sp-table-head.js";
import "@spectrum-web-components/table/sp-table-head-cell.js";
import "@spectrum-web-components/table/sp-table-row.js";
import { interpretFuncJsonOrString } from "../../core/utils/converters";
import { ValtioElement } from "../../core/state";
import { safeCustomElement } from "../../core/decorators/safeCustomElement";

@safeCustomElement("osl-table")
export class OslTable extends ValtioElement<any> {
  @property({ converter: interpretFuncJsonOrString })
  columns?: string[];

  @property({ converter: interpretFuncJsonOrString })
  data?: any[];

  renderHeader(columns: string[]) {
    return html`
      ${columns.map(
        (column) => html`
          <sp-table-head-cell> ${column} </sp-table-head-cell>
        `
      )}
    `;
  }
  renderRows(rows: any[], columns: string[]) {
    return html`
      ${rows.map(
        (row) => html`
          <sp-table-row
            >${columns.map(
              (column) => html`<sp-table-cell>${row[column]}</sp-table-cell>`
            )}
          </sp-table-row>
        `
      )}
    `;
  }

  template() {
    if (!this.data?.length || !this.columns?.length) {
      return this.preloader();
    }

return html`
      <sp-table>
        <sp-table-head> ${this.renderHeader(this.columns)} </sp-table-head>
        <sp-table-body>
          ${this.renderRows(this.data, this.columns)}
        </sp-table-body>
      </sp-table>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "osl-table": OslTable;
  }
}
