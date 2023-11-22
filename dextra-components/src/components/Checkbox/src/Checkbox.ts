import { html } from "lit";
import { property, customElement } from "lit/decorators.js";
import { OptionSpec, OslControl } from "../../Interface/src/Interface";
import "@spectrum-web-components/checkbox/sp-checkbox.js";
import { safeCustomElement } from "../../core/decorators/safeCustomElement";

@safeCustomElement("osl-checkbox")
export class OslCheckbox extends OslControl {
  @property({ type: String })
  size: "s" | "m" | "l" | "xl" = "s";

  @property({ type: Array })
  initialValue?: (string | number)[] = [];

  renderSingleBox(i: number) {
    const options = this.options || [];
    const storeValue = this.value as Array<string | number>;
    const optionValue =
      options[i] && typeof options[i] === "object"
        ? (options[i] as OptionSpec).value
        : (options[i] as string | number);
    const optionLabel =
      options[i] && typeof options[i] === "object"
        ? (options[i] as OptionSpec).label
        : (options[i] as string | number);
    const checked = storeValue.includes(optionValue);

    // There is no checked=false and dynamically string interpolating
    // eg ${checked ? "checked" : ""} does not work to set initial values
    // so here we gooooooo
    if (!checked) {
      return html`
        <sp-checkbox
          size="${this.size}"
          value="${optionValue}"
          @change=${() => this.handleChange(optionValue)}
          >${optionLabel}</sp-checkbox
        >
      `;
    } else {
      return html`
        <sp-checkbox
          size="${this.size}"
          value="${optionValue}"
          checked
          @change=${() => this.handleChange(optionValue)}
          >${optionLabel}</sp-checkbox
        >
      `;
    }
  }
  renderCheckboxes() {
    const options = this.options || [];
    return html` ${options.map((_, i) => this.renderSingleBox(i))} `;
  }

  eventValueAccessor(value: any) {
    return value;
  }

  handleChange(inputValue: any) {
    const storeValue = this.value as Array<string | number>;
    const datasets = Array.isArray(this.data) ? this.data : [this.data];
    datasets.forEach((dataset) => {
      if (inputValue === "*") {
        this.store.datasets[dataset].parameters[this.option] = inputValue;
      } else {
        const storeValue =
          this.store.datasets[dataset].parameters[this.option] || [];
        const newValues = storeValue.includes(inputValue)
          ? storeValue.filter(
              (option: string | number) => option !== inputValue
            )
          : [...storeValue, inputValue];
        this.store.datasets[dataset].parameters[this.option] = newValues;
      }
    });
  }

  template() {
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
