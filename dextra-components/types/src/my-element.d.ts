import { LitElement } from "lit";
declare const store: StateSchema;
export declare class MyElement extends LitElement {
    data: string;
    parameters: Record<string, any>;
    private subs;
    connectedCallback(): void;
    disconnectedCallback(): void;
    randomizeState(): void;
    randomizeDeepState(): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "my-element": MyElement;
    }
}
type StateSchema = {
    datasets: {
        [key: string]: {
            parameters: {};
            results: {};
        };
    };
};
export type State = typeof store;
export {};
