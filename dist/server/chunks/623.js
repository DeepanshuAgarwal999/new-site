exports.id=623,exports.ids=[623],exports.modules={42725:(e,t,a)=>{Promise.resolve().then(a.t.bind(a,63642,23)),Promise.resolve().then(a.t.bind(a,87586,23)),Promise.resolve().then(a.t.bind(a,47838,23)),Promise.resolve().then(a.t.bind(a,58057,23)),Promise.resolve().then(a.t.bind(a,77741,23)),Promise.resolve().then(a.t.bind(a,13118,23))},4887:(e,t,a)=>{Promise.resolve().then(a.t.bind(a,15889,23)),Promise.resolve().then(a.t.bind(a,34080,23)),Promise.resolve().then(a.bind(a,36203)),Promise.resolve().then(a.bind(a,23421)),Promise.resolve().then(a.bind(a,6423)),Promise.resolve().then(a.bind(a,40200)),Promise.resolve().then(a.bind(a,87959))},31038:(e,t,a)=>{Promise.resolve().then(a.bind(a,72411))},35303:()=>{},36203:(e,t,a)=>{"use strict";a.d(t,{default:()=>c});var s=a(97247),l=a(4215),r=a(56460),i=a(67636),n=a(79906),o=a(34178);a(28964);let c=()=>{let e=(0,o.usePathname)();if("/"===e)return null;let t=e.split("/").splice(1),a="";return s.jsx("nav",{className:"flex container pt-8 md:pt-4","aria-label":"Breadcrumb",children:(0,s.jsxs)("ol",{role:"list",className:"flex items-center space-x-2",children:[s.jsx("li",{children:s.jsx("div",{children:(0,s.jsxs)(n.default,{href:"/",className:"text-gray-400 hover:text-gray-500",children:[s.jsx(r.Z,{className:"h-5 w-5 flex-shrink-0","aria-hidden":"true"}),s.jsx("span",{className:"sr-only",children:"Home"})]})})}),t.map((e,r)=>{a+=`/${e}`;let o=r===t.length-1;return s.jsx("li",{children:(0,s.jsxs)("div",{className:"flex items-center ",children:[s.jsx(i.Z,{className:"h-5 w-5 flex-shrink-0 text-gray-400","aria-hidden":"true"}),s.jsx(n.default,{href:a,className:(0,l.cn)("ml-4 text-sm font-medium text-gray-500 hover:text-gray-700 line-clamp-1  ",`${o&&"text-gray-800"}`),children:e})]})},r)})]})})}},23421:(e,t,a)=>{"use strict";a.d(t,{default:()=>E});var s=a(97247),l=a(28964),r=a(73267),i=a(64295),n=a(97078),o=a(17459),c=a(4215),d=a(79906),h=a(44597),u=a(34178),m=a(62513);let x={type:"spring",mass:.5,damping:11.5,stiffness:100,restDelta:.001,restSpeed:.001},p=({setActive:e,active:t,item:a,path:l,children:r})=>{let i=(0,u.usePathname)();return(0,s.jsxs)("div",{onMouseEnter:()=>e(a),className:"relative ",children:[l?(0,s.jsxs)(g,{href:l,className:(0,c.cn)("cursor-pointer ",i===l&&"text-red-500"),children:[a," "]}):(0,s.jsxs)(o.E.p,{transition:{duration:.3},className:"cursor-pointer  hover:opacity-[0.8] inline-flex gap-1",children:[a," ",s.jsx(m.Z,{className:"size-5 pt-1 mt-0.5"})]}),null!==t&&!!r&&s.jsx(o.E.div,{initial:{opacity:0,scale:.85,y:10},animate:{opacity:1,scale:1,y:0},transition:x,children:t===a&&s.jsx("div",{className:"absolute top-[calc(100%_+_0.1rem)] left-1/2 transform -translate-x-1/2 pt-4",children:s.jsx(o.E.div,{transition:x,layoutId:"active",className:"bg-white  backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl",children:s.jsx(o.E.div,{layout:!0,className:"w-max h-full p-4 ",children:r})})})})]})},b=({setActive:e,children:t})=>s.jsx("nav",{onMouseLeave:()=>e(null),className:"relative rounded-full border border-white/[0.2] text-base text-nowrap shadow-input flex justify-center space-x-4 px-6 py-4 text-slate-900 font-apple",children:t}),g=({children:e,className:t,...a})=>s.jsx(d.default,{className:(0,c.cn)("hover:opacity-[0.8] text-base ",t),...a,children:e});var f=a(49256);let v=()=>{let e=(0,l.useRef)(null),t=(0,u.useRouter)();return s.jsx("div",{className:"relative transition-all w-[50px] h-[50px] shadow-xl ease-in-out z-[2000] bg-gray-50 border-4 border-white rounded-full p-1 hover:w-[260px] flex items-center cursor-pointer group duration-1000",onMouseEnter:()=>{e.current&&e.current.focus()},children:(0,s.jsxs)("form",{onSubmit:a=>{a.preventDefault();let s=e.current?.value.trim();s&&t.push("/search/"+s)},children:[s.jsx("input",{ref:e,type:"text",className:"left-0 w-full max-w-[245px] bg-gray-50 outline-none border-0 rounded-2xl px-4 hidden group-hover:block",placeholder:"Search here...","aria-label":"Search",maxLength:50}),s.jsx("button",{type:"submit",className:"box-border absolute right-1 top-1.5 duration-500 group-hover:bg-[#8c52ff] size-8 p-1 rounded-full group-hover:text-white",children:s.jsx(f.Z,{})})]})})},y=[{label:"Home",path:"/"},{label:"Technology",subMenu:[{label:"Software",path:"/technology/software"},{label:"Big Data",path:"/technology/Big-data"},{label:"Security",path:"/technology/Security"},{label:"Data Analytics",path:"/technology/Data-analytics"},{label:"Cyber Security",path:"/technology/Cyber-security"},{label:"IoT",path:"/technology/Iot"},{label:"Networking",path:"/technology/Networking"},{label:"IT Services",path:"/technology/IT-services"},{label:"Storage",path:"/technology/Storage"}]},{label:"Industry",subMenu:[{label:"Healthcare",path:"/industry/Healthcare"},{label:"Retail",path:"/industry/Retail"},{label:"Telecom",path:"/industry/Telecom"},{label:"Banking & Finance",path:"/industry/banking-finance"},{label:"Education",path:"/industry/education"},{label:"Legal",path:"/industry/legal"},{label:"Media & Entertainment",path:"/industry/media-entertainment"},{label:"Food & Beverage",path:"/industry/food-beverage"},{label:"ERP",path:"/industry/ERP"},{label:"Digital Marketing",path:"/industry/digital-marketing"},{label:"Business",path:"/industry/Business"}]},{label:"Magazines",path:"/magazines",subMenu:[]},{label:"Our Clients",path:"/featured-vendors",subMenu:[]},{label:"Startup Insights",path:"/startup-insights",subMenu:[]},{label:"CXOs",path:"/cxos",subMenu:[]},{label:"Leaders Speak",path:"/leader-speaks",subMenu:[]},{label:"Videos",path:"/videos",subMenu:[]},{label:"News/Blogs",subMenu:[{label:"Sports",path:"/sports"},{label:"Life Style",path:"/lifestyle"},{label:"Entrepreneurs",path:"/entrepreneurs"},{label:"Entertainment & Media",path:"/entertainment-media"},{label:"Awards & Events",path:"/awards-events"}]}],A=({className:e})=>{let[t,a]=(0,l.useState)(null),{scrollYProgress:d}=(0,r.v)(),[h,u]=(0,l.useState)(!1);return(0,i.W)(d,"change",e=>{"number"==typeof e&&(d.get()>.03?u(!0):u(!1))}),s.jsx(n.M,{mode:"wait",children:s.jsx(o.E.div,{initial:{opacity:1,y:-100},animate:{y:h?0:-100,opacity:h?1:0},transition:{duration:.5,ease:"easeIn"},className:(0,c.cn)("flex max-lg:hidden fixed top-0 inset-x-0 mx-auto border  shadow-lg  w-full bg-white z-[5000] px-4 py-2   items-center justify-center ",e),children:(0,s.jsxs)("div",{className:"relative w-full  flex items-center justify-center",children:[s.jsx("div",{className:(0,c.cn)(" inset-x-0 max-w-2xl mx-auto z-50",e),children:s.jsx(b,{setActive:a,children:y.map((e,l)=>s.jsx(p,{setActive:a,active:t,item:e.label,path:e.path??"",children:e.subMenu&&0!==e.subMenu.length&&s.jsx("div",{className:"flex flex-col space-y-2 text-base",children:e.subMenu.map((e,t)=>s.jsx(g,{href:e.path,children:e.label},t))})},l))})}),s.jsx("div",{className:"absolute right-2",children:s.jsx(v,{})})]})})})};var j=a(87959),w=a(6683),N=a(37013);let S=e=>e.toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"}),k=({open:e,setOpen:t})=>{let[a,r]=(0,l.useState)(null),i=e=>{r(a===e?null:e)};return(0,s.jsxs)(o.E.div,{initial:{opacity:0,x:"-100%"},animate:{opacity:e?1:0,x:e?0:"-100%"},transition:{type:"spring",stiffness:200,damping:30},className:"fixed border-2 inset-y-0 left-0 w-full  bg-white z-[4000] h-screen  overflow-y-auto",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between py-4 pr-4",children:[s.jsx(h.default,{src:j.default,alt:"logo",width:300,height:200}),s.jsx("button",{className:"",onClick:()=>t(!1),children:s.jsx(N.Z,{size:24})})]}),s.jsx("ul",{className:"py-4 space-y-2 text-lg px-4",children:y.map((e,l)=>(0,s.jsxs)("li",{className:"relative",children:[(0,s.jsxs)("div",{className:(0,c.cn)("flex justify-between items-center py-2 px-4 rounded-lg cursor-pointer hover:text-gray-700 transition-colors hover:bg-slate-100 ",a===l&&"bg-slate-100 text-gray-700"),onClick:()=>e.subMenu&&0!==e.subMenu.length?i(l):t(!1),children:[s.jsx(d.default,{href:e.path??"#",onClick:()=>t(!1),children:e.label}),e.subMenu&&0!==e.subMenu.length&&s.jsx(m.Z,{size:18,className:`transform transition-transform ${a===l?"rotate-180":""}`})]}),s.jsx(n.M,{children:e.subMenu&&a===l&&s.jsx(o.E.ul,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{type:"spring",stiffness:200,damping:25},className:"pl-6 space-y-2 overflow-hidden mt-4",children:e.subMenu.map((e,a)=>s.jsx("li",{className:"text-base",children:s.jsx(d.default,{href:e.path,className:"block  hover:text-gray-700 transition-colors hover:bg-slate-100 rounded-lg p-2",onClick:()=>t(!1),children:e.label})},a))})})]},l))})]})},E=()=>{let[e,t]=(0,l.useState)(null),[a,r]=(0,l.useState)(!1),i=S(new Date);return(0,s.jsxs)("header",{className:"w-full pt-2",children:[(0,s.jsxs)("div",{className:"container",children:[(0,s.jsxs)("nav",{className:"relative grid grid-cols-1 lg:grid-cols-3 place-items-center",children:[s.jsx("button",{className:"size-8 absolute lg:hidden  top-20  left-0 z-20   ",onClick:()=>r(e=>!e),children:s.jsx(w.Z,{})}),s.jsx("p",{className:"font-tinos hidden lg:block w-full",children:i}),s.jsx(d.default,{href:"/",children:s.jsx(h.default,{src:j.default,width:500,height:500,alt:"the executive headlines",className:"mx-auto"})}),s.jsx("div",{className:"max-lg:absolute top-[4.4rem] md:top-14 lg:top-1 right-4 md:right-0 w-full flex justify-end ",children:s.jsx(v,{})})]}),s.jsx("div",{className:"mt-10 z-[2000] lg:hidden",children:s.jsx(k,{open:a,setOpen:r})}),s.jsx("div",{className:"relative w-full  flex items-center justify-center border-y-4 border-double border-gray-300 mt-4 max-lg:hidden",children:s.jsx("div",{className:" inset-x-0 max-w-2xl font-sans mx-auto z-50 max-lg:tracking-tight ",children:s.jsx(b,{setActive:t,children:y.map((a,l)=>s.jsx(p,{setActive:t,active:e,item:a.label,path:a.path??"",children:a.subMenu&&0!==a.subMenu.length&&s.jsx("div",{className:"flex flex-col space-y-4 ",children:a.subMenu.map((e,t)=>s.jsx(g,{href:e.path,children:e.label},t))})},l))})})})]}),s.jsx(A,{navItems:y})]})}},6423:(e,t,a)=>{"use strict";a.d(t,{default:()=>o});var s=a(97247),l=a(28964),r=a(89739),i=a(72411),n=a(95389);let o=()=>{let e=(0,l.useRef)(null),t=async t=>{if(t.preventDefault(),e.current&&e.current.value)try{(await fetch("https://executiveheadlines.com/admin/api/news-letter",{method:"POST",body:JSON.stringify({email:e.current.value})})).ok?(i.ZP.success("Subscribed successfully"),e.current.value=""):i.ZP.error("Unable to subscribe")}catch(e){console.log(e)}};return s.jsx(s.Fragment,{children:(0,s.jsxs)("form",{className:"space-y-4",onSubmit:t,children:[s.jsx("p",{className:"text-xl md:text-2xl font-semibold",children:"Subscribe to Our Newsletter"}),(0,s.jsxs)("div",{className:"h-12 w-full px-4 text-base shadow-xl rounded-md border border-black flex items-center gap-4",children:[s.jsx(n.Z,{className:"size-4"}),s.jsx("input",{ref:e,name:"email",required:!0,type:"email",placeholder:"Email address",className:"placeholder:text-gray-500 outline-none bg-transparent"})]}),s.jsx(r.g,{type:"submit",className:"relative z-10 h-14 w-full bg-red-500 text-base shadow-lg transition-shadow duration-300 hover:shadow-xl",children:"Subscribe"})]})})}},89739:(e,t,a)=>{"use strict";a.d(t,{g:()=>i});var s=a(97247),l=a(4215),r=a(47358);let i=({className:e,children:t,...a})=>(0,s.jsxs)("button",{className:(0,l.cn)("group relative  flex transform items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-md border border-white bg-brand-700 px-8 text-base/7 font-medium text-white transition-all duration-300 hover:ring-2 hover:ring-brand-700 hover:ring-offset-2 focus:outline-none focus:ring-red-500 ring-red-500 focus:ring-2 focus:ring-offset-2",e),...a,children:[(0,s.jsxs)("span",{className:"relative z-10 flex items-center gap-2",children:[t,s.jsx(r.Z,{className:"size-4 shrink-0 text-white transition-transform duration-300 ease-in-out group-hover:translate-x-[2px]"})]}),s.jsx("div",{className:"ease-[cubic-bezier(0.19,1,0.22,1)] absolute -left-[75px] -top-[50px] -z-10 h-[155px] w-8 rotate-[35deg] bg-white opacity-20 transition-all duration-500 group-hover:left-[120%]"})]})},4215:(e,t,a)=>{"use strict";a.d(t,{cn:()=>r});var s=a(61929),l=a(35770);function r(...e){return(0,l.m6)((0,s.Z)(e))}},41878:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>v});var s=a(72051),l=a(45347);let r=(0,l.createProxy)(String.raw`E:\newsWebsite\nextjs\src\components\shared\BreadCrumb.tsx#default`);var i=a(59624);let n={src:"/_next/static/media/logo.7e0ca90f.png",height:150,width:1e3,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAKklEQVR4nGOU0XGTe8LIqBbz9zdj6PePTFncwsyRf35++8zIxM3IwPAJAMNIDBGfYCreAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:1},o={src:"/_next/static/media/footer_validation.205673dd.png",height:82,width:150,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAb0lEQVR42gFkAJv/AFhppqSqx5uhwQA8l0ZcoT1Wn0ddohJAmACUnL7T1uOpr8pjc6uBjbh9ibZ/i7dZaqYAVWakmJ/BO1WebnuvdIGydoKydYKyVWelAEFZoEJbomBxqlJnpkpgo0pgo0xhpC9NnMJtMIlLCpafAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4};var c=a(62023);let d=[{path:"/about-us",label:"About Us"},{path:"/contact-us",label:"Contact Us"},{path:"/reprint-permission",label:"Reprint & Permission"},{path:"/disclaimer",label:"Disclaimer"},{path:"/privacy-policy",label:"Privacy Policy"},{path:"/advertise",label:"Advertise"}],h=[{icon:c.neY,label:"Facebook",href:"https://www.facebook.com/executiveheadlinesmagazine/"},{icon:c.Zzi,label:"Instagram",href:"https://www.instagram.com/theexecutiveheadlines/"},{icon:c.mdU,label:"Twitter",href:"https://twitter.com/i/flow/login?redirect_after_login=%2FTEHeadlines"},{icon:c.D9H,label:"linkedin",href:"https://www.linkedin.com/company/the-executive-headlines/?viewAsMember=true"},{icon:c.JTt,label:"Pinterest",href:"https://in.pinterest.com/theexecutiveheadlines/_created/"},{icon:c.opf,label:"youtube",href:"https://www.youtube.com/channel/UCK490L6vb8-9LSXpqzYSLjA"}];var u=a(65702),m=a(92349);let x=(0,l.createProxy)(String.raw`E:\newsWebsite\nextjs\src\components\subscribe-newsletter.tsx#default`);var p=a(79036),b=a(39812);let g=async()=>{let e=new Date().getFullYear(),t=null;try{let e=await fetch((0,b.m)(`${p.A.GetMagazine}`));t=await e.json()}catch(e){console.log(e)}return(0,s.jsxs)("footer",{className:"border-t-8 border-spacing-y-2 border-gray-300 border-double bg-slate-50",children:[(0,s.jsxs)("div",{className:"md:pt-8 px-8",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between flex-wrap gap-4",children:[s.jsx(i.default,{src:n,width:500,height:500,alt:"The executive headlines"}),s.jsx(i.default,{src:o,width:100,height:100,alt:""}),s.jsx("div",{className:"flex items-center gap-2 justify-center",children:h.map((e,t)=>s.jsx(m.default,{href:e.href,target:"_blank",rel:"noreferrer",children:s.jsx(u.G,{icon:e.icon,size:"xl",className:"cursor-pointer size-8",title:e.label})},t))})]}),(0,s.jsxs)("main",{className:"grid md:grid-cols-3 md:lace-content-center md:justify-items-center gap-6 my-6",children:[(0,s.jsxs)("div",{className:"flex flex-col gap-4",children:[s.jsx("h1",{className:"text-xl md:text-2xl font-semibold",children:"QuickLinks"}),d.map((e,t)=>s.jsx(m.default,{href:e.path,className:"font-semibold text-sm md:text-base hover:text-gray-700 ease-in-out duration-200",children:e.label},t))]}),t&&t?.data&&0!==t.data.data.length&&(0,s.jsxs)("div",{children:[s.jsx("h1",{className:"text-xl md:text-2xl font-semibold text-center",children:"Latest  Magazines"}),s.jsx("div",{className:"grid grid-cols-2  gap-4 place-items-center mt-4",children:t?.data.data.slice(0,2).map((e,t)=>s.jsxs(m.default,{href:"/magazine/"+e?.url,className:"group relative rounded-sm hover:shadow-xl transition-transform duration-300 ease-in-out overflow-hidden bg-white hover:scale-105 block",children:[s.jsx(i.default,{src:p.A.ImageUrl+e.magazine_cover_image,alt:e.image_alt,width:300,height:300,className:" object-fill"}),s.jsx("div",{className:"ease-[cubic-bezier(0.19,1,0.22,1)] absolute -left-[140%] -top-[30px] z-10 h-[400px] w-8 rotate-[45deg] bg-white opacity-20 transition-all  duration-500 group-hover:left-[160%]"})]},t))})]}),s.jsx(x,{})]})]}),(0,s.jsxs)("p",{className:"border-t-2 border-black text-center py-4 mt-4",children:["\xa9 ",e," The Executive Headlines. All rights reserved."]})]})},f=(0,l.createProxy)(String.raw`E:\newsWebsite\nextjs\src\components\shared\Header.tsx#default`);function v({children:e}){return(0,s.jsxs)("div",{className:"",children:[s.jsx(f,{}),s.jsx(r,{}),s.jsx("main",{className:"my-20 md:my-12 min-h-[calc(100vh-200px)]",children:e}),s.jsx(g,{})]})}},53733:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>o,metadata:()=>n});var s=a(72051),l=a(37122),r=a.n(l);a(5023);var i=a(10247);let n={title:"The Executive Headlines - Top business magazine & news headlines sources",description:"Top business magazine & news headlines sources"};function o({children:e}){return s.jsx("html",{lang:"en",suppressHydrationWarning:!0,children:(0,s.jsxs)("body",{className:`${r().className} font-sans antialiased`,children:[s.jsx(i.x7,{}),e]})})}},59198:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>l});var s=a(41288);let l=()=>{(0,s.redirect)("/")}},79036:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});let s={baseUrl:process.env.BASE_URL||"",ImageUrl:"https://executiveheadlines.com/admin/media/",GetMagazine:"/magazine",GetTechnology:"/technology",GetIndustries:"/industries",GetBusinessNews:"/business_news",GetStartupInsight:"/startupInsight",GetStartupInsightHome:"/startupInsightHome",GetClientspeak:"/clientspeak",GetCoverStory:"/cover-story",GetCompanyLogo:"/client-logo",GetNews:"/news",GetCxo:"/cxo",GetNewsDetail:"/news-detail",GetVideo:"/video",GetSearch:"/search",GetNewNews:"/new-news",NewsLatter:"/news-letter",GetAbout:"/about",GetListing:"/listing",GetBanner:"/banner",ContactUs:"/ContactUs",GetHome:"/home"}},39812:(e,t,a)=>{"use strict";function s(e){let t=process.env.BASE_URL||"";return`${t}${e}`}a.d(t,{m:()=>s})},40200:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});let s={src:"/_next/static/media/footer_validation.205673dd.png",height:82,width:150,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAb0lEQVR42gFkAJv/AFhppqSqx5uhwQA8l0ZcoT1Wn0ddohJAmACUnL7T1uOpr8pjc6uBjbh9ibZ/i7dZaqYAVWakmJ/BO1WebnuvdIGydoKydYKyVWelAEFZoEJbomBxqlJnpkpgo0pgo0xhpC9NnMJtMIlLCpafAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4}},87959:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});let s={src:"/_next/static/media/logo.7e0ca90f.png",height:150,width:1e3,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAKklEQVR4nGOU0XGTe8LIqBbz9zdj6PePTFncwsyRf35++8zIxM3IwPAJAMNIDBGfYCreAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:1}},73881:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>l});var s=a(54564);let l=e=>[{type:"image/x-icon",sizes:"510x510",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},5023:()=>{}};