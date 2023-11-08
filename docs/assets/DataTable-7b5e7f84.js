import{x as m}from"./lit-element-47511895.js";import{s as u,n as o}from"./safeCustomElement-f1504f3f.js";import{O as c}from"./Data-0e2d5449.js";import{i as f}from"./converters-40be0569.js";import"./Table-4e14750b.js";var g=Object.defineProperty,h=Object.getOwnPropertyDescriptor,r=(l,s,i,a)=>{for(var t=a>1?void 0:a?h(s,i):s,p=l.length-1,n;p>=0;p--)(n=l[p])&&(t=(a?n(s,i,t):n(t))||t);return a&&t&&g(s,i,t),t};let e=class extends c{constructor(){super(...arguments),this.maxw="100%",this.pagination=!1,this.pageSize=10}template(){return m`
      <osl-table
        .title=${this.title}
        .maxw=${this.maxw}
        .data=${this.currentResults}
        .columns=${this.columns}
        .pagination=${this.pagination}
        .pageSize=${this.pageSize}
      ></osl-table>
    `}};r([o({converter:f})],e.prototype,"columns",2);r([o({type:String})],e.prototype,"maxw",2);r([o({type:Boolean})],e.prototype,"pagination",2);r([o({type:Number})],e.prototype,"pageSize",2);e=r([u("osl-data-table")],e);
//# sourceMappingURL=DataTable-7b5e7f84.js.map
