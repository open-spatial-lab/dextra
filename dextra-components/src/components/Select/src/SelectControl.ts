import { safeCustomElement } from "../../core/decorators/safeCustomElement";
import "./Select"
import { Select } from "./Select";

@safeCustomElement("osl-select-control")
export class SelectControl extends Select {
}

declare global {
  interface HTMLElementTagNameMap {
    "osl-select-control": SelectControl;
  }
}