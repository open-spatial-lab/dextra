import { css, html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { safeCustomElement } from "../../core/decorators/safeCustomElement";

@safeCustomElement("osl-flex-box")
export class FlexBox extends LitElement {
  @property({ type: String })
  breakpoint: "sm" | "md" | "lg" | "xl" | "none" = "sm";

  static get styles() {
    return css`
      ::slotted(*) {
        flex-grow: 1;
      }

      :host {
        display: flex;
        flex-direction: column;
        align-items: stretch;
      }

      @media (min-width: 576px) {
        :host([breakpoint="sm"]) {
          flex-direction: row;
          flex-wrap: wrap;
        }
      }

      @media (min-width: 768px) {
        :host([breakpoint="md"]) {
          flex-direction: row;
          flex-wrap: wrap;
        }
      }

      @media (min-width: 992px) {
        :host([breakpoint="lg"]) {
          flex-direction: row;
          flex-wrap: wrap;
        }
      }

      @media (min-width: 1200px) {
        :host([breakpoint="xl"]) {
          flex-direction: row;
          flex-wrap: wrap;
        }
      }
    `;
  }

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "osl-flex-box": FlexBox;
  }
}
