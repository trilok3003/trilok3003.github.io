import{e as g}from"./chunk-SVXRNZXW.js";import{$ as c,da as a,jd as w,va as l}from"./chunk-WZRQUHHR.js";var p={success:{svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <circle cx="12" cy="12" r="10"/>
  <path d="m9 12 2 2 4-4"/>
</svg>
`},error:{svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <circle cx="12" cy="12" r="10"/>
  <path d="M15 9l-6 6M9 9l6 6"/>
</svg>
`},warning:{svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <path d="M12 2 2 20h20L12 2z"/>
  <line x1="12" y1="9" x2="12" y2="13"/>
  <circle cx="12" cy="17" r="1"/>
</svg>
`},info:{svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <circle cx="12" cy="12" r="10"/>
  <line x1="12" y1="16" x2="12" y2="12"/>
  <circle cx="12" cy="8" r="1"/>
</svg>
`},loading:{svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="none" stroke="currentColor" stroke-width="4">
  <circle cx="25" cy="25" r="20" stroke-opacity=".25"/>
  <path d="M45 25a20 20 0 0 1-20 20">
    <animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="1s" repeatCount="indefinite"/>
  </path>
</svg>
`},help:{svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <circle cx="12" cy="12" r="10"/>
  <path d="M9.5 9a3 3 0 1 1 3.5 4c-.5.4-.5 1-.5 2"/>
  <circle cx="12" cy="17" r="1"/>
</svg>
`},offline:{svg:`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <path d="M3 3l18 18"/>
  <path d="M19 16.9A5 5 0 1 0 9.6 7.5"/>
  <path d="M5 19h11"/>
</svg>

        `},update:{svg:`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <path d="M21 12a9 9 0 1 1-3-6.7"/>
  <polyline points="21 3 21 9 15 9"/>
</svg>

        `}},e=3e3,k=(()=>{class o{constructor(t){this.sanitizer=t,this._toasts=l([]),this.toasts=w(()=>this._toasts())}show(t,s="",r="success",i=e){let h=p[r].svg,v=this.sanitizer.bypassSecurityTrustHtml(h),n={id:this.randomUUID(),title:t,message:s,type:r,svg:v,duration:i};return this._toasts.update(d=>[...d,n]),i>0&&setTimeout(()=>this.remove(n.id),i),n.id}remove(t){this._toasts.update(s=>s.filter(r=>r.id!==t))}dismiss(t){this.remove(t)}randomUUID(){return(Math.random()*1e9).toString(36)}success(t,s="",r=e){return this.show(t,s,"success",r)}info(t,s="",r=e){return this.show(t,s,"info",r)}error(t,s="",r=e){return this.show(t,s,"error",r)}loading(t="Loading...",s="Please wait",r=0){return this.show(t,s,"loading",r)}static{this.\u0275fac=function(s){return new(s||o)(a(g))}}static{this.\u0275prov=c({token:o,factory:o.\u0275fac,providedIn:"root"})}}return o})();export{k as a};
