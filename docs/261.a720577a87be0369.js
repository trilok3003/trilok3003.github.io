"use strict";(self.webpackChunkportfolio_all_in_one=self.webpackChunkportfolio_all_in_one||[]).push([[261],{3261:(Q,_,p)=>{p.r(_),p.d(_,{CookBookModule:()=>N});var l=p(9808),a=p(4035),e=p(5e3),f=p(4331);let C=(()=>{class o{constructor(){this.menus=[{path:"home",name:"Home"},{path:"cuisine",name:"Cuisine",subMenu:[{path:"cuisine/American",name:"American"},{path:"cuisine/Chinese",name:"Chinese"},{path:"cuisine/Indian",name:"Indian"},{path:"cuisine/Mexican",name:"Mexican"},{path:"cuisine/Canadian",name:"Canadian"}]},{path:"about",name:"About"}]}ngOnInit(){}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-cook-book"]],decls:1,vars:2,consts:[["title","Cook Book",3,"menus","theme"]],template:function(t,n){1&t&&e._UZ(0,"ang-bootstrap-layout",0),2&t&&e.Q6J("menus",n.menus)("theme","default")},dependencies:[f.Pv]}),o})(),v=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-cuisine"]],decls:1,vars:0,template:function(t,n){1&t&&e._UZ(0,"router-outlet")},dependencies:[a.lC]}),o})();var s=p(4004),T=p(520);const c="https://www.themealdb.com";let h=(()=>{class o{constructor(t){this.http=t}filterMeals(t){return this.http.get(`${c}/api/json/v1/1/filter.php`,{params:t}).pipe((0,s.U)(n=>n.meals))}getList(t){return this.http.get(`${c}/api/json/v1/1/list.php`,{params:t}).pipe((0,s.U)(g=>g.meals))}search(t){return this.http.get(`${c}/api/json/v1/1/search.php`,{params:t}).pipe((0,s.U)(n=>n.meals))}getRecipe(t){return this.http.get(`${c}/api/json/v1/1/lookup.php?i=`+t).pipe((0,s.U)(n=>n.meals))}getIngredientDetail(t){return this.http.get(`${c}/api/json/v1/1/lookup.php?iid=`+t).pipe((0,s.U)(n=>n.meals))}getSingleRandomRecipe(){return this.http.get(`${c}/api/json/v1/1/random.php`).pipe((0,s.U)(t=>t.meals))}getMultiRandomRecipe(){return this.http.get(`${c}/api/json/v1/1/randomselection.php`).pipe((0,s.U)(t=>t.meals))}getCategories(){return this.http.get(`${c}/api/json/v1/1/categories.php`).pipe((0,s.U)(t=>t.meals))}getLatestMeals(){return this.http.get(`${c}/api/json/v1/1/latest.php`).pipe((0,s.U)(t=>t.meals))}getPopularMeals(){return this.http.get(`${c}/api/json/v1/1/popular.php`).pipe((0,s.U)(t=>t.meals))}createIterableRecipes(t){let n=[];for(let r=0;r<t.length;r+=4)n.push({items:t.slice(r,r+4)});return n}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(T.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();const k=function(o){return["/cookbook/recipe",o]};function A(o,i){if(1&o&&(e.TgZ(0,"div",3)(1,"a",4),e._UZ(2,"img",5),e._uU(3),e.qZA(),e._UZ(4,"br")(5,"br"),e.qZA()),2&o){const t=i.$implicit;e.xp6(1),e.Q6J("routerLink",e.VKq(3,k,t.idMeal)),e.xp6(1),e.s9C("src",t.strMealThumb,e.LSH),e.xp6(1),e.hij(" ",t.strMeal," ")}}function x(o,i){if(1&o&&(e.TgZ(0,"div",1),e.YNc(1,A,6,5,"div",2),e.qZA()),2&o){const t=i.$implicit;e.xp6(1),e.Q6J("ngForOf",null==t?null:t.items)}}let u=(()=>{class o{constructor(t,n){this.recipeSvc=t,this.route=n,this.route.paramMap.subscribe(r=>{const{firstLatter:m}=r.params;r.params&&(m&&this.recipeSvc.search({f:m}).subscribe(d=>this.iterableRecipes=this.recipeSvc.createIterableRecipes(d)),m||this.recipeSvc.filterMeals(r.params).subscribe(d=>this.iterableRecipes=this.recipeSvc.createIterableRecipes(d)))})}ngOnInit(){}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(h),e.Y36(a.gz))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-recipes"]],decls:1,vars:1,consts:[["class","row",4,"ngFor","ngForOf"],[1,"row"],["class","col-sm","style","min-height: 250px;",4,"ngFor","ngForOf"],[1,"col-sm",2,"min-height","250px"],[3,"routerLink"],[1,"img-fluid",3,"src"]],template:function(t,n){1&t&&e.YNc(0,x,2,1,"div",0),2&t&&e.Q6J("ngForOf",n.iterableRecipes)},dependencies:[l.sg,a.yS]}),o})();function M(o,i){if(1&o&&(e.TgZ(0,"div",4)(1,"div",5)(2,"p",6),e._uU(3),e.qZA(),e.TgZ(4,"p"),e._UZ(5,"img",7),e.qZA(),e.TgZ(6,"strong"),e._uU(7,"Follow these steps:"),e.qZA(),e.TgZ(8,"p",8),e._uU(9),e.qZA(),e.TgZ(10,"strong"),e._uU(11,"Watch on: "),e.qZA(),e.TgZ(12,"a",9),e._uU(13,"YouTube"),e.qZA()()()),2&o){const t=i.$implicit;e.xp6(3),e.hij(" ",t.strMeal," "),e.xp6(2),e.s9C("src",t.strMealThumb,e.LSH),e.xp6(4),e.Oqu(t.strInstructions),e.xp6(3),e.s9C("href",t.strYoutube,e.LSH)}}function w(o,i){if(1&o&&(e.TgZ(0,"div",1),e.YNc(1,M,14,4,"div",3),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.details)}}function q(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"td",21)(1,"a")(2,"figure"),e._UZ(3,"img",22),e.TgZ(4,"figcaption",23),e.NdJ("click",function(){const m=e.CHM(t).$implicit,g=e.oxw().$implicit,Z=e.oxw().$implicit,b=e.oxw();return e.KtG(b.getIngredientDetails(Z["strIngredient"+g*m]))}),e._uU(5),e.qZA()()()()}if(2&o){const t=i.$implicit,n=e.oxw().$implicit,r=e.oxw().$implicit;e.xp6(3),e.MGl("src","https://www.themealdb.com/images/ingredients/",r["strIngredient"+n*t],".png",e.LSH),e.xp6(2),e.AsE("",r["strMeasure"+n*t]," ",r["strIngredient"+n*t],"")}}const R=function(){return[1,2,3]};function y(o,i){1&o&&(e.TgZ(0,"tr"),e.YNc(1,q,6,3,"td",20),e.qZA()),2&o&&(e.xp6(1),e.Q6J("ngForOf",e.DdM(1,R)))}const F=function(){return[1,2]};function O(o,i){if(1&o&&(e.ynx(0),e.TgZ(1,"table",10)(2,"tbody")(3,"tr")(4,"td",11)(5,"h2"),e._uU(6),e._UZ(7,"br")(8,"br"),e.qZA()(),e.TgZ(9,"td",12)(10,"h2"),e._uU(11," Ingredients"),e._UZ(12,"br")(13,"br"),e.qZA()()(),e.TgZ(14,"tr")(15,"td",13)(16,"a",14),e._UZ(17,"img",15),e.qZA(),e._UZ(18,"br")(19,"br"),e._uU(20,"No Tags"),e._UZ(21,"br"),e.TgZ(22,"a",16),e._UZ(23,"img",17),e.qZA(),e.TgZ(24,"a",18),e._UZ(25,"img",19),e.qZA(),e._UZ(26,"br"),e.qZA(),e.TgZ(27,"td",12)(28,"table",10)(29,"tbody"),e.YNc(30,y,2,2,"tr",2),e._UZ(31,"tr"),e.qZA()(),e._UZ(32,"br"),e.qZA()()()(),e._UZ(33,"br"),e.TgZ(34,"h2"),e._uU(35,"Instructions"),e.qZA(),e.TgZ(36,"p"),e._uU(37),e.qZA(),e.BQk()),2&o){const t=i.$implicit;e.xp6(6),e.hij(" ",t.strMeal," "),e.xp6(10),e.s9C("href",t.strMealThumb,e.LSH),e.xp6(1),e.s9C("src",t.strMealThumb,e.LSH),e.xp6(13),e.Q6J("ngForOf",e.DdM(5,F)),e.xp6(7),e.Oqu(t.strInstructions)}}function I(o,i){if(1&o&&(e.TgZ(0,"div",7)(1,"a")(2,"div"),e._UZ(3,"img",8),e.qZA(),e._uU(4),e.qZA(),e._UZ(5,"br")(6,"br"),e.qZA()),2&o){const t=i.$implicit;e.xp6(3),e.Q6J("src",t.strMealThumb,e.LSH),e.xp6(1),e.hij(" ",t.strMeal," ")}}function L(o,i){if(1&o&&(e.TgZ(0,"div",7)(1,"a")(2,"figure"),e._UZ(3,"img",8),e.TgZ(4,"figcaption"),e._UZ(5,"br"),e._uU(6),e.qZA()()()()),2&o){const t=i.$implicit;e.xp6(3),e.Q6J("src",t.strMealThumb,e.LSH),e.xp6(3),e.hij(" ",t.strMeal," ")}}function $(o,i){if(1&o&&(e.TgZ(0,"button",9),e._uU(1),e.qZA()),2&o){const t=i.$implicit;e.MGl("routerLink","/cookbook/filter/area/",t.strArea,""),e.xp6(1),e.Oqu(t.strArea)}}function Y(o,i){if(1&o&&(e.TgZ(0,"button",9),e._uU(1),e.qZA()),2&o){const t=i.$implicit;e.MGl("routerLink","/cookbook/filter/category/",t.strCategory,""),e.xp6(1),e.Oqu(t.strCategory)}}function j(o,i){if(1&o&&(e.TgZ(0,"button",9),e._uU(1),e.qZA()),2&o){const t=i.$implicit;e.MGl("routerLink","/cookbook/filter/ingredient/",t.strIngredient,""),e.xp6(1),e.Oqu(t.strIngredient)}}function B(o,i){if(1&o&&(e.TgZ(0,"button",9),e.ALo(1,"lowercase"),e._uU(2),e.qZA()),2&o){const t=i.$implicit;e.MGl("routerLink","/cookbook/search/",e.lcZ(1,2,t),""),e.xp6(2),e.Oqu(t)}}const H=[{path:"",component:C,children:[{path:"cuisine",component:v,children:[{path:":a",component:u}]},{path:"search/:firstLatter",component:u},{path:"filter/category/:c",component:u},{path:"filter/area/:a",component:u},{path:"filter/ingredient/:i",component:u},{path:"recipe/:id",component:(()=>{class o{constructor(t,n,r){this.route=t,this.router=n,this.recipeSvc=r}ngOnInit(){this.mealID=this.route.snapshot.paramMap.get("id"),this.recipeSvc.getRecipe(this.mealID).subscribe(t=>this.details=t)}getIngredientDetails(t){this.recipeSvc.search({s:t}).subscribe(n=>console.log(n))}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(a.gz),e.Y36(a.F0),e.Y36(h))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-recipe"]],decls:3,vars:2,consts:[["class","container",4,"ngIf"],[1,"container"],[4,"ngFor","ngForOf"],["class","row",4,"ngFor","ngForOf"],[1,"row"],[1,"col-sm"],[1,"d-flex","justify-content-center",2,"font-size","45px"],[1,"img-fluid","img-center-block",3,"src"],[2,"min-height","45px"],["target","_blank",3,"href"],[2,"width","100%"],[2,"width","35%"],[2,"width","60%","vertical-align","top"],[2,"width","35%","vertical-align","top"],["rel","prettyPhoto",3,"href"],[2,"width","100%",3,"src"],["href","/meal/53063"],["src","../images/icons/Arrow-Left.png",2,"width","30%"],["href","/meal/53065"],["src","../images/icons/Arrow-Right.png",2,"width","30%"],["style","vertical-align:top",4,"ngFor","ngForOf"],[2,"vertical-align","top"],[2,"width","80%",3,"src"],[3,"click"]],template:function(t,n){1&t&&(e.YNc(0,w,2,1,"div",0),e.TgZ(1,"div",1),e.YNc(2,O,38,6,"ng-container",2),e.qZA()),2&t&&(e.Q6J("ngIf",!1),e.xp6(2),e.Q6J("ngForOf",n.details))},dependencies:[l.sg,l.O5],styles:[".img-center-block[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto;max-width:400px;max-height:400px}"]}),o})()},{path:"home",component:(()=>{class o{constructor(t){this.recipeSvc=t,this.countries=[],this.categories=[],this.alphabets=[],this.ingredients=[],this.randomMeals=[];for(let n=65;n<=90;n++)this.alphabets.push(String.fromCharCode(n))}ngOnInit(){this.recipeSvc.getList({a:"list"}).subscribe(t=>{this.countries=t}),this.recipeSvc.getList({c:"list"}).subscribe(t=>{this.categories=t}),this.recipeSvc.getList({i:"list"}).subscribe(t=>{this.ingredients=t}),this.recipeSvc.getSingleRandomRecipe().subscribe(t=>{this.randomMeals=t})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(h))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-home"]],decls:38,vars:6,consts:[[1,"mt-5"],[1,"lead"],["src","../../../../assets/food_platter.jpg","alt","Responsive image",1,"img-fluid"],["src","../../../../assets/separator.jpg",1,"separator_img"],[1,"row"],["class","col-sm-3",4,"ngFor","ngForOf"],["class","btn btn-outline-info btn-sm m-1",3,"routerLink",4,"ngFor","ngForOf"],[1,"col-sm-3"],["width","95%",3,"src"],[1,"btn","btn-outline-info","btn-sm","m-1",3,"routerLink"]],template:function(t,n){1&t&&(e.TgZ(0,"h1",0),e._uU(1,"Welcome to Cook book.."),e.qZA(),e.TgZ(2,"p",1),e._uU(3," You don't have to be a chef to cook awesome food. NG - Cookbook has all the recipes to make the cooking more fun and tasty.\n"),e.qZA(),e.TgZ(4,"p"),e._UZ(5,"img",2),e.qZA(),e._UZ(6,"img",3),e.TgZ(7,"h3"),e._uU(8,"Latest Meals"),e.qZA(),e._UZ(9,"img",3),e.TgZ(10,"h3"),e._uU(11,"Popular Ingredients"),e.qZA(),e._UZ(12,"img",3),e.TgZ(13,"h3"),e._uU(14,"Random Meals"),e.qZA(),e.TgZ(15,"div",4),e.YNc(16,I,7,2,"div",5),e.qZA(),e._UZ(17,"img",3),e.TgZ(18,"h3"),e._uU(19,"Random Ingredients"),e.qZA(),e.TgZ(20,"div",4),e.YNc(21,L,7,2,"div",5),e.qZA(),e._UZ(22,"img",3),e.TgZ(23,"h3"),e._uU(24,"Browse Country"),e.qZA(),e.YNc(25,$,2,2,"button",6),e._UZ(26,"img",3),e.TgZ(27,"h3"),e._uU(28,"Browse Category"),e.qZA(),e.YNc(29,Y,2,2,"button",6),e._UZ(30,"img",3),e.TgZ(31,"h3"),e._uU(32,"Browse ingredients"),e.qZA(),e.YNc(33,j,2,2,"button",6),e._UZ(34,"img",3),e.TgZ(35,"h3"),e._uU(36,"Browse Meals By Name"),e.qZA(),e.YNc(37,B,3,4,"button",6)),2&t&&(e.xp6(16),e.Q6J("ngForOf",n.randomMeals),e.xp6(5),e.Q6J("ngForOf",n.randomMeals),e.xp6(4),e.Q6J("ngForOf",n.countries),e.xp6(4),e.Q6J("ngForOf",n.categories),e.xp6(4),e.Q6J("ngForOf",n.ingredients),e.xp6(4),e.Q6J("ngForOf",n.alphabets))},dependencies:[l.sg,a.rH,l.i8]}),o})()},{path:"",redirectTo:"home",pathMatch:"full"}]}];let J=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[a.Bz.forChild(H),a.Bz]}),o})(),N=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[l.ez,J,f.v9]}),o})()}}]);