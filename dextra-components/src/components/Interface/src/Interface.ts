import { html } from "lit";
import {  property } from "lit/decorators.js";
import { ValtioElement } from "../../core/state";
import { safeCustomElement } from "../../core/decorators/safeCustomElement";
import { StateSchema } from "../../core/state/types";
import { interpretFuncJsonOrString } from "../../core/utils/converters";
import { nonReactiveStore } from "../../core/state/Store";

export type OptionSpec = { value: string | number, label: string | number }
export type OptionList = Array<string | number | OptionSpec>
@safeCustomElement("osl-interface")
export class OslControl extends ValtioElement<StateSchema> {
  @property({ converter: interpretFuncJsonOrString })
  data = "";

  @property({ type: String })
  option: string = "";

  @property()
  initialValue?: string | number | Array<string | number>;

  @property()
  value: string | number | Array<string | number> = 1;

  @property({ type: Array })
  options?: OptionList = [];

  @property({ type: Number })
  min?: number;

  @property({ type: Number })
  max?: number;

  @property({ type: Number })
  step?: number;

  @property({ type: String })
  type?: string;

  @property({ type: String })
  label?: string;

  @property({ type: String })
  placeholder?: string;

  @property({ type: String })
  description?: string;

  @property({ type: String })
  unit?: string;

  protected initDataset() {
    if (!this.data) {
      return
    }
    const datasets = Array.isArray(this.data) ? this.data : [this.data];
    datasets.forEach((dataset) => {
      if (!this.store.datasets[dataset] && dataset !== "") {
        this.store.datasets[dataset] = {
          parameters: {},
          statuses: {}
        };
        nonReactiveStore[dataset] = {}
      }
      const currentParams = this.store.datasets[dataset].parameters;
      if (
        currentParams[this.option] === undefined &&
        this.initialValue !== undefined
      ) {
        this.value = this.initialValue;
        this.store.datasets[dataset].parameters[this.option] =
          this.initialValue;
      } else {
        this.value = currentParams[this.option];
      }
      this.subscribe(
        (store) => store.datasets[dataset].parameters,
        () => {
          // console.log('params changed')
          this.value = this.store.datasets[dataset].parameters[this.option];
          // console.log(this.value)
          this.domUpdatesOnChange();
        }
      )})
  }

  protected domUpdatesOnChange(){
    // const value = this.value;
  }

  getOptionText(option: string | number) {
    if (!this.options || !this.options.length || typeof this?.options?.[0] !== 'object' ) {
      return option;
    } else {
      const options = this.options as Array<{value:string|number,label:string|number}>
      const optionSpec = options.find(
        (optionSpec) => optionSpec.value === option
      );
      return optionSpec ? optionSpec.label : option;
    }
  }

  protected eventValueAccessor(event: Event) {
    const target = event.target as HTMLInputElement;
    return target.value;
  }

  protected handleChange(event: Event) {
    const value = this.eventValueAccessor(event);
    const datasets = Array.isArray(this.data) ? this.data : [this.data];
    datasets.forEach((dataset) => {
      this.store.datasets[dataset].parameters[this.option] = value;
    })
  }

  connectedCallback() {
    super.connectedCallback();
    this.initDataset();
  }

  template() {
    return html`${this.value}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "osl-control": OslControl;
  }
}
