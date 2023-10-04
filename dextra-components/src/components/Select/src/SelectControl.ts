import { html } from "lit";
import { safeCustomElement } from "../../core/decorators/safeCustomElement";
import { OslControl } from "../../Interface/src/Interface";
import "./Select"

@safeCustomElement("osl-select-control")
export class SelectControl extends OslControl {
  template() {
    return html`
      <osl-select
        .options=${this.options}
        .value=${this.value}
        .onChange=${this.handleChange}
        .label=${this.label}
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