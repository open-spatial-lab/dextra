// import { PropertyDeclaration, PropertyValueMap } from "lit";
// import { WorkerDataLayer } from "./worker-data-layer";

// export class EventLayer extends WorkerDataLayer {
//     // constructor() {
//     //     super()
//     //     const actions = getActions<this>({
//     //         ...this.handlers,
//     //         ...eventLayerActions,
//     //     });
//     //     this.handlers = {
//     //         ...this.handlers,
//     //         ...(actions),
//     //     }
//     //     this.listen()
//     // }

//     // handlers: actions<this> = {}

//     // dispatch({
//     //     type,
//     //     payload
//     // }: DefaultPayload) {
//     //     // @ts-ignore
//     //     const event = new CustomEvent<DefaultPayload>("dextra-dispatch", { detail: {type, payload}} )
//     //     window.dispatchEvent(event)
//     // }

//     // listen() {
//     //     // this.store.on("set", (state, event) => {
//     //     //     console.log('set', state, event)
//     //     // })
//     //     // window.addEventListener("dextra-dispatch", (event: CustomEventInit<DefaultPayload>) => {
//     //     //     if (!event.detail) return;
//     //     //     this.handle(event.detail)
//     //     // })
//     // }

//     // handle(detail: { type: string, payload: any }) {
//     //     const { type, payload } = detail
//     //     if (!this.handlers?.[type]) {
//     //         console.log('Unhandled event', type)
//     //         return;
//     //     } 
//     //     this.handlers?.[type].handler(this, payload)
//     // }
// }