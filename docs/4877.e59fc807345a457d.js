"use strict";(self.webpackChunkportfolio_all_in_one=self.webpackChunkportfolio_all_in_one||[]).push([[4877],{6073:(M,m,i)=>{i.d(m,{c:()=>O});var n=i(9671),r=i(1384);function l(){return(l=(0,n.Z)(function*(c){const e=yield(yield fetch(c)).blob();return new Promise((t,a)=>{const o=new FileReader;o.addEventListener("load",function(){t(o.result)},!1),o.onerror=b=>a(b),o.readAsDataURL(e)})})).apply(this,arguments)}var x=i(4650);let O=(()=>{class c{constructor(){this.styles={header:{fontSize:14,bold:!0,margin:[0,10,0,0],color:"black",transform:"uppercase"},subheader:{fontSize:16,color:"#000",margin:[0,0,0,5]},name:{fontSize:16,bold:!0,color:"skyblue"},jobTitle:{fontSize:14,bold:!0,italics:!0},sign:{margin:[0,50,0,10],alignment:"right",italics:!0},tableHeader:{bold:!0},sectionHeader:{bold:!0,decoration:"underline",fontSize:14,margin:[0,15,0,15]},section:{fontSize:9,color:"#FFFFFF",fillColor:"#2361AE",margin:[0,15,0,5]},quote:{italics:!0},small:{fontSize:8}},this.info={title:"name_pdf",author:"trilok",subject:"Pdf Maker",keywords:"Pdf"},this.defaultStyle={alignment:"center"},this.experience=[{jobTitle:"Senior Software Engineer",employer:"Gaiasys",jobDescription:"Angular",experience:"2 years 10 months"}],this.educations=[{degree:"MCA",college:"UPTU",passingYear:"2014",percentage:75}],this.products=[{name:"milk",price:30,qty:10}],this.socialInfo=r.BV,this.dd={content:[{image:"picture13438908025659.jpg"},{text:"Patient's Detail",fontSize:18,bold:!0},{columns:[{text:"Patient's ID: ",bold:!1},{text:"Name: ",bold:!1},{text:"Age: ",bold:!1},{text:"Contact: ",bold:!1}]},{text:"Address: ",bold:!1}]},this.profileImage=r.tz,this.skills=["Angular","Type Script","Node js"]}loadPdfMaker(){var e=this;return(0,n.Z)(function*(){if(!e.pdfMake){const t=yield i.e(2725).then(i.t.bind(i,2725,23)),a=yield i.e(8493).then(i.t.bind(i,8493,19));e.pdfMake=t.default,e.pdfMake.vfs=a.default.pdfMake.vfs}})()}generateResumePdf(){var e=this;return(0,n.Z)(function*(){let t;yield e.loadPdfMaker(),yield function h(c){return l.apply(this,arguments)}(r.tz).then(o=>{t=o}).catch(o=>console.error(o));const a={pageMargins:[10,5,10,5],content:[{columns:[{stack:[{text:"Contact",style:"header"},{text:"Contact No : +91-7078525908"},e.getSocialInfo(),{text:["Portfolio \n",{text:"https://trilok3003.github.io/",link:"https://trilok3003.github.io/",color:"darkblue",fontSize:8}]},{text:"Date Of Birth :  19 May 1992"},{text:"Address :  Noida Sector 15"},{text:"Education",style:"header"},{stack:[{text:"2011 - 2014",bold:!0},{text:"MCA",color:"darkblue"},{text:"UPTU"},{canvas:[{type:"line",x1:0,y1:2,x2:150,y2:2,lineWidth:.5}]},{text:"2008 - 2011",bold:!0,margin:[0,10,0,0]},{text:"Bsc",color:"darkblue"},{text:"DBRAU"}]},{text:"Skills",style:"header"},{type:"none",ul:[...r.j5]},{text:"Tech Stack",style:"header"},{text:[...r.$j]},{text:"Languages",style:"header"},{text:["Hindi, ","English"]},{text:"Interests",style:"header"},{text:["Programming, ","Cricket, ","Movie, \n","Music, ","Reading"]}],width:"30%"},{stack:[{text:"Trilok Singh",color:"darkblue",fontSize:22,bold:!0,margin:[0,0,0,0]},{text:"Senior Software Engineer",fontSize:16,bold:!1,margin:[0,0,0,0]},{text:"Summary",style:"header"},{ul:[...r.zP]},{text:"Experience",style:"header",margin:[0,2,0,0]},...r.b8.map(o=>({margin:[0,2,0,0],stack:[{columns:[[{text:o.company+"\n",color:"darkblue",bold:!0,fontSize:9},{text:o.designation+"\n",bold:!0}],[{text:o.year+"\n",alignment:"right",color:"darkblue",bold:!0,fontSize:9},{text:o.address,alignment:"right",bold:!0}]]},{margin:[0,2,0,0],color:"black",ul:[...o.skills]}]})),{text:"Projects",style:"header",margin:[0,2,0,0]},...r.Rp.map(o=>({margin:[0,2,0,0],stack:[{text:[{text:o.name+"\n",bold:!0,fontSize:9},{text:o.url,link:o.url,color:"darkblue",fontSize:8}]},{color:"black",ul:[...o.description]},{color:"black",stack:[{text:[{text:"Technologies: ",bold:!0},{text:[...o.techs.join(" , ")]}]}]}]}))],width:"*"}]}],info:e.info,styles:e.styles,defaultStyle:{fontSize:8,lineHeight:1.2,color:"black",italics:!0}};e.pdfMake.createPdf(a).open()})()}generatePdfResume(){var e=this;return(0,n.Z)(function*(){yield e.loadPdfMaker();const t={content:[{text:"RESUME",style:"name",bold:!0,fontSize:20,alignment:"center",margin:[0,0,0,20],fillColor:"red"},{columns:[[{text:"Trilok Singh",style:"name"},{text:"Noida"},{text:"Email : triloksingh1905@gmail.com"},{text:"Contant No : 7078525908"},{text:"GitHub: trilok3003",link:"https://github.com/trilok3003",color:"blue"}]]},{text:"Skills",style:"header"},{columns:[{ul:[...e.skills]}]},{text:"Experience",style:"header"},e.getExperienceObject(e.experience),{text:"Education",style:"header"},e.getEducationObject(e.educations),{text:"Order Details",style:"sectionHeader"},e.getOrders(),{text:"Terms and Conditions",style:"sectionHeader"},{ul:["Order can be return in max 10 days.","Warrenty of the product will be subject to the manufacturer terms and conditions.","This is system generated invoice."]},{text:"Signature",style:"sign"},{columns:[{qr:"Trilok Singh, Contact No : 7078525908",fit:100},{text:"(trilok Singh)",alignment:"right"}]}],info:e.info,styles:e.styles};e.pdfMake.createPdf(t).open()})()}getProfilePicObject(){return this.profilePic?{image:this.profilePic,width:75,alignment:"right"}:null}fileChanged(e){!function s(c){const d=new FileReader;d.readAsDataURL(c),d.onload=()=>d.result,d.onerror=e=>{console.log("Error: ",e)}}(e.target.files[0])}getExperienceObject(e){const t=[];return e.forEach(a=>{t.push([{columns:[[{text:a.jobTitle,style:"jobTitle"},{text:a.employer},{text:a.jobDescription}],{text:"Experience : "+a.experience,alignment:"right"}]}])}),{table:{widths:["*"],body:[...t]}}}getEducationObject(e){return{table:{widths:["*","*","*","*"],body:[[{text:"Degree",style:"tableHeader"},{text:"College",style:"tableHeader"},{text:"Passing Year",style:"tableHeader"},{text:"Result",style:"tableHeader"}],...e.map(t=>[t.degree,t.college,t.passingYear,t.percentage])]}}}getOrders(){return{table:{headerRows:1,widths:["*","auto","auto","auto"],body:[["Product","Price","Quantity","Amount"],...this.products.map(e=>[e.name,e.price,e.qty,(e.price*e.qty).toFixed(2)]),[{text:"Total Amount",colSpan:3},{},{},this.products.reduce((e,t)=>e+t.qty*t.price,0).toFixed(2)]]}}}getSocialInfo(){const e=[];return this.socialInfo.forEach(t=>{e.push({text:[`${t.name} \n`,{text:t.view||t.url,link:t.url,color:"darkblue",fontSize:8}]})}),e}openPdfVersion2(){}static#e=this.\u0275fac=function(t){return new(t||c)};static#t=this.\u0275prov=x.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})()},7441:(M,m,i)=>{i.d(m,{d:()=>g});var n=i(4650),r=i(6895);function u(s,h){if(1&s&&(n.TgZ(0,"li"),n._UZ(1,"i",2),n.TgZ(2,"span"),n._uU(3),n.qZA()()),2&s){const l=h.$implicit;n.xp6(3),n.Oqu(l)}}function f(s,h){if(1&s&&(n.TgZ(0,"ul"),n.YNc(1,u,4,1,"li",1),n.qZA()),2&s){const l=n.oxw();n.xp6(1),n.Q6J("ngForOf",l.items)}}let g=(()=>{class s{constructor(){this.items=[]}ngOnInit(){}static#e=this.\u0275fac=function(p){return new(p||s)};static#t=this.\u0275cmp=n.Xpm({type:s,selectors:[["app-custom-list"]],inputs:{items:"items"},decls:1,vars:1,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"fa","fa-circle-thin"]],template:function(p,C){1&p&&n.YNc(0,f,2,1,"ul",0),2&p&&n.Q6J("ngIf",C.items.length)},dependencies:[r.sg,r.O5],styles:['@import"https://fonts.googleapis.com/css?family=Open+Sans:400,600|Poppins:400,500,600,700&amp;display=swap";@import"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css";.custom-box-shadow[_ngcontent-%COMP%]{padding:24px 30px 30px;border-radius:10px;margin-bottom:30px;box-shadow:0 5px 20px #5d5d5d66;transition:all .3s ease-in}.section-heading[_ngcontent-%COMP%]{text-align:center;margin-bottom:60px;justify-content:space-between}.section-heading[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{position:relative;z-index:5;font-size:36px;line-height:46px;font-weight:700;display:inline-block;text-transform:uppercase;margin-bottom:0}.section-heading[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .color[_ngcontent-%COMP%]{color:#cc2280!important}.section-heading[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .bg-text[_ngcontent-%COMP%]{z-index:1;position:absolute;text-transform:uppercase;left:50%;top:50%;transform:translate(-50%,-50%);font-size:85px;opacity:.07}.resume-box[_ngcontent-%COMP%]{padding:24px 30px 30px;border-radius:10px;margin-bottom:30px;box-shadow:0 5px 20px #5d5d5d66;transition:all .3s ease-in}.resume-box[_ngcontent-%COMP%]   .resume-title[_ngcontent-%COMP%]{border-bottom:1px solid rgba(255,252,252,.1)}.resume-box[_ngcontent-%COMP%]   .resume-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:21px;line-height:31px;font-weight:600;display:inline-block;position:relative;margin-bottom:0;padding-bottom:8px}.resume-box[_ngcontent-%COMP%]   .education-list[_ngcontent-%COMP%]{margin-top:30px;padding-left:30px;padding-top:30px;padding-bottom:30px;border-left:2px solid rgba(0,0,0,.1);border-left:2px solid rgba(255,252,252,.1)}.resume-box[_ngcontent-%COMP%]   .education-list[_ngcontent-%COMP%]   .single-education[_ngcontent-%COMP%]{border-left:3px solid #929292;margin-bottom:30px;padding-left:30px;position:relative;border-left:3px solid #cc2280}.resume-box[_ngcontent-%COMP%]   .education-list[_ngcontent-%COMP%]   .single-education[_ngcontent-%COMP%]   .year[_ngcontent-%COMP%]{background:#929292;color:#fff;text-transform:uppercase;font-size:14px;display:inline-block;font-weight:600;padding:2px 10px;position:relative;margin-bottom:10px;background:#cc2280}.resume-box[_ngcontent-%COMP%]   .education-list[_ngcontent-%COMP%]   .single-education[_ngcontent-%COMP%]   .year[_ngcontent-%COMP%]:after{position:absolute;content:"";top:100%;left:10px;width:0;height:0;border-top:10px solid #929292;border-right:10px solid transparent;border-top:10px solid #cc2280}.resume-box[_ngcontent-%COMP%]   .education-list[_ngcontent-%COMP%]   .single-education[_ngcontent-%COMP%]   .degree[_ngcontent-%COMP%]{font-size:18px;font-weight:600}.resume-box[_ngcontent-%COMP%]   .education-list[_ngcontent-%COMP%]   .single-education[_ngcontent-%COMP%]   .university-name[_ngcontent-%COMP%]{font-size:16px;line-height:26px;margin-bottom:0}.resume-box[_ngcontent-%COMP%]   .education-list[_ngcontent-%COMP%]   .single-education[_ngcontent-%COMP%]:before{position:absolute;content:"";width:30px;height:2px;left:-30px;top:50%;transform:translateY(-50%);background:#929292;background:#cc2280}.resume-box[_ngcontent-%COMP%]   .education-list[_ngcontent-%COMP%]   .single-education[_ngcontent-%COMP%]:after{position:absolute;content:"";width:15px;height:15px;left:-41px;border-radius:50%;top:50%;transform:translateY(-50%);background:#929292;background:#cc2280}.resume-box[_ngcontent-%COMP%]   .knowledge-list[_ngcontent-%COMP%]{margin-top:25px}.resume-box[_ngcontent-%COMP%]   .knowledge-list[_ngcontent-%COMP%]   .single-knowledge[_ngcontent-%COMP%]{margin-bottom:18px}.resume-box[_ngcontent-%COMP%]   .knowledge-list[_ngcontent-%COMP%]   .single-knowledge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#929292;color:#cc2280!important}.resume-box[_ngcontent-%COMP%]   .knowledge-list[_ngcontent-%COMP%]   .single-knowledge[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0;padding-left:25px;position:relative}.btn-outline-custom[_ngcontent-%COMP%]{color:#cc2280;border-color:#cc2280}.btn-outline-custom[_ngcontent-%COMP%]:hover{background-color:#cc2280;color:#000}.default-color[_ngcontent-%COMP%]{color:#cc2280!important}.default-bg[_ngcontent-%COMP%]{background:#cc2280!important}*[_ngcontent-%COMP%]{color:#f1f1f1!important}.side-menu[_ngcontent-%COMP%]{width:250px;position:fixed;top:0;bottom:0;left:0;z-index:99;border-right:1px solid rgba(0,0,0,.1);border-right:1px solid rgba(255,255,255,.1)}.side-menu[_ngcontent-%COMP%]   .heading-area[_ngcontent-%COMP%]{text-align:center;padding-top:30px;border-bottom:1px solid rgba(0,0,0,.1);border-bottom:1px solid rgba(255,252,252,.1);padding-bottom:22px;margin-bottom:30px;position:relative;overflow:hidden}.side-menu[_ngcontent-%COMP%]   .heading-area[_ngcontent-%COMP%]:before{position:absolute;content:"";width:100%;height:300%;transform:rotate(-58deg);top:-135%;right:-80%;background:#cc2280;z-index:0}.side-menu[_ngcontent-%COMP%]   .heading-area[_ngcontent-%COMP%]:after{position:absolute;content:"";width:100%;height:300%;transform:rotate(58deg);top:-135%;left:-80%;background:#cc2280;z-index:0}.side-menu[_ngcontent-%COMP%]   .heading-area[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:18px;font-weight:600;color:#555;margin-top:13px;font-family:Poppins,sans-serif}.side-menu[_ngcontent-%COMP%]   .heading-area[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:130px;height:130px;border-radius:50%;border:3px solid #cc2280;visibility:visible;animation-delay:.2s;animation-name:zoomIn;position:relative;z-index:1}.side-menu[_ngcontent-%COMP%]   .mainmenu-area[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding:0;margin:0}.side-menu[_ngcontent-%COMP%]   .mainmenu-area[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:0 15px;margin-bottom:3px}.side-menu[_ngcontent-%COMP%]   .mainmenu-area[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{line-height:40px;font-size:14px;font-weight:600;border-radius:3px;position:relative;padding:0 20px 0 50px;display:block;transition:all .3s ease-in;text-decoration:none;outline:none}.side-menu[_ngcontent-%COMP%]   .mainmenu-area[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:18px;margin-right:10px;position:absolute;left:20px;top:50%;transform:translateY(-50%);color:#cc2280!important}.side-menu[_ngcontent-%COMP%]   .mainmenu-area[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%], .side-menu[_ngcontent-%COMP%]   .mainmenu-area[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#cc2280!important}.main-content[_ngcontent-%COMP%]{padding-left:250px;height:auto;position:relative}.home-section[_ngcontent-%COMP%]{height:100vh;display:flex;align-self:center;align-items:center;position:relative;background-image:url(bg1.f70e68c49d0d06a9.png);background-repeat:no-repeat;background-position:center;background-size:cover}.home-section[_ngcontent-%COMP%]:before{position:absolute;content:"";width:100%;height:100%;top:0;left:0;background:rgba(0,0,0,.7);z-index:2}.home-section[_ngcontent-%COMP%]   .home-content[_ngcontent-%COMP%]{text-align:center;position:relative;z-index:6}.home-section[_ngcontent-%COMP%]   .home-content[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{font-size:40px;line-height:50px;font-weight:700;margin-bottom:2px;color:#fff}.home-section[_ngcontent-%COMP%]   .home-content[_ngcontent-%COMP%]   .designation[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:18px;font-weight:600;color:#fff}.home-section[_ngcontent-%COMP%]   .home-content[_ngcontent-%COMP%]   .social-info[_ngcontent-%COMP%]{margin-top:27px}.home-section[_ngcontent-%COMP%]   .home-content[_ngcontent-%COMP%]   .social-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block;margin-right:7px}.home-section[_ngcontent-%COMP%]   .home-content[_ngcontent-%COMP%]   .social-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;width:40px;height:40px;font-size:14px;line-height:42px;text-align:center;border-radius:50%;transition:all .3s ease-in;border:1px solid rgba(255,255,255,.2)}.home-section[_ngcontent-%COMP%]   .home-content[_ngcontent-%COMP%]   .social-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{transform:scale(1.2)}.home-section[_ngcontent-%COMP%]   .home-content[_ngcontent-%COMP%]   .social-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#fff!important}.home-section[_ngcontent-%COMP%]   .home-content[_ngcontent-%COMP%]   .home-image[_ngcontent-%COMP%]{display:flex;justify-content:center}.home-section[_ngcontent-%COMP%]   .home-content[_ngcontent-%COMP%]   .home-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:160px;height:160px;border-radius:50%;object-fit:cover;display:inline-block;border:5px solid #cc2280;margin-bottom:30px;box-shadow:0 5px 20px #5d5d5d66}.home-section[_ngcontent-%COMP%]   .home-content[_ngcontent-%COMP%]   .home-image[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{display:flex;width:80px;height:80px;background:#cc2280;border-radius:50%;color:#fff;font-size:20px;align-items:center;justify-content:center}.home-section[_ngcontent-%COMP%]   .home-content[_ngcontent-%COMP%]   .about-links[_ngcontent-%COMP%]{margin-top:30px}.home-section[_ngcontent-%COMP%]   .home-content[_ngcontent-%COMP%]   .about-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child{margin-right:15px}.home-section[_ngcontent-%COMP%]   .home-content[_ngcontent-%COMP%]   .about-links[_ngcontent-%COMP%]   .home-section[_ngcontent-%COMP%]   .home-content[_ngcontent-%COMP%]   .about-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child{margin-right:15px}.home-section[_ngcontent-%COMP%]   .home-content[_ngcontent-%COMP%]   .about-links[_ngcontent-%COMP%]   .mybtn3[_ngcontent-%COMP%]{padding:10px 20px;background:#fff;border-radius:4px;font-size:13px;font-weight:600;display:inline-block;border:1px solid transparent;position:relative;z-index:3;box-shadow:0 1px 3px #0000001f,0 1px 2px #0000003d;transition:all .4s;cursor:pointer;outline:none!important;overflow:hidden}.home-section[_ngcontent-%COMP%]   .home-content[_ngcontent-%COMP%]   .about-links[_ngcontent-%COMP%]   .mybtn3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative;font-weight:500;z-index:6;transition-delay:0s}.home-section[_ngcontent-%COMP%]   .home-content[_ngcontent-%COMP%]   .about-links[_ngcontent-%COMP%]   .mybtn3[_ngcontent-%COMP%]:hover:before{width:100%}.home-section[_ngcontent-%COMP%]   .home-content[_ngcontent-%COMP%]   .about-links[_ngcontent-%COMP%]   .mybtn3[_ngcontent-%COMP%]:hover:after{width:100%;transition-delay:.2s;background:#fff;opacity:1}.home-section[_ngcontent-%COMP%]   .home-content[_ngcontent-%COMP%]   .about-links[_ngcontent-%COMP%]   .mybtn3[_ngcontent-%COMP%]:before{content:"";width:0;height:100%;background:#fff;position:absolute;left:0;top:0;transition:width .4s;z-index:1;opacity:.4}.home-section[_ngcontent-%COMP%]   .home-content[_ngcontent-%COMP%]   .about-links[_ngcontent-%COMP%]   .mybtn3[_ngcontent-%COMP%]:after{content:"";width:0;height:100%;position:absolute;left:0;top:0;transition:width .4s;z-index:1;opacity:.4;transition-delay:0s;background:#fff;opacity:1}.home-section[_ngcontent-%COMP%]   .home-content[_ngcontent-%COMP%]   .about-links[_ngcontent-%COMP%]   .mybtn-bg[_ngcontent-%COMP%]{background:#cc2280;border-color:#cc2280;color:#fff;border-radius:26px}.home-section[_ngcontent-%COMP%]   .home-content[_ngcontent-%COMP%]   .about-links[_ngcontent-%COMP%]   .mybtn-bg[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{color:#cc2280!important}.about[_ngcontent-%COMP%]   .short-description[_ngcontent-%COMP%]{padding:25px 30px 30px;border-radius:17px;box-shadow:0 5px 20px #5d5d5d66}p[_ngcontent-%COMP%]{font-size:16px;line-height:1.625;-webkit-hyphens:auto;hyphens:auto}blockquote[_ngcontent-%COMP%]{display:block;background-color:#393939;padding:10px 30px 10px 40px;border-radius:15px;margin-block-start:1em;margin-block-end:1em;margin-inline-start:0px;margin-inline-end:0px}ul[_ngcontent-%COMP%]{padding:0;margin:0}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style:none}a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:focus, a[_ngcontent-%COMP%]:active{text-decoration:none;outline:none;color:#555}.contact[_ngcontent-%COMP%], .footer[_ngcontent-%COMP%]{padding-bottom:50px;padding-top:50px}.contact[_ngcontent-%COMP%]   .single-info[_ngcontent-%COMP%], .footer[_ngcontent-%COMP%]   .single-info[_ngcontent-%COMP%]{padding:39px 20px 36px;margin-bottom:30px;border-radius:10px;text-align:center;position:relative;transition:all .3s ease-in;box-shadow:0 5px 20px #5d5d5d66}.contact[_ngcontent-%COMP%]   .single-info[_ngcontent-%COMP%]:hover, .footer[_ngcontent-%COMP%]   .single-info[_ngcontent-%COMP%]:hover{transform:translateY(-5px)}.contact[_ngcontent-%COMP%]   .single-info[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .footer[_ngcontent-%COMP%]   .single-info[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:21px;line-height:31px;font-weight:600;margin-bottom:10px}.contact[_ngcontent-%COMP%]   .single-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .footer[_ngcontent-%COMP%]   .single-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0}.contact[_ngcontent-%COMP%]   .single-info[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%], .footer[_ngcontent-%COMP%]   .single-info[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%]{font-size:36px;line-height:80px;width:80px;height:80px;display:inline-block;border-radius:50%;margin-bottom:22px;font-weight:400;box-shadow:0 5px 20px #5d5d5d66;background:#cc2280}.contact[_ngcontent-%COMP%]   .single-info[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .footer[_ngcontent-%COMP%]   .single-info[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#fff}.certificate[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{opacity:.6}@media (max-width: 1400px){.main-content[_ngcontent-%COMP%]{padding-left:200px}.side-menu[_ngcontent-%COMP%], .side-menu-wrapper[_ngcontent-%COMP%]{width:200px}}@media (max-width: 991px){.side-menu[_ngcontent-%COMP%]{position:fixed;z-index:99;background:#fff;height:100%;overflow:auto;display:none}.side-menu-wrapper[_ngcontent-%COMP%]   .menu-toogle-icon[_ngcontent-%COMP%]{display:block}.main-content[_ngcontent-%COMP%]{padding-left:0;overflow-x:hidden;max-width:100%;width:100%}.categori-widget[_ngcontent-%COMP%]{margin-top:30px}.about-section[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   .about-image[_ngcontent-%COMP%], .contact[_ngcontent-%COMP%]   .home-page-form[_ngcontent-%COMP%]{margin-bottom:30px}}@media (max-width: 575px){.home-section[_ngcontent-%COMP%]   .home-content[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{font-size:32px;line-height:42px}.about-section[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   .about-content[_ngcontent-%COMP%]   .personal-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{max-width:100%;flex:100%}}@media (max-width: 414px){.header-area[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{display:block}.resume-wrapper[_ngcontent-%COMP%]   .resume-box[_ngcontent-%COMP%]   .skill-list2[_ngcontent-%COMP%]   .single-skill2[_ngcontent-%COMP%]{max-width:50%;flex:50%}}ul[_ngcontent-%COMP%]{list-style:none}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding-top:20px}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{padding-right:10px;color:#cc2280!important}']})}return s})()},1801:(M,m,i)=>{i.d(m,{p:()=>f});var n=i(6895),r=i(4006),u=i(4650);let f=(()=>{class g{static#e=this.\u0275fac=function(l){return new(l||g)};static#t=this.\u0275mod=u.oAB({type:g});static#n=this.\u0275inj=u.cJS({imports:[n.ez,r.u5]})}return g})()},1384:(M,m,i)=>{i.d(m,{$j:()=>O,Ag:()=>u,BV:()=>o,HT:()=>P,Ib:()=>a,LM:()=>r,NV:()=>x,Rp:()=>y,Sp:()=>p,X1:()=>b,b8:()=>s,cn:()=>e,j5:()=>d,jZ:()=>h,ns:()=>n,q:()=>t,tz:()=>f,vI:()=>g,zP:()=>C});const n=[{title:"Address",description:"Noida"},{title:"Contact No",description:"91+ 7078525908"},{title:"Email",description:"triloksingh1905@gmail.com"}],r=["Linkedin","HackerRank","CutShort","freecodecamp"],u="Senior Software Engineer  | Angular  | Ionic",f="assets/profile-circle.jpg",g=[{name:"Master of Computer Applications (MCA)",year:"2011-2014",university:"Uttar Pradesh Technical University (UPTU)"},{name:"BSC",year:"2008-2011",university:"Dr. Bhim rao Ambedkar University Agra"}],s=[{designation:"Technical Lead",year:"July, 2024 - Present",company:"Cyient",address:"Noida",skills:["Currently I am working with thales for migration angular js to angular 18","Technologies: (Html, Css, SCSS, TypeScript, Angular 18 , Node JS, Rxjs, Bootstrap, JSON, GIT, layout (flex,  grid), unit testing (jasmine and karma), state management using rxjs or signal","visualization data using slider/table/card/list and chart (highcharts), customize date picker, extract data using filter, sorting and pagination","creating core module and share module for project such as Auth/Role Guard, Auth/Error Interceptor, App Initializer"]},{designation:"Senior Software  Engineer",year:"July, 2019 - July, 2024",company:"Gaiasys Technology Pvt Ltd",address:"Faridabad",skills1:["creating Angular applications from scratch, including structuring, building, and deploying them on AWS and Netlify","I collaborated with the team, mentored new developers, and reviewed code to ensure quality","I utilized SDLC methodologies such as Agile Scrum,  focusing on web frameworks, accessibility, and testing","implements PWA features, State Management using Ngrx/rxjs/signal, angular material/cdk,firebase, ","Import/Export CSV/JSON/PDF, graph/chart, upload file, implements search, filter, sorting , pagination , show more with  scrolling ","CI/CD Pipeline, Documentation using Compodoc, bundle-analyzer, debugging and profiling (Augury)","Technologies: (Html, Css, SASS, JavaScript, TypeScript, Node JS, Rxjs, Bootstrap, JSON, GIT, REST APIs, Angular cli/Material/Cdk, Ionic, Firebase, AWS, CI/CD, PWA, Angular 7+ (v14, v15), layout (flex,  grid), unit testing (jasmine and karma)","Worked On Projects: (Earther Web , Earther Mobile Ionic, Daybook, NBFC, Krc Infra Projects, Gaiasys Website, PWA based Projects)"],skills:["creating Angular applications from scratch, including structuring, building, and deploying them on AWS and Netlify","I collaborated with the team, mentored new developers, and reviewed code to ensure quality","I utilized SDLC methodologies such as Agile Scrum,  focusing on web frameworks, accessibility, testing, State Management, angular material","Import/Export CSV/JSON/PDF, graph/chart, upload file, implements search, filter, sorting , pagination , show more with  scrolling ","Worked On Projects: (Earther Web , Earther Mobile Ionic, Daybook, NBFC, Krc Infra Projects, Gaiasys Website, PWA based Projects)"]},{designation:"Software  Engineer",year:"Jan, 2019 - July 2019",company:"Biorev Studios Pvt Ltd",address:"Delhi",skills1:["Designed and developed user interfaces using Angular best practices","creating reuse components, services and features. developed features using Canvas, Svg","Used Google Map (AGM) package and Angular material and Angular CDK","Technologies: (Html, Css, SASS, JavaScript, TypeScript, Angular (6), Node JS, Rxjs, Bootstrap, JSON, Git, REST APIs, Angular Cli/Material/Cdk, Firebase), flex, grid, jasmine and karma","Worked On Projects : x-series 360  (xseries360, xplat360, xhome360, xfloor360, xdesign360)"],skills:["Used Google Map (AGM) package and Angular material and Angular CDK, Canvas, Svg","Worked On Projects : x-series 360  (xseries360, xplat360, xhome360, xfloor360, xdesign360)"]},{designation:"Frontend Developer",year:"Sep, 2015 - Jan 2019",company:"Object Freeze Pvt Ltd",address:"Noida",skills1:["creating web application and pages using html, css, js","design ,developed application using angular framework. worked on wordpress projects and websites","Technologies: (Html, Css, SASS, JavaScript, TypeScript, Angular (2,4,5,6), Node JS, Rxjs, Bootstrap, JSON, Accessibility, Git, REST APIs and Other Angular Cli/Material/Cdk, Ionic, Firebase)","Worked On Projects: (JMD Hospital , Hotel Anjuman, Hotel Kd, Handy craft, New Balaji, Crustncakes, Pandit Ji Nimantran, Vivah Creation, Deals Ka Baap, Object Freeze, Cakes Out, SRK Inventory/School Management)"],skills:["creating web application and pages using html, css, js","design ,developed application using angular framework. worked on wordpress projects and websites","Worked On Projects: (JMD Hospital , Hotel Anjuman, Hotel Kd, Handy craft, New Balaji, Crustncakes, Pandit Ji Nimantran, Vivah Creation, Deals Ka Baap, Object Freeze, Cakes Out, SRK Inventory/School Management)"]}],h=["Senior Software Engineer with 8 years of experience.  Currently, I am working at \u201cGaiasys Technology Pvt Ltd\u201d","Expertise in Angular 2+, Ionic, Typescript, Javascript, Front end Development, Web Development, Mobile Development, PWA Development","Creating Custom modules/Components/Directives/Pipes, Routing, Reactive Forms, Modules, Lazy Loading, Services, Rxjs, Guard, Interface Model","State Menagement Using @Ngrx, Interceptors","CI/CD Pipeline (github pages deploy, Gitlab pages deploy, AWS S3 Deploy)","Unit Testing with (Jasmine Framework and Karma Test Runner)","Build Project Develop/Staging/Production Mode and Deploy On AWS","Worked on Single Page Application, Web Application, Mobile Application, PWA Application","Experience with various IDE\u2019s such as Visual Studio Code, Web Storm","Worked in  Angular cli, npm","Worked in  version control systems - GIT","Documentation using Compodoc","webpack-bundle-analyzer","Worked on PWA","Used Serverless technologies like Firebase","Worked on Bootstrap, Angular Material, export Pdf, import/export csv","I love doing multitasking work and skilled, with the ability to think logically and creativity strong","I enjoy learning new things , Interested in new technologies and I am so passionate about development"],p=["8 years of work experience in frontend developer with focus on developed and designed amazing user interfaces using HTML, css, javascript, typescript, angular framework","collaborated with  developers to create high performing, interactive , responsive web applications, building reusable components and libraries","design, develop, responsive, pwa, accessibility and cross browser compatibility web application and optimizing maximum performance","have knowledge solid principals, oops, functional programming and sdlc methodologies such as jira scrum and Waterfall, Design","Well, awareness in Git Versioning Control Tools and frontend development tools such as webpack, npm","understanding of Agile Scrum, Web Framework,Accessibility, Testing, debugging and problem-solving abilities","Expertise in Angular 2+ versions and currently using angular 15 version"],C=["I have 8+ years of work experience as a Frontend Developer, focusing on developing and designing amazing user interfaces using HTML, CSS, SCSS, JavaScript, TypeScript,  Angular framework, React.js, Ionic, PWA App. I have collaborated with developers to create high-performing, interactive, and responsive web applications, building reusable components and libraries.","I design and develop responsive web applications, ensuring accessibility and cross-browser compatibility while optimizing for maximum performance. I possess solid knowledge of programming principles, OOP, functional programming, and SDLC methodologies, including Jira, Scrum, and Waterfall.","CI/CD Pipeline, Documentation using Compodoc, bundle-analyzer, debugging and profiling (Augury), unit testing, state management, wireframe","Additionally, I am well-versed in Git version control tools and frontend development tools such as Webpack and NPM. I have a strong understanding of Agile Scrum practices, web frameworks, accessibility, testing, debugging, and problem-solving abilities. I specialize in Angular 2+ versions (2 to 18) and am currently using Angular 18"],x=[{name:"Tools & Framework",items:["Webstorm","Visual Studio Code, Postman","OS (Windows, Ubuntu/Linux)","Webstorm, \n VS Code"]},{name:"Interest",items:["Programming","Cricket","Movie","Music","Reading"]},{name:"Frontend",items:["Html, css, javascript, typescript, scss, rxjs, ngrx, angular"]},{name:"Testing",items:["Jasmine Framework","karma"]},{name:"Project management",items:["Jira","clickup"]},{name:"wireframe Tool",items:["figma"]},{name:"conversation tools",items:["slack","Flock"]},{name:"git versioning",items:["github, gitlab"]},{name:"Other",items:["Git","webpack","npm"]}],O=["Wireframe Tool:: figma \n","Project management:: Jira, clickup \n","Git versioning:: github, gitlab","VS code, \n Webstorm"],d=["HTML","CSS","Javascript","Typescript","SASS/SCSS","Angular (v2 to v18)","Ionic","ReactJs","Rxjs","Angular CLI","Angular Material & CDK","Npm","Node js","Version Control (GIT)","Bootstrap","Firebase","REST API","JSON","Ngrx","Jasmine Framework","Karma","AWS","CI/CD Pipeline","PWA","Wordpress"],e=[{company:"Gaiasys",items:[{name:"Earther Web Product",description:"",techs:["Angular","Angular Material","Nodejs","TypeScript"]},{name:"Earther  Mobile App",description:"",techs:["Angular","Ionic","Nodejs","TypeScript"]},{name:"Daybook",description:"",techs:["Angular","Angular Material","Nodejs","TypeScript"]},{name:"NBFC",description:"",techs:["Angular","Angular Material","Nodejs","TypeScript"]},{name:"KRC INFRA PROJECTS",description:"",techs:["Html","Css","Javascript","Wordpress"]}]},{company:"Biorev",items:[{name:"XPLAT",description:"",techs:["Angular","Angular Material","Nodejs","TypeScript"]},{name:"XHOME",description:"",techs:["Angular","Ionic","Nodejs","TypeScript"]},{name:"XFLOOR",description:"",techs:["Angular","Angular Material","Nodejs","TypeScript"]},{name:"XDESIGN",description:"",techs:["Angular","Angular Material","Nodejs","TypeScript"]}]},{company:"Object Freeze",items:[{name:"JMD Hospital",description:"",techs:["Angular","Angular Material","Nodejs","TypeScript"]},{name:"Hotel Anjuman",description:"",techs:["Angular","Ionic","Nodejs","TypeScript"]},{name:"Hotel Kd",description:"",techs:["Angular","Angular Material","Nodejs","TypeScript"]},{name:"Handy craft",description:"",techs:["Angular","Angular Material","Nodejs","TypeScript"]},{name:"New Balaji",description:"",techs:["Angular","Angular Material","Nodejs","TypeScript"]},{name:"Crustncakes",description:"",techs:["Angular","Angular Material","Nodejs","TypeScript"]},{name:"Pandit Ji Nimantran",description:"",techs:["Angular","Angular Material","Nodejs","TypeScript"]},{name:"Vivah Creation",description:"",techs:["Angular","Angular Material","Nodejs","TypeScript"]},{name:"Deals Ka Baap",description:"",techs:["Angular","Angular Material","Nodejs","TypeScript"]},{name:"Object Freeze",description:"",techs:["Angular","Angular Material","Nodejs","TypeScript"]},{name:"Cakes Out",description:"",techs:["Angular","Angular Material","Nodejs","TypeScript"]}]}],t=[{name:"Earther Web Product",description:["Construction Product"],url:"https://earther.gaiasys.in/",techs:["Angular","Angular Material","Nodejs","TypeScript"]},{name:"Earther  Mobile App",url:"",description:[],techs:["Angular","Ionic","Nodejs","TypeScript"]},{name:"Daybook",description:[],url:"https://daybook.gaiasys.org/",techs:["Angular","Angular Material","Nodejs","TypeScript"]},{name:"NBFC",url:"",description:[],techs:["Angular","Angular Material","Nodejs","TypeScript"]},{name:"Krc Infra Projects",description:[],url:"http://www.krcinfraprojects.com/",techs:["Html","Css","Javascript","Wordpress"]},{name:"XSeries360",description:[],url:"https://xseries360.com/",techs:["Angular","Angular Material","Nodejs","TypeScript"]},{name:"XPlat360",description:[],url:"https://xplat360.com/",techs:["Angular","Angular Material","Nodejs","TypeScript"]},{name:"XHome360",description:[],url:"https://xhome360.com/",techs:["Angular","Ionic","Nodejs","TypeScript"]},{name:"XFloor360",description:[],url:"https://xfloor360.com/",techs:["Angular","Angular Material","Nodejs","TypeScript"]},{name:"XDesign360",description:[],url:"https://xdesign360.com/",techs:["Angular","Angular Material","Nodejs","TypeScript"]}],a=[{name:"angular date picker library",description:["Date Picker Library In Angular on npm packages"],url:"https://www.npmjs.com/package/tri-angular-date-picker-library",techs:["Angular","Nodejs","TypeScript"]},{name:"angular pipe library",description:["angular pipe library on npm packages"],url:"https://www.npmjs.com/package/tri-angular-pipe-library",techs:["Angular","Nodejs","TypeScript"]},{name:"angular bootstrap custom",description:["angular bootstrap custom on npm packages"],url:"https://www.npmjs.com/package/angular-bootstrap-custom",techs:["Angular","Nodejs","TypeScript","Bootstrap"]},{name:"angular-customize",description:["angular-customize on npm packages"],url:"https://www.npmjs.com/package/angular-customize",techs:["Angular","Nodejs","TypeScript"]},{name:"angular library",description:["angular library on npm packages"],url:"https://www.npmjs.com/package/tri-angular-library",techs:["Angular","Nodejs","TypeScript"]}],o=[{name:"Linkedin:",url:"https://www.linkedin.com/in/trilok-singh1905",view:"",icon:"fa fa-linkedin"},{name:"Github:",url:"https://github.com/trilok3003",view:"",icon:"fa fa-github"},{name:"Stackoverflow:",url:"https://stackoverflow.com/users/10918257/trilok-singh",view:"",icon:"fa fa-stack-overflow"},{name:"npmjs:",url:"https://www.npmjs.com/~trilok3003",view:"",icon:"fa fa-angle-double-right"},{name:"Email:",url:"mailto:triloksingh1905@gmail.com",view:"triloksingh1905@gmail.com",icon:"fa fa-envelope"}],b=["https://www.freecodecamp.org/certification/trilok3003/responsive-web-design","https://www.freecodecamp.org/certification/trilok3003/front-end-development-libraries"],P=[{name:"Angular (Basic)",issuedBy:"hackerrank",link:"https://www.hackerrank.com/certificates/6b98e38b5a12",issuedId:"6b98e38b5a12"},{name:"React (Basic)",issuedBy:"hackerrank",link:"https://www.hackerrank.com/certificates/6bf25e89d61f",issuedId:"6bf25e89d61f"},{name:"Angular (2+)",issuedBy:"cutshort",link:"https://cutshort.io/certificate/68326",issuedId:"68326"},{name:"AngularJS (1.x)",issuedBy:"cutshort",link:"https://cutshort.io/certificate/68806",issuedId:"68806"},{name:"HTML/CSS",issuedBy:"cutshort",link:"https://cutshort.io/certificate/68465",issuedId:"68465"},{name:"Javascript",issuedBy:"cutshort",link:"https://cutshort.io/certificate/68448",issuedId:"68448"},{name:"React.js",issuedBy:"cutshort",link:"https://cutshort.io/certificate/68455",issuedId:"68455"},{name:"Front End Development Libraries",issuedBy:"freecodecamp",link:"https://www.freecodecamp.org/certification/trilok3003/front-end-development-libraries",issuedId:""},{name:"Responsive Web Design",issuedBy:"freecodecamp",link:"https://www.freecodecamp.org/certification/trilok3003/responsive-web-design",issuedId:""}],y=[{name:"Earther  Product",description1:["this is civil construction based product which provide solutions like manage inventory, Hr, Product, services, credit debit notes, cash voucher, invoices, department wise responsibility, tare weight and gross weight for equipments."],description:["this is civil construction based product which provide solutions."],url:"https://earther.gaiasys.in/",techs:["Angular Material","Nodejs","TypeScript","Ngrx","Html","css","scss","laravel","mysql","Angular (v14, v15))","layout (flex,  grid)","unit testing (jasmine and karma)"]},{name:"Daybook",description:["Daybook handled the day wise credit debit entry particular account and provide stats etc. "],url:"https://daybook.gaiasys.org/",techs:["Angular","Angular Material","Bootstrap","Nodejs","TypeScript","Ngrx","Html","css","scss","laravel","mysql","unit testing (jasmine and karma)"]},{name:"Krc Infra Projects",description:["this is Krc Profile based web project"],url:"http://www.krcinfraprojects.com/",techs:["Html","Css","Javascript","Wordpress"]},{name:"XPlat360",description:["XPlat is a completely interactive Lot Management Tool from Biorev."],url:"https://xplat360.com/",techs:["Html","css","Bootstrap","Agm","svg canvas","Angular Material","Nodejs","TypeScript","Angular 6","unit testing using jasmine and karma","css layout like flex, grid"]}]}}]);