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

  render() {
    return html`
      ${this.formatResult(this.result)}
    `
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'dextra-summary': DextraSummary
  }
}


