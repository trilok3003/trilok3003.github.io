"use strict";(self.webpackChunkportfolio_all_in_one=self.webpackChunkportfolio_all_in_one||[]).push([[2792],{2792:(v,s,i)=>{i.r(s),i.d(s,{AbstractAnimationModule:()=>C});var u=i(9808),r=i(4202),n=i(5e3);let p=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-abstract-animation"]],decls:7,vars:0,consts:[["routerLink","hello"],["routerLink","bye"]],template:function(e,a){1&e&&(n.TgZ(0,"div")(1,"a",0),n._uU(2,"Hello"),n.qZA(),n.TgZ(3,"a",1),n._uU(4,"Bye"),n.qZA()(),n.TgZ(5,"div"),n._UZ(6,"router-outlet"),n.qZA())},dependencies:[r.lC,r.yS],styles:["a[_ngcontent-%COMP%]{font-family:Lato;font-size:1.5em;margin:10px}"]}),t})();var l=i(1777),f=i(2805),A=i(9718);const d=["myDiv"];let c=(()=>{class t{constructor(e){this._builder=e,this.ANIMATION_TIME=200}ngAfterViewInit(){this.animation=this._builder.build(this.slideIn(this.ANIMATION_TIME)),this.player=this.animation.create(this.el.nativeElement,{}),this.player.play()}canDeactivate(){return console.log("kkk"),this.animation=this._builder.build(this.slideOut(this.ANIMATION_TIME)),this.player=this.animation.create(this.el.nativeElement,{}),this.player.play(),(0,f.H)(this.ANIMATION_TIME).pipe((0,A.h)(!0)).toPromise()}slideOut(e){return console.log("out"),[(0,l.oB)({transform:"translateX(0)"}),(0,l.jt)(e,(0,l.oB)({transform:"translateX(100%)"}))]}slideIn(e){return console.log("in"),[(0,l.oB)({transform:"translateX(-100%)"}),(0,l.jt)(e,(0,l.oB)({transform:"translateX(0)"}))]}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(l._j))},t.\u0275cmp=n.Xpm({type:t,selectors:[["ng-component"]],viewQuery:function(e,a){if(1&e&&n.Gf(d,5),2&e){let m;n.iGM(m=n.CRH())&&(a.el=m.first)}},decls:0,vars:0,template:function(e,a){},encapsulation:2}),t})();const y=[{path:"",component:p,children:[{path:"hello",component:(()=>{class t extends c{}return t.\u0275fac=function(){let o;return function(a){return(o||(o=n.n5z(t)))(a||t)}}(),t.\u0275cmp=n.Xpm({type:t,selectors:[["app-hello"]],features:[n.qOj],decls:3,vars:0,consts:[["myDiv",""]],template:function(e,a){1&e&&(n.TgZ(0,"div",null,0),n._uU(2,"Hello !"),n.qZA())},styles:["div[_ngcontent-%COMP%]{font-family:Lato;font-size:2em;text-align:center;color:#fff;width:100%;height:80vh;background-color:#2980b9}"]}),t})()},{path:"bye",component:(()=>{class t extends c{}return t.\u0275fac=function(){let o;return function(a){return(o||(o=n.n5z(t)))(a||t)}}(),t.\u0275cmp=n.Xpm({type:t,selectors:[["app-bye"]],features:[n.qOj],decls:3,vars:0,consts:[["myDiv",""]],template:function(e,a){1&e&&(n.TgZ(0,"div",null,0),n._uU(2,"Bye !"),n.qZA())},styles:["div[_ngcontent-%COMP%]{font-family:Lato;font-size:2em;text-align:center;color:#fff;width:100%;height:80vh;background-color:#2ecc71}"]}),t})()}]}];let h=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[r.Bz.forChild(y),r.Bz]}),t})(),C=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[u.ez,h]}),t})()}}]);