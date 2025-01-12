"use strict";(self.webpackChunkportfolio_all_in_one=self.webpackChunkportfolio_all_in_one||[]).push([[3936],{3936:(S,m,s)=>{s.r(m),s.d(m,{MoviesModule:()=>k});var r=s(177),c=s(884),t=s(4438),p=s(3760);let h=(()=>{class n{constructor(){this.menus=[{path:"home",name:"Home"},{path:"movie",name:"Movie"}]}ngOnInit(){}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=t.VBU({type:n,selectors:[["app-movies"]],standalone:!1,decls:1,vars:2,consts:[["title","Movies Shows",3,"menus","theme"]],template:function(i,o){1&i&&t.nrm(0,"ang-bootstrap-layout",0),2&i&&t.Y8G("menus",o.menus)("theme","movie-black")},dependencies:[p.KP],encapsulation:2})}}return n})();var g=s(3726),d=s(6354),f=s(152),M=s(3294),C=s(5964),O=s(1626);let u=(()=>{class n{constructor(e){this.http=e}showSchedules(){return this.http.get("https://api.tvmaze.com/schedule/web?date=2022-11-20&country=US")}searchMovie(e="Game of thrones"){return this.http.get(`https://api.tvmaze.com/singlesearch/shows?q=${e}&embed=episodes`)}static{this.\u0275fac=function(i){return new(i||n)(t.KVO(O.Qq))}}static{this.\u0275prov=t.jDH({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();const P=["movieSearchInput"],F=["widgetsContent"];function w(n,a){if(1&n&&(t.j41(0,"div",15),t.nrm(1,"img",16),t.j41(2,"span",17),t.EFF(3),t.k0s(),t.j41(4,"p",18),t.EFF(5,"Lorem ipsum dolor sit amet consectetur adipisicing elit. At hic fugit similique accusantium."),t.k0s(),t.j41(6,"a",19),t.EFF(7,"Watch"),t.k0s()()),2&n){const e=a.$implicit;t.R7$(),t.Y8G("src",null==e||null==e.image?null:e.image.original,t.B4B),t.R7$(2),t.JRh(null==e?null:e.name),t.R7$(3),t.FS9("href",null==e?null:e.url,t.B4B)}}let b=(()=>{class n{constructor(e){this.moviesService=e}ngOnInit(){this.searchMovie("Game of thrones"),(0,g.R)(this.movieSearchInput.nativeElement,"keyup").pipe((0,d.T)(e=>e.target.value),(0,C.p)(e=>e.length>2),(0,f.B)(1e3),(0,M.F)()).subscribe(e=>{this.searchMovie(e)})}searchMovie(e){this.moviesService.searchMovie(e).subscribe(i=>{this.movie=i})}scrollRight(){this.widgetsContent.nativeElement.scrollTo({left:this.widgetsContent.nativeElement.scrollLeft+150,behavior:"smooth"})}scrollLeft(){this.widgetsContent.nativeElement.scrollTo({left:this.widgetsContent.nativeElement.scrollLeft-150,behavior:"smooth"})}static{this.\u0275fac=function(i){return new(i||n)(t.rXU(u))}}static{this.\u0275cmp=t.VBU({type:n,selectors:[["app-movie"]],viewQuery:function(i,o){if(1&i&&(t.GBs(P,7),t.GBs(F,5,t.aKT)),2&i){let l;t.mGM(l=t.lsd())&&(o.movieSearchInput=l.first),t.mGM(l=t.lsd())&&(o.widgetsContent=l.first)}},standalone:!1,decls:33,vars:10,consts:[["movieSearchInput",""],["widgetsContent",""],[1,"row"],[1,"col-md-9"],[1,"col-md-3"],["placeholder","search",1,"form-control"],[3,"src"],[1,"d-flex"],[1,"ml-1"],["target","_blank",1,"btn","btn-info","text-white",3,"href"],[1,"movie-list-title"],[1,"movie-wrapper"],[1,"movie-list","full1",2,"transform","translateX(0)"],["class","item",4,"ngFor","ngForOf"],[1,"fa","fa-chevron-right","arrow",2,"position","absolute","right","0","top","90px",3,"click"],[1,"item"],["alt","",1,"img",3,"src"],[1,"title"],[1,"desc"],[1,"button",3,"href"]],template:function(i,o){if(1&i){const l=t.RV6();t.j41(0,"div",2),t.nrm(1,"div",3),t.j41(2,"div",4),t.nrm(3,"input",5,0),t.k0s()(),t.j41(5,"div",2)(6,"div",4),t.nrm(7,"img",6),t.k0s(),t.j41(8,"div",3)(9,"h3"),t.EFF(10),t.k0s(),t.j41(11,"p"),t.EFF(12),t.k0s(),t.j41(13,"h4"),t.EFF(14,"Details"),t.k0s(),t.j41(15,"div",7)(16,"p"),t.EFF(17),t.k0s(),t.j41(18,"p",8),t.EFF(19),t.k0s(),t.j41(20,"p",8),t.EFF(21),t.k0s(),t.j41(22,"p",8),t.EFF(23),t.k0s()(),t.j41(24,"a",9),t.EFF(25,"Watch Movie"),t.k0s()()(),t.j41(26,"h1",10),t.EFF(27),t.k0s(),t.j41(28,"div",11,1)(30,"div",12),t.DNE(31,w,8,3,"div",13),t.k0s(),t.j41(32,"i",14),t.bIt("click",function(){return t.eBV(l),t.Njj(o.scrollRight())}),t.k0s()()}2&i&&(t.R7$(7),t.Y8G("src",null==o.movie||null==o.movie.image?null:o.movie.image.medium,t.B4B),t.R7$(3),t.JRh(null==o.movie?null:o.movie.name),t.R7$(2),t.JRh(null==o.movie?null:o.movie.summary),t.R7$(5),t.SpI("Premiered: ",null==o.movie?null:o.movie.premiered,""),t.R7$(2),t.SpI("Rating: ",null==o.movie||null==o.movie.rating?null:o.movie.rating.average,""),t.R7$(2),t.SpI("Runtime: ",null==o.movie?null:o.movie.runtime,""),t.R7$(2),t.SpI("Status: ",null==o.movie?null:o.movie.status,""),t.R7$(),t.FS9("href",null==o.movie?null:o.movie.officialSite,t.B4B),t.R7$(3),t.SpI("Episodes (",null==o.movie||null==o.movie._embedded?null:o.movie._embedded.episodes.length,")"),t.R7$(4),t.Y8G("ngForOf",null==o.movie||null==o.movie._embedded?null:o.movie._embedded.episodes))},dependencies:[r.Sq],styles:[".episodes[_ngcontent-%COMP%]{overflow-x:scroll;scroll-snap-type:x mandatory;scroll-behavior:smooth;-webkit-overflow-scrolling:touch}.episodes[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:320px;border-radius:22px;object-fit:cover;object-position:center}.movie-list-container[_ngcontent-%COMP%]{padding:0 20px}.movie-wrapper[_ngcontent-%COMP%]{position:relative;overflow:hidden}.movie-wrapper[_ngcontent-%COMP%]   .movie-list[_ngcontent-%COMP%]{display:flex;align-items:center;height:300px;transform:translate(0);transition:all 1s ease-in-out;column-gap:10px}.movie-wrapper[_ngcontent-%COMP%]   .movie-list.full[_ngcontent-%COMP%]{flex-wrap:wrap;align-content:flex-start;row-gap:1rem;height:auto}.movie-wrapper[_ngcontent-%COMP%]   .movie-list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{position:relative}.movie-wrapper[_ngcontent-%COMP%]   .movie-list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover   .img[_ngcontent-%COMP%]{transform:scale(1.2);margin:0 30px;opacity:.5}.movie-wrapper[_ngcontent-%COMP%]   .movie-list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover   .title[_ngcontent-%COMP%], .movie-wrapper[_ngcontent-%COMP%]   .movie-list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover   .desc[_ngcontent-%COMP%], .movie-wrapper[_ngcontent-%COMP%]   .movie-list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover   .button[_ngcontent-%COMP%]{opacity:1}.movie-wrapper[_ngcontent-%COMP%]   .movie-list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{transition:all 1s ease-in-out;width:270px;height:200px;object-fit:cover;border-radius:20px}.movie-wrapper[_ngcontent-%COMP%]   .movie-list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background-color:#333;padding:0 10px;font-size:32px;font-weight:700;position:absolute;top:10%;left:50px;opacity:0;transition:1s all ease-in-out}.movie-wrapper[_ngcontent-%COMP%]   .movie-list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]{background-color:#333;padding:10px;font-size:14px;position:absolute;top:30%;left:50px;width:230px;opacity:0;transition:1s all ease-in-out}.movie-wrapper[_ngcontent-%COMP%]   .movie-list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{padding:10px;background-color:#4dbf00;color:#fff;border-radius:10px;outline:none;border:none;cursor:pointer;position:absolute;bottom:20px;left:50px;opacity:0;transition:1s all ease-in-out}.movie-wrapper[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]{font-size:120px;position:absolute;top:90px;right:0;color:#d3d3d3;opacity:.5;cursor:pointer}"]})}}return n})();var v=s(5256);function j(n,a){if(1&n&&(t.j41(0,"div",2),t.nrm(1,"img",3),t.j41(2,"span",4),t.EFF(3),t.k0s(),t.j41(4,"p",5),t.EFF(5),t.k0s(),t.j41(6,"a",6),t.EFF(7,"Watch"),t.k0s()()),2&n){const e=a.$implicit;t.R7$(),t.Y8G("src",null==e||null==e.image?null:e.image.medium,t.B4B),t.R7$(2),t.JRh(null==e?null:e.name),t.R7$(2),t.JRh(null==e?null:e.summary),t.R7$(),t.FS9("href",null==e?null:e.officialSite,t.B4B)}}const R=[{path:"",component:h,children:[{path:"home",component:(()=>{class n{constructor(e){this.moviesService=e,this.movies=[]}ngOnInit(){this.moviesService.showSchedules().subscribe(e=>this.movies=e)}static{this.\u0275fac=function(i){return new(i||n)(t.rXU(u))}}static{this.\u0275cmp=t.VBU({type:n,selectors:[["app-home"]],standalone:!1,decls:2,vars:1,consts:[["angGrid","","minWidth","200px","columnGap","4rem","rowGap","4rem","gap","4rem"],["class","item",4,"ngFor","ngForOf"],[1,"item"],["alt","",1,"img",3,"src"],[1,"title"],[1,"desc"],[1,"button",3,"href"]],template:function(i,o){1&i&&(t.j41(0,"div",0),t.DNE(1,j,8,4,"div",1),t.k0s()),2&i&&(t.R7$(),t.Y8G("ngForOf",o.movies))},dependencies:[r.Sq,v.gk],encapsulation:2})}}return n})()},{path:"movie",component:b},{path:"",redirectTo:"home",pathMatch:"full"}]}];let y=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=t.$C({type:n})}static{this.\u0275inj=t.G2t({imports:[c.iI.forChild(R),c.iI]})}}return n})(),k=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=t.$C({type:n})}static{this.\u0275inj=t.G2t({imports:[r.MD,y,p.lZ,v.Kg]})}}return n})()}}]);