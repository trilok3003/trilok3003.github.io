"use strict";(self.webpackChunkportfolio_all_in_one=self.webpackChunkportfolio_all_in_one||[]).push([[8707],{5665:(E,_,c)=>{c.d(_,{K:()=>h});var i=c(520),v=c(2843),m=c(3900),y=c(4004),r=c(262),d=c(5e3);let h=(()=>{class u{constructor(s){this.http=s,this.apiURL="https://api.github.com/search/users?q=",this.apiURL1="https://api.github.com/users",this.BASE_URL="https://api.github.com"}getUsersByLocation(s){return this.http.get(this.apiURL+"location:"+s)}getAllUsers(){return this.http.get(`${this.apiURL1}`)}getSingleUser(s){return this.http.get(`${this.apiURL1}/${s}`)}getProjects(s){return this.http.get(this.BASE_URL+`/users/${s}/projects`)}getRepos(s){return this.http.get(this.BASE_URL+`/users/${s}/repos`,{params:{per_page:100}})}getRepoDetails(s){return this.http.get(this.BASE_URL+"/repos/"+decodeURIComponent(s))}getRepoStargazers(s){return this.http.get(this.BASE_URL+"/repos/"+decodeURIComponent(s)+"/stargazers")}getRepoReadmeContent(s){return this.http.get(this.BASE_URL+"/repos/"+decodeURIComponent(s)+"/contents/README.md").pipe((0,m.w)(f=>this.http.get(f.download_url,{responseType:"text"})))}setHeader(){const s=new i.WM;return s.append("AutheContentType","application/json"),s.append("Autherization","shijith"),s}searchGitRepositories(s){if(s.length<3)return;const f=this.setHeader();let l=new i.LE;return l=l.append("q",s),this.http.get(this.BASE_URL+"/search/repositories",{headers:f,params:l}).pipe((0,y.U)(p=>p.items),(0,r.K)(this.handleError))}handleError(s){return(0,v._)("Server Error, Please try after sometime")}}return u.\u0275fac=function(s){return new(s||u)(d.LFG(i.eN))},u.\u0275prov=d.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()},3518:(E,_,c)=>{c.d(_,{R:()=>f});var i=c(3900),v=c(8505),m=c(4004),y=c(9646),r=c(5e3),d=c(3075),h=c(9808),u=c(1500);function C(l,p){if(1&l&&(r.TgZ(0,"option",5),r._uU(1),r.qZA()),2&l){const a=p.$implicit;r.Q6J("value",a.id),r.xp6(1),r.Oqu(a.name)}}function s(l,p){if(1&l&&(r.TgZ(0,"option",5),r._uU(1),r.qZA()),2&l){const a=p.$implicit;r.Q6J("value",a.id),r.xp6(1),r.Oqu(a.name)}}let f=(()=>{class l{constructor(a){this.fb=a,this.states=[{id:1,name:"Gujarat"},{id:2,name:"Maharastra"},{id:3,name:"Rajasthan"}],this.cities=[{id:1,name:"Ahmedabad",state:1},{id:2,name:"Rajkot",state:1},{id:3,name:"Gandhinagar",state:1},{id:4,name:"Mumbai",state:2},{id:5,name:"Pune",state:2},{id:6,name:"Udaipur",state:3},{id:7,name:"Jaipur",state:3}],this.citiesForm=this.fb.group({state:[""],city:[""]})}ngOnInit(){this.cities$=this.citiesForm.controls.state.valueChanges.pipe((0,i.w)(a=>this.getCities(a)),(0,v.b)(a=>this.citiesForm.controls.city.setValue(null)))}getCities(a){return(0,y.of)(this.cities).pipe((0,m.U)(g=>g.filter(M=>M.state==a)))}}return l.\u0275fac=function(a){return new(a||l)(r.Y36(d.qu))},l.\u0275cmp=r.Xpm({type:l,selectors:[["app-state-cities"]],decls:14,vars:5,consts:[[3,"formGroup"],["formControlName","state"],["value","null","disabled","","hidden",""],[3,"value",4,"ngFor","ngForOf"],["formControlName","city"],[3,"value"]],template:function(a,g){1&a&&(r.TgZ(0,"div",0)(1,"select",1)(2,"option",2),r._uU(3,"Select State"),r.qZA(),r.YNc(4,C,2,2,"option",3),r.qZA(),r._UZ(5,"br")(6,"br"),r._uU(7," City: "),r._UZ(8,"br"),r.TgZ(9,"select",4)(10,"option",2),r._uU(11,"Select City"),r.qZA(),r.YNc(12,s,2,2,"option",3),r.ALo(13,"async"),r.qZA()()),2&a&&(r.Q6J("formGroup",g.citiesForm),r.xp6(4),r.Q6J("ngForOf",g.states),r.xp6(8),r.Q6J("ngForOf",r.lcZ(13,3,g.cities$)))},dependencies:[h.sg,d.YN,d.Kr,d.EJ,d.JJ,d.JL,d.sg,d.u,u.Mi,h.Ov]}),l})()},1500:(E,_,c)=>{c.d(_,{$i:()=>g,Dr:()=>T,E8:()=>I,Mi:()=>p,Ml:()=>l,S_:()=>f,eJ:()=>u,im:()=>F,lj:()=>O,or:()=>B,wk:()=>y,yc:()=>r,zK:()=>R});var i=c(5e3),v=c(9808),m=c(3075);let y=(()=>{class e{constructor(t,o){this.templateRef=t,this.vcr=o,this.show=!1}set angIf(t){this.show=t,this.showTemplate()}ngOnInit(){this.showTemplate()}showTemplate(){this.vcr.clear(),this.show?this.vcr.createEmbeddedView(this.templateRef):this.angIfElse&&this.vcr.createEmbeddedView(this.angIfElse)}}return e.\u0275fac=function(t){return new(t||e)(i.Y36(i.Rgc),i.Y36(i.s_b))},e.\u0275dir=i.lG2({type:e,selectors:[["","angIf",""]],inputs:{angIf:"angIf",angIfElse:"angIfElse"}}),e})(),r=(()=>{class e{constructor(t,o){this.templateRef=t,this.vcr=o,this.items=[]}set angForOf(t){this.items=t,this.renderItems()}static ngTemplateContextGuard(t,o){return!0}ngOnInit(){this.renderItems()}renderItems(){this.vcr.clear(),this.items.map((t,o,D)=>{this.vcr.createEmbeddedView(this.templateRef,{$implicit:t,index:o,count:D.length,first:0===o,last:o===D.length-1,even:1==(1&o),odd:0==(1&o)})})}}return e.\u0275fac=function(t){return new(t||e)(i.Y36(i.Rgc),i.Y36(i.s_b))},e.\u0275dir=i.lG2({type:e,selectors:[["","angFor",""]],inputs:{angForOf:"angForOf"}}),e})();class h{constructor(n){this.dir=n}get ngLet(){return this.dir.ngLet}}let u=(()=>{class e{constructor(t,o){t.createEmbeddedView(o,new h(this))}}return e.\u0275fac=function(t){return new(t||e)(i.Y36(i.s_b),i.Y36(i.Rgc))},e.\u0275dir=i.lG2({type:e,selectors:[["","ngLet",""]],inputs:{ngLet:"ngLet"}}),e})(),f=(()=>{class e{constructor(){this.rel="noopener"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=i.lG2({type:e,selectors:[["","ngSafeLink",""]],hostVars:1,hostBindings:function(t,o){2&t&&i.Ikx("rel",o.rel)}}),e})(),l=(()=>{class e{constructor(){this.rel="noopener"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=i.lG2({type:e,selectors:[["a","target","_blank",3,"rel","noopener"]],hostVars:1,hostBindings:function(t,o){2&t&&i.Ikx("rel",o.rel)}}),e})(),p=(()=>{class e{constructor(t){this.ngControl=t}set disabledControl(t){this.ngControl.control[t?"disable":"enable"]()}}return e.\u0275fac=function(t){return new(t||e)(i.Y36(m.a5))},e.\u0275dir=i.lG2({type:e,selectors:[["","formControlName",""],["","formControl","","disabledControl",""]],inputs:{disabledControl:"disabledControl"}}),e})(),g=(()=>{class e{constructor(t){this.ngFor=t,this.ngFor.ngForTrackBy=(o,D)=>D.id}}return e.\u0275fac=function(t){return new(t||e)(i.Y36(v.sg,1))},e.\u0275dir=i.lG2({type:e,selectors:[["","ngForTrackById",""]]}),e})(),B=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[v.ez]}),e})(),I=(()=>{class e{constructor(t){this.el=t}get x(){var t,o;return null===(o=null===(t=this.el.nativeElement)||void 0===t?void 0:t.getBoundingClientRect())||void 0===o?void 0:o.x}}return e.\u0275fac=function(t){return new(t||e)(i.Y36(i.SBq))},e.\u0275dir=i.lG2({type:e,selectors:[["","angStickyTable",""]]}),e})(),R=(()=>{class e{constructor(t,o){this.el=t,this.table=o}ngAfterViewInit(){const t=this.el.nativeElement,{x:o}=t.getBoundingClientRect();t.style.position="sticky",t.style.left=this.table?o-this.table.x+"px":"0px",t.style.background="#ccc",t.style.zIndex="1000"}}return e.\u0275fac=function(t){return new(t||e)(i.Y36(i.SBq),i.Y36(I,8))},e.\u0275dir=i.lG2({type:e,selectors:[["","angSticky",""]]}),e})(),T=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[v.ez]}),e})(),O=(()=>{class e{constructor(t){this.elementRef=t,this.minWidth="5em",this.maxWidth="1fr",this.columnGap="0.5em",this.rowGap="0.5em",this.gap="0.5em"}get styles(){return`\n     display: grid;\n     grid-template-columns: repeat(auto-fit, minmax(${this.minWidth},${this.maxWidth}));\n     grid-column-gap: ${this.columnGap};\n     grid-row-gap: ${this.rowGap};\n     grid-gap: ${this.gap}`}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(i.Y36(i.SBq))},e.\u0275dir=i.lG2({type:e,selectors:[["","angGrid",""]],hostVars:2,hostBindings:function(t,o){2&t&&i.Akn(o.styles)},inputs:{minWidth:"minWidth",maxWidth:"maxWidth",columnGap:"columnGap",rowGap:"rowGap",gap:"gap"}}),e})(),F=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[v.ez]}),e})()}}]);