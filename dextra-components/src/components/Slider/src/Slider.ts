import { html } from "lit";
import { customElement } from "lit/decorators.js";
// @ts-ignore
import { OslControl } from "../../Interface/src/Interface";
import "@spectrum-web-components/slider/sp-slider.js";
import { safeCustomElement } from "../../core/decorators/safeCustomElement";

@safeCustomElement("osl-slider")
export class SliderControl extends OslControl {
  template() {
    return html`
      <sp-slider
        min="${this.min !== undefined ? this.min : 1}"
        max="${this.max !== undefined ? this.max : 1}"
        step="${this.step !== undefined ? this.step : 1}"
        value="${this.value}"
        name="${this.title}"
        label="${this.title}"
        @change="${this.handleChange}"
      ></sp-slider>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "osl-slider": SliderControl;
  }
}
