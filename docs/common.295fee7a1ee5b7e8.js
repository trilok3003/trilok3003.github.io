"use strict";(self.webpackChunkportfolio_all_in_one=self.webpackChunkportfolio_all_in_one||[]).push([[2076],{5682:(F,v,r)=>{r.d(v,{lT:()=>u});var t=r(177),s=r(4438);r(7975);let u=(()=>{class p{static{this.\u0275fac=function(e){return new(e||p)}}static{this.\u0275mod=s.$C({type:p})}static{this.\u0275inj=s.G2t({imports:[t.MD]})}}return p})()},7975:(F,v,r)=>{r.d(v,{c:()=>_});var t=r(4438),s=r(177);function h(u,p){if(1&u&&(t.qSk(),t.nrm(0,"circle",6)),2&u){const n=p.$implicit,i=p.index,e=t.XpG(3);t.BMQ("r",e.radius)("stroke-dasharray",e.perimeter)("stroke-dashoffset",e.getOffset(i))("stroke",null==n?null:n.color)}}function f(u,p){if(1&u&&(t.qSk(),t.j41(0,"svg",4),t.DNE(1,h,1,4,"circle",5),t.k0s()),2&u){const n=t.XpG(2);t.R7$(),t.Y8G("ngForOf",n.items)}}function M(u,p){if(1&u&&(t.qSk(),t.nrm(0,"circle",8)),2&u){const n=p.$implicit,i=p.index,e=t.XpG(3);t.BMQ("r",e.radius)("stroke-dasharray",e.perimeter)("stroke-dashoffset",e.getOffset(i))("stroke",null==n?null:n.color)}}function a(u,p){if(1&u&&(t.qSk(),t.j41(0,"svg",4),t.DNE(1,M,1,4,"circle",7),t.k0s()),2&u){const n=t.XpG(2);t.R7$(),t.Y8G("ngForOf",n.items)}}function g(u,p){if(1&u&&(t.j41(0,"div",9),t.nrm(1,"div"),t.j41(2,"div",10),t.EFF(3),t.k0s()()),2&u){const n=p.$implicit,i=t.XpG(2);t.R7$(),t.ZvI("category__badge category__badge-",null==i.defaultConfig?null:i.defaultConfig.categoryBadge,""),t.xc7("background-color",n.color),t.R7$(2),t.Lme("",n.key," (",n.value,")")}}function m(u,p){if(1&u&&(t.qex(0),t.j41(1,"figure"),t.DNE(2,f,2,1,"svg",1)(3,a,2,1,"svg",1),t.j41(4,"div",2),t.DNE(5,g,4,7,"div",3),t.k0s()(),t.bVm()),2&u){const n=t.XpG();t.R7$(2),t.Y8G("ngIf","pie"===n.type),t.R7$(),t.Y8G("ngIf","donut"===n.type),t.R7$(2),t.Y8G("ngForOf",n.items)}}let _=(()=>{class u{constructor(){this.type="pie",this._total=0,this.radius=30,this.defaultConfig={categoryBadge:"square"},this._items=[]}get items(){return this._items}set items(n){this._items=n,this.updateTotal()}set configOptions(n){this.defaultConfig={...this.defaultConfig,...n}}set customPie(n){let{colors:i={},data:e}=n;e&&(this.items=Object.keys(e).map(o=>({key:o,value:e[o],color:i[o]??this.getRandomColor})))}set customPie2(n){let{colors:i={},data:e,labels:o}=n;e.length&&(this.items=e.map((l,y)=>({key:o[y],value:l,color:i[y]??this.getRandomColor})))}get perimeter(){return 2*Math.PI*this.radius}get getRandomColor(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}getOffset(n){let i=0;for(let e=0;e<n;e++)i+=this.items[e].value/this._total;return this.perimeter*i}updateTotal(){this.items.length>0&&(this._total=this.items.map(n=>n.value).reduce((n,i)=>n+i))}static{this.\u0275fac=function(i){return new(i||u)}}static{this.\u0275cmp=t.VBU({type:u,selectors:[["ng-pie-donut"]],inputs:{type:"type",items:"items",configOptions:"configOptions",customPie:"customPie",customPie2:"customPie2"},standalone:!1,decls:1,vars:1,consts:[[4,"ngIf"],["height","100%","viewBox","0 0 120 120","width","100%",4,"ngIf"],[1,"categories"],["class","category",4,"ngFor","ngForOf"],["height","100%","viewBox","0 0 120 120","width","100%"],["cx","60","cy","60","fill","transparent","stroke-width","60",4,"ngFor","ngForOf"],["cx","60","cy","60","fill","transparent","stroke-width","60"],["cx","60","cy","60","fill","transparent","stroke-width","20",4,"ngFor","ngForOf"],["cx","60","cy","60","fill","transparent","stroke-width","20"],[1,"category"],[1,"category__name"]],template:function(i,e){1&i&&t.DNE(0,m,6,3,"ng-container",0),2&i&&t.Y8G("ngIf",e.items.length)},dependencies:[s.Sq,s.bT],styles:["circle[_ngcontent-%COMP%]{transition:stroke-dasharray .3s ease;opacity:.7}circle[_ngcontent-%COMP%]:hover{opacity:1}figure[_ngcontent-%COMP%]{display:flex;gap:1rem;align-items:center}.categories[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.5rem}.category[_ngcontent-%COMP%]{display:flex;gap:.5rem;align-items:center}.category__name[_ngcontent-%COMP%]{color:#333;text-wrap:nowrap}.category__badge[_ngcontent-%COMP%]{width:12px;height:12px}.category__badge-circle[_ngcontent-%COMP%]{border-radius:50%}.category__badge-rectangle[_ngcontent-%COMP%]{width:24px}"]})}}return u})()},5464:(F,v,r)=>{r.d(v,{D:()=>h});var t=r(4438);const s=["*"];let h=(()=>{class f{constructor(){this.rowspan=1,this.colspan=1}static{this.\u0275fac=function(g){return new(g||f)}}static{this.\u0275cmp=t.VBU({type:f,selectors:[["ng-grid-list-item"]],hostVars:4,hostBindings:function(g,m){2&g&&t.xc7("--rowspan",m.rowspan)("--colspan",m.colspan)},inputs:{rowspan:"rowspan",colspan:"colspan"},exportAs:["ngGridListItem"],standalone:!1,ngContentSelectors:s,decls:1,vars:0,template:function(g,m){1&g&&(t.NAR(),t.SdG(0))},styles:["[_nghost-%COMP%]{grid-column:span var(--colspan);grid-row:span var(--rowspan)}.item1[_nghost-%COMP%]{padding:.5rem;background-color:#fff;border-radius:.25rem;box-shadow:0 1px #092d4240}.item2[_nghost-%COMP%]{padding:.5rem;background-color:#dfe3e6;border-radius:.2rem}.item3[_nghost-%COMP%]{padding:.5rem;border:1px solid #ccc;box-shadow:2px 2px 6px #0000004d}.item4[_nghost-%COMP%]{aspect-ratio:16/9;border-radius:8px;background:#303035}"],changeDetection:0})}}return f})()},9064:(F,v,r)=>{r.d(v,{E:()=>h});var t=r(4438);const s=["*"];let h=(()=>{class f{constructor(a){this.ele=a,this.rowHeight="auto",this.gutterSize="1px"}ngAfterContentInit(){this._checkCols(),this.updateCustomProperty()}updateCustomProperty(){let a=`repeat(${this.cols}, 1fr)`;this.minColumnWidth&&(this.ele.nativeElement.style.setProperty("--minColumnWidth",this.minColumnWidth),a="repeat(auto-fit, minmax(min(var(--minColumnWidth), 100%), 1fr))"),this.ele.nativeElement.setAttribute("style",`\n      display: grid;\n      grid-template-columns: ${a};\n      grid-gap: ${this.gutterSize};\n      grid-template-rows: ${this.rowHeight};\n    `)}_checkCols(){if(!this.cols)throw Error('ng-grid-list: must pass in number of columns. Example: <ng-grid-list cols="3">')}static{this.\u0275fac=function(g){return new(g||f)(t.rXU(t.aKT))}}static{this.\u0275cmp=t.VBU({type:f,selectors:[["ng-grid-list"]],inputs:{cols:"cols",rowHeight:"rowHeight",gutterSize:"gutterSize",minColumnWidth:"minColumnWidth"},exportAs:["ngGridList"],standalone:!1,ngContentSelectors:s,decls:1,vars:0,template:function(g,m){1&g&&(t.NAR(),t.SdG(0))},styles:["[_nghost-%COMP%]{--minColumnWidth: 256px}"],changeDetection:0})}}return f})()},9351:(F,v,r)=>{r.d(v,{n:()=>s});var t=r(4438);let s=(()=>{class h{static{this.\u0275fac=function(a){return new(a||h)}}static{this.\u0275mod=t.$C({type:h})}static{this.\u0275inj=t.G2t({})}}return h})()},4036:(F,v,r)=>{r.d(v,{Rv:()=>n,cV:()=>i,hP:()=>p,qG:()=>g,vC:()=>y,zO:()=>_});var t=r(9969);function g(D=":enter",P="400ms ease-out"){return[(0,t.kY)("* => *",[(0,t.P)(D,[(0,t.iF)({opacity:0,transform:"translateY(-5px)"}),(0,t.yc)("60ms",[(0,t.i0)(P,(0,t.iF)({opacity:1,transform:"translateY(0px)"}))])],{optional:!0})])]}(0,t.Os)([(0,t.P)(".whole",(0,t.i0)("5s ease-in",(0,t.i7)([(0,t.iF)({transform:"*",offset:0}),(0,t.iF)({transform:"rotateY(90deg)",offset:.12}),(0,t.iF)({transform:"rotateY(270deg)",offset:.27}),(0,t.iF)({transform:"rotateY(360deg)",offset:.5}),(0,t.iF)({transform:"rotateY(90deg)",offset:.62}),(0,t.iF)({transform:"rotateY(180deg)",offset:.75}),(0,t.iF)({transform:"rotateY(270deg)",offset:.87}),(0,t.iF)({transform:"rotateY(360deg)",offset:1})])))]),(0,t.hZ)("slideIn",[(0,t.wk)("*",(0,t.iF)({"overflow-y":"hidden"})),(0,t.wk)("void",(0,t.iF)({"overflow-y":"hidden"})),(0,t.kY)("* => void",[(0,t.iF)({height:"*"}),(0,t.i0)(250,(0,t.iF)({height:0}))]),(0,t.kY)("void => *",[(0,t.iF)({height:"0"}),(0,t.i0)(250,(0,t.iF)({height:"*"}))])]);const _=()=>(0,t.hZ)("slideInOut",[(0,t.wk)("in",(0,t.iF)({transform:"translate3d(0, 0, 0)"})),(0,t.wk)("out",(0,t.iF)({transform:"translate3d(100%, 0, 0)"})),(0,t.kY)("in => out",(0,t.i0)("400ms ease-in-out")),(0,t.kY)("out => in",(0,t.i0)("400ms ease-in-out"))]),p=()=>(0,t.hZ)("slides",[(0,t.kY)(":enter",[(0,t.iF)({transform:"translateX(100%)"}),(0,t.i0)("500ms ease-in",(0,t.iF)({transform:"translateX(0%)"}))]),(0,t.kY)(":leave",[(0,t.i0)("500ms ease-in",(0,t.iF)({transform:"translateX(100%)"}))])]),n=()=>(0,t.hZ)("fade",[(0,t.wk)("void",(0,t.iF)({opacity:0})),(0,t.kY)("void <=> *",[(0,t.i0)("0.5s ease-in-out")])]),i=()=>(0,t.hZ)("thumbState",[(0,t.wk)("inactive",(0,t.iF)({opacity:0,transform:"scale(0.5)"})),(0,t.wk)("active",(0,t.iF)({opacity:1,transform:"scale(1)"})),(0,t.kY)("inactive => active",(0,t.i0)("500ms cubic-bezier(0.785, 0.135, 0.15, 0.86)")),(0,t.kY)("active => inactive",(0,t.i0)("500ms cubic-bezier(0.785, 0.135, 0.15, 0.86)"))]),o=[(0,t.P)(":enter, :leave",(0,t.iF)({position:"fixed",width:"100%"}),{optional:!0}),(0,t.Os)([(0,t.P)(":enter",[(0,t.iF)({transform:"translateX(-100%)"}),(0,t.i0)(".3s ease-out",(0,t.iF)({transform:"translateX(0%)"}))],{optional:!0}),(0,t.P)(":leave",[(0,t.iF)({transform:"translateX(0%)"}),(0,t.i0)(".3s ease-out",(0,t.iF)({transform:"translateX(100%)"}))],{optional:!0})])],l=[(0,t.P)(":enter, :leave",(0,t.iF)({position:"fixed",width:"100%"}),{optional:!0}),(0,t.Os)([(0,t.P)(":enter",[(0,t.iF)({transform:"translateX(100%)"}),(0,t.i0)(".3s ease-out",(0,t.iF)({transform:"translateX(0%)"}))],{optional:!0}),(0,t.P)(":leave",[(0,t.iF)({transform:"translateX(0%)"}),(0,t.i0)(".3s ease-out",(0,t.iF)({transform:"translateX(-100%)"}))],{optional:!0})])],y=()=>(0,t.hZ)("animationImageSlider",[(0,t.kY)(":increment",l),(0,t.kY)(":decrement",o)])},8417:(F,v,r)=>{r.r(v),r.d(v,{UsersComponent:()=>_});var t=r(4438),s=r(8065),h=r(884),f=r(2824),M=r(3810);function a(u,p){if(1&u&&(t.nrm(0,"img",5),t.j41(1,"a",6),t.EFF(2),t.k0s()),2&u){const n=p.item;t.Y8G("src",n.avatar_url,t.B4B),t.R7$(),t.Mz_("routerLink","/github/details/",n.login,""),t.R7$(),t.SpI("",n.login," ")}}function g(u,p){1&u&&(t.j41(0,"th"),t.EFF(1,"Image"),t.k0s(),t.j41(2,"th"),t.EFF(3,"Url"),t.k0s(),t.j41(4,"th"),t.EFF(5,"Image"),t.k0s(),t.j41(6,"th"),t.EFF(7,"Url"),t.k0s())}function m(u,p){if(1&u&&(t.j41(0,"td"),t.nrm(1,"img",5),t.k0s(),t.j41(2,"td")(3,"a",6),t.EFF(4),t.k0s()(),t.j41(5,"td"),t.nrm(6,"img",5),t.k0s(),t.j41(7,"td")(8,"a",6),t.EFF(9),t.k0s()()),2&u){const n=p.item;t.R7$(),t.Y8G("src",n.avatar_url,t.B4B),t.R7$(2),t.Mz_("routerLink","/github/details/",n.login,""),t.R7$(),t.SpI("",n.login," "),t.R7$(2),t.Y8G("src",n.avatar_url,t.B4B),t.R7$(2),t.Mz_("routerLink","/github/details/",n.login,""),t.R7$(),t.SpI("",n.login," ")}}let _=(()=>{class u{constructor(n){this.userService=n,this.users=[]}ngOnInit(){this.userService.getAllUsers().subscribe(n=>this.users=n)}static{this.\u0275fac=function(i){return new(i||u)(t.rXU(s.p))}}static{this.\u0275cmp=t.VBU({type:u,selectors:[["app-users"]],standalone:!1,decls:9,vars:6,consts:[["defaultListCardTemplate",""],["th",""],["td",""],[2,"color","skyblue"],[3,"items","cardListTemplateRef","tableTdTemplateRef","tableThTemplateRef","cardColor","table"],["alt","avatar",3,"src"],[3,"routerLink"]],template:function(i,e){if(1&i&&(t.j41(0,"h1",3),t.EFF(1,"Github users!"),t.k0s(),t.nrm(2,"app-card-list-table",4),t.DNE(3,a,3,4,"ng-template",null,0,t.C5r)(5,g,8,0,"ng-template",null,1,t.C5r)(7,m,10,8,"ng-template",null,2,t.C5r)),2&i){const o=t.sdS(4),l=t.sdS(6),y=t.sdS(8);t.R7$(2),t.Y8G("items",e.users)("cardListTemplateRef",o)("tableTdTemplateRef",y)("tableThTemplateRef",l)("cardColor","rose")("table","custom")}},dependencies:[h.Wk,f.C,M.Yx],styles:["[_nghost-%COMP%]{display:block;background:#ededfc;padding:.2rem}"]})}}return u})()},6022:(F,v,r)=>{r.r(v),r.d(v,{UsersComponent:()=>f});var t=r(4438),s=r(177);function h(M,a){if(1&M&&(t.j41(0,"tr")(1,"td"),t.EFF(2),t.k0s()()),2&M){const g=a.$implicit;t.R7$(2),t.JRh(g.name)}}let f=(()=>{class M{constructor(){}ngOnInit(){}static{this.\u0275fac=function(m){return new(m||M)}}static{this.\u0275cmp=t.VBU({type:M,selectors:[["app-users"]],inputs:{users:"users"},standalone:!1,decls:4,vars:1,consts:[[1,"table"],[4,"ngFor","ngForOf"]],template:function(m,_){1&m&&(t.j41(0,"table",0),t.nrm(1,"thead"),t.j41(2,"tbody"),t.DNE(3,h,3,1,"tr",1),t.k0s()()),2&m&&(t.R7$(3),t.Y8G("ngForOf",_.users))},dependencies:[s.Sq],encapsulation:2,changeDetection:0})}}return M})()},8718:(F,v,r)=>{r.d(v,{k:()=>M});var t=r(9437),s=r(8810),h=r(4438),f=r(1626);let M=(()=>{class a{constructor(m){this.http=m}get(m,_){const u=this.getFullUrl(m);return this.http.get(u,_).pipe((0,t.W)(this.handleError))}post(m,_,u){const p=this.getFullUrl(m);return this.http.post(p,_,u).pipe((0,t.W)(this.handleError))}put(m,_,u){const p=this.getFullUrl(m);return this.http.put(p,_,u).pipe((0,t.W)(this.handleError))}delete(m,_){const u=this.getFullUrl(m);return this.http.delete(u,_).pipe((0,t.W)(this.handleError))}getFullUrl(m){return m}handleError(m){let _="An error occurred.";return _=m.error instanceof ErrorEvent?m.error.message:`Error Code: ${m.status}\nMessage: ${m.message}`,console.error(_),(0,s.$)(()=>m)}static{this.\u0275fac=function(_){return new(_||a)(h.KVO(f.Qq))}}static{this.\u0275prov=h.jDH({token:a,factory:a.\u0275fac,providedIn:"root"})}}return a})()},1622:(F,v,r)=>{r.d(v,{d:()=>m});var t=r(3726),s=r(9172),h=r(6354),f=r(3294),M=r(4668),a=r(4438);const g=new Map([["xl","(min-width: 1200px)"],["lg","(min-width: 992px)"],["md","(min-width: 768px)"],["sm","(min-width: 576px)"],["xs","(min-width: 0px)"]]);let m=(()=>{class _{constructor(){this._size$=(0,t.R)(window,"resize").pipe((0,s.Z)(this.getScreenSize()),(0,h.T)(p=>this.getScreenSize()),(0,f.F)(),(0,M.t)(1))}get size$(){return this._size$}getScreenSize(){const[[p="never"]]=Array.from(g.entries()).filter(([n,i])=>window.matchMedia(i).matches);return p}static{this.\u0275fac=function(n){return new(n||_)}}static{this.\u0275prov=a.jDH({token:_,factory:_.\u0275fac,providedIn:"root"})}}return _})()},5001:(F,v,r)=>{r.r(v),r.d(v,{CardComponent:()=>s});var t=r(4438);let s=(()=>{class h{constructor(){}ngOnInit(){}static{this.\u0275fac=function(a){return new(a||h)}}static{this.\u0275cmp=t.VBU({type:h,selectors:[["app-card"]],standalone:!1,decls:8,vars:0,consts:[[1,"card"],[1,"content"],[1,"heading"],[1,"para"],[1,"btn"]],template:function(a,g){1&a&&(t.j41(0,"div",0)(1,"div",1)(2,"p",2),t.EFF(3,"Card Hover Effect "),t.k0s(),t.j41(4,"p",3),t.EFF(5," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi laboriosam at voluptas minus culpa deserunt delectus sapiente inventore pariatur "),t.k0s(),t.j41(6,"button",4),t.EFF(7,"Read more"),t.k0s()()())},styles:['*{box-sizing:border-box}.card{position:relative;display:flex;align-items:center;justify-content:center;width:320px;box-shadow:0 10px 20px #0003;padding:32px;overflow:hidden;border-radius:10px;transition:all .5s cubic-bezier(.23,1,.32,1)}.card:before{content:"";position:absolute;left:0;bottom:0;width:100%;height:5px;background:linear-gradient(-45deg,#f89b29,#ff0f7b);z-index:-1;transition:all .5s cubic-bezier(.23,1,.32,1)}.card:hover{box-shadow:none}.card:hover:before{height:100%}.card:hover .btn{color:#212121;background:#e8e8e8}.content{display:flex;flex-direction:column;align-items:flex-start;gap:20px;color:#e8e8e8;transition:all .5s cubic-bezier(.23,1,.32,1)}.content .heading{font-weight:700;font-size:32px}.content .para{line-height:1.5}.content .btn{color:#e8e8e8;text-decoration:none;padding:10px;font-weight:600;border:none;cursor:pointer;background:linear-gradient(-45deg,#f89b29,#ff0f7b);border-radius:5px;box-shadow:0 5px 10px #0003}.content .btn:hover{outline:2px solid #e8e8e8;background:transparent;color:#e8e8e8}.content .btn:active{box-shadow:none}\n'],encapsulation:3})}}return h})()},8513:(F,v,r)=>{r.d(v,{w:()=>M});var t=r(4438),s=r(177);const h=a=>({"d-none":a});function f(a,g){if(1&a){const m=t.RV6();t.j41(0,"div",5),t.bIt("click",function(){const u=t.eBV(m).$implicit,p=t.XpG();return t.Njj(p.clicked.emit(u))}),t.EFF(1),t.k0s()}if(2&a){const m=g.$implicit;t.R7$(),t.JRh(m)}}let M=(()=>{class a{constructor(){this.showMenu=!1,this.items=[],this.clicked=new t.bkB}ngOnInit(){}toggleMenu(){this.showMenu=!this.showMenu}static{this.\u0275fac=function(_){return new(_||a)}}static{this.\u0275cmp=t.VBU({type:a,selectors:[["app-help-icon"]],inputs:{items:"items"},outputs:{clicked:"clicked"},standalone:!1,decls:6,vars:7,consts:[[1,"help-icon-wrapper",3,"click"],[1,"help-icon"],[1,"mask",3,"ngClass"],[1,"menu",3,"ngClass"],["class","menu-item",3,"click",4,"ngFor","ngForOf"],[1,"menu-item",3,"click"]],template:function(_,u){1&_&&(t.j41(0,"div",0),t.bIt("click",function(){return u.toggleMenu()}),t.j41(1,"div",1),t.EFF(2,"?"),t.k0s(),t.nrm(3,"div",2),t.j41(4,"div",3),t.DNE(5,f,2,1,"div",4),t.k0s()()),2&_&&(t.R7$(3),t.Y8G("ngClass",t.eq3(3,h,!u.showMenu)),t.R7$(),t.Y8G("ngClass",t.eq3(5,h,!u.showMenu)),t.R7$(),t.Y8G("ngForOf",u.items))},dependencies:[s.YU,s.Sq],styles:[".d-none[_ngcontent-%COMP%]{display:none}.help-icon-wrapper[_ngcontent-%COMP%]{position:fixed;bottom:10px;right:10px;height:40px;width:40px;z-index:1000}.help-icon[_ngcontent-%COMP%]{height:100%;width:100%;border-radius:50%;background-color:#005dab;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:28px;cursor:pointer;z-index:2}.mask[_ngcontent-%COMP%]{position:fixed;height:100%;width:100%;background-color:#30313266;top:0;left:0;z-index:1}.menu[_ngcontent-%COMP%]{z-index:2;position:fixed;bottom:100px;right:40px}.menu-item[_ngcontent-%COMP%]{cursor:pointer;background-color:#fff;padding:10px;margin:5px;color:#000!important}"]})}}return a})()},8785:(F,v,r)=>{r.d(v,{c:()=>a});var t=r(9969),s=r(4438),h=r(177);const f=["*"];function M(g,m){1&g&&(s.qex(0),s.SdG(1),s.bVm())}let a=(()=>{class g{constructor(_){this.element=_}get grow(){return{value:this.expend,params:{startHeight:this.startHeight}}}setStartHeight(){this.startHeight=this.element.nativeElement.clientHeight}ngOnChanges(){this.setStartHeight()}static{this.\u0275fac=function(u){return new(u||g)(s.rXU(s.aKT))}}static{this.\u0275cmp=s.VBU({type:g,selectors:[["app-smoothly-animate"]],hostVars:1,hostBindings:function(u,p){2&u&&s.zvX("@grow",p.grow)},inputs:{expend:"expend"},standalone:!1,features:[s.OA$],ngContentSelectors:f,decls:1,vars:1,consts:[[4,"ngIf"]],template:function(u,p){1&u&&(s.NAR(),s.DNE(0,M,2,0,"ng-container",0)),2&u&&s.Y8G("ngIf",p.expend)},dependencies:[h.bT],styles:["[_nghost-%COMP%]{display:block;overflow:hidden}"],data:{animation:[(0,t.hZ)("grow",[(0,t.kY)("void <=> *",[]),(0,t.kY)("* <=> *",[(0,t.iF)({height:"{{startHeight}}px",opacity:0}),(0,t.i0)(".5s ease")],{params:{startHeight:0}})])]}})}}return g})()},2531:(F,v,r)=>{r.d(v,{L:()=>h});var t=r(177),s=r(4438);let h=(()=>{class f{static{this.\u0275fac=function(g){return new(g||f)}}static{this.\u0275mod=s.$C({type:f})}static{this.\u0275inj=s.G2t({imports:[t.MD]})}}return f})()},9884:(F,v,r)=>{r.d(v,{X:()=>h});var t=r(177),s=r(4438);let h=(()=>{class f{static{this.\u0275fac=function(g){return new(g||f)}}static{this.\u0275mod=s.$C({type:f})}static{this.\u0275inj=s.G2t({imports:[t.MD]})}}return f})()},3538:(F,v,r)=>{r.d(v,{A:()=>_});var t=r(4572),s=r(4668),h=r(8810),f=r(6354),M=r(9437),a=r(1453),g=r(4438),m=r(8910);let _=(()=>{class u{constructor(n){this.abstractFirebaseDb=n,this.basePath="topics-db",this.postEndpoint="posts",this.categoryEndpoint="categories",this.postsWithCategory$=(0,t.z)([this.getPosts(),this.getCategories()]).pipe((0,f.T)(([i,e])=>i.map(o=>({...o,categoryName:e.find(l=>l.key===o.categoryId)?.title}))),(0,M.W)(this.handleError),(0,s.t)(1))}createPost(n){return this.abstractFirebaseDb.create(`${this.basePath}/${this.postEndpoint}`,n)}updatePost(n,i){return this.abstractFirebaseDb.update(`${this.basePath}/${this.postEndpoint}/${n}`,i)}getPosts(){return this.abstractFirebaseDb.readRealtime$(`${this.basePath}/${this.postEndpoint}`)}getPost(n){return this.abstractFirebaseDb.readRealtimeOriginal$(`${this.basePath}/${this.postEndpoint}/${n}`)}createCategory(n){return this.abstractFirebaseDb.create(`${this.basePath}/${this.categoryEndpoint}`,n)}getCategories(){return this.abstractFirebaseDb.readRealtime$(`${this.basePath}/${this.categoryEndpoint}`)}getCategory(n){return this.abstractFirebaseDb.readRealtimeOriginal$(`${this.basePath}/${this.categoryEndpoint}/${n}`)}getPostsByCategoryId(n){return this.getPosts().pipe((0,f.T)(i=>i.filter(e=>e.categoryId===n)))}filterPosts(n,i,e="All",o="desc"){return n=n??"",this.postsWithCategory$.pipe((0,f.T)(l=>a.Q.sortArray(l,"createdAt",o).filter(y=>{const D=y.categoryId.includes(n),P=y.title?.toLowerCase().includes(i.toLowerCase()),O=y.body?.toLowerCase().includes(i.toLowerCase());return D&&(P||O)&&("All"===e||y.status===e)})))}handleError(n){return(0,h.$)(()=>"unknown error occured. Please Try Again")}manageData(n,i){let e;switch(n){case"categories_wise":e=a.Q.groupWise(i,o=>o.categoryId,o=>o.categoryName);break;case"status_wise":e=a.Q.groupWise(i,o=>o.status,o=>o.status);break;case"date_wise":e=a.Q.groupWise(i,o=>a.Q.formatDate(o.createdAt),o=>a.Q.formatDate(o.createdAt))}return e}static{this.\u0275fac=function(i){return new(i||u)(g.KVO(m.W))}}static{this.\u0275prov=g.jDH({token:u,factory:u.\u0275fac,providedIn:"root"})}}return u})()},1453:(F,v,r)=>{function a(n,i){return n.reduce((e,o)=>{const l=o[i];return e[l]||(e[l]=[]),e[l].push(o),e},{})}r.d(v,{Q:()=>p});class p{static groupWise(i,e,o){return function t(n,i,e){const o=n.reduce((l,y)=>{const D=i(y),P=e(y);return l[D]||(l[D]={key:D,title:P,data:[]}),l[D].data.push(y),l},{});return Object.values(o)}(i,e,o)}static sortArray(i,e,o){return function s(n,i,e){return n.sort((o,l)=>{const y=o[i]<l[i]?-1:o[i]>l[i]?1:0;return"asc"===e?y:-y})}(i,e,o)}static searchBy(i,e,o){return function h(n,i,e){return n.filter(o=>o[i].toString().toLowerCase().includes(e.toLowerCase()))}(i,e,o)}static filterData(i,e,o){return function f(n,i,e){return n.filter(o=>e(o[i]))}(i,e,o)}static filterBy(i,e){return function M(n,i){return n.filter(e=>i(e))}(i,e)}static groupBy(i,e){return a(i,e)}static calculateTotal(i,e){return function g(n,i){return n.reduce((e,o)=>e+ +o[i],0)}(i,e)}static aggregateData(i,e,o,l){return function m(n,i,e,o){const l=a(n,i),y={};for(const D in l)y[D]=o(l[D],e);return y}(i,e,o,l)}static formatDateSplitT(i){return function _(n){return new Date(n).toISOString().split("T")[0]}(i)}static formatDate(i){return function u(n){const i=new Date(n),e=String(i.getMonth()+1).padStart(2,"0");return`${String(i.getDate()).padStart(2,"0")}-${e}-${i.getFullYear()}`}(i)}}},1417:(F,v,r)=>{r.d(v,{u:()=>h});var t=r(4438),s=r(8910);let h=(()=>{class f{constructor(){this.abstractFirebaseDb=(0,t.WQX)(s.W)}get fullPath(){return`${this.basePath}/${this.endpoint}`}create(a){return this.abstractFirebaseDb.create(this.fullPath,a)}get$(){return this.abstractFirebaseDb.readRealtime$(this.fullPath)}getById(a){return this.abstractFirebaseDb.readRealtimeOriginal$(`${this.fullPath}/${a}`)}update(a,g){return this.abstractFirebaseDb.update(`${this.fullPath}/${a}`,g)}remove(a){return this.abstractFirebaseDb.remove(`${this.fullPath}/${a}`)}set(a,g){return this.abstractFirebaseDb.set(`${this.fullPath}/${a}`,g)}getKeys$(a=""){return this.abstractFirebaseDb.getKeys$(`${this.fullPath}/${a}`)}getKeys(a=""){return this.abstractFirebaseDb.getKeys(`${this.fullPath}/${a}`)}readOnce(a=""){return this.abstractFirebaseDb.readOnce(`${this.fullPath}/${a}`)}static{this.\u0275fac=function(g){return new(g||f)}}static{this.\u0275prov=t.jDH({token:f,factory:f.\u0275fac,providedIn:"root"})}}return f})()},8593:(F,v,r)=>{r.d(v,{N:()=>M});var t=r(177),s=r(4438);let h=(()=>{class a{static{this.\u0275fac=function(_){return new(_||a)}}static{this.\u0275mod=s.$C({type:a})}static{this.\u0275inj=s.G2t({imports:[t.MD]})}}return a})();var f=r(884);let M=(()=>{class a{static{this.\u0275fac=function(_){return new(_||a)}}static{this.\u0275mod=s.$C({type:a})}static{this.\u0275inj=s.G2t({imports:[t.MD,f.iI,h,h]})}}return a})()},9104:(F,v,r)=>{r.d(v,{F:()=>h});var t=r(4438),s=r(177);let h=(()=>{class f{constructor(a){this.location=a}onClick(){this.location.back()}static{this.\u0275fac=function(g){return new(g||f)(t.rXU(s.aZ))}}static{this.\u0275dir=t.FsC({type:f,selectors:[["","appBackButton",""]],hostBindings:function(g,m){1&g&&t.bIt("click",function(){return m.onClick()})},standalone:!1})}}return f})()},2824:(F,v,r)=>{r.d(v,{C:()=>s});var t=r(4438);let s=(()=>{class h{constructor(M){this.ele=M,M.nativeElement.alt||(M.nativeElement.alt="image info")}static{this.\u0275fac=function(a){return new(a||h)(t.rXU(t.aKT))}}static{this.\u0275dir=t.FsC({type:h,selectors:[["img"]],standalone:!1})}}return h})()},5256:(F,v,r)=>{r.d(v,{$M:()=>D,Kg:()=>T,Nj:()=>m,Oc:()=>n,dv:()=>f,gk:()=>w,hv:()=>y,jL:()=>o,l_:()=>p,nq:()=>P,tr:()=>i,vm:()=>O,x4:()=>M});var t=r(4438),s=r(177),h=r(9417);let f=(()=>{class c{constructor(d,E){this.templateRef=d,this.vcr=E,this.show=!1}set angIf(d){this.show=d,this.showTemplate()}ngOnInit(){this.showTemplate()}showTemplate(){this.vcr.clear(),this.show?this.vcr.createEmbeddedView(this.templateRef):this.angIfElse&&this.vcr.createEmbeddedView(this.angIfElse)}}return c.\u0275fac=function(d){return new(d||c)(t.rXU(t.C4Q),t.rXU(t.c1b))},c.\u0275dir=t.FsC({type:c,selectors:[["","angIf",""]],inputs:{angIf:"angIf",angIfElse:"angIfElse"},standalone:!1}),c})(),M=(()=>{class c{constructor(d,E){this.templateRef=d,this.vcr=E,this.items=[]}set angForOf(d){this.items=d,this.renderItems()}static ngTemplateContextGuard(d,E){return!0}ngOnInit(){this.renderItems()}renderItems(){this.vcr.clear(),this.items.map((d,E,b)=>{this.vcr.createEmbeddedView(this.templateRef,{$implicit:d,index:E,count:b.length,first:0===E,last:E===b.length-1,even:!(1&~E),odd:!(1&E)})})}}return c.\u0275fac=function(d){return new(d||c)(t.rXU(t.C4Q),t.rXU(t.c1b))},c.\u0275dir=t.FsC({type:c,selectors:[["","angFor",""]],inputs:{angForOf:"angForOf"},standalone:!1}),c})();class g{constructor(C){this.dir=C}get ngLet(){return this.dir.ngLet}}let m=(()=>{class c{constructor(d,E){d.createEmbeddedView(E,new g(this))}}return c.\u0275fac=function(d){return new(d||c)(t.rXU(t.c1b),t.rXU(t.C4Q))},c.\u0275dir=t.FsC({type:c,selectors:[["","ngLet",""]],inputs:{ngLet:"ngLet"},standalone:!1}),c})(),p=(()=>{class c{constructor(){this.rel="noopener"}}return c.\u0275fac=function(d){return new(d||c)},c.\u0275dir=t.FsC({type:c,selectors:[["","ngSafeLink",""]],hostVars:1,hostBindings:function(d,E){2&d&&t.Mr5("rel",E.rel)},standalone:!1}),c})(),n=(()=>{class c{constructor(){this.rel="noopener"}}return c.\u0275fac=function(d){return new(d||c)},c.\u0275dir=t.FsC({type:c,selectors:[["a","target","_blank",3,"rel","noopener"]],hostVars:1,hostBindings:function(d,E){2&d&&t.Mr5("rel",E.rel)},standalone:!1}),c})(),i=(()=>{class c{constructor(d){this.ngControl=d}set disabledControl(d){this.ngControl.control[d?"disable":"enable"]()}}return c.\u0275fac=function(d){return new(d||c)(t.rXU(h.vO))},c.\u0275dir=t.FsC({type:c,selectors:[["","formControlName",""],["","formControl","","disabledControl",""]],inputs:{disabledControl:"disabledControl"},standalone:!1}),c})(),o=(()=>{class c{constructor(d){this.ngFor=d,this.ngFor.ngForTrackBy=(E,b)=>b.id}}return c.\u0275fac=function(d){return new(d||c)(t.rXU(s.Sq,1))},c.\u0275dir=t.FsC({type:c,selectors:[["","ngForTrackById",""]],standalone:!1}),c})(),y=(()=>{class c{}return c.\u0275fac=function(d){return new(d||c)},c.\u0275mod=t.$C({type:c}),c.\u0275inj=t.G2t({imports:[s.MD]}),c})(),D=(()=>{class c{constructor(d){this.el=d}get x(){return this.el.nativeElement?.getBoundingClientRect()?.x}}return c.\u0275fac=function(d){return new(d||c)(t.rXU(t.aKT))},c.\u0275dir=t.FsC({type:c,selectors:[["","angStickyTable",""]],standalone:!1}),c})(),P=(()=>{class c{constructor(d,E){this.el=d,this.table=E}ngAfterViewInit(){const d=this.el.nativeElement,{x:E}=d.getBoundingClientRect();d.style.position="sticky",d.style.left=this.table?E-this.table.x+"px":"0px",d.style.background="#ccc",d.style.zIndex="1000"}}return c.\u0275fac=function(d){return new(d||c)(t.rXU(t.aKT),t.rXU(D,8))},c.\u0275dir=t.FsC({type:c,selectors:[["","angSticky",""]],standalone:!1}),c})(),O=(()=>{class c{}return c.\u0275fac=function(d){return new(d||c)},c.\u0275mod=t.$C({type:c}),c.\u0275inj=t.G2t({imports:[s.MD]}),c})(),w=(()=>{class c{constructor(d){this.elementRef=d,this.minWidth="5em",this.maxWidth="1fr",this.columnGap="0.5em",this.rowGap="0.5em",this.gap="0.5em"}get styles(){return`\n     display: grid;\n     grid-template-columns: repeat(auto-fit, minmax(${this.minWidth},${this.maxWidth}));\n     grid-column-gap: ${this.columnGap};\n     grid-row-gap: ${this.rowGap};\n     grid-gap: ${this.gap}`}ngOnInit(){}}return c.\u0275fac=function(d){return new(d||c)(t.rXU(t.aKT))},c.\u0275dir=t.FsC({type:c,selectors:[["","angGrid",""]],hostVars:2,hostBindings:function(d,E){2&d&&t.Aen(E.styles)},inputs:{minWidth:"minWidth",maxWidth:"maxWidth",columnGap:"columnGap",rowGap:"rowGap",gap:"gap"},standalone:!1}),c})(),T=(()=>{class c{}return c.\u0275fac=function(d){return new(d||c)},c.\u0275mod=t.$C({type:c}),c.\u0275inj=t.G2t({imports:[s.MD]}),c})()},1848:(F,v,r)=>{r.d(v,{DZ:()=>p,LI:()=>u,Yc:()=>i});var t=r(4438);r(345);let u=(()=>{class e{transform(l,y){return l?y?(y=y.toLowerCase(),l.filter(function(D){return JSON.stringify(D).toLowerCase().includes(y)})):l:[]}}return e.\u0275fac=function(l){return new(l||e)},e.\u0275pipe=t.EJ8({name:"angFilter",type:e,pure:!0,standalone:!1}),e})(),p=(()=>{class e{transform(l,y,D){return l?D?""==D||null==D?[]:l.filter(P=>P[y]===D):l:[]}}return e.\u0275fac=function(l){return new(l||e)},e.\u0275pipe=t.EJ8({name:"angFilterByKey",type:e,pure:!0,standalone:!1}),e})(),i=(()=>{class e{}return e.\u0275fac=function(l){return new(l||e)},e.\u0275mod=t.$C({type:e}),e.\u0275inj=t.G2t({}),e})()}}]);