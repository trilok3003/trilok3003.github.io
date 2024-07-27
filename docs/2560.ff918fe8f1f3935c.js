"use strict";(self.webpackChunkportfolio_all_in_one=self.webpackChunkportfolio_all_in_one||[]).push([[2560],{2560:(E,p,s)=>{s.r(p),s.d(p,{TodosModule:()=>k});var r=s(6895),h=s(4793),g=s(4004),x=s(9841),d=(()=>{return(i=d||(d={})).all="all",i.active="active",i.completed="completed",d;var i})(),t=s(4650),_=s(1135);let u=(()=>{class i{constructor(){this.todos$=new _.X([]),this.filter$=new _.X(d.all)}addTodo(e){const o={text:e,isCompleted:!1,id:Math.random().toString(16)},n=[...this.todos$.getValue(),o];this.todos$.next(n)}toggleAll(e){console.log("isCompleted",e);const o=this.todos$.getValue().map(n=>({...n,isCompleted:e}));this.todos$.next(o)}changeFilter(e){this.filter$.next(e)}changeTodo(e,o){const n=this.todos$.getValue().map(l=>l.id===e?{...l,text:o}:l);this.todos$.next(n)}removeTodo(e){const o=this.todos$.getValue().filter(n=>n.id!==e);this.todos$.next(o)}toggleTodo(e){const o=this.todos$.getValue().map(n=>n.id===e?{...n,isCompleted:!n.isCompleted}:n);this.todos$.next(o)}static#t=this.\u0275fac=function(o){return new(o||i)};static#n=this.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();const m=["textInput"];function P(i,f){if(1&i){const e=t.EpF();t.ynx(0),t.TgZ(1,"input",6,7),t.NdJ("keyup",function(n){t.CHM(e);const l=t.oxw();return t.KtG(l.changeText(n))})("keyup.enter",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.changeTodo())}),t.qZA(),t.BQk()}if(2&i){const e=t.oxw();t.xp6(1),t.Q6J("value",e.editingText)}}const M=function(i){return{editing:i}};let O=(()=>{class i{constructor(e){this.todosService=e,this.setEditingIdEvent=new t.vpe,this.editingText=""}ngOnInit(){this.editingText=this.todoProps.text}ngOnChanges(e){console.log("changes",e),e.isEditingProps.currentValue&&setTimeout(()=>{this.textInput.nativeElement.focus()},0)}setTodoInEditMode(){console.log("setTodoInEditMode"),this.setEditingIdEvent.emit(this.todoProps.id)}removeTodo(){console.log("removeTodo"),this.todosService.removeTodo(this.todoProps.id)}toggleTodo(){console.log("toggleTodo"),this.todosService.toggleTodo(this.todoProps.id)}changeText(e){this.editingText=e.target.value,console.log("changeText")}changeTodo(){console.log("change todo",this.editingText),this.todosService.changeTodo(this.todoProps.id,this.editingText),this.setEditingIdEvent.emit(null)}static#t=this.\u0275fac=function(o){return new(o||i)(t.Y36(u))};static#n=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-todo"]],viewQuery:function(o,n){if(1&o&&t.Gf(m,5),2&o){let l;t.iGM(l=t.CRH())&&(n.textInput=l.first)}},inputs:{todoProps:["todo","todoProps"],isEditingProps:["isEditing","isEditingProps"]},outputs:{setEditingIdEvent:"setEditingId"},features:[t.TTD],decls:7,vars:6,consts:[[3,"ngClass"],[1,"view"],["type","checkbox",1,"toggle",3,"checked","change"],[3,"dblclick"],[1,"destroy",3,"click"],[4,"ngIf"],[1,"edit",3,"value","keyup","keyup.enter"],["textInput",""]],template:function(o,n){1&o&&(t.TgZ(0,"li",0)(1,"div",1)(2,"input",2),t.NdJ("change",function(){return n.toggleTodo()}),t.qZA(),t.TgZ(3,"label",3),t.NdJ("dblclick",function(){return n.setTodoInEditMode()}),t._uU(4),t.qZA(),t.TgZ(5,"button",4),t.NdJ("click",function(){return n.removeTodo()}),t.qZA()(),t.YNc(6,P,3,1,"ng-container",5),t.qZA()),2&o&&(t.Q6J("ngClass",t.VKq(4,M,n.isEditingProps)),t.xp6(2),t.Q6J("checked",n.todoProps.isCompleted),t.xp6(2),t.Oqu(n.todoProps.text),t.xp6(2),t.Q6J("ngIf",n.isEditingProps))},dependencies:[r.mk,r.O5]})}return i})();function b(i,f){if(1&i){const e=t.EpF();t.TgZ(0,"app-todo",11),t.NdJ("setEditingId",function(n){t.CHM(e);const l=t.oxw();return t.KtG(l.setEditingId(n))}),t.qZA()}if(2&i){const e=f.$implicit,o=t.oxw();t.Q6J("isEditing",o.editingId===e.id)("todo",e)}}const C=function(i){return{hidden:i}},a=function(i){return{selected:i}},T=[{path:"",component:(()=>{class i{constructor(e){this.todoService=e,this.text="",this.filterEnum=d,this.editingId=null,this.activeCount$=this.todoService.todos$.pipe((0,g.U)(o=>o.filter(n=>!n.isCompleted).length)),this.itemsLeftText$=this.activeCount$.pipe((0,g.U)(o=>`item${1!==o?"s":""} left`)),this.noTodosClass$=this.todoService.todos$.pipe((0,g.U)(o=>0===o.length)),this.filter$=this.todoService.filter$,this.isAllTodosSelected$=this.todoService.todos$.pipe((0,g.U)(o=>o.every(n=>n.isCompleted))),this.noTodoClass$=this.todoService.todos$.pipe((0,g.U)(o=>0===o.length)),this.visibleTodos$=(0,x.a)(this.todoService.todos$,this.todoService.filter$).pipe((0,g.U)(([o,n])=>n===d.active?o.filter(l=>!l.isCompleted):n===d.completed?o.filter(l=>l.isCompleted):o))}changeText(e){this.text=e.target.value}addTodo(){this.todoService.addTodo(this.text),this.text=""}ngOnInit(){}changeFilter(e,o){e.preventDefault(),this.todoService.changeFilter(o)}toggleAllTodos(e){this.todoService.toggleAll(e.target.checked)}setEditingId(e){this.editingId=e}static#t=this.\u0275fac=function(o){return new(o||i)(t.Y36(u))};static#n=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-todos"]],decls:34,vars:38,consts:[[1,"header"],["autoFocus","","placeholder","What needs to be done?",1,"new-todo",3,"value","keyup","keyup.enter"],[1,"main",3,"ngClass"],["id","toggle-all","type","checkbox",1,"toggle-all",3,"checked","change"],["for","toggle-all"],[1,"todo-list"],[3,"isEditing","todo","setEditingId",4,"ngFor","ngForOf"],[1,"footer",3,"ngClass"],[1,"todo-count"],[1,"filters"],["href","/",3,"ngClass","click"],[3,"isEditing","todo","setEditingId"]],template:function(o,n){1&o&&(t.TgZ(0,"header",0)(1,"h1"),t._uU(2,"todos"),t.qZA(),t.TgZ(3,"input",1),t.NdJ("keyup",function(c){return n.changeText(c)})("keyup.enter",function(){return n.addTodo()}),t.qZA()(),t.TgZ(4,"section",2),t.ALo(5,"async"),t.TgZ(6,"input",3),t.NdJ("change",function(c){return n.toggleAllTodos(c)}),t.ALo(7,"async"),t.qZA(),t.TgZ(8,"label",4),t._uU(9,"Mark all as completed"),t.qZA(),t.TgZ(10,"ul",5),t.YNc(11,b,1,2,"app-todo",6),t.ALo(12,"async"),t.qZA()(),t.TgZ(13,"footer",7),t.ALo(14,"async"),t.TgZ(15,"span",8)(16,"strong"),t._uU(17),t.ALo(18,"async"),t.qZA(),t._uU(19),t.ALo(20,"async"),t.qZA(),t.TgZ(21,"ul",9)(22,"li")(23,"a",10),t.NdJ("click",function(c){return n.changeFilter(c,n.filterEnum.all)}),t.ALo(24,"async"),t._uU(25," All "),t.qZA()(),t.TgZ(26,"li")(27,"a",10),t.NdJ("click",function(c){return n.changeFilter(c,n.filterEnum.active)}),t.ALo(28,"async"),t._uU(29," Active "),t.qZA()(),t.TgZ(30,"li")(31,"a",10),t.NdJ("click",function(c){return n.changeFilter(c,n.filterEnum.completed)}),t.ALo(32,"async"),t._uU(33," Completed "),t.qZA()()()()),2&o&&(t.xp6(3),t.Q6J("value",n.text),t.xp6(1),t.Q6J("ngClass",t.VKq(28,C,t.lcZ(5,10,n.noTodoClass$))),t.xp6(2),t.Q6J("checked",t.lcZ(7,12,n.isAllTodosSelected$)),t.xp6(5),t.Q6J("ngForOf",t.lcZ(12,14,n.visibleTodos$)),t.xp6(2),t.Q6J("ngClass",t.VKq(30,C,t.lcZ(14,16,n.noTodosClass$))),t.xp6(4),t.Oqu(t.lcZ(18,18,n.activeCount$)),t.xp6(2),t.hij(" ",t.lcZ(20,20,n.itemsLeftText$)," "),t.xp6(4),t.Q6J("ngClass",t.VKq(32,a,t.lcZ(24,22,n.filter$)===n.filterEnum.all)),t.xp6(4),t.Q6J("ngClass",t.VKq(34,a,t.lcZ(28,24,n.filter$)===n.filterEnum.active)),t.xp6(4),t.Q6J("ngClass",t.VKq(36,a,t.lcZ(32,26,n.filter$)===n.filterEnum.completed)))},dependencies:[r.mk,r.sg,O,r.Ov],styles:['@charset "UTF-8";[_nghost-%COMP%]{padding:0;font:14px Helvetica Neue,Helvetica,Arial,sans-serif;line-height:1.4em;background:#f5f5f5;color:#111;min-width:230px;max-width:550px;margin:0 auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-weight:300}button[_ngcontent-%COMP%]{margin:0;padding:0;border:0;background:none;font-size:100%;vertical-align:baseline;font-family:inherit;font-weight:inherit;color:inherit;appearance:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}[_ngcontent-%COMP%]:focus{outline:0}.hidden[_ngcontent-%COMP%]{display:none}.todoapp[_ngcontent-%COMP%]{background:#fff;margin:130px 0 40px;position:relative;box-shadow:0 2px 4px #0003,0 25px 50px #0000001a}.todoapp[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{font-style:italic;font-weight:300;color:#0006}.todoapp[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{position:absolute;top:-140px;width:100%;font-size:80px;font-weight:200;text-align:center;color:#b83f45;-webkit-text-rendering:optimizeLegibility;-moz-text-rendering:optimizeLegibility;text-rendering:optimizeLegibility}.new-todo[_ngcontent-%COMP%], .edit[_ngcontent-%COMP%]{position:relative;margin:0;width:100%;font-size:24px;font-family:inherit;font-weight:inherit;line-height:1.4em;color:inherit;padding:6px;border:1px solid #999;box-shadow:inset 0 -1px 5px #0003;box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.new-todo[_ngcontent-%COMP%]{padding:16px 16px 16px 60px;border:none;background:rgba(0,0,0,.003);box-shadow:inset 0 -2px 1px #00000008}.main[_ngcontent-%COMP%]{position:relative;z-index:2;border-top:1px solid #e6e6e6}.toggle-all[_ngcontent-%COMP%]{width:1px;height:1px;border:none;opacity:0;position:absolute;right:100%;bottom:100%}.toggle-all[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]{width:60px;height:34px;font-size:0;position:absolute;top:-52px;left:-13px;transform:rotate(90deg)}.toggle-all[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]:before{content:"\\276f";font-size:22px;color:#e6e6e6;padding:10px 27px}.toggle-all[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]:before{color:#737373}.todo-list[_ngcontent-%COMP%]{margin:0;padding:0;list-style:none}.todo-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{position:relative;font-size:24px;border-bottom:1px solid #ededed}.todo-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{border-bottom:none}.todo-list[_ngcontent-%COMP%]   li.editing[_ngcontent-%COMP%]{border-bottom:none;padding:0}.todo-list[_ngcontent-%COMP%]   li.editing[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%]{display:block;width:calc(100% - 43px);padding:12px 16px;margin:0 0 0 43px}.todo-list[_ngcontent-%COMP%]   li.editing[_ngcontent-%COMP%]   .view[_ngcontent-%COMP%]{display:none}.todo-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .toggle[_ngcontent-%COMP%]{text-align:center;width:40px;height:auto;position:absolute;top:0;bottom:0;margin:auto 0;border:none;appearance:none}.todo-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .toggle[_ngcontent-%COMP%]{opacity:0}.todo-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .toggle[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E);background-repeat:no-repeat;background-position:center left}.todo-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .toggle[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E)}.todo-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{word-break:break-all;padding:15px 15px 15px 60px;display:block;line-height:1.2;transition:color .4s;font-weight:400;color:#4d4d4d}.todo-list[_ngcontent-%COMP%]   li.completed[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#cdcdcd;text-decoration:line-through}.todo-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .destroy[_ngcontent-%COMP%]{display:none;position:absolute;top:0;right:10px;bottom:0;width:40px;height:40px;margin:auto 0 11px;font-size:30px;color:#cc9a9a;transition:color .2s ease-out}.todo-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .destroy[_ngcontent-%COMP%]:hover{color:#af5b5e}.todo-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .destroy[_ngcontent-%COMP%]:after{content:"\\d7"}.todo-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .destroy[_ngcontent-%COMP%]{display:block}.todo-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%]{display:none}.todo-list[_ngcontent-%COMP%]   li.editing[_ngcontent-%COMP%]:last-child{margin-bottom:-1px}.footer[_ngcontent-%COMP%]{padding:10px 15px;height:20px;text-align:center;font-size:15px;border-top:1px solid #e6e6e6}.footer[_ngcontent-%COMP%]:before{content:"";position:absolute;right:0;bottom:0;left:0;height:50px;overflow:hidden;box-shadow:0 1px 1px #0003,0 8px 0 -3px #f6f6f6,0 9px 1px -3px #0003,0 16px 0 -6px #f6f6f6,0 17px 2px -6px #0003}.todo-count[_ngcontent-%COMP%]{float:left;text-align:left}.todo-count[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-weight:300}.filters[_ngcontent-%COMP%]{margin:0;padding:0;list-style:none;position:absolute;right:0;left:0}.filters[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline}.filters[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:inherit;margin:3px;padding:3px 7px;text-decoration:none;border:1px solid transparent;border-radius:3px}.filters[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{border-color:#af2f2f1a}.filters[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.selected[_ngcontent-%COMP%]{border-color:#af2f2f33}.clear-completed[_ngcontent-%COMP%], html[_ngcontent-%COMP%]   .clear-completed[_ngcontent-%COMP%]:active{float:right;position:relative;line-height:20px;text-decoration:none;cursor:pointer}.clear-completed[_ngcontent-%COMP%]:hover{text-decoration:underline}.info[_ngcontent-%COMP%]{margin:65px auto 0;color:#4d4d4d;font-size:11px;text-shadow:0 1px 0 rgba(255,255,255,.5);text-align:center}.info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{line-height:1}.info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:inherit;text-decoration:none;font-weight:400}.info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}@media screen and (-webkit-min-device-pixel-ratio: 0){.toggle-all[_ngcontent-%COMP%], .todo-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .toggle[_ngcontent-%COMP%]{background:none}.todo-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .toggle[_ngcontent-%COMP%]{height:40px}}@media (max-width: 430px){.footer[_ngcontent-%COMP%]{height:50px}.filters[_ngcontent-%COMP%]{bottom:10px}}hr[_ngcontent-%COMP%]{margin:20px 0;border:0;border-top:1px dashed #c5c5c5;border-bottom:1px dashed #f7f7f7}.learn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-weight:400;text-decoration:none;color:#b83f45}.learn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline;color:#787e7e}.learn[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .learn[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .learn[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin:10px 0;font-weight:500;line-height:1.2;color:#000}.learn[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:24px}.learn[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:18px}.learn[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin-bottom:0;font-size:14px}.learn[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding:0;margin:0 0 30px 25px}.learn[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{line-height:20px}.learn[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:15px;font-weight:300;line-height:1.3;margin-top:0;margin-bottom:0}#issue-count[_ngcontent-%COMP%]{display:none}.quote[_ngcontent-%COMP%]{border:none;margin:20px 0 60px}.quote[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-style:italic}.quote[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:before{content:"\\201c";font-size:50px;opacity:.15;position:absolute;top:-20px;left:3px}.quote[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:after{content:"\\201d";font-size:50px;opacity:.15;position:absolute;bottom:-42px;right:3px}.quote[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]{position:absolute;bottom:-40px;right:0}.quote[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:3px}.quote[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin-left:5px;vertical-align:middle}.speech-bubble[_ngcontent-%COMP%]{position:relative;padding:10px;background:rgba(0,0,0,.04);border-radius:5px}.speech-bubble[_ngcontent-%COMP%]:after{content:"";position:absolute;top:100%;right:30px;border:13px solid transparent;border-top-color:#0000000a}.learn-bar[_ngcontent-%COMP%] > .learn[_ngcontent-%COMP%]{position:absolute;width:272px;top:8px;left:-300px;padding:10px;border-radius:5px;background-color:#fff9;transition-property:left;transition-duration:.5s}@media (min-width: 899px){.learn-bar[_ngcontent-%COMP%]{width:auto;padding-left:300px}.learn-bar[_ngcontent-%COMP%] > .learn[_ngcontent-%COMP%]{left:8px}}']})}return i})()}];let v=(()=>{class i{static#t=this.\u0275fac=function(o){return new(o||i)};static#n=this.\u0275mod=t.oAB({type:i});static#o=this.\u0275inj=t.cJS({imports:[h.Bz.forChild(T),h.Bz]})}return i})();var y=s(486),w=s(4006);let k=(()=>{class i{static#t=this.\u0275fac=function(o){return new(o||i)};static#n=this.\u0275mod=t.oAB({type:i});static#o=this.\u0275inj=t.cJS({imports:[r.ez,v,y.Dt,w.u5]})}return i})()}}]);