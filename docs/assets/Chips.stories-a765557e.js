import{i as Oo,x as J}from"./lit-element-47511895.js";import{n as Wr,s as kp}from"./safeCustomElement-f1504f3f.js";import{O as yp}from"./Interface-70c6c183.js";import{F as Ap}from"./focus-visible-4092edd3.js";import{R as zp}from"./RovingTabindex-e989c6f6.js";import{I as Tp,S as Cp}from"./spectrum-icon-cross.css-7c034bb2.js";import{a as kc,S as yc,I as Sp}from"./ValtioElement-af4c0565.js";import{o as Ip}from"./query-assigned-nodes-b5cd026e.js";import{a as Ep}from"./Textfield-3e258ce5.js";import"./sp-action-button-d2a6278f.js";import{t as Lp,s as Rp}from"./sp-icon-alert-c2c8caf1.js";import{c as se}from"./_commonjsHelpers-725317a4.js";import"./converters-40be0569.js";import"./iframe-b912c67f.js";import"../sb-preview/runtime.js";import"./ButtonBase-6b15501f.js";import"./like-anchor-18458c06.js";import"./if-defined-92735e40.js";import"./focusable-6e37aff0.js";import"./observe-slot-text-9cba5849.js";import"./mutation_controller-e745007b.js";import"./manage-help-text-f7a9171f.js";import"./spectrum-icon-checkmark.css-89242d34.js";import"./directive-12249aa5.js";import"./directive-helpers-874877ed.js";import"./state-8f8de3d4.js";const Bp=Oo`
:host{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;align-items:center;-webkit-appearance:button;border-style:solid;box-sizing:border-box;cursor:pointer;display:inline-flex;font-family:var(
--spectrum-alias-body-text-font-family,var(--spectrum-global-font-family-base)
);justify-content:center;line-height:var(
--spectrum-alias-component-text-line-height,var(--spectrum-global-font-line-height-small)
);overflow:visible;position:relative;text-decoration:none;text-transform:none;transition:background var(--spectrum-global-animation-duration-100,.13s) ease-out,border-color var(--spectrum-global-animation-duration-100,.13s) ease-out,color var(--spectrum-global-animation-duration-100,.13s) ease-out,box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-out;-webkit-user-select:none;user-select:none;vertical-align:top}:host(:focus){outline:none}:host([disabled]){cursor:default}:host{background-color:#0000;border:none;border-radius:100%;margin:0;padding:var(--spectrum-clearbutton-padding)}.icon{margin:0 auto}:host([size=s]){--spectrum-clearbutton-fill-uiicon-color-disabled:var(
--spectrum-clearbutton-s-fill-uiicon-color-disabled,var(--spectrum-alias-component-icon-color-disabled)
);--spectrum-clearbutton-fill-background-color-disabled:var(
--spectrum-clearbutton-s-fill-background-color-disabled,var(--spectrum-alias-background-color-transparent)
);--spectrum-clearbutton-fill-uiicon-color:var(
--spectrum-clearbutton-s-fill-uiicon-color,var(--spectrum-alias-component-icon-color-default)
);--spectrum-clearbutton-fill-background-color:var(
--spectrum-clearbutton-s-fill-background-color,var(
--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-default
)
);--spectrum-clearbutton-fill-uiicon-color-down:var(
--spectrum-clearbutton-s-fill-uiicon-color-down,var(--spectrum-alias-component-icon-color-down)
);--spectrum-clearbutton-fill-background-color-down:var(
--spectrum-clearbutton-s-fill-background-color-down,var(
--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-down
)
);--spectrum-clearbutton-fill-background-color-hover:var(
--spectrum-clearbutton-s-fill-background-color-hover,var(
--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-hover
)
);--spectrum-clearbutton-fill-uiicon-color-key-focus:var(
--spectrum-clearbutton-s-fill-uiicon-color-key-focus,var(--spectrum-alias-component-icon-color-key-focus)
);--spectrum-clearbutton-fill-background-color-key-focus:var(
--spectrum-clearbutton-s-fill-background-color-key-focus,var(
--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-key-focus
)
);--spectrum-clearbutton-fill-size:var(
--spectrum-clearbutton-s-fill-size,var(--spectrum-alias-infieldbutton-full-height-s)
);--spectrum-clearbutton-padding:var(
--spectrum-clearbutton-s-padding,var(--spectrum-alias-infieldbutton-padding-s)
)}:host([size=m]){--spectrum-clearbutton-fill-uiicon-color-disabled:var(
--spectrum-clearbutton-m-fill-uiicon-color-disabled,var(--spectrum-alias-component-icon-color-disabled)
);--spectrum-clearbutton-fill-background-color-disabled:var(
--spectrum-clearbutton-m-fill-background-color-disabled,var(--spectrum-alias-background-color-transparent)
);--spectrum-clearbutton-fill-uiicon-color:var(
--spectrum-clearbutton-m-fill-uiicon-color,var(--spectrum-alias-component-icon-color-default)
);--spectrum-clearbutton-fill-background-color:var(
--spectrum-clearbutton-m-fill-background-color,var(
--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-default
)
);--spectrum-clearbutton-fill-uiicon-color-down:var(
--spectrum-clearbutton-m-fill-uiicon-color-down,var(--spectrum-alias-component-icon-color-down)
);--spectrum-clearbutton-fill-background-color-down:var(
--spectrum-clearbutton-m-fill-background-color-down,var(
--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-down
)
);--spectrum-clearbutton-fill-background-color-hover:var(
--spectrum-clearbutton-m-fill-background-color-hover,var(
--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-hover
)
);--spectrum-clearbutton-fill-uiicon-color-key-focus:var(
--spectrum-clearbutton-m-fill-uiicon-color-key-focus,var(--spectrum-alias-component-icon-color-key-focus)
);--spectrum-clearbutton-fill-background-color-key-focus:var(
--spectrum-clearbutton-m-fill-background-color-key-focus,var(
--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-key-focus
)
);--spectrum-clearbutton-fill-size:var(
--spectrum-clearbutton-m-fill-size,var(--spectrum-alias-infieldbutton-full-height-m)
);--spectrum-clearbutton-padding:var(
--spectrum-clearbutton-m-padding,var(--spectrum-alias-infieldbutton-padding-m)
)}:host([size=l]){--spectrum-clearbutton-fill-uiicon-color-disabled:var(
--spectrum-clearbutton-l-fill-uiicon-color-disabled,var(--spectrum-alias-component-icon-color-disabled)
);--spectrum-clearbutton-fill-background-color-disabled:var(
--spectrum-clearbutton-l-fill-background-color-disabled,var(--spectrum-alias-background-color-transparent)
);--spectrum-clearbutton-fill-uiicon-color:var(
--spectrum-clearbutton-l-fill-uiicon-color,var(--spectrum-alias-component-icon-color-default)
);--spectrum-clearbutton-fill-background-color:var(
--spectrum-clearbutton-l-fill-background-color,var(
--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-default
)
);--spectrum-clearbutton-fill-uiicon-color-down:var(
--spectrum-clearbutton-l-fill-uiicon-color-down,var(--spectrum-alias-component-icon-color-down)
);--spectrum-clearbutton-fill-background-color-down:var(
--spectrum-clearbutton-l-fill-background-color-down,var(
--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-down
)
);--spectrum-clearbutton-fill-background-color-hover:var(
--spectrum-clearbutton-l-fill-background-color-hover,var(
--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-hover
)
);--spectrum-clearbutton-fill-uiicon-color-key-focus:var(
--spectrum-clearbutton-l-fill-uiicon-color-key-focus,var(--spectrum-alias-component-icon-color-key-focus)
);--spectrum-clearbutton-fill-background-color-key-focus:var(
--spectrum-clearbutton-l-fill-background-color-key-focus,var(
--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-key-focus
)
);--spectrum-clearbutton-fill-size:var(
--spectrum-clearbutton-l-fill-size,var(--spectrum-alias-infieldbutton-full-height-l)
);--spectrum-clearbutton-padding:var(
--spectrum-clearbutton-l-padding,var(--spectrum-alias-infieldbutton-padding-l)
)}:host([size=xl]){--spectrum-clearbutton-fill-uiicon-color-disabled:var(
--spectrum-clearbutton-xl-fill-uiicon-color-disabled,var(--spectrum-alias-component-icon-color-disabled)
);--spectrum-clearbutton-fill-background-color-disabled:var(
--spectrum-clearbutton-xl-fill-background-color-disabled,var(--spectrum-alias-background-color-transparent)
);--spectrum-clearbutton-fill-uiicon-color:var(
--spectrum-clearbutton-xl-fill-uiicon-color,var(--spectrum-alias-component-icon-color-default)
);--spectrum-clearbutton-fill-background-color:var(
--spectrum-clearbutton-xl-fill-background-color,var(
--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-default
)
);--spectrum-clearbutton-fill-uiicon-color-down:var(
--spectrum-clearbutton-xl-fill-uiicon-color-down,var(--spectrum-alias-component-icon-color-down)
);--spectrum-clearbutton-fill-background-color-down:var(
--spectrum-clearbutton-xl-fill-background-color-down,var(
--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-down
)
);--spectrum-clearbutton-fill-background-color-hover:var(
--spectrum-clearbutton-xl-fill-background-color-hover,var(
--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-hover
)
);--spectrum-clearbutton-fill-uiicon-color-key-focus:var(
--spectrum-clearbutton-xl-fill-uiicon-color-key-focus,var(--spectrum-alias-component-icon-color-key-focus)
);--spectrum-clearbutton-fill-background-color-key-focus:var(
--spectrum-clearbutton-xl-fill-background-color-key-focus,var(
--spectrum-alias-infieldbutton-fill-loudnessLow-background-color-key-focus
)
);--spectrum-clearbutton-fill-size:var(
--spectrum-clearbutton-xl-fill-size,var(--spectrum-alias-infieldbutton-full-height-xl)
);--spectrum-clearbutton-padding:var(
--spectrum-clearbutton-xl-padding,var(--spectrum-alias-infieldbutton-padding-xl)
)}.fill{align-items:center;background-color:var(--spectrum-clearbutton-fill-background-color);border-radius:100%;display:flex;height:var(--spectrum-clearbutton-fill-size);justify-content:center;width:var(--spectrum-clearbutton-fill-size)}:host{color:var(
--spectrum-clearbutton-m-fill-uiicon-color,var(--spectrum-alias-component-icon-color-default)
)}:host(:hover){color:var(--spectrum-clearbutton-fill-uiicon-color)}:host([active]){color:var(--spectrum-clearbutton-fill-uiicon-color-down)}:host(.focus-visible){color:var(--spectrum-clearbutton-fill-uiicon-color-key-focus)}:host(.focus-visible){color:var(--spectrum-clearbutton-fill-uiicon-color-key-focus)}:host(:focus-visible){color:var(--spectrum-clearbutton-fill-uiicon-color-key-focus)}:host([disabled]){color:var(--spectrum-clearbutton-fill-uiicon-color-disabled)}:host(:hover) .fill{background-color:var(--spectrum-clearbutton-fill-background-color-hover)}:host([active]) .fill{background-color:var(--spectrum-clearbutton-fill-background-color-down)}:host(.focus-visible) .fill{background-color:var(
--spectrum-clearbutton-fill-background-color-key-focus
)}:host(.focus-visible) .fill{background-color:var(
--spectrum-clearbutton-fill-background-color-key-focus
)}:host(:focus-visible) .fill{background-color:var(
--spectrum-clearbutton-fill-background-color-key-focus
)}:host([disabled]) .fill{background-color:var(
--spectrum-clearbutton-fill-background-color-disabled
)}:host([variant=overBackground]){color:var(
--spectrum-alias-icon-color-overbackground,var(--spectrum-global-color-static-white)
)}:host([variant=overBackground]:hover){color:var(
--spectrum-alias-icon-color-overbackground,var(--spectrum-global-color-static-white)
)}:host([variant=overBackground][active]){color:var(
--spectrum-alias-icon-color-overbackground,var(--spectrum-global-color-static-white)
)}:host([variant=overBackground].focus-visible){color:var(
--spectrum-alias-icon-color-overbackground,var(--spectrum-global-color-static-white)
)}:host([variant=overBackground].focus-visible){color:var(
--spectrum-alias-icon-color-overbackground,var(--spectrum-global-color-static-white)
)}:host([variant=overBackground]:focus-visible){color:var(
--spectrum-alias-icon-color-overbackground,var(--spectrum-global-color-static-white)
)}:host([variant=overBackground][disabled]),:host([variant=overBackground][disabled]) .fill{background-color:var(
--spectrum-alias-icon-color-overbackground-disabled,#fff3
)}:host([variant=overBackground]){background-color:var(
--spectrum-button-m-primary-outline-white-texticon-background-color,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-button-m-primary-outline-white-texticon-border-color,var(--spectrum-global-color-static-white)
);color:var(
--spectrum-button-m-primary-outline-white-texticon-text-color,var(--spectrum-global-color-static-white)
)}:host([variant=overBackground]:hover){background-color:var(
--spectrum-button-m-primary-outline-white-texticon-background-color-hover,var(--spectrum-global-color-static-transparent-white-300)
);border-color:var(
--spectrum-button-m-primary-outline-white-texticon-border-color-hover,var(--spectrum-global-color-static-white)
);color:var(
--spectrum-button-m-primary-outline-white-texticon-text-color-hover,var(--spectrum-global-color-static-white)
)}:host([variant=overBackground].focus-visible){background-color:var(
--spectrum-button-m-primary-outline-white-texticon-background-color-hover,var(--spectrum-global-color-static-transparent-white-300)
);border-color:var(
--spectrum-button-m-primary-outline-white-texticon-border-color-hover,var(--spectrum-global-color-static-white)
);box-shadow:none;color:var(
--spectrum-button-m-primary-outline-white-texticon-text-color-hover,var(--spectrum-global-color-static-white)
)}:host([variant=overBackground].focus-visible){background-color:var(
--spectrum-button-m-primary-outline-white-texticon-background-color-hover,var(--spectrum-global-color-static-transparent-white-300)
);border-color:var(
--spectrum-button-m-primary-outline-white-texticon-border-color-hover,var(--spectrum-global-color-static-white)
);box-shadow:none;color:var(
--spectrum-button-m-primary-outline-white-texticon-text-color-hover,var(--spectrum-global-color-static-white)
)}:host([variant=overBackground]:focus-visible){background-color:var(
--spectrum-button-m-primary-outline-white-texticon-background-color-hover,var(--spectrum-global-color-static-transparent-white-300)
);border-color:var(
--spectrum-button-m-primary-outline-white-texticon-border-color-hover,var(--spectrum-global-color-static-white)
);box-shadow:none;color:var(
--spectrum-button-m-primary-outline-white-texticon-text-color-hover,var(--spectrum-global-color-static-white)
)}:host([variant=overBackground].focus-visible):after{box-shadow:0 0 0 var(
--spectrum-alias-focus-ring-size,var(--spectrum-global-dimension-static-size-25)
) var(
--spectrum-button-m-primary-outline-white-texticon-border-color-key-focus,var(--spectrum-global-color-static-white)
)}:host([variant=overBackground].focus-visible):after{box-shadow:0 0 0 var(
--spectrum-alias-focus-ring-size,var(--spectrum-global-dimension-static-size-25)
) var(
--spectrum-button-m-primary-outline-white-texticon-border-color-key-focus,var(--spectrum-global-color-static-white)
)}:host([variant=overBackground]:focus-visible):after{box-shadow:0 0 0 var(
--spectrum-alias-focus-ring-size,var(--spectrum-global-dimension-static-size-25)
) var(
--spectrum-button-m-primary-outline-white-texticon-border-color-key-focus,var(--spectrum-global-color-static-white)
)}:host([variant=overBackground][active]){background-color:var(
--spectrum-button-m-primary-outline-white-texticon-background-color-down,var(--spectrum-global-color-static-transparent-white-400)
);border-color:var(
--spectrum-button-m-primary-outline-white-texticon-border-color-down,var(--spectrum-global-color-static-white)
);color:var(
--spectrum-button-m-primary-outline-white-texticon-text-color-down,var(--spectrum-global-color-static-white)
)}:host([variant=overBackground][disabled]){background-color:var(
--spectrum-button-m-primary-outline-white-texticon-background-color-disabled,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-button-m-primary-outline-white-texticon-border-color-disabled,var(--spectrum-global-color-static-transparent-white-200)
);color:var(
--spectrum-button-m-primary-outline-white-texticon-text-color-disabled,var(--spectrum-global-color-static-transparent-white-500)
)}@media (-ms-high-contrast:none),screen and (-ms-high-contrast:active){.icon{margin:0}}@media (forced-colors:active){:host{--spectrum-alias-icon-color-overbackground:ButtonText;--spectrum-alias-icon-color-overbackground-disabled:GrayText;--spectrum-button-m-primary-outline-white-texticon-background-color:ButtonFace;--spectrum-button-m-primary-outline-white-texticon-background-color-disabled:ButtonFace;--spectrum-button-m-primary-outline-white-texticon-background-color-down:ButtonFace;--spectrum-button-m-primary-outline-white-texticon-background-color-hover:ButtonFace;--spectrum-button-m-primary-outline-white-texticon-border-color:ButtonText;--spectrum-button-m-primary-outline-white-texticon-border-color-disabled:GrayText;--spectrum-button-m-primary-outline-white-texticon-border-color-down:ButtonText;--spectrum-button-m-primary-outline-white-texticon-border-color-hover:ButtonText;--spectrum-button-m-primary-outline-white-texticon-border-color-key-focus:ButtonText;--spectrum-button-m-primary-outline-white-texticon-text-color:ButtonText;--spectrum-button-m-primary-outline-white-texticon-text-color-disabled:GrayText;--spectrum-button-m-primary-outline-white-texticon-text-color-down:Highlight;--spectrum-button-m-primary-outline-white-texticon-text-color-hover:Highlight;--spectrum-clearbutton-fill-background-color:ButtonFace;--spectrum-clearbutton-fill-background-color-disabled:ButtonFace;--spectrum-clearbutton-fill-background-color-down:ButtonFace;--spectrum-clearbutton-fill-background-color-hover:ButtonFace;--spectrum-clearbutton-fill-background-color-key-focus:ButtonFace;--spectrum-clearbutton-fill-uiicon-color:ButtonText;--spectrum-clearbutton-fill-uiicon-color-disabled:GrayText;--spectrum-clearbutton-fill-uiicon-color-down:Highlight;--spectrum-clearbutton-fill-uiicon-color-key-focus:Highlight;--spectrum-clearbutton-m-fill-uiicon-color:ButtonText}:host(:hover){color:var(--spectrum-clearbutton-fill-uiicon-color-key-focus)}:host([disabled]){color:var(--spectrum-clearbutton-fill-uiicon-color-disabled)}}
`,Op=Bp;var Fp=Object.defineProperty,Pp=Object.getOwnPropertyDescriptor,Wp=(S,w,c,R)=>{for(var A=R>1?void 0:R?Pp(w,c):w,Z=S.length-1,F;Z>=0;Z--)(F=S[Z])&&(A=(R?F(w,c,A):F(A))||A);return R&&A&&Fp(w,c,A),A};const Mp={s:()=>J`
        <sp-icon-cross75
            slot="icon"
            class="icon spectrum-UIIcon-Cross75"
        ></sp-icon-cross75>
    `,m:()=>J`
        <sp-icon-cross100
            slot="icon"
            class="icon spectrum-UIIcon-Cross100"
        ></sp-icon-cross100>
    `,l:()=>J`
        <sp-icon-cross200
            slot="icon"
            class="icon spectrum-UIIcon-Cross200"
        ></sp-icon-cross200>
    `,xl:()=>J`
        <sp-icon-cross300
            slot="icon"
            class="icon spectrum-UIIcon-Cross300"
        ></sp-icon-cross300>
    `};class Ac extends kc(Cp){constructor(){super(...arguments),this.variant=""}static get styles(){return[...super.styles,Op,Tp]}get buttonContent(){return[Mp[this.size]()]}render(){return J`
            <div class="fill">${super.render()}</div>
        `}}Wp([Wr({reflect:!0})],Ac.prototype,"variant",2);customElements.define("sp-clear-button",Ac);const Dp=Oo`
:host{--spectrum-avatar-opacity-disabled:0.3;--spectrum-tag-animation-duration:var(--spectrum-animation-duration-100);--spectrum-tag-border-width:var(--spectrum-border-width-100);--spectrum-tag-focus-ring-thickness:var(
--spectrum-focus-indicator-thickness
);--spectrum-tag-focus-ring-gap:var(--spectrum-focus-indicator-gap);--spectrum-tag-focus-ring-color:var(--spectrum-focus-indicator-color);--spectrum-tag-label-line-height:var(--spectrum-line-height-100);--spectrum-tag-label-font-weight:var(--spectrum-regular-font-weight);--spectrum-tag-content-color-selected:var(--spectrum-white);--spectrum-tag-border-color-invalid:var(--spectrum-negative-color-900);--spectrum-tag-border-color-invalid-hover:var(
--spectrum-negative-color-1000
);--spectrum-tag-border-color-invalid-active:var(
--spectrum-negative-color-1100
);--spectrum-tag-border-color-invalid-focus:var(
--spectrum-negative-color-1000
);--spectrum-tag-content-color-invalid:var(
--spectrum-negative-content-color-default
);--spectrum-tag-content-color-invalid-hover:var(
--spectrum-negative-content-color-hover
);--spectrum-tag-content-color-invalid-active:var(
--spectrum-negative-content-color-down
);--spectrum-tag-content-color-invalid-focus:var(
--spectrum-negative-content-color-key-focus
);--spectrum-tag-border-color-invalid-selected:var(
--spectrum-negative-background-color-default
);--spectrum-tag-border-color-invalid-selected-hover:var(
--spectrum-negative-background-color-hover
);--spectrum-tag-border-color-invalid-selected-focus:var(
--spectrum-negative-background-color-down
);--spectrum-tag-border-color-invalid-selected-active:var(
--spectrum-negative-background-color-key-focus
);--spectrum-tag-background-color-invalid-selected:var(
--spectrum-negative-background-color-default
);--spectrum-tag-background-color-invalid-selected-hover:var(
--spectrum-negative-background-color-hover
);--spectrum-tag-background-color-invalid-selected-active:var(
--spectrum-negative-background-color-down
);--spectrum-tag-background-color-invalid-selected-focus:var(
--spectrum-negative-background-color-key-focus
);--spectrum-tag-content-color-invalid-selected:var(--spectrum-white);--spectrum-tag-border-color-emphasized:var(
--spectrum-accent-background-color-default
);--spectrum-tag-border-color-emphasized-hover:var(
--spectrum-accent-background-color-hover
);--spectrum-tag-border-color-emphasized-active:var(
--spectrum-accent-background-color-down
);--spectrum-tag-border-color-emphasized-focus:var(
--spectrum-accent-background-color-key-focus
);--spectrum-tag-background-color-emphasized:var(
--spectrum-accent-background-color-default
);--spectrum-tag-background-color-emphasized-hover:var(
--spectrum-accent-background-color-hover
);--spectrum-tag-background-color-emphasized-active:var(
--spectrum-accent-background-color-down
);--spectrum-tag-background-color-emphasized-focus:var(
--spectrum-accent-background-color-key-focus
);--spectrum-tag-content-color-emphasized:var(--spectrum-white);--spectrum-tag-content-color-disabled:var(
--spectrum-disabled-content-color
);--spectrum-tag-icon-spacing-inline-end:var(--spectrum-text-to-visual-100);--spectrum-tag-icon-size:var(--spectrum-workflow-icon-size-100);--spectrum-tag-icon-spacing-block-start:var(
--spectrum-component-top-to-workflow-icon-100
);--spectrum-tag-icon-spacing-block-end:var(
--spectrum-component-top-to-workflow-icon-100
);--spectrum-tag-avatar-spacing-block-start:var(
--spectrum-tag-top-to-avatar-medium
);--spectrum-tag-avatar-spacing-block-end:var(
--spectrum-tag-top-to-avatar-medium
);--spectrum-tag-avatar-spacing-inline-end:var(
--spectrum-text-to-visual-100
);--spectrum-tag-label-spacing-block:var(
--spectrum-component-top-to-text-100
);--spectrum-tag-clear-button-spacing-inline-start:var(
--spectrum-text-to-visual-100
);--spectrum-tag-height:var(--spectrum-component-height-100);--spectrum-tag-font-size:var(--spectrum-font-size-100);--spectrum-tag-clear-button-spacing-block:var(
--spectrum-tag-top-to-cross-icon-medium
)}:host([size=s]){--spectrum-tag-height:var(--spectrum-component-height-75);--spectrum-tag-font-size:var(--spectrum-font-size-75);--spectrum-tag-icon-size:var(--spectrum-workflow-icon-size-75);--spectrum-tag-clear-button-spacing-inline-start:var(
--spectrum-text-to-visual-75
);--spectrum-tag-clear-button-spacing-block:var(
--spectrum-tag-top-to-cross-icon-small
);--spectrum-tag-icon-spacing-block-start:var(
--spectrum-component-top-to-workflow-icon-75
);--spectrum-tag-icon-spacing-block-end:var(
--spectrum-component-top-to-workflow-icon-75
);--spectrum-tag-icon-spacing-inline-end:var(--spectrum-text-to-visual-75);--spectrum-tag-avatar-spacing-block-start:var(
--spectrum-tag-top-to-avatar-small
);--spectrum-tag-avatar-spacing-block-end:var(
--spectrum-tag-top-to-avatar-small
);--spectrum-tag-avatar-spacing-inline-end:var(--spectrum-text-to-visual-75);--spectrum-tag-label-spacing-block:var(
--spectrum-component-top-to-text-75
);--spectrum-tag-corner-radius:var(--spectrum-tag-size-small-corner-radius);--spectrum-tag-spacing-inline-start:var(
--spectrum-tag-size-small-spacing-inline-start
);--spectrum-tag-label-spacing-inline-end:var(
--spectrum-tag-size-small-label-spacing-inline-end
);--spectrum-tag-clear-button-spacing-inline-end:var(
--spectrum-tag-size-small-clear-button-spacing-inline-end
)}:host([size=m]){--spectrum-tag-height:var(--spectrum-component-height-100);--spectrum-tag-font-size:var(--spectrum-font-size-100);--spectrum-tag-icon-size:var(--spectrum-workflow-icon-size-100);--spectrum-tag-clear-button-spacing-inline-start:var(
--spectrum-text-to-visual-100
);--spectrum-tag-clear-button-spacing-block:var(
--spectrum-tag-top-to-cross-icon-medium
);--spectrum-tag-icon-spacing-block-start:var(
--spectrum-component-top-to-workflow-icon-100
);--spectrum-tag-icon-spacing-block-end:var(
--spectrum-component-top-to-workflow-icon-100
);--spectrum-tag-icon-spacing-inline-end:var(--spectrum-text-to-visual-100);--spectrum-tag-avatar-spacing-block-start:var(
--spectrum-tag-top-to-avatar-medium
);--spectrum-tag-avatar-spacing-block-end:var(
--spectrum-tag-top-to-avatar-medium
);--spectrum-tag-avatar-spacing-inline-end:var(
--spectrum-text-to-visual-100
);--spectrum-tag-label-spacing-block:var(
--spectrum-component-top-to-text-100
);--spectrum-tag-corner-radius:var(--spectrum-tag-size-medium-corner-radius);--spectrum-tag-spacing-inline-start:var(
--spectrum-tag-size-medium-spacing-inline-start
);--spectrum-tag-label-spacing-inline-end:var(
--spectrum-tag-size-medium-label-spacing-inline-end
);--spectrum-tag-clear-button-spacing-inline-end:var(
--spectrum-tag-size-medium-clear-button-spacing-inline-end
)}:host([size=l]){--spectrum-tag-height:var(--spectrum-component-height-200);--spectrum-tag-font-size:var(--spectrum-font-size-200);--spectrum-tag-icon-size:var(--spectrum-workflow-icon-size-200);--spectrum-tag-clear-button-spacing-inline-start:var(
--spectrum-text-to-visual-200
);--spectrum-tag-clear-button-spacing-block:var(
--spectrum-tag-top-to-cross-icon-large
);--spectrum-tag-icon-spacing-block-start:var(
--spectrum-component-top-to-workflow-icon-200
);--spectrum-tag-icon-spacing-block-end:var(
--spectrum-component-top-to-workflow-icon-200
);--spectrum-tag-icon-spacing-inline-end:var(--spectrum-text-to-visual-200);--spectrum-tag-avatar-spacing-block-start:var(
--spectrum-tag-top-to-avatar-large
);--spectrum-tag-avatar-spacing-block-end:var(
--spectrum-tag-top-to-avatar-large
);--spectrum-tag-avatar-spacing-inline-end:var(
--spectrum-text-to-visual-200
);--spectrum-tag-label-spacing-block:var(
--spectrum-component-top-to-text-200
);--spectrum-tag-corner-radius:var(--spectrum-tag-size-large-corner-radius);--spectrum-tag-spacing-inline-start:var(
--spectrum-tag-size-large-spacing-inline-start
);--spectrum-tag-label-spacing-inline-end:var(
--spectrum-tag-size-large-label-spacing-inline-end
);--spectrum-tag-clear-button-spacing-inline-end:var(
--spectrum-tag-size-large-clear-button-spacing-inline-end
)}:host{align-items:center;background-color:var(
--highcontrast-tag-background-color,var(--mod-tag-background-color,var(--spectrum-tag-background-color))
);block-size:var(--mod-tag-height,var(--spectrum-tag-height));border-color:var(
--highcontrast-tag-border-color,var(--mod-tag-border-color,var(--spectrum-tag-border-color))
);border-radius:var(
--mod-tag-corner-radius,var(--spectrum-tag-corner-radius)
);border-style:solid;border-width:var(--mod-tag-border-width,var(--spectrum-tag-border-width));box-sizing:border-box;color:var(
--highcontrast-tag-content-color,var(--mod-tag-content-color,var(--spectrum-tag-content-color))
);display:inline-flex;max-inline-size:100%;outline:none;padding-inline-end:0;padding-inline-start:calc(var(
--mod-tag-spacing-inline-start,
var(--spectrum-tag-spacing-inline-start)
) - var(--mod-tag-border-width, var(--spectrum-tag-border-width)));position:relative;transition:border-color var(
--mod-tag-animation-duration,var(--spectrum-tag-animation-duration)
) ease-in-out,color var(
--mod-tag-animation-duration,var(--spectrum-tag-animation-duration)
) ease-in-out,box-shadow var(
--mod-tag-animation-duration,var(--spectrum-tag-animation-duration)
) ease-in-out,background-color var(
--mod-tag-animation-duration,var(--spectrum-tag-animation-duration)
) ease-in-out;-webkit-user-select:none;user-select:none;vertical-align:bottom}::slotted([slot=icon]){block-size:var(--mod-tag-icon-size,var(--spectrum-tag-icon-size));inline-size:var(--mod-tag-icon-size,var(--spectrum-tag-icon-size));margin-block-end:calc(var(
--mod-tag-icon-spacing-block-end,
var(--spectrum-tag-icon-spacing-block-end)
) - var(--mod-tag-border-width, var(--spectrum-tag-border-width)));margin-block-start:calc(var(
--mod-tag-icon-spacing-block-start,
var(--spectrum-tag-icon-spacing-block-start)
) - var(--mod-tag-border-width, var(--spectrum-tag-border-width)));margin-inline-end:var(
--mod-tag-icon-spacing-inline-end,var(--spectrum-tag-icon-spacing-inline-end)
)}::slotted([slot=avatar]){margin-block-end:calc(var(
--mod-tag-avatar-spacing-block-end,
var(--spectrum-tag-avatar-spacing-block-end)
) - var(--mod-tag-border-width, var(--spectrum-tag-border-width)));margin-block-start:calc(var(
--mod-tag-avatar-spacing-block-start,
var(--spectrum-tag-avatar-spacing-block-start)
) - var(--mod-tag-border-width, var(--spectrum-tag-border-width)));margin-inline-end:var(
--mod-tag-avatar-spacing-inline-end,var(--spectrum-tag-avatar-spacing-inline-end)
)}.clear-button{--spectrum-clearbutton-fill-size:fit-content;--spectrum-clearbutton-fill-background-color:transparent;box-sizing:border-box;color:currentColor;margin-inline-end:calc(var(
--mod-tag-clear-button-spacing-inline-end,
var(--spectrum-tag-clear-button-spacing-inline-end)
) - var(--mod-tag-border-width, var(--spectrum-tag-border-width)));margin-inline-start:calc(var(
--mod-tag-clear-button-spacing-inline-start,
var(--spectrum-tag-clear-button-spacing-inline-start)
) + var(
--mod-tag-label-spacing-inline-end,
var(--spectrum-tag-label-spacing-inline-end)
)*-1);padding-block-end:calc(var(
--mod-tag-clear-button-spacing-block,
var(--spectrum-tag-clear-button-spacing-block)
) - var(--mod-tag-border-width, var(--spectrum-tag-border-width)));padding-block-start:calc(var(
--mod-tag-clear-button-spacing-block,
var(--spectrum-tag-clear-button-spacing-block)
) - var(--mod-tag-border-width, var(--spectrum-tag-border-width)))}.clear-button .spectrum-ClearButton-fill{background-color:var(
--mod-clearbutton-fill-background-color,var(--spectrum-clearbutton-fill-background-color)
);block-size:var(
--mod-clearbutton-fill-size,var(--spectrum-clearbutton-fill-size)
);inline-size:var(
--mod-clearbutton-fill-size,var(--spectrum-clearbutton-fill-size)
)}.label{block-size:100%;box-sizing:border-box;cursor:default;flex:auto;font-size:var(--mod-tag-font-size,var(--spectrum-tag-font-size));font-weight:var(
--mod-tag-label-font-weight,var(--spectrum-tag-label-font-weight)
);line-height:var(
--mod-tag-label-line-height,var(--spectrum-tag-label-line-height)
);margin-inline-end:calc(var(
--mod-tag-label-spacing-inline-end,
var(--spectrum-tag-label-spacing-inline-end)
) - var(--mod-tag-border-width, var(--spectrum-tag-border-width)));overflow:hidden;padding-block-start:calc(var(
--mod-tag-label-spacing-block,
var(--spectrum-tag-label-spacing-block)
) - var(--mod-tag-border-width, var(--spectrum-tag-border-width)));text-overflow:ellipsis;white-space:nowrap}:host(:hover){background-color:var(
--highcontrast-tag-background-color-hover,var(
--mod-tag-background-color-hover,var(--spectrum-tag-background-color-hover)
)
);border-color:var(
--highcontrast-tag-border-color-hover,var(
--mod-tag-border-color-hover,var(--spectrum-tag-border-color-hover)
)
);color:var(
--highcontrast-tag-content-color-hover,var(
--mod-tag-content-color-hover,var(--spectrum-tag-content-color-hover)
)
)}:host(:active){background-color:var(
--highcontrast-tag-background-color-active,var(
--mod-tag-background-color-active,var(--spectrum-tag-background-color-active)
)
);border-color:var(
--highcontrast-tag-border-color-active,var(
--mod-tag-border-color-active,var(--spectrum-tag-border-color-active)
)
);color:var(
--highcontrast-tag-content-color-active,var(
--mod-tag-content-color-active,var(--spectrum-tag-content-color-active)
)
)}:host(.focus-visible),:host([focused]){background-color:var(
--highcontrast-tag-background-color-focus,var(
--mod-tag-background-color-focus,var(--spectrum-tag-background-color-focus)
)
);border-color:var(
--highcontrast-tag-border-color-focus,var(
--mod-tag-border-color-focus,var(--spectrum-tag-border-color-focus)
)
);color:var(
--highcontrast-tag-content-color-focus,var(
--mod-tag-content-color-focus,var(--spectrum-tag-content-color-focus)
)
)}:host(.focus-visible),:host([focused]){background-color:var(
--highcontrast-tag-background-color-focus,var(
--mod-tag-background-color-focus,var(--spectrum-tag-background-color-focus)
)
);border-color:var(
--highcontrast-tag-border-color-focus,var(
--mod-tag-border-color-focus,var(--spectrum-tag-border-color-focus)
)
);color:var(
--highcontrast-tag-content-color-focus,var(
--mod-tag-content-color-focus,var(--spectrum-tag-content-color-focus)
)
)}:host(:focus-visible),:host([focused]){background-color:var(
--highcontrast-tag-background-color-focus,var(
--mod-tag-background-color-focus,var(--spectrum-tag-background-color-focus)
)
);border-color:var(
--highcontrast-tag-border-color-focus,var(
--mod-tag-border-color-focus,var(--spectrum-tag-border-color-focus)
)
);color:var(
--highcontrast-tag-content-color-focus,var(
--mod-tag-content-color-focus,var(--spectrum-tag-content-color-focus)
)
)}:host(.focus-visible):after,:host([focused]):after{block-size:calc(100% + var(--mod-tag-focus-ring-gap, var(--spectrum-tag-focus-ring-gap))*2 + var(--mod-tag-border-width, var(--spectrum-tag-border-width))*2);border-color:var(
--highcontrast-tag-focus-ring-color,var(--mod-tag-focus-ring-color,var(--spectrum-tag-focus-ring-color))
);border-radius:calc(var(--mod-tag-corner-radius, var(--spectrum-tag-corner-radius)) + var(--mod-tag-focus-ring-gap, var(--spectrum-tag-focus-ring-gap)) + var(--mod-tag-border-width, var(--spectrum-tag-border-width)));border-style:solid;border-width:var(
--mod-tag-focus-ring-thickness,var(--spectrum-tag-focus-ring-thickness)
);content:"";display:inline-block;inline-size:calc(100% + var(--mod-tag-focus-ring-gap, var(--spectrum-tag-focus-ring-gap))*2 + var(--mod-tag-border-width, var(--spectrum-tag-border-width))*2);inset:0;margin:auto;margin-block-start:calc((var(
--mod-tag-focus-ring-gap,
var(--spectrum-tag-focus-ring-gap)
) + var(
--mod-tag-border-width,
var(--spectrum-tag-border-width)
) + var(
--mod-tag-focus-ring-thickness,
var(--spectrum-tag-focus-ring-thickness)
))*-1);margin-inline-start:calc((var(
--mod-tag-focus-ring-gap,
var(--spectrum-tag-focus-ring-gap)
) + var(
--mod-tag-border-width,
var(--spectrum-tag-border-width)
) + var(
--mod-tag-focus-ring-thickness,
var(--spectrum-tag-focus-ring-thickness)
))*-1);position:absolute}:host(.focus-visible):after,:host([focused]):after{block-size:calc(100% + var(--mod-tag-focus-ring-gap, var(--spectrum-tag-focus-ring-gap))*2 + var(--mod-tag-border-width, var(--spectrum-tag-border-width))*2);border-color:var(
--highcontrast-tag-focus-ring-color,var(--mod-tag-focus-ring-color,var(--spectrum-tag-focus-ring-color))
);border-radius:calc(var(--mod-tag-corner-radius, var(--spectrum-tag-corner-radius)) + var(--mod-tag-focus-ring-gap, var(--spectrum-tag-focus-ring-gap)) + var(--mod-tag-border-width, var(--spectrum-tag-border-width)));border-style:solid;border-width:var(
--mod-tag-focus-ring-thickness,var(--spectrum-tag-focus-ring-thickness)
);content:"";display:inline-block;inline-size:calc(100% + var(--mod-tag-focus-ring-gap, var(--spectrum-tag-focus-ring-gap))*2 + var(--mod-tag-border-width, var(--spectrum-tag-border-width))*2);inset:0;margin:auto;margin-block-start:calc((var(
--mod-tag-focus-ring-gap,
var(--spectrum-tag-focus-ring-gap)
) + var(
--mod-tag-border-width,
var(--spectrum-tag-border-width)
) + var(
--mod-tag-focus-ring-thickness,
var(--spectrum-tag-focus-ring-thickness)
))*-1);margin-inline-start:calc((var(
--mod-tag-focus-ring-gap,
var(--spectrum-tag-focus-ring-gap)
) + var(
--mod-tag-border-width,
var(--spectrum-tag-border-width)
) + var(
--mod-tag-focus-ring-thickness,
var(--spectrum-tag-focus-ring-thickness)
))*-1);position:absolute}:host(:focus-visible):after,:host([focused]):after{block-size:calc(100% + var(--mod-tag-focus-ring-gap, var(--spectrum-tag-focus-ring-gap))*2 + var(--mod-tag-border-width, var(--spectrum-tag-border-width))*2);border-color:var(
--highcontrast-tag-focus-ring-color,var(--mod-tag-focus-ring-color,var(--spectrum-tag-focus-ring-color))
);border-radius:calc(var(--mod-tag-corner-radius, var(--spectrum-tag-corner-radius)) + var(--mod-tag-focus-ring-gap, var(--spectrum-tag-focus-ring-gap)) + var(--mod-tag-border-width, var(--spectrum-tag-border-width)));border-style:solid;border-width:var(
--mod-tag-focus-ring-thickness,var(--spectrum-tag-focus-ring-thickness)
);content:"";display:inline-block;inline-size:calc(100% + var(--mod-tag-focus-ring-gap, var(--spectrum-tag-focus-ring-gap))*2 + var(--mod-tag-border-width, var(--spectrum-tag-border-width))*2);inset:0;margin:auto;margin-block-start:calc((var(
--mod-tag-focus-ring-gap,
var(--spectrum-tag-focus-ring-gap)
) + var(
--mod-tag-border-width,
var(--spectrum-tag-border-width)
) + var(
--mod-tag-focus-ring-thickness,
var(--spectrum-tag-focus-ring-thickness)
))*-1);margin-inline-start:calc((var(
--mod-tag-focus-ring-gap,
var(--spectrum-tag-focus-ring-gap)
) + var(
--mod-tag-border-width,
var(--spectrum-tag-border-width)
) + var(
--mod-tag-focus-ring-thickness,
var(--spectrum-tag-focus-ring-thickness)
))*-1);position:absolute}:host([selected]){background-color:var(
--highcontrast-tag-background-color-selected,var(
--mod-tag-background-color-selected,var(--spectrum-tag-background-color-selected)
)
);border-color:var(
--highcontrast-tag-border-color-selected,var(
--mod-tag-border-color-selected,var(--spectrum-tag-border-color-selected)
)
);color:var(
--highcontrast-tag-content-color-selected,var(
--mod-tag-content-color-selected,var(--spectrum-tag-content-color-selected)
)
)}:host([selected]:hover){background-color:var(
--highcontrast-tag-background-color-selected-hover,var(
--mod-tag-background-color-selected-hover,var(--spectrum-tag-background-color-selected-hover)
)
);border-color:var(
--highcontrast-tag-border-color-selected-hover,var(
--mod-tag-border-color-selected-hover,var(--spectrum-tag-border-color-selected-hover)
)
)}:host([selected]:active){background-color:var(
--highcontrast-tag-background-color-selected-active,var(
--mod-tag-background-color-selected-active,var(--spectrum-tag-background-color-selected-active)
)
);border-color:var(
--highcontrast-tag-border-color-selected-active,var(
--mod-tag-border-color-selected-active,var(--spectrum-tag-border-color-selected-active)
)
)}:host([selected].focus-visible),:host([selected][focused]){background-color:var(
--highcontrast-tag-background-color-selected-focus,var(
--mod-tag-background-color-selected-focus,var(--spectrum-tag-background-color-selected-focus)
)
);border-color:var(
--highcontrast-tag-border-color-selected-focus,var(
--mod-tag-border-color-selected-focus,var(--spectrum-tag-border-color-selected-focus)
)
)}:host([selected].focus-visible),:host([selected][focused]){background-color:var(
--highcontrast-tag-background-color-selected-focus,var(
--mod-tag-background-color-selected-focus,var(--spectrum-tag-background-color-selected-focus)
)
);border-color:var(
--highcontrast-tag-border-color-selected-focus,var(
--mod-tag-border-color-selected-focus,var(--spectrum-tag-border-color-selected-focus)
)
)}:host([selected]:focus-visible),:host([selected][focused]){background-color:var(
--highcontrast-tag-background-color-selected-focus,var(
--mod-tag-background-color-selected-focus,var(--spectrum-tag-background-color-selected-focus)
)
);border-color:var(
--highcontrast-tag-border-color-selected-focus,var(
--mod-tag-border-color-selected-focus,var(--spectrum-tag-border-color-selected-focus)
)
)}:host([invalid]){border-color:var(
--highcontrast-tag-border-color-invalid,var(
--mod-tag-border-color-invalid,var(--spectrum-tag-border-color-invalid)
)
);color:var(
--highcontrast-tag-content-color-invalid,var(
--mod-tag-content-color-invalid,var(--spectrum-tag-content-color-invalid)
)
)}:host([invalid]:hover){border-color:var(
--highcontrast-tag-border-color-invalid-hover,var(
--mod-tag-border-color-invalid-hover,var(--spectrum-tag-border-color-invalid-hover)
)
);color:var(
--highcontrast-tag-content-color-invalid-hover,var(
--mod-tag-content-color-invalid-hover,var(--spectrum-tag-content-color-invalid-hover)
)
)}:host([invalid]:active){border-color:var(
--highcontrast-tag-border-color-invalid-active,var(
--mod-tag-border-color-invalid-active,var(--spectrum-tag-border-color-invalid-active)
)
);color:var(
--highcontrast-tag-content-color-invalid-active,var(
--mod-tag-content-color-invalid-active,var(--spectrum-tag-content-color-invalid-active)
)
)}:host([invalid].focus-visible),:host([invalid][focused]){border-color:var(
--highcontrast-tag-border-color-invalid-focus,var(
--mod-tag-border-color-invalid-focus,var(--spectrum-tag-border-color-invalid-focus)
)
);color:var(
--highcontrast-tag-content-color-invalid-focus,var(
--mod-tag-content-color-invalid-focus,var(--spectrum-tag-content-color-invalid-focus)
)
)}:host([invalid].focus-visible),:host([invalid][focused]){border-color:var(
--highcontrast-tag-border-color-invalid-focus,var(
--mod-tag-border-color-invalid-focus,var(--spectrum-tag-border-color-invalid-focus)
)
);color:var(
--highcontrast-tag-content-color-invalid-focus,var(
--mod-tag-content-color-invalid-focus,var(--spectrum-tag-content-color-invalid-focus)
)
)}:host([invalid]:focus-visible),:host([invalid][focused]){border-color:var(
--highcontrast-tag-border-color-invalid-focus,var(
--mod-tag-border-color-invalid-focus,var(--spectrum-tag-border-color-invalid-focus)
)
);color:var(
--highcontrast-tag-content-color-invalid-focus,var(
--mod-tag-content-color-invalid-focus,var(--spectrum-tag-content-color-invalid-focus)
)
)}:host([invalid][selected]){background-color:var(
--highcontrast-tag-background-color-invalid-selected,var(
--mod-tag-background-color-invalid-selected,var(--spectrum-tag-background-color-invalid-selected)
)
);border-color:var(
--highcontrast-tag-border-color-invalid-selected,var(
--mod-tag-border-color-invalid-selected,var(--spectrum-tag-border-color-invalid-selected)
)
);color:var(
--highcontrast-tag-content-color-invalid-selected,var(
--mod-tag-content-color-invalid-selected,var(--spectrum-tag-content-color-invalid-selected)
)
)}:host([invalid][selected]:hover){background-color:var(
--highcontrast-tag-background-color-invalid-selected-hover,var(
--mod-tag-background-color-invalid-selected-hover,var(--spectrum-tag-background-color-invalid-selected-hover)
)
);border-color:var(
--highcontrast-tag-border-color-invalid-selected-hover,var(
--mod-tag-border-color-invalid-selected-hover,var(--spectrum-tag-border-color-invalid-selected-hover)
)
)}:host([invalid][selected]:active){background-color:var(
--highcontrast-tag-background-color-invalid-selected-active,var(
--mod-tag-background-color-invalid-selected-active,var(--spectrum-tag-background-color-invalid-selected-active)
)
);border-color:var(
--highcontrast-tag-border-color-invalid-selected-active,var(
--mod-tag-border-color-invalid-selected-active,var(--spectrum-tag-border-color-invalid-selected-active)
)
)}:host([invalid][selected].focus-visible),:host([invalid][selected][focused]){background-color:var(
--highcontrast-tag-background-color-invalid-selected-focus,var(
--mod-tag-background-color-invalid-selected-focus,var(--spectrum-tag-background-color-invalid-selected-focus)
)
);border-color:var(
--highcontrast-tag-border-color-invalid-selected-focus,var(
--mod-tag-border-color-invalid-selected-focus,var(--spectrum-tag-border-color-invalid-selected-focus)
)
)}:host([invalid][selected].focus-visible),:host([invalid][selected][focused]){background-color:var(
--highcontrast-tag-background-color-invalid-selected-focus,var(
--mod-tag-background-color-invalid-selected-focus,var(--spectrum-tag-background-color-invalid-selected-focus)
)
);border-color:var(
--highcontrast-tag-border-color-invalid-selected-focus,var(
--mod-tag-border-color-invalid-selected-focus,var(--spectrum-tag-border-color-invalid-selected-focus)
)
)}:host([invalid][selected]:focus-visible),:host([invalid][selected][focused]){background-color:var(
--highcontrast-tag-background-color-invalid-selected-focus,var(
--mod-tag-background-color-invalid-selected-focus,var(--spectrum-tag-background-color-invalid-selected-focus)
)
);border-color:var(
--highcontrast-tag-border-color-invalid-selected-focus,var(
--mod-tag-border-color-invalid-selected-focus,var(--spectrum-tag-border-color-invalid-selected-focus)
)
)}:host([emphasized]){background-color:var(
--highcontrast-tag-background-color-emphasized,var(
--mod-tag-background-color-emphasized,var(--spectrum-tag-background-color-emphasized)
)
);border-color:var(
--highcontrast-tag-border-color-emphasized,var(
--mod-tag-border-color-emphasized,var(--spectrum-tag-border-color-emphasized)
)
);color:var(
--highcontrast-tag-content-color-emphasized,var(
--mod-tag-content-color-emphasized,var(--spectrum-tag-content-color-emphasized)
)
)}:host([emphasized]:hover){background-color:var(
--highcontrast-tag-background-color-emphasized-hover,var(
--mod-tag-background-color-emphasized-hover,var(--spectrum-tag-background-color-emphasized-hover)
)
);border-color:var(
--highcontrast-tag-border-color-emphasized-hover,var(
--mod-tag-border-color-emphasized-hover,var(--spectrum-tag-border-color-emphasized-hover)
)
)}:host([emphasized]:active){background-color:var(
--highcontrast-tag-background-color-emphasized-active,var(
--mod-tag-background-color-emphasized-active,var(--spectrum-tag-background-color-emphasized-active)
)
);border-color:var(
--highcontrast-tag-border-color-emphasized-active,var(
--mod-tag-border-color-emphasized-active,var(--spectrum-tag-border-color-emphasized-active)
)
)}:host([emphasized].focus-visible),:host([emphasized][focused]){background-color:var(
--highcontrast-tag-background-color-emphasized-focus,var(
--mod-tag-background-color-emphasized-focus,var(--spectrum-tag-background-color-emphasized-focus)
)
);border-color:var(
--highcontrast-tag-border-color-emphasized-focus,var(
--mod-tag-border-color-emphasized-focus,var(--spectrum-tag-border-color-emphasized-focus)
)
)}:host([emphasized].focus-visible),:host([emphasized][focused]){background-color:var(
--highcontrast-tag-background-color-emphasized-focus,var(
--mod-tag-background-color-emphasized-focus,var(--spectrum-tag-background-color-emphasized-focus)
)
);border-color:var(
--highcontrast-tag-border-color-emphasized-focus,var(
--mod-tag-border-color-emphasized-focus,var(--spectrum-tag-border-color-emphasized-focus)
)
)}:host([emphasized]:focus-visible),:host([emphasized][focused]){background-color:var(
--highcontrast-tag-background-color-emphasized-focus,var(
--mod-tag-background-color-emphasized-focus,var(--spectrum-tag-background-color-emphasized-focus)
)
);border-color:var(
--highcontrast-tag-border-color-emphasized-focus,var(
--mod-tag-border-color-emphasized-focus,var(--spectrum-tag-border-color-emphasized-focus)
)
)}:host([disabled]){background-color:var(
--highcontrast-tag-background-color-disabled,var(
--mod-tag-background-color-disabled,var(--spectrum-tag-background-color-disabled)
)
);border-color:var(
--highcontrast-tag-border-color-disabled,var(
--mod-tag-border-color-disabled,var(--spectrum-tag-border-color-disabled)
)
);color:var(
--highcontrast-tag-content-color-disabled,var(
--mod-tag-content-color-disabled,var(--spectrum-tag-content-color-disabled)
)
);pointer-events:none}:host([disabled]) ::slotted([slot=avatar]){opacity:var(
--mod-avatar-opacity-disabled,var(--spectrum-avatar-opacity-disabled)
)}@media (forced-colors:active){:host{--highcontrast-tag-border-color:ButtonText;--highcontrast-tag-border-color-hover:ButtonText;--highcontrast-tag-border-color-active:ButtonText;--highcontrast-tag-border-color-focus:ButtonText;--highcontrast-tag-background-color:ButtonFace;--highcontrast-tag-background-color-hover:ButtonFace;--highcontrast-tag-background-color-active:ButtonFace;--highcontrast-tag-background-color-focus:ButtonFace;--highcontrast-tag-content-color:ButtonText;--highcontrast-tag-content-color-hover:ButtonText;--highcontrast-tag-content-color-active:ButtonText;--highcontrast-tag-content-color-focus:ButtonText;forced-color-adjust:none}:host([selected]){--highcontrast-tag-border-color-selected:Highlight;--highcontrast-tag-border-color-selected-hover:Highlight;--highcontrast-tag-border-color-selected-active:Highlight;--highcontrast-tag-border-color-selected-focus:Highlight;--highcontrast-tag-background-color-selected:Highlight;--highcontrast-tag-background-color-selected-hover:Highlight;--highcontrast-tag-background-color-selected-active:Highlight;--highcontrast-tag-background-color-selected-focus:Highlight;--highcontrast-tag-content-color-selected:HighlightText}:host([disabled]){--highcontrast-tag-border-color-disabled:GrayText;--highcontrast-tag-background-color-disabled:ButtonFace;--highcontrast-tag-content-color-disabled:GrayText}:host([invalid]){--highcontrast-tag-border-color-invalid:Highlight;--highcontrast-tag-border-color-invalid-hover:Highlight;--highcontrast-tag-border-color-invalid-active:Highlight;--highcontrast-tag-border-color-invalid-focus:Highlight;--highcontrast-tag-content-color-invalid:CanvasText;--highcontrast-tag-content-color-invalid-hover:CanvasText;--highcontrast-tag-content-color-invalid-active:CanvasText;--highcontrast-tag-content-color-invalid-focus:CanvasText}:host([invalid][selected]){--highcontrast-tag-border-color-invalid-selected:Highlight;--highcontrast-tag-border-color-invalid-selected-hover:Highlight;--highcontrast-tag-border-color-invalid-selected-focus:Highlight;--highcontrast-tag-border-color-invalid-selected-active:Highlight;--highcontrast-tag-background-color-invalid-selected:Highlight;--highcontrast-tag-background-color-invalid-selected-hover:Highlight;--highcontrast-tag-background-color-invalid-selected-active:Highlight;--highcontrast-tag-background-color-invalid-selected-focus:Highlight;--highcontrast-tag-content-color-invalid-selected:HighlightText}:host([emphasized]){--highcontrast-tag-border-color-emphasized:Highlight;--highcontrast-tag-border-color-emphasized-hover:Highlight;--highcontrast-tag-border-color-emphasized-active:Highlight;--highcontrast-tag-border-color-emphasized-focus:Highlight;--highcontrast-tag-background-color-emphasized:ButtonFace;--highcontrast-tag-background-color-emphasized-hover:ButtonFace;--highcontrast-tag-background-color-emphasized-active:ButtonFace;--highcontrast-tag-background-color-emphasized-focus:ButtonFace;--highcontrast-tag-content-color-emphasized:CanvasText}}:host{--spectrum-tag-border-color:var(--system-spectrum-tag-border-color);--spectrum-tag-border-color-hover:var(
--system-spectrum-tag-border-color-hover
);--spectrum-tag-border-color-active:var(
--system-spectrum-tag-border-color-active
);--spectrum-tag-border-color-focus:var(
--system-spectrum-tag-border-color-focus
);--spectrum-tag-size-small-corner-radius:var(
--system-spectrum-tag-size-small-corner-radius
);--spectrum-tag-size-medium-corner-radius:var(
--system-spectrum-tag-size-medium-corner-radius
);--spectrum-tag-size-large-corner-radius:var(
--system-spectrum-tag-size-large-corner-radius
);--spectrum-tag-background-color:var(
--system-spectrum-tag-background-color
);--spectrum-tag-background-color-hover:var(
--system-spectrum-tag-background-color-hover
);--spectrum-tag-background-color-active:var(
--system-spectrum-tag-background-color-active
);--spectrum-tag-background-color-focus:var(
--system-spectrum-tag-background-color-focus
);--spectrum-tag-content-color:var(--system-spectrum-tag-content-color);--spectrum-tag-content-color-hover:var(
--system-spectrum-tag-content-color-hover
);--spectrum-tag-content-color-active:var(
--system-spectrum-tag-content-color-active
);--spectrum-tag-content-color-focus:var(
--system-spectrum-tag-content-color-focus
);--spectrum-tag-border-color-selected:var(
--system-spectrum-tag-border-color-selected
);--spectrum-tag-border-color-selected-hover:var(
--system-spectrum-tag-border-color-selected-hover
);--spectrum-tag-border-color-selected-active:var(
--system-spectrum-tag-border-color-selected-active
);--spectrum-tag-border-color-selected-focus:var(
--system-spectrum-tag-border-color-selected-focus
);--spectrum-tag-background-color-selected:var(
--system-spectrum-tag-background-color-selected
);--spectrum-tag-background-color-selected-hover:var(
--system-spectrum-tag-background-color-selected-hover
);--spectrum-tag-background-color-selected-active:var(
--system-spectrum-tag-background-color-selected-active
);--spectrum-tag-background-color-selected-focus:var(
--system-spectrum-tag-background-color-selected-focus
);--spectrum-tag-border-color-disabled:var(
--system-spectrum-tag-border-color-disabled
);--spectrum-tag-background-color-disabled:var(
--system-spectrum-tag-background-color-disabled
);--spectrum-tag-size-small-spacing-inline-start:var(
--system-spectrum-tag-size-small-spacing-inline-start
);--spectrum-tag-size-small-label-spacing-inline-end:var(
--system-spectrum-tag-size-small-label-spacing-inline-end
);--spectrum-tag-size-small-clear-button-spacing-inline-end:var(
--system-spectrum-tag-size-small-clear-button-spacing-inline-end
);--spectrum-tag-size-medium-spacing-inline-start:var(
--system-spectrum-tag-size-medium-spacing-inline-start
);--spectrum-tag-size-medium-label-spacing-inline-end:var(
--system-spectrum-tag-size-medium-label-spacing-inline-end
);--spectrum-tag-size-medium-clear-button-spacing-inline-end:var(
--system-spectrum-tag-size-medium-clear-button-spacing-inline-end
);--spectrum-tag-size-large-spacing-inline-start:var(
--system-spectrum-tag-size-large-spacing-inline-start
);--spectrum-tag-size-large-label-spacing-inline-end:var(
--system-spectrum-tag-size-large-label-spacing-inline-end
);--spectrum-tag-size-large-clear-button-spacing-inline-end:var(
--system-spectrum-tag-size-large-clear-button-spacing-inline-end
)}:host([invalid]) .clear-button{--spectrum-clearbutton-medium-icon-color:var(
--spectrum-tag-icon-color-error-key-focus,var(--spectrum-global-color-red-600)
);--spectrum-clearbutton-medium-icon-color-hover:var(
--spectrum-clearbutton-medium-icon-color
);--spectrum-clearbutton-medium-icon-color-down:var(
--spectrum-tag-deletable-icon-color-error-down,var(--spectrum-global-color-red-700)
)}:host([invalid]):hover .clear-button{--spectrum-clearbutton-medium-icon-color:var(
--spectrum-tag-icon-color-error-hover,var(--spectrum-global-color-red-600)
);--spectrum-clearbutton-medium-icon-color-hover:var(
--spectrum-clearbutton-medium-icon-color
);--spectrum-clearbutton-medium-icon-color-down:var(
--spectrum-tag-deletable-icon-color-error-down,var(--spectrum-global-color-red-700)
)}:host([invalid]):active .clear-button{--spectrum-clearbutton-medium-icon-color:var(
--spectrum-tag-icon-color-error-hover,var(--spectrum-global-color-red-600)
);--spectrum-clearbutton-medium-icon-color-hover:var(
--spectrum-clearbutton-medium-icon-color
);--spectrum-clearbutton-medium-icon-color-down:var(
--spectrum-tag-deletable-icon-color-error-down,var(--spectrum-global-color-red-700)
)}:host([size=s]){--spectrum-icon-tshirt-size-height:var(
--spectrum-alias-workflow-icon-size-s
);--spectrum-icon-tshirt-size-width:var(
--spectrum-alias-workflow-icon-size-s
);--spectrum-ui-icon-tshirt-size-height:var(
--spectrum-alias-ui-icon-cornertriangle-size-75
);--spectrum-ui-icon-tshirt-size-width:var(
--spectrum-alias-ui-icon-cornertriangle-size-75
)}:host([size=m]){--spectrum-icon-tshirt-size-height:var(
--spectrum-alias-workflow-icon-size-m
);--spectrum-icon-tshirt-size-width:var(
--spectrum-alias-workflow-icon-size-m
);--spectrum-ui-icon-tshirt-size-height:var(
--spectrum-alias-ui-icon-cornertriangle-size-100
);--spectrum-ui-icon-tshirt-size-width:var(
--spectrum-alias-ui-icon-cornertriangle-size-100
)}:host([size=l]){--spectrum-icon-tshirt-size-height:var(
--spectrum-alias-workflow-icon-size-l
);--spectrum-icon-tshirt-size-width:var(
--spectrum-alias-workflow-icon-size-l
);--spectrum-ui-icon-tshirt-size-height:var(
--spectrum-alias-ui-icon-cornertriangle-size-200
);--spectrum-ui-icon-tshirt-size-width:var(
--spectrum-alias-ui-icon-cornertriangle-size-200
)}
`,Up=Dp;var Hp=Object.defineProperty,Np=Object.getOwnPropertyDescriptor,Ro=(S,w,c,R)=>{for(var A=R>1?void 0:R?Np(w,c):w,Z=S.length-1,F;Z>=0;Z--)(F=S[Z])&&(A=(R?F(w,c,A):F(A))||A);return R&&A&&Hp(w,c,A),A};class le extends kc(yc,{validSizes:["s","m","l"]}){constructor(){super(),this.deletable=!1,this.disabled=!1,this.readonly=!1,this.handleFocusin=()=>{this.addEventListener("focusout",this.handleFocusout),this.addEventListener("keydown",this.handleKeydown)},this.handleFocusout=()=>{this.removeEventListener("keydown",this.handleKeydown),this.removeEventListener("focusout",this.handleFocusout)},this.handleKeydown=w=>{if(!this.deletable)return;const{code:c}=w;switch(c){case"Backspace":case"Space":case"Delete":this.delete();return;default:return}},this.addEventListener("focusin",this.handleFocusin)}static get styles(){return[Up]}get hasIcon(){return!!this.querySelector('[slot="icon"]')}get hasAvatar(){return!!this.querySelector('[slot="avatar"]')}delete(){this.readonly||this.dispatchEvent(new Event("delete",{bubbles:!0}))}render(){const w=[];return this.hasAvatar&&w.push(J`
                    <slot name="avatar"></slot>
                `),this.hasIcon&&w.push(J`
                    <slot name="icon"></slot>
                `),J`
            ${w}
            <span class="label"><slot></slot></span>
            ${this.deletable?J`
                      <sp-clear-button
                          class="clear-button"
                          ?disabled=${this.disabled}
                          label="Remove"
                          size="s"
                          tabindex="-1"
                          @click=${this.delete}
                      ></sp-clear-button>
                  `:J``}
        `}firstUpdated(w){super.firstUpdated(w),this.hasAttribute("role")||this.setAttribute("role","listitem"),this.deletable&&this.setAttribute("tabindex",!this.disabled&&this.matches(":first-of-type:not([disabled])")?"0":"-1")}updated(w){super.updated(w),w.has("disabled")&&(this.disabled?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled"))}}Ro([Wr({type:Boolean,reflect:!0})],le.prototype,"deletable",2),Ro([Wr({type:Boolean,reflect:!0})],le.prototype,"disabled",2),Ro([Wr({type:Boolean,reflect:!0})],le.prototype,"readonly",2);const $p=Oo`
:host{--spectrum-taggroup-tag-gap-x:var(--spectrum-global-dimension-size-100);--spectrum-taggroup-tag-gap-y:var(--spectrum-global-dimension-size-100);display:inline-flex;list-style:none;margin:0;padding:0}::slotted(*){margin:calc(var(
--spectrum-taggroup-tag-gap-y,
var(--spectrum-global-dimension-size-100)
)/2) calc(var(
--spectrum-taggroup-tag-gap-x,
var(--spectrum-global-dimension-size-100)
)/2)}
`,Gp=$p;var qp=Object.defineProperty,Kp=Object.getOwnPropertyDescriptor,Zp=(S,w,c,R)=>{for(var A=R>1?void 0:R?Kp(w,c):w,Z=S.length-1,F;Z>=0;Z--)(F=S[Z])&&(A=(R?F(w,c,A):F(A))||A);return R&&A&&qp(w,c,A),A};class zc extends Ap(yc){constructor(){super(),this.rovingTabindexController=new zp(this,{focusInIndex:w=>w.findIndex(c=>!c.disabled&&c.deletable),elements:()=>this.tags,isFocusableElement:w=>!w.disabled&&w.deletable}),this.handleFocusin=()=>{this.addEventListener("focusout",this.handleFocusout),this.addEventListener("keydown",this.handleKeydown)},this.handleKeydown=w=>{const{code:c}=w;if(c!=="PageUp"&&c!=="PageDown")return;const R=(Dr,vr)=>Dr[(Dr.length+vr)%Dr.length],A=[...this.getRootNode().querySelectorAll("sp-tags")];if(A.length<2)return;w.preventDefault();const Z=A.indexOf(this),F=c==="PageUp"?-1:1;let Mr=Z+F,or=R(A,Mr);for(;!or.tags.length;)Mr+=F,or=R(A,Mr);or.focus()},this.handleFocusout=()=>{this.removeEventListener("keydown",this.handleKeydown),this.removeEventListener("focusout",this.handleFocusout)},this.addEventListener("focusin",this.handleFocusin)}static get styles(){return[Gp]}get tags(){return this.defaultNodes.filter(w=>w instanceof le)}focus(){this.rovingTabindexController.focus()}handleSlotchange(){this.rovingTabindexController.clearElementCache()}render(){return J`
            <slot @slotchange=${this.handleSlotchange}></slot>
        `}firstUpdated(){this.hasAttribute("role")||this.setAttribute("role","list"),this.hasAttribute("aria-label")||this.setAttribute("aria-label","Tags")}}Zp([Ip("")],zc.prototype,"defaultNodes",2);customElements.define("sp-tags",zc);customElements.define("sp-tag",le);customElements.define("sp-textfield",Ep);const Yp=({width:S=24,height:w=24,hidden:c=!1,title:R="Add Circle"}={})=>Lp`<svg
    xmlns="http://www.w3.org/2000/svg"
    width=${S}
    height=${w}
    viewBox="0 0 36 36"
    aria-hidden=${c?"true":"false"}
    role="img"
    fill="currentColor"
    aria-label=${R}
  >
    <path
      d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2Zm10 17a1 1 0 0 1-1 1h-7v7a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-7H9a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h7V9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h7a1 1 0 0 1 1 1Z"
    />
  </svg>`;class Xp extends Sp{render(){return Rp(J),Yp({hidden:!this.label,title:this.label})}}customElements.define("sp-icon-add-circle",Xp);var Bo={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */(function(S,w){(function(){var c,R="4.17.21",A=200,Z="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",F="Expected a function",Mr="Invalid `variable` option passed into `_.template`",or="__lodash_hash_undefined__",Dr=500,vr="__lodash_placeholder__",Zt=1,Po=2,mr=4,br=1,de=2,pt=1,ir=2,Wo=4,Et=8,_r=16,Lt=32,wr=64,Pt=128,Ur=256,sn=512,Tc=30,Cc="...",Sc=800,Ic=16,Mo=1,Ec=2,Lc=3,ar=1/0,Yt=9007199254740991,Rc=17976931348623157e292,fe=0/0,Rt=4294967295,Bc=Rt-1,Oc=Rt>>>1,Fc=[["ary",Pt],["bind",pt],["bindKey",ir],["curry",Et],["curryRight",_r],["flip",sn],["partial",Lt],["partialRight",wr],["rearg",Ur]],xr="[object Arguments]",ge="[object Array]",Pc="[object AsyncFunction]",Hr="[object Boolean]",Nr="[object Date]",Wc="[object DOMException]",he="[object Error]",pe="[object Function]",Do="[object GeneratorFunction]",At="[object Map]",$r="[object Number]",Mc="[object Null]",Wt="[object Object]",Uo="[object Promise]",Dc="[object Proxy]",Gr="[object RegExp]",zt="[object Set]",qr="[object String]",ve="[object Symbol]",Uc="[object Undefined]",Kr="[object WeakMap]",Hc="[object WeakSet]",Zr="[object ArrayBuffer]",kr="[object DataView]",ln="[object Float32Array]",dn="[object Float64Array]",fn="[object Int8Array]",gn="[object Int16Array]",hn="[object Int32Array]",pn="[object Uint8Array]",vn="[object Uint8ClampedArray]",mn="[object Uint16Array]",bn="[object Uint32Array]",Nc=/\b__p \+= '';/g,$c=/\b(__p \+=) '' \+/g,Gc=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Ho=/&(?:amp|lt|gt|quot|#39);/g,No=/[&<>"']/g,qc=RegExp(Ho.source),Kc=RegExp(No.source),Zc=/<%-([\s\S]+?)%>/g,Yc=/<%([\s\S]+?)%>/g,$o=/<%=([\s\S]+?)%>/g,Xc=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Jc=/^\w*$/,Qc=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,_n=/[\\^$.*+?()[\]{}|]/g,Vc=RegExp(_n.source),wn=/^\s+/,jc=/\s/,tu=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,ru=/\{\n\/\* \[wrapped with (.+)\] \*/,eu=/,? & /,nu=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,ou=/[()=,{}\[\]\/\s]/,iu=/\\(\\)?/g,au=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Go=/\w*$/,cu=/^[-+]0x[0-9a-f]+$/i,uu=/^0b[01]+$/i,su=/^\[object .+?Constructor\]$/,lu=/^0o[0-7]+$/i,du=/^(?:0|[1-9]\d*)$/,fu=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,me=/($^)/,gu=/['\n\r\u2028\u2029\\]/g,be="\\ud800-\\udfff",hu="\\u0300-\\u036f",pu="\\ufe20-\\ufe2f",vu="\\u20d0-\\u20ff",qo=hu+pu+vu,Ko="\\u2700-\\u27bf",Zo="a-z\\xdf-\\xf6\\xf8-\\xff",mu="\\xac\\xb1\\xd7\\xf7",bu="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",_u="\\u2000-\\u206f",wu=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Yo="A-Z\\xc0-\\xd6\\xd8-\\xde",Xo="\\ufe0e\\ufe0f",Jo=mu+bu+_u+wu,xn="['’]",xu="["+be+"]",Qo="["+Jo+"]",_e="["+qo+"]",Vo="\\d+",ku="["+Ko+"]",jo="["+Zo+"]",ti="[^"+be+Jo+Vo+Ko+Zo+Yo+"]",kn="\\ud83c[\\udffb-\\udfff]",yu="(?:"+_e+"|"+kn+")",ri="[^"+be+"]",yn="(?:\\ud83c[\\udde6-\\uddff]){2}",An="[\\ud800-\\udbff][\\udc00-\\udfff]",yr="["+Yo+"]",ei="\\u200d",ni="(?:"+jo+"|"+ti+")",Au="(?:"+yr+"|"+ti+")",oi="(?:"+xn+"(?:d|ll|m|re|s|t|ve))?",ii="(?:"+xn+"(?:D|LL|M|RE|S|T|VE))?",ai=yu+"?",ci="["+Xo+"]?",zu="(?:"+ei+"(?:"+[ri,yn,An].join("|")+")"+ci+ai+")*",Tu="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Cu="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",ui=ci+ai+zu,Su="(?:"+[ku,yn,An].join("|")+")"+ui,Iu="(?:"+[ri+_e+"?",_e,yn,An,xu].join("|")+")",Eu=RegExp(xn,"g"),Lu=RegExp(_e,"g"),zn=RegExp(kn+"(?="+kn+")|"+Iu+ui,"g"),Ru=RegExp([yr+"?"+jo+"+"+oi+"(?="+[Qo,yr,"$"].join("|")+")",Au+"+"+ii+"(?="+[Qo,yr+ni,"$"].join("|")+")",yr+"?"+ni+"+"+oi,yr+"+"+ii,Cu,Tu,Vo,Su].join("|"),"g"),Bu=RegExp("["+ei+be+qo+Xo+"]"),Ou=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Fu=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Pu=-1,H={};H[ln]=H[dn]=H[fn]=H[gn]=H[hn]=H[pn]=H[vn]=H[mn]=H[bn]=!0,H[xr]=H[ge]=H[Zr]=H[Hr]=H[kr]=H[Nr]=H[he]=H[pe]=H[At]=H[$r]=H[Wt]=H[Gr]=H[zt]=H[qr]=H[Kr]=!1;var U={};U[xr]=U[ge]=U[Zr]=U[kr]=U[Hr]=U[Nr]=U[ln]=U[dn]=U[fn]=U[gn]=U[hn]=U[At]=U[$r]=U[Wt]=U[Gr]=U[zt]=U[qr]=U[ve]=U[pn]=U[vn]=U[mn]=U[bn]=!0,U[he]=U[pe]=U[Kr]=!1;var Wu={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Mu={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Du={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Uu={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Hu=parseFloat,Nu=parseInt,si=typeof se=="object"&&se&&se.Object===Object&&se,$u=typeof self=="object"&&self&&self.Object===Object&&self,V=si||$u||Function("return this")(),Tn=w&&!w.nodeType&&w,cr=Tn&&!0&&S&&!S.nodeType&&S,li=cr&&cr.exports===Tn,Cn=li&&si.process,vt=function(){try{var l=cr&&cr.require&&cr.require("util").types;return l||Cn&&Cn.binding&&Cn.binding("util")}catch{}}(),di=vt&&vt.isArrayBuffer,fi=vt&&vt.isDate,gi=vt&&vt.isMap,hi=vt&&vt.isRegExp,pi=vt&&vt.isSet,vi=vt&&vt.isTypedArray;function st(l,g,f){switch(f.length){case 0:return l.call(g);case 1:return l.call(g,f[0]);case 2:return l.call(g,f[0],f[1]);case 3:return l.call(g,f[0],f[1],f[2])}return l.apply(g,f)}function Gu(l,g,f,b){for(var z=-1,P=l==null?0:l.length;++z<P;){var Y=l[z];g(b,Y,f(Y),l)}return b}function mt(l,g){for(var f=-1,b=l==null?0:l.length;++f<b&&g(l[f],f,l)!==!1;);return l}function qu(l,g){for(var f=l==null?0:l.length;f--&&g(l[f],f,l)!==!1;);return l}function mi(l,g){for(var f=-1,b=l==null?0:l.length;++f<b;)if(!g(l[f],f,l))return!1;return!0}function Xt(l,g){for(var f=-1,b=l==null?0:l.length,z=0,P=[];++f<b;){var Y=l[f];g(Y,f,l)&&(P[z++]=Y)}return P}function we(l,g){var f=l==null?0:l.length;return!!f&&Ar(l,g,0)>-1}function Sn(l,g,f){for(var b=-1,z=l==null?0:l.length;++b<z;)if(f(g,l[b]))return!0;return!1}function N(l,g){for(var f=-1,b=l==null?0:l.length,z=Array(b);++f<b;)z[f]=g(l[f],f,l);return z}function Jt(l,g){for(var f=-1,b=g.length,z=l.length;++f<b;)l[z+f]=g[f];return l}function In(l,g,f,b){var z=-1,P=l==null?0:l.length;for(b&&P&&(f=l[++z]);++z<P;)f=g(f,l[z],z,l);return f}function Ku(l,g,f,b){var z=l==null?0:l.length;for(b&&z&&(f=l[--z]);z--;)f=g(f,l[z],z,l);return f}function En(l,g){for(var f=-1,b=l==null?0:l.length;++f<b;)if(g(l[f],f,l))return!0;return!1}var Zu=Ln("length");function Yu(l){return l.split("")}function Xu(l){return l.match(nu)||[]}function bi(l,g,f){var b;return f(l,function(z,P,Y){if(g(z,P,Y))return b=P,!1}),b}function xe(l,g,f,b){for(var z=l.length,P=f+(b?1:-1);b?P--:++P<z;)if(g(l[P],P,l))return P;return-1}function Ar(l,g,f){return g===g?cs(l,g,f):xe(l,_i,f)}function Ju(l,g,f,b){for(var z=f-1,P=l.length;++z<P;)if(b(l[z],g))return z;return-1}function _i(l){return l!==l}function wi(l,g){var f=l==null?0:l.length;return f?Bn(l,g)/f:fe}function Ln(l){return function(g){return g==null?c:g[l]}}function Rn(l){return function(g){return l==null?c:l[g]}}function xi(l,g,f,b,z){return z(l,function(P,Y,D){f=b?(b=!1,P):g(f,P,Y,D)}),f}function Qu(l,g){var f=l.length;for(l.sort(g);f--;)l[f]=l[f].value;return l}function Bn(l,g){for(var f,b=-1,z=l.length;++b<z;){var P=g(l[b]);P!==c&&(f=f===c?P:f+P)}return f}function On(l,g){for(var f=-1,b=Array(l);++f<l;)b[f]=g(f);return b}function Vu(l,g){return N(g,function(f){return[f,l[f]]})}function ki(l){return l&&l.slice(0,Ti(l)+1).replace(wn,"")}function lt(l){return function(g){return l(g)}}function Fn(l,g){return N(g,function(f){return l[f]})}function Yr(l,g){return l.has(g)}function yi(l,g){for(var f=-1,b=l.length;++f<b&&Ar(g,l[f],0)>-1;);return f}function Ai(l,g){for(var f=l.length;f--&&Ar(g,l[f],0)>-1;);return f}function ju(l,g){for(var f=l.length,b=0;f--;)l[f]===g&&++b;return b}var ts=Rn(Wu),rs=Rn(Mu);function es(l){return"\\"+Uu[l]}function ns(l,g){return l==null?c:l[g]}function zr(l){return Bu.test(l)}function os(l){return Ou.test(l)}function is(l){for(var g,f=[];!(g=l.next()).done;)f.push(g.value);return f}function Pn(l){var g=-1,f=Array(l.size);return l.forEach(function(b,z){f[++g]=[z,b]}),f}function zi(l,g){return function(f){return l(g(f))}}function Qt(l,g){for(var f=-1,b=l.length,z=0,P=[];++f<b;){var Y=l[f];(Y===g||Y===vr)&&(l[f]=vr,P[z++]=f)}return P}function ke(l){var g=-1,f=Array(l.size);return l.forEach(function(b){f[++g]=b}),f}function as(l){var g=-1,f=Array(l.size);return l.forEach(function(b){f[++g]=[b,b]}),f}function cs(l,g,f){for(var b=f-1,z=l.length;++b<z;)if(l[b]===g)return b;return-1}function us(l,g,f){for(var b=f+1;b--;)if(l[b]===g)return b;return b}function Tr(l){return zr(l)?ls(l):Zu(l)}function Tt(l){return zr(l)?ds(l):Yu(l)}function Ti(l){for(var g=l.length;g--&&jc.test(l.charAt(g)););return g}var ss=Rn(Du);function ls(l){for(var g=zn.lastIndex=0;zn.test(l);)++g;return g}function ds(l){return l.match(zn)||[]}function fs(l){return l.match(Ru)||[]}var gs=function l(g){g=g==null?V:Cr.defaults(V.Object(),g,Cr.pick(V,Fu));var f=g.Array,b=g.Date,z=g.Error,P=g.Function,Y=g.Math,D=g.Object,Wn=g.RegExp,hs=g.String,bt=g.TypeError,ye=f.prototype,ps=P.prototype,Sr=D.prototype,Ae=g["__core-js_shared__"],ze=ps.toString,M=Sr.hasOwnProperty,vs=0,Ci=function(){var t=/[^.]+$/.exec(Ae&&Ae.keys&&Ae.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),Te=Sr.toString,ms=ze.call(D),bs=V._,_s=Wn("^"+ze.call(M).replace(_n,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ce=li?g.Buffer:c,Vt=g.Symbol,Se=g.Uint8Array,Si=Ce?Ce.allocUnsafe:c,Ie=zi(D.getPrototypeOf,D),Ii=D.create,Ei=Sr.propertyIsEnumerable,Ee=ye.splice,Li=Vt?Vt.isConcatSpreadable:c,Xr=Vt?Vt.iterator:c,ur=Vt?Vt.toStringTag:c,Le=function(){try{var t=gr(D,"defineProperty");return t({},"",{}),t}catch{}}(),ws=g.clearTimeout!==V.clearTimeout&&g.clearTimeout,xs=b&&b.now!==V.Date.now&&b.now,ks=g.setTimeout!==V.setTimeout&&g.setTimeout,Re=Y.ceil,Be=Y.floor,Mn=D.getOwnPropertySymbols,ys=Ce?Ce.isBuffer:c,Ri=g.isFinite,As=ye.join,zs=zi(D.keys,D),X=Y.max,tt=Y.min,Ts=b.now,Cs=g.parseInt,Bi=Y.random,Ss=ye.reverse,Dn=gr(g,"DataView"),Jr=gr(g,"Map"),Un=gr(g,"Promise"),Ir=gr(g,"Set"),Qr=gr(g,"WeakMap"),Vr=gr(D,"create"),Oe=Qr&&new Qr,Er={},Is=hr(Dn),Es=hr(Jr),Ls=hr(Un),Rs=hr(Ir),Bs=hr(Qr),Fe=Vt?Vt.prototype:c,jr=Fe?Fe.valueOf:c,Oi=Fe?Fe.toString:c;function i(t){if(G(t)&&!T(t)&&!(t instanceof B)){if(t instanceof _t)return t;if(M.call(t,"__wrapped__"))return Fa(t)}return new _t(t)}var Lr=function(){function t(){}return function(r){if(!$(r))return{};if(Ii)return Ii(r);t.prototype=r;var e=new t;return t.prototype=c,e}}();function Pe(){}function _t(t,r){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!r,this.__index__=0,this.__values__=c}i.templateSettings={escape:Zc,evaluate:Yc,interpolate:$o,variable:"",imports:{_:i}},i.prototype=Pe.prototype,i.prototype.constructor=i,_t.prototype=Lr(Pe.prototype),_t.prototype.constructor=_t;function B(t){this.__wrapped__=t,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Rt,this.__views__=[]}function Os(){var t=new B(this.__wrapped__);return t.__actions__=it(this.__actions__),t.__dir__=this.__dir__,t.__filtered__=this.__filtered__,t.__iteratees__=it(this.__iteratees__),t.__takeCount__=this.__takeCount__,t.__views__=it(this.__views__),t}function Fs(){if(this.__filtered__){var t=new B(this);t.__dir__=-1,t.__filtered__=!0}else t=this.clone(),t.__dir__*=-1;return t}function Ps(){var t=this.__wrapped__.value(),r=this.__dir__,e=T(t),n=r<0,o=e?t.length:0,a=Yl(0,o,this.__views__),u=a.start,s=a.end,d=s-u,h=n?s:u-1,p=this.__iteratees__,v=p.length,m=0,_=tt(d,this.__takeCount__);if(!e||!n&&o==d&&_==d)return oa(t,this.__actions__);var k=[];t:for(;d--&&m<_;){h+=r;for(var I=-1,y=t[h];++I<v;){var L=p[I],O=L.iteratee,gt=L.type,ot=O(y);if(gt==Ec)y=ot;else if(!ot){if(gt==Mo)continue t;break t}}k[m++]=y}return k}B.prototype=Lr(Pe.prototype),B.prototype.constructor=B;function sr(t){var r=-1,e=t==null?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function Ws(){this.__data__=Vr?Vr(null):{},this.size=0}function Ms(t){var r=this.has(t)&&delete this.__data__[t];return this.size-=r?1:0,r}function Ds(t){var r=this.__data__;if(Vr){var e=r[t];return e===or?c:e}return M.call(r,t)?r[t]:c}function Us(t){var r=this.__data__;return Vr?r[t]!==c:M.call(r,t)}function Hs(t,r){var e=this.__data__;return this.size+=this.has(t)?0:1,e[t]=Vr&&r===c?or:r,this}sr.prototype.clear=Ws,sr.prototype.delete=Ms,sr.prototype.get=Ds,sr.prototype.has=Us,sr.prototype.set=Hs;function Mt(t){var r=-1,e=t==null?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function Ns(){this.__data__=[],this.size=0}function $s(t){var r=this.__data__,e=We(r,t);if(e<0)return!1;var n=r.length-1;return e==n?r.pop():Ee.call(r,e,1),--this.size,!0}function Gs(t){var r=this.__data__,e=We(r,t);return e<0?c:r[e][1]}function qs(t){return We(this.__data__,t)>-1}function Ks(t,r){var e=this.__data__,n=We(e,t);return n<0?(++this.size,e.push([t,r])):e[n][1]=r,this}Mt.prototype.clear=Ns,Mt.prototype.delete=$s,Mt.prototype.get=Gs,Mt.prototype.has=qs,Mt.prototype.set=Ks;function Dt(t){var r=-1,e=t==null?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function Zs(){this.size=0,this.__data__={hash:new sr,map:new(Jr||Mt),string:new sr}}function Ys(t){var r=Xe(this,t).delete(t);return this.size-=r?1:0,r}function Xs(t){return Xe(this,t).get(t)}function Js(t){return Xe(this,t).has(t)}function Qs(t,r){var e=Xe(this,t),n=e.size;return e.set(t,r),this.size+=e.size==n?0:1,this}Dt.prototype.clear=Zs,Dt.prototype.delete=Ys,Dt.prototype.get=Xs,Dt.prototype.has=Js,Dt.prototype.set=Qs;function lr(t){var r=-1,e=t==null?0:t.length;for(this.__data__=new Dt;++r<e;)this.add(t[r])}function Vs(t){return this.__data__.set(t,or),this}function js(t){return this.__data__.has(t)}lr.prototype.add=lr.prototype.push=Vs,lr.prototype.has=js;function Ct(t){var r=this.__data__=new Mt(t);this.size=r.size}function tl(){this.__data__=new Mt,this.size=0}function rl(t){var r=this.__data__,e=r.delete(t);return this.size=r.size,e}function el(t){return this.__data__.get(t)}function nl(t){return this.__data__.has(t)}function ol(t,r){var e=this.__data__;if(e instanceof Mt){var n=e.__data__;if(!Jr||n.length<A-1)return n.push([t,r]),this.size=++e.size,this;e=this.__data__=new Dt(n)}return e.set(t,r),this.size=e.size,this}Ct.prototype.clear=tl,Ct.prototype.delete=rl,Ct.prototype.get=el,Ct.prototype.has=nl,Ct.prototype.set=ol;function Fi(t,r){var e=T(t),n=!e&&pr(t),o=!e&&!n&&nr(t),a=!e&&!n&&!o&&Fr(t),u=e||n||o||a,s=u?On(t.length,hs):[],d=s.length;for(var h in t)(r||M.call(t,h))&&!(u&&(h=="length"||o&&(h=="offset"||h=="parent")||a&&(h=="buffer"||h=="byteLength"||h=="byteOffset")||$t(h,d)))&&s.push(h);return s}function Pi(t){var r=t.length;return r?t[Qn(0,r-1)]:c}function il(t,r){return Je(it(t),dr(r,0,t.length))}function al(t){return Je(it(t))}function Hn(t,r,e){(e!==c&&!St(t[r],e)||e===c&&!(r in t))&&Ut(t,r,e)}function te(t,r,e){var n=t[r];(!(M.call(t,r)&&St(n,e))||e===c&&!(r in t))&&Ut(t,r,e)}function We(t,r){for(var e=t.length;e--;)if(St(t[e][0],r))return e;return-1}function cl(t,r,e,n){return jt(t,function(o,a,u){r(n,o,e(o),u)}),n}function Wi(t,r){return t&&Ot(r,Q(r),t)}function ul(t,r){return t&&Ot(r,ct(r),t)}function Ut(t,r,e){r=="__proto__"&&Le?Le(t,r,{configurable:!0,enumerable:!0,value:e,writable:!0}):t[r]=e}function Nn(t,r){for(var e=-1,n=r.length,o=f(n),a=t==null;++e<n;)o[e]=a?c:yo(t,r[e]);return o}function dr(t,r,e){return t===t&&(e!==c&&(t=t<=e?t:e),r!==c&&(t=t>=r?t:r)),t}function wt(t,r,e,n,o,a){var u,s=r&Zt,d=r&Po,h=r&mr;if(e&&(u=o?e(t,n,o,a):e(t)),u!==c)return u;if(!$(t))return t;var p=T(t);if(p){if(u=Jl(t),!s)return it(t,u)}else{var v=rt(t),m=v==pe||v==Do;if(nr(t))return ca(t,s);if(v==Wt||v==xr||m&&!o){if(u=d||m?{}:Ta(t),!s)return d?Dl(t,ul(u,t)):Ml(t,Wi(u,t))}else{if(!U[v])return o?t:{};u=Ql(t,v,s)}}a||(a=new Ct);var _=a.get(t);if(_)return _;a.set(t,u),rc(t)?t.forEach(function(y){u.add(wt(y,r,e,y,t,a))}):ja(t)&&t.forEach(function(y,L){u.set(L,wt(y,r,e,L,t,a))});var k=h?d?uo:co:d?ct:Q,I=p?c:k(t);return mt(I||t,function(y,L){I&&(L=y,y=t[L]),te(u,L,wt(y,r,e,L,t,a))}),u}function sl(t){var r=Q(t);return function(e){return Mi(e,t,r)}}function Mi(t,r,e){var n=e.length;if(t==null)return!n;for(t=D(t);n--;){var o=e[n],a=r[o],u=t[o];if(u===c&&!(o in t)||!a(u))return!1}return!0}function Di(t,r,e){if(typeof t!="function")throw new bt(F);return ce(function(){t.apply(c,e)},r)}function re(t,r,e,n){var o=-1,a=we,u=!0,s=t.length,d=[],h=r.length;if(!s)return d;e&&(r=N(r,lt(e))),n?(a=Sn,u=!1):r.length>=A&&(a=Yr,u=!1,r=new lr(r));t:for(;++o<s;){var p=t[o],v=e==null?p:e(p);if(p=n||p!==0?p:0,u&&v===v){for(var m=h;m--;)if(r[m]===v)continue t;d.push(p)}else a(r,v,n)||d.push(p)}return d}var jt=fa(Bt),Ui=fa(Gn,!0);function ll(t,r){var e=!0;return jt(t,function(n,o,a){return e=!!r(n,o,a),e}),e}function Me(t,r,e){for(var n=-1,o=t.length;++n<o;){var a=t[n],u=r(a);if(u!=null&&(s===c?u===u&&!ft(u):e(u,s)))var s=u,d=a}return d}function dl(t,r,e,n){var o=t.length;for(e=C(e),e<0&&(e=-e>o?0:o+e),n=n===c||n>o?o:C(n),n<0&&(n+=o),n=e>n?0:nc(n);e<n;)t[e++]=r;return t}function Hi(t,r){var e=[];return jt(t,function(n,o,a){r(n,o,a)&&e.push(n)}),e}function j(t,r,e,n,o){var a=-1,u=t.length;for(e||(e=jl),o||(o=[]);++a<u;){var s=t[a];r>0&&e(s)?r>1?j(s,r-1,e,n,o):Jt(o,s):n||(o[o.length]=s)}return o}var $n=ga(),Ni=ga(!0);function Bt(t,r){return t&&$n(t,r,Q)}function Gn(t,r){return t&&Ni(t,r,Q)}function De(t,r){return Xt(r,function(e){return Gt(t[e])})}function fr(t,r){r=rr(r,t);for(var e=0,n=r.length;t!=null&&e<n;)t=t[Ft(r[e++])];return e&&e==n?t:c}function $i(t,r,e){var n=r(t);return T(t)?n:Jt(n,e(t))}function et(t){return t==null?t===c?Uc:Mc:ur&&ur in D(t)?Zl(t):ad(t)}function qn(t,r){return t>r}function fl(t,r){return t!=null&&M.call(t,r)}function gl(t,r){return t!=null&&r in D(t)}function hl(t,r,e){return t>=tt(r,e)&&t<X(r,e)}function Kn(t,r,e){for(var n=e?Sn:we,o=t[0].length,a=t.length,u=a,s=f(a),d=1/0,h=[];u--;){var p=t[u];u&&r&&(p=N(p,lt(r))),d=tt(p.length,d),s[u]=!e&&(r||o>=120&&p.length>=120)?new lr(u&&p):c}p=t[0];var v=-1,m=s[0];t:for(;++v<o&&h.length<d;){var _=p[v],k=r?r(_):_;if(_=e||_!==0?_:0,!(m?Yr(m,k):n(h,k,e))){for(u=a;--u;){var I=s[u];if(!(I?Yr(I,k):n(t[u],k,e)))continue t}m&&m.push(k),h.push(_)}}return h}function pl(t,r,e,n){return Bt(t,function(o,a,u){r(n,e(o),a,u)}),n}function ee(t,r,e){r=rr(r,t),t=Ea(t,r);var n=t==null?t:t[Ft(kt(r))];return n==null?c:st(n,t,e)}function Gi(t){return G(t)&&et(t)==xr}function vl(t){return G(t)&&et(t)==Zr}function ml(t){return G(t)&&et(t)==Nr}function ne(t,r,e,n,o){return t===r?!0:t==null||r==null||!G(t)&&!G(r)?t!==t&&r!==r:bl(t,r,e,n,ne,o)}function bl(t,r,e,n,o,a){var u=T(t),s=T(r),d=u?ge:rt(t),h=s?ge:rt(r);d=d==xr?Wt:d,h=h==xr?Wt:h;var p=d==Wt,v=h==Wt,m=d==h;if(m&&nr(t)){if(!nr(r))return!1;u=!0,p=!1}if(m&&!p)return a||(a=new Ct),u||Fr(t)?ya(t,r,e,n,o,a):ql(t,r,d,e,n,o,a);if(!(e&br)){var _=p&&M.call(t,"__wrapped__"),k=v&&M.call(r,"__wrapped__");if(_||k){var I=_?t.value():t,y=k?r.value():r;return a||(a=new Ct),o(I,y,e,n,a)}}return m?(a||(a=new Ct),Kl(t,r,e,n,o,a)):!1}function _l(t){return G(t)&&rt(t)==At}function Zn(t,r,e,n){var o=e.length,a=o,u=!n;if(t==null)return!a;for(t=D(t);o--;){var s=e[o];if(u&&s[2]?s[1]!==t[s[0]]:!(s[0]in t))return!1}for(;++o<a;){s=e[o];var d=s[0],h=t[d],p=s[1];if(u&&s[2]){if(h===c&&!(d in t))return!1}else{var v=new Ct;if(n)var m=n(h,p,d,t,r,v);if(!(m===c?ne(p,h,br|de,n,v):m))return!1}}return!0}function qi(t){if(!$(t)||rd(t))return!1;var r=Gt(t)?_s:su;return r.test(hr(t))}function wl(t){return G(t)&&et(t)==Gr}function xl(t){return G(t)&&rt(t)==zt}function kl(t){return G(t)&&en(t.length)&&!!H[et(t)]}function Ki(t){return typeof t=="function"?t:t==null?ut:typeof t=="object"?T(t)?Xi(t[0],t[1]):Yi(t):hc(t)}function Yn(t){if(!ae(t))return zs(t);var r=[];for(var e in D(t))M.call(t,e)&&e!="constructor"&&r.push(e);return r}function yl(t){if(!$(t))return id(t);var r=ae(t),e=[];for(var n in t)n=="constructor"&&(r||!M.call(t,n))||e.push(n);return e}function Xn(t,r){return t<r}function Zi(t,r){var e=-1,n=at(t)?f(t.length):[];return jt(t,function(o,a,u){n[++e]=r(o,a,u)}),n}function Yi(t){var r=lo(t);return r.length==1&&r[0][2]?Sa(r[0][0],r[0][1]):function(e){return e===t||Zn(e,t,r)}}function Xi(t,r){return go(t)&&Ca(r)?Sa(Ft(t),r):function(e){var n=yo(e,t);return n===c&&n===r?Ao(e,t):ne(r,n,br|de)}}function Ue(t,r,e,n,o){t!==r&&$n(r,function(a,u){if(o||(o=new Ct),$(a))Al(t,r,u,e,Ue,n,o);else{var s=n?n(po(t,u),a,u+"",t,r,o):c;s===c&&(s=a),Hn(t,u,s)}},ct)}function Al(t,r,e,n,o,a,u){var s=po(t,e),d=po(r,e),h=u.get(d);if(h){Hn(t,e,h);return}var p=a?a(s,d,e+"",t,r,u):c,v=p===c;if(v){var m=T(d),_=!m&&nr(d),k=!m&&!_&&Fr(d);p=d,m||_||k?T(s)?p=s:q(s)?p=it(s):_?(v=!1,p=ca(d,!0)):k?(v=!1,p=ua(d,!0)):p=[]:ue(d)||pr(d)?(p=s,pr(s)?p=oc(s):(!$(s)||Gt(s))&&(p=Ta(d))):v=!1}v&&(u.set(d,p),o(p,d,n,a,u),u.delete(d)),Hn(t,e,p)}function Ji(t,r){var e=t.length;if(e)return r+=r<0?e:0,$t(r,e)?t[r]:c}function Qi(t,r,e){r.length?r=N(r,function(a){return T(a)?function(u){return fr(u,a.length===1?a[0]:a)}:a}):r=[ut];var n=-1;r=N(r,lt(x()));var o=Zi(t,function(a,u,s){var d=N(r,function(h){return h(a)});return{criteria:d,index:++n,value:a}});return Qu(o,function(a,u){return Wl(a,u,e)})}function zl(t,r){return Vi(t,r,function(e,n){return Ao(t,n)})}function Vi(t,r,e){for(var n=-1,o=r.length,a={};++n<o;){var u=r[n],s=fr(t,u);e(s,u)&&oe(a,rr(u,t),s)}return a}function Tl(t){return function(r){return fr(r,t)}}function Jn(t,r,e,n){var o=n?Ju:Ar,a=-1,u=r.length,s=t;for(t===r&&(r=it(r)),e&&(s=N(t,lt(e)));++a<u;)for(var d=0,h=r[a],p=e?e(h):h;(d=o(s,p,d,n))>-1;)s!==t&&Ee.call(s,d,1),Ee.call(t,d,1);return t}function ji(t,r){for(var e=t?r.length:0,n=e-1;e--;){var o=r[e];if(e==n||o!==a){var a=o;$t(o)?Ee.call(t,o,1):to(t,o)}}return t}function Qn(t,r){return t+Be(Bi()*(r-t+1))}function Cl(t,r,e,n){for(var o=-1,a=X(Re((r-t)/(e||1)),0),u=f(a);a--;)u[n?a:++o]=t,t+=e;return u}function Vn(t,r){var e="";if(!t||r<1||r>Yt)return e;do r%2&&(e+=t),r=Be(r/2),r&&(t+=t);while(r);return e}function E(t,r){return vo(Ia(t,r,ut),t+"")}function Sl(t){return Pi(Pr(t))}function Il(t,r){var e=Pr(t);return Je(e,dr(r,0,e.length))}function oe(t,r,e,n){if(!$(t))return t;r=rr(r,t);for(var o=-1,a=r.length,u=a-1,s=t;s!=null&&++o<a;){var d=Ft(r[o]),h=e;if(d==="__proto__"||d==="constructor"||d==="prototype")return t;if(o!=u){var p=s[d];h=n?n(p,d,s):c,h===c&&(h=$(p)?p:$t(r[o+1])?[]:{})}te(s,d,h),s=s[d]}return t}var ta=Oe?function(t,r){return Oe.set(t,r),t}:ut,El=Le?function(t,r){return Le(t,"toString",{configurable:!0,enumerable:!1,value:To(r),writable:!0})}:ut;function Ll(t){return Je(Pr(t))}function xt(t,r,e){var n=-1,o=t.length;r<0&&(r=-r>o?0:o+r),e=e>o?o:e,e<0&&(e+=o),o=r>e?0:e-r>>>0,r>>>=0;for(var a=f(o);++n<o;)a[n]=t[n+r];return a}function Rl(t,r){var e;return jt(t,function(n,o,a){return e=r(n,o,a),!e}),!!e}function He(t,r,e){var n=0,o=t==null?n:t.length;if(typeof r=="number"&&r===r&&o<=Oc){for(;n<o;){var a=n+o>>>1,u=t[a];u!==null&&!ft(u)&&(e?u<=r:u<r)?n=a+1:o=a}return o}return jn(t,r,ut,e)}function jn(t,r,e,n){var o=0,a=t==null?0:t.length;if(a===0)return 0;r=e(r);for(var u=r!==r,s=r===null,d=ft(r),h=r===c;o<a;){var p=Be((o+a)/2),v=e(t[p]),m=v!==c,_=v===null,k=v===v,I=ft(v);if(u)var y=n||k;else h?y=k&&(n||m):s?y=k&&m&&(n||!_):d?y=k&&m&&!_&&(n||!I):_||I?y=!1:y=n?v<=r:v<r;y?o=p+1:a=p}return tt(a,Bc)}function ra(t,r){for(var e=-1,n=t.length,o=0,a=[];++e<n;){var u=t[e],s=r?r(u):u;if(!e||!St(s,d)){var d=s;a[o++]=u===0?0:u}}return a}function ea(t){return typeof t=="number"?t:ft(t)?fe:+t}function dt(t){if(typeof t=="string")return t;if(T(t))return N(t,dt)+"";if(ft(t))return Oi?Oi.call(t):"";var r=t+"";return r=="0"&&1/t==-ar?"-0":r}function tr(t,r,e){var n=-1,o=we,a=t.length,u=!0,s=[],d=s;if(e)u=!1,o=Sn;else if(a>=A){var h=r?null:$l(t);if(h)return ke(h);u=!1,o=Yr,d=new lr}else d=r?[]:s;t:for(;++n<a;){var p=t[n],v=r?r(p):p;if(p=e||p!==0?p:0,u&&v===v){for(var m=d.length;m--;)if(d[m]===v)continue t;r&&d.push(v),s.push(p)}else o(d,v,e)||(d!==s&&d.push(v),s.push(p))}return s}function to(t,r){return r=rr(r,t),t=Ea(t,r),t==null||delete t[Ft(kt(r))]}function na(t,r,e,n){return oe(t,r,e(fr(t,r)),n)}function Ne(t,r,e,n){for(var o=t.length,a=n?o:-1;(n?a--:++a<o)&&r(t[a],a,t););return e?xt(t,n?0:a,n?a+1:o):xt(t,n?a+1:0,n?o:a)}function oa(t,r){var e=t;return e instanceof B&&(e=e.value()),In(r,function(n,o){return o.func.apply(o.thisArg,Jt([n],o.args))},e)}function ro(t,r,e){var n=t.length;if(n<2)return n?tr(t[0]):[];for(var o=-1,a=f(n);++o<n;)for(var u=t[o],s=-1;++s<n;)s!=o&&(a[o]=re(a[o]||u,t[s],r,e));return tr(j(a,1),r,e)}function ia(t,r,e){for(var n=-1,o=t.length,a=r.length,u={};++n<o;){var s=n<a?r[n]:c;e(u,t[n],s)}return u}function eo(t){return q(t)?t:[]}function no(t){return typeof t=="function"?t:ut}function rr(t,r){return T(t)?t:go(t,r)?[t]:Oa(W(t))}var Bl=E;function er(t,r,e){var n=t.length;return e=e===c?n:e,!r&&e>=n?t:xt(t,r,e)}var aa=ws||function(t){return V.clearTimeout(t)};function ca(t,r){if(r)return t.slice();var e=t.length,n=Si?Si(e):new t.constructor(e);return t.copy(n),n}function oo(t){var r=new t.constructor(t.byteLength);return new Se(r).set(new Se(t)),r}function Ol(t,r){var e=r?oo(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.byteLength)}function Fl(t){var r=new t.constructor(t.source,Go.exec(t));return r.lastIndex=t.lastIndex,r}function Pl(t){return jr?D(jr.call(t)):{}}function ua(t,r){var e=r?oo(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.length)}function sa(t,r){if(t!==r){var e=t!==c,n=t===null,o=t===t,a=ft(t),u=r!==c,s=r===null,d=r===r,h=ft(r);if(!s&&!h&&!a&&t>r||a&&u&&d&&!s&&!h||n&&u&&d||!e&&d||!o)return 1;if(!n&&!a&&!h&&t<r||h&&e&&o&&!n&&!a||s&&e&&o||!u&&o||!d)return-1}return 0}function Wl(t,r,e){for(var n=-1,o=t.criteria,a=r.criteria,u=o.length,s=e.length;++n<u;){var d=sa(o[n],a[n]);if(d){if(n>=s)return d;var h=e[n];return d*(h=="desc"?-1:1)}}return t.index-r.index}function la(t,r,e,n){for(var o=-1,a=t.length,u=e.length,s=-1,d=r.length,h=X(a-u,0),p=f(d+h),v=!n;++s<d;)p[s]=r[s];for(;++o<u;)(v||o<a)&&(p[e[o]]=t[o]);for(;h--;)p[s++]=t[o++];return p}function da(t,r,e,n){for(var o=-1,a=t.length,u=-1,s=e.length,d=-1,h=r.length,p=X(a-s,0),v=f(p+h),m=!n;++o<p;)v[o]=t[o];for(var _=o;++d<h;)v[_+d]=r[d];for(;++u<s;)(m||o<a)&&(v[_+e[u]]=t[o++]);return v}function it(t,r){var e=-1,n=t.length;for(r||(r=f(n));++e<n;)r[e]=t[e];return r}function Ot(t,r,e,n){var o=!e;e||(e={});for(var a=-1,u=r.length;++a<u;){var s=r[a],d=n?n(e[s],t[s],s,e,t):c;d===c&&(d=t[s]),o?Ut(e,s,d):te(e,s,d)}return e}function Ml(t,r){return Ot(t,fo(t),r)}function Dl(t,r){return Ot(t,Aa(t),r)}function $e(t,r){return function(e,n){var o=T(e)?Gu:cl,a=r?r():{};return o(e,t,x(n,2),a)}}function Rr(t){return E(function(r,e){var n=-1,o=e.length,a=o>1?e[o-1]:c,u=o>2?e[2]:c;for(a=t.length>3&&typeof a=="function"?(o--,a):c,u&&nt(e[0],e[1],u)&&(a=o<3?c:a,o=1),r=D(r);++n<o;){var s=e[n];s&&t(r,s,n,a)}return r})}function fa(t,r){return function(e,n){if(e==null)return e;if(!at(e))return t(e,n);for(var o=e.length,a=r?o:-1,u=D(e);(r?a--:++a<o)&&n(u[a],a,u)!==!1;);return e}}function ga(t){return function(r,e,n){for(var o=-1,a=D(r),u=n(r),s=u.length;s--;){var d=u[t?s:++o];if(e(a[d],d,a)===!1)break}return r}}function Ul(t,r,e){var n=r&pt,o=ie(t);function a(){var u=this&&this!==V&&this instanceof a?o:t;return u.apply(n?e:this,arguments)}return a}function ha(t){return function(r){r=W(r);var e=zr(r)?Tt(r):c,n=e?e[0]:r.charAt(0),o=e?er(e,1).join(""):r.slice(1);return n[t]()+o}}function Br(t){return function(r){return In(fc(dc(r).replace(Eu,"")),t,"")}}function ie(t){return function(){var r=arguments;switch(r.length){case 0:return new t;case 1:return new t(r[0]);case 2:return new t(r[0],r[1]);case 3:return new t(r[0],r[1],r[2]);case 4:return new t(r[0],r[1],r[2],r[3]);case 5:return new t(r[0],r[1],r[2],r[3],r[4]);case 6:return new t(r[0],r[1],r[2],r[3],r[4],r[5]);case 7:return new t(r[0],r[1],r[2],r[3],r[4],r[5],r[6])}var e=Lr(t.prototype),n=t.apply(e,r);return $(n)?n:e}}function Hl(t,r,e){var n=ie(t);function o(){for(var a=arguments.length,u=f(a),s=a,d=Or(o);s--;)u[s]=arguments[s];var h=a<3&&u[0]!==d&&u[a-1]!==d?[]:Qt(u,d);if(a-=h.length,a<e)return _a(t,r,Ge,o.placeholder,c,u,h,c,c,e-a);var p=this&&this!==V&&this instanceof o?n:t;return st(p,this,u)}return o}function pa(t){return function(r,e,n){var o=D(r);if(!at(r)){var a=x(e,3);r=Q(r),e=function(s){return a(o[s],s,o)}}var u=t(r,e,n);return u>-1?o[a?r[u]:u]:c}}function va(t){return Nt(function(r){var e=r.length,n=e,o=_t.prototype.thru;for(t&&r.reverse();n--;){var a=r[n];if(typeof a!="function")throw new bt(F);if(o&&!u&&Ye(a)=="wrapper")var u=new _t([],!0)}for(n=u?n:e;++n<e;){a=r[n];var s=Ye(a),d=s=="wrapper"?so(a):c;d&&ho(d[0])&&d[1]==(Pt|Et|Lt|Ur)&&!d[4].length&&d[9]==1?u=u[Ye(d[0])].apply(u,d[3]):u=a.length==1&&ho(a)?u[s]():u.thru(a)}return function(){var h=arguments,p=h[0];if(u&&h.length==1&&T(p))return u.plant(p).value();for(var v=0,m=e?r[v].apply(this,h):p;++v<e;)m=r[v].call(this,m);return m}})}function Ge(t,r,e,n,o,a,u,s,d,h){var p=r&Pt,v=r&pt,m=r&ir,_=r&(Et|_r),k=r&sn,I=m?c:ie(t);function y(){for(var L=arguments.length,O=f(L),gt=L;gt--;)O[gt]=arguments[gt];if(_)var ot=Or(y),ht=ju(O,ot);if(n&&(O=la(O,n,o,_)),a&&(O=da(O,a,u,_)),L-=ht,_&&L<h){var K=Qt(O,ot);return _a(t,r,Ge,y.placeholder,e,O,K,s,d,h-L)}var It=v?e:this,Kt=m?It[t]:t;return L=O.length,s?O=cd(O,s):k&&L>1&&O.reverse(),p&&d<L&&(O.length=d),this&&this!==V&&this instanceof y&&(Kt=I||ie(Kt)),Kt.apply(It,O)}return y}function ma(t,r){return function(e,n){return pl(e,t,r(n),{})}}function qe(t,r){return function(e,n){var o;if(e===c&&n===c)return r;if(e!==c&&(o=e),n!==c){if(o===c)return n;typeof e=="string"||typeof n=="string"?(e=dt(e),n=dt(n)):(e=ea(e),n=ea(n)),o=t(e,n)}return o}}function io(t){return Nt(function(r){return r=N(r,lt(x())),E(function(e){var n=this;return t(r,function(o){return st(o,n,e)})})})}function Ke(t,r){r=r===c?" ":dt(r);var e=r.length;if(e<2)return e?Vn(r,t):r;var n=Vn(r,Re(t/Tr(r)));return zr(r)?er(Tt(n),0,t).join(""):n.slice(0,t)}function Nl(t,r,e,n){var o=r&pt,a=ie(t);function u(){for(var s=-1,d=arguments.length,h=-1,p=n.length,v=f(p+d),m=this&&this!==V&&this instanceof u?a:t;++h<p;)v[h]=n[h];for(;d--;)v[h++]=arguments[++s];return st(m,o?e:this,v)}return u}function ba(t){return function(r,e,n){return n&&typeof n!="number"&&nt(r,e,n)&&(e=n=c),r=qt(r),e===c?(e=r,r=0):e=qt(e),n=n===c?r<e?1:-1:qt(n),Cl(r,e,n,t)}}function Ze(t){return function(r,e){return typeof r=="string"&&typeof e=="string"||(r=yt(r),e=yt(e)),t(r,e)}}function _a(t,r,e,n,o,a,u,s,d,h){var p=r&Et,v=p?u:c,m=p?c:u,_=p?a:c,k=p?c:a;r|=p?Lt:wr,r&=~(p?wr:Lt),r&Wo||(r&=~(pt|ir));var I=[t,r,o,_,v,k,m,s,d,h],y=e.apply(c,I);return ho(t)&&La(y,I),y.placeholder=n,Ra(y,t,r)}function ao(t){var r=Y[t];return function(e,n){if(e=yt(e),n=n==null?0:tt(C(n),292),n&&Ri(e)){var o=(W(e)+"e").split("e"),a=r(o[0]+"e"+(+o[1]+n));return o=(W(a)+"e").split("e"),+(o[0]+"e"+(+o[1]-n))}return r(e)}}var $l=Ir&&1/ke(new Ir([,-0]))[1]==ar?function(t){return new Ir(t)}:Io;function wa(t){return function(r){var e=rt(r);return e==At?Pn(r):e==zt?as(r):Vu(r,t(r))}}function Ht(t,r,e,n,o,a,u,s){var d=r&ir;if(!d&&typeof t!="function")throw new bt(F);var h=n?n.length:0;if(h||(r&=~(Lt|wr),n=o=c),u=u===c?u:X(C(u),0),s=s===c?s:C(s),h-=o?o.length:0,r&wr){var p=n,v=o;n=o=c}var m=d?c:so(t),_=[t,r,e,n,o,p,v,a,u,s];if(m&&od(_,m),t=_[0],r=_[1],e=_[2],n=_[3],o=_[4],s=_[9]=_[9]===c?d?0:t.length:X(_[9]-h,0),!s&&r&(Et|_r)&&(r&=~(Et|_r)),!r||r==pt)var k=Ul(t,r,e);else r==Et||r==_r?k=Hl(t,r,s):(r==Lt||r==(pt|Lt))&&!o.length?k=Nl(t,r,e,n):k=Ge.apply(c,_);var I=m?ta:La;return Ra(I(k,_),t,r)}function xa(t,r,e,n){return t===c||St(t,Sr[e])&&!M.call(n,e)?r:t}function ka(t,r,e,n,o,a){return $(t)&&$(r)&&(a.set(r,t),Ue(t,r,c,ka,a),a.delete(r)),t}function Gl(t){return ue(t)?c:t}function ya(t,r,e,n,o,a){var u=e&br,s=t.length,d=r.length;if(s!=d&&!(u&&d>s))return!1;var h=a.get(t),p=a.get(r);if(h&&p)return h==r&&p==t;var v=-1,m=!0,_=e&de?new lr:c;for(a.set(t,r),a.set(r,t);++v<s;){var k=t[v],I=r[v];if(n)var y=u?n(I,k,v,r,t,a):n(k,I,v,t,r,a);if(y!==c){if(y)continue;m=!1;break}if(_){if(!En(r,function(L,O){if(!Yr(_,O)&&(k===L||o(k,L,e,n,a)))return _.push(O)})){m=!1;break}}else if(!(k===I||o(k,I,e,n,a))){m=!1;break}}return a.delete(t),a.delete(r),m}function ql(t,r,e,n,o,a,u){switch(e){case kr:if(t.byteLength!=r.byteLength||t.byteOffset!=r.byteOffset)return!1;t=t.buffer,r=r.buffer;case Zr:return!(t.byteLength!=r.byteLength||!a(new Se(t),new Se(r)));case Hr:case Nr:case $r:return St(+t,+r);case he:return t.name==r.name&&t.message==r.message;case Gr:case qr:return t==r+"";case At:var s=Pn;case zt:var d=n&br;if(s||(s=ke),t.size!=r.size&&!d)return!1;var h=u.get(t);if(h)return h==r;n|=de,u.set(t,r);var p=ya(s(t),s(r),n,o,a,u);return u.delete(t),p;case ve:if(jr)return jr.call(t)==jr.call(r)}return!1}function Kl(t,r,e,n,o,a){var u=e&br,s=co(t),d=s.length,h=co(r),p=h.length;if(d!=p&&!u)return!1;for(var v=d;v--;){var m=s[v];if(!(u?m in r:M.call(r,m)))return!1}var _=a.get(t),k=a.get(r);if(_&&k)return _==r&&k==t;var I=!0;a.set(t,r),a.set(r,t);for(var y=u;++v<d;){m=s[v];var L=t[m],O=r[m];if(n)var gt=u?n(O,L,m,r,t,a):n(L,O,m,t,r,a);if(!(gt===c?L===O||o(L,O,e,n,a):gt)){I=!1;break}y||(y=m=="constructor")}if(I&&!y){var ot=t.constructor,ht=r.constructor;ot!=ht&&"constructor"in t&&"constructor"in r&&!(typeof ot=="function"&&ot instanceof ot&&typeof ht=="function"&&ht instanceof ht)&&(I=!1)}return a.delete(t),a.delete(r),I}function Nt(t){return vo(Ia(t,c,Ma),t+"")}function co(t){return $i(t,Q,fo)}function uo(t){return $i(t,ct,Aa)}var so=Oe?function(t){return Oe.get(t)}:Io;function Ye(t){for(var r=t.name+"",e=Er[r],n=M.call(Er,r)?e.length:0;n--;){var o=e[n],a=o.func;if(a==null||a==t)return o.name}return r}function Or(t){var r=M.call(i,"placeholder")?i:t;return r.placeholder}function x(){var t=i.iteratee||Co;return t=t===Co?Ki:t,arguments.length?t(arguments[0],arguments[1]):t}function Xe(t,r){var e=t.__data__;return td(r)?e[typeof r=="string"?"string":"hash"]:e.map}function lo(t){for(var r=Q(t),e=r.length;e--;){var n=r[e],o=t[n];r[e]=[n,o,Ca(o)]}return r}function gr(t,r){var e=ns(t,r);return qi(e)?e:c}function Zl(t){var r=M.call(t,ur),e=t[ur];try{t[ur]=c;var n=!0}catch{}var o=Te.call(t);return n&&(r?t[ur]=e:delete t[ur]),o}var fo=Mn?function(t){return t==null?[]:(t=D(t),Xt(Mn(t),function(r){return Ei.call(t,r)}))}:Eo,Aa=Mn?function(t){for(var r=[];t;)Jt(r,fo(t)),t=Ie(t);return r}:Eo,rt=et;(Dn&&rt(new Dn(new ArrayBuffer(1)))!=kr||Jr&&rt(new Jr)!=At||Un&&rt(Un.resolve())!=Uo||Ir&&rt(new Ir)!=zt||Qr&&rt(new Qr)!=Kr)&&(rt=function(t){var r=et(t),e=r==Wt?t.constructor:c,n=e?hr(e):"";if(n)switch(n){case Is:return kr;case Es:return At;case Ls:return Uo;case Rs:return zt;case Bs:return Kr}return r});function Yl(t,r,e){for(var n=-1,o=e.length;++n<o;){var a=e[n],u=a.size;switch(a.type){case"drop":t+=u;break;case"dropRight":r-=u;break;case"take":r=tt(r,t+u);break;case"takeRight":t=X(t,r-u);break}}return{start:t,end:r}}function Xl(t){var r=t.match(ru);return r?r[1].split(eu):[]}function za(t,r,e){r=rr(r,t);for(var n=-1,o=r.length,a=!1;++n<o;){var u=Ft(r[n]);if(!(a=t!=null&&e(t,u)))break;t=t[u]}return a||++n!=o?a:(o=t==null?0:t.length,!!o&&en(o)&&$t(u,o)&&(T(t)||pr(t)))}function Jl(t){var r=t.length,e=new t.constructor(r);return r&&typeof t[0]=="string"&&M.call(t,"index")&&(e.index=t.index,e.input=t.input),e}function Ta(t){return typeof t.constructor=="function"&&!ae(t)?Lr(Ie(t)):{}}function Ql(t,r,e){var n=t.constructor;switch(r){case Zr:return oo(t);case Hr:case Nr:return new n(+t);case kr:return Ol(t,e);case ln:case dn:case fn:case gn:case hn:case pn:case vn:case mn:case bn:return ua(t,e);case At:return new n;case $r:case qr:return new n(t);case Gr:return Fl(t);case zt:return new n;case ve:return Pl(t)}}function Vl(t,r){var e=r.length;if(!e)return t;var n=e-1;return r[n]=(e>1?"& ":"")+r[n],r=r.join(e>2?", ":" "),t.replace(tu,`{
/* [wrapped with `+r+`] */
`)}function jl(t){return T(t)||pr(t)||!!(Li&&t&&t[Li])}function $t(t,r){var e=typeof t;return r=r??Yt,!!r&&(e=="number"||e!="symbol"&&du.test(t))&&t>-1&&t%1==0&&t<r}function nt(t,r,e){if(!$(e))return!1;var n=typeof r;return(n=="number"?at(e)&&$t(r,e.length):n=="string"&&r in e)?St(e[r],t):!1}function go(t,r){if(T(t))return!1;var e=typeof t;return e=="number"||e=="symbol"||e=="boolean"||t==null||ft(t)?!0:Jc.test(t)||!Xc.test(t)||r!=null&&t in D(r)}function td(t){var r=typeof t;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?t!=="__proto__":t===null}function ho(t){var r=Ye(t),e=i[r];if(typeof e!="function"||!(r in B.prototype))return!1;if(t===e)return!0;var n=so(e);return!!n&&t===n[0]}function rd(t){return!!Ci&&Ci in t}var ed=Ae?Gt:Lo;function ae(t){var r=t&&t.constructor,e=typeof r=="function"&&r.prototype||Sr;return t===e}function Ca(t){return t===t&&!$(t)}function Sa(t,r){return function(e){return e==null?!1:e[t]===r&&(r!==c||t in D(e))}}function nd(t){var r=tn(t,function(n){return e.size===Dr&&e.clear(),n}),e=r.cache;return r}function od(t,r){var e=t[1],n=r[1],o=e|n,a=o<(pt|ir|Pt),u=n==Pt&&e==Et||n==Pt&&e==Ur&&t[7].length<=r[8]||n==(Pt|Ur)&&r[7].length<=r[8]&&e==Et;if(!(a||u))return t;n&pt&&(t[2]=r[2],o|=e&pt?0:Wo);var s=r[3];if(s){var d=t[3];t[3]=d?la(d,s,r[4]):s,t[4]=d?Qt(t[3],vr):r[4]}return s=r[5],s&&(d=t[5],t[5]=d?da(d,s,r[6]):s,t[6]=d?Qt(t[5],vr):r[6]),s=r[7],s&&(t[7]=s),n&Pt&&(t[8]=t[8]==null?r[8]:tt(t[8],r[8])),t[9]==null&&(t[9]=r[9]),t[0]=r[0],t[1]=o,t}function id(t){var r=[];if(t!=null)for(var e in D(t))r.push(e);return r}function ad(t){return Te.call(t)}function Ia(t,r,e){return r=X(r===c?t.length-1:r,0),function(){for(var n=arguments,o=-1,a=X(n.length-r,0),u=f(a);++o<a;)u[o]=n[r+o];o=-1;for(var s=f(r+1);++o<r;)s[o]=n[o];return s[r]=e(u),st(t,this,s)}}function Ea(t,r){return r.length<2?t:fr(t,xt(r,0,-1))}function cd(t,r){for(var e=t.length,n=tt(r.length,e),o=it(t);n--;){var a=r[n];t[n]=$t(a,e)?o[a]:c}return t}function po(t,r){if(!(r==="constructor"&&typeof t[r]=="function")&&r!="__proto__")return t[r]}var La=Ba(ta),ce=ks||function(t,r){return V.setTimeout(t,r)},vo=Ba(El);function Ra(t,r,e){var n=r+"";return vo(t,Vl(n,ud(Xl(n),e)))}function Ba(t){var r=0,e=0;return function(){var n=Ts(),o=Ic-(n-e);if(e=n,o>0){if(++r>=Sc)return arguments[0]}else r=0;return t.apply(c,arguments)}}function Je(t,r){var e=-1,n=t.length,o=n-1;for(r=r===c?n:r;++e<r;){var a=Qn(e,o),u=t[a];t[a]=t[e],t[e]=u}return t.length=r,t}var Oa=nd(function(t){var r=[];return t.charCodeAt(0)===46&&r.push(""),t.replace(Qc,function(e,n,o,a){r.push(o?a.replace(iu,"$1"):n||e)}),r});function Ft(t){if(typeof t=="string"||ft(t))return t;var r=t+"";return r=="0"&&1/t==-ar?"-0":r}function hr(t){if(t!=null){try{return ze.call(t)}catch{}try{return t+""}catch{}}return""}function ud(t,r){return mt(Fc,function(e){var n="_."+e[0];r&e[1]&&!we(t,n)&&t.push(n)}),t.sort()}function Fa(t){if(t instanceof B)return t.clone();var r=new _t(t.__wrapped__,t.__chain__);return r.__actions__=it(t.__actions__),r.__index__=t.__index__,r.__values__=t.__values__,r}function sd(t,r,e){(e?nt(t,r,e):r===c)?r=1:r=X(C(r),0);var n=t==null?0:t.length;if(!n||r<1)return[];for(var o=0,a=0,u=f(Re(n/r));o<n;)u[a++]=xt(t,o,o+=r);return u}function ld(t){for(var r=-1,e=t==null?0:t.length,n=0,o=[];++r<e;){var a=t[r];a&&(o[n++]=a)}return o}function dd(){var t=arguments.length;if(!t)return[];for(var r=f(t-1),e=arguments[0],n=t;n--;)r[n-1]=arguments[n];return Jt(T(e)?it(e):[e],j(r,1))}var fd=E(function(t,r){return q(t)?re(t,j(r,1,q,!0)):[]}),gd=E(function(t,r){var e=kt(r);return q(e)&&(e=c),q(t)?re(t,j(r,1,q,!0),x(e,2)):[]}),hd=E(function(t,r){var e=kt(r);return q(e)&&(e=c),q(t)?re(t,j(r,1,q,!0),c,e):[]});function pd(t,r,e){var n=t==null?0:t.length;return n?(r=e||r===c?1:C(r),xt(t,r<0?0:r,n)):[]}function vd(t,r,e){var n=t==null?0:t.length;return n?(r=e||r===c?1:C(r),r=n-r,xt(t,0,r<0?0:r)):[]}function md(t,r){return t&&t.length?Ne(t,x(r,3),!0,!0):[]}function bd(t,r){return t&&t.length?Ne(t,x(r,3),!0):[]}function _d(t,r,e,n){var o=t==null?0:t.length;return o?(e&&typeof e!="number"&&nt(t,r,e)&&(e=0,n=o),dl(t,r,e,n)):[]}function Pa(t,r,e){var n=t==null?0:t.length;if(!n)return-1;var o=e==null?0:C(e);return o<0&&(o=X(n+o,0)),xe(t,x(r,3),o)}function Wa(t,r,e){var n=t==null?0:t.length;if(!n)return-1;var o=n-1;return e!==c&&(o=C(e),o=e<0?X(n+o,0):tt(o,n-1)),xe(t,x(r,3),o,!0)}function Ma(t){var r=t==null?0:t.length;return r?j(t,1):[]}function wd(t){var r=t==null?0:t.length;return r?j(t,ar):[]}function xd(t,r){var e=t==null?0:t.length;return e?(r=r===c?1:C(r),j(t,r)):[]}function kd(t){for(var r=-1,e=t==null?0:t.length,n={};++r<e;){var o=t[r];n[o[0]]=o[1]}return n}function Da(t){return t&&t.length?t[0]:c}function yd(t,r,e){var n=t==null?0:t.length;if(!n)return-1;var o=e==null?0:C(e);return o<0&&(o=X(n+o,0)),Ar(t,r,o)}function Ad(t){var r=t==null?0:t.length;return r?xt(t,0,-1):[]}var zd=E(function(t){var r=N(t,eo);return r.length&&r[0]===t[0]?Kn(r):[]}),Td=E(function(t){var r=kt(t),e=N(t,eo);return r===kt(e)?r=c:e.pop(),e.length&&e[0]===t[0]?Kn(e,x(r,2)):[]}),Cd=E(function(t){var r=kt(t),e=N(t,eo);return r=typeof r=="function"?r:c,r&&e.pop(),e.length&&e[0]===t[0]?Kn(e,c,r):[]});function Sd(t,r){return t==null?"":As.call(t,r)}function kt(t){var r=t==null?0:t.length;return r?t[r-1]:c}function Id(t,r,e){var n=t==null?0:t.length;if(!n)return-1;var o=n;return e!==c&&(o=C(e),o=o<0?X(n+o,0):tt(o,n-1)),r===r?us(t,r,o):xe(t,_i,o,!0)}function Ed(t,r){return t&&t.length?Ji(t,C(r)):c}var Ld=E(Ua);function Ua(t,r){return t&&t.length&&r&&r.length?Jn(t,r):t}function Rd(t,r,e){return t&&t.length&&r&&r.length?Jn(t,r,x(e,2)):t}function Bd(t,r,e){return t&&t.length&&r&&r.length?Jn(t,r,c,e):t}var Od=Nt(function(t,r){var e=t==null?0:t.length,n=Nn(t,r);return ji(t,N(r,function(o){return $t(o,e)?+o:o}).sort(sa)),n});function Fd(t,r){var e=[];if(!(t&&t.length))return e;var n=-1,o=[],a=t.length;for(r=x(r,3);++n<a;){var u=t[n];r(u,n,t)&&(e.push(u),o.push(n))}return ji(t,o),e}function mo(t){return t==null?t:Ss.call(t)}function Pd(t,r,e){var n=t==null?0:t.length;return n?(e&&typeof e!="number"&&nt(t,r,e)?(r=0,e=n):(r=r==null?0:C(r),e=e===c?n:C(e)),xt(t,r,e)):[]}function Wd(t,r){return He(t,r)}function Md(t,r,e){return jn(t,r,x(e,2))}function Dd(t,r){var e=t==null?0:t.length;if(e){var n=He(t,r);if(n<e&&St(t[n],r))return n}return-1}function Ud(t,r){return He(t,r,!0)}function Hd(t,r,e){return jn(t,r,x(e,2),!0)}function Nd(t,r){var e=t==null?0:t.length;if(e){var n=He(t,r,!0)-1;if(St(t[n],r))return n}return-1}function $d(t){return t&&t.length?ra(t):[]}function Gd(t,r){return t&&t.length?ra(t,x(r,2)):[]}function qd(t){var r=t==null?0:t.length;return r?xt(t,1,r):[]}function Kd(t,r,e){return t&&t.length?(r=e||r===c?1:C(r),xt(t,0,r<0?0:r)):[]}function Zd(t,r,e){var n=t==null?0:t.length;return n?(r=e||r===c?1:C(r),r=n-r,xt(t,r<0?0:r,n)):[]}function Yd(t,r){return t&&t.length?Ne(t,x(r,3),!1,!0):[]}function Xd(t,r){return t&&t.length?Ne(t,x(r,3)):[]}var Jd=E(function(t){return tr(j(t,1,q,!0))}),Qd=E(function(t){var r=kt(t);return q(r)&&(r=c),tr(j(t,1,q,!0),x(r,2))}),Vd=E(function(t){var r=kt(t);return r=typeof r=="function"?r:c,tr(j(t,1,q,!0),c,r)});function jd(t){return t&&t.length?tr(t):[]}function tf(t,r){return t&&t.length?tr(t,x(r,2)):[]}function rf(t,r){return r=typeof r=="function"?r:c,t&&t.length?tr(t,c,r):[]}function bo(t){if(!(t&&t.length))return[];var r=0;return t=Xt(t,function(e){if(q(e))return r=X(e.length,r),!0}),On(r,function(e){return N(t,Ln(e))})}function Ha(t,r){if(!(t&&t.length))return[];var e=bo(t);return r==null?e:N(e,function(n){return st(r,c,n)})}var ef=E(function(t,r){return q(t)?re(t,r):[]}),nf=E(function(t){return ro(Xt(t,q))}),of=E(function(t){var r=kt(t);return q(r)&&(r=c),ro(Xt(t,q),x(r,2))}),af=E(function(t){var r=kt(t);return r=typeof r=="function"?r:c,ro(Xt(t,q),c,r)}),cf=E(bo);function uf(t,r){return ia(t||[],r||[],te)}function sf(t,r){return ia(t||[],r||[],oe)}var lf=E(function(t){var r=t.length,e=r>1?t[r-1]:c;return e=typeof e=="function"?(t.pop(),e):c,Ha(t,e)});function Na(t){var r=i(t);return r.__chain__=!0,r}function df(t,r){return r(t),t}function Qe(t,r){return r(t)}var ff=Nt(function(t){var r=t.length,e=r?t[0]:0,n=this.__wrapped__,o=function(a){return Nn(a,t)};return r>1||this.__actions__.length||!(n instanceof B)||!$t(e)?this.thru(o):(n=n.slice(e,+e+(r?1:0)),n.__actions__.push({func:Qe,args:[o],thisArg:c}),new _t(n,this.__chain__).thru(function(a){return r&&!a.length&&a.push(c),a}))});function gf(){return Na(this)}function hf(){return new _t(this.value(),this.__chain__)}function pf(){this.__values__===c&&(this.__values__=ec(this.value()));var t=this.__index__>=this.__values__.length,r=t?c:this.__values__[this.__index__++];return{done:t,value:r}}function vf(){return this}function mf(t){for(var r,e=this;e instanceof Pe;){var n=Fa(e);n.__index__=0,n.__values__=c,r?o.__wrapped__=n:r=n;var o=n;e=e.__wrapped__}return o.__wrapped__=t,r}function bf(){var t=this.__wrapped__;if(t instanceof B){var r=t;return this.__actions__.length&&(r=new B(this)),r=r.reverse(),r.__actions__.push({func:Qe,args:[mo],thisArg:c}),new _t(r,this.__chain__)}return this.thru(mo)}function _f(){return oa(this.__wrapped__,this.__actions__)}var wf=$e(function(t,r,e){M.call(t,e)?++t[e]:Ut(t,e,1)});function xf(t,r,e){var n=T(t)?mi:ll;return e&&nt(t,r,e)&&(r=c),n(t,x(r,3))}function kf(t,r){var e=T(t)?Xt:Hi;return e(t,x(r,3))}var yf=pa(Pa),Af=pa(Wa);function zf(t,r){return j(Ve(t,r),1)}function Tf(t,r){return j(Ve(t,r),ar)}function Cf(t,r,e){return e=e===c?1:C(e),j(Ve(t,r),e)}function $a(t,r){var e=T(t)?mt:jt;return e(t,x(r,3))}function Ga(t,r){var e=T(t)?qu:Ui;return e(t,x(r,3))}var Sf=$e(function(t,r,e){M.call(t,e)?t[e].push(r):Ut(t,e,[r])});function If(t,r,e,n){t=at(t)?t:Pr(t),e=e&&!n?C(e):0;var o=t.length;return e<0&&(e=X(o+e,0)),nn(t)?e<=o&&t.indexOf(r,e)>-1:!!o&&Ar(t,r,e)>-1}var Ef=E(function(t,r,e){var n=-1,o=typeof r=="function",a=at(t)?f(t.length):[];return jt(t,function(u){a[++n]=o?st(r,u,e):ee(u,r,e)}),a}),Lf=$e(function(t,r,e){Ut(t,e,r)});function Ve(t,r){var e=T(t)?N:Zi;return e(t,x(r,3))}function Rf(t,r,e,n){return t==null?[]:(T(r)||(r=r==null?[]:[r]),e=n?c:e,T(e)||(e=e==null?[]:[e]),Qi(t,r,e))}var Bf=$e(function(t,r,e){t[e?0:1].push(r)},function(){return[[],[]]});function Of(t,r,e){var n=T(t)?In:xi,o=arguments.length<3;return n(t,x(r,4),e,o,jt)}function Ff(t,r,e){var n=T(t)?Ku:xi,o=arguments.length<3;return n(t,x(r,4),e,o,Ui)}function Pf(t,r){var e=T(t)?Xt:Hi;return e(t,rn(x(r,3)))}function Wf(t){var r=T(t)?Pi:Sl;return r(t)}function Mf(t,r,e){(e?nt(t,r,e):r===c)?r=1:r=C(r);var n=T(t)?il:Il;return n(t,r)}function Df(t){var r=T(t)?al:Ll;return r(t)}function Uf(t){if(t==null)return 0;if(at(t))return nn(t)?Tr(t):t.length;var r=rt(t);return r==At||r==zt?t.size:Yn(t).length}function Hf(t,r,e){var n=T(t)?En:Rl;return e&&nt(t,r,e)&&(r=c),n(t,x(r,3))}var Nf=E(function(t,r){if(t==null)return[];var e=r.length;return e>1&&nt(t,r[0],r[1])?r=[]:e>2&&nt(r[0],r[1],r[2])&&(r=[r[0]]),Qi(t,j(r,1),[])}),je=xs||function(){return V.Date.now()};function $f(t,r){if(typeof r!="function")throw new bt(F);return t=C(t),function(){if(--t<1)return r.apply(this,arguments)}}function qa(t,r,e){return r=e?c:r,r=t&&r==null?t.length:r,Ht(t,Pt,c,c,c,c,r)}function Ka(t,r){var e;if(typeof r!="function")throw new bt(F);return t=C(t),function(){return--t>0&&(e=r.apply(this,arguments)),t<=1&&(r=c),e}}var _o=E(function(t,r,e){var n=pt;if(e.length){var o=Qt(e,Or(_o));n|=Lt}return Ht(t,n,r,e,o)}),Za=E(function(t,r,e){var n=pt|ir;if(e.length){var o=Qt(e,Or(Za));n|=Lt}return Ht(r,n,t,e,o)});function Ya(t,r,e){r=e?c:r;var n=Ht(t,Et,c,c,c,c,c,r);return n.placeholder=Ya.placeholder,n}function Xa(t,r,e){r=e?c:r;var n=Ht(t,_r,c,c,c,c,c,r);return n.placeholder=Xa.placeholder,n}function Ja(t,r,e){var n,o,a,u,s,d,h=0,p=!1,v=!1,m=!0;if(typeof t!="function")throw new bt(F);r=yt(r)||0,$(e)&&(p=!!e.leading,v="maxWait"in e,a=v?X(yt(e.maxWait)||0,r):a,m="trailing"in e?!!e.trailing:m);function _(K){var It=n,Kt=o;return n=o=c,h=K,u=t.apply(Kt,It),u}function k(K){return h=K,s=ce(L,r),p?_(K):u}function I(K){var It=K-d,Kt=K-h,pc=r-It;return v?tt(pc,a-Kt):pc}function y(K){var It=K-d,Kt=K-h;return d===c||It>=r||It<0||v&&Kt>=a}function L(){var K=je();if(y(K))return O(K);s=ce(L,I(K))}function O(K){return s=c,m&&n?_(K):(n=o=c,u)}function gt(){s!==c&&aa(s),h=0,n=d=o=s=c}function ot(){return s===c?u:O(je())}function ht(){var K=je(),It=y(K);if(n=arguments,o=this,d=K,It){if(s===c)return k(d);if(v)return aa(s),s=ce(L,r),_(d)}return s===c&&(s=ce(L,r)),u}return ht.cancel=gt,ht.flush=ot,ht}var Gf=E(function(t,r){return Di(t,1,r)}),qf=E(function(t,r,e){return Di(t,yt(r)||0,e)});function Kf(t){return Ht(t,sn)}function tn(t,r){if(typeof t!="function"||r!=null&&typeof r!="function")throw new bt(F);var e=function(){var n=arguments,o=r?r.apply(this,n):n[0],a=e.cache;if(a.has(o))return a.get(o);var u=t.apply(this,n);return e.cache=a.set(o,u)||a,u};return e.cache=new(tn.Cache||Dt),e}tn.Cache=Dt;function rn(t){if(typeof t!="function")throw new bt(F);return function(){var r=arguments;switch(r.length){case 0:return!t.call(this);case 1:return!t.call(this,r[0]);case 2:return!t.call(this,r[0],r[1]);case 3:return!t.call(this,r[0],r[1],r[2])}return!t.apply(this,r)}}function Zf(t){return Ka(2,t)}var Yf=Bl(function(t,r){r=r.length==1&&T(r[0])?N(r[0],lt(x())):N(j(r,1),lt(x()));var e=r.length;return E(function(n){for(var o=-1,a=tt(n.length,e);++o<a;)n[o]=r[o].call(this,n[o]);return st(t,this,n)})}),wo=E(function(t,r){var e=Qt(r,Or(wo));return Ht(t,Lt,c,r,e)}),Qa=E(function(t,r){var e=Qt(r,Or(Qa));return Ht(t,wr,c,r,e)}),Xf=Nt(function(t,r){return Ht(t,Ur,c,c,c,r)});function Jf(t,r){if(typeof t!="function")throw new bt(F);return r=r===c?r:C(r),E(t,r)}function Qf(t,r){if(typeof t!="function")throw new bt(F);return r=r==null?0:X(C(r),0),E(function(e){var n=e[r],o=er(e,0,r);return n&&Jt(o,n),st(t,this,o)})}function Vf(t,r,e){var n=!0,o=!0;if(typeof t!="function")throw new bt(F);return $(e)&&(n="leading"in e?!!e.leading:n,o="trailing"in e?!!e.trailing:o),Ja(t,r,{leading:n,maxWait:r,trailing:o})}function jf(t){return qa(t,1)}function tg(t,r){return wo(no(r),t)}function rg(){if(!arguments.length)return[];var t=arguments[0];return T(t)?t:[t]}function eg(t){return wt(t,mr)}function ng(t,r){return r=typeof r=="function"?r:c,wt(t,mr,r)}function og(t){return wt(t,Zt|mr)}function ig(t,r){return r=typeof r=="function"?r:c,wt(t,Zt|mr,r)}function ag(t,r){return r==null||Mi(t,r,Q(r))}function St(t,r){return t===r||t!==t&&r!==r}var cg=Ze(qn),ug=Ze(function(t,r){return t>=r}),pr=Gi(function(){return arguments}())?Gi:function(t){return G(t)&&M.call(t,"callee")&&!Ei.call(t,"callee")},T=f.isArray,sg=di?lt(di):vl;function at(t){return t!=null&&en(t.length)&&!Gt(t)}function q(t){return G(t)&&at(t)}function lg(t){return t===!0||t===!1||G(t)&&et(t)==Hr}var nr=ys||Lo,dg=fi?lt(fi):ml;function fg(t){return G(t)&&t.nodeType===1&&!ue(t)}function gg(t){if(t==null)return!0;if(at(t)&&(T(t)||typeof t=="string"||typeof t.splice=="function"||nr(t)||Fr(t)||pr(t)))return!t.length;var r=rt(t);if(r==At||r==zt)return!t.size;if(ae(t))return!Yn(t).length;for(var e in t)if(M.call(t,e))return!1;return!0}function hg(t,r){return ne(t,r)}function pg(t,r,e){e=typeof e=="function"?e:c;var n=e?e(t,r):c;return n===c?ne(t,r,c,e):!!n}function xo(t){if(!G(t))return!1;var r=et(t);return r==he||r==Wc||typeof t.message=="string"&&typeof t.name=="string"&&!ue(t)}function vg(t){return typeof t=="number"&&Ri(t)}function Gt(t){if(!$(t))return!1;var r=et(t);return r==pe||r==Do||r==Pc||r==Dc}function Va(t){return typeof t=="number"&&t==C(t)}function en(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=Yt}function $(t){var r=typeof t;return t!=null&&(r=="object"||r=="function")}function G(t){return t!=null&&typeof t=="object"}var ja=gi?lt(gi):_l;function mg(t,r){return t===r||Zn(t,r,lo(r))}function bg(t,r,e){return e=typeof e=="function"?e:c,Zn(t,r,lo(r),e)}function _g(t){return tc(t)&&t!=+t}function wg(t){if(ed(t))throw new z(Z);return qi(t)}function xg(t){return t===null}function kg(t){return t==null}function tc(t){return typeof t=="number"||G(t)&&et(t)==$r}function ue(t){if(!G(t)||et(t)!=Wt)return!1;var r=Ie(t);if(r===null)return!0;var e=M.call(r,"constructor")&&r.constructor;return typeof e=="function"&&e instanceof e&&ze.call(e)==ms}var ko=hi?lt(hi):wl;function yg(t){return Va(t)&&t>=-Yt&&t<=Yt}var rc=pi?lt(pi):xl;function nn(t){return typeof t=="string"||!T(t)&&G(t)&&et(t)==qr}function ft(t){return typeof t=="symbol"||G(t)&&et(t)==ve}var Fr=vi?lt(vi):kl;function Ag(t){return t===c}function zg(t){return G(t)&&rt(t)==Kr}function Tg(t){return G(t)&&et(t)==Hc}var Cg=Ze(Xn),Sg=Ze(function(t,r){return t<=r});function ec(t){if(!t)return[];if(at(t))return nn(t)?Tt(t):it(t);if(Xr&&t[Xr])return is(t[Xr]());var r=rt(t),e=r==At?Pn:r==zt?ke:Pr;return e(t)}function qt(t){if(!t)return t===0?t:0;if(t=yt(t),t===ar||t===-ar){var r=t<0?-1:1;return r*Rc}return t===t?t:0}function C(t){var r=qt(t),e=r%1;return r===r?e?r-e:r:0}function nc(t){return t?dr(C(t),0,Rt):0}function yt(t){if(typeof t=="number")return t;if(ft(t))return fe;if($(t)){var r=typeof t.valueOf=="function"?t.valueOf():t;t=$(r)?r+"":r}if(typeof t!="string")return t===0?t:+t;t=ki(t);var e=uu.test(t);return e||lu.test(t)?Nu(t.slice(2),e?2:8):cu.test(t)?fe:+t}function oc(t){return Ot(t,ct(t))}function Ig(t){return t?dr(C(t),-Yt,Yt):t===0?t:0}function W(t){return t==null?"":dt(t)}var Eg=Rr(function(t,r){if(ae(r)||at(r)){Ot(r,Q(r),t);return}for(var e in r)M.call(r,e)&&te(t,e,r[e])}),ic=Rr(function(t,r){Ot(r,ct(r),t)}),on=Rr(function(t,r,e,n){Ot(r,ct(r),t,n)}),Lg=Rr(function(t,r,e,n){Ot(r,Q(r),t,n)}),Rg=Nt(Nn);function Bg(t,r){var e=Lr(t);return r==null?e:Wi(e,r)}var Og=E(function(t,r){t=D(t);var e=-1,n=r.length,o=n>2?r[2]:c;for(o&&nt(r[0],r[1],o)&&(n=1);++e<n;)for(var a=r[e],u=ct(a),s=-1,d=u.length;++s<d;){var h=u[s],p=t[h];(p===c||St(p,Sr[h])&&!M.call(t,h))&&(t[h]=a[h])}return t}),Fg=E(function(t){return t.push(c,ka),st(ac,c,t)});function Pg(t,r){return bi(t,x(r,3),Bt)}function Wg(t,r){return bi(t,x(r,3),Gn)}function Mg(t,r){return t==null?t:$n(t,x(r,3),ct)}function Dg(t,r){return t==null?t:Ni(t,x(r,3),ct)}function Ug(t,r){return t&&Bt(t,x(r,3))}function Hg(t,r){return t&&Gn(t,x(r,3))}function Ng(t){return t==null?[]:De(t,Q(t))}function $g(t){return t==null?[]:De(t,ct(t))}function yo(t,r,e){var n=t==null?c:fr(t,r);return n===c?e:n}function Gg(t,r){return t!=null&&za(t,r,fl)}function Ao(t,r){return t!=null&&za(t,r,gl)}var qg=ma(function(t,r,e){r!=null&&typeof r.toString!="function"&&(r=Te.call(r)),t[r]=e},To(ut)),Kg=ma(function(t,r,e){r!=null&&typeof r.toString!="function"&&(r=Te.call(r)),M.call(t,r)?t[r].push(e):t[r]=[e]},x),Zg=E(ee);function Q(t){return at(t)?Fi(t):Yn(t)}function ct(t){return at(t)?Fi(t,!0):yl(t)}function Yg(t,r){var e={};return r=x(r,3),Bt(t,function(n,o,a){Ut(e,r(n,o,a),n)}),e}function Xg(t,r){var e={};return r=x(r,3),Bt(t,function(n,o,a){Ut(e,o,r(n,o,a))}),e}var Jg=Rr(function(t,r,e){Ue(t,r,e)}),ac=Rr(function(t,r,e,n){Ue(t,r,e,n)}),Qg=Nt(function(t,r){var e={};if(t==null)return e;var n=!1;r=N(r,function(a){return a=rr(a,t),n||(n=a.length>1),a}),Ot(t,uo(t),e),n&&(e=wt(e,Zt|Po|mr,Gl));for(var o=r.length;o--;)to(e,r[o]);return e});function Vg(t,r){return cc(t,rn(x(r)))}var jg=Nt(function(t,r){return t==null?{}:zl(t,r)});function cc(t,r){if(t==null)return{};var e=N(uo(t),function(n){return[n]});return r=x(r),Vi(t,e,function(n,o){return r(n,o[0])})}function th(t,r,e){r=rr(r,t);var n=-1,o=r.length;for(o||(o=1,t=c);++n<o;){var a=t==null?c:t[Ft(r[n])];a===c&&(n=o,a=e),t=Gt(a)?a.call(t):a}return t}function rh(t,r,e){return t==null?t:oe(t,r,e)}function eh(t,r,e,n){return n=typeof n=="function"?n:c,t==null?t:oe(t,r,e,n)}var uc=wa(Q),sc=wa(ct);function nh(t,r,e){var n=T(t),o=n||nr(t)||Fr(t);if(r=x(r,4),e==null){var a=t&&t.constructor;o?e=n?new a:[]:$(t)?e=Gt(a)?Lr(Ie(t)):{}:e={}}return(o?mt:Bt)(t,function(u,s,d){return r(e,u,s,d)}),e}function oh(t,r){return t==null?!0:to(t,r)}function ih(t,r,e){return t==null?t:na(t,r,no(e))}function ah(t,r,e,n){return n=typeof n=="function"?n:c,t==null?t:na(t,r,no(e),n)}function Pr(t){return t==null?[]:Fn(t,Q(t))}function ch(t){return t==null?[]:Fn(t,ct(t))}function uh(t,r,e){return e===c&&(e=r,r=c),e!==c&&(e=yt(e),e=e===e?e:0),r!==c&&(r=yt(r),r=r===r?r:0),dr(yt(t),r,e)}function sh(t,r,e){return r=qt(r),e===c?(e=r,r=0):e=qt(e),t=yt(t),hl(t,r,e)}function lh(t,r,e){if(e&&typeof e!="boolean"&&nt(t,r,e)&&(r=e=c),e===c&&(typeof r=="boolean"?(e=r,r=c):typeof t=="boolean"&&(e=t,t=c)),t===c&&r===c?(t=0,r=1):(t=qt(t),r===c?(r=t,t=0):r=qt(r)),t>r){var n=t;t=r,r=n}if(e||t%1||r%1){var o=Bi();return tt(t+o*(r-t+Hu("1e-"+((o+"").length-1))),r)}return Qn(t,r)}var dh=Br(function(t,r,e){return r=r.toLowerCase(),t+(e?lc(r):r)});function lc(t){return zo(W(t).toLowerCase())}function dc(t){return t=W(t),t&&t.replace(fu,ts).replace(Lu,"")}function fh(t,r,e){t=W(t),r=dt(r);var n=t.length;e=e===c?n:dr(C(e),0,n);var o=e;return e-=r.length,e>=0&&t.slice(e,o)==r}function gh(t){return t=W(t),t&&Kc.test(t)?t.replace(No,rs):t}function hh(t){return t=W(t),t&&Vc.test(t)?t.replace(_n,"\\$&"):t}var ph=Br(function(t,r,e){return t+(e?"-":"")+r.toLowerCase()}),vh=Br(function(t,r,e){return t+(e?" ":"")+r.toLowerCase()}),mh=ha("toLowerCase");function bh(t,r,e){t=W(t),r=C(r);var n=r?Tr(t):0;if(!r||n>=r)return t;var o=(r-n)/2;return Ke(Be(o),e)+t+Ke(Re(o),e)}function _h(t,r,e){t=W(t),r=C(r);var n=r?Tr(t):0;return r&&n<r?t+Ke(r-n,e):t}function wh(t,r,e){t=W(t),r=C(r);var n=r?Tr(t):0;return r&&n<r?Ke(r-n,e)+t:t}function xh(t,r,e){return e||r==null?r=0:r&&(r=+r),Cs(W(t).replace(wn,""),r||0)}function kh(t,r,e){return(e?nt(t,r,e):r===c)?r=1:r=C(r),Vn(W(t),r)}function yh(){var t=arguments,r=W(t[0]);return t.length<3?r:r.replace(t[1],t[2])}var Ah=Br(function(t,r,e){return t+(e?"_":"")+r.toLowerCase()});function zh(t,r,e){return e&&typeof e!="number"&&nt(t,r,e)&&(r=e=c),e=e===c?Rt:e>>>0,e?(t=W(t),t&&(typeof r=="string"||r!=null&&!ko(r))&&(r=dt(r),!r&&zr(t))?er(Tt(t),0,e):t.split(r,e)):[]}var Th=Br(function(t,r,e){return t+(e?" ":"")+zo(r)});function Ch(t,r,e){return t=W(t),e=e==null?0:dr(C(e),0,t.length),r=dt(r),t.slice(e,e+r.length)==r}function Sh(t,r,e){var n=i.templateSettings;e&&nt(t,r,e)&&(r=c),t=W(t),r=on({},r,n,xa);var o=on({},r.imports,n.imports,xa),a=Q(o),u=Fn(o,a),s,d,h=0,p=r.interpolate||me,v="__p += '",m=Wn((r.escape||me).source+"|"+p.source+"|"+(p===$o?au:me).source+"|"+(r.evaluate||me).source+"|$","g"),_="//# sourceURL="+(M.call(r,"sourceURL")?(r.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Pu+"]")+`
`;t.replace(m,function(y,L,O,gt,ot,ht){return O||(O=gt),v+=t.slice(h,ht).replace(gu,es),L&&(s=!0,v+=`' +
__e(`+L+`) +
'`),ot&&(d=!0,v+=`';
`+ot+`;
__p += '`),O&&(v+=`' +
((__t = (`+O+`)) == null ? '' : __t) +
'`),h=ht+y.length,y}),v+=`';
`;var k=M.call(r,"variable")&&r.variable;if(!k)v=`with (obj) {
`+v+`
}
`;else if(ou.test(k))throw new z(Mr);v=(d?v.replace(Nc,""):v).replace($c,"$1").replace(Gc,"$1;"),v="function("+(k||"obj")+`) {
`+(k?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(s?", __e = _.escape":"")+(d?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+v+`return __p
}`;var I=gc(function(){return P(a,_+"return "+v).apply(c,u)});if(I.source=v,xo(I))throw I;return I}function Ih(t){return W(t).toLowerCase()}function Eh(t){return W(t).toUpperCase()}function Lh(t,r,e){if(t=W(t),t&&(e||r===c))return ki(t);if(!t||!(r=dt(r)))return t;var n=Tt(t),o=Tt(r),a=yi(n,o),u=Ai(n,o)+1;return er(n,a,u).join("")}function Rh(t,r,e){if(t=W(t),t&&(e||r===c))return t.slice(0,Ti(t)+1);if(!t||!(r=dt(r)))return t;var n=Tt(t),o=Ai(n,Tt(r))+1;return er(n,0,o).join("")}function Bh(t,r,e){if(t=W(t),t&&(e||r===c))return t.replace(wn,"");if(!t||!(r=dt(r)))return t;var n=Tt(t),o=yi(n,Tt(r));return er(n,o).join("")}function Oh(t,r){var e=Tc,n=Cc;if($(r)){var o="separator"in r?r.separator:o;e="length"in r?C(r.length):e,n="omission"in r?dt(r.omission):n}t=W(t);var a=t.length;if(zr(t)){var u=Tt(t);a=u.length}if(e>=a)return t;var s=e-Tr(n);if(s<1)return n;var d=u?er(u,0,s).join(""):t.slice(0,s);if(o===c)return d+n;if(u&&(s+=d.length-s),ko(o)){if(t.slice(s).search(o)){var h,p=d;for(o.global||(o=Wn(o.source,W(Go.exec(o))+"g")),o.lastIndex=0;h=o.exec(p);)var v=h.index;d=d.slice(0,v===c?s:v)}}else if(t.indexOf(dt(o),s)!=s){var m=d.lastIndexOf(o);m>-1&&(d=d.slice(0,m))}return d+n}function Fh(t){return t=W(t),t&&qc.test(t)?t.replace(Ho,ss):t}var Ph=Br(function(t,r,e){return t+(e?" ":"")+r.toUpperCase()}),zo=ha("toUpperCase");function fc(t,r,e){return t=W(t),r=e?c:r,r===c?os(t)?fs(t):Xu(t):t.match(r)||[]}var gc=E(function(t,r){try{return st(t,c,r)}catch(e){return xo(e)?e:new z(e)}}),Wh=Nt(function(t,r){return mt(r,function(e){e=Ft(e),Ut(t,e,_o(t[e],t))}),t});function Mh(t){var r=t==null?0:t.length,e=x();return t=r?N(t,function(n){if(typeof n[1]!="function")throw new bt(F);return[e(n[0]),n[1]]}):[],E(function(n){for(var o=-1;++o<r;){var a=t[o];if(st(a[0],this,n))return st(a[1],this,n)}})}function Dh(t){return sl(wt(t,Zt))}function To(t){return function(){return t}}function Uh(t,r){return t==null||t!==t?r:t}var Hh=va(),Nh=va(!0);function ut(t){return t}function Co(t){return Ki(typeof t=="function"?t:wt(t,Zt))}function $h(t){return Yi(wt(t,Zt))}function Gh(t,r){return Xi(t,wt(r,Zt))}var qh=E(function(t,r){return function(e){return ee(e,t,r)}}),Kh=E(function(t,r){return function(e){return ee(t,e,r)}});function So(t,r,e){var n=Q(r),o=De(r,n);e==null&&!($(r)&&(o.length||!n.length))&&(e=r,r=t,t=this,o=De(r,Q(r)));var a=!($(e)&&"chain"in e)||!!e.chain,u=Gt(t);return mt(o,function(s){var d=r[s];t[s]=d,u&&(t.prototype[s]=function(){var h=this.__chain__;if(a||h){var p=t(this.__wrapped__),v=p.__actions__=it(this.__actions__);return v.push({func:d,args:arguments,thisArg:t}),p.__chain__=h,p}return d.apply(t,Jt([this.value()],arguments))})}),t}function Zh(){return V._===this&&(V._=bs),this}function Io(){}function Yh(t){return t=C(t),E(function(r){return Ji(r,t)})}var Xh=io(N),Jh=io(mi),Qh=io(En);function hc(t){return go(t)?Ln(Ft(t)):Tl(t)}function Vh(t){return function(r){return t==null?c:fr(t,r)}}var jh=ba(),tp=ba(!0);function Eo(){return[]}function Lo(){return!1}function rp(){return{}}function ep(){return""}function np(){return!0}function op(t,r){if(t=C(t),t<1||t>Yt)return[];var e=Rt,n=tt(t,Rt);r=x(r),t-=Rt;for(var o=On(n,r);++e<t;)r(e);return o}function ip(t){return T(t)?N(t,Ft):ft(t)?[t]:it(Oa(W(t)))}function ap(t){var r=++vs;return W(t)+r}var cp=qe(function(t,r){return t+r},0),up=ao("ceil"),sp=qe(function(t,r){return t/r},1),lp=ao("floor");function dp(t){return t&&t.length?Me(t,ut,qn):c}function fp(t,r){return t&&t.length?Me(t,x(r,2),qn):c}function gp(t){return wi(t,ut)}function hp(t,r){return wi(t,x(r,2))}function pp(t){return t&&t.length?Me(t,ut,Xn):c}function vp(t,r){return t&&t.length?Me(t,x(r,2),Xn):c}var mp=qe(function(t,r){return t*r},1),bp=ao("round"),_p=qe(function(t,r){return t-r},0);function wp(t){return t&&t.length?Bn(t,ut):0}function xp(t,r){return t&&t.length?Bn(t,x(r,2)):0}return i.after=$f,i.ary=qa,i.assign=Eg,i.assignIn=ic,i.assignInWith=on,i.assignWith=Lg,i.at=Rg,i.before=Ka,i.bind=_o,i.bindAll=Wh,i.bindKey=Za,i.castArray=rg,i.chain=Na,i.chunk=sd,i.compact=ld,i.concat=dd,i.cond=Mh,i.conforms=Dh,i.constant=To,i.countBy=wf,i.create=Bg,i.curry=Ya,i.curryRight=Xa,i.debounce=Ja,i.defaults=Og,i.defaultsDeep=Fg,i.defer=Gf,i.delay=qf,i.difference=fd,i.differenceBy=gd,i.differenceWith=hd,i.drop=pd,i.dropRight=vd,i.dropRightWhile=md,i.dropWhile=bd,i.fill=_d,i.filter=kf,i.flatMap=zf,i.flatMapDeep=Tf,i.flatMapDepth=Cf,i.flatten=Ma,i.flattenDeep=wd,i.flattenDepth=xd,i.flip=Kf,i.flow=Hh,i.flowRight=Nh,i.fromPairs=kd,i.functions=Ng,i.functionsIn=$g,i.groupBy=Sf,i.initial=Ad,i.intersection=zd,i.intersectionBy=Td,i.intersectionWith=Cd,i.invert=qg,i.invertBy=Kg,i.invokeMap=Ef,i.iteratee=Co,i.keyBy=Lf,i.keys=Q,i.keysIn=ct,i.map=Ve,i.mapKeys=Yg,i.mapValues=Xg,i.matches=$h,i.matchesProperty=Gh,i.memoize=tn,i.merge=Jg,i.mergeWith=ac,i.method=qh,i.methodOf=Kh,i.mixin=So,i.negate=rn,i.nthArg=Yh,i.omit=Qg,i.omitBy=Vg,i.once=Zf,i.orderBy=Rf,i.over=Xh,i.overArgs=Yf,i.overEvery=Jh,i.overSome=Qh,i.partial=wo,i.partialRight=Qa,i.partition=Bf,i.pick=jg,i.pickBy=cc,i.property=hc,i.propertyOf=Vh,i.pull=Ld,i.pullAll=Ua,i.pullAllBy=Rd,i.pullAllWith=Bd,i.pullAt=Od,i.range=jh,i.rangeRight=tp,i.rearg=Xf,i.reject=Pf,i.remove=Fd,i.rest=Jf,i.reverse=mo,i.sampleSize=Mf,i.set=rh,i.setWith=eh,i.shuffle=Df,i.slice=Pd,i.sortBy=Nf,i.sortedUniq=$d,i.sortedUniqBy=Gd,i.split=zh,i.spread=Qf,i.tail=qd,i.take=Kd,i.takeRight=Zd,i.takeRightWhile=Yd,i.takeWhile=Xd,i.tap=df,i.throttle=Vf,i.thru=Qe,i.toArray=ec,i.toPairs=uc,i.toPairsIn=sc,i.toPath=ip,i.toPlainObject=oc,i.transform=nh,i.unary=jf,i.union=Jd,i.unionBy=Qd,i.unionWith=Vd,i.uniq=jd,i.uniqBy=tf,i.uniqWith=rf,i.unset=oh,i.unzip=bo,i.unzipWith=Ha,i.update=ih,i.updateWith=ah,i.values=Pr,i.valuesIn=ch,i.without=ef,i.words=fc,i.wrap=tg,i.xor=nf,i.xorBy=of,i.xorWith=af,i.zip=cf,i.zipObject=uf,i.zipObjectDeep=sf,i.zipWith=lf,i.entries=uc,i.entriesIn=sc,i.extend=ic,i.extendWith=on,So(i,i),i.add=cp,i.attempt=gc,i.camelCase=dh,i.capitalize=lc,i.ceil=up,i.clamp=uh,i.clone=eg,i.cloneDeep=og,i.cloneDeepWith=ig,i.cloneWith=ng,i.conformsTo=ag,i.deburr=dc,i.defaultTo=Uh,i.divide=sp,i.endsWith=fh,i.eq=St,i.escape=gh,i.escapeRegExp=hh,i.every=xf,i.find=yf,i.findIndex=Pa,i.findKey=Pg,i.findLast=Af,i.findLastIndex=Wa,i.findLastKey=Wg,i.floor=lp,i.forEach=$a,i.forEachRight=Ga,i.forIn=Mg,i.forInRight=Dg,i.forOwn=Ug,i.forOwnRight=Hg,i.get=yo,i.gt=cg,i.gte=ug,i.has=Gg,i.hasIn=Ao,i.head=Da,i.identity=ut,i.includes=If,i.indexOf=yd,i.inRange=sh,i.invoke=Zg,i.isArguments=pr,i.isArray=T,i.isArrayBuffer=sg,i.isArrayLike=at,i.isArrayLikeObject=q,i.isBoolean=lg,i.isBuffer=nr,i.isDate=dg,i.isElement=fg,i.isEmpty=gg,i.isEqual=hg,i.isEqualWith=pg,i.isError=xo,i.isFinite=vg,i.isFunction=Gt,i.isInteger=Va,i.isLength=en,i.isMap=ja,i.isMatch=mg,i.isMatchWith=bg,i.isNaN=_g,i.isNative=wg,i.isNil=kg,i.isNull=xg,i.isNumber=tc,i.isObject=$,i.isObjectLike=G,i.isPlainObject=ue,i.isRegExp=ko,i.isSafeInteger=yg,i.isSet=rc,i.isString=nn,i.isSymbol=ft,i.isTypedArray=Fr,i.isUndefined=Ag,i.isWeakMap=zg,i.isWeakSet=Tg,i.join=Sd,i.kebabCase=ph,i.last=kt,i.lastIndexOf=Id,i.lowerCase=vh,i.lowerFirst=mh,i.lt=Cg,i.lte=Sg,i.max=dp,i.maxBy=fp,i.mean=gp,i.meanBy=hp,i.min=pp,i.minBy=vp,i.stubArray=Eo,i.stubFalse=Lo,i.stubObject=rp,i.stubString=ep,i.stubTrue=np,i.multiply=mp,i.nth=Ed,i.noConflict=Zh,i.noop=Io,i.now=je,i.pad=bh,i.padEnd=_h,i.padStart=wh,i.parseInt=xh,i.random=lh,i.reduce=Of,i.reduceRight=Ff,i.repeat=kh,i.replace=yh,i.result=th,i.round=bp,i.runInContext=l,i.sample=Wf,i.size=Uf,i.snakeCase=Ah,i.some=Hf,i.sortedIndex=Wd,i.sortedIndexBy=Md,i.sortedIndexOf=Dd,i.sortedLastIndex=Ud,i.sortedLastIndexBy=Hd,i.sortedLastIndexOf=Nd,i.startCase=Th,i.startsWith=Ch,i.subtract=_p,i.sum=wp,i.sumBy=xp,i.template=Sh,i.times=op,i.toFinite=qt,i.toInteger=C,i.toLength=nc,i.toLower=Ih,i.toNumber=yt,i.toSafeInteger=Ig,i.toString=W,i.toUpper=Eh,i.trim=Lh,i.trimEnd=Rh,i.trimStart=Bh,i.truncate=Oh,i.unescape=Fh,i.uniqueId=ap,i.upperCase=Ph,i.upperFirst=zo,i.each=$a,i.eachRight=Ga,i.first=Da,So(i,function(){var t={};return Bt(i,function(r,e){M.call(i.prototype,e)||(t[e]=r)}),t}(),{chain:!1}),i.VERSION=R,mt(["bind","bindKey","curry","curryRight","partial","partialRight"],function(t){i[t].placeholder=i}),mt(["drop","take"],function(t,r){B.prototype[t]=function(e){e=e===c?1:X(C(e),0);var n=this.__filtered__&&!r?new B(this):this.clone();return n.__filtered__?n.__takeCount__=tt(e,n.__takeCount__):n.__views__.push({size:tt(e,Rt),type:t+(n.__dir__<0?"Right":"")}),n},B.prototype[t+"Right"]=function(e){return this.reverse()[t](e).reverse()}}),mt(["filter","map","takeWhile"],function(t,r){var e=r+1,n=e==Mo||e==Lc;B.prototype[t]=function(o){var a=this.clone();return a.__iteratees__.push({iteratee:x(o,3),type:e}),a.__filtered__=a.__filtered__||n,a}}),mt(["head","last"],function(t,r){var e="take"+(r?"Right":"");B.prototype[t]=function(){return this[e](1).value()[0]}}),mt(["initial","tail"],function(t,r){var e="drop"+(r?"":"Right");B.prototype[t]=function(){return this.__filtered__?new B(this):this[e](1)}}),B.prototype.compact=function(){return this.filter(ut)},B.prototype.find=function(t){return this.filter(t).head()},B.prototype.findLast=function(t){return this.reverse().find(t)},B.prototype.invokeMap=E(function(t,r){return typeof t=="function"?new B(this):this.map(function(e){return ee(e,t,r)})}),B.prototype.reject=function(t){return this.filter(rn(x(t)))},B.prototype.slice=function(t,r){t=C(t);var e=this;return e.__filtered__&&(t>0||r<0)?new B(e):(t<0?e=e.takeRight(-t):t&&(e=e.drop(t)),r!==c&&(r=C(r),e=r<0?e.dropRight(-r):e.take(r-t)),e)},B.prototype.takeRightWhile=function(t){return this.reverse().takeWhile(t).reverse()},B.prototype.toArray=function(){return this.take(Rt)},Bt(B.prototype,function(t,r){var e=/^(?:filter|find|map|reject)|While$/.test(r),n=/^(?:head|last)$/.test(r),o=i[n?"take"+(r=="last"?"Right":""):r],a=n||/^find/.test(r);o&&(i.prototype[r]=function(){var u=this.__wrapped__,s=n?[1]:arguments,d=u instanceof B,h=s[0],p=d||T(u),v=function(L){var O=o.apply(i,Jt([L],s));return n&&m?O[0]:O};p&&e&&typeof h=="function"&&h.length!=1&&(d=p=!1);var m=this.__chain__,_=!!this.__actions__.length,k=a&&!m,I=d&&!_;if(!a&&p){u=I?u:new B(this);var y=t.apply(u,s);return y.__actions__.push({func:Qe,args:[v],thisArg:c}),new _t(y,m)}return k&&I?t.apply(this,s):(y=this.thru(v),k?n?y.value()[0]:y.value():y)})}),mt(["pop","push","shift","sort","splice","unshift"],function(t){var r=ye[t],e=/^(?:push|sort|unshift)$/.test(t)?"tap":"thru",n=/^(?:pop|shift)$/.test(t);i.prototype[t]=function(){var o=arguments;if(n&&!this.__chain__){var a=this.value();return r.apply(T(a)?a:[],o)}return this[e](function(u){return r.apply(T(u)?u:[],o)})}}),Bt(B.prototype,function(t,r){var e=i[r];if(e){var n=e.name+"";M.call(Er,n)||(Er[n]=[]),Er[n].push({name:r,func:e})}}),Er[Ge(c,ir).name]=[{name:"wrapper",func:c}],B.prototype.clone=Os,B.prototype.reverse=Fs,B.prototype.value=Ps,i.prototype.at=ff,i.prototype.chain=gf,i.prototype.commit=hf,i.prototype.next=pf,i.prototype.plant=mf,i.prototype.reverse=bf,i.prototype.toJSON=i.prototype.valueOf=i.prototype.value=_f,i.prototype.first=i.prototype.head,Xr&&(i.prototype[Xr]=vf),i},Cr=gs();cr?((cr.exports=Cr)._=Cr,Tn._=Cr):V._=Cr}).call(se)})(Bo,Bo.exports);var Jp=Object.defineProperty,Qp=Object.getOwnPropertyDescriptor,Fo=(S,w,c,R)=>{for(var A=R>1?void 0:R?Qp(w,c):w,Z=S.length-1,F;Z>=0;Z--)(F=S[Z])&&(A=(R?F(w,c,A):F(A))||A);return R&&A&&Jp(w,c,A),A};let un=class extends yp{constructor(){super(...arguments),this.initialValue=[],this.filteredOptions=[]}renderTags(){return!Array.isArray(this.value)||this.value.length===0?null:J`
      ${this.value.map(S=>J`
          <sp-tag
            deleteable
            value="${S}"
            @click=${()=>this.handleRemove(S)}
            >${this.getOptionText(S)}</sp-tag
          >
        `)}
    `}renderHelpText(){return this.label?J` <sp-help-text slot="help-text"> ${this.label} </sp-help-text>`:J``}get spectrumTextfield(){return this.renderRoot.querySelector(`.chips-${this.elementId}`)}get inputValue(){return this.spectrumTextfield.value}resetText(){this.spectrumTextfield.value=""}eventValueAccessor(S){return S}handleRemove(S){const w=this.value,c=S,R=w.filter(A=>A!==c);this.handleChange(R)}handleAdd(){var A;const S=(A=this.inputValue)==null?void 0:A.trim();if(!(S&&S.length>0))return;const R=[...this.value,S];this.store.datasets[this.data].parameters[this.option]=R,this.resetText()}filterOptions(S){const w=this.options||[];if(typeof w[0]=="object"){const c=w.filter(R=>`${R.label}`.toLowerCase().includes(`${S}`.toLowerCase()));this.filteredOptions=c}else{const c=w.filter(R=>`${R}`.toLowerCase().includes(`${Bo.exports.filter}`.toLowerCase()));this.filteredOptions=c}}handleTextEnter(S){if(S.key==="Enter"&&this.handleAdd(),this.options&&this.options.length>0){const c=this.spectrumTextfield.value;console.log(c);const R=this.filterOptions(c);console.log(R)}}template(){return J`
      <div style="max-width:"100%">
      ${this.renderTags()} 
      </div>
      <sp-field-label for="chips-${this.elementId}"
        >${this.title}</sp-field-label
      >
      <sp-textfield
        class="chips-${this.elementId}"
        id="chips-${this.elementId}"
        placeholder=${this.label}
        @keydown=${this.handleTextEnter}
      >
        ${this.renderHelpText()}
      </sp-textfield>

      <sp-action-button @click=${this.handleAdd}>
          <sp-icon-add-circle slot="icon"></sp-icon-add-circle>
      </sp-action-button>

    `}};Fo([Wr({type:Object})],un.prototype,"initialValue",2);Fo([Wr({type:Array})],un.prototype,"filteredOptions",2);un=Fo([kp("osl-chips")],un);const Tv={title:"Interface"},an=()=>J`
    <osl-chips
      data="http://localhost:6006/data/interaction.json"
      initialValue="[5,6,7,8]"
      title="Magnitude"
      option="morg"
      label="Enter a new magnitude value"
    >
    </osl-chips>
  `,cn=()=>J`
    <osl-chips
      data="https://d3lsdszfx9jqxt.cloudfront.net/data-query/6542775ca570c6000898f983"
      initialValue="[]"
      title="Product Name"
      option="product_in"
      label="Add Products To Query"
      options=${JSON.stringify(jp)}
    >
    </osl-chips>
    <div style="width:100%;height:50vh;">
      <osl-data-table
        columns='["product_code","product_name"]'
        data="https://d3lsdszfx9jqxt.cloudfront.net/data-query/6542775ca570c6000898f983"
      ></osl-data-table>
    </div>
  `;var Vp=[[6681,"Mini Tabs"],[7095,"Grenadier"],[8225,"Cyncal 80%"],[12081,"Tac-San Plus"],[13522,"Ct 936l"],[13723,"Soda Ash"],[18745,"Do-It-All"],[19824,"Cytex"],[21155,"Extract-2"],[25016,"Drexel Captan 50w"],[46384,"Sonar Q"],[48299,"Gibgro 20% Powder"],[60804,"Exomite Pro"],[62146,"Ratimor Wax Block"],[62411,"Irgarol 1051"],[63354,"Headway G"],[63820,"Algae Guard"],[63872,"Acticide Ips 40"],[67925,"Contans Wg"],[68563,"Banter Wdg"],[68564,"Firepro"],[68726,"Topsin M Technical"],[69651,"Sterilex Ultra Step"],[69955,"Takedown Soft Bait"],[70218,"Master Label - Elf"],[70837,"Bifenamite 50 Wdg"],[71399,"Dexter Max Fungicide "],[141,"Jen-Sal Tic-Cide"],[-1,"Unknown"],[1,"Harris Famous Roach Tablets"],[2,"Mosquito Beater"],[3,"Sweeney'S Poison Wheat With Rozol"],[4,"Cabot'S Creosote Stains 0245 Smoke Gray"],[5,"Cabot'S Creosote Stains 0247 Dark Gray"],[6,"Cabot'S Creosote Stains 0238 Bungalow Brown"],[7,"Cabot'S Creosote Stains 0220 Tile Red"],[8,"Cabot'S Creosote Stains 0237 Bark Brown"],[9,"Cabot'S Creosote Stains 0222 Dark Brownish Red"],[10,"Cabot'S Creosote Stains 0230 Colorless Creosote"],[11,"Cabot'S Creosote Stains 0244 Silver Gray"],[12,"Cabot'S Creosote Stains 0239 Seal Brown"],[13,"Cabot'S Creosote Stains 0243 Medium Gray"],[14,"Cabot'S Creosote Stains 0260 Black"],[15,"Cabot'S Penta-Wood-Seal #3110"]],jp=Vp.map(S=>({label:S[1],value:S[0]})),vc,mc,bc;an.parameters={...an.parameters,docs:{...(vc=an.parameters)==null?void 0:vc.docs,source:{originalSource:`() => {
  return html\`
    <osl-chips
      data="http://localhost:6006/data/interaction.json"
      initialValue="[5,6,7,8]"
      title="Magnitude"
      option="morg"
      label="Enter a new magnitude value"
    >
    </osl-chips>
  \`;
}`,...(bc=(mc=an.parameters)==null?void 0:mc.docs)==null?void 0:bc.source}}};var _c,wc,xc;cn.parameters={...cn.parameters,docs:{...(_c=cn.parameters)==null?void 0:_c.docs,source:{originalSource:`() => {
  return html\`
    <osl-chips
      data="https://d3lsdszfx9jqxt.cloudfront.net/data-query/6542775ca570c6000898f983"
      initialValue="[]"
      title="Product Name"
      option="product_in"
      label="Add Products To Query"
      options=\${JSON.stringify(autocompleteOptions)}
    >
    </osl-chips>
    <div style="width:100%;height:50vh;">
      <osl-data-table
        columns='["product_code","product_name"]'
        data="https://d3lsdszfx9jqxt.cloudfront.net/data-query/6542775ca570c6000898f983"
      ></osl-data-table>
    </div>
  \`;
}`,...(xc=(wc=cn.parameters)==null?void 0:wc.docs)==null?void 0:xc.source}}};const Cv=["Chips","AutocompleteChips"];export{cn as AutocompleteChips,an as Chips,Cv as __namedExportsOrder,Tv as default};
//# sourceMappingURL=Chips.stories-a765557e.js.map
