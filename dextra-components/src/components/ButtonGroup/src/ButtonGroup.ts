import { html } from "lit";
import { OslControl } from "../../Interface/src/Interface";
import { safeCustomElement } from "../../core/decorators/safeCustomElement";
import { interpretFuncJsonOrString } from "../../core/utils/converters";
import { property } from "lit/decorators.js";
import "@spectrum-web-components/button/sp-button.js";
import "@spectrum-web-components/button-group/sp-button-group.js";

@safeCustomElement("osl-button-group")
export class OslButtonGroup extends OslControl {
  @property({ converter: interpretFuncJsonOrString })
  items: string[] = [];

  @property({ type: String })
  variant: string = "secondary";

  eventValueAccessor(value: any) {
    return value;
  }

  renderItems() {
    return html` ${this.items.map((item) => {
      return html` <sp-button
        variant=${this.variant}
        @click=${() => {
          this.handleChange(item as any);
        }}
        ?selected=${this.value === item}
      >
        ${item}
      </sp-button>`;
    })}`;
  }
  template() {
    return html` <sp-button-group> ${this.renderItems()} </sp-button-group> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "osl-button-group": OslButtonGroup;
  }
}
