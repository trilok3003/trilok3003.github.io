"use strict";(self.webpackChunkportfolio_all_in_one=self.webpackChunkportfolio_all_in_one||[]).push([[772],{772:(R,i,s)=>{s.r(i),s.d(i,{RouteReuseStrategyTutsModule:()=>C});var u=s(9808),a=s(4202),t=s(5e3);let c=(()=>{class e{ngOnInit(){this.randoms=[];const n=this.getRandom(10);for(let r=0;r<n;r++)this.randoms.push(this.getRandom(100))}getRandom(n){return Math.floor(Math.random()*n)}ngOnDestroy(){console.log(`Destroy ${this.displayName}`)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac}),e})();const p=function(e){return["detail",e]};function m(e,o){if(1&e&&(t.TgZ(0,"li",2)(1,"a",3),t._uU(2),t.qZA()()),2&e){const n=o.$implicit;t.xp6(1),t.Q6J("routerLink",t.VKq(2,p,n)),t.xp6(1),t.hij("Go to ",n,"")}}let d=(()=>{class e extends c{constructor(){super(...arguments),this.displayName="ParentComponent"}}return e.\u0275fac=function(){let o;return function(r){return(o||(o=t.n5z(e)))(r||e)}}(),e.\u0275cmp=t.Xpm({type:e,selectors:[["app-parent"]],features:[t.qOj],decls:5,vars:1,consts:[[1,"nav","nav-tabs"],["class","nav-item",4,"ngFor","ngForOf"],[1,"nav-item"],["routerLinkActive","active",1,"nav-link",3,"routerLink"]],template:function(n,r){1&n&&(t.TgZ(0,"h1"),t._uU(1,"Parent Component"),t.qZA(),t.TgZ(2,"ul",0),t.YNc(3,m,3,4,"li",1),t.qZA(),t._UZ(4,"router-outlet")),2&n&&(t.xp6(3),t.Q6J("ngForOf",r.randoms))},dependencies:[u.sg,a.lC,a.yS,a.Od]}),e})(),l=(()=>{class e{constructor(n,r){this.route=n,this.routeReuseStrategy=r}ngOnInit(){this.route.params.subscribe(n=>this.routeParam=n.detailId),this.randomVal=Math.floor(100*Math.random())}ngOnDestroy(){console.log(`Destroy detail: ${this.routeParam}`)}clearStoredRoute(){this.routeReuseStrategy.clearSavedHandle("/routeReuse/search/")}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(a.gz),t.Y36(a.wN))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-detail"]],decls:10,vars:2,consts:[["role","alert",1,"alert","alert-primary"],[1,"btn","btn-danger",3,"click"]],template:function(n,r){1&n&&(t.TgZ(0,"div",0)(1,"strong"),t._uU(2,"Detail ID:"),t.qZA(),t._uU(3),t.qZA(),t.TgZ(4,"div")(5,"strong"),t._uU(6,"Random value:"),t.qZA(),t._uU(7),t.qZA(),t.TgZ(8,"button",1),t.NdJ("click",function(){return r.clearStoredRoute()}),t._uU(9,"Clear Search"),t.qZA()),2&n&&(t.xp6(3),t.hij(" ",r.routeParam,"\n"),t.xp6(4),t.hij(" ",r.randomVal,"\n"))}}),e})();const h=function(e){return["detail",e]};function f(e,o){if(1&e&&(t.TgZ(0,"li",2)(1,"a",3),t._uU(2),t.qZA()()),2&e){const n=o.$implicit;t.xp6(1),t.Q6J("routerLink",t.VKq(2,h,n)),t.xp6(1),t.hij("Go to ",n,"")}}const g=[{path:"",component:d,children:[{path:"detail/:detailId",component:l,data:{alwaysRefresh:!0}}]},{path:"search",children:[{path:"",component:(()=>{class e extends c{constructor(){super(...arguments),this.displayName="SearchComponent"}}return e.\u0275fac=function(){let o;return function(r){return(o||(o=t.n5z(e)))(r||e)}}(),e.\u0275cmp=t.Xpm({type:e,selectors:[["app-search"]],features:[t.qOj],decls:4,vars:1,consts:[[1,"nav","nav-pills","flex-column"],["class","nav-item",4,"ngFor","ngForOf"],[1,"nav-item"],["routerLinkActive","active",1,"nav-link",3,"routerLink"]],template:function(n,r){1&n&&(t.TgZ(0,"h1"),t._uU(1,"Search Component"),t.qZA(),t.TgZ(2,"ul",0),t.YNc(3,f,3,4,"li",1),t.qZA()),2&n&&(t.xp6(3),t.Q6J("ngForOf",r.randoms))},dependencies:[u.sg,a.yS,a.Od]}),e})(),data:{saveComponent:!0}},{path:"detail/:detailId",component:l}]}];let y=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[a.Bz.forChild(g),a.Bz]}),e})(),C=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.ez,y]}),e})()}}]);