(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5135,291,2067,3901,2974,4947,3290,5215,2859,1653,7081,3622,6375,8296,1189],{8308:function(e,t,r){Promise.resolve().then(r.t.bind(r,5878,23)),Promise.resolve().then(r.t.bind(r,2972,23)),Promise.resolve().then(r.t.bind(r,7354,23)),Promise.resolve().then(r.bind(r,7224))},9205:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var s=r(2265);let n=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),a=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&r.indexOf(e)===t).join(" ")};var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let o=(0,s.forwardRef)((e,t)=>{let{color:r="currentColor",size:n=24,strokeWidth:o=2,absoluteStrokeWidth:l,className:c="",children:u,iconNode:d,...m}=e;return(0,s.createElement)("svg",{ref:t,...i,width:n,height:n,stroke:r,strokeWidth:l?24*Number(o)/Number(n):o,className:a("lucide",c),...m},[...d.map(e=>{let[t,r]=e;return(0,s.createElement)(t,r)}),...Array.isArray(u)?u:[u]])}),l=(e,t)=>{let r=(0,s.forwardRef)((r,i)=>{let{className:l,...c}=r;return(0,s.createElement)(o,{ref:i,iconNode:t,className:a("lucide-".concat(n(e)),l),...c})});return r.displayName="".concat(e),r}},6858:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});let s=(0,r(9205).Z)("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]])},7224:function(e,t,r){"use strict";var s=r(7437),n=r(2265),a=r(9064),i=r(2501);t.default=()=>{let[e,t]=(0,n.useState)(""),[r,o]=(0,n.useState)(""),[l,c]=(0,n.useState)(""),u=async s=>{s.preventDefault();try{(await fetch("https://api.emailjs.com/api/v1.0/email/send",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({service_id:"service_2f9u39e",template_id:"template_ck3l8ob",user_id:"VMb3SEnvRjmbHhT_J",template_params:{email:e,name:r,message:l}})})).ok?(t(""),a.ZP.success("Email sent successfully!")):a.ZP.error("Failed to send email.")}catch(e){console.error("Error:",e),a.ZP.error("An unexpected error occurred")}};return(0,s.jsx)("div",{className:"contactus shadow-xl border bg-gradient-to-r from-white to-slate-100 py-16 px-4 md:px-10 lg:px-16",children:(0,s.jsx)("div",{className:"",children:(0,s.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 pt-4 gap-4",children:[(0,s.jsxs)("div",{children:[(0,s.jsxs)("h1",{className:"font-semibold text-2xl lg:text-3xl text-black",children:["Contact us for our upcoming ",(0,s.jsx)("span",{className:"text-red-500",children:"Awards"})]}),(0,s.jsxs)("form",{className:"space-y-4 pt-8 px-6",onSubmit:u,children:[(0,s.jsx)("input",{className:"contactField shadow-lg",type:"email",name:"email",onChange:e=>t(e.target.value),value:e,placeholder:"Your email address",required:!0}),(0,s.jsx)("input",{className:"contactField shadow-lg",type:"text",name:"name",onChange:e=>o(e.target.value),value:r,placeholder:"Your name",required:!0}),(0,s.jsx)("div",{className:"mb-4",children:(0,s.jsx)("textarea",{onChange:e=>c(e.target.value),className:"w-full p-4 outline-none resize-none border border-gray-500 min-h-28 shadow-lg   }",placeholder:"Your Message",name:"",id:""})}),(0,s.jsx)(i.g,{type:"submit",className:"bg-red-500 w-full h-12 text-lg max-w-sm mx-auto",children:"Submit"})]})]}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("h1",{className:"font-semibold text-2xl lg:text-3xl",children:["why us ",(0,s.jsx)("span",{className:"text-red-500",children:"?"})]}),(0,s.jsx)("p",{className:"pt-8 text-lg",children:"Elevate your understanding of the world of business with Best Business Magazine and news platform. The Executive Headlines genuinely support all top business leaders and the innovative technological ecosystem that surrounds and engages with them. The company ' logo encapsulates our entire idea; it comprises a magazine for influential business leaders and decision-makers. Offering up-to-the-minute, all-encompassing news coverage, market perspectives, and exclusive dialogues with corporate pioneers, we are your ultimate destination for remaining at the vanguard of the business sphere. Enroll with us today and position yourself at the forefront of business acumen with Best News Platform and Business Magazine"})]})]})})})}},2501:function(e,t,r){"use strict";r.d(t,{g:function(){return i}});var s=r(7437),n=r(4457),a=r(6858);let i=e=>{let{className:t,children:r,...i}=e;return(0,s.jsxs)("button",{className:(0,n.cn)("group relative  flex transform items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-md border border-white bg-brand-700 px-8 text-base/7 font-medium text-white transition-all duration-300 hover:ring-2 hover:ring-brand-700 hover:ring-offset-2 focus:outline-none focus:ring-red-500 ring-red-500 focus:ring-2 focus:ring-offset-2",t),...i,children:[(0,s.jsxs)("span",{className:"relative z-10 flex items-center gap-2",children:[r,(0,s.jsx)(a.Z,{className:"size-4 shrink-0 text-white transition-transform duration-300 ease-in-out group-hover:translate-x-[2px]"})]}),(0,s.jsx)("div",{className:"ease-[cubic-bezier(0.19,1,0.22,1)] absolute -left-[75px] -top-[50px] -z-10 h-[155px] w-8 rotate-[35deg] bg-white opacity-20 transition-all duration-500 group-hover:left-[120%]"})]})}},4457:function(e,t,r){"use strict";r.d(t,{cn:function(){return a}});var s=r(1994),n=r(3335);function a(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.m6)((0,s.Z)(t))}},7354:function(){}},function(e){e.O(0,[902,4609,6137,9064,2971,2117,1744],function(){return e(e.s=8308)}),_N_E=e.O()}]);