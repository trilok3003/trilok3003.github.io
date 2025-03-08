"use strict";(self.webpackChunkportfolio_all_in_one=self.webpackChunkportfolio_all_in_one||[]).push([[7507],{7507:(x,d,r)=>{r.r(d),r.d(d,{default:()=>X});var p=r(3810),u=r(177),o=r(9417),t=r(4438);function y(i,a){if(1&i&&(t.j41(0,"option"),t.EFF(1),t.k0s()),2&i){const e=a.$implicit;t.R7$(),t.JRh(e.key)}}function C(i,a){if(1&i&&(t.j41(0,"option"),t.EFF(1),t.k0s()),2&i){const e=a.$implicit;t.R7$(),t.JRh(e)}}let f=(()=>{class i{constructor(){this.countries={Asia:["India","Sri Lanka","Pakistan","Afganistan"],Europe:["Hungary","Germany","France"],Americas:["North America","Mexico"]},this.continent="Americas"}ngOnInit(){}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275cmp=t.VBU({type:i,selectors:[["app-cascaded-dropdown"]],decls:7,vars:3,consts:[[3,"ngModelChange","ngModel"]],template:function(n,s){1&n&&(t.j41(0,"select",0),t.mxI("ngModelChange",function(m){return t.DH7(s.continent,m)||(s.continent=m),m}),t.Z7z(1,y,2,1,"option",null,t.Vm6),t.nI1(3,"keyvalue"),t.k0s(),t.j41(4,"select"),t.Z7z(5,C,2,1,"option",null,t.fX1),t.k0s()),2&n&&(t.R50("ngModel",s.continent),t.R7$(),t.Dyx(t.bMT(3,1,s.countries)),t.R7$(4),t.Dyx(s.countries[s.continent]))},dependencies:[o.YN,o.xH,o.y7,o.wz,o.BC,o.vS,u.KeyValuePipe],encapsulation:2})}}return i})();var l=r(6354),F=r(1626);let v=(()=>{class i{constructor(e){this.http=e,this.base_url="https://demo.codingbirdsonline.com/country-state-city-dropdown-api/index.php?endpoint="}getCountries(){return this.http.get(this.base_url+"getcountry").pipe((0,l.T)(e=>e.data))}getStates(e){return this.http.get(this.base_url+"getstate&country_id="+e).pipe((0,l.T)(n=>n.data))}getCities(e){return this.http.get(this.base_url+"getcity&state_id="+e).pipe((0,l.T)(n=>n.data))}static{this.\u0275fac=function(n){return new(n||i)(t.KVO(F.Qq))}}static{this.\u0275prov=t.jDH({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();function S(i,a){if(1&i&&(t.j41(0,"option",2),t.EFF(1),t.k0s()),2&i){const e=a.$implicit;t.Y8G("value",e.id),t.R7$(),t.SpI(" ",e.name," ")}}function b(i,a){1&i&&(t.j41(0,"p"),t.EFF(1,"Please select a country."),t.k0s())}function k(i,a){if(1&i&&(t.j41(0,"option",2),t.EFF(1),t.k0s()),2&i){const e=a.$implicit;t.Y8G("value",e.id),t.R7$(),t.SpI(" ",e.name," ")}}function g(i,a){1&i&&(t.j41(0,"p"),t.EFF(1,"Please select a state."),t.k0s())}function j(i,a){if(1&i&&(t.j41(0,"option",2),t.EFF(1),t.k0s()),2&i){const e=a.$implicit;t.Y8G("value",e.id),t.R7$(),t.SpI(" ",e.name," ")}}function _(i,a){1&i&&(t.j41(0,"p"),t.EFF(1,"Please select a city."),t.k0s())}function R(i,a){if(1&i&&(t.j41(0,"option",2),t.EFF(1),t.k0s()),2&i){const e=a.$implicit;t.Y8G("value",e.id),t.R7$(),t.JRh(e.name)}}function $(i,a){if(1&i&&(t.j41(0,"option",2),t.EFF(1),t.k0s()),2&i){const e=a.$implicit;t.Y8G("value",e.id),t.R7$(),t.JRh(e.name)}}function E(i,a){if(1&i&&(t.j41(0,"option",2),t.EFF(1),t.k0s()),2&i){const e=a.$implicit;t.Y8G("value",e.id),t.R7$(),t.JRh(e.name)}}function T(i,a){if(1&i){const e=t.RV6();t.j41(0,"div")(1,"div",4)(2,"div",5)(3,"form",0)(4,"div",6)(5,"select",7),t.bIt("change",function(s){t.eBV(e);const c=t.XpG();return t.Njj(c.onChangeCountry(s))}),t.j41(6,"option",8),t.EFF(7,"Select country..."),t.k0s(),t.Z7z(8,R,2,2,"option",2,t.Vm6),t.k0s()(),t.j41(10,"div",6)(11,"select",9),t.bIt("change",function(s){t.eBV(e);const c=t.XpG();return t.Njj(c.onChangeState(s))}),t.j41(12,"option",8),t.EFF(13,"Select state..."),t.k0s(),t.Z7z(14,$,2,2,"option",2,t.Vm6),t.k0s()(),t.j41(16,"div",6)(17,"select",10)(18,"option",8),t.EFF(19,"Select city..."),t.k0s(),t.Z7z(20,E,2,2,"option",2,t.Vm6),t.k0s()()()()()()}if(2&i){const e=t.XpG();t.R7$(3),t.Y8G("formGroup",e.form),t.R7$(5),t.Dyx(e.countries),t.R7$(6),t.Dyx(e.states),t.R7$(6),t.Dyx(e.cities)}}let G=(()=>{class i{constructor(e){this.countryService=e,this.countries=[],this.states=[],this.cities=[],this.country=new o.MJ(null,[o.k0.required]),this.state=new o.MJ({value:null,disabled:!0},[o.k0.required]),this.city=new o.MJ({value:null,disabled:!0},[o.k0.required]),this.form=new o.gE({country:this.country,state:this.state,city:this.city})}ngOnInit(){this.countryService.getCountries().subscribe(e=>{this.countries=e}),this.country.valueChanges.subscribe(e=>{this.state.reset(),this.state.disable(),e&&(this.countryService.getStates(e).subscribe(n=>{this.states=n}),this.state.enable())}),this.state.valueChanges.subscribe(e=>{this.city.reset(),this.city.disable(),e&&(this.countryService.getCities(e).subscribe(n=>{this.cities=n}),this.city.enable())})}onChangeCountry(e){let n=e.target.value;n?this.countryService.getStates(n).subscribe(s=>{this.states=s,this.cities=null}):(this.states=null,this.cities=null)}onChangeState(e){let n=e.target.value;n?this.countryService.getCities(n).subscribe(s=>this.cities=s):this.cities=null}static{this.\u0275fac=function(n){return new(n||i)(t.rXU(v))}}static{this.\u0275cmp=t.VBU({type:i,selectors:[["app-country-state-city"]],decls:33,vars:11,consts:[[3,"formGroup"],[3,"formControl"],[3,"value"],[1,"btn",3,"click"],[1,"row"],[1,"col-md-6"],[1,"form-group"],["formControlName","country",1,"form-control",3,"change"],["value",""],["formControlName","state",1,"form-control",3,"change"],["formControlName","city",1,"form-control"]],template:function(n,s){1&n&&(t.j41(0,"form",0)(1,"fieldset")(2,"label"),t.EFF(3,"Country"),t.k0s(),t.j41(4,"select",1),t.Z7z(5,S,2,2,"option",2,t.Vm6),t.k0s(),t.DNE(7,b,2,0,"p"),t.k0s(),t.j41(8,"button",3),t.bIt("click",function(){return s.country.reset()}),t.EFF(9," Clear "),t.k0s(),t.j41(10,"fieldset")(11,"label"),t.EFF(12,"State"),t.k0s(),t.j41(13,"select",1),t.Z7z(14,k,2,2,"option",2,t.Vm6),t.k0s(),t.DNE(16,g,2,0,"p"),t.k0s(),t.j41(17,"button",3),t.bIt("click",function(){return s.state.reset()}),t.EFF(18," Clear "),t.k0s(),t.j41(19,"fieldset")(20,"label"),t.EFF(21,"City"),t.k0s(),t.j41(22,"select",1),t.Z7z(23,j,2,2,"option",2,t.Vm6),t.k0s(),t.DNE(25,_,2,0,"p"),t.k0s(),t.j41(26,"button",3),t.bIt("click",function(){return s.city.reset()}),t.EFF(27," Clear "),t.k0s(),t.j41(28,"pre"),t.EFF(29),t.nI1(30,"json"),t.k0s()(),t.nrm(31,"hr"),t.DNE(32,T,22,1,"div")),2&n&&(t.Y8G("formGroup",s.form),t.R7$(4),t.Y8G("formControl",s.country),t.R7$(),t.Dyx(s.countries),t.R7$(2),t.vxM(s.country.hasError("required")?7:-1),t.R7$(6),t.Y8G("formControl",s.state),t.R7$(),t.Dyx(s.states),t.R7$(2),t.vxM(s.state.hasError("required")?16:-1),t.R7$(6),t.Y8G("formControl",s.city),t.R7$(),t.Dyx(s.cities),t.R7$(2),t.vxM(s.city.hasError("required")?25:-1),t.R7$(4),t.SpI("  ",t.bMT(30,9,s.form.value),"\n  "),t.R7$(3),t.vxM(-1))},dependencies:[o.X1,o.qT,o.xH,o.y7,o.wz,o.BC,o.cb,o.l_,o.j4,o.JD,u.JsonPipe],encapsulation:2})}}return i})();var M=r(475),D=r(7813),h=r(8141);function I(i,a){if(1&i&&(t.j41(0,"tr")(1,"td"),t.EFF(2),t.k0s(),t.j41(3,"td"),t.EFF(4),t.k0s()()),2&i){const e=a.$implicit;t.R7$(2),t.JRh(e.name),t.R7$(2),t.JRh(e.version)}}let V=(()=>{class i{constructor(){this.openSourcesApisService=(0,t.WQX)(M.h),this.searchService=(0,t.WQX)(D.S),this.queryField=new o.MJ,this.total=0}ngOnInit(){this.results$=this.searchService.search(this.queryField,e=>this.openSourcesApisService.getCdnjsLibraries(e),300,3).pipe((0,h.M)(e=>this.total=e.total),(0,l.T)(e=>e.results))}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275cmp=t.VBU({type:i,selectors:[["app-reactive-search"]],decls:19,vars:4,consts:[[1,"container","search-table"],[1,"search-box"],[1,"row"],[1,"col-md-9"],["type","text","id","myInput","placeholder","Pesquisar libs",1,"form-control",3,"formControl"],[1,"search-list"],["id","myTable",1,"table"]],template:function(n,s){1&n&&(t.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t.nrm(4,"input",4),t.k0s()()(),t.j41(5,"div",5)(6,"h4"),t.EFF(7),t.k0s(),t.j41(8,"table",6)(9,"thead")(10,"tr")(11,"th"),t.EFF(12,"Nome"),t.k0s(),t.j41(13,"th"),t.EFF(14,"Vers\xe3o"),t.k0s()()(),t.j41(15,"tbody"),t.Z7z(16,I,5,2,"tr",null,t.Vm6),t.nI1(18,"async"),t.k0s()()()()),2&n&&(t.R7$(4),t.Y8G("formControl",s.queryField),t.R7$(3),t.SpI("",s.total," Registros encontrados."),t.R7$(9),t.Dyx(t.bMT(18,2,s.results$)))},dependencies:[o.X1,o.me,o.BC,o.l_,u.AsyncPipe],encapsulation:2})}}return i})();var J=r(5558),w=r(7673);function Y(i,a){if(1&i&&(t.j41(0,"option",3),t.EFF(1),t.k0s()),2&i){const e=a.$implicit;t.Y8G("value",e.id),t.R7$(),t.JRh(e.name)}}function z(i,a){if(1&i&&(t.j41(0,"option",3),t.EFF(1),t.k0s()),2&i){const e=a.$implicit;t.Y8G("value",e.id),t.R7$(),t.JRh(e.name)}}let N=(()=>{class i{constructor(e){this.fb=e,this.states=[{id:1,name:"Gujarat"},{id:2,name:"Maharastra"},{id:3,name:"Rajasthan"}],this.cities=[{id:1,name:"Ahmedabad",state:1},{id:2,name:"Rajkot",state:1},{id:3,name:"Gandhinagar",state:1},{id:4,name:"Mumbai",state:2},{id:5,name:"Pune",state:2},{id:6,name:"Udaipur",state:3},{id:7,name:"Jaipur",state:3}],this.citiesForm=this.fb.group({state:[""],city:[""]})}ngOnInit(){this.cities$=this.citiesForm.controls.state.valueChanges.pipe((0,J.n)(e=>this.getCities(e)),(0,h.M)(e=>this.citiesForm.controls.city.setValue(null)))}getCities(e){return(0,w.of)(this.cities).pipe((0,l.T)(n=>n.filter(s=>s.state==e)))}static{this.\u0275fac=function(n){return new(n||i)(t.rXU(o.ok))}}static{this.\u0275cmp=t.VBU({type:i,selectors:[["app-state-cities"]],decls:18,vars:3,consts:[[3,"formGroup"],["formControlName","state"],["value","null","disabled","","hidden",""],[3,"value"],["formControlName","city"]],template:function(n,s){1&n&&(t.j41(0,"form",0)(1,"fieldset")(2,"label"),t.EFF(3,"State"),t.k0s(),t.j41(4,"select",1)(5,"option",2),t.EFF(6,"Select State"),t.k0s(),t.Z7z(7,Y,2,2,"option",3,t.Vm6),t.k0s()(),t.j41(9,"fieldset")(10,"label"),t.EFF(11,"City"),t.k0s(),t.j41(12,"select",4)(13,"option",2),t.EFF(14,"Select City"),t.k0s(),t.Z7z(15,z,2,2,"option",3,t.fX1),t.nI1(17,"async"),t.k0s()()()),2&n&&(t.Y8G("formGroup",s.citiesForm),t.R7$(7),t.Dyx(s.states),t.R7$(8),t.Dyx(t.bMT(17,1,s.cities$)))},dependencies:[o.X1,o.qT,o.xH,o.y7,o.wz,o.BC,o.cb,o.j4,o.JD,u.AsyncPipe],encapsulation:2})}}return i})(),X=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275cmp=t.VBU({type:i,selectors:[["app-select-search-examples"]],decls:9,vars:0,consts:[["tabTitle","cascaded-dropdown"],["tabTitle","country-state-city"],["tabTitle","reactive-search"],["tabTitle","state-cities"]],template:function(n,s){1&n&&(t.j41(0,"ng-tabs")(1,"ng-tab",0),t.nrm(2,"app-cascaded-dropdown"),t.k0s(),t.j41(3,"ng-tab",1),t.nrm(4,"app-country-state-city"),t.k0s(),t.j41(5,"ng-tab",2),t.nrm(6,"app-reactive-search"),t.k0s(),t.j41(7,"ng-tab",3),t.nrm(8,"app-state-cities"),t.k0s()())},dependencies:[p.jr,p.OW,p.je,f,G,V,N],encapsulation:2})}}return i})()}}]);