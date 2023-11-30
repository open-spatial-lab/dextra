import { css, html } from "lit";
import { property } from "lit/decorators.js";
import { safeCustomElement } from "../../core/decorators/safeCustomElement";
import "@spectrum-web-components/help-text/sp-help-text.js";
import "@spectrum-web-components/menu/sp-menu.js";
import "@spectrum-web-components/menu/sp-menu-item.js";
import "@spectrum-web-components/action-button/sp-action-button.js";
import "@spectrum-web-components/overlay/overlay-trigger.js";
import "@spectrum-web-components/tooltip/sp-tooltip.js";
import "@spectrum-web-components/popover/sp-popover.js";
import "@spectrum-web-components/dialog/sp-dialog.js";
import "@spectrum-web-components/icons-ui/icons/sp-icon-chevron100.js";
import "@lit-labs/virtualizer";

import { OslControl } from "../../Interface/src/Interface";
import { query } from "lit-element";

// Always used within other component
@safeCustomElement("osl-select")
export class Select extends OslControl {
  @property({ type: Array }) //@ts-ignore
  options?: Array<string | { label: string; value: any }>;

  @query("#label")
  selectLabel?: HTMLElement;

  @query("#toggle")
  toggleButton?: HTMLElement;

  toggleOpen() {
    const toggleButton = this.toggleButton;
    if (!toggleButton) return;
    toggleButton.click();
  }

  get buttonDimensions() {
    const dims = this.toggleButton?.getBoundingClientRect();
    if (!dims) return { width: 0, height: 0 };
    return dims;
  }

  static styles = css`
    #virtualized-list {
      min-width: 400px;
      width: fit-content;
      max-width: 100vw;
      min-height: 400px;
      height: fit-content;
      max-height: 100vh;
    }
    :host sp-menu-item {
      width: 100%;
    }
    :host sp-icon-chevron100 {
      margin-left: 0.5rem;
      transform: scale(0.75) rotate(90deg);
    }
    :host sp-action-button {
      max-width: 100%;
    }
  `;

  forceVirtualListInitialize() {
    const virtualizer = this.shadowRoot?.querySelector("#virtualized-list");
    try {
      // @ts-ignore
      virtualizer.element(1).scrollIntoView({
        block: "top",
      });
    } catch (e) {}
  }

  renderButton() {
    const valueLabel = this.getValueLabel();
    return html`
      <sp-action-button
        slot="trigger"
        id="toggle"
        @click=${this.forceVirtualListInitialize}
      >
        ${valueLabel}
        <sp-icon-chevron100 size="s"></sp-icon-chevron100>
      </sp-action-button>
    `;
  }

  handleChange(event: Event) {
    super.handleChange(event);
    if (!this.multipleSelect) {
      this.toggleOpen();
    }
  }
  renderPopover() {
    const value = this.value || "";
    return html`
      <sp-popover slot="click-content" direction="bottom-start">
        <sp-menu @click=${this.handleChange}>
          ${this.renderDropdownOptions(value)}
        </sp-menu>
      </sp-popover>
    `;
  }
  renderSelectedOption(label: string | number, value?: string | number) {
    return html`<sp-menu-item name="${label}" value="${value}" selected="true"
      >${label}
    </sp-menu-item>`;
  }

  renderUnselectedOption(label: string | number, value?: string | number) {
    return html`<sp-menu-item name="${label}" value="${value}"
      >${label}
    </sp-menu-item>`;
  }

  renderDropdownOptions(value: string | number | Array<string | number>) {
    const options = this.options || [];
    const getValue = (v: string | number) => {
      return Array.isArray(value) ? value.includes(v) : value === v;
    };
    return html` <lit-virtualizer
      id="virtualized-list"
      scroller
      .items=${options}
      .renderItem=${(option: any) => {
        const label = this.getOptionText(option);
        const value = this.getOptionValue(option);
        const isSelected = getValue(value);
        return isSelected
          ? this.renderSelectedOption(label, value)
          : this.renderUnselectedOption(label, value);
      }}
    ></lit-virtualizer>`;
  }

  protected renderTitle() {
    const title = this.title || "";
    return title.length
      ? html`<sp-field-label for="picker-${this.elementId}" size="m"
          >${title}</sp-field-label
        >`
      : html``;
  }

  protected renderDescription() {
    const description = this.label || "";
    return description.length
      ? html`<sp-help-text slot="help-text">${description}</sp-help-text>`
      : html``;
  }

  eventValueAccessor(event: Event) {
    const eventValue = (event.target as HTMLInputElement).value;
    if (this.multipleSelect) {
      const storeValue = Array.isArray(this.value) ? this.value : [];
      return storeValue.includes(eventValue)
        ? storeValue.filter((v) => v !== eventValue)
        : [...storeValue, eventValue];
    } else {
      return eventValue;
    }
  }

  protected domUpdatesOnChange() {
    if (!this.selectLabel) return;
    this.selectLabel.innerHTML = `${this.getValueLabel()}`;
  }
  template() {
    return html`
      ${this.renderTitle()}
      <overlay-trigger id="trigger" placement="bottom" offset="6">
        ${this.renderButton()} ${this.renderPopover()}
      </overlay-trigger>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "osl-select": Select;
  }
}
