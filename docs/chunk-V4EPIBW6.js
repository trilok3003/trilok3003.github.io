import{Gb as s,Mc as e}from"./chunk-AO3HSYED.js";var a=(()=>{class t{constructor(){this.cols="auto-fit",this.minWidth="12.5em",this.maxWidth="1fr",this.gap="1rem",this.rowHeight="auto"}get getStyle(){return`
     margin: 1rem 0;
     display: grid;
     grid-template-columns: repeat(${this.cols}, minmax( min(${this.minWidth}, 100%),  ${this.maxWidth}));
     grid-template-rows: ${this.rowHeight};
     grid-gap: ${this.gap};
     grid-auto-flow: dense;
     `}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275dir=s({type:t,selectors:[["","appGrid",""]],hostVars:2,hostBindings:function(i,n){i&2&&e(n.getStyle)},inputs:{cols:"cols",minWidth:"minWidth",maxWidth:"maxWidth",gap:"gap",rowHeight:"rowHeight"}})}}return t})();export{a};
