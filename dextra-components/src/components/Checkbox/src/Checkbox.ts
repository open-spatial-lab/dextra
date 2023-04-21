import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { DexterInterface } from '../../Interface/src/Interface';

@customElement("dexter-checkbox")
export class DexterCheckbox extends DexterInterface {
  override render() {
    return html`
      <div>
        <h1>Hello, Checkbox!</h1>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "dexter-checkbox": DexterCheckbox;
  }
}