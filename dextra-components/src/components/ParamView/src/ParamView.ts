import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { OslControl } from '../../Interface/src/Interface';
import { safeCustomElement } from "../../core/decorators/safeCustomElement";

@safeCustomElement("osl-param-view")
export class OslParamView extends OslControl {
  @property({ type: Array })
  parameters: string[] = [];

  @property({ type: String })
  parameterTitle: string = "Parameter";

  @property({ type: Boolean })
  pagination: boolean = false;

  template() {
    const params = this.store.datasets[this.data].parameters
    const data = this.parameters.map((param) => ({
      [this.parameterTitle]: param,
      Value: params[param]
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