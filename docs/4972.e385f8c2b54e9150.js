"use strict";(self.webpackChunkportfolio_all_in_one=self.webpackChunkportfolio_all_in_one||[]).push([[4972],{4972:(Z,m,o)=>{o.r(m),o.d(m,{SystemsModule:()=>w});var l=o(9808),c=o(4202),t=o(5e3);let x=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-systems"]],decls:1,vars:0,template:function(n,i){1&n&&t._UZ(0,"router-outlet")},dependencies:[c.lC]}),e})();var d=o(3075);function y(e,s){if(1&e){const n=t.EpF();t.TgZ(0,"button",10),t.NdJ("click",function(){t.CHM(n);const r=t.oxw().$implicit;return t.KtG(r.edit=!r.edit)}),t._UZ(1,"i",11),t.qZA()}}const g=function(e){return{hidden:e}};function M(e,s){if(1&e){const n=t.EpF();t.TgZ(0,"div",3)(1,"div",4),t.YNc(2,y,2,0,"button",5),t.TgZ(3,"button",6),t.NdJ("click",function(){const a=t.CHM(n).index,p=t.oxw();return t.KtG(p.onDelete(a))}),t._UZ(4,"i",7),t.qZA()(),t.TgZ(5,"div",8)(6,"p"),t._uU(7),t.qZA()(),t.TgZ(8,"textarea",9),t.NdJ("ngModelChange",function(){t.CHM(n);const r=t.oxw();return t.KtG(r.updateLocalStorage())})("ngModelChange",function(r){const p=t.CHM(n).$implicit;return t.KtG(p.text=r)}),t.qZA()()}if(2&e){const n=s.$implicit;t.xp6(2),t.Q6J("ngIf",n.edit),t.xp6(3),t.Q6J("ngClass",t.VKq(5,g,n.edit)),t.xp6(2),t.Oqu(n.text),t.xp6(1),t.Q6J("ngModel",n.text)("ngClass",t.VKq(7,g,!n.edit))}}let v=(()=>{class e{constructor(){this.notes=JSON.parse(localStorage.getItem("notes"))||[]}ngOnInit(){}addNewNote(){this.notes.push({text:"",edit:!1}),this.updateLocalStorage()}updateLocalStorage(){localStorage.setItem("notes",JSON.stringify(this.notes))}onDelete(n){this.notes.splice(n,1),this.updateLocalStorage()}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-notes"]],decls:4,vars:1,consts:[[1,"add-btn",3,"click"],[1,"fas","fa-plus"],["class","note",4,"ngFor","ngForOf"],[1,"note"],[1,"tools"],["class","edit",3,"click",4,"ngIf"],[1,"delete",3,"click"],[1,"fas","fa-trash-alt"],[1,"main",3,"ngClass"],[3,"ngModel","ngClass","ngModelChange"],[1,"edit",3,"click"],[1,"fas","fa-edit"]],template:function(n,i){1&n&&(t.TgZ(0,"button",0),t.NdJ("click",function(){return i.addNewNote()}),t._UZ(1,"i",1),t._uU(2," Add note\n"),t.qZA(),t.YNc(3,M,9,9,"div",2)),2&n&&(t.xp6(3),t.Q6J("ngForOf",i.notes))},dependencies:[l.mk,l.sg,l.O5,d.Fj,d.JJ,d.On],styles:["*[_ngcontent-%COMP%]{box-sizing:border-box}[_nghost-%COMP%]{min-height:100vh;background-color:#7bdaf3;display:flex;flex-wrap:wrap;font-family:Poppins,sans-serif;margin:0;padding-top:3rem}.add-btn[_ngcontent-%COMP%]{background-color:#9ec862;border-radius:3px;border:none;color:#fff;cursor:pointer;padding:.5rem 1rem;position:fixed;top:1rem;right:1rem}.note[_ngcontent-%COMP%]{background-color:#fff;box-shadow:0 0 10px 4px #0000001a;margin:20px;height:400px;width:400px}.note[_ngcontent-%COMP%]   .tools[_ngcontent-%COMP%]{background-color:#9ec862;display:flex;justify-content:flex-end;padding:.5rem}.note[_ngcontent-%COMP%]   .tools[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:transparent;border:none;color:#fff;cursor:pointer;font-size:1rem;margin-left:.5rem}.note[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]{background-color:#eee;overflow:hidden;height:400px;width:100%}.note[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{outline:none;font-family:inherit;font-size:1.2rem;border:none;height:400px;width:100%}.note[_ngcontent-%COMP%]   .hidden[_ngcontent-%COMP%]{display:none}"]}),e})();var u=o(520),h=o(4004);let O=(()=>{class e{constructor(n){this.http=n,this.url="https://www.abplive.com/home/feed",this.yahoo="https://news.yahoo.com/rss/",this.gadgets="https://gadgets360.com/rss/feeds",this.headers=new u.WM({Accept:"text/html","content-type":"application/x-www-form-urlencoded","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET,POST,OPTIONS,DELETE,PUT","Access-Control-Allow-Headers":"Content-Type"}),this.requestOptions={observe:"body",responseType:"text"},this.RSS_URL="https://codepen.io/spark/feed"}getRss(){return this.http.get(this.url,{headers:this.headers})}getRssFeedData(){return this.http.get("https://gadgets.ndtv.com/rss/feeds",this.requestOptions)}getCodepenFeed(){return this.http.get(this.RSS_URL,{responseType:"text"}).pipe((0,h.U)(n=>(new window.DOMParser).parseFromString(n,"text/xml"))).pipe((0,h.U)(n=>{const i=n.querySelectorAll("item");let r=[];return i.forEach(a=>{r.push({title:a.querySelector("title").innerHTML,link:a.querySelector("link").innerHTML})}),r}))}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(u.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),f=(()=>{class e{constructor(n){this.elementRef=n,this.minWidth="12.5em",this.maxWidth="1fr",this.columnGap="0.5em",this.rowGap="0.5em"}ngOnInit(){this.elementRef.nativeElement.setAttribute("style",`\n     display: grid;\n     grid-template-columns: repeat(auto-fit, minmax( min(100%, ${this.minWidth}),  ${this.maxWidth}));\n     grid-column-gap: ${this.columnGap};\n     grid-row-gap: ${this.rowGap};`)}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(t.SBq))},e.\u0275dir=t.lG2({type:e,selectors:[["","appGrid",""]],inputs:{minWidth:"minWidth",maxWidth:"maxWidth",columnGap:"columnGap",rowGap:"rowGap"}}),e})(),C=(()=>{class e{constructor(){this.isExpanded=!1}get styles(){return{display:"grid","transition-property":"grid-template-rows","transition-duration":"250ms","transition-timing-function":"ease","grid-template-rows":this.isExpanded?"1fr":"0fr"}}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275dir=t.lG2({type:e,selectors:[["","expandable",""]],hostVars:2,hostBindings:function(n,i){2&n&&t.Akn(i.styles)},inputs:{isExpanded:["expandable","isExpanded"]}}),e})();function b(e,s){if(1&e&&(t.TgZ(0,"div",7)(1,"h3"),t._uU(2),t.qZA()()),2&e){const n=s.$implicit;t.xp6(2),t.Oqu(null==n?null:n.title)}}function T(e,s){if(1&e&&(t.TgZ(0,"div",8)(1,"h3"),t._uU(2),t.qZA()()),2&e){const n=s.$implicit;t.xp6(2),t.Oqu(null==n?null:n.title)}}const P=[{path:"",component:x,children:[{path:"rss-feed",component:(()=>{class e{constructor(n){this.rssFeedService=n,this.data=[],this.isExpanded=!1}ngOnInit(){this.rssFeedService.getCodepenFeed().subscribe(n=>this.data=n),this.rssFeedService.getRss().subscribe()}toggle(){this.isExpanded=!this.isExpanded}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(O))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-rss-feed"]],decls:12,vars:3,consts:[[3,"click"],[2,"border","1px solid black",3,"expandable"],[2,"overflow","hidden"],["appGrid",""],["class","item",4,"ngFor","ngForOf"],[1,"article-list"],["class","article-list__item",4,"ngFor","ngForOf"],[1,"item"],[1,"article-list__item"]],template:function(n,i){1&n&&(t.TgZ(0,"h1"),t._uU(1,"Expansion with grid-template-rows"),t.qZA(),t.TgZ(2,"button",0),t.NdJ("click",function(){return i.toggle()}),t._uU(3,"toggle"),t.qZA(),t.TgZ(4,"div",1)(5,"div",2)(6,"p"),t._uU(7," Lorem ipsum dolor sit amet, ... "),t.qZA()()(),t.TgZ(8,"section",3),t.YNc(9,b,3,1,"div",4),t.qZA(),t.TgZ(10,"section",5),t.YNc(11,T,3,1,"div",6),t.qZA()),2&n&&(t.xp6(4),t.Q6J("expandable",i.isExpanded),t.xp6(5),t.Q6J("ngForOf",i.data),t.xp6(2),t.Q6J("ngForOf",i.data))},dependencies:[l.sg,f,C],styles:['[_ngcontent-%COMP%]:root{--main-color: #087f5b;--grey-color: #343a40}.color-option[_ngcontent-%COMP%]{height:25px;width:25px;display:inline-block;margin:10px 10px 10px 0;cursor:pointer}.opt-1[_ngcontent-%COMP%]{background-color:#9acd32}.opt-2[_ngcontent-%COMP%]{background-color:#87ceeb}.opt-3[_ngcontent-%COMP%]{background-color:red}.opt-4[_ngcontent-%COMP%]{background-color:beige}.opt-5[_ngcontent-%COMP%]{background-color:orange}.opt-6[_ngcontent-%COMP%]{background-color:#d2691e}.container[_ngcontent-%COMP%]{margin-top:200px;justify-content:center;display:flex}.dot[_ngcontent-%COMP%]{width:30px;height:30px;border-radius:50%;margin:40px}.dot[_ngcontent-%COMP%]:nth-child(odd){animation:up 1.5s cubic-bezier(1,0,0,1) alternate-reverse infinite}.dot[_ngcontent-%COMP%]:nth-child(even){animation:down 1.5s cubic-bezier(1,0,0,1) alternate-reverse infinite}@keyframes up{0%{transform:translateY(0);background-color:#00d2ce}to{transform:translateY(150px);background-color:#0081f6}}@keyframes down{0%{transform:translateY(150px);background-color:#ff40a6}to{transform:translateY(0);background-color:#e71eef}}main[_ngcontent-%COMP%]{background-color:#fff;box-shadow:0 0 10px #0000001a}.s2[_ngcontent-%COMP%]{background:#198cff;width:80px;z-index:99;margin-left:-80px;position:absolute;top:0;bottom:0;float:left}#footer[_ngcontent-%COMP%]{background:#f4f4f4;color:#777;position:relative;padding-top:80px}#footer[_ngcontent-%COMP%]:before{content:"";background:#198cff url(https://blog.exceptionfound.com/wp-content/themes/boxstyle/img/curve-color.png) no-repeat bottom center;position:absolute;left:0;right:0;top:0;height:80px;width:100%}section[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto}.item[_ngcontent-%COMP%]{padding:15px;margin:10px;background:rgb(95,180,227);border-radius:10px}.article-list[_ngcontent-%COMP%]{display:grid;grid-auto-flow:row;color:#fff;font-weight:400;text-align:left;font-family:Quicksand,sans-serif;padding:.5rem}.article-list__item[_ngcontent-%COMP%]{background:#000000;border-radius:10px;border-top:10px solid #013440;padding:2rem;margin-top:2rem}']}),e})()},{path:"notes",component:v},{path:"cameraCapture",component:(()=>{class e{constructor(){}ngOnInit(){}onFileSelected(n){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-camera-capture"]],decls:1,vars:0,consts:[["type","file","accept","image/*","capture","camera",3,"change"]],template:function(n,i){1&n&&(t.TgZ(0,"input",0),t.NdJ("change",function(a){return i.onFileSelected(a)}),t.qZA())}}),e})()},{path:"blog",loadChildren:()=>Promise.all([o.e(5888),o.e(6768)]).then(o.bind(o,6768)).then(e=>e.BlogModule)},{path:"tasks",loadChildren:()=>o.e(9779).then(o.bind(o,9779)).then(e=>e.TasksModule)},{path:"spaces",loadChildren:()=>o.e(9939).then(o.bind(o,9939)).then(e=>e.SpacesModule)},{path:"calculate",loadChildren:()=>Promise.all([o.e(5238),o.e(3394)]).then(o.bind(o,3394)).then(e=>e.CalculateModule)},{path:"money",loadChildren:()=>Promise.all([o.e(5238),o.e(5714)]).then(o.bind(o,5714)).then(e=>e.MoneyModule)},{path:"use-case",loadChildren:()=>Promise.all([o.e(5238),o.e(7453)]).then(o.bind(o,7453)).then(e=>e.UseCaseModule)},{path:"hms",loadChildren:()=>Promise.all([o.e(5888),o.e(8592),o.e(2829)]).then(o.bind(o,2829)).then(e=>e.HospitalManagementModule)},{path:"games",loadChildren:()=>o.e(8617).then(o.bind(o,8617)).then(e=>e.GamesModule)}]}];let F=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[c.Bz.forChild(P),c.Bz]}),e})(),S=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.ez]}),e})(),w=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.ez,F,d.u5,S]}),e})()}}]);