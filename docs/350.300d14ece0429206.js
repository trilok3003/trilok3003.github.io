"use strict";(self.webpackChunkportfolio_all_in_one=self.webpackChunkportfolio_all_in_one||[]).push([[350],{350:(v,d,a)=>{a.r(d),a.d(d,{GithubModule:()=>_});var i=a(177),l=a(884),t=a(4438),g=a(3760);let F=(()=>{class e{constructor(){this.menus=[{path:"home",name:"Home"},{path:"users",name:"users"},{path:"repos",name:"repos"}]}ngOnInit(){}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=t.VBU({type:e,selectors:[["app-github"]],standalone:!1,decls:1,vars:2,consts:[["title","Github",3,"menus","theme"]],template:function(n,r){1&n&&t.nrm(0,"ang-bootstrap-layout",0),2&n&&t.Y8G("menus",r.menus)("theme","movie")},dependencies:[g.KP],encapsulation:2})}}return e})();var f=a(8417),u=a(8065),c=a(9104),E=a(2824);function o(e,p){if(1&e&&(t.j41(0,"div",2),t.nrm(1,"img",3),t.j41(2,"h2")(3,"strong"),t.EFF(4),t.k0s(),t.j41(5,"small"),t.EFF(6),t.k0s()(),t.j41(7,"ul")(8,"li"),t.EFF(9),t.k0s(),t.j41(10,"li"),t.EFF(11),t.k0s()(),t.j41(12,"button",4),t.EFF(13,"Back"),t.k0s()()),2&e){const s=t.XpG();t.R7$(),t.Y8G("src",s.user.avatar_url,t.B4B),t.R7$(3),t.SpI("",s.user.login," | "),t.R7$(2),t.SpI(" ",s.user.location,""),t.R7$(3),t.SpI("Followers: ",s.user.followers,""),t.R7$(2),t.SpI("Following:: ",s.user.following,"")}}let h=(()=>{class e{constructor(s,n,r){this.userservice=s,this.route=n,this.location=r}ngOnInit(){this.route.params.subscribe(s=>{this.userservice.getSingleUser(s.username).subscribe(r=>{console.log(r),this.user=r})})}static{this.\u0275fac=function(n){return new(n||e)(t.rXU(u.p),t.rXU(l.nX),t.rXU(i.Location))}}static{this.\u0275cmp=t.VBU({type:e,selectors:[["app-user-details"]],standalone:!1,decls:2,vars:1,consts:[[2,"padding","40px","display","grid","place-items","center"],["style","border: solid 1px #eee; padding:20px; color: white",4,"ngIf"],[2,"border","solid 1px #eee","padding","20px","color","white"],["alt","avatar",3,"src"],["appBackButton",""]],template:function(n,r){1&n&&(t.j41(0,"article",0),t.DNE(1,o,14,5,"div",1),t.k0s()),2&n&&(t.R7$(),t.Y8G("ngIf",r.user))},dependencies:[i.NgIf,c.F,E.C],styles:["img[_ngcontent-%COMP%]{width:100%}"]})}}return e})();var m=a(3810);const R=e=>["/github/repos/",e];function j(e,p){if(1&e&&(t.j41(0,"a",16),t.EFF(1),t.k0s()),2&e){const s=t.XpG().item;t.Y8G("href",s.homepage,t.B4B),t.R7$(),t.SpI(" ",s.homepage,"")}}function C(e,p){if(1&e&&(t.j41(0,"h4")(1,"a",16),t.EFF(2),t.k0s()(),t.j41(3,"p"),t.EFF(4),t.k0s(),t.j41(5,"span"),t.EFF(6),t.k0s(),t.j41(7,"span"),t.EFF(8),t.nI1(9,"date"),t.k0s(),t.DNE(10,j,2,2,"a",17),t.j41(11,"a",18),t.EFF(12,"Show Details"),t.k0s()),2&e){const s=p.item;t.R7$(),t.Y8G("href",s.html_url,t.B4B),t.R7$(),t.JRh(s.name),t.R7$(2),t.JRh(s.description),t.R7$(2),t.SpI("#",s.language,""),t.R7$(2),t.JRh(t.bMT(9,7,s.updated_at)),t.R7$(2),t.Y8G("ngIf",s.homepage),t.R7$(),t.Y8G("routerLink",t.eq3(9,R,s.full_name))}}function I(e,p){1&e&&(t.j41(0,"th"),t.EFF(1,"Name"),t.k0s(),t.j41(2,"th"),t.EFF(3,"description"),t.k0s(),t.j41(4,"th"),t.EFF(5,"language"),t.k0s(),t.j41(6,"th"),t.EFF(7,"updated at"),t.k0s(),t.j41(8,"th"),t.EFF(9,"homepage"),t.k0s(),t.j41(10,"th"),t.EFF(11,"Show Details"),t.k0s())}function k(e,p){if(1&e&&(t.j41(0,"a",16),t.EFF(1),t.k0s()),2&e){const s=t.XpG().item;t.Y8G("href",s.homepage,t.B4B),t.R7$(),t.SpI(" ",s.homepage,"")}}function U(e,p){if(1&e&&(t.j41(0,"td")(1,"h4")(2,"a",16),t.EFF(3),t.k0s()()(),t.j41(4,"td")(5,"p"),t.EFF(6),t.k0s()(),t.j41(7,"td")(8,"p"),t.EFF(9),t.k0s()(),t.j41(10,"td")(11,"p"),t.EFF(12),t.nI1(13,"date"),t.k0s()(),t.j41(14,"td"),t.DNE(15,k,2,2,"a",17),t.k0s(),t.j41(16,"td")(17,"a",18),t.EFF(18,"Show Details"),t.k0s()()),2&e){const s=p.item;t.R7$(2),t.Y8G("href",s.html_url,t.B4B),t.R7$(),t.JRh(s.name),t.R7$(3),t.JRh(s.description),t.R7$(3),t.SpI("#",s.language,""),t.R7$(3),t.JRh(t.bMT(13,7,s.updated_at)),t.R7$(3),t.Y8G("ngIf",s.homepage),t.R7$(2),t.Y8G("routerLink",t.eq3(9,R,s.full_name))}}let T=(()=>{class e{constructor(s,n){this.githubService=s,this.router=n,this.userName="trilok3003",this.repos$=this.githubService.getRepos(this.userName)}ngOnInit(){}static{this.\u0275fac=function(n){return new(n||e)(t.rXU(u.p),t.rXU(l.Ix))}}static{this.\u0275cmp=t.VBU({type:e,selectors:[["app-repos"]],standalone:!1,decls:28,vars:6,consts:[["defaultListCardTemplate",""],["th",""],["td",""],[1,"jumbotron","jumbotron-fluid","text-primary"],[1,"container"],[1,"row"],[1,"col-md-3","d-flex","justify-content-center","align-items-center"],["src","https://avatars2.githubusercontent.com/u",1,"img-fluid","rounded-circle"],[1,"col-md-9"],[1,"display-4"],[1,"lead"],[1,"my-2"],["role","button","routerLink","repos",1,"btn","btn-dark","btn-lg"],[1,"text-center"],["aria-hidden","true",1,"fa","fa-github"],[3,"cardListTemplateRef","items","tableTdTemplateRef","tableThTemplateRef"],["target","_blank",3,"href"],["target","_blank",3,"href",4,"ngIf"],[3,"routerLink"]],template:function(n,r){if(1&n&&(t.j41(0,"div",3)(1,"div",4)(2,"div",5)(3,"div",6),t.nrm(4,"img",7),t.k0s(),t.j41(5,"div",8)(6,"h1",9),t.EFF(7,"Trilok"),t.k0s(),t.j41(8,"p",10),t.EFF(9," I am a Front End Developer "),t.k0s(),t.nrm(10,"hr",11),t.j41(11,"p"),t.EFF(12,"I like to explore "),t.k0s(),t.j41(13,"p",10)(14,"a",12),t.EFF(15,"Github Repo"),t.k0s()()()()()(),t.j41(16,"h1",13),t.nrm(17,"i",14),t.EFF(18," GitHub Projects"),t.k0s(),t.nrm(19,"hr")(20,"app-card-list-table",15),t.nI1(21,"async"),t.DNE(22,C,13,11,"ng-template",null,0,t.C5r)(24,I,12,0,"ng-template",null,1,t.C5r)(26,U,19,11,"ng-template",null,2,t.C5r)),2&n){const M=t.sdS(23),x=t.sdS(25),P=t.sdS(27);t.R7$(20),t.Y8G("cardListTemplateRef",M)("items",t.bMT(21,4,r.repos$))("tableTdTemplateRef",P)("tableThTemplateRef",x)}},dependencies:[i.NgIf,l.Wk,E.C,m.Yx,i.AsyncPipe,i.DatePipe],encapsulation:2})}}return e})();var $=a(8141),B=a(5558);function b(e,p){if(1&e&&(t.j41(0,"div",1)(1,"div",2)(2,"h1"),t.EFF(3),t.k0s(),t.nrm(4,"hr"),t.j41(5,"pre",3),t.EFF(6),t.nI1(7,"async"),t.k0s()(),t.j41(8,"button",4),t.EFF(9,"Back"),t.k0s()()),2&e){const s=p.ngIf,n=t.XpG();t.R7$(3),t.JRh(s.name),t.R7$(3),t.SpI("            ",t.bMT(7,2,n.readmeContent$),"\n        ")}}const S=[{path:"",component:F,children:[{path:"users",component:f.UsersComponent},{path:"details/:username",component:h},{path:"repos",component:T},{path:"repos/:repo",component:(()=>{class e{constructor(s,n){this.activatedRoute=s,this.ghService=n,this.repo$=this.activatedRoute.paramMap.pipe((0,$.M)(r=>{this.readmeContent$=this.ghService.getRepoReadmeContent(r.get("repo"))}),(0,B.n)(r=>this.ghService.getRepoDetails(r.get("repo"))))}ngOnInit(){}static{this.\u0275fac=function(n){return new(n||e)(t.rXU(l.nX),t.rXU(u.p))}}static{this.\u0275cmp=t.VBU({type:e,selectors:[["app-repo-details"]],standalone:!1,decls:2,vars:3,consts:[["class","row m-0 p-0",4,"ngIf"],[1,"row","m-0","p-0"],[1,"col-md-12"],[1,"bg-light","p-4"],["appBackButton",""]],template:function(n,r){1&n&&(t.DNE(0,b,10,4,"div",0),t.nI1(1,"async")),2&n&&t.Y8G("ngIf",t.bMT(1,1,r.repo$))},dependencies:[i.NgIf,c.F,i.AsyncPipe],encapsulation:2})}}return e})()},{path:"",redirectTo:"home",pathMatch:"full"}]}];let y=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275mod=t.$C({type:e})}static{this.\u0275inj=t.G2t({imports:[l.iI.forChild(S),l.iI]})}}return e})();var G=a(5256),L=a(3887);let _=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275mod=t.$C({type:e})}static{this.\u0275inj=t.G2t({imports:[i.CommonModule,y,g.lZ,G.Kg,L.G,m.rB]})}}return e})()},8065:(v,d,a)=>{a.d(d,{p:()=>u});var i=a(1626),l=a(8810),t=a(5558),g=a(6354),F=a(9437),f=a(4438);let u=(()=>{class c{constructor(o){this.http=o,this.apiURL="https://api.github.com/search/users?q=",this.apiURL1="https://api.github.com/users",this.BASE_URL="https://api.github.com"}getUsersByLocation(o){return this.http.get(this.apiURL+"location:"+o)}getAllUsers(){return this.http.get(`${this.apiURL1}`)}getSingleUser(o){return this.http.get(`${this.apiURL1}/${o}`)}getProjects(o){return this.http.get(this.BASE_URL+`/users/${o}/projects`)}getRepos(o){return this.http.get(this.BASE_URL+`/users/${o}/repos`,{params:{per_page:100}})}getRepoDetails(o){return this.http.get(this.BASE_URL+"/repos/"+decodeURIComponent(o))}getRepoStargazers(o){return this.http.get(this.BASE_URL+"/repos/"+decodeURIComponent(o)+"/stargazers")}getRepoReadmeContent(o){return this.http.get(this.BASE_URL+"/repos/"+decodeURIComponent(o)+"/contents/README.md").pipe((0,t.n)(h=>this.http.get(h.download_url,{responseType:"text"})))}setHeader(){const o=new i.Lr;return o.append("AutheContentType","application/json"),o.append("Autherization","shijith"),o}searchGitRepositories(o){if(o.length<3)return;const h=this.setHeader();let m=new i.Nl;return m=m.append("q",o),this.http.get(this.BASE_URL+"/search/repositories",{headers:h,params:m}).pipe((0,g.T)(R=>R.items),(0,F.W)(this.handleError))}handleError(o){return(0,l.$)("Server Error, Please try after sometime")}static{this.\u0275fac=function(h){return new(h||c)(f.KVO(i.Qq))}}static{this.\u0275prov=f.jDH({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})()}}]);