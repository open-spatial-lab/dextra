import{F as p}from"./focusable-6e37aff0.js";import{x as d}from"./lit-element-47511895.js";import{n as a}from"./safeCustomElement-f1504f3f.js";import{i as l}from"./ValtioElement-af4c0565.js";var u=Object.defineProperty,m=Object.getOwnPropertyDescriptor,i=(c,t,r,n)=>{for(var e=n>1?void 0:n?m(t,r):t,h=c.length-1,o;h>=0;h--)(o=c[h])&&(e=(n?o(t,r,e):o(e))||e);return n&&e&&u(t,r,e),e};class s extends p{constructor(){super(...arguments),this.checked=!1,this.readonly=!1}get focusElement(){return this.inputElement}handleChange(){if(this.readonly){this.inputElement.checked=this.checked;return}this.checked=this.inputElement.checked;const t=new CustomEvent("change",{bubbles:!0,cancelable:!0,composed:!0});this.dispatchEvent(t)||(this.checked=!this.inputElement.checked,this.inputElement.checked=this.checked)}render(){return d`
            <input
                id="input"
                aria-labelledby="label"
                type="checkbox"
                .checked=${this.checked}
                @change=${this.handleChange}
            />
        `}}i([a({type:Boolean,reflect:!0})],s.prototype,"checked",2),i([a({type:Boolean,reflect:!0})],s.prototype,"readonly",2),i([l("#input")],s.prototype,"inputElement",2);export{s as C};
//# sourceMappingURL=CheckboxBase-27463303.js.map
