import{ja as p}from"./chunk-OJ5Z2GON.js";import{i as d}from"./chunk-LL2PWVR2.js";var h=(()=>{class a{constructor(){}exportText(t,e){this.downloadFile(t,`${e}.txt`,"text/plain")}exporttext(t,e,o="txt"){this.downloadFile(t,`${e}.${o}`,"text/plain;charset=utf-8")}exportJSON(t,e){let o=JSON.stringify(t,null,2);this.downloadFile(o,`${e}.json`,"application/json")}exportCSV(t,e,o){if(!t?.length)return;let r=c=>{if(c==null)return"";let i=String(c).replace(/"/g,'""');return/[",\n]/.test(i)?`"${i}"`:i},s=o?.headers??Object.keys(t[0]),n=o?.rowMapper??(c=>s.map(i=>c[i])),l=[s.map(r).join(","),...t.map(c=>n(c).map(r).join(","))].join(`
`);this.downloadFile(l,`${e}.csv`,"text/csv")}exportPDF(t,e){let o=this.jsonToBase64(t),r=atob(o),s=new Array(r.length).fill(0).map((l,c)=>r.charCodeAt(c)),n=new Uint8Array(s);this.downloadFile(n,`${e}.pdf`,"application/pdf")}jsonToBase64(t){let e=JSON.stringify(t);return btoa(unescape(encodeURIComponent(e)))}base64ToJson(t){let e=decodeURIComponent(escape(atob(t)));return JSON.parse(e)}convertToCsv(t,e=[],o=[]){if(!t?.length)return"";let r=e.length?e:Object.keys(t[0]),s=o.length?o:r,n=c=>c==null||c==null?'""':`"${String(c).replace(/"/g,'""')}"`,l=t.map(c=>r.map(i=>n(c[i])).join(","));return[s.join(","),...l].join(`\r
`)}exportCsv(s){return d(this,arguments,function*(t,e="data",o=[],r=[]){let n=yield this.convertToCsv(t,o,r);this.downloadFile(n,`${e}.csv`,"text/csv;charset=utf-8;")})}downloadFile(t,e,o){if(!e)return;let r=new Blob([t],{type:o}),s=window.URL.createObjectURL(r),n=document.createElement("a");n.href=s,n.download=e,n.click(),window.URL.revokeObjectURL(s)}downloadByUrl(t,e){return d(this,null,function*(){try{let r=yield(yield fetch(t)).blob(),s=URL.createObjectURL(r),n=document.createElement("a");n.href=s,n.download=`${e}.jpg`,n.click(),window.URL.revokeObjectURL(s)}catch(o){alert("Failed to download the file!")}})}copyToClipboard(t){return d(this,null,function*(){try{yield navigator.clipboard.writeText(t)}catch(e){console.error("Unable to copy text")}})}copyJson(t){let e=JSON.stringify(t,null,2);navigator.clipboard.writeText(e).then(()=>{alert("Copied to clipboard!")})}exportSVG(t,e="flowchart"){if(!t)return;let o=new XMLSerializer().serializeToString(t);this.downloadFile(o,`${e}.svg`,"image/svg+xml")}print(t){let e=window.open("","_blank");e&&(e.document.write(`
      <html>
        <head>
          <title>Print Diagram</title>
        </head>
        <body>
          ${t}
          <script>
            window.onload = function() {
              window.print();
            };
          <\/script>
        </body>
      </html>
    `),e.document.close())}static{this.\u0275fac=function(e){return new(e||a)}}static{this.\u0275prov=p({token:a,factory:a.\u0275fac,providedIn:"root"})}}return a})();export{h as a};
