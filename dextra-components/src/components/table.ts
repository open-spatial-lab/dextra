import { IterableArrayLike, RowLike } from 'apache-arrow/type';
import { css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { AnalysisLayer } from './core/analysis-layer';

@customElement('dextra-table')
export class DextraTable extends AnalysisLayer {

  @property({ type: Number })
  dataTimestamp: number = 0;

  data: IterableArrayLike<RowLike<any>> | undefined;
  columns: string[] | undefined;

  getColumns() {
    return this.store.datasets?.[this.dataSchema.url]?.columns
  }

  async runAnalysis() {
    const result = await this.getTable();
    this.data = result.data;
    this.dataTimestamp = Date.now();
  }

  tableHeader() {
    if (!this.getColumns()) return html`<tr></tr>`;
    const cols = this.getColumns()!;
    return html`<tr>
        ${cols.map((column: string) => html`<th>${column}</th>`)}
    </tr>`
  }

  tableRow(i: number) {
    return html`<tr>
        ${this.getColumns()!.map((col: string) => html`<td>${this.data![i][col]}</td>`)}
    </tr>`
  }

  tableRows() {
    if (!this.data || !this.getColumns()) return html``;
    return html`${(this.data! as Array<any>).map((_: any, i: number) => this.tableRow(i))}`
  }

  render() {
    return html`
        <table>
            ${this.tableHeader()}
            ${this.tableRows()}
        </table>
    `
  }
  static styles = css`
    table {
        border-collapse: collapse;
        width: 100%;
    }
    th, td {
        text-align: left;
        padding: .125rem 1rem;
        border-right: 1px solid #ddd;
    }
    tr:nth-child(even) {
        background-color: #f2f2f2;
    }
    tr:hover {
        background-color: #ddd;
    }
    tr td:last-child, tr th:last-child {
        border-right: none;
    }

  `

}

declare global {
  interface HTMLElementTagNameMap {
    'dextra-table': DextraTable
  }
}