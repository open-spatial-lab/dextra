import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { OslControl } from "../../Interface/src/Interface";
import "@spectrum-web-components/tags/sp-tags.js";
import "@spectrum-web-components/tags/sp-tag.js";
import "@spectrum-web-components/textfield/sp-textfield.js";
import "@spectrum-web-components/action-button/sp-action-button.js";
import "@spectrum-web-components/icons-workflow/icons/sp-icon-add-circle.js";

@customElement("osl-chips")
export class OslChips extends OslControl {
  @property({ type: Object })
  initialValue: Array<string | number> = [];

  renderTags() {
    if (!Array.isArray(this.value) || this.value.length === 0) {
      return null;
    }

    return html`
      ${this.value.map(
        (option: string | number) => html`
          <sp-tag
            deleteable
            value="${option}"
            @click=${() => this.handleRemove(option)}
            >${option}</sp-tag
          >
        `
      )}
    `;
  }

  renderHelpText() {
    return this.label
      ? html` <sp-help-text slot="help-text"> ${this.label} </sp-help-text>`
      : html``;
  }

  protected get spectrumTextfield() {
    return this.renderRoot.querySelector(
      `.chips-${this.elementId}`
    ) as LitElement;
  }

  protected get inputValue(): string {
    // @ts-ignore
    return this.spectrumTextfield.value!;
  }

  resetText() {
    // @ts-ignore
    this.spectrumTextfield.value = "";
  }
  protected eventValueAccessor(event: any): string {
    return event;
  }

  handleRemove(inputValue: string | number | any) {
    const storeValue = this.value as Array<string | number>;
    const value = inputValue;
    const newValues = storeValue.filter((item) => item !== value);
    // @ts-ignore
    this.handleChange(newValues);
  }

  handleAdd() {
    const inputValue = this.inputValue?.trim();
    const isValidText = inputValue && inputValue.length > 0;
    if (!isValidText) return;
    const storeValue = this.value as Array<string | number>;
    const newValues = [...storeValue, inputValue];
    this.store.datasets[this.data].parameters[this.option] = newValues;
    this.resetText();
  }

  handleTextEnter(event: KeyboardEvent): void {
    const isEnter = event.key === "Enter";
    if (isEnter) this.handleAdd();
  }

  template() {
    return html`
      <!-- <sp-tags> </sp-tags><br /> -->
      <div style="max-width:"100%">
      ${this.renderTags()} 
      </div>
      <sp-field-label for="chips-${this.elementId}"
        >${this.title}</sp-field-label
      >
      <sp-textfield
        class="chips-${this.elementId}"
        id="chips-${this.elementId}"
        placeholder=${this.label as string}
        @keydown=${this.handleTextEnter}
      >
        ${this.renderHelpText()}
      </sp-textfield>

      <sp-action-button @click=${this.handleAdd}>
          <sp-icon-add-circle slot="icon"></sp-icon-add-circle>
      </sp-action-button>

    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "osl-chips": OslChips;
  }
}
