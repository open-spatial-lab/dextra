import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { OptionList, OptionSpec, OslControl } from "../../Interface/src/Interface";
import "@spectrum-web-components/tags/sp-tags.js";
import "@spectrum-web-components/tags/sp-tag.js";
import "@spectrum-web-components/textfield/sp-textfield.js";
import "@spectrum-web-components/action-button/sp-action-button.js";
import "@spectrum-web-components/icons-workflow/icons/sp-icon-add-circle.js";
import { safeCustomElement } from "../../core/decorators/safeCustomElement";
import { filter } from "lodash";

@safeCustomElement("osl-chips")
export class OslChips extends OslControl {
  @property({ type: Object })
  initialValue: Array<string | number> = [];

  @property({ type: Array })
  filteredOptions: OptionList = [];

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
            >${this.getOptionText(option)}</sp-tag
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
    ) as LitElement & {value:string};
  }

  protected get inputValue(): string {
    return this.spectrumTextfield.value!;
  }

  resetText() {
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

  filterOptions(filterValue: string) {
    const options = this.options || [];
    if (typeof options[0] === 'object') {
      const filteredOptions = options.filter((option) =>
        `${(option as OptionSpec).label}`.toLowerCase().includes(`${filterValue}`.toLowerCase())
      );
      this.filteredOptions = filteredOptions;
    } else {
      const filteredOptions = options.filter((option) =>
        `${option}`.toLowerCase().includes(`${filter}`.toLowerCase())
      );
      this.filteredOptions = filteredOptions;
    }
  }
  
  handleTextEnter(event: KeyboardEvent): void {
    const isEnter = event.key === "Enter";
    if (isEnter) this.handleAdd();
    if (this.options && this.options.length > 0) {
      const currentValue = this.spectrumTextfield.value;
      console.log(currentValue)
      const options = this.filterOptions(currentValue);
      console.log(options)
    }
  }

  template() {
    return html`
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
