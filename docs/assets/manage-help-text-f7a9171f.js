import{c as a}from"./ValtioElement-af4c0565.js";import{x as d}from"./lit-element-47511895.js";import{l as o}from"./if-defined-92735e40.js";const n=class{constructor(t,{mode:e}={mode:"internal"}){this.mode="internal",this.handleSlotchange=({target:i})=>{this.handleHelpText(i),this.handleNegativeHelpText(i)},this.host=t,this.instanceCount=n.instanceCount++,this.id=`sp-help-text-${this.instanceCount}`,this.mode=e}get isInternal(){return this.mode==="internal"}render(t){return d`
            <div id=${o(this.isInternal?this.id:void 0)}>
                <slot
                    name=${t?"negative-help-text":`pass-through-help-text-${this.instanceCount}`}
                    @slotchange=${this.handleSlotchange}
                >
                    <slot name="help-text"></slot>
                </slot>
            </div>
        `}addId(){const t=this.helpTextElement?this.helpTextElement.id:this.id;this.conditionId=a(this.host,"aria-describedby",t),this.host.hasAttribute("tabindex")&&(this.previousTabindex=parseFloat(this.host.getAttribute("tabindex"))),this.host.tabIndex=0}removeId(){this.conditionId&&(this.conditionId(),delete this.conditionId),!this.helpTextElement&&(this.previousTabindex?this.host.tabIndex=this.previousTabindex:this.host.removeAttribute("tabindex"))}handleHelpText(t){if(this.isInternal)return;this.helpTextElement&&this.helpTextElement.id===this.id&&this.helpTextElement.removeAttribute("id"),this.removeId();const e=t.assignedElements()[0];this.helpTextElement=e,e&&(e.id||(e.id=this.id),this.addId())}handleNegativeHelpText(t){t.name==="negative-help-text"&&t.assignedElements().forEach(e=>e.variant="negative")}};let s=n;s.instanceCount=0;function m(t,{mode:e}={mode:"internal"}){class i extends t{constructor(){super(...arguments),this.helpTextManager=new s(this,{mode:e})}get helpTextId(){return this.helpTextManager.id}renderHelpText(h){return this.helpTextManager.render(h)}}return i}export{m as M};
//# sourceMappingURL=manage-help-text-f7a9171f.js.map
