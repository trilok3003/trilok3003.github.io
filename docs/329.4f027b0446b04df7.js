"use strict";(self.webpackChunkportfolio_all_in_one=self.webpackChunkportfolio_all_in_one||[]).push([[329],{329:(M,p,a)=>{a.d(p,{y:()=>_});var e=a(5e3),c=a(3075),m=a(9808),D=a(1500);function h(l,d){if(1&l){const o=e.EpF();e.TgZ(0,"tbody",5)(1,"tr",6)(2,"td",7),e._UZ(3,"input",8),e.qZA(),e.TgZ(4,"td",7),e._UZ(5,"input",9),e.qZA(),e.TgZ(6,"td",7)(7,"input",10,11),e.NdJ("change",function(){const f=e.CHM(o).index,g=e.MAs(8),y=e.oxw();return e.KtG(y.percChanged(f,g.value))}),e.qZA()(),e.TgZ(9,"td",7),e._UZ(10,"input",12),e.qZA(),e.TgZ(11,"td")(12,"button",3),e.NdJ("click",function(){const f=e.CHM(o).index,g=e.oxw();return e.KtG(g.remove(f))}),e._uU(13,"Remove"),e.qZA()()()()}if(2&l){const o=d.index;e.xp6(1),e.Q6J("formGroupName",o)}}let _=(()=>{class l{constructor(o){this.fb=o,this.items=[{itemName:"DELL VOSTRO 5568 15.6",rate:698.99,discountInPercentage:"",discountInDollar:""},{itemName:"Acer Predator Helios 300",rate:999,discountInPercentage:"",discountInDollar:""}],this.close=new e.vpe,this.itemForm=this.fb.group({items:this.fb.array([])})}ngOnInit(){this.loadItems()}loadItems(){for(const o of this.items){const s=this.fb.group({itemName:[o.itemName],rate:[o.rate],discountInPercentage:[o.discountInPercentage],discountInDollar:[o.discountInDollar]});this.getFormData.push(s)}}initiatForm(){return this.fb.group({itemName:[""],rate:[""],discountInPercentage:[""],discountInDollar:[""]})}get getFormData(){return this.itemForm.get("items")}addUser(){this.getFormData.push(this.initiatForm())}remove(o){this.getFormData.removeAt(o)}save(){console.log("isValid",this.itemForm.valid),console.log("value",this.itemForm.value)}percChanged(o,s){this.itemForm.value.items[o].discountInDollar=this.itemForm.value.items[o].rate/100*s,this.itemForm.controls.items.setValue(this.itemForm.value.items),console.log(this.itemForm.value.items[o].discountInDollar),console.log(this.itemForm)}}return l.\u0275fac=function(o){return new(o||l)(e.Y36(c.qu))},l.\u0275cmp=e.Xpm({type:l,selectors:[["app-user-table"]],outputs:{close:"close"},decls:20,vars:6,consts:[[3,"formGroup"],[1,"table"],["formArrayName","items",4,"ngFor","ngForOf"],[1,"btn","btn-primary","mr-5",3,"click"],[1,"btn","btn-primary",3,"disabled","click"],["formArrayName","items"],[3,"formGroupName"],[1,"form-group"],["type","text","formControlName","itemName",1,"form-control"],["type","text","formControlName","rate",1,"form-control"],["type","text","formControlName","discountInPercentage",1,"form-control",3,"change"],["perc",""],["type","text","formControlName","discountInDollar",1,"form-control"]],template:function(o,s){1&o&&(e.TgZ(0,"h3"),e._uU(1),e.ALo(2,"json"),e.qZA(),e.TgZ(3,"form",0)(4,"table",1)(5,"thead")(6,"th"),e._uU(7,"Item Name"),e.qZA(),e.TgZ(8,"th"),e._uU(9,"Rate"),e.qZA(),e.TgZ(10,"th"),e._uU(11,"Discount (%)"),e.qZA(),e.TgZ(12,"th"),e._uU(13,"Flat Discount in Dollar"),e.qZA()(),e.YNc(14,h,14,1,"tbody",2),e.qZA()(),e.TgZ(15,"button",3),e.NdJ("click",function(){return s.addUser()}),e._uU(16,"Add new"),e.qZA(),e.TgZ(17,"button",4),e.NdJ("click",function(){return s.save()}),e._uU(18,"Save"),e.qZA(),e._UZ(19,"div")),2&o&&(e.xp6(1),e.Oqu(e.lcZ(2,4,s.data)),e.xp6(2),e.Q6J("formGroup",s.itemForm),e.xp6(11),e.Q6J("ngForOf",s.getFormData.controls),e.xp6(3),e.Q6J("disabled",s.itemForm.invalid))},dependencies:[m.sg,c._Y,c.Fj,c.JJ,c.JL,c.sg,c.u,c.x0,c.CE,D.Mi,m.Ts],styles:["h3[_ngcontent-%COMP%]{font-size:20px}.pt06[_ngcontent-%COMP%]{padding-top:6px}.search-scroll[_ngcontent-%COMP%]{width:100%;max-height:295px;overflow-y:auto;overflow-x:auto}.nav-header[_ngcontent-%COMP%]{margin-bottom:60px}nav[_ngcontent-%COMP%]{padding-bottom:10px}.mat-checkbox-layout[_ngcontent-%COMP%]{font-weight:400}"]}),l})()},1500:(M,p,a)=>{a.d(p,{$i:()=>b,Dr:()=>I,E8:()=>C,Mi:()=>g,Ml:()=>f,S_:()=>v,eJ:()=>d,im:()=>k,lj:()=>w,or:()=>F,wk:()=>D,yc:()=>h,zK:()=>T});var e=a(5e3),c=a(9808),m=a(3075);let D=(()=>{class t{constructor(i,r){this.templateRef=i,this.vcr=r,this.show=!1}set angIf(i){this.show=i,this.showTemplate()}ngOnInit(){this.showTemplate()}showTemplate(){this.vcr.clear(),this.show?this.vcr.createEmbeddedView(this.templateRef):this.angIfElse&&this.vcr.createEmbeddedView(this.angIfElse)}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(e.Rgc),e.Y36(e.s_b))},t.\u0275dir=e.lG2({type:t,selectors:[["","angIf",""]],inputs:{angIf:"angIf",angIfElse:"angIfElse"}}),t})(),h=(()=>{class t{constructor(i,r){this.templateRef=i,this.vcr=r,this.items=[]}set angForOf(i){this.items=i,this.renderItems()}static ngTemplateContextGuard(i,r){return!0}ngOnInit(){this.renderItems()}renderItems(){this.vcr.clear(),this.items.map((i,r,u)=>{this.vcr.createEmbeddedView(this.templateRef,{$implicit:i,index:r,count:u.length,first:0===r,last:r===u.length-1,even:1==(1&r),odd:0==(1&r)})})}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(e.Rgc),e.Y36(e.s_b))},t.\u0275dir=e.lG2({type:t,selectors:[["","angFor",""]],inputs:{angForOf:"angForOf"}}),t})();class l{constructor(n){this.dir=n}get ngLet(){return this.dir.ngLet}}let d=(()=>{class t{constructor(i,r){i.createEmbeddedView(r,new l(this))}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(e.s_b),e.Y36(e.Rgc))},t.\u0275dir=e.lG2({type:t,selectors:[["","ngLet",""]],inputs:{ngLet:"ngLet"}}),t})(),v=(()=>{class t{constructor(){this.rel="noopener"}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275dir=e.lG2({type:t,selectors:[["","ngSafeLink",""]],hostVars:1,hostBindings:function(i,r){2&i&&e.Ikx("rel",r.rel)}}),t})(),f=(()=>{class t{constructor(){this.rel="noopener"}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275dir=e.lG2({type:t,selectors:[["a","target","_blank",3,"rel","noopener"]],hostVars:1,hostBindings:function(i,r){2&i&&e.Ikx("rel",r.rel)}}),t})(),g=(()=>{class t{constructor(i){this.ngControl=i}set disabledControl(i){this.ngControl.control[i?"disable":"enable"]()}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(m.a5))},t.\u0275dir=e.lG2({type:t,selectors:[["","formControlName",""],["","formControl","","disabledControl",""]],inputs:{disabledControl:"disabledControl"}}),t})(),b=(()=>{class t{constructor(i){this.ngFor=i,this.ngFor.ngForTrackBy=(r,u)=>u.id}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(c.sg,1))},t.\u0275dir=e.lG2({type:t,selectors:[["","ngForTrackById",""]]}),t})(),F=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.ez]}),t})(),C=(()=>{class t{constructor(i){this.el=i}get x(){var i,r;return null===(r=null===(i=this.el.nativeElement)||void 0===i?void 0:i.getBoundingClientRect())||void 0===r?void 0:r.x}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(e.SBq))},t.\u0275dir=e.lG2({type:t,selectors:[["","angStickyTable",""]]}),t})(),T=(()=>{class t{constructor(i,r){this.el=i,this.table=r}ngAfterViewInit(){const i=this.el.nativeElement,{x:r}=i.getBoundingClientRect();i.style.position="sticky",i.style.left=this.table?r-this.table.x+"px":"0px",i.style.background="#ccc",i.style.zIndex="1000"}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(e.SBq),e.Y36(C,8))},t.\u0275dir=e.lG2({type:t,selectors:[["","angSticky",""]]}),t})(),I=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.ez]}),t})(),w=(()=>{class t{constructor(i){this.elementRef=i,this.minWidth="5em",this.maxWidth="1fr",this.columnGap="0.5em",this.rowGap="0.5em",this.gap="0.5em"}get styles(){return`\n     display: grid;\n     grid-template-columns: repeat(auto-fit, minmax(${this.minWidth},${this.maxWidth}));\n     grid-column-gap: ${this.columnGap};\n     grid-row-gap: ${this.rowGap};\n     grid-gap: ${this.gap}`}ngOnInit(){}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(e.SBq))},t.\u0275dir=e.lG2({type:t,selectors:[["","angGrid",""]],hostVars:2,hostBindings:function(i,r){2&i&&e.Akn(r.styles)},inputs:{minWidth:"minWidth",maxWidth:"maxWidth",columnGap:"columnGap",rowGap:"rowGap",gap:"gap"}}),t})(),k=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.ez]}),t})()}}]);