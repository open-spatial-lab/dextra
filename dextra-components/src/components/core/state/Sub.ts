import { store } from "./Store";

export class Sub<T extends typeof store> {
  unsubscribe: () => void = () => {};
  condition?: (state: T) => boolean = () => false;

  constructor(unsubscribe: () => void, condition?: (state: T) => boolean) {
    this.unsubscribe = unsubscribe;
    this.condition = condition;
  }

  satisfy(state: T) {
    const isSatisfied = this.condition?.(state);
    if (isSatisfied) {
      this.unsubscribe();
    }
    return isSatisfied;
  }
}