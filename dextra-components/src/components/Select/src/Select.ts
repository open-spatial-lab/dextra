import { html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { safeCustomElement } from "../../core/decorators/safeCustomElement";
import "@spectrum-web-components/picker/sp-picker.js";
import "@spectrum-web-components/help-text/sp-help-text.js";
import "@spectrum-web-components/menu/sp-menu-item.js";
import { OslControl } from "../../Interface/src/Interface";

// Always used within other component 
@safeCustomElement("osl-select")
export class Select extends OslControl {
  @property({ type: Array })
  options?: string[];

  @property({ type: String })
  label?: string;

  @property({ type: String })
  value?: string;

  @property({ type: Function })
  onChange?: (value: string) => void;

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
        @change=${(e: Event) =>
          this.onChange?.((e.target as HTMLSelectElement).value)}
        value=${this.value as string}
      >
        ${this.renderSelectOptions()} ${this.renderDescription()}
      </sp-picker>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "osl-select": Select;
  }
}
