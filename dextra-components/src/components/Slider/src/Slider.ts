import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { DexterInterface } from "../../Interface/src/Interface";
import "@ui5/webcomponents/dist/Slider.js";

@customElement("dexter-slider")
export class DexterSlider extends DexterInterface {
  render() {
    return html`
      <ui5-slider
        min="${this.min !== undefined ? this.min : 1}"
        max="${this.max !== undefined ? this.max : 1}"
        step="${this.step !== undefined ? this.step : 1}"
        value="${this.value}"
        @change="${this.handleChange}"
        @keydown="${this.handleChange}"
        show-tooltip="true"
      ></ui5-slider>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "dexter-slider": DexterSlider;
  }
}
