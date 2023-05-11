"use strict";(self.webpackChunkportfolio_all_in_one=self.webpackChunkportfolio_all_in_one||[]).push([[672],{5682:(C,u,d)=>{d.r(u),d.d(u,{CovidModule:()=>D});var f=d(9808),v=d(4035),e=d(5e3),m=d(4331);let s=(()=>{class n{constructor(){this.menus=[{path:"home",name:"Home"},{path:"covid2",name:"covid2"}]}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-covid"]],decls:1,vars:2,consts:[["title","Github",3,"menus","theme"]],template:function(t,o){1&t&&e._UZ(0,"ang-bootstrap-layout",0),2&t&&e.Q6J("menus",o.menus)("theme","movie")},dependencies:[m.Pv]}),n})();var l=d(4004),i=d(6858);let c=(()=>{class n{constructor(t){this.http=t,this.states=[{key:"AN",name:"Andaman and Nicobar Islands"},{key:"AP",name:"Andhra Pradesh"},{key:"AR",name:"Arunachal Pradesh"},{key:"AS",name:"Assam"},{key:"BR",name:"Bihar"},{key:"CH",name:"Chandigarh"},{key:"CH",name:"Chhattisgarh"},{key:"DN",name:"Dadra and Nagar Haveli"},{key:"DL",name:"Delhi"},{key:"GA",name:"Goa"},{key:"GJ",name:"Gujarat"},{key:"HR",name:"Haryana"},{key:"HP",name:"Himachal Pradesh"},{key:"JK",name:"Jammu and Kashmir"},{key:"JH",name:"Jharkhand"},{key:"KA",name:"Karnataka"},{key:"KL",name:"Kerala"},{key:"LA",name:"Ladakh"},{key:"LD",name:"Lakshadweep"},{key:"MP",name:"Madhya Pradesh"},{key:"MH",name:"Maharashtra"},{key:"MN",name:"Manipur"},{key:"ML",name:"Meghalaya"},{key:"MZ",name:"Mizoram"},{key:"NL",name:"Nagaland"},{key:"OR",name:"Odisha"},{key:"PY",name:"Puducherry"},{key:"PB",name:"Punjab"},{key:"RJ",name:"Rajasthan"},{key:"SK",name:"Sikkim"},{key:"TN",name:"Tamil Nadu"},{key:"TG",name:"Telangana"},{key:"TR",name:"Tripura"},{key:"UP",name:"Uttar Pradesh"},{key:"UT",name:"Uttarakhand"},{key:"WB",name:"West Bengal"}]}getCovidData(){return this.http.get("https://data.covid19india.org/data.json").pipe(t=>t)}getStateData(){return this.http.get("https://data.covid19india.org/v4/min/data.min.json").pipe((0,l.U)(o=>o))}getStates(){return this.states}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(i.O))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var r=d(7810);function p(n,a){if(1&n&&(e.TgZ(0,"h3"),e._uU(1),e.qZA(),e.TgZ(2,"p"),e._uU(3),e.qZA()),2&n){const t=a.item,o=e.oxw();e.xp6(1),e.Oqu(t.state),e.xp6(2),e.hij(" ",o.getContent(t)," ")}}function _(n,a){1&n&&(e.TgZ(0,"th"),e._uU(1,"State"),e.qZA(),e.TgZ(2,"th"),e._uU(3,"Details"),e.qZA())}function y(n,a){if(1&n&&(e.TgZ(0,"td")(1,"h3"),e._uU(2),e.qZA()(),e.TgZ(3,"td")(4,"p"),e._uU(5),e.qZA()()),2&n){const t=a.item,o=e.oxw();e.xp6(2),e.Oqu(t.state),e.xp6(3),e.hij(" ",o.getContent(t)," ")}}let b=(()=>{class n{constructor(t){this.covidService=t,this.covidService.getCovidData().subscribe(o=>{this.covidData=o})}ngOnInit(){}getContent(t){return`Deaths: ${t.deaths} Active:  ${t.active} Confirmed:  ${t.confirmed} Recovered:  ${t.recovered}`}getDaily(){var t;if(null!==(t=this.covidData)&&void 0!==t&&t.cases_time_series){const o=this.covidData.cases_time_series[this.covidData.cases_time_series.length-1];return`Deaths: ${o.dailydeceased} Confirmed:  ${o.dailyconfirmed} Recovered:  ${o.dailyrecovered}`}return null}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(c))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-home"]],decls:13,vars:5,consts:[["title",""],["content",""],[3,"cardListTemplateRef","items","tableTdTemplateRef","tableThTemplateRef"],["defaultListCardTemplate",""],["th",""],["td",""]],template:function(t,o){if(1&t&&(e.TgZ(0,"h1"),e._uU(1,"Covid19 in India update v1"),e.qZA(),e.ynx(2,0),e._uU(3," Daily\n"),e.BQk(),e.ynx(4,1),e._uU(5),e.BQk(),e._UZ(6,"app-card-list-table",2),e.YNc(7,p,4,2,"ng-template",null,3,e.W1O),e.YNc(9,_,4,0,"ng-template",null,4,e.W1O),e.YNc(11,y,6,2,"ng-template",null,5,e.W1O)),2&t){const h=e.MAs(8),k=e.MAs(10),P=e.MAs(12);e.xp6(5),e.hij(" ",o.getDaily(),"\n"),e.xp6(1),e.Q6J("cardListTemplateRef",h)("items",o.covidData.statewise)("tableTdTemplateRef",P)("tableThTemplateRef",k)}},dependencies:[r.W],styles:[".card[_ngcontent-%COMP%]{box-shadow:0 0 3px #0000004d;border-radius:5px;padding:20px}.card-title[_ngcontent-%COMP%]{border-bottom:1px solid rgba(0,0,0,.1);padding-bottom:10px;font-size:20px;font-weight:700}.card-content[_ngcontent-%COMP%]{font-style:italic;padding-top:10px}"]}),n})(),g=(()=>{class n{constructor(){this.modals=[]}add(t){this.modals.push(t)}remove(t){this.modals=this.modals.filter(o=>o.id!==t)}open(t){this.modals.find(h=>h.id===t).open()}close(t){this.modals.find(h=>h.id===t).close()}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const M=["*"];let T=(()=>{class n{constructor(t,o){this.modalService=t,this.el=o,this.element=o.nativeElement}ngOnInit(){this.id?(document.body.appendChild(this.element),this.element.addEventListener("click",t=>{"my-modal"===t.target.className&&this.close()}),this.modalService.add(this)):console.error("modal must have an id")}ngOnDestroy(){this.modalService.remove(this.id),this.element.remove()}open(){this.element.style.display="block",document.body.classList.add("my-modal-open")}close(){this.element.style.display="none"}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g),e.Y36(e.SBq))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-modal"]],inputs:{id:"id"},ngContentSelectors:M,decls:4,vars:0,consts:[[1,"my-modal"],[1,"my-modal-body"],[1,"my-modal-background"]],template:function(t,o){1&t&&(e.F$t(),e.TgZ(0,"div",0)(1,"div",1),e.Hsn(2),e.qZA()(),e._UZ(3,"div",2))},styles:["app-modal{display:none}app-modal .my-modal{position:fixed;inset:20% 0 0;z-index:1000;overflow:auto}app-modal .my-modal .my-modal-body{padding:20px;background:#fff;margin:0 auto;width:350px;height:300px}app-modal .my-modal-background{position:fixed;inset:0;background-color:#000;opacity:.75;z-index:900}body.my-modal-open{overflow:hidden}\n"],encapsulation:2}),n})();const S=["btnShowModal"],x=[{path:"",component:s,children:[{path:"home",component:b},{path:"covid2",component:(()=>{class n{constructor(t,o){this.modalService=t,this.covidService=o,this.getStates(),this.getStateData()}ngOnInit(){}openModal(t){this.modalService.open(t)}closeModal(t){this.modalService.close(t)}getStates(){this.states=this.covidService.getStates()}getStateData(){this.covidService.getStateData().subscribe(t=>{this.stateWiseData=t},t=>{})}report(t,o){this.selectedState=null,this.stateName=o,this.btnShowModal.nativeElement.click()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g),e.Y36(c))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-covid2"]],viewQuery:function(t,o){if(1&t&&e.Gf(S,5),2&t){let h;e.iGM(h=e.CRH())&&(o.btnShowModal=h.first)}},decls:10,vars:0,consts:[[3,"click"],["id","custom-modal"],[1,"btn","btn-secondary",3,"click"],[1,"btn","btn-lg","btn-outline-primary",3,"click"],["btnShowModal",""]],template:function(t,o){1&t&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return o.report("UT","Uttarakhand")}),e._uU(1,"bbb"),e.qZA(),e.TgZ(2,"app-modal",1)(3,"h1"),e._uU(4,"Hello"),e.qZA(),e.TgZ(5,"button",2),e.NdJ("click",function(){return o.closeModal("custom-modal")}),e._uU(6,"Close"),e.qZA()(),e.TgZ(7,"button",3,4),e.NdJ("click",function(){return o.openModal("custom-modal")}),e._uU(9,"AlertModal"),e.qZA())},dependencies:[T],styles:["[_nghost-%COMP%]{display:block;height:600px}.margin-class[_ngcontent-%COMP%]{margin:0}.img[_ngcontent-%COMP%]{width:40px}"]}),n})()},{path:"",redirectTo:"home",pathMatch:"full"}]}];let A=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[v.Bz.forChild(x),v.Bz]}),n})(),D=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[f.ez,A,m.v9,r.W]}),n})()},4707:(C,u,d)=>{d.d(u,{t:()=>e});var f=d(7579),v=d(6063);class e extends f.x{constructor(s=1/0,l=1/0,i=v.l){super(),this._bufferSize=s,this._windowTime=l,this._timestampProvider=i,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=l===1/0,this._bufferSize=Math.max(1,s),this._windowTime=Math.max(1,l)}next(s){const{isStopped:l,_buffer:i,_infiniteTimeWindow:c,_timestampProvider:r,_windowTime:p}=this;l||(i.push(s),!c&&i.push(r.now()+p)),this._trimBuffer(),super.next(s)}_subscribe(s){this._throwIfClosed(),this._trimBuffer();const l=this._innerSubscribe(s),{_infiniteTimeWindow:i,_buffer:c}=this,r=c.slice();for(let p=0;p<r.length&&!s.closed;p+=i?1:2)s.next(r[p]);return this._checkFinalizedStatuses(s),l}_trimBuffer(){const{_bufferSize:s,_timestampProvider:l,_buffer:i,_infiniteTimeWindow:c}=this,r=(c?1:2)*s;if(s<1/0&&r<i.length&&i.splice(0,i.length-r),!c){const p=l.now();let _=0;for(let y=1;y<i.length&&i[y]<=p;y+=2)_=y;_&&i.splice(0,_+1)}}}},4782:(C,u,d)=>{d.d(u,{d:()=>e});var f=d(4707),v=d(3099);function e(m,s,l){var i,c;let r,p=!1;return m&&"object"==typeof m?(r=null!==(i=m.bufferSize)&&void 0!==i?i:1/0,s=null!==(c=m.windowTime)&&void 0!==c?c:1/0,p=!!m.refCount,l=m.scheduler):r=null!=m?m:1/0,(0,v.B)({connector:()=>new f.t(r,s,l),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:p})}}}]);