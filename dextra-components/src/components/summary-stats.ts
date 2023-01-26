import { html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { DextraElement } from './core/dextra-element';
import type {AnalysisSchema, ColumnSchema} from '../../../dextra-utils/src/schemas/data-schema'


@customElement('dextra-summary')
export class DextraSummary extends DextraElement {
  /**
   * Analysis result
   */
  @property({type: String})
  private result: any = null;

  /**
   * Schema for column to access
   */
  @property({type: Object})
  columnSchema: ColumnSchema = {
    column: "Capital city population (UN Urbanization Prospects, 2018)",
  }

  /**
   * Schema for analysis to run
   */
  @property({type: Object})
  analysisSchema: AnalysisSchema = { 
    type: "max"
  }

  private formatResult<T extends number | object | string>(result: T): string {
    switch (typeof result){
      case 'number':
        return result.toLocaleString('en');
      case 'object':
        if (Array.isArray(result)) {
          return `[${result.join(',')}]`;
        }
        return JSON.stringify(result);
      default:
        return result;
    }
  }

  protected async runAnalysis() { 
    if (!this.dataInitialized || !this.worker) {
      await this.init()
    }
    try {
      const worker = this.worker!;
      const analysisResult = await worker.runAnalysis(this.dataSchema, this.columnSchema, this.analysisSchema)
      this.result = this.formatResult(analysisResult);
    } catch {
      this.result = "Error";
    }
  }

  async willUpdate(changedProperties: Map<any, any>){
    if (changedProperties.has('analysisSchema') || changedProperties.has('columnSchema') || changedProperties.has('dataSchema')) {
      await this.runAnalysis()
    }
  }

  render() {
    return html`${this.result?.toLocaleString('en')}`
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'dextra-summary': DextraSummary
  }
}