"use strict";(self.webpackChunkportfolio_all_in_one=self.webpackChunkportfolio_all_in_one||[]).push([[7668],{7668:(q,p,c)=>{c.r(p),c.d(p,{StoreModule:()=>A});var i=c(9808),d=c(4202),t=c(5e3),l=c(1135),m=c(9646);const u=[{id:1,name:"ImmutableJS",type:"library",imgUrl:"https://avatars0.githubusercontent.com/u/46405934?s=400&v=4",description:"Immutable data cannot be changed once created, leading to much simpler application development, no defensive copying, and enabling advanced memoization and change detection techniques with simple logic. Persistent data presents a mutative API which does not update the data in-place, but instead always yields new updated data.",price:184.88},{id:2,name:"ReactJS",type:"library",imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png",description:"React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug.",price:245.77},{id:3,name:"AngularJS",type:"framework",imgUrl:"https://angular.io/assets/images/logos/angular/angular.png",description:"Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.",price:368.44},{id:4,name:"VueJS",type:"framework",imgUrl:"https://vuejs.org/images/logo.png",description:"The Progressive JavaScript Framework. An incrementally adoptable ecosystem that scales between a library and a full-featured framework.",price:174.88},{id:5,name:"Redux",type:"library",imgUrl:"https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",description:"A predictable state container for JavaScript apps. Redux helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.",price:134.49},{id:6,name:"MobX",type:"library",imgUrl:"https://cdn-images-1.medium.com/max/1600/1*Hlj8qvb2M0oqjgk36Yz5LA.png",description:"MobX is a simple, scalable and battle tested state management solution. This tutorial will teach you all the important concepts of MobX in ten minutes. MobX is a standalone library, but most people are using it with React and this tutorial focuses on that combination.",price:214.12},{id:7,name:"KarmaJS",type:"library",imgUrl:"https://cdn.worldvectorlogo.com/logos/karma.svg",description:"Karma is essentially a tool which spawns a web server that executes source code against test code for each of the browsers connected. The results of each test against each browser are examined and displayed via the command line to the developer such that they can see which browsers and tests passed or failed.",price:88.99},{id:8,name:"Jest",type:"library",imgUrl:"https://camo.githubusercontent.com/f6414ee20933d5fb8b06dc32ed38c8aa175da559/687474703a2f2f64702e68616e6c6f6e2e696f2f3331337933753244307033382f6a6573742e706e67",description:"Jest is a delightful JavaScript Testing Framework with a focus on simplicity. Jest aims to work out of the box, config free, on most JavaScript projects.",price:111.99}];var g=c(520);let s=(()=>{class n{constructor(e){this.http=e,this.url="//www.mocky.io/v2/",this.cartItems=new l.X([]),this.cartItemsCount=new l.X(0)}getProducts(){return(0,m.of)(u)}getCartItems(){return this.cartItems.asObservable()}getCartItemsCount(){return this.cartItemsCount.asObservable()}addCartItem(e){const o=this.cartItems.getValue(),a=o.find(M=>M.id===e.id);a?++a.quantity:(e.quantity=1,o.push(e)),this.cartItems.next(o),this.cartItemsCount.next(o.length)}removeCartItem(e){let o=this.cartItems.getValue();o=o.filter(a=>a.id!==e.id),this.cartItems.next(o),this.cartItemsCount.next(o.length)}setCartItemsCount(e){this.cartItemsCount.next(e)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(g.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();class h{constructor(r){this.id=r.id,this.name=r.name,this.type=r.type,this.imgUrl=r.imgUrl,this.description=r.description,this.price=r.price,this.quantity=r.quantity}get total(){return this.price?this.price*this.quantity:0}}function f(n,r){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.hij("(",e.cartItem.quantity,")")}}let C=(()=>{class n{constructor(e){this.storeService=e}addToCart(e){const o=new h(e);this.storeService.addCartItem(o)}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(s))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-product"]],inputs:{product:"product",cartItem:"cartItem"},decls:14,vars:9,consts:[["width","100%","height","200px",3,"src","alt"],[1,"price"],[1,"heading"],[1,"add",3,"click"],[4,"ngIf"]],template:function(e,o){1&e&&(t.TgZ(0,"figure")(1,"div"),t._UZ(2,"img",0),t.TgZ(3,"div",1),t._uU(4),t.ALo(5,"currency"),t.qZA()(),t.TgZ(6,"figcaption")(7,"h3",2),t._uU(8),t.qZA(),t.TgZ(9,"p"),t._uU(10),t.qZA(),t.TgZ(11,"a",3),t.NdJ("click",function(){return o.addToCart(o.product)}),t._uU(12," Add to Cart "),t.YNc(13,f,2,1,"span",4),t.qZA()()()),2&e&&(t.xp6(2),t.Q6J("src",o.product.imgUrl,t.LSH)("alt",o.product.name),t.xp6(2),t.Oqu(t.xi3(5,6,o.product.price,"USD")),t.xp6(4),t.Oqu(o.product.name),t.xp6(2),t.Oqu(o.product.description),t.xp6(3),t.Q6J("ngIf",o.cartItem))},dependencies:[i.O5,i.H9],styles:['figure[_ngcontent-%COMP%]{position:relative;border:1px solid #d1d5db}.heading[_ngcontent-%COMP%]{padding:10px;background-color:#294982;color:#fff}.price[_ngcontent-%COMP%]{position:absolute;top:0;right:0;color:#fff;background-color:#000;padding:0 10px;line-height:40px;font-weight:800}.price[_ngcontent-%COMP%]:before{position:absolute;right:100%;border-style:solid;border-width:0 12px 40px 0;border-color:transparent #000000 transparent;content:"";top:0}.add[_ngcontent-%COMP%]{text-decoration:none;position:absolute;bottom:0;right:0;background-color:#000;line-height:40px;padding:0 10px;color:#fff;font-weight:800;font-size:.9em;text-transform:uppercase}.add[_ngcontent-%COMP%]:before{position:absolute;right:100%;border-style:solid;border-width:0 0 40px 12px;border-color:transparent transparent #000000;content:"";top:0}img[_ngcontent-%COMP%]:hover{transform:scale(1.1)}.disabled[_ngcontent-%COMP%]{opacity:.4;pointer-events:none}']}),n})();function v(n,r){if(1&n&&t._UZ(0,"app-product",1),2&n){const e=r.$implicit,o=t.oxw();t.Q6J("product",e)("cartItem",o.getCartItem(e.id))}}let _=(()=>{class n{constructor(e){this.storeService=e,this.products=[],this.subscriptions=[]}ngOnInit(){this.getProducts(),this.getCartItems()}getCartItems(){this.storeService.getCartItems().subscribe(o=>this.cardItems=o)}getCartItem(e){return this.cardItems.length&&this.cardItems.find(o=>o.id===e)}getProducts(){this.storeService.getProducts().subscribe(e=>{this.products=e})}ngOnDestroy(){}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(s))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-products"]],decls:1,vars:1,consts:[[3,"product","cartItem",4,"ngFor","ngForOf"],[3,"product","cartItem"]],template:function(e,o){1&e&&t.YNc(0,v,1,2,"app-product",0),2&e&&t.Q6J("ngForOf",o.products)},dependencies:[i.sg,C],styles:["[_nghost-%COMP%]{display:flex;flex-wrap:wrap;gap:1rem;color:#000}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{flex:1 0 400px;display:flex}"]}),n})(),y=(()=>{class n{constructor(e){this.storeService=e}ngOnInit(){}updateCart(e){this.storeService.removeCartItem(e)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(s))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-cart-item"]],inputs:{cartItem:"cartItem"},decls:30,vars:10,consts:[[1,"row","align-item-center","border","border-primary"],[1,"image","col"],["width","100%","height","200px",3,"src","alt"],[1,"name","col"],[1,"title"],[1,"value"],[1,"quantity","col"],[1,"price","col"],[1,"total-price","col"],[1,"action","col"],["type","button",1,"btn","btn-danger",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"img",2),t.qZA(),t.TgZ(3,"div",3)(4,"div",4),t._uU(5,"Product Name"),t.qZA(),t.TgZ(6,"div",5),t._uU(7),t.qZA()(),t.TgZ(8,"div",6)(9,"div",4),t._uU(10,"Qty"),t.qZA(),t.TgZ(11,"div",5),t._uU(12),t.qZA()(),t.TgZ(13,"div",7)(14,"div",4),t._uU(15,"Price per 1pc"),t.qZA(),t.TgZ(16,"div",5),t._uU(17),t.ALo(18,"currency"),t.qZA()(),t.TgZ(19,"div",8)(20,"div",4),t._uU(21,"Line total"),t.qZA(),t.TgZ(22,"div",5),t._uU(23),t.ALo(24,"currency"),t.qZA()(),t.TgZ(25,"div",9),t._UZ(26,"div",4),t.TgZ(27,"div",5)(28,"button",10),t.NdJ("click",function(){return o.updateCart(o.cartItem)}),t._uU(29," Remove Item "),t.qZA()()()()),2&e&&(t.xp6(2),t.Q6J("src",o.cartItem.imgUrl,t.LSH)("alt",o.cartItem.name),t.xp6(5),t.Oqu(o.cartItem.name),t.xp6(5),t.hij(" ",o.cartItem.quantity," "),t.xp6(5),t.hij(" ",t.lcZ(18,6,o.cartItem.price)," "),t.xp6(6),t.hij(" ",t.lcZ(24,8,o.cartItem.total)," "))},dependencies:[i.H9],styles:["[_nghost-%COMP%]{color:#000}.action[_ngcontent-%COMP%]{align-items:center;display:flex}.align-item-center[_ngcontent-%COMP%]{align-items:center}"]}),n})();function I(n,r){if(1&n&&(t.ynx(0),t._UZ(1,"app-cart-item",2),t.BQk()),2&n){const e=r.$implicit;t.xp6(1),t.Q6J("cartItem",e)}}function b(n,r){if(1&n&&(t.TgZ(0,"div")(1,"div")(2,"div"),t._uU(3,"Total amount for payment:"),t.qZA(),t.TgZ(4,"div"),t._uU(5),t.ALo(6,"currency"),t.qZA()()()),2&n){const e=t.oxw(2);t.xp6(5),t.Oqu(t.lcZ(6,1,e.getTotal(e.cartItems)))}}function Z(n,r){1&n&&(t.TgZ(0,"div"),t._uU(1," No item(s) in the cart "),t.qZA())}function S(n,r){if(1&n&&(t.ynx(0),t.YNc(1,I,2,1,"ng-container",1),t.YNc(2,b,7,3,"div",0),t.YNc(3,Z,2,0,"div",0),t.BQk()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.cartItems),t.xp6(1),t.Q6J("ngIf",e.cartItems.length),t.xp6(1),t.Q6J("ngIf",!e.cartItems.length)}}let w=(()=>{class n{constructor(e){this.storeService=e}getTotal(e){return e.reduce((o,a)=>o+a.total,0)}ngOnInit(){this.cartItems$=this.storeService.getCartItems(),this.storeService.getCartItems().subscribe(e=>{this.cartItems=e})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(s))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-cart"]],decls:2,vars:1,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"cartItem"]],template:function(e,o){1&e&&(t.TgZ(0,"div"),t.YNc(1,S,4,3,"ng-container",0),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",o.cartItems))},dependencies:[i.sg,i.O5,y,i.H9],styles:["[_nghost-%COMP%]{color:#000}"]}),n})();function x(n,r){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const e=r.ngIf;t.xp6(1),t.hij(" (",null==e?null:e.length,")")}}function T(n,r){1&n&&t._UZ(0,"app-products")}function O(n,r){1&n&&t._UZ(0,"app-cart")}const P=[{path:"",component:(()=>{class n{constructor(e,o){this.shoppingCartService=e,this.renderer=o,this.isShoppingCartVisible=!1}openShoppingCart(){this.isShoppingCartVisible=!this.isShoppingCartVisible}ngOnInit(){this.cartItems$=this.shoppingCartService.getCartItems()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(s),t.Y36(t.Qsj))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-store"]],decls:10,vars:5,consts:[[3,"click"],[4,"ngIf"]],template:function(e,o){1&e&&(t.TgZ(0,"header")(1,"h2"),t._uU(2,"Store"),t.qZA(),t.TgZ(3,"a",0),t.NdJ("click",function(){return o.openShoppingCart()}),t._uU(4," Checkout "),t.YNc(5,x,2,1,"span",1),t.ALo(6,"async"),t.qZA()(),t.TgZ(7,"main"),t.YNc(8,T,1,0,"app-products",1),t.YNc(9,O,1,0,"app-cart",1),t.qZA()),2&e&&(t.xp6(5),t.Q6J("ngIf",t.lcZ(6,3,o.cartItems$)),t.xp6(3),t.Q6J("ngIf",!o.isShoppingCartVisible),t.xp6(1),t.Q6J("ngIf",o.isShoppingCartVisible))},dependencies:[i.O5,_,w,i.Ov],styles:["header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;background-color:#1976d2;padding:.5rem}header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif;color:#fff;text-decoration:none;font-size:1.5rem}header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:hover{opacity:.7}header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer;color:#fff}main[_ngcontent-%COMP%]{padding:1rem}"]}),n})()}];let U=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[d.Bz.forChild(P),d.Bz]}),n})(),A=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[i.ez,U]}),n})()}}]);