"use strict";(self.webpackChunkportfolio_all_in_one=self.webpackChunkportfolio_all_in_one||[]).push([[823],{823:(j,h,e)=>{e.r(h),e.d(h,{SystemsModule:()=>T});var l=e(177),c=e(884),t=e(4438);let C=(()=>{class n{constructor(){}ngOnInit(){}static{this.\u0275fac=function(s){return new(s||n)}}static{this.\u0275cmp=t.VBU({type:n,selectors:[["app-systems"]],standalone:!1,decls:1,vars:0,template:function(s,i){1&s&&t.nrm(0,"router-outlet")},dependencies:[c.n3],encapsulation:2})}}return n})();var r=e(9417);const p=n=>({hidden:n});function x(n,d){if(1&n){const o=t.RV6();t.j41(0,"button",10),t.bIt("click",function(){t.eBV(o);const i=t.XpG().$implicit;return t.Njj(i.edit=!i.edit)}),t.nrm(1,"i",11),t.k0s()}}function M(n,d){if(1&n){const o=t.RV6();t.j41(0,"div",3)(1,"div",4),t.DNE(2,x,2,0,"button",5),t.j41(3,"button",6),t.bIt("click",function(){const i=t.eBV(o).index,a=t.XpG();return t.Njj(a.onDelete(i))}),t.nrm(4,"i",7),t.k0s()(),t.j41(5,"div",8)(6,"p"),t.EFF(7),t.k0s()(),t.j41(8,"textarea",9),t.bIt("ngModelChange",function(){t.eBV(o);const i=t.XpG();return t.Njj(i.updateLocalStorage())}),t.mxI("ngModelChange",function(i){const a=t.eBV(o).$implicit;return t.DH7(a.text,i)||(a.text=i),t.Njj(i)}),t.k0s()()}if(2&n){const o=d.$implicit;t.R7$(2),t.Y8G("ngIf",!o.edit),t.R7$(3),t.Y8G("ngClass",t.eq3(5,p,o.edit)),t.R7$(2),t.JRh(o.text),t.R7$(),t.R50("ngModel",o.text),t.Y8G("ngClass",t.eq3(7,p,!o.edit))}}let y=(()=>{class n{constructor(){this.notes=JSON.parse(localStorage.getItem("notes"))||[]}ngOnInit(){}addNewNote(){this.notes.push({text:"",edit:!1}),this.updateLocalStorage()}updateLocalStorage(){localStorage.setItem("notes",JSON.stringify(this.notes))}onDelete(o){this.notes.splice(o,1),this.updateLocalStorage()}static{this.\u0275fac=function(s){return new(s||n)}}static{this.\u0275cmp=t.VBU({type:n,selectors:[["app-notes"]],standalone:!1,decls:4,vars:1,consts:[[1,"add-btn",3,"click"],[1,"fas","fa-plus"],["class","note",4,"ngFor","ngForOf"],[1,"note"],[1,"tools"],["class","edit",3,"click",4,"ngIf"],[1,"delete",3,"click"],[1,"fas","fa-trash-alt"],[1,"main",3,"ngClass"],[3,"ngModelChange","ngModel","ngClass"],[1,"edit",3,"click"],[1,"fas","fa-edit"]],template:function(s,i){1&s&&(t.j41(0,"button",0),t.bIt("click",function(){return i.addNewNote()}),t.nrm(1,"i",1),t.EFF(2," Add note\n"),t.k0s(),t.DNE(3,M,9,9,"div",2)),2&s&&(t.R7$(3),t.Y8G("ngForOf",i.notes))},dependencies:[l.YU,l.Sq,l.bT,r.me,r.BC,r.vS],styles:["*[_ngcontent-%COMP%]{box-sizing:border-box}[_nghost-%COMP%]{min-height:100vh;background-color:#7bdaf3;display:flex;flex-wrap:wrap;font-family:Poppins,sans-serif;margin:0;padding-top:3rem}.add-btn[_ngcontent-%COMP%]{background-color:#9ec862;border-radius:3px;border:none;color:#fff;cursor:pointer;padding:.5rem 1rem;position:fixed;top:1rem;right:1rem}.note[_ngcontent-%COMP%]{background-color:#fff;box-shadow:0 0 10px 4px #0000001a;margin:20px;height:400px;width:400px}.note[_ngcontent-%COMP%]   .tools[_ngcontent-%COMP%]{background-color:#9ec862;display:flex;justify-content:flex-end;padding:.5rem}.note[_ngcontent-%COMP%]   .tools[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:transparent;border:none;color:#fff;cursor:pointer;font-size:1rem;margin-left:.5rem}.note[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]{background-color:#eee;overflow:hidden;height:400px;width:100%}.note[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{outline:none;font-family:inherit;font-size:1.2rem;border:none;height:400px;width:100%}.note[_ngcontent-%COMP%]   .hidden[_ngcontent-%COMP%]{display:none}"]})}}return n})();var m=e(1626),g=e(6354);let v=(()=>{class n{constructor(o){this.http=o,this.url="https://www.abplive.com/home/feed",this.yahoo="https://news.yahoo.com/rss/",this.gadgets="https://gadgets360.com/rss/feeds",this.headers=new m.Lr({Accept:"text/html","content-type":"application/x-www-form-urlencoded","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET,POST,OPTIONS,DELETE,PUT","Access-Control-Allow-Headers":"Content-Type"}),this.requestOptions={observe:"body",responseType:"text"},this.RSS_URL="https://codepen.io/spark/feed"}getRss(){return this.http.get(this.url,{headers:this.headers})}getRssFeedData(){return this.http.get("https://gadgets.ndtv.com/rss/feeds",this.requestOptions)}getCodepenFeed(){return this.http.get(this.RSS_URL,{responseType:"text"}).pipe((0,g.T)(o=>(new window.DOMParser).parseFromString(o,"text/xml"))).pipe((0,g.T)(o=>{const s=o.querySelectorAll("item");let i=[];return s.forEach(a=>{i.push({title:a.querySelector("title").innerHTML,link:a.querySelector("link").innerHTML})}),i}))}static{this.\u0275fac=function(s){return new(s||n)(t.KVO(m.Qq))}}static{this.\u0275prov=t.jDH({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})(),f=(()=>{class n{constructor(o){this.elementRef=o,this.minWidth="12.5em",this.maxWidth="1fr",this.columnGap="0.5em",this.rowGap="0.5em"}ngOnInit(){this.elementRef.nativeElement.setAttribute("style",`\n     display: grid;\n     grid-template-columns: repeat(auto-fit, minmax( min(100%, ${this.minWidth}),  ${this.maxWidth}));\n     grid-column-gap: ${this.columnGap};\n     grid-row-gap: ${this.rowGap};`)}static{this.\u0275fac=function(s){return new(s||n)(t.rXU(t.aKT))}}static{this.\u0275dir=t.FsC({type:n,selectors:[["","appGrid",""]],inputs:{minWidth:"minWidth",maxWidth:"maxWidth",columnGap:"columnGap",rowGap:"rowGap"},standalone:!1})}}return n})(),u=(()=>{class n{constructor(){this.isExpanded=!1}get styles(){return{display:"grid","transition-property":"grid-template-rows","transition-duration":"250ms","transition-timing-function":"ease","grid-template-rows":this.isExpanded?"1fr":"0fr"}}static{this.\u0275fac=function(s){return new(s||n)}}static{this.\u0275dir=t.FsC({type:n,selectors:[["","expandable",""]],hostVars:2,hostBindings:function(s,i){2&s&&t.Aen(i.styles)},inputs:{isExpanded:[0,"expandable","isExpanded"]},standalone:!1})}}return n})();function O(n,d){if(1&n&&(t.j41(0,"div",7)(1,"h3"),t.EFF(2),t.k0s()()),2&n){const o=d.$implicit;t.R7$(2),t.JRh(null==o?null:o.title)}}function P(n,d){if(1&n&&(t.j41(0,"div",8)(1,"h3"),t.EFF(2),t.k0s()()),2&n){const o=d.$implicit;t.R7$(2),t.JRh(null==o?null:o.title)}}const F=[{path:"",component:C,children:[{path:"quotes",loadComponent:()=>e.e(5039).then(e.bind(e,5039))},{path:"rss-feed",component:(()=>{class n{constructor(o){this.rssFeedService=o,this.data=[],this.isExpanded=!1}ngOnInit(){this.rssFeedService.getCodepenFeed().subscribe(o=>this.data=o),this.rssFeedService.getRss().subscribe()}toggle(){this.isExpanded=!this.isExpanded}static{this.\u0275fac=function(s){return new(s||n)(t.rXU(v))}}static{this.\u0275cmp=t.VBU({type:n,selectors:[["app-rss-feed"]],standalone:!1,decls:12,vars:3,consts:[[3,"click"],[2,"border","1px solid black",3,"expandable"],[2,"overflow","hidden"],["appGrid",""],["class","item",4,"ngFor","ngForOf"],[1,"article-list"],["class","article-list__item",4,"ngFor","ngForOf"],[1,"item"],[1,"article-list__item"]],template:function(s,i){1&s&&(t.j41(0,"h1"),t.EFF(1,"Expansion with grid-template-rows"),t.k0s(),t.j41(2,"button",0),t.bIt("click",function(){return i.toggle()}),t.EFF(3,"toggle"),t.k0s(),t.j41(4,"div",1)(5,"div",2)(6,"p"),t.EFF(7," Lorem ipsum dolor sit amet, ... "),t.k0s()()(),t.j41(8,"section",3),t.DNE(9,O,3,1,"div",4),t.k0s(),t.j41(10,"section",5),t.DNE(11,P,3,1,"div",6),t.k0s()),2&s&&(t.R7$(4),t.Y8G("expandable",i.isExpanded),t.R7$(5),t.Y8G("ngForOf",i.data),t.R7$(2),t.Y8G("ngForOf",i.data))},dependencies:[l.Sq,f,u],styles:['[_ngcontent-%COMP%]:root{--main-color: #087f5b;--grey-color: #343a40}.color-option[_ngcontent-%COMP%]{height:25px;width:25px;display:inline-block;margin:10px 10px 10px 0;cursor:pointer}.opt-1[_ngcontent-%COMP%]{background-color:#9acd32}.opt-2[_ngcontent-%COMP%]{background-color:#87ceeb}.opt-3[_ngcontent-%COMP%]{background-color:red}.opt-4[_ngcontent-%COMP%]{background-color:beige}.opt-5[_ngcontent-%COMP%]{background-color:orange}.opt-6[_ngcontent-%COMP%]{background-color:#d2691e}.container[_ngcontent-%COMP%]{margin-top:200px;justify-content:center;display:flex}.dot[_ngcontent-%COMP%]{width:30px;height:30px;border-radius:50%;margin:40px}.dot[_ngcontent-%COMP%]:nth-child(odd){animation:_ngcontent-%COMP%_up 1.5s cubic-bezier(1,0,0,1) alternate-reverse infinite}.dot[_ngcontent-%COMP%]:nth-child(2n){animation:_ngcontent-%COMP%_down 1.5s cubic-bezier(1,0,0,1) alternate-reverse infinite}@keyframes _ngcontent-%COMP%_up{0%{transform:translateY(0);background-color:#00d2ce}to{transform:translateY(150px);background-color:#0081f6}}@keyframes _ngcontent-%COMP%_down{0%{transform:translateY(150px);background-color:#ff40a6}to{transform:translateY(0);background-color:#e71eef}}main[_ngcontent-%COMP%]{background-color:#fff;box-shadow:0 0 10px #0000001a}.s2[_ngcontent-%COMP%]{background:#198cff;width:80px;z-index:99;margin-left:-80px;position:absolute;top:0;bottom:0;float:left}#footer[_ngcontent-%COMP%]{background:#f4f4f4;color:#777;position:relative;padding-top:80px}#footer[_ngcontent-%COMP%]:before{content:"";background:#198cff url(https://blog.exceptionfound.com/wp-content/themes/boxstyle/img/curve-color.png) no-repeat bottom center;position:absolute;left:0;right:0;top:0;height:80px;width:100%}section[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto}.item[_ngcontent-%COMP%]{padding:15px;margin:10px;background:#5fb4e3;border-radius:10px}.article-list[_ngcontent-%COMP%]{display:grid;grid-auto-flow:row;color:#fff;font-weight:400;text-align:left;font-family:Quicksand,sans-serif;padding:.5rem}.article-list__item[_ngcontent-%COMP%]{background:#000;border-radius:10px;border-top:10px solid #013440;padding:2rem;margin-top:2rem}']})}}return n})()},{path:"notes",component:y},{path:"tasks",loadChildren:()=>Promise.all([e.e(2076),e.e(5228)]).then(e.bind(e,5228)).then(n=>n.TasksModule)},{path:"cameraCapture",component:(()=>{class n{constructor(){}ngOnInit(){}onFileSelected(o){}static{this.\u0275fac=function(s){return new(s||n)}}static{this.\u0275cmp=t.VBU({type:n,selectors:[["app-camera-capture"]],standalone:!1,decls:1,vars:0,consts:[["type","file","accept","image/*","capture","camera",3,"change"]],template:function(s,i){1&s&&(t.j41(0,"input",0),t.bIt("change",function(E){return i.onFileSelected(E)}),t.k0s())},encapsulation:2})}}return n})()},{path:"blog",loadChildren:()=>Promise.all([e.e(5290),e.e(7901)]).then(e.bind(e,7901)).then(n=>n.BlogModule)},{path:"money",loadChildren:()=>Promise.all([e.e(8424),e.e(9891)]).then(e.bind(e,9891)).then(n=>n.MoneyModule)},{path:"use-case",loadChildren:()=>Promise.all([e.e(8424),e.e(4248)]).then(e.bind(e,4248)).then(n=>n.UseCaseModule)},{path:"hms",loadChildren:()=>Promise.all([e.e(8424),e.e(5290),e.e(8310)]).then(e.bind(e,8310)).then(n=>n.HospitalManagementModule)},{path:"games",loadChildren:()=>e.e(6553).then(e.bind(e,6553)).then(n=>n.GamesModule)},{path:"weather",loadChildren:()=>e.e(1362).then(e.bind(e,8981)).then(n=>n.WeatherModule)},{path:"movies",loadChildren:()=>e.e(576).then(e.bind(e,576)).then(n=>n.MoviesModule)},{path:"movies2",loadChildren:()=>e.e(1137).then(e.bind(e,1137)).then(n=>n.Movies2Module)},{path:"covid",loadChildren:()=>Promise.all([e.e(8424),e.e(3725)]).then(e.bind(e,3725)).then(n=>n.CovidModule)},{path:"docs",loadChildren:()=>Promise.all([e.e(8424),e.e(2870)]).then(e.bind(e,2870)).then(n=>n.DocsModule)},{path:"site",loadChildren:()=>e.e(7583).then(e.bind(e,7583)).then(n=>n.SiteModule)},{path:"stake",loadChildren:()=>Promise.all([e.e(8424),e.e(5422),e.e(2076),e.e(4960)]).then(e.bind(e,4960)).then(n=>n.StakeModule)},{path:"ecommerce",loadChildren:()=>Promise.all([e.e(8424),e.e(2076),e.e(6319)]).then(e.bind(e,6319)).then(n=>n.EcommerceModule)},{path:"cheatsheet",loadChildren:()=>Promise.all([e.e(2076),e.e(9600)]).then(e.bind(e,9600)).then(n=>n.CheatsheetModule)}]}];let b=(()=>{class n{static{this.\u0275fac=function(s){return new(s||n)}}static{this.\u0275mod=t.$C({type:n})}static{this.\u0275inj=t.G2t({imports:[c.iI.forChild(F),c.iI]})}}return n})(),S=(()=>{class n{static{this.\u0275fac=function(s){return new(s||n)}}static{this.\u0275mod=t.$C({type:n})}static{this.\u0275inj=t.G2t({imports:[l.MD]})}}return n})();var R=e(7122);let T=(()=>{class n{static{this.\u0275fac=function(s){return new(s||n)}}static{this.\u0275mod=t.$C({type:n})}static{this.\u0275inj=t.G2t({imports:[l.MD,b,r.YN,S,R.Yd]})}}return n})()}}]);