class a{constructor(t,{target:s,config:e,callback:h,skipInitial:i}){this.t=new Set,this.o=!1,this.i=!1,this.h=t,s!==null&&this.t.add(s??t),this.l=e,this.o=i??this.o,this.callback=h,window.MutationObserver?(this.u=new MutationObserver(o=>{this.handleChanges(o),this.h.requestUpdate()}),t.addController(this)):console.warn("MutationController error: browser does not support MutationObserver.")}handleChanges(t){var s;this.value=(s=this.callback)===null||s===void 0?void 0:s.call(this,t,this.u)}hostConnected(){for(const t of this.t)this.observe(t)}hostDisconnected(){this.disconnect()}async hostUpdated(){const t=this.u.takeRecords();(t.length||!this.o&&this.i)&&this.handleChanges(t),this.i=!1}observe(t){this.t.add(t),this.u.observe(t,this.l),this.i=!0,this.h.requestUpdate()}disconnect(){this.u.disconnect()}}export{a as t};
//# sourceMappingURL=mutation_controller-e745007b.js.map