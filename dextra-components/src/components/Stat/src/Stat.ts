import { css, html } from "lit";
import { property } from "lit/decorators.js";
import { OslData } from "../../data/src/Data";
import { safeCustomElement } from "../../core/decorators/safeCustomElement";
import "@spectrum-web-components/help-text/sp-help-text.js";
import { getFormatter, getFormatterPreset, FormatterPresets } from "../../core/utils/numberFormatter";

@safeCustomElement("osl-stat")
export class OslStat extends OslData {
  @property({ type: String })
  property?: string;
  @property({ type: String })
  subtitle?: string;
  @property({ type: String })
  format?: FormatterPresets;
  @property({ type: String })
  statSize: string = "3rem";

  formatter?: Intl.NumberFormat;
  

  getStat() {
    // console.log('getStat', this.currentResults, this.property)
    if ((Array.isArray(this.currentResults) && !this.currentResults?.length) || !this.property) return undefined;
    const data = Array.isArray(this.currentResults)
      ? this.currentResults[0]
      : this.currentResults;
    const value = data[this.property as keyof typeof data];
    return this.formatter ? this.formatter.format(value) : value;
  }

  static get styles() {
    return css`
      :host {
        flex-grow:1;
      }
      .card {
        padding: var(--spectrum-global-dimension-size-200)
          var(--spectrum-global-dimension-size-300);
        border: 1px solid var(--spectrum-global-color-gray-200);
        flex-grow:1;
      }
      .card sp-help-text {
        padding: 0;
        margin: 0;
        font-weight: normal;
        font-size: 1rem;
      }
      .stat {
        margin: 0;
        padding: 0;
        font-size: 3rem;
        font-weight: bold;
      }
    `;
  }
  connectedCallback() {
    super.connectedCallback();
    if (this.format) {
      this.formatter = getFormatter(this.format);
    }
  }

  template() {
    const statData = this.getStat();
    if (statData === undefined) return html``;

    return html`
      <div class="card">
        <sp-help-text>${this.title}</sp-help-text>
        <p class="stat" style="font-size: ${this.statSize}">${statData}</p>
        <sp-help-text>${this.subtitle}</sp-help-text>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "osl-stat": OslStat;
  }
}
