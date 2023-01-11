"use strict";(self.webpackChunkportfolio_all_in_one=self.webpackChunkportfolio_all_in_one||[]).push([[506],{3506:(x,u,i)=>{i.r(u),i.d(u,{PagesModule:()=>y});var a=i(9808),p=i(3257),e=i(5e3),c=i(520),d=i(3900),h=i(4004),g=i(262),m=i(2843);let l=(()=>{class o{constructor(t){this.httpClient=t,this.BASE_URL="https://api.github.com"}getProjects(t){return this.httpClient.get(this.BASE_URL+`/users/${t}/projects`)}getRepos(t){return this.httpClient.get(this.BASE_URL+`/users/${t}/repos`)}getRepoDetails(t){return this.httpClient.get(this.BASE_URL+"/repos/"+decodeURIComponent(t))}getRepoStargazers(t){return this.httpClient.get(this.BASE_URL+"/repos/"+decodeURIComponent(t)+"/stargazers")}getRepoReadmeContent(t){return this.httpClient.get(this.BASE_URL+"/repos/"+decodeURIComponent(t)+"/contents/README.md").pipe((0,d.w)(r=>this.httpClient.get(r.download_url,{responseType:"text"})))}setHeader(){const t=new c.WM;return t.append("AutheContentType","application/json"),t.append("Autherization","shijith"),t}searchGitRepositories(t){if(t.length<3)return;const r=this.setHeader();let s=new c.LE;return s=s.append("q",t),this.httpClient.get(this.BASE_URL+"/search/repositories",{headers:r,params:s}).pipe((0,h.U)(T=>T.items),(0,g.K)(this.handleError))}handleError(t){return(0,m._)("Server Error, Please try after sometime")}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(c.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();function f(o,n){if(1&o&&(e.TgZ(0,"a",21),e._UZ(1,"i",22),e._uU(2),e.qZA()),2&o){const t=e.oxw().$implicit;e.Q6J("href",t.homepage,e.LSH),e.xp6(2),e.hij(" ",t.homepage,"")}}const Z=function(o){return["/github-repos",o]};function v(o,n){if(1&o&&(e.TgZ(0,"div",4)(1,"div",5)(2,"div",6)(3,"h4",7)(4,"a",8),e._uU(5),e.qZA()(),e.TgZ(6,"p",9),e._uU(7),e.qZA(),e.TgZ(8,"div",10)(9,"span",11),e._UZ(10,"i",12),e._uU(11),e.qZA(),e.TgZ(12,"span",13),e._UZ(13,"i",14),e._uU(14),e.ALo(15,"date"),e.qZA()(),e.YNc(16,f,3,2,"a",15),e.TgZ(17,"div",16)(18,"span"),e._UZ(19,"i",17),e._uU(20),e.qZA(),e.TgZ(21,"span"),e._UZ(22,"i",18),e._uU(23),e.qZA(),e.TgZ(24,"span"),e._UZ(25,"i",19),e._uU(26),e.qZA()(),e.TgZ(27,"div")(28,"button",20),e._uU(29,"Show Details "),e.qZA()()()()()),2&o){const t=n.$implicit;e.xp6(4),e.Q6J("href",t.html_url,e.LSH),e.xp6(1),e.Oqu(t.name),e.xp6(2),e.Oqu(t.description),e.xp6(4),e.hij(" ",t.language,""),e.xp6(3),e.hij(" ",e.lcZ(15,10,t.updated_at),""),e.xp6(2),e.Q6J("ngIf",t.homepage),e.xp6(4),e.hij(" ",t.stargazers_count," "),e.xp6(3),e.hij(" ",t.forks_count," "),e.xp6(3),e.hij(" ",t.watchers_count," "),e.xp6(2),e.Q6J("routerLink",e.VKq(12,Z,t.full_name))}}let R=(()=>{class o{constructor(t,r){this.githubService=t,this.router=r,this.userName="trilok3003",this.repos$=this.githubService.getRepos(this.userName)}ngOnInit(){}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(l),e.Y36(p.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-repos"]],decls:7,vars:3,consts:[[1,"text-center"],["aria-hidden","true",1,"fa","fa-github"],[1,"row"],["class","col-md-4 my-2",4,"ngFor","ngForOf"],[1,"col-md-4","my-2"],[1,"card","border-dark","shadow-lg","h-100"],[1,"card-body"],[1,"card-title"],["target","_blank",3,"href"],[1,"card-text"],[1,"d-flex","justify-content-between","my-2"],[1,"badge","bg-success"],["aria-hidden","true",1,"fa","fa-language"],[1,"badge","bg-danger"],["aria-hidden","true",1,"fa","fa-calendar"],["class","badge bg-info","target","_blank",3,"href",4,"ngIf"],[1,"d-flex","justify-content-between"],["aria-hidden","true",1,"fa","fa-star"],["aria-hidden","true",1,"fa","fa-code-fork"],["aria-hidden","true",1,"fa","fa-eye"],["type","button",1,"btn","btn-dark","btn-sm","mt-2",3,"routerLink"],["target","_blank",1,"badge","bg-info",3,"href"],["aria-hidden","true",1,"fa","fa-globe"]],template:function(t,r){1&t&&(e.TgZ(0,"h1",0),e._UZ(1,"i",1),e._uU(2," GitHub Projects"),e.qZA(),e._UZ(3,"hr"),e.TgZ(4,"div",2),e.YNc(5,v,30,14,"div",3),e.ALo(6,"async"),e.qZA()),2&t&&(e.xp6(5),e.Q6J("ngForOf",e.lcZ(6,1,r.repos$)))},dependencies:[a.sg,a.O5,p.rH,a.Ov,a.uU]}),o})();var U=i(8505);function C(o,n){if(1&o&&(e.TgZ(0,"div",1)(1,"div",2)(2,"h1"),e._uU(3),e.qZA(),e._UZ(4,"hr"),e.TgZ(5,"pre",3),e._uU(6),e.ALo(7,"async"),e.qZA()()()),2&o){const t=n.ngIf,r=e.oxw();e.xp6(3),e.Oqu(t.name),e.xp6(3),e.hij("            ",e.lcZ(7,2,r.readmeContent$),"\n        ")}}const A=[{path:"",component:(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-home"]],decls:16,vars:0,consts:[[1,"jumbotron","jumbotron-fluid"],[1,"container"],[1,"row"],[1,"col-md-3","d-flex","justify-content-center","align-items-center"],["src","https://avatars2.githubusercontent.com/u",1,"img-fluid","rounded-circle"],[1,"col-md-9"],[1,"display-4"],[1,"lead"],[1,"my-2"],["routerLink","repos","role","button",1,"btn","btn-dark","btn-lg"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e._UZ(4,"img",4),e.qZA(),e.TgZ(5,"div",5)(6,"h1",6),e._uU(7,"Trilok"),e.qZA(),e.TgZ(8,"p",7),e._uU(9," I am a Front End Developer "),e.qZA(),e._UZ(10,"hr",8),e.TgZ(11,"p"),e._uU(12,"I like to explore "),e.qZA(),e.TgZ(13,"p",7)(14,"a",9),e._uU(15,"Github Repo"),e.qZA()()()()()())},dependencies:[p.yS]}),o})()},{path:"repos",component:R},{path:"repos/:repo",component:(()=>{class o{constructor(t,r){this.activatedRoute=t,this.ghService=r,this.repo$=this.activatedRoute.paramMap.pipe((0,U.b)(s=>{this.readmeContent$=this.ghService.getRepoReadmeContent(s.get("repo"))}),(0,d.w)(s=>this.ghService.getRepoDetails(s.get("repo"))))}ngOnInit(){}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(p.gz),e.Y36(l))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-repo-details"]],decls:2,vars:3,consts:[["class","row",4,"ngIf"],[1,"row"],[1,"col-md-8"],[1,"bg-light","p-4"]],template:function(t,r){1&t&&(e.YNc(0,C,8,4,"div",0),e.ALo(1,"async")),2&t&&e.Q6J("ngIf",e.lcZ(1,1,r.repo$))},dependencies:[a.O5,a.Ov]}),o})()}];let b=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[p.Bz.forChild(A),p.Bz]}),o})(),y=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[a.ez,b]}),o})()}}]);