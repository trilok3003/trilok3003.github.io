"use strict";(self.webpackChunkportfolio_all_in_one=self.webpackChunkportfolio_all_in_one||[]).push([[984],{984:(A,f,a)=>{a.r(f),a.d(f,{EcommerceModule:()=>S});var e=a(6895),b=a(4793),t=a(4650),h=a(1189),p=a(4006),k=a(3900),C=a(8675),v=a(2805),T=a(9718);let U=(()=>{class i{getDiscount(n){return(0,v.H)(1e3).pipe((0,T.h)(this.calculate(n)),(0,C.O)(NaN))}calculate(n){switch(!0){case n<5:return 0;case n<10:return 5;default:return 10}}static#t=this.\u0275fac=function(o){return new(o||i)};static#e=this.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var x=a(677);function q(i,y){if(1&i&&(t.TgZ(0,"section"),t._uU(1," You save: "),t.TgZ(2,"strong"),t._uU(3),t.qZA(),t._UZ(4,"hr"),t._uU(5," Total: "),t.TgZ(6,"strong"),t._uU(7),t.qZA()()),2&i){const n=y.ngLet,o=t.oxw();t.xp6(2),t.ekj("green",n)("computing",o.isNaN(n)),t.xp6(1),t.hij(" $",o.getSavings(n)," "),t.xp6(3),t.ekj("computing",o.isNaN(n)),t.xp6(1),t.hij(" $",o.getTotal(n)," ")}}let O=(()=>{class i{constructor(n){this.service=n,this.price=19.95,this.quantity=new p.NI(0),this.discount$=this.quantity.valueChanges.pipe((0,k.w)(o=>this.service.getDiscount(o)),(0,C.O)(0))}get sum(){return Math.round(this.price*this.quantity.value*100)/100}isNaN(n){return isNaN(n)}getSavings(n){return Math.round(this.sum*n)/100}getTotal(n){return Math.round(this.quantity.value*this.price*(100-n))/100}ngOnInit(){}static#t=this.\u0275fac=function(o){return new(o||i)(t.Y36(U))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-cart"]],decls:30,vars:8,consts:[[1,"header"],["type","number","min","0",3,"formControl"],[4,"ngLet"]],template:function(o,c){1&o&&(t.TgZ(0,"div",0),t._uU(1,"Cart"),t.qZA(),t.TgZ(2,"h2"),t._uU(3,"Items:"),t.qZA(),t.TgZ(4,"table")(5,"thead")(6,"tr")(7,"th"),t._uU(8," Title: "),t.qZA(),t.TgZ(9,"th"),t._uU(10," Price "),t.qZA(),t.TgZ(11,"th"),t._uU(12," Quantity "),t.qZA()()(),t.TgZ(13,"tbody")(14,"tr")(15,"td"),t._uU(16," Monty Python and the Holy Grail "),t.qZA(),t.TgZ(17,"td"),t._uU(18),t.qZA(),t.TgZ(19,"td"),t._UZ(20,"input",1),t.qZA()()()(),t._UZ(21,"hr"),t.TgZ(22,"h2"),t._uU(23," Checkout:\n"),t.qZA(),t.TgZ(24,"p"),t._uU(25),t.TgZ(26,"strong"),t._uU(27),t.qZA()(),t.YNc(28,q,8,8,"section",2),t.ALo(29,"async")),2&o&&(t.xp6(18),t.hij(" $",c.price," "),t.xp6(2),t.Q6J("formControl",c.quantity),t.xp6(5),t.AsE(" Sum: ",c.quantity.value," \xd7 $",c.price," = "),t.xp6(2),t.hij("$",c.sum,""),t.xp6(1),t.Q6J("ngLet",t.lcZ(29,6,c.discount$)))},dependencies:[p.Fj,p.wV,p.JJ,p.qQ,p.oH,x.eJ,e.Ov],styles:['@keyframes _ngcontent-%COMP%_spin{to{transform:rotate(360deg)}}.green[_ngcontent-%COMP%]{color:#006400}.computing[_ngcontent-%COMP%]{font-size:0}.computing[_ngcontent-%COMP%]:after{content:"";display:inline-block;width:10px;height:10px;border-radius:100%;border:2px solid transparent;border-top-color:currentColor;animation:_ngcontent-%COMP%_spin .5s linear infinite}table[_ngcontent-%COMP%]{border-collapse:collapse;border-spacing:0}th[_ngcontent-%COMP%]{text-align:left;opacity:.5}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{border:1px solid gainsboro;padding:.5em}input[_ngcontent-%COMP%]{border:1px solid gainsboro;padding:.5em;width:50px}hr[_ngcontent-%COMP%]{margin:2em;border:1px solid}.main-heading[_ngcontent-%COMP%]{border-radius:8px;background:linear-gradient(135deg,#ce4039,#9836a6,#3d6bb1);padding:10px 16px;box-sizing:border-box;display:flex;align-items:center;justify-content:center;color:#fff;text-decoration:none;font-family:sans-serif;font-size:14px;margin-bottom:8px;white-space:nowrap}.header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #d7d7d7;padding-left:20px}']})}return i})();var s=a(1859);function d(i,y){if(1&i){const n=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._UZ(4,"img",6),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.TgZ(11,"button",7),t.NdJ("click",function(){const g=t.CHM(n).$implicit,_=t.oxw();return t.KtG(_.add(g.product_id))}),t._uU(12,"+"),t.qZA(),t.TgZ(13,"button",8),t.NdJ("click",function(){const g=t.CHM(n).$implicit,_=t.oxw();return t.KtG(_.del(g.product_id))}),t._uU(14,"-"),t.qZA()(),t.TgZ(15,"td")(16,"button",9),t.NdJ("click",function(){const g=t.CHM(n).$implicit,_=t.oxw();return t.KtG(_.getpopup(g))}),t._uU(17,"View"),t.qZA(),t._uU(18," \xa0 "),t.TgZ(19,"button",10),t.NdJ("click",function(){const g=t.CHM(n).$implicit,_=t.oxw();return t.KtG(_.delpopup(g.product_id))}),t._uU(20,"Delete"),t.qZA()()()}if(2&i){const n=y.$implicit;t.xp6(2),t.Oqu(n.product_id),t.xp6(2),t.s9C("src",n.product_img,t.LSH),t.xp6(2),t.Oqu(n.product_name),t.xp6(2),t.Oqu(n.product_price),t.xp6(2),t.hij(" ",n.product_quality," ")}}function r(i,y){if(1&i){const n=t.EpF();t.TgZ(0,"div",11)(1,"div",12)(2,"button",13),t._uU(3,"\xd7"),t.qZA(),t.TgZ(4,"h4",14),t._uU(5),t.qZA()(),t.TgZ(6,"div",15)(7,"p"),t._uU(8),t.qZA()(),t.TgZ(9,"div",16)(10,"button",17),t.NdJ("click",function(){t.CHM(n);const c=t.oxw();return t.KtG(c.selectedProduct=null)}),t._uU(11,"Close"),t.qZA()()()}if(2&i){const n=t.oxw();t.xp6(5),t.Oqu(n.selectedProduct.product_name),t.xp6(3),t.Oqu(n.selectedProduct.product_details)}}const u=function(i){return{"in show":i}},l=function(i){return{display:i}};let m=(()=>{class i{constructor(){this.total=0,this.products=[{product_id:"pd100",product_img:"https://rukminim1.flixcart.com/image/312/312/j7hxmkw0/computer/b/g/j/hp-na-laptop-original-imaexq9fgzxzhmas.jpeg?q=70",product_name:"Laptop",product_price:3e4,product_details:"Lenovo Ideapad 320E Core i5 7th Gen - (4 GB/1 TB HDD/Windows 10 Home/2 GB Graphics) IP 320-15IKB Laptop  (15.6 inch, Onyx Black, 2.2 kg)",product_quality:3},{product_id:"pd101",product_img:"https://4.imimg.com/data4/BB/RH/MY-15241145/multimedia-mobile-phone-500x500.jpg",product_name:"Mobile",product_price:54e3,product_details:"Stunning visuals on a 15.2-cm (5.99) FHD+ display, a powerful 1.8 GHz Snapdragon 636 processor, and expandable memory of up to 128 GB - the Redmi Note 5 Pro has much to offer. The (12 MP + 5 MP) dual rear camera setup and a 20 MP front camera, coupled with features such as Beautify 4.0, let you take truly beautiful pictures and selfies.",product_quality:5},{product_id:"pd102",product_img:"https://pisces.bbystatic.com/image2/BestBuy_US/en_US/images/abn/2014/tvv/cat/tv/tv_size4a.jpg;maxHeight=333;maxWidth=333",product_name:"Television",product_price:22e3,product_details:"Bring home the Mi LED Smart TV 4A 108 cm (43) and delight your senses with crisp images and rich audio quality. It features Full HD LED Display that gives you crystal clear visuals while the Stereo Speakers make for immersive sound quality, leaving no room for a dull moment.",product_quality:6},{product_id:"pd103",product_img:"https://rukminim1.flixcart.com/image/312/312/j6gs6fk0/headphone/z/d/h/apple-beats-solo3-original-imaewxpd7eqgqqvq.jpeg?q=70",product_name:"Headphone",product_price:1300,product_details:"Enjoy enhanced and immersive listening experience by investing in these Sony headphones. The pair is designed for you to enjoy the powerful bass and clear sound. They are durable and can handle rough use as well.",product_quality:13}]}ngOnInit(){this.totalPrice()}getpopup(n){this.selectedProduct=n}delpopup(n){for(var o=0;o<this.products.length;o++)this.products[o].product_id===n&&this.products.splice(o,1);this.totalPrice()}totalPrice(){this.total=0;for(var n=0;n<this.products.length;n++)this.total+=this.products[n].product_price*this.products[n].product_quality}add(n){for(var o=0;o<this.products.length;o++)this.products[o].product_id===n&&(this.products[o].product_quality+=1);this.totalPrice()}del(n){for(var o=0;o<this.products.length;o++)this.products[o].product_id===n&&(this.products[o].product_quality-=1);this.totalPrice()}static#t=this.\u0275fac=function(o){return new(o||i)};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-shopping-cart"]],decls:27,vars:12,consts:[[1,"table","table-bordered"],[4,"ngFor","ngForOf"],["colspan","6",1,"text-right"],["id","productinfoModal","role","dialog",1,"modal","fade",3,"ngClass","ngStyle"],[1,"modal-dialog"],["class","modal-content",4,"ngIf"],[1,"img-thumbnail",2,"height","100px",3,"src"],[1,"btn","btn-success","btn-xs","plus",3,"click"],[1,"btn","btn-danger","btn-xs","minus",3,"click"],[1,"btn","btn-primary","btn-sm",3,"click"],[1,"btn","btn-danger","btn-sm",3,"click"],[1,"modal-content"],[1,"modal-header"],["data-dismiss","modal","type","button",1,"close"],[1,"modal-title"],[1,"modal-body"],[1,"modal-footer"],["data-dismiss","modal","type","button",1,"btn","btn-default",3,"click"]],template:function(o,c){1&o&&(t.TgZ(0,"table",0)(1,"thead")(2,"tr")(3,"th"),t._uU(4,"ID"),t.qZA(),t.TgZ(5,"th"),t._uU(6,"Image"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"Name"),t.qZA(),t.TgZ(9,"th"),t._uU(10,"Price"),t.qZA(),t.TgZ(11,"th"),t._uU(12,"Quatity"),t.qZA(),t.TgZ(13,"th"),t._uU(14,"Action"),t.qZA()()(),t.TgZ(15,"tbody"),t.YNc(16,d,21,5,"tr",1),t.qZA(),t.TgZ(17,"tfoot")(18,"tr")(19,"td"),t._uU(20,"Total Price"),t.qZA(),t.TgZ(21,"td",2),t._uU(22),t.ALo(23,"currency"),t.qZA()()()(),t.TgZ(24,"div",3)(25,"div",4),t.YNc(26,r,12,2,"div",5),t.qZA()()),2&o&&(t.xp6(16),t.Q6J("ngForOf",c.products),t.xp6(6),t.Oqu(t.xi3(23,5,c.total,"INR")),t.xp6(2),t.Q6J("ngClass",t.VKq(8,u,null==c.selectedProduct?null:c.selectedProduct.product_id))("ngStyle",t.VKq(10,l,null!=c.selectedProduct&&c.selectedProduct.product_id?"block":"none")),t.xp6(2),t.Q6J("ngIf",c.selectedProduct))},dependencies:[e.mk,e.sg,e.O5,e.PC,e.H9],styles:[".table[_ngcontent-%COMP%] > thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%]{background:#EEE}.plus[_ngcontent-%COMP%]{margin-right:5px;margin-left:10px}"]})}return i})();const P=[{path:"",component:(()=>{class i{static#t=this.\u0275fac=function(o){return new(o||i)};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-ecommerce"]],decls:7,vars:0,consts:[["tabTitle","cart"],["tabTitle","counters-basket"],["tabTitle","app-shopping-cart"]],template:function(o,c){1&o&&(t.TgZ(0,"ng-tabs")(1,"ng-tab",0),t._UZ(2,"app-cart"),t.qZA(),t.TgZ(3,"ng-tab",1),t._UZ(4,"app-counters-basket"),t.qZA(),t.TgZ(5,"ng-tab",2),t._UZ(6,"app-shopping-cart"),t.qZA()())},dependencies:[h.n4,h.id,O,s.CountersBasketComponent,m]})}return i})()}];let M=(()=>{class i{static#t=this.\u0275fac=function(o){return new(o||i)};static#e=this.\u0275mod=t.oAB({type:i});static#n=this.\u0275inj=t.cJS({imports:[b.Bz.forChild(P),b.Bz]})}return i})(),S=(()=>{class i{static#t=this.\u0275fac=function(o){return new(o||i)};static#e=this.\u0275mod=t.oAB({type:i});static#n=this.\u0275inj=t.cJS({imports:[e.ez,p.u5,p.UX,M,h.P4,x.or]})}return i})()},1859:(A,f,a)=>{a.r(f),a.d(f,{CountersBasketComponent:()=>O});var e=a(4650),b=a(1135);let t=(()=>{class s{constructor(){this._items=new b.X(null),this._basketCounter=new b.X(0)}get items$(){return console.log("get items$"),this._items}get basketCounter$(){return console.log("get basketCounter$"),this._basketCounter}static#t=this.\u0275fac=function(u){return new(u||s)};static#e=this.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();var h=a(6895),p=a(4793);function k(s,d){if(1&s){const r=e.EpF();e.TgZ(0,"article",5)(1,"div",6),e.NdJ("click",function(){const m=e.CHM(r).$implicit,Z=e.oxw(2);return e.KtG(Z.subtract(m))}),e._uU(2," - "),e.qZA(),e.TgZ(3,"label",7),e._uU(4),e._UZ(5,"input",8),e.qZA(),e.TgZ(6,"div",6),e.NdJ("click",function(){const m=e.CHM(r).$implicit,Z=e.oxw(2);return e.KtG(Z.add(m))}),e._uU(7," + "),e.qZA()()}if(2&s){const r=d.$implicit;e.xp6(4),e.hij(" ",r.name," "),e.xp6(1),e.Q6J("value",r.count?r.count:0)}}function C(s,d){if(1&s&&(e.ynx(0),e.YNc(1,k,8,2,"article",4),e.BQk()),2&s){const r=e.oxw();e.xp6(1),e.Q6J("ngForOf",r.items)}}function v(s,d){if(1&s&&(e.TgZ(0,"article",14)(1,"div",15),e._uU(2),e.qZA(),e.TgZ(3,"div",15),e._uU(4),e.qZA()()),2&s){const r=e.oxw().$implicit;e.xp6(2),e.hij(" ",r.name," "),e.xp6(2),e.hij(" ",r.count," ")}}function T(s,d){if(1&s&&(e.ynx(0),e.YNc(1,v,5,2,"article",13),e.BQk()),2&s){const r=d.$implicit;e.xp6(1),e.Q6J("ngIf",r.count>0)}}function U(s,d){if(1&s&&(e.ynx(0),e.YNc(1,T,2,1,"ng-container",12),e.BQk()),2&s){const r=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",r.basketItems)}}function x(s,d){1&s&&(e._uU(0," Your basket is empty."),e._UZ(1,"br"),e.TgZ(2,"a",16),e._uU(3,"Continue shopping"),e.qZA())}function q(s,d){if(1&s&&(e.TgZ(0,"section",9),e.YNc(1,U,2,1,"ng-container",10),e.YNc(2,x,4,0,"ng-template",null,11,e.W1O),e.qZA()),2&s){const r=e.MAs(3),u=e.oxw();e.xp6(1),e.Q6J("ngIf",u.basketCounter>0)("ngIfElse",r)}}let O=(()=>{class s{constructor(r){this.itemService=r,this.items=[{name:"Bed",count:0},{name:"Table",count:0},{name:"Chair",count:0},{name:"Sofa",count:0},{name:"DVD Player",count:0},{name:"Television",count:0},{name:"Computer",count:0},{name:"Piano",count:0}],this.basketCounter=0,this.selectNav="home"}ngOnInit(){this.itemService.basketCounter$.subscribe(r=>{this.basketCounter=r}),this.itemService.items$.subscribe(r=>{r&&r.length>0&&(this.basketItems=r)})}subtract(r){console.log("subtract"),r&&r.count-1>=0&&(r.count-=1,console.log("subtract",this.items),this.itemService.items$.next(this.items),this.itemService.basketCounter$.next(this.basketCounter-1))}add(r){console.log("addition"),r&&(r.count+=1,console.log("addition",this.items),this.itemService.items$.next(this.items),this.itemService.basketCounter$.next(this.basketCounter+1))}static#t=this.\u0275fac=function(u){return new(u||s)(e.Y36(t))};static#e=this.\u0275cmp=e.Xpm({type:s,selectors:[["app-counters-basket"]],inputs:{title:"title"},decls:8,vars:3,consts:[[1,"navigation"],[1,"navigation__item",3,"click"],[4,"ngIf"],["class","basket",4,"ngIf"],["class","number-selector",4,"ngFor","ngForOf"],[1,"number-selector"],[1,"number-selector__icon",3,"click"],[1,"number-selector__item-name"],["type","number","name","item-counter",1,"number-selector__value",3,"value"],[1,"basket"],[4,"ngIf","ngIfElse"],["noItem",""],[4,"ngFor","ngForOf"],["class","basket__item",4,"ngIf"],[1,"basket__item"],[1,"basket__column"],["routerLink","/"]],template:function(u,l){1&u&&(e._uU(0),e.TgZ(1,"nav",0)(2,"a",1),e.NdJ("click",function(){return l.selectNav="home"}),e._uU(3,"Home page"),e.qZA(),e.TgZ(4,"a",1),e.NdJ("click",function(){return l.selectNav="basket"}),e._uU(5,"Basket"),e.qZA()(),e.YNc(6,C,2,1,"ng-container",2),e.YNc(7,q,4,2,"section",3)),2&u&&(e.hij("",l.title,"\n"),e.xp6(6),e.Q6J("ngIf",l.items&&l.items.length>0&&"home"===l.selectNav),e.xp6(1),e.Q6J("ngIf","basket"===l.selectNav))},dependencies:[h.sg,h.O5,p.rH],styles:[".navigation[_ngcontent-%COMP%]{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;margin-bottom:1rem;-webkit-user-select:none;user-select:none}.navigation__item[_ngcontent-%COMP%]{display:inline-block;background-color:#fff;border:1px solid darkred;border-radius:6px;margin-right:1rem;padding:.5rem 1rem;text-decoration:none}.navigation__item[_ngcontent-%COMP%]:hover{text-decoration:underline}.number-selector[_ngcontent-%COMP%]{display:flex;flex:1 0 auto;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;margin:1rem 0;-webkit-user-select:none;user-select:none}.number-selector__item-name[_ngcontent-%COMP%]{font-size:1.5rem}.number-selector__value[_ngcontent-%COMP%]{font-size:1.5rem;width:2.7rem}.number-selector__icon[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;background:darkred;border-radius:50%;color:#fff;cursor:pointer;font-size:1rem;font-weight:700;margin:0 1rem;padding:.5rem;height:2rem;width:2rem}.basket[_ngcontent-%COMP%]{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;text-align:center}.basket__item[_ngcontent-%COMP%]{display:flex;justify-content:space-around;border:1px solid #339933;border-top:none;font-size:2rem;padding:2rem 0;-webkit-user-select:none;user-select:none}.basket__item[_ngcontent-%COMP%]:first-child{border-top:1px solid #339933}"]})}return s})()}}]);