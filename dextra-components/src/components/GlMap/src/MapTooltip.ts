import { html, css,  } from "lit";	
import {unsafeHTML} from 'lit/directives/unsafe-html.js';
import { property } from "lit/decorators.js";
import { safeCustomElement } from "../../core/decorators/safeCustomElement";
import { ValtioElement } from "../../core/state";
import "@spectrum-web-components/card/sp-card.js";
import "@spectrum-web-components/action-menu/sp-action-menu.js";
import "@spectrum-web-components/menu/sp-menu-item.js";
import "@spectrum-web-components/icons-workflow/icons/sp-icon-visibility.js";
import "@spectrum-web-components/icons-workflow/icons/sp-icon-visibility-off.js";
import "../../Select/src/Select";
import {
  TooltipEntry,
  TooltipStore,
} from "../../core/state/MapTooltipStore/types";
import { tooltipStore } from "../../core/state/MapTooltipStore";
import { subscribe } from "valtio";

@safeCustomElement("osl-map-tooltip")
export class MapTooltip extends ValtioElement<TooltipStore> {
  store = tooltipStore;

  @property({ type: Array })
  tooltips?: string[];

  static styles = css`
    .tooltipContainer {
      padding: 0;
      margin: 0;
      position: absolute;
      display: column;
      flex-direction: row;
      z-index: 500;
      background: white;
      border: 1px solid lightgray;
      background-color: var(--spectrum-background-layer-2-color);
      padding: 0 0.5rem;
    }
    .tooltipContainer sp-help-text {
      margin-top:0;
      margin-bottom:0;
      padding-top:0;
      padding-bottom:0;
    }
  `;

  currentTooltip: TooltipEntry | null = null;

  handleTooltipData() {
    for (const tooltipKey of this?.tooltips || []) {
      const tooltipData = this.store.tooltips[tooltipKey];
      if (tooltipData && tooltipData.x !== null) {
        this.currentTooltip = tooltipData;
        this.requestUpdate();
        return;
      }
    }
  }

  connectedCallback(): void {
    super.connectedCallback();
    subscribe(this.store.tooltips, () => {
      this.handleTooltipData();
    });
  }
  render() {
    if (this.currentTooltip === null || this.currentTooltip.data.length === 0)
      return null;
    let tooltipContent: any = html``;
    const { x, y, data } = this.currentTooltip;
    if (x === null || y === null) return null;
    if (typeof data === "string") {
      tooltipContent = unsafeHTML(data);
    } else {
      tooltipContent = data.map(
        (d) => html`<sp-help-text><b>${d.label}</b>: ${d.value}</sp-help-text>`
      );
    }
    return html`<div
      class="tooltipContainer"
      style="top:${y + 5}px;left:${x + 5}px;"
    >
      ${tooltipContent}
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "osl-map-tooltip": MapTooltip;
  }
}
