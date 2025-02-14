"use strict";(self.webpackChunkportfolio_all_in_one=self.webpackChunkportfolio_all_in_one||[]).push([[5039],{5039:(x,c,a)=>{a.r(c),a.d(c,{default:()=>f});var u=a(177),i=a(9417),t=a(4438),m=a(8910);let d=(()=>{class o{constructor(e){this.abstractFirebaseDb=e,this.basePath="quotes-db",this.quotePath="quotes",this.quotes=[{id:1,text:"The only limit to our realization of tomorrow is our doubts of today.",author:"Franklin D. Roosevelt"},{id:2,text:"The purpose of our lives is to be happy.",author:"Dalai Lama"}]}getQuotes(){return this.abstractFirebaseDb.readRealtime$(`${this.basePath}/${this.quotePath}`)}addQuote(e){return this.abstractFirebaseDb.create(`${this.basePath}/${this.quotePath}`,e)}static{this.\u0275fac=function(n){return new(n||o)(t.KVO(m.W))}}static{this.\u0275prov=t.jDH({token:o,factory:o.\u0275fac,providedIn:"root"})}}return o})(),h=(()=>{class o{constructor(e){this.quoteService=e,this.text="",this.author=""}addQuote(){if(this.text&&this.author){const e={id:Date.now(),text:this.text,author:this.author};this.quoteService.addQuote(e),this.text="",this.author=""}}static{this.\u0275fac=function(n){return new(n||o)(t.rXU(d))}}static{this.\u0275cmp=t.VBU({type:o,selectors:[["app-quote-form"]],decls:14,vars:2,consts:[[3,"ngSubmit"],["for","text"],["id","text","name","text","required","",3,"ngModelChange","ngModel"],["for","author"],["id","author","name","author","required","",3,"ngModelChange","ngModel"],["type","submit"]],template:function(n,r){1&n&&(t.j41(0,"div")(1,"h2"),t.EFF(2,"Add a Quote"),t.k0s(),t.j41(3,"form",0),t.bIt("ngSubmit",function(){return r.addQuote()}),t.j41(4,"div")(5,"label",1),t.EFF(6,"Quote:"),t.k0s(),t.j41(7,"textarea",2),t.mxI("ngModelChange",function(s){return t.DH7(r.text,s)||(r.text=s),s}),t.k0s()(),t.j41(8,"div")(9,"label",3),t.EFF(10,"Author:"),t.k0s(),t.j41(11,"input",4),t.mxI("ngModelChange",function(s){return t.DH7(r.author,s)||(r.author=s),s}),t.k0s()(),t.j41(12,"button",5),t.EFF(13,"Add Quote"),t.k0s()()()),2&n&&(t.R7$(7),t.R50("ngModel",r.text),t.R7$(4),t.R50("ngModel",r.author))},dependencies:[u.CommonModule,i.YN,i.qT,i.me,i.BC,i.cb,i.YS,i.vS,i.cV],styles:["form[_ngcontent-%COMP%]{max-width:600px;margin:0 auto;padding:1rem;background-color:#f9f9f9;border-radius:8px;box-shadow:0 2px 5px #0000001a}h2[_ngcontent-%COMP%]{margin-bottom:1rem;color:#333;font-size:1.5rem}div[_ngcontent-%COMP%]{margin-bottom:1rem}label[_ngcontent-%COMP%]{display:block;margin-bottom:.5rem;color:#666;font-weight:700}input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{width:100%;padding:.75rem;border:1px solid #ddd;border-radius:4px;box-sizing:border-box}button[_ngcontent-%COMP%]{padding:.75rem 1.5rem;border:none;border-radius:4px;background-color:#007bff;color:#fff;font-size:1rem;cursor:pointer;transition:background-color .3s ease}button[_ngcontent-%COMP%]:hover{background-color:#0056b3}textarea[_ngcontent-%COMP%]{height:150px;font-size:1rem;line-height:1.5;resize:vertical;transition:border-color .3s ease,box-shadow .3s ease}textarea[_ngcontent-%COMP%]:focus, input[_ngcontent-%COMP%]:focus{border-color:#007bff;outline:none;box-shadow:0 0 5px #007bff80}textarea[_ngcontent-%COMP%]:disabled, input[_ngcontent-%COMP%]:disabled{background-color:#f5f5f5;color:#999;border-color:#ccc;cursor:not-allowed}"]})}}return o})();function p(o,b){if(1&o&&(t.j41(0,"li")(1,"p",1),t.EFF(2),t.k0s(),t.j41(3,"p",2),t.EFF(4),t.k0s()()),2&o){const e=b.$implicit;t.R7$(2),t.SpI(' "',e.text,'" '),t.R7$(2),t.SpI(" - ",e.author," ")}}let g=(()=>{class o{constructor(e){this.quoteService=e,this.quotes=[]}ngOnInit(){this.quoteService.getQuotes().subscribe(e=>{this.quotes=e})}static{this.\u0275fac=function(n){return new(n||o)(t.rXU(d))}}static{this.\u0275cmp=t.VBU({type:o,selectors:[["app-quote-list"]],decls:5,vars:1,consts:[[4,"ngFor","ngForOf"],[1,"quote-text"],[1,"quote-author"]],template:function(n,r){1&n&&(t.j41(0,"div")(1,"h2"),t.EFF(2,"Quotes"),t.k0s(),t.j41(3,"ul"),t.DNE(4,p,5,2,"li",0),t.k0s()()),2&n&&(t.R7$(4),t.Y8G("ngForOf",r.quotes))},dependencies:[u.CommonModule,u.NgForOf],styles:["div[_ngcontent-%COMP%]{max-width:800px;margin:2rem auto;padding:1rem;background-color:#fff;border-radius:8px;box-shadow:0 2px 5px #0000001a}h2[_ngcontent-%COMP%]{margin-bottom:1rem;color:#333;font-size:1.75rem;text-align:center}ul[_ngcontent-%COMP%]{list-style-type:none;padding:0;margin:0}li[_ngcontent-%COMP%]{margin-bottom:1rem;padding:1rem;border-left:4px solid #007bff;background-color:#f9f9f9;border-radius:4px}li[_ngcontent-%COMP%]   .quote-text[_ngcontent-%COMP%]{font-size:1.125rem;color:#333;margin-bottom:.5rem;line-height:1.4}li[_ngcontent-%COMP%]   .quote-author[_ngcontent-%COMP%]{font-size:1rem;color:#666;text-align:right}"]})}}return o})(),f=(()=>{class o{static{this.\u0275fac=function(n){return new(n||o)}}static{this.\u0275cmp=t.VBU({type:o,selectors:[["app-quotes"]],decls:5,vars:0,consts:[[2,"text-align","center"]],template:function(n,r){1&n&&(t.j41(0,"div",0)(1,"h1"),t.EFF(2,"Quote App"),t.k0s(),t.nrm(3,"app-quote-form")(4,"app-quote-list"),t.k0s())},dependencies:[u.CommonModule,h,g],encapsulation:2})}}return o})()}}]);