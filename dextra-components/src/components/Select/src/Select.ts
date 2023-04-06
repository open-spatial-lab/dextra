import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { DexterInterface } from "../../Interface/src/Interface";
import "@spectrum-web-components/picker/sp-picker.js";
import "@spectrum-web-components/help-text/sp-help-text.js";
import "@spectrum-web-components/theme/sp-theme.js";
import "@spectrum-web-components/theme/src/themes.js";
import "@spectrum-web-components/menu/sp-menu-item.js";

@customElement("dexter-select")
export class DexterSelect extends DexterInterface {
  renderSelectOptions() {
    const options = this.options || [];
    return html`
      ${options.map(
        (option) => html`
          <sp-menu-item name="${option}" value="${option}"
            >${option}</sp-menu-item
          >
        `
      )}
    `;
  }

  protected renderTitle() {
    const title = this.title || "";
    return title.length
      ? html`<sp-field-label for="picker-${this.id}" size="m"
          >${title}</sp-field-label
        >`
      : html``;
  }

  protected renderDescription() {
    const description = this.label || "";
    return description.length
      ? html`<sp-help-text slot="help-text">${description}</sp-help-text>`
      : html``;
  }

  template() {
    return html`
      ${this.renderTitle()}
      <sp-picker
        id="picker-${this.id}"
        size="m"
        label="Selection type"
        @change=${this.handleChange}
        value=${this.value as string}
      >
        ${this.renderSelectOptions()} ${this.renderDescription()}
      </sp-picker>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "dexter-select": DexterSelect;
  }
}
