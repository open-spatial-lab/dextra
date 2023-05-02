import { html } from "lit";
import { property, customElement } from "lit/decorators.js";
import { OslControl } from "../../Interface/src/Interface";
import "@spectrum-web-components/checkbox/sp-checkbox.js";

@customElement("osl-checkbox")
export class OslCheckbox extends OslControl {
  @property({ type: String })
  size: "s" | "m" | "l" | "xl" = "s";

  @property({ type: Array })
  override initialValue?: (string | number)[] = [];

  renderSingleBox(i: number) {
    const options = this.options || [];
    const storeValue = this.value as Array<string | number>;
    const option = options[i];
    const checked = storeValue.includes(option);

    // There is no checked=false and dynamically string interpolating
    // eg ${checked ? "checked" : ""} does not work to set initial values
    // so here we gooooooo
    
    if (!checked) {
      return html`
        <sp-checkbox
          size="${this.size}"
          value="${option}"
          @change=${() => this.handleChange(option)}
          >${option}</sp-checkbox
        >
      `;
    } else {
      return html`
        <sp-checkbox
          size="${this.size}"
          value="${option}"
          checked
          @change=${() => this.handleChange(option)}
          >${option}</sp-checkbox
        >
      `;
    }
  }
  renderCheckboxes() {
    const options = this.options || [];
    return html` ${options.map((_, i) => this.renderSingleBox(i))} `;
  }

  override eventValueAccessor(value: any) {
    return value;
  }

  override handleChange(inputValue: any) {
    const storeValue = this.value as Array<string | number>;

    const newValues = storeValue.includes(inputValue)
      ? storeValue.filter((option: string | number) => option !== inputValue)
      : [...storeValue, inputValue];
    this.store.datasets[this.data].parameters[this.option] = newValues;
  }

  override template() {
    return html`
      <div style="display:flex; flex-direction: column;">
        ${this.renderCheckboxes()}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "osl-checkbox": OslCheckbox;
  }
}
