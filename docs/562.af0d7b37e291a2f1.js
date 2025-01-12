"use strict";(self.webpackChunkportfolio_all_in_one=self.webpackChunkportfolio_all_in_one||[]).push([[562],{562:(st,v,a)=>{a.r(v),a.d(v,{DeclarativeModule:()=>nt});var l=a(177),u=a(884),t=a(4438);const P=()=>["categories"],b=()=>["posts"],y=()=>["declarative-posts"],$=()=>["alt-posts"];let j=(()=>{class s{constructor(){}ngOnInit(){}static{this.\u0275fac=function(n){return new(n||s)}}static{this.\u0275cmp=t.VBU({type:s,selectors:[["app-declarative"]],standalone:!1,decls:15,vars:8,consts:[[3,"routerLink"]],template:function(n,o){1&n&&(t.j41(0,"nav")(1,"ul")(2,"li")(3,"a",0),t.EFF(4,"Categories"),t.k0s()(),t.j41(5,"li")(6,"a",0),t.EFF(7,"Imperative Posts"),t.k0s()(),t.j41(8,"li")(9,"a",0),t.EFF(10,"declarative-posts"),t.k0s()(),t.j41(11,"li")(12,"a",0),t.EFF(13,"alt posts"),t.k0s()()()(),t.nrm(14,"router-outlet")),2&n&&(t.R7$(3),t.Y8G("routerLink",t.lJ4(4,P)),t.R7$(3),t.Y8G("routerLink",t.lJ4(5,b)),t.R7$(3),t.Y8G("routerLink",t.lJ4(6,y)),t.R7$(3),t.Y8G("routerLink",t.lJ4(7,$)))},dependencies:[u.n3,u.Wk],encapsulation:2})}}return s})();var i=a(9417),C=a(1413),p=a(6354),m=a(4668),g=a(4572),k=a(7786),S=a(274),O=a(2816),E=a(7673),I=a(1397),M=a(8810),h=a(9437),R=a(8990);let d=(()=>{class s{constructor(e){this.realtimeDbService=e,this.selectedPostSubject=new C.B,this.selectedPostActions$=this.selectedPostSubject.asObservable(),this.postCrudSubject=new C.B,this.postCrudActions$=this.postCrudSubject.asObservable(),this.posts$=this.realtimeDbService.get("2024/posts.json").pipe((0,p.T)(n=>{let o=[];for(let c in n)o.push({...n[c],id:c});return o}),(0,h.W)(this.handleError),(0,m.t)(1)),this.categories$=this.realtimeDbService.get("2024/categories.json").pipe((0,p.T)(n=>{let o=[];for(let c in n)o.push({...n[c],id:c});return o}),(0,h.W)(this.handleError),(0,m.t)(1)),this.postsWithCategory$=(0,g.z)([this.posts$,this.categories$]).pipe((0,p.T)(([n,o])=>n.map(c=>({...c,categoryName:o.find(f=>f.id===c.categoryId)?.name}))),(0,h.W)(this.handleError),(0,m.t)(1)),this.post$=(0,g.z)([this.postsWithCategory$,this.selectedPostActions$]).pipe((0,p.T)(([n,o])=>n.find(c=>c.id===o))),this.allPosts$=(0,k.h)(this.postsWithCategory$,this.postCrudActions$.pipe((0,S.H)(n=>this.savePosts(n).pipe((0,p.T)(o=>({...n,data:o})))))).pipe((0,O.S)((n,o)=>this.modifyPosts(n,o),[]))}addPost(e){this.postCrudSubject.next({action:"add",data:e})}savePosts(e){return"add"===e.action?this.addPostToServer(e.data):(0,E.of)(e.data)}modifyPosts(e,n){return n instanceof Array?n:"add"===n?.action?[...e,n.data]:e}addPostToServer(e){return this.realtimeDbService.post("2024/posts.json",e).pipe((0,p.T)(n=>({...e,id:n.name})))}selectPost(e){this.selectedPostSubject.next(e)}getCategories(){return this.realtimeDbService.get("2024/categories.json").pipe((0,p.T)(e=>{let n=[];for(let o in e)n.push({...e[o],id:o});return n}))}createCategory(e){return this.realtimeDbService.post("2024/categories.json",e)}getPosts(){return this.realtimeDbService.get("2024/posts.json").pipe((0,p.T)(e=>{let n=[];for(let o in e)n.push({...e[o],id:o});return n}))}createPost(e){return this.realtimeDbService.post("2024/posts.json",e)}getPostsWithCategory(){return this.getPosts().pipe((0,I.Z)(e=>this.getCategories().pipe((0,p.T)(n=>e.map(o=>({...o,categoryName:n.find(c=>c.id===o.categoryId)?.name}))))))}handleError(e){return(0,M.$)(()=>"unknown error occured. Please Try Again")}static{this.\u0275fac=function(n){return new(n||s)(t.KVO(R.A))}}static{this.\u0275prov=t.jDH({token:s,factory:s.\u0275fac,providedIn:"root"})}}return s})();function T(s,r){if(1&s&&(t.j41(0,"tr")(1,"td"),t.EFF(2),t.k0s(),t.j41(3,"td"),t.EFF(4),t.k0s(),t.j41(5,"td"),t.EFF(6),t.k0s()()),2&s){const e=r.$implicit;t.R7$(2),t.JRh(null==e?null:e.id),t.R7$(2),t.JRh(null==e?null:e.name),t.R7$(2),t.JRh(null!=e&&e.isActive?"active":"not active")}}let _=(()=>{class s{constructor(e,n){this.dataService=e,this.fb=n,this.categories=[],this.formInit()}ngOnInit(){this.getCategories()}getCategories(){this.dataService.getCategories().subscribe(e=>{this.categories=e})}onCreate(){this.form.invalid||this.dataService.createCategory(this.form.value).subscribe(e=>{this.formInit()})}formInit(){this.form=this.fb.group({name:["",i.k0.required],isActive:!0})}static{this.\u0275fac=function(n){return new(n||s)(t.rXU(d),t.rXU(i.ok))}}static{this.\u0275cmp=t.VBU({type:s,selectors:[["app-categories"]],standalone:!1,decls:17,vars:2,consts:[[1,"grid"],[3,"formGroup"],["formControlName","name"],[3,"click"],[1,"transactions-table-v1"],[4,"ngFor","ngForOf"]],template:function(n,o){1&n&&(t.j41(0,"section",0)(1,"form",1),t.nrm(2,"input",2),t.j41(3,"button",3),t.bIt("click",function(){return o.onCreate()}),t.EFF(4,"Create"),t.k0s()(),t.j41(5,"div",4)(6,"table")(7,"thead")(8,"tr")(9,"th"),t.EFF(10,"Id"),t.k0s(),t.j41(11,"th"),t.EFF(12,"Name"),t.k0s(),t.j41(13,"th"),t.EFF(14,"Status"),t.k0s()()(),t.j41(15,"tbody"),t.DNE(16,T,7,3,"tr",5),t.k0s()()()()),2&n&&(t.R7$(),t.Y8G("formGroup",o.form),t.R7$(15),t.Y8G("ngForOf",o.categories))},dependencies:[l.Sq,i.qT,i.me,i.BC,i.cb,i.j4,i.JD],styles:[".grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:1rem;padding:1rem}.shrink[_ngcontent-%COMP%]{flex-grow:0}.transactions-table-v1[_ngcontent-%COMP%]{background:#eaeaea;border-radius:10px;margin-top:1rem!important}.transactions-table-v1[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{max-width:100%;width:100%}.transactions-table-v1[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{font-size:12px;border-bottom:1px solid white}.transactions-table-v1[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .transactions-table-v1[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding-right:15px;padding-left:15px}.transactions-table-v1[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{font-weight:700}"]})}}return s})();function D(s,r){if(1&s&&(t.j41(0,"option",9),t.EFF(1),t.k0s()),2&s){const e=r.$implicit;t.Y8G("value",null==e?null:e.id),t.R7$(),t.JRh(null==e?null:e.name)}}function G(s,r){if(1&s&&(t.j41(0,"tr")(1,"td"),t.EFF(2),t.k0s(),t.j41(3,"td"),t.EFF(4),t.k0s(),t.j41(5,"td"),t.EFF(6),t.k0s(),t.j41(7,"td"),t.EFF(8),t.k0s()()),2&s){const e=r.$implicit;t.R7$(2),t.JRh(null==e?null:e.id),t.R7$(2),t.JRh(null==e?null:e.name),t.R7$(2),t.JRh(null==e?null:e.categoryName),t.R7$(2),t.JRh(null!=e&&e.isActive?"active":"not active")}}let A=(()=>{class s{constructor(e,n,o){this.dataService=e,this.fb=n,this.cdr=o,this.categories=[],this.posts=[],this.formInit()}ngOnInit(){this.categorySubscription=this.dataService.getCategories().subscribe(e=>{this.categories=e}),this.getPostsWithCategory()}getPostsWithCategory(){this.dataService.getPostsWithCategory().subscribe(e=>{this.posts=e})}onCreate(){this.form.invalid||this.dataService.createPost(this.form.value).subscribe(e=>{this.formInit()})}ngOnDestroy(){this.postsSubscription&&this.postsSubscription.unsubscribe(),this.categorySubscription&&this.categorySubscription.unsubscribe()}formInit(){this.form=this.fb.group({name:["",i.k0.required],isActive:!0,categoryId:[""]})}static{this.\u0275fac=function(n){return new(n||s)(t.rXU(d),t.rXU(i.ok),t.rXU(t.gRc))}}static{this.\u0275cmp=t.VBU({type:s,selectors:[["app-posts"]],standalone:!1,decls:23,vars:3,consts:[[1,"grid"],[3,"formGroup"],["formControlName","name"],["formControlName","categoryId"],["disabled","","selected",""],[3,"value",4,"ngFor","ngForOf"],[3,"click"],[1,"transactions-table-v1"],[4,"ngFor","ngForOf"],[3,"value"]],template:function(n,o){1&n&&(t.j41(0,"section",0)(1,"form",1),t.nrm(2,"input",2),t.j41(3,"select",3)(4,"option",4),t.EFF(5,"Select Category"),t.k0s(),t.DNE(6,D,2,2,"option",5),t.k0s(),t.j41(7,"button",6),t.bIt("click",function(){return o.onCreate()}),t.EFF(8,"Create"),t.k0s()(),t.j41(9,"div",7)(10,"table")(11,"thead")(12,"tr")(13,"th"),t.EFF(14,"Id"),t.k0s(),t.j41(15,"th"),t.EFF(16,"Name"),t.k0s(),t.j41(17,"th"),t.EFF(18,"Category"),t.k0s(),t.j41(19,"th"),t.EFF(20,"Status"),t.k0s()()(),t.j41(21,"tbody"),t.DNE(22,G,9,4,"tr",8),t.k0s()()()()),2&n&&(t.R7$(),t.Y8G("formGroup",o.form),t.R7$(5),t.Y8G("ngForOf",o.categories),t.R7$(16),t.Y8G("ngForOf",o.posts))},dependencies:[l.Sq,i.qT,i.xH,i.y7,i.me,i.wz,i.BC,i.cb,i.j4,i.JD],styles:[".grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:1rem;padding:1rem}.shrink[_ngcontent-%COMP%]{flex-grow:0}.transactions-table-v1[_ngcontent-%COMP%]{background:#eaeaea;border-radius:10px;margin-top:1rem!important}.transactions-table-v1[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{max-width:100%;width:100%}.transactions-table-v1[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{font-size:12px;border-bottom:1px solid white}.transactions-table-v1[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .transactions-table-v1[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding-right:15px;padding-left:15px}.transactions-table-v1[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{font-weight:700}"]})}}return s})();var F=a(4412);function J(s,r){if(1&s&&(t.j41(0,"option",5),t.EFF(1),t.k0s()),2&s){const e=r.$implicit;t.Y8G("value",null==e?null:e.id),t.R7$(),t.JRh(null==e?null:e.name)}}function N(s,r){if(1&s&&(t.j41(0,"tr")(1,"td"),t.EFF(2),t.k0s(),t.j41(3,"td"),t.EFF(4),t.k0s(),t.j41(5,"td"),t.EFF(6),t.k0s(),t.j41(7,"td"),t.EFF(8),t.k0s()()),2&s){const e=r.$implicit;t.R7$(2),t.JRh(null==e?null:e.id),t.R7$(2),t.JRh(null==e?null:e.name),t.R7$(2),t.JRh(null==e?null:e.categoryName),t.R7$(2),t.JRh(null!=e&&e.isActive?"active":"not active")}}function Y(s,r){if(1&s&&(t.j41(0,"div",6)(1,"table")(2,"thead")(3,"tr")(4,"th"),t.EFF(5,"Id"),t.k0s(),t.j41(6,"th"),t.EFF(7,"Name"),t.k0s(),t.j41(8,"th"),t.EFF(9,"Category"),t.k0s(),t.j41(10,"th"),t.EFF(11,"Status"),t.k0s()()(),t.j41(12,"tbody"),t.DNE(13,N,9,4,"tr",7),t.k0s()()()),2&s){const e=r.ngIf;t.R7$(13),t.Y8G("ngForOf",e)}}let B=(()=>{class s{constructor(e){this.dataService=e,this.selectedCategorySubject=new F.t(""),this.selectedCategoryAction$=this.selectedCategorySubject.asObservable(),this.selectedCategoryId="",this.posts$=this.dataService.postsWithCategory$,this.filteredPosts=this.posts$.pipe((0,p.T)(n=>n.filter(o=>!this.selectedCategoryId||o.categoryId===this.selectedCategoryId))),this.filteredPostsByCategory$=(0,g.z)([this.posts$,this.selectedCategoryAction$]).pipe((0,p.T)(([n,o])=>n.filter(c=>!o||c.categoryId===o))),this.categories$=this.dataService.categories$}ngOnInit(){}onChangeCategory(e){this.selectedCategorySubject.next(e.target.value)}static{this.\u0275fac=function(n){return new(n||s)(t.rXU(d))}}static{this.\u0275cmp=t.VBU({type:s,selectors:[["app-declarative-posts"]],standalone:!1,decls:9,vars:6,consts:[[1,"grid"],[3,"change"],["value",""],[3,"value",4,"ngFor","ngForOf"],["class","transactions-table-v1",4,"ngIf"],[3,"value"],[1,"transactions-table-v1"],[4,"ngFor","ngForOf"]],template:function(n,o){1&n&&(t.j41(0,"section",0)(1,"div")(2,"select",1),t.bIt("change",function(f){return o.onChangeCategory(f)}),t.j41(3,"option",2),t.EFF(4,"Select Category"),t.k0s(),t.DNE(5,J,2,2,"option",3),t.nI1(6,"async"),t.k0s()(),t.DNE(7,Y,14,1,"div",4),t.nI1(8,"async"),t.k0s()),2&n&&(t.R7$(5),t.Y8G("ngForOf",t.bMT(6,2,o.categories$)),t.R7$(2),t.Y8G("ngIf",t.bMT(8,4,o.filteredPostsByCategory$)))},dependencies:[l.Sq,l.bT,i.xH,i.y7,l.Jj],encapsulation:2,changeDetection:0})}}return s})();var U=a(8141),w=a(983);function X(s,r){if(1&s&&(t.j41(0,"div")(1,"h3"),t.EFF(2,"Error"),t.k0s(),t.j41(3,"p"),t.EFF(4),t.k0s()()),2&s){const e=t.XpG();t.R7$(4),t.JRh(e.errorMessage)}}function W(s,r){if(1&s&&(t.j41(0,"div")(1,"h3"),t.EFF(2,"Error"),t.k0s(),t.j41(3,"p"),t.EFF(4),t.k0s()()),2&s){const e=r.ngIf;t.R7$(4),t.JRh(e)}}function x(s,r){if(1&s&&(t.j41(0,"div"),t.EFF(1),t.k0s()),2&s){const e=r.ngIf;t.R7$(),t.E5c(" ",null==e?null:e.id," ",null==e?null:e.name," ",null==e?null:e.categoryName,"\n")}}let V=(()=>{class s{constructor(e){this.dataService=e,this.errorMessage="",this.errorMessageSubject=new F.t(""),this.errorMessageActions$=this.errorMessageSubject.asObservable(),this.post$=this.dataService.post$.pipe((0,h.W)(n=>(this.errorMessageSubject.next(n),w.w)))}ngOnInit(){}static{this.\u0275fac=function(n){return new(n||s)(t.rXU(d))}}static{this.\u0275cmp=t.VBU({type:s,selectors:[["app-single-post"]],standalone:!1,decls:5,vars:7,consts:[[4,"ngIf"]],template:function(n,o){1&n&&(t.DNE(0,X,5,1,"div",0)(1,W,5,1,"div",0),t.nI1(2,"async"),t.DNE(3,x,2,3,"div",0),t.nI1(4,"async")),2&n&&(t.Y8G("ngIf",o.errorMessage),t.R7$(),t.Y8G("ngIf",t.bMT(2,3,o.errorMessageActions$)),t.R7$(2),t.Y8G("ngIf",t.bMT(4,5,o.post$)))},dependencies:[l.bT,l.Jj],encapsulation:2,changeDetection:0})}}return s})();function z(s,r){if(1&s&&(t.j41(0,"option",6),t.EFF(1),t.k0s()),2&s){const e=r.$implicit;t.Y8G("value",null==e?null:e.id),t.R7$(),t.JRh(null==e?null:e.name)}}let L=(()=>{class s{constructor(e,n){this.dataService=e,this.fb=n,this.categories$=this.dataService.categories$,this.formInit()}ngOnInit(){}onCreate(){this.form.invalid||this.dataService.addPost(this.form.value)}formInit(){this.form=this.fb.group({name:["",i.k0.required],isActive:!0,categoryId:[""]})}static{this.\u0275fac=function(n){return new(n||s)(t.rXU(d),t.rXU(i.ok))}}static{this.\u0275cmp=t.VBU({type:s,selectors:[["app-add-post"]],standalone:!1,decls:9,vars:4,consts:[[3,"formGroup"],["formControlName","name"],["formControlName","categoryId"],["disabled","","selected",""],[3,"value",4,"ngFor","ngForOf"],[3,"click"],[3,"value"]],template:function(n,o){1&n&&(t.j41(0,"form",0),t.nrm(1,"input",1),t.j41(2,"select",2)(3,"option",3),t.EFF(4,"Select Category"),t.k0s(),t.DNE(5,z,2,2,"option",4),t.nI1(6,"async"),t.k0s(),t.j41(7,"button",5),t.bIt("click",function(){return o.onCreate()}),t.EFF(8,"Create"),t.k0s()()),2&n&&(t.Y8G("formGroup",o.form),t.R7$(5),t.Y8G("ngForOf",t.bMT(6,2,o.categories$)))},dependencies:[l.Sq,i.qT,i.xH,i.y7,i.me,i.wz,i.BC,i.cb,i.j4,i.JD,l.Jj],encapsulation:2})}}return s})();const H=s=>({background:s});function K(s,r){if(1&s){const e=t.RV6();t.j41(0,"li",3),t.bIt("click",function(){const o=t.eBV(e).$implicit,c=t.XpG(2);return t.Njj(c.onSelectPost(o))}),t.EFF(1),t.k0s()}if(2&s){const e=r.$implicit,n=t.XpG().ngIf;t.Y8G("ngStyle",t.eq3(3,H,e.id===(null==n||null==n.selectedPost?null:n.selectedPost.id)?"green":"")),t.R7$(),t.Lme(" ",null==e?null:e.name," ",null==e?null:e.categoryName," ")}}function Z(s,r){if(1&s&&(t.j41(0,"ul"),t.DNE(1,K,2,5,"li",2),t.k0s()),2&s){const e=r.ngIf;t.R7$(),t.Y8G("ngForOf",null==e?null:e.posts)}}function Q(s,r){1&s&&t.nrm(0,"app-single-post")}function q(s,r){1&s&&t.nrm(0,"app-add-post")}const tt=[{path:"",component:j,children:[{path:"categories",component:_},{path:"posts",component:A},{path:"declarative-posts",component:B},{path:"alt-posts",component:(()=>{class s{constructor(e){this.dataService=e,this.posts$=this.dataService.allPosts$.pipe((0,U.M)(n=>{n[0].id&&this.dataService.selectPost(n[0].id)})),this.selectedPost$=this.dataService.post$,this.vm$=(0,g.z)([this.posts$,this.selectedPost$]).pipe((0,p.T)(([n,o])=>({posts:n,selectedPost:o})))}ngOnInit(){}onSelectPost(e){e.id&&this.dataService.selectPost(e.id)}addPost(){this.showAddPost=!0}static{this.\u0275fac=function(n){return new(n||s)(t.rXU(d))}}static{this.\u0275cmp=t.VBU({type:s,selectors:[["app-all-posts"]],standalone:!1,decls:10,vars:5,consts:[[3,"click"],[4,"ngIf"],[3,"ngStyle","click",4,"ngFor","ngForOf"],[3,"click","ngStyle"]],template:function(n,o){1&n&&(t.j41(0,"div")(1,"h3"),t.EFF(2,"Post Details"),t.k0s(),t.j41(3,"button",0),t.bIt("click",function(){return o.addPost()}),t.EFF(4,"Add Post"),t.k0s()(),t.DNE(5,Z,2,1,"ul",1),t.nI1(6,"async"),t.j41(7,"div"),t.DNE(8,Q,1,0,"app-single-post",1)(9,q,1,0,"app-add-post",1),t.k0s()),2&n&&(t.R7$(5),t.Y8G("ngIf",t.bMT(6,3,o.vm$)),t.R7$(3),t.Y8G("ngIf",!o.showAddPost),t.R7$(),t.Y8G("ngIf",o.showAddPost))},dependencies:[l.Sq,l.bT,l.B3,V,L,l.Jj],encapsulation:2,changeDetection:0})}}return s})()}]}];let et=(()=>{class s{static{this.\u0275fac=function(n){return new(n||s)}}static{this.\u0275mod=t.$C({type:s})}static{this.\u0275inj=t.G2t({imports:[u.iI.forChild(tt),u.iI]})}}return s})(),nt=(()=>{class s{static{this.\u0275fac=function(n){return new(n||s)}}static{this.\u0275mod=t.$C({type:s})}static{this.\u0275inj=t.G2t({imports:[l.MD,i.X1,et]})}}return s})()}}]);