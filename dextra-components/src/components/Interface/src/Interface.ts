import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
// @ts-ignore
import { ValtioElement } from "../../core/state";

@customElement("osl-interface")
export class OslControl extends ValtioElement {
  @property({ type: String })
  data = "";

  @property({ type: String })
  option: string = "";

  @property()
  initialValue?: string | number | Array<string | number>;

  @property()
  value: string | number | Array<string | number> = 1;

  @property({ type: Array })
  options?: Array<string | number> = [];

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
    if (!this.store.datasets[this.data] && this.data !== "") {
      this.store.datasets[this.data] = {
        parameters: {},
        headless: true,
        results: {},
        status: "loading",
      };
    }
    const currentParams = this.store.datasets[this.data].parameters;
    if (
      currentParams[this.option] === undefined &&
      this.initialValue !== undefined
    ) {
      this.value = this.initialValue;
      this.store.datasets[this.data].parameters[this.option] =
        this.initialValue;
    } else {
      this.value = currentParams[this.option];
    }
    this.subscribe(
      (store) => store.datasets[this.data].parameters,
      () => {
        // console.log('params changed')
        this.value = this.store.datasets[this.data].parameters[this.option];
        // console.log(this.value)
        this.domUpdatesOnChange();
      }
    );
  }

  protected domUpdatesOnChange(){
    // const value = this.value;
  }

  protected eventValueAccessor(event: Event) {
    const target = event.target as HTMLInputElement;
    return target.value;
  }

  protected handleChange(event: Event) {
    const value = this.eventValueAccessor(event);
    this.store.datasets[this.data].parameters[this.option] = value;
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
