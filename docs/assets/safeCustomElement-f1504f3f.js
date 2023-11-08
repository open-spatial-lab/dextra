/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const u=n=>e=>typeof e=="function"?((t,i)=>(customElements.define(t,i),i))(n,e):((t,i)=>{const{kind:r,elements:o}=i;return{kind:r,elements:o,finisher(s){customElements.define(t,s)}}})(n,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const a=(n,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,n)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,n)}},f=(n,e,t)=>{e.constructor.createProperty(t,n)};function p(n){return(e,t)=>t!==void 0?f(n,e,t):a(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const y=({finisher:n,descriptor:e})=>(t,i)=>{var r;if(i===void 0){const o=(r=t.originalKey)!==null&&r!==void 0?r:t.key,s=e!=null?{kind:"method",placement:"prototype",key:o,descriptor:e(t.key)}:{...t,key:o};return n!=null&&(s.finisher=function(l){n(l,o)}),s}{const o=t.constructor;e!==void 0&&Object.defineProperty(t,i,e(i)),n==null||n(o,i)}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var c;const m=((c=window.HTMLSlotElement)===null||c===void 0?void 0:c.prototype.assignedElements)!=null?(n,e)=>n.assignedElements(e):(n,e)=>n.assignedNodes(e).filter(t=>t.nodeType===Node.ELEMENT_NODE);function h(n){const{slot:e,selector:t}=n??{};return y({descriptor:i=>({get(){var r;const o="slot"+(e?`[name=${e}]`:":not([name])"),s=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(o),l=s!=null?m(s,n):[];return t?l.filter(d=>d.matches(t)):l},enumerable:!0,configurable:!0})})}const k=n=>customElements!=null&&customElements.get(n)?(console.warn(`The custom element ${n} has already been defined elsewhere. This definition will be ignored.`),e=>{}):u(n);export{h as l,p as n,y as o,k as s};
//# sourceMappingURL=safeCustomElement-f1504f3f.js.map
