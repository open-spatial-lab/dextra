import { html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { AnalysisLayer } from './core/analysis-layer';

@customElement('dextra-summary')
export class DextraSummary extends AnalysisLayer {


  constructor() {
    super();
  }

  private formatResult<T extends number | object | string>(result: T): string {
    switch (typeof result) {
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

  result() {
    // if (this.store.db) {
    //   console.log(this.store.db)
    //   // const analysisResult = await this.store.analyst.db.runAnalysis(this.dataSchema, this.columnSchema, this.analysisSchema)
    //   return this.formatResult('db initialized');
    // }
    return this.formatResult('asdf');
  }
  // protected willUpdate(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
  //   console.log(this.store.db)
  // }

  render() {
    return html`
      ${this.result()}
      ${this.isInitialized ? 'initialized baby' : 'not initialized'}
    `
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'dextra-summary': DextraSummary
  }
}


