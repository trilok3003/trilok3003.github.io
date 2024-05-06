"use strict";(self.webpackChunkportfolio_all_in_one=self.webpackChunkportfolio_all_in_one||[]).push([[4850],{4850:(J,u,s)=>{s.r(u),s.d(u,{Movies2Module:()=>F});var a=s(6895),c=s(4793),t=s(4650),l=s(4004),h=s(529);let m=(()=>{class e{constructor(i){this.http=i,this.API_KEY="157f9eb7"}searchMovie(i){return this.http.get(`https://omdbapi.com/?apikey=${this.API_KEY}&s=${i}`).pipe((0,l.U)(o=>o.Search))}getMovieDetails(i){return this.http.get(`https://www.omdbapi.com/?apikey=${this.API_KEY}&i=${i}&plot=full`)}static#t=this.\u0275fac=function(o){return new(o||e)(t.LFG(h.eN))};static#e=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac})}return e})();var p=s(4006);let g=(()=>{class e{transform(i){return"N/A"===i?"https://picsum.photos/seed/picsum/200/300":i}static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275pipe=t.Yjl({name:"defaultImage",type:e,pure:!0})}return e})(),f=(()=>{class e{transform(i,o){return i.length>(o||20)?`${i.substring(0,19)}...`:i}static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275pipe=t.Yjl({name:"ellipsify",type:e,pure:!0})}return e})();const _=function(e){return{movieId:e}};let y=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-movie"]],inputs:{movie:"movie"},decls:14,vars:17,consts:[[1,"card"],[1,"card-img-top",3,"src","alt"],[1,"card-body"],[1,"card-title"],[1,"badge","badge-primary"],[1,"card-text"],["routerLink","/movie-detail",1,"btn","btn-primary",3,"queryParams"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0),t._UZ(1,"img",1),t.ALo(2,"defaultImage"),t.TgZ(3,"div",2)(4,"h5",3),t._uU(5),t.ALo(6,"ellipsify"),t.TgZ(7,"span",4),t._uU(8),t.ALo(9,"uppercase"),t.qZA()(),t.TgZ(10,"p",5),t._uU(11),t.qZA(),t.TgZ(12,"a",6),t._uU(13," Learn More "),t.qZA()()()),2&o&&(t.xp6(1),t.Q6J("src",t.lcZ(2,8,n.movie.Poster),t.LSH)("alt",n.movie.Title),t.xp6(4),t.hij(" ",t.xi3(6,10,n.movie.Title,25)," "),t.xp6(3),t.Oqu(t.lcZ(9,13,n.movie.Type)),t.xp6(3),t.lnq(" ",n.movie.Title," is a ",n.movie.Type," that was released in ",n.movie.Year," "),t.xp6(1),t.Q6J("queryParams",t.VKq(15,_,n.movie.imdbID)))},dependencies:[c.rH,a.gd,g,f],styles:[".card[_ngcontent-%COMP%]{margin-bottom:15px;min-height:425px;max-height:450px}.card-img-top[_ngcontent-%COMP%]{height:200px;object-fit:cover}.btn.btn-primary[_ngcontent-%COMP%]{position:absolute;margin-bottom:20px;bottom:0}"]})}return e})();function Z(e,r){1&e&&t._UZ(0,"app-movie",7),2&e&&t.Q6J("movie",r.$implicit)}let M=(()=>{class e{constructor(i){this.movieService=i,this.getSearchResults()}getSearchResults(){this.movies$=this.movieService.searchMovie(this.query)}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(m))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-movie-search"]],decls:11,vars:4,consts:[[1,"container"],[1,"form-group"],["for","query"],["id","query","type","text",1,"form-control",3,"ngModel","ngModelChange","keyup.enter"],["type","button",1,"form-control","btn","btn-primary",3,"click"],[1,"row"],["class","col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12",3,"movie",4,"ngFor","ngForOf"],[1,"col-xl-3","col-lg-4","col-md-6","col-sm-6","col-xs-12",3,"movie"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"label",2),t._uU(3,"Search for a Movie"),t.qZA(),t.TgZ(4,"input",3),t.NdJ("ngModelChange",function(I){return n.query=I})("keyup.enter",function(){return n.getSearchResults()}),t.qZA()(),t.TgZ(5,"button",4),t.NdJ("click",function(){return n.getSearchResults()}),t._uU(6,"Search"),t.qZA(),t._UZ(7,"hr"),t.TgZ(8,"div",5),t.YNc(9,Z,1,1,"app-movie",6),t.ALo(10,"async"),t.qZA()()),2&o&&(t.xp6(4),t.Q6J("ngModel",n.query),t.xp6(5),t.Q6J("ngForOf",t.lcZ(10,2,n.movies$)))},dependencies:[a.sg,p.Fj,p.JJ,p.On,y,a.Ov],styles:[".container[_ngcontent-%COMP%]{margin:20px auto}"]})}return e})();var d=s(3900);let T=(()=>{class e{transform(i,o){return i.split(o)}static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275pipe=t.Yjl({name:"splitString",type:e,pure:!0})}return e})();function A(e,r){if(1&e&&(t.TgZ(0,"span",14),t._uU(1),t.qZA()),2&e){const i=r.$implicit;t.xp6(1),t.hij(" ",i," ")}}function b(e,r){if(1&e&&(t.TgZ(0,"li",15),t._uU(1),t.qZA()),2&e){const i=r.$implicit;t.xp6(1),t.AsE(" ",i.Source," - ",i.Value," ")}}const C=function(e){return{movieId:e}};function x(e,r){if(1&e&&(t.TgZ(0,"div",17)(1,"a",18),t._UZ(2,"img",19),t.ALo(3,"defaultImage"),t.qZA()()),2&e){const i=r.$implicit;t.xp6(1),t.Q6J("queryParams",t.VKq(5,C,i.imdbID)),t.xp6(1),t.Q6J("src",t.lcZ(3,3,i.Poster),t.LSH)("alt",i.Title)}}function q(e,r){if(1&e&&(t.TgZ(0,"div")(1,"h3",3),t._uU(2,"Similar Movies"),t.qZA(),t.TgZ(3,"div",5),t.YNc(4,x,4,7,"div",16),t.qZA()()),2&e){const i=t.oxw().ngIf;t.xp6(4),t.Q6J("ngForOf",i.similarMovies)}}function S(e,r){if(1&e&&(t.TgZ(0,"div",1)(1,"button",2),t._uU(2,"Go Back"),t.qZA(),t.TgZ(3,"h1",3),t._uU(4),t.TgZ(5,"small")(6,"span",4),t._uU(7),t.qZA()()(),t.TgZ(8,"div",5)(9,"div",6),t._UZ(10,"img",7),t.ALo(11,"defaultImage"),t.qZA(),t.TgZ(12,"div",8),t.YNc(13,A,2,1,"span",9),t.ALo(14,"splitString"),t.TgZ(15,"h3",10),t._uU(16,"Plot"),t.qZA(),t.TgZ(17,"p"),t._uU(18),t.qZA(),t.TgZ(19,"h3",10),t._uU(20,"Ratings"),t.qZA(),t.TgZ(21,"ul",11),t.YNc(22,b,2,2,"li",12),t.qZA(),t.TgZ(23,"h3",10),t._uU(24,"Plot"),t.qZA(),t.TgZ(25,"p"),t._uU(26),t.qZA()()(),t.YNc(27,q,5,1,"div",13),t.qZA()),2&e){const i=r.ngIf;t.xp6(4),t.hij("",i.Title," "),t.xp6(3),t.hij(" ",i.Rated," "),t.xp6(3),t.Q6J("src",t.lcZ(11,9,i.Poster),t.LSH)("alt",i.Title),t.xp6(3),t.Q6J("ngForOf",t.xi3(14,11,i.Genre,", ")),t.xp6(5),t.Oqu(i.Plot),t.xp6(4),t.Q6J("ngForOf",i.Ratings),t.xp6(4),t.Oqu(i.Plot),t.xp6(1),t.Q6J("ngIf",i.similarMovies.length>0)}}const P=[{path:"",component:M},{path:"movie-detail",component:(()=>{class e{constructor(i,o){this.route=i,this.movieService=o}ngOnInit(){this.movieDetils$=this.route.queryParams.pipe((0,l.U)(i=>i.movieId),(0,d.w)(i=>this.movieService.getMovieDetails(i)),(0,d.w)(i=>this.movieService.searchMovie(i.Title).pipe((0,l.U)(o=>o.filter(n=>n.Title!==i.Title)),(0,l.U)(o=>({...i,similarMovies:o})))))}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(c.gz),t.Y36(m))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-movie-detail"]],decls:2,vars:3,consts:[["class","container",4,"ngIf"],[1,"container"],["routerLink","/",1,"btn","btn-primary"],[1,"my-4"],[1,"badge","badge-primary"],[1,"row"],[1,"col-md-8"],[1,"img-fluid",3,"src","alt"],[1,"col-md-4"],["class","badge badge-success",4,"ngFor","ngForOf"],[1,"my-3"],[1,"list-group"],["class","list-group-item",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"badge","badge-success"],[1,"list-group-item"],["class","col-md-3 col-sm-6 mb-4",4,"ngFor","ngForOf"],[1,"col-md-3","col-sm-6","mb-4"],["routerLink","/movie-detail",3,"queryParams"],[1,"img-fluid","similar-poster",3,"src","alt"]],template:function(o,n){1&o&&(t.YNc(0,S,28,14,"div",0),t.ALo(1,"async")),2&o&&t.Q6J("ngIf",t.lcZ(1,1,n.movieDetils$))},dependencies:[a.sg,a.O5,c.rH,a.Ov,g,T],styles:[".container[_ngcontent-%COMP%]{margin:20px auto}.img-fluid[_ngcontent-%COMP%]{width:100%}@media only screen and (max-width: 767px){[class=img-fluid][_ngcontent-%COMP%]{max-height:400px;object-fit:cover}}.similar-poster[_ngcontent-%COMP%]{width:500px;height:300px;object-fit:cover}.card-img-overlay[_ngcontent-%COMP%]{background:linear-gradient(180deg,rgba(0,0,0,1) 0%,rgba(255,255,255,0) 30%)}.card-title[_ngcontent-%COMP%]{color:#fff}.badge[_ngcontent-%COMP%]{margin-right:5px}"]})}return e})()},{path:"**",redirectTo:"/",pathMatch:"full"}];let O=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#i=this.\u0275inj=t.cJS({imports:[c.Bz.forChild(P),c.Bz]})}return e})(),U=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#i=this.\u0275inj=t.cJS({imports:[a.ez]})}return e})(),F=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#i=this.\u0275inj=t.cJS({providers:[m],imports:[a.ez,p.u5,O,U]})}return e})()}}]);