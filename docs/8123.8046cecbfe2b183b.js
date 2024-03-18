"use strict";(self.webpackChunkportfolio_all_in_one=self.webpackChunkportfolio_all_in_one||[]).push([[8123],{8123:(ot,v,a)=>{a.r(v),a.d(v,{DeclarativeModule:()=>nt});var l=a(6895),d=a(4793),t=a(4650);const Z=function(){return["categories"]},P=function(){return["posts"]},b=function(){return["declarative-posts"]},A=function(){return["alt-posts"]};let y=(()=>{class o{constructor(){}ngOnInit(){}static#t=this.\u0275fac=function(n){return new(n||o)};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-declarative"]],decls:15,vars:8,consts:[[3,"routerLink"]],template:function(n,s){1&n&&(t.TgZ(0,"nav")(1,"ul")(2,"li")(3,"a",0),t._uU(4,"Categories"),t.qZA()(),t.TgZ(5,"li")(6,"a",0),t._uU(7,"Imperative Posts"),t.qZA()(),t.TgZ(8,"li")(9,"a",0),t._uU(10,"declarative-posts"),t.qZA()(),t.TgZ(11,"li")(12,"a",0),t._uU(13,"alt posts"),t.qZA()()()(),t._UZ(14,"router-outlet")),2&n&&(t.xp6(3),t.Q6J("routerLink",t.DdM(4,Z)),t.xp6(3),t.Q6J("routerLink",t.DdM(5,P)),t.xp6(3),t.Q6J("routerLink",t.DdM(6,b)),t.xp6(3),t.Q6J("routerLink",t.DdM(7,A)))},dependencies:[d.lC,d.rH]})}return o})();var i=a(4006),C=a(7579),p=a(4004),f=a(4782),h=a(9841),O=a(6451),T=a(4351),S=a(5026),U=a(9646),M=a(5577),q=a(2843),m=a(262),x=a(4185);let u=(()=>{class o{constructor(e){this.realtimeDbService=e,this.selectedPostSubject=new C.x,this.selectedPostActions$=this.selectedPostSubject.asObservable(),this.postCrudSubject=new C.x,this.postCrudActions$=this.postCrudSubject.asObservable(),this.posts$=this.realtimeDbService.get("2024/posts.json").pipe((0,p.U)(n=>{let s=[];for(let c in n)s.push({...n[c],id:c});return s}),(0,m.K)(this.handleError),(0,f.d)(1)),this.categories$=this.realtimeDbService.get("2024/categories.json").pipe((0,p.U)(n=>{let s=[];for(let c in n)s.push({...n[c],id:c});return s}),(0,m.K)(this.handleError),(0,f.d)(1)),this.postsWithCategory$=(0,h.a)([this.posts$,this.categories$]).pipe((0,p.U)(([n,s])=>n.map(c=>({...c,categoryName:s.find(g=>g.id===c.categoryId)?.name}))),(0,m.K)(this.handleError),(0,f.d)(1)),this.post$=(0,h.a)([this.postsWithCategory$,this.selectedPostActions$]).pipe((0,p.U)(([n,s])=>n.find(c=>c.id===s))),this.allPosts$=(0,O.T)(this.postsWithCategory$,this.postCrudActions$.pipe((0,T.b)(n=>this.savePosts(n).pipe((0,p.U)(s=>({...n,data:s})))))).pipe((0,S.R)((n,s)=>this.modifyPosts(n,s),[]))}addPost(e){this.postCrudSubject.next({action:"add",data:e})}savePosts(e){return"add"===e.action?this.addPostToServer(e.data):(0,U.of)(e.data)}modifyPosts(e,n){return n instanceof Array?n:"add"===n?.action?[...e,n.data]:e}addPostToServer(e){return this.realtimeDbService.post("2024/posts.json",e).pipe((0,p.U)(n=>({...e,id:n.name})))}selectPost(e){this.selectedPostSubject.next(e)}getCategories(){return this.realtimeDbService.get("2024/categories.json").pipe((0,p.U)(e=>{let n=[];for(let s in e)n.push({...e[s],id:s});return n}))}createCategory(e){return this.realtimeDbService.post("2024/categories.json",e)}getPosts(){return this.realtimeDbService.get("2024/posts.json").pipe((0,p.U)(e=>{let n=[];for(let s in e)n.push({...e[s],id:s});return n}))}createPost(e){return this.realtimeDbService.post("2024/posts.json",e)}getPostsWithCategory(){return this.getPosts().pipe((0,M.z)(e=>this.getCategories().pipe((0,p.U)(n=>e.map(s=>({...s,categoryName:n.find(c=>c.id===s.categoryId)?.name}))))))}handleError(e){return(0,q._)(()=>"unknown error occured. Please Try Again")}static#t=this.\u0275fac=function(n){return new(n||o)(t.LFG(x.N))};static#e=this.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();function I(o,r){if(1&o&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA()()),2&o){const e=r.$implicit;t.xp6(2),t.Oqu(null==e?null:e.id),t.xp6(2),t.Oqu(null==e?null:e.name),t.xp6(2),t.Oqu(null!=e&&e.isActive?"active":"not active")}}let $=(()=>{class o{constructor(e,n){this.dataService=e,this.fb=n,this.categories=[],this.formInit()}ngOnInit(){this.getCategories()}getCategories(){this.dataService.getCategories().subscribe(e=>{this.categories=e})}onCreate(){this.form.invalid||this.dataService.createCategory(this.form.value).subscribe(e=>{this.formInit()})}formInit(){this.form=this.fb.group({name:["",i.kI.required],isActive:!0})}static#t=this.\u0275fac=function(n){return new(n||o)(t.Y36(u),t.Y36(i.qu))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-categories"]],decls:17,vars:2,consts:[[1,"grid"],[3,"formGroup"],["formControlName","name"],[3,"click"],[1,"transactions-table-v1"],[4,"ngFor","ngForOf"]],template:function(n,s){1&n&&(t.TgZ(0,"section",0)(1,"form",1),t._UZ(2,"input",2),t.TgZ(3,"button",3),t.NdJ("click",function(){return s.onCreate()}),t._uU(4,"Create"),t.qZA()(),t.TgZ(5,"div",4)(6,"table")(7,"thead")(8,"tr")(9,"th"),t._uU(10,"Id"),t.qZA(),t.TgZ(11,"th"),t._uU(12,"Name"),t.qZA(),t.TgZ(13,"th"),t._uU(14,"Status"),t.qZA()()(),t.TgZ(15,"tbody"),t.YNc(16,I,7,3,"tr",5),t.qZA()()()()),2&n&&(t.xp6(1),t.Q6J("formGroup",s.form),t.xp6(15),t.Q6J("ngForOf",s.categories))},dependencies:[l.sg,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u],styles:[".grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:1rem;padding:1rem}.shrink[_ngcontent-%COMP%]{flex-grow:0}.transactions-table-v1[_ngcontent-%COMP%]{background:#eaeaea;border-radius:10px;margin-top:1rem!important}.transactions-table-v1[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{max-width:100%;width:100%}.transactions-table-v1[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{font-size:12px;border-bottom:1px solid white}.transactions-table-v1[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .transactions-table-v1[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding-right:15px;padding-left:15px}.transactions-table-v1[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{font-weight:700}"]})}return o})();function J(o,r){if(1&o&&(t.TgZ(0,"option",9),t._uU(1),t.qZA()),2&o){const e=r.$implicit;t.Q6J("value",null==e?null:e.id),t.xp6(1),t.Oqu(null==e?null:e.name)}}function N(o,r){if(1&o&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA()()),2&o){const e=r.$implicit;t.xp6(2),t.Oqu(null==e?null:e.id),t.xp6(2),t.Oqu(null==e?null:e.name),t.xp6(2),t.Oqu(null==e?null:e.categoryName),t.xp6(2),t.Oqu(null!=e&&e.isActive?"active":"not active")}}let F=(()=>{class o{constructor(e,n,s){this.dataService=e,this.fb=n,this.cdr=s,this.categories=[],this.posts=[],this.formInit()}ngOnInit(){this.categorySubscription=this.dataService.getCategories().subscribe(e=>{this.categories=e}),this.getPostsWithCategory()}getPostsWithCategory(){this.dataService.getPostsWithCategory().subscribe(e=>{this.posts=e})}onCreate(){this.form.invalid||this.dataService.createPost(this.form.value).subscribe(e=>{this.formInit()})}ngOnDestroy(){this.postsSubscription&&this.postsSubscription.unsubscribe(),this.categorySubscription&&this.categorySubscription.unsubscribe()}formInit(){this.form=this.fb.group({name:["",i.kI.required],isActive:!0,categoryId:[""]})}static#t=this.\u0275fac=function(n){return new(n||o)(t.Y36(u),t.Y36(i.qu),t.Y36(t.sBO))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-posts"]],decls:23,vars:3,consts:[[1,"grid"],[3,"formGroup"],["formControlName","name"],["formControlName","categoryId"],["disabled","","selected",""],[3,"value",4,"ngFor","ngForOf"],[3,"click"],[1,"transactions-table-v1"],[4,"ngFor","ngForOf"],[3,"value"]],template:function(n,s){1&n&&(t.TgZ(0,"section",0)(1,"form",1),t._UZ(2,"input",2),t.TgZ(3,"select",3)(4,"option",4),t._uU(5,"Select Category"),t.qZA(),t.YNc(6,J,2,2,"option",5),t.qZA(),t.TgZ(7,"button",6),t.NdJ("click",function(){return s.onCreate()}),t._uU(8,"Create"),t.qZA()(),t.TgZ(9,"div",7)(10,"table")(11,"thead")(12,"tr")(13,"th"),t._uU(14,"Id"),t.qZA(),t.TgZ(15,"th"),t._uU(16,"Name"),t.qZA(),t.TgZ(17,"th"),t._uU(18,"Category"),t.qZA(),t.TgZ(19,"th"),t._uU(20,"Status"),t.qZA()()(),t.TgZ(21,"tbody"),t.YNc(22,N,9,4,"tr",8),t.qZA()()()()),2&n&&(t.xp6(1),t.Q6J("formGroup",s.form),t.xp6(5),t.Q6J("ngForOf",s.categories),t.xp6(16),t.Q6J("ngForOf",s.posts))},dependencies:[l.sg,i._Y,i.YN,i.Kr,i.Fj,i.EJ,i.JJ,i.JL,i.sg,i.u],styles:[".grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:1rem;padding:1rem}.shrink[_ngcontent-%COMP%]{flex-grow:0}.transactions-table-v1[_ngcontent-%COMP%]{background:#eaeaea;border-radius:10px;margin-top:1rem!important}.transactions-table-v1[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{max-width:100%;width:100%}.transactions-table-v1[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{font-size:12px;border-bottom:1px solid white}.transactions-table-v1[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .transactions-table-v1[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding-right:15px;padding-left:15px}.transactions-table-v1[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{font-weight:700}"]})}return o})();var _=a(1135);function D(o,r){if(1&o&&(t.TgZ(0,"option",5),t._uU(1),t.qZA()),2&o){const e=r.$implicit;t.Q6J("value",null==e?null:e.id),t.xp6(1),t.Oqu(null==e?null:e.name)}}function Y(o,r){if(1&o&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA()()),2&o){const e=r.$implicit;t.xp6(2),t.Oqu(null==e?null:e.id),t.xp6(2),t.Oqu(null==e?null:e.name),t.xp6(2),t.Oqu(null==e?null:e.categoryName),t.xp6(2),t.Oqu(null!=e&&e.isActive?"active":"not active")}}function j(o,r){if(1&o&&(t.TgZ(0,"div",6)(1,"table")(2,"thead")(3,"tr")(4,"th"),t._uU(5,"Id"),t.qZA(),t.TgZ(6,"th"),t._uU(7,"Name"),t.qZA(),t.TgZ(8,"th"),t._uU(9,"Category"),t.qZA(),t.TgZ(10,"th"),t._uU(11,"Status"),t.qZA()()(),t.TgZ(12,"tbody"),t.YNc(13,Y,9,4,"tr",7),t.qZA()()()),2&o){const e=r.ngIf;t.xp6(13),t.Q6J("ngForOf",e)}}let Q=(()=>{class o{constructor(e){this.dataService=e,this.selectedCategorySubject=new _.X(""),this.selectedCategoryAction$=this.selectedCategorySubject.asObservable(),this.selectedCategoryId="",this.posts$=this.dataService.postsWithCategory$,this.filteredPosts=this.posts$.pipe((0,p.U)(n=>n.filter(s=>!this.selectedCategoryId||s.categoryId===this.selectedCategoryId))),this.filteredPostsByCategory$=(0,h.a)([this.posts$,this.selectedCategoryAction$]).pipe((0,p.U)(([n,s])=>n.filter(c=>!s||c.categoryId===s))),this.categories$=this.dataService.categories$}ngOnInit(){}onChangeCategory(e){this.selectedCategorySubject.next(e.target.value)}static#t=this.\u0275fac=function(n){return new(n||o)(t.Y36(u))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-declarative-posts"]],decls:9,vars:6,consts:[[1,"grid"],[3,"change"],["value",""],[3,"value",4,"ngFor","ngForOf"],["class","transactions-table-v1",4,"ngIf"],[3,"value"],[1,"transactions-table-v1"],[4,"ngFor","ngForOf"]],template:function(n,s){1&n&&(t.TgZ(0,"section",0)(1,"div")(2,"select",1),t.NdJ("change",function(g){return s.onChangeCategory(g)}),t.TgZ(3,"option",2),t._uU(4,"Select Category"),t.qZA(),t.YNc(5,D,2,2,"option",3),t.ALo(6,"async"),t.qZA()(),t.YNc(7,j,14,1,"div",4),t.ALo(8,"async"),t.qZA()),2&n&&(t.xp6(5),t.Q6J("ngForOf",t.lcZ(6,2,s.categories$)),t.xp6(2),t.Q6J("ngIf",t.lcZ(8,4,s.filteredPostsByCategory$)))},dependencies:[l.sg,l.O5,i.YN,i.Kr,l.Ov],changeDetection:0})}return o})();var L=a(8505),k=a(515);function w(o,r){if(1&o&&(t.TgZ(0,"div")(1,"h3"),t._uU(2,"Error"),t.qZA(),t.TgZ(3,"p"),t._uU(4),t.qZA()()),2&o){const e=t.oxw();t.xp6(4),t.Oqu(e.errorMessage)}}function E(o,r){if(1&o&&(t.TgZ(0,"div")(1,"h3"),t._uU(2,"Error"),t.qZA(),t.TgZ(3,"p"),t._uU(4),t.qZA()()),2&o){const e=r.ngIf;t.xp6(4),t.Oqu(e)}}function X(o,r){if(1&o&&(t.TgZ(0,"div"),t._uU(1),t.qZA()),2&o){const e=r.ngIf;t.xp6(1),t.lnq(" ",null==e?null:e.id," ",null==e?null:e.name," ",null==e?null:e.categoryName,"\n")}}let K=(()=>{class o{constructor(e){this.dataService=e,this.errorMessage="",this.errorMessageSubject=new _.X(""),this.errorMessageActions$=this.errorMessageSubject.asObservable(),this.post$=this.dataService.post$.pipe((0,m.K)(n=>(this.errorMessageSubject.next(n),k.E)))}ngOnInit(){}static#t=this.\u0275fac=function(n){return new(n||o)(t.Y36(u))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-single-post"]],decls:5,vars:7,consts:[[4,"ngIf"]],template:function(n,s){1&n&&(t.YNc(0,w,5,1,"div",0),t.YNc(1,E,5,1,"div",0),t.ALo(2,"async"),t.YNc(3,X,2,3,"div",0),t.ALo(4,"async")),2&n&&(t.Q6J("ngIf",s.errorMessage),t.xp6(1),t.Q6J("ngIf",t.lcZ(2,3,s.errorMessageActions$)),t.xp6(2),t.Q6J("ngIf",t.lcZ(4,5,s.post$)))},dependencies:[l.O5,l.Ov],changeDetection:0})}return o})();function B(o,r){if(1&o&&(t.TgZ(0,"option",6),t._uU(1),t.qZA()),2&o){const e=r.$implicit;t.Q6J("value",null==e?null:e.id),t.xp6(1),t.Oqu(null==e?null:e.name)}}let G=(()=>{class o{constructor(e,n){this.dataService=e,this.fb=n,this.categories$=this.dataService.categories$,this.formInit()}ngOnInit(){}onCreate(){this.form.invalid||this.dataService.addPost(this.form.value)}formInit(){this.form=this.fb.group({name:["",i.kI.required],isActive:!0,categoryId:[""]})}static#t=this.\u0275fac=function(n){return new(n||o)(t.Y36(u),t.Y36(i.qu))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-add-post"]],decls:9,vars:4,consts:[[3,"formGroup"],["formControlName","name"],["formControlName","categoryId"],["disabled","","selected",""],[3,"value",4,"ngFor","ngForOf"],[3,"click"],[3,"value"]],template:function(n,s){1&n&&(t.TgZ(0,"form",0),t._UZ(1,"input",1),t.TgZ(2,"select",2)(3,"option",3),t._uU(4,"Select Category"),t.qZA(),t.YNc(5,B,2,2,"option",4),t.ALo(6,"async"),t.qZA(),t.TgZ(7,"button",5),t.NdJ("click",function(){return s.onCreate()}),t._uU(8,"Create"),t.qZA()()),2&n&&(t.Q6J("formGroup",s.form),t.xp6(5),t.Q6J("ngForOf",t.lcZ(6,2,s.categories$)))},dependencies:[l.sg,i._Y,i.YN,i.Kr,i.Fj,i.EJ,i.JJ,i.JL,i.sg,i.u,l.Ov]})}return o})();const W=function(o){return{background:o}};function z(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"li",3),t.NdJ("click",function(){const c=t.CHM(e).$implicit,g=t.oxw(2);return t.KtG(g.onSelectPost(c))}),t._uU(1),t.qZA()}if(2&o){const e=r.$implicit,n=t.oxw().ngIf;t.Q6J("ngStyle",t.VKq(3,W,e.id===(null==n||null==n.selectedPost?null:n.selectedPost.id)?"green":"")),t.xp6(1),t.AsE(" ",null==e?null:e.name," ",null==e?null:e.categoryName," ")}}function R(o,r){if(1&o&&(t.TgZ(0,"ul"),t.YNc(1,z,2,5,"li",2),t.qZA()),2&o){const e=r.ngIf;t.xp6(1),t.Q6J("ngForOf",null==e?null:e.posts)}}function H(o,r){1&o&&t._UZ(0,"app-single-post")}function V(o,r){1&o&&t._UZ(0,"app-add-post")}const tt=[{path:"",component:y,children:[{path:"categories",component:$},{path:"posts",component:F},{path:"declarative-posts",component:Q},{path:"alt-posts",component:(()=>{class o{constructor(e){this.dataService=e,this.posts$=this.dataService.allPosts$.pipe((0,L.b)(n=>{n[0].id&&this.dataService.selectPost(n[0].id)})),this.selectedPost$=this.dataService.post$,this.vm$=(0,h.a)([this.posts$,this.selectedPost$]).pipe((0,p.U)(([n,s])=>({posts:n,selectedPost:s})))}ngOnInit(){}onSelectPost(e){e.id&&this.dataService.selectPost(e.id)}addPost(){this.showAddPost=!0}static#t=this.\u0275fac=function(n){return new(n||o)(t.Y36(u))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-all-posts"]],decls:10,vars:5,consts:[[3,"click"],[4,"ngIf"],[3,"ngStyle","click",4,"ngFor","ngForOf"],[3,"ngStyle","click"]],template:function(n,s){1&n&&(t.TgZ(0,"div")(1,"h3"),t._uU(2,"Post Details"),t.qZA(),t.TgZ(3,"button",0),t.NdJ("click",function(){return s.addPost()}),t._uU(4,"Add Post"),t.qZA()(),t.YNc(5,R,2,1,"ul",1),t.ALo(6,"async"),t.TgZ(7,"div"),t.YNc(8,H,1,0,"app-single-post",1),t.YNc(9,V,1,0,"app-add-post",1),t.qZA()),2&n&&(t.xp6(5),t.Q6J("ngIf",t.lcZ(6,3,s.vm$)),t.xp6(3),t.Q6J("ngIf",!s.showAddPost),t.xp6(1),t.Q6J("ngIf",s.showAddPost))},dependencies:[l.sg,l.O5,l.PC,K,G,l.Ov],changeDetection:0})}return o})()}]}];let et=(()=>{class o{static#t=this.\u0275fac=function(n){return new(n||o)};static#e=this.\u0275mod=t.oAB({type:o});static#n=this.\u0275inj=t.cJS({imports:[d.Bz.forChild(tt),d.Bz]})}return o})(),nt=(()=>{class o{static#t=this.\u0275fac=function(n){return new(n||o)};static#e=this.\u0275mod=t.oAB({type:o});static#n=this.\u0275inj=t.cJS({imports:[l.ez,i.UX,et]})}return o})()}}]);