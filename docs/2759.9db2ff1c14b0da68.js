"use strict";(self.webpackChunkportfolio_all_in_one=self.webpackChunkportfolio_all_in_one||[]).push([[2759],{2759:(N,p,e)=>{e.r(p),e.d(p,{SystemsModule:()=>A});var l=e(6895),h=e(4793),t=e(4650);let x=(()=>{class n{constructor(){}ngOnInit(){}static#t=this.\u0275fac=function(s){return new(s||n)};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-systems"]],decls:1,vars:0,template:function(s,i){1&s&&t._UZ(0,"router-outlet")},dependencies:[h.lC]})}return n})();var c=e(4006);function M(n,d){if(1&n){const o=t.EpF();t.TgZ(0,"button",10),t.NdJ("click",function(){t.CHM(o);const i=t.oxw().$implicit;return t.KtG(i.edit=!i.edit)}),t._UZ(1,"i",11),t.qZA()}}const g=function(n){return{hidden:n}};function v(n,d){if(1&n){const o=t.EpF();t.TgZ(0,"div",3)(1,"div",4),t.YNc(2,M,2,0,"button",5),t.TgZ(3,"button",6),t.NdJ("click",function(){const a=t.CHM(o).index,r=t.oxw();return t.KtG(r.onDelete(a))}),t._UZ(4,"i",7),t.qZA()(),t.TgZ(5,"div",8)(6,"p"),t._uU(7),t.qZA()(),t.TgZ(8,"textarea",9),t.NdJ("ngModelChange",function(){t.CHM(o);const i=t.oxw();return t.KtG(i.updateLocalStorage())})("ngModelChange",function(i){const r=t.CHM(o).$implicit;return t.KtG(r.text=i)}),t.qZA()()}if(2&n){const o=d.$implicit;t.xp6(2),t.Q6J("ngIf",!o.edit),t.xp6(3),t.Q6J("ngClass",t.VKq(5,g,o.edit)),t.xp6(2),t.Oqu(o.text),t.xp6(1),t.Q6J("ngModel",o.text)("ngClass",t.VKq(7,g,!o.edit))}}let y=(()=>{class n{constructor(){this.notes=JSON.parse(localStorage.getItem("notes"))||[]}ngOnInit(){}addNewNote(){this.notes.push({text:"",edit:!1}),this.updateLocalStorage()}updateLocalStorage(){localStorage.setItem("notes",JSON.stringify(this.notes))}onDelete(o){this.notes.splice(o,1),this.updateLocalStorage()}static#t=this.\u0275fac=function(s){return new(s||n)};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-notes"]],decls:4,vars:1,consts:[[1,"add-btn",3,"click"],[1,"fas","fa-plus"],["class","note",4,"ngFor","ngForOf"],[1,"note"],[1,"tools"],["class","edit",3,"click",4,"ngIf"],[1,"delete",3,"click"],[1,"fas","fa-trash-alt"],[1,"main",3,"ngClass"],[3,"ngModel","ngClass","ngModelChange"],[1,"edit",3,"click"],[1,"fas","fa-edit"]],template:function(s,i){1&s&&(t.TgZ(0,"button",0),t.NdJ("click",function(){return i.addNewNote()}),t._UZ(1,"i",1),t._uU(2," Add note\n"),t.qZA(),t.YNc(3,v,9,9,"div",2)),2&s&&(t.xp6(3),t.Q6J("ngForOf",i.notes))},dependencies:[l.mk,l.sg,l.O5,c.Fj,c.JJ,c.On],styles:["*[_ngcontent-%COMP%]{box-sizing:border-box}[_nghost-%COMP%]{min-height:100vh;background-color:#7bdaf3;display:flex;flex-wrap:wrap;font-family:Poppins,sans-serif;margin:0;padding-top:3rem}.add-btn[_ngcontent-%COMP%]{background-color:#9ec862;border-radius:3px;border:none;color:#fff;cursor:pointer;padding:.5rem 1rem;position:fixed;top:1rem;right:1rem}.note[_ngcontent-%COMP%]{background-color:#fff;box-shadow:0 0 10px 4px #0000001a;margin:20px;height:400px;width:400px}.note[_ngcontent-%COMP%]   .tools[_ngcontent-%COMP%]{background-color:#9ec862;display:flex;justify-content:flex-end;padding:.5rem}.note[_ngcontent-%COMP%]   .tools[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:transparent;border:none;color:#fff;cursor:pointer;font-size:1rem;margin-left:.5rem}.note[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]{background-color:#eee;overflow:hidden;height:400px;width:100%}.note[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{outline:none;font-family:inherit;font-size:1.2rem;border:none;height:400px;width:100%}.note[_ngcontent-%COMP%]   .hidden[_ngcontent-%COMP%]{display:none}"]})}return n})();var m=e(529),f=e(4004);let O=(()=>{class n{constructor(o){this.http=o,this.url="https://www.abplive.com/home/feed",this.yahoo="https://news.yahoo.com/rss/",this.gadgets="https://gadgets360.com/rss/feeds",this.headers=new m.WM({Accept:"text/html","content-type":"application/x-www-form-urlencoded","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET,POST,OPTIONS,DELETE,PUT","Access-Control-Allow-Headers":"Content-Type"}),this.requestOptions={observe:"body",responseType:"text"},this.RSS_URL="https://codepen.io/spark/feed"}getRss(){return this.http.get(this.url,{headers:this.headers})}getRssFeedData(){return this.http.get("https://gadgets.ndtv.com/rss/feeds",this.requestOptions)}getCodepenFeed(){return this.http.get(this.RSS_URL,{responseType:"text"}).pipe((0,f.U)(o=>(new window.DOMParser).parseFromString(o,"text/xml"))).pipe((0,f.U)(o=>{const s=o.querySelectorAll("item");let i=[];return s.forEach(a=>{i.push({title:a.querySelector("title").innerHTML,link:a.querySelector("link").innerHTML})}),i}))}static#t=this.\u0275fac=function(s){return new(s||n)(t.LFG(m.eN))};static#n=this.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),u=(()=>{class n{constructor(o){this.elementRef=o,this.minWidth="12.5em",this.maxWidth="1fr",this.columnGap="0.5em",this.rowGap="0.5em"}ngOnInit(){this.elementRef.nativeElement.setAttribute("style",`\n     display: grid;\n     grid-template-columns: repeat(auto-fit, minmax( min(100%, ${this.minWidth}),  ${this.maxWidth}));\n     grid-column-gap: ${this.columnGap};\n     grid-row-gap: ${this.rowGap};`)}static#t=this.\u0275fac=function(s){return new(s||n)(t.Y36(t.SBq))};static#n=this.\u0275dir=t.lG2({type:n,selectors:[["","appGrid",""]],inputs:{minWidth:"minWidth",maxWidth:"maxWidth",columnGap:"columnGap",rowGap:"rowGap"}})}return n})(),C=(()=>{class n{constructor(){this.isExpanded=!1}get styles(){return{display:"grid","transition-property":"grid-template-rows","transition-duration":"250ms","transition-timing-function":"ease","grid-template-rows":this.isExpanded?"1fr":"0fr"}}static#t=this.\u0275fac=function(s){return new(s||n)};static#n=this.\u0275dir=t.lG2({type:n,selectors:[["","expandable",""]],hostVars:2,hostBindings:function(s,i){2&s&&t.Akn(i.styles)},inputs:{isExpanded:["expandable","isExpanded"]}})}return n})();function P(n,d){if(1&n&&(t.TgZ(0,"div",7)(1,"h3"),t._uU(2),t.qZA()()),2&n){const o=d.$implicit;t.xp6(2),t.Oqu(null==o?null:o.title)}}function T(n,d){if(1&n&&(t.TgZ(0,"div",8)(1,"h3"),t._uU(2),t.qZA()()),2&n){const o=d.$implicit;t.xp6(2),t.Oqu(null==o?null:o.title)}}const b=[{path:"",component:x,children:[{path:"quotes",loadComponent:()=>e.e(8074).then(e.bind(e,8074))},{path:"rss-feed",component:(()=>{class n{constructor(o){this.rssFeedService=o,this.data=[],this.isExpanded=!1}ngOnInit(){this.rssFeedService.getCodepenFeed().subscribe(o=>this.data=o),this.rssFeedService.getRss().subscribe()}toggle(){this.isExpanded=!this.isExpanded}static#t=this.\u0275fac=function(s){return new(s||n)(t.Y36(O))};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-rss-feed"]],decls:12,vars:3,consts:[[3,"click"],[2,"border","1px solid black",3,"expandable"],[2,"overflow","hidden"],["appGrid",""],["class","item",4,"ngFor","ngForOf"],[1,"article-list"],["class","article-list__item",4,"ngFor","ngForOf"],[1,"item"],[1,"article-list__item"]],template:function(s,i){1&s&&(t.TgZ(0,"h1"),t._uU(1,"Expansion with grid-template-rows"),t.qZA(),t.TgZ(2,"button",0),t.NdJ("click",function(){return i.toggle()}),t._uU(3,"toggle"),t.qZA(),t.TgZ(4,"div",1)(5,"div",2)(6,"p"),t._uU(7," Lorem ipsum dolor sit amet, ... "),t.qZA()()(),t.TgZ(8,"section",3),t.YNc(9,P,3,1,"div",4),t.qZA(),t.TgZ(10,"section",5),t.YNc(11,T,3,1,"div",6),t.qZA()),2&s&&(t.xp6(4),t.Q6J("expandable",i.isExpanded),t.xp6(5),t.Q6J("ngForOf",i.data),t.xp6(2),t.Q6J("ngForOf",i.data))},dependencies:[l.sg,u,C],styles:['[_ngcontent-%COMP%]:root{--main-color: #087f5b;--grey-color: #343a40}.color-option[_ngcontent-%COMP%]{height:25px;width:25px;display:inline-block;margin:10px 10px 10px 0;cursor:pointer}.opt-1[_ngcontent-%COMP%]{background-color:#9acd32}.opt-2[_ngcontent-%COMP%]{background-color:#87ceeb}.opt-3[_ngcontent-%COMP%]{background-color:red}.opt-4[_ngcontent-%COMP%]{background-color:beige}.opt-5[_ngcontent-%COMP%]{background-color:orange}.opt-6[_ngcontent-%COMP%]{background-color:#d2691e}.container[_ngcontent-%COMP%]{margin-top:200px;justify-content:center;display:flex}.dot[_ngcontent-%COMP%]{width:30px;height:30px;border-radius:50%;margin:40px}.dot[_ngcontent-%COMP%]:nth-child(odd){animation:_ngcontent-%COMP%_up 1.5s cubic-bezier(1,0,0,1) alternate-reverse infinite}.dot[_ngcontent-%COMP%]:nth-child(even){animation:_ngcontent-%COMP%_down 1.5s cubic-bezier(1,0,0,1) alternate-reverse infinite}@keyframes _ngcontent-%COMP%_up{0%{transform:translateY(0);background-color:#00d2ce}to{transform:translateY(150px);background-color:#0081f6}}@keyframes _ngcontent-%COMP%_down{0%{transform:translateY(150px);background-color:#ff40a6}to{transform:translateY(0);background-color:#e71eef}}main[_ngcontent-%COMP%]{background-color:#fff;box-shadow:0 0 10px #0000001a}.s2[_ngcontent-%COMP%]{background:#198cff;width:80px;z-index:99;margin-left:-80px;position:absolute;top:0;bottom:0;float:left}#footer[_ngcontent-%COMP%]{background:#f4f4f4;color:#777;position:relative;padding-top:80px}#footer[_ngcontent-%COMP%]:before{content:"";background:#198cff url(https://blog.exceptionfound.com/wp-content/themes/boxstyle/img/curve-color.png) no-repeat bottom center;position:absolute;left:0;right:0;top:0;height:80px;width:100%}section[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto}.item[_ngcontent-%COMP%]{padding:15px;margin:10px;background:rgb(95,180,227);border-radius:10px}.article-list[_ngcontent-%COMP%]{display:grid;grid-auto-flow:row;color:#fff;font-weight:400;text-align:left;font-family:Quicksand,sans-serif;padding:.5rem}.article-list__item[_ngcontent-%COMP%]{background:#000000;border-radius:10px;border-top:10px solid #013440;padding:2rem;margin-top:2rem}']})}return n})()},{path:"notes",component:y},{path:"tasks",loadChildren:()=>Promise.all([e.e(8592),e.e(7131)]).then(e.bind(e,7131)).then(n=>n.TasksModule)},{path:"cameraCapture",component:(()=>{class n{constructor(){}ngOnInit(){}onFileSelected(o){}static#t=this.\u0275fac=function(s){return new(s||n)};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-camera-capture"]],decls:1,vars:0,consts:[["type","file","accept","image/*","capture","camera",3,"change"]],template:function(s,i){1&s&&(t.TgZ(0,"input",0),t.NdJ("change",function(r){return i.onFileSelected(r)}),t.qZA())}})}return n})()},{path:"blog",loadChildren:()=>Promise.all([e.e(5917),e.e(6768)]).then(e.bind(e,6768)).then(n=>n.BlogModule)},{path:"money",loadChildren:()=>Promise.all([e.e(1189),e.e(4718)]).then(e.bind(e,4718)).then(n=>n.MoneyModule)},{path:"use-case",loadChildren:()=>Promise.all([e.e(1189),e.e(842)]).then(e.bind(e,842)).then(n=>n.UseCaseModule)},{path:"hms",loadChildren:()=>Promise.all([e.e(1189),e.e(5917),e.e(5125)]).then(e.bind(e,5125)).then(n=>n.HospitalManagementModule)},{path:"games",loadChildren:()=>e.e(8617).then(e.bind(e,8617)).then(n=>n.GamesModule)},{path:"weather",loadChildren:()=>e.e(5902).then(e.bind(e,5902)).then(n=>n.WeatherModule)},{path:"movies",loadChildren:()=>e.e(2112).then(e.bind(e,2112)).then(n=>n.MoviesModule)},{path:"movies2",loadChildren:()=>e.e(4850).then(e.bind(e,4850)).then(n=>n.Movies2Module)},{path:"covid",loadChildren:()=>Promise.all([e.e(1189),e.e(7955)]).then(e.bind(e,7955)).then(n=>n.CovidModule)},{path:"docs",loadChildren:()=>Promise.all([e.e(1189),e.e(7346)]).then(e.bind(e,7346)).then(n=>n.DocsModule)},{path:"site",loadChildren:()=>e.e(626).then(e.bind(e,626)).then(n=>n.SiteModule)},{path:"stake",loadChildren:()=>Promise.all([e.e(1189),e.e(37),e.e(8592),e.e(7081)]).then(e.bind(e,7081)).then(n=>n.StakeModule)},{path:"ecommerce",loadChildren:()=>Promise.all([e.e(1189),e.e(8592),e.e(984)]).then(e.bind(e,984)).then(n=>n.EcommerceModule)},{path:"tools",loadChildren:()=>Promise.all([e.e(1189),e.e(5055)]).then(e.bind(e,5055)).then(n=>n.ToolsModule)},{path:"cheatsheet",loadChildren:()=>Promise.all([e.e(8592),e.e(8572)]).then(e.bind(e,8572)).then(n=>n.CheatsheetModule)}]}];let F=(()=>{class n{static#t=this.\u0275fac=function(s){return new(s||n)};static#n=this.\u0275mod=t.oAB({type:n});static#e=this.\u0275inj=t.cJS({imports:[h.Bz.forChild(b),h.Bz]})}return n})(),S=(()=>{class n{static#t=this.\u0275fac=function(s){return new(s||n)};static#n=this.\u0275mod=t.oAB({type:n});static#e=this.\u0275inj=t.cJS({imports:[l.ez]})}return n})();var Z=e(8554);let A=(()=>{class n{static#t=this.\u0275fac=function(s){return new(s||n)};static#n=this.\u0275mod=t.oAB({type:n});static#e=this.\u0275inj=t.cJS({imports:[l.ez,F,c.u5,S,Z.E0]})}return n})()}}]);