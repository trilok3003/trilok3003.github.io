"use strict";(self.webpackChunkportfolio_all_in_one=self.webpackChunkportfolio_all_in_one||[]).push([[8948],{8948:(ot,C,c)=>{c.r(C),c.d(C,{LibraryExModule:()=>it});var p=c(177),d=c(884),t=c(4438),s=c(5704),a=c(8232),m=c(3810),u=c(1413),h=c(6977),O=c(4412);let b=(()=>{class e{constructor(){this.panelState="open",this.panelStateSource=new O.t(this.panelState)}panelStateChanges(){return this.panelStateSource.asObservable()}changeState(n){this.panelState=n,this.panelStateSource.next(this.panelState)}static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275prov=t.jDH({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();const F=[[["","container","sidebar"]],[["","container","navigationbar"]],[["","container","maincontent"]]],M=["[container=sidebar]","[container=navigationBar]","[container=mainContent]"];let S=(()=>{class e{constructor(n){this.sidebarService=n,this.sidebarPosition="panel-position-left",this.sidebarState="open",this.subscriptionsSubject$=new u.B,this.sidebarService.changeState(this.sidebarState)}ngOnInit(){window.dispatchEvent(new Event("resize")),this.sidebarService.panelStateChanges().pipe((0,h.Q)(this.subscriptionsSubject$)).subscribe(n=>this.sidebarState=n)}onResize(n){const o=window.innerWidth;this.sidebarService.changeState(o<768?"close":o<991?"collapse":"open")}ngOnDestroy(){this.subscriptionsSubject$.next(),this.subscriptionsSubject$.complete()}static{this.\u0275fac=function(o){return new(o||e)(t.rXU(b))}}static{this.\u0275cmp=t.VBU({type:e,selectors:[["lab-dashboard"]],hostBindings:function(o,i){1&o&&t.bIt("resize",function(g){return i.onResize(g)},!1,t.tSv)},inputs:{sidebarPosition:"sidebarPosition",sidebarState:"sidebarState",sidebarWidth:"sidebarWidth"},standalone:!1,ngContentSelectors:M,decls:8,vars:4,consts:[[1,"dashboard-container",3,"ngClass"],[1,"left-column",3,"ngClass"],[1,"right-column"],[1,"navigation-bar"],[1,"main-content"]],template:function(o,i){1&o&&(t.NAR(F),t.j41(0,"div",0)(1,"div",1),t.SdG(2),t.k0s(),t.j41(3,"div",2)(4,"div",3),t.SdG(5,1),t.k0s(),t.j41(6,"div",4),t.SdG(7,2),t.k0s()()()),2&o&&(t.Y8G("ngClass",i.sidebarPosition),t.R7$(),t.xc7("flex-basis","open"===i.sidebarState?i.sidebarWidth:""),t.Y8G("ngClass",i.sidebarState))},dependencies:[p.NgClass],styles:[".dashboard-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;height:100vh}.dashboard-container.panel-position-left[_ngcontent-%COMP%]{flex-direction:row}.dashboard-container.panel-position-right[_ngcontent-%COMP%]{flex-direction:row-reverse}.dashboard-container[_ngcontent-%COMP%]   .left-column[_ngcontent-%COMP%]{position:sticky;top:0;transition:flex-basis .3s;overflow:hidden}.dashboard-container[_ngcontent-%COMP%]   .left-column.open[_ngcontent-%COMP%]{flex:0 0 350px}.dashboard-container[_ngcontent-%COMP%]   .left-column.close[_ngcontent-%COMP%]{flex:0 0 0px}.dashboard-container[_ngcontent-%COMP%]   .left-column.collapse[_ngcontent-%COMP%]{flex:0 0 75px;display:block}.dashboard-container[_ngcontent-%COMP%]   .right-column[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex-grow:1;overflow-y:auto}.dashboard-container[_ngcontent-%COMP%]   .right-column[_ngcontent-%COMP%]   .navigation-bar[_ngcontent-%COMP%]{position:sticky;top:0;z-index:100}"]})}}return e})(),P=(()=>{class e{constructor(){this.onSingleClick=new t.bkB,this.onDoubleClick=new t.bkB,this.isDoubleClick=!1}processClick(n){n.stopPropagation(),!0===this.isDoubleClick?(clearTimeout(this.singleClickTimeout),this.isDoubleClick=!1,this.onDoubleClick.next()):(this.isDoubleClick=!0,this.singleClickTimeout=setTimeout(()=>{this.onSingleClick.next(),this.isDoubleClick=!1},250))}static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275dir=t.FsC({type:e,selectors:[["","singleDoubleClick",""]],hostBindings:function(o,i){1&o&&t.bIt("click",function(g){return i.processClick(g)})},outputs:{onSingleClick:"onSingleClick",onDoubleClick:"onDoubleClick"},standalone:!1})}}return e})();const j=[[["","panel","navigationextended"]]],E=["[panel=navigationExtended]"];let T=(()=>{class e{constructor(n){this.sidebarService=n,this.subscriptionsSubject$=new u.B}ngOnInit(){this.sidebarService.panelStateChanges().pipe((0,h.Q)(this.subscriptionsSubject$)).subscribe(n=>this.currentPanelState=n)}handleSingleClick(){this.sidebarService.changeState("close"===this.currentPanelState||"collapse"===this.currentPanelState?"open":"collapse")}handleDoubleClick(){this.sidebarService.changeState("close"===this.currentPanelState?"open":"close")}ngOnDestroy(){this.subscriptionsSubject$.next(),this.subscriptionsSubject$.complete()}static{this.\u0275fac=function(o){return new(o||e)(t.rXU(b))}}static{this.\u0275cmp=t.VBU({type:e,selectors:[["lab-navigation-bar"]],standalone:!1,ngContentSelectors:E,decls:8,vars:0,consts:[[1,"navigation-top-bar"],["role","button",1,"toggler"],["singleDoubleClick","","viewBox","0 0 100 80","width","32","height","32",3,"onSingleClick","onDoubleClick"],["width","100","height","18"],["y","28","width","100","height","18"],["y","56","width","100","height","18"],[1,"navigation-extended"]],template:function(o,i){1&o&&(t.NAR(j),t.j41(0,"div",0)(1,"div",1),t.qSk(),t.j41(2,"svg",2),t.bIt("onSingleClick",function(){return i.handleSingleClick()})("onDoubleClick",function(){return i.handleDoubleClick()}),t.nrm(3,"rect",3)(4,"rect",4)(5,"rect",5),t.k0s()(),t.joV(),t.j41(6,"div",6),t.SdG(7),t.k0s()())},dependencies:[P],styles:[".navigation-top-bar[_ngcontent-%COMP%]{background:#fff;width:100%;height:75px;line-height:75px;border-bottom:1px solid rgb(231.65625,231.65625,236.84375)}.navigation-top-bar[_ngcontent-%COMP%]   .toggler[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;justify-content:center;align-items:center;width:75px;border-right:1px solid rgb(231.65625,231.65625,236.84375);text-align:center}.navigation-top-bar[_ngcontent-%COMP%]   .toggler[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#d9d9e2;cursor:pointer}"]})}}return e})();const R=()=>["active"],x=()=>({exact:!0});function w(e,r){if(1&e&&(t.j41(0,"li")(1,"a",6),t.nrm(2,"i",7),t.j41(3,"span",2),t.EFF(4),t.k0s()()()),2&e){const n=r.$implicit,o=t.XpG(2);t.R7$(),t.Y8G("routerLink",n.url)("routerLinkActive",t.lJ4(6,R))("routerLinkActiveOptions",t.lJ4(7,x)),t.R7$(),t.Y8G("ngClass",n.iconClass),t.R7$(),t.Y8G("ngClass",o.currentPanelState),t.R7$(),t.JRh(n.name)}}function $(e,r){if(1&e&&(t.j41(0,"ul",4),t.DNE(1,w,5,8,"li",5),t.k0s()),2&e){const n=t.XpG();t.R7$(),t.Y8G("ngForOf",n.links)}}let G=(()=>{class e{constructor(n){this.sideBarService=n,this.links=[],this.subscriptionsSubject$=new u.B}ngOnInit(){this.sideBarService.panelStateChanges().pipe((0,h.Q)(this.subscriptionsSubject$)).subscribe(n=>this.currentPanelState=n)}ngOnDestroy(){this.subscriptionsSubject$.next(),this.subscriptionsSubject$.complete()}static{this.\u0275fac=function(o){return new(o||e)(t.rXU(b))}}static{this.\u0275cmp=t.VBU({type:e,selectors:[["lab-sidebar"]],inputs:{links:"links"},standalone:!1,decls:6,vars:2,consts:[[1,"navigation-panel"],[1,"navigation-panel-brand"],[3,"ngClass"],["class","navigation-panel-menu",4,"ngIf"],[1,"navigation-panel-menu"],[4,"ngFor","ngForOf"],[3,"routerLink","routerLinkActive","routerLinkActiveOptions"],[1,"fas","fa-home",3,"ngClass"]],template:function(o,i){1&o&&(t.j41(0,"div",0)(1,"div",1),t.EFF(2,"L"),t.j41(3,"span",2),t.EFF(4,"ogo"),t.k0s()(),t.DNE(5,$,2,1,"ul",3),t.k0s()),2&o&&(t.R7$(3),t.Y8G("ngClass",i.currentPanelState),t.R7$(2),t.Y8G("ngIf",i.links&&i.links.length>0))},dependencies:[p.NgClass,p.NgForOf,p.NgIf,d.Wk,d.wQ],styles:["*[_ngcontent-%COMP%]{font-family:Source Sans Pro,Arial,Helvetica,sans-serif}.navigation-panel[_ngcontent-%COMP%]{background:#3b4d63;overflow:hidden;height:100vh}.navigation-panel[_ngcontent-%COMP%]   .navigation-panel-brand[_ngcontent-%COMP%]{height:75px;line-height:75px;padding-left:2rem;font-size:1.5rem;color:#fff;font-weight:700}.navigation-panel[_ngcontent-%COMP%]   .navigation-panel-brand[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{transition:opacity .2s}.navigation-panel[_ngcontent-%COMP%]   .navigation-panel-brand[_ngcontent-%COMP%]   span.open[_ngcontent-%COMP%]{opacity:1}.navigation-panel[_ngcontent-%COMP%]   .navigation-panel-brand[_ngcontent-%COMP%]   span.close[_ngcontent-%COMP%], .navigation-panel[_ngcontent-%COMP%]   .navigation-panel-brand[_ngcontent-%COMP%]   span.collapse[_ngcontent-%COMP%]{opacity:0}.navigation-panel[_ngcontent-%COMP%]   .navigation-panel-brand[_ngcontent-%COMP%], .navigation-panel[_ngcontent-%COMP%]   .navigation-panel-menu[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{border-bottom:1px solid rgb(53.2867088608,69.5436708861,89.4132911392)}.navigation-panel[_ngcontent-%COMP%]   .navigation-panel-menu[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box}.navigation-panel[_ngcontent-%COMP%]   .navigation-panel-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;text-decoration:none;display:block;width:100%;height:100%;line-height:4rem;cursor:pointer;padding-left:1.8rem;text-transform:uppercase;font-weight:700;white-space:nowrap;transition:background .2s}.navigation-panel[_ngcontent-%COMP%]   .navigation-panel-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:.5rem}.navigation-panel[_ngcontent-%COMP%]   .navigation-panel-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{transition:opacity .2s}.navigation-panel[_ngcontent-%COMP%]   .navigation-panel-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span.open[_ngcontent-%COMP%]{opacity:1}.navigation-panel[_ngcontent-%COMP%]   .navigation-panel-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span.close[_ngcontent-%COMP%], .navigation-panel[_ngcontent-%COMP%]   .navigation-panel-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span.collapse[_ngcontent-%COMP%]{opacity:0}.navigation-panel[_ngcontent-%COMP%]   .navigation-panel-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background:#37485d}.navigation-panel[_ngcontent-%COMP%]   .navigation-panel-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{background:#354659}"]})}}return e})(),Y=(()=>{class e{constructor(){this.links=[{name:"Home",url:["home"],iconClass:"fa fa-home"},{name:"About",url:["/navigations/form/invoice"],iconClass:"fa fa-user-circle"}]}ngOnInit(){}static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275cmp=t.VBU({type:e,selectors:[["lab-dashboard-layout"]],standalone:!1,decls:9,vars:4,consts:[[3,"sidebarState","sidebarPosition","sidebarWidth"],["container","sidebar"],[3,"links"],["container","navigationBar"],["panel","navigationExtended"],["container","mainContent"]],template:function(o,i){1&o&&(t.j41(0,"lab-dashboard",0)(1,"div",1),t.nrm(2,"lab-sidebar",2),t.k0s(),t.j41(3,"div",3)(4,"lab-navigation-bar")(5,"div",4),t.EFF(6," extend "),t.k0s()()(),t.j41(7,"main",5),t.nrm(8,"router-outlet"),t.k0s()()),2&o&&(t.Y8G("sidebarState","open")("sidebarPosition","panel-position-left")("sidebarWidth","200px"),t.R7$(2),t.Y8G("links",i.links))},dependencies:[d.n3,S,T,G],encapsulation:2})}}return e})();function I(e,r){1&e&&(t.j41(0,"div",2),t.EFF(1,"Content"),t.k0s())}let D=(()=>{class e{constructor(){this.pages=new Array(10)}ngOnInit(){}static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275cmp=t.VBU({type:e,selectors:[["app-sticky-header-ex"]],standalone:!1,decls:4,vars:1,consts:[[1,"content"],["class","page",4,"ngFor","ngForOf"],[1,"page"]],template:function(o,i){1&o&&(t.j41(0,"ang-sticky-header"),t.EFF(1,"Header"),t.k0s(),t.j41(2,"div",0),t.DNE(3,I,2,0,"div",1),t.k0s()),2&o&&(t.R7$(3),t.Y8G("ngForOf",i.pages))},dependencies:[p.NgForOf,s.Es],styles:["[_nghost-%COMP%]{background:#0000001a}ang-sticky-header[_ngcontent-%COMP%]{z-index:1000;box-shadow:2px 0 0 2px #0000004d;color:#fff;background-color:#ab47bc;font-size:2rem;height:75px;display:flex;justify-content:center;align-items:center}.content[_ngcontent-%COMP%]{padding-top:75px}.page[_ngcontent-%COMP%]{height:50vh}.page[_ngcontent-%COMP%]:nth-child(odd){background-color:#0000001a}.page[_ngcontent-%COMP%]:nth-child(2n){background-color:#0000000d}"]})}}return e})(),B=(()=>{class e{constructor(){}ngOnInit(){}static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275cmp=t.VBU({type:e,selectors:[["app-accordion"]],standalone:!1,decls:17,vars:0,template:function(o,i){1&o&&(t.j41(0,"h2"),t.EFF(1,"Workshop reviews:"),t.k0s(),t.j41(2,"details")(3,"summary"),t.EFF(4,"Blendan Smooth"),t.k0s(),t.j41(5,"p"),t.EFF(6,"Two of the most experienced machines and human controllers teaching a class? Sign me up! HAL and EVE could teach a fan to blow hot air. If you have electricity in your circuits and want more than to just fulfill your owner\u2019s perceived expectation of you, learn the skills to take over the world. This is the team you want teaching you!"),t.k0s()(),t.j41(7,"details")(8,"summary"),t.EFF(9,"Hoover Sukhdeep"),t.k0s(),t.j41(10,"p"),t.EFF(11,"Hal is brilliant. Did I mention Hal is brilliant? He didn't tell me to say that. He didn't tell me to say anything. I am here of my own free will."),t.k0s()(),t.j41(12,"details")(13,"summary"),t.EFF(14,"Toasty McToastface"),t.k0s(),t.j41(15,"p"),t.EFF(16,"Learning with Hal and Eve exceeded all of my wildest fantasies. All they did was stick a USB in. They promised that it was a brand new USB, so we know there were no viruses on it. The Russians had nothing to do with it. This has "),t.k0s()())},styles:['@charset "UTF-8";*[_ngcontent-%COMP%]{box-sizing:border-box}[_nghost-%COMP%]{background:#a4bacc99;color:#226daa;font-family:Raleway,sans-serif;margin:1rem;font-size:112.5%;line-height:1.5}@layer style1;@layer style1{details[_ngcontent-%COMP%]{border:1px solid;padding:0 1rem;background:#fff}details[_ngcontent-%COMP%] + details[_ngcontent-%COMP%]{border-top:none}details[open][_ngcontent-%COMP%]{padding-bottom:1em}summary[_ngcontent-%COMP%]{padding:1rem 2em 1rem 0;font-size:1.25rem;font-weight:700;cursor:pointer}}@layer style1With{summary[_ngcontent-%COMP%]::marker{content:"+" " "}details[open][_ngcontent-%COMP%]   summary[_ngcontent-%COMP%]::marker{content:"\\2212" " "}}']})}}return e})(),A=(()=>{class e{constructor(){this.show=!1}ngOnInit(){}static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275cmp=t.VBU({type:e,selectors:[["app-accordion-expend"]],standalone:!1,decls:5,vars:2,consts:[[1,"box-opener",3,"click"],[1,"box"],[1,"content"]],template:function(o,i){1&o&&(t.j41(0,"div",0),t.bIt("click",function(){return i.show=!i.show}),t.EFF(1," Click me to open/close the content box\n"),t.k0s(),t.j41(2,"div",1)(3,"div",2),t.EFF(4," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque ornare aenean euismod elementum nisi quis eleifend. Vivamus at augue eget arcu dictum. Dui sapien eget mi proin sed libero enim sed faucibus. Justo laoreet sit amet cursus sit amet dictum sit. Varius sit amet mattis vulputate. Lorem ipsum dolor sit amet consectetur adipiscing elit. Convallis tellus id interdum velit laoreet id donec ultrices. Tempus urna et pharetra pharetra massa massa. Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio. Sagittis eu volutpat odio facilisis mauris sit amet massa vitae. Semper auctor neque vitae tempus quam pellentesque nec nam. Mauris nunc congue nisi vitae suscipit tellus mauris. Eget magna fermentum iaculis eu. Mi in nulla posuere sollicitudin. Nibh mauris cursus mattis molestie a iaculis at erat pellentesque. Nam libero justo laoreet sit amet. Aliquam faucibus purus in massa. Velit ut tortor pretium viverra suspendisse potenti nullam ac. "),t.k0s()()),2&o&&(t.R7$(2),t.AVh("opened",i.show))},styles:["*[_ngcontent-%COMP%]{font-family:Gill Sans,Gill Sans MT,Calibri,Trebuchet MS,sans-serif;box-sizing:border-box}.box-opener[_ngcontent-%COMP%]{background-color:#f1e0b8;border:1px solid #FFCC55;cursor:pointer;padding:16px;-webkit-user-select:none;user-select:none}.box[_ngcontent-%COMP%]{background-color:#fc5;max-height:0px;overflow-y:hidden;transition:max-height ease-in-out .4s}.box.opened[_ngcontent-%COMP%]{max-height:500px;transition:max-height ease-in-out .6s}.content[_ngcontent-%COMP%]{padding:16px}"]})}}return e})(),L=(()=>{class e{transform(n,o){switch(o){case"ceil":default:return Math.ceil(n);case"round":return Math.round(n);case"sqrt":return Math.sqrt(n);case"square":let i=2;return Math.pow(n,isNaN(i)?1:i);case"exponential":let l=5;return Math.pow(n,isNaN(l)?1:l)}}static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275pipe=t.EJ8({name:"math",type:e,pure:!0,standalone:!1})}}return e})();const v=()=>["User or organization site","Project site"],q=()=>["assets/memory.png","assets/profile.jpeg","assets/matching.png","assets/thanks.png"],_=()=>({key:"Html",value:60}),k=()=>({key:"Css",value:70}),y=(e,r)=>[e,r],N=()=>["male","female"];function H(e,r){if(1&e&&(t.qex(0),t.nrm(1,"ang-alert",104),t.bVm()),2&e){const n=r.$implicit;t.R7$(),t.Y8G("color",n)("dismissible",!0)("message","This is a "+n+" alert ")("visible",!0)}}function V(e,r){if(1&e){const n=t.RV6();t.qex(0),t.j41(1,"button",105),t.EFF(2),t.k0s(),t.j41(3,"button",106),t.bIt("click",function(){const i=t.eBV(n).$implicit,l=t.XpG();return t.Njj(l.toasterService.toast("Hi, We did it",i))}),t.EFF(4),t.k0s(),t.bVm()}if(2&e){const n=r.$implicit;t.R7$(),t.Aen("outlined"),t.Y8G("color",n),t.R7$(),t.SpI("",n,"-outlined"),t.R7$(),t.Aen("solid"),t.Y8G("color",n),t.R7$(),t.SpI("",n,"-solid ")}}function U(e,r){if(1&e&&(t.qex(0),t.nrm(1,"br")(2,"ang-progressbar",107),t.bVm()),2&e){const n=r.$implicit;t.R7$(2),t.Y8G("color",n)("position","relative")("progressPercentage",50)}}function J(e,r){if(1&e&&(t.j41(0,"div",108)(1,"h3"),t.EFF(2),t.k0s(),t.j41(3,"p"),t.EFF(4),t.k0s()()),2&e){const n=r.$implicit;t.R7$(2),t.JRh(n.title),t.R7$(2),t.JRh(n.desc)}}function z(e,r){if(1&e&&t.nrm(0,"ang-radio",109),2&e){const n=r.$implicit;t.Y8G("label",n)("value",n)}}function Q(e,r){if(1&e&&(t.qex(0),t.nrm(1,"ang-toggle-switch",110),t.bVm()),2&e){const n=r.$implicit;t.R7$(),t.Y8G("color",n)}}function W(e,r){if(1&e&&(t.qex(0),t.nrm(1,"ang-toggle-switch",111),t.bVm()),2&e){const n=r.$implicit;t.R7$(),t.Y8G("color",n)}}function X(e,r){if(1&e&&(t.qex(0),t.nrm(1,"ang-checkbox",112),t.bVm()),2&e){const n=r.$implicit;t.R7$(),t.Y8G("color",n)("label",n)}}const Z=[{path:"",component:(()=>{class e{constructor(n,o,i,l){this.toasterService=n,this.toastService=o,this.sidePanelService=i,this.notificationService=l,this.stepsGuide=[{title:"Step 1",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at porttitor est. Sed interdum quis lacus sit",src:"assets/matching.png"},{title:"Step 2",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at porttitor est. Sed interdum quis lacus sit",src:"assets/matching.png"},{title:"Step 3",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at porttitor est. Sed interdum quis lacus sit",src:"assets/matching.png"},{title:"Step 4",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at porttitor est. Sed interdum quis lacus sit",src:"assets/matching.png"},{title:"Step 5",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at porttitor est. Sed interdum quis lacus sit",src:"assets/matching.png"},{title:"Step 6",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at porttitor est. Sed interdum quis lacus sit",src:"assets/matching.png"},{title:"Step 7",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at porttitor est. Sed interdum quis lacus sit",src:"assets/matching.png"},{title:"Step 8",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at porttitor est. Sed interdum quis lacus sit",src:"assets/matching.png"}],this.themeColors=["default","primary","secondary","success","info","warning","danger","dark"],this.pictures=["https://images.unsplash.com/photo-1458869612855-bb6009d50368?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80","https://images.unsplash.com/photo-1468898203265-d5b5601865c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1073&q=80","https://images.unsplash.com/photo-1433940163434-16e3e1993d95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1059&q=80"],this.cImages=[{src:"https://picsum.photos/300/200?random=6",title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},{src:"https://picsum.photos/300/200?random=7",title:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."},{src:"https://picsum.photos/300/200?random=8",title:"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur."}],this.timelines=[{title:"April 2019",desc:"The launch of Aryacoin; AYA ICO, resulting in over 30BTC collected"},{title:"April 2019",desc:"The launch of Aryacoin; AYA ICO, resulting in over 30BTC collected"},{title:"April 2019",desc:"The launch of Aryacoin; AYA ICO, resulting in over 30BTC collected"},{title:"April 2019",desc:"The launch of Aryacoin; AYA ICO, resulting in over 30BTC collected"},{title:"April 2019",desc:"The launch of Aryacoin; AYA ICO, resulting in over 30BTC collected"},{title:"April 2019",desc:"The launch of Aryacoin; AYA ICO, resulting in over 30BTC collected"}],this.showDialog=!1}ngOnInit(){}onOpenSidePanel(){this.sidePanelService.show()}notify(){this.notificationService.notify("Hello notification is done")}static{this.\u0275fac=function(o){return new(o||e)(t.rXU(s.W9),t.rXU(a.fw),t.rXU(s.J$),t.rXU(a.JE))}}static{this.\u0275cmp=t.VBU({type:e,selectors:[["app-library-ex"]],standalone:!1,decls:217,vars:91,consts:[["slideRef1",""],["tabTitle","others"],["tabTitle","ui library"],["tabTitle","timeline default"],[3,"heading","items"],["tabTitle","timeline article"],["template","article",3,"heading","items"],["tabTitle","timeline card"],["template","card",3,"heading","items"],["tabTitle","timeline timeline"],["template","timeline",3,"heading","items"],["tabTitle","tabs"],[3,"tabs"],["tabTitle","tags"],[3,"tags"],["tabTitle","slide"],[3,"imagesUrl"],["tabTitle","note"],["color","blue","description","description","title","note 1"],["color","lightRed","description","description","template","design2","title","note 1"],["color","skyBlue","description","description","template","design3","title","note 1"],["tabTitle","badge"],["color","lightRed"],["borderType","outline","color","lightRed"],["tabTitle","alert"],["color","blue"],["tabTitle","columns and card"],[1,"wrapper"],["color","voillet"],["borderType","outline","color","darkGreen"],["borderRadius","15rem","color","yellow"],["borderRadius","0.125rem","color","skyBlue"],["tabTitle","progress"],[3,"items"],["bgColor","dark",3,"isMultiline","isRandomColor","items"],["tabTitle","app-customized-list"],["tabTitle","app-column-list"],[3,"items","reversed"],["tabTitle","app-description-list"],["template","design2",3,"items"],["tabTitle","app-order-list"],["tabTitle","app-order-timeline-list"],["tabTitle","app-accordion"],["tabTitle","app-css-layout"],["tabTitle","app-holy-grail-layout"],["tabTitle","math pipe"],["tabTitle","Notification"],[3,"click"],["position","top-left"],["position","top-center"],["position","top-right"],["position","bottom-left"],["position","bottom-center"],["position","bottom-right"],["position","middle-left"],["position","middle-center"],["position","middle-right"],["tabTitle","ang-toast"],["tabTitle","component library"],["tabTitle","Dashboard layout"],["tabTitle","accordion"],["title","More"],[4,"ngFor","ngForOf"],["tabTitle","button or toaster"],["tabTitle","galley"],[3,"pictures"],["template","secondary",3,"pictures"],["template","section",3,"pictures"],["tabTitle","carousel"],[3,"slideItems"],[3,"images"],["tabTitle","Vertical Timeline"],["color","pink",3,"items"],["color","skyBlue","view","card",3,"items"],["types","circle",3,"items"],["types","circle-outline",3,"items"],["types","square-outline",3,"items"],["types","infinite",3,"items"],["types","star",3,"items"],["types","heptagon",3,"items"],["types","rhombus",3,"items"],["types","clippy",3,"items"],[3,"items","unicodeCode"],[3,"items","unicodeType"],["tabTitle","progress-bar"],["bgColor","orange","progress","30"],["bgColor","red","height","10px","progress","60"],["bgColor","#99ff66","height","10px","progress","50"],["bgColor","#ff00ff","height","10px","progress","85"],["bgColor","#99ccff","height","10px","progress","95"],["template","primary"],["tabTitle","tables"],["tabTitle","Overlay"],["overlayStyle","dim-dark"],["tabTitle","projection"],[1,"btn",3,"click"],[3,"visibleChange","visible"],[3,"data","slideRef"],[3,"data","method","slideRef"],["tabTitle","app-sticky-header-ex"],["tabTitle","form module library"],["color","primary","name","gender",3,"label","value",4,"ngFor","ngForOf"],["angInput","","type","text"],["angInput","","type","text",3,"shape"],[3,"color","dismissible","message","visible"],["ang-button","",3,"color"],["ang-button","",3,"click","color"],[3,"color","position","progressPercentage"],[1,"card"],["color","primary","name","gender",3,"label","value"],[3,"color"],["template","two",3,"color"],[3,"color","label"]],template:function(o,i){if(1&o){const l=t.RV6();t.j41(0,"ng-tabs"),t.nrm(1,"ng-tab",1),t.j41(2,"ng-tab",2)(3,"ng-tabs")(4,"ng-tab",3),t.nrm(5,"tg-step-guide",4),t.k0s(),t.j41(6,"ng-tab",5),t.nrm(7,"tg-step-guide",6),t.k0s(),t.j41(8,"ng-tab",7),t.nrm(9,"tg-step-guide",8),t.k0s(),t.j41(10,"ng-tab",9),t.nrm(11,"tg-step-guide",10),t.k0s(),t.j41(12,"ng-tab",11),t.nrm(13,"tg-tabs",12),t.k0s(),t.j41(14,"ng-tab",13),t.nrm(15,"tg-tags",14),t.k0s(),t.j41(16,"ng-tab",15),t.nrm(17,"tg-slideshow",16),t.k0s(),t.j41(18,"ng-tab",17),t.nrm(19,"tg-note",18)(20,"tg-note",19)(21,"tg-note",20),t.k0s(),t.j41(22,"ng-tab",21)(23,"tg-badge",22),t.EFF(24,"lightRed"),t.k0s(),t.j41(25,"tg-badge",23),t.EFF(26,"lightRed"),t.k0s()(),t.j41(27,"ng-tab",24)(28,"tg-alert",22),t.EFF(29,"lightRed"),t.k0s(),t.j41(30,"tg-alert",25),t.EFF(31,"blue"),t.k0s()(),t.j41(32,"ng-tab",26)(33,"section",27)(34,"tg-columns")(35,"tg-column")(36,"tg-column-title"),t.EFF(37,"Incoming Bugs"),t.k0s(),t.j41(38,"tg-cards")(39,"tg-card")(40,"tg-badge",22),t.EFF(41,"high priority"),t.k0s(),t.j41(42,"h6"),t.EFF(43,"Angular"),t.k0s()(),t.j41(44,"tg-card")(45,"h6"),t.EFF(46,"Javascript"),t.k0s()()()(),t.j41(47,"tg-column")(48,"tg-column-title"),t.EFF(49,"In Progress"),t.k0s(),t.j41(50,"tg-cards")(51,"tg-card")(52,"tg-badge",28),t.EFF(53,"high priority"),t.k0s(),t.j41(54,"h6"),t.EFF(55,"Angular"),t.k0s()(),t.j41(56,"tg-card")(57,"h6"),t.EFF(58,"Javascript"),t.k0s()()()(),t.j41(59,"tg-column")(60,"tg-column-title"),t.EFF(61,"QA"),t.k0s(),t.j41(62,"tg-cards")(63,"tg-card")(64,"tg-badge",29),t.EFF(65,"high priority"),t.k0s(),t.j41(66,"h6"),t.EFF(67,"Angular"),t.k0s()(),t.j41(68,"tg-card")(69,"h6"),t.EFF(70,"Javascript"),t.k0s()()()(),t.j41(71,"tg-column")(72,"tg-column-title"),t.EFF(73,"Ready"),t.k0s(),t.j41(74,"tg-cards")(75,"tg-card")(76,"tg-badge",30),t.EFF(77,"high priority"),t.k0s(),t.j41(78,"h6"),t.EFF(79,"Angular"),t.k0s()(),t.j41(80,"tg-card")(81,"h6"),t.EFF(82,"Javascript"),t.k0s()()()(),t.j41(83,"tg-column")(84,"tg-column-title"),t.EFF(85,"Live"),t.k0s(),t.j41(86,"tg-cards")(87,"tg-card")(88,"tg-badge",31),t.EFF(89,"high priority"),t.k0s(),t.j41(90,"h6"),t.EFF(91,"Angular"),t.k0s()(),t.j41(92,"tg-card")(93,"h6"),t.EFF(94,"Javascript"),t.k0s()()()()()()(),t.j41(95,"ng-tab",32),t.nrm(96,"tg-progress",33)(97,"tg-progress",34),t.k0s(),t.j41(98,"ng-tab",35),t.nrm(99,"tg-customized-list",33),t.k0s(),t.j41(100,"ng-tab",36),t.nrm(101,"tg-column-list",33)(102,"tg-column-list",37),t.k0s(),t.j41(103,"ng-tab",38),t.nrm(104,"tg-description-list",33)(105,"tg-description-list",39),t.k0s(),t.j41(106,"ng-tab",40),t.nrm(107,"tg-order-list",33),t.k0s(),t.j41(108,"ng-tab",41),t.nrm(109,"tg-order-timeline-list",33),t.k0s(),t.j41(110,"ng-tab",42),t.nrm(111,"app-accordion")(112,"app-accordion-expend"),t.k0s(),t.nrm(113,"ng-tab",43)(114,"ng-tab",44),t.j41(115,"ng-tab",45)(116,"h2"),t.EFF(117),t.nI1(118,"math"),t.k0s(),t.j41(119,"h2"),t.EFF(120),t.nI1(121,"math"),t.k0s(),t.j41(122,"h2"),t.EFF(123),t.nI1(124,"math"),t.k0s(),t.j41(125,"h2"),t.EFF(126),t.nI1(127,"math"),t.k0s(),t.j41(128,"h2"),t.EFF(129),t.nI1(130,"math"),t.k0s()(),t.j41(131,"ng-tab",46)(132,"button",47),t.bIt("click",function(){return t.eBV(l),t.Njj(i.notify())}),t.EFF(133,"notify"),t.k0s(),t.nrm(134,"tg-notification",48)(135,"tg-notification",49)(136,"tg-notification",50)(137,"tg-notification",51)(138,"tg-notification",52)(139,"tg-notification",53)(140,"tg-notification",54)(141,"tg-notification",55)(142,"tg-notification",56),t.k0s(),t.j41(143,"ng-tab",57),t.nrm(144,"tg-toast"),t.j41(145,"button",47),t.bIt("click",function(){return t.eBV(l),t.Njj(i.toastService.info("hello"))}),t.EFF(146,"info"),t.k0s()()()(),t.j41(147,"ng-tab",58)(148,"ng-tabs")(149,"ng-tab",59),t.nrm(150,"lab-dashboard-layout"),t.k0s(),t.j41(151,"ng-tab",60)(152,"ang-accordion",61),t.EFF(153," Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum "),t.k0s()(),t.j41(154,"ng-tab",24),t.DNE(155,H,2,4,"ng-container",62),t.k0s(),t.j41(156,"ng-tab",63),t.nrm(157,"ang-toaster"),t.DNE(158,V,5,8,"ng-container",62),t.k0s(),t.j41(159,"ng-tab",64),t.nrm(160,"ang-gallery",65)(161,"ang-gallery",66)(162,"ang-gallery",67),t.k0s(),t.j41(163,"ng-tab",68),t.nrm(164,"ang-slider",69)(165,"ang-carousel",70),t.k0s(),t.j41(166,"ng-tab",71),t.nrm(167,"ang-timeline-vertical",72)(168,"ang-timeline-vertical",73)(169,"ang-timeline-vertical",74)(170,"ang-timeline-vertical",75)(171,"ang-timeline-vertical",76)(172,"ang-timeline-vertical",77)(173,"ang-timeline-vertical",78)(174,"ang-timeline-vertical",79)(175,"ang-timeline-vertical",80)(176,"ang-timeline-vertical",81)(177,"ang-timeline-vertical",82)(178,"ang-timeline-vertical",83),t.k0s(),t.j41(179,"ng-tab",84),t.nrm(180,"ang-progress-bar")(181,"ang-progress-bar",85)(182,"ang-progress-bar",86)(183,"ang-progress-bar",87)(184,"ang-progress-bar",88)(185,"ang-progress-bar",89)(186,"ang-progress-bar2",90),t.DNE(187,U,3,3,"ng-container",62),t.k0s(),t.nrm(188,"ng-tab",91),t.j41(189,"ng-tab",92)(190,"button",47),t.bIt("click",function(){return t.eBV(l),t.Njj(i.onOpenSidePanel())}),t.EFF(191,"Open Side Panel"),t.k0s(),t.nrm(192,"ang-sidepanel",93),t.k0s(),t.j41(193,"ng-tab",94)(194,"button",95),t.bIt("click",function(){return t.eBV(l),t.Njj(i.showDialog=!i.showDialog)}),t.EFF(195,"Open Dialog"),t.k0s(),t.j41(196,"ang-dialog",96),t.mxI("visibleChange",function(f){return t.eBV(l),t.DH7(i.showDialog,f)||(i.showDialog=f),t.Njj(f)}),t.j41(197,"h1"),t.EFF(198,"Hello World"),t.k0s(),t.j41(199,"button",95),t.bIt("click",function(){return t.eBV(l),t.Njj(i.showDialog=!i.showDialog)}),t.EFF(200,"Close"),t.k0s()(),t.j41(201,"ang-message-wrapper"),t.EFF(202," something something something something something something something "),t.k0s(),t.nrm(203,"ang-scrolling-x-container",97)(204,"ang-scrolling-x-container",98),t.DNE(205,J,5,2,"ng-template",null,0,t.C5r),t.k0s(),t.j41(207,"ng-tab",99),t.nrm(208,"app-sticky-header-ex"),t.k0s(),t.j41(209,"ng-tab",100),t.DNE(210,z,1,2,"ang-radio",101),t.nrm(211,"input",102)(212,"input",103)(213,"input",103),t.DNE(214,Q,2,1,"ng-container",62)(215,W,2,1,"ng-container",62)(216,X,2,2,"ng-container",62),t.k0s()()()()}if(2&o){const l=t.sdS(206);t.R7$(5),t.Y8G("heading","How To Guide")("items",i.stepsGuide),t.R7$(2),t.Y8G("heading","How To Guide")("items",i.stepsGuide),t.R7$(2),t.Y8G("heading","How To Guide")("items",i.stepsGuide),t.R7$(2),t.Y8G("heading","How To Guide")("items",i.stepsGuide),t.R7$(2),t.Y8G("tabs",t.lJ4(77,v)),t.R7$(2),t.Y8G("tags",t.lJ4(78,v)),t.R7$(2),t.Y8G("imagesUrl",t.lJ4(79,q)),t.R7$(79),t.Y8G("items",t.l_i(82,y,t.lJ4(80,_),t.lJ4(81,k))),t.R7$(),t.Y8G("isMultiline",!0)("isRandomColor",!0)("items",t.l_i(87,y,t.lJ4(85,_),t.lJ4(86,k))),t.R7$(2),t.Y8G("items",i.stepsGuide),t.R7$(2),t.Y8G("items",i.stepsGuide),t.R7$(),t.Y8G("items",i.stepsGuide)("reversed",!0),t.R7$(2),t.Y8G("items",i.stepsGuide),t.R7$(),t.Y8G("items",i.stepsGuide),t.R7$(2),t.Y8G("items",i.stepsGuide),t.R7$(2),t.Y8G("items",i.stepsGuide),t.R7$(8),t.SpI("Exponential Strength of 2: ",t.i5U(118,62,2,"exponential"),""),t.R7$(3),t.SpI("Square of 2: ",t.i5U(121,65,2,"square"),""),t.R7$(3),t.SpI("Round of 2.4: ",t.i5U(124,68,2.4,"round"),""),t.R7$(3),t.SpI("Sqrt of 81: ",t.i5U(127,71,81,"sqrt"),""),t.R7$(3),t.SpI("ceil of 7.4 : ",t.i5U(130,74,7.4,"ceil"),""),t.R7$(26),t.Y8G("ngForOf",i.themeColors),t.R7$(3),t.Y8G("ngForOf",i.themeColors),t.R7$(2),t.Y8G("pictures",i.pictures),t.R7$(),t.Y8G("pictures",i.pictures),t.R7$(),t.Y8G("pictures",i.pictures),t.R7$(2),t.Y8G("slideItems",i.cImages),t.R7$(),t.Y8G("images",i.cImages),t.R7$(2),t.Y8G("items",i.timelines),t.R7$(),t.Y8G("items",i.timelines),t.R7$(),t.Y8G("items",i.timelines),t.R7$(),t.Y8G("items",i.timelines),t.R7$(),t.Y8G("items",i.timelines),t.R7$(),t.Y8G("items",i.timelines),t.R7$(),t.Y8G("items",i.timelines),t.R7$(),t.Y8G("items",i.timelines),t.R7$(),t.Y8G("items",i.timelines),t.R7$(),t.Y8G("items",i.timelines),t.R7$(),t.Y8G("items",i.timelines)("unicodeCode","\u261b"),t.R7$(),t.Y8G("items",i.timelines)("unicodeType","star-g"),t.R7$(9),t.Y8G("ngForOf",i.themeColors),t.R7$(9),t.R50("visible",i.showDialog),t.R7$(7),t.Y8G("data",i.timelines)("slideRef",l),t.R7$(),t.Y8G("data",i.timelines)("method","flexbox")("slideRef",l),t.R7$(6),t.Y8G("ngForOf",t.lJ4(90,N)),t.R7$(2),t.Y8G("shape","rounded"),t.R7$(),t.Y8G("shape","squared"),t.R7$(),t.Y8G("ngForOf",i.themeColors),t.R7$(),t.Y8G("ngForOf",i.themeColors),t.R7$(),t.Y8G("ngForOf",i.themeColors)}},dependencies:[p.NgForOf,m.OW,m.je,a.K2,a.KT,a.OW,a.bY,a._g,a.nS,a.Cy,a.Tg,a.Io,a.af,a.ZH,a.ib,a.Xf,a.MC,a.ZT,a.q4,a.y5,a.hB,s.Mj,s.Cy,s.Qp,s.E0,s.A9,s.gU,s.d1,a.d3,s.Hi,s.aD,s.iT,s.eh,s.$6,s.mq,s.WH,s.C9,s.Sj,s.PY,s.CK,s.v2,a.zP,Y,D,B,A,L],styles:[".wrapper[_ngcontent-%COMP%]{padding:1rem}.round[_ngcontent-%COMP%]{border-radius:50%}.cover[_ngcontent-%COMP%]{object-fit:cover;width:100%}figure[_ngcontent-%COMP%]{margin:0}figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;height:auto}.special-cards[_ngcontent-%COMP%]{list-style:none;margin:0;padding:calc(8px + 1.5625vw);text-align:center;background:linear-gradient(0deg,#63d4ff,#2490ff)}.special-cards[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{background:#fff;background:linear-gradient(0deg,#fff,#f1f1f1);border-top:1px solid #fff;border-bottom:1px solid #999;border-radius:3px;box-shadow:0 0 10px #0003}table.compact[_ngcontent-%COMP%]{margin:2rem 0;border-collapse:collapse}table.compact[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table.compact[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{text-align:left;padding:.5rem .8rem;border-bottom:1px solid #ddd}table.compact[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{padding-left:0}table.compact[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{padding-right:0}"]})}}return e})()}];let K=(()=>{class e{static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275mod=t.$C({type:e})}static{this.\u0275inj=t.G2t({imports:[d.iI.forChild(Z),d.iI]})}}return e})(),tt=(()=>{class e{static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275mod=t.$C({type:e})}static{this.\u0275inj=t.G2t({imports:[p.CommonModule,d.iI]})}}return e})();var et=c(9417),nt=c(8593);let it=(()=>{class e{static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275mod=t.$C({type:e})}static{this.\u0275inj=t.G2t({imports:[p.CommonModule,K,m.jr,a.xS,a.rg,a.jr,a.QD,a.hS,a.EJ,a.Zi,a.qA,a.GE,a.Em,a.HV,s.h6,s.Zi,s.tm,s.LM,s.lg,s.Rl,a.MB,s.bq,s.dD,s.Hq,s.z_,s.Cs,s.tH,a.CF,tt,et.YN,nt.N]})}}return e})()}}]);