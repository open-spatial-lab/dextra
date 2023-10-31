import { html } from "lit";
import {  property } from "lit/decorators.js";
import { ValtioElement } from "../../core/state";
import { safeCustomElement } from "../../core/decorators/safeCustomElement";
import "@spectrum-web-components/tabs/sp-tabs.js"
import "@spectrum-web-components/tabs/sp-tab-panel.js"

@safeCustomElement("osl-tabs")
export class OslTabs extends ValtioElement<any> {
  @property({ type: Array })
  tabs: string[] = [];

  template() {
    console.log(this.tabs)
    return html`
      <sp-tabs selected="1" size="m">
        ${this.tabs.map(
          (label, index) =>
            html`<sp-tab label="${label}" value="${index}"></sp-tab>`
        )}
        ${this.tabs.map(
          (_, index) => html` <sp-tab-panel value="${index}">
          asdf
            <slot name="${index}"></slot>
          </sp-tab-panel>`
        )}
      </sp-tabs>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "osl-tabs": OslTabs;
  }
}
