import { customElement } from "lit/decorators.js";

/**
 * A decorator function that creates a custom element with the specified tag name, if it has not already been defined.
 * If the custom element has already been defined elsewhere, a warning message is logged and the definition is ignored.
 * @param tagName The tag name for the custom element.
 * @returns A decorator function that can be used to define the custom element class.
 */
export const safeCustomElement = (tagName: string) => {
  if (customElements?.get(tagName)) {
    console.warn(
      `The custom element ${tagName} has already been defined elsewhere. This definition will be ignored.`
    );
    return (_target: any) => {}
  } else {
    return customElement(tagName);
  }
}