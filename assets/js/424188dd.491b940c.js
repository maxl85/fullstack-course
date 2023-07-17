"use strict";(self.webpackChunkfullstack_course=self.webpackChunkfullstack_course||[]).push([[350],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>b});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(a),p=r,b=u["".concat(o,".").concat(p)]||u[p]||m[p]||l;return a?n.createElement(b,s(s({ref:t},d),{},{components:a})):n.createElement(b,s({ref:t},d))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=p;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<l;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),r=a(6010);const l={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,s),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(7462),r=a(7294),l=a(6010),s=a(2466),i=a(6550),o=a(1980),c=a(7392),d=a(12);function u(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function v(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=m(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[o,c]=b({queryString:a,groupId:n}),[u,v]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,d.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),f=(()=>{const e=o??u;return p({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),v(e)}),[c,v,l]),tabValues:l}}var f=a(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:a,selectedValue:i,selectValue:o,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),m=e=>{const t=e.currentTarget,a=d.indexOf(t),n=c[a].value;n!==i&&(u(t),o(n))},p=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>d.push(e),onKeyDown:p,onClick:m},s,{className:(0,l.Z)("tabs__item",h.tabItem,s?.className,{"tabs__item--active":i===t})}),a??t)})))}function k(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=v(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",h.tabList)},r.createElement(g,(0,n.Z)({},e,t)),r.createElement(k,(0,n.Z)({},e,t)))}function y(e){const t=(0,f.Z)();return r.createElement(w,(0,n.Z)({key:String(t)},e))}},1007:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),r=a(6010);const l={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};function s(e){let{children:t,minHeight:a,url:s="http://localhost:3000",style:i,bodyStyle:o}=e;return n.createElement("div",{className:l.browserWindow,style:{...i,minHeight:a}},n.createElement("div",{className:l.browserWindowHeader},n.createElement("div",{className:l.buttons},n.createElement("span",{className:l.dot,style:{background:"#f25f58"}}),n.createElement("span",{className:l.dot,style:{background:"#fbbe3c"}}),n.createElement("span",{className:l.dot,style:{background:"#58cb42"}})),n.createElement("div",{className:(0,r.Z)(l.browserWindowAddressBar,"text--truncate")},s),n.createElement("div",{className:l.browserWindowMenuIcon},n.createElement("div",null,n.createElement("span",{className:l.bar}),n.createElement("span",{className:l.bar}),n.createElement("span",{className:l.bar})))),n.createElement("div",{className:l.browserWindowBody,style:o},t))}},3353:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>v,frontMatter:()=>o,metadata:()=>d,toc:()=>m});var n=a(7462),r=(a(7294),a(3905)),l=a(1007),s=a(4866),i=a(5162);const o={sidebar_position:4},c="\u0427\u0430\u0441\u0442\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0435 \u043a\u0435\u0439\u0441\u044b",d={unversionedId:"html-css/cases",id:"html-css/cases",title:"\u0427\u0430\u0441\u0442\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0435 \u043a\u0435\u0439\u0441\u044b",description:"\u0417\u0434\u0435\u0441\u044c \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u044b \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0447\u0430\u0441\u0442\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0445 \u043d\u0430 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0435 \u043a\u0435\u0439\u0441\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0432\u044b\u0437\u044b\u0432\u0430\u044e\u0442 \u0442\u0440\u0443\u0434\u043d\u043e\u0441\u0442\u0438 \u0443 \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u043e\u0432.",source:"@site/docs/01-html-css/04-cases.mdx",sourceDirName:"01-html-css",slug:"/html-css/cases",permalink:"/fullstack-course/html-css/cases",draft:!1,editUrl:"https://github.com/maxl85/fullstack-course/tree/master/docs/01-html-css/04-cases.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Flexbox \u0438 CSS Grid",permalink:"/fullstack-course/html-css/flex-grid"},next:{title:"JavaScript \u0438 TypeScript",permalink:"/fullstack-course/category/javascript-\u0438-typescript"}},u={},m=[{value:"Position relative/absolut",id:"position-relativeabsolut",level:2},{value:"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u044b\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f",id:"\u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u044b\u0435-\u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f",level:2},{value:"\u041a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0441 \u043e\u0442\u0441\u0442\u0443\u043f\u0430\u043c\u0438 \u043f\u043e \u043a\u0440\u0430\u044f\u043c",id:"\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440-\u0441-\u043e\u0442\u0441\u0442\u0443\u043f\u0430\u043c\u0438-\u043f\u043e-\u043a\u0440\u0430\u044f\u043c",level:2},{value:"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u0430\u044f \u0441\u0435\u0442\u043a\u0430",id:"\u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u0430\u044f-\u0441\u0435\u0442\u043a\u0430",level:2},{value:"Footer \u0432\u043d\u0438\u0437\u0443 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b",id:"footer-\u0432\u043d\u0438\u0437\u0443-\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b",level:2}],p={toc:m},b="wrapper";function v(e){let{components:t,...a}=e;return(0,r.kt)(b,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u0447\u0430\u0441\u0442\u043e-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0435-\u043a\u0435\u0439\u0441\u044b"},"\u0427\u0430\u0441\u0442\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0435 \u043a\u0435\u0439\u0441\u044b"),(0,r.kt)("p",null,"\u0417\u0434\u0435\u0441\u044c \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u044b \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0447\u0430\u0441\u0442\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0445 \u043d\u0430 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0435 \u043a\u0435\u0439\u0441\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0432\u044b\u0437\u044b\u0432\u0430\u044e\u0442 \u0442\u0440\u0443\u0434\u043d\u043e\u0441\u0442\u0438 \u0443 \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u043e\u0432."),(0,r.kt)("h2",{id:"position-relativeabsolut"},"Position relative/absolut"),(0,r.kt)("h2",{id:"\u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u044b\u0435-\u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f"},"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u044b\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f"),(0,r.kt)("p",null,"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u044b\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0431\u0443\u0434\u0443\u0442 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0440\u0430\u0437\u043c\u0435\u0440\u043e\u043c \u044d\u043a\u0440\u0430\u043d\u0430."),(0,r.kt)("p",null,"\u0412\u0430\u0436\u043d\u043e \u0437\u043d\u0430\u0442\u044c, \u0447\u0442\u043e \u0432\u044b \u0432\u0441\u0435\u0433\u0434\u0430 ",(0,r.kt)("strong",{parentName:"p"},"\u0434\u043e\u043b\u0436\u043d\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0435\u0434\u0438\u043d\u0438\u0446\u044b")," \u0434\u043b\u044f \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0448\u0438\u0440\u0438\u043d\u044b, \u0442\u0430\u043a\u0438\u0435 \u043a\u0430\u043a \u043f\u0440\u043e\u0446\u0435\u043d\u0442, \u0430 \u043d\u0435 \u0430\u0431\u0441\u043e\u043b\u044e\u0442\u043d\u044b\u0435 \u0435\u0434\u0438\u043d\u0438\u0446\u044b, \u0442\u0430\u043a\u0438\u0435 \u043a\u0430\u043a \u043f\u0438\u043a\u0441\u0435\u043b\u0438."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<img src="image.jpg" alt="image" class="responsive">\n')),(0,r.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043a\u0430\u043a \u0432\u0432\u0435\u0440\u0445, \u0442\u0430\u043a \u0438 \u0432\u043d\u0438\u0437 \u043f\u0440\u0438 \u043e\u0442\u043a\u043b\u0438\u043a\u0435, \u0437\u0430\u0434\u0430\u0439\u0442\u0435 \u0434\u043b\u044f \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 CSS \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,r.kt)("inlineCode",{parentName:"p"},"width: 100%")," \u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,r.kt)("inlineCode",{parentName:"p"},"height: auto"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".responsive {\n  width: 100%;\n  height: auto;\n}\n")),(0,r.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f, \u0447\u0442\u043e\u0431\u044b \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0431\u044b\u043b\u043e \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043e\u0432\u0430\u043d\u043e, \u043d\u043e \u043d\u0438\u043a\u043e\u0433\u0434\u0430 \u043d\u0435 \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0434\u043e \u0440\u0430\u0437\u043c\u0435\u0440\u0430, \u043f\u0440\u0435\u0432\u044b\u0448\u0430\u044e\u0449\u0435\u0433\u043e \u0435\u0433\u043e \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \u0440\u0430\u0437\u043c\u0435\u0440, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",(0,r.kt)("inlineCode",{parentName:"p"},"max-width: 100%"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".responsive {\n  max-width: 100%;\n  height: auto;\n}\n")),(0,r.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u044b\u0439 \u043e\u0431\u0440\u0430\u0437 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u043c \u0440\u0430\u0437\u043c\u0435\u0440\u043e\u043c, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e \u0441 \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u043c ",(0,r.kt)("inlineCode",{parentName:"p"},"max-width")," \u043f\u0438\u043a\u0441\u0435\u043b\u044c\u043d\u044b\u043c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u043c:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".responsive {\n  width: 100%;\n  max-width: 400px;\n  height: auto;\n}\n")),(0,r.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0438\u043c\u0435\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0438\u0439 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c \u043d\u0430\u0434 \u0432\u0430\u0448\u0438\u043c\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f\u043c\u0438, CSS \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0434\u0440\u0443\u0433\u043e\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e, \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u043c\u043e\u0435 ",(0,r.kt)("inlineCode",{parentName:"p"},"object-fit"),". \u041f\u0440\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u0432\u044b \u0442\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e ",(0,r.kt)("inlineCode",{parentName:"p"},"object-position")," (\u0432 \u0434\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u043a ",(0,r.kt)("inlineCode",{parentName:"p"},"object-fit"),"), \u0447\u0442\u043e\u0431\u044b \u0441\u0444\u043e\u043a\u0443\u0441\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u0447\u0430\u0441\u0442\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".responsive {\n  width: 100%;\n  height: 300px; \n  object-fit: cover;\n  object-position: bottom;\n}\n")),(0,r.kt)("h2",{id:"\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440-\u0441-\u043e\u0442\u0441\u0442\u0443\u043f\u0430\u043c\u0438-\u043f\u043e-\u043a\u0440\u0430\u044f\u043c"},"\u041a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0441 \u043e\u0442\u0441\u0442\u0443\u043f\u0430\u043c\u0438 \u043f\u043e \u043a\u0440\u0430\u044f\u043c"),(0,r.kt)("p",null,"\u0412\u0435\u0431-\u0441\u0430\u0439\u0442 \u0434\u043e\u043b\u0436\u0435\u043d \u0438\u043c\u0435\u0442\u044c \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0432\u0430\u044e\u0449\u0443\u044e \u043e\u0431\u043e\u043b\u043e\u0447\u043a\u0443 (\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440), \u043e\u0431\u043b\u0435\u0433\u0447\u0430\u044e\u0449\u0443\u044e \u0447\u0442\u0435\u043d\u0438\u0435. \u0411\u0435\u0437 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430-\u043e\u0431\u0451\u0440\u0442\u043a\u0438 \u0434\u043e\u0447\u0435\u0440\u043d\u0438\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u0431\u0443\u0434\u0443\u0442 \u0440\u0430\u0437\u043c\u0435\u0449\u0430\u0442\u044c\u0441\u044f, \u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u0443\u044f\u0441\u044c \u043d\u0430 \u043a\u0440\u0430\u044f \u044d\u043a\u0440\u0430\u043d\u0430. \u042d\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043d\u0435\u0443\u0434\u043e\u0431\u043d\u044b\u043c \u0434\u043b\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439. \u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e \u0434\u043b\u044f \u0442\u0435\u0445, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0442 \u043d\u0430 \u0431\u043e\u043b\u044c\u0448\u0438\u0445 \u044d\u043a\u0440\u0430\u043d\u0430\u0445."),(0,r.kt)("p",null,"\u0414\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u0441\u0435 \u0434\u043e\u0447\u0435\u0440\u043d\u0438\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u043e\u0431\u0435\u0440\u043d\u0443\u0442\u044c \u043e\u0434\u043d\u0438\u043c \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u043c \u0442\u044d\u0433\u043e\u043c ",(0,r.kt)("inlineCode",{parentName:"p"},"div")," \u0441 \u043a\u043b\u0430\u0441\u0441\u043e\u043c ",(0,r.kt)("inlineCode",{parentName:"p"},".container")," \u0438\u043b\u0438 ",(0,r.kt)("inlineCode",{parentName:"p"},".wrapper")," \u0438 \u0437\u0430\u0434\u0430\u0442\u044c \u0435\u043c\u0443 \u0448\u0438\u0440\u0438\u043d\u0443."),(0,r.kt)("p",null,"\u0421\u0432\u043e\u0439\u0441\u0442\u0432\u043e ",(0,r.kt)("inlineCode",{parentName:"p"},"width")," \u0434\u043b\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0448\u0438\u0440\u0438\u043d\u044b \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043e\u0432 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043d\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f. \u0414\u0435\u043b\u043e \u0432 \u0442\u043e\u043c, \u0447\u0442\u043e \u044d\u0442\u043e \u043f\u0440\u0438\u0432\u043e\u0434\u0438\u0442 \u043a \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u0433\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0441\u043a\u0440\u043e\u043b\u043b\u0438\u043d\u0433\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u0432 \u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435, \u0435\u0441\u043b\u0438 \u0448\u0438\u0440\u0438\u043d\u0430 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u043e\u043a\u043d\u0430 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430, \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0439 \u0434\u043b\u044f \u0432\u044b\u0432\u043e\u0434\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b, \u043c\u0435\u043d\u044c\u0448\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0439 \u0448\u0438\u0440\u0438\u043d\u044b. \u0420\u0435\u0448\u0438\u0442\u044c \u044d\u0442\u0443 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0443 \u043c\u043e\u0436\u043d\u043e, \u0432\u043e\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0432\u0448\u0438\u0441\u044c \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e\u043c ",(0,r.kt)("inlineCode",{parentName:"p"},"max-width"),"."),(0,r.kt)("p",null,"\u0414\u043b\u044f \u0442\u043e\u0433\u043e \u0447\u0442\u043e\u0431\u044b \u0432\u044b\u0440\u043e\u0432\u043d\u044f\u0442\u044c \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u043f\u043e \u0446\u0435\u043d\u0442\u0440\u0443 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b, \u043d\u0443\u0436\u043d\u043e, \u043f\u0440\u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0435 \u0435\u0433\u043e \u0432\u043d\u0435\u0448\u043d\u0438\u0445 \u043e\u0442\u0441\u0442\u0443\u043f\u043e\u0432, \u0432\u043e\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u043c ",(0,r.kt)("inlineCode",{parentName:"p"},"auto")," \u0434\u043b\u044f \u043b\u0435\u0432\u043e\u0433\u043e \u0438 \u043f\u0440\u0430\u0432\u043e\u0433\u043e \u043e\u0442\u0441\u0442\u0443\u043f\u043e\u0432 ",(0,r.kt)("inlineCode",{parentName:"p"},"margin: 0 auto;")),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"html",label:"HTML",mdxType:"TabItem"},(0,r.kt)("div",{style:{height:"140px",overflow:"auto"}},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<div class="container">\n  <main>...</main>\n</div>\n')))),(0,r.kt)(i.Z,{value:"css",label:"CSS",mdxType:"TabItem"},(0,r.kt)("div",{style:{height:"140px",overflow:"auto"}},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".container {\n  max-width: 700px;\n  margin: 0 auto;\n}\n"))))),(0,r.kt)("h2",{id:"\u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u0430\u044f-\u0441\u0435\u0442\u043a\u0430"},"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u0430\u044f \u0441\u0435\u0442\u043a\u0430"),(0,r.kt)("p",null,"\u042d\u0442\u043e \u0442\u0430\u043a\u0430\u044f \u0441\u0435\u0442\u043a\u0430, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043f\u043e\u0434\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u0442 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432 \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f \u044d\u043a\u0440\u0430\u043d\u0430. \u0422\u043e \u0435\u0441\u0442\u044c \u043d\u0430 \u044d\u043a\u0440\u0430\u043d\u0435 \u0441\u043c\u0430\u0440\u0442\u0444\u043e\u043d\u0430 \u0441\u0430\u0439\u0442 \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0433\u043b\u044f\u0434\u0435\u0442\u044c \u0438\u043d\u0430\u0447\u0435, \u0447\u0435\u043c \u043d\u0430 \u044d\u043a\u0440\u0430\u043d\u0435 \u043d\u043e\u0443\u0442\u0431\u0443\u043a\u0430 \u0438\u043b\u0438 \u043f\u043b\u0430\u043d\u0448\u0435\u0442\u0430, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e \u0431\u044b\u043b\u043e \u043a\u043e\u043c\u0444\u043e\u0440\u0442\u043d\u043e \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u0441 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u043e\u043c. \u0422\u0430\u043a\u0438\u0435 \u0441\u0435\u0442\u043a\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0434\u043b\u044f \u043a\u0430\u0440\u0442\u043e\u0447\u0435\u043a \u0442\u043e\u0432\u0430\u0440\u043e\u0432 \u0432 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442-\u043c\u0430\u0433\u0430\u0437\u0438\u043d\u0430\u0445. "),(0,r.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440 \u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0439 \u0441\u0435\u0442\u043a\u0438 \u043d\u0430 ",(0,r.kt)("strong",{parentName:"p"},"Flexbox")," \u0438 ",(0,r.kt)("strong",{parentName:"p"},"CSS Grid")),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"html",label:"HTML",mdxType:"TabItem"},(0,r.kt)("div",{style:{height:"380px",overflow:"auto"}},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<div class="container">\n  <div class="grid">\n    <div class="item-wrap">\n      <div class="item"></div>\n    </div>\n    <div class="item-wrap">\n      <div class="item"></div>\n    </div>\n    <div class="item-wrap">\n      <div class="item"></div>\n    </div>\n    <div class="item-wrap">\n      <div class="item"></div>\n    </div>\n    <div class="item-wrap">\n      <div class="item"></div>\n    </div>\n    <div class="item-wrap">\n      <div class="item"></div>\n    </div>\n    <div class="item-wrap">\n      <div class="item"></div>\n    </div>\n    <div class="item-wrap">\n      <div class="item"></div>\n    </div>\n  </div>\n</div>\n')))),(0,r.kt)(i.Z,{value:"flexbox",label:"CSS Flexbox",mdxType:"TabItem"},(0,r.kt)("div",{style:{height:"380px",overflow:"auto"}},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".container {\n  max-width: 700px;\n  margin: 0 auto;\n}\n\n.grid {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n}\n\n.item-wrap {\n  box-sizing: border-box;\n  padding: 10px;\n  height: 150px;\n  flex-basis: 25%;\n}\n\n.item {\n  background: #aaa;\n  height: 100%;\n  width: 100%;\n}\n\n@media (max-width: 600px) {\n  .item-wrap {\n    flex-basis: 33.33%;\n  }\n}\n\n@media (max-width: 500px) {\n  .item-wrap {\n    flex-basis: 50%;\n  }\n}\n\n@media (max-width: 400px) {\n  .item-wrap {\n    flex-basis: 100%;\n  }\n}\n")))),(0,r.kt)(i.Z,{value:"grid",label:"CSS Grid",mdxType:"TabItem"},(0,r.kt)("div",{style:{height:"380px",overflow:"auto"}},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".container {\n  max-width: 700px;\n  margin: 0 auto;\n}\n\n.grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 20px;\n}\n\n.item-wrap {\n  box-sizing: border-box;\n  height: 150px;\n  background: #aaa;\n}\n\n@media (max-width: 600px) {\n  .grid {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n\n@media (max-width: 500px) {\n  .grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n\n@media (max-width: 400px) {\n  .grid {\n    grid-template-columns: repeat(1, 1fr);\n  }\n}\n")))),(0,r.kt)(i.Z,{value:"res",label:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442",mdxType:"TabItem"},(0,r.kt)(l.Z,{style:{height:"380px",overflow:"auto"},mdxType:"BrowserWindow"},(0,r.kt)("div",{className:"css-container"},(0,r.kt)("div",{className:"css-flex-grid"},(0,r.kt)("div",{className:"css-item-wrap"},(0,r.kt)("div",{className:"css-item"})),(0,r.kt)("div",{className:"css-item-wrap"},(0,r.kt)("div",{className:"css-item"})),(0,r.kt)("div",{className:"css-item-wrap"},(0,r.kt)("div",{className:"css-item"})),(0,r.kt)("div",{className:"css-item-wrap"},(0,r.kt)("div",{className:"css-item"})),(0,r.kt)("div",{className:"css-item-wrap"},(0,r.kt)("div",{className:"css-item"})),(0,r.kt)("div",{className:"css-item-wrap"},(0,r.kt)("div",{className:"css-item"})),(0,r.kt)("div",{className:"css-item-wrap"},(0,r.kt)("div",{className:"css-item"})),(0,r.kt)("div",{className:"css-item-wrap"},(0,r.kt)("div",{className:"css-item"}))))))),(0,r.kt)("h2",{id:"footer-\u0432\u043d\u0438\u0437\u0443-\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b"},"Footer \u0432\u043d\u0438\u0437\u0443 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b"),(0,r.kt)("p",null,"\u041a\u0430\u043a \u043f\u0440\u0438\u0436\u0430\u0442\u044c footer \u0441\u0430\u0439\u0442\u0430 \u0432 \u0441\u0430\u043c\u044b\u0439 \u043d\u0438\u0437 \u043e\u043a\u043d\u0430 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430, \u0447\u0442\u043e\u0431\u044b \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043f\u0440\u0438 \u044d\u0442\u043e\u043c \u0432\u044b\u0433\u043b\u044f\u0434\u0435\u043b\u0430 \u0432\u044b\u0442\u044f\u043d\u0443\u0442\u043e\u0439 \u043d\u0430 \u0432\u0441\u044e \u0432\u044b\u0441\u043e\u0442\u0443, \u0432\u043d\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u043e\u0431\u044a\u0435\u043c\u0430 \u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0430? \u0421\u0434\u0435\u043b\u0430\u0442\u044c \u044d\u0442\u043e \u043c\u043e\u0436\u043d\u043e \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Flexbox \u0438 CSS Grid."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"html",label:"HTML",mdxType:"TabItem"},(0,r.kt)("div",{style:{height:"270px",overflow:"auto"}},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<div class="container">\n  <header class="header">header</header>\n  <main class="main">main</main>\n  <footer class="footer">footer</footer>\n</div>\n')))),(0,r.kt)(i.Z,{value:"flexbox",label:"CSS Flexbox",mdxType:"TabItem"},(0,r.kt)("div",{style:{height:"270px",overflow:"auto"}},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"body {\n  margin: 0;\n}\n\n.container {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  \n}\n\n.header {\n  background: #abc;\n  padding: 10px 0;\n}\n\n.footer {\n  background: #aaa;\n  padding: 10px 0;\n  margin-top: auto;\n}\n")))),(0,r.kt)(i.Z,{value:"grid",label:"CSS Grid",mdxType:"TabItem"},(0,r.kt)("div",{style:{height:"270px",overflow:"auto"}},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"body {\n  margin: 0;\n}\n\n.container {\n  min-height: 100vh;\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n}\n\n.header {\n  background: #abc;\n  padding: 10px 0;\n}\n\n.footer {\n  background: #aaa;\n  padding: 10px 0;\n  margin-top: auto;\n}\n")))),(0,r.kt)(i.Z,{value:"res",label:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442",mdxType:"TabItem"},(0,r.kt)(l.Z,{style:{height:"270px",overflow:"auto"},mdxType:"BrowserWindow"},(0,r.kt)("div",{className:"fb-container"},(0,r.kt)("header",{className:"fb-header"},"header"),(0,r.kt)("main",{className:"fb-main"},"main"),(0,r.kt)("footer",{className:"fb-footer"},"footer"))))))}v.isMDXComponent=!0}}]);