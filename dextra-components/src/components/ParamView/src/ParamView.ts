import { html } from "lit";
import { property } from "lit/decorators.js";
import { OslControl } from '../../Interface/src/Interface';
import { safeCustomElement } from "../../core/decorators/safeCustomElement";

@safeCustomElement("osl-param-view")
export class OslParamView extends OslControl {
  @property({ type: Array })
  parameters: string[] = [];

  @property({ type: Array })
  labels: string[] = [];

  @property({ type: String })
  parameterTitle: string = "Parameter";

  @property({ type: Boolean })
  pagination: boolean = false;


  connectedCallback(): void {
    super.connectedCallback();
    this.subscribe(
      (store) => store.datasets[this.data].parameters,
      () => this.requestUpdate()
    );
  }

  template() {
    const params = this.store.datasets[this.data].parameters
    const data = this.parameters.map((param, i) => ({
      [this.parameterTitle]: this.labels[i] || param,
      Value: params[param] === undefined || params[param] === "*" || !Boolean(params[param]) || (Array.isArray(params[param]) && params[param].length === 0) ? 'Any' : params[param].toString()
    }))

    return html`
      <osl-table
          .title=${this.title}
          .maxw=${'auto'}
          .data=${data}
          .columns=${[this.parameterTitle, 'Value']}
          .pagination=${this.pagination}
        ></osl-table>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "osl-param-view": OslParamView;
  }
}