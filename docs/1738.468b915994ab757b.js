"use strict";(self.webpackChunkportfolio_all_in_one=self.webpackChunkportfolio_all_in_one||[]).push([[1738],{1738:(M,u,s)=>{s.r(u),s.d(u,{StoreModule:()=>q});var i=s(9808),p=s(4202),t=s(5e3),d=s(1135),l=s(520);let a=(()=>{class n{constructor(e){this.http=e,this.url="//www.mocky.io/v2/",this.cartItems=new d.X([]),this.cartItemsCount=new d.X(0)}getProducts(){return this.http.get(`${this.url}5cc95d2b310000db0c12ccb1`)}getCartItems(){return this.cartItems.asObservable()}getCartItemsCount(){return this.cartItemsCount.asObservable()}addCartItem(e){const o=this.cartItems.getValue(),c=o.find(U=>U.id===e.id);c?++c.quantity:(e.quantity=1,o.push(e)),this.cartItems.next(o),this.cartItemsCount.next(o.length)}removeCartItem(e){let o=this.cartItems.getValue();o=o.filter(c=>c.id!==e.id),this.cartItems.next(o),this.cartItemsCount.next(o.length)}setCartItemsCount(e){this.cartItemsCount.next(e)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(l.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();class m{constructor(r){this.id=r.id,this.name=r.name,this.type=r.type,this.imgUrl=r.imgUrl,this.description=r.description,this.price=r.price,this.quantity=r.quantity}get total(){return this.price?this.price*this.quantity:0}}function g(n,r){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.hij("(",e.cartItem.quantity,")")}}let h=(()=>{class n{constructor(e){this.storeService=e}addToCart(e){const o=new m(e);this.storeService.addCartItem(o)}ngOnInit(){console.log(this.product)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(a))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-product"]],inputs:{product:"product",cartItem:"cartItem"},decls:14,vars:9,consts:[[1,"card"],["width","100%","height","200px",3,"src","alt"],[1,"price"],[1,"heading"],[1,"add",3,"click"],[4,"ngIf"]],template:function(e,o){1&e&&(t.TgZ(0,"figure",0)(1,"div"),t._UZ(2,"img",1),t.TgZ(3,"div",2),t._uU(4),t.ALo(5,"currency"),t.qZA()(),t.TgZ(6,"figcaption")(7,"h3",3),t._uU(8),t.qZA(),t.TgZ(9,"p"),t._uU(10),t.qZA(),t.TgZ(11,"a",4),t.NdJ("click",function(){return o.addToCart(o.product)}),t._uU(12," Add to Cart "),t.YNc(13,g,2,1,"span",5),t.qZA()()()),2&e&&(t.xp6(2),t.Q6J("src",o.product.imgUrl,t.LSH)("alt",o.product.name),t.xp6(2),t.Oqu(t.xi3(5,6,o.product.price,"USD")),t.xp6(4),t.Oqu(o.product.name),t.xp6(2),t.Oqu(o.product.description),t.xp6(3),t.Q6J("ngIf",o.cartItem))},dependencies:[i.O5,i.H9],styles:['.heading[_ngcontent-%COMP%]{padding:10px;background-color:#294982;color:#fff}.price[_ngcontent-%COMP%]{position:absolute;top:0;right:0;color:#fff;background-color:#000;padding:0 10px;line-height:40px;font-weight:800}.price[_ngcontent-%COMP%]:before{position:absolute;right:100%;border-style:solid;border-width:0 12px 40px 0;border-color:transparent #000000 transparent;content:"";top:0}.add[_ngcontent-%COMP%]{text-decoration:none;position:absolute;bottom:0;right:0;background-color:#000;line-height:40px;padding:0 10px;color:#fff;font-weight:800;font-size:.9em;text-transform:uppercase}.add[_ngcontent-%COMP%]:before{position:absolute;right:100%;border-style:solid;border-width:0 0 40px 12px;border-color:transparent transparent #000000;content:"";top:0}img[_ngcontent-%COMP%]:hover{transform:scale(1.1)}.disabled[_ngcontent-%COMP%]{opacity:.4;pointer-events:none}']}),n})();function f(n,r){if(1&n&&(t.TgZ(0,"div",2),t._UZ(1,"app-product",3),t.qZA()),2&n){const e=r.$implicit,o=t.oxw();t.xp6(1),t.Q6J("product",e)("cartItem",o.getCartItem(e.id))}}let C=(()=>{class n{constructor(e){this.storeService=e,this.products=[],this.subscriptions=[]}ngOnInit(){this.getProducts(),this.getCartItems()}getCartItems(){const e=this.storeService.getCartItems().subscribe(o=>this.cardItems=o);this.subscriptions.push(e)}getCartItem(e){return this.cardItems.length&&this.cardItems.find(o=>o.id===e)}getProducts(){const e=this.storeService.getProducts().subscribe(o=>{this.products=o});this.subscriptions.push(e)}ngOnDestroy(){this.subscriptions.forEach(e=>e.unsubscribe())}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(a))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-products"]],decls:2,vars:1,consts:[[1,"row"],["class","col-md-3",4,"ngFor","ngForOf"],[1,"col-md-3"],[3,"product","cartItem"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.YNc(1,f,2,2,"div",1),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngForOf",o.products))},dependencies:[i.sg,h],styles:["[_nghost-%COMP%]{color:#000}"]}),n})(),_=(()=>{class n{constructor(e){this.storeService=e}ngOnInit(){}updateCart(e){this.storeService.removeCartItem(e)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(a))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-cart-item"]],inputs:{cartItem:"cartItem"},decls:30,vars:10,consts:[[1,"row","align-item-center","border","border-primary"],[1,"image","col"],["width","100%","height","200px",3,"src","alt"],[1,"name","col"],[1,"title"],[1,"value"],[1,"quantity","col"],[1,"price","col"],[1,"total-price","col"],[1,"action","col"],["type","button",1,"btn","btn-danger",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"img",2),t.qZA(),t.TgZ(3,"div",3)(4,"div",4),t._uU(5,"Product Name"),t.qZA(),t.TgZ(6,"div",5),t._uU(7),t.qZA()(),t.TgZ(8,"div",6)(9,"div",4),t._uU(10,"Qty"),t.qZA(),t.TgZ(11,"div",5),t._uU(12),t.qZA()(),t.TgZ(13,"div",7)(14,"div",4),t._uU(15,"Price per 1pc"),t.qZA(),t.TgZ(16,"div",5),t._uU(17),t.ALo(18,"currency"),t.qZA()(),t.TgZ(19,"div",8)(20,"div",4),t._uU(21,"Line total"),t.qZA(),t.TgZ(22,"div",5),t._uU(23),t.ALo(24,"currency"),t.qZA()(),t.TgZ(25,"div",9),t._UZ(26,"div",4),t.TgZ(27,"div",5)(28,"button",10),t.NdJ("click",function(){return o.updateCart(o.cartItem)}),t._uU(29," Remove Item "),t.qZA()()()()),2&e&&(t.xp6(2),t.Q6J("src",o.cartItem.imgUrl,t.LSH)("alt",o.cartItem.name),t.xp6(5),t.Oqu(o.cartItem.name),t.xp6(5),t.hij(" ",o.cartItem.quantity," "),t.xp6(5),t.hij(" ",t.lcZ(18,6,o.cartItem.price)," "),t.xp6(6),t.hij(" ",t.lcZ(24,8,o.cartItem.total)," "))},dependencies:[i.H9],styles:["[_nghost-%COMP%]{color:#000}.action[_ngcontent-%COMP%]{align-items:center;display:flex}.align-item-center[_ngcontent-%COMP%]{align-items:center}"]}),n})();function I(n,r){if(1&n&&(t.ynx(0),t._UZ(1,"app-cart-item",5),t.BQk()),2&n){const e=r.$implicit;t.xp6(1),t.Q6J("cartItem",e)}}function v(n,r){if(1&n&&(t.TgZ(0,"div",6)(1,"div")(2,"div"),t._uU(3,"Total amount for payment:"),t.qZA(),t.TgZ(4,"div"),t._uU(5),t.ALo(6,"currency"),t.qZA()()()),2&n){const e=t.oxw(2);t.xp6(5),t.Oqu(t.lcZ(6,1,e.getTotal(e.cartItems)))}}function Z(n,r){1&n&&(t.TgZ(0,"div",7),t._uU(1," No item(s) in the cart "),t.qZA())}function b(n,r){if(1&n&&(t.ynx(0),t.YNc(1,I,2,1,"ng-container",2),t.YNc(2,v,7,3,"div",3),t.YNc(3,Z,2,0,"div",4),t.BQk()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.cartItems),t.xp6(1),t.Q6J("ngIf",e.cartItems.length),t.xp6(1),t.Q6J("ngIf",!e.cartItems.length)}}let y=(()=>{class n{constructor(e){this.storeService=e}getTotal(e){return e.reduce((o,c)=>o+c.total,0)}ngOnInit(){this.cartItems$=this.storeService.getCartItems(),this.storeService.getCartItems().subscribe(e=>{this.cartItems=e})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(a))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-cart"]],decls:2,vars:1,consts:[[1,""],[4,"ngIf"],[4,"ngFor","ngForOf"],["class","text-right",4,"ngIf"],["class","no-cart-items",4,"ngIf"],[3,"cartItem"],[1,"text-right"],[1,"no-cart-items"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.YNc(1,b,4,3,"ng-container",1),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",o.cartItems))},dependencies:[i.sg,i.O5,_,i.H9],styles:["[_nghost-%COMP%]{color:#000}"]}),n})();function S(n,r){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const e=r.ngIf;t.xp6(1),t.hij(" (",null==e?null:e.length,")")}}function T(n,r){1&n&&t._UZ(0,"app-products")}function x(n,r){1&n&&t._UZ(0,"app-cart")}const O=function(){return["/navigations/shop/products"]},P=[{path:"",component:(()=>{class n{constructor(e,o){this.shoppingCartService=e,this.renderer=o,this.isShoppingCartVisible=!1}openShoppingCart(){this.isShoppingCartVisible=!this.isShoppingCartVisible}ngOnInit(){this.cartItems$=this.shoppingCartService.getCartItems()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(a),t.Y36(t.Qsj))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-store"]],decls:14,vars:7,consts:[[1,"pt-1","topbar"],[1,"row"],[1,"col-6"],[1,"pt-1",3,"routerLink"],[1,"col-6","pb-1","d-flex","justify-content-end"],[1,"btn","btn-outline-primary","bg-light","text-primary",3,"click"],[4,"ngIf"],[1,"container","mt-2"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"a")(4,"h2",3),t._uU(5,"Store"),t.qZA()()(),t.TgZ(6,"div",4)(7,"a",5),t.NdJ("click",function(){return o.openShoppingCart()}),t._uU(8," Checkout "),t.YNc(9,S,2,1,"span",6),t.ALo(10,"async"),t.qZA()()()(),t.TgZ(11,"div",7),t.YNc(12,T,1,0,"app-products",6),t.YNc(13,x,1,0,"app-cart",6),t.qZA()),2&e&&(t.xp6(4),t.Q6J("routerLink",t.DdM(6,O)),t.xp6(5),t.Q6J("ngIf",t.lcZ(10,4,o.cartItems$)),t.xp6(3),t.Q6J("ngIf",!o.isShoppingCartVisible),t.xp6(1),t.Q6J("ngIf",o.isShoppingCartVisible))},dependencies:[i.O5,p.rH,C,y,i.Ov],styles:[".topbar[_ngcontent-%COMP%]{background-color:#1976d2}.topbar[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif;color:#fff;text-decoration:none;font-size:1.5rem}.topbar[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:hover{opacity:.7}.topbar[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{padding-right:5px}.topbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer}"]}),n})()}];let A=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[p.Bz.forChild(P),p.Bz]}),n})(),q=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[i.ez,A]}),n})()}}]);