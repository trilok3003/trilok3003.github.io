"use strict";(self.webpackChunkportfolio_all_in_one=self.webpackChunkportfolio_all_in_one||[]).push([[7230],{7230:(te,x,p)=>{p.r(x),p.d(x,{FirebaseModule:()=>Wt});var l=p(6895),d=p(4793),t=p(4650),k=p(9671),v=p(4004),I=p(7697);let h=(()=>{class n extends I.s{constructor(){super()}get getUserOnlineCounts$(){return this.readRealtime$("status").pipe((0,v.U)(e=>e.reduce((o,s)=>"online"===s.status?++o:o,0)))}get getUsers$(){return this.readRealtime$("status")}get timestamp(){return(new Date).getTime()}getPresence(e){return this.readRealtimeOriginal$(`status/${e}`)}setPresence(e,o){this.set(`status/${e}`,{status:o,timestamp:this.timestamp}).then(s=>{})}updateOnAway(e){document.onvisibilitychange=o=>{"hidden"===document.visibilityState?this.setPresence(e,"away"):this.setPresence(e,"online")}}updateOnUser(e){this.detectingConnectionState().pipe((0,v.U)(s=>s?"online":"offline")).subscribe(s=>this.setPresence(e,s))}updateOnDisconnect(e){this.onDisconnect(`status/${e}`).update({status:"offline",timestamp:this.timestamp})}configureUserPresenceByLocal(){let e=localStorage.getItem("uid");this.checkingUser(e)}configureUserPresenceByLogin(e,o={}){this.checkingUser(e,o)}configure(e){this.updateOnAway(e),this.updateOnUser(e),this.updateOnDisconnect(e)}checkingUser(e,o={}){e?this.configure(e):this.create("status",{uid:e,...o}).then(s=>{localStorage.setItem("uid",s.key),this.configure(s.key)})}static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var m=p(8405);const O=function(n,r,e){return{"badge-success":n,"badge-warning":r,"badge-danger":e}};function M(n,r){if(1&n&&(t.TgZ(0,"div",5),t._uU(1),t.qZA()),2&n){const e=r.ngIf;t.Q6J("ngClass",t.kEZ(2,O,"online"===(null==e?null:e.status),"away"===(null==e?null:e.status),"offline"===(null==e?null:e.status))),t.xp6(1),t.hij(" ",null==e?null:e.status,"\n")}}let D=(()=>{class n{constructor(e,o){this.presenceService=e,this.checkPresenceService=o,this.uid="1",this.presenceService.configureUserPresenceByLocal(),this.setPresence("user1")}ngOnInit(){this.presence$=this.presenceService.getPresence(this.uid),this.counts$=this.presenceService.getUserOnlineCounts$}setPresence(e){this.checkPresenceService.checkPresence(`checkPresence/${e}`)}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(h),t.Y36(m.zI))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-realtime-presence"]],decls:8,vars:6,consts:[["class","badge",3,"ngClass",4,"ngIf"],[1,"ping"],[1,"outer"],[1,"inner"],[1,"num"],[1,"badge",3,"ngClass"]],template:function(o,s){1&o&&(t.YNc(0,M,2,6,"div",0),t.ALo(1,"async"),t.TgZ(2,"span",1),t._UZ(3,"span",2)(4,"span",3),t.qZA(),t.TgZ(5,"span",4),t._uU(6),t.ALo(7,"async"),t.qZA()),2&o&&(t.Q6J("ngIf",t.lcZ(1,2,s.presence$)),t.xp6(6),t.Oqu(t.lcZ(7,4,s.counts$)))},dependencies:[l.mk,l.O5,l.Ov]})}return n})();var b=p(8505);const Z=function(n){return{active:n}};let N=(()=>{class n{constructor(e){this.abstractFirebaseDb=e,this.userId="1",this.itemId="election mp",this.voteCount=0,this.userVote=0}ngOnInit(){this.getItemVotes("election mp")}getItemVotes(e){this.subscription=this.abstractFirebaseDb.readRealtimeOriginal$(`votes/${e}`).pipe((0,b.b)(o=>{this.voteCount=o.reduce((s,i)=>s+i,0)})).subscribe(o=>{this.userId&&(this.userVote=o[this.userId])})}updateUserVote(e,o,s){let i={};i[o]=s,this.abstractFirebaseDb.update(`votes/${e}`,i).then()}upvote(){this.updateUserVote(this.itemId,this.userId,1==this.userVote?0:1)}downvote(){this.updateUserVote(this.itemId,this.userId,-1==this.userVote?0:-1)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(m.zI))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-voting"]],inputs:{userId:"userId",itemId:"itemId"},decls:5,vars:7,consts:[[1,"votebox"],[1,"fa","fa-arrow-up","vote","up",3,"ngClass","click"],[1,"vote-count"],[1,"fa","fa-arrow-down","vote","down",3,"ngClass","click"]],template:function(o,s){1&o&&(t.TgZ(0,"div",0)(1,"span",1),t.NdJ("click",function(){return s.upvote()}),t.qZA(),t.TgZ(2,"span",2),t._uU(3),t.qZA(),t.TgZ(4,"span",3),t.NdJ("click",function(){return s.downvote()}),t.qZA()()),2&o&&(t.xp6(1),t.Q6J("ngClass",t.VKq(3,Z,s.userVote>0)),t.xp6(2),t.Oqu(s.voteCount),t.xp6(1),t.Q6J("ngClass",t.VKq(5,Z,s.userVote<0)))},dependencies:[l.mk],styles:[".votebox[_ngcontent-%COMP%]{height:120px;width:120px;display:flex;text-align:center;flex-direction:column;font-size:2em}.votebox[_ngcontent-%COMP%]   .vote[_ngcontent-%COMP%]{cursor:pointer}.votebox[_ngcontent-%COMP%]   .vote[_ngcontent-%COMP%]:hover{color:orange}.votebox[_ngcontent-%COMP%]   .active.up[_ngcontent-%COMP%]{color:green}.votebox[_ngcontent-%COMP%]   .active.down[_ngcontent-%COMP%]{color:red}"]})}return n})();var c=p(4006);function q(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"span",12),t.NdJ("click",function(){t.CHM(e);const s=t.oxw().$implicit,i=t.oxw();return t.KtG(i.updateActive(!1,s.key))}),t._uU(1,"Mark Complete"),t.qZA()}}function Q(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"span",13),t.NdJ("click",function(){t.CHM(e);const s=t.oxw().$implicit,i=t.oxw();return t.KtG(i.updateActive(!0,s.key))}),t._uU(1,"Mark Active"),t.qZA()}}function $(n,r){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"h5"),t._uU(2),t.qZA(),t._uU(3),t.ALo(4,"date"),t.TgZ(5,"span",8),t.NdJ("click",function(){const i=t.CHM(e).$implicit,a=t.oxw();return t.KtG(a.updateTimeStamp(i.key))}),t._uU(6,"Update Timestamp"),t.qZA(),t.YNc(7,q,2,0,"span",9),t.YNc(8,Q,2,0,"span",10),t.TgZ(9,"span",11),t.NdJ("click",function(){const i=t.CHM(e).$implicit,a=t.oxw();return t.KtG(a.delete(i.key))}),t._uU(10,"Delete"),t.qZA(),t.BQk()}if(2&n){const e=r.$implicit;t.xp6(2),t.Oqu(e.title||"missing title"),t.xp6(1),t.AsE(" Active: ",e.active," ",t.lcZ(4,5,e.timeStamp)," "),t.xp6(4),t.Q6J("ngIf",e.active),t.xp6(1),t.Q6J("ngIf",!e.active)}}function P(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"span",15),t.NdJ("click",function(){t.CHM(e);const s=t.oxw(2);return t.KtG(s.deleteItem())}),t._uU(1,"Delete All"),t.qZA()}}function Y(n,r){if(1&n&&(t.ynx(0),t.YNc(1,P,2,0,"span",14),t.BQk()),2&n){const e=r.ngIf;t.xp6(1),t.Q6J("ngIf",e.length)}}function R(n,r){1&n&&(t.TgZ(0,"span"),t._uU(1,"template renders here..."),t.qZA())}function H(n,r){if(1&n&&(t.TgZ(0,"div"),t.YNc(1,R,2,0,"span",16),t.qZA()),2&n){t.oxw();const e=t.MAs(7),o=t.MAs(14),s=t.MAs(12);t.xp6(1),t.Q6J("ngIf",e.errors)("ngIfThen",o)("ngIfElse",s)}}function S(n,r){1&n&&(t.TgZ(0,"p",17),t._uU(1,"looks good! "),t.qZA())}function E(n,r){1&n&&(t.TgZ(0,"p",18),t._uU(1,"form contains errors!"),t.qZA())}class C{constructor(){this.active=!0}}let L=(()=>{class n{constructor(e){this.abstractFirebaseDb=e,this.item=new C}ngOnInit(){this.items$=this.abstractFirebaseDb.readRealtime$("tasks")}updateTimeStamp(e){let o=(new Date).getTime();this.abstractFirebaseDb.update(`tasks/${e}`,{timeStamp:o}).then()}updateActive(e,o){this.abstractFirebaseDb.update(`tasks/${o}`,{active:e}).then()}deleteItem(){this.abstractFirebaseDb.remove("tasks").then()}createItem(){this.abstractFirebaseDb.create("tasks",this.item).then(e=>{this.item=new C})}delete(e){this.abstractFirebaseDb.remove(`tasks/${e}`).then()}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(m.zI))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-task"]],decls:15,vars:9,consts:[[1,"container"],[4,"ngFor","ngForOf"],[4,"ngIf"],["placeholder","Item Title","required","","minlength","2","maxlength","23","autofocus","",1,"form-control","mt-4",3,"ngModel","ngModelChange"],["title","ngModel"],[1,"btn","btn-primary",3,"disabled","click"],["valid",""],["errors",""],[1,"btn","btn-info",3,"click"],["class","btn btn-primary ml-1",3,"click",4,"ngIf"],["class","btn btn-primary ml-2",3,"click",4,"ngIf"],[1,"btn","btn-danger","ml-2",3,"click"],[1,"btn","btn-primary","ml-1",3,"click"],[1,"btn","btn-primary","ml-2",3,"click"],["class","btn btn-danger",3,"click",4,"ngIf"],[1,"btn","btn-danger",3,"click"],[4,"ngIf","ngIfThen","ngIfElse"],[1,"text-success"],[1,"text-danger"]],template:function(o,s){if(1&o&&(t.TgZ(0,"div",0),t.YNc(1,$,11,7,"ng-container",1),t.ALo(2,"async"),t._UZ(3,"br"),t.YNc(4,Y,2,1,"ng-container",2),t.ALo(5,"async"),t.TgZ(6,"input",3,4),t.NdJ("ngModelChange",function(a){return s.item.title=a}),t.qZA(),t.YNc(8,H,2,3,"div",2),t.TgZ(9,"button",5),t.NdJ("click",function(){return s.createItem()}),t._uU(10,"Create"),t.qZA(),t.YNc(11,S,2,0,"ng-template",null,6,t.W1O),t.YNc(13,E,2,0,"ng-template",null,7,t.W1O),t.qZA()),2&o){const i=t.MAs(7);t.xp6(1),t.Q6J("ngForOf",t.lcZ(2,5,s.items$)),t.xp6(3),t.Q6J("ngIf",t.lcZ(5,7,s.items$)),t.xp6(2),t.Q6J("ngModel",s.item.title),t.xp6(2),t.Q6J("ngIf",i.dirty),t.xp6(1),t.Q6J("disabled",!i.valid)}},dependencies:[l.sg,l.O5,c.Fj,c.JJ,c.Q7,c.wO,c.nD,c.On,l.Ov,l.uU]})}return n})(),B=(()=>{class n{transform(e){return e?e.filter(s=>!s.dismissed).reverse():void 0}static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275pipe=t.Yjl({name:"reverse",type:n,pure:!0})}return n})();const G=function(n,r,e){return{"bg-info":n,"bg-danger":r,"bg-success":e}};function j(n,r){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",4)(2,"div",5)(3,"button",6),t.NdJ("click",function(){const i=t.CHM(e).$implicit,a=t.oxw();return t.KtG(a.dismiss(i.key))}),t.TgZ(4,"span",7),t._uU(5,"\xd7"),t.qZA()()(),t.TgZ(6,"div",8),t._uU(7),t.qZA()(),t.BQk()}if(2&n){const e=r.$implicit;t.xp6(1),t.Q6J("ngClass",t.kEZ(2,G,"info"===e.style,"danger"===e.style,"success"===e.style)),t.xp6(6),t.hij(" ",e.content," ")}}class K{constructor(r,e){this.dismissed=!1,this.content=r,this.style=e||"info"}}let z=(()=>{class n{constructor(e,o){this.iFirebaseDb=e,this.abstractFirebaseDb=o}ngOnInit(){this.getMessages()}getMessages(){this.messages=this.abstractFirebaseDb.readRealtime$("messages")}sendMessage(e,o){const s=new K(e,o);this.abstractFirebaseDb.create("messages",s).then()}dismissMessage(e){this.abstractFirebaseDb.update(`messages/${e}`,{dismissed:!0}).then()}dismiss(e){this.dismissMessage(e)}infoMessage(e="info"){this.sendMessage("I have some useful information for you...",e)}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(m.R1),t.Y36(m.zI))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-toast-message-notifications"]],decls:11,vars:5,consts:[[2,"position","relative","min-height","200px"],[2,"position","absolute","top","0","right","0"],[4,"ngFor","ngForOf"],[1,"btn","btn-primary",3,"click"],[1,"toast","fade","show",3,"ngClass"],[1,"toast-header"],[1,"ml-2","mb-1","close",3,"click"],["aria-hidden","true"],[1,"toast-body"]],template:function(o,s){1&o&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,j,8,6,"ng-container",2),t.ALo(3,"reverse"),t.ALo(4,"async"),t.qZA()(),t.TgZ(5,"button",3),t.NdJ("click",function(){return s.infoMessage()}),t._uU(6,"Info Toast"),t.qZA(),t.TgZ(7,"button",3),t.NdJ("click",function(){return s.infoMessage("success")}),t._uU(8,"success Toast"),t.qZA(),t.TgZ(9,"button",3),t.NdJ("click",function(){return s.infoMessage("danger")}),t._uU(10,"danger Toast"),t.qZA()),2&o&&(t.xp6(2),t.Q6J("ngForOf",t.lcZ(3,1,t.lcZ(4,3,s.messages))))},dependencies:[l.mk,l.sg,l.Ov,B]})}return n})();function V(n,r){1&n&&(t.TgZ(0,"div"),t._uU(1," button renders here "),t.qZA())}function X(n,r){if(1&n&&(t.ynx(0),t.YNc(1,V,2,0,"div",5),t.BQk()),2&n){const e=t.oxw(2),o=t.MAs(4),s=t.MAs(2);t.xp6(1),t.Q6J("ngIf",e.isFollowing)("ngIfThen",o)("ngIfElse",s)}}function W(n,r){if(1&n&&(t.TgZ(0,"div",3),t._uU(1),t.TgZ(2,"strong"),t._uU(3),t.qZA(),t._uU(4," followers "),t.YNc(5,X,2,3,"ng-container",4),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.hij(" @",e.user.name," has "),t.xp6(2),t.Oqu(e.followerCount),t.xp6(2),t.Q6J("ngIf",e.currentUser.key!==e.user.key)}}function tt(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"button",6),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.toggleFollow(s.user))}),t._uU(1,"Follow"),t.qZA()}}function et(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"button",7),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.toggleFollow(s.user))}),t._uU(1,"Unfollow"),t.qZA()}}let nt=(()=>{class n{constructor(e){this.abstractFirebaseDb=e}ngOnInit(){this.user&&this.user.key&&this.getFollowers(this.user.key),this.currentUser&&this.currentUser.key&&this.getFollowing(this.currentUser.key,this.user.key)}ngOnChanges(e){}getFollowers(e){this.followers=this.abstractFirebaseDb.readRealtimeOriginal$(`followers/${e}`).pipe((0,b.b)(o=>{this.followerCount=Object.keys(o).reduce((s,i)=>s+o[i],0)})).subscribe()}getFollowing(e,o){this.following=this.abstractFirebaseDb.readRealtimeOriginal$(`following/${e}/${o}`).pipe((0,b.b)(s=>this.isFollowing=!!s)).subscribe()}follow(e,o){this.abstractFirebaseDb.update(`followers/${o}`,{[e]:!0}),this.abstractFirebaseDb.update(`following/${e}`,{[o]:!0})}unfollow(e,o){this.abstractFirebaseDb.remove(`followers/${o}/${e}`),this.abstractFirebaseDb.remove(`following/${e}/${o}`)}toggleFollow(e){const o=e.key,s=this.currentUser.key;this.isFollowing?this.unfollow(s,o):this.follow(s,o)}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(m.zI))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-user-profile"]],inputs:{user:"user",currentUser:"currentUser"},features:[t.TTD],decls:5,vars:1,consts:[["class","profile",4,"ngIf"],["followButton",""],["unfollowButton",""],[1,"profile"],[4,"ngIf"],[4,"ngIf","ngIfThen","ngIfElse"],[1,"button","is-info",3,"click"],[1,"button","is-warning",3,"click"]],template:function(o,s){1&o&&(t.YNc(0,W,6,3,"div",0),t.YNc(1,tt,2,0,"ng-template",null,1,t.W1O),t.YNc(3,et,2,0,"ng-template",null,2,t.W1O)),2&o&&t.Q6J("ngIf",s.currentUser)},dependencies:[l.O5]})}return n})();function ot(n,r){if(1&n&&(t.TgZ(0,"div"),t._UZ(1,"app-user-profile",1),t.qZA()),2&n){const e=r.$implicit,o=t.oxw();t.xp6(1),t.Q6J("user",e)("currentUser",o.currentUser)}}let st=(()=>{class n{constructor(e){this.abstractFirebaseDb=e,this.loginUserId="-NJv4HtIRVHIk7bB-7Px"}ngOnInit(){this.abstractFirebaseDb.readOnceOriginal("users/"+this.loginUserId).then(e=>{this.currentUser=e}),this.users$=this.abstractFirebaseDb.readRealtime$("users")}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(m.zI))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-follow-system"]],decls:6,vars:4,consts:[[4,"ngFor","ngForOf"],[3,"user","currentUser"]],template:function(o,s){1&o&&(t._uU(0,"You are logged in as "),t.TgZ(1,"strong"),t._uU(2),t.qZA(),t._UZ(3,"hr"),t.YNc(4,ot,2,2,"div",0),t.ALo(5,"async")),2&o&&(t.xp6(2),t.Oqu(null==s.currentUser?null:s.currentUser.name),t.xp6(2),t.Q6J("ngForOf",t.lcZ(5,2,s.users$)))},dependencies:[l.sg,nt,l.Ov]})}return n})(),it=(()=>{class n{constructor(e){this.abstractFirebaseDb=e}ngOnInit(){}onIncrement(){this.incDisable=!0,this.abstractFirebaseDb.updateCounter("pages",!0).then(()=>this.incDisable=!1)}onDecrement(){this.decDisable=!0,this.abstractFirebaseDb.updateCounter("pages",!1).then(()=>this.decDisable=!1)}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(m.zI))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-couter-stats"]],decls:4,vars:2,consts:[[1,"btn","btn-primary",3,"disabled","click"],[1,"btn","btn-warning",3,"disabled","click"]],template:function(o,s){1&o&&(t.TgZ(0,"button",0),t.NdJ("click",function(){return s.onIncrement()}),t._uU(1,"Inc"),t.qZA(),t.TgZ(2,"button",1),t.NdJ("click",function(){return s.onDecrement()}),t._uU(3,"Dec"),t.qZA()),2&o&&(t.Q6J("disabled",s.incDisable),t.xp6(2),t.Q6J("disabled",s.decDisable))}})}return n})();var rt=p(4185);const at=["postForm"];function ct(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"li",5),t.NdJ("click",function(){const i=t.CHM(e).$implicit,a=t.oxw();return t.KtG(a.fetchPost(i.key))}),t._uU(1),t.ALo(2,"json"),t.TgZ(3,"span",5),t.NdJ("click",function(){const i=t.CHM(e).$implicit,a=t.oxw();return t.KtG(a.deletePost(i.key))}),t._uU(4,"X"),t.qZA()()}if(2&n){const e=r.$implicit;t.xp6(1),t.AsE("",e.key," | ",t.lcZ(2,2,null==e?null:e.value)," ")}}let lt=(()=>{class n{constructor(e){this.realtimeDbService=e}ngOnInit(){}onCreatePost(e){this.realtimeDbService.post("2023/posts.json",e).subscribe(o=>{this.postForm.reset()})}fetchPosts(){this.realtimeDbService.get("2023/posts.json").subscribe(e=>{this.posts=e})}fetchPost(e){this.realtimeDbService.get(`2023/posts/${e}.json`).subscribe(o=>{this.post=o})}deletePost(e){this.realtimeDbService.delete(`2023/posts/${e}.json`).subscribe(o=>{this.fetchPosts()})}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(rt.N))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-realtimedb-playground"]],viewQuery:function(o,s){if(1&o&&t.Gf(at,5),2&o){let i;t.iGM(i=t.CRH())&&(s.postForm=i.first)}},decls:25,vars:6,consts:[[3,"ngSubmit"],["postForm","ngForm"],["type","text","name","title","ngModel","","required",""],["id","content","name","content","ngModel","","required",""],["type","submit"],[3,"click"],[3,"click",4,"ngFor","ngForOf"]],template:function(o,s){if(1&o){const i=t.EpF();t.TgZ(0,"h2"),t._uU(1,"Angular: Making HTTP Requests with Firebase "),t.qZA(),t.TgZ(2,"form",0,1),t.NdJ("ngSubmit",function(){t.CHM(i);const u=t.MAs(3);return t.KtG(s.onCreatePost(u.value))}),t.TgZ(4,"div")(5,"label")(6,"b"),t._uU(7,"Title"),t.qZA()(),t._UZ(8,"input",2),t.TgZ(9,"label")(10,"b"),t._uU(11,"Content"),t.qZA()(),t._UZ(12,"textarea",3),t.TgZ(13,"button",4),t._uU(14,"Send Post"),t.qZA()()(),t.TgZ(15,"div")(16,"button",5),t.NdJ("click",function(){return s.fetchPosts()}),t._uU(17,"Fetch Posts"),t.qZA()(),t._UZ(18,"hr"),t.TgZ(19,"ul"),t.YNc(20,ct,5,4,"li",6),t.ALo(21,"keyvalue"),t.qZA(),t._UZ(22,"hr"),t._uU(23),t.ALo(24,"json")}2&o&&(t.xp6(20),t.Q6J("ngForOf",t.lcZ(21,2,s.posts)),t.xp6(3),t.hij("\n",t.lcZ(24,4,s.post),"\n"))},dependencies:[l.sg,c._Y,c.Fj,c.JJ,c.JL,c.Q7,c.On,c.F,l.Ts,l.Nd]})}return n})();var y=p(4440),f=p(4524),A=p(5170),g=p(1189);function pt(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"button",6),t.NdJ("click",function(){t.CHM(e),t.oxw();const s=t.MAs(2),i=t.oxw();return t.KtG(i.createBook(s))}),t._uU(1,"Create Book"),t.qZA()}}function ut(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"button",6),t.NdJ("click",function(){t.CHM(e),t.oxw();const s=t.MAs(2),i=t.oxw();return t.KtG(i.updateBook(s))}),t._uU(1,"Update Book"),t.qZA()}}function _t(n,r){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"ang-modal",2,3),t._UZ(3,"ang-pretty-json-input",4),t.YNc(4,pt,2,0,"button",5),t.YNc(5,ut,2,0,"button",5),t.qZA(),t._UZ(6,"hr"),t.TgZ(7,"button",6),t.NdJ("click",function(){t.CHM(e);const s=t.MAs(2),i=t.oxw();return t.KtG(i.addBook(s))}),t._uU(8,"Add"),t.qZA(),t._UZ(9,"hr")(10,"ng-table-view",7),t.TgZ(11,"ng-table-actions",8),t.NdJ("onDelete",function(s){t.CHM(e);const i=t.oxw();return t.KtG(i.onDelete(s))})("onEdit",function(s){t.CHM(e);const i=t.MAs(2),a=t.oxw();return t.KtG(a.onEdit(s,i))})("onView",function(s){t.CHM(e);const i=t.MAs(2),a=t.oxw();return t.KtG(a.onView(s,i))}),t.qZA(),t.TgZ(12,"ng-table-inline-editing-one",9),t.NdJ("onDelete",function(s){t.CHM(e);const i=t.oxw();return t.KtG(i.onDelete(s))})("onUpdate",function(s){t.CHM(e);const i=t.MAs(2),a=t.oxw();return t.KtG(a.onEdit(s,i))}),t.qZA(),t.TgZ(13,"ng-table-inline-editing-two",10),t.NdJ("onUpdate",function(s){t.CHM(e);const i=t.MAs(2),a=t.oxw();return t.KtG(a.onEdit(s,i))}),t.qZA(),t.BQk()}if(2&n){const e=t.oxw();t.xp6(3),t.Q6J("data",e.bookForm),t.xp6(1),t.Q6J("ngIf","add"===e.action),t.xp6(1),t.Q6J("ngIf","edit"===e.action),t.xp6(5),t.Q6J("columns",e.cols1)("customHeads",e.customHeads1)("rows",e.books),t.xp6(1),t.Q6J("columns",e.cols)("customHeads",e.customHeads)("rows",e.books),t.xp6(1),t.Q6J("columns",e.cols)("customHeads",e.customHeads)("rows",e.books),t.xp6(1),t.Q6J("columns",e.cols1)("customHeads",e.customHeads1)("rows",e.books)}}function mt(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"form",12)(1,"label"),t._uU(2,"Email "),t.TgZ(3,"em"),t._uU(4,"(Required)"),t.qZA(),t._UZ(5,"input",13),t.qZA(),t.TgZ(6,"label"),t._uU(7,"Password "),t._UZ(8,"input",14),t.qZA(),t.TgZ(9,"span")(10,"button",6),t.NdJ("click",function(){t.CHM(e);const s=t.oxw(2);return t.KtG(s.signUp())}),t._uU(11,"SignUp"),t.qZA(),t.TgZ(12,"button",6),t.NdJ("click",function(){t.CHM(e);const s=t.oxw(2);return t.KtG(s.signIn())}),t._uU(13,"SignIn"),t.qZA()()()}if(2&n){const e=t.oxw(2);t.Q6J("formGroup",e.singUpForm)}}function gt(n,r){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"span"),t._uU(2,"Login as : "),t.TgZ(3,"em"),t._uU(4),t.qZA()(),t.TgZ(5,"button",6),t.NdJ("click",function(){t.CHM(e);const s=t.oxw(2);return t.KtG(s.signOut())}),t._uU(6,"SignOut"),t.qZA(),t.BQk()}if(2&n){const e=t.oxw(2);t.xp6(4),t.Oqu(null==e.user?null:e.user.email)}}function dt(n,r){if(1&n&&(t.ynx(0),t.YNc(1,mt,14,1,"form",11),t.YNc(2,gt,7,1,"ng-container",1),t.BQk()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",!e.user),t.xp6(1),t.Q6J("ngIf",e.user)}}function ft(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"button",6),t.NdJ("click",function(){t.CHM(e);const s=t.oxw(2);return t.KtG(s.loadMore())}),t._uU(1,"load More"),t.qZA()}}const F=function(){return["name","author"]};function ht(n,r){if(1&n&&(t.ynx(0),t._UZ(1,"ng-table-view",15),t.YNc(2,ft,2,0,"button",5),t.BQk()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("columns",t.DdM(3,F))("rows",e.loadMoreData.data),t.xp6(1),t.Q6J("ngIf",!e.loadMoreData.empty)}}function bt(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"button",6),t.NdJ("click",function(){t.CHM(e);const s=t.oxw(2);return t.KtG(s.pre())}),t._uU(1,"pre"),t.qZA()}}function Tt(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"button",6),t.NdJ("click",function(){t.CHM(e);const s=t.oxw(2);return t.KtG(s.next())}),t._uU(1,"Next"),t.qZA()}}function xt(n,r){if(1&n&&(t.ynx(0),t._UZ(1,"ng-table-view",15),t.YNc(2,bt,2,0,"button",5),t.YNc(3,Tt,2,0,"button",5),t.BQk()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("columns",t.DdM(4,F))("rows",e.paginationData.data),t.xp6(1),t.Q6J("ngIf",!e.paginationData.empty),t.xp6(1),t.Q6J("ngIf",!e.paginationData.empty)}}const kt=function(){return["Books","auth","pagination load more","pagination pre and next"]};let vt=(()=>{class n extends y.C5{constructor(e){super(),this.fb=e,this.bookForm={name:"",author:""},this.selectTab=1,this.books=[],this.cols=["","name","author"],this.customHeads=["Action","Book name","Book author"],this.cols1=["name","author"],this.customHeads1=["Book name","Book author"],this.action="add",this.paginationData={data:[],latestDoc:null,empty:!1,size:0},this.loadMoreData={data:[],latestDoc:null,empty:!1,size:0},this.collectionPath="books",this.singUpForm=this.fb.group({email:["",[c.kI.required,c.kI.email]],password:["",[c.kI.required]]})}ngOnInit(){this.getCollectionRealTime(e=>{this.books=e}),this.subscribingAuthChangedRealTime(e=>{this.user=e}),this.loadMore()}createBook(e){this.addingDoc(this.bookForm).then(()=>{e.close()})}updateBook(e){this.updatingDoc(this.docId,this.bookForm).then(()=>{this.docId=null,e.close()})}onView(e,o){this.action="view",this.getSingleDoc(e.id).then(s=>{this.bookForm=s,o.open()})}onDelete(e){this.action="delete",confirm("Are you sure to delete doc ?")&&this.deletingDoc(e.id).then()}onEdit(e,o){this.action="edit",this.getSingleDoc(e.id).then(s=>{let{name:i,author:a,id:u}=s;this.bookForm={name:i,author:a},this.docId=u,o.open()})}onSelectTab(e){this.selectTab=e}addBook(e){this.bookForm={name:"",author:""},this.action="add",e.open()}signUp(){this.singUpForm.valid&&this.signUpWithEmailPass(this.singUpForm.value).then(()=>{this.singUpForm.reset()})}signIn(){this.singUpForm.valid&&this.signInWithEmailPass(this.singUpForm.value).then(()=>{this.singUpForm.reset()})}signOut(){this.onSignOut().then()}loadMore(){this.getPaginationData(this.loadMoreData).then(e=>{this.loadMoreData=e})}next(){this.nextPage(this.paginationData).then(e=>{this.paginationData=e})}pre(){this.prePage(this.paginationData).then(e=>{this.paginationData=e})}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(c.qu))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-firestore"]],features:[t.qOj],decls:5,vars:6,consts:[["color","red",3,"tabs","onClick"],[4,"ngIf"],["id","custom-modal-1","width","50vw"],["pop",""],["useCase","VALID_FORM",3,"data"],[3,"click",4,"ngIf"],[3,"click"],["table","striped",3,"columns","customHeads","rows"],["table","bordered",3,"columns","customHeads","rows","onDelete","onEdit","onView"],["table","bordered",3,"columns","customHeads","rows","onDelete","onUpdate"],["table","bordered",3,"columns","customHeads","rows","onUpdate"],["class","contact-form",3,"formGroup",4,"ngIf"],[1,"contact-form",3,"formGroup"],["formControlName","email","type","email"],["formControlName","password"],[3,"columns","rows"]],template:function(o,s){1&o&&(t.TgZ(0,"tg-tabs",0),t.NdJ("onClick",function(a){return s.onSelectTab(a)}),t.qZA(),t.YNc(1,_t,14,15,"ng-container",1),t.YNc(2,dt,3,2,"ng-container",1),t.YNc(3,ht,3,4,"ng-container",1),t.YNc(4,xt,4,5,"ng-container",1)),2&o&&(t.Q6J("tabs",t.DdM(5,kt)),t.xp6(1),t.Q6J("ngIf",1===s.selectTab),t.xp6(1),t.Q6J("ngIf",2===s.selectTab),t.xp6(1),t.Q6J("ngIf",3===s.selectTab),t.xp6(1),t.Q6J("ngIf",4===s.selectTab))},dependencies:[l.O5,c._Y,c.Fj,c.JJ,c.JL,c.sg,c.u,f.ss,f.zS,A.n4,g.xv,g.Kb,g.BB,g.az]})}return n})();var _=p(4716);let Zt=(()=>{class n{constructor(){this.auth=(0,_.v0)()}ngOnInit(){}signInAsEmail(){const e=new _.hJ;(0,_.rh)(this.auth,e).then(o=>{const i=_.hJ.credentialFromResult(o).accessToken,a=o.user;let u=(0,_.gK)(o);this.result={user:a,token:i,additionalInfo:u}}).catch(o=>{console.log(o),_.hJ.credentialFromError(o)})}getRedirectResult1(){(0,_.cx)(this.auth).then(e=>{const s=_.hJ.credentialFromResult(e).accessToken,i=e.user;let a=(0,_.gK)(e);this.result={user:i,token:s,additionalInfo:a},console.log(e)}).catch(e=>{_.hJ.credentialFromError(e)})}signout(){(0,_.w7)(this.auth).then(()=>{}).catch(e=>{})}static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-firebase-auth"]],decls:8,vars:3,consts:[[3,"click"]],template:function(o,s){1&o&&(t.TgZ(0,"button",0),t.NdJ("click",function(){return s.signInAsEmail()}),t._uU(1,"signInAsEmail"),t.qZA(),t.TgZ(2,"button",0),t.NdJ("click",function(){return s.getRedirectResult1()}),t._uU(3,"getRedirectResult"),t.qZA(),t.TgZ(4,"button",0),t.NdJ("click",function(){return s.signout()}),t._uU(5,"signout"),t.qZA(),t._uU(6),t.ALo(7,"json")),2&o&&(t.xp6(6),t.hij(" ",t.lcZ(7,1,s.result),"\n"))},dependencies:[l.Ts]})}return n})(),Ct=(()=>{class n{constructor(e){this.fdb=e}ngOnInit(){this.fdb.getUsers().subscribe(console.log)}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(y.gm))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-firebase-db"]],decls:2,vars:0,template:function(o,s){1&o&&(t.TgZ(0,"p"),t._uU(1,"firebase-db works!"),t.qZA())}})}return n})();function yt(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"li"),t._uU(1),t.TgZ(2,"a",5),t.NdJ("click",function(){const i=t.CHM(e).$implicit,a=t.oxw(2);return t.KtG(a.deleteMessage(i))}),t._uU(3,"Delete"),t.qZA()()}if(2&n){const e=r.$implicit;t.xp6(1),t.hij(" ",e.name," \u2014 ")}}function At(n,r){if(1&n&&(t.TgZ(0,"ul"),t.YNc(1,yt,4,1,"li",4),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.posts)}}let Ft=(()=>{class n{constructor(e){this.abstractFirebaseDb=e,this.posts=[],this.form={name:""}}ngOnInit(){this.abstractFirebaseDb.readRealtime$("posts").subscribe(e=>{this.posts=e})}addPost(){this.abstractFirebaseDb.create("posts",this.form)}deleteMessage(e){}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(m.zI))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-realtime-db"]],decls:6,vars:3,consts:[[4,"ngIf"],[3,"submit"],["type","text","name","message","autofocus","",3,"ngModel","ngModelChange"],["type","submit","value","Add Message"],[4,"ngFor","ngForOf"],[3,"click"]],template:function(o,s){1&o&&(t.TgZ(0,"h2"),t._uU(1),t.qZA(),t.YNc(2,At,2,1,"ul",0),t.TgZ(3,"form",1),t.NdJ("submit",function(){return s.addPost()}),t.TgZ(4,"input",2),t.NdJ("ngModelChange",function(a){return s.form.name=a}),t.qZA(),t._UZ(5,"input",3),t.qZA()),2&o&&(t.xp6(1),t.hij(" You Have ",null==s.posts?null:s.posts.length," Message(s)!\n"),t.xp6(1),t.Q6J("ngIf",s.posts.length),t.xp6(2),t.Q6J("ngModel",s.form.name))},dependencies:[l.sg,l.O5,c._Y,c.Fj,c.JJ,c.JL,c.On,c.F]})}return n})();function Ut(n,r){if(1&n&&(t.TgZ(0,"section")(1,"h2")(2,"span"),t._uU(3,"Total"),t.qZA(),t._uU(4,"Users"),t.qZA(),t.TgZ(5,"h2")(6,"h1"),t._uU(7),t.qZA()()()),2&n){const e=r.ngIf;t.xp6(7),t.hij(" ",e.length," ")}}function wt(n,r){if(1&n&&(t.ynx(0),t.TgZ(1,"b"),t._uU(2,"Last Active At"),t.qZA(),t._uU(3),t.ALo(4,"date"),t.BQk()),2&n){const e=t.oxw().$implicit;t.xp6(3),t.hij(" ",t.lcZ(4,1,e.timestamp)," ")}}function It(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"button",9),t.NdJ("click",function(){t.CHM(e);const s=t.oxw().$implicit,i=t.oxw(2);return t.KtG(i.setOffline(null==s?null:s.key))}),t._uU(1,"Offline"),t.qZA()}}const Jt=function(n,r,e){return{"text-success":n,"text-danger":r,"text-warning":e}};function Ot(n,r){if(1&n&&(t.TgZ(0,"li")(1,"span"),t._uU(2),t.qZA(),t.TgZ(3,"span",7),t._uU(4),t.qZA(),t.TgZ(5,"span"),t.YNc(6,wt,5,3,"ng-container",1),t.qZA(),t.TgZ(7,"div"),t.YNc(8,It,2,0,"button",8),t.qZA()()),2&n){const e=r.$implicit;t.xp6(2),t.hij(" ",e.key,""),t.xp6(1),t.Q6J("ngClass",t.kEZ(5,Jt,"online"===e.status,"offline"===e.status,"away"===e.status)),t.xp6(1),t.hij(" ",e.status,""),t.xp6(2),t.Q6J("ngIf","offline"===e.status),t.xp6(2),t.Q6J("ngIf","offline"!==e.status)}}function Mt(n,r){if(1&n&&(t.TgZ(0,"ul"),t.YNc(1,Ot,9,9,"li",4),t.qZA()),2&n){const e=r.ngIf;t.xp6(1),t.Q6J("ngForOf",e)}}function Dt(n,r){1&n&&t.GkF(0)}const Nt=function(n){return{$implicit:n}};function qt(n,r){if(1&n&&(t.ynx(0),t.TgZ(1,"tr")(2,"td",10)(3,"strong"),t._uU(4),t.ALo(5,"uppercase"),t.qZA()()(),t.YNc(6,Dt,1,0,"ng-container",11),t.BQk()),2&n){const e=r.$implicit;t.oxw();const o=t.MAs(44);t.xp6(4),t.Oqu(t.lcZ(5,3,e.key)),t.xp6(2),t.Q6J("ngTemplateOutlet",o)("ngTemplateOutletContext",t.VKq(5,Nt,e))}}function Qt(n,r){if(1&n&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td",12)(4,"b"),t._uU(5),t.qZA()()()),2&n){const e=t.oxw(2),o=e.parent,s=e.$implicit;t.xp6(2),t.lnq(" ",o," ",o?"/":""," ",s.key," "),t.xp6(3),t.Oqu(s.value.counter)}}function $t(n,r){1&n&&t.GkF(0)}const U=function(n,r){return{$implicit:n,parent:r}};function Pt(n,r){if(1&n&&(t.ynx(0),t.YNc(1,Qt,6,4,"tr",1),t.YNc(2,$t,1,0,"ng-container",11),t.BQk()),2&n){const e=t.oxw(),o=e.$implicit,s=e.parent;t.oxw();const i=t.MAs(46);t.xp6(1),t.Q6J("ngIf",o.value.counter),t.xp6(1),t.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",t.WLB(3,U,o,s?s+" / "+o.key:o.key))}}function Yt(n,r){1&n&&t.YNc(0,Pt,3,6,"ng-container",1),2&n&&t.Q6J("ngIf","counter"!==r.$implicit.key)}function Rt(n,r){1&n&&t.GkF(0)}function Ht(n,r){if(1&n&&(t.ynx(0),t.YNc(1,Rt,1,0,"ng-container",11),t.BQk()),2&n){const e=r.$implicit,o=t.oxw().parent;t.oxw();const s=t.MAs(44);t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.WLB(2,U,e,o))}}function St(n,r){1&n&&(t.YNc(0,Ht,2,5,"ng-container",4),t.ALo(1,"keyvalue")),2&n&&t.Q6J("ngForOf",t.lcZ(1,1,r.$implicit.value))}let Et=(()=>{class n{constructor(e,o){this.presenceService=e,this.abstractFirebaseDb=o,this.counts$=this.presenceService.getUserOnlineCounts$,this.totalUsers$=this.presenceService.getUsers$,this.flattenObject1=s=>{const i={};return Object.keys(s).forEach(a=>{const u=s[a];"object"!=typeof u||null===u||Array.isArray(u)?i[a]=u:Object.assign(i,this.flattenObject1(u))}),i},this.flattenObject=s=>{let i={};for(const a in s)if(s.hasOwnProperty(a))if("object"!=typeof s[a]||Array.isArray(s[a]))i[a]=s[a];else{const u=this.flattenObject(s[a]);for(const w in u)i[a+"_"+w]=u[w]}return i}}setOffline(e){this.presenceService.setPresence(e,"offline")}ngOnInit(){var e=this;this.abstractFirebaseDb.readRealtimeOriginal$("server-activities").subscribe(o=>{this.serverActivities=o}),this.abstractFirebaseDb.readRealtimeOriginal$("router-activities").subscribe(function(){var o=(0,k.Z)(function*(s){e.routerActivities=s,e.routerActivitiesCount=Object.keys(e.routerActivities).length});return function(s){return o.apply(this,arguments)}}())}d(e){let o={};for(let s in e)if(e.hasOwnProperty(s)){const i=typeof e[s];"string"===i?o[s]=e[s]:"object"===i&&this.d(e[s])}}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(h),t.Y36(m.zI))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["fb-activities"]],decls:47,vars:14,consts:[[1,"grid-even-columns"],[4,"ngIf"],[1,"overflow-y"],[1,"sticky-top"],[4,"ngFor","ngForOf"],["rows",""],["inner",""],[3,"ngClass"],[3,"click",4,"ngIf"],[3,"click"],["colspan","2"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[2,"color","tomato"]],template:function(o,s){1&o&&(t.TgZ(0,"div",0)(1,"section")(2,"h2")(3,"span"),t._uU(4,"Online"),t.qZA(),t._uU(5,"Users"),t.qZA(),t.TgZ(6,"h2")(7,"h1"),t._uU(8),t.ALo(9,"async"),t.qZA()()(),t.YNc(10,Ut,8,1,"section",1),t.ALo(11,"async"),t.TgZ(12,"section")(13,"h2")(14,"span"),t._uU(15,"Server"),t.qZA(),t._uU(16,"Requests"),t.qZA(),t.TgZ(17,"h2")(18,"h1"),t._uU(19),t.qZA()()(),t.TgZ(20,"section")(21,"h2")(22,"span"),t._uU(23,"Client"),t.qZA(),t._uU(24,"Module View"),t.qZA(),t.TgZ(25,"h2")(26,"h1"),t._uU(27),t.qZA()()()(),t.YNc(28,Mt,2,1,"ul",1),t.ALo(29,"async"),t.TgZ(30,"section",2)(31,"table")(32,"caption"),t._uU(33,"Modules Summary"),t.qZA(),t.TgZ(34,"thead",3)(35,"tr")(36,"th"),t._uU(37,"Modules"),t.qZA(),t.TgZ(38,"th"),t._uU(39,"Views"),t.qZA()()(),t.TgZ(40,"tbody"),t.YNc(41,qt,7,7,"ng-container",4),t.ALo(42,"keyvalue"),t.qZA()()(),t.YNc(43,Yt,1,1,"ng-template",null,5,t.W1O),t.YNc(45,St,2,3,"ng-template",null,6,t.W1O)),2&o&&(t.xp6(8),t.hij(" ",t.lcZ(9,6,s.counts$)," "),t.xp6(2),t.Q6J("ngIf",t.lcZ(11,8,s.totalUsers$)),t.xp6(9),t.Oqu(null==s.serverActivities?null:s.serverActivities.counter),t.xp6(8),t.Oqu(s.routerActivitiesCount),t.xp6(1),t.Q6J("ngIf",t.lcZ(29,10,s.totalUsers$)),t.xp6(13),t.Q6J("ngForOf",t.lcZ(42,12,s.routerActivities)))},dependencies:[l.mk,l.sg,l.O5,l.tP,l.Ov,l.gd,l.uU,l.Nd],styles:['*,*:before,*:after{box-sizing:border-box;margin-top:0}:host{display:block;background:#f5f5f5;color:#18314f;font-size:1.5rem;padding:1rem}section{background:white;box-shadow:0 0 20px #00000040;width:100%;margin:1rem auto;padding:1rem}h2{font-weight:400;text-transform:uppercase;font-size:1rem;margin-bottom:3em;letter-spacing:8px;text-align:center;color:tomato}h2:after{content:"";display:block;border-bottom:1px solid rgba(24,49,79,.25);width:20%;margin:3em auto 0}h2 span{font-size:2em;font-weight:700;display:block;color:#18314f}[class*=grid-]{display:grid;gap:1rem}.grid-even-columns{grid-template-columns:repeat(auto-fit,minmax(min(300px,100%),1fr))}.overflow-y{height:300px;overflow-y:auto;overflow-x:hidden}table{border:1px solid #ccc;border-collapse:collapse;margin:0;padding:0;width:100%;table-layout:fixed;box-shadow:1px 2px 1px 2px #e6e5e5;position:relative}table caption{font-size:1.5em;margin:.5em 0 .75em}table tr{background-color:#f8f8f8;border:1px solid #ddd;padding:.35em}table th,table td{padding:.625em;text-align:center}table th{font-size:.85em;letter-spacing:.1em;text-transform:uppercase}.text-success{color:#006400}.text-danger{color:#8b0000}.text-warning{color:#ff0}.sticky-top{position:sticky;top:0}@media screen and (max-width: 600px){table{border:0}table caption{font-size:1.3em}table thead{border:none;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute!important;width:1px}table tr{border-bottom:3px solid #ddd;display:block;margin-bottom:.625em}table td{border-bottom:1px solid #ddd;display:block;font-size:.8em;text-align:right}table td:last-child{border-bottom:0}table td:before{content:attr(data-label);float:left;font-weight:700;text-transform:uppercase}}ul{list-style:none;background:#fff;margin:0;padding:0;box-shadow:0 0 10px #0000004d;overflow-y:auto;max-height:500px;border-radius:1rem}ul li{padding:.5rem;display:flex;justify-content:space-between}ul li:not(last-child){border-bottom:2px solid slategrey}ul li>*{flex:1}ul li>*:last-child{text-align:right}\n'],encapsulation:3})}return n})();var Lt=p(7080),Bt=p(6079),T=p(9656),Gt=p(9443),jt=p(4433),Kt=p(4044);const zt=[{path:"",component:(()=>{class n{constructor(){}ngOnInit(){}static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-firebase"]],decls:27,vars:0,consts:[["themeColor","green","overlayStyle","DIM_DARK"],["title","World"],["direction","horizontal"],["routerLink","realtime-presence","label","realtime presence"],["routerLink","counter","label","counter"],["routerLink","db-http","label","db http"],["routerLink","follow-system","label","follow system"],["routerLink","db","label","db"],["routerLink","db-http-2","label","db http 2"],["routerLink","task","label","task"],["routerLink","toast-notifications","label","toast-notifications"],["routerLink","voting","label","voting"],["routerLink","activities","label","activities"],["routerLink","employees","label","employees"],["routerLink","firestore","label","firestore"],["routerLink","auth","label","auth"]],template:function(o,s){1&o&&(t.TgZ(0,"app-material-layout",0)(1,"app-mt-header",1)(2,"app-nav-list",2),t._UZ(3,"app-nav-link",3)(4,"app-nav-link",4)(5,"app-nav-link",5)(6,"app-nav-link",6)(7,"app-nav-link",7),t.qZA(),t._UZ(8,"ng-sidenav-open-close-btn"),t.qZA(),t.TgZ(9,"app-mt-sidebar")(10,"app-nav-list"),t._UZ(11,"app-nav-link",3)(12,"app-nav-link",4)(13,"app-nav-link",5)(14,"app-nav-link",6)(15,"app-nav-link",7)(16,"app-nav-link",8)(17,"app-nav-link",9)(18,"app-nav-link",10)(19,"app-nav-link",11)(20,"app-nav-link",12)(21,"app-nav-link",13)(22,"app-nav-link",14)(23,"app-nav-link",15),t.qZA()(),t.TgZ(24,"app-mt-main"),t._UZ(25,"router-outlet"),t.qZA(),t._UZ(26,"app-mt-footer"),t.qZA())},dependencies:[d.lC,d.rH,Lt.G,Bt.G,T.cs,T.KE,T.Qx,Gt.U,jt.U,Kt.v]})}return n})(),children:[{path:"",redirectTo:"realtime-presence",pathMatch:"full"},{path:"realtime-presence",component:D},{path:"counter",component:it},{path:"db-http",component:Ct},{path:"follow-system",component:st},{path:"db",component:Ft},{path:"db-http-2",component:lt},{path:"task",component:L},{path:"toast-notifications",component:z},{path:"voting",component:N},{path:"activities",component:Et},{path:"employees",loadChildren:()=>p.e(7996).then(p.bind(p,7996)).then(n=>n.EmployeesModule)},{path:"firestore",component:vt},{path:"auth",component:Zt}]}];let Vt=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[d.Bz.forChild(zt),d.Bz]})}return n})();var Xt=p(9710);let Wt=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[l.ez,c.u5,c.UX,Vt,f.f5,f.zk,A.P4,Xt.b$,g.Ol]})}return n})()}}]);