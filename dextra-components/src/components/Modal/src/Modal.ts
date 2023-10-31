import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import "@spectrum-web-components/theme/sp-theme.js";
import "@spectrum-web-components/dialog/sp-dialog-base.js";
import "@spectrum-web-components/button/sp-button.js";
import "@spectrum-web-components/overlay/overlay-trigger.js";
import { ValtioElement } from "../../core/state";
import { safeCustomElement } from "../../core/decorators/safeCustomElement";

@safeCustomElement("osl-modal")
export class OslModal extends ValtioElement<any> {
  @property({ type: String })
  label: string = "Open Menu";

  @property({ type: String })
  title: string = "Modal Title";

  @property({ type: String })
  size: "s" | "m" | "l" = "m";

  @property({ type: Boolean })
  isOpen: boolean = false;

  @property({ type: String })
  variant: string = "primary";

  toggleVisibility() {
    this.isOpen = !this.isOpen;
  }

  template() {
    return html`<div></div>
      <button style="position:fixed;
        left:0;
        top:0;
        background: rgba(0,0,0,0.5);
        width:100%;
        height:100%;
        z-index:9998;
        opacity:${this.isOpen ? 1 : 0};
        pointer-events:${this.isOpen ? "auto" : "none"};
        transition: opacity 0.3s ease-in-out;
        "
      @click=${this.toggleVisibility}
        >
        </button>
      <sp-dialog
        size="m"
        style="
          background: white;
          position:fixed;
          left:50%;
          top:50%;
          z-index:9999;
          width: 90vw;
          height: 90vh;
          transform:translate(-50%, -50%);
          opacity:${this.isOpen ? 1 : 0};
          pointer-events:${this.isOpen ? "auto" : "none"};
        transition: opacity 0.3s ease-in-out;

        ">
        <h2 slot="heading">${this.title}</h2>
        <slot>Fallback content</slot>
        <div>

      <sp-button
        @click=${this.toggleVisibility}
        style="position:absolute;top:12px;right:0px;"
        variant="white"
        aria-label="Close dialog"
      >
        &times;
      </button>
      </div>
      </sp-dialog>
      <sp-button
      variant=${this.variant}
      @click=${this.toggleVisibility}
      >
        ${this.label}
      </button>
`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "osl-modal": OslModal;
  }
}
