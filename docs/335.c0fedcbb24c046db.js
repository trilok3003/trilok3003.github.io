"use strict";(self.webpackChunkportfolio_all_in_one=self.webpackChunkportfolio_all_in_one||[]).push([[335],{335:(Q,_,p)=>{p.r(_),p.d(_,{SidenavModule:()=>E});var A=p(9808),c=p(4202),e=p(5e3);let S=(()=>{class n{constructor(t){this.viewContainerRef=t}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.s_b))},n.\u0275dir=e.lG2({type:n,selectors:[["","sidenavContentArea",""]]}),n})();var d,a,v,g,h,C,y,l=p(5861),s=p(655);class r{constructor(){d.add(this),this.sidenavMinWidth=250,this.sidenavMaxWidth=window.innerWidth-300,this.isExpanded=!0,a.set(this,[]),v.set(this,void 0),this.isSlidingInFromTheRight=!1,this.isSlidingInFromTheLeft=!1}get sidenavWidth(){return parseInt(getComputedStyle(document.body).getPropertyValue("--sidenav-width"),10)}setSidenavWidth(i){const t=Math.min(Math.max(i,this.sidenavMinWidth),this.sidenavMaxWidth);document.body.style.setProperty("--sidenav-width",`${t}px`)}toggleSidenav(){this.isExpanded=!this.isExpanded}expandSidenav(){this.isExpanded=!0}collapseSidenav(){this.isExpanded=!1}push(i){var t=this;return(0,l.Z)(function*(){(0,s.Q_)(t,a,"f").push(i),(0,s.Q_)(t,d,"m",g).call(t,i),yield(0,s.Q_)(t,d,"m",y).call(t),console.log((0,s.Q_)(t,a,"f"))})()}pop(){var i=this;return(0,l.Z)(function*(){1!==(0,s.Q_)(i,a,"f").length&&((0,s.Q_)(i,a,"f").pop(),(0,s.Q_)(i,d,"m",g).call(i,(0,s.Q_)(i,a,"f")[(0,s.Q_)(i,a,"f").length-1]),yield(0,s.Q_)(i,d,"m",C).call(i),console.log((0,s.Q_)(i,a,"f")))})()}setDynamicContentArea(i){(0,s.YH)(this,v,i,"f")}get sidenavTransitionDuration(){const i=getComputedStyle(document.body).getPropertyValue("--sidenav-transition-duration");return parseInt(i,10)}}function w(n,i){}a=new WeakMap,v=new WeakMap,d=new WeakSet,g=function(i){var t,o;null===(t=(0,s.Q_)(this,v,"f"))||void 0===t||t.viewContainerRef.clear(),null===(o=(0,s.Q_)(this,v,"f"))||void 0===o||o.viewContainerRef.createComponent(i)},h=function(){var n=(0,l.Z)(function*(t){return new Promise(o=>setTimeout(o,t))});return function i(t){return n.apply(this,arguments)}}(),C=function(){var n=(0,l.Z)(function*(){this.isSlidingInFromTheLeft=!0,yield(0,s.Q_)(this,d,"m",h).call(this,this.sidenavTransitionDuration),this.isSlidingInFromTheLeft=!1});return function i(){return n.apply(this,arguments)}}(),y=function(){var n=(0,l.Z)(function*(){this.isSlidingInFromTheRight=!0,yield(0,s.Q_)(this,d,"m",h).call(this,this.sidenavTransitionDuration),this.isSlidingInFromTheRight=!1});return function i(){return n.apply(this,arguments)}}(),r.\u0275fac=function(i){return new(i||r)},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"});let Z=(()=>{class n{constructor(t){this.sidenavService=t,this.resizingEvent={isResizing:!1,startingCursorX:0,startingWidth:0}}get isExpanded(){return this.sidenavService.isExpanded}ngOnInit(){if(!this.sidenavContentArea)throw new Error("sidenavContentArea is undefined");this.sidenavService.setDynamicContentArea(this.sidenavContentArea)}startResizing(t){this.resizingEvent={isResizing:!0,startingCursorX:t.clientX,startingWidth:this.sidenavService.sidenavWidth}}updateSidenavWidth(t){this.resizingEvent.isResizing&&this.sidenavService.setSidenavWidth(this.resizingEvent.startingWidth+(t.clientX-this.resizingEvent.startingCursorX))}stopResizing(){this.resizingEvent.isResizing=!1}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(r))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-sidenav"]],viewQuery:function(t,o){if(1&t&&e.Gf(S,7),2&t){let u;e.iGM(u=e.CRH())&&(o.sidenavContentArea=u.first)}},hostVars:2,hostBindings:function(t,o){1&t&&e.NdJ("mousemove",function(f){return o.updateSidenavWidth(f)},!1,e.Jf7)("mouseup",function(){return o.stopResizing()},!1,e.Jf7),2&t&&e.ekj("is-expanded",o.isExpanded)},decls:6,vars:8,consts:[[1,"sidenav-body-container"],[1,"sidenav-body"],["sidenavContentArea",""],[1,"resize-handle",3,"mousedown"],[1,"toggle-button",3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e.YNc(2,w,0,0,"ng-template",2),e.TgZ(3,"div",3),e.NdJ("mousedown",function(f){return o.startResizing(f)}),e.qZA()()(),e.TgZ(4,"button",4),e.NdJ("click",function(){return o.sidenavService.toggleSidenav()}),e._uU(5," >\n"),e.qZA()),2&t&&(e.xp6(1),e.ekj("slide-in-from-left",o.sidenavService.isSlidingInFromTheLeft)("slide-in-from-right",o.sidenavService.isSlidingInFromTheRight),e.xp6(2),e.ekj("resizing",o.resizingEvent.isResizing),e.xp6(1),e.ekj("is-flipped",o.sidenavService.isExpanded))},dependencies:[S],styles:['[_nghost-%COMP%]{height:100vh;width:var(--sidenav-collapsed-width);box-sizing:border-box;position:sticky;top:0;background-color:#edf1f3;transition:width .3s cubic-bezier(.02,.68,.63,.98)}.is-expanded[_nghost-%COMP%]{width:var(--sidenav-width)}.resize-handle[_ngcontent-%COMP%]{height:100%;background-color:#a5a5a5;width:2px;position:absolute;top:0;right:0;cursor:ew-resize;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none;transition:background-color .2s ease-out,width .2s ease-out}.resize-handle[_ngcontent-%COMP%]:hover{width:3px;background-color:#5d9feb}.resize-handle[_ngcontent-%COMP%]:after{content:"";display:block;height:100%;width:24px;position:absolute;right:-12px;z-index:1}.resize-handle.resizing[_ngcontent-%COMP%]:after{width:100px;right:-50px}.toggle-button[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:25px;height:25px;margin:0;padding:0;position:absolute;top:48px;right:-14.5px;border:1px solid gray;border-radius:50%;background-color:#fff;cursor:pointer;z-index:100}.toggle-button[_ngcontent-%COMP%]:hover{border:2px solid rgb(36,82,231)}.toggle-button.is-flipped[_ngcontent-%COMP%]{transform:rotate(-180deg)}.toggle-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:1.5em;width:-moz-fit-content;width:fit-content;height:-moz-fit-content;height:fit-content}.sidenav-body-container[_ngcontent-%COMP%]{overflow-y:auto;height:100%;padding:16px;box-sizing:border-box}.sidenav-body[_ngcontent-%COMP%]{width:100%;overflow-x:hidden}.sidenav-body.slide-in-from-left[_ngcontent-%COMP%]{animation:slideInFromLeft var(--sidenav-transition-duration) ease-out}.sidenav-body.slide-in-from-right[_ngcontent-%COMP%]{animation:slideInFromRight var(--sidenav-transition-duration) ease-out}@keyframes slideInFromLeft{0%{transform:translate(-100%)}to{transform:translate(0)}}@keyframes slideInFromRight{0%{transform:translate(100%)}to{transform:translate(0)}}']}),n})(),T=(()=>{class n{constructor(){document.body.style.setProperty("--sidenav-width","300px"),document.body.style.setProperty("--sidenav-collapsed-width","20px"),document.body.style.setProperty("--sidenav-transition-duration","400ms")}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-sidenav-layout"]],decls:3,vars:0,consts:[[1,"content"]],template:function(t,o){1&t&&(e._UZ(0,"app-sidenav"),e.TgZ(1,"div",0),e._UZ(2,"router-outlet"),e.qZA())},dependencies:[c.lC,Z],styles:["[_nghost-%COMP%]{margin:0;font-family:Roboto,Helvetica,Arial,sans-serif;min-height:100vh;display:flex;flex-direction:row}.content[_ngcontent-%COMP%]{flex-grow:1;padding:1rem}"]}),n})();const b=[[["","icon",""]],"*"],D=["[icon]","*"];let m=(()=>{class n{constructor(){this.routerLinkActiveOptions={exact:!1}}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-sidenav-link"]],inputs:{routerLink:"routerLink",routerLinkActiveOptions:"routerLinkActiveOptions"},ngContentSelectors:D,decls:5,vars:2,consts:[["routerLinkActive","active",3,"routerLink","routerLinkActiveOptions"],[1,"text-container"]],template:function(t,o){1&t&&(e.F$t(b),e.TgZ(0,"a",0)(1,"span"),e.Hsn(2),e.qZA(),e.TgZ(3,"span",1),e.Hsn(4,1),e.qZA()()),2&t&&e.Q6J("routerLink",o.routerLink)("routerLinkActiveOptions",o.routerLinkActiveOptions)},dependencies:[c.yS,c.Od],styles:["a[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;gap:8px;min-width:200px;padding:16px;box-sizing:border-box;text-decoration:none;color:#000;border-radius:4px;transition:background-color 75ms ease-out}a[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}a[_ngcontent-%COMP%]:hover{background-color:#deebff}a.active[_ngcontent-%COMP%]{background-color:#c1daff;font-weight:700;color:#2452e7}"]}),n})();const O=function(){return["settings"]};let M=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-default-sidenav"]],decls:12,vars:2,consts:[["routerLink","/sidenav"],["icon",""],[3,"routerLink"]],template:function(t,o){1&t&&(e.TgZ(0,"h1"),e._uU(1,"Default Sidenav"),e.qZA(),e.TgZ(2,"app-sidenav-link",0)(3,"span",1),e._uU(4,"\u{1f3e0}"),e.qZA(),e.TgZ(5,"span"),e._uU(6,"Home"),e.qZA()(),e.TgZ(7,"app-sidenav-link",2)(8,"span",1),e._uU(9,"\u{1f3e0}"),e.qZA(),e.TgZ(10,"span"),e._uU(11,"Settings"),e.qZA()()),2&t&&(e.xp6(7),e.Q6J("routerLink",e.DdM(1,O)))},dependencies:[c.rH,m]}),n})(),k=(()=>{class n{constructor(t,o){this.sidenavService=t,this.cdr=o}ngOnInit(){}ngAfterViewInit(){this.sidenavService.push(M),this.cdr.detectChanges()}ngOnDestroy(){this.sidenavService.pop()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(r),e.Y36(e.sBO))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-default-home"]],decls:2,vars:0,template:function(t,o){1&t&&(e.TgZ(0,"p"),e._uU(1,"default-home works!"),e.qZA())}}),n})();const F=function(){return{exact:!0}},L=function(){return["/sidenav"]};let z=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-settings-sidenav"]],decls:18,vars:4,consts:[[3,"routerLinkActiveOptions","routerLink"],["icon",""],["routerLink","./accounts"]],template:function(t,o){1&t&&(e.TgZ(0,"h1"),e._uU(1,"Settings Sidenav"),e.qZA(),e.TgZ(2,"app-sidenav-link",0)(3,"span",1),e._uU(4,"\u{1f519}"),e.qZA(),e._uU(5," Back\n"),e.qZA(),e.TgZ(6,"app-sidenav-link",2)(7,"span",1),e._uU(8,"\u{1f3e0}"),e.qZA(),e._uU(9," Accounts\n"),e.qZA(),e.TgZ(10,"app-sidenav-link",2)(11,"span",1),e._uU(12,"\u{1f3e0}"),e.qZA(),e._uU(13," Security\n"),e.qZA(),e.TgZ(14,"app-sidenav-link",2)(15,"span",1),e._uU(16,"\u{1f3e0}"),e.qZA(),e._uU(17," Notifications\n"),e.qZA()),2&t&&(e.xp6(2),e.Q6J("routerLinkActiveOptions",e.DdM(2,F))("routerLink",e.DdM(3,L)))},dependencies:[c.rH,m]}),n})(),I=(()=>{class n{constructor(t,o){this.sidenavService=t,this.cdr=o}ngAfterViewInit(){this.sidenavService.push(z),this.cdr.detectChanges()}ngOnDestroy(){console.log("kdkd"),this.sidenavService.pop()}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(r),e.Y36(e.sBO))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-settings"]],decls:2,vars:0,template:function(t,o){1&t&&(e.TgZ(0,"p"),e._uU(1,"settings works!"),e.qZA())}}),n})();const P=function(){return{exact:!0}};let U=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-accounts-sidenav"]],decls:18,vars:2,consts:[["routerLink","./settings",3,"routerLinkActiveOptions"],["icon",""],["routerLink","/settings"]],template:function(t,o){1&t&&(e.TgZ(0,"h1"),e._uU(1,"Accounts Sidenav"),e.qZA(),e.TgZ(2,"app-sidenav-link",0)(3,"span",1),e._uU(4,"\u{1f519}"),e.qZA(),e._uU(5," Back\n"),e.qZA(),e.TgZ(6,"app-sidenav-link",2)(7,"span",1),e._uU(8,"\u{1f3e0}"),e.qZA(),e._uU(9," Settings\n"),e.qZA(),e.TgZ(10,"app-sidenav-link",2)(11,"span",1),e._uU(12,"\u{1f3e0}"),e.qZA(),e._uU(13," Security\n"),e.qZA(),e.TgZ(14,"app-sidenav-link",2)(15,"span",1),e._uU(16,"\u{1f3e0}"),e.qZA(),e._uU(17," Notifications\n"),e.qZA()),2&t&&(e.xp6(2),e.Q6J("routerLinkActiveOptions",e.DdM(1,P)))},dependencies:[c.rH,m]}),n})();const R=[{path:"",component:T,children:[{path:"",component:k},{path:"settings",component:I},{path:"home",component:k},{path:"accounts",component:(()=>{class n{constructor(t,o){this.sidenavService=t,this.cdr=o}ngOnInit(){}ngAfterViewInit(){this.sidenavService.push(U),this.cdr.detectChanges()}ngOnDestroy(){this.sidenavService.pop()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(r),e.Y36(e.sBO))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-accounts"]],decls:2,vars:0,template:function(t,o){1&t&&(e.TgZ(0,"p"),e._uU(1,"accounts works!"),e.qZA())}}),n})()}]}];let q=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[c.Bz.forChild(R),c.Bz]}),n})(),E=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[A.ez,q]}),n})()}}]);