import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { DexterInterface } from "../../Interface/src/Interface";
import "@spectrum-web-components/radio/sp-radio.js";
import "@spectrum-web-components/radio/sp-radio-group.js";
import "@spectrum-web-components/theme/sp-theme.js";
import "@spectrum-web-components/theme/src/themes.js";
import '@spectrum-web-components/help-text/sp-help-text.js';

@customElement("dexter-radio")
export class DexterRadio extends DexterInterface {
  @property({ type: String })
  valueState: "None" | "Success" | "Warning" | "Error" | "Information" = "None";

  private renderButtons() {
    const options = this.options || [];
    return html`
      ${options.map(
        (option) => html`
          <sp-radio
            @click=${this.handleChange}
            @focus=${this.handleChange}
            value="${option}"
            >${option}</sp-radio
          >
        `
      )}
    `;
  }

  private renderTitle() {
    const title = this.title || "";
    if (title.length) {
      return html` <h4 class="spectrum-Heading--subtitle1">${title}</h4>`;
    } else {
      return html``;
    }
  }

  renderHelpText(){
    const label = this.label || "";
    if (label.length) {
      return html` <sp-help-text slot="help-text">${label}</sp-help-text>`;
    } else {
      return html``;
    }

  }

  override template() {
    const value = (this.value || "") as string;
    return html`
          ${this.renderTitle()}
        <sp-radio-group selected="${value}" name="${this.title}" @change=${this.handleChange}>
          ${this.renderButtons()}
          ${this.renderHelpText()}
        </sp-radio-group>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "dexter-radio": DexterRadio;
  }
}