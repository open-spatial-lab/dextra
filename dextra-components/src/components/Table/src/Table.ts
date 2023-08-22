import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { OslData } from "../../data/src/Data";
import "@spectrum-web-components/table/sp-table.js";
import "@spectrum-web-components/table/sp-table-body.js";
import "@spectrum-web-components/table/sp-table-cell.js";
import "@spectrum-web-components/table/sp-table-checkbox-cell.js";
import "@spectrum-web-components/table/sp-table-head.js";
import "@spectrum-web-components/table/sp-table-head-cell.js";
import "@spectrum-web-components/table/sp-table-row.js";
import { interpretFuncJsonOrString } from "../../core/utils/converters";

@customElement("osl-table")
export class OslTable extends OslData {
  @property({ converter: interpretFuncJsonOrString })
  columns?: string[];

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
    if (!this.currentResults?.length) {
      return this.preloader();
    }
    const columns = this.columns || Object.keys(this.currentResults[0]);
    return html`
      <sp-table>
        <sp-table-head> ${this.renderHeader(columns)} </sp-table-head>
        <sp-table-body>
          ${this.renderRows(this.currentResults, columns)}
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
