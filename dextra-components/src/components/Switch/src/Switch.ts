import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { DexterInterface } from '../../Interface/src/Interface';

@customElement("dexter-switch")
export class DexterSwitch extends DexterInterface {
  render() {
    return html`
      <div>
        <h1>Hello, Switch!</h1>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "dexter-switch": DexterSwitch;
  }
}