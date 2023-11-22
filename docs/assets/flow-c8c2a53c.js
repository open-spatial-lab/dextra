import{_ as p}from"./iframe-b912c67f.js";import"../sb-preview/runtime.js";class f{constructor(i){this._map=new Map,this._roundAverageSize=!1,this.totalSize=0,(i==null?void 0:i.roundAverageSize)===!0&&(this._roundAverageSize=!0)}set(i,t){const s=this._map.get(i)||0;this._map.set(i,t),this.totalSize+=t-s}get averageSize(){if(this._map.size>0){const i=this.totalSize/this._map.size;return this._roundAverageSize?Math.round(i):i}return 0}getSize(i){return this._map.get(i)}clear(){this._map.clear(),this.totalSize=0}}let m,S;async function v(){return S||P()}async function P(){m=window.EventTarget;try{new m}catch{m=(await p(()=>import("./index-086eb4c0.js"),[],import.meta.url)).EventTarget}return S=m}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function z(n){return n==="horizontal"?"width":"height"}class w{constructor(i){this._latestCoords={left:0,top:0},this._direction=null,this._viewportSize={width:0,height:0},this.totalScrollSize={width:0,height:0},this.offsetWithinScroller={left:0,top:0},this._pendingReflow=!1,this._pendingLayoutUpdate=!1,this._pin=null,this._firstVisible=0,this._lastVisible=0,this._eventTargetPromise=v().then(t=>{this._eventTarget=new t}),this._physicalMin=0,this._physicalMax=0,this._first=-1,this._last=-1,this._sizeDim="height",this._secondarySizeDim="width",this._positionDim="top",this._secondaryPositionDim="left",this._scrollPosition=0,this._scrollError=0,this._items=[],this._scrollSize=1,this._overhang=1e3,this._eventTarget=null,Promise.resolve().then(()=>this.config=i||this._defaultConfig)}get _defaultConfig(){return{direction:"vertical"}}set config(i){Object.assign(this,Object.assign({},this._defaultConfig,i))}get config(){return{direction:this.direction}}get items(){return this._items}set items(i){i!==this._items&&(this._items=i,this._scheduleReflow())}get direction(){return this._direction}set direction(i){i=i==="horizontal"?i:"vertical",i!==this._direction&&(this._direction=i,this._sizeDim=i==="horizontal"?"width":"height",this._secondarySizeDim=i==="horizontal"?"height":"width",this._positionDim=i==="horizontal"?"left":"top",this._secondaryPositionDim=i==="horizontal"?"top":"left",this._triggerReflow())}get viewportSize(){return this._viewportSize}set viewportSize(i){const{_viewDim1:t,_viewDim2:s}=this;Object.assign(this._viewportSize,i),s!==this._viewDim2?this._scheduleLayoutUpdate():t!==this._viewDim1&&this._checkThresholds()}get viewportScroll(){return this._latestCoords}set viewportScroll(i){Object.assign(this._latestCoords,i);const t=this._scrollPosition;this._scrollPosition=this._latestCoords[this._positionDim],Math.abs(t-this._scrollPosition)>=1&&this._updateVisibleIndices({emit:!0}),this._checkThresholds()}reflowIfNeeded(i=!1){(i||this._pendingReflow)&&(this._pendingReflow=!1,this._reflow())}set pin(i){this._pin=i,this._triggerReflow()}get pin(){if(this._pin!==null){const{index:i,block:t}=this._pin;return{index:Math.max(0,Math.min(i,this.items.length-1)),block:t}}return null}_clampScrollPosition(i){return Math.max(-this.offsetWithinScroller[this._positionDim],Math.min(i,this.totalScrollSize[z(this.direction)]-this._viewDim1))}unpin(){this._pin!==null&&(this._emitUnpinned(),this._pin=null)}async dispatchEvent(i){await this._eventTargetPromise,this._eventTarget.dispatchEvent(i)}async addEventListener(i,t,s){await this._eventTargetPromise,this._eventTarget.addEventListener(i,t,s)}async removeEventListener(i,t,s){await this._eventTargetPromise,this._eventTarget.removeEventListener(i,t,s)}_updateLayout(){}get _viewDim1(){return this._viewportSize[this._sizeDim]}get _viewDim2(){return this._viewportSize[this._secondarySizeDim]}_scheduleReflow(){this._pendingReflow=!0}_scheduleLayoutUpdate(){this._pendingLayoutUpdate=!0,this._scheduleReflow()}_triggerReflow(){this._scheduleLayoutUpdate(),Promise.resolve().then(()=>this.reflowIfNeeded())}_reflow(){this._pendingLayoutUpdate&&(this._updateLayout(),this._pendingLayoutUpdate=!1),this._updateScrollSize(),this._setPositionFromPin(),this._getActiveItems(),this._updateVisibleIndices(),this._emitScrollSize(),this._emitRange(),this._emitChildPositions(),this._emitScrollError()}_setPositionFromPin(){if(this.pin!==null){const i=this._scrollPosition,{index:t,block:s}=this.pin;this._scrollPosition=this._calculateScrollIntoViewPosition({index:t,block:s||"start"})-this.offsetWithinScroller[this._positionDim],this._scrollError=i-this._scrollPosition}}_calculateScrollIntoViewPosition(i){const{block:t}=i,s=Math.min(this.items.length,Math.max(0,i.index)),e=this._getItemPosition(s)[this._positionDim];let h=e;if(t!=="start"){const a=this._getItemSize(s)[this._sizeDim];if(t==="center")h=e-.5*this._viewDim1+.5*a;else{const r=e-this._viewDim1+a;if(t==="end")h=r;else{const l=this._scrollPosition;h=Math.abs(l-e)<Math.abs(l-r)?e:r}}}return h+=this.offsetWithinScroller[this._positionDim],this._clampScrollPosition(h)}getScrollIntoViewCoordinates(i){return{[this._positionDim]:this._calculateScrollIntoViewPosition(i)}}_emitUnpinned(){this.dispatchEvent(new CustomEvent("unpinned"))}_emitRange(){const i={first:this._first,last:this._last,firstVisible:this._firstVisible,lastVisible:this._lastVisible};this.dispatchEvent(new CustomEvent("rangechange",{detail:i}))}_emitScrollSize(){const i={[this._sizeDim]:this._scrollSize,[this._secondarySizeDim]:null};this.dispatchEvent(new CustomEvent("scrollsizechange",{detail:i}))}_emitScrollError(){if(this._scrollError){const i={[this._positionDim]:this._scrollError,[this._secondaryPositionDim]:0};this.dispatchEvent(new CustomEvent("scrollerrorchange",{detail:i})),this._scrollError=0}}_emitChildPositions(){if(this._first!==-1&&this._last!==-1){const i=new Map;for(let t=this._first;t<=this._last;t++)i.set(t,this._getItemPosition(t));this.dispatchEvent(new CustomEvent("itempositionchange",{detail:i}))}}get _num(){return this._first===-1||this._last===-1?0:this._last-this._first+1}_checkThresholds(){if(this._viewDim1===0&&this._num>0||this._pin!==null)this._scheduleReflow();else{const i=Math.max(0,this._scrollPosition-this._overhang),t=Math.min(this._scrollSize,this._scrollPosition+this._viewDim1+this._overhang);(this._physicalMin>i||this._physicalMax<t)&&this._scheduleReflow()}}_updateVisibleIndices(i){if(this._first===-1||this._last===-1)return;let t=this._first;for(;t<this._last&&Math.round(this._getItemPosition(t)[this._positionDim]+this._getItemSize(t)[this._sizeDim])<=Math.round(this._scrollPosition);)t++;let s=this._last;for(;s>this._first&&Math.round(this._getItemPosition(s)[this._positionDim])>=Math.round(this._scrollPosition+this._viewDim1);)s--;(t!==this._firstVisible||s!==this._lastVisible)&&(this._firstVisible=t,this._lastVisible=s,i&&i.emit&&this._emitRange())}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const x=n=>Object.assign({type:b},n);function u(n){return n==="horizontal"?"marginLeft":"marginTop"}function M(n){return n==="horizontal"?"marginRight":"marginBottom"}function y(n){return n==="horizontal"?"xOffset":"yOffset"}function C(n,i){const t=[n,i].sort();return t[1]<=0?Math.min(...t):t[0]>=0?Math.max(...t):t[0]+t[1]}class I{constructor(){this._childSizeCache=new f,this._marginSizeCache=new f,this._metricsCache=new Map}update(i,t){var s,e;const h=new Set;Object.keys(i).forEach(a=>{const r=Number(a);this._metricsCache.set(r,i[r]),this._childSizeCache.set(r,i[r][z(t)]),h.add(r),h.add(r+1)});for(const a of h){const r=((s=this._metricsCache.get(a))===null||s===void 0?void 0:s[u(t)])||0,l=((e=this._metricsCache.get(a-1))===null||e===void 0?void 0:e[M(t)])||0;this._marginSizeCache.set(a,C(r,l))}}get averageChildSize(){return this._childSizeCache.averageSize}get totalChildSize(){return this._childSizeCache.totalSize}get averageMarginSize(){return this._marginSizeCache.averageSize}get totalMarginSize(){return this._marginSizeCache.totalSize}getLeadingMarginValue(i,t){var s;return((s=this._metricsCache.get(i))===null||s===void 0?void 0:s[u(t)])||0}getChildSize(i){return this._childSizeCache.getSize(i)}getMarginSize(i){return this._marginSizeCache.getSize(i)}clear(){this._childSizeCache.clear(),this._marginSizeCache.clear(),this._metricsCache.clear()}}class b extends w{constructor(){super(...arguments),this._itemSize={width:100,height:100},this._physicalItems=new Map,this._newPhysicalItems=new Map,this._metricsCache=new I,this._anchorIdx=null,this._anchorPos=null,this._stable=!0,this._measureChildren=!0,this._estimate=!0}get measureChildren(){return this._measureChildren}updateItemSizes(i){this._metricsCache.update(i,this.direction),this._scheduleReflow()}_getPhysicalItem(i){var t;return(t=this._newPhysicalItems.get(i))!==null&&t!==void 0?t:this._physicalItems.get(i)}_getSize(i){return this._getPhysicalItem(i)&&this._metricsCache.getChildSize(i)}_getAverageSize(){return this._metricsCache.averageChildSize||this._itemSize[this._sizeDim]}_estimatePosition(i){const t=this._metricsCache;if(this._first===-1||this._last===-1)return t.averageMarginSize+i*(t.averageMarginSize+this._getAverageSize());if(i<this._first){const s=this._first-i;return this._getPhysicalItem(this._first).pos-(t.getMarginSize(this._first-1)||t.averageMarginSize)-(s*t.averageChildSize+(s-1)*t.averageMarginSize)}else{const s=i-this._last;return this._getPhysicalItem(this._last).pos+(t.getChildSize(this._last)||t.averageChildSize)+(t.getMarginSize(this._last)||t.averageMarginSize)+s*(t.averageChildSize+t.averageMarginSize)}}_getPosition(i){var t;const s=this._getPhysicalItem(i),{averageMarginSize:e}=this._metricsCache;return i===0?(t=this._metricsCache.getMarginSize(0))!==null&&t!==void 0?t:e:s?s.pos:this._estimatePosition(i)}_calculateAnchor(i,t){return i<=0?0:t>this._scrollSize-this._viewDim1?this.items.length-1:Math.max(0,Math.min(this.items.length-1,Math.floor((i+t)/2/this._delta)))}_getAnchor(i,t){if(this._physicalItems.size===0)return this._calculateAnchor(i,t);if(this._first<0)return this._calculateAnchor(i,t);if(this._last<0)return this._calculateAnchor(i,t);const s=this._getPhysicalItem(this._first),e=this._getPhysicalItem(this._last),h=s.pos;if(e.pos+this._metricsCache.getChildSize(this._last)<i)return this._calculateAnchor(i,t);if(h>t)return this._calculateAnchor(i,t);let l=this._firstVisible-1,_=-1/0;for(;_<i;)_=this._getPhysicalItem(++l).pos+this._metricsCache.getChildSize(l);return l}_getActiveItems(){this._viewDim1===0||this.items.length===0?this._clearItems():this._getItems()}_clearItems(){this._first=-1,this._last=-1,this._physicalMin=0,this._physicalMax=0;const i=this._newPhysicalItems;this._newPhysicalItems=this._physicalItems,this._newPhysicalItems.clear(),this._physicalItems=i,this._stable=!0}_getItems(){var i,t;const s=this._newPhysicalItems;this._stable=!0;let e,h;if(this.pin!==null){const{index:o}=this.pin;this._anchorIdx=o,this._anchorPos=this._getPosition(o)}if(e=this._scrollPosition-this._overhang,h=this._scrollPosition+this._viewDim1+this._overhang,h<0||e>this._scrollSize){this._clearItems();return}(this._anchorIdx===null||this._anchorPos===null)&&(this._anchorIdx=this._getAnchor(e,h),this._anchorPos=this._getPosition(this._anchorIdx));let a=this._getSize(this._anchorIdx);a===void 0&&(this._stable=!1,a=this._getAverageSize());const r=(i=this._metricsCache.getMarginSize(this._anchorIdx))!==null&&i!==void 0?i:this._metricsCache.averageMarginSize,l=(t=this._metricsCache.getMarginSize(this._anchorIdx+1))!==null&&t!==void 0?t:this._metricsCache.averageMarginSize;this._anchorIdx===0&&(this._anchorPos=r),this._anchorIdx===this.items.length-1&&(this._anchorPos=this._scrollSize-l-a);let _=0;for(this._anchorPos+a+l<e&&(_=e-(this._anchorPos+a+l)),this._anchorPos-r>h&&(_=h-(this._anchorPos-r)),_&&(this._scrollPosition-=_,e-=_,h-=_,this._scrollError+=_),s.set(this._anchorIdx,{pos:this._anchorPos,size:a}),this._first=this._last=this._anchorIdx,this._physicalMin=this._anchorPos-r,this._physicalMax=this._anchorPos+a+l;this._physicalMin>e&&this._first>0;){let o=this._getSize(--this._first);o===void 0&&(this._stable=!1,o=this._getAverageSize());let g=this._metricsCache.getMarginSize(this._first);g===void 0&&(this._stable=!1,g=this._metricsCache.averageMarginSize),this._physicalMin-=o;const d=this._physicalMin;if(s.set(this._first,{pos:d,size:o}),this._physicalMin-=g,this._stable===!1&&this._estimate===!1)break}for(;this._physicalMax<h&&this._last<this.items.length-1;){let o=this._getSize(++this._last);o===void 0&&(this._stable=!1,o=this._getAverageSize());let g=this._metricsCache.getMarginSize(this._last);g===void 0&&(this._stable=!1,g=this._metricsCache.averageMarginSize);const d=this._physicalMax;if(s.set(this._last,{pos:d,size:o}),this._physicalMax+=o+g,!this._stable&&!this._estimate)break}const c=this._calculateError();c&&(this._physicalMin-=c,this._physicalMax-=c,this._anchorPos-=c,this._scrollPosition-=c,s.forEach(o=>o.pos-=c),this._scrollError+=c),this._stable&&(this._newPhysicalItems=this._physicalItems,this._newPhysicalItems.clear(),this._physicalItems=s)}_calculateError(){return this._first===0?this._physicalMin:this._physicalMin<=0?this._physicalMin-this._first*this._delta:this._last===this.items.length-1?this._physicalMax-this._scrollSize:this._physicalMax>=this._scrollSize?this._physicalMax-this._scrollSize+(this.items.length-1-this._last)*this._delta:0}_reflow(){const{_first:i,_last:t,_scrollSize:s,_firstVisible:e,_lastVisible:h}=this;this._updateScrollSize(),this._setPositionFromPin(),this._getActiveItems(),this._updateVisibleIndices(),this._scrollSize!==s&&this._emitScrollSize(),(this._first!==i||this._last!==t||this._firstVisible!==e||this._lastVisible!==h)&&this._emitRange(),this._first===-1&&this._last===-1||this._emitChildPositions(),this._scrollError!==0&&this._emitScrollError(),(this._first===-1&&this._last==-1||this._first===i&&this._last===t)&&this._resetReflowState()}_resetReflowState(){this._anchorIdx=null,this._anchorPos=null,this._stable=!0}_updateScrollSize(){const{averageMarginSize:i}=this._metricsCache;this._scrollSize=Math.max(1,this.items.length*(i+this._getAverageSize())+i)}get _delta(){const{averageMarginSize:i}=this._metricsCache;return this._getAverageSize()+i}_getItemPosition(i){var t;return{[this._positionDim]:this._getPosition(i),[this._secondaryPositionDim]:0,[y(this.direction)]:-((t=this._metricsCache.getLeadingMarginValue(i,this.direction))!==null&&t!==void 0?t:this._metricsCache.averageMarginSize)}}_getItemSize(i){return{[this._sizeDim]:this._getSize(i)||this._getAverageSize(),[this._secondarySizeDim]:this._itemSize[this._secondarySizeDim]}}_viewDim2Changed(){this._metricsCache.clear(),this._scheduleReflow()}}export{b as FlowLayout,x as flow};
//# sourceMappingURL=flow-c8c2a53c.js.map