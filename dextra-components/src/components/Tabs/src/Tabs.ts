import { css, html } from "lit";
import { property } from "lit/decorators.js";
import { ValtioElement } from "../../core/state";
import { safeCustomElement } from "../../core/decorators/safeCustomElement";
import "@spectrum-web-components/button/sp-button.js";
import "@spectrum-web-components/button-group/sp-button-group.js";
import "@spectrum-web-components/tabs/sp-tabs.js";
import "@spectrum-web-components/tabs/sp-tab.js";
import "@spectrum-web-components/tabs/sp-tab-panel.js";

@safeCustomElement("osl-tabs")
export class OslTabs extends ValtioElement<any> {
  @property({ type: Array })
  tabs: any[] = [];

  connectedCallback(): void {
    super.connectedCallback();
    this.tabs = Array.from(this.children).map((child) =>
      child.getAttribute("data-tab")
    );
  }
 
  getTabContent(tab: string) {
    return this.querySelector(`[data-tab="${tab}"]`);
  }
  renderTabs() {
    return html`
      ${this.tabs.map((tab) => {
        return html`
          <sp-tab-panel value=${tab}>${this.getTabContent(tab)}</sp-tab-panel>
        `;
      })}
    `;
  }
  template() {
    if (!this.tabs.length) {
      return html``;
    }
    return html`
      <sp-tabs selected=${this.tabs[0]} size="m" style="height:100%;width:100%;">
        ${this.tabs.map((tab) => {
          return html` <sp-tab value=${tab}>${tab}</sp-tab> `;
        })}
        ${this.renderTabs()}
      </sp-tabs>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "osl-tabs": OslTabs;
  }
}
