"use strict";(self.webpackChunksignalwire_community_docs=self.webpackChunksignalwire_community_docs||[]).push([[2330],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(a),m=r,g=u["".concat(o,".").concat(m)]||u[m]||d[m]||l;return a?n.createElement(g,i(i({ref:t},c),{},{components:a})):n.createElement(g,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2472:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:5},i="Relay.Calling",p={unversionedId:"php/reference/relay_calling/index",id:"php/reference/relay_calling/index",title:"Relay.Calling",description:"This represents the API interface for the Calling Relay Service. This object is used to make requests related to managing end to end calls.",source:"@site/docs/php/reference/relay_calling/index.mdx",sourceDirName:"php/reference/relay_calling",slug:"/php/reference/relay_calling/",permalink:"/docs/php/reference/relay_calling/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/php/reference/relay_calling/index.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"phpSidebar",previous:{title:"Relay SDK for PHP",permalink:"/docs/php/"},next:{title:"AnswerResult",permalink:"/docs/php/reference/relay_calling/answer_result"}},o={},s=[{value:"Methods",id:"methods",level:2},{value:"dial",id:"dial",level:3},{value:"newCall",id:"newcall",level:3}],c={toc:s};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"relaycalling"},"Relay.Calling"),(0,r.kt)("p",null,"This represents the API interface for the Calling Relay Service. This object is used to make requests related to managing end to end calls."),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("div",{class:"method-definitions"}),(0,r.kt)("h3",{id:"dial"},"dial"),(0,r.kt)("p",null,"Make an outbound Call and waits until it has been answered or hung up."),(0,r.kt)("p",null,"Available In: ",(0,r.kt)("img",{class:"method-available-tag",src:"https://img.shields.io/badge/-v2.0+-brightgreen.svg"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$params")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"method-prop-type"},"array")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"required-arg"},"required")),(0,r.kt)("td",{parentName:"tr",align:null},"Array with the following properties:")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"method-prop-type"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"required-arg"},"required")),(0,r.kt)("td",{parentName:"tr",align:null},"The type of call. Only ",(0,r.kt)("inlineCode",{parentName:"td"},"phone")," is currently supported.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"from")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"method-prop-type"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"required-arg"},"required")),(0,r.kt)("td",{parentName:"tr",align:null},"The party the call is coming from. ",(0,r.kt)("br",null)," ",(0,r.kt)("em",{parentName:"td"},"Must be a SignalWire number or SIP endpoint that you own."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"to")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"method-prop-type"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"required-arg"},"required")),(0,r.kt)("td",{parentName:"tr",align:null},"The party you are attempting to call.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"timeout")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"method-prop-type"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{class:"optional-arg"},"optional")),(0,r.kt)("td",{parentName:"tr",align:null},"The time, in seconds, the call will ring before going to voicemail.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"React\\Promise\\Promise")," - Promise object that will be fulfilled with a ",(0,r.kt)("a",{parentName:"p",href:"/docs/php/reference/relay_calling/dial_result"},(0,r.kt)("inlineCode",{parentName:"a"},"Relay.Calling.DialResult"))," object."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Make an outbound Call and grab the call object if it was answered."',title:'"Make',an:!0,outbound:!0,Call:!0,and:!0,grab:!0,the:!0,call:!0,object:!0,if:!0,it:!0,was:!0,'answered."':!0},"<?php\n\n$params = [ 'type' => 'phone', 'from' => '+1XXXXXXXXXX', 'to' => '+1YYYYYYYYYY' ];\n$client->calling->dial($params)->done(function($dialResult) {\n  if ($dialResult->isSuccessful()) {\n    // Your active $call..\n    $call = $dialResult->getCall();\n  }\n});\n")),(0,r.kt)("h3",{id:"newcall"},"newCall"),(0,r.kt)("p",null,"Create a new ",(0,r.kt)("inlineCode",{parentName:"p"},"Call")," object. The call has not started yet allowing you to attach event listeners on it."),(0,r.kt)("p",null,"Available In: ",(0,r.kt)("img",{class:"method-available-tag",src:"https://img.shields.io/badge/-v1.1+-brightgreen.svg"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/php/reference/relay_calling/#dial"},(0,r.kt)("inlineCode",{parentName:"a"},"Relay.Calling.Dial"))," for the parameter list."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Call")," - A new ",(0,r.kt)("a",{parentName:"p",href:"/docs/php/reference/relay_calling/call"},(0,r.kt)("inlineCode",{parentName:"a"},"Relay.Calling.Call"))," object."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Create a new Call object."',title:'"Create',a:!0,new:!0,Call:!0,'object."':!0},"<?php\n\n$params = [ 'type' => 'phone', 'from' => '+1XXXXXXXXXX', 'to' => '+1YYYYYYYYYY' ];\n$call = $client->calling->newCall($params);\n// Use the $call object...\n")))}d.isMDXComponent=!0}}]);