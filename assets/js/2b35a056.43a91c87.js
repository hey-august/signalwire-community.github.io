"use strict";(self.webpackChunksignalwire_community_docs=self.webpackChunksignalwire_community_docs||[]).push([[1251],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>d});var a=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var i=a.createContext({}),s=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},m=function(t){var e=s(t.components);return a.createElement(i.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,i=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),u=s(n),d=l,g=u["".concat(i,".").concat(d)]||u[d]||c[d]||r;return n?a.createElement(g,p(p({ref:e},m),{},{components:n})):a.createElement(g,p({ref:e},m))}));function d(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,p=new Array(r);p[0]=u;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o.mdxType="string"==typeof t?t:l,p[1]=o;for(var s=2;s<r;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3756:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>p,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=n(7462),l=(n(7294),n(3905));const r={sidebar_label:"PromptAction"},p="Relay.Calling.PromptAction",o={unversionedId:"php/reference/relay_calling/prompt_action",id:"php/reference/relay_calling/prompt_action",title:"Relay.Calling.PromptAction",description:"This object returned from one of asynchronous prompt methods that represents a prompt attempt that is currently active on a call.",source:"@site/docs/php/reference/relay_calling/prompt_action.mdx",sourceDirName:"php/reference/relay_calling",slug:"/php/reference/relay_calling/prompt_action",permalink:"/docs/php/reference/relay_calling/prompt_action",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/php/reference/relay_calling/prompt_action.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"PromptAction"},sidebar:"phpSidebar",previous:{title:"PlayVolumeResult",permalink:"/docs/php/reference/relay_calling/play_volume_result"},next:{title:"PromptResult",permalink:"/docs/php/reference/relay_calling/prompt_result"}},i={},s=[{value:"Methods",id:"methods",level:2},{value:"getControlId",id:"getcontrolid",level:3},{value:"getPayload",id:"getpayload",level:3},{value:"getResult",id:"getresult",level:3},{value:"getState",id:"getstate",level:3},{value:"isCompleted",id:"iscompleted",level:3},{value:"stop",id:"stop",level:3},{value:"volume",id:"volume",level:3}],m={toc:s};function c(t){let{components:e,...n}=t;return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"relaycallingpromptaction"},"Relay.Calling.PromptAction"),(0,l.kt)("p",null,"This object returned from one of ",(0,l.kt)("em",{parentName:"p"},"asynchronous")," prompt methods that represents a prompt attempt that is currently active on a call."),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("div",{class:"method-definitions"}),(0,l.kt)("h3",{id:"getcontrolid"},"getControlId"),(0,l.kt)("p",null,"Return the UUID to identify the prompt attempt."),(0,l.kt)("p",null,"Available In: ",(0,l.kt)("img",{class:"method-available-tag",src:"https://img.shields.io/badge/-v2.0+-brightgreen.svg"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"None")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"string")," - UUID to identify the action."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Start the attempt and print the controlId."',title:'"Start',the:!0,attempt:!0,and:!0,print:!0,'controlId."':!0},"<?php\n\n$collect = [\n  'type' => 'digits',\n  'digits_max' => 3,\n  'initial_timeout' => 10,\n  'text' => 'Please, enter your 3 digits PIN'\n];\n$call->promptTTSAsync($collect)->done(function($action) {\n  echo $action->getControlId();\n});\n")),(0,l.kt)("h3",{id:"getpayload"},"getPayload"),(0,l.kt)("p",null,"Return the payload sent to Relay to initiate the request. Useful to inspect what you sent to perform this action."),(0,l.kt)("p",null,"Available In: ",(0,l.kt)("img",{class:"method-available-tag",src:"https://img.shields.io/badge/-v2.0+-brightgreen.svg"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"None")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Object")," - Payload sent to Relay."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Start the attempt and print out the payload."',title:'"Start',the:!0,attempt:!0,and:!0,print:!0,out:!0,'payload."':!0},"<?php\n\n$collect = [\n  'type' => 'digits',\n  'digits_max' => 3,\n  'initial_timeout' => 10,\n  'text' => 'Please, enter your 3 digits PIN'\n];\n$call->promptTTSAsync($collect)->done(function($action) {\n  print_r($action->getPayload());\n});\n")),(0,l.kt)("h3",{id:"getresult"},"getResult"),(0,l.kt)("p",null,"Returns the final result of the prompt attempt."),(0,l.kt)("p",null,"Available In: ",(0,l.kt)("img",{class:"method-available-tag",src:"https://img.shields.io/badge/-v2.0+-brightgreen.svg"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"None")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/php/reference/relay_calling/prompt_result"},(0,l.kt)("inlineCode",{parentName:"a"},"Relay.Calling.PromptResult"))," - Final result of the prompt attempt."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Start the attempt and grab the result when it\'s completed."',title:'"Start',the:!0,attempt:!0,and:!0,grab:!0,result:!0,when:!0,"it's":!0,'completed."':!0},"<?php\n\n$collect = [\n  'type' => 'digits',\n  'digits_max' => 3,\n  'initial_timeout' => 10,\n  'text' => 'Please, enter your 3 digits PIN'\n];\n$call->promptTTSAsync($collect)->done(function($action) {\n  // .. later in the code since it's an async method\n  if ($action->isCompleted()) {\n    $result = $action->getResult();\n  }\n});\n")),(0,l.kt)("h3",{id:"getstate"},"getState"),(0,l.kt)("p",null,"Return the current state of the prompt attempt."),(0,l.kt)("p",null,"Available In: ",(0,l.kt)("img",{class:"method-available-tag",src:"https://img.shields.io/badge/-v2.0+-brightgreen.svg"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"None")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"string")," - Current state of the prompt attempt."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Start the attempt and print the state."',title:'"Start',the:!0,attempt:!0,and:!0,print:!0,'state."':!0},"<?php\n\n$collect = [\n  'type' => 'digits',\n  'digits_max' => 3,\n  'initial_timeout' => 10,\n  'text' => 'Please, enter your 3 digits PIN'\n];\n$call->promptTTSAsync($collect)->done(function($action) {\n  echo $action->getState();\n});\n")),(0,l.kt)("h3",{id:"iscompleted"},"isCompleted"),(0,l.kt)("p",null,"Return ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," if the prompt attempt has finished, ",(0,l.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,l.kt)("p",null,"Available In: ",(0,l.kt)("img",{class:"method-available-tag",src:"https://img.shields.io/badge/-v2.0+-brightgreen.svg"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"None")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Boolean")," - True/False accordingly to the state."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Start the attempt and check if it has finished."',title:'"Start',the:!0,attempt:!0,and:!0,check:!0,if:!0,it:!0,has:!0,'finished."':!0},"<?php\n\n$collect = [\n  'type' => 'digits',\n  'digits_max' => 3,\n  'initial_timeout' => 10,\n  'text' => 'Please, enter your 3 digits PIN'\n];\n$call->promptTTSAsync($collect)->done(function($action) {\n  if ($action->isCompleted()) {\n\n  }\n});\n")),(0,l.kt)("h3",{id:"stop"},"stop"),(0,l.kt)("p",null,"Stop the action immediately."),(0,l.kt)("p",null,"Available In: ",(0,l.kt)("img",{class:"method-available-tag",src:"https://img.shields.io/badge/-v2.0+-brightgreen.svg"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"None")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"React\\Promise\\Promise")," - Promise object that will be fulfilled with a ",(0,l.kt)("a",{parentName:"p",href:"/docs/php/reference/relay_calling/stop_result"},(0,l.kt)("inlineCode",{parentName:"a"},"Relay.Calling.StopResult"))," object."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Start the attempt and then stop it."',title:'"Start',the:!0,attempt:!0,and:!0,then:!0,stop:!0,'it."':!0},"<?php\n\n$collect = [\n  'type' => 'digits',\n  'digits_max' => 3,\n  'initial_timeout' => 10,\n  'text' => 'Please, enter your 3 digits PIN'\n];\n$call->promptTTSAsync($collect)->done(function($action) {\n  // For demonstration purposes only..\n  $action->stop()->done(function($stopResult) {\n\n  });\n});\n")),(0,l.kt)("h3",{id:"volume"},"volume"),(0,l.kt)("p",null,"Control the volume of the playback."),(0,l.kt)("p",null,"Available In: ",(0,l.kt)("img",{class:"method-available-tag",src:"https://img.shields.io/badge/-v2.3+-brightgreen.svg"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"volume")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"method-prop-type"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"required-arg"},"required")),(0,l.kt)("td",{parentName:"tr",align:null},"Volume value between -40dB and +40dB where 0 is unchanged.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"React\\Promise\\Promise")," - Promise object that will be fulfilled with a ",(0,l.kt)("a",{parentName:"p",href:"/docs/php/reference/relay_calling/prompt_volume_result"},(0,l.kt)("inlineCode",{parentName:"a"},"Relay.Calling.PromptVolumeResult"))," object."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Start the prompt and increase the playback volume."',title:'"Start',the:!0,prompt:!0,and:!0,increase:!0,playback:!0,'volume."':!0},"<?php\n\n$collect = [\n  'type' => 'digits',\n  'digits_max' => 3,\n  'initial_timeout' => 10,\n  'text' => 'Please, enter your 3 digits PIN'\n];\n$call->promptTTSAsync($collect)->done(function($action) {\n  // For demonstration purposes only..\n  $action->volume(5.0)->done(function($volumeResult) {\n\n  });\n});\n")))}c.isMDXComponent=!0}}]);