import { html } from "lit";
import { property, query } from "lit/decorators.js";
// @ts-ignore
import { OslControl } from "../../Interface/src/Interface";
import "@spectrum-web-components/slider/sp-slider.js";
import { safeCustomElement } from "../../core/decorators/safeCustomElement";

@safeCustomElement("osl-slider")
export class SliderControl extends OslControl {
  @property({ type: Boolean })
  range = false;

  @query('sp-slider-handle[name="min"]')
  minHandle!: HTMLInputElement;

  @query('sp-slider-handle[name="max"]')
  maxHandle!: HTMLInputElement;
  
  protected handleChange(event: Event): void {
    if (this.range && Array.isArray(this.value)) {
      const min = Math.min(+this.minHandle.value, +this.maxHandle.value);
      const max = Math.max(+this.minHandle.value, +this.maxHandle.value);
      const newValue = [min, max];
      const datasets = Array.isArray(this.data) ? this.data : [this.data];
      datasets.forEach((dataset) => {
        this.store.datasets[dataset].parameters[this.option] = newValue;
      });
    } else {
      super.handleChange(event);
    }
  }

  template() {
    const min = this.min !== undefined ? this.min : 1;
    const max = this.max !== undefined ? this.max : 1;
    const step = this.step !== undefined ? this.step : 1;

    if (this.range) {
      const value = (this.value||[min, max]) as [number, number];
      return html`
        <sp-slider
          min="${min}"
          max="${max}"
          step="${step}"
          value="${this.value}"
          name="${this.title}"
          label="${this.title}"
          @change="${this.handleChange}"
          variant="range"
        >
          ${this.title}
          <sp-slider-handle
            slot="handle"
            name="min"
            label="Minimum"
            value="${value[0]}"
          ></sp-slider-handle>
          <sp-slider-handle
            slot="handle"
            name="max"
            label="Maximum"
            value="${value[1]}"
          ></sp-slider-handle>
        </sp-slider>
      `;
    } else {
      return html`
        <sp-slider
          min="${min}"
          max="${max}"
          step="${step}"
          value="${this.value}"
          name="${this.title}"
          label="${this.title}"
          @change="${this.handleChange}"
        ></sp-slider>
      `;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "osl-slider": SliderControl;
  }
}
