import { LitElement, html } from "lit";
import { property } from "lit/decorators.js";
import {
  OptionList,
  OptionSpec,
  OslControl,
} from "../../Interface/src/Interface";
import "@spectrum-web-components/tags/sp-tags.js";
import "@spectrum-web-components/tags/sp-tag.js";
import "@spectrum-web-components/textfield/sp-textfield.js";
import "@spectrum-web-components/action-button/sp-action-button.js";
import "@spectrum-web-components/icons-workflow/icons/sp-icon-add-circle.js";
import "@spectrum-web-components/menu/sp-menu.js";
import "@spectrum-web-components/menu/sp-menu-item.js";
import "@spectrum-web-components/action-menu/sp-action-menu.js";
import "@spectrum-web-components/action-button/sp-action-button.js";
import { safeCustomElement } from "../../core/decorators/safeCustomElement";

@safeCustomElement("osl-chips")
export class OslChips extends OslControl {
  @property({ type: Object })
  initialValue: Array<string | number> = [];

  @property({ type: Array })
  filteredOptions: OptionList = [];

  @property({ type: Boolean })
  showFilteredOptions = false;

  @property({ type: Number })
  maxOptions: number = 50;

  @property({ type: Boolean })
  showAllOptions: boolean = false;

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
            style="margin:0 0.25rem 0.25rem 0;"
            @click=${() => this.handleRemove(option)}
            >${this.findOption(option)}</sp-tag
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

  renderOption(option: OptionSpec | string | number) {
    const value = this.getOptionValue(option);
    const label = this.getOptionText(option);
    return html`<sp-action-button
      value=${value}
      name=${label}
      quiet
      fullWidth
      @click=${(e: any) => {
        e.preventDefault();
        this.handleAdd(`${value}`);
      }}
      >${label}</sp-action-button
    > `;
  }

  renderFilteredOptions() {
    if (!this.showFilteredOptions || !this.options) {
      return null;
    }

    if (this.filteredOptions.length === 0 && !this.showAllOptions) {
      return null;
    } 

    const options = this.filteredOptions.length === 0 && this.showAllOptions ? this.options : this.filteredOptions;
    console.log(options, this.filteredOptions, this.showAllOptions, this.showFilteredOptions)

    return html`
      <div
        style="position:absolute; top:100%; left:0; width:100%;padding:0.25rem; max-height:30vh; overflow-y:auto;box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.5);background:white;z-index:50000;"
      >
        ${options
          .slice(0, this.maxOptions)
          .map((option) => this.renderOption(option))}
      </div>
    `;
  }

  protected get spectrumTextfield() {
    return this.renderRoot.querySelector(
      `.chips-${this.elementId}`
    ) as LitElement & { value: string };
  }

  protected get inputValue(): string {
    return this.spectrumTextfield.value?.trim() || "";
  }

  resetText() {
    this.spectrumTextfield.value = "";
    this.filteredOptions = [];
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

  handleAdd(inputValue?: string) {
    const isValidText = inputValue && inputValue.length > 0;
    if (!isValidText) return;
    const storeValue = Array.isArray(this.value) ? this.value : [];
    const newValues = [...storeValue, inputValue];
    const datasets = Array.isArray(this.data) ? this.data : [this.data];
    datasets.forEach((dataset) => {
      this.store.datasets[dataset].parameters[this.option] = newValues;
    })
    this.filterOptions(this.inputValue);
  }
  getOptionText(option: OptionList[number]) {
    if (typeof option === "string" || typeof option === "number") {
      return `${option}`;
    } else {
      return `${option.label}`;
    }
  }

  getOptionValue = (option: OptionList[number]) => {
    if (typeof option === "string" || typeof option === "number") {
      return `${option}`;
    } else {
      return option.value;
    }
  };
  findOption(value: string | number) {
    const options = this.options || [];
    if (!options.length) {
      return value;
    } else {
      const option = options.find((option) => {
        const optionValue = `${this.getOptionValue(option)}`;
        return optionValue === value;
      });
      return option ? this.getOptionText(option) : value;
    }
  }

  filterOptions(filterValue: string) {
    const value = Boolean(this.value) ? this.value : [];
    const options = this.options || [];
    const searchText = `${filterValue}`.toLowerCase();
    const filteredOptions = options.filter((option) => {
      const optionValue = `${this.getOptionValue(option)}`;
      const optionLabel = this.getOptionText(option);
      const isInCurrentOptions = (value as any[]).includes(optionValue);
      const containsText = optionLabel.toLowerCase().includes(searchText);
      const containsValue = optionValue.toLowerCase().includes(searchText);

      return !isInCurrentOptions && (containsText || containsValue);
    });
    this.filteredOptions = filteredOptions;
  }

  handleTextEnter(event: KeyboardEvent): void {
    const isEnter = event.key === "Enter";
    if (isEnter) {
      this.handleAdd(this.inputValue);
      this.resetText();
    }
    if (event.key === "Escape") {
      this.resetText();
    }
    if (this.options && this.options.length > 0 && this.inputValue.length > 0) {
      this.filterOptions(this.inputValue);
    } else {
      this.filteredOptions = [];
    }
  }
  handleFocus() {
    this.showFilteredOptions = true;
  }
  handleLoseFocus() {
    this.showFilteredOptions = false;
  }
  connectedCallback(): void {
    super.connectedCallback();
    // alphabetize options
    if (this.options) {
      this.options = this.options.sort((a, b) => {
        const aText = this.getOptionText(a);
        const bText = this.getOptionText(b);
        return aText.localeCompare(bText);
      });
    }

    const handleClickOutside = (event: any) => {
      if (!this.contains(event.target)) {
        this.handleLoseFocus();
      }
    };
    document.addEventListener("click", handleClickOutside);
  }
  disconnectedCallback(): void {
    super.disconnectedCallback();
    document.removeEventListener("click", this.handleLoseFocus);
  }

  template() {
    return html`
    <div style="position:relative;">
      <div style="max-width:"100%;">
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
        @focus=${this.handleFocus}
      >
        ${this.renderHelpText()}
      </sp-textfield>

      <sp-action-button @click=${this.handleAdd}>
          <sp-icon-add-circle slot="icon"></sp-icon-add-circle>
      </sp-action-button>
        ${this.renderFilteredOptions()}
  </div>

    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "osl-chips": OslChips;
  }
}
