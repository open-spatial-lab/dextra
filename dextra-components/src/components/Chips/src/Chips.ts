import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { DexterInterface } from "../../Interface/src/Interface";
import "@spectrum-web-components/tags/sp-tags.js";
import "@spectrum-web-components/tags/sp-tag.js";
import "@spectrum-web-components/theme/sp-theme.js";
import "@spectrum-web-components/theme/src/themes.js";
import "@spectrum-web-components/textfield/sp-textfield.js";

@customElement("dexter-chips")
export class DexterChips extends DexterInterface {

  getJsonValues(){
    const value = (this.value as Array<string | number>) || [];
    const options = typeof value === "string" ? JSON.parse(value) : value || [];
    return options;
  }

  renderTags() {
    const options = this.getJsonValues();
    return html`
      ${options.map(
        (option: string | number) => html`
          <sp-tag
            deleteable
            value="${option}"
            @click=${() => this.handleRemove(option)}
            >${option}</sp-tag
          >
        `
      )}
    `;
  }

  renderHelpText() {
    return this.label
      ? html` <sp-help-text slot="help-text"> ${this.label} </sp-help-text>`
      : html``;
  }

  protected handleRemove(value: string | number | any) {
    const options = this.getJsonValues();
    const newValues = options.filter((option) => option !== value);
    this.handleChange({
      target: {
        value: newValues
      },
    });
    // const options = this.options || [];
    // console.log(this.store.datasets[this.data].parameters);
    // const newValues = options.filter((option) => option !== value);
    // console.log(options, value, newValues);
    // this.store.datasets[this.data].parameters[this.option] = newValues;
  }

  template() {
    return html`
      <sp-tags> ${this.renderTags()} </sp-tags><br />
      <sp-field-label for="chips-${this.id}">${this.title}</sp-field-label>
      <sp-textfield id="chips-${this.id}" placeholder=${this.label as string}>
        ${this.renderHelpText()}
      </sp-textfield>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "dexter-chips": DexterChips;
  }
}
