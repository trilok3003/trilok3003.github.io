"use strict";(self.webpackChunkportfolio_all_in_one=self.webpackChunkportfolio_all_in_one||[]).push([[6055],{9282:(v,f,a)=>{a.d(f,{id:()=>O});var n=a(1777),t=a(5e3);const l=["*"];(0,n.X$)("slideUp",[(0,n.eR)(":enter",[(0,n.oB)({transform:"translate(0,500px)"}),(0,n.jt)("350ms cubic-bezier(0.17, 0.89, 0.24, 1.11)",(0,n.oB)({transform:"translate(0,0)"}))]),(0,n.eR)(":leave",[(0,n.jt)("300ms ease-in-out",(0,n.oB)({transform:"translate(0,500px)"}))])]),(0,n.X$)("container",[(0,n.eR)(":enter, :leave",[(0,n.IO)("@*",(0,n.pV)(),{optional:!0})])]);let O=(()=>{class s{constructor(){this.active=!1,this.left=!1}ngOnInit(){}}return s.\u0275fac=function(e){return new(e||s)},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-tab"]],inputs:{title:["tabTitle","title"]},ngContentSelectors:l,decls:2,vars:5,consts:[[1,"pane",3,"hidden"]],template:function(e,c){1&e&&(t.F$t(),t.TgZ(0,"div",0),t.Hsn(1),t.qZA()),2&e&&(t.ekj("slide-in-from-left",c.left)("slide-in-from-right",!c.left),t.Q6J("hidden",!c.active))},styles:[".pane[_ngcontent-%COMP%]{padding:1em}.animate-fade[_ngcontent-%COMP%]{animation:animateFade .8s}@keyframes animateFade{0%{opacity:0}to{opacity:1}}.animate-top[_ngcontent-%COMP%]{position:relative;animation:animateTop .4s}@keyframes animateTop{0%{top:-300px;opacity:0}to{top:0;opacity:1}}.animate-left[_ngcontent-%COMP%]{position:relative;animation:animateLeft .4s}@keyframes animateLeft{0%{left:-300px;opacity:0}to{left:0;opacity:1}}.animate-right[_ngcontent-%COMP%]{position:relative;animation:animateRight .4s}@keyframes animateRight{0%{right:-300px;opacity:0}to{right:0;opacity:1}}.animate-bottom[_ngcontent-%COMP%]{position:relative;animation:animateBottom .4s}@keyframes animateBottom{0%{bottom:-300px;opacity:0}to{bottom:0;opacity:1}}.animate-zoom[_ngcontent-%COMP%]{animation:animateZoom .6s}@keyframes animateZoom{0%{transform:scale(0)}to{transform:scale(1)}}.slide-in-from-left[_ngcontent-%COMP%]{animation:slideInFromLeft .4s ease-out}.slide-in-from-right[_ngcontent-%COMP%]{animation:slideInFromRight .4s ease-out}@keyframes slideInFromLeft{0%{transform:translate(-100%)}to{transform:translate(0)}}@keyframes slideInFromRight{0%{transform:translate(100%)}to{transform:translate(0)}}"]}),s})()},2353:(v,f,a)=>{a.d(f,{n:()=>T});var n=a(9282),t=a(5e3),l=a(9808);function u(i,_){if(1&i){const o=t.EpF();t.TgZ(0,"li",7),t.NdJ("click",function(){const d=t.CHM(o),P=d.$implicit,h=d.index,y=t.oxw(2);return t.KtG(y.selectTab(P,h))}),t._uU(1),t.qZA()}if(2&i){const o=_.$implicit;t.ekj("active",o.active),t.xp6(1),t.hij("",o.title," ")}}function b(i,_){if(1&i&&(t.TgZ(0,"ul",5),t.YNc(1,u,2,3,"li",6),t.qZA()),2&i){const o=t.oxw();t.xp6(1),t.Q6J("ngForOf",o.tabs)}}function O(i,_){}function s(i,_){if(1&i){const o=t.EpF();t.TgZ(0,"li",15),t.NdJ("click",function(){const d=t.CHM(o),P=d.$implicit,h=d.index,y=t.oxw(3);return t.KtG(y.selectTab(P,h))}),t.TgZ(1,"em")(2,"a"),t._uU(3),t.qZA()()()}if(2&i){const o=_.$implicit;t.xp6(1),t.ekj("active",o.active),t.xp6(2),t.Oqu(o.title)}}function p(i,_){if(1&i&&(t.TgZ(0,"aside",13)(1,"ol"),t.YNc(2,s,4,3,"li",14),t.qZA()()),2&i){const o=t.oxw(2);t.xp6(2),t.Q6J("ngForOf",o.tabs)}}const e=function(i,_){return{completed:i,selected:_}};function c(i,_){if(1&i){const o=t.EpF();t.TgZ(0,"li",18),t.NdJ("click",function(){const d=t.CHM(o),P=d.$implicit,h=d.index,y=t.oxw(3);return t.KtG(y.selectTab(P,h))}),t.TgZ(1,"a")(2,"span",19)(3,"span"),t._uU(4),t.qZA()()()()}if(2&i){const o=_.$implicit;t.Q6J("ngClass",t.WLB(2,e,o.active,o.active)),t.xp6(4),t.Oqu(o.title)}}function g(i,_){if(1&i&&(t.TgZ(0,"aside",16)(1,"ol"),t.YNc(2,c,5,5,"li",17),t.qZA()()),2&i){const o=t.oxw(2);t.xp6(2),t.Q6J("ngForOf",o.tabs)}}function r(i,_){}function C(i,_){if(1&i&&(t.TgZ(0,"section",8)(1,"div",9),t.YNc(2,p,3,1,"aside",10),t.YNc(3,g,3,1,"aside",11),t.qZA(),t.TgZ(4,"div",12),t.YNc(5,r,0,0,"ng-template",2),t.qZA()()),2&i){const o=t.oxw(),m=t.MAs(5);t.xp6(2),t.Q6J("ngIf","sidebar"===o.template),t.xp6(1),t.Q6J("ngIf","steps"===o.template),t.xp6(2),t.Q6J("ngTemplateOutlet",m)}}function x(i,_){1&i&&t.Hsn(0)}const M=["*"];let T=(()=>{class i{constructor(){this.template="tabs",this.activeIndex=0}ngAfterContentInit(){0===this.tabs.filter(m=>m.active).length&&this.selectTab(this.tabs.first,0)}selectTab(o,m){this.tabs.toArray().forEach(d=>{d.active=!1}),o.active=!0,o.left=this.activeIndex>m,this.activeIndex=m}}return i.\u0275fac=function(o){return new(o||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-tabs"]],contentQueries:function(o,m,d){if(1&o&&t.Suo(d,n.id,4),2&o){let P;t.iGM(P=t.CRH())&&(m.tabs=P)}},inputs:{template:"template"},ngContentSelectors:M,decls:6,vars:3,consts:[["class","tabs",4,"ngIf"],[1,"tabs-content"],[3,"ngTemplateOutlet"],["class","aside-container",4,"ngIf"],["content",""],[1,"tabs"],["class","tab",3,"active","click",4,"ngFor","ngForOf"],[1,"tab",3,"click"],[1,"aside-container"],[1,"left"],["class","sidebar-tabs",4,"ngIf"],["class","steps",4,"ngIf"],[1,"right"],[1,"sidebar-tabs"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],[1,"steps"],[3,"ngClass","click",4,"ngFor","ngForOf"],[3,"ngClass","click"],[1,"step"]],template:function(o,m){if(1&o&&(t.F$t(),t.YNc(0,b,2,1,"ul",0),t.TgZ(1,"div",1),t.YNc(2,O,0,0,"ng-template",2),t.qZA(),t.YNc(3,C,6,3,"section",3),t.YNc(4,x,1,0,"ng-template",null,4,t.W1O)),2&o){const d=t.MAs(5);t.Q6J("ngIf","tabs"===m.template),t.xp6(2),t.Q6J("ngTemplateOutlet",d),t.xp6(1),t.Q6J("ngIf","tabs"!==m.template)}},dependencies:[l.mk,l.sg,l.O5,l.tP],styles:["aside[_ngcontent-%COMP%]{max-height:calc(100vh - 6rem);overflow:auto;overflow-x:hidden;padding-left:1rem}.aside-container[_ngcontent-%COMP%]{display:flex;height:100vh}.aside-container[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{position:sticky;top:0}.aside-container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex-grow:1;overflow-y:auto}.responsive[_ngcontent-%COMP%]{width:100%;overflow-x:auto}.tabs-content[_ngcontent-%COMP%]{width:100%;overflow-x:hidden}.sticky-top[_ngcontent-%COMP%]{position:sticky;top:0;z-index:999}ul[_ngcontent-%COMP%]{margin:0;padding:0;list-style:none;-webkit-user-select:none;user-select:none;overflow:auto;position:relative;font-size:.8125rem}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{cursor:pointer;white-space:nowrap;text-decoration:none;margin:0;border:none;padding:1em 1.6em}.tabs[_ngcontent-%COMP%]   .tab.active[_ngcontent-%COMP%]{pointer-events:none}.steps[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{margin:0;padding:16px 12px;counter-reset:li-count;list-style:none;overflow-x:visible;overflow-y:auto;flex-grow:1}.steps[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:0;margin:0;display:block;counter-increment:li-count}.steps[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;display:flex;align-items:center;font-size:14px;color:#80868b;padding:3px 10px;min-height:48px;font-weight:400;line-height:20px;box-sizing:content-box;position:relative;font-family:Roboto,Noto,sans-serif;transition:all .3s ease-in-out;border:1px solid #dadce0;border-radius:5px;margin:6px 0;background:#fff}.steps[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]{display:flex;align-items:center}.steps[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]:before{content:counter(li-count);display:inline-block;font-style:normal;width:26px;min-width:26px;color:#fff;background:#80868b;border-radius:50%;text-align:center;height:26px;vertical-align:middle;line-height:26px;margin-right:8px;font-weight:400;position:relative;z-index:2;transition:all .3s ease-in-out}.steps[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.completed[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]:before{background-color:#1a73e8;color:#fff}.steps[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#212121;font-weight:600;box-shadow:0 1px 2px #3c40434d,0 2px 6px 2px #3c404326}.sidebar-tabs[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%], .sidebar-tabs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0;font-size:.833rem;margin-top:1rem}.sidebar-tabs[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   em[_ngcontent-%COMP%], .sidebar-tabs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{display:inline-block;font-style:normal;padding:.25rem .25rem .25rem .5rem;width:100%}.sidebar-tabs[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   em.border[_ngcontent-%COMP%], .sidebar-tabs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   em.border[_ngcontent-%COMP%]{border-left:2px solid #cdcdcd}.sidebar-tabs[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   em.active[_ngcontent-%COMP%], .sidebar-tabs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   em.active[_ngcontent-%COMP%]{background:rgba(0,133,242,.1882352941);border-left:2px solid #0069c2;font-weight:600}.sidebar-tabs[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .sidebar-tabs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#4e4e4e;display:inline-flex;padding:.25rem;text-decoration:none}.sidebar-tabs[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   details[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%], .sidebar-tabs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   details[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{padding-left:.75rem}.sidebar-tabs[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%], .sidebar-tabs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%]{margin-bottom:.5rem}.tabs[_ngcontent-%COMP%]{display:flex;align-items:center;border-bottom:1px solid #666666}.tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]{transition:color .3s ease-in-out;font-weight:700}.tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:hover, .tabs[_ngcontent-%COMP%]   .tab.active[_ngcontent-%COMP%]{color:#32557f}.tabs[_ngcontent-%COMP%]   .tab.active[_ngcontent-%COMP%]{color:#32557f;border-bottom:2px solid #32557f}"]}),i})()},4486:(v,f,a)=>{a.d(f,{w:()=>t});var n=a(5e3);let t=(()=>{class l{constructor(b){this.tpl=b}}return l.\u0275fac=function(b){return new(b||l)(n.Y36(n.Rgc))},l.\u0275dir=n.lG2({type:l,selectors:[["","appTab",""]],inputs:{name:"name"}}),l})()},4632:(v,f,a)=>{a.d(f,{K:()=>O});var n=a(4486),t=a(5e3),l=a(9808);function u(s,p){if(1&s){const e=t.EpF();t.TgZ(0,"li",2),t.NdJ("click",function(){const r=t.CHM(e).$implicit,C=t.oxw();return t.KtG(C.setTab(r))}),t._uU(1),t.qZA()}if(2&s){const e=p.$implicit,c=t.oxw();t.ekj("active",c.isTabActive(e)),t.xp6(1),t.hij(" ",e.name," ")}}function b(s,p){1&s&&t.GkF(0)}let O=(()=>{class s{ngAfterContentInit(){this.activeTab=this.tabs.first}isTabActive(e){return this.activeTab===e}setTab(e){this.activeTab=e}}return s.\u0275fac=function(e){return new(e||s)},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-tabs1"]],contentQueries:function(e,c,g){if(1&e&&t.Suo(g,n.w,4),2&e){let r;t.iGM(r=t.CRH())&&(c.tabs=r)}},decls:4,vars:2,consts:[[3,"active","click",4,"ngFor","ngForOf"],[4,"ngTemplateOutlet"],[3,"click"]],template:function(e,c){1&e&&(t.TgZ(0,"nav")(1,"ul"),t.YNc(2,u,2,3,"li",0),t.qZA()(),t.YNc(3,b,1,0,"ng-container",1)),2&e&&(t.xp6(2),t.Q6J("ngForOf",c.tabs),t.xp6(1),t.Q6J("ngTemplateOutlet",c.activeTab.tpl))},dependencies:[l.sg,l.tP],styles:["ul[_ngcontent-%COMP%]{display:flex;list-style-type:none;overflow-x:auto;border:1px solid #ccc;background-color:#f1f1f1;padding:0;margin:0}li[_ngcontent-%COMP%]{padding:14px 16px;cursor:pointer;background-color:inherit;transition:.3s;flex:none}li[_ngcontent-%COMP%]:hover{background-color:#ddd}li.active[_ngcontent-%COMP%]{background-color:#ccc}"]}),s})()},4059:(v,f,a)=>{a.d(f,{r:()=>p});var n=a(5e3),t=a(9808);function l(e,c){1&e&&(n.ynx(0),n.TgZ(1,"p"),n._uU(2,"Home is where the heart is.."),n.qZA(),n.BQk())}function u(e,c){1&e&&(n.ynx(0),n.TgZ(1,"p"),n._uU(2,"ABOUT is where the heart is.."),n.qZA(),n.BQk())}function b(e,c){1&e&&(n.ynx(0),n.TgZ(1,"p"),n._uU(2,"CONTACT is where the heart is.."),n.qZA(),n.BQk())}function O(e,c){1&e&&(n.ynx(0),n.TgZ(1,"p"),n._uU(2,"NEWS is where the heart is.."),n.qZA(),n.BQk())}const s=function(){return[1,2,3,4,5,6,7]};let p=(()=>{class e{constructor(g){this.ele=g}scroll(g,r,C){this.toggleActivation(g.currentTarget,C),r.style.backgroundColor=C,r.scrollIntoView({behavior:"smooth"})}toggleActivation(g,r){this.ele.nativeElement.querySelectorAll(".tablink").forEach(x=>{x.style.backgroundColor="#555"}),g.style.backgroundColor=r}ngOnInit(){}}return e.\u0275fac=function(g){return new(g||e)(n.Y36(n.SBq))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-scroll-tabs"]],decls:29,vars:8,consts:[[1,"tabs"],[1,"tablink",3,"click"],[1,"tabcontent"],["home",""],[4,"ngFor","ngForOf"],["about",""],["contact",""],["news",""]],template:function(g,r){if(1&g){const C=n.EpF();n.TgZ(0,"div",0)(1,"button",1),n.NdJ("click",function(M){n.CHM(C);const T=n.MAs(10);return n.KtG(r.scroll(M,T,"red"))}),n._uU(2,"Home"),n.qZA(),n.TgZ(3,"button",1),n.NdJ("click",function(M){n.CHM(C);const T=n.MAs(15);return n.KtG(r.scroll(M,T,"blue"))}),n._uU(4,"About"),n.qZA(),n.TgZ(5,"button",1),n.NdJ("click",function(M){n.CHM(C);const T=n.MAs(20);return n.KtG(r.scroll(M,T,"green"))}),n._uU(6,"Contact"),n.qZA(),n.TgZ(7,"button",1),n.NdJ("click",function(M){n.CHM(C);const T=n.MAs(25);return n.KtG(r.scroll(M,T,"pink"))}),n._uU(8,"News"),n.qZA()(),n.TgZ(9,"div",2,3)(11,"h3"),n._uU(12,"Home"),n.qZA(),n.YNc(13,l,3,0,"ng-container",4),n.qZA(),n.TgZ(14,"div",2,5)(16,"h3"),n._uU(17,"ABOUT"),n.qZA(),n.YNc(18,u,3,0,"ng-container",4),n.qZA(),n.TgZ(19,"div",2,6)(21,"h3"),n._uU(22,"CONTACT"),n.qZA(),n.YNc(23,b,3,0,"ng-container",4),n.qZA(),n.TgZ(24,"div",2,7)(26,"h3"),n._uU(27,"NEWS"),n.qZA(),n.YNc(28,O,3,0,"ng-container",4),n.qZA()}2&g&&(n.xp6(13),n.Q6J("ngForOf",n.DdM(4,s)),n.xp6(5),n.Q6J("ngForOf",n.DdM(5,s)),n.xp6(5),n.Q6J("ngForOf",n.DdM(6,s)),n.xp6(5),n.Q6J("ngForOf",n.DdM(7,s)))},dependencies:[t.sg],styles:[".tabs[_ngcontent-%COMP%]{position:fixed;top:0;width:100%}.tablink[_ngcontent-%COMP%]{background-color:#555;color:#fff;float:left;border:none;outline:none;cursor:pointer;padding:14px 16px;font-size:17px;width:25%}.tablink[_ngcontent-%COMP%]:hover{background-color:#777}.tabcontent[_ngcontent-%COMP%]{padding:100px 20px;height:100%}"]}),e})()},6055:(v,f,a)=>{a.d(f,{P:()=>e});var n=a(9808),s=(a(2353),a(9282),a(4632),a(4486),a(4059),a(5e3));let e=(()=>{class c{}return c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=s.oAB({type:c}),c.\u0275inj=s.cJS({imports:[n.ez]}),c})()}}]);