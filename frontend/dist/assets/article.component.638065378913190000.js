import{d as u,f as l,a as e,t as a,F as x,g as h,n as m,b as r,w as i,r as g,o as n,e as c,h as f,i as v}from"./runtime-core.esm-bundler.638065378913190000.js";const p={class:"mt-16"},_=e("div",{class:"absolute inset-0 z-0 bg-gray-900 opacity-75"},null,-1),b={class:"h-full container mx-auto flex items-center justify-center"},w={class:"flex flex-col items-center z-10"},y={class:"mx-6 mt-1 font-bold text-center text-white text-5xl md:text-6xl sm:text-center sm:mx-0"},k=e("span",{class:"text-white"},"In",-1),z=e("div",null,null,-1),D={class:"mx-auto prose md:prose-lg lg:prose-xl prose-h1:text-3xl prose-h2:text-2xl prose-h2:my-0 prose-h1:text-teal-500 prose-h1:text-left prose-h2:text-left prose-p:text-lg prose-p:text-justify prose-slate prose-a:text-indigo-600 prose-a:font-normal hover:prose-a:no-underline prose-em:text-teal-400 prose-blockquote:text-green-400 prose-ul:text-left px-4 lg:px-0"},L=e("div",{class:"not-prose"},null,-1),T=["innerHTML"],j={class:"flex items-center justify-between mt-8"},A=["alt"],B={class:"ml-8 text-lg leading-6"},S=u({__name:"article",props:{data:null},setup(t){return(C,F)=>{const o=g("tez-link"),d=v("tez-src");return n(),l("div",p,[e("div",{class:"relative h-screen lg:h-[70vh] xl:h-[50vh] w-full bg-cover bg-center bg-no-repeat uppercase",style:m([t.data.image.url?{backgroundImage:"url("+t.data.image.url+")"}:""])},[_,e("div",b,[e("div",w,[e("h1",y,a(t.data.title),1),(n(!0),l(x,null,h(t.data.categories.slice(1),s=>(n(),l("div",{class:"flex items-center ml-2 mt-4",key:s.name},[k,r(o,{to:s.slug,class:"text-white text-lg leading-6 mb-0 underline hover:no-underline ml-1"},{default:i(()=>[c(a(s.name),1)]),_:2},1032,["to"])]))),128))]),z])],4),e("div",D,[L,e("div",{class:"my-12",innerHTML:t.data.content},null,8,T),e("div",j,[r(o,{to:t.data.author.slug,class:"flex items-center text-black no-underline text-lg leading-6"},{default:i(()=>[f(e("img",{class:"rounded-full mr-4",alt:t.data.author.picture.alternativeText,height:"50",width:"50"},null,8,A),[[d,t.data.author.picture.url]]),c(" "+a(t.data.author.name),1)]),_:1},8,["to"]),e("span",B,a(new Date(t.data.updatedAt).toLocaleString("default",{month:"long"}))+" "+a(new Date(t.data.updatedAt).getDate())+", "+a(new Date(t.data.updatedAt).getFullYear()),1)])])])}}});export{S as default};