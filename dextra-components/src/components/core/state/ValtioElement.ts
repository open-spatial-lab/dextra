import { LitElement } from "lit";
import { subscribe } from "valtio";
import { Sub } from "./Sub";
import { store } from "./Store";

export class ValtioElement extends LitElement {
  protected store = store;
  private subs: Array<Sub<typeof store>> = [];
  private rootSub: Sub<typeof store> | null = null;

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
}
