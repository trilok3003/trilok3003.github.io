"use strict";(self.webpackChunkportfolio_all_in_one=self.webpackChunkportfolio_all_in_one||[]).push([[1801],{1801:(F,g,a)=>{a.r(g),a.d(g,{SurveyPollVoterPridictionModule:()=>Z});var u=a(9808),m=a(4202),t=a(5e3),s=a(1777),p=(()=>{return(e=p||(p={})).TEXT="text",e.EMAIL="email",e.DATE="date",e.SELECT="select",e.PASSWORD="password",e.NUMBER="number",e.RADIO="radio",e.CHECKBOX="checkbox",p;var e})(),r=a(3075);function _(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"div",13),t.NdJ("click",function(){const l=t.CHM(n).index,d=t.oxw();return t.KtG(d.setActive(l))}),t.qZA()}if(2&e){const n=i.$implicit,o=i.index,c=t.oxw();t.ekj("touched",c.fg.controls[n.name].touched)("active",o===c.active),t.Q6J("ngClass",c.fg.controls[n.name].status)}}function v(e,i){if(1&e&&(t.ynx(0),t._UZ(1,"input",19),t.BQk()),2&e){const n=t.oxw().$implicit;t.xp6(1),t.Q6J("formControlName",n.name)}}function f(e,i){if(1&e&&t._UZ(0,"img",25),2&e){const n=t.oxw().$implicit;t.Q6J("src",n.icon,t.LSH)}}function b(e,i){if(1&e&&(t.TgZ(0,"div",22),t.YNc(1,f,1,1,"img",23),t.TgZ(2,"div"),t._uU(3),t.qZA(),t._UZ(4,"input",24),t.qZA()),2&e){const n=i.$implicit,o=t.oxw(2).$implicit,c=t.oxw();t.ekj("active",c.fg.controls[o.name].value===n.value),t.xp6(1),t.Q6J("ngIf",n.icon),t.xp6(2),t.Oqu(n.label),t.xp6(1),t.Q6J("formControlName",o.name)("value",n.value)}}function C(e,i){if(1&e&&(t.TgZ(0,"div",20),t.YNc(1,b,5,6,"div",21),t.qZA()),2&e){const n=t.oxw().$implicit;t.xp6(1),t.Q6J("ngForOf",n.options)}}function y(e,i){if(1&e&&t._UZ(0,"img",25),2&e){const n=t.oxw().$implicit;t.Q6J("src",n.icon,t.LSH)}}function x(e,i){if(1&e&&(t.TgZ(0,"div",28),t.YNc(1,y,1,1,"img",23),t.TgZ(2,"div"),t._uU(3),t.qZA(),t._UZ(4,"div",29)(5,"input",30),t.qZA()),2&e){const n=i.$implicit,o=i.index,c=t.oxw(2).$implicit,l=t.oxw();t.ekj("active",l.getOptions(c.name).at(o).value),t.xp6(1),t.Q6J("ngIf",n.icon),t.xp6(2),t.Oqu(n.label),t.xp6(2),t.Q6J("formControlName",o)("value",n.value)}}function h(e,i){if(1&e&&(t.TgZ(0,"div",26),t.YNc(1,x,6,6,"div",27),t.qZA()),2&e){const n=t.oxw().$implicit;t.Q6J("formArrayName",n.name),t.xp6(1),t.Q6J("ngForOf",n.options)}}function O(e,i){if(1&e&&(t.TgZ(0,"div",14)(1,"h2"),t._uU(2),t.qZA(),t.ynx(3,15),t.YNc(4,v,2,1,"ng-container",16),t.YNc(5,C,2,1,"div",17),t.YNc(6,h,2,2,"div",18),t.BQk(),t.qZA()),2&e){const n=i.$implicit,o=i.index,c=t.oxw();t.ekj("active",n.name==c.active)("invalid",c.fg.controls[n.name].touched&&"INVALID"===c.fg.controls[n.name].status),t.Q6J("@openClose",o===c.active?"open":"closed"),t.xp6(2),t.AsE("",n.label," ",n.required?"*":"",""),t.xp6(1),t.Q6J("ngSwitch",n.type),t.xp6(1),t.Q6J("ngSwitchCase","text"),t.xp6(1),t.Q6J("ngSwitchCase","radio"),t.xp6(1),t.Q6J("ngSwitchCase","checkbox")}}function P(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"div",31),t.NdJ("click",function(){const l=t.CHM(n).index,d=t.oxw();return t.KtG(d.setActive(l))}),t._UZ(1,"div",32),t.TgZ(2,"div"),t._uU(3),t.qZA()()}if(2&e){const n=i.$implicit,o=t.oxw();t.Q6J("ngClass",o.fg.controls[n.name].status),t.xp6(1),t.Q6J("ngClass",o.fg.controls[n.name].status),t.xp6(2),t.Oqu(n.label)}}function M(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"button",33),t.NdJ("click",function(){t.CHM(n);const c=t.oxw();return t.KtG(c.setActive(c.active+1))}),t.TgZ(1,"span"),t._uU(2,"Next"),t.qZA(),t.TgZ(3,"div",10),t._uU(4,"\u2192"),t.qZA()()}if(2&e){const n=t.oxw();t.Q6J("disabled","INVALID"===n.fg.controls[n._data.questions[n.active].name].status)}}function w(e,i){if(1&e&&(t.TgZ(0,"button",34)(1,"span"),t._uU(2,"SUBMIT"),t.qZA(),t.TgZ(3,"div",10),t._uU(4,"\u2192"),t.qZA()()),2&e){const n=t.oxw();t.Q6J("disabled",!n.fg.valid)}}let k=(()=>{class e{constructor(){this.counter=0,this.surveySubmit=new t.vpe,this.fg=new r.cw({}),this.active=0}set data(n){this.createForm(n)}ngOnInit(){}createForm(n){console.log(n),this._data=n,n.questions.forEach(o=>{const c=o.required?[r.kI.required]:[];switch(o.type){case p.TEXT:case p.RADIO:this.fg.addControl(o.name,new r.NI(o.value,c));break;case p.CHECKBOX:{let l=o.value||"";this.fg.addControl(o.name,new r.Oe(o.options.map(d=>new r.NI(l.includes(d.value))),c));break}}}),console.log(this.fg)}setActive(n){this.active<this._data.questions.length&&this.fg.controls[this._data.questions[this.active].name].markAsTouched(),this.active=n}onSubmit(){console.log(this.fg.value)}getOptions(n){return this.fg.get(n)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-survey-form"]],inputs:{data:"data"},outputs:{surveySubmit:"surveySubmit"},decls:18,vars:11,consts:[[3,"formGroup","ngSubmit"],[1,"survey-header"],[1,"survey-process"],["class","process-step",3,"ngClass","touched","active","click",4,"ngFor","ngForOf"],[1,"survey-content"],["class","survey-question",3,"active","invalid",4,"ngFor","ngForOf"],[1,"survey-submit"],["class","survey-submit-resume flex f-align-center",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"survey-actions"],["type","button",1,"button-icon","previous",3,"disabled","click"],[1,"icon"],["type","button","class","button-icon",3,"disabled","click",4,"ngIf"],["class","button-icon","type","submit",3,"disabled",4,"ngIf"],[1,"process-step",3,"ngClass","click"],[1,"survey-question"],[3,"ngSwitch"],[4,"ngSwitchCase"],["class","flex f-wrap yscroll",4,"ngSwitchCase"],["class","flex f-wrap yscroll",3,"formArrayName",4,"ngSwitchCase"],["type","text",3,"formControlName"],[1,"flex","f-wrap","yscroll"],["class","input-radio",3,"active",4,"ngFor","ngForOf"],[1,"input-radio"],["alt","",3,"src",4,"ngIf"],["type","radio",3,"formControlName","value"],["alt","",3,"src"],[1,"flex","f-wrap","yscroll",3,"formArrayName"],["class","input-checkbox",3,"active",4,"ngFor","ngForOf"],[1,"input-checkbox"],[1,"check-icon"],["type","checkbox",3,"formControlName","value"],[1,"survey-submit-resume","flex","f-align-center",3,"ngClass","click"],[1,"process-step","touched",3,"ngClass"],["type","button",1,"button-icon",3,"disabled","click"],["type","submit",1,"button-icon",3,"disabled"]],template:function(n,o){1&n&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return o.onSubmit()}),t.TgZ(1,"div",1)(2,"h1"),t._uU(3),t.qZA(),t.TgZ(4,"div",2),t.YNc(5,_,1,5,"div",3),t.qZA()(),t.TgZ(6,"div",4),t.YNc(7,O,7,11,"div",5),t.TgZ(8,"div",6),t.YNc(9,P,4,3,"div",7),t.qZA()(),t.TgZ(10,"div",8)(11,"button",9),t.NdJ("click",function(){return o.setActive(o.active-1)}),t.TgZ(12,"div",10),t._uU(13,"\u2190"),t.qZA(),t.TgZ(14,"span"),t._uU(15,"previous"),t.qZA()(),t.YNc(16,M,5,1,"button",11),t.YNc(17,w,5,1,"button",12),t.qZA()()),2&n&&(t.Q6J("formGroup",o.fg),t.xp6(3),t.Oqu(o._data.label),t.xp6(2),t.Q6J("ngForOf",o._data.questions),t.xp6(2),t.Q6J("ngForOf",o._data.questions),t.xp6(1),t.ekj("active",o._data.questions.length===o.active),t.Q6J("@openClose",o._data.questions.length===o.active?"open":"closed"),t.xp6(1),t.Q6J("ngForOf",o._data.questions),t.xp6(2),t.Q6J("disabled",o.active<=0),t.xp6(5),t.Q6J("ngIf",o.active<o._data.questions.length),t.xp6(1),t.Q6J("ngIf",o.active>=o._data.questions.length))},dependencies:[u.mk,u.sg,u.O5,u.RF,u.n9,r._Y,r.Fj,r.Wl,r._,r.JJ,r.JL,r.sg,r.u,r.CE],styles:['@charset "UTF-8";*[_ngcontent-%COMP%]{font-family:Helvetica,Arial,sans-serif}input[type=text][_ngcontent-%COMP%], button[_ngcontent-%COMP%], .input-radio[_ngcontent-%COMP%], .input-checkbox[_ngcontent-%COMP%]{font-size:1em;font-weight:600;padding:16px;margin:10px;border-radius:4px}.invalid[_ngcontent-%COMP%] > h2[_ngcontent-%COMP%]{color:#b71c1c}form[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;height:100%;color:#212121;font-size:1em;font-weight:600}form[_ngcontent-%COMP%]   .survey-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}form[_ngcontent-%COMP%]   .survey-header[_ngcontent-%COMP%]   .survey-process[_ngcontent-%COMP%]{display:flex}form[_ngcontent-%COMP%]   .survey-content[_ngcontent-%COMP%]{flex:1;overflow:hidden;position:relative}form[_ngcontent-%COMP%]   .survey-content[_ngcontent-%COMP%]   .survey-question[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   .survey-content[_ngcontent-%COMP%]   .survey-submit[_ngcontent-%COMP%]{position:absolute;display:flex;flex-direction:column;width:100%;height:100%;align-items:center;justify-content:center}form[_ngcontent-%COMP%]   .survey-content[_ngcontent-%COMP%]   .survey-submit[_ngcontent-%COMP%] > .survey-submit-resume[_ngcontent-%COMP%]{cursor:pointer;padding:8px}form[_ngcontent-%COMP%]   .survey-content[_ngcontent-%COMP%]   .survey-submit[_ngcontent-%COMP%] > .survey-submit-resume.VALID[_ngcontent-%COMP%]{color:#1b5e20}form[_ngcontent-%COMP%]   .survey-content[_ngcontent-%COMP%]   .survey-submit[_ngcontent-%COMP%] > .survey-submit-resume.INVALID[_ngcontent-%COMP%]{color:#b71c1c}.process-step[_ngcontent-%COMP%]{position:relative;width:20px;height:20px;margin:4px;cursor:pointer;border:2px solid #9e9e9e;border-radius:50%;color:#fff;font-size:12px;line-height:16px;transition:background .4s ease,border-color .4s ease,border-radius .4s ease}.process-step.touched.INVALID[_ngcontent-%COMP%]{background-color:#b71c1c;border-color:#b71c1c}.process-step.touched.INVALID[_ngcontent-%COMP%]:after{content:"\\2716";position:absolute;top:0;left:50%;transform:translate(-50%)}.process-step.touched.VALID[_ngcontent-%COMP%]{background-color:#1b5e20;border-color:#1b5e20}.process-step.touched.VALID[_ngcontent-%COMP%]:after{content:"\\2714";position:absolute;top:0;left:50%;transform:translate(-50%)}.process-step.active[_ngcontent-%COMP%]{border-radius:0}input[type=text][_ngcontent-%COMP%]{background:white;border:1px solid #212121;color:inherit;transition:border .4s ease,margin .4s ease}input[type=text][_ngcontent-%COMP%]:focus, input[type=text].ng-touched[_ngcontent-%COMP%]{outline:none;border-width:2px;margin:8px}input[type=text].ng-invalid.ng-touched[_ngcontent-%COMP%]{border-color:#b71c1c}.input-radio[_ngcontent-%COMP%], .input-checkbox[_ngcontent-%COMP%]{position:relative;border:1px solid #212121;max-width:200px;display:flex;flex-direction:column;justify-content:space-around;align-items:center;opacity:.4;transition:opacity .2s ease,background .4s ease,border .4s ease,margin .4s ease}.input-radio.active[_ngcontent-%COMP%], .input-checkbox.active[_ngcontent-%COMP%]{opacity:1;margin:8px;border-width:2px;background:white}.input-radio[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .input-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;margin:0;opacity:0;cursor:pointer}.input-radio[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .input-checkbox[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;margin-bottom:16px}.input-checkbox[_ngcontent-%COMP%]{padding:32px 16px 16px}.input-checkbox[_ngcontent-%COMP%]   .check-icon[_ngcontent-%COMP%]{content:"";width:24px;height:24px;position:absolute;top:4px;right:4px;line-height:24px;background-color:#9e9e9e;color:#fff;border-radius:4px;transition:background .4s ease}.input-checkbox[_ngcontent-%COMP%]   .check-icon[_ngcontent-%COMP%]:after{content:"\\2714";padding-left:5px}.input-checkbox.active[_ngcontent-%COMP%] > .check-icon[_ngcontent-%COMP%]{background-color:#212121}.flex[_ngcontent-%COMP%]{display:flex;justify-content:center}.flex.f-column[_ngcontent-%COMP%]{flex-direction:column}.flex.f-space-between[_ngcontent-%COMP%]{justify-content:space-between}.flex.f-align-center[_ngcontent-%COMP%]{align-items:center}.flex.f-wrap[_ngcontent-%COMP%]{flex-wrap:wrap}.yscroll[_ngcontent-%COMP%]{overflow-y:scroll}.survey-actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.button-icon[_ngcontent-%COMP%]{color:#fff;background-color:#212121;border:0;cursor:pointer;display:flex;align-items:center;transition:color .4s ease,background .4s ease}.button-icon[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:first-child.icon{margin-right:16px}.button-icon[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:last-child.icon{margin-left:16px}.button-icon[_ngcontent-%COMP%]:disabled{background-color:#a9abbb;cursor:not-allowed}.button-icon.previous[_ngcontent-%COMP%]{color:inherit;background:none}.button-icon.previous[_ngcontent-%COMP%]:disabled{color:#a9abbb}'],data:{animation:[(0,s.X$)("openClose",[(0,s.SB)("open",(0,s.oB)({opacity:1})),(0,s.SB)("closed",(0,s.oB)({display:"none",opacity:0})),(0,s.eR)("open => closed",[(0,s.jt)("200ms ease-out")]),(0,s.eR)("closed => open",[(0,s.jt)("200ms 200ms ease-in")])])]}}),e})();const S=[{path:"",component:(()=>{class e{constructor(){this.data={label:"Survey Form",questions:[{name:"question1text",label:"Question number 1",type:"text",required:!0},{name:"question2text",label:"Question number 2",type:"text",required:!1,value:"default value"},{name:"question3radio",label:"Question number 3",type:"radio",required:!1,options:[{value:0,label:"label0",icon:"https://media.giphy.com/media/57Ya45Injj6OghiVix/giphy.gif"},{value:1,label:"label1",icon:"https://media.giphy.com/media/3oEjHUajTSwjbkCDRu/giphy.gif"},{value:2,label:"label2",icon:"https://media2.giphy.com/media/EbaEWv3icphQI/giphy.gif?cid=3640f6095c376d806173735577521b13"}]},{name:"question4radio",label:"question number 4",type:"radio",required:!0,options:[{value:0,label:"label0"},{value:1,label:"label1"},{value:2,label:"label2"}]},{name:"question5checkbox",label:"question number 5",type:"checkbox",required:!0,options:[{value:0,label:"label0",icon:"https://media.giphy.com/media/3oEjHUajTSwjbkCDRu/giphy.gif"},{value:1,label:"label1"},{value:2,label:"label2"}]}]},this.voteTakers=["Mr. IQ","Ms. Universe","Bombasto"]}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-survey-poll-voter-pridiction"]],decls:1,vars:1,consts:[[3,"data"]],template:function(n,o){1&n&&t._UZ(0,"app-survey-form",0),2&n&&t.Q6J("data",o.data)},dependencies:[k],styles:["[_nghost-%COMP%]{display:block;height:100vh;width:100vw}"]}),e})()}];let q=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[m.Bz.forChild(S),m.Bz]}),e})(),Z=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.ez,r.u5,r.UX,q]}),e})()}}]);