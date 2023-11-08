import{s as m,i as x,x as f}from"./lit-element-47511895.js";import{s as w,n}from"./safeCustomElement-f1504f3f.js";var d=Object.defineProperty,c=Object.getOwnPropertyDescriptor,a=(l,r,i,t)=>{for(var e=t>1?void 0:t?c(r,i):r,p=l.length-1,s;p>=0;p--)(s=l[p])&&(e=(t?s(r,i,e):s(e))||e);return t&&e&&d(r,i,e),e};let o=class extends m{constructor(){super(...arguments),this.breakpoint="sm",this.gap="0.5rem"}static get styles(){return x`
      ::slotted(*) {
        flex-grow: 1;
      }

      :host {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        gap: 0.5rem;
      }

      @media (min-width: 576px) {
        :host([breakpoint="sm"]) {
          flex-direction: row;
          flex-wrap: wrap;
        }
      }

      @media (min-width: 768px) {
        :host([breakpoint="md"]) {
          flex-direction: row;
          flex-wrap: wrap;
        }
      }

      @media (min-width: 992px) {
        :host([breakpoint="lg"]) {
          flex-direction: row;
          flex-wrap: wrap;
        }
      }

      @media (min-width: 1200px) {
        :host([breakpoint="xl"]) {
          flex-direction: row;
          flex-wrap: wrap;
        }
      }
    `}render(){return f`<slot></slot>`}};a([n({type:String})],o.prototype,"breakpoint",2);a([n({type:String})],o.prototype,"gap",2);o=a([w("osl-flex-box")],o);
//# sourceMappingURL=FlexBox-d0c8f9ac.js.map
