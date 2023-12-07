import { html } from "lit";
import { property } from "lit/decorators.js";
import { ValtioElement } from "../../core/state";
import { safeCustomElement } from "../../core/decorators/safeCustomElement";
import { StateSchema } from "../../core/state/types";
import { interpretFuncJsonOrString } from "../../core/utils/converters";
import { nonReactiveStore } from "../../core/state/Store";

export type OptionSpec = { value: string | number; label: string | number };
export type OptionList = Array<string | number | OptionSpec>;
@safeCustomElement("osl-interface")
export class OslControl extends ValtioElement<StateSchema> {
  @property({ converter: interpretFuncJsonOrString })
  data = "";

  @property({ type: String })
  option: string = "";

  @property({ converter: interpretFuncJsonOrString})
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

  @property({ type: Boolean })
  multipleSelect?: boolean;

  @property({ type: String })
  optionsData?: string;

  @property({ type: String })
  optionsDataLabelColumn?: string;

  @property({ type: String })
  optionsDataValueColumn?: string;

  @property({type: Boolean})
  showAny?: boolean = false;

  registerData(dataset: string) {
    if (!this.store.datasets[dataset] && dataset !== "") {
      this.store.datasets[dataset] = {
        parameters: {},
        statuses: {},
      };
      nonReactiveStore[dataset] = {};
    }
  }

  protected initialize() {
    if (!this.data) {
      return;
    }
    const datasets = Array.isArray(this.data) ? this.data : [this.data];
    datasets.forEach((dataset) => {
      this.registerData(dataset);
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
          this.value = this.store.datasets[dataset].parameters[this.option];
          this.domUpdatesOnChange();
        }
      );
    });
    if (
      this.optionsData !== undefined &&
      this.optionsDataValueColumn !== undefined
    ) {
      this.registerData(this.optionsData);
      this.subscribe(
        (store) => store.datasets[this.optionsData!].statuses,
        () => {
          this.updateOptionsFromData();
        }
      );
    }
  }

  updateOptionsFromData() {
    const optionsDataStatus = this.store.datasets[this.optionsData!].statuses;
    const currentParams = this.store.datasets[this.optionsData!].parameters
    
    const currentParamString = JSON.stringify(currentParams);
    const currentStatus = optionsDataStatus[currentParamString];
    
    const valueColumn = this.optionsDataValueColumn!;
    const labelColumn = this.optionsDataLabelColumn || valueColumn;

    if (currentStatus === "success" && valueColumn) {
      const data = nonReactiveStore[this.optionsData!][currentParamString];
      let options = []
      if (this.showAny) {
        options.push({
          value: "*",
          label: "All / Any",
        })
      }
      for (const row of data) {
        if ((row as any)[valueColumn] !== undefined || (row as any)[labelColumn] !== undefined) {
          options.push({
            value: (row as any)[valueColumn],
            label: (row as any)[labelColumn],
          })
        }
      }
      this.options = options;
    }
  }

  updated() {
    this.domUpdatesOnChange();
  }

  protected domUpdatesOnChange() {
    // const value = this.value;
  }

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

  getValueLabel() {
    const value = this.value;
    if (value === "*"){
      return "All / Any"
    }
    if (value === undefined) {
      return value;
    }
    if (Array.isArray(value)) {
      if (!value.length) {
        return this.label || this.title || "Choose an option(s)";
      }
      return value.map((v) => this.findOption(v)).join(", ");
    }
    return this.findOption(value);
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

  protected eventValueAccessor(
    event: Event | any
  ): string | number | Array<string | number> {
    const target = event.target as HTMLInputElement;
    return target.value;
  }

  protected handleChange(event: Event) {
    const value = this.eventValueAccessor(event);
    const datasets = Array.isArray(this.data) ? this.data : [this.data];
    datasets.forEach((dataset) => {
      this.store.datasets[dataset].parameters[this.option] = value;
    });
  }

  connectedCallback() {
    super.connectedCallback();
    this.initialize();
  }

  template() {
    return html`${this.getValueLabel()}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "osl-control": OslControl;
  }
}
