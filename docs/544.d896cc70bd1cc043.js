"use strict";(self.webpackChunkportfolio_all_in_one=self.webpackChunkportfolio_all_in_one||[]).push([[544],{544:(M,n,i)=>{i.r(n),i.d(n,{default:()=>g});var v=i(1180),l=i(177),t=i(4438),a=i(6354),m=i(1626);const r="https://api.themoviedb.org/3",c="04c35731a5ee918f014970082a0088b1";let h=(()=>{class s{constructor(e){this.http=e}getMovies(){return this.http.get(`${r}/discover/movie`,{params:{api_key:c,page:1,sort_by:"popularity.desc"}}).pipe((0,a.T)(e=>e.results))}searchMovies(e){return this.http.get(`${r}/search/movie`,{params:{api_key:c,query:`/${e}`}}).pipe((0,a.T)(o=>o.results))}static{this.\u0275fac=function(o){return new(o||s)(t.KVO(m.Qq))}}static{this.\u0275prov=t.jDH({token:s,factory:s.\u0275fac,providedIn:"root"})}}return s})();function u(s,d){if(1&s&&(t.j41(0,"div",2),t.nrm(1,"img",3),t.j41(2,"div",4)(3,"h3"),t.EFF(4),t.k0s(),t.j41(5,"span"),t.EFF(6),t.k0s()(),t.j41(7,"div",5)(8,"h3"),t.EFF(9,"Overview:"),t.k0s(),t.EFF(10),t.k0s()()),2&s){const e=d.$implicit,o=t.XpG();t.R7$(),t.FS9("alt",e.title),t.FS9("src",o.IMGPATH+e.poster_path,t.B4B),t.R7$(3),t.JRh(e.title),t.R7$(),t.HbH(o.getClassByRate(e.vote_average)),t.R7$(),t.JRh(e.vote_average),t.R7$(4),t.SpI(" ",e.overview," ")}}let g=(()=>{class s{constructor(e){this.moviesService=e,this.IMGPATH="https://image.tmdb.org/t/p/w1280"}ngOnInit(){this.movies$=this.moviesService.getMovies()}onSearch(e){this.movies$=this.moviesService.searchMovies(e)}getClassByRate(e){return e>=8?"green":e>=5?"orange":"red"}static{this.\u0275fac=function(o){return new(o||s)(t.rXU(h))}}static{this.\u0275cmp=t.VBU({type:s,selectors:[["app-movies"]],decls:4,vars:3,consts:[["card",""],["logoName","Movies",3,"search","items"],[1,"movie"],["loading","lazy",3,"alt","src"],[1,"movie-info"],[1,"overview"]],template:function(o,p){if(1&o){const f=t.RV6();t.j41(0,"app-layout-widget",1),t.nI1(1,"async"),t.bIt("search",function(y){return t.eBV(f),t.Njj(p.onSearch(y))}),t.DNE(2,u,11,8,"ng-template",null,0,t.C5r),t.k0s()}2&o&&t.Y8G("items",t.bMT(1,1,p.movies$))},dependencies:[v.g,l.AsyncPipe],encapsulation:2})}}return s})()}}]);