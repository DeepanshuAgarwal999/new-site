(()=>{var e={};e.id=67,e.ids=[67],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},55315:e=>{"use strict";e.exports=require("path")},17360:e=>{"use strict";e.exports=require("url")},65438:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>l.a,__next_app__:()=>u,originalPathname:()=>m,pages:()=>c,routeModule:()=>p,tree:()=>d}),s(22807),s(41878),s(53733),s(59198);var a=s(30170),r=s(45002),n=s(83876),l=s.n(n),i=s(66299),o={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>i[e]);s.d(t,o);let d=["",{children:["(root)",{children:["(news-blogs)",{children:["entertainment-media",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,22807)),"E:\\newsWebsite\\nextjs\\src\\app\\(root)\\(news-blogs)\\entertainment-media\\page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,41878)),"E:\\newsWebsite\\nextjs\\src\\app\\(root)\\layout.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,53733)),"E:\\newsWebsite\\nextjs\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.bind(s,59198)),"E:\\newsWebsite\\nextjs\\src\\app\\not-found.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["E:\\newsWebsite\\nextjs\\src\\app\\(root)\\(news-blogs)\\entertainment-media\\page.tsx"],m="/(root)/(news-blogs)/entertainment-media/page",u={require:s,loadChunk:()=>Promise.resolve()},p=new a.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/(root)/(news-blogs)/entertainment-media/page",pathname:"/entertainment-media",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},95331:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,15889,23)),Promise.resolve().then(s.t.bind(s,34080,23)),Promise.resolve().then(s.bind(s,90484))},90484:(e,t,s)=>{"use strict";s.d(t,{default:()=>i});var a=s(97247),r=s(28964),n=s(72411),l=s(89739);let i=()=>{let[e,t]=(0,r.useState)(""),[s,i]=(0,r.useState)(""),[o,d]=(0,r.useState)(""),c=async a=>{a.preventDefault();try{(await fetch("https://api.emailjs.com/api/v1.0/email/send",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({service_id:"service_2f9u39e",template_id:"template_ck3l8ob",user_id:"VMb3SEnvRjmbHhT_J",template_params:{email:e,name:s,message:o}})})).ok?(t(""),n.ZP.success("Email sent successfully!")):n.ZP.error("Failed to send email.")}catch(e){console.error("Error:",e),n.ZP.error("An unexpected error occurred")}};return a.jsx("div",{className:"contactus shadow-xl border bg-gradient-to-r from-white to-slate-100 py-16 px-4 md:px-10 lg:px-16",children:a.jsx("div",{className:"",children:(0,a.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 pt-4 gap-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsxs)("h1",{className:"font-semibold text-2xl lg:text-3xl text-black",children:["Contact us for our upcoming ",a.jsx("span",{className:"text-red-500",children:"Awards"})]}),(0,a.jsxs)("form",{className:"space-y-4 pt-8 px-6",onSubmit:c,children:[a.jsx("input",{className:"contactField shadow-lg",type:"email",name:"email",onChange:e=>t(e.target.value),value:e,placeholder:"Your email address",required:!0}),a.jsx("input",{className:"contactField shadow-lg",type:"text",name:"name",onChange:e=>i(e.target.value),value:s,placeholder:"Your name",required:!0}),a.jsx("div",{className:"mb-4",children:a.jsx("textarea",{onChange:e=>d(e.target.value),className:"w-full p-4 outline-none resize-none border border-gray-500 min-h-28 shadow-lg   }",placeholder:"Your Message",name:"",id:""})}),a.jsx(l.g,{type:"submit",className:"bg-red-500 w-full h-12 text-lg max-w-sm mx-auto",children:"Submit"})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("h1",{className:"font-semibold text-2xl lg:text-3xl",children:["why us ",a.jsx("span",{className:"text-red-500",children:"?"})]}),a.jsx("p",{className:"pt-8 text-lg",children:"Elevate your understanding of the world of business with Best Business Magazine and news platform. The Executive Headlines genuinely support all top business leaders and the innovative technological ecosystem that surrounds and engages with them. The company ' logo encapsulates our entire idea; it comprises a magazine for influential business leaders and decision-makers. Offering up-to-the-minute, all-encompassing news coverage, market perspectives, and exclusive dialogues with corporate pioneers, we are your ultimate destination for remaining at the vanguard of the business sphere. Enroll with us today and position yourself at the forefront of business acumen with Best News Platform and Business Magazine"})]})]})})})}},74330:(e,t,s)=>{"use strict";s.d(t,{Z:()=>d});var a=s(72051),r=s(38015),n=s(66810),l=s(79036),i=s(39812),o=s(41288);s(26269);let d=async({pageTitle:e,url:t,page:s})=>{let d=null;isNaN(s)&&(0,o.redirect)("/");try{let t=await fetch((0,i.m)(l.A.GetNewNews+"/"+e+`?page=${s}`));d=await t.json()}catch(e){console.log(e)}return(d&&d.data&&e||(0,o.redirect)("/"),0===d.data.data.length)?a.jsx("h1",{children:"No news found!"}):(0,a.jsxs)("div",{className:"container",children:[a.jsx("h1",{className:"text-center text-3xl md:text-5xl font-semibold mb-8",children:e}),a.jsx("div",{className:"space-y-4",children:d.data.data.map(e=>a.jsx(r.Z,{item:e,url:t+"/"+e.url},e.id))}),a.jsx(n.Z,{link:d.data.links,url:`${t}?`})]})}},22807:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>l});var a=s(72051);s(26269);var r=s(74330),n=s(97389);let l=({searchParams:e})=>(0,a.jsxs)(a.Fragment,{children:[a.jsx(r.Z,{pageTitle:"Entertainment & Media",url:"/entertainment-media",page:+(e.page??1)}),a.jsx(n.Z,{})]})},38015:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i});var a=s(72051);s(26269);var r=s(59624),n=s(92349),l=s(79036);let i=({item:e,url:t})=>(0,a.jsxs)("article",{className:"border p-4 rounded-lg grid grid-cols-1 gap-2 md:grid-cols-4 group",children:[a.jsx("div",{className:"col-span-1",children:a.jsx("div",{className:"overflow-hidden rounded-lg w-fit",children:a.jsx(r.default,{src:l.A.ImageUrl+e?.images,alt:e.image_alt,width:250,height:150,className:"aspect-[3/2] image-effect"})})}),(0,a.jsxs)("div",{className:"md:col-span-3",children:[a.jsx("h3",{className:"text-2xl line-clamp-1 font-semibold group-hover:underline",children:a.jsx(n.default,{href:t,children:e.title?.length>50?`${e.title?.substring(0,50)}...`:e.title})}),a.jsx("p",{className:"line-clamp-2",children:e?.meta_description})]})]},e.id)},95265:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});var a=s(72051);s(26269);let r=({children:e})=>(0,a.jsxs)("div",{className:"border-b-[4px] border-black  overflow-hidden relative w-full h-[60px] leading-[50px]",children:[a.jsx("span",{className:"inline-block lg:text-[22px]  uppercase py-[5px] px-5 bg-[#001045] text-white",children:e}),a.jsx("span",{className:"bg-[#001045] w-[85px] h-[32px] rotate-[75deg] inline-block -ml-[40px]"})]})},66810:(e,t,s)=>{"use strict";s.d(t,{Z:()=>l});var a=s(72051),r=s(90209),n=s(92349);s(26269);let l=({link:e,url:t})=>e&&0!==e.length?a.jsx("div",{className:"text-center mb-10 mt-20",children:a.jsx("div",{className:"flex flex-wrap items-center gap-4 justify-center",children:e.map((e,s)=>{let l=e?.active,i=e?.label==="&laquo; Previous"?a.jsx("button",{className:"",children:"Prev"}):e?.label==="Next &raquo;"?a.jsx("button",{className:"",children:"Next"}):e?.label,o=e?.url?.split("?")[1];return a.jsx(n.default,{href:o?t.replace(/\s+/g,"-")+o:"#",children:a.jsx("span",{className:(0,r.cn)("min-w-[40px] min-h-[40px] p-2 block rounded-full bg-neutral-100  ",l&&"bg-neutral-400 "),children:i})},s)})})}):null},97389:(e,t,s)=>{"use strict";s.d(t,{Z:()=>c});var a=s(72051);s(26269);var r=s(95265),n=s(79036),l=s(39812);s(56279);var i=s(59624),o=s(92349);let d=(0,s(45347).createProxy)(String.raw`E:\newsWebsite\nextjs\src\components\shared\contactus-form.tsx#default`),c=async()=>{let e=null;try{let t=await fetch((0,l.m)(`${n.A.GetCompanyLogo}`));e=await t.json()}catch(e){console.log(e)}return e&&e.data?(0,a.jsxs)("div",{className:"py-10 container",children:[(0,a.jsxs)("div",{className:"",children:[a.jsx(r.Z,{children:"Featured Companies"}),a.jsx("div",{className:"pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center place-items-center",children:e.data.data.map(e=>a.jsx(o.default,{className:"inline-block",href:"/feature/"+e?.url,children:a.jsx(i.default,{src:n.A.ImageUrl+e.featured_company_logo,width:150,height:150,alt:"logo",className:"hover:scale-110 duration-200 ease-in-out  "})},e.id))})]}),a.jsx("div",{children:a.jsx(d,{})})]}):null}},90209:(e,t,s)=>{"use strict";s.d(t,{cn:()=>n});var a=s(36272),r=s(51472);function n(...e){return(0,r.m6)((0,a.Z)(e))}},56279:()=>{}};var t=require("../../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),a=t.X(0,[379,996,369,181,623],()=>s(65438));module.exports=a})();