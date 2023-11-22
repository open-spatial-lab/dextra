function h(t,e,...n){if(!t)throw new TypeError(M(e,n))}function M(t,e){let n=0;return t.replace(/%[os]/gu,()=>U(e[n++]))}function U(t){return typeof t!="object"||t===null?String(t):Object.prototype.toString.call(t)}let _;function Oe(t){h(typeof t=="function"||t===void 0,"The error handler must be a function or undefined, but got %o.",t),_=t}function ee(t){try{const e=t instanceof Error?t:new Error(U(t));if(_){_(e);return}if(typeof dispatchEvent=="function"&&typeof ErrorEvent=="function")dispatchEvent(new ErrorEvent("error",{error:e,message:e.message}));else if(typeof process<"u"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)}catch{}}const l=typeof window<"u"?window:typeof self<"u"?self:typeof global<"u"?global:typeof globalThis<"u"?globalThis:void 0;let w;function _e(t){h(typeof t=="function"||t===void 0,"The warning handler must be a function or undefined, but got %o.",t),w=t}class f{constructor(e,n){this.code=e,this.message=n}warn(...e){var n;try{if(w){w({...this,args:e});return}const r=((n=new Error().stack)!==null&&n!==void 0?n:"").replace(/^(?:.+?\n){2}/gu,`
`);console.warn(this.message,...e,r)}catch{}}}const te=new f("W01","Unable to initialize event under dispatching."),ne=new f("W02","Assigning any falsy value to 'cancelBubble' property has no effect."),re=new f("W03","Assigning any truthy value to 'returnValue' property has no effect."),oe=new f("W04","Unable to preventDefault on non-cancelable events."),ae=new f("W05","Unable to preventDefault inside passive event listener invocation."),ie=new f("W06","An event listener wasn't added because it has been added already: %o, %o"),R=new f("W07","The %o option value was abandoned because the event listener wasn't added as duplicated."),S=new f("W08","The 'callback' argument must be a function or an object that has 'handleEvent' method: %o"),se=new f("W09","Event attribute handler must be a function: %o");class p{static get NONE(){return C}static get CAPTURING_PHASE(){return N}static get AT_TARGET(){return D}static get BUBBLING_PHASE(){return B}constructor(e,n){Object.defineProperty(this,"isTrusted",{value:!1,enumerable:!0});const r=n??{};A.set(this,{type:String(e),bubbles:Boolean(r.bubbles),cancelable:Boolean(r.cancelable),composed:Boolean(r.composed),target:null,currentTarget:null,stopPropagationFlag:!1,stopImmediatePropagationFlag:!1,canceledFlag:!1,inPassiveListenerFlag:!1,dispatchFlag:!1,timeStamp:Date.now()})}get type(){return a(this).type}get target(){return a(this).target}get srcElement(){return a(this).target}get currentTarget(){return a(this).currentTarget}composedPath(){const e=a(this).currentTarget;return e?[e]:[]}get NONE(){return C}get CAPTURING_PHASE(){return N}get AT_TARGET(){return D}get BUBBLING_PHASE(){return B}get eventPhase(){return a(this).dispatchFlag?2:0}stopPropagation(){a(this).stopPropagationFlag=!0}get cancelBubble(){return a(this).stopPropagationFlag}set cancelBubble(e){e?a(this).stopPropagationFlag=!0:ne.warn()}stopImmediatePropagation(){const e=a(this);e.stopPropagationFlag=e.stopImmediatePropagationFlag=!0}get bubbles(){return a(this).bubbles}get cancelable(){return a(this).cancelable}get returnValue(){return!a(this).canceledFlag}set returnValue(e){e?re.warn():j(a(this))}preventDefault(){j(a(this))}get defaultPrevented(){return a(this).canceledFlag}get composed(){return a(this).composed}get isTrusted(){return!1}get timeStamp(){return a(this).timeStamp}initEvent(e,n=!1,r=!1){const o=a(this);if(o.dispatchFlag){te.warn();return}A.set(this,{...o,type:String(e),bubbles:Boolean(n),cancelable:Boolean(r),target:null,currentTarget:null,stopPropagationFlag:!1,stopImmediatePropagationFlag:!1,canceledFlag:!1})}}const C=0,N=1,D=2,B=3,A=new WeakMap;function a(t,e="this"){const n=A.get(t);return h(n!=null,"'%s' must be an object that Event constructor created, but got another one: %o",e,t),n}function j(t){if(t.inPassiveListenerFlag){ae.warn();return}if(!t.cancelable){oe.warn();return}t.canceledFlag=!0}Object.defineProperty(p,"NONE",{enumerable:!0});Object.defineProperty(p,"CAPTURING_PHASE",{enumerable:!0});Object.defineProperty(p,"AT_TARGET",{enumerable:!0});Object.defineProperty(p,"BUBBLING_PHASE",{enumerable:!0});const P=Object.getOwnPropertyNames(p.prototype);for(let t=0;t<P.length;++t)P[t]!=="constructor"&&Object.defineProperty(p.prototype,P[t],{enumerable:!0});typeof l<"u"&&typeof l.Event<"u"&&Object.setPrototypeOf(p.prototype,l.Event.prototype);function ue(t){return l.DOMException?new l.DOMException(t,"InvalidStateError"):(g==null&&(g=class H extends Error{constructor(n){super(n),Error.captureStackTrace&&Error.captureStackTrace(this,H)}get code(){return 11}get name(){return"InvalidStateError"}},Object.defineProperties(g.prototype,{code:{enumerable:!0},name:{enumerable:!0}}),W(g),W(g.prototype)),new g(t))}let g;const F={INDEX_SIZE_ERR:1,DOMSTRING_SIZE_ERR:2,HIERARCHY_REQUEST_ERR:3,WRONG_DOCUMENT_ERR:4,INVALID_CHARACTER_ERR:5,NO_DATA_ALLOWED_ERR:6,NO_MODIFICATION_ALLOWED_ERR:7,NOT_FOUND_ERR:8,NOT_SUPPORTED_ERR:9,INUSE_ATTRIBUTE_ERR:10,INVALID_STATE_ERR:11,SYNTAX_ERR:12,INVALID_MODIFICATION_ERR:13,NAMESPACE_ERR:14,INVALID_ACCESS_ERR:15,VALIDATION_ERR:16,TYPE_MISMATCH_ERR:17,SECURITY_ERR:18,NETWORK_ERR:19,ABORT_ERR:20,URL_MISMATCH_ERR:21,QUOTA_EXCEEDED_ERR:22,TIMEOUT_ERR:23,INVALID_NODE_TYPE_ERR:24,DATA_CLONE_ERR:25};function W(t){const e=Object.keys(F);for(let n=0;n<e.length;++n){const r=e[n],o=F[r];Object.defineProperty(t,r,{get(){return o},configurable:!0,enumerable:!0})}}class y extends p{static wrap(e){return new(G(e))(e)}constructor(e){super(e.type,{bubbles:e.bubbles,cancelable:e.cancelable,composed:e.composed}),e.cancelBubble&&super.stopPropagation(),e.defaultPrevented&&super.preventDefault(),V.set(this,{original:e});const n=Object.keys(e);for(let r=0;r<n.length;++r){const o=n[r];o in this||Object.defineProperty(this,o,$(e,o))}}stopPropagation(){super.stopPropagation();const{original:e}=d(this);"stopPropagation"in e&&e.stopPropagation()}get cancelBubble(){return super.cancelBubble}set cancelBubble(e){super.cancelBubble=e;const{original:n}=d(this);"cancelBubble"in n&&(n.cancelBubble=e)}stopImmediatePropagation(){super.stopImmediatePropagation();const{original:e}=d(this);"stopImmediatePropagation"in e&&e.stopImmediatePropagation()}get returnValue(){return super.returnValue}set returnValue(e){super.returnValue=e;const{original:n}=d(this);"returnValue"in n&&(n.returnValue=e)}preventDefault(){super.preventDefault();const{original:e}=d(this);"preventDefault"in e&&e.preventDefault()}get timeStamp(){const{original:e}=d(this);return"timeStamp"in e?e.timeStamp:super.timeStamp}}const V=new WeakMap;function d(t){const e=V.get(t);return h(e!=null,"'this' is expected an Event object, but got",t),e}const v=new WeakMap;v.set(Object.prototype,y);typeof l<"u"&&typeof l.Event<"u"&&v.set(l.Event.prototype,y);function G(t){const e=Object.getPrototypeOf(t);if(e==null)return y;let n=v.get(e);return n==null&&(n=le(G(e),e),v.set(e,n)),n}function le(t,e){class n extends t{}const r=Object.keys(e);for(let o=0;o<r.length;++o)Object.defineProperty(n.prototype,r[o],$(e,r[o]));return n}function $(t,e){const n=Object.getOwnPropertyDescriptor(t,e);return{get(){const r=d(this).original,o=r[e];return typeof o=="function"?o.bind(r):o},set(r){const o=d(this).original;o[e]=r},configurable:n.configurable,enumerable:n.enumerable}}function ce(t,e,n,r,o,i){return{callback:t,flags:(e?1:0)|(n?2:0)|(r?4:0),signal:o,signalListener:i}}function fe(t){t.flags|=8}function k(t){return(t.flags&1)===1}function x(t){return(t.flags&2)===2}function Y(t){return(t.flags&4)===4}function pe(t){return(t.flags&8)===8}function de({callback:t},e,n){try{typeof t=="function"?t.call(e,n):typeof t.handleEvent=="function"&&t.handleEvent(n)}catch(r){ee(r)}}function z({listeners:t},e,n){for(let r=0;r<t.length;++r)if(t[r].callback===e&&k(t[r])===n)return r;return-1}function X(t,e,n,r,o,i){let u;i&&(u=I.bind(null,t,e,n),i.addEventListener("abort",u));const s=ce(e,n,r,o,i,u);return t.cow?(t.cow=!1,t.listeners=[...t.listeners,s]):t.listeners.push(s),s}function I(t,e,n){const r=z(t,e,n);return r!==-1?Q(t,r):!1}function Q(t,e,n=!1){const r=t.listeners[e];return fe(r),r.signal&&r.signal.removeEventListener("abort",r.signalListener),t.cow&&!n?(t.cow=!1,t.listeners=t.listeners.filter((o,i)=>i!==e),!1):(t.listeners.splice(e,1),!0)}function ge(){return Object.create(null)}function Z(t,e){var n;return(n=t[e])!==null&&n!==void 0?n:t[e]={attrCallback:void 0,attrListener:void 0,cow:!1,listeners:[]}}class m{constructor(){K.set(this,ge())}addEventListener(e,n,r){const o=b(this),{callback:i,capture:u,once:s,passive:c,signal:E,type:J}=be(e,n,r);if(i==null||E!=null&&E.aborted)return;const T=Z(o,J),L=z(T,i,u);if(L!==-1){he(T.listeners[L],c,s,E);return}X(T,i,u,c,s,E)}removeEventListener(e,n,r){const o=b(this),{callback:i,capture:u,type:s}=Ee(e,n,r),c=o[s];i!=null&&c&&I(c,i,u)}dispatchEvent(e){const n=b(this)[String(e.type)];if(n==null)return!0;const r=e instanceof p?e:y.wrap(e),o=a(r,"event");if(o.dispatchFlag)throw ue("This event has been in dispatching.");if(o.dispatchFlag=!0,o.target=o.currentTarget=this,!o.stopPropagationFlag){const{cow:i,listeners:u}=n;n.cow=!0;for(let s=0;s<u.length;++s){const c=u[s];if(!pe(c)&&(Y(c)&&Q(n,s,!i)&&(s-=1),o.inPassiveListenerFlag=x(c),de(c,this,r),o.inPassiveListenerFlag=!1,o.stopImmediatePropagationFlag))break}i||(n.cow=!1)}return o.target=null,o.currentTarget=null,o.stopImmediatePropagationFlag=!1,o.stopPropagationFlag=!1,o.dispatchFlag=!1,!o.canceledFlag}}const K=new WeakMap;function b(t,e="this"){const n=K.get(t);return h(n!=null,"'%s' must be an object that EventTarget constructor created, but got another one: %o",e,t),n}function be(t,e,n){var r;return q(e),typeof n=="object"&&n!==null?{type:String(t),callback:e??void 0,capture:Boolean(n.capture),passive:Boolean(n.passive),once:Boolean(n.once),signal:(r=n.signal)!==null&&r!==void 0?r:void 0}:{type:String(t),callback:e??void 0,capture:Boolean(n),passive:!1,once:!1,signal:void 0}}function Ee(t,e,n){return q(e),typeof n=="object"&&n!==null?{type:String(t),callback:e??void 0,capture:Boolean(n.capture)}:{type:String(t),callback:e??void 0,capture:Boolean(n)}}function q(t){if(!(typeof t=="function"||typeof t=="object"&&t!==null&&typeof t.handleEvent=="function")){if(t==null||typeof t=="object"){S.warn(t);return}throw new TypeError(M(S.message,[t]))}}function he(t,e,n,r){ie.warn(k(t)?"capture":"bubble",t.callback),x(t)!==e&&R.warn("passive"),Y(t)!==n&&R.warn("once"),t.signal!==r&&R.warn("signal")}const O=Object.getOwnPropertyNames(m.prototype);for(let t=0;t<O.length;++t)O[t]!=="constructor"&&Object.defineProperty(m.prototype,O[t],{enumerable:!0});typeof l<"u"&&typeof l.EventTarget<"u"&&Object.setPrototypeOf(m.prototype,l.EventTarget.prototype);function ve(t,e){var n,r;return(r=(n=b(t,"target")[e])===null||n===void 0?void 0:n.attrCallback)!==null&&r!==void 0?r:null}function ye(t,e,n){n!=null&&typeof n!="function"&&se.warn(n),typeof n=="function"||typeof n=="object"&&n!==null?me(t,e,n):Te(t,e)}function me(t,e,n){const r=Z(b(t,"target"),String(e));r.attrCallback=n,r.attrListener==null&&(r.attrListener=X(r,Re(r),!1,!1,!1,void 0))}function Te(t,e){const r=b(t,"target")[String(e)];r&&r.attrListener&&(I(r,r.attrListener.callback,!1),r.attrCallback=r.attrListener=void 0)}function Re(t){return function(e){const n=t.attrCallback;typeof n=="function"&&n.call(this,e)}}function we(...t){class e extends m{}for(let n=0;n<t.length;++n)Pe(e.prototype,t[n]);return e}function Pe(t,e,n){Object.defineProperty(t,`on${e}`,{get(){return ve(this,e)},set(r){ye(this,e,r)},configurable:!0,enumerable:!0})}export{p as Event,m as EventTarget,m as default,we as defineCustomEventTarget,Pe as defineEventAttribute,ve as getEventAttributeValue,Oe as setErrorHandler,ye as setEventAttributeValue,_e as setWarningHandler};
//# sourceMappingURL=index-086eb4c0.js.map