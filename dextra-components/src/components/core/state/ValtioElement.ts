import { css, html, LitElement } from "lit";
import { subscribe } from "valtio";
import { Sub } from "./Sub";
import { store } from "./Store";
import "@spectrum-web-components/theme/sp-theme.js";
import "@spectrum-web-components/theme/theme-light.js";
import "@spectrum-web-components/progress-bar/sp-progress-bar.js";
export class ValtioElement extends LitElement {
  protected store = store;
  private subs: Array<Sub<typeof store>> = [];
  private rootSub: Sub<typeof store> | null = null;
  static styles = css`
    @import "@spectrum-web-components/styles/theme-light.css";
  `;

  protected subscribe(
    selector: (state: typeof store) => any,
    callback: () => void,
    condition?: (state: typeof store) => boolean
  ) {
    const subscription = new Sub(
      subscribe(selector(store), callback),
      condition
    );
    this.subs.push(subscription);
  }

  private initRootSub() {
    const cb = () => {
      const subsToRemove: number[] = [];
      this.subs.forEach((sub, i) => {
        if (sub.satisfy(store)) {
          sub.unsubscribe();
          subsToRemove.push(i);
        }
      });
      this.subs = this.subs.filter((_, i) => !subsToRemove.includes(i));
    };
    this.rootSub = new Sub(subscribe(store, cb));
  }

  connectedCallback() {
    super.connectedCallback();
    this.initRootSub();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.subs.forEach((sub) => sub.unsubscribe());
    this.rootSub?.unsubscribe();
  }
  protected template() {
    return html``;
  }
  protected render(): unknown {
    return html`
      <sp-theme scale="" color="light"> ${this.template()} </sp-theme>
    `;
  }

  protected preloader() {
    return html`<div
      style="width: 100%; height: var(--spectrum-global-dimension-size-2000); display: flex; flex-direction: column; align-items: center; justify-content: space-around;"
    >
      <p>Loading...</p>
      <sp-progress-bar
        aria-label="Loaded an unclear amount"
        indeterminate
      ></sp-progress-bar>
    </div>`;
  }
}
