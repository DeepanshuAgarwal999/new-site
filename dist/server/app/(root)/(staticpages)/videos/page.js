(()=>{var e={};e.id=639,e.ids=[639],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},55315:e=>{"use strict";e.exports=require("path")},17360:e=>{"use strict";e.exports=require("url")},17523:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>n.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>c,routeModule:()=>m,tree:()=>d}),s(73621),s(41878),s(53733),s(59198);var a=s(30170),r=s(45002),i=s(83876),n=s.n(i),l=s(66299),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);s.d(t,o);let d=["",{children:["(root)",{children:["(staticpages)",{children:["videos",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,73621)),"E:\\newsWebsite\\nextjs\\src\\app\\(root)\\(staticpages)\\videos\\page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,41878)),"E:\\newsWebsite\\nextjs\\src\\app\\(root)\\layout.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,53733)),"E:\\newsWebsite\\nextjs\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.bind(s,59198)),"E:\\newsWebsite\\nextjs\\src\\app\\not-found.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["E:\\newsWebsite\\nextjs\\src\\app\\(root)\\(staticpages)\\videos\\page.tsx"],p="/(root)/(staticpages)/videos/page",u={require:s,loadChunk:()=>Promise.resolve()},m=new a.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/(root)/(staticpages)/videos/page",pathname:"/videos",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},14306:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,15889,23)),Promise.resolve().then(s.t.bind(s,34080,23)),Promise.resolve().then(s.bind(s,90484)),Promise.resolve().then(s.bind(s,92286))},90484:(e,t,s)=>{"use strict";s.d(t,{default:()=>l});var a=s(97247),r=s(28964),i=s(72411),n=s(89739);let l=()=>{let[e,t]=(0,r.useState)(""),[s,l]=(0,r.useState)(""),[o,d]=(0,r.useState)(""),c=async a=>{a.preventDefault();try{(await fetch("https://api.emailjs.com/api/v1.0/email/send",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({service_id:"service_2f9u39e",template_id:"template_ck3l8ob",user_id:"VMb3SEnvRjmbHhT_J",template_params:{email:e,name:s,message:o}})})).ok?(t(""),i.ZP.success("Email sent successfully!")):i.ZP.error("Failed to send email.")}catch(e){console.error("Error:",e),i.ZP.error("An unexpected error occurred")}};return a.jsx("div",{className:"contactus shadow-xl border bg-gradient-to-r from-white to-slate-100 py-16 px-4 md:px-10 lg:px-16",children:a.jsx("div",{className:"",children:(0,a.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 pt-4 gap-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsxs)("h1",{className:"font-semibold text-2xl lg:text-3xl text-black",children:["Contact us for our upcoming ",a.jsx("span",{className:"text-red-500",children:"Awards"})]}),(0,a.jsxs)("form",{className:"space-y-4 pt-8 px-6",onSubmit:c,children:[a.jsx("input",{className:"contactField shadow-lg",type:"email",name:"email",onChange:e=>t(e.target.value),value:e,placeholder:"Your email address",required:!0}),a.jsx("input",{className:"contactField shadow-lg",type:"text",name:"name",onChange:e=>l(e.target.value),value:s,placeholder:"Your name",required:!0}),a.jsx("div",{className:"mb-4",children:a.jsx("textarea",{onChange:e=>d(e.target.value),className:"w-full p-4 outline-none resize-none border border-gray-500 min-h-28 shadow-lg   }",placeholder:"Your Message",name:"",id:""})}),a.jsx(n.g,{type:"submit",className:"bg-red-500 w-full h-12 text-lg max-w-sm mx-auto",children:"Submit"})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("h1",{className:"font-semibold text-2xl lg:text-3xl",children:["why us ",a.jsx("span",{className:"text-red-500",children:"?"})]}),a.jsx("p",{className:"pt-8 text-lg",children:"Elevate your understanding of the world of business with Best Business Magazine and news platform. The Executive Headlines genuinely support all top business leaders and the innovative technological ecosystem that surrounds and engages with them. The company ' logo encapsulates our entire idea; it comprises a magazine for influential business leaders and decision-makers. Offering up-to-the-minute, all-encompassing news coverage, market perspectives, and exclusive dialogues with corporate pioneers, we are your ultimate destination for remaining at the vanguard of the business sphere. Enroll with us today and position yourself at the forefront of business acumen with Best News Platform and Business Magazine"})]})]})})})}},73621:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c});var a=s(72051),r=s(59624),i=s(92349);let n={src:"/_next/static/media/ytbtn.707d46ee.png",height:1600,width:1600,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAaVBMVEX+YU3+Uzr+PQP+PQH+PQD+PAD+OwD+OgD+GgD+AAD+PQD+OwD+OwD+PQH+OwD+PQH+QRX+QRX+QA/+PAD+Syz+LwD+Qxn+AAD+AAD+1NL+0M3+TTD+Qxr+Pgn+Pgf+PAD+OgD+NQD+AABwedo/AAAAG3RSTlMAAAAAAAAAAAAAOzs8RUVaXF5vb3t7+Pj5+/sIOcI4AAAAOklEQVR42mNgY2XmYGdiZWFg5BUWFRHi42TgkpeVVlKU42HglxGXlBJTEAQyJEAMAZgUNwMDTDFMOwCaLgRJDjv4EQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},l=["https://www.youtube.com/watch?v=4HYKLY7hXr4","https://www.youtube.com/watch?v=Py4zrERAV8s","https://www.youtube.com/watch?v=yh670QHDISw","https://www.youtube.com/watch?v=EUEB1sx_RwM","https://www.youtube.com/watch?v=IIW_DYprilc"],o=e=>new URL(e).searchParams.get("v");var d=s(97389);let c=()=>(0,a.jsxs)("div",{className:"container",children:[a.jsx("div",{className:"flex flex-wrap items-center justify-evenly gap-6 gap-y-10",children:l.map(e=>{let t=o(e);return(0,a.jsxs)(i.default,{href:e,target:"_blank",rel:"noopener noreferrer",className:"relative w-[300px] h-[250px] border-4 border-red-500",children:[a.jsx(r.default,{src:`https://img.youtube.com/vi/${t}/hqdefault.jpg`,alt:"Video Thumbnail",fill:!0,className:"object-cover"}),a.jsx(r.default,{src:n,alt:"Play Video",width:100,height:100,className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"})]},t)})}),a.jsx(d.Z,{})]})},95265:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});var a=s(72051);s(26269);let r=({children:e})=>(0,a.jsxs)("div",{className:"border-b-[4px] border-black  overflow-hidden relative w-full h-[60px] leading-[50px]",children:[a.jsx("span",{className:"inline-block lg:text-[22px]  uppercase py-[5px] px-5 bg-[#001045] text-white",children:e}),a.jsx("span",{className:"bg-[#001045] w-[85px] h-[32px] rotate-[75deg] inline-block -ml-[40px]"})]})},97389:(e,t,s)=>{"use strict";s.d(t,{Z:()=>c});var a=s(72051);s(26269);var r=s(95265),i=s(79036),n=s(39812);s(56279);var l=s(59624),o=s(92349);let d=(0,s(45347).createProxy)(String.raw`E:\newsWebsite\nextjs\src\components\shared\contactus-form.tsx#default`),c=async()=>{let e=null;try{let t=await fetch((0,n.m)(`${i.A.GetCompanyLogo}`));e=await t.json()}catch(e){console.log(e)}return e&&e.data?(0,a.jsxs)("div",{className:"py-10 container",children:[(0,a.jsxs)("div",{className:"",children:[a.jsx(r.Z,{children:"Featured Companies"}),a.jsx("div",{className:"pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center place-items-center",children:e.data.data.map(e=>a.jsx(o.default,{className:"inline-block",href:"/feature/"+e?.url,children:a.jsx(l.default,{src:i.A.ImageUrl+e.featured_company_logo,width:150,height:150,alt:"logo",className:"hover:scale-110 duration-200 ease-in-out  "})},e.id))})]}),a.jsx("div",{children:a.jsx(d,{})})]}):null}},92286:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});let a={src:"/_next/static/media/ytbtn.707d46ee.png",height:1600,width:1600,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAaVBMVEX+YU3+Uzr+PQP+PQH+PQD+PAD+OwD+OgD+GgD+AAD+PQD+OwD+OwD+PQH+OwD+PQH+QRX+QRX+QA/+PAD+Syz+LwD+Qxn+AAD+AAD+1NL+0M3+TTD+Qxr+Pgn+Pgf+PAD+OgD+NQD+AABwedo/AAAAG3RSTlMAAAAAAAAAAAAAOzs8RUVaXF5vb3t7+Pj5+/sIOcI4AAAAOklEQVR42mNgY2XmYGdiZWFg5BUWFRHi42TgkpeVVlKU42HglxGXlBJTEAQyJEAMAZgUNwMDTDFMOwCaLgRJDjv4EQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},56279:()=>{}};var t=require("../../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),a=t.X(0,[379,996,369,623],()=>s(17523));module.exports=a})();