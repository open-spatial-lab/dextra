import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { OslControl } from "../../Interface/src/Interface";
import "@spectrum-web-components/switch/sp-switch.js";

@customElement("osl-switch")
export class SwitchControl extends OslControl {
  protected eventValueAccessor(event: Event): string {
    return (!(event.target as HTMLInputElement).checked).toString();
  }
  template() {
    return html`
      <sp-switch label="${this.label}" @click=${this.handleChange}>
        ${this.title}
      </sp-switch>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "osl-switch": SwitchControl;
  }
}
