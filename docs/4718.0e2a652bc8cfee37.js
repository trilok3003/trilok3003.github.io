"use strict";(self.webpackChunkportfolio_all_in_one=self.webpackChunkportfolio_all_in_one||[]).push([[4718],{4718:(M,_,c)=>{c.r(_),c.d(_,{MoneyModule:()=>y});var p=c(6895),Z=c(4793),t=c(4650),g=c(1189);function T(n,l){if(1&n){const e=t.EpF();t.TgZ(0,"div",7)(1,"main",8)(2,"div",9),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.onToggleBtnClick("new"))}),t._uU(3," New Task "),t.qZA(),t.TgZ(4,"div",9),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.onToggleBtnClick("view"))}),t._uU(5," View Task "),t.qZA()()()}if(2&n){const e=t.oxw();t.xp6(2),t.ekj("active-btn","new"===e.activeBtn),t.xp6(2),t.ekj("active-btn","view"===e.activeBtn)}}let m=(()=>{class n{constructor(){this.statementData=[],this.onToggleChange=new t.vpe,this.activeBtn="new"}ngOnInit(){this.totalBalance=1e3}getTransaction(e){this.totalBalance="credit"===e.type?this.totalBalance+e.amount:this.totalBalance-e.amount,this.statementData=[...this.statementData,e]}onToggleBtnClick(e){this.activeBtn=e,this.onToggleChange.emit(e)}static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-credit-debit"]],outputs:{onToggleChange:"onToggleChange"},decls:11,vars:4,consts:[[1,"container"],[1,"balance"],[1,"transactions"],[3,"currentBalance","sendTransaction"],[1,"statement"],[3,"statementData"],["class","tabs",4,"ngIf"],[1,"tabs"],[1,"container-tab"],[1,"item",3,"click"]],template:function(o,a){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"b"),t._uU(3,"Available Balance"),t.qZA(),t.TgZ(4,"h1"),t._uU(5),t.qZA()(),t.TgZ(6,"div",2)(7,"app-transaction",3),t.NdJ("sendTransaction",function(i){return a.getTransaction(i)}),t.qZA()()(),t.TgZ(8,"div",4),t._UZ(9,"app-statements",5),t.qZA(),t.YNc(10,T,6,4,"div",6)),2&o&&(t.xp6(5),t.hij("$ ",a.totalBalance,""),t.xp6(2),t.Q6J("currentBalance",a.totalBalance),t.xp6(2),t.Q6J("statementData",a.statementData),t.xp6(1),t.Q6J("ngIf",!1))},styles:["*{font-family:Verdana,Geneva,Tahoma,sans-serif;background-color:#f0f8ff}.container{border:1px solid black;padding:25px 60px;display:flex;gap:100px;justify-content:space-between;margin:50px}.statement{margin:10px 50px 50px;border:1px solid black;min-height:50vh}.tabs .container-tab{display:flex}.tabs .item{width:50%;text-align:center;vertical-align:bottom;height:50px;display:flex;align-items:center;justify-content:center;cursor:pointer;border-radius:5px}.tabs .active-btn{background-color:#0b0b52;color:#fff}\n"],encapsulation:3})}return n})();var r=c(4006);function h(n,l){if(1&n){const e=t.EpF();t.TgZ(0,"li",11),t._uU(1),t.TgZ(2,"span"),t._uU(3),t.qZA(),t.TgZ(4,"button",12),t.NdJ("click",function(){const s=t.CHM(e).$implicit,i=t.oxw();return t.KtG(i.removeTransaction(s.id))}),t._uU(5,"x"),t.qZA()()}if(2&n){const e=l.$implicit,o=t.oxw();t.Q6J("ngClass",e.amount<0?"minus":"plus"),t.xp6(1),t.hij(" ",e.text," "),t.xp6(2),t.AsE("",e.amount<0?"-":"+","",o.abs(e.amount),"")}}let x=(()=>{class n{constructor(e){this.fb=e,this.dummyTransactions=[{id:1,text:"Flower",amount:-20},{id:2,text:"Salary",amount:300},{id:3,text:"Book",amount:-10},{id:4,text:"Camera",amount:150}],this.transactions=null!==localStorage.getItem("transactions")?this.localStorageTransactions:[],this.form=this.fb.group({text:["",r.kI.required],amount:["",r.kI.required]}),this.init()}get localStorageTransactions(){return JSON.parse(localStorage.getItem("transactions"))}addTransaction(){if(this.form.invalid)alert("Please add a text and amount");else{const e={id:this.generateID(),text:this.form.get("text").value,amount:+this.form.get("amount").value};this.transactions.push(e),this.init(),this.form.reset()}}generateID(){return Math.floor(1e8*Math.random())}abs(e){return Math.abs(e)}removeTransaction(e){this.transactions=this.transactions.filter(o=>o.id!==e),this.init()}updateLocalStorage(){localStorage.setItem("transactions",JSON.stringify(this.transactions))}init(){this.updateLocalStorage(),this.updateValues()}updateValues(){const e=this.transactions.map(i=>i.amount),o=e.reduce((i,u)=>i+u,0).toFixed(2),a=e.filter(i=>i>0).reduce((i,u)=>i+u,0).toFixed(2),s=(-1*e.filter(i=>i<0).reduce((i,u)=>i+u,0)).toFixed(2);this.balance=`$${o}`,this.moneyPlus=`$${a}`,this.moneyMinus=`$${s}`}ngOnInit(){}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(r.qu))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-expense-tracker"]],decls:39,vars:5,consts:[[1,"expense-wrapper"],[3,"formGroup"],[1,"form-control"],["formControlName","text","placeholder","Enter text...","type","text"],["formControlName","amount","placeholder","Enter amount...","type","number"],[1,"btn",3,"click"],[1,"inc-exp-container"],[1,"money","plus"],[1,"money","minus"],[1,"list"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"ngClass"],[1,"delete-btn",3,"click"]],template:function(o,a){1&o&&(t.TgZ(0,"h2"),t._uU(1,"Expense Tracker"),t.qZA(),t.TgZ(2,"section",0)(3,"div")(4,"h3"),t._uU(5,"Add new transaction"),t.qZA(),t.TgZ(6,"form",1)(7,"div",2)(8,"label"),t._uU(9,"Text"),t.qZA(),t._UZ(10,"input",3),t.qZA(),t.TgZ(11,"div",2)(12,"label"),t._uU(13,"Amount "),t._UZ(14,"br"),t._uU(15," (negative - expense, positive - income)"),t.qZA(),t._UZ(16,"input",4),t.qZA(),t.TgZ(17,"button",5),t.NdJ("click",function(){return a.addTransaction()}),t._uU(18,"Add transaction"),t.qZA()()(),t.TgZ(19,"div")(20,"h4"),t._uU(21,"Your Balance"),t.qZA(),t.TgZ(22,"h1"),t._uU(23),t.qZA(),t.TgZ(24,"div",6)(25,"div")(26,"h4"),t._uU(27,"Income"),t.qZA(),t.TgZ(28,"p",7),t._uU(29),t.qZA()(),t.TgZ(30,"div")(31,"h4"),t._uU(32,"Expense"),t.qZA(),t.TgZ(33,"p",8),t._uU(34),t.qZA()()(),t.TgZ(35,"h3"),t._uU(36,"History"),t.qZA(),t.TgZ(37,"ul",9),t.YNc(38,h,6,4,"li",10),t.qZA()()()),2&o&&(t.xp6(6),t.Q6J("formGroup",a.form),t.xp6(17),t.Oqu(a.balance),t.xp6(6),t.Oqu(a.moneyPlus),t.xp6(5),t.Oqu(a.moneyMinus),t.xp6(4),t.Q6J("ngForOf",a.transactions))},dependencies:[p.mk,p.sg,r._Y,r.Fj,r.wV,r.JJ,r.JL,r.sg,r.u],styles:[":host{--box-shadow: 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24);background-color:#f7f7f7;min-height:100vh;margin:0;font-family:Lato,sans-serif}*{box-sizing:border-box}.expense-wrapper{display:grid;grid-template-columns:1fr 2fr;gap:1rem}.expense-wrapper>div{border:1px solid var(--custom-primary);box-shadow:var(--box-shadow);border-radius:20px;padding:1rem}h1{letter-spacing:1px;margin:0}h3{border-bottom:1px solid #bbb;padding-bottom:10px;margin:40px 0 10px}h4{margin:0;text-transform:uppercase}.inc-exp-container{background-color:#fff;box-shadow:var(--box-shadow);padding:20px;display:flex;justify-content:space-between;margin:20px 0}.inc-exp-container>div{flex:1;text-align:center;box-shadow:var(--box-shadow)}.inc-exp-container>div:first-of-type{border-right:1px solid #dedede}.money{font-size:20px;letter-spacing:1px;margin:5px 0}.money.plus{color:#2ecc71}.money.minus{color:#c0392b}label{display:inline-block;margin:10px 0}input[type=text],input[type=number]{border:1px solid #dedede;border-radius:2px;display:block;font-size:16px;padding:10px;width:100%}.btn{cursor:pointer;background-color:#9c88ff;box-shadow:var(--box-shadow);color:#fff;border:0;display:block;font-size:16px;margin:10px 0 30px;padding:10px;width:100%}.btn:focus,.delete-btn:focus{outline:0}.list{list-style-type:none;padding:0;margin-bottom:40px}.list li{background-color:#fff;box-shadow:var(--box-shadow);color:#333;display:flex;justify-content:space-between;position:relative;padding:10px;margin:10px 0}.list li.plus{border-right:5px solid #2ecc71}.list li.minus{border-right:5px solid #c0392b}.delete-btn{cursor:pointer;background-color:#e74c3c;border:0;color:#fff;font-size:20px;line-height:20px;padding:2px 5px;position:absolute;top:50%;right:0;transform:translate(-100%,-50%);opacity:0;transition:opacity .3s ease}.list li:hover .delete-btn{opacity:1}\n"],encapsulation:3})}return n})(),A=(()=>{class n{constructor(){this.currencyOne="USD",this.currencyTwo="EUR",this.amountOne=1}ngOnInit(){this.calculate()}calculate(){fetch(`https://api.exchangerate-api.com/v4/latest/${this.currencyOne}`).then(e=>e.json()).then(e=>{const o=e.rates[this.currencyTwo];this.rate=`1 ${this.currencyOne} = ${o} ${this.currencyTwo}`,this.amountTwo=(this.amountOne*o).toFixed(2)})}swap(){const e=this.currencyOne;this.currencyOne=this.currencyTwo,this.currencyTwo=e,this.calculate()}static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-exchange-rates"]],decls:225,vars:5,consts:[[1,"container"],[1,"currency"],[3,"ngModel","ngModelChange"],["value","AED"],["value","ARS"],["value","AUD"],["value","BGN"],["value","BRL"],["value","BSD"],["value","CAD"],["value","CHF"],["value","CLP"],["value","CNY"],["value","COP"],["value","CZK"],["value","DKK"],["value","DOP"],["value","EGP"],["value","EUR"],["value","FJD"],["value","GBP"],["value","GTQ"],["value","HKD"],["value","HRK"],["value","HUF"],["value","IDR"],["value","ILS"],["value","INR"],["value","ISK"],["value","JPY"],["value","KRW"],["value","KZT"],["value","MXN"],["value","MYR"],["value","NOK"],["value","NZD"],["value","PAB"],["value","PEN"],["value","PHP"],["value","PKR"],["value","PLN"],["value","PYG"],["value","RON"],["value","RUB"],["value","SAR"],["value","SEK"],["value","SGD"],["value","THB"],["value","TRY"],["value","TWD"],["value","UAH"],["value","USD"],["value","UYU"],["value","VND"],["value","ZAR"],["type","number","placeholder","0","value","1",3,"ngModel","ngModelChange"],[1,"swap-rate-container"],[1,"btn",3,"click"],[1,"rate"],["type","number","placeholder","0",3,"ngModel","ngModelChange"]],template:function(o,a){1&o&&(t.TgZ(0,"section")(1,"h1"),t._uU(2,"Exchange Rate Calculator"),t.qZA(),t.TgZ(3,"p"),t._uU(4,"Choose the currency and the amounts to get the exchange rate"),t.qZA(),t.TgZ(5,"div",0)(6,"div",1)(7,"select",2),t.NdJ("ngModelChange",function(i){return a.currencyOne=i})("ngModelChange",function(){return a.calculate()}),t.TgZ(8,"option",3),t._uU(9,"AED"),t.qZA(),t.TgZ(10,"option",4),t._uU(11,"ARS"),t.qZA(),t.TgZ(12,"option",5),t._uU(13,"AUD"),t.qZA(),t.TgZ(14,"option",6),t._uU(15,"BGN"),t.qZA(),t.TgZ(16,"option",7),t._uU(17,"BRL"),t.qZA(),t.TgZ(18,"option",8),t._uU(19,"BSD"),t.qZA(),t.TgZ(20,"option",9),t._uU(21,"CAD"),t.qZA(),t.TgZ(22,"option",10),t._uU(23,"CHF"),t.qZA(),t.TgZ(24,"option",11),t._uU(25,"CLP"),t.qZA(),t.TgZ(26,"option",12),t._uU(27,"CNY"),t.qZA(),t.TgZ(28,"option",13),t._uU(29,"COP"),t.qZA(),t.TgZ(30,"option",14),t._uU(31,"CZK"),t.qZA(),t.TgZ(32,"option",15),t._uU(33,"DKK"),t.qZA(),t.TgZ(34,"option",16),t._uU(35,"DOP"),t.qZA(),t.TgZ(36,"option",17),t._uU(37,"EGP"),t.qZA(),t.TgZ(38,"option",18),t._uU(39,"EUR"),t.qZA(),t.TgZ(40,"option",19),t._uU(41,"FJD"),t.qZA(),t.TgZ(42,"option",20),t._uU(43,"GBP"),t.qZA(),t.TgZ(44,"option",21),t._uU(45,"GTQ"),t.qZA(),t.TgZ(46,"option",22),t._uU(47,"HKD"),t.qZA(),t.TgZ(48,"option",23),t._uU(49,"HRK"),t.qZA(),t.TgZ(50,"option",24),t._uU(51,"HUF"),t.qZA(),t.TgZ(52,"option",25),t._uU(53,"IDR"),t.qZA(),t.TgZ(54,"option",26),t._uU(55,"ILS"),t.qZA(),t.TgZ(56,"option",27),t._uU(57,"INR"),t.qZA(),t.TgZ(58,"option",28),t._uU(59,"ISK"),t.qZA(),t.TgZ(60,"option",29),t._uU(61,"JPY"),t.qZA(),t.TgZ(62,"option",30),t._uU(63,"KRW"),t.qZA(),t.TgZ(64,"option",31),t._uU(65,"KZT"),t.qZA(),t.TgZ(66,"option",32),t._uU(67,"MXN"),t.qZA(),t.TgZ(68,"option",33),t._uU(69,"MYR"),t.qZA(),t.TgZ(70,"option",34),t._uU(71,"NOK"),t.qZA(),t.TgZ(72,"option",35),t._uU(73,"NZD"),t.qZA(),t.TgZ(74,"option",36),t._uU(75,"PAB"),t.qZA(),t.TgZ(76,"option",37),t._uU(77,"PEN"),t.qZA(),t.TgZ(78,"option",38),t._uU(79,"PHP"),t.qZA(),t.TgZ(80,"option",39),t._uU(81,"PKR"),t.qZA(),t.TgZ(82,"option",40),t._uU(83,"PLN"),t.qZA(),t.TgZ(84,"option",41),t._uU(85,"PYG"),t.qZA(),t.TgZ(86,"option",42),t._uU(87,"RON"),t.qZA(),t.TgZ(88,"option",43),t._uU(89,"RUB"),t.qZA(),t.TgZ(90,"option",44),t._uU(91,"SAR"),t.qZA(),t.TgZ(92,"option",45),t._uU(93,"SEK"),t.qZA(),t.TgZ(94,"option",46),t._uU(95,"SGD"),t.qZA(),t.TgZ(96,"option",47),t._uU(97,"THB"),t.qZA(),t.TgZ(98,"option",48),t._uU(99,"TRY"),t.qZA(),t.TgZ(100,"option",49),t._uU(101,"TWD"),t.qZA(),t.TgZ(102,"option",50),t._uU(103,"UAH"),t.qZA(),t.TgZ(104,"option",51),t._uU(105,"USD"),t.qZA(),t.TgZ(106,"option",52),t._uU(107,"UYU"),t.qZA(),t.TgZ(108,"option",53),t._uU(109,"VND"),t.qZA(),t.TgZ(110,"option",54),t._uU(111,"ZAR"),t.qZA()(),t.TgZ(112,"input",55),t.NdJ("ngModelChange",function(i){return a.amountOne=i})("ngModelChange",function(){return a.calculate()}),t.qZA()(),t.TgZ(113,"div",56)(114,"button",57),t.NdJ("click",function(){return a.swap()}),t._uU(115," Swap "),t.qZA(),t.TgZ(116,"div",58),t._uU(117),t.qZA()(),t.TgZ(118,"div",1)(119,"select",2),t.NdJ("ngModelChange",function(i){return a.currencyTwo=i})("ngModelChange",function(){return a.calculate()}),t.TgZ(120,"option",3),t._uU(121,"AED"),t.qZA(),t.TgZ(122,"option",4),t._uU(123,"ARS"),t.qZA(),t.TgZ(124,"option",5),t._uU(125,"AUD"),t.qZA(),t.TgZ(126,"option",6),t._uU(127,"BGN"),t.qZA(),t.TgZ(128,"option",7),t._uU(129,"BRL"),t.qZA(),t.TgZ(130,"option",8),t._uU(131,"BSD"),t.qZA(),t.TgZ(132,"option",9),t._uU(133,"CAD"),t.qZA(),t.TgZ(134,"option",10),t._uU(135,"CHF"),t.qZA(),t.TgZ(136,"option",11),t._uU(137,"CLP"),t.qZA(),t.TgZ(138,"option",12),t._uU(139,"CNY"),t.qZA(),t.TgZ(140,"option",13),t._uU(141,"COP"),t.qZA(),t.TgZ(142,"option",14),t._uU(143,"CZK"),t.qZA(),t.TgZ(144,"option",15),t._uU(145,"DKK"),t.qZA(),t.TgZ(146,"option",16),t._uU(147,"DOP"),t.qZA(),t.TgZ(148,"option",17),t._uU(149,"EGP"),t.qZA(),t.TgZ(150,"option",18),t._uU(151,"EUR"),t.qZA(),t.TgZ(152,"option",19),t._uU(153,"FJD"),t.qZA(),t.TgZ(154,"option",20),t._uU(155,"GBP"),t.qZA(),t.TgZ(156,"option",21),t._uU(157,"GTQ"),t.qZA(),t.TgZ(158,"option",22),t._uU(159,"HKD"),t.qZA(),t.TgZ(160,"option",23),t._uU(161,"HRK"),t.qZA(),t.TgZ(162,"option",24),t._uU(163,"HUF"),t.qZA(),t.TgZ(164,"option",25),t._uU(165,"IDR"),t.qZA(),t.TgZ(166,"option",26),t._uU(167,"ILS"),t.qZA(),t.TgZ(168,"option",27),t._uU(169,"INR"),t.qZA(),t.TgZ(170,"option",28),t._uU(171,"ISK"),t.qZA(),t.TgZ(172,"option",29),t._uU(173,"JPY"),t.qZA(),t.TgZ(174,"option",30),t._uU(175,"KRW"),t.qZA(),t.TgZ(176,"option",31),t._uU(177,"KZT"),t.qZA(),t.TgZ(178,"option",32),t._uU(179,"MXN"),t.qZA(),t.TgZ(180,"option",33),t._uU(181,"MYR"),t.qZA(),t.TgZ(182,"option",34),t._uU(183,"NOK"),t.qZA(),t.TgZ(184,"option",35),t._uU(185,"NZD"),t.qZA(),t.TgZ(186,"option",36),t._uU(187,"PAB"),t.qZA(),t.TgZ(188,"option",37),t._uU(189,"PEN"),t.qZA(),t.TgZ(190,"option",38),t._uU(191,"PHP"),t.qZA(),t.TgZ(192,"option",39),t._uU(193,"PKR"),t.qZA(),t.TgZ(194,"option",40),t._uU(195,"PLN"),t.qZA(),t.TgZ(196,"option",41),t._uU(197,"PYG"),t.qZA(),t.TgZ(198,"option",42),t._uU(199,"RON"),t.qZA(),t.TgZ(200,"option",43),t._uU(201,"RUB"),t.qZA(),t.TgZ(202,"option",44),t._uU(203,"SAR"),t.qZA(),t.TgZ(204,"option",45),t._uU(205,"SEK"),t.qZA(),t.TgZ(206,"option",46),t._uU(207,"SGD"),t.qZA(),t.TgZ(208,"option",47),t._uU(209,"THB"),t.qZA(),t.TgZ(210,"option",48),t._uU(211,"TRY"),t.qZA(),t.TgZ(212,"option",49),t._uU(213,"TWD"),t.qZA(),t.TgZ(214,"option",50),t._uU(215,"UAH"),t.qZA(),t.TgZ(216,"option",51),t._uU(217,"USD"),t.qZA(),t.TgZ(218,"option",52),t._uU(219,"UYU"),t.qZA(),t.TgZ(220,"option",53),t._uU(221,"VND"),t.qZA(),t.TgZ(222,"option",54),t._uU(223,"ZAR"),t.qZA()(),t.TgZ(224,"input",59),t.NdJ("ngModelChange",function(i){return a.amountTwo=i})("ngModelChange",function(){return a.calculate()}),t.qZA()()()()),2&o&&(t.xp6(7),t.Q6J("ngModel",a.currencyOne),t.xp6(105),t.Q6J("ngModel",a.amountOne),t.xp6(5),t.Oqu(a.rate),t.xp6(2),t.Q6J("ngModel",a.currencyTwo),t.xp6(105),t.Q6J("ngModel",a.amountTwo))},dependencies:[r.YN,r.Kr,r.Fj,r.wV,r.EJ,r.JJ,r.On],styles:[":host{background-color:var(--custom-primary);display:grid;place-items:center;height:100vh;margin:0;padding:20px}*{box-sizing:border-box}section{background-color:var(--custom-secondary);padding:1rem;box-shadow:0 4px 10px #00000080;border-radius:10px}h1{color:var(--custom-primary)}p{text-align:center;color:var(--custom-primary);font-weight:lighter}.btn{color:var(--custom-primary);background:var(--custom-accent);cursor:pointer;border-radius:5px;font-size:12px;padding:5px 12px}.currency{padding:40px 0;display:flex;align-items:center;justify-content:space-between}.currency select{padding:10px 20px 10px 10px;border:1px solid #dedede;font-size:16px}.currency input{border:0;background:transparent;font-size:30px;text-align:right}.swap-rate-container{display:flex;align-items:center;justify-content:space-between}.rate{color:var(--custom-primary);font-size:14px;padding:0 10px}select:focus,input:focus,button:focus{outline:0}@media (max-width: 600px){.currency input{width:200px}}\n"],encapsulation:3})}return n})();const f=[{path:"",component:(()=>{class n{constructor(){}ngOnInit(){}static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-money"]],decls:7,vars:0,consts:[["tabTitle","expense-tracker"],["tabTitle","credit-debit"],["tabTitle","app-exchange-rates"]],template:function(o,a){1&o&&(t.TgZ(0,"ng-tabs")(1,"ng-tab",0),t._UZ(2,"app-expense-tracker"),t.qZA(),t.TgZ(3,"ng-tab",1),t._UZ(4,"app-credit-debit"),t.qZA(),t.TgZ(5,"ng-tab",2),t._UZ(6,"app-exchange-rates"),t.qZA()())},dependencies:[g.n4,g.id,m,x,A]})}return n})()}];let U=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[Z.Bz.forChild(f),Z.Bz]})}return n})(),b=(()=>{class n{constructor(){this.sendTransaction=new t.vpe,this.MONTH=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}ngOnInit(){}credit(){this.errorMsg="",this.checkValueRange()&&this.doTransaction("credit")}debit(){if(this.errorMsg="",this.checkValueRange()){if(this.amount>this.currentBalance)return void(this.errorMsg="current balance is lower than mentioned");this.doTransaction("debit")}}doTransaction(e){let o=new Date;this.trasaction={currentBalance:this.currentBalance,amount:this.amount,reason:this.reason,type:e,date:o.getDate()+"-"+this.MONTH[o.getMonth()]+"-"+o.getFullYear()},this.sendTransaction.emit(this.trasaction),this.amount="",this.reason=""}checkValueRange(){return!(this.amount<=0&&(this.errorMsg="Amount should be greater than 0",1))}static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-transaction"]],inputs:{currentBalance:"currentBalance"},outputs:{sendTransaction:"sendTransaction"},decls:18,vars:5,consts:[[1,"transactions"],[1,"transactions__data"],[1,"transactions__value"],["name","amount","type","number",3,"ngModel","ngModelChange"],["type","text","name","reason",3,"ngModel","ngModelChange"],[1,"transaction__error"],[1,"transactions__control"],[3,"disabled","click"]],template:function(o,a){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"label"),t._uU(4,"Enter amount"),t.qZA(),t.TgZ(5,"input",3),t.NdJ("ngModelChange",function(i){return a.amount=i}),t.qZA()(),t.TgZ(6,"div",2)(7,"label"),t._uU(8,"Reason"),t.qZA(),t.TgZ(9,"textarea",4),t.NdJ("ngModelChange",function(i){return a.reason=i}),t.qZA()()(),t.TgZ(10,"div",5)(11,"p"),t._uU(12),t.qZA()(),t.TgZ(13,"div",6)(14,"button",7),t.NdJ("click",function(){return a.credit()}),t._uU(15,"Credit"),t.qZA(),t.TgZ(16,"button",7),t.NdJ("click",function(){return a.debit()}),t._uU(17,"Debit"),t.qZA()()()),2&o&&(t.xp6(5),t.Q6J("ngModel",a.amount),t.xp6(4),t.Q6J("ngModel",a.reason),t.xp6(3),t.Oqu(a.errorMsg),t.xp6(2),t.Q6J("disabled",!a.amount),t.xp6(2),t.Q6J("disabled",!a.amount))},dependencies:[r.Fj,r.wV,r.JJ,r.On],styles:[".transactions__data[_ngcontent-%COMP%]{display:flex;gap:50px}.transactions__control[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.transactions__control[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:10px;padding:10px 20px;background-color:bisque;cursor:pointer}.transaction__error[_ngcontent-%COMP%]{color:red}.transactions__value[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:min-content;gap:10px}input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{height:62px;font-size:30px;padding:10px;width:7em;text-align:center;vertical-align:middle}textarea[_ngcontent-%COMP%]{text-align:center}button[_ngcontent-%COMP%]:disabled{cursor:not-allowed}"]})}return n})(),q=(()=>{class n{constructor(){this.selectedStatementType="all"}getStatementType(){return this.selectedStatementType}setStatementType(e){this.selectedStatementType=e}static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function v(n,l){if(1&n&&(t.ynx(0),t.TgZ(1,"div",5)(2,"b"),t._uU(3),t.qZA(),t.TgZ(4,"p"),t._uU(5),t.qZA(),t.TgZ(6,"p"),t._uU(7),t.qZA(),t.TgZ(8,"p"),t._uU(9," Amount: "),t.TgZ(10,"span"),t._uU(11),t.qZA(),t._uU(12),t.qZA(),t.TgZ(13,"p"),t._uU(14),t.qZA()(),t.BQk()),2&n){const e=l.$implicit;t.xp6(3),t.Oqu(e.reason),t.xp6(2),t.hij("Balance Rs: ",e.currentBalance,""),t.xp6(2),t.hij("Type: ",e.type,""),t.xp6(4),t.Oqu("credit"===e.type?"+":"-"),t.xp6(1),t.hij("",e.amount," "),t.xp6(2),t.hij("Date: ",e.date,"")}}const d=function(n){return{active:n}};let C=(()=>{class n{constructor(e){this.statementService=e,this.statementType="all"}ngOnInit(){}ngOnChanges(e){this.showStatement(this.statementType)}showStatement(e){this.statementType=e,this.statementService.setStatementType(e),this.selectedStatementData="all"===e?this.statementData:this.statementData.filter(o=>o.type===e)}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(q))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-statements"]],inputs:{statementData:"statementData"},features:[t.TTD],decls:10,vars:10,consts:[[1,"statement"],[1,"statement__control"],[3,"ngClass","click"],[1,"statement__data"],[4,"ngFor","ngForOf"],[1,"statement__box"]],template:function(o,a){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"button",2),t.NdJ("click",function(){return a.showStatement("all")}),t._uU(3," All "),t.qZA(),t.TgZ(4,"button",2),t.NdJ("click",function(){return a.showStatement("credit")}),t._uU(5," Credit "),t.qZA(),t.TgZ(6,"button",2),t.NdJ("click",function(){return a.showStatement("debit")}),t._uU(7," Debit "),t.qZA()(),t.TgZ(8,"div",3),t.YNc(9,v,15,6,"ng-container",4),t.qZA()()),2&o&&(t.xp6(2),t.Q6J("ngClass",t.VKq(4,d,"all"===a.statementType)),t.xp6(2),t.Q6J("ngClass",t.VKq(6,d,"credit"===a.statementType)),t.xp6(2),t.Q6J("ngClass",t.VKq(8,d,"debit"===a.statementType)),t.xp6(3),t.Q6J("ngForOf",a.selectedStatementData))},dependencies:[p.mk,p.sg],styles:[".statements[_ngcontent-%COMP%]{border:1px solid black;margin:20px}.statement__data[_ngcontent-%COMP%]{display:flex;gap:10px;flex-wrap:wrap}.statement__box[_ngcontent-%COMP%]{border:1px solid grey;padding:15px;margin:10px;background-color:#deb887;border-radius:10px;box-shadow:0 4px 8px #0003,0 6px 20px #00000030}.statement__control[_ngcontent-%COMP%]{display:flex;justify-content:center;padding-top:20px}.statement__control[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:10px 30px;margin:10px;background-color:#87ceeb;color:#000;border:none;border-radius:5px;cursor:pointer}.active[_ngcontent-%COMP%]{background-color:#5aa85a!important;color:#fff!important}"]})}return n})(),y=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[p.ez,r.u5,r.UX,U,g.P4]})}return n})();t.B6R(m,[p.O5,b,C],[])}}]);