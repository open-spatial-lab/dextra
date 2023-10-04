import { html, css } from "lit";
import { property } from "lit/decorators.js";
import { safeCustomElement } from "../../core/decorators/safeCustomElement";
import { ValtioElement } from "../../core/state";
import "@spectrum-web-components/card/sp-card.js";
import "@spectrum-web-components/action-menu/sp-action-menu.js";
import "@spectrum-web-components/menu/sp-menu-item.js";
import "@spectrum-web-components/icons-workflow/icons/sp-icon-visibility.js";
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
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right" = "bottom-left";

  static styles = css`
    .legend {
      padding: 0;
      margin: 0;
      position: absolute;
      display: flex;
      flex-direction: row;
      max-height: 30vh;
    }
    .legend-card {
      position: relative;
      border: 1px solid lightgray;
      background-color: var(--spectrum-background-layer-2-color);
      padding: 0.5rem;
      overflow-y:auto;
      max-width: 15ch;
    }
    .legend-card:not(:last-child) {
      border-right: none;
    }
    .legend-card.extra-padding {
      padding-right: 2.5rem;
    }
    .legend-actions {
      position: absolute;
      top: -2px;
      right: 0;
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
      <svg width="1rem" height="1rem" viewBox="0 0 20 20">
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
        <sp-icon-visibility slot="icon"></sp-icon-visibility>
        <sp-menu-item disabled>Show/Hide Layers</sp-menu-item>
        ${this.legends.map((key, i) => {
          return html`
            <sp-menu-item
              name="${key}"
              value="${key}"
              @click=${() => this.onLayerToggle?.(key)}
            >
              ${legends[i]?.visible
                ? html`<sp-icon-visibility slot="icon" />`
                : html`<sp-icon-visibility-off />`}
              ${legends[i]?.title}
            </sp-menu-item>
          `;
        })}
      </sp-action-menu>
    `;
  }

  renderLegendCard(key: string, showLayerControl = false) {
    const legend = this.getLegend(key);
    if (!legend) return null
    return html`
      <div class="legend-card ${showLayerControl && "extra-padding"}">
        <sp-help-text>${legend.title}</sp-help-text>
        ${legend.elements?.map((_, i) => this.renderLegendEntry(key, i))}
        ${showLayerControl ? this.renderLayerControl() : null}
      </div>
    `;
  }

  render() {
    if (!this.legends) {
      return null;
    }
    const showToggle = this.legends.length > 1;
    const [yPosition, xPosition] = this.position.split("-");
    const currentLegends = this.legends?.filter((key) => this.getLegend(key)?.visible);
    return html`
      <div class="legend" style="${yPosition}: 0; ${xPosition}: 0;}">
        ${currentLegends.map((key, idx) => {
          return this.renderLegendCard(
            key,
            showToggle && idx === currentLegends!.length - 1
          );
        })}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "osl-map-legend": MapLegend;
  }
}
