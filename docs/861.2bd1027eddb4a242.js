"use strict";(self.webpackChunkportfolio_all_in_one=self.webpackChunkportfolio_all_in_one||[]).push([[861],{3222:(F,D,u)=>{u.r(D),u.d(D,{FormModule:()=>Te});var c=u(9808),x=u(4035),e=u(5e3),Z=u(3948);let f=(()=>{class n{constructor(t){this.router=t,this.tasks=[]}ngOnInit(){this.tasks=G[0].children.map(t=>({label:t.path,path:t.path}))}onClicked(t){this.router.navigate([`navigations/form/${this.tasks[t].path}`])}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(x.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-form"]],decls:2,vars:1,consts:[[3,"items","onClick"]],template:function(t,i){1&t&&(e.TgZ(0,"app-tabs4",0),e.NdJ("onClick",function(l){return i.onClicked(l)}),e.qZA(),e._UZ(1,"router-outlet")),2&t&&e.Q6J("items",i.tasks)},dependencies:[x.lC,Z.U],styles:["html[_ngcontent-%COMP%]{background-color:#fff;color:#000!important}"]}),n})();var d=u(3075);function h(n,o){if(1&n&&(e.TgZ(0,"tr")(1,"td",21),e._UZ(2,"input",7),e.qZA(),e.TgZ(3,"td"),e._UZ(4,"input",11),e.qZA(),e.TgZ(5,"td"),e._UZ(6,"input",11),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA()()),2&n){const t=o.$implicit;e.xp6(8),e.hij(" ",t.price*t.qty||""," ")}}let C=(()=>{class n{constructor(){}ngOnInit(){}addProduct(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-invoice"]],decls:60,vars:1,consts:[[1,"container-fluid","pt-2","mb-5"],[1,"row"],[1,"col-md-8"],[1,"card","border-secondary"],[1,"card-body"],[1,"card-title"],[1,"form-group"],["type","text","required","",1,"form-control"],["required","",1,"form-control"],[1,"col-md-4"],["type","email","required","",1,"form-control"],["type","number","required","",1,"form-control"],[1,"card","border-secondary","mt-2"],[1,"card-title","d-flex","justify-content-between"],["type","button",1,"btn","btn-secondary",3,"click"],[1,"table"],["width","25%"],[4,"ngFor","ngForOf"],["rows","3",1,"form-control"],["type","button",1,"btn","btn-secondary","btn-lg","btn-block"],["type","submit",1,"btn","btn-secondary","btn-lg","btn-block"],["scope","row"]],template:function(t,i){1&t&&(e.TgZ(0,"form")(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"div",4)(6,"h4",5),e._uU(7,"Customer Details"),e.qZA(),e.TgZ(8,"div",1)(9,"div",2)(10,"div",6)(11,"label"),e._uU(12,"Name"),e.qZA(),e._UZ(13,"input",7),e.qZA(),e.TgZ(14,"div",6)(15,"label"),e._uU(16,"Address"),e.qZA(),e._UZ(17,"textarea",8),e.qZA()(),e.TgZ(18,"div",9)(19,"div",6)(20,"label"),e._uU(21,"Email ID"),e.qZA(),e._UZ(22,"input",10),e.qZA(),e.TgZ(23,"div",6)(24,"label"),e._uU(25,"Contact No."),e.qZA(),e._UZ(26,"input",11),e.qZA()()()()(),e.TgZ(27,"div",12)(28,"div",4)(29,"h4",13),e._uU(30," Order Details "),e.TgZ(31,"button",14),e.NdJ("click",function(){return i.addProduct()}),e._uU(32," + "),e.qZA()(),e.TgZ(33,"div",1)(34,"table",15)(35,"thead")(36,"tr")(37,"th",16),e._uU(38,"Product"),e.qZA(),e.TgZ(39,"th",16),e._uU(40,"Price"),e.qZA(),e.TgZ(41,"th",16),e._uU(42,"Quantity"),e.qZA(),e.TgZ(43,"th",16),e._uU(44,"Amount"),e.qZA()()(),e.TgZ(45,"tbody"),e.YNc(46,h,9,1,"tr",17),e.qZA()()()()(),e.TgZ(47,"div",12)(48,"div",4)(49,"h4",5),e._uU(50,"Additional Details"),e.qZA(),e.TgZ(51,"div",6),e._UZ(52,"textarea",18),e.qZA()()()(),e.TgZ(53,"div",9)(54,"button",19),e._uU(55," Download Invoice "),e.qZA(),e.TgZ(56,"button",19),e._uU(57," Print Invoice "),e.qZA(),e.TgZ(58,"button",20),e._uU(59," Open Invoice "),e.qZA()()()()()),2&t&&(e.xp6(46),e.Q6J("ngForOf",i.products))},dependencies:[c.sg,d._Y,d.JL,d.F]}),n})();function y(n,o){1&n&&(e.TgZ(0,"div",21)(1,"div",8),e._UZ(2,"input",26),e.qZA()())}function b(n,o){1&n&&(e.TgZ(0,"div",1)(1,"div",7)(2,"div",8),e._UZ(3,"input",27),e.qZA(),e.TgZ(4,"div",8)(5,"div",8),e._UZ(6,"textarea",28),e.qZA()()(),e.TgZ(7,"div",7)(8,"div",8),e._UZ(9,"input",29),e.qZA(),e.TgZ(10,"div",8),e._UZ(11,"input",30),e.qZA()()())}function T(n,o){if(1&n&&(e.TgZ(0,"option",37),e._uU(1),e.qZA()),2&n){const t=o.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",t," ")}}function w(n,o){if(1&n&&(e.TgZ(0,"div",1)(1,"div",31)(2,"div",8)(3,"select",32),e.YNc(4,T,2,2,"option",33),e.qZA()()(),e.TgZ(5,"div",31)(6,"div",8),e._UZ(7,"input",34),e.qZA()(),e.TgZ(8,"div",31)(9,"div",8),e._UZ(10,"input",35),e.qZA()(),e.TgZ(11,"div",31)(12,"div",8),e._UZ(13,"input",36),e.qZA()()()),2&n){const t=e.oxw();e.xp6(4),e.Q6J("ngForOf",t.degrees)}}function P(n,o){if(1&n&&e._UZ(0,"img",38),2&n){const t=e.oxw();e.Q6J("src",t.profilePic,e.LSH)}}let R=(()=>{class n{constructor(){}ngOnInit(){}addSkill(){}addExperience(){}addEducation(){}fileChanged(t){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-resume-form"]],decls:72,vars:4,consts:[[1,"container-fluid"],[1,"row"],[1,"col-md-8"],[1,"shadow-sm","card"],[1,"card-body"],[1,"card-title","d-flex","align-items-center"],[1,"material-icons"],[1,"col-md-6"],[1,"form-group"],["placeholder","Name","required","","type","text",1,"form-control"],["name","address","placeholder","Address","required","","rows","3",1,"form-control"],["placeholder","Contact No.","required","","type","text",1,"form-control"],["placeholder","Email ID","required","","type","text",1,"form-control"],["placeholder","Social Profile ","type","text",1,"form-control"],[1,"d-flex","justify-content-between","card-title"],[1,"d-flex","align-items-center"],[1,"btn","btn-primary",3,"click"],["class","col-md-4",4,"ngFor","ngForOf"],["class","row",4,"ngFor","ngForOf"],[1,"col-md-12"],["rows","4","type","text",1,"form-control"],[1,"col-md-4"],[1,"card","p-4"],[1,"h4","mb-3"],["aria-describedby","fileHelpId","type","file",1,"form-control-file",3,"change"],["alt","","class","img-thumbnail",3,"src",4,"ngIf"],["placeholder","e.g. Java / Angular / .Net ","required","","type","text",1,"form-control"],["placeholder","Employer","required","","type","text",1,"form-control"],["placeholder","Job Description","rows","3",1,"form-control"],["placeholder","Job Title","required","","type","text",1,"form-control"],["placeholder","Experience in months","required","","type","number",1,"form-control"],[1,"col-md-3"],["required","",1,"form-control"],[3,"value",4,"ngFor","ngForOf"],["placeholder","School/College","required","","type","text",1,"form-control"],["placeholder","Passing Year","required","","type","number",1,"form-control"],["placeholder","Percentage","required","","type","number",1,"form-control"],[3,"value"],["alt","",1,"img-thumbnail",3,"src"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"form")(2,"div",1)(3,"div",2)(4,"div",3)(5,"div",4)(6,"h4",5)(7,"i",6),e._uU(8," account_circle "),e.qZA(),e._uU(9," Personal Details "),e.qZA(),e.TgZ(10,"div",1)(11,"div",7)(12,"div",8),e._UZ(13,"input",9),e.qZA(),e.TgZ(14,"div",8)(15,"div",8),e._UZ(16,"textarea",10),e.qZA()()(),e.TgZ(17,"div",7)(18,"div",8),e._UZ(19,"input",11),e.qZA(),e.TgZ(20,"div",8),e._UZ(21,"input",12),e.qZA(),e.TgZ(22,"div",8),e._UZ(23,"input",13),e.qZA()()()()(),e.TgZ(24,"div",3)(25,"div",4)(26,"div",14)(27,"h4",15)(28,"i",6),e._uU(29," timeline "),e.qZA(),e._uU(30," Skills "),e.qZA(),e.TgZ(31,"button",16),e.NdJ("click",function(){return i.addSkill()}),e._uU(32,"+"),e.qZA()(),e.TgZ(33,"div",1),e.YNc(34,y,3,0,"div",17),e.qZA()()(),e.TgZ(35,"div",3)(36,"div",4)(37,"div",14)(38,"h4",15)(39,"i",6),e._uU(40," timeline "),e.qZA(),e._uU(41," Experience "),e.qZA(),e.TgZ(42,"button",16),e.NdJ("click",function(){return i.addExperience()}),e._uU(43," + "),e.qZA()(),e.YNc(44,b,12,0,"div",18),e.qZA()(),e.TgZ(45,"div",3)(46,"div",4)(47,"div",14)(48,"h4",15)(49,"i",6),e._uU(50," school "),e.qZA(),e._uU(51," Education "),e.qZA(),e.TgZ(52,"button",16),e.NdJ("click",function(){return i.addEducation()}),e._uU(53," + "),e.qZA()(),e.YNc(54,w,14,1,"div",18),e.qZA()(),e.TgZ(55,"div",3)(56,"div",4)(57,"h4",5)(58,"i",6),e._uU(59," list "),e.qZA(),e._uU(60,"Other Details "),e.qZA(),e.TgZ(61,"div",1)(62,"div",19)(63,"div",8),e._UZ(64,"textarea",20),e.qZA()()()()()(),e.TgZ(65,"div",21)(66,"div",22)(67,"div",8)(68,"label",23),e._uU(69,"Show your picture in Resume"),e.qZA(),e.TgZ(70,"input",24),e.NdJ("change",function(l){return i.fileChanged(l)}),e.qZA()(),e.YNc(71,P,1,1,"img",25),e.qZA()()()()()),2&t&&(e.xp6(34),e.Q6J("ngForOf",i.skills),e.xp6(10),e.Q6J("ngForOf",i.experiences),e.xp6(10),e.Q6J("ngForOf",i.educations),e.xp6(17),e.Q6J("ngIf",i.profilePic))},dependencies:[c.sg,c.O5,d._Y,d.YN,d.Kr,d.JL,d.F]}),n})();class S{constructor(){this.disabled=!1,this.onTouch=()=>{}}onChange(o){}onTouched(o){}writeValue(o){this.value=o}registerOnChange(o){this.onChange=o}registerOnTouched(o){this.onTouched=o}setDisabledState(o){this.disabled=o}}function J(n,o){1&n&&(e.TgZ(0,"div"),e._uU(1,"\u2714"),e.qZA())}const q=function(n){return{"check-selected":n}};let I=(()=>{class n extends S{toggle(){this.value=!this.value,this.onChange(this.value)}}return n.\u0275fac=function(){let o;return function(i){return(o||(o=e.n5z(n)))(i||n)}}(),n.\u0275cmp=e.Xpm({type:n,selectors:[["app-check"]],features:[e._Bn([{provide:d.JU,useExisting:(0,e.Gpc)(()=>n),multi:!0}]),e.qOj],decls:2,vars:4,consts:[[3,"ngClass","click"],[4,"ngIf"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e.NdJ("click",function(){return i.toggle()}),e.YNc(1,J,2,0,"div",1),e.qZA()),2&t&&(e.Q6J("ngClass",e.VKq(2,q,i.value)),e.xp6(1),e.Q6J("ngIf",i.value))},dependencies:[c.mk,c.O5],styles:["div[_ngcontent-%COMP%]{width:24px;height:24px;border:1px solid black;margin-right:24px;display:inline-block}.check-selected[_ngcontent-%COMP%]{background-color:#000}"]}),n})(),U=(()=>{class n extends S{constructor(){super()}onChangeInput(t){this.value=t.target.value,this.onTouched(),this.onChange(this.value)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-input"]],features:[e._Bn([{provide:d.JU,useExisting:(0,e.Gpc)(()=>n),multi:!0}]),e.qOj],decls:1,vars:1,consts:[["type","text",3,"value","input"]],template:function(t,i){1&t&&(e.TgZ(0,"input",0),e.NdJ("input",function(l){return i.onChangeInput(l)}),e.qZA()),2&t&&e.Q6J("value",i.value)}}),n})(),N=(()=>{class n{constructor(t){this.fb=t,this.form=this.fb.group({selected:[!1],firstName:["trilok"],lastName:["singh"]})}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(d.qu))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-reactive-form"]],decls:7,vars:4,consts:[[3,"formGroup"],["formControlName","selected"],["formControlName","firstName"],["formControlName","lastName"]],template:function(t,i){1&t&&(e.TgZ(0,"form",0),e._UZ(1,"app-check",1)(2,"app-input",2)(3,"app-input",3),e.TgZ(4,"span"),e._uU(5),e.ALo(6,"json"),e.qZA()()),2&t&&(e.Q6J("formGroup",i.form),e.xp6(5),e.Oqu(e.lcZ(6,2,i.form.value)))},dependencies:[d._Y,d.JJ,d.JL,d.sg,d.u,I,U,c.Ts]}),n})();var _=u(1777);const j=["withBuilder"];let r=(()=>{class n{constructor(t){this.animationBuilder=t,this.isOpen=!0}get collapseState(){return this.isOpen?"open":"close"}ngAfterViewInit(){}createPlayer(){let t;this.player&&this.player.destroy(),t=this.animationBuilder.build(this.isOpen?[(0,_.oB)({width:"*"}),(0,_.jt)(200,(0,_.oB)({width:0}))]:[(0,_.oB)({width:0}),(0,_.jt)(200,(0,_.oB)("*"))]),this.player=t.create(this.elementRef.nativeElement)}toggle(){this.createPlayer(),this.player.play(),this.isOpen=!this.isOpen}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(_._j))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-animations"]],viewQuery:function(t,i){if(1&t&&e.Gf(j,5),2&t){let s;e.iGM(s=e.CRH())&&(i.elementRef=s.first)}},decls:9,vars:1,consts:[[3,"click"],[1,"container"],["withBuilder",""]],template:function(t,i){1&t&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return i.toggle()}),e._uU(1,"Toggle"),e.qZA(),e.TgZ(2,"h2"),e._uU(3,"Without AnimationBuilder:"),e.qZA(),e._UZ(4,"div",1),e.TgZ(5,"h2"),e._uU(6,"With AnimationBuilder:"),e.qZA(),e._UZ(7,"div",1,2)),2&t&&(e.xp6(4),e.Q6J("@collapse",i.collapseState))},styles:[".container[_ngcontent-%COMP%]{border:2px solid red;height:200px}"],data:{animation:[(0,_.X$)("collapse",[(0,_.SB)("open",(0,_.oB)({width:"*"})),(0,_.SB)("close",(0,_.oB)({width:0})),(0,_.eR)("open => close",[(0,_.oB)({width:"*"}),(0,_.jt)(200,(0,_.oB)({width:0}))]),(0,_.eR)("close => open",[(0,_.oB)({width:0}),(0,_.jt)(200,(0,_.oB)({width:"*"}))])])]}}),n})();function p(n,o){if(1&n&&(e.TgZ(0,"th"),e._uU(1),e.qZA()),2&n){const t=o.$implicit;e.xp6(1),e.Oqu(t)}}function a(n,o){if(1&n&&(e.TgZ(0,"strong"),e._uU(1),e.qZA()),2&n){const t=e.oxw().$implicit,i=e.oxw(3);e.xp6(1),e.hij(" ",i.monthNames[t.date.getMonth()],"")}}const m=function(n,o){return{"past-date":n,today:o}},A=function(n){return{"blue-date":n}};function L(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"td",7),e.NdJ("click",function(){const l=e.CHM(t).$implicit,g=e.oxw(3);return e.KtG(g.onDayClicked(l))}),e.TgZ(1,"div",8)(2,"strong",9),e._uU(3),e.qZA(),e.YNc(4,a,2,1,"strong",10),e.qZA()()}if(2&n){const t=o.$implicit,i=o.index,s=e.oxw().index,l=e.oxw(2);e.Q6J("ngClass",e.WLB(4,m,t.isPastDate,t.isToday)),e.xp6(2),e.Q6J("ngClass",e.VKq(7,A,t.isToday)),e.xp6(1),e.Oqu(t.date.getDate()),e.xp6(1),e.Q6J("ngIf",l.shouldShowMonthName(t,s,i))}}function Q(n,o){if(1&n&&(e.TgZ(0,"tr"),e.YNc(1,L,5,9,"td",6),e.qZA()),2&n){const t=o.$implicit;e.xp6(1),e.Q6J("ngForOf",t)}}function W(n,o){if(1&n&&(e.TgZ(0,"table",4)(1,"thead")(2,"tr"),e.YNc(3,p,2,1,"th",5),e.qZA()(),e.TgZ(4,"tbody"),e.YNc(5,Q,2,1,"tr",5),e.ALo(6,"chunk"),e.qZA()()),2&n){const t=e.oxw();e.xp6(3),e.Q6J("ngForOf",t.dayNames),e.xp6(2),e.Q6J("ngForOf",e.xi3(6,2,t.calendar,7))}}class V{constructor(o){this.date=o,this.isPastDate=o.setHours(0,0,0,0)<(new Date).setHours(0,0,0,0),this.isToday=o.setHours(0,0,0,0)==(new Date).setHours(0,0,0,0)}getDateString(){return this.date.toISOString().split("T")[0]}}let H=(()=>{class n{transform(t,i){let s=[],l=[];return t.map((g,v)=>{l.push(g),++v%i==0&&(s.push(l),l=[])}),s}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275pipe=e.Yjl({name:"chunk",type:n,pure:!0}),n})(),X=(()=>{class n{constructor(){this.calendar=[],this.dayNames=this.getDayNames(),this.monthNames=["January","February","March","April","May","June","July","August","September","October","November","December"],this.monthIndex=0}ngOnInit(){this.generateCalendarDays(this.monthIndex)}getDayNames(t="en"){let i=[];const l=new Date(Date.UTC(1970,0,5));for(let g=0;g<7;g++)i.push(this.getDayName(l,t)),l.setDate(l.getDate()+1);return i}getDayName(t,i="tr-TR"){return t.toLocaleDateString(i,{weekday:"long"})}generateCalendarDays(t){this.calendar=[];let i=new Date((new Date).setMonth((new Date).getMonth()+t));this.displayMonth=this.monthNames[i.getMonth()];let l=this.getStartDateForCalendar(i);for(var v=0;v<42;v++)this.calendar.push(new V(new Date(l))),l=new Date(l.setDate(l.getDate()+1))}getStartDateForCalendar(t){let s=new Date(t.setDate(0));if(1!=s.getDay())do{s=new Date(s.setDate(s.getDate()-1))}while(1!=s.getDay());return s}increaseMonth(){this.monthIndex++,this.generateCalendarDays(this.monthIndex)}decreaseMonth(){this.monthIndex--,this.generateCalendarDays(this.monthIndex)}setCurrentMonth(){this.monthIndex=0,this.generateCalendarDays(this.monthIndex)}shouldShowMonthName(t,i,s){return t.isToday||0==i&&0==s||1==t.date.getDate()}onDayClicked(t){console.log(t)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-calender"]],decls:10,vars:3,consts:[["type","button","value","today",3,"click"],["type","button","value","-",3,"click"],["type","button","value","+",3,"click"],["class","calendar-table",4,"ngIf"],[1,"calendar-table"],[4,"ngFor","ngForOf"],["class","calendar-day",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"calendar-day",3,"ngClass","click"],[1,"calendar-day-header"],[3,"ngClass"],[4,"ngIf"]],template:function(t,i){1&t&&(e.TgZ(0,"div")(1,"div"),e._uU(2),e.qZA(),e.TgZ(3,"div")(4,"input",0),e.NdJ("click",function(){return i.setCurrentMonth()}),e.qZA(),e.TgZ(5,"input",1),e.NdJ("click",function(){return i.decreaseMonth()}),e.qZA(),e.TgZ(6,"input",2),e.NdJ("click",function(){return i.increaseMonth()}),e.qZA()()(),e.TgZ(7,"pre"),e._uU(8),e.qZA(),e.YNc(9,W,7,5,"table",3)),2&t&&(e.xp6(2),e.hij(" ",i.displayMonth," "),e.xp6(6),e.Oqu(i.dayNames),e.xp6(1),e.Q6J("ngIf",i.calendar))},dependencies:[c.mk,c.sg,c.O5,H],styles:[".calendar-table[_ngcontent-%COMP%]{border-collapse:collapse;width:100%;max-width:100%;margin-bottom:1rem;border:1px solid #dee2e6;background-color:#fff}.calendar-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{vertical-align:bottom;border-bottom:2px solid #dee2e6;width:14.2%}.calendar-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .calendar-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid #dee2e6}.calendar-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .calendar-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:.75rem;vertical-align:top;border-top:1px solid #dee2e6}.calendar-day[_ngcontent-%COMP%]{height:12vh;max-height:12vh;cursor:pointer;max-width:30px;width:30px}.calendar-items-wrapper[_ngcontent-%COMP%]{margin-left:-10px;margin-right:-10px;overflow-y:auto;max-height:calc(100% - 20px)}.calendar-day.past-date[_ngcontent-%COMP%]{background-color:#ececec}.calendar-day[_ngcontent-%COMP%]:hover{background-color:#f8f8f8}.blue-date[_ngcontent-%COMP%]{padding:4px;color:#fff;background-color:#106ebe;border:solid 1px rgb(16,110,190);border-radius:16px}"]}),n})();function K(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div")(1,"label"),e._uU(2),e.qZA(),e.TgZ(3,"input",6),e.NdJ("ngModelChange",function(s){const g=e.CHM(t).$implicit;return e.KtG(g.value=s)}),e.qZA(),e.TgZ(4,"span"),e._uU(5),e.qZA()()}if(2&n){const t=o.$implicit;e.xp6(2),e.Oqu(t.label),e.xp6(1),e.Q6J("ngModel",t.value),e.xp6(2),e.Oqu(t.value)}}function z(n,o){if(1&n&&(e.O4$(),e.TgZ(0,"text"),e._uU(1),e.qZA()),2&n){const t=o.$implicit,i=o.index,s=e.oxw();e.uIk("x",s.labelPoint(s.stats,i,"x"))("y",s.labelPoint(s.stats,i,"y")),e.xp6(1),e.hij(" ",t.label," ")}}let ee=(()=>{class n{constructor(){this.stats=[{label:"Combat",value:90},{label:"Endurance",value:80},{label:"Charm",value:80},{label:"Sneak",value:60},{label:"Magic",value:100}]}ngOnInit(){this.total=this.stats.length,this.polypoints=this.computePoints(this.stats)}valueToPoint(t,i,s){let l={x:0,y:0},v=.8*-t,M=2*Math.PI/s*i,k=Math.cos(M),O=Math.sin(M),Y=0*O+v*k+100;return l.x=Math.round(0*k-v*O+100),l.y=Math.round(Y),l}labelPoint(t,i,s){let l,v=this.valueToPoint(t[i].value,i,t.length);return l="x"===s?v.x:v.y,l}computePoints(t){const i=t.length;let s="";for(let l=0;l<i;l++){let g=this.valueToPoint(t[l].value,l,i);s+=g.x.toString()+","+g.y.toString()+" "}return s}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-graph"]],decls:13,vars:7,consts:[[4,"ngFor","ngForOf"],["id","add"],["name","newlabel",3,"ngModel","ngModelChange"],["width","300","height","200"],["cx","100","cy","100","r","80"],["id","raw",1,"json"],["type","range","min","0","max","100",3,"ngModel","ngModelChange"]],template:function(t,i){1&t&&(e.TgZ(0,"div"),e.YNc(1,K,6,3,"div",0),e.TgZ(2,"form",1)(3,"input",2),e.NdJ("ngModelChange",function(l){return i.newLabel=l}),e.qZA()()(),e.TgZ(4,"div"),e.O4$(),e.TgZ(5,"svg",3)(6,"g"),e._UZ(7,"polygon")(8,"circle",4),e.YNc(9,z,2,3,"text",0),e.qZA()()(),e.kcU(),e.TgZ(10,"pre",5),e._uU(11),e.ALo(12,"json"),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngForOf",i.stats),e.xp6(2),e.Q6J("ngModel",i.newLabel),e.xp6(4),e.uIk("points",i.computePoints(i.stats)),e.xp6(2),e.Q6J("ngForOf",i.stats),e.xp6(2),e.Oqu(e.lcZ(12,5,i.stats)))},dependencies:[c.sg,d._Y,d.Fj,d.eT,d.JJ,d.JL,d.On,d.F,c.Ts],styles:["polygon[_ngcontent-%COMP%]{fill:#42b983;opacity:.75}circle[_ngcontent-%COMP%]{fill:transparent;stroke:#999}text[_ngcontent-%COMP%]{font-family:Helvetica Neue,Arial,sans-serif;font-size:10px;fill:#666}label[_ngcontent-%COMP%]{display:inline-block;margin-left:10px;width:20px}"]}),n})(),te=(()=>{class n{constructor(t){this.recaptchaContainerId=t,console.log(t)}}return n.\u0275fac=function(t){return new(t||n)(e.LFG("recaptchaContainerId",8))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),ne=(()=>{class n{constructor(t){this.recaptchaService=t}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(te))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-recaptcha"]],features:[e._Bn([{provide:"recaptchaContainerId",useValue:"recaptcha-container"}])],decls:1,vars:0,consts:[["id","recaptcha-container"]],template:function(t,i){1&t&&e._UZ(0,"div",0)}}),n})();var oe=u(5861);const ie=["dynamic"];function re(n,o){}let ae=(()=>{class n{constructor(t,i,s){this.cfr=t,this.injector=i,this.vc=s}ngOnInit(){this.loadBlog()}ngAfterViewInit(){u.e(592).then(u.bind(u,6506)).then(({UsersComponent:t})=>{const i=this.cfr.resolveComponentFactory(t);this.dynamicContainer.createComponent(i)})}loadBlog(){var t=this;return(0,oe.Z)(function*(){t.vc.clear();const{TaskingComponent:i}=yield u.e(592).then(u.bind(u,4573));t.vc.createComponent(t.cfr.resolveComponentFactory(i))})()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e._Vd),e.Y36(e.zs3),e.Y36(e.s_b))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-dynamic"]],viewQuery:function(t,i){if(1&t&&e.Gf(ie,5,e.s_b),2&t){let s;e.iGM(s=e.CRH())&&(i.dynamicContainer=s.first)}},decls:2,vars:0,consts:[["dynamic",""]],template:function(t,i){1&t&&e.YNc(0,re,0,0,"ng-template",null,0,e.W1O)}}),n})();var ce=u(4004),se=u(8505),le=u(6858),E=u(1500);function de(n,o){if(1&n&&(e.TgZ(0,"div")(1,"div",13)(2,"div",14)(3,"h6",15),e._uU(4),e.qZA(),e.TgZ(5,"h3",16),e._uU(6),e.qZA(),e.TgZ(7,"p",17),e._uU(8),e.qZA()()()()),2&n){const t=o.$implicit;e.xp6(4),e.Oqu(t.title),e.xp6(1),e.Udp("color",t.color),e.xp6(1),e.hij(" ",t.stat," "),e.xp6(2),e.hij(" ",t.percentage,"% ")}}function pe(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"li",18),e.NdJ("click",function(){const l=e.CHM(t).$implicit,g=e.oxw(2);return e.KtG(g.changeCountry(l.CountryCode))}),e.TgZ(1,"span",19),e._uU(2),e.qZA(),e.TgZ(3,"span",20),e._uU(4),e.qZA()()}if(2&n){const t=o.$implicit;e.xp6(2),e.hij(" ",t.NewConfirmed," "),e.xp6(2),e.hij(" ",t.Country," ")}}function ue(n,o){1&n&&(e.TgZ(0,"p"),e._uU(1,"lorem ipsum"),e.qZA())}function me(n,o){if(1&n&&(e.TgZ(0,"div",1)(1,"h4")(2,"p",2),e._uU(3,"Covid-19"),e.qZA(),e.TgZ(4,"p",3),e._uU(5," Global Trend "),e.qZA()(),e.TgZ(6,"div",4),e.YNc(7,de,9,5,"div",5),e.qZA(),e.TgZ(8,"div",4)(9,"form",6)(10,"fieldset")(11,"div",7),e._UZ(12,"input",8),e.TgZ(13,"ul",9),e.YNc(14,pe,5,2,"li",10),e.qZA()()()(),e.TgZ(15,"div",11),e.YNc(16,ue,2,0,"p",12),e.ALo(17,"async"),e.qZA()()()),2&n){const t=o.ngIf,i=e.oxw();e.xp6(7),e.Q6J("ngForOf",t.majorStats),e.xp6(7),e.Q6J("ngForOf",t.countries),e.xp6(2),e.Q6J("ngIf",e.lcZ(17,3,i.countryData$))}}let ge=(()=>{class n{constructor(t){this.http=t,this.data$=this.getData(),this.countryData$=this.getDataForACountry("IN")}ngOnInit(){}getData(){return this.http.get("https://api.covid19api.com/summary").pipe((0,ce.U)(t=>{const{Global:i,Countries:s}=t,{NewConfirmed:l,TotalConfirmed:g,NewDeaths:v,TotalDeaths:M,NewRecovered:k,TotalRecovered:O}=i;return Object.keys(i),{majorStats:[{title:"Total Confirmed",stat:g,percentage:(l/g*100).toFixed(2),color:"#F9345E"},{title:"Active Confirmed",stat:l,percentage:(l/g*100).toFixed(2),color:"#FA6400"},{title:"Total Recovered",stat:O,percentage:(k/O*100).toFixed(2),color:"#1CB142"},{title:"Total Deaths",stat:M,percentage:(v/M*100).toFixed(2),color:"#6236FF"}],countries:s.sort((De,we)=>we.NewConfirmed-De.NewConfirmed)}}),(0,se.b)(console.log))}getDataForACountry(t){return this.http.get(`https://api.covid19api.com/total/dayone/country/${t}`)}changeCountry(t){this.countryData$=this.getDataForACountry(t)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(le.O))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-covid19"]],decls:2,vars:3,consts:[["class","container pt-5",4,"ngIf"],[1,"container","pt-5"],[1,"text-voilet","page-header","d-inline-block"],[1,"text-dark-blue","page-header","d-inline-block"],["angGrid","","columnGap","4rem","gap","4rem","minWidth","200px","rowGap","4rem"],[4,"ngFor","ngForOf"],[2,"grid-column","span 1"],[1,"form-group"],["placeholder","Search Country","type","text",1,"form-control","border","pl-5","lead","bg-light-gray"],[1,"list-group","mt-3"],["class","list-group-item d-flex pr-2",3,"click",4,"ngFor","ngForOf"],[2,"grid-column","span 2"],[4,"ngIf"],[1,"box-shadow"],[1,"text-center"],[1,"text-center","font-weight-bold"],[1,"card-text","font-weight-bold"],[1,"card-text","small","text-gray"],[1,"list-group-item","d-flex","pr-2",3,"click"],[1,"font-weight-bold","lead"],[1,"pl-2","lead","text-gray"]],template:function(t,i){1&t&&(e.YNc(0,me,18,5,"div",0),e.ALo(1,"async")),2&t&&e.Q6J("ngIf",e.lcZ(1,1,i.data$))},dependencies:[c.sg,c.O5,d._Y,d.JL,d.F,E.lj,c.Ov],styles:['@import"https://fonts.googleapis.com/css2?family=Poppins&display=swap";.bg-white[_ngcontent-%COMP%]{background:white}.text-green[_ngcontent-%COMP%]{color:#6dd400}.text-voilet[_ngcontent-%COMP%]{color:#9475ff}.test-orange[_ngcontent-%COMP%]{color:#ff751a}.text-red[_ngcontent-%COMP%]{color:#fd4e71}.text-dark-blue[_ngcontent-%COMP%]{color:#1a1053}.text-gray[_ngcontent-%COMP%]{color:#817c9b}.box-shadow[_ngcontent-%COMP%]{box-shadow:0 4px 8px #0000001a,0 6px 20px #0000;border:1px solid white;border-radius:1rem}.list-group[_ngcontent-%COMP%]{max-height:60vh;overflow-y:scroll}.page-header[_ngcontent-%COMP%]{width:100%;font-weight:800}.d-inline-block[_ngcontent-%COMP%]{display:inline-block}.lead[_ngcontent-%COMP%]{font-size:14px}.border[_ngcontent-%COMP%]{border-radius:1.5rem}.list-group-item[_ngcontent-%COMP%]{border:none}.bg-gray[_ngcontent-%COMP%]{background-color:#d3d3d3}.bg-light-gray[_ngcontent-%COMP%]{background-color:#d3d3d35e}[_ngcontent-%COMP%]::-webkit-scrollbar{width:10px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{box-shadow:inset 0 0 4px #d3d3d3;border-radius:8px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:rgba(129,124,155,.7215686275);border-radius:8px;height:35px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:rgba(129,124,155,.7215686275)}.search[_ngcontent-%COMP%]{float:left;position:absolute;font-size:15px;left:28px;top:8px}']}),n})();var he=u(7579),fe=u(1135);let B=(()=>{class n{constructor(){this.subjectSource=new he.x,this.subject$=this.subjectSource.asObservable(),this.behaviorSubjectSource=new fe.X("Behavior subject initial value"),this.behaviorSubject$=this.behaviorSubjectSource.asObservable()}setSubjectValue(t){this.subjectSource.next(t)}setBehaviourSubjectValue(t){this.behaviorSubjectSource.next(t)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var ve=u(8327),_e=u(3711);let ye=(()=>{class n{constructor(t){this.rxjsService=t}ngOnInit(){}subscribe(){this.rxjsService.subject$.subscribe(t=>this.data=t)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(B))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-subject-card"]],decls:10,vars:1,consts:[["title",""],[1,"btn","btn-primary",3,"click"],[1,"card-title","text-center"],[1,"card-text","text-center"]],template:function(t,i){1&t&&(e.TgZ(0,"app-card"),e.ynx(1,0),e._uU(2," Subject Component "),e.TgZ(3,"button",1),e.NdJ("click",function(){return i.subscribe()}),e._uU(4,"Subscribe"),e.qZA(),e.BQk(),e.ynx(5),e.TgZ(6,"h5",2),e._uU(7,"Data Window"),e.qZA(),e.TgZ(8,"p",3),e._uU(9),e.qZA(),e.BQk(),e.qZA()),2&t&&(e.xp6(9),e.Oqu(i.data))}}),n})(),Ce=(()=>{class n{constructor(t){this.rxjsService=t}ngOnInit(){}subscribe(){this.rxjsService.behaviorSubject$.subscribe(t=>this.data=t)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(B))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-behaviour-card"]],decls:10,vars:1,consts:[["title",""],[1,"btn","btn-primary",3,"click"],[1,"card-title","text-center"],[1,"card-text","text-center"]],template:function(t,i){1&t&&(e.TgZ(0,"app-card"),e.ynx(1,0),e._uU(2," Behaviour Subject Component "),e.TgZ(3,"button",1),e.NdJ("click",function(){return i.subscribe()}),e._uU(4,"Subscribe"),e.qZA(),e.BQk(),e.ynx(5),e.TgZ(6,"h5",2),e._uU(7,"Data Window"),e.qZA(),e.TgZ(8,"p",3),e._uU(9),e.qZA(),e.BQk(),e.qZA()),2&t&&(e.xp6(9),e.Oqu(i.data))}}),n})();const G=[{path:"",component:f,children:[{path:"invoice",component:C},{path:"resume",component:R},{path:"reactive",component:N},{path:"animations",component:r},{path:"calender",component:X},{path:"graph",component:ee},{path:"recaptcha",component:ne},{path:"dynamic",component:ae},{path:"covid19",component:ge},{path:"rxjs",component:(()=>{class n{constructor(t){this.rxjsService=t}saveData(t){this.rxjsService.setSubjectValue(t),this.rxjsService.setBehaviourSubjectValue(t)}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(B))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-rxjs"]],decls:10,vars:1,consts:[[3,"tabTitle"],[1,"form-group"],[1,"form-control","w-25"],["dataInput",""],[1,"btn","btn-warning","mt-2",3,"click"],["tabTitle","Tab 2"]],template:function(t,i){if(1&t){const s=e.EpF();e.TgZ(0,"app-tabs")(1,"app-tab",0)(2,"fieldset",1),e._UZ(3,"input",2,3),e.TgZ(5,"button",4),e.NdJ("click",function(){e.CHM(s);const g=e.MAs(4);return e.KtG(i.saveData(g.value))}),e._uU(6,"Subjects.next()"),e.qZA()(),e._UZ(7,"app-subject-card")(8,"app-behaviour-card"),e.qZA(),e._UZ(9,"app-tab",5),e.qZA()}2&t&&(e.xp6(1),e.Q6J("tabTitle","Subject vs Behaviour Subject"))},dependencies:[ve.n,_e.i,ye,Ce]}),n})()},{path:"",redirectTo:"invoice",pathMatch:"full"}]}];let be=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[x.Bz.forChild(G),x.Bz]}),n})();var Ze=u(4466),xe=u(7807);let Te=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[c.ez,Ze.m,be,xe.P,E.im]}),n})()},4707:(F,D,u)=>{u.d(D,{t:()=>e});var c=u(7579),x=u(6063);class e extends c.x{constructor(f=1/0,d=1/0,h=x.l){super(),this._bufferSize=f,this._windowTime=d,this._timestampProvider=h,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=d===1/0,this._bufferSize=Math.max(1,f),this._windowTime=Math.max(1,d)}next(f){const{isStopped:d,_buffer:h,_infiniteTimeWindow:C,_timestampProvider:y,_windowTime:b}=this;d||(h.push(f),!C&&h.push(y.now()+b)),this._trimBuffer(),super.next(f)}_subscribe(f){this._throwIfClosed(),this._trimBuffer();const d=this._innerSubscribe(f),{_infiniteTimeWindow:h,_buffer:C}=this,y=C.slice();for(let b=0;b<y.length&&!f.closed;b+=h?1:2)f.next(y[b]);return this._checkFinalizedStatuses(f),d}_trimBuffer(){const{_bufferSize:f,_timestampProvider:d,_buffer:h,_infiniteTimeWindow:C}=this,y=(C?1:2)*f;if(f<1/0&&y<h.length&&h.splice(0,h.length-y),!C){const b=d.now();let T=0;for(let w=1;w<h.length&&h[w]<=b;w+=2)T=w;T&&h.splice(0,T+1)}}}},4782:(F,D,u)=>{u.d(D,{d:()=>e});var c=u(4707),x=u(3099);function e(Z,f,d){var h,C;let y,b=!1;return Z&&"object"==typeof Z?(y=null!==(h=Z.bufferSize)&&void 0!==h?h:1/0,f=null!==(C=Z.windowTime)&&void 0!==C?C:1/0,b=!!Z.refCount,d=Z.scheduler):y=null!=Z?Z:1/0,(0,x.B)({connector:()=>new c.t(y,f,d),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:b})}},1500:(F,D,u)=>{u.d(D,{$i:()=>S,Dr:()=>N,E8:()=>I,Mi:()=>P,Ml:()=>w,S_:()=>T,eJ:()=>C,im:()=>j,lj:()=>_,or:()=>q,wk:()=>Z,yc:()=>f,zK:()=>U});var c=u(5e3),x=u(9808),e=u(3075);let Z=(()=>{class r{constructor(a,m){this.templateRef=a,this.vcr=m,this.show=!1}set angIf(a){this.show=a,this.showTemplate()}ngOnInit(){this.showTemplate()}showTemplate(){this.vcr.clear(),this.show?this.vcr.createEmbeddedView(this.templateRef):this.angIfElse&&this.vcr.createEmbeddedView(this.angIfElse)}}return r.\u0275fac=function(a){return new(a||r)(c.Y36(c.Rgc),c.Y36(c.s_b))},r.\u0275dir=c.lG2({type:r,selectors:[["","angIf",""]],inputs:{angIf:"angIf",angIfElse:"angIfElse"}}),r})(),f=(()=>{class r{constructor(a,m){this.templateRef=a,this.vcr=m,this.items=[]}set angForOf(a){this.items=a,this.renderItems()}static ngTemplateContextGuard(a,m){return!0}ngOnInit(){this.renderItems()}renderItems(){this.vcr.clear(),this.items.map((a,m,A)=>{this.vcr.createEmbeddedView(this.templateRef,{$implicit:a,index:m,count:A.length,first:0===m,last:m===A.length-1,even:1==(1&m),odd:0==(1&m)})})}}return r.\u0275fac=function(a){return new(a||r)(c.Y36(c.Rgc),c.Y36(c.s_b))},r.\u0275dir=c.lG2({type:r,selectors:[["","angFor",""]],inputs:{angForOf:"angForOf"}}),r})();class h{constructor(p){this.dir=p}get ngLet(){return this.dir.ngLet}}let C=(()=>{class r{constructor(a,m){a.createEmbeddedView(m,new h(this))}}return r.\u0275fac=function(a){return new(a||r)(c.Y36(c.s_b),c.Y36(c.Rgc))},r.\u0275dir=c.lG2({type:r,selectors:[["","ngLet",""]],inputs:{ngLet:"ngLet"}}),r})(),T=(()=>{class r{constructor(){this.rel="noopener"}}return r.\u0275fac=function(a){return new(a||r)},r.\u0275dir=c.lG2({type:r,selectors:[["","ngSafeLink",""]],hostVars:1,hostBindings:function(a,m){2&a&&c.Ikx("rel",m.rel)}}),r})(),w=(()=>{class r{constructor(){this.rel="noopener"}}return r.\u0275fac=function(a){return new(a||r)},r.\u0275dir=c.lG2({type:r,selectors:[["a","target","_blank",3,"rel","noopener"]],hostVars:1,hostBindings:function(a,m){2&a&&c.Ikx("rel",m.rel)}}),r})(),P=(()=>{class r{constructor(a){this.ngControl=a}set disabledControl(a){this.ngControl.control[a?"disable":"enable"]()}}return r.\u0275fac=function(a){return new(a||r)(c.Y36(e.a5))},r.\u0275dir=c.lG2({type:r,selectors:[["","formControlName",""],["","formControl","","disabledControl",""]],inputs:{disabledControl:"disabledControl"}}),r})(),S=(()=>{class r{constructor(a){this.ngFor=a,this.ngFor.ngForTrackBy=(m,A)=>A.id}}return r.\u0275fac=function(a){return new(a||r)(c.Y36(x.sg,1))},r.\u0275dir=c.lG2({type:r,selectors:[["","ngForTrackById",""]]}),r})(),q=(()=>{class r{}return r.\u0275fac=function(a){return new(a||r)},r.\u0275mod=c.oAB({type:r}),r.\u0275inj=c.cJS({imports:[x.ez]}),r})(),I=(()=>{class r{constructor(a){this.el=a}get x(){var a,m;return null===(m=null===(a=this.el.nativeElement)||void 0===a?void 0:a.getBoundingClientRect())||void 0===m?void 0:m.x}}return r.\u0275fac=function(a){return new(a||r)(c.Y36(c.SBq))},r.\u0275dir=c.lG2({type:r,selectors:[["","angStickyTable",""]]}),r})(),U=(()=>{class r{constructor(a,m){this.el=a,this.table=m}ngAfterViewInit(){const a=this.el.nativeElement,{x:m}=a.getBoundingClientRect();a.style.position="sticky",a.style.left=this.table?m-this.table.x+"px":"0px",a.style.background="#ccc",a.style.zIndex="1000"}}return r.\u0275fac=function(a){return new(a||r)(c.Y36(c.SBq),c.Y36(I,8))},r.\u0275dir=c.lG2({type:r,selectors:[["","angSticky",""]]}),r})(),N=(()=>{class r{}return r.\u0275fac=function(a){return new(a||r)},r.\u0275mod=c.oAB({type:r}),r.\u0275inj=c.cJS({imports:[x.ez]}),r})(),_=(()=>{class r{constructor(a){this.elementRef=a,this.minWidth="5em",this.maxWidth="1fr",this.columnGap="0.5em",this.rowGap="0.5em",this.gap="0.5em"}get styles(){return`\n     display: grid;\n     grid-template-columns: repeat(auto-fit, minmax(${this.minWidth},${this.maxWidth}));\n     grid-column-gap: ${this.columnGap};\n     grid-row-gap: ${this.rowGap};\n     grid-gap: ${this.gap}`}ngOnInit(){}}return r.\u0275fac=function(a){return new(a||r)(c.Y36(c.SBq))},r.\u0275dir=c.lG2({type:r,selectors:[["","angGrid",""]],hostVars:2,hostBindings:function(a,m){2&a&&c.Akn(m.styles)},inputs:{minWidth:"minWidth",maxWidth:"maxWidth",columnGap:"columnGap",rowGap:"rowGap",gap:"gap"}}),r})(),j=(()=>{class r{}return r.\u0275fac=function(a){return new(a||r)},r.\u0275mod=c.oAB({type:r}),r.\u0275inj=c.cJS({imports:[x.ez]}),r})()},5861:(F,D,u)=>{function c(e,Z,f,d,h,C,y){try{var b=e[C](y),T=b.value}catch(w){return void f(w)}b.done?Z(T):Promise.resolve(T).then(d,h)}function x(e){return function(){var Z=this,f=arguments;return new Promise(function(d,h){var C=e.apply(Z,f);function y(T){c(C,d,h,y,b,"next",T)}function b(T){c(C,d,h,y,b,"throw",T)}y(void 0)})}}u.d(D,{Z:()=>x})}}]);