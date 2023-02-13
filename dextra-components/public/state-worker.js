"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if (decorator = decorators[i])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result)
      __defProp(target, key, result);
    return result;
  };

  // node_modules/lit-shared-state/dist/lit-shared-state.js
  function state(stateOptions) {
    return function(constructor) {
      return class extends constructor {
        constructor(...args) {
          super(...args);
          __parents.set(this, []);
          Object.keys(this).forEach((propKey) => {
            const desc = Object.getOwnPropertyDescriptor(this, propKey);
            if (desc === null || desc === void 0 ? void 0 : desc.writable) {
              defineState(constructor, this, propKey, stateOptions, desc.value);
            }
          });
          const optional = __optionals.get(constructor.prototype);
          if (optional) {
            for (const propKey of optional) {
              if (!Object.getOwnPropertyDescriptor(this, propKey)) {
                defineState(constructor, this, propKey, stateOptions);
              }
            }
          }
          !(stateOptions === null || stateOptions === void 0 ? void 0 : stateOptions.noSeal) && Object.seal(this);
        }
      };
    };
  }
  function updateAncestory(stateVar, value, propKey) {
    var _a, _b;
    if (stateVar.value instanceof Object && __parents.has(stateVar.value)) {
      __parents.set(stateVar.value, __parents.get(stateVar.value).filter(({ parent }) => parent != stateVar));
    }
    if (value instanceof Object && __parents.has(value)) {
      (_a = __parents.get(value)) === null || _a === void 0 ? void 0 : _a.push({ parent: stateVar, propKey });
    }
    if (value instanceof Array) {
      for (const v of value) {
        if (v instanceof Object && __parents.has(v)) {
          (_b = __parents.get(v)) === null || _b === void 0 ? void 0 : _b.push({ parent: stateVar, propKey });
        }
      }
    }
  }
  function defineState(constructor, object, propKey, stateOptions, value) {
    const options = defaultOptions(chainOptions(constructor, propKey, stateOptions));
    const stateVar = new StateVar(object, propKey, options, value);
    updateAncestory(stateVar, value, propKey);
    Object.defineProperty(object, propKey, {
      enumerable: true,
      set(value2) {
        if (stateVar.options.lock && stateVar.options.lock.symbol !== __lock) {
          throw new AccessError(stateVar.key);
        }
        updateAncestory(stateVar, value2, propKey);
        stateVar.options.set(stateVar, value2);
      },
      get() {
        __currentController && stateVar.observers.add(__currentController);
        return stateVar === null || stateVar === void 0 ? void 0 : stateVar.options.get(stateVar);
      }
    });
  }
  var StateVar = class {
    constructor(parent, key, options, _value) {
      this.parent = parent;
      this.key = key;
      this.options = options;
      this._value = _value;
      this.observers = /* @__PURE__ */ new Set();
      if (this.options.init) {
        this._value = this.options.init(this, _value);
        options.notifyOnInit && this.notifyObservers();
      }
    }
    get value() {
      return this._value;
    }
    set value(value) {
      this._value = value;
      this.notifyObservers();
    }
    /**
     * notifies all LitElement observers and all explicitly passed observers
     */
    notifyObservers() {
      for (const observer2 of this.observers.keys()) {
        observer2.update();
      }
      for (const observer2 of this.options.observers) {
        __currentTransaction ? __currentTransaction.deferr(observer2, this) : observer2(/* @__PURE__ */ new Set([this]));
      }
      const parents = __parents.get(this.parent);
      for (const { parent } of parents) {
        parent.notifyObservers();
      }
    }
  };
  var __currentTransaction = void 0;
  function defaultOptions({ observers = [], notifyOnInit = false, noSeal = false, lock = null, init = function init2(_stateVar, v) {
    return v;
  }, set = function set2(stateVar, v) {
    if (stateVar.value !== v) {
      stateVar.value = v;
    }
  }, get = function get2(stateVar) {
    return stateVar.value;
  } } = {}) {
    return { lock, set, get, init, observers, notifyOnInit, noSeal };
  }
  var __optionals = /* @__PURE__ */ new WeakMap();
  function chainOptions(object, propKey, optionsBefore = {}, optionsAfter = {}) {
    let t = __options.get(object);
    if (!t) {
      t = /* @__PURE__ */ new Map();
      __options.set(object, t);
    }
    const o = Object.assign(Object.assign(Object.assign({}, optionsBefore), t.get(propKey) || {}), optionsAfter);
    t.set(propKey, o);
    return o;
  }
  var AccessError = class extends Error {
    constructor(name) {
      super(`Access to '${name}' is locked. Needs unlocked context for access!`);
    }
  };
  var __options = /* @__PURE__ */ new WeakMap();
  var __parents = /* @__PURE__ */ new WeakMap();
  var __currentController;
  var __lock = null;

  // src/schemas/state.ts
  var DEBUG = false;
  function observer(changed) {
    for (let { key, value } of changed) {
      console.log("new value:", value, "for", key);
    }
  }
  var State = class {
    constructor() {
      this.datasets = {};
      this.db = null;
      this.analysis = null;
      this.dbWorkerstatus = void 0;
    }
  };
  State = __decorateClass([
    state({ observers: DEBUG ? [observer] : [] })
  ], State);
  var globalState = new State();

  // ../node_modules/.pnpm/comlink@4.3.1/node_modules/comlink/dist/esm/comlink.mjs
  var proxyMarker = Symbol("Comlink.proxy");
  var createEndpoint = Symbol("Comlink.endpoint");
  var releaseProxy = Symbol("Comlink.releaseProxy");
  var throwMarker = Symbol("Comlink.thrown");
  var isObject = (val) => typeof val === "object" && val !== null || typeof val === "function";
  var proxyTransferHandler = {
    canHandle: (val) => isObject(val) && val[proxyMarker],
    serialize(obj) {
      const { port1, port2 } = new MessageChannel();
      expose(obj, port1);
      return [port2, [port2]];
    },
    deserialize(port) {
      port.start();
      return wrap(port);
    }
  };
  var throwTransferHandler = {
    canHandle: (value) => isObject(value) && throwMarker in value,
    serialize({ value }) {
      let serialized;
      if (value instanceof Error) {
        serialized = {
          isError: true,
          value: {
            message: value.message,
            name: value.name,
            stack: value.stack
          }
        };
      } else {
        serialized = { isError: false, value };
      }
      return [serialized, []];
    },
    deserialize(serialized) {
      if (serialized.isError) {
        throw Object.assign(new Error(serialized.value.message), serialized.value);
      }
      throw serialized.value;
    }
  };
  var transferHandlers = /* @__PURE__ */ new Map([
    ["proxy", proxyTransferHandler],
    ["throw", throwTransferHandler]
  ]);
  function expose(obj, ep = self) {
    ep.addEventListener("message", function callback(ev) {
      if (!ev || !ev.data) {
        return;
      }
      const { id, type, path } = Object.assign({ path: [] }, ev.data);
      const argumentList = (ev.data.argumentList || []).map(fromWireValue);
      let returnValue;
      try {
        const parent = path.slice(0, -1).reduce((obj2, prop) => obj2[prop], obj);
        const rawValue = path.reduce((obj2, prop) => obj2[prop], obj);
        switch (type) {
          case "GET":
            {
              returnValue = rawValue;
            }
            break;
          case "SET":
            {
              parent[path.slice(-1)[0]] = fromWireValue(ev.data.value);
              returnValue = true;
            }
            break;
          case "APPLY":
            {
              returnValue = rawValue.apply(parent, argumentList);
            }
            break;
          case "CONSTRUCT":
            {
              const value = new rawValue(...argumentList);
              returnValue = proxy(value);
            }
            break;
          case "ENDPOINT":
            {
              const { port1, port2 } = new MessageChannel();
              expose(obj, port2);
              returnValue = transfer(port1, [port1]);
            }
            break;
          case "RELEASE":
            {
              returnValue = void 0;
            }
            break;
          default:
            return;
        }
      } catch (value) {
        returnValue = { value, [throwMarker]: 0 };
      }
      Promise.resolve(returnValue).catch((value) => {
        return { value, [throwMarker]: 0 };
      }).then((returnValue2) => {
        const [wireValue, transferables] = toWireValue(returnValue2);
        ep.postMessage(Object.assign(Object.assign({}, wireValue), { id }), transferables);
        if (type === "RELEASE") {
          ep.removeEventListener("message", callback);
          closeEndPoint(ep);
        }
      });
    });
    if (ep.start) {
      ep.start();
    }
  }
  function isMessagePort(endpoint) {
    return endpoint.constructor.name === "MessagePort";
  }
  function closeEndPoint(endpoint) {
    if (isMessagePort(endpoint))
      endpoint.close();
  }
  function wrap(ep, target) {
    return createProxy(ep, [], target);
  }
  function throwIfProxyReleased(isReleased) {
    if (isReleased) {
      throw new Error("Proxy has been released and is not useable");
    }
  }
  function createProxy(ep, path = [], target = function() {
  }) {
    let isProxyReleased = false;
    const proxy2 = new Proxy(target, {
      get(_target, prop) {
        throwIfProxyReleased(isProxyReleased);
        if (prop === releaseProxy) {
          return () => {
            return requestResponseMessage(ep, {
              type: "RELEASE",
              path: path.map((p) => p.toString())
            }).then(() => {
              closeEndPoint(ep);
              isProxyReleased = true;
            });
          };
        }
        if (prop === "then") {
          if (path.length === 0) {
            return { then: () => proxy2 };
          }
          const r = requestResponseMessage(ep, {
            type: "GET",
            path: path.map((p) => p.toString())
          }).then(fromWireValue);
          return r.then.bind(r);
        }
        return createProxy(ep, [...path, prop]);
      },
      set(_target, prop, rawValue) {
        throwIfProxyReleased(isProxyReleased);
        const [value, transferables] = toWireValue(rawValue);
        return requestResponseMessage(ep, {
          type: "SET",
          path: [...path, prop].map((p) => p.toString()),
          value
        }, transferables).then(fromWireValue);
      },
      apply(_target, _thisArg, rawArgumentList) {
        throwIfProxyReleased(isProxyReleased);
        const last = path[path.length - 1];
        if (last === createEndpoint) {
          return requestResponseMessage(ep, {
            type: "ENDPOINT"
          }).then(fromWireValue);
        }
        if (last === "bind") {
          return createProxy(ep, path.slice(0, -1));
        }
        const [argumentList, transferables] = processArguments(rawArgumentList);
        return requestResponseMessage(ep, {
          type: "APPLY",
          path: path.map((p) => p.toString()),
          argumentList
        }, transferables).then(fromWireValue);
      },
      construct(_target, rawArgumentList) {
        throwIfProxyReleased(isProxyReleased);
        const [argumentList, transferables] = processArguments(rawArgumentList);
        return requestResponseMessage(ep, {
          type: "CONSTRUCT",
          path: path.map((p) => p.toString()),
          argumentList
        }, transferables).then(fromWireValue);
      }
    });
    return proxy2;
  }
  function myFlat(arr) {
    return Array.prototype.concat.apply([], arr);
  }
  function processArguments(argumentList) {
    const processed = argumentList.map(toWireValue);
    return [processed.map((v) => v[0]), myFlat(processed.map((v) => v[1]))];
  }
  var transferCache = /* @__PURE__ */ new WeakMap();
  function transfer(obj, transfers) {
    transferCache.set(obj, transfers);
    return obj;
  }
  function proxy(obj) {
    return Object.assign(obj, { [proxyMarker]: true });
  }
  function toWireValue(value) {
    for (const [name, handler] of transferHandlers) {
      if (handler.canHandle(value)) {
        const [serializedValue, transferables] = handler.serialize(value);
        return [
          {
            type: "HANDLER",
            name,
            value: serializedValue
          },
          transferables
        ];
      }
    }
    return [
      {
        type: "RAW",
        value
      },
      transferCache.get(value) || []
    ];
  }
  function fromWireValue(value) {
    switch (value.type) {
      case "HANDLER":
        return transferHandlers.get(value.name).deserialize(value.value);
      case "RAW":
        return value.value;
    }
  }
  function requestResponseMessage(ep, msg, transfers) {
    return new Promise((resolve) => {
      const id = generateUUID();
      ep.addEventListener("message", function l(ev) {
        if (!ev.data || !ev.data.id || ev.data.id !== id) {
          return;
        }
        ep.removeEventListener("message", l);
        resolve(ev.data);
      });
      if (ep.start) {
        ep.start();
      }
      ep.postMessage(Object.assign({ id }, msg), transfers);
    });
  }
  function generateUUID() {
    return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
  }

  // src/workers/state-worker.ts
  var StateWorker = new State();
  onconnect = (e) => expose(StateWorker, e.ports[0]);
})();
