(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{4035:function(m,S,t){m.exports={clickable:t(4772),"customized-progress-dot":t(4773),deprecated:t(4774),error:t(4775),icon:t(4776),"label-placement":t(4777),nav:t(4778),"progress-debug":t(4779),"progress-dot-small":t(4780),"progress-dot":t(4781),progress:t(4782),simple:t(4783),"small-size":t(4784),"step-next":t(4785),"steps-in-steps":t(4786),"vertical-small":t(4787),vertical:t(4788)}},4772:function(m,S,t){m.exports={content:{"zh-CN":[["p","\u8BBE\u7F6E ",["code","onChange"]," \u540E\uFF0CSteps \u53D8\u4E3A\u53EF\u70B9\u51FB\u72B6\u6001\u3002"]],"en-US":[["p","Setting ",["code","onChange"]," makes Steps clickable."]]},meta:{order:10,title:{"zh-CN":"\u53EF\u70B9\u51FB","en-US":"Clickable"},filename:"components/steps/demo/clickable.md",id:"components-steps-demo-clickable"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { Divider<span class="token punctuation">,</span> Steps } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React<span class="token punctuation">,</span> { useState } from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> <span class="token punctuation">[</span>current<span class="token punctuation">,</span> setCurrent<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> onChange <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">:</span> number<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onChange:'</span><span class="token punctuation">,</span> current<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    <span class="token function">setCurrent</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>
  <span class="token keyword">const</span> description <span class="token operator">=</span> <span class="token string">'This is a description.'</span><span class="token comment" spellcheck="true">;</span>

  return <span class="token punctuation">(</span>
    <span class="token operator">&lt;></span>
      <span class="token operator">&lt;</span>Steps
        current<span class="token operator">=</span>{current}
        onChange<span class="token operator">=</span>{onChange}
        items<span class="token operator">=</span>{<span class="token punctuation">[</span>
          {
            title<span class="token punctuation">:</span> <span class="token string">'Step 1'</span><span class="token punctuation">,</span>
            description<span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
          {
            title<span class="token punctuation">:</span> <span class="token string">'Step 2'</span><span class="token punctuation">,</span>
            description<span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
          {
            title<span class="token punctuation">:</span> <span class="token string">'Step 3'</span><span class="token punctuation">,</span>
            description<span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
        <span class="token punctuation">]</span>}
      <span class="token operator">/</span><span class="token operator">></span>

      <span class="token operator">&lt;</span>Divider <span class="token operator">/</span><span class="token operator">></span>

      <span class="token operator">&lt;</span>Steps
        current<span class="token operator">=</span>{current}
        onChange<span class="token operator">=</span>{onChange}
        direction<span class="token operator">=</span><span class="token string">"vertical"</span>
        items<span class="token operator">=</span>{<span class="token punctuation">[</span>
          {
            title<span class="token punctuation">:</span> <span class="token string">'Step 1'</span><span class="token punctuation">,</span>
            description<span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
          {
            title<span class="token punctuation">:</span> <span class="token string">'Step 2'</span><span class="token punctuation">,</span>
            description<span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
          {
            title<span class="token punctuation">:</span> <span class="token string">'Step 3'</span><span class="token punctuation">,</span>
            description<span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
        <span class="token punctuation">]</span>}
      <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Divider<span class="token punctuation">,</span> Steps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>current<span class="token punctuation">,</span> setCurrent<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> number<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onChange:'</span><span class="token punctuation">,</span> current<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setCurrent</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> description <span class="token operator">=</span> <span class="token string">'This is a description.'</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps</span></span>
        <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>current<span class="token punctuation">}</span></span>
        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span>
        <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">'Step 1'</span><span class="token punctuation">,</span>
            description<span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">'Step 2'</span><span class="token punctuation">,</span>
            description<span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">'Step 3'</span><span class="token punctuation">,</span>
            description<span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>

      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Divider</span></span> <span class="token punctuation">/></span></span>

      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps</span></span>
        <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>current<span class="token punctuation">}</span></span>
        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span>
        <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span>
        <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">'Step 1'</span><span class="token punctuation">,</span>
            description<span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">'Step 2'</span><span class="token punctuation">,</span>
            description<span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">'Step 3'</span><span class="token punctuation">,</span>
            description<span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Divider<span class="token punctuation">,</span> Steps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>current<span class="token punctuation">,</span> setCurrent<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onChange:'</span><span class="token punctuation">,</span> current<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setCurrent</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> description <span class="token operator">=</span> <span class="token string">'This is a description.'</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps</span></span>
        <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>current<span class="token punctuation">}</span></span>
        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span>
        <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Step 1'</span><span class="token punctuation">,</span>
            description<span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Step 2'</span><span class="token punctuation">,</span>
            description<span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Step 3'</span><span class="token punctuation">,</span>
            description<span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>

      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Divider</span></span> <span class="token punctuation">/></span></span>

      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps</span></span>
        <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>current<span class="token punctuation">}</span></span>
        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span>
        <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span>
        <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Step 1'</span><span class="token punctuation">,</span>
            description<span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Step 2'</span><span class="token punctuation">,</span>
            description<span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Step 3'</span><span class="token punctuation">,</span>
            description<span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var f=t(0),C=t(63);function i(n){return i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},i(n)}var e=t(12),o=d(t(0));function r(n){if(typeof WeakMap!="function")return null;var s=new WeakMap,a=new WeakMap;return(r=function(l){return l?a:s})(n)}function d(n,s){if(!s&&n&&n.__esModule)return n;if(n===null||i(n)!=="object"&&typeof n!="function")return{default:n};var a=r(s);if(a&&a.has(n))return a.get(n);var p={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in n)if(c!=="default"&&Object.prototype.hasOwnProperty.call(n,c)){var u=l?Object.getOwnPropertyDescriptor(n,c):null;u&&(u.get||u.set)?Object.defineProperty(p,c,u):p[c]=n[c]}return p.default=n,a&&a.set(n,p),p}function g(n,s){return T(n)||x(n,s)||y(n,s)||k()}function k(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function y(n,s){if(!!n){if(typeof n=="string")return b(n,s);var a=Object.prototype.toString.call(n).slice(8,-1);if(a==="Object"&&n.constructor&&(a=n.constructor.name),a==="Map"||a==="Set")return Array.from(n);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return b(n,s)}}function b(n,s){(s==null||s>n.length)&&(s=n.length);for(var a=0,p=new Array(s);a<s;a++)p[a]=n[a];return p}function x(n,s){var a=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(a!=null){var p=[],l=!0,c=!1,u,h;try{for(a=a.call(n);!(l=(u=a.next()).done)&&(p.push(u.value),!(s&&p.length===s));l=!0);}catch(v){c=!0,h=v}finally{try{!l&&a.return!=null&&a.return()}finally{if(c)throw h}}return p}}function T(n){if(Array.isArray(n))return n}var P=function(){var s=(0,o.useState)(0),a=g(s,2),p=a[0],l=a[1],c=function(v){console.log("onChange:",p),l(v)},u="This is a description.";return o.default.createElement(o.default.Fragment,null,o.default.createElement(e.Steps,{current:p,onChange:c,items:[{title:"Step 1",description:u},{title:"Step 2",description:u},{title:"Step 3",description:u}]}),o.default.createElement(e.Divider,null),o.default.createElement(e.Steps,{current:p,onChange:c,direction:"vertical",items:[{title:"Step 1",description:u},{title:"Step 2",description:u},{title:"Step 3",description:u}]}))},A=P;return f.createElement(A)}}},4773:function(m,S,t){m.exports={content:{"zh-CN":[["p","\u4E3A\u70B9\u72B6\u6B65\u9AA4\u6761\u589E\u52A0\u81EA\u5B9A\u4E49\u5C55\u793A\u3002"]],"en-US":[["p","You can customize the display for Steps with progress dot style."]]},meta:{order:9,title:{"zh-CN":"\u81EA\u5B9A\u4E49\u70B9\u72B6\u6B65\u9AA4\u6761","en-US":"Customized Dot Style"},filename:"components/steps/demo/customized-progress-dot.md",id:"components-steps-demo-customized-progress-dot"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import type { StepsProps } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import { Popover<span class="token punctuation">,</span> Steps } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> customDot<span class="token punctuation">:</span> StepsProps<span class="token punctuation">[</span><span class="token string">'progressDot'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>dot<span class="token punctuation">,</span> { status<span class="token punctuation">,</span> index }<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Popover
    content<span class="token operator">=</span>{
      <span class="token operator">&lt;</span>span<span class="token operator">></span>
        <span class="token keyword">step</span> {index} status<span class="token punctuation">:</span> {status}
      <span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
    }
  <span class="token operator">></span>
    {dot}
  <span class="token operator">&lt;</span><span class="token operator">/</span>Popover<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
<span class="token keyword">const</span> description <span class="token operator">=</span> <span class="token string">'You can hover on the dot.'</span><span class="token comment" spellcheck="true">;</span>
<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Steps
    current<span class="token operator">=</span>{<span class="token number">1</span>}
    progressDot<span class="token operator">=</span>{customDot}
    items<span class="token operator">=</span>{<span class="token punctuation">[</span>
      {
        title<span class="token punctuation">:</span> <span class="token string">'Finished'</span><span class="token punctuation">,</span>
        description<span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        title<span class="token punctuation">:</span> <span class="token string">'In Progress'</span><span class="token punctuation">,</span>
        description<span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        title<span class="token punctuation">:</span> <span class="token string">'Waiting'</span><span class="token punctuation">,</span>
        description<span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        title<span class="token punctuation">:</span> <span class="token string">'Waiting'</span><span class="token punctuation">,</span>
        description<span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
    <span class="token punctuation">]</span>}
  <span class="token operator">/</span><span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> type <span class="token punctuation">{</span> StepsProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Popover<span class="token punctuation">,</span> Steps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> customDot<span class="token operator">:</span> StepsProps<span class="token punctuation">[</span><span class="token string">'progressDot'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>dot<span class="token punctuation">,</span> <span class="token punctuation">{</span> status<span class="token punctuation">,</span> index <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popover</span></span>
    <span class="token attr-name">content</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>
        step <span class="token punctuation">{</span>index<span class="token punctuation">}</span> status<span class="token operator">:</span> <span class="token punctuation">{</span>status<span class="token punctuation">}</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
    <span class="token punctuation">}</span></span>
  <span class="token punctuation">></span></span>
    <span class="token punctuation">{</span>dot<span class="token punctuation">}</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popover</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> description <span class="token operator">=</span> <span class="token string">'You can hover on the dot.'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps</span></span>
    <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">progressDot</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>customDot<span class="token punctuation">}</span></span>
    <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'Finished'</span><span class="token punctuation">,</span>
        description<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'In Progress'</span><span class="token punctuation">,</span>
        description<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'Waiting'</span><span class="token punctuation">,</span>
        description<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'Waiting'</span><span class="token punctuation">,</span>
        description<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Popover<span class="token punctuation">,</span> Steps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">customDot</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">dot<span class="token punctuation">,</span> <span class="token punctuation">{</span> status<span class="token punctuation">,</span> index <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Popover</span></span>
    <span class="token attr-name">content</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>
        step <span class="token punctuation">{</span>index<span class="token punctuation">}</span> status<span class="token operator">:</span> <span class="token punctuation">{</span>status<span class="token punctuation">}</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
    <span class="token punctuation">}</span></span>
  <span class="token punctuation">></span></span>
    <span class="token punctuation">{</span>dot<span class="token punctuation">}</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Popover</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> description <span class="token operator">=</span> <span class="token string">'You can hover on the dot.'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps</span></span>
    <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">progressDot</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>customDot<span class="token punctuation">}</span></span>
    <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Finished'</span><span class="token punctuation">,</span>
        description<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'In Progress'</span><span class="token punctuation">,</span>
        description<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Waiting'</span><span class="token punctuation">,</span>
        description<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Waiting'</span><span class="token punctuation">,</span>
        description<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var f=t(0),C=t(63),i=t(12),e=o(t(0));function o(y){return y&&y.__esModule?y:{default:y}}var r=function(b,x){var T=x.status,P=x.index;return e.default.createElement(i.Popover,{content:e.default.createElement("span",null,"step ",P," status: ",T)},b)},d="You can hover on the dot.",g=function(){return e.default.createElement(i.Steps,{current:1,progressDot:r,items:[{title:"Finished",description:d},{title:"In Progress",description:d},{title:"Waiting",description:d},{title:"Waiting",description:d}]})},k=g;return f.createElement(k)}}},4774:function(m,S,t){m.exports={content:{"zh-CN":[["p","\u7B80\u5355\u7684\u6B65\u9AA4\u6761\u3002"]],"en-US":[["p","The most basic step bar."]]},meta:{order:-1,title:{"zh-CN":"\u57FA\u672C\u7528\u6CD5\uFF08\u5E9F\u5F03\u7684\u8BED\u6CD5\u7CD6\uFF09","en-US":"Basic"},version:"< 4.24.0",filename:"components/steps/demo/deprecated.md",id:"components-steps-demo-deprecated"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { Steps } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> { <span class="token keyword">Step</span> } <span class="token operator">=</span> Steps<span class="token comment" spellcheck="true">;</span>
<span class="token keyword">const</span> description <span class="token operator">=</span> <span class="token string">'This is a description.'</span><span class="token comment" spellcheck="true">;</span>
<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Steps current<span class="token operator">=</span>{<span class="token number">1</span>}<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token keyword">Step</span> title<span class="token operator">=</span><span class="token string">"Finished"</span> description<span class="token operator">=</span>{description} <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token keyword">Step</span> title<span class="token operator">=</span><span class="token string">"In Progress"</span> description<span class="token operator">=</span>{description} subTitle<span class="token operator">=</span><span class="token string">"Left 00:00:08"</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token keyword">Step</span> title<span class="token operator">=</span><span class="token string">"Waiting"</span> description<span class="token operator">=</span>{description} <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Steps<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Steps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> Step <span class="token punctuation">}</span> <span class="token operator">=</span> Steps<span class="token punctuation">;</span>
<span class="token keyword">const</span> description <span class="token operator">=</span> <span class="token string">'This is a description.'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps</span></span> <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Step</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Finished<span class="token punctuation">"</span></span> <span class="token attr-name">description</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>description<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Step</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>In Progress<span class="token punctuation">"</span></span> <span class="token attr-name">description</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>description<span class="token punctuation">}</span></span> <span class="token attr-name">subTitle</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Left 00:00:08<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Step</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Waiting<span class="token punctuation">"</span></span> <span class="token attr-name">description</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>description<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Steps</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Steps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> Step <span class="token punctuation">}</span> <span class="token operator">=</span> Steps<span class="token punctuation">;</span>
<span class="token keyword">const</span> description <span class="token operator">=</span> <span class="token string">'This is a description.'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps</span></span> <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Step</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Finished<span class="token punctuation">"</span></span> <span class="token attr-name">description</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>description<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Step</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>In Progress<span class="token punctuation">"</span></span> <span class="token attr-name">description</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>description<span class="token punctuation">}</span></span> <span class="token attr-name">subTitle</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Left 00:00:08<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Step</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Waiting<span class="token punctuation">"</span></span> <span class="token attr-name">description</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>description<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Steps</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var f=t(0),C=t(63),i=t(12),e=o(t(0));function o(y){return y&&y.__esModule?y:{default:y}}var r=i.Steps.Step,d="This is a description.",g=function(){return e.default.createElement(i.Steps,{current:1},e.default.createElement(r,{title:"Finished",description:d}),e.default.createElement(r,{title:"In Progress",description:d,subTitle:"Left 00:00:08"}),e.default.createElement(r,{title:"Waiting",description:d}))},k=g;return f.createElement(k)}}},4775:function(m,S,t){m.exports={content:{"zh-CN":[["p","\u4F7F\u7528 Steps \u7684 ",["code","status"]," \u5C5E\u6027\u6765\u6307\u5B9A\u5F53\u524D\u6B65\u9AA4\u7684\u72B6\u6001\u3002"]],"en-US":[["p","By using ",["code","status"]," of ",["code","Steps"],", you can specify the state for current step."]]},meta:{order:6,title:{"zh-CN":"\u6B65\u9AA4\u8FD0\u884C\u9519\u8BEF","en-US":"Error status"},filename:"components/steps/demo/error.md",id:"components-steps-demo-error"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { Steps } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> description <span class="token operator">=</span> <span class="token string">'This is a description'</span><span class="token comment" spellcheck="true">;</span>
<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Steps
    current<span class="token operator">=</span>{<span class="token number">1</span>}
    status<span class="token operator">=</span><span class="token string">"error"</span>
    items<span class="token operator">=</span>{<span class="token punctuation">[</span>
      {
        title<span class="token punctuation">:</span> <span class="token string">'Finished'</span><span class="token punctuation">,</span>
        description<span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        title<span class="token punctuation">:</span> <span class="token string">'In Process'</span><span class="token punctuation">,</span>
        description<span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        title<span class="token punctuation">:</span> <span class="token string">'Waiting'</span><span class="token punctuation">,</span>
        description<span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
    <span class="token punctuation">]</span>}
  <span class="token operator">/</span><span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Steps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> description <span class="token operator">=</span> <span class="token string">'This is a description'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps</span></span>
    <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">status</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>error<span class="token punctuation">"</span></span>
    <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'Finished'</span><span class="token punctuation">,</span>
        description<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'In Process'</span><span class="token punctuation">,</span>
        description<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'Waiting'</span><span class="token punctuation">,</span>
        description<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Steps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> description <span class="token operator">=</span> <span class="token string">'This is a description'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps</span></span>
    <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">status</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>error<span class="token punctuation">"</span></span>
    <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Finished'</span><span class="token punctuation">,</span>
        description<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'In Process'</span><span class="token punctuation">,</span>
        description<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Waiting'</span><span class="token punctuation">,</span>
        description<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var f=t(0),C=t(63),i=t(12),e=o(t(0));function o(k){return k&&k.__esModule?k:{default:k}}var r="This is a description",d=function(){return e.default.createElement(i.Steps,{current:1,status:"error",items:[{title:"Finished",description:r},{title:"In Process",description:r},{title:"Waiting",description:r}]})},g=d;return f.createElement(g)}}},4776:function(m,S,t){m.exports={content:{"zh-CN":[["p","\u901A\u8FC7\u8BBE\u7F6E ",["code","items"]," \u7684 ",["code","icon"]," \u5C5E\u6027\uFF0C\u53EF\u4EE5\u542F\u7528\u81EA\u5B9A\u4E49\u56FE\u6807\u3002"]],"en-US":[["p","You can use your own custom icons by setting the property ",["code","icon"]," for ",["code","items"],"."]]},meta:{order:2,title:{"zh-CN":"\u5E26\u56FE\u6807\u7684\u6B65\u9AA4\u6761","en-US":"With icon"},filename:"components/steps/demo/icon.md",id:"components-steps-demo-icon"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { LoadingOutlined<span class="token punctuation">,</span> SmileOutlined<span class="token punctuation">,</span> SolutionOutlined<span class="token punctuation">,</span> UserOutlined } from <span class="token string">'@ant-design/icons'</span><span class="token comment" spellcheck="true">;</span>
import { Steps } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Steps
    items<span class="token operator">=</span>{<span class="token punctuation">[</span>
      {
        title<span class="token punctuation">:</span> <span class="token string">'Login'</span><span class="token punctuation">,</span>
        status<span class="token punctuation">:</span> <span class="token string">'finish'</span><span class="token punctuation">,</span>
        icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>UserOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        title<span class="token punctuation">:</span> <span class="token string">'Verification'</span><span class="token punctuation">,</span>
        status<span class="token punctuation">:</span> <span class="token string">'finish'</span><span class="token punctuation">,</span>
        icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>SolutionOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        title<span class="token punctuation">:</span> <span class="token string">'Pay'</span><span class="token punctuation">,</span>
        status<span class="token punctuation">:</span> <span class="token string">'process'</span><span class="token punctuation">,</span>
        icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>LoadingOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        title<span class="token punctuation">:</span> <span class="token string">'Done'</span><span class="token punctuation">,</span>
        status<span class="token punctuation">:</span> <span class="token string">'wait'</span><span class="token punctuation">,</span>
        icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>SmileOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
    <span class="token punctuation">]</span>}
  <span class="token operator">/</span><span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> LoadingOutlined<span class="token punctuation">,</span> SmileOutlined<span class="token punctuation">,</span> SolutionOutlined<span class="token punctuation">,</span> UserOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Steps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps</span></span>
    <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'Login'</span><span class="token punctuation">,</span>
        status<span class="token operator">:</span> <span class="token string">'finish'</span><span class="token punctuation">,</span>
        icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">UserOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'Verification'</span><span class="token punctuation">,</span>
        status<span class="token operator">:</span> <span class="token string">'finish'</span><span class="token punctuation">,</span>
        icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">SolutionOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'Pay'</span><span class="token punctuation">,</span>
        status<span class="token operator">:</span> <span class="token string">'process'</span><span class="token punctuation">,</span>
        icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">LoadingOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'Done'</span><span class="token punctuation">,</span>
        status<span class="token operator">:</span> <span class="token string">'wait'</span><span class="token punctuation">,</span>
        icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">SmileOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> LoadingOutlined<span class="token punctuation">,</span> SmileOutlined<span class="token punctuation">,</span> SolutionOutlined<span class="token punctuation">,</span> UserOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Steps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps</span></span>
    <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Login'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">'finish'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">UserOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Verification'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">'finish'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">SolutionOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Pay'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">'process'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">LoadingOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Done'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">'wait'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">SmileOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var f=t(0),C=t(63),i=t(66),e=t(12),o=r(t(0));function r(k){return k&&k.__esModule?k:{default:k}}var d=function(){return o.default.createElement(e.Steps,{items:[{title:"Login",status:"finish",icon:o.default.createElement(i.UserOutlined,null)},{title:"Verification",status:"finish",icon:o.default.createElement(i.SolutionOutlined,null)},{title:"Pay",status:"process",icon:o.default.createElement(i.LoadingOutlined,null)},{title:"Done",status:"wait",icon:o.default.createElement(i.SmileOutlined,null)}]})},g=d;return f.createElement(g)}}},4777:function(m,S,t){m.exports={content:{"zh-CN":[["p","\u4FEE\u6539\u6807\u7B7E\u653E\u7F6E\u4F4D\u7F6E\u4E3A ",["code","vertical"],"\u3002"]],"en-US":[["p","Set labelPlacement to ",["code","vertical"],"."]]},meta:{order:14,title:{"zh-CN":"\u6807\u7B7E\u653E\u7F6E\u4F4D\u7F6E","en-US":"Label Placement"},filename:"components/steps/demo/label-placement.md",id:"components-steps-demo-label-placement"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { Steps } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> description <span class="token operator">=</span> <span class="token string">'This is a description.'</span><span class="token comment" spellcheck="true">;</span>
<span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token punctuation">[</span>
  {
    title<span class="token punctuation">:</span> <span class="token string">'Finished'</span><span class="token punctuation">,</span>
    description<span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
  {
    title<span class="token punctuation">:</span> <span class="token string">'In Progress'</span><span class="token punctuation">,</span>
    description<span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
  {
    title<span class="token punctuation">:</span> <span class="token string">'Waiting'</span><span class="token punctuation">,</span>
    description<span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>
<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;></span>
    <span class="token operator">&lt;</span>Steps current<span class="token operator">=</span>{<span class="token number">1</span>} labelPlacement<span class="token operator">=</span><span class="token string">"vertical"</span> items<span class="token operator">=</span>{items} <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>Steps current<span class="token operator">=</span>{<span class="token number">1</span>} percent<span class="token operator">=</span>{<span class="token number">60</span>} labelPlacement<span class="token operator">=</span><span class="token string">"vertical"</span> items<span class="token operator">=</span>{items} <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>Steps current<span class="token operator">=</span>{<span class="token number">1</span>} size<span class="token operator">=</span><span class="token string">"small"</span> labelPlacement<span class="token operator">=</span><span class="token string">"vertical"</span> items<span class="token operator">=</span>{items} <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Steps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> description <span class="token operator">=</span> <span class="token string">'This is a description.'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">'Finished'</span><span class="token punctuation">,</span>
    description<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">'In Progress'</span><span class="token punctuation">,</span>
    description<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">'Waiting'</span><span class="token punctuation">,</span>
    description<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps</span></span> <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span> <span class="token attr-name">labelPlacement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span> <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>items<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps</span></span> <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span> <span class="token attr-name">percent</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">60</span><span class="token punctuation">}</span></span> <span class="token attr-name">labelPlacement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span> <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>items<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps</span></span> <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token attr-name">labelPlacement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span> <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>items<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Steps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> description <span class="token operator">=</span> <span class="token string">'This is a description.'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Finished'</span><span class="token punctuation">,</span>
    description<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'In Progress'</span><span class="token punctuation">,</span>
    description<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Waiting'</span><span class="token punctuation">,</span>
    description<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps</span></span> <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span> <span class="token attr-name">labelPlacement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span> <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>items<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps</span></span> <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span> <span class="token attr-name">percent</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">60</span><span class="token punctuation">}</span></span> <span class="token attr-name">labelPlacement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span> <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>items<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps</span></span> <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token attr-name">labelPlacement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span> <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>items<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var f=t(0),C=t(63),i=t(12),e=o(t(0));function o(y){return y&&y.__esModule?y:{default:y}}var r="This is a description.",d=[{title:"Finished",description:r},{title:"In Progress",description:r},{title:"Waiting",description:r}],g=function(){return e.default.createElement(e.default.Fragment,null,e.default.createElement(i.Steps,{current:1,labelPlacement:"vertical",items:d}),e.default.createElement("br",null),e.default.createElement(i.Steps,{current:1,percent:60,labelPlacement:"vertical",items:d}),e.default.createElement("br",null),e.default.createElement(i.Steps,{current:1,size:"small",labelPlacement:"vertical",items:d}))},k=g;return f.createElement(k)}}},4778:function(m,S,t){m.exports={content:{"zh-CN":[["p","\u5BFC\u822A\u7C7B\u578B\u7684\u6B65\u9AA4\u6761\u3002"]],"en-US":[["p","Navigation steps."]]},meta:{order:11,title:{"zh-CN":"\u5BFC\u822A\u6B65\u9AA4","en-US":"Navigation Steps"},filename:"components/steps/demo/nav.md",id:"components-steps-demo-nav"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { Steps } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React<span class="token punctuation">,</span> { useState } from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> <span class="token punctuation">[</span>current<span class="token punctuation">,</span> setCurrent<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> onChange <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">:</span> number<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onChange:'</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    <span class="token function">setCurrent</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  return <span class="token punctuation">(</span>
    <span class="token operator">&lt;></span>
      <span class="token operator">&lt;</span>Steps
        type<span class="token operator">=</span><span class="token string">"navigation"</span>
        size<span class="token operator">=</span><span class="token string">"small"</span>
        current<span class="token operator">=</span>{current}
        onChange<span class="token operator">=</span>{onChange}
        className<span class="token operator">=</span><span class="token string">"site-navigation-steps"</span>
        items<span class="token operator">=</span>{<span class="token punctuation">[</span>
          {
            title<span class="token punctuation">:</span> <span class="token string">'Step 1'</span><span class="token punctuation">,</span>
            subTitle<span class="token punctuation">:</span> <span class="token string">'00:00:05'</span><span class="token punctuation">,</span>
            status<span class="token punctuation">:</span> <span class="token string">'finish'</span><span class="token punctuation">,</span>
            description<span class="token punctuation">:</span> <span class="token string">'This is a description.'</span><span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
          {
            title<span class="token punctuation">:</span> <span class="token string">'Step 2'</span><span class="token punctuation">,</span>
            subTitle<span class="token punctuation">:</span> <span class="token string">'00:01:02'</span><span class="token punctuation">,</span>
            status<span class="token punctuation">:</span> <span class="token string">'process'</span><span class="token punctuation">,</span>
            description<span class="token punctuation">:</span> <span class="token string">'This is a description.'</span><span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
          {
            title<span class="token punctuation">:</span> <span class="token string">'Step 3'</span><span class="token punctuation">,</span>
            subTitle<span class="token punctuation">:</span> <span class="token string">'waiting for longlong time'</span><span class="token punctuation">,</span>
            status<span class="token punctuation">:</span> <span class="token string">'wait'</span><span class="token punctuation">,</span>
            description<span class="token punctuation">:</span> <span class="token string">'This is a description.'</span><span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
        <span class="token punctuation">]</span>}
      <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Steps
        type<span class="token operator">=</span><span class="token string">"navigation"</span>
        current<span class="token operator">=</span>{current}
        onChange<span class="token operator">=</span>{onChange}
        className<span class="token operator">=</span><span class="token string">"site-navigation-steps"</span>
        items<span class="token operator">=</span>{<span class="token punctuation">[</span>
          {
            status<span class="token punctuation">:</span> <span class="token string">'finish'</span><span class="token punctuation">,</span>
            title<span class="token punctuation">:</span> <span class="token string">'Step 1'</span><span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
          {
            status<span class="token punctuation">:</span> <span class="token string">'process'</span><span class="token punctuation">,</span>
            title<span class="token punctuation">:</span> <span class="token string">'Step 2'</span><span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
          {
            status<span class="token punctuation">:</span> <span class="token string">'wait'</span><span class="token punctuation">,</span>
            title<span class="token punctuation">:</span> <span class="token string">'Step 3'</span><span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
          {
            status<span class="token punctuation">:</span> <span class="token string">'wait'</span><span class="token punctuation">,</span>
            title<span class="token punctuation">:</span> <span class="token string">'Step 4'</span><span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
        <span class="token punctuation">]</span>}
      <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Steps
        type<span class="token operator">=</span><span class="token string">"navigation"</span>
        size<span class="token operator">=</span><span class="token string">"small"</span>
        current<span class="token operator">=</span>{current}
        onChange<span class="token operator">=</span>{onChange}
        className<span class="token operator">=</span><span class="token string">"site-navigation-steps"</span>
        items<span class="token operator">=</span>{<span class="token punctuation">[</span>
          {
            status<span class="token punctuation">:</span> <span class="token string">'finish'</span><span class="token punctuation">,</span>
            title<span class="token punctuation">:</span> <span class="token string">'finish 1'</span><span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
          {
            status<span class="token punctuation">:</span> <span class="token string">'finish'</span><span class="token punctuation">,</span>
            title<span class="token punctuation">:</span> <span class="token string">'finish 2'</span><span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
          {
            status<span class="token punctuation">:</span> <span class="token string">'process'</span><span class="token punctuation">,</span>
            title<span class="token punctuation">:</span> <span class="token string">'current process'</span><span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
          {
            status<span class="token punctuation">:</span> <span class="token string">'wait'</span><span class="token punctuation">,</span>
            title<span class="token punctuation">:</span> <span class="token string">'wait'</span><span class="token punctuation">,</span>
            disabled<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
        <span class="token punctuation">]</span>}
      <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Steps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>current<span class="token punctuation">,</span> setCurrent<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> number<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onChange:'</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setCurrent</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps</span></span>
        <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>navigation<span class="token punctuation">"</span></span>
        <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span>
        <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>current<span class="token punctuation">}</span></span>
        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span>
        <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>site-navigation-steps<span class="token punctuation">"</span></span>
        <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">'Step 1'</span><span class="token punctuation">,</span>
            subTitle<span class="token operator">:</span> <span class="token string">'00:00:05'</span><span class="token punctuation">,</span>
            status<span class="token operator">:</span> <span class="token string">'finish'</span><span class="token punctuation">,</span>
            description<span class="token operator">:</span> <span class="token string">'This is a description.'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">'Step 2'</span><span class="token punctuation">,</span>
            subTitle<span class="token operator">:</span> <span class="token string">'00:01:02'</span><span class="token punctuation">,</span>
            status<span class="token operator">:</span> <span class="token string">'process'</span><span class="token punctuation">,</span>
            description<span class="token operator">:</span> <span class="token string">'This is a description.'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">'Step 3'</span><span class="token punctuation">,</span>
            subTitle<span class="token operator">:</span> <span class="token string">'waiting for longlong time'</span><span class="token punctuation">,</span>
            status<span class="token operator">:</span> <span class="token string">'wait'</span><span class="token punctuation">,</span>
            description<span class="token operator">:</span> <span class="token string">'This is a description.'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps</span></span>
        <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>navigation<span class="token punctuation">"</span></span>
        <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>current<span class="token punctuation">}</span></span>
        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span>
        <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>site-navigation-steps<span class="token punctuation">"</span></span>
        <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            status<span class="token operator">:</span> <span class="token string">'finish'</span><span class="token punctuation">,</span>
            title<span class="token operator">:</span> <span class="token string">'Step 1'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            status<span class="token operator">:</span> <span class="token string">'process'</span><span class="token punctuation">,</span>
            title<span class="token operator">:</span> <span class="token string">'Step 2'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            status<span class="token operator">:</span> <span class="token string">'wait'</span><span class="token punctuation">,</span>
            title<span class="token operator">:</span> <span class="token string">'Step 3'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            status<span class="token operator">:</span> <span class="token string">'wait'</span><span class="token punctuation">,</span>
            title<span class="token operator">:</span> <span class="token string">'Step 4'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps</span></span>
        <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>navigation<span class="token punctuation">"</span></span>
        <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span>
        <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>current<span class="token punctuation">}</span></span>
        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span>
        <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>site-navigation-steps<span class="token punctuation">"</span></span>
        <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            status<span class="token operator">:</span> <span class="token string">'finish'</span><span class="token punctuation">,</span>
            title<span class="token operator">:</span> <span class="token string">'finish 1'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            status<span class="token operator">:</span> <span class="token string">'finish'</span><span class="token punctuation">,</span>
            title<span class="token operator">:</span> <span class="token string">'finish 2'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            status<span class="token operator">:</span> <span class="token string">'process'</span><span class="token punctuation">,</span>
            title<span class="token operator">:</span> <span class="token string">'current process'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            status<span class="token operator">:</span> <span class="token string">'wait'</span><span class="token punctuation">,</span>
            title<span class="token operator">:</span> <span class="token string">'wait'</span><span class="token punctuation">,</span>
            disabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Steps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>current<span class="token punctuation">,</span> setCurrent<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onChange:'</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setCurrent</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps</span></span>
        <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>navigation<span class="token punctuation">"</span></span>
        <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span>
        <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>current<span class="token punctuation">}</span></span>
        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span>
        <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>site-navigation-steps<span class="token punctuation">"</span></span>
        <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Step 1'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">subTitle</span><span class="token operator">:</span> <span class="token string">'00:00:05'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">'finish'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'This is a description.'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Step 2'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">subTitle</span><span class="token operator">:</span> <span class="token string">'00:01:02'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">'process'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'This is a description.'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Step 3'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">subTitle</span><span class="token operator">:</span> <span class="token string">'waiting for longlong time'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">'wait'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'This is a description.'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps</span></span>
        <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>navigation<span class="token punctuation">"</span></span>
        <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>current<span class="token punctuation">}</span></span>
        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span>
        <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>site-navigation-steps<span class="token punctuation">"</span></span>
        <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">'finish'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Step 1'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">'process'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Step 2'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">'wait'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Step 3'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">'wait'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Step 4'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps</span></span>
        <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>navigation<span class="token punctuation">"</span></span>
        <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span>
        <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>current<span class="token punctuation">}</span></span>
        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span>
        <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>site-navigation-steps<span class="token punctuation">"</span></span>
        <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">'finish'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'finish 1'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">'finish'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'finish 2'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">'process'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'current process'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">'wait'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'wait'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">disabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var f=t(0),C=t(63);function i(n){return i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},i(n)}var e=t(12),o=d(t(0));function r(n){if(typeof WeakMap!="function")return null;var s=new WeakMap,a=new WeakMap;return(r=function(l){return l?a:s})(n)}function d(n,s){if(!s&&n&&n.__esModule)return n;if(n===null||i(n)!=="object"&&typeof n!="function")return{default:n};var a=r(s);if(a&&a.has(n))return a.get(n);var p={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in n)if(c!=="default"&&Object.prototype.hasOwnProperty.call(n,c)){var u=l?Object.getOwnPropertyDescriptor(n,c):null;u&&(u.get||u.set)?Object.defineProperty(p,c,u):p[c]=n[c]}return p.default=n,a&&a.set(n,p),p}function g(n,s){return T(n)||x(n,s)||y(n,s)||k()}function k(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function y(n,s){if(!!n){if(typeof n=="string")return b(n,s);var a=Object.prototype.toString.call(n).slice(8,-1);if(a==="Object"&&n.constructor&&(a=n.constructor.name),a==="Map"||a==="Set")return Array.from(n);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return b(n,s)}}function b(n,s){(s==null||s>n.length)&&(s=n.length);for(var a=0,p=new Array(s);a<s;a++)p[a]=n[a];return p}function x(n,s){var a=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(a!=null){var p=[],l=!0,c=!1,u,h;try{for(a=a.call(n);!(l=(u=a.next()).done)&&(p.push(u.value),!(s&&p.length===s));l=!0);}catch(v){c=!0,h=v}finally{try{!l&&a.return!=null&&a.return()}finally{if(c)throw h}}return p}}function T(n){if(Array.isArray(n))return n}var P=function(){var s=(0,o.useState)(0),a=g(s,2),p=a[0],l=a[1],c=function(h){console.log("onChange:",h),l(h)};return o.default.createElement(o.default.Fragment,null,o.default.createElement(e.Steps,{type:"navigation",size:"small",current:p,onChange:c,className:"site-navigation-steps",items:[{title:"Step 1",subTitle:"00:00:05",status:"finish",description:"This is a description."},{title:"Step 2",subTitle:"00:01:02",status:"process",description:"This is a description."},{title:"Step 3",subTitle:"waiting for longlong time",status:"wait",description:"This is a description."}]}),o.default.createElement(e.Steps,{type:"navigation",current:p,onChange:c,className:"site-navigation-steps",items:[{status:"finish",title:"Step 1"},{status:"process",title:"Step 2"},{status:"wait",title:"Step 3"},{status:"wait",title:"Step 4"}]}),o.default.createElement(e.Steps,{type:"navigation",size:"small",current:p,onChange:c,className:"site-navigation-steps",items:[{status:"finish",title:"finish 1"},{status:"finish",title:"finish 2"},{status:"process",title:"current process"},{status:"wait",title:"wait",disabled:!0}]}))},A=P;return f.createElement(A)},style:`[data-theme='compact'] .site-navigation-steps.ant-steps.ant-steps-navigation,
.site-navigation-steps.ant-steps.ant-steps-navigation {
  margin-bottom: 60px;
  box-shadow: 0px -1px 0 0 #e8e8e8 inset;
}
[data-theme="dark"] .site-navigation-steps.ant-steps.ant-steps-navigation {
  border-bottom: 1px solid #303030;
  margin-bottom: 60px;
  box-shadow: none;
}
`,highlightedStyle:`<span class="token selector"><span class="token attribute">[data-theme='compact']</span> <span class="token class">.site-navigation-steps.ant-steps.ant-steps-navigation</span>,
<span class="token class">.site-navigation-steps.ant-steps.ant-steps-navigation</span> </span><span class="token punctuation">{</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> <span class="token number">60</span>px<span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> <span class="token number">0</span>px -<span class="token number">1</span>px <span class="token number">0</span> <span class="token number">0</span> <span class="token hexcode">#e8e8e8</span> inset<span class="token punctuation">;</span>
<span class="token punctuation">}</span>`}},4779:function(m,S,t){m.exports={content:{"zh-CN":[["p","Buggy!"]],"en-US":[["p","Buggy!"]]},meta:{order:99,title:{"zh-CN":"Progress Debug","en-US":"Progress Debug"},debug:!0,filename:"components/steps/demo/progress-debug.md",id:"components-steps-demo-progress-debug"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import type { StepsProps } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import { Button<span class="token punctuation">,</span> Steps } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React<span class="token punctuation">,</span> { useState } from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> <span class="token punctuation">[</span>percent<span class="token punctuation">,</span> setPercentage<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>current<span class="token punctuation">,</span> setCurrent<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>status<span class="token punctuation">,</span> setStatus<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>StepsProps<span class="token punctuation">[</span><span class="token string">'status'</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token string">'process'</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  <span class="token keyword">const</span> description <span class="token operator">=</span> <span class="token string">'This is a description.'</span><span class="token comment" spellcheck="true">;</span>
  <span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token punctuation">[</span>
    {
      title<span class="token punctuation">:</span> <span class="token string">'Finished'</span><span class="token punctuation">,</span>
      description<span class="token punctuation">,</span>
    }<span class="token punctuation">,</span>
    {
      title<span class="token punctuation">:</span> <span class="token string">'In Progress'</span><span class="token punctuation">,</span>
      subTitle<span class="token punctuation">:</span> <span class="token string">'Left 00:00:08'</span><span class="token punctuation">,</span>
      description<span class="token punctuation">,</span>
    }<span class="token punctuation">,</span>
    {
      title<span class="token punctuation">:</span> <span class="token string">'Waiting'</span><span class="token punctuation">,</span>
      description<span class="token punctuation">,</span>
    }<span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>
  return <span class="token punctuation">(</span>
    <span class="token operator">&lt;></span>
      <span class="token operator">&lt;</span>Button onClick<span class="token operator">=</span>{<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">setPercentage</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>}<span class="token operator">></span>Percentage <span class="token keyword">to</span> undefined<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
      <span class="token operator">&lt;</span>Button onClick<span class="token operator">=</span>{<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">setPercentage</span><span class="token punctuation">(</span><span class="token punctuation">(</span>percent <span class="token operator">+</span> <span class="token number">10</span><span class="token punctuation">)</span> % <span class="token number">100</span><span class="token punctuation">)</span>}<span class="token operator">></span>Percentage <span class="token operator">+</span><span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
      <span class="token operator">&lt;</span>Button
        onClick<span class="token operator">=</span>{<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
          <span class="token function">setCurrent</span><span class="token punctuation">(</span><span class="token punctuation">(</span>current <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> % <span class="token number">3</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
          <span class="token function">setPercentage</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
        }}
      <span class="token operator">></span>
        Current <span class="token operator">+</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
      <span class="token operator">&lt;</span>Button onClick<span class="token operator">=</span>{<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">setStatus</span><span class="token punctuation">(</span><span class="token string">'wait'</span><span class="token punctuation">)</span>}<span class="token operator">></span>Status Wait<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
      <span class="token operator">&lt;</span>Button onClick<span class="token operator">=</span>{<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">setStatus</span><span class="token punctuation">(</span><span class="token string">'process'</span><span class="token punctuation">)</span>}<span class="token operator">></span>Status Process<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
      <span class="token operator">&lt;</span>Button onClick<span class="token operator">=</span>{<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">setStatus</span><span class="token punctuation">(</span><span class="token string">'finish'</span><span class="token punctuation">)</span>}<span class="token operator">></span>Status Finish<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
      <span class="token operator">&lt;</span>Button onClick<span class="token operator">=</span>{<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">setStatus</span><span class="token punctuation">(</span><span class="token string">'error'</span><span class="token punctuation">)</span>}<span class="token operator">></span>Status Error<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
      <span class="token operator">&lt;</span>Steps current<span class="token operator">=</span>{current} percent<span class="token operator">=</span>{percent} status<span class="token operator">=</span>{status} items<span class="token operator">=</span>{items} <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Steps current<span class="token operator">=</span>{current} percent<span class="token operator">=</span>{percent} status<span class="token operator">=</span>{status} size<span class="token operator">=</span><span class="token string">"small"</span> items<span class="token operator">=</span>{items} <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Steps
        current<span class="token operator">=</span>{current}
        percent<span class="token operator">=</span>{percent}
        status<span class="token operator">=</span>{status}
        direction<span class="token operator">=</span><span class="token string">"vertical"</span>
        items<span class="token operator">=</span>{items}
      <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Steps
        current<span class="token operator">=</span>{current}
        percent<span class="token operator">=</span>{percent}
        status<span class="token operator">=</span>{status}
        size<span class="token operator">=</span><span class="token string">"small"</span>
        direction<span class="token operator">=</span><span class="token string">"vertical"</span>
        items<span class="token operator">=</span>{items}
      <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> type <span class="token punctuation">{</span> StepsProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Steps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>percent<span class="token punctuation">,</span> setPercentage<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>current<span class="token punctuation">,</span> setCurrent<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>status<span class="token punctuation">,</span> setStatus<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>StepsProps<span class="token punctuation">[</span><span class="token string">'status'</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token string">'process'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> description <span class="token operator">=</span> <span class="token string">'This is a description.'</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      title<span class="token operator">:</span> <span class="token string">'Finished'</span><span class="token punctuation">,</span>
      description<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      title<span class="token operator">:</span> <span class="token string">'In Progress'</span><span class="token punctuation">,</span>
      subTitle<span class="token operator">:</span> <span class="token string">'Left 00:00:08'</span><span class="token punctuation">,</span>
      description<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      title<span class="token operator">:</span> <span class="token string">'Waiting'</span><span class="token punctuation">,</span>
      description<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setPercentage</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Percentage to <span class="token keyword">undefined</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setPercentage</span><span class="token punctuation">(</span><span class="token punctuation">(</span>percent <span class="token operator">+</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Percentage <span class="token operator">+</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span>
        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token function">setCurrent</span><span class="token punctuation">(</span><span class="token punctuation">(</span>current <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token function">setPercentage</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">></span></span>
        Current <span class="token operator">+</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setStatus</span><span class="token punctuation">(</span><span class="token string">'wait'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Status Wait<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setStatus</span><span class="token punctuation">(</span><span class="token string">'process'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Status Process<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setStatus</span><span class="token punctuation">(</span><span class="token string">'finish'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Status Finish<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setStatus</span><span class="token punctuation">(</span><span class="token string">'error'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Status Error<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps</span></span> <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>current<span class="token punctuation">}</span></span> <span class="token attr-name">percent</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>percent<span class="token punctuation">}</span></span> <span class="token attr-name">status</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>status<span class="token punctuation">}</span></span> <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>items<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps</span></span> <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>current<span class="token punctuation">}</span></span> <span class="token attr-name">percent</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>percent<span class="token punctuation">}</span></span> <span class="token attr-name">status</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>status<span class="token punctuation">}</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>items<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps</span></span>
        <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>current<span class="token punctuation">}</span></span>
        <span class="token attr-name">percent</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>percent<span class="token punctuation">}</span></span>
        <span class="token attr-name">status</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>status<span class="token punctuation">}</span></span>
        <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span>
        <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>items<span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps</span></span>
        <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>current<span class="token punctuation">}</span></span>
        <span class="token attr-name">percent</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>percent<span class="token punctuation">}</span></span>
        <span class="token attr-name">status</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>status<span class="token punctuation">}</span></span>
        <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span>
        <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span>
        <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>items<span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Steps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>percent<span class="token punctuation">,</span> setPercentage<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>current<span class="token punctuation">,</span> setCurrent<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>status<span class="token punctuation">,</span> setStatus<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">'process'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> description <span class="token operator">=</span> <span class="token string">'This is a description.'</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Finished'</span><span class="token punctuation">,</span>
      description<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'In Progress'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">subTitle</span><span class="token operator">:</span> <span class="token string">'Left 00:00:08'</span><span class="token punctuation">,</span>
      description<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Waiting'</span><span class="token punctuation">,</span>
      description<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setPercentage</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Percentage to <span class="token keyword">undefined</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setPercentage</span><span class="token punctuation">(</span><span class="token punctuation">(</span>percent <span class="token operator">+</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Percentage <span class="token operator">+</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span>
        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token function">setCurrent</span><span class="token punctuation">(</span><span class="token punctuation">(</span>current <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token function">setPercentage</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">></span></span>
        Current <span class="token operator">+</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setStatus</span><span class="token punctuation">(</span><span class="token string">'wait'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Status Wait<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setStatus</span><span class="token punctuation">(</span><span class="token string">'process'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Status Process<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setStatus</span><span class="token punctuation">(</span><span class="token string">'finish'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Status Finish<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setStatus</span><span class="token punctuation">(</span><span class="token string">'error'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Status Error<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps</span></span> <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>current<span class="token punctuation">}</span></span> <span class="token attr-name">percent</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>percent<span class="token punctuation">}</span></span> <span class="token attr-name">status</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>status<span class="token punctuation">}</span></span> <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>items<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps</span></span> <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>current<span class="token punctuation">}</span></span> <span class="token attr-name">percent</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>percent<span class="token punctuation">}</span></span> <span class="token attr-name">status</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>status<span class="token punctuation">}</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>items<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps</span></span>
        <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>current<span class="token punctuation">}</span></span>
        <span class="token attr-name">percent</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>percent<span class="token punctuation">}</span></span>
        <span class="token attr-name">status</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>status<span class="token punctuation">}</span></span>
        <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span>
        <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>items<span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps</span></span>
        <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>current<span class="token punctuation">}</span></span>
        <span class="token attr-name">percent</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>percent<span class="token punctuation">}</span></span>
        <span class="token attr-name">status</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>status<span class="token punctuation">}</span></span>
        <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span>
        <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span>
        <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>items<span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var f=t(0),C=t(63);function i(n){return i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},i(n)}var e=t(12),o=d(t(0));function r(n){if(typeof WeakMap!="function")return null;var s=new WeakMap,a=new WeakMap;return(r=function(l){return l?a:s})(n)}function d(n,s){if(!s&&n&&n.__esModule)return n;if(n===null||i(n)!=="object"&&typeof n!="function")return{default:n};var a=r(s);if(a&&a.has(n))return a.get(n);var p={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in n)if(c!=="default"&&Object.prototype.hasOwnProperty.call(n,c)){var u=l?Object.getOwnPropertyDescriptor(n,c):null;u&&(u.get||u.set)?Object.defineProperty(p,c,u):p[c]=n[c]}return p.default=n,a&&a.set(n,p),p}function g(n,s){return T(n)||x(n,s)||y(n,s)||k()}function k(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function y(n,s){if(!!n){if(typeof n=="string")return b(n,s);var a=Object.prototype.toString.call(n).slice(8,-1);if(a==="Object"&&n.constructor&&(a=n.constructor.name),a==="Map"||a==="Set")return Array.from(n);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return b(n,s)}}function b(n,s){(s==null||s>n.length)&&(s=n.length);for(var a=0,p=new Array(s);a<s;a++)p[a]=n[a];return p}function x(n,s){var a=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(a!=null){var p=[],l=!0,c=!1,u,h;try{for(a=a.call(n);!(l=(u=a.next()).done)&&(p.push(u.value),!(s&&p.length===s));l=!0);}catch(v){c=!0,h=v}finally{try{!l&&a.return!=null&&a.return()}finally{if(c)throw h}}return p}}function T(n){if(Array.isArray(n))return n}var P=function(){var s=(0,o.useState)(0),a=g(s,2),p=a[0],l=a[1],c=(0,o.useState)(1),u=g(c,2),h=u[0],v=u[1],R=(0,o.useState)("process"),D=g(R,2),N=D[0],F=D[1],W="This is a description.",j=[{title:"Finished",description:W},{title:"In Progress",subTitle:"Left 00:00:08",description:W},{title:"Waiting",description:W}];return o.default.createElement(o.default.Fragment,null,o.default.createElement(e.Button,{onClick:function(){return l(0)}},"Percentage to undefined"),o.default.createElement(e.Button,{onClick:function(){return l((p+10)%100)}},"Percentage +"),o.default.createElement(e.Button,{onClick:function(){v((h+1)%3),l(0)}},"Current +"),o.default.createElement(e.Button,{onClick:function(){return F("wait")}},"Status Wait"),o.default.createElement(e.Button,{onClick:function(){return F("process")}},"Status Process"),o.default.createElement(e.Button,{onClick:function(){return F("finish")}},"Status Finish"),o.default.createElement(e.Button,{onClick:function(){return F("error")}},"Status Error"),o.default.createElement(e.Steps,{current:h,percent:p,status:N,items:j}),o.default.createElement(e.Steps,{current:h,percent:p,status:N,size:"small",items:j}),o.default.createElement(e.Steps,{current:h,percent:p,status:N,direction:"vertical",items:j}),o.default.createElement(e.Steps,{current:h,percent:p,status:N,size:"small",direction:"vertical",items:j}))},A=P;return f.createElement(A)}}},4780:function(m,S,t){m.exports={content:{"zh-CN":[["p","\u5305\u542B\u6B65\u9AA4\u70B9\u7684\u8FDB\u5EA6\u6761\u3002"]],"en-US":[["p","Steps with progress dot style."]]},meta:{order:9,title:{"zh-CN":"\u8FF7\u4F60\u7248\u70B9\u72B6\u6B65\u9AA4\u6761","en-US":"Dot Style Size Small"},debug:!0,filename:"components/steps/demo/progress-dot-small.md",id:"components-steps-demo-progress-dot-small"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { Divider<span class="token punctuation">,</span> Steps } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;></span>
    <span class="token operator">&lt;</span>Steps
      progressDot
      current<span class="token operator">=</span>{<span class="token number">1</span>}
      size<span class="token operator">=</span><span class="token string">"small"</span>
      items<span class="token operator">=</span>{<span class="token punctuation">[</span>
        {
          title<span class="token punctuation">:</span> <span class="token string">'Finished'</span><span class="token punctuation">,</span>
          description<span class="token punctuation">:</span> <span class="token string">'This is a description.'</span><span class="token punctuation">,</span>
        }<span class="token punctuation">,</span>
        {
          title<span class="token punctuation">:</span> <span class="token string">'In Progress'</span><span class="token punctuation">,</span>
          description<span class="token punctuation">:</span> <span class="token string">'This is a description.'</span><span class="token punctuation">,</span>
        }<span class="token punctuation">,</span>
        {
          title<span class="token punctuation">:</span> <span class="token string">'Waiting'</span><span class="token punctuation">,</span>
          description<span class="token punctuation">:</span> <span class="token string">'This is a description.'</span><span class="token punctuation">,</span>
        }<span class="token punctuation">,</span>
      <span class="token punctuation">]</span>}
    <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>Divider <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>Steps
      progressDot
      current<span class="token operator">=</span>{<span class="token number">1</span>}
      direction<span class="token operator">=</span><span class="token string">"vertical"</span>
      size<span class="token operator">=</span><span class="token string">"small"</span>
      items<span class="token operator">=</span>{<span class="token punctuation">[</span>
        {
          title<span class="token punctuation">:</span> <span class="token string">'Finished'</span><span class="token punctuation">,</span>
          description<span class="token punctuation">:</span> <span class="token string">'This is a description. This is a description.'</span><span class="token punctuation">,</span>
        }<span class="token punctuation">,</span>
        {
          title<span class="token punctuation">:</span> <span class="token string">'Finished'</span><span class="token punctuation">,</span>
          description<span class="token punctuation">:</span> <span class="token string">'This is a description. This is a description.'</span><span class="token punctuation">,</span>
        }<span class="token punctuation">,</span>
        {
          title<span class="token punctuation">:</span> <span class="token string">'In Progress'</span><span class="token punctuation">,</span>
          description<span class="token punctuation">:</span> <span class="token string">'This is a description. This is a description.'</span><span class="token punctuation">,</span>
        }<span class="token punctuation">,</span>
        {
          title<span class="token punctuation">:</span> <span class="token string">'Waiting'</span><span class="token punctuation">,</span>
          description<span class="token punctuation">:</span> <span class="token string">'This is a description.'</span><span class="token punctuation">,</span>
        }<span class="token punctuation">,</span>
        {
          title<span class="token punctuation">:</span> <span class="token string">'Waiting'</span><span class="token punctuation">,</span>
          description<span class="token punctuation">:</span> <span class="token string">'This is a description.'</span><span class="token punctuation">,</span>
        }<span class="token punctuation">,</span>
      <span class="token punctuation">]</span>}
    <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Divider<span class="token punctuation">,</span> Steps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps</span></span>
      <span class="token attr-name">progressDot</span>
      <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span>
      <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          title<span class="token operator">:</span> <span class="token string">'Finished'</span><span class="token punctuation">,</span>
          description<span class="token operator">:</span> <span class="token string">'This is a description.'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          title<span class="token operator">:</span> <span class="token string">'In Progress'</span><span class="token punctuation">,</span>
          description<span class="token operator">:</span> <span class="token string">'This is a description.'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          title<span class="token operator">:</span> <span class="token string">'Waiting'</span><span class="token punctuation">,</span>
          description<span class="token operator">:</span> <span class="token string">'This is a description.'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Divider</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps</span></span>
      <span class="token attr-name">progressDot</span>
      <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span>
      <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span>
      <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          title<span class="token operator">:</span> <span class="token string">'Finished'</span><span class="token punctuation">,</span>
          description<span class="token operator">:</span> <span class="token string">'This is a description. This is a description.'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          title<span class="token operator">:</span> <span class="token string">'Finished'</span><span class="token punctuation">,</span>
          description<span class="token operator">:</span> <span class="token string">'This is a description. This is a description.'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          title<span class="token operator">:</span> <span class="token string">'In Progress'</span><span class="token punctuation">,</span>
          description<span class="token operator">:</span> <span class="token string">'This is a description. This is a description.'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          title<span class="token operator">:</span> <span class="token string">'Waiting'</span><span class="token punctuation">,</span>
          description<span class="token operator">:</span> <span class="token string">'This is a description.'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          title<span class="token operator">:</span> <span class="token string">'Waiting'</span><span class="token punctuation">,</span>
          description<span class="token operator">:</span> <span class="token string">'This is a description.'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Divider<span class="token punctuation">,</span> Steps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps</span></span>
      <span class="token attr-name">progressDot</span>
      <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span>
      <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Finished'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'This is a description.'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'In Progress'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'This is a description.'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Waiting'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'This is a description.'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Divider</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps</span></span>
      <span class="token attr-name">progressDot</span>
      <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span>
      <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span>
      <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Finished'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'This is a description. This is a description.'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Finished'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'This is a description. This is a description.'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'In Progress'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'This is a description. This is a description.'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Waiting'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'This is a description.'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Waiting'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'This is a description.'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var f=t(0),C=t(63),i=t(12),e=o(t(0));function o(g){return g&&g.__esModule?g:{default:g}}var r=function(){return e.default.createElement(e.default.Fragment,null,e.default.createElement(i.Steps,{progressDot:!0,current:1,size:"small",items:[{title:"Finished",description:"This is a description."},{title:"In Progress",description:"This is a description."},{title:"Waiting",description:"This is a description."}]}),e.default.createElement(i.Divider,null),e.default.createElement(i.Steps,{progressDot:!0,current:1,direction:"vertical",size:"small",items:[{title:"Finished",description:"This is a description. This is a description."},{title:"Finished",description:"This is a description. This is a description."},{title:"In Progress",description:"This is a description. This is a description."},{title:"Waiting",description:"This is a description."},{title:"Waiting",description:"This is a description."}]}))},d=r;return f.createElement(d)}}},4781:function(m,S,t){m.exports={content:{"zh-CN":[["p","\u5305\u542B\u6B65\u9AA4\u70B9\u7684\u8FDB\u5EA6\u6761\u3002"]],"en-US":[["p","Steps with progress dot style."]]},meta:{order:8,title:{"zh-CN":"\u70B9\u72B6\u6B65\u9AA4\u6761","en-US":"Dot Style"},filename:"components/steps/demo/progress-dot.md",id:"components-steps-demo-progress-dot"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { Divider<span class="token punctuation">,</span> Steps } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;></span>
    <span class="token operator">&lt;</span>Steps
      progressDot
      current<span class="token operator">=</span>{<span class="token number">1</span>}
      items<span class="token operator">=</span>{<span class="token punctuation">[</span>
        {
          title<span class="token punctuation">:</span> <span class="token string">'Finished'</span><span class="token punctuation">,</span>
          description<span class="token punctuation">:</span> <span class="token string">'This is a description.'</span><span class="token punctuation">,</span>
        }<span class="token punctuation">,</span>
        {
          title<span class="token punctuation">:</span> <span class="token string">'In Progress'</span><span class="token punctuation">,</span>
          description<span class="token punctuation">:</span> <span class="token string">'This is a description.'</span><span class="token punctuation">,</span>
        }<span class="token punctuation">,</span>
        {
          title<span class="token punctuation">:</span> <span class="token string">'Waiting'</span><span class="token punctuation">,</span>
          description<span class="token punctuation">:</span> <span class="token string">'This is a description.'</span><span class="token punctuation">,</span>
        }<span class="token punctuation">,</span>
      <span class="token punctuation">]</span>}
    <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>Divider <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>Steps
      progressDot
      current<span class="token operator">=</span>{<span class="token number">1</span>}
      direction<span class="token operator">=</span><span class="token string">"vertical"</span>
      items<span class="token operator">=</span>{<span class="token punctuation">[</span>
        {
          title<span class="token punctuation">:</span> <span class="token string">'Finished'</span><span class="token punctuation">,</span>
          description<span class="token punctuation">:</span> <span class="token string">'This is a description. This is a description.'</span><span class="token punctuation">,</span>
        }<span class="token punctuation">,</span>
        {
          title<span class="token punctuation">:</span> <span class="token string">'Finished'</span><span class="token punctuation">,</span>
          description<span class="token punctuation">:</span> <span class="token string">'This is a description. This is a description.'</span><span class="token punctuation">,</span>
        }<span class="token punctuation">,</span>
        {
          title<span class="token punctuation">:</span> <span class="token string">'In Progress'</span><span class="token punctuation">,</span>
          description<span class="token punctuation">:</span> <span class="token string">'This is a description. This is a description.'</span><span class="token punctuation">,</span>
        }<span class="token punctuation">,</span>
        {
          title<span class="token punctuation">:</span> <span class="token string">'Waiting'</span><span class="token punctuation">,</span>
          description<span class="token punctuation">:</span> <span class="token string">'This is a description.'</span><span class="token punctuation">,</span>
        }<span class="token punctuation">,</span>
        {
          title<span class="token punctuation">:</span> <span class="token string">'Waiting'</span><span class="token punctuation">,</span>
          description<span class="token punctuation">:</span> <span class="token string">'This is a description.'</span><span class="token punctuation">,</span>
        }<span class="token punctuation">,</span>
      <span class="token punctuation">]</span>}
    <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Divider<span class="token punctuation">,</span> Steps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps</span></span>
      <span class="token attr-name">progressDot</span>
      <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          title<span class="token operator">:</span> <span class="token string">'Finished'</span><span class="token punctuation">,</span>
          description<span class="token operator">:</span> <span class="token string">'This is a description.'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          title<span class="token operator">:</span> <span class="token string">'In Progress'</span><span class="token punctuation">,</span>
          description<span class="token operator">:</span> <span class="token string">'This is a description.'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          title<span class="token operator">:</span> <span class="token string">'Waiting'</span><span class="token punctuation">,</span>
          description<span class="token operator">:</span> <span class="token string">'This is a description.'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Divider</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps</span></span>
      <span class="token attr-name">progressDot</span>
      <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span>
      <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          title<span class="token operator">:</span> <span class="token string">'Finished'</span><span class="token punctuation">,</span>
          description<span class="token operator">:</span> <span class="token string">'This is a description. This is a description.'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          title<span class="token operator">:</span> <span class="token string">'Finished'</span><span class="token punctuation">,</span>
          description<span class="token operator">:</span> <span class="token string">'This is a description. This is a description.'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          title<span class="token operator">:</span> <span class="token string">'In Progress'</span><span class="token punctuation">,</span>
          description<span class="token operator">:</span> <span class="token string">'This is a description. This is a description.'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          title<span class="token operator">:</span> <span class="token string">'Waiting'</span><span class="token punctuation">,</span>
          description<span class="token operator">:</span> <span class="token string">'This is a description.'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          title<span class="token operator">:</span> <span class="token string">'Waiting'</span><span class="token punctuation">,</span>
          description<span class="token operator">:</span> <span class="token string">'This is a description.'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Divider<span class="token punctuation">,</span> Steps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps</span></span>
      <span class="token attr-name">progressDot</span>
      <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Finished'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'This is a description.'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'In Progress'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'This is a description.'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Waiting'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'This is a description.'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Divider</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps</span></span>
      <span class="token attr-name">progressDot</span>
      <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span>
      <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Finished'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'This is a description. This is a description.'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Finished'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'This is a description. This is a description.'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'In Progress'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'This is a description. This is a description.'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Waiting'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'This is a description.'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Waiting'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'This is a description.'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var f=t(0),C=t(63),i=t(12),e=o(t(0));function o(g){return g&&g.__esModule?g:{default:g}}var r=function(){return e.default.createElement(e.default.Fragment,null,e.default.createElement(i.Steps,{progressDot:!0,current:1,items:[{title:"Finished",description:"This is a description."},{title:"In Progress",description:"This is a description."},{title:"Waiting",description:"This is a description."}]}),e.default.createElement(i.Divider,null),e.default.createElement(i.Steps,{progressDot:!0,current:1,direction:"vertical",items:[{title:"Finished",description:"This is a description. This is a description."},{title:"Finished",description:"This is a description. This is a description."},{title:"In Progress",description:"This is a description. This is a description."},{title:"Waiting",description:"This is a description."},{title:"Waiting",description:"This is a description."}]}))},d=r;return f.createElement(d)}}},4782:function(m,S,t){m.exports={content:{"zh-CN":[["p","\u5E26\u6709\u8FDB\u5EA6\u7684\u6B65\u9AA4\u3002"]],"en-US":[["p","Steps with progress."]]},meta:{order:13,title:{"zh-CN":"\u5E26\u6709\u8FDB\u5EA6\u7684\u6B65\u9AA4","en-US":"Steps with progress"},filename:"components/steps/demo/progress.md",id:"components-steps-demo-progress"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { Steps } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> description <span class="token operator">=</span> <span class="token string">'This is a description.'</span><span class="token comment" spellcheck="true">;</span>
<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Steps
    current<span class="token operator">=</span>{<span class="token number">1</span>}
    percent<span class="token operator">=</span>{<span class="token number">60</span>}
    items<span class="token operator">=</span>{<span class="token punctuation">[</span>
      {
        title<span class="token punctuation">:</span> <span class="token string">'Finished'</span><span class="token punctuation">,</span>
        description<span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        title<span class="token punctuation">:</span> <span class="token string">'In Progress'</span><span class="token punctuation">,</span>
        subTitle<span class="token punctuation">:</span> <span class="token string">'Left 00:00:08'</span><span class="token punctuation">,</span>
        description<span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        title<span class="token punctuation">:</span> <span class="token string">'Waiting'</span><span class="token punctuation">,</span>
        description<span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
    <span class="token punctuation">]</span>}
  <span class="token operator">/</span><span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Steps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> description <span class="token operator">=</span> <span class="token string">'This is a description.'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps</span></span>
    <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">percent</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">60</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'Finished'</span><span class="token punctuation">,</span>
        description<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'In Progress'</span><span class="token punctuation">,</span>
        subTitle<span class="token operator">:</span> <span class="token string">'Left 00:00:08'</span><span class="token punctuation">,</span>
        description<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'Waiting'</span><span class="token punctuation">,</span>
        description<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Steps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> description <span class="token operator">=</span> <span class="token string">'This is a description.'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps</span></span>
    <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">percent</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">60</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Finished'</span><span class="token punctuation">,</span>
        description<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'In Progress'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">subTitle</span><span class="token operator">:</span> <span class="token string">'Left 00:00:08'</span><span class="token punctuation">,</span>
        description<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Waiting'</span><span class="token punctuation">,</span>
        description<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var f=t(0),C=t(63),i=t(12),e=o(t(0));function o(k){return k&&k.__esModule?k:{default:k}}var r="This is a description.",d=function(){return e.default.createElement(i.Steps,{current:1,percent:60,items:[{title:"Finished",description:r},{title:"In Progress",subTitle:"Left 00:00:08",description:r},{title:"Waiting",description:r}]})},g=d;return f.createElement(g)}}},4783:function(m,S,t){m.exports={content:{"zh-CN":[["p","\u7B80\u5355\u7684\u6B65\u9AA4\u6761\u3002"]],"en-US":[["p","The most basic step bar."]]},meta:{order:0,title:{"zh-CN":"\u57FA\u672C\u7528\u6CD5","en-US":"Basic"},filename:"components/steps/demo/simple.md",id:"components-steps-demo-simple"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { Steps } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> description <span class="token operator">=</span> <span class="token string">'This is a description.'</span><span class="token comment" spellcheck="true">;</span>
<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Steps
    current<span class="token operator">=</span>{<span class="token number">1</span>}
    items<span class="token operator">=</span>{<span class="token punctuation">[</span>
      {
        title<span class="token punctuation">:</span> <span class="token string">'Finished'</span><span class="token punctuation">,</span>
        description<span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        title<span class="token punctuation">:</span> <span class="token string">'In Progress'</span><span class="token punctuation">,</span>
        description<span class="token punctuation">,</span>
        subTitle<span class="token punctuation">:</span> <span class="token string">'Left 00:00:08'</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        title<span class="token punctuation">:</span> <span class="token string">'Waiting'</span><span class="token punctuation">,</span>
        description<span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
    <span class="token punctuation">]</span>}
  <span class="token operator">/</span><span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Steps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> description <span class="token operator">=</span> <span class="token string">'This is a description.'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps</span></span>
    <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'Finished'</span><span class="token punctuation">,</span>
        description<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'In Progress'</span><span class="token punctuation">,</span>
        description<span class="token punctuation">,</span>
        subTitle<span class="token operator">:</span> <span class="token string">'Left 00:00:08'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'Waiting'</span><span class="token punctuation">,</span>
        description<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Steps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> description <span class="token operator">=</span> <span class="token string">'This is a description.'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps</span></span>
    <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Finished'</span><span class="token punctuation">,</span>
        description<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'In Progress'</span><span class="token punctuation">,</span>
        description<span class="token punctuation">,</span>
        <span class="token literal-property property">subTitle</span><span class="token operator">:</span> <span class="token string">'Left 00:00:08'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Waiting'</span><span class="token punctuation">,</span>
        description<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var f=t(0),C=t(63),i=t(12),e=o(t(0));function o(k){return k&&k.__esModule?k:{default:k}}var r="This is a description.",d=function(){return e.default.createElement(i.Steps,{current:1,items:[{title:"Finished",description:r},{title:"In Progress",description:r,subTitle:"Left 00:00:08"},{title:"Waiting",description:r}]})},g=d;return f.createElement(g)}}},4784:function(m,S,t){m.exports={content:{"zh-CN":[["p","\u8FF7\u4F60\u7248\u7684\u6B65\u9AA4\u6761\uFF0C\u901A\u8FC7\u8BBE\u7F6E ",["code",'<Steps size="small">']," \u542F\u7528."]],"en-US":[["p","By setting like this: ",["code",'<Steps size="small">'],", you can get a mini version."]]},meta:{order:1,title:{"zh-CN":"\u8FF7\u4F60\u7248","en-US":"Mini version"},filename:"components/steps/demo/small-size.md",id:"components-steps-demo-small-size"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { Steps } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Steps
    size<span class="token operator">=</span><span class="token string">"small"</span>
    current<span class="token operator">=</span>{<span class="token number">1</span>}
    items<span class="token operator">=</span>{<span class="token punctuation">[</span>
      {
        title<span class="token punctuation">:</span> <span class="token string">'Finished'</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        title<span class="token punctuation">:</span> <span class="token string">'In Progress'</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        title<span class="token punctuation">:</span> <span class="token string">'Waiting'</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
    <span class="token punctuation">]</span>}
  <span class="token operator">/</span><span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Steps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps</span></span>
    <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span>
    <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'Finished'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'In Progress'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'Waiting'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Steps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps</span></span>
    <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span>
    <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Finished'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'In Progress'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Waiting'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var f=t(0),C=t(63),i=t(12),e=o(t(0));function o(g){return g&&g.__esModule?g:{default:g}}var r=function(){return e.default.createElement(i.Steps,{size:"small",current:1,items:[{title:"Finished"},{title:"In Progress"},{title:"Waiting"}]})},d=r;return f.createElement(d)}}},4785:function(m,S,t){m.exports={content:{"zh-CN":[["p","\u901A\u5E38\u914D\u5408\u5185\u5BB9\u53CA\u6309\u94AE\u4F7F\u7528\uFF0C\u8868\u793A\u4E00\u4E2A\u6D41\u7A0B\u7684\u5904\u7406\u8FDB\u5EA6\u3002"]],"en-US":[["p","Cooperate with the content and buttons, to represent the progress of a process."]]},meta:{order:3,title:{"zh-CN":"\u6B65\u9AA4\u5207\u6362","en-US":"Switch Step"},filename:"components/steps/demo/step-next.md",id:"components-steps-demo-step-next"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { Button<span class="token punctuation">,</span> message<span class="token punctuation">,</span> Steps } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React<span class="token punctuation">,</span> { useState } from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> steps <span class="token operator">=</span> <span class="token punctuation">[</span>
  {
    title<span class="token punctuation">:</span> <span class="token string">'First'</span><span class="token punctuation">,</span>
    content<span class="token punctuation">:</span> <span class="token string">'First-content'</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
  {
    title<span class="token punctuation">:</span> <span class="token string">'Second'</span><span class="token punctuation">,</span>
    content<span class="token punctuation">:</span> <span class="token string">'Second-content'</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
  {
    title<span class="token punctuation">:</span> <span class="token string">'Last'</span><span class="token punctuation">,</span>
    content<span class="token punctuation">:</span> <span class="token string">'Last-content'</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> <span class="token punctuation">[</span>current<span class="token punctuation">,</span> setCurrent<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> <span class="token keyword">next</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    <span class="token function">setCurrent</span><span class="token punctuation">(</span>current <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> prev <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    <span class="token function">setCurrent</span><span class="token punctuation">(</span>current <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>
  <span class="token keyword">const</span> items <span class="token operator">=</span> steps<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>item <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>{ key<span class="token punctuation">:</span> item<span class="token punctuation">.</span>title<span class="token punctuation">,</span> title<span class="token punctuation">:</span> item<span class="token punctuation">.</span>title }<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

  return <span class="token punctuation">(</span>
    <span class="token operator">&lt;></span>
      <span class="token operator">&lt;</span>Steps current<span class="token operator">=</span>{current} items<span class="token operator">=</span>{items} <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"steps-content"</span><span class="token operator">></span>{steps<span class="token punctuation">[</span>current<span class="token punctuation">]</span><span class="token punctuation">.</span>content}<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"steps-action"</span><span class="token operator">></span>
        {current <span class="token operator">&lt;</span> steps<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">&amp;</span><span class="token operator">&amp;</span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>Button type<span class="token operator">=</span><span class="token string">"primary"</span> onClick<span class="token operator">=</span>{<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>}<span class="token operator">></span>
            <span class="token keyword">Next</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
        <span class="token punctuation">)</span>}
        {current <span class="token operator">==</span><span class="token operator">=</span> steps<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">&amp;</span><span class="token operator">&amp;</span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>Button type<span class="token operator">=</span><span class="token string">"primary"</span> onClick<span class="token operator">=</span>{<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> message<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">'Processing complete!'</span><span class="token punctuation">)</span>}<span class="token operator">></span>
            Done
          <span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
        <span class="token punctuation">)</span>}
        {current <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">&amp;</span><span class="token operator">&amp;</span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>Button style<span class="token operator">=</span>{{ margin<span class="token punctuation">:</span> <span class="token string">'0 8px'</span> }} onClick<span class="token operator">=</span>{<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">prev</span><span class="token punctuation">(</span><span class="token punctuation">)</span>}<span class="token operator">></span>
            Previous
          <span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
        <span class="token punctuation">)</span>}
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> message<span class="token punctuation">,</span> Steps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> steps <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">'First'</span><span class="token punctuation">,</span>
    content<span class="token operator">:</span> <span class="token string">'First-content'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">'Second'</span><span class="token punctuation">,</span>
    content<span class="token operator">:</span> <span class="token string">'Second-content'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">'Last'</span><span class="token punctuation">,</span>
    content<span class="token operator">:</span> <span class="token string">'Last-content'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>current<span class="token punctuation">,</span> setCurrent<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">next</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setCurrent</span><span class="token punctuation">(</span>current <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">prev</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setCurrent</span><span class="token punctuation">(</span>current <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> items <span class="token operator">=</span> steps<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>item <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> key<span class="token operator">:</span> item<span class="token punctuation">.</span>title<span class="token punctuation">,</span> title<span class="token operator">:</span> item<span class="token punctuation">.</span>title <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps</span></span> <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>current<span class="token punctuation">}</span></span> <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>items<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>steps-content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>steps<span class="token punctuation">[</span>current<span class="token punctuation">]</span><span class="token punctuation">.</span>content<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>steps-action<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token punctuation">{</span>current <span class="token operator">&lt;</span> steps<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
            Next
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span><span class="token punctuation">}</span>
        <span class="token punctuation">{</span>current <span class="token operator">===</span> steps<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> message<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">'Processing complete!'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
            Done
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span><span class="token punctuation">}</span>
        <span class="token punctuation">{</span>current <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> margin<span class="token operator">:</span> <span class="token string">'0 8px'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">prev</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
            Previous
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span><span class="token punctuation">}</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> message<span class="token punctuation">,</span> Steps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> steps <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'First'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">'First-content'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Second'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">'Second-content'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Last'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">'Last-content'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>current<span class="token punctuation">,</span> setCurrent<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">next</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setCurrent</span><span class="token punctuation">(</span>current <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">prev</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setCurrent</span><span class="token punctuation">(</span>current <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> items <span class="token operator">=</span> steps<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> item<span class="token punctuation">.</span>title<span class="token punctuation">,</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> item<span class="token punctuation">.</span>title<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps</span></span> <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>current<span class="token punctuation">}</span></span> <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>items<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>steps-content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>steps<span class="token punctuation">[</span>current<span class="token punctuation">]</span><span class="token punctuation">.</span>content<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>steps-action<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token punctuation">{</span>current <span class="token operator">&lt;</span> steps<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
            Next
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span><span class="token punctuation">}</span>
        <span class="token punctuation">{</span>current <span class="token operator">===</span> steps<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> message<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">'Processing complete!'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
            Done
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span><span class="token punctuation">}</span>
        <span class="token punctuation">{</span>current <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span>
            <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
              <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token string">'0 8px'</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
            <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">prev</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
          <span class="token punctuation">></span></span>
            Previous
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span><span class="token punctuation">}</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var f=t(0),C=t(63);function i(s){return i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},i(s)}var e=t(12),o=d(t(0));function r(s){if(typeof WeakMap!="function")return null;var a=new WeakMap,p=new WeakMap;return(r=function(c){return c?p:a})(s)}function d(s,a){if(!a&&s&&s.__esModule)return s;if(s===null||i(s)!=="object"&&typeof s!="function")return{default:s};var p=r(a);if(p&&p.has(s))return p.get(s);var l={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in s)if(u!=="default"&&Object.prototype.hasOwnProperty.call(s,u)){var h=c?Object.getOwnPropertyDescriptor(s,u):null;h&&(h.get||h.set)?Object.defineProperty(l,u,h):l[u]=s[u]}return l.default=s,p&&p.set(s,l),l}function g(s,a){return T(s)||x(s,a)||y(s,a)||k()}function k(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function y(s,a){if(!!s){if(typeof s=="string")return b(s,a);var p=Object.prototype.toString.call(s).slice(8,-1);if(p==="Object"&&s.constructor&&(p=s.constructor.name),p==="Map"||p==="Set")return Array.from(s);if(p==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p))return b(s,a)}}function b(s,a){(a==null||a>s.length)&&(a=s.length);for(var p=0,l=new Array(a);p<a;p++)l[p]=s[p];return l}function x(s,a){var p=s==null?null:typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(p!=null){var l=[],c=!0,u=!1,h,v;try{for(p=p.call(s);!(c=(h=p.next()).done)&&(l.push(h.value),!(a&&l.length===a));c=!0);}catch(R){u=!0,v=R}finally{try{!c&&p.return!=null&&p.return()}finally{if(u)throw v}}return l}}function T(s){if(Array.isArray(s))return s}var P=[{title:"First",content:"First-content"},{title:"Second",content:"Second-content"},{title:"Last",content:"Last-content"}],A=function(){var a=(0,o.useState)(0),p=g(a,2),l=p[0],c=p[1],u=function(){c(l+1)},h=function(){c(l-1)},v=P.map(function(R){return{key:R.title,title:R.title}});return o.default.createElement(o.default.Fragment,null,o.default.createElement(e.Steps,{current:l,items:v}),o.default.createElement("div",{className:"steps-content"},P[l].content),o.default.createElement("div",{className:"steps-action"},l<P.length-1&&o.default.createElement(e.Button,{type:"primary",onClick:function(){return u()}},"Next"),l===P.length-1&&o.default.createElement(e.Button,{type:"primary",onClick:function(){return e.message.success("Processing complete!")}},"Done"),l>0&&o.default.createElement(e.Button,{style:{margin:"0 8px"},onClick:function(){return h()}},"Previous")))},n=A;return f.createElement(n)},style:`.steps-content {
  min-height: 200px;
  margin-top: 16px;
  padding-top: 80px;
  text-align: center;
  background-color: #fafafa;
  border: 1px dashed #e9e9e9;
  border-radius: 2px;
}

.steps-action {
  margin-top: 24px;
}
[data-theme="dark"] .steps-content {
  margin-top: 16px;
  border: 1px dashed #303030;
  background-color: rgba(255,255,255,0.04);
  color: rgba(255,255,255,0.65);
  padding-top: 80px;
}
`,highlightedStyle:`<span class="token selector"><span class="token class">.steps-content</span> </span><span class="token punctuation">{</span>
  <span class="token property">min-height</span><span class="token punctuation">:</span> <span class="token number">200</span>px<span class="token punctuation">;</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> <span class="token number">16</span>px<span class="token punctuation">;</span>
  <span class="token property">padding-top</span><span class="token punctuation">:</span> <span class="token number">80</span>px<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token hexcode">#fafafa</span><span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> <span class="token number">1</span>px dashed <span class="token hexcode">#e9e9e9</span><span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> <span class="token number">2</span>px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector"><span class="token class">.steps-action</span> </span><span class="token punctuation">{</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> <span class="token number">24</span>px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>`}},4786:function(m,S,t){m.exports={content:{"zh-CN":[["p","\u6D4B\u8BD5 Steps \u5D4C\u5957 Steps \u7684\u6837\u5F0F\u3002"]],"en-US":[["p","Test style of Steps inside Steps."]]},meta:{order:99,debug:!0,title:{"zh-CN":"Steps \u5D4C\u5957 Steps","en-US":"Steps inside Steps"},filename:"components/steps/demo/steps-in-steps.md",id:"components-steps-demo-steps-in-steps"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import type { StepsProps } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import { Card<span class="token punctuation">,</span> Radio<span class="token punctuation">,</span> Steps } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React<span class="token punctuation">,</span> { useState } from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> <span class="token punctuation">[</span>size<span class="token punctuation">,</span> setSize<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>StepsProps<span class="token punctuation">[</span><span class="token string">'size'</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token string">'default'</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  <span class="token keyword">const</span> description <span class="token operator">=</span> <span class="token string">'This is a description.'</span><span class="token comment" spellcheck="true">;</span>
  <span class="token keyword">const</span> horizontalSteps <span class="token operator">=</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Card<span class="token operator">></span>
      <span class="token operator">&lt;</span>Steps
        size<span class="token operator">=</span>{size}
        items<span class="token operator">=</span>{<span class="token punctuation">[</span>
          {
            title<span class="token punctuation">:</span> <span class="token string">'Finished'</span><span class="token punctuation">,</span>
            description<span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
          {
            title<span class="token punctuation">:</span> <span class="token string">'In Progress'</span><span class="token punctuation">,</span>
            description<span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
          {
            title<span class="token punctuation">:</span> <span class="token string">'Waiting'</span><span class="token punctuation">,</span>
            description<span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
        <span class="token punctuation">]</span>}
      <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Card<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

  return <span class="token punctuation">(</span>
    <span class="token operator">&lt;></span>
      <span class="token operator">&lt;</span>Radio<span class="token punctuation">.</span>Group
        style<span class="token operator">=</span>{{ marginBottom<span class="token punctuation">:</span> <span class="token number">16</span> }}
        value<span class="token operator">=</span>{size}
        onChange<span class="token operator">=</span>{e <span class="token operator">=</span><span class="token operator">></span> <span class="token function">setSize</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span>}
      <span class="token operator">></span>
        <span class="token operator">&lt;</span>Radio value<span class="token operator">=</span><span class="token string">"small"</span><span class="token operator">></span>Small<span class="token operator">&lt;</span><span class="token operator">/</span>Radio<span class="token operator">></span>
        <span class="token operator">&lt;</span>Radio value<span class="token operator">=</span><span class="token string">"default"</span><span class="token operator">></span><span class="token keyword">Default</span><span class="token operator">&lt;</span><span class="token operator">/</span>Radio<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Radio<span class="token punctuation">.</span>Group<span class="token operator">></span>
      <span class="token operator">&lt;</span>Steps
        size<span class="token operator">=</span>{size}
        direction<span class="token operator">=</span><span class="token string">"vertical"</span>
        items<span class="token operator">=</span>{<span class="token punctuation">[</span>
          {
            title<span class="token punctuation">:</span> <span class="token string">'Finished'</span><span class="token punctuation">,</span>
            description<span class="token punctuation">:</span> horizontalSteps<span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
          {
            title<span class="token punctuation">:</span> <span class="token string">'In Progress'</span><span class="token punctuation">,</span>
            description<span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
          {
            title<span class="token punctuation">:</span> <span class="token string">'Waiting'</span><span class="token punctuation">,</span>
            description<span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
        <span class="token punctuation">]</span>}
      <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> type <span class="token punctuation">{</span> StepsProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Card<span class="token punctuation">,</span> Radio<span class="token punctuation">,</span> Steps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>size<span class="token punctuation">,</span> setSize<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>StepsProps<span class="token punctuation">[</span><span class="token string">'size'</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token string">'default'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> description <span class="token operator">=</span> <span class="token string">'This is a description.'</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> horizontalSteps <span class="token operator">=</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Card</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps</span></span>
        <span class="token attr-name">size</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>size<span class="token punctuation">}</span></span>
        <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">'Finished'</span><span class="token punctuation">,</span>
            description<span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">'In Progress'</span><span class="token punctuation">,</span>
            description<span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">'Waiting'</span><span class="token punctuation">,</span>
            description<span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Card</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio.Group</span></span>
        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginBottom<span class="token operator">:</span> <span class="token number">16</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>size<span class="token punctuation">}</span></span>
        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>e <span class="token operator">=></span> <span class="token function">setSize</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Small<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>default<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Default<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio.Group</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps</span></span>
        <span class="token attr-name">size</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>size<span class="token punctuation">}</span></span>
        <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span>
        <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">'Finished'</span><span class="token punctuation">,</span>
            description<span class="token operator">:</span> horizontalSteps<span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">'In Progress'</span><span class="token punctuation">,</span>
            description<span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">'Waiting'</span><span class="token punctuation">,</span>
            description<span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Card<span class="token punctuation">,</span> Radio<span class="token punctuation">,</span> Steps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>size<span class="token punctuation">,</span> setSize<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">'default'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> description <span class="token operator">=</span> <span class="token string">'This is a description.'</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> horizontalSteps <span class="token operator">=</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Card</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps</span></span>
        <span class="token attr-name">size</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>size<span class="token punctuation">}</span></span>
        <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Finished'</span><span class="token punctuation">,</span>
            description<span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'In Progress'</span><span class="token punctuation">,</span>
            description<span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Waiting'</span><span class="token punctuation">,</span>
            description<span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Card</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio.Group</span></span>
        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
          <span class="token literal-property property">marginBottom</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>size<span class="token punctuation">}</span></span>
        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setSize</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Small<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Radio</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>default<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Default<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Radio.Group</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps</span></span>
        <span class="token attr-name">size</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>size<span class="token punctuation">}</span></span>
        <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span>
        <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Finished'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">description</span><span class="token operator">:</span> horizontalSteps<span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'In Progress'</span><span class="token punctuation">,</span>
            description<span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Waiting'</span><span class="token punctuation">,</span>
            description<span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var f=t(0),C=t(63);function i(n){return i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},i(n)}var e=t(12),o=d(t(0));function r(n){if(typeof WeakMap!="function")return null;var s=new WeakMap,a=new WeakMap;return(r=function(l){return l?a:s})(n)}function d(n,s){if(!s&&n&&n.__esModule)return n;if(n===null||i(n)!=="object"&&typeof n!="function")return{default:n};var a=r(s);if(a&&a.has(n))return a.get(n);var p={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in n)if(c!=="default"&&Object.prototype.hasOwnProperty.call(n,c)){var u=l?Object.getOwnPropertyDescriptor(n,c):null;u&&(u.get||u.set)?Object.defineProperty(p,c,u):p[c]=n[c]}return p.default=n,a&&a.set(n,p),p}function g(n,s){return T(n)||x(n,s)||y(n,s)||k()}function k(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function y(n,s){if(!!n){if(typeof n=="string")return b(n,s);var a=Object.prototype.toString.call(n).slice(8,-1);if(a==="Object"&&n.constructor&&(a=n.constructor.name),a==="Map"||a==="Set")return Array.from(n);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return b(n,s)}}function b(n,s){(s==null||s>n.length)&&(s=n.length);for(var a=0,p=new Array(s);a<s;a++)p[a]=n[a];return p}function x(n,s){var a=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(a!=null){var p=[],l=!0,c=!1,u,h;try{for(a=a.call(n);!(l=(u=a.next()).done)&&(p.push(u.value),!(s&&p.length===s));l=!0);}catch(v){c=!0,h=v}finally{try{!l&&a.return!=null&&a.return()}finally{if(c)throw h}}return p}}function T(n){if(Array.isArray(n))return n}var P=function(){var s=(0,o.useState)("default"),a=g(s,2),p=a[0],l=a[1],c="This is a description.",u=o.default.createElement(e.Card,null,o.default.createElement(e.Steps,{size:p,items:[{title:"Finished",description:c},{title:"In Progress",description:c},{title:"Waiting",description:c}]}));return o.default.createElement(o.default.Fragment,null,o.default.createElement(e.Radio.Group,{style:{marginBottom:16},value:p,onChange:function(v){return l(v.target.value)}},o.default.createElement(e.Radio,{value:"small"},"Small"),o.default.createElement(e.Radio,{value:"default"},"Default")),o.default.createElement(e.Steps,{size:p,direction:"vertical",items:[{title:"Finished",description:u},{title:"In Progress",description:c},{title:"Waiting",description:c}]}))},A=P;return f.createElement(A)}}},4787:function(m,S,t){m.exports={content:{"zh-CN":[["p","\u7B80\u5355\u7684\u7AD6\u76F4\u65B9\u5411\u7684\u5C0F\u578B\u6B65\u9AA4\u6761\u3002"]],"en-US":[["p","A simple mini version step bar in the vertical direction."]]},meta:{order:5,title:{"zh-CN":"\u7AD6\u76F4\u65B9\u5411\u7684\u5C0F\u578B\u6B65\u9AA4\u6761","en-US":"Vertical mini version"},filename:"components/steps/demo/vertical-small.md",id:"components-steps-demo-vertical-small"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { Steps } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> description <span class="token operator">=</span> <span class="token string">'This is a description.'</span><span class="token comment" spellcheck="true">;</span>
<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Steps
    direction<span class="token operator">=</span><span class="token string">"vertical"</span>
    size<span class="token operator">=</span><span class="token string">"small"</span>
    current<span class="token operator">=</span>{<span class="token number">1</span>}
    items<span class="token operator">=</span>{<span class="token punctuation">[</span>
      { title<span class="token punctuation">:</span> <span class="token string">'Finished'</span><span class="token punctuation">,</span> description }<span class="token punctuation">,</span>
      {
        title<span class="token punctuation">:</span> <span class="token string">'In Progress'</span><span class="token punctuation">,</span>
        description<span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        title<span class="token punctuation">:</span> <span class="token string">'Waiting'</span><span class="token punctuation">,</span>
        description<span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
    <span class="token punctuation">]</span>}
  <span class="token operator">/</span><span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Steps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> description <span class="token operator">=</span> <span class="token string">'This is a description.'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps</span></span>
    <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span>
    <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span>
    <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'Finished'</span><span class="token punctuation">,</span> description <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'In Progress'</span><span class="token punctuation">,</span>
        description<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'Waiting'</span><span class="token punctuation">,</span>
        description<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Steps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> description <span class="token operator">=</span> <span class="token string">'This is a description.'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps</span></span>
    <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span>
    <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span>
    <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Finished'</span><span class="token punctuation">,</span>
        description<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'In Progress'</span><span class="token punctuation">,</span>
        description<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Waiting'</span><span class="token punctuation">,</span>
        description<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var f=t(0),C=t(63),i=t(12),e=o(t(0));function o(k){return k&&k.__esModule?k:{default:k}}var r="This is a description.",d=function(){return e.default.createElement(i.Steps,{direction:"vertical",size:"small",current:1,items:[{title:"Finished",description:r},{title:"In Progress",description:r},{title:"Waiting",description:r}]})},g=d;return f.createElement(g)}}},4788:function(m,S,t){m.exports={content:{"zh-CN":[["p","\u7B80\u5355\u7684\u7AD6\u76F4\u65B9\u5411\u7684\u6B65\u9AA4\u6761\u3002"]],"en-US":[["p","A simple step bar in the vertical direction."]]},meta:{order:4,title:{"zh-CN":"\u7AD6\u76F4\u65B9\u5411\u7684\u6B65\u9AA4\u6761","en-US":"Vertical"},filename:"components/steps/demo/vertical.md",id:"components-steps-demo-vertical"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { Steps } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> description <span class="token operator">=</span> <span class="token string">'This is a description.'</span><span class="token comment" spellcheck="true">;</span>
<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Steps
    direction<span class="token operator">=</span><span class="token string">"vertical"</span>
    current<span class="token operator">=</span>{<span class="token number">1</span>}
    items<span class="token operator">=</span>{<span class="token punctuation">[</span>
      {
        title<span class="token punctuation">:</span> <span class="token string">'Finished'</span><span class="token punctuation">,</span>
        description<span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        title<span class="token punctuation">:</span> <span class="token string">'In Progress'</span><span class="token punctuation">,</span>
        description<span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        title<span class="token punctuation">:</span> <span class="token string">'Waiting'</span><span class="token punctuation">,</span>
        description<span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
    <span class="token punctuation">]</span>}
  <span class="token operator">/</span><span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Steps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> description <span class="token operator">=</span> <span class="token string">'This is a description.'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps</span></span>
    <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span>
    <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'Finished'</span><span class="token punctuation">,</span>
        description<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'In Progress'</span><span class="token punctuation">,</span>
        description<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'Waiting'</span><span class="token punctuation">,</span>
        description<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Steps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> description <span class="token operator">=</span> <span class="token string">'This is a description.'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Steps</span></span>
    <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span>
    <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Finished'</span><span class="token punctuation">,</span>
        description<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'In Progress'</span><span class="token punctuation">,</span>
        description<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Waiting'</span><span class="token punctuation">,</span>
        description<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var f=t(0),C=t(63),i=t(12),e=o(t(0));function o(k){return k&&k.__esModule?k:{default:k}}var r="This is a description.",d=function(){return e.default.createElement(i.Steps,{direction:"vertical",current:1,items:[{title:"Finished",description:r},{title:"In Progress",description:r},{title:"Waiting",description:r}]})},g=d;return f.createElement(g)}}}}]);
