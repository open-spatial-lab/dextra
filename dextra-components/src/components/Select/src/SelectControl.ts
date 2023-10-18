import { html } from "lit";
import { safeCustomElement } from "../../core/decorators/safeCustomElement";
import { OslControl } from "../../Interface/src/Interface";
import "./Select"

@safeCustomElement("osl-select-control")
export class SelectControl extends OslControl {
  template() {
    return html`
      <osl-select
        .option=${this.option}
        .options=${this.options}
        .value=${this.value}
        .onChange=${this.handleChange}
        .label=${this.label}
        .data=${this.data}
        .title=${this.title}
        .id=${this.elementId}
      ></osl-select>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "osl-select-control": SelectControl;
  }
}