"use strict";(self.webpackChunkoz_oai=self.webpackChunkoz_oai||[]).push([[3758],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),y=r,w=d["".concat(c,".").concat(y)]||d[y]||u[y]||o;return n?a.createElement(w,i(i({ref:t},p),{},{components:n})):a.createElement(w,i({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4939:(e,t,n)=>{n.r(t),n.d(t,{Layout:()=>d,Spreadsheet:()=>u,assets:()=>s,contentTitle:()=>l,default:()=>w,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=n(6600),r=n(9496),o=n(9613);const i={sidebar_position:2},l="System inwentaryzacji zbior\xf3w",c={unversionedId:"przyk\u0142adowe-zastosowania/inwentaryzacja",id:"przyk\u0142adowe-zastosowania/inwentaryzacja",title:"System inwentaryzacji zbior\xf3w",description:"Aplikacja \u0142\u0105czy w sobie arkusz kalkulacyjny, wczytywanie danych z API oraz wy\u015bwietlanie szczeg\xf3\u0142\xf3w po wybraniu.",source:"@site/docs/przyk\u0142adowe-zastosowania/01-inwentaryzacja.mdx",sourceDirName:"przyk\u0142adowe-zastosowania",slug:"/przyk\u0142adowe-zastosowania/inwentaryzacja",permalink:"/hackarthon/en/docs/przyk\u0142adowe-zastosowania/inwentaryzacja",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Og\xf3lne informacje",permalink:"/hackarthon/en/docs/przyk\u0142adowe-zastosowania/og\xf3lne informacje"},next:{title:"Mapa wydarze\u0144",permalink:"/hackarthon/en/docs/przyk\u0142adowe-zastosowania/mapa wydarze\u0144"}},s={},p=[{value:"Budowa",id:"budowa",level:2}],u=e=>{let{children:t,color:n}=e;return(0,o.kt)("table",null,[1,2,3,4].map((e=>(0,o.kt)("tr",null,[1,2,3,4].map((e=>(0,o.kt)("td",null,e)))))))},d=e=>{let{children:t,color:n}=e;const[a,i]=r.useState(!1);return(0,o.kt)("div",{className:"flex border-solid border-2"},(0,o.kt)("div",null,"menu"),(0,o.kt)("div",null,!a&&(0,o.kt)("div",null,"arkusz ",(0,o.kt)("button",{onClick:()=>i(!0)},"zast\u0105p arkuszem")),a&&(0,o.kt)("div",null,(0,o.kt)(u,{mdxType:"Spreadsheet"})),(0,o.kt)("div",null,"szczeg\xf3\u0142y*",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("small",null,"* okienko pojawi si\u0119 dopiero po zaznaczeniu wiersza"))))},y={toc:p,Spreadsheet:u,Layout:d};function w(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"system-inwentaryzacji-zbior\xf3w"},"System inwentaryzacji zbior\xf3w"),(0,o.kt)("p",null,"Aplikacja \u0142\u0105czy w sobie arkusz kalkulacyjny, wczytywanie danych z API oraz wy\u015bwietlanie szczeg\xf3\u0142\xf3w po wybraniu."),(0,o.kt)("h2",{id:"budowa"},"Budowa"),(0,o.kt)("p",null,"Layout oparty na bibliotece tailwind flex."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export const Layout = ({children, color}) => (\n  <div>\n    <div>menu</div>\n    <div>\n      <div>arkusz</div>\n      <div>items details</div>\n    </div>\n  </div>\n);\n<Layout/>\n")),(0,o.kt)(d,{mdxType:"Layout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/components/HelloDocusaurus.js"',title:'"src/components/HelloDocusaurus.js"'},"function HelloDocusaurus() {\n  return <h1>Hello, Docusaurus!</h1>;\n}\n")),(0,o.kt)("admonition",{title:"Wskaz\xf3wka",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"className")," to nic innego, jak ",(0,o.kt)("inlineCode",{parentName:"p"},"class"),", ale w notacji ",(0,o.kt)("a",{parentName:"p",href:"https://www.freecodecamp.org/news/jsx-in-react-introduction/"},"JSX"))),(0,o.kt)("admonition",{title:"Wskaz\xf3wka",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"className=",(0,o.kt)("inlineCode",{parentName:"p"},"flex")," reprezentuje ten sam efekt, co ",(0,o.kt)("inlineCode",{parentName:"p"},"style={{display: 'flex'}}"),", wi\u0119cej w dokumentacji ",(0,o.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/flex"},"tailwind"))))}w.isMDXComponent=!0}}]);