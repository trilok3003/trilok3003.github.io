"use strict";(self.webpackChunkportfolio_all_in_one=self.webpackChunkportfolio_all_in_one||[]).push([[5055],{5055:(V,f,c)=>{c.r(f),c.d(f,{ToolsModule:()=>$});var d=c(6895),_=c(4793),e=c(4650),m=c(1189),s=c(4006),g=c(9671);let T=(()=>{class n{downloadImage(r){return(0,g.Z)(function*(){try{const t=yield(yield fetch(r)).blob(),i=document.createElement("a");i.href=URL.createObjectURL(t),i.download="qrcode.jpg",i.click()}catch{alert("Failed to download the file!")}})()}copyToClipboard(r){navigator.clipboard.writeText(r).catch(()=>{console.error("Unable to copy text")})}copyToClipboard2(r){return(0,g.Z)(function*(){try{yield navigator.clipboard.writeText(r),alert("copied to clipboard")}catch(o){alert(o)}})()}copyToClipboard3(r){if(!r)return;const o=document.createElement("textarea");o.value=r,document.body.appendChild(o),o.select(),document.execCommand("copy"),o.remove(),alert("copied to clipboard")}static#e=this.\u0275fac=function(o){return new(o||n)};static#t=this.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),C=(()=>{class n{constructor(r){this.utilsService=r}onClick(r){r.preventDefault(),this.value&&this.utilsService.copyToClipboard2(this.value).then()}static#e=this.\u0275fac=function(o){return new(o||n)(e.Y36(T))};static#t=this.\u0275dir=e.lG2({type:n,selectors:[["","appCopyClipboard",""]],hostBindings:function(o,t){1&o&&e.NdJ("click",function(a){return t.onClick(a)})},inputs:{value:["appCopyClipboard","value"]}})}return n})();const b="ABCDEFGHIJKLMNOPQRSTUVWXYZ",M="abcdefghijklmnopqrstuvwxyz",Z="0123456789",v="!@#$%^&*()_+=";let A=(()=>{class n{constructor(){this.passwordConfig={length:15,upper:!1,lower:!1,number:!1,symbol:!1}}ngOnInit(){}generatePassword(){let r=this.passwordConfig.length,o=this.getPassword();for(let t=o.length;t<r;t++)o+=this.generateX();this.password=o}generateX(){let r=this.getPassword();return 0===r.length?"":r[Math.floor(Math.random()*r.length)]}getPassword(){const{upper:r,lower:o,number:t,symbol:i}=this.passwordConfig;let a="";return r&&(a+=this.getUppercase()),o&&(a+=this.getLowercase()),t&&(a+=this.getNumber()),i&&(a+=this.getSymbol()),a}getLowercase(){return M[Math.floor(Math.random()*M.length)]}getUppercase(){return b[Math.floor(Math.random()*b.length)]}getNumber(){return Z[Math.floor(Math.random()*Z.length)]}getSymbol(){return v[Math.floor(Math.random()*v.length)]}static#e=this.\u0275fac=function(o){return new(o||n)};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-password-generator"]],decls:31,vars:7,consts:[[1,"pw-container"],[1,"pw-header"],[1,"pw"],[2,"color","green"],[3,"appCopyClipboard"],[1,"pw-body"],[1,"form-control"],["max","30","min","2","type","number","value","15",3,"ngModel","ngModelChange"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"generate",3,"click"]],template:function(o,t){1&o&&(e.TgZ(0,"body")(1,"div",0)(2,"div",1)(3,"div",2)(4,"span",3),e._uU(5),e.qZA(),e.TgZ(6,"button",4),e._uU(7,"Copy"),e.qZA()()(),e.TgZ(8,"div",5)(9,"div",6)(10,"label"),e._uU(11,"Password Length"),e.qZA(),e.TgZ(12,"input",7),e.NdJ("ngModelChange",function(a){return t.passwordConfig.length=a}),e.qZA()(),e.TgZ(13,"div",6)(14,"label"),e._uU(15,"Contain Uppercase Letters\n"),e.qZA(),e.TgZ(16,"input",8),e.NdJ("ngModelChange",function(a){return t.passwordConfig.upper=a}),e.qZA()(),e.TgZ(17,"div",6)(18,"label"),e._uU(19,"Contain Lowercase Letters\n"),e.qZA(),e.TgZ(20,"input",8),e.NdJ("ngModelChange",function(a){return t.passwordConfig.lower=a}),e.qZA()(),e.TgZ(21,"div",6)(22,"label"),e._uU(23,"Contain Numbers\n"),e.qZA(),e.TgZ(24,"input",8),e.NdJ("ngModelChange",function(a){return t.passwordConfig.number=a}),e.qZA()(),e.TgZ(25,"div",6)(26,"label"),e._uU(27,"Contain Symbols\n"),e.qZA(),e.TgZ(28,"input",8),e.NdJ("ngModelChange",function(a){return t.passwordConfig.symbol=a}),e.qZA()(),e.TgZ(29,"button",9),e.NdJ("click",function(){return t.generatePassword()}),e._uU(30," Generate Password "),e.qZA()()()()),2&o&&(e.xp6(5),e.Oqu(t.password),e.xp6(1),e.Q6J("appCopyClipboard",t.password),e.xp6(6),e.Q6J("ngModel",t.passwordConfig.length),e.xp6(4),e.Q6J("ngModel",t.passwordConfig.upper),e.xp6(4),e.Q6J("ngModel",t.passwordConfig.lower),e.xp6(4),e.Q6J("ngModel",t.passwordConfig.number),e.xp6(4),e.Q6J("ngModel",t.passwordConfig.symbol))},dependencies:[s.Fj,s.wV,s.Wl,s.JJ,s.qQ,s.Fd,s.On,C],styles:['@import"https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap";*{box-sizing:border-box}body{background-color:#639;color:#fff;display:flex;align-items:center;justify-content:center;font-family:Poppins,sans-serif;margin:0;min-height:100vh}.pw-container{background-color:#2e0c50;box-shadow:0 4px 10px #00000080;min-width:400px}.pw-header{padding:1rem}.pw{background-color:#451c6d;display:flex;font-size:1.5rem;align-items:center;height:70px;width:100%;position:relative;padding:1rem;overflow:auto}.pw button{background-color:#fff;border:none;color:#1d0238;cursor:pointer;font-family:inherit;font-weight:700;padding:.25rem;position:absolute;top:0;right:0;transform:translateY(20%);transition:opacity .2s ease,transform .2s ease;opacity:0}.pw:hover button{opacity:1;transform:translate(0)}.pw-body{padding:0 1rem 1rem}.form-control{color:#eee;display:flex;justify-content:space-between;margin:.75rem 0}.generate{background-color:#ecb602;border:none;color:#639;cursor:pointer;display:block;font-size:1.5rem;font-weight:700;padding:.75rem;margin-top:1rem;width:100%}\n'],encapsulation:3})}return n})(),q=(()=>{class n{constructor(){this.numOfImages=8,this.images=this.generateImagesList()}static generateRandomImage(){return{src:`https://picsum.photos/600/${(600*Math.random()+400).toFixed()}/?random`}}addImage(){const r=n.generateRandomImage();r.alt=`#${this.images.length}`,this.images.push(r)}generateImagesList(){const r=[];for(let o=0;o<this.numOfImages;o++){const t=n.generateRandomImage();t.alt=`#${o}`,r.push(t)}return r}static#e=this.\u0275fac=function(o){return new(o||n)};static#t=this.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function J(n,l){1&n&&e._UZ(0,"img",2),2&n&&e.Q6J("src",l.$implicit.src,e.LSH)}let k=(()=>{class n{constructor(r){this.imagesService=r,this.images=this.imagesService.images}ngOnInit(){}static#e=this.\u0275fac=function(o){return new(o||n)(e.Y36(q))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-images"]],decls:3,vars:1,consts:[[3,"click"],["width","50","height","50",3,"src",4,"ngFor","ngForOf"],["width","50","height","50",3,"src"]],template:function(o,t){1&o&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return t.imagesService.addImage()}),e._uU(1,"Add Image"),e.qZA(),e.YNc(2,J,1,1,"img",1)),2&o&&(e.xp6(2),e.Q6J("ngForOf",t.images))},dependencies:[d.sg]})}return n})();const P=(n=6)=>{let l="";for(let r=0;r<n;r++)l+=Math.floor(10*Math.random());return l},u=()=>`#${Math.floor(16777215*Math.random()).toString(16)}`,w=()=>`linear-gradient(to left top, ${u()}, ${u()} )`,y=()=>fetch("http://api.quotable.io/random").then(l=>l.json()).then(l=>l.content).catch(()=>alert("Error fetching quote!")),S=()=>p(["Head","Tail"]),G=n=>`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${n}`,p=n=>n[Math.floor(Math.random()*n.length)],U=()=>p("ABCDEFGHIJKLMNOPQRSTUVWXYZ");let O=(()=>{class n{static#e=this.\u0275fac=function(o){return new(o||n)};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-clipboard-box"]],inputs:{value:"value"},decls:4,vars:2,consts:[[1,"clipboard-text"],[1,"clipboard-btn",3,"appCopyClipboard"]],template:function(o,t){1&o&&(e.TgZ(0,"span",0),e._uU(1),e.qZA(),e.TgZ(2,"button",1),e._uU(3,"Copy"),e.qZA()),2&o&&(e.xp6(1),e.Oqu(t.value),e.xp6(1),e.Q6J("appCopyClipboard",t.value))},dependencies:[C],styles:["[_nghost-%COMP%]{background-color:#451c6d;display:flex;font-size:1.5rem;align-items:center;height:70px;width:100%;padding:1rem;position:relative;overflow:auto}[_nghost-%COMP%]   .clipboard-text[_ngcontent-%COMP%]{color:green;font-weight:700}[_nghost-%COMP%]   .clipboard-btn[_ngcontent-%COMP%]{background-color:#fff;border:none;color:#1d0238;cursor:pointer;font-family:inherit;font-weight:700;padding:.25rem;position:absolute;top:0;right:0;transform:translateY(20%);transition:opacity .2s ease,transform .2s ease;opacity:0}[_nghost-%COMP%]:hover   .clipboard-btn[_ngcontent-%COMP%]{opacity:1;transform:translate(0)}"]})}return n})(),Q=(()=>{class n{constructor(r){this.utilsService=r}onClick(r){this.imageUrl&&this.utilsService.downloadImage(this.imageUrl)}static#e=this.\u0275fac=function(o){return new(o||n)(e.Y36(T))};static#t=this.\u0275dir=e.lG2({type:n,selectors:[["","appDownloadImage",""]],hostBindings:function(o,t){1&o&&e.NdJ("click",function(a){return t.onClick(a)})},inputs:{imageUrl:["appDownloadImage","imageUrl"]}})}return n})(),R=(()=>{class n{generateColor(){this.gradientcolor="",this.color=u()}generateGradient(){this.color="",this.gradientcolor=w()}generateOtp(){this.otp=P()}generateQoute(){var r=this;return(0,g.Z)(function*(){r.qoute=yield y()})()}generateQrcode(){this.qrvalue&&(this.qrcode=G(this.qrvalue))}getRandomUpperLetter(){this.upper=U()}getRadomToss(){this.winner=S()}static#e=this.\u0275fac=function(o){return new(o||n)};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-random"]],hostVars:2,hostBindings:function(o,t){2&o&&e.Udp("--color",t.color||t.gradientcolor)},decls:31,vars:9,consts:[[1,"content"],[3,"value"],[1,"generate",3,"click"],[3,"src"],[3,"ngModel","ngModelChange"],[1,"generate",3,"appDownloadImage"]],template:function(o,t){1&o&&(e.TgZ(0,"div",0),e._UZ(1,"app-clipboard-box",1),e.TgZ(2,"button",2),e.NdJ("click",function(){return t.generateColor()}),e._uU(3," Generate Color "),e.qZA()(),e.TgZ(4,"div",0),e._UZ(5,"app-clipboard-box",1),e.TgZ(6,"button",2),e.NdJ("click",function(){return t.generateGradient()}),e._uU(7," Generate Gradient "),e.qZA()(),e.TgZ(8,"div",0),e._UZ(9,"app-clipboard-box",1),e.TgZ(10,"button",2),e.NdJ("click",function(){return t.generateOtp()}),e._uU(11,"Generate OTP"),e.qZA()(),e.TgZ(12,"div",0),e._UZ(13,"app-clipboard-box",1),e.TgZ(14,"button",2),e.NdJ("click",function(){return t.generateQoute()}),e._uU(15,"Generate Quote"),e.qZA()(),e.TgZ(16,"div",0),e._UZ(17,"app-clipboard-box",1),e.TgZ(18,"button",2),e.NdJ("click",function(){return t.getRandomUpperLetter()}),e._uU(19," Random Upper Letter "),e.qZA()(),e.TgZ(20,"div",0),e._UZ(21,"app-clipboard-box",1),e.TgZ(22,"button",2),e.NdJ("click",function(){return t.getRadomToss()}),e._uU(23," Toss the coin "),e.qZA()(),e.TgZ(24,"div",0),e._UZ(25,"img",3),e.TgZ(26,"input",4),e.NdJ("ngModelChange",function(a){return t.qrvalue=a}),e.qZA(),e.TgZ(27,"button",2),e.NdJ("click",function(){return t.generateQrcode()}),e._uU(28,"Generate QR"),e.qZA(),e.TgZ(29,"button",5),e._uU(30," download QR "),e.qZA()()),2&o&&(e.xp6(1),e.Q6J("value",t.color),e.xp6(4),e.Q6J("value",t.gradientcolor),e.xp6(4),e.Q6J("value",t.otp),e.xp6(4),e.Q6J("value",t.qoute),e.xp6(4),e.Q6J("value",t.upper),e.xp6(4),e.Q6J("value",t.winner),e.xp6(4),e.s9C("src",t.qrcode,e.LSH),e.xp6(1),e.Q6J("ngModel",t.qrvalue),e.xp6(3),e.Q6J("appDownloadImage",t.qrcode))},dependencies:[s.Fj,s.JJ,s.On,O,Q],styles:["*{box-sizing:border-box}:host{--color: rebeccapurple;--color-light: color-mix(in srgb, var(--color) 20%, transparent);--color-dark: color-mix(in srgb, var(--color) 70%, white);background:var(--color);min-height:100vh;display:grid;place-items:center}:host .content{background:var(--color-dark);max-width:400px;width:90%;text-align:center;box-shadow:0 4px 10px #00000080;padding:1rem;margin:1rem 0}:host .generate{background-color:#ecb602;border:none;color:var(--color);cursor:pointer;display:block;font-size:1.5rem;font-weight:700;padding:.75rem;margin-top:1rem;width:100%}\n"],encapsulation:3})}return n})();const h=function(){return{standalone:!0}};let N=(()=>{class n{constructor(){this.tip=10}ngOnInit(){}calculate(){let r=this.bill*(this.tip/100),o=this.bill+r;this.tipAmount=r.toFixed(2),this.totalBillWithTip=o.toFixed(2)}static#e=this.\u0275fac=function(o){return new(o||n)};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-tip-calculate"]],decls:31,vars:12,consts:[[1,"row"],[1,"col-md-6","mx-auto"],[1,"card","card-body","text-center","mt-5"],[1,"heading","display-5","pb-3"],["id","tip-form"],[1,"form-group"],[1,"input-group"],[1,"input-group-addon"],["placeholder","Total Bill","type","number",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],[1,"form-group","tipPersent"],["type","range","value","0",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],[1,"pt-4"],["disabled","","type","number",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"]],template:function(o,t){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),e._uU(4,"Tip Calculator"),e.qZA(),e.TgZ(5,"form",4)(6,"div",5)(7,"div",6)(8,"span",7),e._uU(9,"$"),e.qZA(),e.TgZ(10,"input",8),e.NdJ("ngModelChange",function(){return t.calculate()})("ngModelChange",function(a){return t.bill=a}),e.qZA()()(),e.TgZ(11,"div",9)(12,"div",6)(13,"label"),e._uU(14,"Tip:"),e.qZA(),e.TgZ(15,"input",10),e.NdJ("ngModelChange",function(){return t.calculate()})("ngModelChange",function(a){return t.tip=a}),e.qZA(),e._UZ(16,"span",7),e.qZA()()(),e._UZ(17,"hr"),e.TgZ(18,"div",11)(19,"h5"),e._uU(20,"Results"),e.qZA(),e.TgZ(21,"div",5)(22,"div",6)(23,"span",7),e._uU(24,"Tip amount"),e.qZA(),e.TgZ(25,"input",12),e.NdJ("ngModelChange",function(a){return t.tipAmount=a}),e.qZA()()(),e.TgZ(26,"div",5)(27,"div",6)(28,"span",7),e._uU(29,"Total Bill with Tip"),e.qZA(),e.TgZ(30,"input",12),e.NdJ("ngModelChange",function(a){return t.totalBillWithTip=a}),e.qZA()()()()()()()),2&o&&(e.xp6(10),e.Q6J("ngModel",t.bill)("ngModelOptions",e.DdM(8,h)),e.xp6(5),e.Q6J("ngModel",t.tip)("ngModelOptions",e.DdM(9,h)),e.xp6(10),e.Q6J("ngModel",t.tipAmount)("ngModelOptions",e.DdM(10,h)),e.xp6(5),e.Q6J("ngModel",t.totalBillWithTip)("ngModelOptions",e.DdM(11,h)))},dependencies:[s._Y,s.Fj,s.wV,s.eT,s.JJ,s.JL,s.On,s.F]})}return n})(),I=(()=>{class n{constructor(){this.profitMargin=0,this.dealerProfit=0,this.retailerProfit=0}ngOnInit(){}productionCostGSTUpdated(){this.dealerPrice=this.productionCostGST+this.profitMargin,this.dealerPriceGST=this.productionCostGST+1.18*this.profitMargin,this.retailerPrice=this.dealerPriceGST+this.dealerProfit,this.retailerPriceGST=this.dealerPriceGST+1.18*this.dealerProfit,this.customerPrice=this.retailerPriceGST+this.retailerProfit,this.customerPriceGST=this.retailerPriceGST+1.18*this.retailerProfit}profitMarginUpdated(){this.dealerPrice=this.productionCostGST+this.profitMargin,this.dealerPriceGST=this.productionCostGST+1.18*this.profitMargin,this.retailerPrice=this.dealerPriceGST+this.dealerProfit,this.retailerPriceGST=this.dealerPriceGST+1.18*this.dealerProfit,this.customerPrice=this.retailerPriceGST+this.retailerProfit,this.customerPriceGST=this.retailerPriceGST+1.18*this.retailerProfit}dealerPriceGSTUpdated(){this.retailerPrice=this.dealerPriceGST+this.dealerProfit,this.retailerPriceGST=this.dealerPriceGST+1.18*this.dealerProfit,this.customerPrice=this.retailerPriceGST+this.retailerProfit,this.customerPriceGST=this.retailerPriceGST+1.18*this.retailerProfit,this.profitMargin=(this.dealerPriceGST-this.productionCostGST)/1.18,this.dealerPrice=this.productionCostGST+this.profitMargin}dealerProfitUpdated(){this.retailerPrice=this.dealerPriceGST+this.dealerProfit,this.retailerPriceGST=this.dealerPriceGST+1.18*this.dealerProfit,this.customerPrice=this.retailerPriceGST+this.retailerProfit,this.customerPriceGST=this.retailerPriceGST+1.18*this.retailerProfit}retailerPriceGSTUpdated(){this.customerPrice=this.retailerPriceGST+this.retailerProfit,this.customerPriceGST=this.retailerPriceGST+1.18*this.retailerProfit,this.dealerProfit=(this.retailerPriceGST-this.dealerPriceGST)/1.18,this.retailerPrice=this.dealerPriceGST+this.dealerProfit}retailerProfitUpdated(){this.customerPrice=this.retailerPriceGST+this.retailerProfit,this.customerPriceGST=this.retailerPriceGST+1.18*this.retailerProfit}customerPriceGSTUpdated(){this.retailerProfit=(this.customerPriceGST-this.retailerPriceGST)/1.18,this.customerPrice=this.retailerPriceGST+this.retailerProfit}static#e=this.\u0275fac=function(o){return new(o||n)};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-sales-margin"]],decls:59,vars:26,consts:[[1,"row"],[1,"col-6"],["type","number",3,"ngModel","ngModelChange"],["disabled","",3,"ngModel","ngModelChange"]],template:function(o,t){1&o&&(e.TgZ(0,"h6"),e._uU(1," Please Enter Values "),e.qZA(),e._UZ(2,"br"),e._uU(3,"\nGST @18% "),e.TgZ(4,"div",0)(5,"div",1),e._uU(6),e.ALo(7,"number"),e.qZA(),e.TgZ(8,"div",1),e._uU(9," \u20b9 "),e.TgZ(10,"input",2),e.NdJ("ngModelChange",function(){return t.productionCostGSTUpdated()})("ngModelChange",function(a){return t.productionCostGST=a}),e.qZA()(),e.TgZ(11,"div",1),e._uU(12," Profit Margin"),e.qZA(),e.TgZ(13,"div",1),e._uU(14," \u20b9 "),e.TgZ(15,"input",2),e.NdJ("ngModelChange",function(){return t.profitMarginUpdated()})("ngModelChange",function(a){return t.profitMargin=a}),e.qZA()(),e.TgZ(16,"div",1),e._uU(17," Dealer Price"),e.qZA(),e.TgZ(18,"div",1),e._uU(19," \u20b9 "),e.TgZ(20,"input",3),e.NdJ("ngModelChange",function(a){return t.dealerPrice=a}),e.qZA()(),e.TgZ(21,"div",1),e._uU(22),e.ALo(23,"number"),e.qZA(),e.TgZ(24,"div",1),e._uU(25," \u20b9 "),e.TgZ(26,"input",2),e.NdJ("ngModelChange",function(){return t.dealerPriceGSTUpdated()})("ngModelChange",function(a){return t.dealerPriceGST=a}),e.qZA()(),e.TgZ(27,"div",1),e._uU(28," Dealer Profit"),e.qZA(),e.TgZ(29,"div",1),e._uU(30," \u20b9 "),e.TgZ(31,"input",2),e.NdJ("ngModelChange",function(){return t.dealerProfitUpdated()})("ngModelChange",function(a){return t.dealerProfit=a}),e.qZA()(),e.TgZ(32,"div",1),e._uU(33," Retialer Price"),e.qZA(),e.TgZ(34,"div",1),e._uU(35," \u20b9 "),e.TgZ(36,"input",3),e.NdJ("ngModelChange",function(a){return t.retailerPrice=a}),e.qZA()(),e.TgZ(37,"div",1),e._uU(38),e.ALo(39,"number"),e.qZA(),e.TgZ(40,"div",1),e._uU(41," \u20b9 "),e.TgZ(42,"input",2),e.NdJ("ngModelChange",function(){return t.retailerPriceGSTUpdated()})("ngModelChange",function(a){return t.retailerPriceGST=a}),e.qZA()(),e.TgZ(43,"div",1),e._uU(44," Retailer Profit"),e.qZA(),e.TgZ(45,"div",1),e._uU(46," \u20b9 "),e.TgZ(47,"input",2),e.NdJ("ngModelChange",function(){return t.retailerProfitUpdated()})("ngModelChange",function(a){return t.retailerProfit=a}),e.qZA()(),e.TgZ(48,"div",1),e._uU(49," Customer Price"),e.qZA(),e.TgZ(50,"div",1),e._uU(51," \u20b9 "),e.TgZ(52,"input",3),e.NdJ("ngModelChange",function(a){return t.customerPrice=a}),e.qZA()(),e.TgZ(53,"div",1),e._uU(54),e.ALo(55,"number"),e.qZA(),e.TgZ(56,"div",1),e._uU(57," \u20b9 "),e.TgZ(58,"input",2),e.NdJ("ngModelChange",function(){return t.customerPriceGSTUpdated()})("ngModelChange",function(a){return t.customerPriceGST=a}),e.qZA()()()),2&o&&(e.xp6(6),e.hij(" Production Cost GST [\u20b9",e.xi3(7,14,t.productionCostGST-t.productionCostGST/1.18,"1.0-2"),"]"),e.xp6(4),e.Q6J("ngModel",t.productionCostGST),e.xp6(5),e.Q6J("ngModel",t.profitMargin),e.xp6(5),e.Q6J("ngModel",t.dealerPrice),e.xp6(2),e.hij(" Dealer Price GST [\u20b9",e.xi3(23,17,t.dealerPriceGST-t.dealerPriceGST/1.18,"1.0-2"),"]"),e.xp6(4),e.Q6J("ngModel",t.dealerPriceGST),e.xp6(5),e.Q6J("ngModel",t.dealerProfit),e.xp6(5),e.Q6J("ngModel",t.retailerPrice),e.xp6(2),e.hij(" Retailer Price GST [\u20b9",e.xi3(39,20,t.retailerPriceGST-t.retailerPriceGST/1.18,"1.0-2"),"]"),e.xp6(4),e.Q6J("ngModel",t.retailerPriceGST),e.xp6(5),e.Q6J("ngModel",t.retailerProfit),e.xp6(5),e.Q6J("ngModel",t.customerPrice),e.xp6(2),e.hij(" Customer Price +GST [\u20b9",e.xi3(55,23,t.customerPriceGST-t.customerPriceGST/1.18,"1.0-2"),"]"),e.xp6(4),e.Q6J("ngModel",t.customerPriceGST))},dependencies:[s.Fj,s.wV,s.JJ,s.On,d.JJ]})}return n})();const B=["first"],F=["iframe"],L=["btn"];let D=(()=>{class n{constructor(){}ngOnInit(){}ngAfterViewInit(){this.btn.nativeElement.addEventListener("click",()=>{this.iframe.nativeElement.src="data:text/html;charset=utf-8,"+encodeURI(this.first.nativeElement.textContent)}),this.first.nativeElement.addEventListener("keyup",()=>{this.iframe.nativeElement.src="data:text/html;charset=utf-8,"+encodeURI(this.first.nativeElement.textContent)}),this.first.nativeElement.addEventListener("paste",function(r){r.preventDefault();let o=r.clipboardData.getData("text/plain");document.execCommand("insertText",!1,o)})}static#e=this.\u0275fac=function(o){return new(o||n)};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-editor"]],viewQuery:function(o,t){if(1&o&&(e.Gf(B,5),e.Gf(F,5),e.Gf(L,5)),2&o){let i;e.iGM(i=e.CRH())&&(t.first=i.first),e.iGM(i=e.CRH())&&(t.iframe=i.first),e.iGM(i=e.CRH())&&(t.btn=i.first)}},decls:9,vars:0,consts:[[1,"main-editor"],[1,"btn"],["btn",""],["contenteditable","",1,"first"],["first",""],[1,"second"],["iframe",""]],template:function(o,t){1&o&&(e.TgZ(0,"div",0)(1,"button",1,2),e._uU(3,"Run"),e.qZA(),e.TgZ(4,"div",3,4),e._uU(6," writecode "),e.qZA(),e._UZ(7,"iframe",5,6),e.qZA())},styles:["*{box-sizing:border-box;padding:0;margin:0}.btn{poistion:fixed;right:0;padding:.4rem;width:4rem;background:rgb(0,0,0);color:gold;font-size:1rem;outline:none;cursor:pointer;height:90vh}.btn:hover{color:#fff;background:blue}.main-editor{background:rgba(0,0,0,.91);display:flex;width:100%;padding:1rem;box-shadow:0 2px 3px #000;position:fixed;height:100vh;justify-content:center;align-items:center;border:7px solid #36383f}.first,.second{box-shadow:0 1px 1px #161616;padding:.4rem;height:90vh;overflow-y:auto;white-space:pre;width:50%}.first{background-color:#fff;overflow-x:hidden;outline:none}.second{background-color:#fff;right:0}\n"],encapsulation:3})}return n})(),j=(()=>{class n{constructor(){}generateOtp(){return P()}generateColor(){return u()}generateGradient(){return w()}generatePassword(r){return function x(n){const l="ABCDEFGHIJKLMNOPQRSTUVWXYZ",r="abcdefghijklmnopqrstuvwxyz",o="0123456789",t="!@#$%^&*()_+=",i=l+r+o+t;let a="";for(a+=l[Math.floor(Math.random()*l.length)],a+=r[Math.floor(Math.random()*r.length)],a+=o[Math.floor(Math.random()*o.length)],a+=t[Math.floor(Math.random()*t.length)];n>a.length;)a+=i[Math.floor(Math.random()*i.length)];return a}(r)}generateQuote(){return(0,g.Z)(function*(){return yield y()})()}generateToss(){return S()}generateQrcode(r){if(r)return G(r)}getRandomUpperLetter(){return U()}static#e=this.\u0275fac=function(o){return new(o||n)};static#t=this.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function z(n,l){1&n&&(e.ynx(0),e._uU(1," \u2398 Copy "),e.BQk())}function E(n,l){1&n&&(e.ynx(0),e._uU(1," \u2399 Copied "),e.BQk())}let H=(()=>{class n{constructor(r){this.generateService=r,this.type="toss"}copyPassword(){navigator.clipboard.writeText(this.value),this.isCopy=!0}generate(){switch(this.type){case"otp":this.value=this.generateService.generateOtp();break;case"color":this.value=this.generateService.generateColor();break;case"gradient-color":this.value=this.generateService.generateGradient();break;case"password":this.value=this.generateService.generatePassword(12);break;case"quote":this.generateService.generateQuote().then(r=>{this.value=r});break;case"toss":this.value=this.generateService.generateToss()}this.isCopy=!1}static#e=this.\u0275fac=function(o){return new(o||n)(e.Y36(j))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-generate"]],inputs:{type:"type"},decls:13,vars:6,consts:[[1,"content"],[1,"input-block"],["readonly","",3,"value"],[3,"click"],[4,"ngIf"]],template:function(o,t){1&o&&(e.TgZ(0,"div",0)(1,"h1"),e._uU(2,"Generate "),e.TgZ(3,"span"),e._uU(4),e.ALo(5,"titlecase"),e.qZA()(),e.TgZ(6,"div",1),e._UZ(7,"input",2),e.TgZ(8,"button",3),e.NdJ("click",function(){return t.copyPassword()}),e.YNc(9,z,2,0,"ng-container",4),e.YNc(10,E,2,0,"ng-container",4),e.qZA()(),e.TgZ(11,"button",3),e.NdJ("click",function(){return t.generate()}),e._uU(12,"Generate Password"),e.qZA()()),2&o&&(e.xp6(4),e.hij("Random ",e.lcZ(5,4,t.type),""),e.xp6(3),e.s9C("value",t.value),e.xp6(2),e.Q6J("ngIf",!t.isCopy),e.xp6(1),e.Q6J("ngIf",t.isCopy))},dependencies:[d.O5,d.rS],styles:['[_nghost-%COMP%]{--font-family-generic: system-ui, sans-serif;--font-family-custom: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, sans-serif;--primary: #A1AFA0;--secondary: #3D4A3D;--accent: #1C682A;--dark: #002240;--light: #f4f4f4;--success: #5cb85c;--error: #d9534f;--warning: #FF7D00}*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}[_nghost-%COMP%]{--primary: #002339;--secondary: #fff;--accent: #019f55;font-family:var(--font-family-generic),serif;display:grid;place-items:center;min-height:100vh;background:var(--primary);color:var(--secondary)}.content[_ngcontent-%COMP%]{max-width:700px;width:100%;display:flex;flex-direction:column;gap:1.5rem;padding:1rem}.content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-weight:500;font-size:2rem}.content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;color:var(--accent);border-bottom:4px solid var(--accent);padding-bottom:7px}.input-block[_ngcontent-%COMP%]{background:var(--secondary);color:#333;display:flex;align-items:center;justify-content:space-between;padding:1rem;border-radius:5px}input[_ngcontent-%COMP%]{border:0;outline:0;font-size:1.5rem;width:100%;background:var(--secondary)}button[_ngcontent-%COMP%]{border:0;outline:0;background:var(--accent);color:var(--secondary);font-size:1.2rem;font-weight:300;display:flex;align-items:center;justify-content:center;padding:.5rem 1rem;border-radius:5px;cursor:pointer;text-wrap:nowrap}']})}return n})();const Y=[{path:"",component:(()=>{class n{static#e=this.\u0275fac=function(o){return new(o||n)};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-tools"]],decls:15,vars:0,consts:[["tabTitle","password generator"],["tabTitle","images"],["tabTitle","random"],["tabTitle","Tip"],["tabTitle","sales-margin"],["tabTitle","app-editor"],["tabTitle","app-generate pass"]],template:function(o,t){1&o&&(e.TgZ(0,"ng-tabs")(1,"ng-tab",0),e._UZ(2,"app-password-generator"),e.qZA(),e.TgZ(3,"ng-tab",1),e._UZ(4,"app-images"),e.qZA(),e.TgZ(5,"ng-tab",2),e._UZ(6,"app-random"),e.qZA(),e.TgZ(7,"ng-tab",3),e._UZ(8,"app-tip-calculate"),e.qZA(),e.TgZ(9,"ng-tab",4),e._UZ(10,"app-sales-margin"),e.qZA(),e.TgZ(11,"ng-tab",5),e._UZ(12,"app-editor"),e.qZA(),e.TgZ(13,"ng-tab",6),e._UZ(14,"app-generate"),e.qZA()())},dependencies:[m.n4,m.id,A,k,R,N,I,D,H]})}return n})()}];let X=(()=>{class n{static#e=this.\u0275fac=function(o){return new(o||n)};static#t=this.\u0275mod=e.oAB({type:n});static#n=this.\u0275inj=e.cJS({imports:[_.Bz.forChild(Y),_.Bz]})}return n})(),$=(()=>{class n{static#e=this.\u0275fac=function(o){return new(o||n)};static#t=this.\u0275mod=e.oAB({type:n});static#n=this.\u0275inj=e.cJS({imports:[d.ez,X,m.P4,s.u5]})}return n})()}}]);