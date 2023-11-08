import{x as m}from"./lit-element-47511895.js";import{s as c,n}from"./safeCustomElement-f1504f3f.js";import{O as h}from"./Interface-70c6c183.js";var u=Object.defineProperty,f=Object.getOwnPropertyDescriptor,o=(e,a,r,p)=>{for(var t=p>1?void 0:p?f(a,r):a,i=e.length-1,l;i>=0;i--)(l=e[i])&&(t=(p?l(a,r,t):l(t))||t);return p&&t&&u(a,r,t),t};let s=class extends h{constructor(){super(...arguments),this.parameters=[],this.parameterTitle="Parameter",this.pagination=!1}connectedCallback(){super.connectedCallback(),this.subscribe(e=>e.datasets[this.data].parameters,()=>this.requestUpdate())}template(){const e=this.store.datasets[this.data].parameters,a=this.parameters.map(r=>({[this.parameterTitle]:r,Value:e[r]}));return m`
      <osl-table
          .title=${this.title}
          .maxw=${"auto"}
          .data=${a}
          .columns=${[this.parameterTitle,"Value"]}
          .pagination=${this.pagination}
        ></osl-table>
    `}};o([n({type:Array})],s.prototype,"parameters",2);o([n({type:String})],s.prototype,"parameterTitle",2);o([n({type:Boolean})],s.prototype,"pagination",2);s=o([c("osl-param-view")],s);
//# sourceMappingURL=ParamView-a63609a6.js.map
