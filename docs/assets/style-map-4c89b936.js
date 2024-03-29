import{T as l}from"./lit-element-47511895.js";import{e as h,i as d,t as u}from"./directive-12249aa5.js";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o="important",c=" !"+o,m=h(class extends d{constructor(n){var t;if(super(n),n.type!==u.ATTRIBUTE||n.name!=="style"||((t=n.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(n){return Object.keys(n).reduce((t,s)=>{const e=n[s];return e==null?t:t+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${e};`},"")}update(n,[t]){const{style:s}=n.element;if(this.ht===void 0){this.ht=new Set;for(const e in t)this.ht.add(e);return this.render(t)}this.ht.forEach(e=>{t[e]==null&&(this.ht.delete(e),e.includes("-")?s.removeProperty(e):s[e]="")});for(const e in t){const r=t[e];if(r!=null){this.ht.add(e);const i=typeof r=="string"&&r.endsWith(c);e.includes("-")||i?s.setProperty(e,i?r.slice(0,-11):r,i?o:""):s[e]=r}}return l}});export{m as o};
//# sourceMappingURL=style-map-4c89b936.js.map
