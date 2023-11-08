import{i as h,x as c,D as te}from"./lit-element-47511895.js";import{l as re,n as o,s as se}from"./safeCustomElement-f1504f3f.js";import{S as g,i as ie,a as ae,t as le,I as oe,s as ce,V as ne}from"./ValtioElement-af4c0565.js";import"./sp-checkbox-9ce0a2b0.js";import{l as de}from"./if-defined-92735e40.js";import{t as ue}from"./mutation_controller-e745007b.js";import{e as he,t as pe}from"./directive-12249aa5.js";import{c as me,a as be}from"./async-directive-591bdbc7.js";import{_ as D}from"./iframe-b912c67f.js";import{i as M}from"./converters-40be0569.js";import"./FlexBox-d0c8f9ac.js";const ge=h`
:host([dir=ltr][drop-target]):before{left:0}:host([dir=rtl][drop-target]):before{right:0}:host([dir=ltr][drop-target]):before{right:0}:host([dir=rtl][drop-target]):before{left:0}:host([drop-target]):before{bottom:0;content:"";position:absolute;top:0;z-index:1}:host{cursor:pointer;position:relative;transition:background-color var(--spectrum-global-animation-duration-100,.13s) ease-in-out}:host(:focus){outline:0}:host{background-color:var(
--spectrum-table-m-regular-row-background-color,var(--spectrum-alias-background-color-transparent)
);border-bottom:1px solid var(
--spectrum-table-m-regular-border-color,var(--spectrum-alias-border-color-mid)
)}:host(:hover){background-color:var(
--spectrum-table-m-regular-row-background-color-hover,var(--spectrum-alias-highlight-hover)
)}:host(.focus-visible),:host([focused]){background-color:var(
--spectrum-table-m-regular-row-background-color-hover,var(--spectrum-alias-highlight-hover)
)}:host(.focus-visible),:host([focused]){background-color:var(
--spectrum-table-m-regular-row-background-color-hover,var(--spectrum-alias-highlight-hover)
)}:host(:focus-visible),:host([focused]){background-color:var(
--spectrum-table-m-regular-row-background-color-hover,var(--spectrum-alias-highlight-hover)
)}:host:active{background-color:var(
--spectrum-table-m-regular-row-background-color-down,var(--spectrum-alias-highlight-down)
)}:host([selected]){background-color:var(
--spectrum-table-m-regular-row-background-color-selected,var(--spectrum-alias-highlight-selected)
)}:host([selected]:hover){background-color:var(
--spectrum-table-m-regular-row-background-color-selected-hover,var(--spectrum-alias-highlight-selected-hover)
)}:host([selected].focus-visible),:host([selected][focused]){background-color:var(
--spectrum-table-m-regular-row-background-color-selected-key-focus,var(--spectrum-alias-highlight-selected-hover)
)}:host([selected].focus-visible),:host([selected][focused]){background-color:var(
--spectrum-table-m-regular-row-background-color-selected-key-focus,var(--spectrum-alias-highlight-selected-hover)
)}:host([selected]:focus-visible),:host([selected][focused]){background-color:var(
--spectrum-table-m-regular-row-background-color-selected-key-focus,var(--spectrum-alias-highlight-selected-hover)
)}:host([drop-target]):before{background-color:var(--spectrum-alias-highlight-selected);box-shadow:inset 0 0 0 2px var(
--spectrum-alias-border-color-key-focus,var(--spectrum-global-color-blue-400)
)}:host{display:flex;width:100%}:host(:last-of-type){border-bottom:none}
`,ve=ge;var fe=Object.defineProperty,_e=Object.getOwnPropertyDescriptor,z=(i,e,t,r)=>{for(var s=r>1?void 0:r?_e(e,t):e,a=i.length-1,l;a>=0;a--)(l=i[a])&&(s=(r?l(e,t,s):l(s))||s);return r&&s&&fe(e,t,s),s};class y extends g{constructor(){super(...arguments),this.role="row",this.selectable=!1,this.selected=!1,this.value=""}static get styles(){return[ve]}async handleChange(e){e.target.checkbox&&(this.selected=e.target.checkbox.checked,await 0,e.defaultPrevented&&(this.selected=!this.selected))}handleSlotchange({target:e}){const t=e.assignedElements();this.selectable=!!t.find(r=>r.localName==="sp-table-checkbox-cell")}async manageSelected(){await this.updateComplete;const[e]=this.checkboxCells;e&&(e.checked=this.selected)}handleClick(e){if(e.composedPath().find(r=>r.localName==="sp-table-checkbox-cell"))return;const[t]=this.checkboxCells;t&&t.click()}render(){return c`
            <slot
                @change=${this.handleChange}
                @slotchange=${this.handleSlotchange}
            ></slot>
        `}willUpdate(e){e.has("selected")&&this.manageSelected(),e.has("selectable")&&(this.selectable?this.addEventListener("click",this.handleClick):this.removeEventListener("click",this.handleClick))}}z([re({selector:"sp-table-checkbox-cell",flatten:!0})],y.prototype,"checkboxCells",2),z([o({reflect:!0})],y.prototype,"role",2),z([o({type:Boolean})],y.prototype,"selectable",2),z([o({type:Boolean,reflect:!0})],y.prototype,"selected",2),z([o({type:String})],y.prototype,"value",2);customElements.define("sp-table-row",y);const we=h`
:host([align=center]){text-align:center}:host([dir=ltr][align=end]){text-align:right}:host([dir=rtl][align=end]){text-align:left}:host([dir=ltr]){padding-left:var(--spectrum-table-regular-cell-padding-left);padding-right:var(--spectrum-table-regular-cell-padding-right)}:host([dir=rtl]){padding-left:var(--spectrum-table-regular-cell-padding-right);padding-right:var(--spectrum-table-regular-cell-padding-left)}:host{box-sizing:border-box;font-size:var(--spectrum-table-regular-cell-text-size);font-weight:var(--spectrum-table-regular-cell-text-font-weight);line-height:var(--spectrum-table-regular-cell-text-line-height);min-height:calc(var(--spectrum-table-regular-cell-min-height) - var(--spectrum-table-regular-cell-padding-top) - var(--spectrum-table-regular-cell-padding-bottom));padding-bottom:var(--spectrum-table-regular-cell-padding-bottom);padding-top:var(--spectrum-table-regular-cell-padding-top)}:host{position:relative}:host(.focus-visible),:host([focused]){outline:none}:host(.focus-visible),:host([focused]){outline:none}:host(:focus-visible),:host([focused]){outline:none}:host([dir=ltr].focus-visible):before,:host([dir=ltr][focused]):before{right:0}:host([dir=ltr].focus-visible):before,:host([dir=ltr][focused]):before{right:0}:host([dir=ltr]:focus-visible):before,:host([dir=ltr][focused]):before{right:0}:host([dir=rtl].focus-visible):before,:host([dir=rtl][focused]):before{left:0}:host([dir=rtl].focus-visible):before,:host([dir=rtl][focused]):before{left:0}:host([dir=rtl]:focus-visible):before,:host([dir=rtl][focused]):before{left:0}:host([dir=ltr].focus-visible):before,:host([dir=ltr][focused]):before{left:0}:host([dir=ltr].focus-visible):before,:host([dir=ltr][focused]):before{left:0}:host([dir=ltr]:focus-visible):before,:host([dir=ltr][focused]):before{left:0}:host([dir=rtl].focus-visible):before,:host([dir=rtl][focused]):before{right:0}:host([dir=rtl].focus-visible):before,:host([dir=rtl][focused]):before{right:0}:host([dir=rtl]:focus-visible):before,:host([dir=rtl][focused]):before{right:0}:host(.focus-visible):before,:host([focused]):before{border-radius:calc(var(--spectrum-table-regular-cell-border-radius-key-focus) - 1px);bottom:0;content:"";position:absolute;top:0;z-index:1}:host(.focus-visible):before,:host([focused]):before{border-radius:calc(var(--spectrum-table-regular-cell-border-radius-key-focus) - 1px);bottom:0;content:"";position:absolute;top:0;z-index:1}:host(:focus-visible):before,:host([focused]):before{border-radius:calc(var(--spectrum-table-regular-cell-border-radius-key-focus) - 1px);bottom:0;content:"";position:absolute;top:0;z-index:1}:host([dir=ltr]) .divider{border-right-width:var(--spectrum-table-regular-divider-border-size)}:host([dir=rtl]) .divider{border-left-width:var(--spectrum-table-regular-divider-border-size)}:host(.focus-visible):before,:host([focused]):before{box-shadow:inset 0 0 0 2px var(
--spectrum-table-m-regular-cell-border-color-key-focus,var(--spectrum-alias-border-color-key-focus)
)}:host(.focus-visible):before,:host([focused]):before{box-shadow:inset 0 0 0 2px var(
--spectrum-table-m-regular-cell-border-color-key-focus,var(--spectrum-alias-border-color-key-focus)
)}:host(:focus-visible):before,:host([focused]):before{box-shadow:inset 0 0 0 2px var(
--spectrum-table-m-regular-cell-border-color-key-focus,var(--spectrum-alias-border-color-key-focus)
)}:host{background-color:var(
--spectrum-table-m-regular-cell-background-color,var(--spectrum-alias-background-color-transparent)
);color:var(
--spectrum-table-m-regular-cell-text-color,var(--spectrum-alias-text-color)
)}:host([dir=ltr]) .divider{border-right-style:solid}:host([dir=rtl]) .divider{border-left-style:solid}:host([dir=ltr]) .divider{border-right-color:var(
--spectrum-table-m-regular-divider-border-color,var(--spectrum-alias-border-color-mid)
)}:host([dir=rtl]) .divider{border-left-color:var(
--spectrum-table-m-regular-divider-border-color,var(--spectrum-alias-border-color-mid)
)}:host{display:block;flex:1}
`,H=we,xe=h`
:host([dir=ltr]) .sortedIcon{margin-left:var(--spectrum-table-regular-header-sort-icon-gap)}:host([dir=rtl]) .sortedIcon{margin-right:var(--spectrum-table-regular-header-sort-icon-gap)}.sortedIcon{display:none;transition:transform var(--spectrum-global-animation-duration-100,.13s) ease-in-out;vertical-align:middle}:host([dir=ltr]){text-align:left}:host([dir=rtl]){text-align:right}:host([dir=ltr]){padding-left:var(--spectrum-table-regular-header-padding-left);padding-right:var(--spectrum-table-regular-header-padding-right)}:host([dir=rtl]){padding-left:var(--spectrum-table-regular-header-padding-right);padding-right:var(--spectrum-table-regular-header-padding-left)}:host{border-radius:var(--spectrum-table-regular-header-border-radius);box-sizing:border-box;cursor:default;font-size:var(--spectrum-table-regular-header-text-size);font-weight:var(--spectrum-table-regular-header-text-font-weight);letter-spacing:var(--spectrum-table-regular-header-text-letter-spacing);line-height:var(--spectrum-table-regular-header-text-line-height);min-height:var(--spectrum-table-regular-header-min-height);outline:0;padding-bottom:var(--spectrum-table-regular-header-padding-bottom);padding-top:var(--spectrum-table-regular-header-padding-top);text-transform:uppercase;transition:color var(--spectrum-global-animation-duration-100,.13s) ease-in-out}:host([sortable]){cursor:pointer}:host([sort-direction=asc]) .sortedIcon,:host([sort-direction=desc]) .sortedIcon{display:inline-block;margin-top:calc(var(--spectrum-global-dimension-size-25)*-1)}:host([sort-direction=asc]) .sortedIcon{transform:rotate(-90deg)}:host{position:relative}:host(.focus-visible),:host([focused]){outline:none}:host(.focus-visible),:host([focused]){outline:none}:host(:focus-visible),:host([focused]){outline:none}:host([dir=ltr].focus-visible):before,:host([dir=ltr][focused]):before{right:0}:host([dir=ltr].focus-visible):before,:host([dir=ltr][focused]):before{right:0}:host([dir=ltr]:focus-visible):before,:host([dir=ltr][focused]):before{right:0}:host([dir=rtl].focus-visible):before,:host([dir=rtl][focused]):before{left:0}:host([dir=rtl].focus-visible):before,:host([dir=rtl][focused]):before{left:0}:host([dir=rtl]:focus-visible):before,:host([dir=rtl][focused]):before{left:0}:host([dir=ltr].focus-visible):before,:host([dir=ltr][focused]):before{left:0}:host([dir=ltr].focus-visible):before,:host([dir=ltr][focused]):before{left:0}:host([dir=ltr]:focus-visible):before,:host([dir=ltr][focused]):before{left:0}:host([dir=rtl].focus-visible):before,:host([dir=rtl][focused]):before{right:0}:host([dir=rtl].focus-visible):before,:host([dir=rtl][focused]):before{right:0}:host([dir=rtl]:focus-visible):before,:host([dir=rtl][focused]):before{right:0}:host(.focus-visible):before,:host([focused]):before{border-radius:calc(var(--spectrum-table-regular-cell-border-radius-key-focus) - 1px);bottom:0;content:"";position:absolute;top:0;z-index:1}:host(.focus-visible):before,:host([focused]):before{border-radius:calc(var(--spectrum-table-regular-cell-border-radius-key-focus) - 1px);bottom:0;content:"";position:absolute;top:0;z-index:1}:host(:focus-visible):before,:host([focused]):before{border-radius:calc(var(--spectrum-table-regular-cell-border-radius-key-focus) - 1px);bottom:0;content:"";position:absolute;top:0;z-index:1}:host([dir=ltr].focus-visible):before,:host([dir=ltr][focused]):before{right:var(--spectrum-table-regular-border-size)}:host([dir=ltr].focus-visible):before,:host([dir=ltr][focused]):before{right:var(--spectrum-table-regular-border-size)}:host([dir=ltr]:focus-visible):before,:host([dir=ltr][focused]):before{right:var(--spectrum-table-regular-border-size)}:host([dir=rtl].focus-visible):before,:host([dir=rtl][focused]):before{left:var(--spectrum-table-regular-border-size)}:host([dir=rtl].focus-visible):before,:host([dir=rtl][focused]):before{left:var(--spectrum-table-regular-border-size)}:host([dir=rtl]:focus-visible):before,:host([dir=rtl][focused]):before{left:var(--spectrum-table-regular-border-size)}:host([dir=ltr].focus-visible):before,:host([dir=ltr][focused]):before{left:var(--spectrum-table-regular-border-size)}:host([dir=ltr].focus-visible):before,:host([dir=ltr][focused]):before{left:var(--spectrum-table-regular-border-size)}:host([dir=ltr]:focus-visible):before,:host([dir=ltr][focused]):before{left:var(--spectrum-table-regular-border-size)}:host([dir=rtl].focus-visible):before,:host([dir=rtl][focused]):before{right:var(--spectrum-table-regular-border-size)}:host([dir=rtl].focus-visible):before,:host([dir=rtl][focused]):before{right:var(--spectrum-table-regular-border-size)}:host([dir=rtl]:focus-visible):before,:host([dir=rtl][focused]):before{right:var(--spectrum-table-regular-border-size)}:host(.focus-visible):before,:host([focused]):before{bottom:var(--spectrum-table-regular-border-size);top:var(--spectrum-table-regular-border-size)}:host(.focus-visible):before,:host([focused]):before{bottom:var(--spectrum-table-regular-border-size);top:var(--spectrum-table-regular-border-size)}:host(:focus-visible):before,:host([focused]):before{bottom:var(--spectrum-table-regular-border-size);top:var(--spectrum-table-regular-border-size)}:host{background-color:var(
--spectrum-table-m-regular-header-background-color,var(--spectrum-alias-background-color-transparent)
);color:var(
--spectrum-table-m-regular-header-text-color,var(--spectrum-alias-label-text-color)
)}:host([sortable]) .sortedIcon{color:var(
--spectrum-table-m-regular-header-sort-icon-color,var(--spectrum-global-color-gray-600)
)}:host([sortable]:hover){color:var(
--spectrum-table-m-regular-header-text-color-hover,var(--spectrum-alias-text-color-hover)
)}:host([sortable]:hover) .sortedIcon{color:var(
--spectrum-table-m-regular-header-sort-icon-color-hover,var(--spectrum-alias-icon-color-hover)
)}:host([sortable].focus-visible),:host([sortable][focused]){color:var(
--spectrum-table-m-regular-header-text-color-key-focus,var(--spectrum-alias-text-color-hover)
)}:host([sortable].focus-visible),:host([sortable][focused]){color:var(
--spectrum-table-m-regular-header-text-color-key-focus,var(--spectrum-alias-text-color-hover)
)}:host([sortable]:focus-visible),:host([sortable][focused]){color:var(
--spectrum-table-m-regular-header-text-color-key-focus,var(--spectrum-alias-text-color-hover)
)}:host([sortable].focus-visible) .sortedIcon,:host([sortable][focused]) .sortedIcon{color:var(
--spectrum-table-m-regular-header-sort-icon-color-key-focus,var(--spectrum-alias-icon-color-key-focus)
)}:host([sortable].focus-visible) .sortedIcon,:host([sortable][focused]) .sortedIcon{color:var(
--spectrum-table-m-regular-header-sort-icon-color-key-focus,var(--spectrum-alias-icon-color-key-focus)
)}:host([sortable]:focus-visible) .sortedIcon,:host([sortable][focused]) .sortedIcon{color:var(
--spectrum-table-m-regular-header-sort-icon-color-key-focus,var(--spectrum-alias-icon-color-key-focus)
)}:host([sortable][active]){color:var(
--spectrum-table-m-regular-header-text-color-down,var(--spectrum-alias-text-color-down)
)}:host([sortable][active]) .sortedIcon{color:var(
--spectrum-table-m-regular-header-sort-icon-color-down,var(--spectrum-alias-icon-color-down)
)}:host(.focus-visible):before,:host([focused]):before{box-shadow:inset 0 0 0 2px var(
--spectrum-table-m-regular-cell-border-color-key-focus,var(--spectrum-alias-border-color-key-focus)
)}:host(.focus-visible):before,:host([focused]):before{box-shadow:inset 0 0 0 2px var(
--spectrum-table-m-regular-cell-border-color-key-focus,var(--spectrum-alias-border-color-key-focus)
)}:host(:focus-visible):before,:host([focused]):before{box-shadow:inset 0 0 0 2px var(
--spectrum-table-m-regular-cell-border-color-key-focus,var(--spectrum-alias-border-color-key-focus)
)}:host{display:block;flex:1}
`,P=xe,ye=h`
:host([dir=ltr]){padding-right:var(--spectrum-table-regular-cell-checkbox-padding-right)}:host([dir=rtl]){padding-left:var(--spectrum-table-regular-cell-checkbox-padding-right)}:host{padding-bottom:0;padding-top:0;vertical-align:var(
--spectrum-table-regular-cell-checkbox-vertical-alignment
)}.checkbox{vertical-align:super}:host{align-items:center;display:flex;flex:0 1 0%}:host([selects-single]) sp-checkbox{visibility:hidden}
`,ze=ye;var ke=Object.defineProperty,Ce=Object.getOwnPropertyDescriptor,w=(i,e,t,r)=>{for(var s=r>1?void 0:r?Ce(e,t):e,a=i.length-1,l;a>=0;a--)(l=i[a])&&(s=(r?l(e,t,s):l(s))||s);return r&&s&&ke(e,t,s),s};class m extends g{constructor(){super(...arguments),this.role="gridcell",this.indeterminate=!1,this.checked=!1,this.disabled=!1,this.selectsSingle=!1}static get styles(){return[H,P,ze]}click(){this.checkbox.click()}render(){return c`
            <sp-checkbox
                ?checked=${this.checked}
                ?indeterminate=${this.indeterminate}
                ?disabled=${this.disabled}
                aria-hidden=${de(this.selectsSingle)}
                class="checkbox"
            ></sp-checkbox>
        `}}w([o({reflect:!0})],m.prototype,"role",2),w([ie(".checkbox")],m.prototype,"checkbox",2),w([o({type:Boolean})],m.prototype,"indeterminate",2),w([o({type:Boolean})],m.prototype,"checked",2),w([o({type:Boolean})],m.prototype,"disabled",2),w([o({type:Boolean,reflect:!0,attribute:"selects-single"})],m.prototype,"selectsSingle",2);customElements.define("sp-table-checkbox-cell",m);const Ie=h`
:host([dir=ltr][drop-target]):before{left:0}:host([dir=rtl][drop-target]):before{right:0}:host([dir=ltr][drop-target]):before{right:0}:host([dir=rtl][drop-target]):before{left:0}:host([drop-target]):before{bottom:0;content:"";position:absolute;top:0;z-index:1}:host{border-radius:var(--spectrum-table-regular-border-radius);border-width:var(--spectrum-table-regular-border-size);overflow:auto;position:relative;vertical-align:var(--spectrum-table-regular-cell-vertical-alignment)}:host{background-color:var(
--spectrum-table-m-regular-background-color,var(--spectrum-global-color-gray-50)
);border-color:var(
--spectrum-table-m-regular-border-color,var(--spectrum-alias-border-color-mid)
);border-style:solid}:host([drop-target]){border-color:var(
--spectrum-alias-border-color-key-focus,var(--spectrum-global-color-blue-400)
);box-shadow:0 0 0 1px var(
--spectrum-alias-border-color-key-focus,var(--spectrum-global-color-blue-400)
)}:host([drop-target]):before{background-color:var(--spectrum-alias-highlight-selected)}:host{display:block;flex-grow:1}:host(:not([tabindex])){overflow:visible}
`,Ee=Ie;var Se=Object.defineProperty,Ae=Object.getOwnPropertyDescriptor,Le=(i,e,t,r)=>{for(var s=r>1?void 0:r?Ae(e,t):e,a=i.length-1,l;a>=0;a--)(l=i[a])&&(s=(r?l(e,t,s):l(s))||s);return r&&s&&Se(e,t,s),s};class B extends g{constructor(){super(),this.role="rowgroup",new ue(this,{config:{childList:!0,subtree:!0},callback:()=>{requestAnimationFrame(()=>{this.shouldHaveTabIndex()})}})}static get styles(){return[Ee]}shouldHaveTabIndex(){this.offsetHeight<this.scrollHeight?this.tabIndex=0:this.removeAttribute("tabindex")}render(){return c`
            <slot></slot>
        `}}Le([o({reflect:!0})],B.prototype,"role",2);customElements.define("sp-table-body",B);const $e=h`
:host{border-collapse:separate;border-spacing:0}:host([size=s]){--spectrum-table-compact-quiet-border-radius:var(
--spectrum-table-s-compact-quiet-border-radius,var(--spectrum-global-dimension-static-size-0)
);--spectrum-table-compact-header-border-radius:var(
--spectrum-table-s-compact-header-border-radius,var(--spectrum-global-dimension-static-size-0)
);--spectrum-table-compact-cell-border-radius-key-focus:var(
--spectrum-table-s-compact-cell-border-radius-key-focus,var(--spectrum-alias-border-radius-regular)
);--spectrum-table-compact-divider-border-size:var(
--spectrum-table-s-compact-divider-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-table-compact-header-text-size:var(
--spectrum-table-s-compact-header-text-size,var(--spectrum-global-dimension-font-size-50)
);--spectrum-table-compact-header-text-font-weight:var(
--spectrum-table-s-compact-header-text-font-weight,var(--spectrum-alias-detail-text-font-weight-regular)
);--spectrum-table-compact-header-text-letter-spacing:var(
--spectrum-table-s-compact-header-text-letter-spacing,var(--spectrum-global-font-letter-spacing-medium)
);--spectrum-table-compact-header-text-line-height:var(
--spectrum-table-s-compact-header-text-line-height,var(--spectrum-alias-heading-text-line-height)
);--spectrum-table-compact-header-sort-icon-gap:var(
--spectrum-table-s-compact-header-sort-icon-gap,var(--spectrum-global-dimension-size-125)
);--spectrum-table-compact-header-min-height:var(
--spectrum-table-s-compact-header-min-height,var(--spectrum-global-dimension-size-400)
);--spectrum-table-compact-header-padding-top:var(
--spectrum-table-s-compact-header-padding-top,var(--spectrum-global-dimension-static-size-125)
);--spectrum-table-compact-header-padding-bottom:var(
--spectrum-table-s-compact-header-padding-bottom,var(--spectrum-global-dimension-static-size-125)
);--spectrum-table-compact-header-padding-left:var(
--spectrum-table-s-compact-header-padding-left,var(--spectrum-global-dimension-static-size-200)
);--spectrum-table-compact-header-padding-right:var(
--spectrum-table-s-compact-header-padding-right,var(--spectrum-global-dimension-static-size-200)
);--spectrum-table-compact-cell-text-size:var(
--spectrum-table-s-compact-cell-text-size,var(--spectrum-global-dimension-font-size-75)
);--spectrum-table-compact-cell-text-font-weight:var(
--spectrum-table-s-compact-cell-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-table-compact-cell-text-line-height:var(
--spectrum-table-s-compact-cell-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-table-compact-cell-checkbox-padding-right:var(
--spectrum-table-s-compact-cell-checkbox-padding-right,var(--spectrum-global-dimension-size-100)
);--spectrum-table-compact-cell-checkbox-vertical-alignment:var(
--spectrum-table-s-compact-cell-checkbox-vertical-alignment,middle
);--spectrum-table-compact-cell-min-height:var(
--spectrum-table-s-compact-cell-min-height,var(--spectrum-global-dimension-size-300)
);--spectrum-table-compact-cell-padding-top:var(
--spectrum-table-s-compact-cell-padding-top,var(--spectrum-global-dimension-size-50)
);--spectrum-table-compact-cell-padding-bottom:var(
--spectrum-table-s-compact-cell-padding-bottom,var(--spectrum-global-dimension-size-50)
);--spectrum-table-compact-cell-padding-left:var(
--spectrum-table-s-compact-cell-padding-left,var(--spectrum-global-dimension-static-size-200)
);--spectrum-table-compact-cell-padding-right:var(
--spectrum-table-s-compact-cell-padding-right,var(--spectrum-global-dimension-static-size-200)
);--spectrum-table-compact-cell-vertical-alignment:var(
--spectrum-table-s-compact-cell-vertical-alignment,top
);--spectrum-table-compact-border-radius:var(
--spectrum-table-s-compact-border-radius,var(--spectrum-alias-border-radius-regular)
);--spectrum-table-compact-border-size:var(
--spectrum-table-s-compact-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-table-regular-quiet-border-radius:var(
--spectrum-table-s-regular-quiet-border-radius,var(--spectrum-global-dimension-static-size-0)
);--spectrum-table-regular-header-border-radius:var(
--spectrum-table-s-regular-header-border-radius,var(--spectrum-global-dimension-static-size-0)
);--spectrum-table-regular-cell-border-radius-key-focus:var(
--spectrum-table-s-regular-cell-border-radius-key-focus,var(--spectrum-alias-border-radius-regular)
);--spectrum-table-regular-divider-border-size:var(
--spectrum-table-s-regular-divider-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-table-regular-header-text-size:var(
--spectrum-table-s-regular-header-text-size,var(--spectrum-global-dimension-font-size-50)
);--spectrum-table-regular-header-text-font-weight:var(
--spectrum-table-s-regular-header-text-font-weight,var(--spectrum-alias-detail-text-font-weight-regular)
);--spectrum-table-regular-header-text-letter-spacing:var(
--spectrum-table-s-regular-header-text-letter-spacing,var(--spectrum-global-font-letter-spacing-medium)
);--spectrum-table-regular-header-text-line-height:var(
--spectrum-table-s-regular-header-text-line-height,var(--spectrum-alias-heading-text-line-height)
);--spectrum-table-regular-header-sort-icon-gap:var(
--spectrum-table-s-regular-header-sort-icon-gap,var(--spectrum-global-dimension-size-125)
);--spectrum-table-regular-header-min-height:var(
--spectrum-table-s-regular-header-min-height,var(--spectrum-global-dimension-size-400)
);--spectrum-table-regular-header-padding-top:var(
--spectrum-table-s-regular-header-padding-top,var(--spectrum-global-dimension-static-size-125)
);--spectrum-table-regular-header-padding-bottom:var(
--spectrum-table-s-regular-header-padding-bottom,var(--spectrum-global-dimension-static-size-125)
);--spectrum-table-regular-header-padding-left:var(
--spectrum-table-s-regular-header-padding-left,var(--spectrum-global-dimension-static-size-200)
);--spectrum-table-regular-header-padding-right:var(
--spectrum-table-s-regular-header-padding-right,var(--spectrum-global-dimension-static-size-200)
);--spectrum-table-regular-cell-text-size:var(
--spectrum-table-s-regular-cell-text-size,var(--spectrum-global-dimension-font-size-75)
);--spectrum-table-regular-cell-text-font-weight:var(
--spectrum-table-s-regular-cell-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-table-regular-cell-text-line-height:var(
--spectrum-table-s-regular-cell-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-table-regular-cell-checkbox-padding-right:var(
--spectrum-table-s-regular-cell-checkbox-padding-right,var(--spectrum-global-dimension-size-100)
);--spectrum-table-regular-cell-checkbox-vertical-alignment:var(
--spectrum-table-s-regular-cell-checkbox-vertical-alignment,middle
);--spectrum-table-regular-cell-min-height:var(
--spectrum-table-s-regular-cell-min-height,var(--spectrum-global-dimension-size-400)
);--spectrum-table-regular-cell-padding-top:var(
--spectrum-table-s-regular-cell-padding-top,var(--spectrum-global-dimension-size-85)
);--spectrum-table-regular-cell-padding-bottom:var(
--spectrum-table-s-regular-cell-padding-bottom,var(--spectrum-global-dimension-size-85)
);--spectrum-table-regular-cell-padding-left:var(
--spectrum-table-s-regular-cell-padding-left,var(--spectrum-global-dimension-static-size-200)
);--spectrum-table-regular-cell-padding-right:var(
--spectrum-table-s-regular-cell-padding-right,var(--spectrum-global-dimension-static-size-200)
);--spectrum-table-regular-cell-vertical-alignment:var(
--spectrum-table-s-regular-cell-vertical-alignment,top
);--spectrum-table-regular-border-radius:var(
--spectrum-table-s-regular-border-radius,var(--spectrum-alias-border-radius-regular)
);--spectrum-table-regular-border-size:var(
--spectrum-table-s-regular-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-table-spacious-quiet-border-radius:var(
--spectrum-table-s-spacious-quiet-border-radius,var(--spectrum-global-dimension-static-size-0)
);--spectrum-table-spacious-header-border-radius:var(
--spectrum-table-s-spacious-header-border-radius,var(--spectrum-global-dimension-static-size-0)
);--spectrum-table-spacious-cell-border-radius-key-focus:var(
--spectrum-table-s-spacious-cell-border-radius-key-focus,var(--spectrum-alias-border-radius-regular)
);--spectrum-table-spacious-divider-border-size:var(
--spectrum-table-s-spacious-divider-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-table-spacious-header-text-size:var(
--spectrum-table-s-spacious-header-text-size,var(--spectrum-global-dimension-font-size-50)
);--spectrum-table-spacious-header-text-font-weight:var(
--spectrum-table-s-spacious-header-text-font-weight,var(--spectrum-alias-detail-text-font-weight-regular)
);--spectrum-table-spacious-header-text-letter-spacing:var(
--spectrum-table-s-spacious-header-text-letter-spacing,var(--spectrum-global-font-letter-spacing-medium)
);--spectrum-table-spacious-header-text-line-height:var(
--spectrum-table-s-spacious-header-text-line-height,var(--spectrum-alias-heading-text-line-height)
);--spectrum-table-spacious-header-sort-icon-gap:var(
--spectrum-table-s-spacious-header-sort-icon-gap,var(--spectrum-global-dimension-size-125)
);--spectrum-table-spacious-header-min-height:var(
--spectrum-table-s-spacious-header-min-height,var(--spectrum-global-dimension-size-400)
);--spectrum-table-spacious-header-padding-top:var(
--spectrum-table-s-spacious-header-padding-top,var(--spectrum-global-dimension-static-size-125)
);--spectrum-table-spacious-header-padding-bottom:var(
--spectrum-table-s-spacious-header-padding-bottom,var(--spectrum-global-dimension-static-size-125)
);--spectrum-table-spacious-header-padding-left:var(
--spectrum-table-s-spacious-header-padding-left,var(--spectrum-global-dimension-static-size-200)
);--spectrum-table-spacious-header-padding-right:var(
--spectrum-table-s-spacious-header-padding-right,var(--spectrum-global-dimension-static-size-200)
);--spectrum-table-spacious-cell-text-size:var(
--spectrum-table-s-spacious-cell-text-size,var(--spectrum-global-dimension-font-size-75)
);--spectrum-table-spacious-cell-text-font-weight:var(
--spectrum-table-s-spacious-cell-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-table-spacious-cell-text-line-height:var(
--spectrum-table-s-spacious-cell-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-table-spacious-cell-checkbox-padding-right:var(
--spectrum-table-s-spacious-cell-checkbox-padding-right,var(--spectrum-global-dimension-size-100)
);--spectrum-table-spacious-cell-checkbox-vertical-alignment:var(
--spectrum-table-s-spacious-cell-checkbox-vertical-alignment,middle
);--spectrum-table-spacious-cell-min-height:var(
--spectrum-table-s-spacious-cell-min-height,var(--spectrum-global-dimension-size-500)
);--spectrum-table-spacious-cell-padding-top:var(
--spectrum-table-s-spacious-cell-padding-top,var(--spectrum-global-dimension-size-125)
);--spectrum-table-spacious-cell-padding-bottom:var(
--spectrum-table-s-spacious-cell-padding-bottom,var(--spectrum-global-dimension-size-125)
);--spectrum-table-spacious-cell-padding-left:var(
--spectrum-table-s-spacious-cell-padding-left,var(--spectrum-global-dimension-static-size-200)
);--spectrum-table-spacious-cell-padding-right:var(
--spectrum-table-s-spacious-cell-padding-right,var(--spectrum-global-dimension-static-size-200)
);--spectrum-table-spacious-cell-vertical-alignment:var(
--spectrum-table-s-spacious-cell-vertical-alignment,top
);--spectrum-table-spacious-border-radius:var(
--spectrum-table-s-spacious-border-radius,var(--spectrum-alias-border-radius-regular)
);--spectrum-table-spacious-border-size:var(
--spectrum-table-s-spacious-border-size,var(--spectrum-alias-border-size-thin)
)}:host([size=m]){--spectrum-table-compact-quiet-border-radius:var(
--spectrum-table-m-compact-quiet-border-radius,var(--spectrum-global-dimension-static-size-0)
);--spectrum-table-compact-header-border-radius:var(
--spectrum-table-m-compact-header-border-radius,var(--spectrum-global-dimension-static-size-0)
);--spectrum-table-compact-cell-border-radius-key-focus:var(
--spectrum-table-m-compact-cell-border-radius-key-focus,var(--spectrum-alias-border-radius-regular)
);--spectrum-table-compact-divider-border-size:var(
--spectrum-table-m-compact-divider-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-table-compact-header-text-size:var(
--spectrum-table-m-compact-header-text-size,var(--spectrum-global-dimension-font-size-50)
);--spectrum-table-compact-header-text-font-weight:var(
--spectrum-table-m-compact-header-text-font-weight,var(--spectrum-alias-detail-text-font-weight-regular)
);--spectrum-table-compact-header-text-letter-spacing:var(
--spectrum-table-m-compact-header-text-letter-spacing,var(--spectrum-global-font-letter-spacing-medium)
);--spectrum-table-compact-header-text-line-height:var(
--spectrum-table-m-compact-header-text-line-height,var(--spectrum-alias-heading-text-line-height)
);--spectrum-table-compact-header-sort-icon-gap:var(
--spectrum-table-m-compact-header-sort-icon-gap,var(--spectrum-global-dimension-size-125)
);--spectrum-table-compact-header-min-height:var(
--spectrum-table-m-compact-header-min-height,var(--spectrum-global-dimension-size-400)
);--spectrum-table-compact-header-padding-top:var(
--spectrum-table-m-compact-header-padding-top,var(--spectrum-global-dimension-static-size-125)
);--spectrum-table-compact-header-padding-bottom:var(
--spectrum-table-m-compact-header-padding-bottom,var(--spectrum-global-dimension-static-size-125)
);--spectrum-table-compact-header-padding-left:var(
--spectrum-table-m-compact-header-padding-left,var(--spectrum-global-dimension-static-size-200)
);--spectrum-table-compact-header-padding-right:var(
--spectrum-table-m-compact-header-padding-right,var(--spectrum-global-dimension-static-size-200)
);--spectrum-table-compact-cell-text-size:var(
--spectrum-table-m-compact-cell-text-size,var(--spectrum-global-dimension-font-size-100)
);--spectrum-table-compact-cell-text-font-weight:var(
--spectrum-table-m-compact-cell-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-table-compact-cell-text-line-height:var(
--spectrum-table-m-compact-cell-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-table-compact-cell-checkbox-padding-right:var(
--spectrum-table-m-compact-cell-checkbox-padding-right,var(--spectrum-global-dimension-size-100)
);--spectrum-table-compact-cell-checkbox-vertical-alignment:var(
--spectrum-table-m-compact-cell-checkbox-vertical-alignment,middle
);--spectrum-table-compact-cell-min-height:var(
--spectrum-table-m-compact-cell-min-height,var(--spectrum-global-dimension-size-400)
);--spectrum-table-compact-cell-padding-top:var(
--spectrum-table-m-compact-cell-padding-top,var(--spectrum-global-dimension-size-85)
);--spectrum-table-compact-cell-padding-bottom:var(
--spectrum-table-m-compact-cell-padding-bottom,var(--spectrum-global-dimension-size-85)
);--spectrum-table-compact-cell-padding-left:var(
--spectrum-table-m-compact-cell-padding-left,var(--spectrum-global-dimension-static-size-200)
);--spectrum-table-compact-cell-padding-right:var(
--spectrum-table-m-compact-cell-padding-right,var(--spectrum-global-dimension-static-size-200)
);--spectrum-table-compact-cell-vertical-alignment:var(
--spectrum-table-m-compact-cell-vertical-alignment,top
);--spectrum-table-compact-border-radius:var(
--spectrum-table-m-compact-border-radius,var(--spectrum-alias-border-radius-regular)
);--spectrum-table-compact-border-size:var(
--spectrum-table-m-compact-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-table-regular-quiet-border-radius:var(
--spectrum-table-m-regular-quiet-border-radius,var(--spectrum-global-dimension-static-size-0)
);--spectrum-table-regular-header-border-radius:var(
--spectrum-table-m-regular-header-border-radius,var(--spectrum-global-dimension-static-size-0)
);--spectrum-table-regular-cell-border-radius-key-focus:var(
--spectrum-table-m-regular-cell-border-radius-key-focus,var(--spectrum-alias-border-radius-regular)
);--spectrum-table-regular-divider-border-size:var(
--spectrum-table-m-regular-divider-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-table-regular-header-text-size:var(
--spectrum-table-m-regular-header-text-size,var(--spectrum-global-dimension-font-size-50)
);--spectrum-table-regular-header-text-font-weight:var(
--spectrum-table-m-regular-header-text-font-weight,var(--spectrum-alias-detail-text-font-weight-regular)
);--spectrum-table-regular-header-text-letter-spacing:var(
--spectrum-table-m-regular-header-text-letter-spacing,var(--spectrum-global-font-letter-spacing-medium)
);--spectrum-table-regular-header-text-line-height:var(
--spectrum-table-m-regular-header-text-line-height,var(--spectrum-alias-heading-text-line-height)
);--spectrum-table-regular-header-sort-icon-gap:var(
--spectrum-table-m-regular-header-sort-icon-gap,var(--spectrum-global-dimension-size-125)
);--spectrum-table-regular-header-min-height:var(
--spectrum-table-m-regular-header-min-height,var(--spectrum-global-dimension-size-400)
);--spectrum-table-regular-header-padding-top:var(
--spectrum-table-m-regular-header-padding-top,var(--spectrum-global-dimension-static-size-125)
);--spectrum-table-regular-header-padding-bottom:var(
--spectrum-table-m-regular-header-padding-bottom,var(--spectrum-global-dimension-static-size-125)
);--spectrum-table-regular-header-padding-left:var(
--spectrum-table-m-regular-header-padding-left,var(--spectrum-global-dimension-static-size-200)
);--spectrum-table-regular-header-padding-right:var(
--spectrum-table-m-regular-header-padding-right,var(--spectrum-global-dimension-static-size-200)
);--spectrum-table-regular-cell-text-size:var(
--spectrum-table-m-regular-cell-text-size,var(--spectrum-global-dimension-font-size-100)
);--spectrum-table-regular-cell-text-font-weight:var(
--spectrum-table-m-regular-cell-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-table-regular-cell-text-line-height:var(
--spectrum-table-m-regular-cell-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-table-regular-cell-checkbox-padding-right:var(
--spectrum-table-m-regular-cell-checkbox-padding-right,var(--spectrum-global-dimension-size-100)
);--spectrum-table-regular-cell-checkbox-vertical-alignment:var(
--spectrum-table-m-regular-cell-checkbox-vertical-alignment,middle
);--spectrum-table-regular-cell-min-height:var(
--spectrum-table-m-regular-cell-min-height,var(--spectrum-global-dimension-size-500)
);--spectrum-table-regular-cell-padding-top:var(
--spectrum-table-m-regular-cell-padding-top,var(--spectrum-global-dimension-size-130)
);--spectrum-table-regular-cell-padding-bottom:var(
--spectrum-table-m-regular-cell-padding-bottom,var(--spectrum-global-dimension-size-130)
);--spectrum-table-regular-cell-padding-left:var(
--spectrum-table-m-regular-cell-padding-left,var(--spectrum-global-dimension-static-size-200)
);--spectrum-table-regular-cell-padding-right:var(
--spectrum-table-m-regular-cell-padding-right,var(--spectrum-global-dimension-static-size-200)
);--spectrum-table-regular-cell-vertical-alignment:var(
--spectrum-table-m-regular-cell-vertical-alignment,top
);--spectrum-table-regular-border-radius:var(
--spectrum-table-m-regular-border-radius,var(--spectrum-alias-border-radius-regular)
);--spectrum-table-regular-border-size:var(
--spectrum-table-m-regular-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-table-spacious-quiet-border-radius:var(
--spectrum-table-m-spacious-quiet-border-radius,var(--spectrum-global-dimension-static-size-0)
);--spectrum-table-spacious-header-border-radius:var(
--spectrum-table-m-spacious-header-border-radius,var(--spectrum-global-dimension-static-size-0)
);--spectrum-table-spacious-cell-border-radius-key-focus:var(
--spectrum-table-m-spacious-cell-border-radius-key-focus,var(--spectrum-alias-border-radius-regular)
);--spectrum-table-spacious-divider-border-size:var(
--spectrum-table-m-spacious-divider-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-table-spacious-header-text-size:var(
--spectrum-table-m-spacious-header-text-size,var(--spectrum-global-dimension-font-size-50)
);--spectrum-table-spacious-header-text-font-weight:var(
--spectrum-table-m-spacious-header-text-font-weight,var(--spectrum-alias-detail-text-font-weight-regular)
);--spectrum-table-spacious-header-text-letter-spacing:var(
--spectrum-table-m-spacious-header-text-letter-spacing,var(--spectrum-global-font-letter-spacing-medium)
);--spectrum-table-spacious-header-text-line-height:var(
--spectrum-table-m-spacious-header-text-line-height,var(--spectrum-alias-heading-text-line-height)
);--spectrum-table-spacious-header-sort-icon-gap:var(
--spectrum-table-m-spacious-header-sort-icon-gap,var(--spectrum-global-dimension-size-125)
);--spectrum-table-spacious-header-min-height:var(
--spectrum-table-m-spacious-header-min-height,var(--spectrum-global-dimension-size-400)
);--spectrum-table-spacious-header-padding-top:var(
--spectrum-table-m-spacious-header-padding-top,var(--spectrum-global-dimension-static-size-125)
);--spectrum-table-spacious-header-padding-bottom:var(
--spectrum-table-m-spacious-header-padding-bottom,var(--spectrum-global-dimension-static-size-125)
);--spectrum-table-spacious-header-padding-left:var(
--spectrum-table-m-spacious-header-padding-left,var(--spectrum-global-dimension-static-size-200)
);--spectrum-table-spacious-header-padding-right:var(
--spectrum-table-m-spacious-header-padding-right,var(--spectrum-global-dimension-static-size-200)
);--spectrum-table-spacious-cell-text-size:var(
--spectrum-table-m-spacious-cell-text-size,var(--spectrum-global-dimension-font-size-100)
);--spectrum-table-spacious-cell-text-font-weight:var(
--spectrum-table-m-spacious-cell-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-table-spacious-cell-text-line-height:var(
--spectrum-table-m-spacious-cell-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-table-spacious-cell-checkbox-padding-right:var(
--spectrum-table-m-spacious-cell-checkbox-padding-right,var(--spectrum-global-dimension-size-100)
);--spectrum-table-spacious-cell-checkbox-vertical-alignment:var(
--spectrum-table-m-spacious-cell-checkbox-vertical-alignment,middle
);--spectrum-table-spacious-cell-min-height:var(
--spectrum-table-m-spacious-cell-min-height,var(--spectrum-global-dimension-size-600)
);--spectrum-table-spacious-cell-padding-top:var(
--spectrum-table-m-spacious-cell-padding-top,var(--spectrum-global-dimension-size-185)
);--spectrum-table-spacious-cell-padding-bottom:var(
--spectrum-table-m-spacious-cell-padding-bottom,var(--spectrum-global-dimension-size-185)
);--spectrum-table-spacious-cell-padding-left:var(
--spectrum-table-m-spacious-cell-padding-left,var(--spectrum-global-dimension-static-size-200)
);--spectrum-table-spacious-cell-padding-right:var(
--spectrum-table-m-spacious-cell-padding-right,var(--spectrum-global-dimension-static-size-200)
);--spectrum-table-spacious-cell-vertical-alignment:var(
--spectrum-table-m-spacious-cell-vertical-alignment,top
);--spectrum-table-spacious-border-radius:var(
--spectrum-table-m-spacious-border-radius,var(--spectrum-alias-border-radius-regular)
);--spectrum-table-spacious-border-size:var(
--spectrum-table-m-spacious-border-size,var(--spectrum-alias-border-size-thin)
)}:host{display:flex;flex-direction:column}
`,Te=$e;let d,j;async function Re(){return j||Oe()}async function Oe(){if(d)return(await d).default;d=window.ResizeObserver;try{new d(function(){})}catch{d=D(()=>import("./ResizeObserver-fd39e859.js"),[],import.meta.url),d=(await d).default}return j=d}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let N=class q extends Event{constructor(e){super(q.eventName,{bubbles:!0}),this.first=e.first,this.last=e.last}};N.eventName="rangeChanged";class S extends Event{constructor(e){super(S.eventName,{bubbles:!0}),this.first=e.first,this.last=e.last}}S.eventName="visibilityChanged";class A extends Event{constructor(){super(A.eventName,{bubbles:!1})}}A.eventName="unpinned";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ue{constructor(e){this._node=null,this._element=null;const t=e??window;this._node=t,e&&(this._element=e)}get element(){return this._element||document.scrollingElement||document.documentElement}get scrollTop(){return this.element.scrollTop||window.scrollY}get scrollLeft(){return this.element.scrollLeft||window.scrollX}get scrollHeight(){return this.element.scrollHeight}get scrollWidth(){return this.element.scrollWidth}get viewportHeight(){return this._element?this._element.getBoundingClientRect().height:window.innerHeight}get viewportWidth(){return this._element?this._element.getBoundingClientRect().width:window.innerWidth}get maxScrollTop(){return this.scrollHeight-this.viewportHeight}get maxScrollLeft(){return this.scrollWidth-this.viewportWidth}}class L extends Ue{constructor(e,t){super(t),this._originalScrollTo=null,this._originalScrollBy=null,this._originalScroll=null,this._clients=[],this._retarget=null,this._end=null,this.__destination=null,this.correctingScrollError=!1;const r=this._node,s=L._instanceMap.get(r);if(s)return s._attach(e),s;this._checkForArrival=this._checkForArrival.bind(this),this._updateManagedScrollTo=this._updateManagedScrollTo.bind(this),this.scrollTo=this.scrollTo.bind(this),this.scrollBy=this.scrollBy.bind(this),this._originalScrollTo=r.scrollTo,this._originalScrollBy=r.scrollBy,this._originalScroll=r.scroll,this._attach(e)}get _destination(){return this.__destination}get scrolling(){return this._destination!==null}scrollTo(e,t){const r=typeof e=="number"&&typeof t=="number"?{left:e,top:t}:e;this._scrollTo(r)}scrollBy(e,t){const r=typeof e=="number"&&typeof t=="number"?{left:e,top:t}:e;r.top!==void 0&&(r.top+=this.scrollTop),r.left!==void 0&&(r.left+=this.scrollLeft),this._scrollTo(r)}_nativeScrollTo(e){this._originalScrollTo.bind(this._element||window)(e)}_scrollTo(e,t=null,r=null){this._end!==null&&this._end(),e.behavior==="smooth"?(this._setDestination(e),this._retarget=t,this._end=r):this._resetScrollState(),this._nativeScrollTo(e)}_setDestination(e){let{top:t,left:r}=e;return t=t===void 0?void 0:Math.max(0,Math.min(t,this.maxScrollTop)),r=r===void 0?void 0:Math.max(0,Math.min(r,this.maxScrollLeft)),this._destination!==null&&r===this._destination.left&&t===this._destination.top?!1:(this.__destination={top:t,left:r,behavior:"smooth"},!0)}_resetScrollState(){this.__destination=null,this._retarget=null,this._end=null}_updateManagedScrollTo(e){this._destination&&this._setDestination(e)&&this._nativeScrollTo(this._destination)}managedScrollTo(e,t,r){return this._scrollTo(e,t,r),this._updateManagedScrollTo}correctScrollError(e){this.correctingScrollError=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this.correctingScrollError=!1)),this._nativeScrollTo(e),this._retarget&&this._setDestination(this._retarget()),this._destination&&this._nativeScrollTo(this._destination)}_checkForArrival(){if(this._destination!==null){const{scrollTop:e,scrollLeft:t}=this;let{top:r,left:s}=this._destination;r=Math.min(r||0,this.maxScrollTop),s=Math.min(s||0,this.maxScrollLeft);const a=Math.abs(r-e),l=Math.abs(s-t);a<1&&l<1&&(this._end&&this._end(),this._resetScrollState())}}detach(e){return this._clients=this._clients.splice(this._clients.indexOf(e),1),this._clients.length===0&&(this._node.scrollTo=this._originalScrollTo,this._node.scrollBy=this._originalScrollBy,this._node.scroll=this._originalScroll,this._node.removeEventListener("scroll",this._checkForArrival)),null}_attach(e){this._clients.push(e),this._clients.length===1&&(this._node.scrollTo=this.scrollTo,this._node.scrollBy=this.scrollBy,this._node.scroll=this.scrollTo,this._node.addEventListener("scroll",this._checkForArrival))}}L._instanceMap=new WeakMap;const F=Symbol("virtualizerRef"),C="virtualizer-sizer";let O;class Ve{constructor(e){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._scrollerController=null,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollIntoViewTarget=null,this._updateScrollIntoViewCoordinates=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null,!e)throw new Error("Virtualizer constructor requires a configuration object");if(e.hostElement)this._init(e);else throw new Error('Virtualizer configuration requires the "hostElement" property')}set items(e){Array.isArray(e)&&e!==this._items&&(this._itemsChanged=!0,this._items=e,this._schedule(this._updateLayout))}_init(e){this._isScroller=!!e.scroller,this._initHostElement(e),this._initLayout(e.layout||{})}async _initObservers(){this._mutationObserver=new MutationObserver(this._finishDOMUpdate.bind(this));const e=await Re();this._hostElementRO=new e(()=>this._hostElementSizeChanged()),this._childrenRO=new e(this._childrenSizeChanged.bind(this))}_initHostElement(e){const t=this._hostElement=e.hostElement;this._applyVirtualizerStyles(),t[F]=this}async connected(){await this._initObservers();const e=this._isScroller;this._clippingAncestors=He(this._hostElement,e),this._scrollerController=new L(this,this._clippingAncestors[0]),this._schedule(this._updateLayout),this._observeAndListen()}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener("scroll",this,this._scrollEventListenerOptions),this._clippingAncestors.forEach(e=>{e.addEventListener("scroll",this,this._scrollEventListenerOptions),this._scrollEventListeners.push(e),this._hostElementRO.observe(e)}),this._hostElementRO.observe(this._scrollerController.element),this._children.forEach(e=>this._childrenRO.observe(e)),this._scrollEventListeners.forEach(e=>e.addEventListener("scroll",this,this._scrollEventListenerOptions))}disconnected(){var e,t,r,s;this._scrollEventListeners.forEach(a=>a.removeEventListener("scroll",this,this._scrollEventListenerOptions)),this._scrollEventListeners=[],this._clippingAncestors=[],this._scrollerController=((e=this._scrollerController)===null||e===void 0?void 0:e.detach(this))||null,(t=this._mutationObserver)===null||t===void 0||t.disconnect(),(r=this._hostElementRO)===null||r===void 0||r.disconnect(),(s=this._childrenRO)===null||s===void 0||s.disconnect(),this._rejectLayoutCompletePromise("disconnected")}_applyVirtualizerStyles(){const t=this._hostElement.style;t.display=t.display||"block",t.position=t.position||"relative",t.contain=t.contain||"size layout",this._isScroller&&(t.overflow=t.overflow||"auto",t.minHeight=t.minHeight||"150px")}_getSizer(){const e=this._hostElement;if(!this._sizer){let t=e.querySelector(`[${C}]`);t||(t=document.createElement("div"),t.setAttribute(C,""),e.appendChild(t)),Object.assign(t.style,{position:"absolute",margin:"-2px 0 0 0",padding:0,visibility:"hidden",fontSize:"2px"}),t.innerHTML="&nbsp;",t.setAttribute(C,""),this._sizer=t}return this._sizer}updateLayoutConfig(e){const t=e.type||O;if(typeof t=="function"&&this._layout instanceof t){const r={...e};return delete r.type,this._layout.config=r,!0}return!1}async _initLayout(e){let t,r;if(typeof e.type=="function"){r=e.type;const s={...e};delete s.type,t=s}else t=e;r===void 0&&(O=r=(await D(()=>import("./flow-c8c2a53c.js"),["./flow-c8c2a53c.js","./iframe-b912c67f.js"],import.meta.url)).FlowLayout),this._layout=new r(t),this._layout.measureChildren&&typeof this._layout.updateItemSizes=="function"&&(typeof this._layout.measureChildren=="function"&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.addEventListener("scrollsizechange",this),this._layout.addEventListener("scrollerrorchange",this),this._layout.addEventListener("itempositionchange",this),this._layout.addEventListener("rangechange",this),this._layout.addEventListener("unpinned",this),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener("load",this._loadListener,!0),this._schedule(this._updateLayout)}startBenchmarking(){this._benchmarkStart===null&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(this._benchmarkStart!==null){const e=window.performance.now(),t=e-this._benchmarkStart,s=performance.getEntriesByName("uv-virtualizing","measure").filter(a=>a.startTime>=this._benchmarkStart&&a.startTime<e).reduce((a,l)=>a+l.duration,0);return this._benchmarkStart=null,{timeElapsed:t,virtualizationTime:s}}return null}_measureChildren(){const e={},t=this._children,r=this._measureChildOverride||this._measureChild;for(let s=0;s<t.length;s++){const a=t[s],l=this._first+s;(this._itemsChanged||this._toBeMeasured.has(a))&&(e[l]=r.call(this,a,this._items[l]))}this._childMeasurements=e,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(e){const{width:t,height:r}=e.getBoundingClientRect();return Object.assign({width:t,height:r},De(e))}async _schedule(e){this._scheduled.has(e)||(this._scheduled.add(e),await Promise.resolve(),this._scheduled.delete(e),e.call(this))}async _updateDOM(){const{_rangeChanged:e,_itemsChanged:t}=this;this._visibilityChanged&&(this._notifyVisibility(),this._visibilityChanged=!1),e||t?(this._notifyRange(),this._rangeChanged=!1):this._finishDOMUpdate()}_finishDOMUpdate(){this._children.forEach(e=>this._childrenRO.observe(e)),this._checkScrollIntoViewTarget(this._childrenPos),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._correctScrollError(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end")}_updateLayout(){this._layout&&(this._layout.items=this._items,this._updateView(),this._childMeasurements!==null&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_handleScrollEvent(){var e;if(this._benchmarkStart&&"mark"in window.performance){try{window.performance.measure("uv-virtualizing","uv-start","uv-end")}catch(t){console.warn("Error measuring performance data: ",t)}window.performance.mark("uv-start")}this._scrollerController.correctingScrollError===!1&&((e=this._layout)===null||e===void 0||e.unpin()),this._schedule(this._updateLayout)}handleEvent(e){switch(e.type){case"scroll":(e.currentTarget===window||this._clippingAncestors.includes(e.currentTarget))&&this._handleScrollEvent();break;case"scrollsizechange":this._scrollSize=e.detail,this._schedule(this._updateDOM);break;case"scrollerrorchange":this._scrollError=e.detail,this._schedule(this._updateDOM);break;case"itempositionchange":this._childrenPos=e.detail,this._schedule(this._updateDOM);break;case"rangechange":this._adjustRange(e.detail),this._schedule(this._updateDOM);break;case"unpinned":this._hostElement.dispatchEvent(new A);break;default:console.warn("event not handled",e)}}get _children(){const e=[];let t=this._hostElement.firstElementChild;for(;t;)t.hasAttribute(C)||e.push(t),t=t.nextElementSibling;return e}_updateView(){var e;const t=this._hostElement,r=(e=this._scrollerController)===null||e===void 0?void 0:e.element,s=this._layout;if(t&&r&&s){let a,l,p,f;const n=t.getBoundingClientRect();a=0,l=0,p=window.innerHeight,f=window.innerWidth;const T=this._clippingAncestors.map(_=>_.getBoundingClientRect());T.unshift(n);for(const _ of T)a=Math.max(a,_.top),l=Math.max(l,_.left),p=Math.min(p,_.bottom),f=Math.min(f,_.right);const R=r.getBoundingClientRect(),G={left:n.left-R.left,top:n.top-R.top},X={width:r.scrollWidth,height:r.scrollHeight},Y=a-n.top+t.scrollTop,Z=l-n.left+t.scrollLeft,Q=Math.max(1,p-a),ee=Math.max(1,f-l);s.viewportSize={width:ee,height:Q},s.viewportScroll={top:Y,left:Z},s.totalScrollSize=X,s.offsetWithinScroller=G}}_sizeHostElement(e){const r=e&&e.width!==null?Math.min(82e5,e.width):0,s=e&&e.height!==null?Math.min(82e5,e.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${r}px, ${s}px)`;else{const a=this._hostElement.style;a.minWidth=r?`${r}px`:"100%",a.minHeight=s?`${s}px`:"100%"}}_positionChildren(e){e&&e.forEach(({top:t,left:r,width:s,height:a,xOffset:l,yOffset:p},f)=>{const n=this._children[f-this._first];n&&(n.style.position="absolute",n.style.boxSizing="border-box",n.style.transform=`translate(${r}px, ${t}px)`,s!==void 0&&(n.style.width=s+"px"),a!==void 0&&(n.style.height=a+"px"),n.style.left=l===void 0?null:l+"px",n.style.top=p===void 0?null:p+"px")})}async _adjustRange(e){const{_first:t,_last:r,_firstVisible:s,_lastVisible:a}=this;this._first=e.first,this._last=e.last,this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==t||this._last!==r,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==s||this._lastVisible!==a}_correctScrollError(){if(this._scrollError){const{scrollTop:e,scrollLeft:t}=this._scrollerController,{top:r,left:s}=this._scrollError;this._scrollError=null,this._scrollerController.correctScrollError({top:e-r,left:t-s})}}element(e){var t;return e===1/0&&(e=this._items.length-1),((t=this._items)===null||t===void 0?void 0:t[e])===void 0?void 0:{scrollIntoView:(r={})=>this._scrollElementIntoView({...r,index:e})}}_scrollElementIntoView(e){if(e.index>=this._first&&e.index<=this._last)this._children[e.index-this._first].scrollIntoView(e);else if(e.index=Math.min(e.index,this._items.length-1),e.behavior==="smooth"){const t=this._layout.getScrollIntoViewCoordinates(e),{behavior:r}=e;this._updateScrollIntoViewCoordinates=this._scrollerController.managedScrollTo(Object.assign(t,{behavior:r}),()=>this._layout.getScrollIntoViewCoordinates(e),()=>this._scrollIntoViewTarget=null),this._scrollIntoViewTarget=e}else this._layout.pin=e}_checkScrollIntoViewTarget(e){const{index:t}=this._scrollIntoViewTarget||{};t&&(e!=null&&e.has(t))&&this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget))}_notifyRange(){this._hostElement.dispatchEvent(new N({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new S({first:this._firstVisible,last:this._lastVisible}))}get layoutComplete(){return this._layoutCompletePromise||(this._layoutCompletePromise=new Promise((e,t)=>{this._layoutCompleteResolver=e,this._layoutCompleteRejecter=t})),this._layoutCompletePromise}_rejectLayoutCompletePromise(e){this._layoutCompleteRejecter!==null&&this._layoutCompleteRejecter(e),this._resetLayoutCompleteState()}_scheduleLayoutComplete(){this._layoutCompletePromise&&this._pendingLayoutComplete===null&&(this._pendingLayoutComplete=requestAnimationFrame(()=>requestAnimationFrame(()=>this._resolveLayoutCompletePromise())))}_resolveLayoutCompletePromise(){this._layoutCompleteResolver!==null&&this._layoutCompleteResolver(),this._resetLayoutCompleteState()}_resetLayoutCompleteState(){this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null}_hostElementSizeChanged(){this._schedule(this._updateLayout)}_childLoaded(){}_childrenSizeChanged(e){if(this._layout.measureChildren){for(const t of e)this._toBeMeasured.set(t.target,t.contentRect);this._measureChildren()}this._scheduleLayoutComplete(),this._itemsChanged=!1,this._rangeChanged=!1}}function De(i){const e=window.getComputedStyle(i);return{marginTop:I(e.marginTop),marginRight:I(e.marginRight),marginBottom:I(e.marginBottom),marginLeft:I(e.marginLeft)}}function I(i){const e=i?parseFloat(i):NaN;return Number.isNaN(e)?0:e}function U(i){if(i.assignedSlot!==null)return i.assignedSlot;if(i.parentElement!==null)return i.parentElement;const e=i.parentNode;return e&&e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host||null}function Me(i,e=!1){const t=[];let r=e?i:U(i);for(;r!==null;)t.push(r),r=U(r);return t}function He(i,e=!1){return Me(i,e).filter(t=>getComputedStyle(t).overflow!=="visible")}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pe=i=>i,Be=(i,e)=>c`${e}: ${JSON.stringify(i,null,2)}`;class je extends me{constructor(e){if(super(e),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(t,r)=>Be(t,r+this._first),this._keyFunction=(t,r)=>Pe(t,r+this._first),this._items=[],e.type!==pe.CHILD)throw new Error("The virtualize directive can only be used in child expressions")}render(e){e&&this._setFunctions(e);const t=[],r=Math.min(this._items.length,this._last+1);if(this._first>=0&&this._last>=this._first)for(let s=this._first;s<r;s++)t.push(this._items[s]);return be(t,this._keyFunction,this._renderItem)}update(e,[t]){return this._setFunctions(t),this._items=t.items||[],this._virtualizer?this._updateVirtualizerConfig(e,t):this._initialize(e,t),this.render()}_updateVirtualizerConfig(e,t){if(!this._virtualizer.updateLayoutConfig(t.layout||{})){const s=e.parentNode;this._makeVirtualizer(s,t)}this._virtualizer.items=this._items}_setFunctions(e){const{renderItem:t,keyFunction:r}=e;t&&(this._renderItem=(s,a)=>t(s,a+this._first)),r&&(this._keyFunction=(s,a)=>r(s,a+this._first))}_makeVirtualizer(e,t){this._virtualizer&&this._virtualizer.disconnected();const{layout:r,scroller:s,items:a}=t;this._virtualizer=new Ve({hostElement:e,layout:r,scroller:s}),this._virtualizer.items=a,this._virtualizer.connected()}_initialize(e,t){const r=e.parentNode;r&&r.nodeType===1&&(r.addEventListener("rangeChanged",s=>{s.stopPropagation(),this._first=s.first,this._last=s.last,this.setValue(this.render())}),this._makeVirtualizer(r,t))}disconnected(){var e;(e=this._virtualizer)===null||e===void 0||e.disconnected()}reconnected(){var e;(e=this._virtualizer)===null||e===void 0||e.connected()}}const Ne=he(je);var qe=Object.defineProperty,Fe=Object.getOwnPropertyDescriptor,x=(i,e,t,r)=>{for(var s=r>1?void 0:r?Fe(e,t):e,a=i.length-1,l;a>=0;a--)(l=i[a])&&(s=(r?l(e,t,s):l(s))||s);return r&&s&&qe(e,t,s),s},We=(i=>(i[i.ITEM=0]="ITEM",i[i.INFORMATION=1]="INFORMATION",i))(We||{});const W=class extends Event{constructor(e){super(W.eventName,{bubbles:!0}),this.first=e.first,this.last=e.last}};let K=W;K.eventName="rangeChanged";class b extends ae(g,{validSizes:["s","m"],defaultSize:"m"}){constructor(){super(...arguments),this._renderItem=()=>c``,this.role="grid",this.selected=[],this.selectedSet=new Set,this.items=[],this.itemValue=(e,t)=>`${t}`,this.scroller=!1}static get styles(){return[Te]}get renderItem(){return this._renderItem}set renderItem(e){this._renderItem=(t,r)=>{const s=this.itemValue(t,r),a=this.selected.includes(s),l=this.selects&&(t==null?void 0:t._$rowType$)!==1;return c`
                <sp-table-row
                    value=${s}
                    aria-rowindex=${r+1}
                    ?selected=${a}
                >
                    ${l?c`
                              <sp-table-checkbox-cell
                                  ?checked=${a}
                              ></sp-table-checkbox-cell>
                          `:c``}
                    ${e(t,r)}
                </sp-table-row>
            `}}get tableHead(){return this.querySelector("sp-table-head")}get tableRows(){return this.isVirtualized?[]:[...this.querySelectorAll("sp-table-row")]}get isVirtualized(){return!!this.items.length}focus(){const e=this.querySelector("sp-table-head-cell[sortable]");e&&e.focus()}selectAllRows(){this.isVirtualized?this.items.forEach((e,t)=>{e._$rowType$!==1&&this.selectedSet.add(this.itemValue(e,t))}):this.tableRows.forEach(e=>{e.selected=!0,this.selectedSet.add(e.value)}),this.selected=[...this.selectedSet],this.tableHeadCheckboxCell&&(this.tableHeadCheckboxCell.checked=!0,this.tableHeadCheckboxCell.indeterminate=!1)}deselectAllRows(){this.selectedSet.clear(),this.selected=[],this.isVirtualized||[...this.querySelectorAll("[selected]")].forEach(e=>{e.selected=!1}),this.tableHeadCheckboxCell&&(this.tableHeadCheckboxCell.checked=!1,this.tableHeadCheckboxCell.indeterminate=!1)}manageSelects(){const e=this.querySelectorAll("sp-table-checkbox-cell"),t=document.createElement("sp-table-checkbox-cell");if(this.selects){let r=!1;this.isVirtualized?r=this.selected.length>0&&this.selected.length===this.items.length:(this.tableRows.forEach(s=>{if(s.selected=this.selectedSet.has(s.value),!s.querySelector(":scope > sp-table-checkbox-cell")){const a=t.cloneNode();s.insertAdjacentElement("afterbegin",a),t.checked=s.selected}}),r=this.selected.length===this.tableRows.length),this.tableHeadCheckboxCell||(this.tableHeadCheckboxCell=document.createElement("sp-table-checkbox-cell"),this.tableHead.insertAdjacentElement("afterbegin",this.tableHeadCheckboxCell)),this.manageHeadCheckbox(r)}else e.forEach(r=>{r.remove()}),delete this.tableHeadCheckboxCell}validateSelected(){const e=new Set;this.isVirtualized?this.items.forEach((r,s)=>{const a=this.itemValue(r,s);e.add(a)}):this.tableRows.forEach(r=>{e.add(r.value)});const t=this.selected.length;this.selected=this.selected.filter(r=>e.has(r)),t!==this.selected.length&&this.dispatchEvent(new Event("change",{cancelable:!0,bubbles:!0,composed:!0})),this.selectedSet=new Set(this.selected)}manageSelected(){this.validateSelected(),!this.isVirtualized&&(this.tableRows.forEach(e=>{e.selected=this.selectedSet.has(e.value)}),this.tableHeadCheckboxCell&&(this.tableHeadCheckboxCell.checked=this.selected.length===this.tableRows.length))}manageCheckboxes(){var e;if(this.selects){this.tableHeadCheckboxCell=document.createElement("sp-table-checkbox-cell");const t=this.selected.length===this.tableRows.length;this.manageHeadCheckbox(t),this.tableHead.insertAdjacentElement("afterbegin",this.tableHeadCheckboxCell),this.tableRows.forEach(r=>{const s=document.createElement("sp-table-checkbox-cell");r.insertAdjacentElement("afterbegin",s),r.selected=this.selectedSet.has(r.value),s.checked=r.selected})}else(e=this.tableHead.querySelector("sp-table-checkbox-cell"))==null||e.remove(),this.tableRows.forEach(t=>{var r;(r=t.checkboxCells[0])==null||r.remove(),this.selected.length&&(t.selected=this.selectedSet.has(t.value))})}manageHeadCheckbox(e){this.tableHeadCheckboxCell&&(this.tableHeadCheckboxCell.selectsSingle=this.selects==="single",this.tableHeadCheckboxCell.checked=e,this.tableHeadCheckboxCell.indeterminate=this.selected.length>0&&!e)}handleChange(e){e.stopPropagation();const t=new Set(this.selectedSet),r=[...this.selected],{target:s}=e,{parentElement:a}=s;if(a.value)switch(this.selects){case"single":{this.deselectAllRows(),a.selected&&(this.selectedSet.add(a.value),this.selected=[...this.selectedSet]);break}case"multiple":{a.selected?this.selectedSet.add(a.value):this.selectedSet.delete(a.value),this.selected=[...this.selectedSet];const l=this.selected.length===this.tableRows.length;if(!this.tableHeadCheckboxCell)return;this.tableHeadCheckboxCell.checked=l,this.tableHeadCheckboxCell.indeterminate=this.selected.length>0&&!l;break}}else{const{checkbox:l}=s;if(!l)return;l.checked||l.indeterminate?this.selectAllRows():this.deselectAllRows()}this.dispatchEvent(new Event("change",{cancelable:!0,bubbles:!0,composed:!0}))||(e.preventDefault(),this.selectedSet=t,this.selected=r)}scrollToIndex(e){if(e&&this.tableBody){const t=this.tableBody[F].element(e);t&&t.scrollIntoView()}}render(){return c`
            <slot @change=${this.handleChange}></slot>
        `}willUpdate(e){this.hasUpdated||(this.validateSelected(),this.manageCheckboxes()),e.has("selects")&&this.manageSelects(),e.has("selected")&&this.hasUpdated&&this.manageSelected()}updated(){this.items.length&&this.renderVirtualizedItems()}renderVirtualizedItems(){if(!this.isConnected)return;this.tableBody||(this.tableBody=this.querySelector("sp-table-body"),this.tableBody||(this.tableBody=document.createElement("sp-table-body"),this.append(this.tableBody)),this.tableBody.addEventListener("rangeChanged",t=>{this.dispatchEvent(new K({first:t.first,last:t.last}))}));const e={items:this.items,renderItem:this.renderItem,scroller:this.scroller};te(c`
                ${Ne(e)}
            `,this.tableBody)}disconnectedCallback(){super.disconnectedCallback()}}x([o({reflect:!0})],b.prototype,"role",2),x([o({type:String,reflect:!0})],b.prototype,"selects",2),x([o({type:Array})],b.prototype,"selected",2),x([o({type:Array})],b.prototype,"items",2),x([o({type:Object})],b.prototype,"itemValue",2),x([o({type:Boolean,reflect:!0})],b.prototype,"scroller",2);customElements.define("sp-table",b);var Ke=Object.defineProperty,Je=Object.getOwnPropertyDescriptor,Ge=(i,e,t,r)=>{for(var s=r>1?void 0:r?Je(e,t):e,a=i.length-1,l;a>=0;a--)(l=i[a])&&(s=(r?l(e,t,s):l(s))||s);return r&&s&&Ke(e,t,s),s};class J extends g{constructor(){super(...arguments),this.role="gridcell"}static get styles(){return[H]}render(){return c`
            <slot></slot>
        `}}Ge([o({reflect:!0})],J.prototype,"role",2);customElements.define("sp-table-cell",J);const Xe=h`
:host{display:flex}
`,Ye=Xe;var Ze=Object.defineProperty,Qe=Object.getOwnPropertyDescriptor,V=(i,e,t,r)=>{for(var s=r>1?void 0:r?Qe(e,t):e,a=i.length-1,l;a>=0;a--)(l=i[a])&&(s=(r?l(e,t,s):l(s))||s);return r&&s&&Ze(e,t,s),s};class $ extends g{constructor(){super(...arguments),this.role="row"}static get styles(){return[Ye]}handleSorted({target:e}){[...this.children].forEach(t=>{t!==e&&(t.sortDirection=void 0)})}handleChange({target:e}){this.selected=e.checkbox.checked||e.checkbox.indeterminate}render(){return c`
            <slot
                @sorted=${this.handleSorted}
                @change=${this.handleChange}
            ></slot>
        `}}V([o({reflect:!0})],$.prototype,"role",2),V([o({type:Boolean,reflect:!0})],$.prototype,"selected",2);customElements.define("sp-table-head",$);const et=({width:i=24,height:e=24,title:t="Arrow100"}={})=>le`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    aria-hidden="true"
    role="img"
    fill="currentColor"
    aria-label=${t}
    width=${i}
    height=${e}
  >
    <path
      d="M9.7 4.387L6.623 1.262a.875.875 0 10-1.247 1.226l1.61 1.637H.925a.875.875 0 000 1.75h6.062l-1.61 1.637a.875.875 0 101.247 1.226l3.075-3.125a.874.874 0 000-1.226z"
    />
  </svg>`;class tt extends oe{render(){return ce(c),et()}}customElements.define("sp-icon-arrow100",tt);const rt=h`
.spectrum-UIIcon-ArrowDown100,.spectrum-UIIcon-ArrowDown200,.spectrum-UIIcon-ArrowDown300,.spectrum-UIIcon-ArrowDown400,.spectrum-UIIcon-ArrowDown500,.spectrum-UIIcon-ArrowDown600,.spectrum-UIIcon-ArrowDown75{transform:rotate(90deg)}.spectrum-UIIcon-ArrowLeft100,.spectrum-UIIcon-ArrowLeft200,.spectrum-UIIcon-ArrowLeft300,.spectrum-UIIcon-ArrowLeft400,.spectrum-UIIcon-ArrowLeft500,.spectrum-UIIcon-ArrowLeft600,.spectrum-UIIcon-ArrowLeft75{transform:rotate(180deg)}.spectrum-UIIcon-ArrowUp100,.spectrum-UIIcon-ArrowUp200,.spectrum-UIIcon-ArrowUp300,.spectrum-UIIcon-ArrowUp400,.spectrum-UIIcon-ArrowUp500,.spectrum-UIIcon-ArrowUp600,.spectrum-UIIcon-ArrowUp75{transform:rotate(270deg)}.spectrum-UIIcon-ArrowDown75,.spectrum-UIIcon-ArrowLeft75,.spectrum-UIIcon-ArrowRight75,.spectrum-UIIcon-ArrowUp75{height:var(--spectrum-alias-ui-icon-arrow-size-75);width:var(--spectrum-alias-ui-icon-arrow-size-75)}.spectrum-UIIcon-ArrowDown100,.spectrum-UIIcon-ArrowLeft100,.spectrum-UIIcon-ArrowRight100,.spectrum-UIIcon-ArrowUp100{height:var(--spectrum-alias-ui-icon-arrow-size-100);width:var(--spectrum-alias-ui-icon-arrow-size-100)}.spectrum-UIIcon-ArrowDown200,.spectrum-UIIcon-ArrowLeft200,.spectrum-UIIcon-ArrowRight200,.spectrum-UIIcon-ArrowUp200{height:var(--spectrum-alias-ui-icon-arrow-size-200);width:var(--spectrum-alias-ui-icon-arrow-size-200)}.spectrum-UIIcon-ArrowDown300,.spectrum-UIIcon-ArrowLeft300,.spectrum-UIIcon-ArrowRight300,.spectrum-UIIcon-ArrowUp300{height:var(--spectrum-alias-ui-icon-arrow-size-300);width:var(--spectrum-alias-ui-icon-arrow-size-300)}.spectrum-UIIcon-ArrowDown400,.spectrum-UIIcon-ArrowLeft400,.spectrum-UIIcon-ArrowRight400,.spectrum-UIIcon-ArrowUp400{height:var(--spectrum-alias-ui-icon-arrow-size-400);width:var(--spectrum-alias-ui-icon-arrow-size-400)}.spectrum-UIIcon-ArrowDown500,.spectrum-UIIcon-ArrowLeft500,.spectrum-UIIcon-ArrowRight500,.spectrum-UIIcon-ArrowUp500{height:var(--spectrum-alias-ui-icon-arrow-size-500);width:var(--spectrum-alias-ui-icon-arrow-size-500)}.spectrum-UIIcon-ArrowDown600,.spectrum-UIIcon-ArrowLeft600,.spectrum-UIIcon-ArrowRight600,.spectrum-UIIcon-ArrowUp600{height:var(--spectrum-alias-ui-icon-arrow-size-600);width:var(--spectrum-alias-ui-icon-arrow-size-600)}
`,st=rt;var it=Object.defineProperty,at=Object.getOwnPropertyDescriptor,E=(i,e,t,r)=>{for(var s=r>1?void 0:r?at(e,t):e,a=i.length-1,l;a>=0;a--)(l=i[a])&&(s=(r?l(e,t,s):l(s))||s);return r&&s&&it(e,t,s),s};const lt=i=>({asc:"ascending",desc:"descending"})[i]||"none";class k extends g{constructor(){super(...arguments),this.role="columnheader",this.sortable=!1,this.sortKey=""}static get styles(){return[P,st]}handleClick(){this.sortable&&(this.sortDirection?this.sortDirection=this.sortDirection==="asc"?"desc":"asc":this.sortDirection="asc",this.dispatchEvent(new CustomEvent("sorted",{bubbles:!0,detail:{sortDirection:this.sortDirection,sortKey:this.sortKey}})))}render(){const e=this.sortable&&!!this.sortDirection;return c`
            <slot></slot>
            ${e?c`
                      <sp-icon-arrow100
                          class="sortedIcon spectrum-UIIcon-ArrowDown100"
                      ></sp-icon-arrow100>
                  `:c``}
        `}firstUpdated(e){super.firstUpdated(e),this.addEventListener("click",this.handleClick)}update(e){e.has("sortDirection")&&this.setAttribute("aria-sort",lt(this.sortDirection)),e.has("sortable")&&(this.tabIndex=this.sortable?0:-1),super.update(e)}}E([o({reflect:!0})],k.prototype,"role",2),E([o({type:Boolean,reflect:!0})],k.prototype,"sortable",2),E([o({reflect:!0,attribute:"sort-direction"})],k.prototype,"sortDirection",2),E([o({attribute:"sort-key"})],k.prototype,"sortKey",2);customElements.define("sp-table-head-cell",k);var ot=Object.defineProperty,ct=Object.getOwnPropertyDescriptor,v=(i,e,t,r)=>{for(var s=r>1?void 0:r?ct(e,t):e,a=i.length-1,l;a>=0;a--)(l=i[a])&&(s=(r?l(e,t,s):l(s))||s);return r&&s&&ot(e,t,s),s};let u=class extends ne{constructor(){super(...arguments),this.maxw="100%",this.pagination=!1,this.pageSize=10,this.page=0}resetPage(){this.page=0}connectedCallback(){super.connectedCallback(),this.addEventListener("property-changed",i=>{i.detail.name==="data"&&this.resetPage()})}renderHeader(i){return c`
      ${i.map(e=>c` <sp-table-head-cell> ${e} </sp-table-head-cell> `)}
    `}renderRows(i,e){return e?c`
      ${i.map(t=>c`
          <sp-table-row
            >${e.map(r=>c`<sp-table-cell>${t[r]}</sp-table-cell>`)}
          </sp-table-row>
        `)}
    `:c``}renderPagination(i){const e=[...Array(i).keys()],t=()=>this.page=this.page===i?i:this.page+1;return c`
      <sp-action-group size="sm">
        <sp-action-button @click=${()=>this.page=this.page===0?0:this.page-1}>Previous Page</sp-action-button>

        <sp-action-menu size="m">
          <span slot="label">Page ${this.page+1} / ${i}</span>
          ${e.map(s=>c`<sp-menu-item @click=${()=>this.page=s}> ${s+1} </sp-menu-item>`)}
        </sp-action-menu>
        <sp-action-button @click=${t}>Next Page</sp-action-button>
      </sp-action-group>
    `}template(){var t,r;if(!((t=this.data)!=null&&t.length)||!((r=this.columns)!=null&&r.length))return this.preloader();const i=this.pagination?this.data.slice(this.page*this.pageSize,(this.page+1)*this.pageSize):this.data,e=Math.ceil(this.data.length/this.pageSize);return c`
      <div>
        <osl-flex-box breakpoint="xl"><div>
        <h3>${this.title}</h3></div>
        <div>
        ${this.pagination?this.renderPagination(e):""}</div>
      </osl-flex-box>
        <div style="max-width:100vw; overflow-x:auto;">
          <sp-table style="width:${this.maxw}">
            <sp-table-head> ${this.renderHeader(this.columns)} </sp-table-head>
            <sp-table-body>
              ${this.renderRows(i,this.columns)}
            </sp-table-body>
          </sp-table>
        </div>
      </div>
    `}};v([o({converter:M})],u.prototype,"columns",2);v([o({converter:M})],u.prototype,"data",2);v([o({type:String})],u.prototype,"maxw",2);v([o({type:Boolean})],u.prototype,"pagination",2);v([o({type:Number})],u.prototype,"pageSize",2);v([o({type:Number})],u.prototype,"page",2);u=v([se("osl-table")],u);
//# sourceMappingURL=Table-4e14750b.js.map
