"use strict";(self.webpackChunkportfolio_all_in_one=self.webpackChunkportfolio_all_in_one||[]).push([[7703],{7703:(f,d,l)=>{l.r(d),l.d(d,{TodosComponent:()=>g});var e=l(4006),a=l(6895),o=l(4650);const p=function(n){return{completed:n}};function m(n,u){if(1&n){const t=o.EpF();o.TgZ(0,"li",3),o.NdJ("click",function(){const c=o.CHM(t).$implicit,s=o.oxw();return o.KtG(s.toggleTodo(c))})("contextmenu",function(i){const s=o.CHM(t).index,_=o.oxw();return o.KtG(_.onRemove(i,s))}),o._uU(1),o.qZA()}if(2&n){const t=u.$implicit;o.Q6J("ngClass",o.VKq(2,p,t.completed)),o.xp6(1),o.hij("",t.text," ")}}let g=(()=>{class n{constructor(t){this.fb=t,this.todos=JSON.parse(localStorage.getItem("todos")),this.formInit()}ngOnInit(){}addTodo(t){t.preventDefault(),!this.form.invalid&&(this.todos.push(this.form.value),this.formInit(),this.updateLocalStorage())}formInit(){this.form=this.fb.group({text:["",[e.kI.required]],completed:[!1]})}updateLocalStorage(){localStorage.setItem("todos",JSON.stringify(this.todos))}onRemove(t,r){t.preventDefault(),this.todos.splice(r,1),this.updateLocalStorage()}toggleTodo(t){t.completed=!t.completed,this.updateLocalStorage()}static#o=this.\u0275fac=function(r){return new(r||n)(o.Y36(e.qu))};static#t=this.\u0275cmp=o.Xpm({type:n,selectors:[["app-todos"]],standalone:!0,features:[o.jDz],decls:11,vars:2,consts:[[3,"formGroup","submit"],["autocomplete","off","formControlName","text","placeholder","Enter your todo","type","text",1,"input"],[3,"ngClass","click","contextmenu",4,"ngFor","ngForOf"],[3,"ngClass","click","contextmenu"]],template:function(r,i){1&r&&(o.TgZ(0,"section")(1,"h1"),o._uU(2,"Todos"),o.qZA(),o.TgZ(3,"form",0),o.NdJ("submit",function(s){return i.addTodo(s)}),o._UZ(4,"input",1),o.TgZ(5,"ul"),o.YNc(6,m,2,4,"li",2),o.qZA()(),o.TgZ(7,"small"),o._uU(8,"Left click to toggle complete. "),o._UZ(9,"br"),o._uU(10,"Right click to delete the todo."),o.qZA()()),2&r&&(o.xp6(3),o.Q6J("formGroup",i.form),o.xp6(3),o.Q6J("ngForOf",i.todos))},dependencies:[e.UX,e._Y,e.Fj,e.JJ,e.JL,e.sg,e.u,a.mk,a.sg],styles:["*[_ngcontent-%COMP%]{box-sizing:border-box;margin:0;padding:0}[_nghost-%COMP%]{--color: lightblue;min-height:100vh;display:grid;place-items:center;font-family:Poppins,sans-serif;background-color:#f5f5f5;color:#444}h1[_ngcontent-%COMP%]{color:var(--color);font-size:10rem;text-align:center;opacity:1}.title[_ngcontent-%COMP%]{width:100%;padding-bottom:15px;background:var(--color);border-top-left-radius:20px;border-top-right-radius:20px;color:#fff}form[_ngcontent-%COMP%]{box-shadow:0 4px 10px #0000001a;max-width:100%;width:400px}form[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]{border:none;color:#444;font-size:2rem;padding:1rem 2rem;display:block;width:100%}form[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]::placeholder{color:#d5d5d5}ul[_ngcontent-%COMP%]{background-color:#fff;padding:0;margin:0;list-style-type:none}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{border-top:1px solid #e5e5e5;cursor:pointer;font-size:1.5rem;padding:1rem 2rem}ul[_ngcontent-%COMP%]   li.completed[_ngcontent-%COMP%]{color:#b6b6b6;text-decoration:line-through}small[_ngcontent-%COMP%]{color:#b5b5b5;margin-top:3rem;text-align:center}"]})}return n})()}}]);