import{x}from"./lit-element-47511895.js";import{s as he,n as ee}from"./safeCustomElement-f1504f3f.js";import{O as ue}from"./Interface-70c6c183.js";import"./sp-checkbox-9ce0a2b0.js";import"./ValtioElement-af4c0565.js";import"./converters-40be0569.js";import"./CheckboxBase-27463303.js";import"./focusable-6e37aff0.js";import"./focus-visible-4092edd3.js";import"./iframe-b912c67f.js";import"../sb-preview/runtime.js";import"./spectrum-icon-checkmark.css-89242d34.js";var fe=Object.defineProperty,me=Object.getOwnPropertyDescriptor,q=(n,e,t,s)=>{for(var r=s>1?void 0:s?me(e,t):e,i=n.length-1,o;i>=0;i--)(o=n[i])&&(r=(s?o(e,t,r):o(r))||r);return s&&r&&fe(e,t,r),r};let v=class extends ue{constructor(){super(...arguments),this.size="s",this.initialValue=[]}renderSingleBox(n){const e=this.options||[],t=this.value,s=e[n];return t.includes(s)?x`
        <sp-checkbox
          size="${this.size}"
          value="${s}"
          checked
          @change=${()=>this.handleChange(s)}
          >${s}</sp-checkbox
        >
      `:x`
        <sp-checkbox
          size="${this.size}"
          value="${s}"
          @change=${()=>this.handleChange(s)}
          >${s}</sp-checkbox
        >
      `}renderCheckboxes(){const n=this.options||[];return x` ${n.map((e,t)=>this.renderSingleBox(t))} `}eventValueAccessor(n){return n}handleChange(n){const e=this.value,t=e.includes(n)?e.filter(s=>s!==n):[...e,n];this.store.datasets[this.data].parameters[this.option]=t}template(){return x`
      <div style="display:flex; flex-direction: column;">
        ${this.renderCheckboxes()}
      </div>
    `}};q([ee({type:String})],v.prototype,"size",2);q([ee({type:Array})],v.prototype,"initialValue",2);v=q([he("osl-checkbox")],v);/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const D=typeof window<"u"&&window.customElements!=null&&window.customElements.polyfillWrapFlushCallback!==void 0,L=(n,e,t=null)=>{for(;e!==t;){const s=e.nextSibling;n.removeChild(e),e=s}};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const m=`{{lit-${String(Math.random()).slice(2)}}}`,te=`<!--${m}-->`,H=new RegExp(`${m}|${te}`),P="$lit$";class se{constructor(e,t){this.parts=[],this.element=t;const s=[],r=[],i=document.createTreeWalker(t.content,133,null,!1);let o=0,a=-1,c=0;const{strings:d,values:{length:p}}=e;for(;c<p;){const l=i.nextNode();if(l===null){i.currentNode=r.pop();continue}if(a++,l.nodeType===1){if(l.hasAttributes()){const h=l.attributes,{length:N}=h;let _=0;for(let u=0;u<N;u++)W(h[u].name,P)&&_++;for(;_-- >0;){const u=d[c],g=M.exec(u)[2],w=g.toLowerCase()+P,S=l.getAttribute(w);l.removeAttribute(w);const f=S.split(H);this.parts.push({type:"attribute",index:a,name:g,strings:f}),c+=f.length-1}}l.tagName==="TEMPLATE"&&(r.push(l),i.currentNode=l.content)}else if(l.nodeType===3){const h=l.data;if(h.indexOf(m)>=0){const N=l.parentNode,_=h.split(H),u=_.length-1;for(let g=0;g<u;g++){let w,S=_[g];if(S==="")w=y();else{const f=M.exec(S);f!==null&&W(f[2],P)&&(S=S.slice(0,f.index)+f[1]+f[2].slice(0,-P.length)+f[3]),w=document.createTextNode(S)}N.insertBefore(w,l),this.parts.push({type:"node",index:++a})}_[u]===""?(N.insertBefore(y(),l),s.push(l)):l.data=_[u],c+=u}}else if(l.nodeType===8)if(l.data===m){const h=l.parentNode;(l.previousSibling===null||a===o)&&(a++,h.insertBefore(y(),l)),o=a,this.parts.push({type:"node",index:a}),l.nextSibling===null?l.data="":(s.push(l),a--),c++}else{let h=-1;for(;(h=l.data.indexOf(m,h+1))!==-1;)this.parts.push({type:"node",index:-1}),c++}}for(const l of s)l.parentNode.removeChild(l)}}const W=(n,e)=>{const t=n.length-e.length;return t>=0&&n.slice(t)===e},ne=n=>n.index!==-1,y=()=>document.createComment(""),M=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const z=133;function re(n,e){const{element:{content:t},parts:s}=n,r=document.createTreeWalker(t,z,null,!1);let i=C(s),o=s[i],a=-1,c=0;const d=[];let p=null;for(;r.nextNode();){a++;const l=r.currentNode;for(l.previousSibling===p&&(p=null),e.has(l)&&(d.push(l),p===null&&(p=l)),p!==null&&c++;o!==void 0&&o.index===a;)o.index=p!==null?-1:o.index-c,i=C(s,i),o=s[i]}d.forEach(l=>l.parentNode.removeChild(l))}const ye=n=>{let e=n.nodeType===11?0:1;const t=document.createTreeWalker(n,z,null,!1);for(;t.nextNode();)e++;return e},C=(n,e=-1)=>{for(let t=e+1;t<n.length;t++){const s=n[t];if(ne(s))return t}return-1};function _e(n,e,t=null){const{element:{content:s},parts:r}=n;if(t==null){s.appendChild(e);return}const i=document.createTreeWalker(s,z,null,!1);let o=C(r),a=0,c=-1;for(;i.nextNode();)for(c++,i.currentNode===t&&(a=ye(e),t.parentNode.insertBefore(e,t));o!==-1&&r[o].index===c;){if(a>0){for(;o!==-1;)r[o].index+=a,o=C(r,o);return}o=C(r,o)}}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Se=new WeakMap,ge=n=>typeof n=="function"&&Se.has(n);/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const J={},K={};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class V{constructor(e,t,s){this.__parts=[],this.template=e,this.processor=t,this.options=s}update(e){let t=0;for(const s of this.__parts)s!==void 0&&s.setValue(e[t]),t++;for(const s of this.__parts)s!==void 0&&s.commit()}_clone(){const e=D?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],s=this.template.parts,r=document.createTreeWalker(e,133,null,!1);let i=0,o=0,a,c=r.nextNode();for(;i<s.length;){if(a=s[i],!ne(a)){this.__parts.push(void 0),i++;continue}for(;o<a.index;)o++,c.nodeName==="TEMPLATE"&&(t.push(c),r.currentNode=c.content),(c=r.nextNode())===null&&(r.currentNode=t.pop(),c=r.nextNode());if(a.type==="node"){const d=this.processor.handleTextExpression(this.options);d.insertAfterNode(c.previousSibling),this.__parts.push(d)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,a.name,a.strings,this.options));i++}return D&&(document.adoptNode(e),customElements.upgrade(e)),e}}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const G=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:n=>n}),we=` ${m} `;class be{constructor(e,t,s,r){this.strings=e,this.values=t,this.type=s,this.processor=r}getHTML(){const e=this.strings.length-1;let t="",s=!1;for(let r=0;r<e;r++){const i=this.strings[r],o=i.lastIndexOf("<!--");s=(o>-1||s)&&i.indexOf("-->",o+1)===-1;const a=M.exec(i);a===null?t+=i+(s?we:te):t+=i.substr(0,a.index)+a[1]+a[2]+P+a[3]+m}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return G!==void 0&&(t=G.createHTML(t)),e.innerHTML=t,e}}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const xe=n=>n===null||!(typeof n=="object"||typeof n=="function"),Pe=n=>Array.isArray(n)||!!(n&&n[Symbol.iterator]);class B{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(y()),this.endNode=e.appendChild(y())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=y()),e.__insert(this.endNode=y())}insertAfterPart(e){e.__insert(this.startNode=y()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(this.startNode.parentNode===null)return;for(;ge(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=J,t(this)}const e=this.__pendingValue;e!==J&&(xe(e)?e!==this.value&&this.__commitText(e):e instanceof be?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):Pe(e)?this.__commitIterable(e):e===K?(this.value=K,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling;e=e??"";const s=typeof e=="string"?e:String(e);t===this.endNode.previousSibling&&t.nodeType===3?t.data=s:this.__commitNode(document.createTextNode(s)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof V&&this.value.template===t)this.value.update(e.values);else{const s=new V(t,e.processor,this.options),r=s._clone();s.update(e.values),this.__commitNode(r),this.value=s}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let s=0,r;for(const i of e)r=t[s],r===void 0&&(r=new B(this.options),t.push(r),s===0?r.appendIntoPart(this):r.insertAfterPart(t[s-1])),r.setValue(i),r.commit(),s++;s<t.length&&(t.length=s,this.clear(r&&r.endNode))}clear(e=this.startNode){L(this.startNode.parentNode,e.nextSibling,this.endNode)}}let Ce=!1;(()=>{try{const n={get capture(){return Ce=!0,!1}};window.addEventListener("test",n,n),window.removeEventListener("test",n,n)}catch{}})();/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function Te(n){let e=T.get(n.type);e===void 0&&(e={stringsArray:new WeakMap,keyString:new Map},T.set(n.type,e));let t=e.stringsArray.get(n.strings);if(t!==void 0)return t;const s=n.strings.join(m);return t=e.keyString.get(s),t===void 0&&(t=new se(n,n.getTemplateElement()),e.keyString.set(s,t)),e.stringsArray.set(n.strings,t),t}const T=new Map;/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const b=new WeakMap,Ne=(n,e,t)=>{let s=b.get(e);s===void 0&&(L(e,e.firstChild),b.set(e,s=new B(Object.assign({templateFactory:Te},t))),s.appendInto(e)),s.setValue(n),s.commit()};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */typeof window<"u"&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const ie=(n,e)=>`${n}--${e}`;let E=!0;typeof window.ShadyCSS>"u"?E=!1:typeof window.ShadyCSS.prepareTemplateDom>"u"&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),E=!1);const Ae=n=>e=>{const t=ie(e.type,n);let s=T.get(t);s===void 0&&(s={stringsArray:new WeakMap,keyString:new Map},T.set(t,s));let r=s.stringsArray.get(e.strings);if(r!==void 0)return r;const i=e.strings.join(m);if(r=s.keyString.get(i),r===void 0){const o=e.getTemplateElement();E&&window.ShadyCSS.prepareTemplateDom(o,n),r=new se(e,o),s.keyString.set(i,r)}return s.stringsArray.set(e.strings,r),r},ve=["html","svg"],Ee=n=>{ve.forEach(e=>{const t=T.get(ie(e,n));t!==void 0&&t.keyString.forEach(s=>{const{element:{content:r}}=s,i=new Set;Array.from(r.querySelectorAll("style")).forEach(o=>{i.add(o)}),re(s,i)})})},oe=new Set,ke=(n,e,t)=>{oe.add(n);const s=t?t.element:document.createElement("template"),r=e.querySelectorAll("style"),{length:i}=r;if(i===0){window.ShadyCSS.prepareTemplateStyles(s,n);return}const o=document.createElement("style");for(let d=0;d<i;d++){const p=r[d];p.parentNode.removeChild(p),o.textContent+=p.textContent}Ee(n);const a=s.content;t?_e(t,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(s,n);const c=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&c!==null)e.insertBefore(c.cloneNode(!0),e.firstChild);else if(t){a.insertBefore(o,a.firstChild);const d=new Set;d.add(o),re(t,d)}},Re=(n,e,t)=>{if(!t||typeof t!="object"||!t.scopeName)throw new Error("The `scopeName` option is required.");const s=t.scopeName,r=b.has(e),i=E&&e.nodeType===11&&!!e.host,o=i&&!oe.has(s),a=o?document.createDocumentFragment():e;if(Ne(n,a,Object.assign({templateFactory:Ae(s)},t)),o){const c=b.get(a);b.delete(a);const d=c.value instanceof V?c.value.template:void 0;ke(s,a,d),L(e,e.firstChild),e.appendChild(a),b.set(e,c)}!r&&i&&window.ShadyCSS.styleElement(e.host)};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */var ae;window.JSCompiler_renameProperty=(n,e)=>n;const j={toAttribute(n,e){switch(e){case Boolean:return n?"":null;case Object:case Array:return n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){switch(e){case Boolean:return n!==null;case Number:return n===null?null:Number(n);case Object:case Array:return JSON.parse(n)}return n}},le=(n,e)=>e!==n&&(e===e||n===n),k={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:le},R=1,O=1<<2,U=1<<3,I=1<<4,$="finalized";class ce extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,s)=>{const r=this._attributeNameForProperty(s,t);r!==void 0&&(this._attributeToPropertyMap.set(r,s),e.push(r))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;e!==void 0&&e.forEach((t,s)=>this._classProperties.set(s,t))}}static createProperty(e,t=k){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const s=typeof e=="symbol"?Symbol():`__${e}`,r=this.getPropertyDescriptor(e,s,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}static getPropertyDescriptor(e,t,s){return{get(){return this[t]},set(r){const i=this[e];this[t]=r,this.requestUpdateInternal(e,i,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||k}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty($)||e.finalize(),this[$]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,s=[...Object.getOwnPropertyNames(t),...typeof Object.getOwnPropertySymbols=="function"?Object.getOwnPropertySymbols(t):[]];for(const r of s)this.createProperty(r,t[r])}}static _attributeNameForProperty(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}static _valueHasChanged(e,t,s=le){return s(e,t)}static _propertyValueFromAttribute(e,t){const s=t.type,r=t.converter||j,i=typeof r=="function"?r:r.fromAttribute;return i?i(e,s):e}static _propertyValueToAttribute(e,t){if(t.reflect===void 0)return;const s=t.type,r=t.converter;return(r&&r.toAttribute||j.toAttribute)(e,s)}initialize(){this._updateState=0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const s=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,s)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){this._enableUpdatingResolver!==void 0&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,s){t!==s&&this._attributeToProperty(e,s)}_propertyToAttribute(e,t,s=k){const r=this.constructor,i=r._attributeNameForProperty(e,s);if(i!==void 0){const o=r._propertyValueToAttribute(t,s);if(o===void 0)return;this._updateState=this._updateState|U,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._updateState=this._updateState&~U}}_attributeToProperty(e,t){if(this._updateState&U)return;const s=this.constructor,r=s._attributeToPropertyMap.get(e);if(r!==void 0){const i=s.getPropertyOptions(r);this._updateState=this._updateState|I,this[r]=s._propertyValueFromAttribute(t,i),this._updateState=this._updateState&~I}}requestUpdateInternal(e,t,s){let r=!0;if(e!==void 0){const i=this.constructor;s=s||i.getPropertyOptions(e),i._valueHasChanged(this[e],t,s.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),s.reflect===!0&&!(this._updateState&I)&&(this._reflectingProperties===void 0&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,s))):r=!1}!this._hasRequestedUpdate&&r&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=this._updateState|O;try{await this._updatePromise}catch{}const e=this.performUpdate();return e!=null&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return this._updateState&O}get hasUpdated(){return this._updateState&R}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(s){throw e=!1,this._markUpdated(),s}e&&(this._updateState&R||(this._updateState=this._updateState|R,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~O}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){this._reflectingProperties!==void 0&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,s)=>this._propertyToAttribute(s,this[s],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}ae=$;ce[ae]=!0;/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const F=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,de=Symbol();class Oe{constructor(e,t){if(t!==de)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return this._styleSheet===void 0&&(F?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const Ue=n=>new Oe(String(n),de);/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const Y={};class pe extends ce{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(i,o)=>i.reduceRight((a,c)=>Array.isArray(c)?t(c,a):(a.add(c),a),o),s=t(e,new Set),r=[];s.forEach(i=>r.unshift(i)),this._styles=r}else this._styles=e===void 0?[]:[e];this._styles=this._styles.map(t=>{if(t instanceof CSSStyleSheet&&!F){const s=Array.prototype.slice.call(t.cssRules).reduce((r,i)=>r+i.cssText,"");return Ue(s)}return t})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;e.length!==0&&(window.ShadyCSS!==void 0&&!window.ShadyCSS.nativeShadow?window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(t=>t.cssText),this.localName):F?this.renderRoot.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):this._needsShimAdoptedStyleSheets=!0)}connectedCallback(){super.connectedCallback(),this.hasUpdated&&window.ShadyCSS!==void 0&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==Y&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(s=>{const r=document.createElement("style");r.textContent=s.cssText,this.renderRoot.appendChild(r)}))}render(){return Y}}pe.finalized=!0;pe.render=Re;const We={title:"Interface"},A=()=>x`

The value is: 
  <osl-interface
    data="http://localhost:6006/data/interaction.json"
    option="mag"
    ></osl-interface>
    <br/>
    <hr/>
    <br/>
    <osl-checkbox
      options="[1,2,3]"
      initialValue="[]"
      option="mag"
      data="http://localhost:6006/data/interaction.json"

    >


    </osl-checkbox>
    `;var Q,X,Z;A.parameters={...A.parameters,docs:{...(Q=A.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  return html\`

The value is: 
  <osl-interface
    data="http://localhost:6006/data/interaction.json"
    option="mag"
    ></osl-interface>
    <br/>
    <hr/>
    <br/>
    <osl-checkbox
      options="[1,2,3]"
      initialValue="[]"
      option="mag"
      data="http://localhost:6006/data/interaction.json"

    >


    </osl-checkbox>
    \`;
}`,...(Z=(X=A.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};const Je=["Checkbox"];export{A as Checkbox,Je as __namedExportsOrder,We as default};
//# sourceMappingURL=Checkbox.stories-16193952.js.map
