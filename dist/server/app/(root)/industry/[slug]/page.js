(()=>{var e={};e.id=859,e.ids=[859],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},55315:e=>{"use strict";e.exports=require("path")},17360:e=>{"use strict";e.exports=require("url")},8871:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>l.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>m,tree:()=>d}),t(94423),t(41878),t(53733),t(59198);var a=t(30170),r=t(45002),i=t(83876),l=t.n(i),n=t(66299),o={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);t.d(s,o);let d=["",{children:["(root)",{children:["industry",{children:["[slug]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,94423)),"E:\\newsWebsite\\nextjs\\src\\app\\(root)\\industry\\[slug]\\page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,41878)),"E:\\newsWebsite\\nextjs\\src\\app\\(root)\\layout.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,53733)),"E:\\newsWebsite\\nextjs\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(t.bind(t,59198)),"E:\\newsWebsite\\nextjs\\src\\app\\not-found.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["E:\\newsWebsite\\nextjs\\src\\app\\(root)\\industry\\[slug]\\page.tsx"],u="/(root)/industry/[slug]/page",p={require:t,loadChunk:()=>Promise.resolve()},m=new a.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/(root)/industry/[slug]/page",pathname:"/industry/[slug]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},95331:(e,s,t)=>{Promise.resolve().then(t.t.bind(t,15889,23)),Promise.resolve().then(t.t.bind(t,34080,23)),Promise.resolve().then(t.bind(t,90484))},90484:(e,s,t)=>{"use strict";t.d(s,{default:()=>n});var a=t(97247),r=t(28964),i=t(72411),l=t(89739);let n=()=>{let[e,s]=(0,r.useState)(""),[t,n]=(0,r.useState)(""),[o,d]=(0,r.useState)(""),c=async a=>{a.preventDefault();try{(await fetch("https://api.emailjs.com/api/v1.0/email/send",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({service_id:"service_2f9u39e",template_id:"template_ck3l8ob",user_id:"VMb3SEnvRjmbHhT_J",template_params:{email:e,name:t,message:o}})})).ok?(s(""),i.ZP.success("Email sent successfully!")):i.ZP.error("Failed to send email.")}catch(e){console.error("Error:",e),i.ZP.error("An unexpected error occurred")}};return a.jsx("div",{className:"contactus shadow-xl border bg-gradient-to-r from-white to-slate-100 py-16 px-4 md:px-10 lg:px-16",children:a.jsx("div",{className:"",children:(0,a.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 pt-4 gap-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsxs)("h1",{className:"font-semibold text-2xl lg:text-3xl text-black",children:["Contact us for our upcoming ",a.jsx("span",{className:"text-red-500",children:"Awards"})]}),(0,a.jsxs)("form",{className:"space-y-4 pt-8 px-6",onSubmit:c,children:[a.jsx("input",{className:"contactField shadow-lg",type:"email",name:"email",onChange:e=>s(e.target.value),value:e,placeholder:"Your email address",required:!0}),a.jsx("input",{className:"contactField shadow-lg",type:"text",name:"name",onChange:e=>n(e.target.value),value:t,placeholder:"Your name",required:!0}),a.jsx("div",{className:"mb-4",children:a.jsx("textarea",{onChange:e=>d(e.target.value),className:"w-full p-4 outline-none resize-none border border-gray-500 min-h-28 shadow-lg   }",placeholder:"Your Message",name:"",id:""})}),a.jsx(l.g,{type:"submit",className:"bg-red-500 w-full h-12 text-lg max-w-sm mx-auto",children:"Submit"})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("h1",{className:"font-semibold text-2xl lg:text-3xl",children:["why us ",a.jsx("span",{className:"text-red-500",children:"?"})]}),a.jsx("p",{className:"pt-8 text-lg",children:"Elevate your understanding of the world of business with Best Business Magazine and news platform. The Executive Headlines genuinely support all top business leaders and the innovative technological ecosystem that surrounds and engages with them. The company ' logo encapsulates our entire idea; it comprises a magazine for influential business leaders and decision-makers. Offering up-to-the-minute, all-encompassing news coverage, market perspectives, and exclusive dialogues with corporate pioneers, we are your ultimate destination for remaining at the vanguard of the business sphere. Enroll with us today and position yourself at the forefront of business acumen with Best News Platform and Business Magazine"})]})]})})})}},94423:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>c});var a=t(72051),r=t(38015),i=t(66810),l=t(97389),n=t(79036),o=t(39812),d=t(41288);t(26269);let c=async({params:e,searchParams:s})=>{let t={"Big-data":"Big data","Data-analytics":"Data analytics","Cyber-security":"Cyber security","IT-services":"IT Services","media-entertainment":"Media & Entertainment","banking-finance":"Banking & Finance","food-beverage":"Food & Beverage","digital-marketing":"Digital Marketing"}[e?.slug]||e?.slug||"Software",c=null,u=1;if(s&&s.page){let e=+s.page;isNaN(e)?(0,d.redirect)("/"):u=e}try{let e=await fetch((0,o.m)(`${n.A.GetNews}/industry/${t}?page=${u}`));c=await e.json()}catch(e){console.log(e)}return c&&c.data||(0,d.redirect)("/"),(0,a.jsxs)("div",{className:"container",children:[a.jsx("div",{className:"flex flex-col gap-4",children:c?.data.data.map(e=>a.jsx(r.Z,{item:e,url:`/${e.cat_slug.replace(/\s+/g,"-").toLowerCase()}/${e?.url}`},e.id))}),a.jsx(i.Z,{link:c?.data.links,url:`/industry/${e.slug}?`}),a.jsx(l.Z,{})]})}},38015:(e,s,t)=>{"use strict";t.d(s,{Z:()=>n});var a=t(72051);t(26269);var r=t(59624),i=t(92349),l=t(79036);let n=({item:e,url:s})=>(0,a.jsxs)("article",{className:"border p-4 rounded-lg grid grid-cols-1 gap-2 md:grid-cols-4 group",children:[a.jsx("div",{className:"col-span-1",children:a.jsx("div",{className:"overflow-hidden rounded-lg w-fit",children:a.jsx(r.default,{src:l.A.ImageUrl+e?.images,alt:e.image_alt,width:250,height:150,className:"aspect-[3/2] image-effect"})})}),(0,a.jsxs)("div",{className:"md:col-span-3",children:[a.jsx("h3",{className:"text-2xl line-clamp-1 font-semibold group-hover:underline",children:a.jsx(i.default,{href:s,children:e.title?.length>50?`${e.title?.substring(0,50)}...`:e.title})}),a.jsx("p",{className:"line-clamp-2",children:e?.meta_description})]})]},e.id)},95265:(e,s,t)=>{"use strict";t.d(s,{Z:()=>r});var a=t(72051);t(26269);let r=({children:e})=>(0,a.jsxs)("div",{className:"border-b-[4px] border-black  overflow-hidden relative w-full h-[60px] leading-[50px]",children:[a.jsx("span",{className:"inline-block lg:text-[22px]  uppercase py-[5px] px-5 bg-[#001045] text-white",children:e}),a.jsx("span",{className:"bg-[#001045] w-[85px] h-[32px] rotate-[75deg] inline-block -ml-[40px]"})]})},66810:(e,s,t)=>{"use strict";t.d(s,{Z:()=>l});var a=t(72051),r=t(90209),i=t(92349);t(26269);let l=({link:e,url:s})=>e&&0!==e.length?a.jsx("div",{className:"text-center mb-10 mt-20",children:a.jsx("div",{className:"flex flex-wrap items-center gap-4 justify-center",children:e.map((e,t)=>{let l=e?.active,n=e?.label==="&laquo; Previous"?a.jsx("button",{className:"",children:"Prev"}):e?.label==="Next &raquo;"?a.jsx("button",{className:"",children:"Next"}):e?.label,o=e?.url?.split("?")[1];return a.jsx(i.default,{href:o?s.replace(/\s+/g,"-")+o:"#",children:a.jsx("span",{className:(0,r.cn)("min-w-[40px] min-h-[40px] p-2 block rounded-full bg-neutral-100  ",l&&"bg-neutral-400 "),children:n})},t)})})}):null},97389:(e,s,t)=>{"use strict";t.d(s,{Z:()=>c});var a=t(72051);t(26269);var r=t(95265),i=t(79036),l=t(39812);t(56279);var n=t(59624),o=t(92349);let d=(0,t(45347).createProxy)(String.raw`E:\newsWebsite\nextjs\src\components\shared\contactus-form.tsx#default`),c=async()=>{let e=null;try{let s=await fetch((0,l.m)(`${i.A.GetCompanyLogo}`));e=await s.json()}catch(e){console.log(e)}return e&&e.data?(0,a.jsxs)("div",{className:"py-10 container",children:[(0,a.jsxs)("div",{className:"",children:[a.jsx(r.Z,{children:"Featured Companies"}),a.jsx("div",{className:"pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center place-items-center",children:e.data.data.map(e=>a.jsx(o.default,{className:"inline-block",href:"/feature/"+e?.url,children:a.jsx(n.default,{src:i.A.ImageUrl+e.featured_company_logo,width:150,height:150,alt:"logo",className:"hover:scale-110 duration-200 ease-in-out  "})},e.id))})]}),a.jsx("div",{children:a.jsx(d,{})})]}):null}},90209:(e,s,t)=>{"use strict";t.d(s,{cn:()=>i});var a=t(36272),r=t(51472);function i(...e){return(0,r.m6)((0,a.Z)(e))}},56279:()=>{}};var s=require("../../../../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),a=s.X(0,[379,996,369,181,623],()=>t(8871));module.exports=a})();