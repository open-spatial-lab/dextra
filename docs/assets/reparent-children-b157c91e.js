function f(r,c,a=[]){for(let e=0;e<c.length;++e){const n=c[e],o=r[e],t=o.parentElement||o.getRootNode();a[e]&&a[e](n),t&&t!==o&&t.replaceChild(n,o),delete r[e]}return c}const m=(r,c,{position:a,prepareCallback:e}={position:"beforeend"})=>{let{length:n}=r;if(n===0)return()=>r;let o=1,t=0;(a==="afterbegin"||a==="afterend")&&(o=-1,t=n-1);const d=new Array(n),i=new Array(n),s=document.createComment("placeholder for reparented element");do{const l=r[t];e&&(i[t]=e(l)),d[t]=s.cloneNode();const p=l.parentElement||l.getRootNode();p&&p!==l&&p.replaceChild(d[t],l),c.insertAdjacentElement(a,l),t+=o}while(--n>0);return function(){return f(d,r,i)}};export{m as r};
//# sourceMappingURL=reparent-children-b157c91e.js.map