"use strict";(self.webpackChunkportfolio_all_in_one=self.webpackChunkportfolio_all_in_one||[]).push([[8592],{6506:(C,y,r)=>{r.r(y),r.d(y,{UsersComponent:()=>b});var t=r(5e3),n=r(5665),f=r(4202),_=r(7613),m=r(846);function s(u,T){if(1&u&&(t._UZ(0,"img",5),t.TgZ(1,"a",6),t._uU(2),t.qZA()),2&u){const p=T.item;t.Q6J("src",p.avatar_url,t.LSH),t.xp6(1),t.MGl("routerLink","/github/details/",p.login,""),t.xp6(1),t.hij("",p.login," ")}}function h(u,T){1&u&&(t.TgZ(0,"th"),t._uU(1,"Image"),t.qZA(),t.TgZ(2,"th"),t._uU(3,"Url"),t.qZA(),t.TgZ(4,"th"),t._uU(5,"Image"),t.qZA(),t.TgZ(6,"th"),t._uU(7,"Url"),t.qZA())}function l(u,T){if(1&u&&(t.TgZ(0,"td"),t._UZ(1,"img",5),t.qZA(),t.TgZ(2,"td")(3,"a",6),t._uU(4),t.qZA()(),t.TgZ(5,"td"),t._UZ(6,"img",5),t.qZA(),t.TgZ(7,"td")(8,"a",6),t._uU(9),t.qZA()()),2&u){const p=T.item;t.xp6(1),t.Q6J("src",p.avatar_url,t.LSH),t.xp6(2),t.MGl("routerLink","/github/details/",p.login,""),t.xp6(1),t.hij("",p.login," "),t.xp6(2),t.Q6J("src",p.avatar_url,t.LSH),t.xp6(2),t.MGl("routerLink","/github/details/",p.login,""),t.xp6(1),t.hij("",p.login," ")}}let b=(()=>{class u{constructor(p){this.userService=p,this.users=[]}ngOnInit(){this.userService.getAllUsers().subscribe(p=>this.users=p)}}return u.\u0275fac=function(p){return new(p||u)(t.Y36(n.K))},u.\u0275cmp=t.Xpm({type:u,selectors:[["app-users"]],decls:9,vars:6,consts:[[2,"color","skyblue"],[3,"items","cardListTemplateRef","tableTdTemplateRef","tableThTemplateRef","cardColor","table"],["defaultListCardTemplate",""],["th",""],["td",""],["alt","avatar",3,"src"],[3,"routerLink"]],template:function(p,x){if(1&p&&(t.TgZ(0,"h1",0),t._uU(1,"Github users!"),t.qZA(),t._UZ(2,"app-card-list-table",1),t.YNc(3,s,3,3,"ng-template",null,2,t.W1O),t.YNc(5,h,8,0,"ng-template",null,3,t.W1O),t.YNc(7,l,10,6,"ng-template",null,4,t.W1O)),2&p){const o=t.MAs(4),g=t.MAs(6),e=t.MAs(8);t.xp6(2),t.Q6J("items",x.users)("cardListTemplateRef",o)("tableTdTemplateRef",e)("tableThTemplateRef",g)("cardColor","white")("table","custom")}},dependencies:[f.yS,_.j,m.W],styles:["[_nghost-%COMP%]{display:block;background:#ededfc;padding:.2rem}"]}),u})()},846:(C,y,r)=>{r.d(y,{W:()=>g});var t=r(9808),n=r(5e3);function f(e,i){1&e&&n.GkF(0)}function _(e,i){1&e&&n.GkF(0)}const m=function(e){return{item:e}};function s(e,i){if(1&e&&(n.TgZ(0,"div",8),n.YNc(1,_,1,0,"ng-container",9),n.qZA()),2&e){const a=i.$implicit,c=n.oxw(2);n.Udp("background",c.ColorEnum[c.cardColor]),n.xp6(1),n.Q6J("ngTemplateOutlet",c.cardListTemplateRef)("ngTemplateOutletContext",n.VKq(4,m,a))}}const h=function(e,i){return{"grid-view":e,"list-view":i}};function l(e,i){if(1&e&&(n.TgZ(0,"div",6),n.YNc(1,s,2,6,"div",7),n.qZA()),2&e){const a=n.oxw();n.Q6J("ngClass",n.WLB(2,h,"cards"===a.typeToShow,"list"===a.typeToShow)),n.xp6(1),n.Q6J("ngForOf",a.items)}}function b(e,i){1&e&&n.GkF(0)}function u(e,i){1&e&&n.GkF(0)}function T(e,i){if(1&e&&(n.TgZ(0,"tr"),n.YNc(1,u,1,0,"ng-container",9),n.qZA()),2&e){const a=i.$implicit,c=n.oxw(2);n.xp6(1),n.Q6J("ngTemplateOutlet",c.tableTdTemplateRef)("ngTemplateOutletContext",n.VKq(2,m,a))}}function p(e,i){if(1&e&&(n.TgZ(0,"table",10)(1,"thead")(2,"tr"),n.YNc(3,b,1,0,"ng-container",3),n.qZA()(),n.TgZ(4,"tbody"),n.YNc(5,T,2,4,"tr",11),n.qZA()()),2&e){const a=n.oxw();n.Q6J("ngClass",a.table),n.xp6(3),n.Q6J("ngTemplateOutlet",a.tableThTemplateRef),n.xp6(2),n.Q6J("ngForOf",a.items)}}const x=function(e){return{selected:e}};var o=(()=>{return(e=o||(o={})).green="#6DD400",e.green1="#1CB142",e.green2="#689f38",e.voilet="#9475FF",e.voilet1="#6236FF",e.orange="#FF751A",e.orange1="#FA6400",e.red="#FD4E71",e.red1="#F9345E",e.red2="#bf360c",e.darkBlue="#1A1053",e.gray="#817C9B",e.purple="#6a1b9a",e.blue="#0092ed",e.transparent="transparent",e.darkGray="#ededfc",e.white="#fff",e.special="hsl(240, 49%, 7%)",e.special2="#151526",o;var e})();let g=(()=>{class e{constructor(){this.items=[],this.table="bordered",this.cardColor="transparent",this.ColorEnum=o,this.preferedShowModeKey="typeToShow"}get typeToShow(){return window.localStorage.getItem(this.preferedShowModeKey)||"list"}set typeToShow(a){window.localStorage.setItem(this.preferedShowModeKey,a)}ngOnInit(){}show(a){this.typeToShow=a}}return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-card-list-table"]],inputs:{items:"items",cardListTemplateRef:"cardListTemplateRef",tableTdTemplateRef:"tableTdTemplateRef",tableThTemplateRef:"tableThTemplateRef",table:"table",cardColor:"cardColor"},standalone:!0,features:[n.jDz],decls:15,vars:10,consts:[[1,"ttabs"],[1,"ttabList"],[1,"ttab",3,"ngClass","click"],[4,"ngTemplateOutlet"],["notTableTemplate",""],["tableTemplate",""],[3,"ngClass"],["class","user-card",3,"background",4,"ngFor","ngForOf"],[1,"user-card"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"responsive",3,"ngClass"],[4,"ngFor","ngForOf"]],template:function(a,c){if(1&a&&(n.TgZ(0,"div",0)(1,"div",1)(2,"div",2),n.NdJ("click",function(){return c.show("cards")}),n._uU(3,"Card View"),n.qZA(),n.TgZ(4,"div",2),n.NdJ("click",function(){return c.show("table")}),n._uU(5,"Table View"),n.qZA(),n.TgZ(6,"div",2),n.NdJ("click",function(){return c.show("list")}),n._uU(7,"List View"),n.qZA()()(),n._UZ(8,"br")(9,"br"),n.YNc(10,f,1,0,"ng-container",3),n.YNc(11,l,2,5,"ng-template",null,4,n.W1O),n.YNc(13,p,6,3,"ng-template",null,5,n.W1O)),2&a){const d=n.MAs(12),v=n.MAs(14);n.xp6(2),n.Q6J("ngClass",n.VKq(4,x,"cards"===c.typeToShow)),n.xp6(2),n.Q6J("ngClass",n.VKq(6,x,"table"===c.typeToShow)),n.xp6(2),n.Q6J("ngClass",n.VKq(8,x,"list"===c.typeToShow)),n.xp6(4),n.Q6J("ngTemplateOutlet","table"===c.typeToShow?v:d)}},dependencies:[t.sg,t.tP,t.mk],styles:["app-card-list-table .user-card{display:flex;align-items:center;gap:8px;padding:20px;border:2px solid #ffffff;border-radius:10px;color:#fff;box-shadow:0 2px 6px #0003}app-card-list-table .user-card.active,app-card-list-table tr.active{background-color:#fff;color:#0092ed}app-card-list-table .user-card.active img,app-card-list-table tr.active img{border-color:#0092ed;background-color:#0092ed}app-card-list-table .user-card.disabled,app-card-list-table tr.disabled{background-color:#dedede;color:#a2a2a2}app-card-list-table .user-card.disabled img,app-card-list-table tr.disabled img{border-color:#a2a2a2;background-color:#dedede}app-card-list-table .user-card.highlight,app-card-list-table tr.highlight{background-color:#fff;color:#0092ed}app-card-list-table .user-card.highlight img,app-card-list-table tr.highlight img{border-color:#0092ed;background-color:#0092ed}app-card-list-table .user-card img,app-card-list-table tr img{display:block;width:100px;height:100px;border:2px solid #ffffff;border-radius:50%}app-card-list-table .grid-view{display:grid;grid-gap:16px;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));margin-bottom:50px}app-card-list-table .grid-view .user-card{flex-direction:column}app-card-list-table .list-view{display:flex;flex-direction:column;margin-bottom:50px;gap:8px}app-card-list-table .list-view .user-card{flex-direction:row}app-card-list-table .list-view img{margin-right:20px}app-card-list-table table{border-collapse:collapse;margin-bottom:10px}app-card-list-table table td,app-card-list-table table th{padding:.5rem;text-align:left}app-card-list-table table th{background:#e8f1ff}app-card-list-table table.striped td,app-card-list-table table.striped th{border-top:1px solid #8DA6CD}app-card-list-table table.striped th{background:transparent}app-card-list-table table.striped tbody tr:nth-of-type(odd){background:#e8f1ff}app-card-list-table table.bordered td,app-card-list-table table.bordered th{border:1px solid #8DA6CD}app-card-list-table table.custom th{border-bottom:2px solid #ddd}app-card-list-table table.custom td{border-bottom:1px solid #ddd}app-card-list-table table.responsive{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar}app-card-list-table .ttabs{border-bottom:1px solid rgba(0,0,0,.08);display:flex;justify-content:start;margin:0 auto;max-width:960px}app-card-list-table .ttabs .ttabList{cursor:pointer;display:flex;flex-direction:row;font-size:14px;font-weight:500;height:48px;-webkit-user-select:none;user-select:none}app-card-list-table .ttabs .ttab{align-items:center;color:#5f6368;display:flex;flex:auto;height:100%;justify-content:center;opacity:.8;outline:0;padding:0 16px;transition:opacity .1s cubic-bezier(.4,0,1,1)}app-card-list-table .ttabs .selected{color:#1a73e8;opacity:1;border-bottom:3px solid rgb(26,115,232);transform-origin:left center;transition:transform}\n"],encapsulation:2}),e})()},1614:(C,y,r)=>{r.d(y,{Hz:()=>n,cN:()=>h,nW:()=>f});var t=r(1777);const n=(0,t.X$)("listAnimation",[(0,t.eR)("* => *",[(0,t.IO)(":leave",[(0,t.EY)(100,[(0,t.jt)("0.5s",(0,t.oB)({opacity:0}))])],{optional:!0}),(0,t.IO)(":enter",[(0,t.oB)({opacity:0}),(0,t.EY)(100,[(0,t.jt)("0.5s",(0,t.oB)({opacity:1}))])],{optional:!0})])]),f=(0,t.X$)("listAnimation",[(0,t.eR)("* => *",[(0,t.IO)(":enter",[(0,t.oB)({opacity:0}),(0,t.EY)(100,[(0,t.jt)("0.5s",(0,t.oB)({opacity:1}))])],{optional:!0})])]),h=((0,t.X$)("explainerAnim",[(0,t.eR)("* => *",[(0,t.IO)(".col",(0,t.oB)({opacity:0,transform:"translateX(-40px)"})),(0,t.IO)(".col",(0,t.EY)("500ms",[(0,t.jt)("800ms 1.2s ease-out",(0,t.oB)({opacity:1,transform:"translateX(0)"}))]))])]),(0,t.X$)("listAnimation",[(0,t.eR)("* => *",[(0,t.IO)(":enter",[(0,t.oB)({opacity:0,transform:"translateY(100px)"}),(0,t.EY)(100,[(0,t.jt)("0.5s",(0,t.oB)({opacity:1,transform:"translateY(0px)"}))])])])]),(0,t.X$)("animate",[(0,t.SB)("idle",(0,t.oB)({opacity:0})),(0,t.eR)("* => landing",[(0,t.oB)({transform:"scale(1.2)",opacity:0}),(0,t.jt)("{{timing}} ease",(0,t.oB)("*"))],{params:{timing:"2s"}}),(0,t.eR)("* => pulse",[(0,t.oB)("*"),(0,t.jt)("{{timing}} ease-in-out",(0,t.F4)([(0,t.oB)({transform:"scale(1)"}),(0,t.oB)({transform:"scale(1.05)"}),(0,t.oB)({transform:"scale(1)"})]))],{params:{timing:"1s"}}),(0,t.eR)("* => beat",[(0,t.oB)("*"),(0,t.jt)("{{timing}} cubic-bezier(.8, -0.6, 0.2, 1.5)",(0,t.F4)([(0,t.oB)({transform:"scale(0.8)"}),(0,t.oB)({transform:"scale(1.5)"}),(0,t.oB)({transform:"scale(1)"})]))],{params:{timing:"500ms"}}),(0,t.eR)("* => heartBeat",[(0,t.oB)("*"),(0,t.jt)("{{timing}} ease-in-out",(0,t.F4)([(0,t.oB)({transform:"scale(1)",offset:0}),(0,t.oB)({transform:"scale(1.3)",offset:.14}),(0,t.oB)({transform:"scale(1)",offset:.28}),(0,t.oB)({transform:"scale(1.3)",offset:.42}),(0,t.oB)({transform:"scale(1)",offset:.7})]))],{params:{timing:"1s"}}),(0,t.eR)("* => fadeIn",[(0,t.oB)({opacity:0}),(0,t.jt)("{{timing}} ease-in",(0,t.oB)("*"))],{params:{timing:"1s"}}),(0,t.eR)("* => fadeInRight",[(0,t.oB)({opacity:0,transform:"translateX(-20px)"}),(0,t.jt)("{{timing}} ease-in",(0,t.oB)("*"))],{params:{timing:"1s"}}),(0,t.eR)("* => fadeInLeft",[(0,t.oB)({opacity:0,transform:"translateX(20px)"}),(0,t.jt)("{{timing}} ease-in",(0,t.oB)("*"))],{params:{timing:"1s"}}),(0,t.eR)("* => fadeInUp",[(0,t.oB)({opacity:0,transform:"translateY(20px)"}),(0,t.jt)("{{timing}} ease-in",(0,t.oB)("*"))],{params:{timing:"1s"}}),(0,t.eR)("* => fadeInDown",[(0,t.oB)({opacity:0,transform:"translateY(-20px)"}),(0,t.jt)("{{timing}} ease-in",(0,t.oB)("*"))],{params:{timing:"1s"}}),(0,t.eR)("* => zoomIn",(0,t.jt)("{{timing}} ease-in",(0,t.F4)([(0,t.oB)({opacity:0,transform:"scale(0.3)"}),(0,t.oB)({opacity:1,transform:"scale(0.65)"}),(0,t.oB)({opacity:1,transform:"scale(1)"})])),{params:{timing:"1s"}}),(0,t.eR)("* => bumpIn",[(0,t.oB)({transform:"scale(0.5)",opacity:0}),(0,t.jt)("{{timing}} cubic-bezier(.8, -0.6, 0.2, 1.5)",(0,t.oB)({transform:"scale(1)",opacity:1}))],{params:{timing:"500ms"}}),(0,t.eR)("fadeOut => void",[(0,t.jt)("{{timing}} ease-in",(0,t.oB)({opacity:0}))]),(0,t.eR)("fadeOutRight => void",[(0,t.jt)("{{timing}} ease-in",(0,t.oB)({opacity:0,transform:"translateX(20px)"}))],{params:{timing:"1s"}}),(0,t.eR)("fadeOutLeft => void",[(0,t.jt)("{{timing}} ease-in",(0,t.oB)({opacity:0,transform:"translateX(-20px)"}))],{params:{timing:"1s"}}),(0,t.eR)("fadeOutDown => void",[(0,t.jt)("{{timing}} ease-in",(0,t.oB)({opacity:0,transform:"translateY(20px)"}))],{params:{timing:"1s"}}),(0,t.eR)("fadeOutUp => void",[(0,t.jt)("{{timing}} ease-in",(0,t.oB)({opacity:0,transform:"translateY(-20px)"}))],{params:{timing:"1s"}}),(0,t.eR)("zoomOut => void",(0,t.jt)("{{timing}} ease-in",(0,t.F4)([(0,t.oB)({opacity:1,transform:"scale(1)"}),(0,t.oB)({opacity:0,transform:"scale(0.3)"}),(0,t.oB)({opacity:0,transform:"scale(0.3)"})])),{params:{timing:"1s"}})]),(0,t.X$)("enterAnimation",[(0,t.eR)(":enter",[(0,t.oB)({transform:"translateX(100%)",opacity:0}),(0,t.jt)("500ms",(0,t.oB)({transform:"translateX(0)",opacity:1,"overflow-x":"hidden"}))]),(0,t.eR)(":leave",[(0,t.oB)({transform:"translateX(0)",opacity:1}),(0,t.jt)("500ms",(0,t.oB)({transform:"translateX(100%)",opacity:0}))])]));(0,t.ru)([(0,t.IO)(".st8:nth-child(3)",(0,t.jt)("2s ease",(0,t.F4)([(0,t.oB)({transform:"*",offset:0}),(0,t.oB)({transform:"translateY(80px)",offset:.4}),(0,t.oB)({transform:"*",offset:1})]))),(0,t.IO)(".st1",(0,t.jt)("2s ease",(0,t.F4)([(0,t.oB)({transform:"*",offset:0}),(0,t.oB)({transform:"translateX(-20px)",offset:.4}),(0,t.oB)({transform:"*",offset:1})]))),(0,t.IO)(".st7",(0,t.jt)("2s ease",(0,t.F4)([(0,t.oB)({transform:"*",offset:0}),(0,t.oB)({transform:"scale(0.95)",offset:.4}),(0,t.oB)({transform:"*",offset:1})]))),(0,t.IO)(".st6, .st8",(0,t.jt)("2s ease",(0,t.F4)([(0,t.oB)({transform:"*",offset:0}),(0,t.oB)({transform:"rotate(-1deg)",offset:.4}),(0,t.oB)({transform:"rotate(1deg)",offset:.6}),(0,t.oB)({transform:"*",offset:1})]))),(0,t.IO)(".front-leg",(0,t.jt)("2s ease",(0,t.F4)([(0,t.oB)({transform:"*",offset:0}),(0,t.oB)({transform:"rotate3d(0, 1, 0, 6deg) skewX(6deg)",offset:.4}),(0,t.oB)({transform:"*",offset:1})])))])},2683:(C,y,r)=>{r.d(y,{C:()=>n});var t=r(5e3);let n=(()=>{class f{constructor(){this.numOfImages=8,this.images=this.generateImagesList()}addImage(){const m=f.generateRandomImage();m.alt=`#${this.images.length}`,this.images.push(m)}static generateRandomImage(){return{src:`https://picsum.photos/600/${(600*Math.random()+400).toFixed()}/?random`}}generateImagesList(){const m=[];for(let s=0;s<this.numOfImages;s++){const h=f.generateRandomImage();h.alt=`#${s}`,m.push(h)}return m}}return f.\u0275fac=function(m){return new(m||f)},f.\u0275prov=t.Yz7({token:f,factory:f.\u0275fac,providedIn:"root"}),f})()},9690:(C,y,r)=>{r.r(y),r.d(y,{TaskingComponent:()=>m});var t=r(5e3),n=r(9808);const f=function(s,h){return{completed:s,uncompleted:h}};function _(s,h){if(1&s){const l=t.EpF();t.TgZ(0,"li",7)(1,"input",8),t.NdJ("click",function(u){const p=t.CHM(l).$implicit,x=t.oxw();return t.KtG(x.onSelect(u,p))}),t.qZA(),t.TgZ(2,"p"),t._uU(3),t.qZA(),t.TgZ(4,"button",9),t.NdJ("click",function(){const T=t.CHM(l).index,p=t.oxw();return t.KtG(p.delete(T))}),t._uU(5,"X"),t.qZA()()}if(2&s){const l=h.$implicit;t.Q6J("ngClass",t.WLB(3,f,l.completed,!l.completed)),t.xp6(1),t.Q6J("checked",null==l?null:l.completed),t.xp6(2),t.hij(" ",null==l?null:l.text," ")}}let m=(()=>{class s{constructor(){this.todoList=[],this.render()}ngOnInit(){}addTodo(l){const b=l.value;!b||(this.todoList.push({text:b,completed:!1}),localStorage.setItem("todos",JSON.stringify(this.todoList)))}render(){const l=localStorage.getItem("todos");this.todoList=JSON.parse(l)||[]}onSelect(l,b){l&&(b.completed=l.target.checked,localStorage.setItem("todos",JSON.stringify(this.todoList)))}delete(l){this.todoList.splice(l,1),localStorage.setItem("todos",JSON.stringify(this.todoList)),this.render()}}return s.\u0275fac=function(l){return new(l||s)},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-tasking"]],decls:11,vars:1,consts:[[1,"container"],[1,"todo"],["type","text","id","input","placeholder","Enter task",3,"keyup.enter"],["input",""],[1,"list-todo"],["id","todo"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"ngClass"],["type","checkbox",3,"checked","click"],[3,"click"]],template:function(l,b){if(1&l){const u=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"h1"),t._uU(3,"Todo"),t.qZA(),t.TgZ(4,"p"),t._uU(5,"What do you want to get done today?"),t.qZA(),t.TgZ(6,"input",2,3),t.NdJ("keyup.enter",function(){t.CHM(u);const p=t.MAs(7);return t.KtG(b.addTodo(p))}),t.qZA()(),t.TgZ(8,"div",4)(9,"ul",5),t.YNc(10,_,6,6,"li",6),t.qZA()()()}2&l&&(t.xp6(10),t.Q6J("ngForOf",b.todoList))},dependencies:[n.mk,n.sg],styles:[".container[_ngcontent-%COMP%]{text-align:center;width:40%;margin:2% auto auto;color:#181818;min-height:90vh}.todo[_ngcontent-%COMP%]{width:100%;padding-bottom:15px;background:#3366ff;border-top-left-radius:20px;border-top-right-radius:20px;color:#fff}h1[_ngcontent-%COMP%]{margin-bottom:20px;font-size:80px;margin-top:0;padding-left:10px}input[_ngcontent-%COMP%]{background:none;outline:none;border:none;border-bottom:2px solid #ffffff;color:#fff;padding:8px;font-size:20px}.list-todo[_ngcontent-%COMP%]{height:60vh;background-color:#fff;overflow-x:scroll}#todo[_ngcontent-%COMP%]{padding:0 10px}#todo[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style:none;font-size:16px;width:100%;max-width:100%;display:flex;--webkit-display: flex;align-items:flex-start;justify-content:space-between;text-align:justify;margin-bottom:15px;border-bottom:1px solid #777777;padding-bottom:8px}#todo[_ngcontent-%COMP%]   li.completed[_ngcontent-%COMP%]{text-decoration:line-through}#todo[_ngcontent-%COMP%]   li.uncompleted[_ngcontent-%COMP%]{text-decoration:none;color:#000}#todo[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin-right:10px}#todo[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{outline:none;border:none;border-radius:200px;margin-left:10px;background-color:#36f;color:#fff;width:6%;height:5vh}"]}),s})()},9390:(C,y,r)=>{r.d(y,{h:()=>f});var t=r(9808),n=r(5e3);let f=(()=>{class _{constructor(s){this._document=s}loadStyle(s){const h=this._document.getElementsByTagName("head")[0];let l=this._document.getElementById("client-theme");if(l)l.href=s;else{const b=this._document.createElement("link");b.id="client-theme",b.rel="stylesheet",b.href=`${s}`,h.appendChild(b)}}}return _.\u0275fac=function(s){return new(s||_)(n.LFG(t.K0))},_.\u0275prov=n.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_})()},6769:(C,y,r)=>{r.d(y,{O:()=>i});var t=r(2805),n=r(4351),f=r(576),m=r(4128),s=r(4707),h=r(4086),l=r(5625),b=r(262),u=r(8505),T=r(9770),p=r(4782),x=r(2843),o=r(5e3),g=r(520),e=(()=>{return(a=e||(e={})).LOADING="LOADING",a.SUCCESS="SUCCESS",a.ERROR="ERROR",e;var a})();let i=(()=>{class a{constructor(d){this.http=d}getNotifications(){return this.http.get("http://api").pipe(this.poll(1e3))}poll(d,v=0){return function(B){return(0,t.H)(v,d).pipe(function _(a,c){return(0,f.m)(c)?(0,n.b)(()=>a,c):(0,n.b)(()=>a)}(B))}}get(d){return this.http.get(d)}post(d,v){return this.http.post(d,v)}getSwapi(){let d=this.http.get("https://swapi.dev/api/people/1/"),v=this.http.get("https://swapi.dev/api/planets/1/");(0,m.D)([d,v]).subscribe(B=>{B[0].homeworld=B[1],this.loadedCharacter=B[0]})}load(d){const v=new s.t,B=this.http.get(`https://swapi.dev/api/people/${d}/`).pipe((0,h.g)(2e3),(0,l.X)(2),(0,b.K)(M=>{throw v.next(e.ERROR),"error loading user"}),(0,u.b)(()=>v.next(e.SUCCESS)));return{data:(0,T.P)(()=>(v.next(e.LOADING),B)),status:v}}share(){this.rawData$=this.http.get("https://jsonplaceholder.typicode.com/todos/1").pipe((0,p.d)())}GetData(){return this.rawData$.toPromise()}getRandomjoke(){return this.http.get("https://icanhazdadjoke.com/slack").pipe((0,b.K)(this.handleError))}handleError(){return(0,x._)("Network Error Occured")}}return a.\u0275fac=function(d){return new(d||a)(o.LFG(g.eN))},a.\u0275prov=o.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()},2632:(C,y,r)=>{r.d(y,{z:()=>f});var t=r(5e3),n=r(9808);let f=(()=>{class _{constructor(s){this.location=s}onClick(){this.location.back()}}return _.\u0275fac=function(s){return new(s||_)(t.Y36(n.Ye))},_.\u0275dir=t.lG2({type:_,selectors:[["","appBackButton",""]],hostBindings:function(s,h){1&s&&t.NdJ("click",function(){return h.onClick()})}}),_})()},2497:(C,y,r)=>{r.d(y,{Dt:()=>x,P0:()=>T,gB:()=>u});var t=r(5e3);r(2313);let u=(()=>{class o{transform(e,i){return e?i?(i=i.toLowerCase(),e.filter(function(a){return JSON.stringify(a).toLowerCase().includes(i)})):e:[]}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275pipe=t.Yjl({name:"angFilter",type:o,pure:!0}),o})(),T=(()=>{class o{transform(e,i,a){return e?a?""==a||null==a?[]:e.filter(c=>c[i]===a):e:[]}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275pipe=t.Yjl({name:"angFilterByKey",type:o,pure:!0}),o})(),x=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({}),o})()}}]);