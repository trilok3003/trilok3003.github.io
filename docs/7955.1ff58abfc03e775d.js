"use strict";(self.webpackChunkportfolio_all_in_one=self.webpackChunkportfolio_all_in_one||[]).push([[7955],{7955:(C,c,n)=>{n.r(c),n.d(c,{CovidModule:()=>f});var a=n(6895),r=n(4793),t=n(4650),l=n(529);let p=(()=>{class e{constructor(i){this.httpClient=i}getDataNew(){return this.httpClient.get("https://data.covid19india.org/data.json").pipe(i=>i)}static#t=this.\u0275fac=function(o){return new(o||e)(t.LFG(l.eN))};static#e=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var s=n(1189);function v(e,d){if(1&e&&(t.TgZ(0,"div")(1,"ng-badge",4),t._uU(2),t.qZA(),t.TgZ(3,"ng-badge"),t._uU(4),t.qZA()()),2&e){const i=d.$implicit,o=t.oxw(2);t.xp6(2),t.Oqu(i.state),t.xp6(2),t.Oqu(o.getContent(i))}}function g(e,d){if(1&e&&(t.TgZ(0,"ng-tabs")(1,"ng-tab",1)(2,"ng-badge"),t._uU(3),t.qZA()(),t.TgZ(4,"ng-tab",2),t.YNc(5,v,5,2,"div",3),t.qZA()()),2&e){const i=t.oxw();t.xp6(3),t.hij(" ",i.getDaily(),""),t.xp6(2),t.Q6J("ngForOf",i.covidData.statewise)}}const u=[{path:"",component:(()=>{class e{constructor(i){this.covidService=i,this.covidService.getDataNew().subscribe(o=>{this.covidData=o})}getContent(i){return`Deaths: ${i.deaths} Active:  ${i.active} Confirmed:  ${i.confirmed} Recovered:  ${i.recovered}`}getDaily(){if(this.covidData?.cases_time_series){const i=this.covidData.cases_time_series[this.covidData.cases_time_series.length-1];return`Deaths: ${i.dailydeceased} Confirmed:  ${i.dailyconfirmed} Recovered:  ${i.dailyrecovered}`}}ngOnInit(){}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(p))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-covid"]],decls:3,vars:1,consts:[[4,"ngIf"],["tabTitle","Daily"],["tabTitle","statewise"],[4,"ngFor","ngForOf"],["color","purple"]],template:function(o,m){1&o&&(t.TgZ(0,"h1"),t._uU(1,"Covid19 in India update v1"),t.qZA(),t.YNc(2,g,6,2,"ng-tabs",0)),2&o&&(t.xp6(2),t.Q6J("ngIf",m.covidData))},dependencies:[a.sg,a.O5,s.n4,s.id,s.FN],styles:[".app-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%}"]})}return e})()}];let h=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#i=this.\u0275inj=t.cJS({imports:[r.Bz.forChild(u),r.Bz]})}return e})(),f=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#i=this.\u0275inj=t.cJS({imports:[a.ez,h,s.P4,s.TX]})}return e})()}}]);