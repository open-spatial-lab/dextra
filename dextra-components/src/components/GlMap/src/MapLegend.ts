import { html, css } from "lit";
import { property } from "lit/decorators.js";
import { safeCustomElement } from "../../core/decorators/safeCustomElement";
import { ValtioElement } from "../../core/state";
import "@spectrum-web-components/card/sp-card.js";
import "@spectrum-web-components/action-menu/sp-action-menu.js";
import "@spectrum-web-components/menu/sp-menu-item.js";
import "@spectrum-web-components/icons-workflow/icons/sp-icon-visibility.js";
import "@spectrum-web-components/icons-workflow/icons/sp-icon-layers.js";
import "@spectrum-web-components/icons-workflow/icons/sp-icon-visibility-off.js";
import "../../Select/src/Select";
import { legendStore } from "../../core/state/MapLegendStore";
import { LegendStoreSpec } from "../../core/state/MapLegendStore/types";

@safeCustomElement("osl-map-legend")
export class MapLegend extends ValtioElement<LegendStoreSpec> {
  store = legendStore;

  @property({ type: Array })
  legends?: string[];

  @property({ type: Function })
  onLayerToggle?: (value: string) => void;

  @property({ type: String })
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right" =
    "bottom-left";

  @property({ type: Boolean })
  showSingleLayer?: boolean = false;

  static styles = css`
    .legend {
      padding: 0;
      margin: 0;
      position: absolute;
      display: flex;
      flex-direction: row;
      max-height: 30vh;
      border-right: 1px solid lightgray;
    }
    .legend-card {
      position: relative;
      border: 1px solid lightgray;
      background-color: var(--spectrum-background-layer-2-color);
      padding: 0.5rem;
      overflow-y: auto;
      max-width: 15ch;
      overflow-x: hidden;
    }
    .legend-card:not(:last-child) {
      border-right: none;
    }
    .legend-card.extra-padding {
      padding-right: 2.5rem;
    }
    .legend-actions {
      position: absolute;
      top: 3px;
      right: 2px;
    }
    .legend-entry {
      display: flex;
      align-items: center;
    }
    svg {
      margin-right: 0.25rem;
    }
  `;

  renderLegendEntry(key: string, index: number) {
    const entry = this.store.legends[key].elements[index];
    return html`
      <div class="legend-entry">
        ${this.renderLegendSymbol(key, index)}
        <sp-help-text>${entry.text}</sp-help-text>
      </div>
    `;
  }

  renderLegendSymbol(key: string, index: number) {
    const symbol = this.store.legends[key].elements[index].symbol;
    if (symbol.radius) {
      return html`
        <svg width="1rem" height="1rem" viewBox="0 0 20 20">
          <circle cx="10" cx="10" r="${symbol.radius}" fill="${symbol.color}" />
        </svg>
      `;
    }

    if (symbol.strokeWidth) {
      return html`
        <svg width="1rem" height="1rem" viewBox="0 0 20 20">
          <line
            x1="0"
            x2="20"
            y1="10"
            y2="10"
            stroke="${symbol.color}"
            strokeWidth="${symbol.strokeWidth}"
          />
        </svg>
      `;
    }
    return html`
      <!-- < -->
      <svg
        width="1rem"
        height="1rem"
        viewBox="0 0 20 20"
        style="min-width:1rem;"
      >
        <rect x="0" y="0" width="20" height="20" fill="${symbol.color}" />
      </svg>
    `;
  }

  getLegend(key: string) {
    return this.store.legends[key];
  }

  renderLayerControl() {
    if (!this.legends) {
      return null;
    }

    const legends = this.legends.map((key) => this.getLegend?.(key));

    return html`
      <sp-action-menu class="legend-actions" placement="bottom-end" quiet>
        ${this.showSingleLayer
          ? html`<sp-icon-layers slot="icon"></sp-icon-layers>`
          : html`<sp-icon-visibility slot="icon"></sp-icon-visibility>`}
        <sp-menu-item disabled
          >${this.showSingleLayer
            ? "Select Layer"
            : "Show/Hide Layers"}</sp-menu-item
        >
        ${this.legends.map((key, i) => {
          return html`
            <sp-menu-item
              name="${key}"
              value="${key}"
              @click=${(e: any) => {
                e.preventDefault();
                this.onLayerToggle?.(key)
              }}
            >
              ${this.showSingleLayer
                ? ""
                : legends[i]?.visible
                ? html`<sp-icon-visibility slot="icon" />`
                : html`<sp-icon-visibility-off />`}
              ${legends[i]?.title}
            </sp-menu-item>
          `;
        })}
      </sp-action-menu>
    `;
  }
  renderStaticProperty(colorArray?: Array<number>) {
    if (!colorArray) {
      return "none";
    }
    const prefix = colorArray.length === 3 ? "rgb" : "rgba";
    return `${prefix}(${colorArray.join(",")})`;
  }
  renderStaticLegends(keys: string[]) {
    if (keys.length === 0) {
      return html``;
    }

    const legends = keys.map((key) => this.getLegend?.(key));
    return html` <div class="legend-card extra-padding">
      ${legends.map(
        (legend) => html`
    
    <div class="legend-entry">
    <svg width="1rem" height="1rem" viewBox="0 0 20 20" style="min-width:1rem;">
        <rect x="1" y="1" width="18" height="18" 
          strokeWidth=${legend.staticStroke ? "2" : "0"}
          fill="${this.renderStaticProperty(legend.staticFill)}"
          stroke="${this.renderStaticProperty(legend.staticStroke)}"
        />
        <text x="10" y="10" text-anchor="middle" alignment-baseline="middle">${
          legend.hasText ? "T" : ""
        }</text>

      </svg>

      <sp-help-text>${legend.title}</sp-help-text>
        </div>
  </div>
    `
      )}
    </div>`;
  }
  renderLegendCard(key: string, showLayerControl = false) {
    const legend = this.getLegend(key);
    if (!legend) return null;
    return html`
      <div class="legend-card ${showLayerControl && "extra-padding"}">
        <sp-help-text>${legend.title}</sp-help-text>
        ${legend.elements?.map((_, i) => this.renderLegendEntry(key, i))}
      </div>
    `;
  }
  renderFallbackInterface() {
    return html`
      <div class="legend-card extra-padding">
        <sp-help-text>Layers</sp-help-text>
      </div>
    `;
  }

  render() {
    if (!this.legends) {
      return null;
    }
    const showToggle = this.legends.length > 1;
    const [yPosition, xPosition] = this.position.split("-");
    const staticLegends = this.legends.filter((key) => {
      const legend = this.getLegend?.(key);
      return legend?.visible && legend?.type === "static";
    });
    const dynamicLegends = this.legends.filter((key) => {
      const legend = this.getLegend?.(key);
      return legend?.visible && legend?.type !== "static";
    });
    const noLegends = staticLegends.length ===0 && dynamicLegends.length === 0;

    return html`
      <div class="legend" style="${yPosition}: 0; ${xPosition}: 0;}">
        ${dynamicLegends.map((key, idx) => {
          return this.renderLegendCard(
            key,
            showToggle &&
              staticLegends.length === 0 &&
              idx === dynamicLegends!.length - 1
          );
        })}
        ${this.renderStaticLegends(staticLegends)}
        ${noLegends ? this.renderFallbackInterface() : ``}
        ${this.renderLayerControl()}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "osl-map-legend": MapLegend;
  }
}
