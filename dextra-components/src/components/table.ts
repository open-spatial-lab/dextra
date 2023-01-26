import { css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { DextraElement } from './core/dextra-element';


@customElement('dextra-table')
export class DextraTable extends DextraElement {
  /**
   * Analysis result
   */
  @property({type: String})
  private result: null | any = null;

  protected async runAnalysis() { 
    if (!this.dataInitialized || !this.worker) {
      await this.init()
    }
    try {
      const worker = this.worker!;
      const tableRequestResponse = await worker.getTable(this.dataSchema);
      this.result = tableRequestResponse
    } catch {
      this.result = "Error";
    }
  }

  async willUpdate(changedProperties: Map<any, any>){
    if (changedProperties.has('dataSchema')) {
      await this.runAnalysis()
    }
  }
  tableHeader() {
    return html`<tr>
        ${this.result.columns.map((column: string) => html`<th>${column}</th>`)}
    </tr>`
  }

  tableRow(i: number) {
    return html`<tr>
        ${this.result.columns.map((_: string, j: number) => html`<td>${this.result.data[j][i]}</td>`)}
    </tr>`
  }
  tableRows() {
    return html`${this.result.data[0].map((_: any, i: number) => this.tableRow(i))}`

  }
  render() {    
    if (!this?.result?.columns) return null
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