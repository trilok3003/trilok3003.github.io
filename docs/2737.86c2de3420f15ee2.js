"use strict";(self.webpackChunkportfolio_all_in_one=self.webpackChunkportfolio_all_in_one||[]).push([[2737],{2737:(tt,d,c)=>{c.r(d),c.d(d,{HackerRanksModule:()=>z});var p=c(9808),m=c(4202),t=c(5e3),f=c(8327),C=c(3711),l=c(3075);function v(n,i){if(1&n&&(t.TgZ(0,"div",8)(1,"div",9),t._UZ(2,"img",10),t.qZA()()),2&n){const e=i.ngIf;t.xp6(2),t.s9C("src",e,t.LSH)}}const T=function(n){return{"border border-primary":n}};function Z(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",11),t.NdJ("click",function(){const s=t.CHM(e).index,a=t.oxw();return t.KtG(a.index=s)}),t.TgZ(1,"div",9),t._UZ(2,"img",12),t.qZA()()}if(2&n){const e=i.$implicit,o=i.index,r=t.oxw();t.Q6J("ngClass",t.VKq(2,T,o===r.index)),t.xp6(2),t.s9C("src",e,t.LSH)}}let b=(()=>{class n{constructor(){this.slides=["assets/bg.png","assets/bg1.png","assets/main.jpg","assets/profile.jpeg","assets/main1.jpg"],this.index=0}ngOnInit(){}restart(){this.index=0}prev(){this.index--}next(){this.index++}onSlideShow(){this.isSlideShow&&setInterval(()=>{this.slides.length-1>this.index?this.index++:this.index=0},1e3)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-catalog-viewer"]],decls:12,vars:5,consts:[[1,"d-flex","justify-content-center"],["class","card mt-2 text-center",4,"ngIf"],[1,"btn","btn-primary","btn-sm","mr-1",3,"disabled","click"],["class","card mt-2 text-center","style","cursor: pointer",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"btn","btn-primary","btn-sm","ml-1",3,"disabled","click"],[1,"form-check","text-center"],["type","checkbox",1,"form-check-input",3,"ngModel","ngModelChange"],[1,"form-check-label"],[1,"card","mt-2","text-center"],[1,"card-body"],["height","200px",3,"src"],[1,"card","mt-2","text-center",2,"cursor","pointer",3,"ngClass","click"],["height","30px","width","50px",3,"src"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.YNc(1,v,3,1,"div",1),t.qZA(),t.TgZ(2,"div",0)(3,"button",2),t.NdJ("click",function(){return o.prev()}),t._uU(4,"pre"),t.qZA(),t.YNc(5,Z,3,4,"div",3),t.TgZ(6,"button",4),t.NdJ("click",function(){return o.next()}),t._uU(7,"next"),t.qZA()(),t.TgZ(8,"div",5)(9,"input",6),t.NdJ("ngModelChange",function(){return o.onSlideShow()})("ngModelChange",function(s){return o.isSlideShow=s}),t.qZA(),t.TgZ(10,"label",7),t._uU(11," Start Slide Show "),t.qZA()()),2&e&&(t.xp6(1),t.Q6J("ngIf",o.slides[o.index]),t.xp6(2),t.Q6J("disabled",0===o.index),t.xp6(2),t.Q6J("ngForOf",o.slides),t.xp6(1),t.Q6J("disabled",o.index===o.slides.length-1),t.xp6(3),t.Q6J("ngModel",o.isSlideShow))},dependencies:[p.mk,p.sg,p.O5,l.Wl,l.JJ,l.On]}),n})(),y=(()=>{class n{constructor(){this.initialBalance=0,this.accountObj=new A(this.initialBalance)}ngOnInit(){}setOperations(e,o){switch(e){case"Debit":this.msg=this.accountObj.debit(o)?`${o} debited`:"Insufficient balance";break;case"Credit":this.accountObj.credit(o),this.msg=`${o} credited`;break;case"GetBalance":const r=this.accountObj.getBalance();this.msg=`Current balance is ${r}`}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-account-transactions"]],decls:12,vars:1,consts:[[1,"d-flex","justify-content-center"],[1,"form-group"],["type","number","min","0","value","0",1,"form-control"],["amount",""],[1,"text-center"],[1,"btn","btn-danger","btn-sm","ml-1",3,"click"],[1,"btn","btn-primary","btn-sm","ml-1",3,"click"],[1,"btn","btn-info","btn-sm","ml-1",3,"click"]],template:function(e,o){if(1&e){const r=t.EpF();t.TgZ(0,"div",0)(1,"fieldset",1),t._UZ(2,"input",2,3),t.qZA()(),t.TgZ(4,"div",4)(5,"button",5),t.NdJ("click",function(){t.CHM(r);const a=t.MAs(3);return t.KtG(o.setOperations("Debit",a.value))}),t._uU(6,"Debit"),t.qZA(),t.TgZ(7,"button",6),t.NdJ("click",function(){t.CHM(r);const a=t.MAs(3);return t.KtG(o.setOperations("Credit",a.value))}),t._uU(8,"Credit"),t.qZA(),t.TgZ(9,"button",7),t.NdJ("click",function(){return o.setOperations("GetBalance")}),t._uU(10,"GetBalance"),t.qZA(),t._uU(11),t.qZA()}2&e&&(t.xp6(11),t.hij(" ",o.msg,"\n"))}}),n})();class A{constructor(i){this.balance=0,this.debit=e=>!(this.balance<e||(this.balance-=parseInt(e),0)),this.credit=e=>(this.balance+=parseInt(e),!0),this.getBalance=()=>this.balance,this.balance=i}}let x=(()=>{class n{constructor(){this.dataFinder([1,2,3,4,5,12,34,32,23,19])}ngOnInit(){}dataFinder(e){return function(r,s,a){if(r<0||s>=e.length)throw new Error("Invalid range");for(let g=r;g<=s;g++)if(e[g]===a)return!0;return!1}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-data-finder"]],decls:2,vars:0,template:function(e,o){1&e&&(t.TgZ(0,"p"),t._uU(1,"data-finder works!"),t.qZA())}}),n})(),k=(()=>{class n{constructor(){this.c="",this.f=""}ngOnInit(){}handleChange(e,o){if(null===e)return this.c="",void(this.f="");const r=Number(e);"c"===o?this.f=(9*r/5+32).toFixed(1):this.c=(5*(r-32)/9).toFixed(1)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-tempreture-converter"]],decls:9,vars:2,consts:[[1,"form-group","d-flex","flex-column","align-items-center"],["type","number",1,"form-control",3,"ngModel","ngModelChange"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div")(2,"label"),t._uU(3,"Celsius: "),t.qZA(),t.TgZ(4,"input",1),t.NdJ("ngModelChange",function(s){return o.c=s})("ngModelChange",function(s){return o.handleChange(s,"c")}),t.qZA()(),t.TgZ(5,"div")(6,"label"),t._uU(7,"Fahrenheit: "),t.qZA(),t.TgZ(8,"input",1),t.NdJ("ngModelChange",function(s){return o.f=s})("ngModelChange",function(s){return o.handleChange(s,"f")}),t.qZA()()()),2&e&&(t.xp6(4),t.Q6J("ngModel",o.c),t.xp6(4),t.Q6J("ngModel",o.f))},dependencies:[l.Fj,l.wV,l.JJ,l.On]}),n})();function S(n,i){if(1&n&&(t.TgZ(0,"option",6),t._uU(1),t.qZA()),2&n){const e=i.$implicit;t.s9C("value",e.id),t.xp6(1),t.Oqu(e.label)}}function q(n,i){if(1&n&&(t.TgZ(0,"option",6),t._uU(1),t.qZA()),2&n){const e=i.$implicit;t.s9C("value",e.id),t.xp6(1),t.Oqu(e.label)}}let M=(()=>{class n{constructor(){this.lengthOptions=[{id:0,label:"Kilometre",unit:"km",val:1e5},{id:1,label:"Metre",unit:"m",val:100},{id:2,label:"Centimetre",unit:"cm",val:1}],this.select1Val=0,this.input1Val="",this.select2Val=1,this.input2Val="",this.val=0}handleChangeInput1(e){this.val=parseFloat(e)*this.lengthOptions[this.select1Val].val,this.input2Val=(this.val/this.lengthOptions[this.select2Val].val).toString()}handleChangeInput2(e){this.val=parseFloat(e)*this.lengthOptions[this.select2Val].val,this.input1Val=(this.val/this.lengthOptions[this.select1Val].val).toString()}handleChangeSelect1(e){this.input1Val=(this.val/this.lengthOptions[e].val).toString()}handleChangeSelect2(e){this.input2Val=(this.val/this.lengthOptions[e].val).toString()}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-length-converter"]],decls:17,vars:8,consts:[[1,"form-group","d-flex","justify-content-center"],[1,"input-group"],["type","number",1,"form-control",3,"ngModel","ngModelChange"],[1,"input-group-text"],[1,"form-control",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div")(2,"div",1)(3,"input",2),t.NdJ("ngModelChange",function(s){return o.handleChangeInput1(s)})("ngModelChange",function(s){return o.input1Val=s}),t.qZA(),t.TgZ(4,"span",3),t._uU(5),t.qZA()(),t.TgZ(6,"select",4),t.NdJ("ngModelChange",function(s){return o.handleChangeSelect1(s)})("ngModelChange",function(s){return o.select1Val=s}),t.YNc(7,S,2,2,"option",5),t.qZA()(),t.TgZ(8,"label"),t._uU(9,"\u21cb"),t.qZA(),t.TgZ(10,"div")(11,"div",1)(12,"input",2),t.NdJ("ngModelChange",function(s){return o.handleChangeInput2(s)})("ngModelChange",function(s){return o.input2Val=s}),t.qZA(),t.TgZ(13,"span",3),t._uU(14),t.qZA()(),t.TgZ(15,"select",4),t.NdJ("ngModelChange",function(s){return o.handleChangeSelect2(s)})("ngModelChange",function(s){return o.select2Val=s}),t.YNc(16,q,2,2,"option",5),t.qZA()()()),2&e&&(t.xp6(3),t.Q6J("ngModel",o.input1Val),t.xp6(2),t.Oqu(o.lengthOptions[o.select1Val].unit),t.xp6(1),t.Q6J("ngModel",o.select1Val),t.xp6(1),t.Q6J("ngForOf",o.lengthOptions),t.xp6(5),t.Q6J("ngModel",o.input2Val),t.xp6(2),t.Oqu(o.lengthOptions[o.select2Val].unit),t.xp6(1),t.Q6J("ngModel",o.select2Val),t.xp6(1),t.Q6J("ngForOf",o.lengthOptions))},dependencies:[p.sg,l.YN,l.Kr,l.Fj,l.wV,l.EJ,l.JJ,l.On]}),n})();var _=c(2497);const h=function(n){return{active:n}};function O(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"li",9),t.NdJ("click",function(){const s=t.CHM(e).index,a=t.oxw();return t.KtG(a.selectStatus(s))}),t._uU(1),t.qZA()}if(2&n){const e=i.$implicit,o=i.index,r=t.oxw();t.Q6J("ngClass",t.VKq(2,h,r.statusMain[o]==r.status)),t.xp6(1),t.Oqu(e)}}function F(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"li",9),t.NdJ("click",function(){const s=t.CHM(e).$implicit,a=t.oxw();return t.KtG(a.category=s)}),t._uU(1),t.qZA()}if(2&n){const e=i.$implicit,o=t.oxw();t.Q6J("ngClass",t.VKq(2,h,o.category==e)),t.xp6(1),t.Oqu(e)}}function U(n,i){if(1&n&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA()()),2&n){const e=i.$implicit;t.xp6(2),t.Oqu(e.name),t.xp6(2),t.Oqu(e.category),t.xp6(2),t.Oqu(e.status?"Active":"Completed")}}let w=(()=>{class n{constructor(){this.list=[{name:"developer survey",status:"active",category:"Development"},{name:"developer survey 2",status:"completed",category:"Development"},{name:"Design survey ",status:"active",category:"Design"},{name:"Design survey 2",status:"completed",category:"Design"},{name:"Testing survey ",status:"active",category:"Testing"},{name:"Testing survey 2",status:"completed",category:"Testing"},{name:"Deployment survey ",status:"active",category:"Deployment"},{name:"Deployment survey 2",status:"completed",category:"Deployment"}],this.status=null,this.category=null,this.categories=["Development","Design","Testing","Deployment"],this.statusList=["All","Active","Completed"],this.statusMain=[null,"active","completed"]}ngOnInit(){}selectStatus(e){this.status=this.statusMain[e],0===e&&(this.category=null)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-survey-lists"]],decls:23,vars:9,consts:[[1,"row"],[1,"col-md-3","text-secondary"],[1,"list-group"],[1,"list-group-item","text-dark"],["class","list-group-item",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"col-md-9"],[1,"table"],["scope","col"],[4,"ngFor","ngForOf"],[1,"list-group-item",3,"ngClass","click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"ul",2)(3,"li",3),t._uU(4,"Status"),t.qZA(),t.YNc(5,O,2,4,"li",4),t.TgZ(6,"li",3),t._uU(7,"Category"),t.qZA(),t.YNc(8,F,2,4,"li",4),t.qZA()(),t.TgZ(9,"div",5)(10,"table",6)(11,"thead")(12,"tr")(13,"th",7),t._uU(14,"Title"),t.qZA(),t.TgZ(15,"th",7),t._uU(16,"Category"),t.qZA(),t.TgZ(17,"th",7),t._uU(18,"Status"),t.qZA()()(),t.TgZ(19,"tbody"),t.YNc(20,U,7,3,"tr",8),t.ALo(21,"angFilter"),t.ALo(22,"angFilter"),t.qZA()()()()),2&e&&(t.xp6(5),t.Q6J("ngForOf",o.statusList),t.xp6(3),t.Q6J("ngForOf",o.categories),t.xp6(12),t.Q6J("ngForOf",t.xi3(21,3,t.xi3(22,6,o.list,o.category),o.status)))},dependencies:[p.mk,p.sg,_.gB]}),n})();function J(n,i){if(1&n&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.ALo(7,"date"),t.qZA()()),2&n){const e=i.$implicit;t.xp6(2),t.Oqu(e.title),t.xp6(2),t.Oqu(e.upvotes),t.xp6(2),t.Oqu(t.lcZ(7,3,e.date))}}let D=(()=>{class n{constructor(){this.articles=[{title:"A message to our customers",upvotes:12,date:"2020-01-24"},{title:"Alphabet earnings",upvotes:22,date:"2019-11-23"},{title:"Artificial Mountains",upvotes:2,date:"2019-11-22"},{title:"Scaling to 100k Users",upvotes:72,date:"2019-01-21"},{title:"the Emu War",upvotes:24,date:"2019-10-21"},{title:"What's SAP",upvotes:1,date:"2019-11-21"},{title:"Simple text editor has 15k monthly users",upvotes:7,date:"2010-12-31"}],this.sortedList=this.articles,this.sortByUpvote=()=>{let e=this.articles.slice();e.sort((o,r)=>o.upvotes>r.upvotes?-1:o.upvotes<r.upvotes?1:0),this.sortedList=e},this.sortByDate=()=>{let e=this.articles.slice();e.sort((o,r)=>{const s=new Date(o.date),a=new Date(r.date);return s>a?-1:s<a?1:0}),this.sortedList=e}}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-sorting-articles"]],decls:18,vars:1,consts:[[1,"d-flex","justify-content-center"],[1,"btn","btn-primary","btn-sm","ml-1",3,"click"],[1,"table","mt-4"],["scope","col"],[4,"ngFor","ngForOf"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"span"),t._uU(2,"Sort By"),t.qZA(),t.TgZ(3,"button",1),t.NdJ("click",function(){return o.sortByUpvote()}),t._uU(4,"Most Upvotes"),t.qZA(),t.TgZ(5,"button",1),t.NdJ("click",function(){return o.sortByDate()}),t._uU(6,"Most Recents"),t.qZA()(),t.TgZ(7,"table",2)(8,"thead")(9,"tr")(10,"th",3),t._uU(11,"Title"),t.qZA(),t.TgZ(12,"th",3),t._uU(13,"Upvotes"),t.qZA(),t.TgZ(14,"th",3),t._uU(15,"Date"),t.qZA()()(),t.TgZ(16,"tbody"),t.YNc(17,J,8,5,"tr",4),t.qZA()()),2&e&&(t.xp6(17),t.Q6J("ngForOf",o.sortedList))},dependencies:[p.sg,p.uU]}),n})();function N(n,i){if(1&n&&(t.TgZ(0,"div",3)(1,"div",4),t._uU(2),t.qZA(),t.TgZ(3,"div",5),t._uU(4),t.qZA()()),2&n){const e=i.ngIf;t.xp6(2),t.Oqu(null==e?null:e.title),t.xp6(2),t.hij(" ",null==e?null:e.text," ")}}let L=(()=>{class n{constructor(){this.slides=[{title:"Today's workout plan",text:"We're gonna do 3 fundamental exercises."},{title:"First, 10 push-ups",text:"Do 10 reps. Remember about full range of motion. Don't rush."},{title:"Next, 20 squats",text:"Squats are important. Remember to keep your back straight."},{title:"Finally, 15 sit-ups",text:"Slightly bend your knees. Remember about full range of motion."},{title:"Great job!",text:"You made it, have a nice day and see you next time!"}],this.index=0}ngOnInit(){}restart(){this.index=0}prev(){this.index--}next(){this.index++}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-slide-show"]],decls:9,vars:4,consts:[[1,"d-flex","justify-content-center"],[1,"btn","btn-primary","btn-sm","ml-1",3,"disabled","click"],["class","card mt-2 text-center",4,"ngIf"],[1,"card","mt-2","text-center"],[1,"card-title"],[1,"card-body"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"button",1),t.NdJ("click",function(){return o.restart()}),t._uU(2,"Restart"),t.qZA(),t.TgZ(3,"button",1),t.NdJ("click",function(){return o.prev()}),t._uU(4,"pre"),t.qZA(),t.TgZ(5,"button",1),t.NdJ("click",function(){return o.next()}),t._uU(6,"next"),t.qZA()(),t.TgZ(7,"div",0),t.YNc(8,N,5,2,"div",2),t.qZA()),2&e&&(t.xp6(1),t.Q6J("disabled",0===o.index),t.xp6(2),t.Q6J("disabled",0===o.index),t.xp6(2),t.Q6J("disabled",o.index===o.slides.length-1),t.xp6(3),t.Q6J("ngIf",o.slides[o.index]))},dependencies:[p.O5]}),n})();var V=c(5861),u=c(7579),I=c(520);let Q=(()=>{class n{constructor(e){this.http=e,this.records$=new u.x,this.total$=new u.x,this.year$=new u.x}getData(e){var o=this;return(0,V.Z)(function*(){const r=yield o.http.get("https://jsonmock.hackerrank.com/api/football_competitions?year="+e).toPromise();o.records$.next(null==r?void 0:r.data),o.total$.next(null==r?void 0:r.total),o.year$.next(e)})()}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(I.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const j=function(n){return{active:n}};function $(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",7),t.NdJ("click",function(){const s=t.CHM(e).$implicit,a=t.oxw();return t.KtG(a.getData(s))}),t._uU(1),t.qZA()}if(2&n){const e=i.$implicit,o=t.oxw();t.Tol(t.VKq(3,j,e==o.activeYear)),t.xp6(1),t.hij(" ",e," ")}}function Y(n,i){if(1&n&&(t.TgZ(0,"h2"),t._uU(1),t.qZA()),2&n){const e=i.ngIf;t.xp6(1),t.hij("Year: ",e,"")}}function H(n,i){if(1&n&&(t.TgZ(0,"div",9)(1,"div",10),t._uU(2),t.qZA(),t.TgZ(3,"div",11),t._uU(4),t.qZA()()),2&n){const e=i.$implicit;t.xp6(2),t.hij("Name: ",e.name,""),t.xp6(2),t.hij("Winner: ",e.winner,"")}}function B(n,i){1&n&&(t.TgZ(0,"div"),t._uU(1," No records present "),t.qZA())}function R(n,i){if(1&n&&(t.ynx(0),t.YNc(1,H,5,2,"div",8),t.YNc(2,B,2,0,"div",4),t.BQk()),2&n){const e=i.ngIf;t.xp6(1),t.Q6J("ngForOf",e),t.xp6(1),t.Q6J("ngIf",!e.length)}}function G(n,i){1&n&&t._uU(0," Loading ")}const K=function(){return["2011","2012","2013","2014","2015","2016","2017"]};let P=(()=>{class n{constructor(e){this.getDataService=e}ngOnInit(){this.getDataService.year$.subscribe(e=>{this.activeYear=e}),this.getDataService.getData("2011")}getData(e){this.getDataService.getData(e)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(Q))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-football"]],decls:10,vars:9,consts:[[1,"football"],[1,"app-menu"],["class","menu-item",3,"class","click",4,"ngFor","ngForOf"],[1,"app-details"],[4,"ngIf"],[4,"ngIf","ngIfElse"],["loading",""],[1,"menu-item",3,"click"],["class","details",4,"ngFor","ngForOf"],[1,"details"],[1,"name"],[1,"winner"]],template:function(e,o){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,$,2,5,"div",2),t.qZA(),t.TgZ(3,"div",3),t.YNc(4,Y,2,1,"h2",4),t.ALo(5,"async"),t.YNc(6,R,3,2,"ng-container",5),t.ALo(7,"async"),t.YNc(8,G,1,0,"ng-template",null,6,t.W1O),t.qZA()()),2&e){const r=t.MAs(9);t.xp6(2),t.Q6J("ngForOf",t.DdM(8,K)),t.xp6(2),t.Q6J("ngIf",t.lcZ(5,4,o.getDataService.year$)),t.xp6(2),t.Q6J("ngIf",t.lcZ(7,6,o.getDataService.records$))("ngIfElse",r)}},dependencies:[p.sg,p.O5,p.Ov],styles:["*[_ngcontent-%COMP%]{margin:0;padding:0;font-family:Arial,Helvetica,sans-serif}.football[_ngcontent-%COMP%]{display:flex}.app-menu[_ngcontent-%COMP%]{flex-grow:1;padding-right:16px}.app-details[_ngcontent-%COMP%]{flex-grow:2;padding-left:16px}.menu-item[_ngcontent-%COMP%]{padding:15px;background-color:#f4f5f7}.menu-item.active[_ngcontent-%COMP%]{background-color:#e9eaeb}.menu-item[_ngcontent-%COMP%]:hover{background-color:#e0e1e2;cursor:pointer}.details[_ngcontent-%COMP%]{padding:8px;line-height:24px}.details[_ngcontent-%COMP%]:nth-child(2n){background-color:#005dab10}"]}),n})();const E=[{path:"",component:(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-hacker-ranks"]],decls:19,vars:1,consts:[["tabTitle","football"],[3,"tabTitle"],["tabTitle","Length Converter"],["tabTitle","Survey Lists"],["tabTitle","Sorting Articles"],["tabTitle","Slide show"],["tabTitle","Catalog Viewer"],["tabTitle","account transactions"],["tabTitle","Data Finder"]],template:function(e,o){1&e&&(t.TgZ(0,"app-tabs")(1,"app-tab",0),t._UZ(2,"app-football"),t.qZA(),t.TgZ(3,"app-tab",1),t._UZ(4,"app-tempreture-converter"),t.qZA(),t.TgZ(5,"app-tab",2),t._UZ(6,"app-length-converter"),t.qZA(),t.TgZ(7,"app-tab",3),t._UZ(8,"app-survey-lists"),t.qZA(),t.TgZ(9,"app-tab",4),t._UZ(10,"app-sorting-articles"),t.qZA(),t.TgZ(11,"app-tab",5),t._UZ(12,"app-slide-show"),t.qZA(),t.TgZ(13,"app-tab",6),t._UZ(14,"app-catalog-viewer"),t.qZA(),t.TgZ(15,"app-tab",7),t._UZ(16,"app-account-transactions"),t.qZA(),t.TgZ(17,"app-tab",8),t._UZ(18,"app-data-finder"),t.qZA()()),2&e&&(t.xp6(3),t.Q6J("tabTitle","Temperature Converter"))},dependencies:[f.n,C.i,b,y,x,k,M,w,D,L,P]}),n})()}];let X=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[m.Bz.forChild(E),m.Bz]}),n})();var W=c(7807);let z=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[p.ez,l.u5,_.Dt,X,W.P]}),n})()}}]);