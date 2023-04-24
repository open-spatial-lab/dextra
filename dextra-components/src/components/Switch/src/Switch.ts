import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { OslControl } from "../../Interface/src/Interface";
import "@spectrum-web-components/switch/sp-switch.js";

@customElement("osl-switch")
export class SwitchControl extends OslControl {
  override template() {
    return html`
      <sp-switch label="Switch" onclick="spAlert(this, '<sp-switch> clicked!')">
        Switch
      </sp-switch>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "osl-switch": SwitchControl;
  }
}
