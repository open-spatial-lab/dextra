import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { OslControl } from '../../Interface/src/Interface';

@customElement("osl-switch")
export class SwitchControl extends OslControl {
  override render() {
    return html`
      <div>
        <h1>Hello, Switch!</h1>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "osl-switch": SwitchControl;
  }
}