"use strict";(self.webpackChunkportfolio_all_in_one=self.webpackChunkportfolio_all_in_one||[]).push([[1839],{1839:(E,g,s)=>{s.r(g),s.d(g,{BooksModule:()=>j});var l=s(9808),p=s(4202),o=s(5e3),h=s(4331);let Z=(()=>{class t{constructor(){this.menus=[{path:"home",name:"Home"},{path:"books",name:"Books V2"}]}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-books"]],decls:1,vars:2,consts:[["title","Books",3,"menus","theme"]],template:function(e,n){1&e&&o._UZ(0,"ang-bootstrap-layout",0),2&e&&o.Q6J("menus",n.menus)("theme","default")},dependencies:[h.Pv]}),t})();var d=s(5861),a=s(3075),f=s(9300),k=s(8372),C=s(1884),B=s(8505),b=s(520),T=s(4004);const u="https://www.googleapis.com/books/v1/volumes";let m=(()=>{class t{constructor(e){this.http=e}searchAPI(e){return this.http.get(`${u}?q=${e}`).pipe((0,T.U)(n=>n.items||[]))}getById(e){return this.http.get(`${u}/${e}`)}getBooks(e,n){let r="q=intitle:"+e+"&printType=books&maxResults=20";n&&(r+="&startIndex="+n);const c=new b.LE({fromString:r});return this.http.get(u,{params:c})}}return t.\u0275fac=function(e){return new(e||t)(o.LFG(b.eN))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),v=(()=>{class t{transform(e){if(!e)return"Author Unknown";switch(e.length){case 0:return"Author Unknown";case 1:return e[0];case 2:return e.join(" and ");default:const n=e[e.length-1];return`${e.slice(0,-1).join(", ")}, and ${n}`}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=o.Yjl({name:"bcAddCommas",type:t,pure:!0}),t})(),w=(()=>{class t{transform(e,n=250){const r=e.replace(/(<([^>]+)>)/gi,"");return e.length>=n?`${r.slice(0,n)}...`:r}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=o.Yjl({name:"bcEllipsis",type:t,pure:!0}),t})();function _(t,i){if(1&t&&o._UZ(0,"img",4),2&t){const e=o.oxw();o.Q6J("src",e.thumbnail,o.LSH)}}function y(t,i){if(1&t&&(o.TgZ(0,"p"),o._uU(1),o.ALo(2,"bcEllipsis"),o.qZA()),2&t){const e=o.oxw();o.xp6(1),o.Oqu(o.xi3(2,1,e.subtitle,40))}}function I(t,i){if(1&t&&(o.TgZ(0,"p"),o._uU(1),o.ALo(2,"bcEllipsis"),o.qZA()),2&t){const e=o.oxw();o.xp6(1),o.Oqu(o.lcZ(2,1,e.description))}}const A=function(t){return["/books/book",t]};let U=(()=>{class t{constructor(){}get id(){return this.book.id}get authors(){return this.book.volumeInfo.authors}get title(){return this.book.volumeInfo.title}get subtitle(){return this.book.volumeInfo.subtitle}get description(){return this.book.volumeInfo.description}get thumbnail(){return!!this.book.volumeInfo.imageLinks&&this.book.volumeInfo.imageLinks.smallThumbnail.replace("http:","")}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-book-preview"]],inputs:{book:"book"},decls:16,vars:13,consts:[[3,"routerLink"],["width","95%",3,"src",4,"ngIf"],[4,"ngIf"],[2,"color","#0B3C5D"],["width","95%",3,"src"]],template:function(e,n){1&e&&(o.TgZ(0,"a",0)(1,"div"),o.YNc(2,_,1,1,"img",1),o.qZA(),o._uU(3),o.ALo(4,"bcEllipsis"),o.YNc(5,y,3,4,"p",2),o.YNc(6,I,3,3,"p",2),o.TgZ(7,"h4")(8,"b",3),o._uU(9,"Written By:"),o.qZA(),o.TgZ(10,"span")(11,"h5"),o._uU(12),o.ALo(13,"bcAddCommas"),o.qZA()()()(),o._UZ(14,"br")(15,"br")),2&e&&(o.Q6J("routerLink",o.VKq(11,A,n.id)),o.xp6(2),o.Q6J("ngIf",n.thumbnail),o.xp6(1),o.hij(" ",o.xi3(4,6,n.title,35)," "),o.xp6(2),o.Q6J("ngIf",n.subtitle),o.xp6(1),o.Q6J("ngIf",n.description),o.xp6(6),o.Oqu(o.lcZ(13,9,n.authors)))},dependencies:[l.O5,p.yS,v,w],styles:["img[_ngcontent-%COMP%]{max-width:100%;height:auto}"]}),t})();function P(t,i){if(1&t&&(o.TgZ(0,"div",14),o._UZ(1,"app-book-preview",15),o.qZA()),2&t){const e=i.$implicit;o.xp6(1),o.Q6J("book",e)}}let O=(()=>{class t{constructor(e){var n=this;this.booksService=e,this.searchBook=new a.NI,this.searchBook.valueChanges.pipe((0,f.h)(Boolean),(0,k.b)(1e3),(0,C.x)(),(0,B.b)(function(){var r=(0,d.Z)(function*(c){n.books$=n.booksService.searchAPI(c),n.books=yield n.books$.toPromise()});return function(c){return r.apply(this,arguments)}}())).subscribe()}ngOnInit(){this.searchBook.patchValue("history")}search(e){this.booksService.searchAPI(e.currentTarget.value).subscribe(c=>this.books=c)}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(m))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-home"]],decls:38,vars:2,consts:[[2,"width","100%"],[2,"width","20%"],["alt","Pitch Left","src","https://www.thecocktaildb.com/images/cocktail_left.png"],["alt","Pitch Right","src","https://www.thecocktaildb.com/images/cocktail_right.png"],["src","../../../../assets/separator.jpg",1,"separator_img"],["align","center","width","350"],["autocomplete","off",1,"navbar-form"],[1,"input-group"],["autocomplete","off","name","s","placeholder","Search for a Book...","type","text",1,"form-control",3,"formControl"],[1,"input-group-btn"],["type","submit",1,"btn","btn-default"],[1,"text-white",2,"transform","rotate(45deg)"],[1,"row"],["class","col-sm-3",4,"ngFor","ngForOf"],[1,"col-sm-3"],[3,"book"]],template:function(e,n){1&e&&(o.TgZ(0,"table",0)(1,"tbody")(2,"tr")(3,"td",1),o._UZ(4,"img",2),o.qZA(),o.TgZ(5,"td")(6,"h1"),o._uU(7,"Welcome to Books"),o.qZA(),o.TgZ(8,"p"),o._uU(9,"description"),o.qZA(),o.TgZ(10,"p"),o._uU(11,"description"),o.qZA(),o.TgZ(12,"p"),o._uU(13,"description"),o.qZA(),o.TgZ(14,"a"),o._UZ(15,"br"),o._uU(16," Click to Support:"),o.qZA(),o._UZ(17,"br")(18,"br"),o.qZA(),o.TgZ(19,"td",1),o._UZ(20,"img",3),o.qZA()()()(),o._UZ(21,"img",4),o.TgZ(22,"table",5)(23,"tbody")(24,"tr")(25,"td")(26,"form",6)(27,"div",7),o._UZ(28,"input",8),o.TgZ(29,"div",9)(30,"button",10)(31,"span",11),o._uU(32," \u26b2 "),o.qZA()()()()()()()()(),o._UZ(33,"img",4),o.TgZ(34,"h3"),o._uU(35,"Random Books"),o.qZA(),o.TgZ(36,"div",12),o.YNc(37,P,2,1,"div",13),o.qZA()),2&e&&(o.xp6(28),o.Q6J("formControl",n.searchBook),o.xp6(9),o.Q6J("ngForOf",n.books))},dependencies:[l.sg,a._Y,a.Fj,a.JJ,a.JL,a.oH,a.F,U],styles:["img[_ngcontent-%COMP%]{max-width:100%;height:auto}"]}),t})();function J(t,i){if(1&t&&(o.TgZ(0,"h3"),o._uU(1),o.qZA()),2&t){const e=o.oxw(2);o.xp6(1),o.Oqu(e.subtitle)}}function M(t,i){if(1&t&&o._UZ(0,"img",6),2&t){const e=o.oxw(2);o.Q6J("src",e.thumbnail,o.LSH)}}function S(t,i){if(1&t&&(o.TgZ(0,"div",1)(1,"div"),o.YNc(2,J,2,1,"h3",2),o._UZ(3,"p",3),o.qZA(),o.TgZ(4,"div")(5,"h1"),o._uU(6),o.qZA(),o.YNc(7,M,1,1,"img",4),o.TgZ(8,"h4")(9,"b",5),o._uU(10,"Written By:"),o.qZA(),o.TgZ(11,"span")(12,"h5"),o._uU(13),o.ALo(14,"bcAddCommas"),o.qZA()()()()()),2&t){const e=o.oxw();o.xp6(2),o.Q6J("ngIf",e.subtitle),o.xp6(1),o.Q6J("innerHtml",e.description,o.oJD),o.xp6(3),o.Oqu(e.title),o.xp6(1),o.Q6J("ngIf",e.thumbnail),o.xp6(6),o.Oqu(o.lcZ(14,5,e.authors))}}let F=(()=>{class t{constructor(e,n,r){this.route=e,this.booksService=n,this.location=r,this.add=new o.vpe,this.remove=new o.vpe,this.book=this.route.snapshot.data.book}ngOnInit(){}get id(){return this.book.id}get title(){return this.book.volumeInfo.title}get subtitle(){return this.book.volumeInfo.subtitle}get description(){return this.book.volumeInfo.description}get thumbnail(){return this.book.volumeInfo.imageLinks&&this.book.volumeInfo.imageLinks.smallThumbnail&&this.book.volumeInfo.imageLinks.smallThumbnail.replace("http:","")}get authors(){return this.book.volumeInfo.authors}goBack(){this.location.back()}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(p.gz),o.Y36(m),o.Y36(l.Ye))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-view-book"]],inputs:{book:"book",inCollection:"inCollection"},outputs:{add:"add",remove:"remove"},decls:1,vars:1,consts:[["class","book-card",4,"ngIf"],[1,"book-card"],[4,"ngIf"],[3,"innerHtml"],[3,"src",4,"ngIf"],[2,"color","#0B3C5D"],[3,"src"]],template:function(e,n){1&e&&o.YNc(0,S,15,7,"div",0),2&e&&o.Q6J("ngIf",n.book)},dependencies:[l.O5,v],styles:["[_nghost-%COMP%]{display:flex;justify-content:center;text-align:left;margin:75px 0}.book-card[_ngcontent-%COMP%]{display:flex;margin:15px 0 50px}img[_ngcontent-%COMP%]{width:60px;min-width:60px;margin-left:5px}"]}),t})(),x=(()=>{class t{constructor(e,n){this.router=e,this.bookService=n}resolve(e){var n=this;return(0,d.Z)(function*(){const r=e.paramMap.get("id");let c=n.bookService.book;if(!c)try{return c=yield n.bookService.getById(r).toPromise(),c}catch(R){return n.router.navigate(["/books"]),null}return c})()}}return t.\u0275fac=function(e){return new(e||t)(o.LFG(p.F0),o.LFG(m))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac}),t})();var q=s(3900),L=s(7579);function Y(t,i){if(1&t&&o._UZ(0,"img",9),2&t){const e=o.oxw().$implicit;o.Q6J("src",e.volumeInfo.imageLinks.thumbnail,o.LSH)}}function V(t,i){if(1&t&&(o.TgZ(0,"div",5),o.YNc(1,Y,1,1,"img",6),o.TgZ(2,"h5",7),o._uU(3),o.qZA(),o.TgZ(4,"p",8),o._uU(5),o.qZA()()),2&t){const e=i.$implicit;o.oxw();const n=o.MAs(6);o.xp6(1),o.Q6J("ngIf",e.volumeInfo.imageLinks)("ngIfElse",n),o.xp6(2),o.Oqu(e.volumeInfo.title),o.xp6(2),o.Oqu(e.volumeInfo.description)}}function H(t,i){1&t&&(o.TgZ(0,"span",10),o._uU(1," crop_original "),o.qZA())}const Q=[{path:"",component:Z,children:[{path:"home",component:O},{path:"books",component:(()=>{class t{constructor(e){this.booksService=e,this.books=[],this.searchTerm="",this.startIndex=0,this.searchTermChanged=new L.x}onEvent(){window.innerHeight+window.scrollY>=document.body.offsetHeight&&(this.startIndex+=20,this.booksService.getBooks(this.searchTerm,this.startIndex).subscribe(e=>{this.books=this.books.concat(e.items)}))}ngOnInit(){this.searchTermChanged.pipe((0,f.h)(()=>""!==this.searchTerm),(0,k.b)(500),(0,q.w)(()=>this.booksService.getBooks(this.searchTerm))).subscribe(e=>{this.books=e.items})}onSearchTermChange(e){this.startIndex=0,this.searchTerm=e,this.searchTermChanged.next()}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(m))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-books-v2"]],hostBindings:function(e,n){1&e&&o.NdJ("scroll",function(c){return n.onEvent(c)},!1,o.Jf7)},decls:7,vars:2,consts:[[1,"input-label"],[3,"ngModel","ngModelChange"],[1,"list"],["class","book",4,"ngFor","ngForOf"],["no_img",""],[1,"book"],["class","image",3,"src",4,"ngIf","ngIfElse"],[1,"header"],[1,"description"],[1,"image",3,"src"],[1,"material-icons","no-img"]],template:function(e,n){1&e&&(o.TgZ(0,"p",0),o._uU(1," Search: "),o.TgZ(2,"input",1),o.NdJ("ngModelChange",function(c){return n.onSearchTermChange(c)}),o.qZA()(),o.TgZ(3,"div",2),o.YNc(4,V,6,4,"div",3),o.YNc(5,H,2,0,"ng-template",null,4,o.W1O),o.qZA()),2&e&&(o.xp6(2),o.Q6J("ngModel",n.searchTerm),o.xp6(2),o.Q6J("ngForOf",n.books))},dependencies:[l.sg,l.O5,a.Fj,a.JJ,a.On],styles:[".list[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,325px);grid-gap:1rem;justify-content:space-evenly}.input-label[_ngcontent-%COMP%]{text-align:center}.book[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:20px 5vh 0;align-items:center;border:1px solid;padding:15px;border-radius:10px;background-color:#fffff4;width:225px;height:300px}.image[_ngcontent-%COMP%]{width:200px;height:200px;border-radius:10px}.header[_ngcontent-%COMP%], .description[_ngcontent-%COMP%]{overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;margin:10px}.no-img[_ngcontent-%COMP%]{font-family:Material Icons!important;font-size:200px}"]}),t})()},{path:"book/:id",component:F,resolve:{book:x}},{path:"",redirectTo:"home",pathMatch:"full"}]}];let N=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[p.Bz.forChild(Q),p.Bz]}),t})(),j=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({providers:[x],imports:[l.ez,a.UX,a.u5,N,h.v9]}),t})()}}]);