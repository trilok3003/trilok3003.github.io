"use strict";(self.webpackChunkportfolio_all_in_one=self.webpackChunkportfolio_all_in_one||[]).push([[6073],{6073:(x,u,n)=>{n.d(u,{c:()=>A});var l=n(9671),o=n(1384);function d(){return(d=(0,l.Z)(function*(i){const e=yield(yield fetch(i)).blob();return new Promise((t,a)=>{const r=new FileReader;r.addEventListener("load",function(){t(r.result)},!1),r.onerror=c=>a(c),r.readAsDataURL(e)})})).apply(this,arguments)}var f=n(4650);let A=(()=>{class i{constructor(){this.styles={header:{fontSize:14,bold:!0,margin:[0,10,0,0],color:"black",transform:"uppercase"},subheader:{fontSize:16,color:"#000",margin:[0,0,0,5]},name:{fontSize:16,bold:!0,color:"skyblue"},jobTitle:{fontSize:14,bold:!0,italics:!0},sign:{margin:[0,50,0,10],alignment:"right",italics:!0},tableHeader:{bold:!0},sectionHeader:{bold:!0,decoration:"underline",fontSize:14,margin:[0,15,0,15]},section:{fontSize:9,color:"#FFFFFF",fillColor:"#2361AE",margin:[0,15,0,5]},quote:{italics:!0},small:{fontSize:8}},this.info={title:"name_pdf",author:"trilok",subject:"Pdf Maker",keywords:"Pdf"},this.defaultStyle={alignment:"center"},this.experience=[{jobTitle:"Senior Software Engineer",employer:"Gaiasys",jobDescription:"Angular",experience:"2 years 10 months"}],this.educations=[{degree:"MCA",college:"UPTU",passingYear:"2014",percentage:75}],this.products=[{name:"milk",price:30,qty:10}],this.socialInfo=o.BV,this.dd={content:[{image:"picture13438908025659.jpg"},{text:"Patient's Detail",fontSize:18,bold:!0},{columns:[{text:"Patient's ID: ",bold:!1},{text:"Name: ",bold:!1},{text:"Age: ",bold:!1},{text:"Contact: ",bold:!1}]},{text:"Address: ",bold:!1}]},this.profileImage=o.tz,this.skills=["Angular","Type Script","Node js"]}loadPdfMaker(){var e=this;return(0,l.Z)(function*(){if(!e.pdfMake){const t=yield n.e(2725).then(n.t.bind(n,2725,23)),a=yield n.e(8493).then(n.t.bind(n,8493,19));e.pdfMake=t.default,e.pdfMake.vfs=a.default.pdfMake.vfs}})()}generateResumePdf(){var e=this;return(0,l.Z)(function*(){let t;yield e.loadPdfMaker(),yield function m(i){return d.apply(this,arguments)}(o.tz).then(r=>{t=r}).catch(r=>console.error(r));const a={pageMargins:[10,5,10,5],content:[{columns:[{stack:[{image:t,fit:[60,60],width:75,border:100,margin:[50,0,0,0]},{text:"Contact",style:"header"},{text:"Contact No : +91-7078525908"},e.getSocialInfo(),{text:["Portfolio \n",{text:"https://trilok3003.github.io/",link:"https://trilok3003.github.io/",color:"darkblue",fontSize:8}]},{text:"Date Of Birth :  19 May 1992"},{text:"Address :  Noida Sector 15"},{text:"Education",style:"header"},{stack:[{text:"2011 - 2014",bold:!0},{text:"MCA",color:"darkblue"},{text:"UPTU"},{canvas:[{type:"line",x1:0,y1:2,x2:150,y2:2,lineWidth:.5}]},{text:"2008 - 2011",bold:!0,margin:[0,10,0,0]},{text:"Bsc",color:"darkblue"},{text:"DBRAU"}]},{text:"Skills",style:"header"},{type:"none",ul:[...o.j5]},{text:"Tech Stack",style:"header"},{text:[...o.$j]},{text:"Languages",style:"header"},{text:["Hindi, ","English"]},{text:"Interests",style:"header"},{text:["Programming, ","Cricket, ","Movie, \n","Music, ","Reading"]}],width:"30%"},{stack:[{text:"Trilok Singh",color:"darkblue",fontSize:22,bold:!0,margin:[0,0,0,0]},{text:"Senior Software Engineer",fontSize:16,bold:!1,margin:[0,0,0,0]},{text:"Summary",style:"header"},{ul:[...o.Sp]},{text:"Experience",style:"header",margin:[0,2,0,0]},...o.b8.map(r=>({margin:[0,2,0,0],stack:[{columns:[[{text:r.company+"\n",color:"darkblue",bold:!0,fontSize:9},{text:r.designation+"\n",bold:!0}],[{text:r.year+"\n",alignment:"right",color:"darkblue",bold:!0,fontSize:9},{text:r.address,alignment:"right",bold:!0}]]},{margin:[0,2,0,0],color:"black",ul:[...r.skills]}]})),{text:"Projects",style:"header",margin:[0,2,0,0]},...o.Rp.map(r=>({margin:[0,2,0,0],stack:[{text:[{text:r.name+"\n",bold:!0,fontSize:9},{text:r.url,link:r.url,color:"darkblue",fontSize:8}]},{color:"black",ul:[...r.description]},{color:"black",stack:[{text:[{text:"Technologies: ",bold:!0},{text:[...r.techs.join(" , ")]}]}]}]}))],width:"*"}]}],info:e.info,styles:e.styles,defaultStyle:{fontSize:8,lineHeight:1.2,color:"black",italics:!0}};e.pdfMake.createPdf(a).open()})()}generatePdfResume(){var e=this;return(0,l.Z)(function*(){yield e.loadPdfMaker();const t={content:[{text:"RESUME",style:"name",bold:!0,fontSize:20,alignment:"center",margin:[0,0,0,20],fillColor:"red"},{columns:[[{text:"Trilok Singh",style:"name"},{text:"Noida"},{text:"Email : triloksingh1905@gmail.com"},{text:"Contant No : 7078525908"},{text:"GitHub: trilok3003",link:"https://github.com/trilok3003",color:"blue"}]]},{text:"Skills",style:"header"},{columns:[{ul:[...e.skills]}]},{text:"Experience",style:"header"},e.getExperienceObject(e.experience),{text:"Education",style:"header"},e.getEducationObject(e.educations),{text:"Order Details",style:"sectionHeader"},e.getOrders(),{text:"Terms and Conditions",style:"sectionHeader"},{ul:["Order can be return in max 10 days.","Warrenty of the product will be subject to the manufacturer terms and conditions.","This is system generated invoice."]},{text:"Signature",style:"sign"},{columns:[{qr:"Trilok Singh, Contact No : 7078525908",fit:100},{text:"(trilok Singh)",alignment:"right"}]}],info:e.info,styles:e.styles};e.pdfMake.createPdf(t).open()})()}getProfilePicObject(){return this.profilePic?{image:this.profilePic,width:75,alignment:"right"}:null}fileChanged(e){!function g(i){const s=new FileReader;s.readAsDataURL(i),s.onload=()=>s.result,s.onerror=e=>{console.log("Error: ",e)}}(e.target.files[0])}getExperienceObject(e){const t=[];return e.forEach(a=>{t.push([{columns:[[{text:a.jobTitle,style:"jobTitle"},{text:a.employer},{text:a.jobDescription}],{text:"Experience : "+a.experience,alignment:"right"}]}])}),{table:{widths:["*"],body:[...t]}}}getEducationObject(e){return{table:{widths:["*","*","*","*"],body:[[{text:"Degree",style:"tableHeader"},{text:"College",style:"tableHeader"},{text:"Passing Year",style:"tableHeader"},{text:"Result",style:"tableHeader"}],...e.map(t=>[t.degree,t.college,t.passingYear,t.percentage])]}}}getOrders(){return{table:{headerRows:1,widths:["*","auto","auto","auto"],body:[["Product","Price","Quantity","Amount"],...this.products.map(e=>[e.name,e.price,e.qty,(e.price*e.qty).toFixed(2)]),[{text:"Total Amount",colSpan:3},{},{},this.products.reduce((e,t)=>e+t.qty*t.price,0).toFixed(2)]]}}}getSocialInfo(){const e=[];return this.socialInfo.forEach(t=>{e.push({text:[`${t.name} \n`,{text:t.view||t.url,link:t.url,color:"darkblue",fontSize:8}]})}),e}openPdfVersion2(){}static#e=this.\u0275fac=function(t){return new(t||i)};static#t=this.\u0275prov=f.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})()},1384:(x,u,n)=>{n.d(u,{$j:()=>f,Ag:()=>y,BV:()=>a,HT:()=>c,Ib:()=>t,LM:()=>o,NV:()=>S,Rp:()=>p,Sp:()=>h,X1:()=>r,b8:()=>g,cn:()=>s,j5:()=>i,jZ:()=>m,ns:()=>l,q:()=>e,tz:()=>b,vI:()=>k});const l=[{title:"Address",description:"Noida"},{title:"Contact No",description:"91+ 7078525908"},{title:"Email",description:"triloksingh1905@gmail.com"}],o=["Linkedin","HackerRank","CutShort","freecodecamp"],y="Senior Software Engineer  | Angular  | Ionic",b="assets/profile-circle.jpg",k=[{name:"Master of Computer Applications (MCA)",year:"2011-2014",university:"Uttar Pradesh Technical University (UPTU)"},{name:"BSC",year:"2008-2011",university:"Dr. Bhim rao Ambedkar University Agra"}],g=[{designation:"Senior Software  Engineer",year:"July, 2019 - Present",company:"Gaiasys Technology Pvt Ltd",address:"Faridabad",skills:["creating angular application from  scratch and structure , build and  Deploy On Aws, Netlify","collaborated with the team and mentor to new developers and will review code","used sdlc methodology Agile Scrum, Web Framework,Accessibility, Testing","implements PWA features, State Management using ngrx, angular material features, angular firebase, Import/Export CSV and  Export PDF, graph/chart, implements search, filter, sorting , pagination , show more with  scrolling ","CI/CD Pipeline, Documentation using Compodoc, bundle-analyzer, debugging and profiling (Augury)","Technologies: (Html, Css, SASS, JavaScript, TypeScript, Node JS, Rxjs, Bootstrap, JSON, GIT, REST APIs, Angular cli/Material/Cdk, Ionic, Firebase, AWS, CI/CD, PWA, Angular 7+ (v14, v15), layout (flex,  grid), unit testing (jasmine and karma)","Worked On Projects: (Earther Web , Earther Mobile Ionic, Daybook, NBFC, Krc Infra Projects, Gaiasys Website, PWA based Projects)"]},{designation:"Software  Engineer",year:"Jan, 2019 - July 2019",company:"Biorev Studios Pvt Ltd",address:"Delhi",skills:["Designed and developed user interfaces using Angular best practices","creating reuse components, services and features. developed features using Canvas, Svg","Used Google Map (AGM) package and Angular material and Angular CDK","Technologies: (Html, Css, SASS, JavaScript, TypeScript, Angular (6), Node JS, Rxjs, Bootstrap, JSON, Git, REST APIs, Angular Cli/Material/Cdk, Firebase), flex, grid, jasmine and karma","Worked On Projects : x-series 360  (xseries360, xplat360, xhome360, xfloor360, xdesign360)"]},{designation:"Frontend Developer",year:"Sep, 2015 - Jan 2019",company:"Object Freeze Pvt Ltd",address:"Noida",skills:["creating web application and pages using html, css, js","design ,developed application using angular framework. worked on wordpress projects and websites","Technologies: (Html, Css, SASS, JavaScript, TypeScript, Angular (2,4,5,6), Node JS, Rxjs, Bootstrap, JSON, Accessibility, Git, REST APIs and Other Angular Cli/Material/Cdk, Ionic, Firebase)","Worked On Projects: (JMD Hospital , Hotel Anjuman, Hotel Kd, Handy craft, New Balaji, Crustncakes, Pandit Ji Nimantran, Vivah Creation, Deals Ka Baap, Object Freeze, Cakes Out, SRK Inventory/School Management)"]}],m=["Senior Software Engineer with 8 years of experience.  Currently, I am working at \u201cGaiasys Technology Pvt Ltd\u201d","Expertise in Angular 2+, Ionic, Typescript, Javascript, Front end Development, Web Development, Mobile Development, PWA Development","Creating Custom modules/Components/Directives/Pipes, Routing, Reactive Forms, Modules, Lazy Loading, Services, Rxjs, Guard, Interface Model","State Menagement Using @Ngrx, Interceptors","CI/CD Pipeline (github pages deploy, Gitlab pages deploy, AWS S3 Deploy)","Unit Testing with (Jasmine Framework and Karma Test Runner)","Build Project Develop/Staging/Production Mode and Deploy On AWS","Worked on Single Page Application, Web Application, Mobile Application, PWA Application","Experience with various IDE\u2019s such as Visual Studio Code, Web Storm","Worked in  Angular cli, npm","Worked in  version control systems - GIT","Documentation using Compodoc","webpack-bundle-analyzer","Worked on PWA","Used Serverless technologies like Firebase","Worked on Bootstrap, Angular Material, export Pdf, import/export csv","I love doing multitasking work and skilled, with the ability to think logically and creativity strong","I enjoy learning new things , Interested in new technologies and I am so passionate about development"],h=["8 years of work experience in frontend developer with focus on developed and designed amazing user interfaces using HTML, css, javascript, typescript, angular framework","collaborated with  developers to create high performing, interactive , responsive web applications, building reusable components and libraries","design, develop, responsive, pwa, accessibility and cross browser compatibility web application and optimizing maximum performance","have knowledge solid principals, oops, functional programming and sdlc methodologies such as jira scrum and Waterfall, Design","Well, awareness in Git Versioning Control Tools and frontend development tools such as webpack, npm","understanding of Agile Scrum, Web Framework,Accessibility, Testing, debugging and problem-solving abilities","Expertise in Angular 2+ versions and currently using angular 15 version"],S=[{name:"Tools & Framework",items:["Webstorm","Visual Studio Code, Postman","OS (Windows, Ubuntu/Linux)","Webstorm, \n VS Code"]},{name:"Interest",items:["Programming","Cricket","Movie","Music","Reading"]},{name:"Frontend",items:["Html, css, javascript, typescript, scss, rxjs, ngrx, angular"]},{name:"Testing",items:["Jasmine Framework","karma"]},{name:"Project management",items:["Jira","clickup"]},{name:"wireframe Tool",items:["figma"]},{name:"conversation tools",items:["slack","Flock"]},{name:"git versioning",items:["github, gitlab"]},{name:"Other",items:["Git","webpack","npm"]}],f=["Wireframe Tool:: figma \n","Project management:: Jira, clickup \n","Git versioning:: github, gitlab"],i=["HTML","CSS","Javascript","SASS","Angular","Ionic","Typescript","rxjs","Angular CLI","Angular Material & CDK","npm","node js","Version Control (GIT)","Bootstrap","Firebase","REST API","JSON","Ngrx","Jasmine Framework","Karma","AWS","CI/CD Pipeline","PWA"],s=[{company:"Gaiasys",items:[{name:"Earther Web Product",description:"",techs:["Angular","Angular Material","Nodejs","TypeScript"]},{name:"Earther  Mobile App",description:"",techs:["Angular","Ionic","Nodejs","TypeScript"]},{name:"Daybook",description:"",techs:["Angular","Angular Material","Nodejs","TypeScript"]},{name:"NBFC",description:"",techs:["Angular","Angular Material","Nodejs","TypeScript"]},{name:"KRC INFRA PROJECTS",description:"",techs:["Html","Css","Javascript","Wordpress"]}]},{company:"Biorev",items:[{name:"XPLAT",description:"",techs:["Angular","Angular Material","Nodejs","TypeScript"]},{name:"XHOME",description:"",techs:["Angular","Ionic","Nodejs","TypeScript"]},{name:"XFLOOR",description:"",techs:["Angular","Angular Material","Nodejs","TypeScript"]},{name:"XDESIGN",description:"",techs:["Angular","Angular Material","Nodejs","TypeScript"]}]},{company:"Object Freeze",items:[{name:"JMD Hospital",description:"",techs:["Angular","Angular Material","Nodejs","TypeScript"]},{name:"Hotel Anjuman",description:"",techs:["Angular","Ionic","Nodejs","TypeScript"]},{name:"Hotel Kd",description:"",techs:["Angular","Angular Material","Nodejs","TypeScript"]},{name:"Handy craft",description:"",techs:["Angular","Angular Material","Nodejs","TypeScript"]},{name:"New Balaji",description:"",techs:["Angular","Angular Material","Nodejs","TypeScript"]},{name:"Crustncakes",description:"",techs:["Angular","Angular Material","Nodejs","TypeScript"]},{name:"Pandit Ji Nimantran",description:"",techs:["Angular","Angular Material","Nodejs","TypeScript"]},{name:"Vivah Creation",description:"",techs:["Angular","Angular Material","Nodejs","TypeScript"]},{name:"Deals Ka Baap",description:"",techs:["Angular","Angular Material","Nodejs","TypeScript"]},{name:"Object Freeze",description:"",techs:["Angular","Angular Material","Nodejs","TypeScript"]},{name:"Cakes Out",description:"",techs:["Angular","Angular Material","Nodejs","TypeScript"]}]}],e=[{name:"Earther Web Product",description:["Construction Product"],url:"https://earther.gaiasys.in/",techs:["Angular","Angular Material","Nodejs","TypeScript"]},{name:"Earther  Mobile App",url:"",description:[],techs:["Angular","Ionic","Nodejs","TypeScript"]},{name:"Daybook",description:[],url:"https://daybook.gaiasys.org/",techs:["Angular","Angular Material","Nodejs","TypeScript"]},{name:"NBFC",url:"",description:[],techs:["Angular","Angular Material","Nodejs","TypeScript"]},{name:"Krc Infra Projects",description:[],url:"http://www.krcinfraprojects.com/",techs:["Html","Css","Javascript","Wordpress"]},{name:"XSeries360",description:[],url:"https://xseries360.com/",techs:["Angular","Angular Material","Nodejs","TypeScript"]},{name:"XPlat360",description:[],url:"https://xplat360.com/",techs:["Angular","Angular Material","Nodejs","TypeScript"]},{name:"XHome360",description:[],url:"https://xhome360.com/",techs:["Angular","Ionic","Nodejs","TypeScript"]},{name:"XFloor360",description:[],url:"https://xfloor360.com/",techs:["Angular","Angular Material","Nodejs","TypeScript"]},{name:"XDesign360",description:[],url:"https://xdesign360.com/",techs:["Angular","Angular Material","Nodejs","TypeScript"]}],t=[{name:"angular date picker library",description:["Date Picker Library In Angular on npm packages"],url:"https://www.npmjs.com/package/tri-angular-date-picker-library",techs:["Angular","Nodejs","TypeScript"]},{name:"angular pipe library",description:["angular pipe library on npm packages"],url:"https://www.npmjs.com/package/tri-angular-pipe-library",techs:["Angular","Nodejs","TypeScript"]},{name:"angular bootstrap custom",description:["angular bootstrap custom on npm packages"],url:"https://www.npmjs.com/package/angular-bootstrap-custom",techs:["Angular","Nodejs","TypeScript","Bootstrap"]},{name:"angular-customize",description:["angular-customize on npm packages"],url:"https://www.npmjs.com/package/angular-customize",techs:["Angular","Nodejs","TypeScript"]},{name:"angular library",description:["angular library on npm packages"],url:"https://www.npmjs.com/package/tri-angular-library",techs:["Angular","Nodejs","TypeScript"]}],a=[{name:"Linkedin:",url:"https://www.linkedin.com/in/trilok-singh1905",view:"",icon:"fa fa-linkedin"},{name:"Github:",url:"https://github.com/trilok3003",view:"",icon:"fa fa-github"},{name:"Stackoverflow:",url:"https://stackoverflow.com/users/10918257/trilok-singh",view:"",icon:"fa fa-stack-overflow"},{name:"npmjs:",url:"https://www.npmjs.com/~trilok3003",view:"",icon:"fa fa-angle-double-right"},{name:"Email:",url:"mailto:triloksingh1905@gmail.com",view:"triloksingh1905@gmail.com",icon:"fa fa-envelope"}],r=["https://www.freecodecamp.org/certification/trilok3003/responsive-web-design","https://www.freecodecamp.org/certification/trilok3003/front-end-development-libraries"],c=[{name:"Angular (Basic)",issuedBy:"hackerrank",link:"https://www.hackerrank.com/certificates/6b98e38b5a12",issuedId:"6b98e38b5a12"},{name:"React (Basic)",issuedBy:"hackerrank",link:"https://www.hackerrank.com/certificates/6bf25e89d61f",issuedId:"6bf25e89d61f"},{name:"Angular (2+)",issuedBy:"cutshort",link:"https://cutshort.io/certificate/68326",issuedId:"68326"},{name:"AngularJS (1.x)",issuedBy:"cutshort",link:"https://cutshort.io/certificate/68806",issuedId:"68806"},{name:"HTML/CSS",issuedBy:"cutshort",link:"https://cutshort.io/certificate/68465",issuedId:"68465"},{name:"Javascript",issuedBy:"cutshort",link:"https://cutshort.io/certificate/68448",issuedId:"68448"},{name:"React.js",issuedBy:"cutshort",link:"https://cutshort.io/certificate/68455",issuedId:"68455"},{name:"Front End Development Libraries",issuedBy:"freecodecamp",link:"https://www.freecodecamp.org/certification/trilok3003/front-end-development-libraries",issuedId:""},{name:"Responsive Web Design",issuedBy:"freecodecamp",link:"https://www.freecodecamp.org/certification/trilok3003/responsive-web-design",issuedId:""}],p=[{name:"Earther  Product",description:["this is civil construction based product which provide solutions like manage inventory, Hr, Product, services, credit debit notes, cash voucher, invoices, department wise responsibility, tare weight and gross weight for equipments."],url:"https://earther.gaiasys.in/",techs:["Angular Material","Nodejs","TypeScript","Ngrx","Html","css","scss","laravel","mysql","Angular (v14, v15))","layout (flex,  grid)","unit testing (jasmine and karma)"]},{name:"Daybook",description:["Daybook handled the day wise credit debit entry particular account and provide stats etc. "],url:"https://daybook.gaiasys.org/",techs:["Angular","Angular Material","Bootstrap","Nodejs","TypeScript","Ngrx","Html","css","scss","laravel","mysql","unit testing (jasmine and karma)"]},{name:"Krc Infra Projects",description:["this is Krc Profile based web project"],url:"http://www.krcinfraprojects.com/",techs:["Html","Css","Javascript","Wordpress"]},{name:"XPlat360",description:["XPlat is a completely interactive Lot Management Tool from Biorev."],url:"https://xplat360.com/",techs:["Html","css","Bootstrap","Agm","svg canvas","Angular Material","Nodejs","TypeScript","Angular 6","unit testing using jasmine and karma","css layout like flex, grid"]}]}}]);