"use strict";(self.webpackChunkportfolio_all_in_one=self.webpackChunkportfolio_all_in_one||[]).push([[6404],{6404:(de,g,p)=>{p.r(g),p.d(g,{CodeTaskModule:()=>ue});var c=p(177),f=p(884),b=function(n){return n.success="success",n.info="info",n.warning="warning",n.danger="danger",n}(b||{}),e=p(4438),v=p(1413);let _=(()=>{class n{constructor(){this.alert$=new v.B}setAlert(t){this.alert$.next(t)}getAlert(){return this.alert$.asObservable()}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=e.jDH({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();const F=n=>({active:n});function O(n,r){if(1&n){const t=e.RV6();e.j41(0,"div",6),e.bIt("click",function(){const s=e.eBV(t).index,o=e.XpG();return e.Njj(o.goToSlide(s))}),e.EFF(1," \u25cf "),e.k0s()}if(2&n){const t=r.index,i=e.XpG();e.Y8G("ngClass",e.eq3(1,F,t===i.currentIndex))}}let y=(()=>{class n{constructor(){this.slides=[],this.currentIndex=0}ngOnInit(){this.resetTimer()}ngOnDestroy(){window.clearTimeout(this.timeoutId)}resetTimer(){this.timeoutId&&window.clearTimeout(this.timeoutId),this.timeoutId=window.setTimeout(()=>this.goToNext(),3e3)}goToPrevious(){const i=0===this.currentIndex?this.slides.length-1:this.currentIndex-1;this.resetTimer(),this.currentIndex=i}goToNext(){const i=this.currentIndex===this.slides.length-1?0:this.currentIndex+1;this.resetTimer(),this.currentIndex=i}goToSlide(t){this.resetTimer(),this.currentIndex=t}getCurrentSlideUrl(){return`url('${this.slides[this.currentIndex].url}')`}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=e.VBU({type:n,selectors:[["app-image-slider"]],inputs:{slides:"slides"},standalone:!1,decls:9,vars:2,consts:[[1,"slider"],[1,"arrow","leftArrow",3,"click"],[1,"arrow","rightArrow",3,"click"],[1,"slide",3,"src"],[1,"dotsContainer"],["class","dot",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"dot",3,"click","ngClass"]],template:function(i,s){1&i&&(e.j41(0,"div",0)(1,"div")(2,"div",1),e.bIt("click",function(){return s.goToPrevious()}),e.EFF(3,"\u2770"),e.k0s(),e.j41(4,"div",2),e.bIt("click",function(){return s.goToNext()}),e.EFF(5,"\u2771"),e.k0s()(),e.nrm(6,"img",3),e.j41(7,"div",4),e.DNE(8,O,2,3,"div",5),e.k0s()()),2&i&&(e.R7$(6),e.Y8G("src",s.slides[s.currentIndex].url,e.B4B),e.R7$(2),e.Y8G("ngForOf",s.slides))},dependencies:[c.YU,c.Sq],styles:[".slide[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:10px;background-size:cover;background-position:center}.arrow[_ngcontent-%COMP%]{position:absolute;top:50%;transform:translateY(-50%);font-size:45px;color:#fff;z-index:1;cursor:pointer}.rightArrow[_ngcontent-%COMP%]{right:32px}.leftArrow[_ngcontent-%COMP%]{left:32px}.slider[_ngcontent-%COMP%]{position:relative;height:100%}.dotsContainer[_ngcontent-%COMP%]{display:flex;justify-content:center}.dot[_ngcontent-%COMP%]{margin:0 3px;cursor:pointer;font-size:20px}.dot.active[_ngcontent-%COMP%]{color:red}"]})}}return n})();const T=n=>({"page-item":!0,active:n});function w(n,r){if(1&n){const t=e.RV6();e.j41(0,"li",2),e.bIt("click",function(){const s=e.eBV(t).$implicit,o=e.XpG();return e.Njj(o.changePage.emit(s))}),e.j41(1,"span",3),e.EFF(2),e.k0s()()}if(2&n){const t=r.$implicit,i=e.XpG();e.Y8G("ngClass",e.eq3(2,T,i.currentPage===t)),e.R7$(2),e.JRh(t)}}let M=(()=>{class n{constructor(){this.currentPage=1,this.total=0,this.limit=20,this.changePage=new e.bkB,this.pages=[]}ngOnInit(){const t=Math.ceil(this.total/this.limit);this.pages=this.range(1,t)}range(t,i){return[...Array(i).keys()].map(s=>s+t)}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=e.VBU({type:n,selectors:[["app-pagination"]],inputs:{currentPage:"currentPage",total:"total",limit:"limit"},outputs:{changePage:"changePage"},standalone:!1,decls:2,vars:1,consts:[[1,"pagination"],[3,"ngClass","click",4,"ngFor","ngForOf"],[3,"click","ngClass"],[1,"page-link"]],template:function(i,s){1&i&&(e.j41(0,"ul",0),e.DNE(1,w,3,4,"li",1),e.k0s()),2&i&&(e.R7$(),e.Y8G("ngForOf",s.pages))},dependencies:[c.YU,c.Sq],styles:[".pagination[_ngcontent-%COMP%]{display:inline-block;padding-left:0;margin-top:1rem;margin-bottom:1rem;border-radius:.25rem}.page-item[_ngcontent-%COMP%]{display:inline}.page-item[_ngcontent-%COMP%]:first-child   .page-link[_ngcontent-%COMP%]{margin-left:0;border-bottom-left-radius:.25rem;border-top-left-radius:.25rem}.page-item[_ngcontent-%COMP%]:last-child   .page-link[_ngcontent-%COMP%]{border-bottom-right-radius:.25rem;border-top-right-radius:.25rem}.page-item.active[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%], .page-item.active[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]:focus, .page-item.active[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]:hover{z-index:2;color:#fff;cursor:default;background-color:#5cb85c;border-color:#5cb85c}.page-item.disabled[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%], .page-item.disabled[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]:focus, .page-item.disabled[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]:hover{color:#818a91;pointer-events:none;cursor:not-allowed;background-color:#fff;border-color:#ddd}.page-link[_ngcontent-%COMP%]{position:relative;float:left;padding:.5rem .75rem;margin-left:-1px;color:#5cb85c;text-decoration:none;background-color:#fff;border:1px solid #ddd;cursor:pointer}.page-link[_ngcontent-%COMP%]:focus, .page-link[_ngcontent-%COMP%]:hover{color:#3d8b3d;background-color:#eceeef;border-color:#ddd}"]})}}return n})();var I=p(3726),j=p(5964);let P=(()=>{class n{constructor(t,i){this.element=t,this.document=i,this.clickOutside=new e.bkB}ngAfterViewInit(){this.documentClickSubscription=(0,I.R)(this.document,"click").pipe((0,j.p)(t=>!this.isInside(t.target))).subscribe(()=>{this.clickOutside.emit()})}ngOnDestroy(){this.documentClickSubscription?.unsubscribe()}isInside(t){return t===this.element.nativeElement||this.element.nativeElement.contains(t)}static{this.\u0275fac=function(i){return new(i||n)(e.rXU(e.aKT),e.rXU(c.qQ))}}static{this.\u0275dir=e.FsC({type:n,selectors:[["","clickOutside",""]],outputs:{clickOutside:"clickOutside"},standalone:!1})}}return n})();function S(n,r){1&n&&(e.j41(0,"div",3)(1,"div",4),e.EFF(2,"News"),e.k0s(),e.j41(3,"div",4),e.EFF(4,"Contacts"),e.k0s(),e.j41(5,"div",4),e.EFF(6,"About"),e.k0s()())}let D=(()=>{class n{constructor(){this.isMenuOpened=!1}ngOnInit(){}toggleMenu(){this.isMenuOpened=!this.isMenuOpened}clickedOutside(){this.isMenuOpened=!1}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=e.VBU({type:n,selectors:[["app-dropdown-menu"]],standalone:!1,decls:4,vars:1,consts:[["clickOutside","",1,"menu-container",3,"clickOutside"],[1,"menu-toggler",3,"click"],["class","menu",4,"ngIf"],[1,"menu"],[1,"menu-item"]],template:function(i,s){1&i&&(e.j41(0,"div",0),e.bIt("clickOutside",function(){return s.clickedOutside()}),e.j41(1,"div",1),e.bIt("click",function(){return s.toggleMenu()}),e.EFF(2,"Toggle menu"),e.k0s(),e.DNE(3,S,7,0,"div",2),e.k0s()),2&i&&(e.R7$(3),e.Y8G("ngIf",s.isMenuOpened))},dependencies:[c.bT,P],styles:[".menu-container[_ngcontent-%COMP%]{width:200px;background:#04aa6d;font-size:20px}.menu-toggler[_ngcontent-%COMP%]{padding:10px}.menu[_ngcontent-%COMP%]{background:#333;color:#fff;padding:10px}.menu-item[_ngcontent-%COMP%]{cursor:pointer;padding:5px 0}.menu-item[_ngcontent-%COMP%]:hover{text-decoration:underline}"]})}}return n})();var a=p(9417);function x(n,r){if(1&n&&(e.j41(0,"div",5),e.EFF(1),e.k0s()),2&n){const t=r.$implicit;e.R7$(),e.SpI(" ",t.title," ")}}let N=(()=>{class n{constructor(t){this.fb=t,this.searchValue="",this.searchForm=this.fb.nonNullable.group({searchValue:""}),this.articles=[]}ngOnInit(){}onSearchSubmit(){this.searchValue=this.searchForm.value.searchValue??"",this.fetchData()}fetchData(){console.log(this.searchValue)}static{this.\u0275fac=function(i){return new(i||n)(e.rXU(a.ok))}}static{this.\u0275cmp=e.VBU({type:n,selectors:[["app-search-bar"]],standalone:!1,decls:5,vars:2,consts:[[1,"container"],[1,"searchBar",3,"ngSubmit","formGroup"],["type","text","placeholder","Search...","formControlName","searchValue",1,"searchBarInput"],[1,"articlesTable"],["class","article",4,"ngFor","ngForOf"],[1,"article"]],template:function(i,s){1&i&&(e.j41(0,"div",0)(1,"form",1),e.bIt("ngSubmit",function(){return s.onSearchSubmit()}),e.nrm(2,"input",2),e.k0s(),e.j41(3,"div",3),e.DNE(4,x,2,1,"div",4),e.k0s()()),2&i&&(e.R7$(),e.Y8G("formGroup",s.searchForm),e.R7$(3),e.Y8G("ngForOf",s.articles))},dependencies:[c.Sq,a.qT,a.me,a.BC,a.cb,a.j4,a.JD],styles:[".container[_ngcontent-%COMP%]{margin:50px auto 0;width:500px}.searchBar[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.searchBarClear[_ngcontent-%COMP%]{margin-left:10px;cursor:pointer}.searchBarInput[_ngcontent-%COMP%]{heigth:30px;width:300px;font-size:16px}.articlesTable[_ngcontent-%COMP%]{margin-top:80px;text-align:center}.article[_ngcontent-%COMP%]{margin:10px 0}"]})}}return n})();const U=n=>["alert",n];function E(n,r){if(1&n&&(e.j41(0,"div",1),e.EFF(1),e.k0s()),2&n){const t=e.XpG();e.Y8G("ngClass",e.eq3(2,U,t.alert.type)),e.R7$(),e.JRh(t.alert.text)}}let B=(()=>{class n{constructor(t){this.alertService=t}ngOnInit(){this.alertService.getAlert().subscribe(t=>{this.alert=t,this.resetTimer()})}resetTimer(){this.timeoutId&&window.clearTimeout(this.timeoutId),this.timeoutId=window.setTimeout(()=>{this.alert=void 0},3e3)}static{this.\u0275fac=function(i){return new(i||n)(e.rXU(_))}}static{this.\u0275cmp=e.VBU({type:n,selectors:[["app-alert"]],standalone:!1,decls:1,vars:1,consts:[[3,"ngClass",4,"ngIf"],[3,"ngClass"]],template:function(i,s){1&i&&e.DNE(0,E,2,4,"div",0),2&i&&e.Y8G("ngIf",s.alert)},dependencies:[c.YU,c.bT],styles:[".alert[_ngcontent-%COMP%]{padding:16px;border-radius:6px;font-size:16px;font-weight:400}.success[_ngcontent-%COMP%]{color:#0f5132;background:#d1e7dd}.info[_ngcontent-%COMP%]{color:#055160;background:#cff4fc}.warning[_ngcontent-%COMP%]{color:#664d03;background:#fff3cd}.danger[_ngcontent-%COMP%]{color:#842029;background:#f8d7da}"]})}}return n})();var $=p(1626);let V=(()=>{class n{constructor(t){this.http=t}getUsers(t,i){return this.http.get(`https://jsonplaceholder.typicode.com/users?_sort=${t.column}&_order=${t.order}&name_like=${i}`)}static{this.\u0275fac=function(i){return new(i||n)(e.KVO($.Qq))}}static{this.\u0275prov=e.jDH({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function R(n,r){1&n&&(e.j41(0,"span"),e.EFF(1,"\u25bc"),e.k0s())}function G(n,r){1&n&&(e.j41(0,"span"),e.EFF(1,"\u25b2"),e.k0s())}function Y(n,r){if(1&n){const t=e.RV6();e.j41(0,"th",6),e.bIt("click",function(){const s=e.eBV(t).$implicit,o=e.XpG();return e.Njj(o.sortTable(s))}),e.EFF(1),e.DNE(2,R,2,0,"span",7)(3,G,2,0,"span",7),e.k0s()}if(2&n){const t=r.$implicit,i=e.XpG();e.R7$(),e.SpI(" ",i.capitalize(t)," "),e.R7$(),e.Y8G("ngIf",i.isDescSorting(t)),e.R7$(),e.Y8G("ngIf",i.isAscSorting(t))}}function X(n,r){if(1&n&&(e.j41(0,"td",9),e.EFF(1),e.k0s()),2&n){const t=r.$implicit,i=e.XpG().$implicit;e.R7$(),e.SpI(" ",i[t]," ")}}function H(n,r){if(1&n&&(e.j41(0,"tr"),e.DNE(1,X,2,1,"td",8),e.k0s()),2&n){const t=e.XpG();e.R7$(),e.Y8G("ngForOf",t.columns)}}let A=(()=>{class n{constructor(t,i){this.usersService=t,this.fb=i,this.users=[],this.columns=["id","name","email"],this.sorting={column:"id",order:"asc"},this.searchValue="",this.searchForm=this.fb.nonNullable.group({searchValue:""})}ngOnInit(){this.fetchData()}fetchData(){this.usersService.getUsers(this.sorting,this.searchValue).subscribe(t=>{this.users=t})}capitalize(t){return t.charAt(0).toUpperCase()+t.substring(1)}isDescSorting(t){return this.sorting.column===t&&"desc"===this.sorting.order}isAscSorting(t){return this.sorting.column===t&&"asc"===this.sorting.order}sortTable(t){const i=this.isDescSorting(t)?"asc":"desc";this.sorting={column:t,order:i},this.fetchData()}onSearchSubmit(){this.searchValue=this.searchForm.value.searchValue??"",this.fetchData()}static{this.\u0275fac=function(i){return new(i||n)(e.rXU(V),e.rXU(a.ok))}}static{this.\u0275cmp=e.VBU({type:n,selectors:[["app-table"]],standalone:!1,decls:9,vars:3,consts:[[1,"search-bar"],[3,"ngSubmit","formGroup"],["type","text","placeholder","Search...","formControlName","searchValue"],[1,"users-table"],["class","users-table-cell",3,"click",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],[1,"users-table-cell",3,"click"],[4,"ngIf"],["class","users-table-cell",4,"ngFor","ngForOf"],[1,"users-table-cell"]],template:function(i,s){1&i&&(e.j41(0,"div",0)(1,"form",1),e.bIt("ngSubmit",function(){return s.onSearchSubmit()}),e.nrm(2,"input",2),e.k0s()(),e.j41(3,"table",3)(4,"thead")(5,"tr"),e.DNE(6,Y,4,3,"th",4),e.k0s()(),e.j41(7,"tbody"),e.DNE(8,H,2,1,"tr",5),e.k0s()()),2&i&&(e.R7$(),e.Y8G("formGroup",s.searchForm),e.R7$(5),e.Y8G("ngForOf",s.columns),e.R7$(2),e.Y8G("ngForOf",s.users))},dependencies:[c.Sq,c.bT,a.qT,a.me,a.BC,a.cb,a.j4,a.JD],styles:[".users-table[_ngcontent-%COMP%]{table-layout:fixed;width:100%;border-collapse:collapse}.users-table-cell[_ngcontent-%COMP%]{border:1px solid #dddddd;text-align:left;padding:8px}.search-bar[_ngcontent-%COMP%]{margin-bottom:20px}"]})}}return n})(),z=(()=>{class n{constructor(t){this.alertService=t,this.slides=[{url:"https://picsum.photos/300/200?random=1",title:"beach"},{url:"https://picsum.photos/300/200?random=2",title:"boat"},{url:"https://picsum.photos/300/200?random=3",title:"forest"},{url:"https://picsum.photos/300/200?random=4",title:"city"},{url:"https://picsum.photos/300/200?random=5",title:"italy"}],this.currentPage=1,this.alertTypes=b}ngOnInit(){}changePage(t){this.currentPage=t,console.log(t)}showAlert(t){this.alertService.setAlert({type:t,text:"THis is our test alert"})}static{this.\u0275fac=function(i){return new(i||n)(e.rXU(_))}}static{this.\u0275cmp=e.VBU({type:n,selectors:[["app-code-task"]],standalone:!1,decls:30,vars:4,consts:[[1,"row","p-2","m-0"],[1,"col-6"],[2,"width","500px","height","200px","margin","0 auto"],[3,"slides"],[3,"changePage","currentPage","limit","total"],[3,"click"],[1,"col-12"]],template:function(i,s){1&i&&(e.j41(0,"div",0)(1,"div",1)(2,"h1"),e.EFF(3,"Image Slider"),e.k0s(),e.j41(4,"div",2),e.nrm(5,"app-image-slider",3),e.k0s()(),e.j41(6,"div",1)(7,"h1"),e.EFF(8," pagination "),e.k0s(),e.j41(9,"app-pagination",4),e.bIt("changePage",function(l){return s.changePage(l)}),e.k0s()(),e.j41(10,"div",1)(11,"h1"),e.EFF(12," dropdown-menu "),e.k0s(),e.nrm(13,"app-dropdown-menu"),e.k0s(),e.j41(14,"div",1)(15,"h1"),e.EFF(16," search-bar "),e.k0s(),e.nrm(17,"app-search-bar"),e.k0s(),e.j41(18,"div",1)(19,"h1"),e.EFF(20," alert "),e.k0s(),e.nrm(21,"app-alert"),e.j41(22,"button",5),e.bIt("click",function(){return s.showAlert(s.alertTypes.danger)}),e.EFF(23,"Show danger"),e.k0s(),e.j41(24,"button",5),e.bIt("click",function(){return s.showAlert(s.alertTypes.success)}),e.EFF(25,"Show success"),e.k0s()(),e.j41(26,"div",6)(27,"h1"),e.EFF(28,"Custom Table"),e.k0s(),e.nrm(29,"app-table"),e.k0s()()),2&i&&(e.R7$(5),e.Y8G("slides",s.slides),e.R7$(4),e.Y8G("currentPage",s.currentPage)("limit",20)("total",500))},dependencies:[y,M,D,N,B,A],styles:["input.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}.col-6[_ngcontent-%COMP%], .col-12[_ngcontent-%COMP%]{border:2px dashed tomato;padding:1rem}"]})}}return n})();var L=p(345);let J=(()=>{class n{constructor(){this.files=new e.bkB,this.hovered=new e.bkB}onDragOver(t){t.preventDefault(),t.stopPropagation(),this.hovered.emit(!0)}onDragLeave(t){t.preventDefault(),t.stopPropagation(),this.hovered.emit(!1)}onDrop(t){t.preventDefault(),t.stopPropagation(),this.hovered.emit(!1),this.files.emit(t.dataTransfer.files)}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275dir=e.FsC({type:n,selectors:[["","appDrag",""]],hostBindings:function(i,s){1&i&&e.bIt("dragover",function(l){return s.onDragOver(l)})("dragleave",function(l){return s.onDragLeave(l)})("drop",function(l){return s.onDrop(l)})},outputs:{files:"files",hovered:"hovered"},standalone:!1})}}return n})();function K(n,r){if(1&n){const t=e.RV6();e.j41(0,"li")(1,"span",7),e.bIt("click",function(){const s=e.eBV(t).index,o=e.XpG();return e.Njj(o.onRemoveFile(s))}),e.EFF(2,"x"),e.k0s(),e.nrm(3,"img",8),e.k0s()}if(2&n){const t=r.$implicit;e.R7$(3),e.Y8G("src",t.url,e.B4B)}}let Q=(()=>{class n{constructor(t){this.sanitizer=t,this.fileHandles=[],this.uploadType="multiple",this.isHover=!1}ngOnInit(){}onFileSelected(t){t.target.files&&this.onFilesDropped(t.target.files)}onRemoveFile(t){this.fileHandles.splice(t,1)}onFilesDropped(t){for(let i=0;i<t.length;i++){let s=t[i];const o=this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(s));this.fileHandles.push({file:s,url:o})}}onHovered(t){this.isHover=t}prepareFormData(t){const i=new FormData;i.append("product",new Blob([JSON.stringify(t)],{type:"application/json"}));for(let s=0;s<t.images;s++)i.append("imageFile",t.images[s].file,t.images[s].file.name);return i}static{this.\u0275fac=function(i){return new(i||n)(e.rXU(L.up))}}static{this.\u0275cmp=e.VBU({type:n,selectors:[["app-file-upload"]],inputs:{uploadType:"uploadType"},standalone:!1,decls:11,vars:5,consts:[["selectFile",""],["appDrag","",1,"dropzone",3,"files","hovered"],[1,"dropzone__text"],[1,"dropzone__text__center"],[1,"browse-btn",3,"click"],["multiple","","type","file","value","select",2,"display","none",3,"change"],[4,"ngFor","ngForOf"],[1,"img-remove",3,"click"],["height","100px","width","100px",3,"src"]],template:function(i,s){if(1&i){const o=e.RV6();e.j41(0,"div",1),e.bIt("files",function(u){return e.eBV(o),e.Njj(s.onFilesDropped(u))})("hovered",function(u){return e.eBV(o),e.Njj(s.onHovered(u))}),e.j41(1,"div",2)(2,"div",3),e.EFF(3," Drag and Drop your file or "),e.j41(4,"a",4),e.bIt("click",function(){e.eBV(o);const u=e.sdS(8);return e.Njj(u.click())}),e.EFF(5,"browse"),e.k0s(),e.EFF(6," a file "),e.k0s()()(),e.j41(7,"input",5,0),e.bIt("change",function(u){return e.eBV(o),e.Njj(s.onFileSelected(u))}),e.k0s(),e.j41(9,"ul"),e.DNE(10,K,4,1,"li",6),e.k0s()}2&i&&(e.xc7("background-color",s.isHover?"#999":"#eee")("border-color",s.isHover?"red":"#aaa"),e.R7$(10),e.Y8G("ngForOf",s.fileHandles))},dependencies:[c.Sq,J],styles:[".dropZone[_ngcontent-%COMP%]{display:inline-flex;background:#3498db!important;color:#ecf0f1;border:.3em dashed #ecf0f1;border-radius:.3em;padding:5em;font-size:1.2em}.dropzone[_ngcontent-%COMP%]{height:150px;min-width:100px;display:table;background:#eee;width:300px;border:2px dashed #aaa;border-radius:10px;margin-left:auto;margin-right:auto}.dropzone__text[_ngcontent-%COMP%]{display:table-cell;vertical-align:middle}.dropzone__text__center[_ngcontent-%COMP%]{text-align:center}.browse-btn[_ngcontent-%COMP%]{color:#00f;cursor:pointer}ul[_ngcontent-%COMP%]{list-style:none;display:flex;gap:1rem;flex-wrap:wrap;margin-top:1rem}li[_ngcontent-%COMP%]{border:1px solid #eee;position:relative;padding:1rem}.img-remove[_ngcontent-%COMP%]{position:absolute;cursor:pointer;top:-10px;right:-10px;background-color:red;color:#fff;border-radius:50%;width:20px;height:auto;text-align:center}"]})}}return n})();var C=p(4412);let d=(()=>{class n{constructor(){this.data=new C.t(100),this.data$=this.data.asObservable()}setData(t){this.data.next(t)}getData(){return this.data.asObservable()}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=e.jDH({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var W=p(1635);let m=class h{constructor(r){this.testService=r}ngOnInit(){this.sub=this.testService.getData().subscribe(r=>{console.log("component 1",r),this.data=r})}ngOnDestroy(){}static{this.\u0275fac=function(t){return new(t||h)(e.rXU(d))}}static{this.\u0275cmp=e.VBU({type:h,selectors:[["app-ml-child1"]],standalone:!1,decls:1,vars:1,template:function(t,i){1&t&&e.EFF(0),2&t&&e.SpI("component 1\n",i.data,"\n")},encapsulation:2})}};m=(0,W.Cg)([function q(n){const r=n.prototype.ngOnDestroy;n.prototype.ngOnDestroy=function(){for(const t in this){const i=this[t];i&&"function"==typeof i.unsubscribe&&i.unsubscribe()}r.apply(this,arguments)}}],m);let Z=(()=>{class n{constructor(t){this.testService=t}ngOnInit(){this.sub=this.testService.getData().subscribe(t=>{console.log("component 2",t),this.data=t})}ngOnDestroy(){this.sub.unsubscribe()}static{this.\u0275fac=function(i){return new(i||n)(e.rXU(d))}}static{this.\u0275cmp=e.VBU({type:n,selectors:[["app-ml-child2"]],standalone:!1,decls:1,vars:1,template:function(i,s){1&i&&e.EFF(0),2&i&&e.SpI("component 2\n",s.data,"\n")},encapsulation:2})}}return n})(),ee=(()=>{class n{constructor(t){this.testService=t}ngOnInit(){this.sub=this.testService.getData().subscribe(t=>{console.log("component 3",t),this.data=t})}ngOnDestroy(){this.sub.unsubscribe()}static{this.\u0275fac=function(i){return new(i||n)(e.rXU(d))}}static{this.\u0275cmp=e.VBU({type:n,selectors:[["app-ml-child3"]],standalone:!1,decls:1,vars:1,template:function(i,s){1&i&&e.EFF(0),2&i&&e.SpI("component 3\n",s.data,"\n")},encapsulation:2})}}return n})();function te(n,r){1&n&&e.nrm(0,"app-ml-child1")}function ne(n,r){1&n&&e.nrm(0,"app-ml-child2")}function ie(n,r){1&n&&e.nrm(0,"app-ml-child3")}let se=(()=>{class n{constructor(t){this.testService=t,this.shows=[!0,!0,!0]}ngOnInit(){}setNewData(){let t=Math.random();this.testService.setData(t)}static{this.\u0275fac=function(i){return new(i||n)(e.rXU(d))}}static{this.\u0275cmp=e.VBU({type:n,selectors:[["app-memory-leak"]],standalone:!1,decls:12,vars:6,consts:[[3,"click"],[1,"parent"],[4,"ngIf"]],template:function(i,s){1&i&&(e.j41(0,"button",0),e.bIt("click",function(){return s.setNewData()}),e.EFF(1,"setData"),e.k0s(),e.j41(2,"button",0),e.bIt("click",function(){return s.shows[0]=!s.shows[0]}),e.EFF(3),e.k0s(),e.j41(4,"button",0),e.bIt("click",function(){return s.shows[1]=!s.shows[1]}),e.EFF(5),e.k0s(),e.j41(6,"button",0),e.bIt("click",function(){return s.shows[2]=!s.shows[2]}),e.EFF(7),e.k0s(),e.j41(8,"section",1),e.DNE(9,te,1,0,"app-ml-child1",2)(10,ne,1,0,"app-ml-child2",2)(11,ie,1,0,"app-ml-child3",2),e.k0s()),2&i&&(e.R7$(3),e.SpI("",s.shows[0]?"hide":"show"," component 1 "),e.R7$(2),e.SpI("",s.shows[1]?"hide":"show"," component 2 "),e.R7$(2),e.SpI("",s.shows[2]?"hide":"show"," component 3 "),e.R7$(2),e.Y8G("ngIf",s.shows[0]),e.R7$(),e.Y8G("ngIf",s.shows[1]),e.R7$(),e.Y8G("ngIf",s.shows[2]))},dependencies:[c.bT,m,Z,ee],styles:[".parent[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;border:1px solid tomato;padding:1rem;margin:1rem}.parent[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{border:1px solid lime}"]})}}return n})();const oe={firstName:"",lastName:""};let re=(()=>{class n{constructor(){this.subject=new C.t(oe),this.user$=this.subject.asObservable()}loadUser(t){this.subject.next(t)}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=e.jDH({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})(),k=(()=>{class n{constructor(t){this.userService=t,this.user={firstName:"Alice",lastName:"Smith"}}ngOnInit(){}subscribe(t){console.log(t)}changeUserName(){this.user.firstName="Bob"}changeUserNamePush(){this.user={firstName:"Bob",lastName:"Smith"}}changeUserNameWithService(){this.userService.loadUser({firstName:"Bob",lastName:"Smith"})}static{this.\u0275fac=function(i){return new(i||n)(e.rXU(re))}}static{this.\u0275cmp=e.VBU({type:n,selectors:[["app-cd-example"]],standalone:!1,decls:7,vars:1,consts:[[3,"subscribe","user$"],[3,"click"]],template:function(i,s){1&i&&(e.j41(0,"app-newsletter",0),e.bIt("subscribe",function(l){return s.subscribe(l)}),e.k0s(),e.j41(1,"button",1),e.bIt("click",function(){return s.changeUserName()}),e.EFF(2,"Change User Name"),e.k0s(),e.j41(3,"button",1),e.bIt("click",function(){return s.changeUserNamePush()}),e.EFF(4,"Change User Name with Push"),e.k0s(),e.j41(5,"button",1),e.bIt("click",function(){return s.changeUserNameWithService()}),e.EFF(6,"Change User Name with service"),e.k0s()),2&i&&e.Y8G("user$",s.userService.user$)},encapsulation:2})}}return n})();const ae=[{path:"",component:z},{path:"file-upload",component:Q},{path:"memoryLeak",component:se},{path:"cd-example",component:k}];let ce=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=e.$C({type:n})}static{this.\u0275inj=e.G2t({imports:[f.iI.forChild(ae),f.iI]})}}return n})(),le=(()=>{class n{constructor(){this.subscribe=new e.bkB}ngOnInit(){}subscribeToNewsletter(t){this.subscribe.emit(t)}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=e.VBU({type:n,selectors:[["app-newsletter"]],inputs:{user:"user",user$:"user$"},outputs:{subscribe:"subscribe"},standalone:!1,decls:10,vars:4,consts:[["email",""],[1,"newsletter"],["type","email","name","email","placeholder","Enter your Email"],["type","button","value","Subscribe",1,"button","button-primary",3,"click"]],template:function(i,s){if(1&i){const o=e.RV6();e.j41(0,"fieldset",1)(1,"legend"),e.EFF(2,"Newsletter"),e.k0s(),e.j41(3,"h5"),e.EFF(4),e.nI1(5,"async"),e.k0s(),e.j41(6,"form"),e.nrm(7,"input",2,0),e.j41(9,"input",3),e.bIt("click",function(){e.eBV(o);const u=e.sdS(8);return e.Njj(s.subscribeToNewsletter(u.value))}),e.k0s()()()}2&i&&(e.R7$(4),e.Lme("Hello ",null==s.user?null:s.user.firstName,", ",e.bMT(5,2,s.user$).firstName,", enter your email below to subscribe:"))},dependencies:[a.qT,a.cb,a.cV,c.Jj],encapsulation:2,changeDetection:0})}}return n})(),pe=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=e.$C({type:n})}static{this.\u0275inj=e.G2t({imports:[c.MD,a.YN,a.X1]})}}return n})(),ue=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=e.$C({type:n})}static{this.\u0275inj=e.G2t({imports:[c.MD,a.YN,a.X1,ce,pe]})}}return n})();e.wjB(k,[le],[])}}]);