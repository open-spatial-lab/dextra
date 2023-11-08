import{I as s}from"./ValtioElement-af4c0565.js";import{x as n}from"./lit-element-47511895.js";let l;const o=function(t,...e){return l?l(t,...e):e.reduce((a,r,i)=>a+r+t[i+1],t[0])},h=t=>{l=t},d=({width:t=24,height:e=24,hidden:a=!1,title:r="Alert"}={})=>o`<svg
    xmlns="http://www.w3.org/2000/svg"
    height=${e}
    viewBox="0 0 36 36"
    width=${t}
    aria-hidden=${a?"true":"false"}
    role="img"
    fill="currentColor"
    aria-label=${r}
  >
    <path
      d="M17.127 2.579.4 32.512A1 1 0 0 0 1.272 34h33.456a1 1 0 0 0 .872-1.488L18.873 2.579a1 1 0 0 0-1.746 0ZM20 29.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5Zm0-6a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-12a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5Z"
    />
  </svg>`;class c extends s{render(){return h(n),d({hidden:!this.label,title:this.label})}}customElements.define("sp-icon-alert",c);export{h as s,o as t};
//# sourceMappingURL=sp-icon-alert-c2c8caf1.js.map
