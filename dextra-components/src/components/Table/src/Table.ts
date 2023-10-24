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
import "../../FlexBox/src/FlexBox";

@safeCustomElement("osl-table")
export class OslTable extends ValtioElement<any> {
  @property({ converter: interpretFuncJsonOrString })
  columns?: string[];

  @property({ converter: interpretFuncJsonOrString })
  data?: any[];

  @property({ type: String })
  maxw: string = "100%";

  @property({ type: Boolean })
  pagination: boolean = false;

  @property({ type: Number })
  pageSize: number = 10;

  @property({ type: Number })
  page = 0;

  resetPage(){ this.page = 0}

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("property-changed", (event: any) => {
      if (event.detail.name === "data") {
        this.resetPage()
        // console.log("Data changed:", this.data);
      }
    });
    
  }

  renderHeader(columns: string[]) {
    return html`
      ${columns.map(
        (column) => html` <sp-table-head-cell> ${column} </sp-table-head-cell> `
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
  renderPagination(pages: number) {
    const range = [...Array(pages).keys()];
    const handlePageIncrement = () => this.page = this.page === pages ? pages : (this.page + 1)
    const handlePageDecrement = () => this.page = this.page === 0 ? 0 : (this.page - 1)

    return html`
      <sp-action-group size="sm">
        <sp-action-button @click=${handlePageDecrement}>Previous Page</sp-action-button>

        <sp-action-menu size="m">
          <span slot="label">Page ${this.page+1} / ${pages}</span>
          ${range.map(i => html`<sp-menu-item @click=${() => this.page = i}> ${i+1} </sp-menu-item>`)}
        </sp-action-menu>
        <sp-action-button @click=${handlePageIncrement}>Next Page</sp-action-button>
      </sp-action-group>
    `;
  }
  template() {
    if (!this.data?.length || !this.columns?.length) {
      return this.preloader();
    }
    const data = this.pagination
      ? this.data.slice(
          this.page * this.pageSize,
          (this.page + 1) * this.pageSize
        )
      : this.data;
    const pages = Math.ceil(this.data.length / this.pageSize);
    return html`
      <div>
        <osl-flex-box breakpoint="xl"><div>
        <h3>${this.title}</h3></div>
        <div>
        ${this.pagination ? this.renderPagination(pages) : ""}</div>
      </osl-flex-box>
        <div style="max-width:100vw; overflow-x:auto;">
          <sp-table style="width:${this.maxw}">
            <sp-table-head> ${this.renderHeader(this.columns)} </sp-table-head>
            <sp-table-body>
              ${this.renderRows(data, this.columns)}
            </sp-table-body>
          </sp-table>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "osl-table": OslTable;
  }
}
