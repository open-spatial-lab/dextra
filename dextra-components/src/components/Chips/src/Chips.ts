import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { OslControl } from "../../Interface/src/Interface";
import "@spectrum-web-components/tags/sp-tags.js";
import "@spectrum-web-components/tags/sp-tag.js";
import "@spectrum-web-components/theme/sp-theme.js";
import "@spectrum-web-components/theme/src/themes.js";
import "@spectrum-web-components/textfield/sp-textfield.js";

@customElement("osl-chips")
export class OslChips extends OslControl {
  @property({ type: Object })
  override initialValue: Array<string | number> = [];

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

  protected get inputElement() {
    return (
      this.renderRoot.querySelector(`.chips-${this.elementId}`) as LitElement
    ).renderRoot.querySelector(".input")!;
  }

  protected get inputValue(): string {
    // @ts-ignore
    return this.inputElement.value!;
  }

  resetText() {
    // @ts-ignore
    this.inputElement.value = "";
  }
  protected override eventValueAccessor(event: any): string {
    return event;
  }

  protected handleRemove(inputValue: string | number | any) {
    const storeValue = this.value as Array<string | number>;
    const value = inputValue;
    const newValues = storeValue.filter((item) => item !== value);
    // @ts-ignore
    this.handleChange(newValues);
  }

  protected handleAdd(event: KeyboardEvent): void {
    const isEnter = event.key === "Enter";
    const inputValue = this.inputValue?.trim();
    const isValidText = inputValue && inputValue.length > 0;

    if (isEnter && isValidText) {
      const storeValue = this.value as Array<string | number>;
      const newValues = [...storeValue, inputValue];
      this.store.datasets[this.data].parameters[this.option] = newValues;
      // this.value = JSON.stringify(newValues);
      this.resetText();
    }
  }

  override template() {
    return html`
      <sp-tags> ${this.renderTags()} </sp-tags><br />
      <sp-field-label for="chips-${this.elementId}"
        >${this.title}</sp-field-label
      >
      <sp-textfield
        class="chips-${this.elementId}"
        id="chips-${this.elementId}"
        placeholder=${this.label as string}
        @keydown=${this.handleAdd}
      >
        ${this.renderHelpText()}
      </sp-textfield>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "osl-chips": OslChips;
  }
}
