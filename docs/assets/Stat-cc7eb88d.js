import{i as c,x as m}from"./lit-element-47511895.js";import{s as u,n as p}from"./safeCustomElement-f1504f3f.js";import{O as h}from"./Data-0e2d5449.js";import"./sp-help-text-e5f96728.js";import{g as f}from"./numberFormatter-30f4b9e1.js";var g=Object.defineProperty,d=Object.getOwnPropertyDescriptor,a=(e,t,s,i)=>{for(var r=i>1?void 0:i?d(t,s):t,l=e.length-1,n;l>=0;l--)(n=e[l])&&(r=(i?n(t,s,r):n(r))||r);return i&&r&&g(t,s,r),r};let o=class extends h{constructor(){super(...arguments),this.statSize="3rem"}getStat(){var s;if(console.log("getStat",this.currentResults,this.property),Array.isArray(this.currentResults)&&!((s=this.currentResults)!=null&&s.length)||!this.property)return;const t=(Array.isArray(this.currentResults)?this.currentResults[0]:this.currentResults)[this.property];return this.formatter?this.formatter.format(t):t}static get styles(){return c`
      :host {
        flex-grow:1;
      }
      .card {
        padding: var(--spectrum-global-dimension-size-200)
          var(--spectrum-global-dimension-size-300);
        border: 1px solid var(--spectrum-global-color-gray-200);
        flex-grow:1;
      }
      .card sp-help-text {
        padding: 0;
        margin: 0;
        font-weight: normal;
        font-size: 1rem;
      }
      .stat {
        margin: 0;
        padding: 0;
        font-size: 3rem;
        font-weight: bold;
      }
    `}connectedCallback(){super.connectedCallback(),this.format&&(this.formatter=f(this.format))}template(){const e=this.getStat();return e===void 0?m``:m`
      <div class="card">
        <sp-help-text>${this.title}</sp-help-text>
        <p class="stat" style="font-size: ${this.statSize}">${e}</p>
        <sp-help-text>${this.subtitle}</sp-help-text>
      </div>
    `}};a([p({type:String})],o.prototype,"property",2);a([p({type:String})],o.prototype,"subtitle",2);a([p({type:String})],o.prototype,"format",2);a([p({type:String})],o.prototype,"statSize",2);o=a([u("osl-stat")],o);
//# sourceMappingURL=Stat-cc7eb88d.js.map
