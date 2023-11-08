import{x as c}from"./lit-element-47511895.js";import{s as u,n as e}from"./safeCustomElement-f1504f3f.js";import{V as g}from"./ValtioElement-af4c0565.js";import"./overlay-trigger-c0d74f1e.js";import"./sp-button-group-34575c08.js";import"./modal.css-00710f10.js";import"./spectrum-icon-cross.css-7c034bb2.js";import"./ButtonBase-6b15501f.js";import"./like-anchor-18458c06.js";import"./if-defined-92735e40.js";import"./focusable-6e37aff0.js";import"./focus-visible-4092edd3.js";import"./iframe-b912c67f.js";import"../sb-preview/runtime.js";import"./observe-slot-text-9cba5849.js";import"./mutation_controller-e745007b.js";import"./query-assigned-nodes-b5cd026e.js";import"./sp-icon-alert-c2c8caf1.js";import"./class-map-6e0cd4e0.js";import"./directive-12249aa5.js";import"./first-focusable-in-7a384f7f.js";import"./platform-ad521189.js";import"./loader-3f25ec13.js";import"./state-8f8de3d4.js";var y=Object.defineProperty,b=Object.getOwnPropertyDescriptor,o=(m,s,n,r)=>{for(var t=r>1?void 0:r?b(s,n):s,a=m.length-1,l;a>=0;a--)(l=m[a])&&(t=(r?l(s,n,t):l(t))||t);return r&&t&&y(s,n,t),t};let i=class extends g{constructor(){super(...arguments),this.label="Open Menu",this.title="Modal Title",this.size="m",this.isOpen=!1,this.variant="primary"}toggleVisibility(){this.isOpen=!this.isOpen}template(){return c`<div></div>
      <button style="position:fixed;
        left:0;
        top:0;
        background: rgba(0,0,0,0.5);
        width:100%;
        height:100%;
        z-index:9998;
        opacity:${this.isOpen?1:0};
        pointer-events:${this.isOpen?"auto":"none"};
        transition: opacity 0.3s ease-in-out;
        "
      @click=${this.toggleVisibility}
        >
        </button>
      <sp-dialog
        size="m"
        style="
          background: white;
          position:fixed;
          left:50%;
          top:50%;
          z-index:9999;
          width: 90vw;
          height: 90vh;
          transform:translate(-50%, -50%);
          opacity:${this.isOpen?1:0};
          pointer-events:${this.isOpen?"auto":"none"};
        transition: opacity 0.3s ease-in-out;

        ">
        <h2 slot="heading">${this.title}</h2>
        <slot>Fallback content</slot>
        <div>

      <sp-button
        @click=${this.toggleVisibility}
        style="position:absolute;top:12px;right:0px;"
        variant="white"
        aria-label="Close dialog"
      >
        &times;
      </button>
      </div>
      </sp-dialog>
      <sp-button
      variant=${this.variant}
      @click=${this.toggleVisibility}
      >
        ${this.label}
      </button>
`}};o([e({type:String})],i.prototype,"label",2);o([e({type:String})],i.prototype,"title",2);o([e({type:String})],i.prototype,"size",2);o([e({type:Boolean})],i.prototype,"isOpen",2);o([e({type:String})],i.prototype,"variant",2);i=o([u("osl-modal")],i);const I={title:"New"},p=()=>c`
  <div style="width:100%;height:100vh;position:relative;">
      <osl-modal>
      <div>asdf222</div>
      </osl-modal>
</div>
  `;var d,h,v;p.parameters={...p.parameters,docs:{...(d=p.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  return html\`
  <div style="width:100%;height:100vh;position:relative;">
      <osl-modal>
      <div>asdf222</div>
      </osl-modal>
</div>
  \`;
}`,...(v=(h=p.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const J=["Modal"];export{p as Modal,J as __namedExportsOrder,I as default};
//# sourceMappingURL=Modal.stories-0990d998.js.map
