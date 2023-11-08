import{x as n}from"./lit-element-47511895.js";import{O as h}from"./Interface-70c6c183.js";import{s as f,n as d}from"./safeCustomElement-f1504f3f.js";import{i as g}from"./converters-40be0569.js";import"./sp-button-group-34575c08.js";import"./ValtioElement-af4c0565.js";import"./ButtonBase-6b15501f.js";import"./like-anchor-18458c06.js";import"./if-defined-92735e40.js";import"./focusable-6e37aff0.js";import"./focus-visible-4092edd3.js";import"./iframe-b912c67f.js";import"../sb-preview/runtime.js";import"./observe-slot-text-9cba5849.js";import"./mutation_controller-e745007b.js";import"./query-assigned-nodes-b5cd026e.js";var b=Object.defineProperty,O=Object.getOwnPropertyDescriptor,m=(t,o,a,e)=>{for(var r=e>1?void 0:e?O(o,a):o,u=t.length-1,i;u>=0;u--)(i=t[u])&&(r=(e?i(o,a,r):i(r))||r);return e&&r&&b(o,a,r),r};let p=class extends h{constructor(){super(...arguments),this.items=[],this.variant="secondary"}eventValueAccessor(t){return t}renderItems(){return n` ${this.items.map(t=>n` <sp-button
        variant=${this.variant}
        @click=${()=>{this.handleChange(t)}}
        ?selected=${this.value===t}
      >
        ${t}
      </sp-button>`)}`}template(){return n` <sp-button-group> ${this.renderItems()} </sp-button-group> `}};m([d({converter:g})],p.prototype,"items",2);m([d({type:String})],p.prototype,"variant",2);p=m([f("osl-button-group")],p);const J={title:"Interface"},s=()=>n`
    <osl-button-group
      data="http://localhost:6006/data/temperature.json"
      items="[1,2,3,4]"
      option="value"
      variant="secondary"
    >
    </osl-button-group>
  `;var l,c,v;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  return html\`
    <osl-button-group
      data="http://localhost:6006/data/temperature.json"
      items="[1,2,3,4]"
      option="value"
      variant="secondary"
    >
    </osl-button-group>
  \`;
}`,...(v=(c=s.parameters)==null?void 0:c.docs)==null?void 0:v.source}}};const V=["ButtonGroup"];export{s as ButtonGroup,V as __namedExportsOrder,J as default};
//# sourceMappingURL=ButtonGroup.stories-5830edb3.js.map
