"use strict";(self.webpackChunkportfolio_all_in_one=self.webpackChunkportfolio_all_in_one||[]).push([[2866],{1446:(T,u,e)=>{e.d(u,{y:()=>j});var d=e(177),t=e(4438),l=e(9417),m=e(2752);const y=s=>({$implicit:s});function f(s,v){if(1&s){const o=t.RV6();t.j41(0,"div",6),t.qSk(),t.j41(1,"svg",3),t.nrm(2,"path",9),t.k0s(),t.joV(),t.j41(3,"input",10),t.mxI("ngModelChange",function(r){t.eBV(o);const h=t.XpG(2);return t.DH7(h.value,r)||(h.value=r),t.Njj(r)}),t.k0s()()}if(2&s){const o=t.XpG(2);t.R7$(3),t.R50("ngModel",o.value)}}function _(s,v){if(1&s){const o=t.RV6();t.j41(0,"li",11),t.bIt("click",function(){const r=t.eBV(o).$implicit,h=t.XpG(2);return t.Njj(h.selectItem(r))}),t.eu8(1,12),t.k0s()}if(2&s){const o=v.$implicit,c=t.XpG(2),r=t.sdS(9);t.AVh("selected",o===c.selectItem),t.R7$(),t.Y8G("ngTemplateOutlet",c.itemTemplate()||r)("ngTemplateOutletContext",t.eq3(4,y,o))}}function g(s,v){1&s&&(t.j41(0,"p"),t.EFF(1,"Oops! items not found"),t.k0s())}function b(s,v){if(1&s&&(t.j41(0,"div",5),t.DNE(1,f,4,1,"div",6),t.j41(2,"ul",7),t.Z7z(3,_,2,6,"li",8,t.fX1),t.k0s(),t.DNE(5,g,2,0,"p"),t.k0s()),2&s){const o=t.XpG();t.R7$(),t.vxM(o.enableSearch()?1:-1),t.R7$(2),t.Dyx(o.filteredOptions()),t.R7$(2),t.vxM(o.noOptions()?5:-1)}}function M(s,v){if(1&s&&t.EFF(0),2&s){const o=v.$implicit,c=t.XpG();t.SpI(" ",o[c.displayKey()]||o," ")}}let j=(()=>{class s{constructor(){this.enableSearch=(0,t.hFB)(!0),this.options=(0,t.hFB)([]),this.displayKey=(0,t.hFB)(),this.select=(0,t.CGW)(),this.value=(0,t.vPA)(""),this.selectedItem=null,this.isDropdownActive=!1,this.filteredOptions=(0,t.EWP)(()=>this.options()?.filter(this.searchInItem.bind(this))),this.noOptions=(0,t.EWP)(()=>0===this.filteredOptions().length),this.itemTemplate=(0,t.sbv)(t.C4Q)}searchInItem(o){const c=this.value().toLowerCase();return"string"==typeof o?o.toLowerCase().startsWith(c):!("object"!=typeof o||!o[this.displayKey()])&&o[this.displayKey()].toLowerCase().startsWith(c)}selectItem(o){this.selectedItem=o,this.value.set(""),this.toggleDropdown(),this.select.emit(o)}toggleDropdown(){this.isDropdownActive=!this.isDropdownActive}static{this.\u0275fac=function(c){return new(c||s)}}static{this.\u0275cmp=t.VBU({type:s,selectors:[["app-theme-select-menu"]],contentQueries:function(c,r,h){1&c&&t.C6U(h,r.itemTemplate,t.C4Q,5),2&c&&t.NyB()},inputs:{enableSearch:[1,"enableSearch"],options:[1,"options"],displayKey:[1,"displayKey"]},outputs:{select:"select"},decls:10,vars:4,consts:[["defaultItemTemplate",""],[1,"wrapper"],[1,"select-btn",3,"click"],["xmlns","http://www.w3.org/2000/svg","height","24px","viewBox","0 -960 960 960","width","24px","fill","#5f6368"],["d","M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"],[1,"content"],[1,"search"],[1,"options"],[3,"selected"],["d","M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"],["type","text","placeholder","Search",3,"ngModelChange","ngModel"],[3,"click"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(c,r){if(1&c){const h=t.RV6();t.j41(0,"app-search-container")(1,"div",1)(2,"div",2),t.bIt("click",function(){return t.eBV(h),t.Njj(r.toggleDropdown())}),t.j41(3,"span"),t.EFF(4),t.k0s(),t.qSk(),t.j41(5,"svg",3),t.nrm(6,"path",4),t.k0s()(),t.DNE(7,b,6,2,"div",5),t.k0s(),t.DNE(8,M,1,1,"ng-template",null,0,t.C5r),t.k0s()}2&c&&(t.R7$(),t.AVh("active",r.isDropdownActive),t.R7$(3),t.JRh(r.selectedItem?r.selectedItem[r.displayKey()]||r.selectedItem:"Select an item"),t.R7$(3),t.vxM(r.isDropdownActive?7:-1))},dependencies:[l.YN,l.me,l.BC,l.vS,d.NgTemplateOutlet,m.F],encapsulation:2})}}return s})()},2752:(T,u,e)=>{e.d(u,{F:()=>l});var d=e(4438);const t=["*"];let l=(()=>{class m{static{this.\u0275fac=function(_){return new(_||m)}}static{this.\u0275cmp=d.VBU({type:m,selectors:[["app-search-container"]],ngContentSelectors:t,decls:1,vars:0,template:function(_,g){1&_&&(d.NAR(),d.SdG(0))},styles:["*{margin:0;padding:0;box-sizing:border-box}.wrapper{width:370px;position:relative;color:#000}.select-btn{height:65px;font-size:1.25rem;background-color:#fff;border-radius:7px;padding:0 20px;display:flex;align-items:center;justify-content:space-between;cursor:pointer}.select-btn svg{width:31px;height:31px;transition:transform .3s linear}.wrapper.active .select-btn svg{transform:rotate(-180deg)}.content{padding:20px;margin-top:15px;border-radius:7px;background-color:#fff}.content .search{position:relative}.search svg{position:absolute;left:15px;line-height:53px;color:#999;top:50%;transform:translateY(-50%)}.search input{height:53px;width:100%;font-size:1.125rem;padding:0 15px 0 43px;outline:none;border:1px solid #b3b3b3;border-radius:5px}.content .options{margin-top:10px;max-height:250px;overflow-y:auto;padding-right:7px}.options::-webkit-scrollbar{width:7px}.options::-webkit-scrollbar-track{background-color:#f1f1f1;border-radius:25px}.options::-webkit-scrollbar-thumb{background-color:#ccc;border-radius:25px}.options li{height:50px;border-radius:5px;padding:0 13px;font-size:1.25rem;display:flex;align-items:center;cursor:pointer}.options li:hover,.options li.selected{background-color:#f2f2f2}\n"],encapsulation:3})}}return m})()},5666:(T,u,e)=>{e.d(u,{Z:()=>l});var d=e(1417),t=e(4438);let l=(()=>{class m extends d.u{constructor(){super(...arguments),this.basePath="voting",this.endpoint=""}static{this.\u0275fac=(()=>{let f;return function(g){return(f||(f=t.xGo(m)))(g||m)}})()}static{this.\u0275prov=t.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}}return m})()},5849:(T,u,e)=>{e.r(u),e.d(u,{default:()=>I});var d=e(5666),t=e(4438),l=e(9417),m=e(306),y=e(4773),f=e(8475);function _(n,C){if(1&n){const i=t.RV6();t.j41(0,"div",4),t.nrm(1,"input",9),t.j41(2,"app-theme-icon",10),t.bIt("click",function(){const p=t.eBV(i).$index,x=t.XpG();return t.Njj(x.remove(p))}),t.k0s()()}if(2&n){const i=C.$index;t.Y8G("formGroupName",i),t.R7$(),t.Mz_("placeholder","choice ",i+1,""),t.R7$(),t.Y8G("cursor",!0)}}let g=(()=>{class n{constructor(i){this.fb=i,this.votingService=(0,t.WQX)(d.Z),this.formInit()}formInit(){this.form=this.fb.group({createdBy:[""],title:["",l.k0.required],choices:this.fb.array([this.createChoice(),this.createChoice()])},{nonNullable:!0})}createChoice(){return this.fb.group({choice:["",l.k0.required]})}addChoice(){this.choices.push(this.createChoice())}get choices(){return this.form.get("choices")}remove(i){this.choices.removeAt(i)}create(){this.votingService.create(this.form.value).then(()=>{this.form.reset()})}static{this.\u0275fac=function(a){return new(a||n)(t.rXU(l.ok))}}static{this.\u0275cmp=t.VBU({type:n,selectors:[["app-create-poll"]],decls:14,vars:5,consts:[[3,"shadow"],[3,"formGroup"],["placeholder","title","formControlName","title"],["formArrayName","choices"],[1,"choices",3,"formGroupName"],[1,"choices"],["name","add_circle","color","success",3,"click","cursor"],["app-theme-button","","color","success",3,"click","disabled"],["name","arrow_forward","color","success",3,"cursor"],["formControlName","choice",3,"placeholder"],["name","delete","color","red",3,"click","cursor"]],template:function(a,p){1&a&&(t.j41(0,"app-theme-semantic-card",0)(1,"h2"),t.EFF(2,"Create New Poll"),t.k0s(),t.j41(3,"form",1),t.nrm(4,"input",2),t.j41(5,"div",3),t.Z7z(6,_,3,4,"div",4,t.Vm6),t.j41(8,"div",5),t.nrm(9,"div"),t.j41(10,"app-theme-icon",6),t.bIt("click",function(){return p.addChoice()}),t.k0s()()(),t.j41(11,"button",7),t.bIt("click",function(){return p.create()}),t.EFF(12,"create "),t.nrm(13,"app-theme-icon",8),t.k0s()()()),2&a&&(t.Y8G("shadow","depth"),t.R7$(3),t.Y8G("formGroup",p.form),t.R7$(3),t.Dyx(p.choices.controls),t.R7$(4),t.Y8G("cursor",!0),t.R7$(),t.Y8G("disabled",p.form.invalid),t.R7$(2),t.Y8G("cursor",!0))},dependencies:[l.X1,l.qT,l.me,l.BC,l.cb,l.j4,l.JD,l.$R,l.v8,f.FY,m.F,y.e],styles:["[_nghost-%COMP%]{display:grid;max-width:600px;margin:1rem auto}.choices[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr auto;gap:1rem}"]})}}return n})();var b=e(467),M=e(3590),j=e(410),s=e(9079),v=e(8141),o=e(4554),c=e(1173),r=e(5307);const h=(n,C)=>C.key;function P(n,C){1&n&&t.nrm(0,"app-theme-loader",0)}function k(n,C){if(1&n){const i=t.RV6();t.j41(0,"app-list-item",2),t.bIt("click",function(){const p=t.eBV(i).$implicit,x=t.XpG(2);return t.Njj(x.view(p))}),t.j41(1,"h3"),t.EFF(2),t.k0s()()}if(2&n){const i=C.$implicit;t.R7$(2),t.SpI(" ",i.title,"")}}function F(n,C){if(1&n&&(t.j41(0,"app-list",1),t.Z7z(1,k,3,1,"app-list-item",null,h),t.k0s()),2&n){const i=t.XpG();t.R7$(),t.Dyx(i.polls.value())}}function E(n,C){if(1&n){const i=t.RV6();t.j41(0,"div")(1,"app-theme-alert",3),t.EFF(2),t.k0s(),t.j41(3,"button",4),t.bIt("click",function(){t.eBV(i);const p=t.XpG();return t.Njj(p.polls.reload())}),t.EFF(4," realod "),t.k0s()()}if(2&n){const i=t.XpG();t.R7$(),t.Y8G("dismissible",!1),t.R7$(),t.SpI(" ",i.polls.error()," ")}}let R=(()=>{class n{constructor(){this.votingService=(0,t.WQX)(d.Z),this.modelService=(0,t.WQX)(r.Bg),this.polls=(0,s.ZX)({loader:()=>this.votingService.get$().pipe((0,v.M)(console.log))})}view(i){var a=this;return(0,b.A)(function*(){const{PollViewComponent:p}=yield Promise.all([e.e(2076),e.e(1223)]).then(e.bind(e,1223));a.modelService.openWithComponent(p,{title:i.title,data:{id:i.key}}).subscribe(x=>{})})()}static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=t.VBU({type:n,selectors:[["app-poll-list"]],decls:5,vars:1,consts:[["spinSize","small"],["layout","autofit"],[3,"click"],["color","danger",3,"dismissible"],["app-theme-button","","color","warning","size","small",3,"click"]],template:function(a,p){1&a&&(t.j41(0,"h2"),t.EFF(1,"Poll List"),t.k0s(),t.DNE(2,P,1,0,"app-theme-loader",0)(3,F,3,0,"app-list",1)(4,E,5,2,"div")),2&a&&(t.R7$(2),t.vxM(p.polls.isLoading()?2:p.polls.hasValue()?3:4))},dependencies:[M.s,j.P,o.C,c.F],styles:["h3[_ngcontent-%COMP%]:hover{color:var(--accent-color);cursor:pointer}"]})}}return n})(),I=(()=>{class n{static{this.\u0275fac=function(a){return new(a||n)}}static{this.\u0275cmp=t.VBU({type:n,selectors:[["app-voting"]],decls:2,vars:0,template:function(a,p){1&a&&t.nrm(0,"app-create-poll")(1,"app-poll-list")},dependencies:[g,R],styles:["[_nghost-%COMP%]{display:grid;gap:1rem}"]})}}return n})()}}]);