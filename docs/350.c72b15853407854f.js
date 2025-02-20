"use strict";(self.webpackChunkportfolio_all_in_one=self.webpackChunkportfolio_all_in_one||[]).push([[350],{9222:(v,d,r)=>{r.d(d,{p:()=>f});var l=r(467),i=r(1626),t=r(8810),R=r(5558),_=r(6354),F=r(9437),p=r(5085),g=r(4438);let f=(()=>{class m{constructor(n){this.http=n,this.apiURL="https://api.github.com/search/users?q="}getUsersByLocation(n){return this.http.get(this.apiURL+"location:"+n)}getAllUsers(){return this.http.get(`${p.O.GITHUB_USERS}`)}getSingleUser(n){return this.http.get(`${p.O.GITHUB_USERS}/${n}`)}getProjects(n){return this.http.get(p.O.GITHUB_BASE_URL+`/users/${n}/projects`)}getRepos(n){return this.http.get(p.O.GITHUB_BASE_URL+`/users/${n}/repos`,{params:{per_page:100}})}getReposOfUser(n){return this.http.get(p.O.GITHUB_BASE_URL+`/users/${n}/repos`)}getRepoDetails(n){return this.http.get(p.O.GITHUB_BASE_URL+"/repos/"+decodeURIComponent(n))}getRepoStargazers(n){return this.http.get(p.O.GITHUB_BASE_URL+"/repos/"+decodeURIComponent(n)+"/stargazers")}getRepoReadmeContent(n){return this.http.get(p.O.GITHUB_BASE_URL+"/repos/"+decodeURIComponent(n)+"/contents/README.md").pipe((0,R.n)(h=>this.http.get(h.download_url,{responseType:"text"})))}setHeader(){const n=new i.Lr;return n.append("AutheContentType","application/json"),n.append("Autherization","shijith"),n}searchGitRepositories(n){if(n.length<3)return;const h=this.setHeader();let c=new i.Nl;return c=c.append("q",n),this.http.get(p.O.GITHUB_BASE_URL+"/search/repositories",{headers:h,params:c}).pipe((0,_.T)(E=>E.items),(0,F.W)(this.handleError))}handleError(n){return(0,t.$)("Server Error, Please try after sometime")}fetchGitHubReadme(n){return(0,l.A)(function*(){const h=`https://api.github.com/repos/${n}/readme`;try{const c=yield fetch(h,{headers:{Accept:"application/vnd.github.v3.raw"}});return c.ok?yield c.text():404===c.status?"Repository not found or no README file available.":"Error fetching data from GitHub."}catch(c){return console.error("Error fetching README:",c),"An error occurred while fetching the README."}})()}static{this.\u0275fac=function(h){return new(h||m)(g.KVO(i.Qq))}}static{this.\u0275prov=g.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}}return m})()},5085:(v,d,r)=>{r.d(d,{O:()=>l});const l={cdnjs_libraries:"https://api.cdnjs.com/libraries",GOOGLE_BOOKS:"https://www.googleapis.com/books/v1/volumes",WIKIPEDIA:"https://en.wikipedia.org/w/api.php?action=opensearch",GITHUB_BASE_URL:"https://api.github.com",GITHUB_USERS:"https://api.github.com/users",GITHUB_REPOS:"https://api.github.com/repositories",GITHUB_SEARCH_REPOS:"https://api.github.com/search/repositories?q=",GITHUB_REPOS_QUERY:"https://api.github.com/repositories?q=",GITHUB_REPOS_BY_USER:(i,t)=>`https://api.github.com/users/${i}/repos?per_page=${t}`,GITHUB_REPOS_STATS_BY_USER:(i,t)=>`https://api.github.com/repos/${i}/${t}/stats/participation`}},350:(v,d,r)=>{r.r(d),r.d(d,{GithubModule:()=>y});var l=r(177),i=r(884),t=r(4438),R=r(3760);let _=(()=>{class e{constructor(){this.menus=[{path:"home",name:"Home"},{path:"users",name:"users"},{path:"repos",name:"repos"}]}ngOnInit(){}static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275cmp=t.VBU({type:e,selectors:[["app-github"]],standalone:!1,decls:1,vars:2,consts:[["title","Github",3,"menus","theme"]],template:function(o,a){1&o&&t.nrm(0,"ang-bootstrap-layout",0),2&o&&t.Y8G("menus",a.menus)("theme","movie")},dependencies:[R.KP],encapsulation:2})}}return e})();var F=r(8417),p=r(9222),g=r(9104),f=r(2824);function m(e,u){if(1&e&&(t.j41(0,"div",2),t.nrm(1,"img",3),t.j41(2,"h2")(3,"strong"),t.EFF(4),t.k0s(),t.j41(5,"small"),t.EFF(6),t.k0s()(),t.j41(7,"ul")(8,"li"),t.EFF(9),t.k0s(),t.j41(10,"li"),t.EFF(11),t.k0s()(),t.j41(12,"button",4),t.EFF(13,"Back"),t.k0s()()),2&e){const s=t.XpG();t.R7$(),t.Y8G("src",s.user.avatar_url,t.B4B),t.R7$(3),t.SpI("",s.user.login," | "),t.R7$(2),t.SpI(" ",s.user.location,""),t.R7$(3),t.SpI("Followers: ",s.user.followers,""),t.R7$(2),t.SpI("Following:: ",s.user.following,"")}}let I=(()=>{class e{constructor(s,o,a){this.userservice=s,this.route=o,this.location=a}ngOnInit(){this.route.params.subscribe(s=>{this.userservice.getSingleUser(s.username).subscribe(a=>{console.log(a),this.user=a})})}static{this.\u0275fac=function(o){return new(o||e)(t.rXU(p.p),t.rXU(i.nX),t.rXU(l.Location))}}static{this.\u0275cmp=t.VBU({type:e,selectors:[["app-user-details"]],standalone:!1,decls:2,vars:1,consts:[[2,"padding","40px","display","grid","place-items","center"],["style","border: solid 1px #eee; padding:20px; color: white",4,"ngIf"],[2,"border","solid 1px #eee","padding","20px","color","white"],["alt","avatar",3,"src"],["appBackButton",""]],template:function(o,a){1&o&&(t.j41(0,"article",0),t.DNE(1,m,14,5,"div",1),t.k0s()),2&o&&(t.R7$(),t.Y8G("ngIf",a.user))},dependencies:[l.NgIf,g.F,f.C],styles:["img[_ngcontent-%COMP%]{width:100%}"]})}}return e})();var n=r(3810);const h=e=>["/github/repos/",e];function c(e,u){if(1&e&&(t.j41(0,"a",16),t.EFF(1),t.k0s()),2&e){const s=t.XpG().item;t.Y8G("href",s.homepage,t.B4B),t.R7$(),t.SpI(" ",s.homepage,"")}}function E(e,u){if(1&e&&(t.j41(0,"h4")(1,"a",16),t.EFF(2),t.k0s()(),t.j41(3,"p"),t.EFF(4),t.k0s(),t.j41(5,"span"),t.EFF(6),t.k0s(),t.j41(7,"span"),t.EFF(8),t.nI1(9,"date"),t.k0s(),t.DNE(10,c,2,2,"a",17),t.j41(11,"a",18),t.EFF(12,"Show Details"),t.k0s()),2&e){const s=u.item;t.R7$(),t.Y8G("href",s.html_url,t.B4B),t.R7$(),t.JRh(s.name),t.R7$(2),t.JRh(s.description),t.R7$(2),t.SpI("#",s.language,""),t.R7$(2),t.JRh(t.bMT(9,7,s.updated_at)),t.R7$(2),t.Y8G("ngIf",s.homepage),t.R7$(),t.Y8G("routerLink",t.eq3(9,h,s.full_name))}}function U(e,u){1&e&&(t.j41(0,"th"),t.EFF(1,"Name"),t.k0s(),t.j41(2,"th"),t.EFF(3,"description"),t.k0s(),t.j41(4,"th"),t.EFF(5,"language"),t.k0s(),t.j41(6,"th"),t.EFF(7,"updated at"),t.k0s(),t.j41(8,"th"),t.EFF(9,"homepage"),t.k0s(),t.j41(10,"th"),t.EFF(11,"Show Details"),t.k0s())}function T(e,u){if(1&e&&(t.j41(0,"a",16),t.EFF(1),t.k0s()),2&e){const s=t.XpG().item;t.Y8G("href",s.homepage,t.B4B),t.R7$(),t.SpI(" ",s.homepage,"")}}function B(e,u){if(1&e&&(t.j41(0,"td")(1,"h4")(2,"a",16),t.EFF(3),t.k0s()()(),t.j41(4,"td")(5,"p"),t.EFF(6),t.k0s()(),t.j41(7,"td")(8,"p"),t.EFF(9),t.k0s()(),t.j41(10,"td")(11,"p"),t.EFF(12),t.nI1(13,"date"),t.k0s()(),t.j41(14,"td"),t.DNE(15,T,2,2,"a",17),t.k0s(),t.j41(16,"td")(17,"a",18),t.EFF(18,"Show Details"),t.k0s()()),2&e){const s=u.item;t.R7$(2),t.Y8G("href",s.html_url,t.B4B),t.R7$(),t.JRh(s.name),t.R7$(3),t.JRh(s.description),t.R7$(3),t.SpI("#",s.language,""),t.R7$(3),t.JRh(t.bMT(13,7,s.updated_at)),t.R7$(3),t.Y8G("ngIf",s.homepage),t.R7$(2),t.Y8G("routerLink",t.eq3(9,h,s.full_name))}}let j=(()=>{class e{constructor(s,o){this.githubService=s,this.router=o,this.userName="trilok3003",this.repos$=this.githubService.getRepos(this.userName)}ngOnInit(){}static{this.\u0275fac=function(o){return new(o||e)(t.rXU(p.p),t.rXU(i.Ix))}}static{this.\u0275cmp=t.VBU({type:e,selectors:[["app-repos"]],standalone:!1,decls:28,vars:6,consts:[["defaultListCardTemplate",""],["th",""],["td",""],[1,"jumbotron","jumbotron-fluid","text-primary"],[1,"container"],[1,"row"],[1,"col-md-3","d-flex","justify-content-center","align-items-center"],["src","https://avatars2.githubusercontent.com/u",1,"img-fluid","rounded-circle"],[1,"col-md-9"],[1,"display-4"],[1,"lead"],[1,"my-2"],["role","button","routerLink","repos",1,"btn","btn-dark","btn-lg"],[1,"text-center"],["aria-hidden","true",1,"fa","fa-github"],[3,"cardListTemplateRef","items","tableTdTemplateRef","tableThTemplateRef"],["target","_blank",3,"href"],["target","_blank",3,"href",4,"ngIf"],[3,"routerLink"]],template:function(o,a){if(1&o&&(t.j41(0,"div",3)(1,"div",4)(2,"div",5)(3,"div",6),t.nrm(4,"img",7),t.k0s(),t.j41(5,"div",8)(6,"h1",9),t.EFF(7,"Trilok"),t.k0s(),t.j41(8,"p",10),t.EFF(9," I am a Front End Developer "),t.k0s(),t.nrm(10,"hr",11),t.j41(11,"p"),t.EFF(12,"I like to explore "),t.k0s(),t.j41(13,"p",10)(14,"a",12),t.EFF(15,"Github Repo"),t.k0s()()()()()(),t.j41(16,"h1",13),t.nrm(17,"i",14),t.EFF(18," GitHub Projects"),t.k0s(),t.nrm(19,"hr")(20,"app-card-list-table",15),t.nI1(21,"async"),t.DNE(22,E,13,11,"ng-template",null,0,t.C5r)(24,U,12,0,"ng-template",null,1,t.C5r)(26,B,19,11,"ng-template",null,2,t.C5r)),2&o){const M=t.sdS(23),A=t.sdS(25),P=t.sdS(27);t.R7$(20),t.Y8G("cardListTemplateRef",M)("items",t.bMT(21,4,a.repos$))("tableTdTemplateRef",P)("tableThTemplateRef",A)}},dependencies:[l.NgIf,i.Wk,f.C,n.Yx,l.AsyncPipe,l.DatePipe],encapsulation:2})}}return e})();var C=r(8141),G=r(5558);function S(e,u){if(1&e&&(t.j41(0,"div",1)(1,"div",2)(2,"h1"),t.EFF(3),t.k0s(),t.nrm(4,"hr"),t.j41(5,"pre",3),t.EFF(6),t.nI1(7,"async"),t.k0s()(),t.j41(8,"button",4),t.EFF(9,"Back"),t.k0s()()),2&e){const s=u.ngIf,o=t.XpG();t.R7$(3),t.JRh(s.name),t.R7$(3),t.SpI("            ",t.bMT(7,2,o.readmeContent$),"\n        ")}}const $=[{path:"",component:_,children:[{path:"users",component:F.UsersComponent},{path:"details/:username",component:I},{path:"repos",component:j},{path:"repos/:repo",component:(()=>{class e{constructor(s,o){this.activatedRoute=s,this.ghService=o,this.repo$=this.activatedRoute.paramMap.pipe((0,C.M)(a=>{this.readmeContent$=this.ghService.getRepoReadmeContent(a.get("repo"))}),(0,G.n)(a=>this.ghService.getRepoDetails(a.get("repo"))))}ngOnInit(){}static{this.\u0275fac=function(o){return new(o||e)(t.rXU(i.nX),t.rXU(p.p))}}static{this.\u0275cmp=t.VBU({type:e,selectors:[["app-repo-details"]],standalone:!1,decls:2,vars:3,consts:[["class","row m-0 p-0",4,"ngIf"],[1,"row","m-0","p-0"],[1,"col-md-12"],[1,"bg-light","p-4"],["appBackButton",""]],template:function(o,a){1&o&&(t.DNE(0,S,10,4,"div",0),t.nI1(1,"async")),2&o&&t.Y8G("ngIf",t.bMT(1,1,a.repo$))},dependencies:[l.NgIf,g.F,l.AsyncPipe],encapsulation:2})}}return e})()},{path:"",redirectTo:"home",pathMatch:"full"}]}];let k=(()=>{class e{static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275mod=t.$C({type:e})}static{this.\u0275inj=t.G2t({imports:[i.iI.forChild($),i.iI]})}}return e})();var O=r(5256),D=r(3887);let y=(()=>{class e{static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275mod=t.$C({type:e})}static{this.\u0275inj=t.G2t({imports:[l.CommonModule,k,R.lZ,O.Kg,D.G,n.rB]})}}return e})()}}]);