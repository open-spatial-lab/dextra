import { WorkerDataLayer } from "./worker-data-layer";

type actions<C> = {
    [key: string]: {
        payload: { [key: string]: any},
        handler: (self: C, payload: any) => void,
    }
}

type DefaultPayload = {
    type: string;
    payload: any
}

const eventLayerActions = {
    INITIALIZE: {
        payload: {
            test: "",
        },
        handler: (self: any, payload: any) => {
            self.dataSchema = payload;
        }
    }
}

const getActions = <C>(actions: actions<C>) => actions

export class EventLayer extends WorkerDataLayer {
    constructor() {
        super()
        const actions = getActions<this>({
            ...this.handlers,
            ...eventLayerActions,
        });
        this.handlers = {
            ...this.handlers,
            ...(actions),
        }
        this.listen()
    }

    handlers: actions<this> = {}

    dispatch({
        type,
        payload
    }: DefaultPayload) {
        // @ts-ignore
        const event = new CustomEvent<DefaultPayload>("dextra-dispatch", { detail: {type, payload}} )
        window.dispatchEvent(event)
    }

    listen() {
        window.addEventListener("dextra-dispatch", (event: CustomEventInit<DefaultPayload>) => {
            if (!event.detail) return;
            this.handle(event.detail)
        })
    }

    handle(detail: { type: string, payload: any }) {
        const { type, payload } = detail
        if (!this.handlers?.[type]) {
            console.log('Unhandled event', type)
            return;
        } 
        this.handlers?.[type].handler(this, payload)
    }
}