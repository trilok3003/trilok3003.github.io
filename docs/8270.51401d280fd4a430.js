"use strict";(self.webpackChunkportfolio_all_in_one=self.webpackChunkportfolio_all_in_one||[]).push([[8270],{8270:(y,h,s)=>{s.r(h),s.d(h,{ApplicationModule:()=>O});var d=s(6895),r=s(4793),e=s(4650),m=s(1189);function u(n,o){if(1&n&&(e.TgZ(0,"h4")(1,"a",4),e._uU(2),e.qZA()()),2&n){const t=o.item;e.xp6(1),e.Q6J("routerLink",t.path),e.xp6(1),e.Oqu(t.name)}}function C(n,o){1&n&&(e.TgZ(0,"th"),e._uU(1,"App"),e.qZA(),e.TgZ(2,"th"),e._uU(3,"Link"),e.qZA())}function g(n,o){if(1&n&&(e.TgZ(0,"td"),e._uU(1,"App"),e.qZA(),e.TgZ(2,"td")(3,"h4")(4,"a",4),e._uU(5),e.qZA()()()),2&n){const t=o.item;e.xp6(4),e.Q6J("routerLink",t.path),e.xp6(1),e.Oqu(t.name)}}let f=(()=>{class n{constructor(){this.apps=[{path:"/personal",name:"personal"},{path:"/audios",name:"audios"},{path:"/books",name:"books"},{path:"/bootstrap-design",name:"bootstrap design"},{path:"/cocktail",name:"cocktail"},{path:"/cookbook",name:"cookbook"},{path:"/covid",name:"covid"},{path:"/github",name:"Github"},{path:"/hacker-ranks",name:"hacker ranks"},{path:"/itunes",name:"itunes"},{path:"/movies",name:"movies"},{path:"/ngrx-store",name:"ngrx store"},{path:"/shop",name:"shop"},{path:"/sports",name:"sports"},{path:"/store",name:"store"},{path:"/survey",name:"survey"},{path:"/abstract-animation",name:"abstract animation"},{path:"/animation-game",name:"animation-game"},{path:"/responsive-site",name:"responsive-site"},{path:"/mockApi",name:"mockApi"},{path:"/routeReuse",name:"route Reuse tuts"},{path:"/encapsulating",name:"encapsulating"},{path:"common-feature/read-csv",name:"read-csv"},{path:"common-feature/json-to-csv",name:"json-to-csv"}]}ngOnInit(){}static#e=this.\u0275fac=function(l){return new(l||n)};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-application"]],decls:7,vars:5,consts:[[3,"cardListTemplateRef","items","tableTdTemplateRef","tableThTemplateRef","cardColor"],["defaultListCardTemplate",""],["th",""],["td",""],[3,"routerLink"]],template:function(l,i){if(1&l&&(e._UZ(0,"app-card-list-table",0),e.YNc(1,u,3,2,"ng-template",null,1,e.W1O),e.YNc(3,C,4,0,"ng-template",null,2,e.W1O),e.YNc(5,g,6,2,"ng-template",null,3,e.W1O)),2&l){const a=e.MAs(2),c=e.MAs(4),J=e.MAs(6);e.Q6J("cardListTemplateRef",a)("items",i.apps)("tableTdTemplateRef",J)("tableThTemplateRef",c)("cardColor","color1")}},dependencies:[r.rH,m.WM]})}return n})();var p=s(4006);function _(n,o){1&n&&(e.TgZ(0,"span"),e._uU(1,"Unselect All "),e.qZA())}function x(n,o){1&n&&e._uU(0,"Select All ")}function k(n,o){1&n&&e._UZ(0,"i",14)}function A(n,o){1&n&&e._UZ(0,"i",15)}function v(n,o){1&n&&e._UZ(0,"i",14)}function T(n,o){1&n&&e._UZ(0,"i",15)}function M(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"li",20)(1,"input",21),e.NdJ("ngModelChange",function(i){const c=e.CHM(t).$implicit;return e.KtG(c.isSelected=i)})("ngModelChange",function(){e.CHM(t);const i=e.oxw().$implicit,a=e.oxw();return e.KtG(a.childCheck(i,i.childList))}),e.qZA(),e._uU(2),e.qZA()}if(2&n){const t=o.$implicit;e.xp6(1),e.s9C("value",t.id),e.Q6J("ngModel",t.isSelected),e.xp6(1),e.hij(" ",t.value," ")}}function Z(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"li",6)(1,"input",16),e.NdJ("ngModelChange",function(i){const c=e.CHM(t).$implicit;return e.KtG(c.isSelected=i)})("ngModelChange",function(){const a=e.CHM(t).$implicit,c=e.oxw();return e.KtG(c.parentCheck(a))}),e.qZA(),e._uU(2),e.TgZ(3,"span",7),e.NdJ("click",function(){const a=e.CHM(t).$implicit,c=e.oxw();return e.KtG(c.expandCollapse(a))}),e.YNc(4,v,1,0,"i",10),e.YNc(5,T,1,0,"ng-template",null,11,e.W1O),e.qZA(),e.TgZ(7,"div",17)(8,"ul",18),e.YNc(9,M,3,3,"li",19),e.qZA()()()}if(2&n){const t=o.$implicit,l=e.MAs(6);e.xp6(1),e.s9C("value",t.id),e.Q6J("ngModel",t.isSelected),e.xp6(1),e.hij(" ",t.value," "),e.xp6(2),e.Q6J("ngIf",t.isClosed)("ngIfElse",l),e.xp6(3),e.Q6J("hidden",t.isClosed),e.xp6(2),e.Q6J("ngForOf",t.childList)}}const N=[{path:"",component:f},{path:"checkboxNested",component:(()=>{class n{constructor(){this.title="CheckList for Parents and Child Structure with Expand/ Collapse",this.data={},this.data.isAllSelected=!1,this.data.isAllCollapsed=!1,this.data.ParentChildchecklist=[{id:1,value:"Elenor Anderson",isSelected:!1,isClosed:!1,childList:[{id:1,parent_id:1,value:"child 1",isSelected:!1},{id:2,parent_id:1,value:"child 2",isSelected:!1}]},{id:2,value:"Caden Kunze",isSelected:!1,isClosed:!1,childList:[{id:1,parent_id:1,value:"child 1",isSelected:!1},{id:2,parent_id:1,value:"child 2",isSelected:!1}]},{id:3,value:"Ms. Hortense Zulauf",isSelected:!1,isClosed:!1,childList:[{id:1,parent_id:1,value:"child 1",isSelected:!1},{id:2,parent_id:1,value:"child 2",isSelected:!1}]}]}ngOnInit(){}parentCheck(t){for(var l=0;l<t.childList.length;l++)t.childList[l].isSelected=t.isSelected}childCheck(t,l){t.isSelected=l.every(function(i){return 1==i.isSelected})}selectUnselectAll(t){t.isAllSelected=!t.isAllSelected;for(var l=0;l<t.ParentChildchecklist.length;l++){t.ParentChildchecklist[l].isSelected=t.isAllSelected;for(var i=0;i<t.ParentChildchecklist[l].childList.length;i++)t.ParentChildchecklist[l].childList[i].isSelected=t.isAllSelected}}expandCollapse(t){t.isClosed=!t.isClosed}expandCollapseAll(t){for(var l=0;l<t.ParentChildchecklist.length;l++)t.ParentChildchecklist[l].isClosed=!t.isAllCollapsed;t.isAllCollapsed=!t.isAllCollapsed}stringify(t){return JSON.stringify(t)}static#e=this.\u0275fac=function(l){return new(l||n)};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-checkbox-nested"]],decls:21,vars:7,consts:[[2,"text-align","center"],[1,"container"],[1,"text-right","mt-5"],[1,"row"],[1,"col-md-4"],[1,"list-group"],[1,"list-group-item"],[3,"click"],[4,"ngIf","ngIfElse"],["noneSelected",""],["class","fas fa-angle-up",4,"ngIf","ngIfElse"],["isCollapsed",""],["class","list-group-item",4,"ngFor","ngForOf"],[1,"col-md-8"],[1,"fas","fa-angle-up"],[1,"fas","fa-angle-down"],["type","checkbox","name","list_name",3,"ngModel","value","ngModelChange"],[1,"child-list",3,"hidden"],[1,"list-group","level-two"],["class","list-group-item level-two",4,"ngFor","ngForOf"],[1,"list-group-item","level-two"],["type","checkbox","name","list_name_child",3,"ngModel","value","ngModelChange"]],template:function(l,i){if(1&l&&(e.TgZ(0,"div",0)(1,"h1"),e._uU(2),e.qZA()(),e.TgZ(3,"div",1)(4,"div",2)(5,"div",3)(6,"div",4)(7,"ul",5)(8,"li",6)(9,"span",7),e.NdJ("click",function(){return i.selectUnselectAll(i.data)}),e.YNc(10,_,2,0,"span",8),e.YNc(11,x,1,0,"ng-template",null,9,e.W1O),e.qZA(),e.TgZ(13,"span",7),e.NdJ("click",function(){return i.expandCollapseAll(i.data)}),e.YNc(14,k,1,0,"i",10),e.YNc(15,A,1,0,"ng-template",null,11,e.W1O),e.qZA()()(),e.TgZ(17,"ul",5),e.YNc(18,Z,10,7,"li",12),e.qZA()(),e.TgZ(19,"div",13),e._uU(20),e.qZA()()()()),2&l){const a=e.MAs(12),c=e.MAs(16);e.xp6(2),e.hij(" ",i.title,"! "),e.xp6(8),e.Q6J("ngIf",i.data.isAllSelected)("ngIfElse",a),e.xp6(4),e.Q6J("ngIf",i.data.isAllCollapsed)("ngIfElse",c),e.xp6(4),e.Q6J("ngForOf",i.data.ParentChildchecklist),e.xp6(2),e.hij(" ",i.stringify(i.data)," ")}},dependencies:[d.sg,d.O5,p.Wl,p.JJ,p.On],styles:[".list-group-item[_ngcontent-%COMP%]{list-style:none;font-size:20px;font-weight:700;background-color:#e4e4e4}.list-group-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]{height:20px;width:20px;vertical-align:middle}.list-group-item[_ngcontent-%COMP%]   div.child-list[_ngcontent-%COMP%]{margin-top:10px}.list-group-item[_ngcontent-%COMP%]   div.child-list[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]{background-color:#fff}"]})}return n})()},{path:"common-feature",loadChildren:()=>Promise.all([s.e(8592),s.e(4448)]).then(s.bind(s,4448)).then(n=>n.CommonFeaturesModule)},{path:"todos",loadChildren:()=>Promise.all([s.e(8592),s.e(2560)]).then(s.bind(s,2560)).then(n=>n.TodosModule)}];let S=(()=>{class n{static#e=this.\u0275fac=function(l){return new(l||n)};static#t=this.\u0275mod=e.oAB({type:n});static#n=this.\u0275inj=e.cJS({imports:[r.Bz.forChild(N),r.Bz]})}return n})(),O=(()=>{class n{static#e=this.\u0275fac=function(l){return new(l||n)};static#t=this.\u0275mod=e.oAB({type:n});static#n=this.\u0275inj=e.cJS({imports:[d.ez,p.u5,S,m.C1]})}return n})()}}]);