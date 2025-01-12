"use strict";(self.webpackChunkportfolio_all_in_one=self.webpackChunkportfolio_all_in_one||[]).push([[8262],{8262:(w,u,c)=>{c.r(u),c.d(u,{EmployeesModule:()=>P});var m=c(177),d=c(884),e=c(4438);const f=()=>["./employeesPage"];let y=(()=>{class s{constructor(){}ngOnInit(){}static{this.\u0275fac=function(o){return new(o||s)}}static{this.\u0275cmp=e.VBU({type:s,selectors:[["app-employees"]],standalone:!1,decls:8,vars:2,consts:[[1,"navbar","navbar-expand-lg","navbar-light","bg-light","mb-3"],[1,"navbar-brand","mb-0","h1"],[1,"navbar-nav","mr-auto"],["routerLinkActive","active",1,"nav-item",3,"routerLink"],[1,"nav-link"]],template:function(o,i){1&o&&(e.j41(0,"nav",0)(1,"span",1),e.EFF(2,"Angular + Firebase + State Management"),e.k0s(),e.j41(3,"ul",2)(4,"li",3)(5,"a",4),e.EFF(6,"Employees"),e.k0s()()()(),e.nrm(7,"router-outlet")),2&o&&(e.R7$(4),e.Y8G("routerLink",e.lJ4(1,f)))},dependencies:[d.n3,d.Wk,d.wQ],encapsulation:2})}}return s})();var p=c(6354),a=c(2431);class v{constructor(){this.db=(0,a.aU)(),this.enablePersistence()}enablePersistence(){(0,a.ol)(this.db).catch(n=>{"failed-precondition"==n.code?console.log("persistance failed"):"unimplemented"==n.code&&console.log("persistance not available")})}create(n){const t=(0,a.rJ)(this.db,this.basePath);return(0,a.gS)(t,{createdAt:(0,a.O5)(),updatedAt:(0,a.O5)(),...n})}update(n,t){const o=(0,a.H9)(this.db,this.basePath,n);return(0,a.mZ)(o,{updatedAt:(0,a.O5)(),...t})}delete(n){const t=(0,a.H9)(this.db,this.basePath,n);return(0,a.kd)(t)}doc(n){const t=(0,a.H9)(this.db,this.basePath,n);return new Promise((o,i)=>(0,a.x7)(t).then(l=>{let G=this.transformSingleDoc(l);o(G)}).catch(l=>{i(l.message)}))}docRealtime(n,t){const o=(0,a.H9)(this.db,this.basePath,n);return(0,a.aQ)(o,i=>{t(this.transformSingleDoc(i))})}collection(){const n=(0,a.rJ)(this.db,this.basePath);return new Promise((t,o)=>{(0,a.GG)(n).then(i=>{let l=this.setData2(i);t(l)}).catch(i=>{o(i.message)})})}collectionRealtime(n){const t=(0,a.rJ)(this.db,this.basePath);return this.unsubscribe=(0,a.aQ)(t,o=>{let i=this.setData2(o);n(i)})}unsubscribeCollectionRealtime(){this.unsubscribe()}setData2(n){let t=[];return n.docs.forEach(o=>{t.push({...o.data(),id:o.id})}),t}setData(n){return n.docs.map(t=>({id:t.id,...t.data()}))}transformSingleDoc(n){return{...n.data(),id:n.id}}}let b=(()=>{class s extends v{constructor(){super(...arguments),this.basePath="employees"}static{this.\u0275fac=(()=>{let t;return function(i){return(t||(t=e.xGo(s)))(i||s)}})()}static{this.\u0275prov=e.jDH({token:s,factory:s.\u0275fac,providedIn:"root"})}}return s})();var g=c(4412);class F{constructor(n){this.bs=new g.t(n),this.state$=this.bs.asObservable(),this.state=n,this.state$.subscribe(t=>{this.state=t})}patch(n,t="Not specified"){this.previous=this.state;const o=Object.assign({},this.state,n);this.bs.next(o)}set(n,t="Not specified"){this.previous=this.state;const o=Object.assign({},n);this.bs.next(o)}}let E=(()=>{class s extends F{constructor(){super({loading:!0,employees:[],totalDrivers:0,totalEmployees:0,totalRosarioEmployees:0}),this.store="employees-page"}static{this.\u0275fac=function(o){return new(o||s)}}static{this.\u0275prov=e.jDH({token:s,factory:s.\u0275fac,providedIn:"root"})}}return s})(),h=(()=>{class s{constructor(t,o){this.firestore=t,this.store=o,this.firestore.collectionRealtime(i=>{this.store.patch({loading:!1,employees:i,totalEmployees:i.length,totalDrivers:i.filter(l=>l.hasDriverLicense).length,totalRosarioEmployees:i.filter(l=>"Rosario"===l.location).length},"employees collection subscription")})}get employees$(){return this.store.state$.pipe((0,p.T)(t=>t.loading?[]:t.employees))}get loading$(){return this.store.state$.pipe((0,p.T)(t=>t.loading))}get noResults$(){return this.store.state$.pipe((0,p.T)(t=>!t.loading&&t.employees&&0===t.employees.length))}get formStatus$(){return this.store.state$.pipe((0,p.T)(t=>t.formStatus))}create(t){return this.store.patch({loading:!0,employees:[],formStatus:"Saving..."},"employee create"),this.firestore.create(t).then(o=>{this.store.patch({formStatus:"Saved!"},"employee create SUCCESS"),setTimeout(()=>this.store.patch({formStatus:""},"employee create timeout reset formStatus"),2e3)}).catch(o=>{this.store.patch({loading:!1,formStatus:"An error ocurred"},"employee create ERROR")})}delete(t){return this.store.patch({loading:!0,employees:[]},"employee delete"),this.firestore.delete(t).catch(o=>{this.store.patch({loading:!1,formStatus:"An error ocurred"},"employee delete ERROR")})}get totalEmployees$(){return this.store.state$.pipe((0,p.T)(t=>t.totalEmployees))}get totalDrivers$(){return this.store.state$.pipe((0,p.T)(t=>t.totalDrivers))}get totalRosarioEmployees$(){return this.store.state$.pipe((0,p.T)(t=>t.totalRosarioEmployees))}static{this.\u0275fac=function(o){return new(o||s)(e.KVO(b),e.KVO(E))}}static{this.\u0275prov=e.jDH({token:s,factory:s.\u0275fac,providedIn:"root"})}}return s})();function $(s,n){1&s&&(e.j41(0,"div"),e.EFF(1," Loading...\n"),e.k0s())}function R(s,n){1&s&&(e.j41(0,"div"),e.EFF(1," No results\n"),e.k0s())}function k(s,n){if(1&s){const t=e.RV6();e.j41(0,"div",2)(1,"div",3),e.EFF(2),e.k0s(),e.j41(3,"div",4)(4,"h5",5),e.EFF(5),e.k0s(),e.j41(6,"p",6),e.EFF(7),e.k0s(),e.j41(8,"button",7),e.bIt("click",function(){const i=e.eBV(t).$implicit,l=e.XpG();return e.Njj(l.delete(i))}),e.EFF(9,"Delete"),e.k0s()()()}if(2&s){const t=n.$implicit;e.R7$(2),e.JRh(t.location),e.R7$(3),e.JRh(t.name),e.R7$(2),e.JRh(t.hasDriverLicense?"Can drive":"")}}let j=(()=>{class s{constructor(t){this.employees=t}ngOnInit(){this.loading$=this.employees.loading$,this.noResults$=this.employees.noResults$,this.employees$=this.employees.employees$}delete(t){this.employees.delete(t.id)}static{this.\u0275fac=function(o){return new(o||s)(e.rXU(h))}}static{this.\u0275cmp=e.VBU({type:s,selectors:[["app-employees-list"]],standalone:!1,decls:6,vars:9,consts:[[4,"ngIf"],["class","card bg-light mb-3","style","max-width: 18rem;",4,"ngFor","ngForOf"],[1,"card","bg-light","mb-3",2,"max-width","18rem"],[1,"card-header"],[1,"card-body"],[1,"card-title"],[1,"card-text"],[1,"btn","btn-danger",3,"click"]],template:function(o,i){1&o&&(e.DNE(0,$,2,0,"div",0),e.nI1(1,"async"),e.DNE(2,R,2,0,"div",0),e.nI1(3,"async"),e.DNE(4,k,10,3,"div",1),e.nI1(5,"async")),2&o&&(e.Y8G("ngIf",e.bMT(1,3,i.loading$)),e.R7$(2),e.Y8G("ngIf",e.bMT(3,5,i.noResults$)),e.R7$(2),e.Y8G("ngForOf",e.bMT(5,7,i.employees$)))},dependencies:[m.Sq,m.bT,m.Jj],encapsulation:2})}}return s})();var S=c(467),r=c(9417);function C(s,n){if(1&s&&(e.j41(0,"option",13),e.EFF(1),e.k0s()),2&s){const t=n.$implicit;e.Y8G("ngValue",t),e.R7$(),e.JRh(t)}}let T=(()=>{class s{constructor(t){this.employees=t,this.form=new r.gE({name:new r.MJ("",r.k0.required),location:new r.MJ("",r.k0.required),hasDriverLicense:new r.MJ(!1)}),this.locations=["Rosario","Buenos Aires","Bariloche"]}ngOnInit(){this.status$=this.employees.formStatus$}isInvalid(t){return this.form.controls[t].invalid&&(this.form.controls[t].dirty||this.form.controls[t].touched)}submit(){var t=this;return(0,S.A)(function*(){t.form.disable(),yield t.employees.create({...t.form.value}),t.form.reset(),t.form.enable()})()}static{this.\u0275fac=function(o){return new(o||s)(e.rXU(h))}}static{this.\u0275cmp=e.VBU({type:s,selectors:[["app-employees-form"]],standalone:!1,decls:23,vars:10,consts:[[3,"ngSubmit","formGroup"],[1,"form-group"],["for","name"],["type","string","id","name","formControlName","name",1,"form-control"],[1,"invalid-feedback"],["formControlName","location",1,"custom-select"],["value","","selected",""],[3,"ngValue",4,"ngFor","ngForOf"],[1,"form-group","form-check"],["type","checkbox","id","hasDriverLicense","formControlName","hasDriverLicense",1,"form-check-input"],["for","hasDriverLicense",1,"form-check-label"],["type","submit",1,"btn","btn-primary","d-inline",3,"disabled"],[1,"ml-2"],[3,"ngValue"]],template:function(o,i){1&o&&(e.j41(0,"form",0),e.bIt("ngSubmit",function(){return i.submit()}),e.j41(1,"div",1)(2,"label",2),e.EFF(3,"Name"),e.k0s(),e.nrm(4,"input",3),e.j41(5,"div",4),e.EFF(6," Please enter a Name. "),e.k0s()(),e.j41(7,"div",1)(8,"select",5)(9,"option",6),e.EFF(10,"Choose location"),e.k0s(),e.DNE(11,C,2,2,"option",7),e.k0s(),e.j41(12,"div",4),e.EFF(13," Please select a Location. "),e.k0s()(),e.j41(14,"div",8),e.nrm(15,"input",9),e.j41(16,"label",10),e.EFF(17,"Has driver license"),e.k0s()(),e.j41(18,"button",11),e.EFF(19,"Add"),e.k0s(),e.j41(20,"span",12),e.EFF(21),e.nI1(22,"async"),e.k0s()()),2&o&&(e.Y8G("formGroup",i.form),e.R7$(4),e.AVh("is-invalid",i.isInvalid("name")),e.R7$(4),e.AVh("is-invalid",i.isInvalid("location")),e.R7$(3),e.Y8G("ngForOf",i.locations),e.R7$(7),e.Y8G("disabled",i.form.invalid),e.R7$(3),e.JRh(e.bMT(22,8,i.status$)))},dependencies:[m.Sq,r.qT,r.xH,r.y7,r.me,r.Zm,r.wz,r.BC,r.cb,r.j4,r.JD,m.Jj],encapsulation:2})}}return s})(),D=(()=>{class s{constructor(t){this.employees=t}ngOnInit(){this.total$=this.employees.totalEmployees$,this.drivers$=this.employees.totalDrivers$,this.rosario$=this.employees.totalRosarioEmployees$}static{this.\u0275fac=function(o){return new(o||s)(e.rXU(h))}}static{this.\u0275cmp=e.VBU({type:s,selectors:[["app-employees-summary"]],standalone:!1,decls:16,vars:9,consts:[[1,"font-weight-bold"]],template:function(o,i){1&o&&(e.j41(0,"p")(1,"span",0),e.EFF(2,"Total:"),e.k0s(),e.EFF(3),e.nI1(4,"async"),e.nrm(5,"br"),e.j41(6,"span",0),e.EFF(7,"Drivers:"),e.k0s(),e.EFF(8),e.nI1(9,"async"),e.nrm(10,"br"),e.j41(11,"span",0),e.EFF(12,"Rosario:"),e.k0s(),e.EFF(13),e.nI1(14,"async"),e.nrm(15,"br"),e.k0s()),2&o&&(e.R7$(3),e.SpI(" ",e.bMT(4,3,i.total$)," "),e.R7$(5),e.SpI(" ",e.bMT(9,5,i.drivers$)," "),e.R7$(5),e.SpI(" ",e.bMT(14,7,i.rosario$)," "))},dependencies:[m.Jj],encapsulation:2})}}return s})();const I=[{path:"",component:y,children:[{path:"employeesPage",component:(()=>{class s{constructor(){}ngOnInit(){}static{this.\u0275fac=function(o){return new(o||s)}}static{this.\u0275cmp=e.VBU({type:s,selectors:[["app-employees-page"]],standalone:!1,decls:11,vars:0,consts:[[1,"container"],[1,"row"],[1,"col-12","mb-3"],[1,"col-6"]],template:function(o,i){1&o&&(e.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"h4"),e.EFF(4," Employees "),e.k0s(),e.nrm(5,"app-employees-summary"),e.k0s()(),e.j41(6,"div",1)(7,"div",3),e.nrm(8,"app-employees-list"),e.k0s(),e.j41(9,"div",3),e.nrm(10,"app-employees-form"),e.k0s()()())},dependencies:[j,T,D],encapsulation:2})}}return s})()}]}];let O=(()=>{class s{static{this.\u0275fac=function(o){return new(o||s)}}static{this.\u0275mod=e.$C({type:s})}static{this.\u0275inj=e.G2t({imports:[d.iI.forChild(I),d.iI]})}}return s})(),P=(()=>{class s{static{this.\u0275fac=function(o){return new(o||s)}}static{this.\u0275mod=e.$C({type:s})}static{this.\u0275inj=e.G2t({imports:[m.MD,r.X1,O]})}}return s})()}}]);