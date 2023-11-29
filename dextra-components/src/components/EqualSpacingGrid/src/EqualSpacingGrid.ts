import { css, html } from "lit";
import { ValtioElement } from "../../core/state";
import { safeCustomElement } from "../../core/decorators/safeCustomElement";
import { property } from "lit/decorators.js";

const GRID_CSS = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(0, 1fr));
  gap: 0.5rem;
`;
@safeCustomElement("osl-eq-grid")
export class OslEqualSpacingGrid extends ValtioElement<any> {
  @property({ type: String })
  breakpoint: "sm" | "md" | "lg" | "xl" | "none" = "lg";

  static styles = css`
    :host {
      display: block;
      width: 100%;
      height: 100%;
    }

    @media (min-width: 576px) {
      :host([breakpoint="sm"]) {
        ${GRID_CSS}
      }
    }

    @media (min-width: 768px) {
      :host([breakpoint="md"]) {
        ${GRID_CSS}
      }
    }

    @media (min-width: 992px) {
      :host([breakpoint="lg"]) {
        ${GRID_CSS}
      }
    }

    @media (min-width: 1200px) {
      :host([breakpoint="xl"]) {
        ${GRID_CSS}
      }
    }
  `;

  updated() {
    const slot = this.shadowRoot?.querySelector("slot");
    if (slot) {
      const childCount = slot.assignedElements().length;
      const amoritizedGap = Math.floor((0.5 / childCount) * 1000) / 1000;
      console.log(amoritizedGap);
      this.style.gridTemplateColumns = `repeat(${childCount}, calc(${
        Math.round(10000 / childCount) / 100
      }% - 0.5rem + ${amoritizedGap}rem)`;
    }
  }

  render() {
    return html` <slot></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "osl-eq-grid": OslEqualSpacingGrid;
  }
}
