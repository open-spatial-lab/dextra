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
      max-width:40vw;
      padding: 0;
      margin: 0;
      position: absolute;
      pointer-events: none;
      display: column;
      flex-direction: row;
      z-index: 500;
      background: white;
      border: 1px solid lightgray;
      background-color: var(--spectrum-background-layer-2-color);
    }
    .tooltipContainer sp-help-text {
      margin-top:0;
      margin-bottom:0;
      padding-top:0;
      padding-bottom:0;
    }
    .tooltipContainer .tooltip-row {
      margin:0;
      padding:.25rem 0 .25rem 0.25rem;
    }
    .tooltipContainer .tooltip-row:nth-of-type(2n) {
      background-color: #f7f7f7;
    }
    .tooltipContainer .tooltip-row p {
      font-size:.75rem;
      margin:0;
      padding:0;
      max-width: 30vw;
    }
  `;

  currentTooltip: TooltipEntry | null = null;

  handleTooltipData() {
    for (const tooltipKey of this?.tooltips || []) {
      const tooltipData = this.store.tooltips[tooltipKey];
      if (tooltipData && tooltipData.x !== null && tooltipData.y !== null && tooltipData.data?.length ) {
        this.currentTooltip = tooltipData;
        this.requestUpdate();
        return;
      }
    }
    this.currentTooltip = null;
    this.requestUpdate();
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
    // flip x if in right half of screen
    const flipX = x > window.innerWidth / 2
    // flip y if in bottom half of screen
    const flipY = y > window.innerHeight / 2
    const xModifier = flipX ? -5 : 5;
    const yModifier = flipY ? -5 : 5;
    if (typeof data === "string") {
      tooltipContent = unsafeHTML(data);
    } else {
      tooltipContent = data.map(
        (d) => html`<div class="tooltip-row">
          <p><b>${d.label}:</b> ${d.value}</p>
      </div>`
      );
    }
    return html`<div
      class="tooltipContainer"
      style="
        top:${y + yModifier}px;
        left:${x + xModifier}px;
        transform: translate(${flipX ? "-100%" : "0"}, ${flipY ? "-100%" : "0"});
      "
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
