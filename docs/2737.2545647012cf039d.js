"use strict";(self.webpackChunkportfolio_all_in_one=self.webpackChunkportfolio_all_in_one||[]).push([[2737],{2737:(W,m,p)=>{p.r(m),p.d(m,{HackerRanksModule:()=>X});var c=p(6895),_=p(4793),t=p(4650),g=p(8554),l=p(4006);function v(e,r){if(1&e&&(t.TgZ(0,"div",8)(1,"div",9),t._UZ(2,"img",10),t.qZA()()),2&e){const n=r.ngIf;t.xp6(2),t.s9C("src",n,t.LSH)}}const C=function(e){return{"border border-primary":e}};function Z(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"div",11),t.NdJ("click",function(){const a=t.CHM(n).index,s=t.oxw();return t.KtG(s.index=a)}),t.TgZ(1,"div",9),t._UZ(2,"img",12),t.qZA()()}if(2&e){const n=r.$implicit,o=r.index,i=t.oxw();t.Q6J("ngClass",t.VKq(2,C,o===i.index)),t.xp6(2),t.s9C("src",n,t.LSH)}}let T=(()=>{class e{constructor(){this.slides=["assets/bg.png","assets/bg1.png","assets/main.jpg","assets/profile.jpeg","assets/main1.jpg"],this.index=0}ngOnInit(){}restart(){this.index=0}prev(){this.index--}next(){this.index++}onSlideShow(){this.isSlideShow&&setInterval(()=>{this.slides.length-1>this.index?this.index++:this.index=0},1e3)}static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-catalog-viewer"]],decls:12,vars:5,consts:[[1,"d-flex","justify-content-center"],["class","card mt-2 text-center",4,"ngIf"],[1,"btn","btn-primary","btn-sm","mr-1",3,"disabled","click"],["class","card mt-2 text-center","style","cursor: pointer",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"btn","btn-primary","btn-sm","ml-1",3,"disabled","click"],[1,"form-check","text-center"],["type","checkbox",1,"form-check-input",3,"ngModel","ngModelChange"],[1,"form-check-label"],[1,"card","mt-2","text-center"],[1,"card-body"],["height","200px",3,"src"],[1,"card","mt-2","text-center",2,"cursor","pointer",3,"ngClass","click"],["height","30px","width","50px",3,"src"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0),t.YNc(1,v,3,1,"div",1),t.qZA(),t.TgZ(2,"div",0)(3,"button",2),t.NdJ("click",function(){return i.prev()}),t._uU(4,"pre"),t.qZA(),t.YNc(5,Z,3,4,"div",3),t.TgZ(6,"button",4),t.NdJ("click",function(){return i.next()}),t._uU(7,"next"),t.qZA()(),t.TgZ(8,"div",5)(9,"input",6),t.NdJ("ngModelChange",function(){return i.onSlideShow()})("ngModelChange",function(s){return i.isSlideShow=s}),t.qZA(),t.TgZ(10,"label",7),t._uU(11," Start Slide Show "),t.qZA()()),2&o&&(t.xp6(1),t.Q6J("ngIf",i.slides[i.index]),t.xp6(2),t.Q6J("disabled",0===i.index),t.xp6(2),t.Q6J("ngForOf",i.slides),t.xp6(1),t.Q6J("disabled",i.index===i.slides.length-1),t.xp6(3),t.Q6J("ngModel",i.isSlideShow))},dependencies:[c.mk,c.sg,c.O5,l.Wl,l.JJ,l.On]})}return e})(),b=(()=>{class e{constructor(){this.initialBalance=0,this.accountObj=new y(this.initialBalance)}ngOnInit(){}setOperations(n,o){switch(n){case"Debit":this.msg=this.accountObj.debit(o)?`${o} debited`:"Insufficient balance";break;case"Credit":this.accountObj.credit(o),this.msg=`${o} credited`;break;case"GetBalance":const i=this.accountObj.getBalance();this.msg=`Current balance is ${i}`}}static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-account-transactions"]],decls:12,vars:1,consts:[[1,"d-flex","justify-content-center"],[1,"form-group"],["type","number","min","0","value","0",1,"form-control"],["amount",""],[1,"text-center"],[1,"btn","btn-danger","btn-sm","ml-1",3,"click"],[1,"btn","btn-primary","btn-sm","ml-1",3,"click"],[1,"btn","btn-info","btn-sm","ml-1",3,"click"]],template:function(o,i){if(1&o){const a=t.EpF();t.TgZ(0,"div",0)(1,"fieldset",1),t._UZ(2,"input",2,3),t.qZA()(),t.TgZ(4,"div",4)(5,"button",5),t.NdJ("click",function(){t.CHM(a);const u=t.MAs(3);return t.KtG(i.setOperations("Debit",u.value))}),t._uU(6,"Debit"),t.qZA(),t.TgZ(7,"button",6),t.NdJ("click",function(){t.CHM(a);const u=t.MAs(3);return t.KtG(i.setOperations("Credit",u.value))}),t._uU(8,"Credit"),t.qZA(),t.TgZ(9,"button",7),t.NdJ("click",function(){return i.setOperations("GetBalance")}),t._uU(10,"GetBalance"),t.qZA(),t._uU(11),t.qZA()}2&o&&(t.xp6(11),t.hij(" ",i.msg,"\n"))}})}return e})();class y{constructor(r){this.balance=0,this.debit=n=>!(this.balance<n||(this.balance-=parseInt(n),0)),this.credit=n=>(this.balance+=parseInt(n),!0),this.getBalance=()=>this.balance,this.balance=r}}let x=(()=>{class e{constructor(){this.dataFinder([1,2,3,4,5,12,34,32,23,19])}ngOnInit(){}dataFinder(n){return function(i,a,s){if(i<0||a>=n.length)throw new Error("Invalid range");for(let u=i;u<=a;u++)if(n[u]===s)return!0;return!1}}static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-data-finder"]],decls:2,vars:0,template:function(o,i){1&o&&(t.TgZ(0,"p"),t._uU(1,"data-finder works!"),t.qZA())}})}return e})(),A=(()=>{class e{constructor(){this.c="",this.f=""}ngOnInit(){}handleChange(n,o){if(null===n)return this.c="",void(this.f="");const i=Number(n);"c"===o?this.f=(9*i/5+32).toFixed(1):this.c=(5*(i-32)/9).toFixed(1)}static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-tempreture-converter"]],decls:9,vars:2,consts:[[1,"form-group","d-flex","flex-column","align-items-center"],["type","number",1,"form-control",3,"ngModel","ngModelChange"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"div")(2,"label"),t._uU(3,"Celsius: "),t.qZA(),t.TgZ(4,"input",1),t.NdJ("ngModelChange",function(s){return i.c=s})("ngModelChange",function(s){return i.handleChange(s,"c")}),t.qZA()(),t.TgZ(5,"div")(6,"label"),t._uU(7,"Fahrenheit: "),t.qZA(),t.TgZ(8,"input",1),t.NdJ("ngModelChange",function(s){return i.f=s})("ngModelChange",function(s){return i.handleChange(s,"f")}),t.qZA()()()),2&o&&(t.xp6(4),t.Q6J("ngModel",i.c),t.xp6(4),t.Q6J("ngModel",i.f))},dependencies:[l.Fj,l.wV,l.JJ,l.On]})}return e})();function k(e,r){if(1&e&&(t.TgZ(0,"option",6),t._uU(1),t.qZA()),2&e){const n=r.$implicit;t.s9C("value",n.id),t.xp6(1),t.Oqu(n.label)}}function q(e,r){if(1&e&&(t.TgZ(0,"option",6),t._uU(1),t.qZA()),2&e){const n=r.$implicit;t.s9C("value",n.id),t.xp6(1),t.Oqu(n.label)}}let O=(()=>{class e{constructor(){this.lengthOptions=[{id:0,label:"Kilometre",unit:"km",val:1e5},{id:1,label:"Metre",unit:"m",val:100},{id:2,label:"Centimetre",unit:"cm",val:1}],this.select1Val=0,this.input1Val="",this.select2Val=1,this.input2Val="",this.val=0}handleChangeInput1(n){this.val=parseFloat(n)*this.lengthOptions[this.select1Val].val,this.input2Val=(this.val/this.lengthOptions[this.select2Val].val).toString()}handleChangeInput2(n){this.val=parseFloat(n)*this.lengthOptions[this.select2Val].val,this.input1Val=(this.val/this.lengthOptions[this.select1Val].val).toString()}handleChangeSelect1(n){this.input1Val=(this.val/this.lengthOptions[n].val).toString()}handleChangeSelect2(n){this.input2Val=(this.val/this.lengthOptions[n].val).toString()}ngOnInit(){}static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-length-converter"]],decls:17,vars:8,consts:[[1,"form-group","d-flex","justify-content-center"],[1,"input-group"],["type","number",1,"form-control",3,"ngModel","ngModelChange"],[1,"input-group-text"],[1,"form-control",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"div")(2,"div",1)(3,"input",2),t.NdJ("ngModelChange",function(s){return i.handleChangeInput1(s)})("ngModelChange",function(s){return i.input1Val=s}),t.qZA(),t.TgZ(4,"span",3),t._uU(5),t.qZA()(),t.TgZ(6,"select",4),t.NdJ("ngModelChange",function(s){return i.handleChangeSelect1(s)})("ngModelChange",function(s){return i.select1Val=s}),t.YNc(7,k,2,2,"option",5),t.qZA()(),t.TgZ(8,"label"),t._uU(9,"\u21cb"),t.qZA(),t.TgZ(10,"div")(11,"div",1)(12,"input",2),t.NdJ("ngModelChange",function(s){return i.handleChangeInput2(s)})("ngModelChange",function(s){return i.input2Val=s}),t.qZA(),t.TgZ(13,"span",3),t._uU(14),t.qZA()(),t.TgZ(15,"select",4),t.NdJ("ngModelChange",function(s){return i.handleChangeSelect2(s)})("ngModelChange",function(s){return i.select2Val=s}),t.YNc(16,q,2,2,"option",5),t.qZA()()()),2&o&&(t.xp6(3),t.Q6J("ngModel",i.input1Val),t.xp6(2),t.Oqu(i.lengthOptions[i.select1Val].unit),t.xp6(1),t.Q6J("ngModel",i.select1Val),t.xp6(1),t.Q6J("ngForOf",i.lengthOptions),t.xp6(5),t.Q6J("ngModel",i.input2Val),t.xp6(2),t.Oqu(i.lengthOptions[i.select2Val].unit),t.xp6(1),t.Q6J("ngModel",i.select2Val),t.xp6(1),t.Q6J("ngForOf",i.lengthOptions))},dependencies:[c.sg,l.YN,l.Kr,l.Fj,l.wV,l.EJ,l.JJ,l.On]})}return e})();var h=p(486);const f=function(e){return{active:e}};function M(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"li",9),t.NdJ("click",function(){const a=t.CHM(n).index,s=t.oxw();return t.KtG(s.selectStatus(a))}),t._uU(1),t.qZA()}if(2&e){const n=r.$implicit,o=r.index,i=t.oxw();t.Q6J("ngClass",t.VKq(2,f,i.statusMain[o]==i.status)),t.xp6(1),t.Oqu(n)}}function S(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"li",9),t.NdJ("click",function(){const a=t.CHM(n).$implicit,s=t.oxw();return t.KtG(s.category=a)}),t._uU(1),t.qZA()}if(2&e){const n=r.$implicit,o=t.oxw();t.Q6J("ngClass",t.VKq(2,f,o.category==n)),t.xp6(1),t.Oqu(n)}}function F(e,r){if(1&e&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA()()),2&e){const n=r.$implicit;t.xp6(2),t.Oqu(n.name),t.xp6(2),t.Oqu(n.category),t.xp6(2),t.Oqu(n.status?"Active":"Completed")}}let U=(()=>{class e{constructor(){this.list=[{name:"developer survey",status:"active",category:"Development"},{name:"developer survey 2",status:"completed",category:"Development"},{name:"Design survey ",status:"active",category:"Design"},{name:"Design survey 2",status:"completed",category:"Design"},{name:"Testing survey ",status:"active",category:"Testing"},{name:"Testing survey 2",status:"completed",category:"Testing"},{name:"Deployment survey ",status:"active",category:"Deployment"},{name:"Deployment survey 2",status:"completed",category:"Deployment"}],this.status=null,this.category=null,this.categories=["Development","Design","Testing","Deployment"],this.statusList=["All","Active","Completed"],this.statusMain=[null,"active","completed"]}ngOnInit(){}selectStatus(n){this.status=this.statusMain[n],0===n&&(this.category=null)}static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-survey-lists"]],decls:23,vars:9,consts:[[1,"row"],[1,"col-md-3","text-secondary"],[1,"list-group"],[1,"list-group-item","text-dark"],["class","list-group-item",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"col-md-9"],[1,"table"],["scope","col"],[4,"ngFor","ngForOf"],[1,"list-group-item",3,"ngClass","click"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"ul",2)(3,"li",3),t._uU(4,"Status"),t.qZA(),t.YNc(5,M,2,4,"li",4),t.TgZ(6,"li",3),t._uU(7,"Category"),t.qZA(),t.YNc(8,S,2,4,"li",4),t.qZA()(),t.TgZ(9,"div",5)(10,"table",6)(11,"thead")(12,"tr")(13,"th",7),t._uU(14,"Title"),t.qZA(),t.TgZ(15,"th",7),t._uU(16,"Category"),t.qZA(),t.TgZ(17,"th",7),t._uU(18,"Status"),t.qZA()()(),t.TgZ(19,"tbody"),t.YNc(20,F,7,3,"tr",8),t.ALo(21,"angFilter"),t.ALo(22,"angFilter"),t.qZA()()()()),2&o&&(t.xp6(5),t.Q6J("ngForOf",i.statusList),t.xp6(3),t.Q6J("ngForOf",i.categories),t.xp6(12),t.Q6J("ngForOf",t.xi3(21,3,t.xi3(22,6,i.list,i.category),i.status)))},dependencies:[c.mk,c.sg,h.gB]})}return e})();function J(e,r){if(1&e&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.ALo(7,"date"),t.qZA()()),2&e){const n=r.$implicit;t.xp6(2),t.Oqu(n.title),t.xp6(2),t.Oqu(n.upvotes),t.xp6(2),t.Oqu(t.lcZ(7,3,n.date))}}let w=(()=>{class e{constructor(){this.articles=[{title:"A message to our customers",upvotes:12,date:"2020-01-24"},{title:"Alphabet earnings",upvotes:22,date:"2019-11-23"},{title:"Artificial Mountains",upvotes:2,date:"2019-11-22"},{title:"Scaling to 100k Users",upvotes:72,date:"2019-01-21"},{title:"the Emu War",upvotes:24,date:"2019-10-21"},{title:"What's SAP",upvotes:1,date:"2019-11-21"},{title:"Simple text editor has 15k monthly users",upvotes:7,date:"2010-12-31"}],this.sortedList=this.articles,this.sortByUpvote=()=>{let n=this.articles.slice();n.sort((o,i)=>o.upvotes>i.upvotes?-1:o.upvotes<i.upvotes?1:0),this.sortedList=n},this.sortByDate=()=>{let n=this.articles.slice();n.sort((o,i)=>{const a=new Date(o.date),s=new Date(i.date);return a>s?-1:a<s?1:0}),this.sortedList=n}}ngOnInit(){}static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-sorting-articles"]],decls:18,vars:1,consts:[[1,"d-flex","justify-content-center"],[1,"btn","btn-primary","btn-sm","ml-1",3,"click"],[1,"table","mt-4"],["scope","col"],[4,"ngFor","ngForOf"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"span"),t._uU(2,"Sort By"),t.qZA(),t.TgZ(3,"button",1),t.NdJ("click",function(){return i.sortByUpvote()}),t._uU(4,"Most Upvotes"),t.qZA(),t.TgZ(5,"button",1),t.NdJ("click",function(){return i.sortByDate()}),t._uU(6,"Most Recents"),t.qZA()(),t.TgZ(7,"table",2)(8,"thead")(9,"tr")(10,"th",3),t._uU(11,"Title"),t.qZA(),t.TgZ(12,"th",3),t._uU(13,"Upvotes"),t.qZA(),t.TgZ(14,"th",3),t._uU(15,"Date"),t.qZA()()(),t.TgZ(16,"tbody"),t.YNc(17,J,8,5,"tr",4),t.qZA()()),2&o&&(t.xp6(17),t.Q6J("ngForOf",i.sortedList))},dependencies:[c.sg,c.uU]})}return e})();function N(e,r){if(1&e&&(t.TgZ(0,"div",3)(1,"div",4),t._uU(2),t.qZA(),t.TgZ(3,"div",5),t._uU(4),t.qZA()()),2&e){const n=r.ngIf;t.xp6(2),t.Oqu(null==n?null:n.title),t.xp6(2),t.hij(" ",null==n?null:n.text," ")}}let D=(()=>{class e{constructor(){this.slides=[{title:"Today's workout plan",text:"We're gonna do 3 fundamental exercises."},{title:"First, 10 push-ups",text:"Do 10 reps. Remember about full range of motion. Don't rush."},{title:"Next, 20 squats",text:"Squats are important. Remember to keep your back straight."},{title:"Finally, 15 sit-ups",text:"Slightly bend your knees. Remember about full range of motion."},{title:"Great job!",text:"You made it, have a nice day and see you next time!"}],this.index=0}ngOnInit(){}restart(){this.index=0}prev(){this.index--}next(){this.index++}static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-slide-show"]],decls:9,vars:4,consts:[[1,"d-flex","justify-content-center"],[1,"btn","btn-primary","btn-sm","ml-1",3,"disabled","click"],["class","card mt-2 text-center",4,"ngIf"],[1,"card","mt-2","text-center"],[1,"card-title"],[1,"card-body"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"button",1),t.NdJ("click",function(){return i.restart()}),t._uU(2,"Restart"),t.qZA(),t.TgZ(3,"button",1),t.NdJ("click",function(){return i.prev()}),t._uU(4,"pre"),t.qZA(),t.TgZ(5,"button",1),t.NdJ("click",function(){return i.next()}),t._uU(6,"next"),t.qZA()(),t.TgZ(7,"div",0),t.YNc(8,N,5,2,"div",2),t.qZA()),2&o&&(t.xp6(1),t.Q6J("disabled",0===i.index),t.xp6(2),t.Q6J("disabled",0===i.index),t.xp6(2),t.Q6J("disabled",i.index===i.slides.length-1),t.xp6(3),t.Q6J("ngIf",i.slides[i.index]))},dependencies:[c.O5]})}return e})();var V=p(9671),d=p(7579),L=p(529);let I=(()=>{class e{constructor(n){this.http=n,this.records$=new d.x,this.total$=new d.x,this.year$=new d.x}getData(n){var o=this;return(0,V.Z)(function*(){const i=yield o.http.get("https://jsonmock.hackerrank.com/api/football_competitions?year="+n).toPromise();o.records$.next(i?.data),o.total$.next(i?.total),o.year$.next(n)})()}static#t=this.\u0275fac=function(o){return new(o||e)(t.LFG(L.eN))};static#e=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();const Q=function(e){return{active:e}};function j(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"div",7),t.NdJ("click",function(){const a=t.CHM(n).$implicit,s=t.oxw();return t.KtG(s.getData(a))}),t._uU(1),t.qZA()}if(2&e){const n=r.$implicit,o=t.oxw();t.Tol(t.VKq(3,Q,n==o.activeYear)),t.xp6(1),t.hij(" ",n," ")}}function $(e,r){if(1&e&&(t.TgZ(0,"h2"),t._uU(1),t.qZA()),2&e){const n=r.ngIf;t.xp6(1),t.hij("Year: ",n,"")}}function Y(e,r){if(1&e&&(t.TgZ(0,"div",9)(1,"div",10),t._uU(2),t.qZA(),t.TgZ(3,"div",11),t._uU(4),t.qZA()()),2&e){const n=r.$implicit;t.xp6(2),t.hij("Name: ",n.name,""),t.xp6(2),t.hij("Winner: ",n.winner,"")}}function B(e,r){1&e&&(t.TgZ(0,"div"),t._uU(1," No records present "),t.qZA())}function H(e,r){if(1&e&&(t.ynx(0),t.YNc(1,Y,5,2,"div",8),t.YNc(2,B,2,0,"div",4),t.BQk()),2&e){const n=r.ngIf;t.xp6(1),t.Q6J("ngForOf",n),t.xp6(1),t.Q6J("ngIf",!n.length)}}function G(e,r){1&e&&t._uU(0," Loading ")}const K=function(){return["2011","2012","2013","2014","2015","2016","2017"]};let P=(()=>{class e{constructor(n){this.getDataService=n}ngOnInit(){this.getDataService.year$.subscribe(n=>{this.activeYear=n}),this.getDataService.getData("2011")}getData(n){this.getDataService.getData(n)}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(I))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-football"]],decls:10,vars:9,consts:[[1,"football"],[1,"app-menu"],["class","menu-item",3,"class","click",4,"ngFor","ngForOf"],[1,"app-details"],[4,"ngIf"],[4,"ngIf","ngIfElse"],["loading",""],[1,"menu-item",3,"click"],["class","details",4,"ngFor","ngForOf"],[1,"details"],[1,"name"],[1,"winner"]],template:function(o,i){if(1&o&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,j,2,5,"div",2),t.qZA(),t.TgZ(3,"div",3),t.YNc(4,$,2,1,"h2",4),t.ALo(5,"async"),t.YNc(6,H,3,2,"ng-container",5),t.ALo(7,"async"),t.YNc(8,G,1,0,"ng-template",null,6,t.W1O),t.qZA()()),2&o){const a=t.MAs(9);t.xp6(2),t.Q6J("ngForOf",t.DdM(8,K)),t.xp6(2),t.Q6J("ngIf",t.lcZ(5,4,i.getDataService.year$)),t.xp6(2),t.Q6J("ngIf",t.lcZ(7,6,i.getDataService.records$))("ngIfElse",a)}},dependencies:[c.sg,c.O5,c.Ov],styles:["*[_ngcontent-%COMP%]{margin:0;padding:0;font-family:Arial,Helvetica,sans-serif}.football[_ngcontent-%COMP%]{display:flex}.app-menu[_ngcontent-%COMP%]{flex-grow:1;padding-right:16px}.app-details[_ngcontent-%COMP%]{flex-grow:2;padding-left:16px}.menu-item[_ngcontent-%COMP%]{padding:15px;background-color:#f4f5f7}.menu-item.active[_ngcontent-%COMP%]{background-color:#e9eaeb}.menu-item[_ngcontent-%COMP%]:hover{background-color:#e0e1e2;cursor:pointer}.details[_ngcontent-%COMP%]{padding:8px;line-height:24px}.details[_ngcontent-%COMP%]:nth-child(2n){background-color:#005dab10}"]})}return e})();const E=[{path:"",component:(()=>{class e{constructor(){}ngOnInit(){}static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-hacker-ranks"]],decls:19,vars:1,consts:[["tabTitle","football"],[3,"tabTitle"],["tabTitle","Length Converter"],["tabTitle","Survey Lists"],["tabTitle","Sorting Articles"],["tabTitle","Slide show"],["tabTitle","Catalog Viewer"],["tabTitle","account transactions"],["tabTitle","Data Finder"]],template:function(o,i){1&o&&(t.TgZ(0,"app-tabs")(1,"app-tab",0),t._UZ(2,"app-football"),t.qZA(),t.TgZ(3,"app-tab",1),t._UZ(4,"app-tempreture-converter"),t.qZA(),t.TgZ(5,"app-tab",2),t._UZ(6,"app-length-converter"),t.qZA(),t.TgZ(7,"app-tab",3),t._UZ(8,"app-survey-lists"),t.qZA(),t.TgZ(9,"app-tab",4),t._UZ(10,"app-sorting-articles"),t.qZA(),t.TgZ(11,"app-tab",5),t._UZ(12,"app-slide-show"),t.qZA(),t.TgZ(13,"app-tab",6),t._UZ(14,"app-catalog-viewer"),t.qZA(),t.TgZ(15,"app-tab",7),t._UZ(16,"app-account-transactions"),t.qZA(),t.TgZ(17,"app-tab",8),t._UZ(18,"app-data-finder"),t.qZA()()),2&o&&(t.xp6(3),t.Q6J("tabTitle","Temperature Converter"))},dependencies:[g.n4,g.id,T,b,x,A,O,U,w,D,P]})}return e})()}];let R=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[_.Bz.forChild(E),_.Bz]})}return e})(),X=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[c.ez,l.u5,h.Dt,R,g.P4]})}return e})()}}]);