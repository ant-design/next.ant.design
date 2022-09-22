(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{3976:function(i,x,p){i.exports={"custom-style":p(4598),duration:p(4599),hooks:p(4600),info:p(4601),loading:p(4602),other:p(4603),"render-panel":p(4604),thenable:p(4605),update:p(4606)}},4598:function(i,x,p){i.exports={content:{"zh-CN":[["p","\u4F7F\u7528 ",["code","style"]," \u548C ",["code","className"]," \u6765\u5B9A\u4E49\u6837\u5F0F\u3002"]],"en-US":[["p","The ",["code","style"]," and ",["code","className"]," are available to customize Message."]]},meta:{order:5,title:{"zh-CN":"\u81EA\u5B9A\u4E49\u6837\u5F0F","en-US":"Customized style"},filename:"components/message/demo/custom-style.md",id:"components-message-demo-custom-style"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { Button<span class="token punctuation">,</span> message } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> <span class="token punctuation">[</span>messageApi<span class="token punctuation">,</span> contextHolder<span class="token punctuation">]</span> <span class="token operator">=</span> message<span class="token punctuation">.</span><span class="token function">useMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> success <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    messageApi<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>{
      type<span class="token punctuation">:</span> <span class="token string">'success'</span><span class="token punctuation">,</span>
      content<span class="token punctuation">:</span> <span class="token string">'This is a prompt message with custom className and style'</span><span class="token punctuation">,</span>
      className<span class="token punctuation">:</span> <span class="token string">'custom-class'</span><span class="token punctuation">,</span>
      style<span class="token punctuation">:</span> {
        marginTop<span class="token punctuation">:</span> <span class="token string">'20vh'</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
    }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  return <span class="token punctuation">(</span>
    <span class="token operator">&lt;></span>
      {contextHolder}
      <span class="token operator">&lt;</span>Button onClick<span class="token operator">=</span>{success}<span class="token operator">></span>Customized style<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>messageApi<span class="token punctuation">,</span> contextHolder<span class="token punctuation">]</span> <span class="token operator">=</span> message<span class="token punctuation">.</span><span class="token function">useMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">success</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    messageApi<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      type<span class="token operator">:</span> <span class="token string">'success'</span><span class="token punctuation">,</span>
      content<span class="token operator">:</span> <span class="token string">'This is a prompt message with custom className and style'</span><span class="token punctuation">,</span>
      className<span class="token operator">:</span> <span class="token string">'custom-class'</span><span class="token punctuation">,</span>
      style<span class="token operator">:</span> <span class="token punctuation">{</span>
        marginTop<span class="token operator">:</span> <span class="token string">'20vh'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
      <span class="token punctuation">{</span>contextHolder<span class="token punctuation">}</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>success<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Customized style<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>messageApi<span class="token punctuation">,</span> contextHolder<span class="token punctuation">]</span> <span class="token operator">=</span> message<span class="token punctuation">.</span><span class="token function">useMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">success</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    messageApi<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'success'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">'This is a prompt message with custom className and style'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">className</span><span class="token operator">:</span> <span class="token string">'custom-class'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">marginTop</span><span class="token operator">:</span> <span class="token string">'20vh'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
      <span class="token punctuation">{</span>contextHolder<span class="token punctuation">}</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>success<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Customized style<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var g=p(0),B=p(65),u=p(12),e=d(p(0));function d(n){return n&&n.__esModule?n:{default:n}}function f(n,a){return A(n)||v(n,a)||h(n,a)||y()}function y(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function h(n,a){if(!!n){if(typeof n=="string")return k(n,a);var s=Object.prototype.toString.call(n).slice(8,-1);if(s==="Object"&&n.constructor&&(s=n.constructor.name),s==="Map"||s==="Set")return Array.from(n);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return k(n,a)}}function k(n,a){(a==null||a>n.length)&&(a=n.length);for(var s=0,t=new Array(a);s<a;s++)t[s]=n[s];return t}function v(n,a){var s=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(s!=null){var t=[],o=!0,c=!1,l,r;try{for(s=s.call(n);!(o=(l=s.next()).done)&&(t.push(l.value),!(a&&t.length===a));o=!0);}catch(m){c=!0,r=m}finally{try{!o&&s.return!=null&&s.return()}finally{if(c)throw r}}return t}}function A(n){if(Array.isArray(n))return n}var w=function(){var a=u.message.useMessage(),s=f(a,2),t=s[0],o=s[1],c=function(){t.open({type:"success",content:"This is a prompt message with custom className and style",className:"custom-class",style:{marginTop:"20vh"}})};return e.default.createElement(e.default.Fragment,null,o,e.default.createElement(u.Button,{onClick:c},"Customized style"))},C=w;return g.createElement(C)}}},4599:function(i,x,p){i.exports={content:{"zh-CN":[["p","\u81EA\u5B9A\u4E49\u65F6\u957F ",["code","10s"],"\uFF0C\u9ED8\u8BA4\u65F6\u957F\u4E3A ",["code","3s"],"\u3002"]],"en-US":[["p","Customize message display duration from default ",["code","3s"]," to ",["code","10s"],"."]]},meta:{order:2,title:{"zh-CN":"\u4FEE\u6539\u5EF6\u65F6","en-US":"Customize duration"},filename:"components/message/demo/duration.md",id:"components-message-demo-duration"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { Button<span class="token punctuation">,</span> message } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> <span class="token punctuation">[</span>messageApi<span class="token punctuation">,</span> contextHolder<span class="token punctuation">]</span> <span class="token operator">=</span> message<span class="token punctuation">.</span><span class="token function">useMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> success <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    messageApi<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>{
      type<span class="token punctuation">:</span> <span class="token string">'success'</span><span class="token punctuation">,</span>
      content<span class="token punctuation">:</span> <span class="token string">'This is a prompt message for success, and it will disappear in 10 seconds'</span><span class="token punctuation">,</span>
      duration<span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  return <span class="token punctuation">(</span>
    <span class="token operator">&lt;></span>
      {contextHolder}
      <span class="token operator">&lt;</span>Button onClick<span class="token operator">=</span>{success}<span class="token operator">></span>Customized display duration<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>messageApi<span class="token punctuation">,</span> contextHolder<span class="token punctuation">]</span> <span class="token operator">=</span> message<span class="token punctuation">.</span><span class="token function">useMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">success</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    messageApi<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      type<span class="token operator">:</span> <span class="token string">'success'</span><span class="token punctuation">,</span>
      content<span class="token operator">:</span> <span class="token string">'This is a prompt message for success, and it will disappear in 10 seconds'</span><span class="token punctuation">,</span>
      duration<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
      <span class="token punctuation">{</span>contextHolder<span class="token punctuation">}</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>success<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Customized display duration<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>messageApi<span class="token punctuation">,</span> contextHolder<span class="token punctuation">]</span> <span class="token operator">=</span> message<span class="token punctuation">.</span><span class="token function">useMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">success</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    messageApi<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'success'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">'This is a prompt message for success, and it will disappear in 10 seconds'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
      <span class="token punctuation">{</span>contextHolder<span class="token punctuation">}</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>success<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Customized display duration<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var g=p(0),B=p(65),u=p(12),e=d(p(0));function d(n){return n&&n.__esModule?n:{default:n}}function f(n,a){return A(n)||v(n,a)||h(n,a)||y()}function y(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function h(n,a){if(!!n){if(typeof n=="string")return k(n,a);var s=Object.prototype.toString.call(n).slice(8,-1);if(s==="Object"&&n.constructor&&(s=n.constructor.name),s==="Map"||s==="Set")return Array.from(n);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return k(n,a)}}function k(n,a){(a==null||a>n.length)&&(a=n.length);for(var s=0,t=new Array(a);s<a;s++)t[s]=n[s];return t}function v(n,a){var s=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(s!=null){var t=[],o=!0,c=!1,l,r;try{for(s=s.call(n);!(o=(l=s.next()).done)&&(t.push(l.value),!(a&&t.length===a));o=!0);}catch(m){c=!0,r=m}finally{try{!o&&s.return!=null&&s.return()}finally{if(c)throw r}}return t}}function A(n){if(Array.isArray(n))return n}var w=function(){var a=u.message.useMessage(),s=f(a,2),t=s[0],o=s[1],c=function(){t.open({type:"success",content:"This is a prompt message for success, and it will disappear in 10 seconds",duration:10})};return e.default.createElement(e.default.Fragment,null,o,e.default.createElement(u.Button,{onClick:c},"Customized display duration"))},C=w;return g.createElement(C)}}},4600:function(i,x,p){i.exports={content:{"zh-CN":[["p","\u901A\u8FC7 ",["code","message.useMessage"]," \u521B\u5EFA\u652F\u6301\u8BFB\u53D6 context \u7684 ",["code","contextHolder"],"\u3002\u8BF7\u6CE8\u610F\uFF0C\u6211\u4EEC\u63A8\u8350\u901A\u8FC7\u9876\u5C42\u6CE8\u518C\u7684\u65B9\u5F0F\u4EE3\u66FF ",["code","message"]," \u9759\u6001\u65B9\u6CD5\uFF0C\u56E0\u4E3A\u9759\u6001\u65B9\u6CD5\u65E0\u6CD5\u6D88\u8D39\u4E0A\u4E0B\u6587\uFF0C\u56E0\u800C ConfigProvider \u7684\u6570\u636E\u4E5F\u4E0D\u4F1A\u751F\u6548\u3002"]],"en-US":[["p","Use ",["code","message.useMessage"]," to get ",["code","contextHolder"]," with context accessible issue. Please note that, we recommend to use top level registration instead of ",["code","message"]," static method, because static method cannot consume context, and ConfigProvider data will not work."]]},meta:{order:0,title:{"zh-CN":"Hooks \u8C03\u7528\uFF08\u63A8\u8350\uFF09","en-US":"Hooks usage (recommended)"},filename:"components/message/demo/hooks.md",id:"components-message-demo-hooks"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { Button<span class="token punctuation">,</span> message } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> Context <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createContext</span><span class="token punctuation">(</span>{ name<span class="token punctuation">:</span> <span class="token string">'Default'</span> }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> <span class="token punctuation">[</span>messageApi<span class="token punctuation">,</span> contextHolder<span class="token punctuation">]</span> <span class="token operator">=</span> message<span class="token punctuation">.</span><span class="token function">useMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> info <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    messageApi<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>{
      type<span class="token punctuation">:</span> <span class="token string">'info'</span><span class="token punctuation">,</span>
      content<span class="token punctuation">:</span> <span class="token operator">&lt;</span>Context<span class="token punctuation">.</span>Consumer<span class="token operator">></span>{<span class="token punctuation">(</span>{ name }<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> \`Hello<span class="token punctuation">,</span> \${name}!\`}<span class="token operator">&lt;</span><span class="token operator">/</span>Context<span class="token punctuation">.</span>Consumer<span class="token operator">></span><span class="token punctuation">,</span>
      duration<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  return <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Context<span class="token punctuation">.</span>Provider value<span class="token operator">=</span>{{ name<span class="token punctuation">:</span> <span class="token string">'Ant Design'</span> }}<span class="token operator">></span>
      {contextHolder}
      <span class="token operator">&lt;</span>Button type<span class="token operator">=</span><span class="token string">"primary"</span> onClick<span class="token operator">=</span>{info}<span class="token operator">></span>
        Display normal message
      <span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Context<span class="token punctuation">.</span>Provider<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> Context <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createContext</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'Default'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>messageApi<span class="token punctuation">,</span> contextHolder<span class="token punctuation">]</span> <span class="token operator">=</span> message<span class="token punctuation">.</span><span class="token function">useMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">info</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    messageApi<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      type<span class="token operator">:</span> <span class="token string">'info'</span><span class="token punctuation">,</span>
      content<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Context.Consumer</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Context.Consumer</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
      duration<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Context.Provider</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'Ant Design'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      <span class="token punctuation">{</span>contextHolder<span class="token punctuation">}</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>info<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
        Display normal message
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Context.Provider</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> Context <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createContext</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Default'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>messageApi<span class="token punctuation">,</span> contextHolder<span class="token punctuation">]</span> <span class="token operator">=</span> message<span class="token punctuation">.</span><span class="token function">useMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">info</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    messageApi<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'info'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Context.Consumer</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> name <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Context.Consumer</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
      <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Context.Provider</span></span>
      <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Ant Design'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">></span></span>
      <span class="token punctuation">{</span>contextHolder<span class="token punctuation">}</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>info<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
        Display normal message
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Context.Provider</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var g=p(0),B=p(65),u=p(12),e=d(p(0));function d(a){return a&&a.__esModule?a:{default:a}}function f(a,s){return A(a)||v(a,s)||h(a,s)||y()}function y(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function h(a,s){if(!!a){if(typeof a=="string")return k(a,s);var t=Object.prototype.toString.call(a).slice(8,-1);if(t==="Object"&&a.constructor&&(t=a.constructor.name),t==="Map"||t==="Set")return Array.from(a);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return k(a,s)}}function k(a,s){(s==null||s>a.length)&&(s=a.length);for(var t=0,o=new Array(s);t<s;t++)o[t]=a[t];return o}function v(a,s){var t=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(t!=null){var o=[],c=!0,l=!1,r,m;try{for(t=t.call(a);!(c=(r=t.next()).done)&&(o.push(r.value),!(s&&o.length===s));c=!0);}catch(S){l=!0,m=S}finally{try{!c&&t.return!=null&&t.return()}finally{if(l)throw m}}return o}}function A(a){if(Array.isArray(a))return a}var w=e.default.createContext({name:"Default"}),C=function(){var s=u.message.useMessage(),t=f(s,2),o=t[0],c=t[1],l=function(){o.open({type:"info",content:e.default.createElement(w.Consumer,null,function(m){var S=m.name;return"Hello, ".concat(S,"!")}),duration:1})};return e.default.createElement(w.Provider,{value:{name:"Ant Design"}},c,e.default.createElement(u.Button,{type:"primary",onClick:l},"Display normal message"))},n=C;return g.createElement(n)}}},4601:function(i,x,p){i.exports={content:{"zh-CN":[["p","\u4FE1\u606F\u63D0\u9192\u53CD\u9988\u3002"]],"en-US":[["p","Normal message for information."]]},meta:{order:6,title:{"zh-CN":"\u666E\u901A\u63D0\u793A","en-US":"Normal prompt"},filename:"components/message/demo/info.md",id:"components-message-demo-info"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>
import { Button<span class="token punctuation">,</span> message } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> info <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  message<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'This is a normal message'</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Button type<span class="token operator">=</span><span class="token string">"primary"</span> onClick<span class="token operator">=</span>{info}<span class="token operator">></span>
    Display normal message
  <span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">info</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  message<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'This is a normal message'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>info<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
    Display normal message
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">info</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  message<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'This is a normal message'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>info<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
    Display normal message
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var g=p(0),B=p(65),u=d(p(0)),e=p(12);function d(k){return k&&k.__esModule?k:{default:k}}var f=function(){e.message.info("This is a normal message")},y=function(){return u.default.createElement(e.Button,{type:"primary",onClick:f},"Display normal message")},h=y;return g.createElement(h)}}},4602:function(i,x,p){i.exports={content:{"zh-CN":[["p","\u8FDB\u884C\u5168\u5C40 loading\uFF0C\u5F02\u6B65\u81EA\u884C\u79FB\u9664\u3002"]],"en-US":[["p","Display a global loading indicator, which is dismissed by itself asynchronously."]]},meta:{order:3,title:{"zh-CN":"\u52A0\u8F7D\u4E2D","en-US":"Message with loading indicator"},filename:"components/message/demo/loading.md",id:"components-message-demo-loading"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { Button<span class="token punctuation">,</span> message } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> <span class="token punctuation">[</span>messageApi<span class="token punctuation">,</span> contextHolder<span class="token punctuation">]</span> <span class="token operator">=</span> message<span class="token punctuation">.</span><span class="token function">useMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> success <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    messageApi<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>{
      type<span class="token punctuation">:</span> <span class="token string">'loading'</span><span class="token punctuation">,</span>
      content<span class="token punctuation">:</span> <span class="token string">'Action in progress..'</span><span class="token punctuation">,</span>
      duration<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    <span class="token operator">/</span><span class="token operator">/</span> Dismiss manually <span class="token operator">and</span> asynchronously
    <span class="token function">setTimeout</span><span class="token punctuation">(</span>messageApi<span class="token punctuation">.</span>destroy<span class="token punctuation">,</span> <span class="token number">2500</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>
  return <span class="token punctuation">(</span>
    <span class="token operator">&lt;></span>
      {contextHolder}
      <span class="token operator">&lt;</span>Button onClick<span class="token operator">=</span>{success}<span class="token operator">></span>Display a loading indicator<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>messageApi<span class="token punctuation">,</span> contextHolder<span class="token punctuation">]</span> <span class="token operator">=</span> message<span class="token punctuation">.</span><span class="token function">useMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">success</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    messageApi<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      type<span class="token operator">:</span> <span class="token string">'loading'</span><span class="token punctuation">,</span>
      content<span class="token operator">:</span> <span class="token string">'Action in progress..'</span><span class="token punctuation">,</span>
      duration<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// Dismiss manually and asynchronously</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span>messageApi<span class="token punctuation">.</span>destroy<span class="token punctuation">,</span> <span class="token number">2500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
      <span class="token punctuation">{</span>contextHolder<span class="token punctuation">}</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>success<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Display a loading indicator<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>messageApi<span class="token punctuation">,</span> contextHolder<span class="token punctuation">]</span> <span class="token operator">=</span> message<span class="token punctuation">.</span><span class="token function">useMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">success</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    messageApi<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'loading'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">'Action in progress..'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Dismiss manually and asynchronously</span>

    <span class="token function">setTimeout</span><span class="token punctuation">(</span>messageApi<span class="token punctuation">.</span>destroy<span class="token punctuation">,</span> <span class="token number">2500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
      <span class="token punctuation">{</span>contextHolder<span class="token punctuation">}</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>success<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Display a loading indicator<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var g=p(0),B=p(65),u=p(12),e=d(p(0));function d(n){return n&&n.__esModule?n:{default:n}}function f(n,a){return A(n)||v(n,a)||h(n,a)||y()}function y(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function h(n,a){if(!!n){if(typeof n=="string")return k(n,a);var s=Object.prototype.toString.call(n).slice(8,-1);if(s==="Object"&&n.constructor&&(s=n.constructor.name),s==="Map"||s==="Set")return Array.from(n);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return k(n,a)}}function k(n,a){(a==null||a>n.length)&&(a=n.length);for(var s=0,t=new Array(a);s<a;s++)t[s]=n[s];return t}function v(n,a){var s=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(s!=null){var t=[],o=!0,c=!1,l,r;try{for(s=s.call(n);!(o=(l=s.next()).done)&&(t.push(l.value),!(a&&t.length===a));o=!0);}catch(m){c=!0,r=m}finally{try{!o&&s.return!=null&&s.return()}finally{if(c)throw r}}return t}}function A(n){if(Array.isArray(n))return n}var w=function(){var a=u.message.useMessage(),s=f(a,2),t=s[0],o=s[1],c=function(){t.open({type:"loading",content:"Action in progress..",duration:0}),setTimeout(t.destroy,2500)};return e.default.createElement(e.default.Fragment,null,o,e.default.createElement(u.Button,{onClick:c},"Display a loading indicator"))},C=w;return g.createElement(C)}}},4603:function(i,x,p){i.exports={content:{"zh-CN":[["p","\u5305\u62EC\u6210\u529F\u3001\u5931\u8D25\u3001\u8B66\u544A\u3002"]],"en-US":[["p","Messages of success, error and warning types."]]},meta:{order:1,title:{"zh-CN":"\u5176\u4ED6\u63D0\u793A\u7C7B\u578B","en-US":"Other types of message"},filename:"components/message/demo/other.md",id:"components-message-demo-other"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { Button<span class="token punctuation">,</span> message<span class="token punctuation">,</span> Space } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> <span class="token punctuation">[</span>messageApi<span class="token punctuation">,</span> contextHolder<span class="token punctuation">]</span> <span class="token operator">=</span> message<span class="token punctuation">.</span><span class="token function">useMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> success <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    messageApi<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>{
      type<span class="token punctuation">:</span> <span class="token string">'success'</span><span class="token punctuation">,</span>
      content<span class="token punctuation">:</span> <span class="token string">'This is a success message'</span><span class="token punctuation">,</span>
    }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> error <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    messageApi<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>{
      type<span class="token punctuation">:</span> <span class="token string">'error'</span><span class="token punctuation">,</span>
      content<span class="token punctuation">:</span> <span class="token string">'This is an error message'</span><span class="token punctuation">,</span>
    }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> warning <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    messageApi<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>{
      type<span class="token punctuation">:</span> <span class="token string">'warning'</span><span class="token punctuation">,</span>
      content<span class="token punctuation">:</span> <span class="token string">'This is a warning message'</span><span class="token punctuation">,</span>
    }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  return <span class="token punctuation">(</span>
    <span class="token operator">&lt;></span>
      {contextHolder}
      <span class="token operator">&lt;</span>Space<span class="token operator">></span>
        <span class="token operator">&lt;</span>Button onClick<span class="token operator">=</span>{success}<span class="token operator">></span>Success<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
        <span class="token operator">&lt;</span>Button onClick<span class="token operator">=</span>{error}<span class="token operator">></span>Error<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
        <span class="token operator">&lt;</span>Button onClick<span class="token operator">=</span>{warning}<span class="token operator">></span>Warning<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Space<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> message<span class="token punctuation">,</span> Space <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>messageApi<span class="token punctuation">,</span> contextHolder<span class="token punctuation">]</span> <span class="token operator">=</span> message<span class="token punctuation">.</span><span class="token function">useMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">success</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    messageApi<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      type<span class="token operator">:</span> <span class="token string">'success'</span><span class="token punctuation">,</span>
      content<span class="token operator">:</span> <span class="token string">'This is a success message'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">error</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    messageApi<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      type<span class="token operator">:</span> <span class="token string">'error'</span><span class="token punctuation">,</span>
      content<span class="token operator">:</span> <span class="token string">'This is an error message'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">warning</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    messageApi<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      type<span class="token operator">:</span> <span class="token string">'warning'</span><span class="token punctuation">,</span>
      content<span class="token operator">:</span> <span class="token string">'This is a warning message'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
      <span class="token punctuation">{</span>contextHolder<span class="token punctuation">}</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>success<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Success<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>error<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Error<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>warning<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Warning<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> message<span class="token punctuation">,</span> Space <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>messageApi<span class="token punctuation">,</span> contextHolder<span class="token punctuation">]</span> <span class="token operator">=</span> message<span class="token punctuation">.</span><span class="token function">useMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">success</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    messageApi<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'success'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">'This is a success message'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">error</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    messageApi<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'error'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">'This is an error message'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">warning</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    messageApi<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'warning'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">'This is a warning message'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
      <span class="token punctuation">{</span>contextHolder<span class="token punctuation">}</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>success<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Success<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>error<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Error<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>warning<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Warning<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var g=p(0),B=p(65),u=p(12),e=d(p(0));function d(n){return n&&n.__esModule?n:{default:n}}function f(n,a){return A(n)||v(n,a)||h(n,a)||y()}function y(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function h(n,a){if(!!n){if(typeof n=="string")return k(n,a);var s=Object.prototype.toString.call(n).slice(8,-1);if(s==="Object"&&n.constructor&&(s=n.constructor.name),s==="Map"||s==="Set")return Array.from(n);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return k(n,a)}}function k(n,a){(a==null||a>n.length)&&(a=n.length);for(var s=0,t=new Array(a);s<a;s++)t[s]=n[s];return t}function v(n,a){var s=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(s!=null){var t=[],o=!0,c=!1,l,r;try{for(s=s.call(n);!(o=(l=s.next()).done)&&(t.push(l.value),!(a&&t.length===a));o=!0);}catch(m){c=!0,r=m}finally{try{!o&&s.return!=null&&s.return()}finally{if(c)throw r}}return t}}function A(n){if(Array.isArray(n))return n}var w=function(){var a=u.message.useMessage(),s=f(a,2),t=s[0],o=s[1],c=function(){t.open({type:"success",content:"This is a success message"})},l=function(){t.open({type:"error",content:"This is an error message"})},r=function(){t.open({type:"warning",content:"This is a warning message"})};return e.default.createElement(e.default.Fragment,null,o,e.default.createElement(u.Space,null,e.default.createElement(u.Button,{onClick:c},"Success"),e.default.createElement(u.Button,{onClick:l},"Error"),e.default.createElement(u.Button,{onClick:r},"Warning")))},C=w;return g.createElement(C)}}},4604:function(i,x,p){i.exports={content:{"zh-CN":[["p","\u8C03\u8BD5\u7528\u7EC4\u4EF6\uFF0C\u8BF7\u52FF\u76F4\u63A5\u4F7F\u7528\u3002"]],"en-US":[["p","Debug usage. Do not use in your production."]]},meta:{order:99,title:{"zh-CN":"_InternalPanelDoNotUseOrYouWillBeFired","en-US":"_InternalPanelDoNotUseOrYouWillBeFired"},debug:!0,filename:"components/message/demo/render-panel.md",id:"components-message-demo-render-panel"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { message } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>

<span class="token operator">/</span><span class="token operator">*</span><span class="token operator">*</span> Test usage<span class="token punctuation">.</span> <span class="token keyword">Do</span> <span class="token operator">not</span> use <span class="token keyword">in</span> your production<span class="token punctuation">.</span> <span class="token operator">*</span><span class="token operator">/</span>
<span class="token keyword">const</span> { _InternalPanelDoNotUseOrYouWillBeFired<span class="token punctuation">:</span> InternalPanel } <span class="token operator">=</span> message<span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token operator">&lt;</span>InternalPanel content<span class="token operator">=</span><span class="token string">"Hello World!"</span> type<span class="token operator">=</span><span class="token string">"error"</span> <span class="token operator">/</span><span class="token operator">></span><span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>

<span class="token comment">/** Test usage. Do not use in your production. */</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> _InternalPanelDoNotUseOrYouWillBeFired<span class="token operator">:</span> InternalPanel <span class="token punctuation">}</span> <span class="token operator">=</span> message<span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">InternalPanel</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Hello World!<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>error<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token comment">/** Test usage. Do not use in your production. */</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">_InternalPanelDoNotUseOrYouWillBeFired</span><span class="token operator">:</span> InternalPanel <span class="token punctuation">}</span> <span class="token operator">=</span> message<span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">InternalPanel</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Hello World!<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>error<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
`},preview:function(){var g=p(0),B=p(65),u=p(12),e=u.message._InternalPanelDoNotUseOrYouWillBeFired,d=function(){return g.createElement(e,{content:"Hello World!",type:"error"})};return g.createElement(d)}}},4605:function(i,x,p){i.exports={content:{"zh-CN":[["p","\u53EF\u4EE5\u901A\u8FC7 then \u63A5\u53E3\u5728\u5173\u95ED\u540E\u8FD0\u884C callback \u3002\u4EE5\u4E0A\u7528\u4F8B\u5C06\u5728\u6BCF\u4E2A message \u5C06\u8981\u7ED3\u675F\u65F6\u901A\u8FC7 then \u663E\u793A\u65B0\u7684 message \u3002"]],"en-US":[["p",["code","message"]," provides a promise interface for ",["code","onClose"],". The above example will display a new message when the old message is about to close."]]},meta:{order:4,title:{"zh-CN":"Promise \u63A5\u53E3","en-US":"Promise interface"},filename:"components/message/demo/thenable.md",id:"components-message-demo-thenable"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { Button<span class="token punctuation">,</span> message } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> <span class="token punctuation">[</span>messageApi<span class="token punctuation">,</span> contextHolder<span class="token punctuation">]</span> <span class="token operator">=</span> message<span class="token punctuation">.</span><span class="token function">useMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> success <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    messageApi
      <span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>{
        type<span class="token punctuation">:</span> <span class="token string">'loading'</span><span class="token punctuation">,</span>
        content<span class="token punctuation">:</span> <span class="token string">'Action in progress..'</span><span class="token punctuation">,</span>
        duration<span class="token punctuation">:</span> <span class="token number">2.5</span><span class="token punctuation">,</span>
      }<span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> message<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">'Loading finished'</span><span class="token punctuation">,</span> <span class="token number">2.5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> message<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'Loading finished'</span><span class="token punctuation">,</span> <span class="token number">2.5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  return <span class="token punctuation">(</span>
    <span class="token operator">&lt;></span>
      {contextHolder}
      <span class="token operator">&lt;</span>Button onClick<span class="token operator">=</span>{success}<span class="token operator">></span>Display sequential messages<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>messageApi<span class="token punctuation">,</span> contextHolder<span class="token punctuation">]</span> <span class="token operator">=</span> message<span class="token punctuation">.</span><span class="token function">useMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">success</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    messageApi
      <span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        type<span class="token operator">:</span> <span class="token string">'loading'</span><span class="token punctuation">,</span>
        content<span class="token operator">:</span> <span class="token string">'Action in progress..'</span><span class="token punctuation">,</span>
        duration<span class="token operator">:</span> <span class="token number">2.5</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> message<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">'Loading finished'</span><span class="token punctuation">,</span> <span class="token number">2.5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> message<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'Loading finished'</span><span class="token punctuation">,</span> <span class="token number">2.5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
      <span class="token punctuation">{</span>contextHolder<span class="token punctuation">}</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>success<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Display sequential messages<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>messageApi<span class="token punctuation">,</span> contextHolder<span class="token punctuation">]</span> <span class="token operator">=</span> message<span class="token punctuation">.</span><span class="token function">useMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">success</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    messageApi
      <span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'loading'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">'Action in progress..'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">2.5</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> message<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">'Loading finished'</span><span class="token punctuation">,</span> <span class="token number">2.5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> message<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'Loading finished'</span><span class="token punctuation">,</span> <span class="token number">2.5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
      <span class="token punctuation">{</span>contextHolder<span class="token punctuation">}</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>success<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Display sequential messages<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var g=p(0),B=p(65),u=p(12),e=d(p(0));function d(n){return n&&n.__esModule?n:{default:n}}function f(n,a){return A(n)||v(n,a)||h(n,a)||y()}function y(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function h(n,a){if(!!n){if(typeof n=="string")return k(n,a);var s=Object.prototype.toString.call(n).slice(8,-1);if(s==="Object"&&n.constructor&&(s=n.constructor.name),s==="Map"||s==="Set")return Array.from(n);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return k(n,a)}}function k(n,a){(a==null||a>n.length)&&(a=n.length);for(var s=0,t=new Array(a);s<a;s++)t[s]=n[s];return t}function v(n,a){var s=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(s!=null){var t=[],o=!0,c=!1,l,r;try{for(s=s.call(n);!(o=(l=s.next()).done)&&(t.push(l.value),!(a&&t.length===a));o=!0);}catch(m){c=!0,r=m}finally{try{!o&&s.return!=null&&s.return()}finally{if(c)throw r}}return t}}function A(n){if(Array.isArray(n))return n}var w=function(){var a=u.message.useMessage(),s=f(a,2),t=s[0],o=s[1],c=function(){t.open({type:"loading",content:"Action in progress..",duration:2.5}).then(function(){return u.message.success("Loading finished",2.5)}).then(function(){return u.message.info("Loading finished",2.5)})};return e.default.createElement(e.default.Fragment,null,o,e.default.createElement(u.Button,{onClick:c},"Display sequential messages"))},C=w;return g.createElement(C)}}},4606:function(i,x,p){i.exports={content:{"zh-CN":[["p","\u53EF\u4EE5\u901A\u8FC7\u552F\u4E00\u7684 ",["code","key"]," \u6765\u66F4\u65B0\u5185\u5BB9\u3002"]],"en-US":[["p","Update message content with unique ",["code","key"],"."]]},meta:{order:5,title:{"zh-CN":"\u66F4\u65B0\u6D88\u606F\u5185\u5BB9","en-US":"Update Message Content"},filename:"components/message/demo/update.md",id:"components-message-demo-update"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { Button<span class="token punctuation">,</span> message } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> <span class="token punctuation">[</span>messageApi<span class="token punctuation">,</span> contextHolder<span class="token punctuation">]</span> <span class="token operator">=</span> message<span class="token punctuation">.</span><span class="token function">useMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  <span class="token keyword">const</span> key <span class="token operator">=</span> <span class="token string">'updatable'</span><span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> openMessage <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    messageApi<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>{
      key<span class="token punctuation">,</span>
      type<span class="token punctuation">:</span> <span class="token string">'loading'</span><span class="token punctuation">,</span>
      content<span class="token punctuation">:</span> <span class="token string">'Loading...'</span><span class="token punctuation">,</span>
    }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
      messageApi<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>{
        key<span class="token punctuation">,</span>
        type<span class="token punctuation">:</span> <span class="token string">'success'</span><span class="token punctuation">,</span>
        content<span class="token punctuation">:</span> <span class="token string">'Loaded!'</span><span class="token punctuation">,</span>
        duration<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    }<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  return <span class="token punctuation">(</span>
    <span class="token operator">&lt;></span>
      {contextHolder}
      <span class="token operator">&lt;</span>Button type<span class="token operator">=</span><span class="token string">"primary"</span> onClick<span class="token operator">=</span>{openMessage}<span class="token operator">></span>
        Open the message box
      <span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>messageApi<span class="token punctuation">,</span> contextHolder<span class="token punctuation">]</span> <span class="token operator">=</span> message<span class="token punctuation">.</span><span class="token function">useMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> key <span class="token operator">=</span> <span class="token string">'updatable'</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">openMessage</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    messageApi<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      key<span class="token punctuation">,</span>
      type<span class="token operator">:</span> <span class="token string">'loading'</span><span class="token punctuation">,</span>
      content<span class="token operator">:</span> <span class="token string">'Loading...'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      messageApi<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        key<span class="token punctuation">,</span>
        type<span class="token operator">:</span> <span class="token string">'success'</span><span class="token punctuation">,</span>
        content<span class="token operator">:</span> <span class="token string">'Loaded!'</span><span class="token punctuation">,</span>
        duration<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
      <span class="token punctuation">{</span>contextHolder<span class="token punctuation">}</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>openMessage<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
        Open the message box
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>messageApi<span class="token punctuation">,</span> contextHolder<span class="token punctuation">]</span> <span class="token operator">=</span> message<span class="token punctuation">.</span><span class="token function">useMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> key <span class="token operator">=</span> <span class="token string">'updatable'</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">openMessage</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    messageApi<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      key<span class="token punctuation">,</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'loading'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">'Loading...'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      messageApi<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        key<span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'success'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">'Loaded!'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
      <span class="token punctuation">{</span>contextHolder<span class="token punctuation">}</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>openMessage<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
        Open the message box
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var g=p(0),B=p(65),u=p(12),e=d(p(0));function d(n){return n&&n.__esModule?n:{default:n}}function f(n,a){return A(n)||v(n,a)||h(n,a)||y()}function y(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function h(n,a){if(!!n){if(typeof n=="string")return k(n,a);var s=Object.prototype.toString.call(n).slice(8,-1);if(s==="Object"&&n.constructor&&(s=n.constructor.name),s==="Map"||s==="Set")return Array.from(n);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return k(n,a)}}function k(n,a){(a==null||a>n.length)&&(a=n.length);for(var s=0,t=new Array(a);s<a;s++)t[s]=n[s];return t}function v(n,a){var s=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(s!=null){var t=[],o=!0,c=!1,l,r;try{for(s=s.call(n);!(o=(l=s.next()).done)&&(t.push(l.value),!(a&&t.length===a));o=!0);}catch(m){c=!0,r=m}finally{try{!o&&s.return!=null&&s.return()}finally{if(c)throw r}}return t}}function A(n){if(Array.isArray(n))return n}var w=function(){var a=u.message.useMessage(),s=f(a,2),t=s[0],o=s[1],c="updatable",l=function(){t.open({key:c,type:"loading",content:"Loading..."}),setTimeout(function(){t.open({key:c,type:"success",content:"Loaded!",duration:2})},1e3)};return e.default.createElement(e.default.Fragment,null,o,e.default.createElement(u.Button,{type:"primary",onClick:l},"Open the message box"))},C=w;return g.createElement(C)}}}}]);
