"use strict";(self.webpackChunksignalwire_community_docs=self.webpackChunksignalwire_community_docs||[]).push([[2380],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>m});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},o=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),d=c(n),m=l,g=d["".concat(i,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(g,s(s({ref:t},o),{},{components:n})):r.createElement(g,s({ref:t},o))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,s=new Array(a);s[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:l,s[1]=p;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8708:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var r=n(7462),l=(n(7294),n(3905));const a={sidebar_label:"DetectResult"},s="Relay.Calling.DetectResult",p={unversionedId:"php/reference/relay_calling/detect_result",id:"php/reference/relay_calling/detect_result",title:"Relay.Calling.DetectResult",description:"This object returned from one of synchronous detect methods that represents the final result of a detector.",source:"@site/docs/php/reference/relay_calling/detect_result.mdx",sourceDirName:"php/reference/relay_calling",slug:"/php/reference/relay_calling/detect_result",permalink:"/docs/php/reference/relay_calling/detect_result",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/php/reference/relay_calling/detect_result.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"DetectResult"},sidebar:"phpSidebar",previous:{title:"DetectAction",permalink:"/docs/php/reference/relay_calling/detect_action"},next:{title:"DialResult",permalink:"/docs/php/reference/relay_calling/dial_result"}},i={},c=[{value:"Methods",id:"methods",level:2},{value:"getEvent",id:"getevent",level:3},{value:"getResult",id:"getresult",level:3},{value:"getType",id:"gettype",level:3},{value:"isSuccessful",id:"issuccessful",level:3}],o={toc:c};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"relaycallingdetectresult"},"Relay.Calling.DetectResult"),(0,l.kt)("p",null,"This object returned from one of ",(0,l.kt)("em",{parentName:"p"},"synchronous")," detect methods that represents the final result of a detector."),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("div",{class:"method-definitions"}),(0,l.kt)("h3",{id:"getevent"},"getEvent"),(0,l.kt)("p",null,"Returns the last Relay Event arrived for this operation."),(0,l.kt)("p",null,"Available In: ",(0,l.kt)("img",{class:"method-available-tag",src:"https://img.shields.io/badge/-v2.1+-brightgreen.svg"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"None")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/php/reference/relay_event"},(0,l.kt)("inlineCode",{parentName:"a"},"Relay.Event"))," - Last Relay Event."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Detect digits and grab the result when it\'s completed."',title:'"Detect',digits:!0,and:!0,grab:!0,the:!0,result:!0,when:!0,"it's":!0,'completed."':!0},"<?php\n\n$call->detectDigit()->done(function($result) {\n  $event = $result->getEvent();\n  // Inspect $event->payload ..\n});\n")),(0,l.kt)("h3",{id:"getresult"},"getResult"),(0,l.kt)("p",null,"Returns the result of the detector. It could be the digits or the type (",(0,l.kt)("inlineCode",{parentName:"p"},"machine")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"human"),") detected."),(0,l.kt)("p",null,"Available In: ",(0,l.kt)("img",{class:"method-available-tag",src:"https://img.shields.io/badge/-v2.1+-brightgreen.svg"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"None")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"string")," - Detector result."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Detect DTMF and print out the result."',title:'"Detect',DTMF:!0,and:!0,print:!0,out:!0,the:!0,'result."':!0},'<?php\n\n$call->detectDigit()->done(function($result) {\n  if ($result->isSuccessful()) {\n    echo "DTMF detected: " . $result->getResult();\n  }\n});\n')),(0,l.kt)("h3",{id:"gettype"},"getType"),(0,l.kt)("p",null,"Returns the ",(0,l.kt)("inlineCode",{parentName:"p"},"type")," of detector."),(0,l.kt)("p",null,"Available In: ",(0,l.kt)("img",{class:"method-available-tag",src:"https://img.shields.io/badge/-v2.1+-brightgreen.svg"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"None")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"string")," - Detector type: ",(0,l.kt)("inlineCode",{parentName:"p"},"digit"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"machine")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"fax"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="Check the type of a detector."',title:'"Check',the:!0,type:!0,of:!0,a:!0,'detector."':!0},'<?php\n\n$call->detectFax()->done(function($result) {\n  if ($result->isSuccessful()) {\n    echo "Detector type: " . $result->getType();\n  }\n});\n')),(0,l.kt)("h3",{id:"issuccessful"},"isSuccessful"),(0,l.kt)("p",null,"Return ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," if detector succeeded, ",(0,l.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,l.kt)("p",null,"Available In: ",(0,l.kt)("img",{class:"method-available-tag",src:"https://img.shields.io/badge/-v2.1+-brightgreen.svg"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"None")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Boolean")," - True/False accordingly to the state."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php",metastring:"title=\"Start detecting a fax, then check if a 'fax' has been detected.\"",title:'"Start',detecting:!0,a:!0,"fax,":!0,then:!0,check:!0,if:!0,"'fax'":!0,has:!0,been:!0,'detected."':!0},"<?php\n\n$call->detectFax()->done(function($result) {\n  if ($result->isSuccessful()) {\n    // Fax has been detected!\n  }\n});\n")))}u.isMDXComponent=!0}}]);