"use strict";(self.webpackChunksignalwire_community_docs=self.webpackChunksignalwire_community_docs||[]).push([[4970],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),g=o(a),c=r,u=g["".concat(p,".").concat(c)]||g[c]||m[c]||s;return a?n.createElement(u,i(i({ref:t},d),{},{components:a})):n.createElement(u,i({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var o=2;o<s;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},9779:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var n=a(7462),r=(a(7294),a(3905));const s={sidebar_label:"Message"},i="Relay.Messaging.Message",l={unversionedId:"php/reference/relay_messaging/message",id:"php/reference/relay_messaging/message",title:"Relay.Messaging.Message",description:"An object representing an SMS or MMS message. It is the parameter of both onIncomingMessage and onMessageStateChange Consumer handlers.",source:"@site/docs/php/reference/relay_messaging/message.mdx",sourceDirName:"php/reference/relay_messaging",slug:"/php/reference/relay_messaging/message",permalink:"/docs/php/reference/relay_messaging/message",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/php/reference/relay_messaging/message.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Message"},sidebar:"phpSidebar",previous:{title:"Relay.Messaging",permalink:"/docs/php/reference/relay_messaging/"},next:{title:"SendResult",permalink:"/docs/php/reference/relay_messaging/send_result"}},p={},o=[{value:"Properties",id:"properties",level:2},{value:"Events",id:"events",level:2},{value:"State Events",id:"state-events",level:3}],d={toc:o};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"relaymessagingmessage"},"Relay.Messaging.Message"),(0,r.kt)("p",null,"An object representing an SMS or MMS message. It is the parameter of both ",(0,r.kt)("a",{parentName:"p",href:"/docs/php/reference/relay_consumer#onincomingmessage"},(0,r.kt)("inlineCode",{parentName:"a"},"onIncomingMessage"))," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/php/reference/relay_consumer#onmessagestatechange"},(0,r.kt)("inlineCode",{parentName:"a"},"onMessageStateChange"))," Consumer handlers."),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"}),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"method-prop-type"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The unique identifier of the message.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"context")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"method-prop-type"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The context of the message.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"from")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"method-prop-type"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The phone number the message comes from.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"to")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"method-prop-type"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The destination number of the message.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"direction")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"method-prop-type"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The direction of the message: ",(0,r.kt)("inlineCode",{parentName:"td"},"inbound")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"outbound"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"state")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"method-prop-type"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The current state of the message. See ",(0,r.kt)("a",{parentName:"td",href:"/docs/php/reference/relay_messaging/message#state-events"},(0,r.kt)("inlineCode",{parentName:"a"},"Relay.Messaging.Message")," State Events")," for all the possible states.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"body")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"method-prop-type"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The content of the message.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"media")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"method-prop-type"},"string[]")),(0,r.kt)("td",{parentName:"tr",align:null},"Array of URLs media.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"tags")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"method-prop-type"},"string[]")),(0,r.kt)("td",{parentName:"tr",align:null},"Array of strings with message tags.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"segments")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"method-prop-type"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},"Number of segments of the message.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"reason")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"method-prop-type"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Reason why the message was not sent.",(0,r.kt)("br",null)," ",(0,r.kt)("em",{parentName:"td"},"Present only in case of failure."))))),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("h3",{id:"state-events"},"State Events"),(0,r.kt)("p",null,"To track the state of a message."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"queued")),(0,r.kt)("td",{parentName:"tr",align:null},"The message has been queued in Relay.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"initiated")),(0,r.kt)("td",{parentName:"tr",align:null},"Relay has initiate the process to send the message.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"sent")),(0,r.kt)("td",{parentName:"tr",align:null},"Relay has sent the message.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"delivered")),(0,r.kt)("td",{parentName:"tr",align:null},"The message has been successfully delivered. Due to the nature of SMS and MMS, receiving a ",(0,r.kt)("inlineCode",{parentName:"td"},"delivered")," event is not guaranteed, even if the message is delivered successfully.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"undelivered")),(0,r.kt)("td",{parentName:"tr",align:null},"The message has not been delivered. Due to the nature of SMS and MMS, receiving a ",(0,r.kt)("inlineCode",{parentName:"td"},"undelivered")," event is not guaranteed, even if the message fails to be delivered.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"failed")),(0,r.kt)("td",{parentName:"tr",align:null},"The call has failed.")))))}m.isMDXComponent=!0}}]);