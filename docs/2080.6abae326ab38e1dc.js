"use strict";(self.webpackChunkportfolio_all_in_one=self.webpackChunkportfolio_all_in_one||[]).push([[2080],{1024:(k,f,a)=>{a.d(f,{g:()=>p,t:()=>e});var c=a(4438);let p=(()=>{class t{constructor(){this.cols="auto-fit",this.minWidth="12.5em",this.maxWidth="1fr",this.gap="1rem",this.rowHeight="auto"}get getStyle(){return`\n     margin: 1rem 0;\n     display: grid;\n     grid-template-columns: repeat(${this.cols}, minmax( min(${this.minWidth}, 100%),  ${this.maxWidth}));\n     grid-template-rows: ${this.rowHeight};\n     grid-gap: ${this.gap};\n     grid-auto-flow: dense;\n     `}static{this.\u0275fac=function(s){return new(s||t)}}static{this.\u0275dir=c.FsC({type:t,selectors:[["","appGrid",""]],hostVars:2,hostBindings:function(s,g){2&s&&c.Aen(g.getStyle)},inputs:{cols:"cols",minWidth:"minWidth",maxWidth:"maxWidth",gap:"gap",rowHeight:"rowHeight"}})}}return t})(),e=(()=>{class t{constructor(){this.rowspan=1,this.colspan=1}get getStyle(){return`\n      grid-row: span ${this.rowspan};\n      grid-column: span ${this.colspan};\n    `}static{this.\u0275fac=function(s){return new(s||t)}}static{this.\u0275dir=c.FsC({type:t,selectors:[["","appGridItem",""]],hostVars:2,hostBindings:function(s,g){2&s&&c.Aen(g.getStyle)},inputs:{rowspan:"rowspan",colspan:"colspan"}})}}return t})()},1979:(k,f,a)=>{a.d(f,{d:()=>e});var c=a(4438);const p=["*"];let e=(()=>{class t{constructor(){this.height=(0,c.hFB)("auto")}static{this.\u0275fac=function(s){return new(s||t)}}static{this.\u0275cmp=c.VBU({type:t,selectors:[["app-table-container"]],hostVars:2,hostBindings:function(s,g){2&s&&c.xc7("--height",g.height())},inputs:{height:[1,"height"]},ngContentSelectors:p,decls:1,vars:0,template:function(s,g){1&s&&(c.NAR(),c.SdG(0))},styles:[':host{color-scheme:light dark;--primary-color: light-dark(#edf2fc, #000106);--secondary-color: light-dark(#212121, #ffffff);--accent-color: var(--theme-color,#ff4321);--primary-color-light: light-dark(#ffffff, #1c1b1d);--shadow:0 4px 8px 0 rgba(0, 0, 0, .2);--shadow-hover: 0 4px 12px rgba(0, 0, 0, .2);--shadow-2: 0 0 20px rgba(0,0,0, .15);--white-color: #ffffff;--black-color: #000000;--dark-color: #000000;--light-color: #ffffff;--grey-color: #4b4f55;--dark-text-color: #f6f6f6;--light-text-color: #333333;--grey-text-color: #f6f6f6;--border-width: 1px;--border-radius: .375rem;--box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12);--base-font-size: 1rem;--font-size-xs: calc(var(--base-font-size) * .625);--font-size-sm: calc(var(--base-font-size) * .75);--font-size-md: calc(var(--base-font-size) * .875);--font-size-lg: calc(var(--base-font-size) * 1.5);--font-size-xl: calc(var(--base-font-size) * 2);--font-size-xxl: calc(var(--base-font-size) * 3);--shadow-xxs: 0 1px 2px rgba(134, 144, 162, .1);--shadow-xs: 0 2px 4px rgba(134, 144, 162, .15);--shadow-sm: 0 3px 6px rgba(134, 144, 162, .2);--shadow-md: 0 4px 8px rgba(134, 144, 162, .25);--shadow-lg: 0 6px 12px rgba(134, 144, 162, .3);--shadow-xl: 0 12px 24px rgba(134, 144, 162, .35);--shadow-xxl: 0 24px 48px rgba(134, 144, 162, .4);--shadow-glass: inset 5px 5px 12px #555, 5px 5px 12px rgb(235 235 235 / 16%);--base-radius: 1rem;--radius-none: 0;--radius-full: 9999px;--radius-xs: calc(var(--base-radius) * .125);--radius-sm: calc(var(--base-radius) * .25);--radius-md: calc(var(--base-radius) * .375);--radius-lg: calc(var(--base-radius) * .75);--radius-xl: calc(var(--base-radius) * 1.25);--radius-xxl: calc(var(--base-radius) * 1.5);--spacing-unit: 1rem;--font-family-1: system-ui, sans-serif;--font-family-2: Poppins, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;--font-family-3: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"}*{padding:0;margin:0;box-sizing:border-box}:host{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar;--grey-600: #1a2c38;--grey-200: #b1bad3;--grey-500: #213743;--blue-color: MidnightBlue;--blue-light-color: AliceBlue;max-height:var(--height, auto);--height: auto}:host table{table-layout:fixed;border-collapse:collapse;border-spacing:0;min-width:400px;width:100%;margin:1.6rem 0;font-size:.9em;border-radius:5px 5px 0 0;overflow:hidden;box-shadow:var(--shadow)}:host table thead tr{background:var(--accent-color);color:var(--primary-color, #fff);text-align:left;font-size:bold}:host table th,:host table td{padding:.8rem 1rem}:host table tbody tr{border-bottom:1px solid var(--primary-color-light, #dddddd)}:host table tbody tr:nth-of-type(2n){background:var(--primary-color-light, #f3f3f3)}:host table tbody tr:last-of-type{border-bottom:2px solid var(--accent-color)}:host table tbody tr.active-row{font-weight:700;color:var(--accent-color)}:host th[order]{cursor:pointer;user-select:none;-webkit-user-select:none}:host th[order=desc]:before,:host th[order=asc]:before{content:"";display:block;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAmxJREFUeAHtmksrRVEUx72fH8CIGQNJkpGUUmakDEiZSJRIZsRQmCkTJRmZmJgQE0kpX0D5DJKJgff7v+ru2u3O3vvc67TOvsdatdrnnP1Y///v7HvvubdbUiIhBISAEBACQkAICAEhIAQ4CXSh2DnyDfmCPEG2Iv9F9MPlM/LHyAecdyMzHYNwR3fdNK/OH9HXl1UCozD24TCvILxizEDWIEzA0FcM8woCgRrJCoS5PIwrANQSMAJX1LEI9bqpQo4JYNFFKRSvIgsxHDVnqZgIkPnNBM0rIGtYk9YOOsqgbgepRCfdbmFtqhFkVEDVPjJp0+Z6e6hRHhqBKgg6ZDCvYBygVmUoEGoh5JTRvIJwhJo1aUOoh4CLPMyvxxi7EWOMgnCGsXXI1GIXlZUYX7ucU+kbR8NW8lh3O7cue0Pk32MKndfUxQFAwxdirk3fHappAnc0oqDPzDfGTBrCfHP04dM4oTV8cxr0SVzH9FF07xD3ib6xCDE+M+aUcVygtWzzbtGX2rPBrEUYfecfQkaFzYi6HjVnGBdtL7epqAlc1+jRdAap74RrnPc4BCijttY2tRcdN0g17w7HqZrXhdJTYAuS3hd8z+vKgK3V1zWPae0mZDMykadBn1hTQBLnZNwVrJpSe/NwEeDsEwCctEOsJTsgxLvCqUl2ACftEGvJDgjxrnBqkh3ASTvEWrIDQrwrnJpkB3DSDrGW7IAQ7wqnJtkBnLRztejXXVu4+mxz/nQ9jR1w5VB86ejLTFcnnDwhzV+F6T+CHZlx6THSjn76eyyBIOPHyDakhBAQAkJACAgBISAEhIAQYCLwC8JxpAmsEGt6AAAAAElFTkSuQmCC) no-repeat;background-size:16px;width:16px;height:16px;float:left;margin-left:-10px;margin-top:4px}:host th[order=desc]:before{transform:rotate(180deg);-ms-transform:rotate(180deg)}:host .table-dark{color:#fff;background-color:#212529}:host .table-light{color:#212529;background-color:#fff}:host .striped-table tbody tr:last-of-type{border-bottom:2px solid var(--theme-color, var(--grey-600))}:host .list-table th,:host .list-table td{border-top:1px solid #ddd}:host .bordered-table th,:host .bordered-table td{border:1px solid #ddd}:host .table-sticky thead{position:sticky;top:0}:host .borderless-table{border-collapse:unset}\n'],encapsulation:3})}}return t})()},3597:(k,f,a)=>{a.d(f,{c:()=>p});var c=a(4438);let p=(()=>{class e{constructor(){this.routerLinkActiveOptions={exact:!1}}static{this.\u0275fac=function(m){return new(m||e)}}static{this.\u0275dir=c.FsC({type:e,selectors:[["app-theme-nav-link"]],inputs:{routerLink:"routerLink",label:"label",routerLinkActiveOptions:"routerLinkActiveOptions",accentLink:"accentLink",isHome:"isHome"}})}}return e})()},1536:(k,f,a)=>{a.d(f,{w:()=>A});var c=a(177),p=a(884),e=a(3597),t=a(4438);const _=["openSidebarButton"],m=["navbar"],s=[[["app-theme-nav"]],[["","slot","main"]]],g=["app-theme-nav","[slot='main']"],w=l=>({"home-li":l}),S=l=>({"accent-link":l});function C(l,x){if(1&l&&t.nrm(0,"img",4),2&l){const n=t.XpG();t.FS9("alt",n.label),t.Y8G("src",n.src,t.B4B)}}function u(l,x){if(1&l&&(t.j41(0,"li",11)(1,"a",13),t.EFF(2),t.k0s()()),2&l){const n=x.$implicit;t.Y8G("ngClass",t.eq3(5,w,n.isHome)),t.R7$(),t.Y8G("ngClass",t.eq3(7,S,n.accentLink))("routerLink",null==n?null:n.routerLink)("routerLinkActiveOptions",null==n?null:n.routerLinkActiveOptions),t.R7$(),t.JRh(null==n?null:n.label)}}let A=(()=>{class l{constructor(){this.src="https://www.coding2go.com/logo.png",this.label="coding2go.com"}openSidebar(){this.navbar.classList.add("show"),this.openButton.setAttribute("aria-expanded","true"),this.navbar.removeAttribute("inert")}closeSidebar(){this.navbar.classList.remove("show"),this.openButton.setAttribute("aria-expanded","false"),this.navbar.setAttribute("inert","")}ngAfterViewInit(){const n=window.matchMedia("(width < 700px)");this.updateNavabr(n),n.addEventListener("change",d=>this.updateNavabr(d))}updateNavabr(n){n.matches?this.navbar.setAttribute("inert",""):this.navbar.removeAttribute("inert")}get navbar(){return this.navbarEle.nativeElement}get openButton(){return this.openButtonEle.nativeElement}static{this.\u0275fac=function(d){return new(d||l)}}static{this.\u0275cmp=t.VBU({type:l,selectors:[["app-theme-nav"]],contentQueries:function(d,h,o){if(1&d&&t.wni(o,e.c,4),2&d){let i;t.mGM(i=t.lsd())&&(h.links=i)}},viewQuery:function(d,h){if(1&d&&(t.GBs(_,5),t.GBs(m,5)),2&d){let o;t.mGM(o=t.lsd())&&(h.openButtonEle=o.first),t.mGM(o=t.lsd())&&(h.navbarEle=o.first)}},inputs:{theme:"theme",src:"src",label:"label"},ngContentSelectors:g,decls:22,vars:3,consts:[["openSidebarButton",""],["navbar",""],[1,"theme-layout"],[1,"logo-link"],["height","50","width","50",3,"src","alt"],["id","open-sidebar-button","aria-label","open sidebar","aria-expanded","false","aria-controls","navbar",3,"click"],["xmlns","http://www.w3.org/2000/svg","height","40px","viewBox","0 -960 960 960","width","40px","fill","#c9c9c9"],["d","M165.13-254.62q-10.68 0-17.9-7.26-7.23-7.26-7.23-18t7.23-17.86q7.22-7.13 17.9-7.13h629.74q10.68 0 17.9 7.26 7.23 7.26 7.23 18t-7.23 17.87q-7.22 7.12-17.9 7.12H165.13Zm0-200.25q-10.68 0-17.9-7.27-7.23-7.26-7.23-17.99 0-10.74 7.23-17.87 7.22-7.13 17.9-7.13h629.74q10.68 0 17.9 7.27 7.23 7.26 7.23 17.99 0 10.74-7.23 17.87-7.22 7.13-17.9 7.13H165.13Zm0-200.26q-10.68 0-17.9-7.26-7.23-7.26-7.23-18t7.23-17.87q7.22-7.12 17.9-7.12h629.74q10.68 0 17.9 7.26 7.23 7.26 7.23 18t-7.23 17.86q-7.22 7.13-17.9 7.13H165.13Z"],["id","navbar"],["id","close-sidebar-button","aria-label","close sidebar",3,"click"],["d","m480-444.62-209.69 209.7q-7.23 7.23-17.5 7.42-10.27.19-17.89-7.42-7.61-7.62-7.61-17.7 0-10.07 7.61-17.69L444.62-480l-209.7-209.69q-7.23-7.23-7.42-17.5-.19-10.27 7.42-17.89 7.62-7.61 17.7-7.61 10.07 0 17.69 7.61L480-515.38l209.69-209.7q7.23-7.23 17.5-7.42 10.27-.19 17.89 7.42 7.61 7.62 7.61 17.7 0 10.07-7.61 17.69L515.38-480l209.7 209.69q7.23 7.23 7.42 17.5.19 10.27-7.42 17.89-7.62 7.61-17.7 7.61-10.07 0-17.69-7.61L480-444.62Z"],[3,"ngClass"],["id","overlay","aria-hidden","true",3,"click"],["routerLinkActive","active-link",3,"ngClass","routerLink","routerLinkActiveOptions"]],template:function(d,h){if(1&d){const o=t.RV6();t.NAR(s),t.j41(0,"div",2)(1,"header")(2,"a",3),t.DNE(3,C,1,2,"img",4),t.j41(4,"span"),t.EFF(5),t.k0s()(),t.SdG(6),t.j41(7,"button",5,0),t.bIt("click",function(){return t.eBV(o),t.Njj(h.openSidebar())}),t.qSk(),t.j41(9,"svg",6),t.nrm(10,"path",7),t.k0s()(),t.joV(),t.j41(11,"nav",8,1)(13,"ul")(14,"li")(15,"button",9),t.bIt("click",function(){return t.eBV(o),t.Njj(h.closeSidebar())}),t.qSk(),t.j41(16,"svg",6),t.nrm(17,"path",10),t.k0s()()(),t.Z7z(18,u,3,9,"li",11,t.Vm6),t.k0s()(),t.joV(),t.j41(20,"div",12),t.bIt("click",function(){return t.eBV(o),t.Njj(h.closeSidebar())}),t.k0s()(),t.SdG(21,1),t.k0s()}2&d&&(t.BMQ("data-theme",h.theme),t.R7$(3),t.vxM(h.src?3:-1),t.R7$(2),t.JRh(h.label),t.R7$(13),t.Dyx(h.links))},dependencies:[p.Wk,p.wQ,c.NgClass],styles:['@import"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&display=swap";*{margin:0;padding:0;box-sizing:border-box}:host{--primary-color: #ffffff;--secondary-color: color-mix(in srgb, black 20%, var(--primary-color));--accent-color: #7e64ff;--hover-color: color-mix(in srgb, black 20%, var(--secondary-color));--text-color: #000000;--card-bg: #f1f1f1}[data-theme=dark]{--primary-color: #11121a;--secondary-color: color-mix(in srgb, white 20%, var(--primary-color));--accent-color: #7e64ff;--hover-color: #272832;--text-color: #c9c9c9;--card-bg: #333333}.theme-layout{display:block;font-family:Poppins,Segoe UI,sans-serif;color:var(--text-color);scroll-behavior:smooth;min-height:100vh;min-height:100dvh;background-color:var(--primary-color);accent-color:var(--accent-color)}@media (prefers-color-scheme: dark){:host{--primary-color: #11121a;--secondary-color: color-mix(in srgb, white 20%, var(--primary-color));--accent-color: #7e64ff;--hover-color: #272832;--text-color: #c9c9c9;--card-bg: #333333}}main{padding:min(5em,7%)}main p{margin-top:.35em}.logo-link{margin-left:5px;margin-right:auto;padding:0 25px 0 0;border-radius:1000px;display:flex;align-items:center;gap:15px}.logo-link:hover{background-color:var(--hover-color)}header{display:flex;align-items:center;border-bottom:1px solid var(--hover-color)}nav{background-color:var(--primary-color);border-bottom:1px solid var(--hover-color)}nav ul{list-style:none;display:flex}nav .home-li{margin-right:auto}nav li{display:flex}nav a{display:flex;text-decoration:none;color:var(--text-color);padding:1em 2em;transition:background-color .15s ease}nav a:hover{background-color:var(--hover-color)}nav a.active-link{border-bottom:2px solid var(--text-color)}nav a.accent-link{background-color:var(--accent-color)}#open-sidebar-button{display:none;background:none;border:none;padding:1em;margin-left:auto;cursor:pointer}#close-sidebar-button{display:none;background:none;border:none;padding:1em;cursor:pointer}#overlay{background:#00000080;position:fixed;inset:0;z-index:9;display:none}@media screen and (max-width: 700px){#open-sidebar-button,#close-sidebar-button{display:block}nav{position:fixed;top:0;right:-100%;height:100vh;width:min(15em,100%);z-index:10;border-left:1px solid var(--hover-color);transition:right .3s ease-in-out;border-bottom:0}nav.show{right:0}nav.show~#overlay{display:block}nav ul{width:100%;flex-direction:column}nav a{width:100%;padding-left:2.5em}nav a.active-link{border-bottom:none}nav .home-li{margin-right:unset}}\n'],encapsulation:3})}}return l})()},4700:(k,f,a)=>{a.d(f,{V:()=>h});var c=a(177),p=a(884),e=a(4438);const t=[[["","slot","main"]]],_=["[slot='main']"],m=(o,i)=>({$implicit:o,index:i});function s(o,i){1&o&&e.eu8(0)}function g(o,i){if(1&o&&e.DNE(0,s,1,0,"ng-container",9),2&o){const r=e.XpG(),v=r.$implicit,b=r.$index;e.XpG();const y=e.sdS(12);e.Y8G("ngTemplateOutlet",y)("ngTemplateOutletContext",e.l_i(2,m,v,b))}}function w(o,i){1&o&&e.eu8(0)}function S(o,i){if(1&o&&(e.j41(0,"li")(1,"a",10),e.DNE(2,w,1,0,"ng-container",11),e.j41(3,"span"),e.EFF(4),e.k0s()()()),2&o){const r=e.XpG().$implicit;e.XpG();const v=e.sdS(18);e.R7$(),e.FS9("routerLink",r.path),e.R7$(),e.Y8G("ngTemplateOutlet",v),e.R7$(2),e.JRh(r.name)}}function C(o,i){if(1&o&&e.DNE(0,g,1,5,"ng-container")(1,S,5,3,"li"),2&o){const r=i.$implicit;e.vxM(null!=r&&r.subMenu?0:1)}}function u(o,i){1&o&&e.eu8(0)}function A(o,i){1&o&&e.eu8(0)}function l(o,i){if(1&o&&(e.j41(0,"li")(1,"a",10),e.EFF(2),e.k0s()()),2&o){const r=i.$implicit;e.R7$(),e.FS9("routerLink",r.path),e.R7$(),e.JRh(r.name)}}function x(o,i){if(1&o){const r=e.RV6();e.j41(0,"li")(1,"button",12),e.bIt("click",function(){const b=e.eBV(r).index,y=e.XpG();return e.Njj(y.toggleSubMenu(b))}),e.DNE(2,u,1,0,"ng-container",11),e.j41(3,"span"),e.EFF(4),e.k0s(),e.DNE(5,A,1,0,"ng-container",11),e.k0s(),e.j41(6,"ul",13)(7,"div"),e.Z7z(8,l,3,2,"li",null,e.Vm6),e.k0s()()()}if(2&o){const r=i.$implicit,v=i.index,b=e.XpG(),y=e.sdS(16),T=e.sdS(18);e.R7$(),e.AVh("rotate",b.activeSubMenuIndex===v),e.R7$(),e.Y8G("ngTemplateOutlet",T),e.R7$(2),e.JRh(r.name),e.R7$(),e.Y8G("ngTemplateOutlet",y),e.R7$(),e.AVh("show",b.activeSubMenuIndex===v),e.R7$(2),e.Dyx(r.subMenu)}}function n(o,i){1&o&&(e.qSk(),e.j41(0,"svg",7),e.nrm(1,"path",14),e.k0s())}function d(o,i){1&o&&(e.qSk(),e.j41(0,"svg",7),e.nrm(1,"path",15),e.k0s())}let h=(()=>{class o{constructor(){this.menus=[],this.isSidebarClosed=!1,this.isButtonRotated=!1,this.activeSubMenuIndex=null}toggleSidebar(){this.isSidebarClosed=!this.isSidebarClosed,this.isButtonRotated=!this.isButtonRotated,this.closeAllSubMenus()}toggleSubMenu(r){this.activeSubMenuIndex!==r&&this.closeAllSubMenus(),this.activeSubMenuIndex=this.activeSubMenuIndex===r?null:r}closeAllSubMenus(){this.activeSubMenuIndex=null}static{this.\u0275fac=function(v){return new(v||o)}}static{this.\u0275cmp=e.VBU({type:o,selectors:[["app-theme-sidenav"]],inputs:{menus:"menus"},ngContentSelectors:_,decls:19,vars:4,consts:[["subMenuTemplate",""],["arrowup",""],["label",""],[1,"sidenav-layout"],[1,"sidenav"],[1,"logo"],["id","toggle-btn",3,"click"],["xmlns","http://www.w3.org/2000/svg","height","24px","viewBox","0 -960 960 960","width","24px","fill","#5f6368"],["d","m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["routerLinkActive","active",3,"routerLink"],[4,"ngTemplateOutlet"],[1,"dropdown-btn",3,"click"],[1,"sub-menu"],["d","M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"],["d","M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h440q19 0 36 8.5t28 23.5l216 288-216 288q-11 15-28 23.5t-36 8.5H160Zm0-80h440l180-240-180-240H160v480Zm220-240Z"]],template:function(v,b){if(1&v){const y=e.RV6();e.NAR(t),e.j41(0,"div",3)(1,"nav",4)(2,"ul")(3,"li")(4,"span",5),e.EFF(5,"Coding"),e.k0s(),e.j41(6,"button",6),e.bIt("click",function(){return e.eBV(y),e.Njj(b.toggleSidebar())}),e.qSk(),e.j41(7,"svg",7),e.nrm(8,"path",8),e.k0s()()(),e.Z7z(9,C,2,1,null,null,e.Vm6),e.DNE(11,x,10,7,"ng-template",null,0,e.C5r),e.k0s()(),e.joV(),e.j41(13,"main"),e.SdG(14),e.k0s()(),e.DNE(15,n,2,0,"ng-template",null,1,e.C5r)(17,d,2,0,"ng-template",null,2,e.C5r)}2&v&&(e.R7$(),e.AVh("close",b.isSidebarClosed),e.R7$(5),e.AVh("rotate",b.isSidebarClosed),e.R7$(3),e.Dyx(b.menus))},dependencies:[c.NgTemplateOutlet,p.Wk],styles:['@import"https://fonts.googleapis.com/icon?family=Material+Icons";:host{color-scheme:light dark;--primary-color: light-dark(#edf2fc, #000106);--secondary-color: light-dark(#212121, #ffffff);--accent-color: var(--theme-color,#ff4321);--primary-color-light: light-dark(#ffffff, #1c1b1d);--shadow:0 4px 8px 0 rgba(0, 0, 0, .2);--shadow-hover: 0 4px 12px rgba(0, 0, 0, .2);--shadow-2: 0 0 20px rgba(0,0,0, .15);--white-color: #ffffff;--black-color: #000000;--dark-color: #000000;--light-color: #ffffff;--grey-color: #4b4f55;--dark-text-color: #f6f6f6;--light-text-color: #333333;--grey-text-color: #f6f6f6;--border-width: 1px;--border-radius: .375rem;--box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12);--base-font-size: 1rem;--font-size-xs: calc(var(--base-font-size) * .625);--font-size-sm: calc(var(--base-font-size) * .75);--font-size-md: calc(var(--base-font-size) * .875);--font-size-lg: calc(var(--base-font-size) * 1.5);--font-size-xl: calc(var(--base-font-size) * 2);--font-size-xxl: calc(var(--base-font-size) * 3);--shadow-xxs: 0 1px 2px rgba(134, 144, 162, .1);--shadow-xs: 0 2px 4px rgba(134, 144, 162, .15);--shadow-sm: 0 3px 6px rgba(134, 144, 162, .2);--shadow-md: 0 4px 8px rgba(134, 144, 162, .25);--shadow-lg: 0 6px 12px rgba(134, 144, 162, .3);--shadow-xl: 0 12px 24px rgba(134, 144, 162, .35);--shadow-xxl: 0 24px 48px rgba(134, 144, 162, .4);--shadow-glass: inset 5px 5px 12px #555, 5px 5px 12px rgb(235 235 235 / 16%);--base-radius: 1rem;--radius-none: 0;--radius-full: 9999px;--radius-xs: calc(var(--base-radius) * .125);--radius-sm: calc(var(--base-radius) * .25);--radius-md: calc(var(--base-radius) * .375);--radius-lg: calc(var(--base-radius) * .75);--radius-xl: calc(var(--base-radius) * 1.25);--radius-xxl: calc(var(--base-radius) * 1.5);--spacing-unit: 1rem;--font-family-1: system-ui, sans-serif;--font-family-2: Poppins, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;--font-family-3: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"}*{margin:0;padding:0;box-sizing:border-box}:host{font-family:var(--font-family-1);line-height:1.5rem}.sidenav-layout{min-height:100dvh;background-color:var(--primary-color);color:var(--secondary-color);display:grid;grid-template-columns:auto 1fr}.sidenav-layout .sidenav{height:100vh;width:250px;padding:5px 1em;background-color:var(--primary-color);border-right:1px solid var(--secondary-color);position:sticky;top:0;align-self:start;transition:.3s ease-in-out;overflow:hidden;text-wrap:nowrap}.sidenav-layout .sidenav.close{padding:5px;width:60px}.sidenav-layout .sidenav ul{list-style:none}.sidenav-layout .sidenav>ul>li:first-child{display:flex;justify-content:flex-end;margin-bottom:16px}.sidenav-layout .sidenav>ul>li:first-child .logo{font-weight:600}.sidenav-layout .sidenav ul li.active a,.sidenav-layout .sidenav ul li a.active{color:var(--accent-color)}.sidenav-layout .sidenav ul li.active a svg,.sidenav-layout .sidenav ul li a.active svg{fill:var(--accent-color)}.sidenav-layout .sidenav a,.sidenav-layout .sidenav .dropdown-btn,.sidenav-layout .sidenav .logo{border-radius:.5em;padding:.85em;text-decoration:none;color:var(--secondary-color);display:flex;align-items:center;gap:1em}.sidenav-layout .sidenav .dropdown-btn{width:100%;text-align:left;background:none;border:none;font:inherit;cursor:pointer}.sidenav-layout .sidenav svg{flex-shrink:0;color:var(--secondary-color)}.sidenav-layout .sidenav a span,.sidenav-layout .sidenav .dropdown-btn span{flex-grow:1}.sidenav-layout .sidenav a:hover,.sidenav-layout .sidenav .dropdown-btn:hover{background-color:var(--primary-color-light)}.sidenav-layout .sidenav .sub-menu{display:grid;grid-template-rows:0fr;transition:.3s ease-in-out}.sidenav-layout .sidenav .sub-menu>div{overflow:hidden}.sidenav-layout .sidenav .sub-menu.show{grid-template-rows:1fr}.sidenav-layout .sidenav .dropdown-btn svg{transition:.2s ease}.sidenav-layout .sidenav .rotate svg:last-child{rotate:180deg}.sidenav-layout .sidenav .sub-menu a{padding-left:2em}.sidenav-layout .sidenav #toggle-btn{margin-left:auto;padding:1em;border:none;border-radius:.5em;background:none;cursor:pointer}.sidenav-layout .sidenav #toggle-btn svg{transition:rotate .15s ease}.sidenav-layout .sidenav #toggle-btn:hover{background-color:var(--primary-color-light)}.sidenav-layout main{padding:min(30px,7%);overflow-x:hidden}\n'],encapsulation:3})}}return o})()},2080:(k,f,a)=>{a.d(f,{O:()=>C});var c=a(177),p=a(4438),t=a(6744);a(1536),a(3597),a(1024),a(4700),a(1979);let C=(()=>{class u{static{this.\u0275fac=function(x){return new(x||u)}}static{this.\u0275mod=p.$C({type:u})}static{this.\u0275inj=p.G2t({imports:[c.CommonModule,t.yi]})}}return u})()}}]);