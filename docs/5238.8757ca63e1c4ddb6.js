"use strict";(self.webpackChunkportfolio_all_in_one=self.webpackChunkportfolio_all_in_one||[]).push([[5238],{3486:(T,v,a)=>{a.d(v,{r:()=>O});var t=a(5e3),n=a(9808);function _(e,i){1&e&&(t.ynx(0),t.TgZ(1,"p"),t._uU(2,"Home is where the heart is.."),t.qZA(),t.BQk())}function d(e,i){1&e&&(t.ynx(0),t.TgZ(1,"p"),t._uU(2,"ABOUT is where the heart is.."),t.qZA(),t.BQk())}function M(e,i){1&e&&(t.ynx(0),t.TgZ(1,"p"),t._uU(2,"CONTACT is where the heart is.."),t.qZA(),t.BQk())}function p(e,i){1&e&&(t.ynx(0),t.TgZ(1,"p"),t._uU(2,"NEWS is where the heart is.."),t.qZA(),t.BQk())}const s=function(){return[1,2,3,4,5,6,7]};let O=(()=>{class e{constructor(l){this.ele=l}scroll(l,r,P){this.toggleActivation(l.currentTarget,P),r.style.backgroundColor=P,r.scrollIntoView({behavior:"smooth"})}toggleActivation(l,r){this.ele.nativeElement.querySelectorAll(".tablink").forEach(x=>{x.style.backgroundColor="#555"}),l.style.backgroundColor=r}ngOnInit(){}}return e.\u0275fac=function(l){return new(l||e)(t.Y36(t.SBq))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-scroll-tabs"]],decls:29,vars:8,consts:[[1,"tabs"],[1,"tablink",3,"click"],[1,"tabcontent"],["home",""],[4,"ngFor","ngForOf"],["about",""],["contact",""],["news",""]],template:function(l,r){if(1&l){const P=t.EpF();t.TgZ(0,"div",0)(1,"button",1),t.NdJ("click",function(m){t.CHM(P);const f=t.MAs(10);return t.KtG(r.scroll(m,f,"red"))}),t._uU(2,"Home"),t.qZA(),t.TgZ(3,"button",1),t.NdJ("click",function(m){t.CHM(P);const f=t.MAs(15);return t.KtG(r.scroll(m,f,"blue"))}),t._uU(4,"About"),t.qZA(),t.TgZ(5,"button",1),t.NdJ("click",function(m){t.CHM(P);const f=t.MAs(20);return t.KtG(r.scroll(m,f,"green"))}),t._uU(6,"Contact"),t.qZA(),t.TgZ(7,"button",1),t.NdJ("click",function(m){t.CHM(P);const f=t.MAs(25);return t.KtG(r.scroll(m,f,"pink"))}),t._uU(8,"News"),t.qZA()(),t.TgZ(9,"div",2,3)(11,"h3"),t._uU(12,"Home"),t.qZA(),t.YNc(13,_,3,0,"ng-container",4),t.qZA(),t.TgZ(14,"div",2,5)(16,"h3"),t._uU(17,"ABOUT"),t.qZA(),t.YNc(18,d,3,0,"ng-container",4),t.qZA(),t.TgZ(19,"div",2,6)(21,"h3"),t._uU(22,"CONTACT"),t.qZA(),t.YNc(23,M,3,0,"ng-container",4),t.qZA(),t.TgZ(24,"div",2,7)(26,"h3"),t._uU(27,"NEWS"),t.qZA(),t.YNc(28,p,3,0,"ng-container",4),t.qZA()}2&l&&(t.xp6(13),t.Q6J("ngForOf",t.DdM(4,s)),t.xp6(5),t.Q6J("ngForOf",t.DdM(5,s)),t.xp6(5),t.Q6J("ngForOf",t.DdM(6,s)),t.xp6(5),t.Q6J("ngForOf",t.DdM(7,s)))},dependencies:[n.sg],styles:[".tabs[_ngcontent-%COMP%]{position:fixed;top:0;width:100%}.tablink[_ngcontent-%COMP%]{background-color:#555;color:#fff;float:left;border:none;outline:none;cursor:pointer;padding:14px 16px;font-size:17px;width:25%}.tablink[_ngcontent-%COMP%]:hover{background-color:#777}.tabcontent[_ngcontent-%COMP%]{padding:100px 20px;height:100%}"]}),e})()},3406:(T,v,a)=>{a.d(v,{w:()=>n});var t=a(5e3);let n=(()=>{class _{constructor(M){this.tpl=M}}return _.\u0275fac=function(M){return new(M||_)(t.Y36(t.Rgc))},_.\u0275dir=t.lG2({type:_,selectors:[["","appTab",""]],inputs:{name:"name"}}),_})()},7869:(T,v,a)=>{a.d(v,{K:()=>p});var t=a(3406),n=a(5e3),_=a(9808);function d(s,O){if(1&s){const e=n.EpF();n.TgZ(0,"li",2),n.NdJ("click",function(){const r=n.CHM(e).$implicit,P=n.oxw();return n.KtG(P.setTab(r))}),n._uU(1),n.qZA()}if(2&s){const e=O.$implicit,i=n.oxw();n.ekj("active",i.isTabActive(e)),n.xp6(1),n.hij(" ",e.name," ")}}function M(s,O){1&s&&n.GkF(0)}let p=(()=>{class s{ngAfterContentInit(){this.activeTab=this.tabs.first}isTabActive(e){return this.activeTab===e}setTab(e){this.activeTab=e}}return s.\u0275fac=function(e){return new(e||s)},s.\u0275cmp=n.Xpm({type:s,selectors:[["app-tabs1"]],contentQueries:function(e,i,l){if(1&e&&n.Suo(l,t.w,4),2&e){let r;n.iGM(r=n.CRH())&&(i.tabs=r)}},decls:4,vars:2,consts:[[3,"active","click",4,"ngFor","ngForOf"],[4,"ngTemplateOutlet"],[3,"click"]],template:function(e,i){1&e&&(n.TgZ(0,"nav")(1,"ul"),n.YNc(2,d,2,3,"li",0),n.qZA()(),n.YNc(3,M,1,0,"ng-container",1)),2&e&&(n.xp6(2),n.Q6J("ngForOf",i.tabs),n.xp6(1),n.Q6J("ngTemplateOutlet",i.activeTab.tpl))},dependencies:[_.sg,_.tP],styles:["ul[_ngcontent-%COMP%]{display:flex;list-style-type:none;overflow-x:auto;border:1px solid #ccc;background-color:#f1f1f1;padding:0;margin:0}li[_ngcontent-%COMP%]{padding:14px 16px;cursor:pointer;background-color:inherit;transition:.3s;flex:none}li[_ngcontent-%COMP%]:hover{background-color:#ddd}li.active[_ngcontent-%COMP%]{background-color:#ccc}"]}),s})()},5238:(T,v,a)=>{a.d(v,{P:()=>e});var t=a(9808),s=(a(7869),a(3406),a(3486),a(9242),a(6789),a(5e3));let e=(()=>{class i{}return i.\u0275fac=function(r){return new(r||i)},i.\u0275mod=s.oAB({type:i}),i.\u0275inj=s.cJS({imports:[t.ez]}),i})()},6789:(T,v,a)=>{a.d(v,{id:()=>p});var t=a(1777),n=a(5e3);const _=["*"];(0,t.X$)("slideUp",[(0,t.eR)(":enter",[(0,t.oB)({transform:"translate(0,500px)"}),(0,t.jt)("350ms cubic-bezier(0.17, 0.89, 0.24, 1.11)",(0,t.oB)({transform:"translate(0,0)"}))]),(0,t.eR)(":leave",[(0,t.jt)("300ms ease-in-out",(0,t.oB)({transform:"translate(0,500px)"}))])]),(0,t.X$)("container",[(0,t.eR)(":enter, :leave",[(0,t.IO)("@*",(0,t.pV)(),{optional:!0})])]);let p=(()=>{class s{constructor(){this.active=!1,this.left=!1}ngOnInit(){}}return s.\u0275fac=function(e){return new(e||s)},s.\u0275cmp=n.Xpm({type:s,selectors:[["app-tab"]],inputs:{title:["tabTitle","title"]},ngContentSelectors:_,decls:2,vars:5,consts:[[3,"hidden"]],template:function(e,i){1&e&&(n.F$t(),n.TgZ(0,"div",0),n.Hsn(1),n.qZA()),2&e&&(n.ekj("slide-in-from-left",i.left)("slide-in-from-right",!i.left),n.Q6J("hidden",!i.active))},styles:[".animate-fade[_ngcontent-%COMP%]{animation:animateFade .8s}@keyframes animateFade{0%{opacity:0}to{opacity:1}}.animate-top[_ngcontent-%COMP%]{position:relative;animation:animateTop .4s}@keyframes animateTop{0%{top:-300px;opacity:0}to{top:0;opacity:1}}.animate-left[_ngcontent-%COMP%]{position:relative;animation:animateLeft .4s}@keyframes animateLeft{0%{left:-300px;opacity:0}to{left:0;opacity:1}}.animate-right[_ngcontent-%COMP%]{position:relative;animation:animateRight .4s}@keyframes animateRight{0%{right:-300px;opacity:0}to{right:0;opacity:1}}.animate-bottom[_ngcontent-%COMP%]{position:relative;animation:animateBottom .4s}@keyframes animateBottom{0%{bottom:-300px;opacity:0}to{bottom:0;opacity:1}}.animate-zoom[_ngcontent-%COMP%]{animation:animateZoom .6s}@keyframes animateZoom{0%{transform:scale(0)}to{transform:scale(1)}}.slide-in-from-left[_ngcontent-%COMP%]{animation:slideInFromLeft .4s ease-out}.slide-in-from-right[_ngcontent-%COMP%]{animation:slideInFromRight .4s ease-out}@keyframes slideInFromLeft{0%{transform:translate(-100%)}to{transform:translate(0)}}@keyframes slideInFromRight{0%{transform:translate(100%)}to{transform:translate(0)}}"]}),s})()},9242:(T,v,a)=>{a.d(v,{n:()=>f});var t=a(6789),n=a(5e3),_=a(9808);function d(c,g){if(1&c){const o=n.EpF();n.TgZ(0,"li",8),n.NdJ("click",function(){const b=n.CHM(o),u=b.$implicit,h=b.index,k=n.oxw(2);return n.KtG(k.selectTab(u,h))}),n._uU(1),n.qZA()}if(2&c){const o=g.$implicit;n.ekj("active",o.active),n.xp6(1),n.hij("",o.title," ")}}function M(c,g){}function p(c,g){if(1&c&&(n.ynx(0),n.TgZ(1,"div")(2,"ul",4),n.YNc(3,d,2,3,"li",5),n.qZA()(),n.TgZ(4,"div",6),n.YNc(5,M,0,0,"ng-template",7),n.qZA(),n.BQk()),2&c){const o=n.oxw(),C=n.MAs(4);n.xp6(1),n.Tol(o.version),n.xp6(2),n.Q6J("ngForOf",o.tabs),n.xp6(2),n.Q6J("ngTemplateOutlet",C)}}function s(c,g){if(1&c){const o=n.EpF();n.TgZ(0,"li",16),n.NdJ("click",function(){const b=n.CHM(o),u=b.$implicit,h=b.index,k=n.oxw(3);return n.KtG(k.selectTab(u,h))}),n.TgZ(1,"em")(2,"a"),n._uU(3),n.qZA()()()}if(2&c){const o=g.$implicit;n.xp6(1),n.ekj("active",o.active),n.xp6(2),n.Oqu(o.title)}}function O(c,g){if(1&c&&(n.TgZ(0,"aside",14)(1,"ol"),n.YNc(2,s,4,3,"li",15),n.qZA()()),2&c){const o=n.oxw(2);n.xp6(2),n.Q6J("ngForOf",o.tabs)}}const e=function(c,g){return{completed:c,selected:g}};function i(c,g){if(1&c){const o=n.EpF();n.TgZ(0,"li",19),n.NdJ("click",function(){const b=n.CHM(o),u=b.$implicit,h=b.index,k=n.oxw(3);return n.KtG(k.selectTab(u,h))}),n.TgZ(1,"a")(2,"span",20)(3,"span"),n._uU(4),n.qZA()()()()}if(2&c){const o=g.$implicit;n.Q6J("ngClass",n.WLB(2,e,o.active,o.active)),n.xp6(4),n.Oqu(o.title)}}function l(c,g){if(1&c&&(n.TgZ(0,"aside",17)(1,"ol"),n.YNc(2,i,5,5,"li",18),n.qZA()()),2&c){const o=n.oxw(2);n.xp6(2),n.Q6J("ngForOf",o.tabs)}}function r(c,g){}function P(c,g){if(1&c&&(n.ynx(0),n.TgZ(1,"section",9)(2,"div",10),n.YNc(3,O,3,1,"aside",11),n.YNc(4,l,3,1,"aside",12),n.qZA(),n.TgZ(5,"div",13),n.YNc(6,r,0,0,"ng-template",7),n.qZA()(),n.BQk()),2&c){const o=n.oxw(),C=n.MAs(4);n.xp6(3),n.Q6J("ngIf","sidebar"===o.template),n.xp6(1),n.Q6J("ngIf","steps"===o.template),n.xp6(2),n.Q6J("ngTemplateOutlet",C)}}function x(c,g){1&c&&n.Hsn(0)}const m=["*"];let f=(()=>{class c{constructor(){this.template="tabs",this.version="version2-v3",this.activeIndex=0}ngAfterContentInit(){0===this.tabs.filter(C=>C.active).length&&this.selectTab(this.tabs.first,0)}selectTab(o,C){this.tabs.toArray().forEach(b=>{b.active=!1}),o.active=!0,o.left=this.activeIndex>C,this.activeIndex=C}}return c.\u0275fac=function(o){return new(o||c)},c.\u0275cmp=n.Xpm({type:c,selectors:[["app-tabs"]],contentQueries:function(o,C,b){if(1&o&&n.Suo(b,t.id,4),2&o){let u;n.iGM(u=n.CRH())&&(C.tabs=u)}},inputs:{template:"template",version:"version"},ngContentSelectors:m,decls:5,vars:2,consts:[[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],["content",""],[1,"tabs"],["class","tab",3,"active","click",4,"ngFor","ngForOf"],[1,"tabs-content"],[3,"ngTemplateOutlet"],[1,"tab",3,"click"],[1,"sidebar-main-container"],[1,"left"],["class","sidebar-tabs",4,"ngIf"],["class","steps",4,"ngIf"],[1,"right"],[1,"sidebar-tabs"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],[1,"steps"],[3,"ngClass","click",4,"ngFor","ngForOf"],[3,"ngClass","click"],[1,"step"]],template:function(o,C){1&o&&(n.F$t(),n.ynx(0,0),n.YNc(1,p,6,5,"ng-container",1),n.YNc(2,P,7,3,"ng-container",2),n.BQk(),n.YNc(3,x,1,0,"ng-template",null,3,n.W1O)),2&o&&(n.Q6J("ngSwitch",C.template),n.xp6(1),n.Q6J("ngSwitchCase","tabs"))},dependencies:[_.mk,_.sg,_.O5,_.tP,_.RF,_.n9,_.ED],styles:[".tabs-content[_ngcontent-%COMP%]{width:100%;overflow-x:hidden;padding:1rem}ul[_ngcontent-%COMP%]{margin:0;padding:0;list-style:none;-webkit-user-select:none;user-select:none;overflow:auto;position:relative;font-size:.8125rem}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{cursor:pointer;white-space:nowrap;text-decoration:none;margin:0;border:none;padding:1em 1.6em}.tabs[_ngcontent-%COMP%]   .tab.active[_ngcontent-%COMP%]{pointer-events:none}.version1-v3[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%], .version1-v2[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%], .version1-v4[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%], .version1-v5[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%], .version1-v6[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%], .version1-v8[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%], .version1-v7[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%], .version1[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%], .version1-v9[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%], .version1-v10[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]{display:flex;align-items:center;border-bottom:1px solid #666666}.version1-v3[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%], .version1-v2[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%], .version1-v4[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%], .version1-v5[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%], .version1-v6[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%], .version1-v8[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%], .version1-v7[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%], .version1[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%], .version1-v9[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%], .version1-v10[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]{transition:color .3s ease-in-out;font-weight:500}.version1-v3[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:hover, .version1-v2[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:hover, .version1-v4[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:hover, .version1-v5[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:hover, .version1-v6[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:hover, .version1-v8[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:hover, .version1-v7[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:hover, .version1[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:hover, .version1-v9[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:hover, .version1-v10[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:hover{color:#32557f}.version1-v3[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab.active[_ngcontent-%COMP%], .version1-v2[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab.active[_ngcontent-%COMP%], .version1-v4[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab.active[_ngcontent-%COMP%], .version1-v5[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab.active[_ngcontent-%COMP%], .version1-v6[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab.active[_ngcontent-%COMP%], .version1-v8[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab.active[_ngcontent-%COMP%], .version1-v7[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab.active[_ngcontent-%COMP%], .version1[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab.active[_ngcontent-%COMP%], .version1-v9[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab.active[_ngcontent-%COMP%], .version1-v10[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab.active[_ngcontent-%COMP%]{color:#32557f;font-weight:700}.version1-v2[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab.active[_ngcontent-%COMP%], .version1-v4[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab.active[_ngcontent-%COMP%], .version1-v5[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab.active[_ngcontent-%COMP%], .version1-v6[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab.active[_ngcontent-%COMP%], .version1-v8[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab.active[_ngcontent-%COMP%], .version1-v7[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab.active[_ngcontent-%COMP%]{color:#fff;background:#32557f}.version1-v3[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab.active[_ngcontent-%COMP%]{color:#32557f;border:1px solid #32557f;border-top-left-radius:.5rem;border-top-right-radius:.5rem}.version1-v4[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%], .version1-v5[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%], .version1-v6[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%], .version1-v8[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%], .version1-v7[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]{border:0}.version1-v5[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%], .version1-v6[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%], .version1-v8[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%], .version1-v7[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]{background:white}.version1-v5[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:hover, .version1-v6[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:hover, .version1-v8[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:hover, .version1-v7[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:hover{background:#c7d6e9}.version1-v6[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%], .version1-v8[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%], .version1-v7[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]{gap:.5rem}.version1-v7[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]{border-radius:32px}.version1-v8[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]{border-radius:.5rem}.version1-v9[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab.active[_ngcontent-%COMP%], .version1-v10[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab.active[_ngcontent-%COMP%]{color:#32557f;border-bottom:2px solid #32557f}.version1-v10[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]{box-shadow:0 .2rem .8rem #00000080}.version2[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]{display:flex;align-items:center}.version2[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]{border:1px solid #666666;background-color:#f5f7fa}.version2[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:hover{color:#32557f;background:#eee}.version2[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:not(:first-child){border-left:none}.version2[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab.active[_ngcontent-%COMP%]{color:#32557f;font-weight:700;border-bottom:1px solid transparent;background:transparent}.version2-v2[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]{display:flex;align-items:center}.version2-v2[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]{border-bottom:1px solid #bbb}.version2-v2[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:hover{font-weight:700}.version2-v2[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:not(:first-child){border-left:none}.version2-v2[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab.active[_ngcontent-%COMP%]{color:#32557f;font-weight:700;border:1px solid #ddd;border-top:2px solid #32557f;border-bottom-color:transparent;background:transparent}.version2-v3[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem}.version2-v3[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]{background:#32557f;color:#fff;border-radius:3px 3px 0 0;box-shadow:#00000059 0 5px 15px}.version2-v3[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:hover{font-weight:700}.version2-v3[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab.active[_ngcontent-%COMP%]{color:#32557f;font-weight:700;border-top:3px solid #32557f;background:#fff}.version3[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%], .version3-v5[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%], .version3-v4[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%], .version3-v3[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%], .version3-v2[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]{display:inline-flex;align-items:center;border:1px solid #666666;border-radius:35px;color:#32557f;font-weight:700}.version3[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%], .version3-v5[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%], .version3-v4[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%], .version3-v3[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%], .version3-v2[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]{transition:all .25s ease-in-out}.version3[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:hover, .version3-v5[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:hover, .version3-v4[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:hover, .version3-v3[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:hover, .version3-v2[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:hover{background:#eee}.version3[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab.active[_ngcontent-%COMP%], .version3-v5[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab.active[_ngcontent-%COMP%], .version3-v4[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab.active[_ngcontent-%COMP%], .version3-v3[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab.active[_ngcontent-%COMP%], .version3-v2[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab.active[_ngcontent-%COMP%]{color:#fff;font-weight:700;background:#32557f}.version3-v2[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:not(.version3-v2   .tabs[_ngcontent-%COMP%]   .tab.active[_ngcontent-%COMP%], .version3-v2[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:first-child){border-left:1px solid #32557f}.version3-v3[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%], .version3-v4[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]{border-radius:0}.version3-v4[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:not(.version3-v4   .tabs[_ngcontent-%COMP%]   .tab.active[_ngcontent-%COMP%], .version3-v4[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:first-child){border-left:1px solid #32557f}.version3-v5[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]{display:flex;border:0;background:#fff;padding:.2rem;border-radius:50px;box-shadow:0 .2rem .8rem #00000080;color:currentColor}.version3-v5[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]{flex:1;display:flex;justify-content:center;align-items:center;transition:background .2s ease-in-out}.version3-v5[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]:hover{background:transparent}.version3-v5[_ngcontent-%COMP%]   .tabs[_ngcontent-%COMP%]   .tab.active[_ngcontent-%COMP%]{background:linear-gradient(to right,red,orange);color:#fff;border-radius:50px}.sidebar-main-container[_ngcontent-%COMP%]{--width: 250px;display:flex;height:100vh}.sidebar-main-container[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{position:sticky;top:0;width:var(--width);border-right:2px solid}.sidebar-main-container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;overflow-y:auto;padding:1rem}aside[_ngcontent-%COMP%]{max-height:calc(100vh - 6rem);overflow:auto;overflow-x:hidden;padding-left:1rem}.steps[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{margin:0;padding:16px 12px;counter-reset:li-count;list-style:none;overflow-x:visible;overflow-y:auto;flex-grow:1}.steps[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:0;margin:0;display:block;counter-increment:li-count}.steps[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;display:flex;align-items:center;font-family:Roboto,Noto,sans-serif;font-size:14px;font-weight:400;color:#80868b;background:#fff;padding:3px 10px;margin:6px 0;border:1px solid #dadce0;border-radius:5px;min-height:48px;line-height:20px;box-sizing:content-box;position:relative;transition:all .3s ease-in-out}.steps[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]{display:flex;align-items:center}.steps[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]:before{content:counter(li-count);display:inline-block;font-style:normal;font-weight:400;color:#fff;background:#80868b;margin-right:8px;width:26px;min-width:26px;height:26px;line-height:26px;border-radius:50%;text-align:center;vertical-align:middle;position:relative;z-index:2;transition:all .3s ease-in-out}.steps[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.completed[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]:before{background-color:#1a73e8;color:#fff}.steps[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#212121;font-weight:600;box-shadow:0 1px 2px #3c40434d,0 2px 6px 2px #3c404326}.sidebar-tabs[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%], .sidebar-tabs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0;font-size:.833rem;margin-top:1rem}.sidebar-tabs[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   em[_ngcontent-%COMP%], .sidebar-tabs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{display:inline-block;font-style:normal;padding:.25rem .25rem .25rem .5rem;width:100%}.sidebar-tabs[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   em.border[_ngcontent-%COMP%], .sidebar-tabs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   em.border[_ngcontent-%COMP%]{border-left:2px solid #cdcdcd}.sidebar-tabs[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   em.active[_ngcontent-%COMP%], .sidebar-tabs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   em.active[_ngcontent-%COMP%]{background:rgba(0,133,242,.1882352941);border-left:2px solid #0069c2;font-weight:600}.sidebar-tabs[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .sidebar-tabs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#4e4e4e;display:inline-flex;padding:.25rem;text-decoration:none}.sidebar-tabs[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   details[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%], .sidebar-tabs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   details[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{padding-left:.75rem}.sidebar-tabs[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%], .sidebar-tabs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%]{margin-bottom:.5rem}[_ngcontent-%COMP%]::-webkit-scrollbar{background:transparent;height:8px;width:8px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border-radius:.25rem;background:rgb(148,163,184)}[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:transparent}"]}),c})()}}]);