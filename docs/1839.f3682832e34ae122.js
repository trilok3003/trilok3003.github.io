"use strict";(self.webpackChunkportfolio_all_in_one=self.webpackChunkportfolio_all_in_one||[]).push([[1839],{1839:(E,g,s)=>{s.r(g),s.d(g,{BooksModule:()=>j});var l=s(6895),p=s(4793),t=s(4650),d=s(6619);let _=(()=>{class o{constructor(){this.menus=[{path:"home",name:"Home"},{path:"books",name:"Books V2"}]}ngOnInit(){}static#t=this.\u0275fac=function(n){return new(n||o)};static#o=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-books"]],decls:1,vars:2,consts:[["title","Books",3,"menus","theme"]],template:function(n,i){1&n&&t._UZ(0,"ang-bootstrap-layout",0),2&n&&t.Q6J("menus",i.menus)("theme","default")},dependencies:[d.Pv]})}return o})();var f=s(9671),c=s(4006),b=s(9300),k=s(8372),w=s(1884),C=s(8505),v=s(529),x=s(4004);const m="https://www.googleapis.com/books/v1/volumes";let u=(()=>{class o{constructor(e){this.http=e}searchAPI(e){return this.http.get(`${m}?q=${e}`).pipe((0,x.U)(n=>n.items||[]))}getById(e){return this.http.get(`${m}/${e}`)}getBooks(e,n){let i="q=intitle:"+e+"&printType=books&maxResults=20";n&&(i+="&startIndex="+n);const r=new v.LE({fromString:i});return this.http.get(m,{params:r})}searchBooks(e){return this.http.get(`${m}?q=${e}`).pipe((0,x.U)(n=>n.items||[]))}retrieveBook(e){return this.http.get(`${m}/${e}`)}static#t=this.\u0275fac=function(n){return new(n||o)(t.LFG(v.eN))};static#o=this.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),Z=(()=>{class o{transform(e){if(!e)return"Author Unknown";switch(e.length){case 0:return"Author Unknown";case 1:return e[0];case 2:return e.join(" and ");default:const n=e[e.length-1];return`${e.slice(0,-1).join(", ")}, and ${n}`}}static#t=this.\u0275fac=function(n){return new(n||o)};static#o=this.\u0275pipe=t.Yjl({name:"bcAddCommas",type:o,pure:!0})}return o})(),B=(()=>{class o{transform(e,n=250){const i=e.replace(/(<([^>]+)>)/gi,"");return e.length>=n?`${i.slice(0,n)}...`:i}static#t=this.\u0275fac=function(n){return new(n||o)};static#o=this.\u0275pipe=t.Yjl({name:"bcEllipsis",type:o,pure:!0})}return o})();function y(o,a){if(1&o&&t._UZ(0,"img",4),2&o){const e=t.oxw();t.Q6J("src",e.thumbnail,t.LSH)}}function I(o,a){if(1&o&&(t.TgZ(0,"p"),t._uU(1),t.ALo(2,"bcEllipsis"),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Oqu(t.xi3(2,1,e.subtitle,40))}}function A(o,a){if(1&o&&(t.TgZ(0,"p"),t._uU(1),t.ALo(2,"bcEllipsis"),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Oqu(t.lcZ(2,1,e.description))}}const U=function(o){return["/books/book",o]};let O=(()=>{class o{constructor(){}get id(){return this.book.id}get authors(){return this.book.volumeInfo.authors}get title(){return this.book.volumeInfo.title}get subtitle(){return this.book.volumeInfo.subtitle}get description(){return this.book.volumeInfo.description}get thumbnail(){return!!this.book.volumeInfo.imageLinks&&this.book.volumeInfo.imageLinks.smallThumbnail.replace("http:","")}ngOnInit(){}static#t=this.\u0275fac=function(n){return new(n||o)};static#o=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-book-preview"]],inputs:{book:"book"},decls:16,vars:13,consts:[[3,"routerLink"],["width","95%",3,"src",4,"ngIf"],[4,"ngIf"],[2,"color","#0B3C5D"],["width","95%",3,"src"]],template:function(n,i){1&n&&(t.TgZ(0,"a",0)(1,"div"),t.YNc(2,y,1,1,"img",1),t.qZA(),t._uU(3),t.ALo(4,"bcEllipsis"),t.YNc(5,I,3,4,"p",2),t.YNc(6,A,3,3,"p",2),t.TgZ(7,"h4")(8,"b",3),t._uU(9,"Written By:"),t.qZA(),t.TgZ(10,"span")(11,"h5"),t._uU(12),t.ALo(13,"bcAddCommas"),t.qZA()()()(),t._UZ(14,"br")(15,"br")),2&n&&(t.Q6J("routerLink",t.VKq(11,U,i.id)),t.xp6(2),t.Q6J("ngIf",i.thumbnail),t.xp6(1),t.hij(" ",t.xi3(4,6,i.title,35)," "),t.xp6(2),t.Q6J("ngIf",i.subtitle),t.xp6(1),t.Q6J("ngIf",i.description),t.xp6(6),t.Oqu(t.lcZ(13,9,i.authors)))},dependencies:[l.O5,p.rH,Z,B],styles:["img[_ngcontent-%COMP%]{max-width:100%;height:auto}"]})}return o})();function J(o,a){if(1&o&&(t.TgZ(0,"div",14),t._UZ(1,"app-book-preview",15),t.qZA()),2&o){const e=a.$implicit;t.xp6(1),t.Q6J("book",e)}}let P=(()=>{class o{constructor(e){var n=this;this.booksService=e,this.searchBook=new c.NI,this.searchBook.valueChanges.pipe((0,b.h)(Boolean),(0,k.b)(1e3),(0,w.x)(),(0,C.b)(function(){var i=(0,f.Z)(function*(r){n.books$=n.booksService.searchAPI(r),n.books=yield n.books$.toPromise()});return function(r){return i.apply(this,arguments)}}())).subscribe()}ngOnInit(){this.searchBook.patchValue("history")}search(e){this.booksService.searchAPI(e.currentTarget.value).subscribe(r=>this.books=r)}static#t=this.\u0275fac=function(n){return new(n||o)(t.Y36(u))};static#o=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-home"]],decls:38,vars:2,consts:[[2,"width","100%"],[2,"width","20%"],["alt","Pitch Left","src","https://www.thecocktaildb.com/images/cocktail_left.png"],["alt","Pitch Right","src","https://www.thecocktaildb.com/images/cocktail_right.png"],["src","../../../../assets/separator.jpg",1,"separator_img"],["align","center","width","350"],["autocomplete","off",1,"navbar-form"],[1,"input-group"],["autocomplete","off","name","s","placeholder","Search for a Book...","type","text",1,"form-control",3,"formControl"],[1,"input-group-btn"],["type","submit",1,"btn","btn-default"],[1,"text-white",2,"transform","rotate(45deg)"],[1,"row"],["class","col-sm-3",4,"ngFor","ngForOf"],[1,"col-sm-3"],[3,"book"]],template:function(n,i){1&n&&(t.TgZ(0,"table",0)(1,"tbody")(2,"tr")(3,"td",1),t._UZ(4,"img",2),t.qZA(),t.TgZ(5,"td")(6,"h1"),t._uU(7,"Welcome to Books"),t.qZA(),t.TgZ(8,"p"),t._uU(9,"description"),t.qZA(),t.TgZ(10,"p"),t._uU(11,"description"),t.qZA(),t.TgZ(12,"p"),t._uU(13,"description"),t.qZA(),t.TgZ(14,"a"),t._UZ(15,"br"),t._uU(16," Click to Support:"),t.qZA(),t._UZ(17,"br")(18,"br"),t.qZA(),t.TgZ(19,"td",1),t._UZ(20,"img",3),t.qZA()()()(),t._UZ(21,"img",4),t.TgZ(22,"table",5)(23,"tbody")(24,"tr")(25,"td")(26,"form",6)(27,"div",7),t._UZ(28,"input",8),t.TgZ(29,"div",9)(30,"button",10)(31,"span",11),t._uU(32," \u26b2 "),t.qZA()()()()()()()()(),t._UZ(33,"img",4),t.TgZ(34,"h3"),t._uU(35,"Random Books"),t.qZA(),t.TgZ(36,"div",12),t.YNc(37,J,2,1,"div",13),t.qZA()),2&n&&(t.xp6(28),t.Q6J("formControl",i.searchBook),t.xp6(9),t.Q6J("ngForOf",i.books))},dependencies:[l.sg,c._Y,c.Fj,c.JJ,c.JL,c.oH,c.F,O],styles:["img[_ngcontent-%COMP%]{max-width:100%;height:auto}"]})}return o})();function M(o,a){if(1&o&&(t.TgZ(0,"h3"),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Oqu(e.subtitle)}}function q(o,a){if(1&o&&t._UZ(0,"img",6),2&o){const e=t.oxw(2);t.Q6J("src",e.thumbnail,t.LSH)}}function F(o,a){if(1&o&&(t.TgZ(0,"div",1)(1,"div"),t.YNc(2,M,2,1,"h3",2),t._UZ(3,"p",3),t.qZA(),t.TgZ(4,"div")(5,"h1"),t._uU(6),t.qZA(),t.YNc(7,q,1,1,"img",4),t.TgZ(8,"h4")(9,"b",5),t._uU(10,"Written By:"),t.qZA(),t.TgZ(11,"span")(12,"h5"),t._uU(13),t.ALo(14,"bcAddCommas"),t.qZA()()()()()),2&o){const e=t.oxw();t.xp6(2),t.Q6J("ngIf",e.subtitle),t.xp6(1),t.Q6J("innerHtml",e.description,t.oJD),t.xp6(3),t.Oqu(e.title),t.xp6(1),t.Q6J("ngIf",e.thumbnail),t.xp6(6),t.Oqu(t.lcZ(14,5,e.authors))}}let S=(()=>{class o{constructor(e,n,i){this.route=e,this.booksService=n,this.location=i,this.add=new t.vpe,this.remove=new t.vpe,this.book=this.route.snapshot.data.book}ngOnInit(){}get id(){return this.book.id}get title(){return this.book.volumeInfo.title}get subtitle(){return this.book.volumeInfo.subtitle}get description(){return this.book.volumeInfo.description}get thumbnail(){return this.book.volumeInfo.imageLinks&&this.book.volumeInfo.imageLinks.smallThumbnail&&this.book.volumeInfo.imageLinks.smallThumbnail.replace("http:","")}get authors(){return this.book.volumeInfo.authors}goBack(){this.location.back()}static#t=this.\u0275fac=function(n){return new(n||o)(t.Y36(p.gz),t.Y36(u),t.Y36(l.Ye))};static#o=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-view-book"]],inputs:{book:"book",inCollection:"inCollection"},outputs:{add:"add",remove:"remove"},decls:1,vars:1,consts:[["class","book-card",4,"ngIf"],[1,"book-card"],[4,"ngIf"],[3,"innerHtml"],[3,"src",4,"ngIf"],[2,"color","#0B3C5D"],[3,"src"]],template:function(n,i){1&n&&t.YNc(0,F,15,7,"div",0),2&n&&t.Q6J("ngIf",i.book)},dependencies:[l.O5,Z],styles:["[_nghost-%COMP%]{display:flex;justify-content:center;text-align:left;margin:75px 0}.book-card[_ngcontent-%COMP%]{display:flex;margin:15px 0 50px}img[_ngcontent-%COMP%]{width:60px;min-width:60px;margin-left:5px}"]})}return o})(),T=(()=>{class o{constructor(e,n){this.router=e,this.bookService=n}resolve(e){var n=this;return(0,f.Z)(function*(){const i=e.paramMap.get("id");let r=n.bookService.book;if(!r)try{return r=yield n.bookService.getById(i).toPromise(),r}catch{return n.router.navigate(["/books"]),null}return r})()}static#t=this.\u0275fac=function(n){return new(n||o)(t.LFG(p.F0),t.LFG(u))};static#o=this.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac})}return o})();var L=s(3900),Y=s(7579);function H(o,a){if(1&o&&t._UZ(0,"img",9),2&o){const e=t.oxw().$implicit;t.Q6J("src",e.volumeInfo.imageLinks.thumbnail,t.LSH)}}function Q(o,a){if(1&o&&(t.TgZ(0,"div",5),t.YNc(1,H,1,1,"img",6),t.TgZ(2,"h5",7),t._uU(3),t.qZA(),t.TgZ(4,"p",8),t._uU(5),t.qZA()()),2&o){const e=a.$implicit;t.oxw();const n=t.MAs(6);t.xp6(1),t.Q6J("ngIf",e.volumeInfo.imageLinks)("ngIfElse",n),t.xp6(2),t.Oqu(e.volumeInfo.title),t.xp6(2),t.Oqu(e.volumeInfo.description)}}function V(o,a){1&o&&(t.TgZ(0,"span",10),t._uU(1," crop_original "),t.qZA())}const $=[{path:"",component:_,children:[{path:"home",component:P},{path:"books",component:(()=>{class o{constructor(e){this.booksService=e,this.books=[],this.searchTerm="",this.startIndex=0,this.searchTermChanged=new Y.x}onEvent(){window.innerHeight+window.scrollY>=document.body.offsetHeight&&(this.startIndex+=20,this.booksService.getBooks(this.searchTerm,this.startIndex).subscribe(e=>{this.books=this.books.concat(e.items)}))}ngOnInit(){this.searchTermChanged.pipe((0,b.h)(()=>""!==this.searchTerm),(0,k.b)(500),(0,L.w)(()=>this.booksService.getBooks(this.searchTerm))).subscribe(e=>{this.books=e.items})}onSearchTermChange(e){this.startIndex=0,this.searchTerm=e,this.searchTermChanged.next()}static#t=this.\u0275fac=function(n){return new(n||o)(t.Y36(u))};static#o=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-books-v2"]],hostBindings:function(n,i){1&n&&t.NdJ("scroll",function(h){return i.onEvent(h)},!1,t.Jf7)},decls:7,vars:2,consts:[[1,"input-label"],[3,"ngModel","ngModelChange"],[1,"list"],["class","book",4,"ngFor","ngForOf"],["no_img",""],[1,"book"],["class","image",3,"src",4,"ngIf","ngIfElse"],[1,"header"],[1,"description"],[1,"image",3,"src"],[1,"material-icons","no-img"]],template:function(n,i){1&n&&(t.TgZ(0,"p",0),t._uU(1," Search: "),t.TgZ(2,"input",1),t.NdJ("ngModelChange",function(h){return i.onSearchTermChange(h)}),t.qZA()(),t.TgZ(3,"div",2),t.YNc(4,Q,6,4,"div",3),t.YNc(5,V,2,0,"ng-template",null,4,t.W1O),t.qZA()),2&n&&(t.xp6(2),t.Q6J("ngModel",i.searchTerm),t.xp6(2),t.Q6J("ngForOf",i.books))},dependencies:[l.sg,l.O5,c.Fj,c.JJ,c.On],styles:[".list[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,325px);grid-gap:1rem;justify-content:space-evenly}.input-label[_ngcontent-%COMP%]{text-align:center}.book[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:20px 5vh 0;align-items:center;border:1px solid;padding:15px;border-radius:10px;background-color:#fffff4;width:225px;height:300px}.image[_ngcontent-%COMP%]{width:200px;height:200px;border-radius:10px}.header[_ngcontent-%COMP%], .description[_ngcontent-%COMP%]{overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;margin:10px}.no-img[_ngcontent-%COMP%]{font-family:Material Icons!important;font-size:200px}"]})}return o})()},{path:"book/:id",component:S,resolve:{book:T}},{path:"",redirectTo:"home",pathMatch:"full"}]}];let N=(()=>{class o{static#t=this.\u0275fac=function(n){return new(n||o)};static#o=this.\u0275mod=t.oAB({type:o});static#e=this.\u0275inj=t.cJS({imports:[p.Bz.forChild($),p.Bz]})}return o})(),j=(()=>{class o{static#t=this.\u0275fac=function(n){return new(n||o)};static#o=this.\u0275mod=t.oAB({type:o});static#e=this.\u0275inj=t.cJS({providers:[T],imports:[l.ez,c.UX,c.u5,N,d.v9]})}return o})()}}]);