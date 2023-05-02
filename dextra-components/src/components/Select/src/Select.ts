import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { OslControl } from "../../Interface/src/Interface";
import "@spectrum-web-components/picker/sp-picker.js";
import "@spectrum-web-components/help-text/sp-help-text.js";
import "@spectrum-web-components/menu/sp-menu-item.js";

@customElement("osl-select")
export class SelectControl extends OslControl {
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

  override template() {
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
    "osl-select": SelectControl;
  }
}
