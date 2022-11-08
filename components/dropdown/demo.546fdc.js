(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{3950:function(g,C,n){g.exports={"arrow-center":n(4437),arrow:n(4438),basic:n(4439),"context-menu":n(4440),"custom-dropdown":n(4441),deprecated:n(4442),"dropdown-button":n(4443),event:n(4444),item:n(4445),loading:n(4446),"menu-full":n(4447),"overlay-open":n(4448),placement:n(4449),"render-panel":n(4450),selectable:n(4451),"sub-menu":n(4452),trigger:n(4453)}},4437:function(g,C,n){g.exports={content:{"zh-CN":[["p","\u8BBE\u7F6E ",["code","arrow"]," \u4E3A ",["code","{ pointAtCenter: true }"]," \u540E\uFF0C\u7BAD\u5934\u5C06\u6307\u5411\u76EE\u6807\u5143\u7D20\u7684\u4E2D\u5FC3\u3002"]],"en-US":[["p","By specifying ",["code","arrow"]," prop with ",["code","{ pointAtCenter: true }"],", the arrow will point to the center of the target element."]]},meta:{order:4,title:{"zh-CN":"\u7BAD\u5934\u6307\u5411","en-US":"Arrow pointing at the center"},filename:"components/dropdown/demo/arrow-center.md",id:"components-dropdown-demo-arrow-center"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import type { MenuProps } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import { Button<span class="token punctuation">,</span> Dropdown } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> items<span class="token punctuation">:</span> MenuProps<span class="token punctuation">[</span><span class="token string">'items'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  {
    key<span class="token punctuation">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
    label<span class="token punctuation">:</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>a target<span class="token operator">=</span><span class="token string">"_blank"</span> rel<span class="token operator">=</span><span class="token string">"noopener noreferrer"</span> href<span class="token operator">=</span><span class="token string">"https://www.antgroup.com"</span><span class="token operator">></span>
        1st menu item
      <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
  {
    key<span class="token punctuation">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
    label<span class="token punctuation">:</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>a target<span class="token operator">=</span><span class="token string">"_blank"</span> rel<span class="token operator">=</span><span class="token string">"noopener noreferrer"</span> href<span class="token operator">=</span><span class="token string">"https://www.aliyun.com"</span><span class="token operator">></span>
        2nd menu item
      <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
  {
    key<span class="token punctuation">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
    label<span class="token punctuation">:</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>a target<span class="token operator">=</span><span class="token string">"_blank"</span> rel<span class="token operator">=</span><span class="token string">"noopener noreferrer"</span> href<span class="token operator">=</span><span class="token string">"https://www.luohanacademy.com"</span><span class="token operator">></span>
        3rd menu item
      <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;></span>
    <span class="token operator">&lt;</span>Dropdown menu<span class="token operator">=</span>{{ items }} placement<span class="token operator">=</span><span class="token string">"bottomLeft"</span> arrow<span class="token operator">=</span>{{ pointAtCenter<span class="token punctuation">:</span> <span class="token boolean">true</span> }}<span class="token operator">></span>
      <span class="token operator">&lt;</span>Button<span class="token operator">></span>bottomLeft<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token operator">></span>
    <span class="token operator">&lt;</span>Dropdown menu<span class="token operator">=</span>{{ items }} placement<span class="token operator">=</span><span class="token string">"bottom"</span> arrow<span class="token operator">=</span>{{ pointAtCenter<span class="token punctuation">:</span> <span class="token boolean">true</span> }}<span class="token operator">></span>
      <span class="token operator">&lt;</span>Button<span class="token operator">></span>bottom<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token operator">></span>
    <span class="token operator">&lt;</span>Dropdown menu<span class="token operator">=</span>{{ items }} placement<span class="token operator">=</span><span class="token string">"bottomRight"</span> arrow<span class="token operator">=</span>{{ pointAtCenter<span class="token punctuation">:</span> <span class="token boolean">true</span> }}<span class="token operator">></span>
      <span class="token operator">&lt;</span>Button<span class="token operator">></span>bottomRight<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token operator">></span>
    <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>Dropdown menu<span class="token operator">=</span>{{ items }} placement<span class="token operator">=</span><span class="token string">"topLeft"</span> arrow<span class="token operator">=</span>{{ pointAtCenter<span class="token punctuation">:</span> <span class="token boolean">true</span> }}<span class="token operator">></span>
      <span class="token operator">&lt;</span>Button<span class="token operator">></span>topLeft<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token operator">></span>
    <span class="token operator">&lt;</span>Dropdown menu<span class="token operator">=</span>{{ items }} placement<span class="token operator">=</span><span class="token string">"top"</span> arrow<span class="token operator">=</span>{{ pointAtCenter<span class="token punctuation">:</span> <span class="token boolean">true</span> }}<span class="token operator">></span>
      <span class="token operator">&lt;</span>Button<span class="token operator">></span>top<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token operator">></span>
    <span class="token operator">&lt;</span>Dropdown menu<span class="token operator">=</span>{{ items }} placement<span class="token operator">=</span><span class="token string">"topRight"</span> arrow<span class="token operator">=</span>{{ pointAtCenter<span class="token punctuation">:</span> <span class="token boolean">true</span> }}<span class="token operator">></span>
      <span class="token operator">&lt;</span>Button<span class="token operator">></span>topRight<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> type <span class="token punctuation">{</span> MenuProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Dropdown <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> items<span class="token operator">:</span> MenuProps<span class="token punctuation">[</span><span class="token string">'items'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    key<span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.antgroup.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        1st menu item
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    key<span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.aliyun.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        2nd menu item
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    key<span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.luohanacademy.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        3rd menu item
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> items <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottomLeft<span class="token punctuation">"</span></span> <span class="token attr-name">arrow</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> pointAtCenter<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>bottomLeft<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> items <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottom<span class="token punctuation">"</span></span> <span class="token attr-name">arrow</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> pointAtCenter<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>bottom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> items <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottomRight<span class="token punctuation">"</span></span> <span class="token attr-name">arrow</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> pointAtCenter<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>bottomRight<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> items <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>topLeft<span class="token punctuation">"</span></span> <span class="token attr-name">arrow</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> pointAtCenter<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>topLeft<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> items <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>top<span class="token punctuation">"</span></span> <span class="token attr-name">arrow</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> pointAtCenter<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>top<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> items <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>topRight<span class="token punctuation">"</span></span> <span class="token attr-name">arrow</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> pointAtCenter<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>topRight<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Dropdown <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.antgroup.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        1st menu item
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.aliyun.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        2nd menu item
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.luohanacademy.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        3rd menu item
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span>
      <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        items<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottomLeft<span class="token punctuation">"</span></span>
      <span class="token attr-name">arrow</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token literal-property property">pointAtCenter</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>bottomLeft<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span>
      <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        items<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottom<span class="token punctuation">"</span></span>
      <span class="token attr-name">arrow</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token literal-property property">pointAtCenter</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>bottom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span>
      <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        items<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottomRight<span class="token punctuation">"</span></span>
      <span class="token attr-name">arrow</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token literal-property property">pointAtCenter</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>bottomRight<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span>
      <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        items<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>topLeft<span class="token punctuation">"</span></span>
      <span class="token attr-name">arrow</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token literal-property property">pointAtCenter</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>topLeft<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span>
      <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        items<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>top<span class="token punctuation">"</span></span>
      <span class="token attr-name">arrow</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token literal-property property">pointAtCenter</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>top<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span>
      <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        items<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>topRight<span class="token punctuation">"</span></span>
      <span class="token attr-name">arrow</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token literal-property property">pointAtCenter</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>topRight<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var d=n(0),O=n(64),t=n(12),s=a(n(0));function a(u){return u&&u.__esModule?u:{default:u}}var e=[{key:"1",label:s.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.antgroup.com"},"1st menu item")},{key:"2",label:s.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.aliyun.com"},"2nd menu item")},{key:"3",label:s.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.luohanacademy.com"},"3rd menu item")}],c=function(){return s.default.createElement(s.default.Fragment,null,s.default.createElement(t.Dropdown,{menu:{items:e},placement:"bottomLeft",arrow:{pointAtCenter:!0}},s.default.createElement(t.Button,null,"bottomLeft")),s.default.createElement(t.Dropdown,{menu:{items:e},placement:"bottom",arrow:{pointAtCenter:!0}},s.default.createElement(t.Button,null,"bottom")),s.default.createElement(t.Dropdown,{menu:{items:e},placement:"bottomRight",arrow:{pointAtCenter:!0}},s.default.createElement(t.Button,null,"bottomRight")),s.default.createElement("br",null),s.default.createElement(t.Dropdown,{menu:{items:e},placement:"topLeft",arrow:{pointAtCenter:!0}},s.default.createElement(t.Button,null,"topLeft")),s.default.createElement(t.Dropdown,{menu:{items:e},placement:"top",arrow:{pointAtCenter:!0}},s.default.createElement(t.Button,null,"top")),s.default.createElement(t.Dropdown,{menu:{items:e},placement:"topRight",arrow:{pointAtCenter:!0}},s.default.createElement(t.Button,null,"topRight")))},w=c;return d.createElement(w)},style:`#components-dropdown-demo-arrow-center .ant-btn {
  margin-right: 8px;
  margin-bottom: 8px;
}
.ant-row-rtl #components-dropdown-demo-arrow-center .ant-btn {
  margin-right: 0;
  margin-bottom: 8px;
  margin-left: 8px;
}`,highlightedStyle:`<span class="token selector"><span class="token id">#components-dropdown-demo-arrow-center</span> <span class="token class">.ant-btn</span> </span><span class="token punctuation">{</span>
  <span class="token property">margin-right</span><span class="token punctuation">:</span> <span class="token number">8</span>px<span class="token punctuation">;</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> <span class="token number">8</span>px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector"><span class="token class">.ant-row-rtl</span> <span class="token id">#components-dropdown-demo-arrow-center</span> <span class="token class">.ant-btn</span> </span><span class="token punctuation">{</span>
  <span class="token property">margin-right</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> <span class="token number">8</span>px<span class="token punctuation">;</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> <span class="token number">8</span>px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>`}},4438:function(g,C,n){g.exports={content:{"zh-CN":[["p","\u53EF\u4EE5\u5C55\u793A\u4E00\u4E2A\u7BAD\u5934\u3002"]],"en-US":[["p","You could display an arrow."]]},meta:{order:2,title:{"zh-CN":"\u7BAD\u5934","en-US":"Arrow"},filename:"components/dropdown/demo/arrow.md",id:"components-dropdown-demo-arrow"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import type { MenuProps } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import { Button<span class="token punctuation">,</span> Dropdown } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> items<span class="token punctuation">:</span> MenuProps<span class="token punctuation">[</span><span class="token string">'items'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  {
    key<span class="token punctuation">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
    label<span class="token punctuation">:</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>a target<span class="token operator">=</span><span class="token string">"_blank"</span> rel<span class="token operator">=</span><span class="token string">"noopener noreferrer"</span> href<span class="token operator">=</span><span class="token string">"https://www.antgroup.com"</span><span class="token operator">></span>
        1st menu item
      <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
  {
    key<span class="token punctuation">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
    label<span class="token punctuation">:</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>a target<span class="token operator">=</span><span class="token string">"_blank"</span> rel<span class="token operator">=</span><span class="token string">"noopener noreferrer"</span> href<span class="token operator">=</span><span class="token string">"https://www.aliyun.com"</span><span class="token operator">></span>
        2nd menu item
      <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
  {
    key<span class="token punctuation">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
    label<span class="token punctuation">:</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>a target<span class="token operator">=</span><span class="token string">"_blank"</span> rel<span class="token operator">=</span><span class="token string">"noopener noreferrer"</span> href<span class="token operator">=</span><span class="token string">"https://www.luohanacademy.com"</span><span class="token operator">></span>
        3rd menu item
      <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;></span>
    <span class="token operator">&lt;</span>Dropdown menu<span class="token operator">=</span>{{ items }} placement<span class="token operator">=</span><span class="token string">"bottomLeft"</span> arrow<span class="token operator">></span>
      <span class="token operator">&lt;</span>Button<span class="token operator">></span>bottomLeft<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token operator">></span>
    <span class="token operator">&lt;</span>Dropdown menu<span class="token operator">=</span>{{ items }} placement<span class="token operator">=</span><span class="token string">"bottom"</span> arrow<span class="token operator">></span>
      <span class="token operator">&lt;</span>Button<span class="token operator">></span>bottom<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token operator">></span>
    <span class="token operator">&lt;</span>Dropdown menu<span class="token operator">=</span>{{ items }} placement<span class="token operator">=</span><span class="token string">"bottomRight"</span> arrow<span class="token operator">></span>
      <span class="token operator">&lt;</span>Button<span class="token operator">></span>bottomRight<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token operator">></span>
    <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>Dropdown menu<span class="token operator">=</span>{{ items }} placement<span class="token operator">=</span><span class="token string">"topLeft"</span> arrow<span class="token operator">></span>
      <span class="token operator">&lt;</span>Button<span class="token operator">></span>topLeft<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token operator">></span>
    <span class="token operator">&lt;</span>Dropdown menu<span class="token operator">=</span>{{ items }} placement<span class="token operator">=</span><span class="token string">"top"</span> arrow<span class="token operator">></span>
      <span class="token operator">&lt;</span>Button<span class="token operator">></span>top<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token operator">></span>
    <span class="token operator">&lt;</span>Dropdown menu<span class="token operator">=</span>{{ items }} placement<span class="token operator">=</span><span class="token string">"topRight"</span> arrow<span class="token operator">></span>
      <span class="token operator">&lt;</span>Button<span class="token operator">></span>topRight<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> type <span class="token punctuation">{</span> MenuProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Dropdown <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> items<span class="token operator">:</span> MenuProps<span class="token punctuation">[</span><span class="token string">'items'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    key<span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.antgroup.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        1st menu item
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    key<span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.aliyun.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        2nd menu item
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    key<span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.luohanacademy.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        3rd menu item
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> items <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottomLeft<span class="token punctuation">"</span></span> <span class="token attr-name">arrow</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>bottomLeft<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> items <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottom<span class="token punctuation">"</span></span> <span class="token attr-name">arrow</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>bottom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> items <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottomRight<span class="token punctuation">"</span></span> <span class="token attr-name">arrow</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>bottomRight<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> items <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>topLeft<span class="token punctuation">"</span></span> <span class="token attr-name">arrow</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>topLeft<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> items <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>top<span class="token punctuation">"</span></span> <span class="token attr-name">arrow</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>top<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> items <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>topRight<span class="token punctuation">"</span></span> <span class="token attr-name">arrow</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>topRight<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Dropdown <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.antgroup.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        1st menu item
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.aliyun.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        2nd menu item
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.luohanacademy.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        3rd menu item
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span>
      <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        items<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottomLeft<span class="token punctuation">"</span></span>
      <span class="token attr-name">arrow</span>
    <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>bottomLeft<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span>
      <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        items<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottom<span class="token punctuation">"</span></span>
      <span class="token attr-name">arrow</span>
    <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>bottom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span>
      <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        items<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottomRight<span class="token punctuation">"</span></span>
      <span class="token attr-name">arrow</span>
    <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>bottomRight<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span>
      <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        items<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>topLeft<span class="token punctuation">"</span></span>
      <span class="token attr-name">arrow</span>
    <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>topLeft<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span>
      <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        items<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>top<span class="token punctuation">"</span></span>
      <span class="token attr-name">arrow</span>
    <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>top<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span>
      <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        items<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>topRight<span class="token punctuation">"</span></span>
      <span class="token attr-name">arrow</span>
    <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>topRight<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var d=n(0),O=n(64),t=n(12),s=a(n(0));function a(u){return u&&u.__esModule?u:{default:u}}var e=[{key:"1",label:s.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.antgroup.com"},"1st menu item")},{key:"2",label:s.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.aliyun.com"},"2nd menu item")},{key:"3",label:s.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.luohanacademy.com"},"3rd menu item")}],c=function(){return s.default.createElement(s.default.Fragment,null,s.default.createElement(t.Dropdown,{menu:{items:e},placement:"bottomLeft",arrow:!0},s.default.createElement(t.Button,null,"bottomLeft")),s.default.createElement(t.Dropdown,{menu:{items:e},placement:"bottom",arrow:!0},s.default.createElement(t.Button,null,"bottom")),s.default.createElement(t.Dropdown,{menu:{items:e},placement:"bottomRight",arrow:!0},s.default.createElement(t.Button,null,"bottomRight")),s.default.createElement("br",null),s.default.createElement(t.Dropdown,{menu:{items:e},placement:"topLeft",arrow:!0},s.default.createElement(t.Button,null,"topLeft")),s.default.createElement(t.Dropdown,{menu:{items:e},placement:"top",arrow:!0},s.default.createElement(t.Button,null,"top")),s.default.createElement(t.Dropdown,{menu:{items:e},placement:"topRight",arrow:!0},s.default.createElement(t.Button,null,"topRight")))},w=c;return d.createElement(w)},style:`#components-dropdown-demo-arrow .ant-btn {
  margin-right: 8px;
  margin-bottom: 8px;
}
.ant-row-rtl #components-dropdown-demo-arrow .ant-btn {
  margin-right: 0;
  margin-bottom: 8px;
  margin-left: 8px;
}`,highlightedStyle:`<span class="token selector"><span class="token id">#components-dropdown-demo-arrow</span> <span class="token class">.ant-btn</span> </span><span class="token punctuation">{</span>
  <span class="token property">margin-right</span><span class="token punctuation">:</span> <span class="token number">8</span>px<span class="token punctuation">;</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> <span class="token number">8</span>px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector"><span class="token class">.ant-row-rtl</span> <span class="token id">#components-dropdown-demo-arrow</span> <span class="token class">.ant-btn</span> </span><span class="token punctuation">{</span>
  <span class="token property">margin-right</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> <span class="token number">8</span>px<span class="token punctuation">;</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> <span class="token number">8</span>px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>`}},4439:function(g,C,n){g.exports={content:{"zh-CN":[["p","\u6700\u7B80\u5355\u7684\u4E0B\u62C9\u83DC\u5355\u3002"]],"en-US":[["p","The most basic dropdown menu."]]},meta:{order:0,title:{"zh-CN":"\u57FA\u672C","en-US":"Basic"},filename:"components/dropdown/demo/basic.md",id:"components-dropdown-demo-basic"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { DownOutlined<span class="token punctuation">,</span> SmileOutlined } from <span class="token string">'@ant-design/icons'</span><span class="token comment" spellcheck="true">;</span>
import type { MenuProps } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import { Dropdown<span class="token punctuation">,</span> Space } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> items<span class="token punctuation">:</span> MenuProps<span class="token punctuation">[</span><span class="token string">'items'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  {
    key<span class="token punctuation">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
    label<span class="token punctuation">:</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>a target<span class="token operator">=</span><span class="token string">"_blank"</span> rel<span class="token operator">=</span><span class="token string">"noopener noreferrer"</span> href<span class="token operator">=</span><span class="token string">"https://www.antgroup.com"</span><span class="token operator">></span>
        1st menu item
      <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
  {
    key<span class="token punctuation">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
    label<span class="token punctuation">:</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>a target<span class="token operator">=</span><span class="token string">"_blank"</span> rel<span class="token operator">=</span><span class="token string">"noopener noreferrer"</span> href<span class="token operator">=</span><span class="token string">"https://www.aliyun.com"</span><span class="token operator">></span>
        2nd menu item <span class="token punctuation">(</span>disabled<span class="token punctuation">)</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>SmileOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
    disabled<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
  {
    key<span class="token punctuation">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
    label<span class="token punctuation">:</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>a target<span class="token operator">=</span><span class="token string">"_blank"</span> rel<span class="token operator">=</span><span class="token string">"noopener noreferrer"</span> href<span class="token operator">=</span><span class="token string">"https://www.luohanacademy.com"</span><span class="token operator">></span>
        3rd menu item <span class="token punctuation">(</span>disabled<span class="token punctuation">)</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    disabled<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
  {
    key<span class="token punctuation">:</span> <span class="token string">'4'</span><span class="token punctuation">,</span>
    danger<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    label<span class="token punctuation">:</span> <span class="token string">'a danger item'</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Dropdown menu<span class="token operator">=</span>{{ items }}<span class="token operator">></span>
    <span class="token operator">&lt;</span>a onClick<span class="token operator">=</span>{e <span class="token operator">=</span><span class="token operator">></span> e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>}<span class="token operator">></span>
      <span class="token operator">&lt;</span>Space<span class="token operator">></span>
        Hover me
        <span class="token operator">&lt;</span>DownOutlined <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Space<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> DownOutlined<span class="token punctuation">,</span> SmileOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> MenuProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Dropdown<span class="token punctuation">,</span> Space <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> items<span class="token operator">:</span> MenuProps<span class="token punctuation">[</span><span class="token string">'items'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    key<span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.antgroup.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        1st menu item
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    key<span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.aliyun.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        2nd menu <span class="token function">item</span> <span class="token punctuation">(</span>disabled<span class="token punctuation">)</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">SmileOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
    disabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    key<span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.luohanacademy.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        3rd menu <span class="token function">item</span> <span class="token punctuation">(</span>disabled<span class="token punctuation">)</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    disabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    key<span class="token operator">:</span> <span class="token string">'4'</span><span class="token punctuation">,</span>
    danger<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">'a danger item'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> items <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>e <span class="token operator">=></span> e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
        Hover me
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DownOutlined</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> DownOutlined<span class="token punctuation">,</span> SmileOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Dropdown<span class="token punctuation">,</span> Space <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.antgroup.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        1st menu item
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.aliyun.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        2nd menu <span class="token function">item</span> <span class="token punctuation">(</span>disabled<span class="token punctuation">)</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">SmileOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
    <span class="token literal-property property">disabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.luohanacademy.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        3rd menu <span class="token function">item</span> <span class="token punctuation">(</span>disabled<span class="token punctuation">)</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">disabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'4'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">danger</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'a danger item'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span>
    <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
      items<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
        Hover me
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DownOutlined</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var d=n(0),O=n(64),t=n(68),s=n(12),a=e(n(0));function e(l){return l&&l.__esModule?l:{default:l}}var c=[{key:"1",label:a.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.antgroup.com"},"1st menu item")},{key:"2",label:a.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.aliyun.com"},"2nd menu item (disabled)"),icon:a.default.createElement(t.SmileOutlined,null),disabled:!0},{key:"3",label:a.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.luohanacademy.com"},"3rd menu item (disabled)"),disabled:!0},{key:"4",danger:!0,label:"a danger item"}],w=function(){return a.default.createElement(s.Dropdown,{menu:{items:c}},a.default.createElement("a",{onClick:function(b){return b.preventDefault()}},a.default.createElement(s.Space,null,"Hover me",a.default.createElement(t.DownOutlined,null))))},u=w;return d.createElement(u)}}},4440:function(g,C,n){g.exports={content:{"zh-CN":[["p","\u9ED8\u8BA4\u662F\u79FB\u5165\u89E6\u53D1\u83DC\u5355\uFF0C\u53EF\u4EE5\u70B9\u51FB\u9F20\u6807\u53F3\u952E\u89E6\u53D1\u3002"]],"en-US":[["p","The default trigger mode is ",["code","hover"],", you can change it to ",["code","contextMenu"],"."]]},meta:{order:10,title:{"zh-CN":"\u53F3\u952E\u83DC\u5355","en-US":"Context Menu"},filename:"components/dropdown/demo/context-menu.md",id:"components-dropdown-demo-context-menu"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import type { MenuProps } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import { Dropdown } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> items<span class="token punctuation">:</span> MenuProps<span class="token punctuation">[</span><span class="token string">'items'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  {
    label<span class="token punctuation">:</span> <span class="token string">'1st menu item'</span><span class="token punctuation">,</span>
    key<span class="token punctuation">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
  {
    label<span class="token punctuation">:</span> <span class="token string">'2nd menu item'</span><span class="token punctuation">,</span>
    key<span class="token punctuation">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
  {
    label<span class="token punctuation">:</span> <span class="token string">'3rd menu item'</span><span class="token punctuation">,</span>
    key<span class="token punctuation">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Dropdown menu<span class="token operator">=</span>{{ items }} trigger<span class="token operator">=</span>{<span class="token punctuation">[</span><span class="token string">'contextMenu'</span><span class="token punctuation">]</span>}<span class="token operator">></span>
    <span class="token operator">&lt;</span>div
      className<span class="token operator">=</span><span class="token string">"site-dropdown-context-menu"</span>
      style<span class="token operator">=</span>{{
        textAlign<span class="token punctuation">:</span> <span class="token string">'center'</span><span class="token punctuation">,</span>
        height<span class="token punctuation">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
        lineHeight<span class="token punctuation">:</span> <span class="token string">'200px'</span><span class="token punctuation">,</span>
      }}
    <span class="token operator">></span>
      Right Click on here
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> type <span class="token punctuation">{</span> MenuProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Dropdown <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> items<span class="token operator">:</span> MenuProps<span class="token punctuation">[</span><span class="token string">'items'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    label<span class="token operator">:</span> <span class="token string">'1st menu item'</span><span class="token punctuation">,</span>
    key<span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    label<span class="token operator">:</span> <span class="token string">'2nd menu item'</span><span class="token punctuation">,</span>
    key<span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    label<span class="token operator">:</span> <span class="token string">'3rd menu item'</span><span class="token punctuation">,</span>
    key<span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> items <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">trigger</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'contextMenu'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
      <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>site-dropdown-context-menu<span class="token punctuation">"</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        textAlign<span class="token operator">:</span> <span class="token string">'center'</span><span class="token punctuation">,</span>
        height<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
        lineHeight<span class="token operator">:</span> <span class="token string">'200px'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">></span></span>
      Right Click on here
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Dropdown <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'1st menu item'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'2nd menu item'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'3rd menu item'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span>
    <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
      items<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">trigger</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'contextMenu'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
      <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>site-dropdown-context-menu<span class="token punctuation">"</span></span>
      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        <span class="token literal-property property">textAlign</span><span class="token operator">:</span> <span class="token string">'center'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
        <span class="token literal-property property">lineHeight</span><span class="token operator">:</span> <span class="token string">'200px'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">></span></span>
      Right Click on here
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var d=n(0),O=n(64),t=n(12),s=a(n(0));function a(u){return u&&u.__esModule?u:{default:u}}var e=[{label:"1st menu item",key:"1"},{label:"2nd menu item",key:"2"},{label:"3rd menu item",key:"3"}],c=function(){return s.default.createElement(t.Dropdown,{menu:{items:e},trigger:["contextMenu"]},s.default.createElement("div",{className:"site-dropdown-context-menu",style:{textAlign:"center",height:200,lineHeight:"200px"}},"Right Click on here"))},w=c;return d.createElement(w)},style:`.site-dropdown-context-menu {
  color: #777;
  background: #f7f7f7;
}
  [data-theme="dark"] .site-dropdown-context-menu {
    background: #141414;
    color: rgba(255,255,255,.65);
  }
`,highlightedStyle:`<span class="token selector"><span class="token class">.site-dropdown-context-menu</span> </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token hexcode">#777</span><span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token hexcode">#f7f7f7</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>`}},4441:function(g,C,n){g.exports={content:{"zh-CN":[["p","\u4F7F\u7528 ",["code","dropdownRender"]," \u5BF9\u4E0B\u62C9\u83DC\u5355\u8FDB\u884C\u81EA\u7531\u6269\u5C55\u3002\u5982\u679C\u4F60\u5E76\u4E0D\u9700\u8981 Menu \u5185\u5BB9\uFF0C\u8BF7\u76F4\u63A5\u4F7F\u7528 Popover \u7EC4\u4EF6\u3002"]],"en-US":[["p","Customize the dropdown menu via ",["code","dropdownRender"],". If you don't need the Menu content, use the Popover component directly."]]},meta:{order:8,title:{"zh-CN":"\u6269\u5C55\u83DC\u5355","en-US":"Custom dropdown"},filename:"components/dropdown/demo/custom-dropdown.md",id:"components-dropdown-demo-custom-dropdown"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { DownOutlined } from <span class="token string">'@ant-design/icons'</span><span class="token comment" spellcheck="true">;</span>
import type { MenuProps } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import { Dropdown<span class="token punctuation">,</span> Space<span class="token punctuation">,</span> Divider<span class="token punctuation">,</span> Button } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> items<span class="token punctuation">:</span> MenuProps<span class="token punctuation">[</span><span class="token string">'items'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  {
    key<span class="token punctuation">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
    label<span class="token punctuation">:</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>a target<span class="token operator">=</span><span class="token string">"_blank"</span> rel<span class="token operator">=</span><span class="token string">"noopener noreferrer"</span> href<span class="token operator">=</span><span class="token string">"https://www.antgroup.com"</span><span class="token operator">></span>
        1st menu item
      <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
  {
    key<span class="token punctuation">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
    label<span class="token punctuation">:</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>a target<span class="token operator">=</span><span class="token string">"_blank"</span> rel<span class="token operator">=</span><span class="token string">"noopener noreferrer"</span> href<span class="token operator">=</span><span class="token string">"https://www.aliyun.com"</span><span class="token operator">></span>
        2nd menu item <span class="token punctuation">(</span>disabled<span class="token punctuation">)</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    disabled<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
  {
    key<span class="token punctuation">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
    label<span class="token punctuation">:</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>a target<span class="token operator">=</span><span class="token string">"_blank"</span> rel<span class="token operator">=</span><span class="token string">"noopener noreferrer"</span> href<span class="token operator">=</span><span class="token string">"https://www.luohanacademy.com"</span><span class="token operator">></span>
        3rd menu item <span class="token punctuation">(</span>disabled<span class="token punctuation">)</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    disabled<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Dropdown
    menu<span class="token operator">=</span>{{ items }}
    dropdownRender<span class="token operator">=</span>{menu <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"dropdown-content"</span><span class="token operator">></span>
        {menu}
        <span class="token operator">&lt;</span>Divider style<span class="token operator">=</span>{{ margin<span class="token punctuation">:</span> <span class="token number">0</span> }} <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>Space style<span class="token operator">=</span>{{ padding<span class="token punctuation">:</span> <span class="token number">8</span> }}<span class="token operator">></span>
          <span class="token operator">&lt;</span>Button type<span class="token operator">=</span><span class="token string">"primary"</span><span class="token operator">></span>Click me!<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Space<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span>}
  <span class="token operator">></span>
    <span class="token operator">&lt;</span>a onClick<span class="token operator">=</span>{e <span class="token operator">=</span><span class="token operator">></span> e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>}<span class="token operator">></span>
      <span class="token operator">&lt;</span>Space<span class="token operator">></span>
        Hover me
        <span class="token operator">&lt;</span>DownOutlined <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Space<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> DownOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> MenuProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Dropdown<span class="token punctuation">,</span> Space<span class="token punctuation">,</span> Divider<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> items<span class="token operator">:</span> MenuProps<span class="token punctuation">[</span><span class="token string">'items'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    key<span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.antgroup.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        1st menu item
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    key<span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.aliyun.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        2nd menu <span class="token function">item</span> <span class="token punctuation">(</span>disabled<span class="token punctuation">)</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    disabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    key<span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.luohanacademy.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        3rd menu <span class="token function">item</span> <span class="token punctuation">(</span>disabled<span class="token punctuation">)</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    disabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span>
    <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> items <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">dropdownRender</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu <span class="token operator">=></span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dropdown-content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token punctuation">{</span>menu<span class="token punctuation">}</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Divider</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> margin<span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> padding<span class="token operator">:</span> <span class="token number">8</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Click me<span class="token operator">!</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>e <span class="token operator">=></span> e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
        Hover me
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DownOutlined</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> DownOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Dropdown<span class="token punctuation">,</span> Space<span class="token punctuation">,</span> Divider<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.antgroup.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        1st menu item
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.aliyun.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        2nd menu <span class="token function">item</span> <span class="token punctuation">(</span>disabled<span class="token punctuation">)</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">disabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.luohanacademy.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        3rd menu <span class="token function">item</span> <span class="token punctuation">(</span>disabled<span class="token punctuation">)</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">disabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span>
    <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
      items<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">dropdownRender</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">menu</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dropdown-content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token punctuation">{</span>menu<span class="token punctuation">}</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Divider</span></span>
          <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
            <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span>
          <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
            <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Click me<span class="token operator">!</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
        Hover me
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DownOutlined</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var d=n(0),O=n(64),t=n(68),s=n(12),a=e(n(0));function e(l){return l&&l.__esModule?l:{default:l}}var c=[{key:"1",label:a.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.antgroup.com"},"1st menu item")},{key:"2",label:a.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.aliyun.com"},"2nd menu item (disabled)"),disabled:!0},{key:"3",label:a.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.luohanacademy.com"},"3rd menu item (disabled)"),disabled:!0}],w=function(){return a.default.createElement(s.Dropdown,{menu:{items:c},dropdownRender:function(b){return a.default.createElement("div",{className:"dropdown-content"},b,a.default.createElement(s.Divider,{style:{margin:0}}),a.default.createElement(s.Space,{style:{padding:8}},a.default.createElement(s.Button,{type:"primary"},"Click me!")))}},a.default.createElement("a",{onClick:function(b){return b.preventDefault()}},a.default.createElement(s.Space,null,"Hover me",a.default.createElement(t.DownOutlined,null))))},u=w;return d.createElement(u)},style:`.dropdown-content {
  background: #fff;
  box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%),
    0 9px 28px 8px rgb(0 0 0 / 5%);
}
.dropdown-content .ant-dropdown-menu {
  box-shadow: none;
}
[data-theme="dark"] .head-example {
  background: #1f1f1f;
}
`,highlightedStyle:`<span class="token selector"><span class="token class">.dropdown-content</span> </span><span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token hexcode">#fff</span><span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> <span class="token number">0</span> <span class="token number">3</span>px <span class="token number">6</span>px -<span class="token number">4</span>px <span class="token function">rgb</span><span class="token punctuation">(</span><span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> / <span class="token number">12%</span><span class="token punctuation">)</span>, <span class="token number">0</span> <span class="token number">6</span>px <span class="token number">16</span>px <span class="token number">0</span> <span class="token function">rgb</span><span class="token punctuation">(</span><span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> / <span class="token number">8%</span><span class="token punctuation">)</span>,
    <span class="token number">0</span> <span class="token number">9</span>px <span class="token number">28</span>px <span class="token number">8</span>px <span class="token function">rgb</span><span class="token punctuation">(</span><span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> / <span class="token number">5%</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector"><span class="token class">.dropdown-content</span> <span class="token class">.ant-dropdown-menu</span> </span><span class="token punctuation">{</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>`}},4442:function(g,C,n){g.exports={content:{"zh-CN":[["p","\u6700\u7B80\u5355\u7684\u4E0B\u62C9\u83DC\u5355\u3002"]],"en-US":[["p","The most basic dropdown menu."]]},meta:{order:-1,title:{"zh-CN":"\u57FA\u7840\u7528\u6CD5\uFF08\u5E9F\u5F03\u7684\u8BED\u6CD5\u7CD6\uFF09","en-US":"Basic usage (deprecated syntactic sugar)"},version:"< 4.24.0",filename:"components/dropdown/demo/deprecated.md",id:"components-dropdown-demo-deprecated"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { DownOutlined<span class="token punctuation">,</span> SmileOutlined } from <span class="token string">'@ant-design/icons'</span><span class="token comment" spellcheck="true">;</span>
import { Dropdown<span class="token punctuation">,</span> Menu<span class="token punctuation">,</span> Space } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> menu <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Menu
    items<span class="token operator">=</span>{<span class="token punctuation">[</span>
      {
        key<span class="token punctuation">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>a target<span class="token operator">=</span><span class="token string">"_blank"</span> rel<span class="token operator">=</span><span class="token string">"noopener noreferrer"</span> href<span class="token operator">=</span><span class="token string">"https://www.antgroup.com"</span><span class="token operator">></span>
            1st menu item
          <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        key<span class="token punctuation">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>a target<span class="token operator">=</span><span class="token string">"_blank"</span> rel<span class="token operator">=</span><span class="token string">"noopener noreferrer"</span> href<span class="token operator">=</span><span class="token string">"https://www.aliyun.com"</span><span class="token operator">></span>
            2nd menu item <span class="token punctuation">(</span>disabled<span class="token punctuation">)</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
        icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>SmileOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
        disabled<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        key<span class="token punctuation">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>a target<span class="token operator">=</span><span class="token string">"_blank"</span> rel<span class="token operator">=</span><span class="token string">"noopener noreferrer"</span> href<span class="token operator">=</span><span class="token string">"https://www.luohanacademy.com"</span><span class="token operator">></span>
            3rd menu item <span class="token punctuation">(</span>disabled<span class="token punctuation">)</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
        disabled<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        key<span class="token punctuation">:</span> <span class="token string">'4'</span><span class="token punctuation">,</span>
        danger<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token string">'a danger item'</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
    <span class="token punctuation">]</span>}
  <span class="token operator">/</span><span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Dropdown overlay<span class="token operator">=</span>{menu}<span class="token operator">></span>
    <span class="token operator">&lt;</span>a onClick<span class="token operator">=</span>{e <span class="token operator">=</span><span class="token operator">></span> e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>}<span class="token operator">></span>
      <span class="token operator">&lt;</span>Space<span class="token operator">></span>
        Hover me
        <span class="token operator">&lt;</span>DownOutlined <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Space<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> DownOutlined<span class="token punctuation">,</span> SmileOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Dropdown<span class="token punctuation">,</span> Menu<span class="token punctuation">,</span> Space <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> menu <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu</span></span>
    <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        key<span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.antgroup.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            1st menu item
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        key<span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.aliyun.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            2nd menu <span class="token function">item</span> <span class="token punctuation">(</span>disabled<span class="token punctuation">)</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
        icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">SmileOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
        disabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        key<span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.luohanacademy.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            3rd menu <span class="token function">item</span> <span class="token punctuation">(</span>disabled<span class="token punctuation">)</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
        disabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        key<span class="token operator">:</span> <span class="token string">'4'</span><span class="token punctuation">,</span>
        danger<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token string">'a danger item'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>e <span class="token operator">=></span> e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
        Hover me
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DownOutlined</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> DownOutlined<span class="token punctuation">,</span> SmileOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Dropdown<span class="token punctuation">,</span> Menu<span class="token punctuation">,</span> Space <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> menu <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu</span></span>
    <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.antgroup.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            1st menu item
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.aliyun.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            2nd menu <span class="token function">item</span> <span class="token punctuation">(</span>disabled<span class="token punctuation">)</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">SmileOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">disabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.luohanacademy.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            3rd menu <span class="token function">item</span> <span class="token punctuation">(</span>disabled<span class="token punctuation">)</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">disabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'4'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">danger</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'a danger item'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
        Hover me
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DownOutlined</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var d=n(0),O=n(64),t=n(68),s=n(12),a=e(n(0));function e(l){return l&&l.__esModule?l:{default:l}}var c=a.default.createElement(s.Menu,{items:[{key:"1",label:a.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.antgroup.com"},"1st menu item")},{key:"2",label:a.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.aliyun.com"},"2nd menu item (disabled)"),icon:a.default.createElement(t.SmileOutlined,null),disabled:!0},{key:"3",label:a.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.luohanacademy.com"},"3rd menu item (disabled)"),disabled:!0},{key:"4",danger:!0,label:"a danger item"}]}),w=function(){return a.default.createElement(s.Dropdown,{overlay:c},a.default.createElement("a",{onClick:function(b){return b.preventDefault()}},a.default.createElement(s.Space,null,"Hover me",a.default.createElement(t.DownOutlined,null))))},u=w;return d.createElement(u)}}},4443:function(g,C,n){g.exports={content:{"zh-CN":[["p","\u5DE6\u8FB9\u662F\u6309\u94AE\uFF0C\u53F3\u8FB9\u662F\u989D\u5916\u7684\u76F8\u5173\u529F\u80FD\u83DC\u5355\u3002\u53EF\u8BBE\u7F6E ",["code","icon"]," \u5C5E\u6027\u6765\u4FEE\u6539\u53F3\u8FB9\u7684\u56FE\u6807\u3002"]],"en-US":[["p","A button is on the left, and a related functional menu is on the right. You can set the icon property to modify the icon of right."]]},meta:{order:7,title:{"zh-CN":"\u5E26\u4E0B\u62C9\u6846\u7684\u6309\u94AE","en-US":"Button with dropdown menu"},filename:"components/dropdown/demo/dropdown-button.md",id:"components-dropdown-demo-dropdown-button"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { DownOutlined<span class="token punctuation">,</span> UserOutlined } from <span class="token string">'@ant-design/icons'</span><span class="token comment" spellcheck="true">;</span>
import type { MenuProps } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import { Button<span class="token punctuation">,</span> Dropdown<span class="token punctuation">,</span> message<span class="token punctuation">,</span> Space<span class="token punctuation">,</span> Tooltip } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> handleButtonClick <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">:</span> React<span class="token punctuation">.</span>MouseEvent<span class="token operator">&lt;</span>HTMLButtonElement<span class="token operator">></span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  message<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'Click on left button.'</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'click left button'</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> handleMenuClick<span class="token punctuation">:</span> MenuProps<span class="token punctuation">[</span><span class="token string">'onClick'</span><span class="token punctuation">]</span> <span class="token operator">=</span> e <span class="token operator">=</span><span class="token operator">></span> {
  message<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'Click on menu item.'</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> items<span class="token punctuation">:</span> MenuProps<span class="token punctuation">[</span><span class="token string">'items'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  {
    label<span class="token punctuation">:</span> <span class="token string">'1st menu item'</span><span class="token punctuation">,</span>
    key<span class="token punctuation">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
    icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>UserOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
  {
    label<span class="token punctuation">:</span> <span class="token string">'2nd menu item'</span><span class="token punctuation">,</span>
    key<span class="token punctuation">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
    icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>UserOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
  {
    label<span class="token punctuation">:</span> <span class="token string">'3rd menu item'</span><span class="token punctuation">,</span>
    key<span class="token punctuation">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
    icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>UserOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> menuProps <span class="token operator">=</span> {
  items<span class="token punctuation">,</span>
  onClick<span class="token punctuation">:</span> handleMenuClick<span class="token punctuation">,</span>
}<span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Space wrap<span class="token operator">></span>
    <span class="token operator">&lt;</span>Dropdown<span class="token punctuation">.</span>Button menu<span class="token operator">=</span>{menuProps} onClick<span class="token operator">=</span>{handleButtonClick}<span class="token operator">></span>
      Dropdown
    <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token punctuation">.</span>Button<span class="token operator">></span>
    <span class="token operator">&lt;</span>Dropdown<span class="token punctuation">.</span>Button menu<span class="token operator">=</span>{menuProps} placement<span class="token operator">=</span><span class="token string">"bottom"</span> icon<span class="token operator">=</span>{<span class="token operator">&lt;</span>UserOutlined <span class="token operator">/</span><span class="token operator">></span>}<span class="token operator">></span>
      Dropdown
    <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token punctuation">.</span>Button<span class="token operator">></span>
    <span class="token operator">&lt;</span>Dropdown<span class="token punctuation">.</span>Button menu<span class="token operator">=</span>{menuProps} onClick<span class="token operator">=</span>{handleButtonClick} disabled<span class="token operator">></span>
      Dropdown
    <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token punctuation">.</span>Button<span class="token operator">></span>
    <span class="token operator">&lt;</span>Dropdown<span class="token punctuation">.</span>Button
      menu<span class="token operator">=</span>{menuProps}
      buttonsRender<span class="token operator">=</span>{<span class="token punctuation">(</span><span class="token punctuation">[</span>leftButton<span class="token punctuation">,</span> rightButton<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">[</span>
        <span class="token operator">&lt;</span>Tooltip title<span class="token operator">=</span><span class="token string">"tooltip"</span> key<span class="token operator">=</span><span class="token string">"leftButton"</span><span class="token operator">></span>
          {leftButton}
        <span class="token operator">&lt;</span><span class="token operator">/</span>Tooltip<span class="token operator">></span><span class="token punctuation">,</span>
        React<span class="token punctuation">.</span><span class="token function">cloneElement</span><span class="token punctuation">(</span>rightButton as React<span class="token punctuation">.</span>ReactElement<span class="token operator">&lt;</span>any<span class="token punctuation">,</span> string<span class="token operator">></span><span class="token punctuation">,</span> { loading<span class="token punctuation">:</span> <span class="token boolean">true</span> }<span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span>}
    <span class="token operator">></span>
      <span class="token keyword">With</span> Tooltip
    <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token punctuation">.</span>Button<span class="token operator">></span>
    <span class="token operator">&lt;</span>Dropdown menu<span class="token operator">=</span>{menuProps}<span class="token operator">></span>
      <span class="token operator">&lt;</span>Button<span class="token operator">></span>
        <span class="token operator">&lt;</span>Space<span class="token operator">></span>
          Button
          <span class="token operator">&lt;</span>DownOutlined <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Space<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token operator">></span>
    <span class="token operator">&lt;</span>Dropdown<span class="token punctuation">.</span>Button menu<span class="token operator">=</span>{menuProps} onClick<span class="token operator">=</span>{handleButtonClick} danger<span class="token operator">></span>
      Danger
    <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token punctuation">.</span>Button<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Space<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> DownOutlined<span class="token punctuation">,</span> UserOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> MenuProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Dropdown<span class="token punctuation">,</span> message<span class="token punctuation">,</span> Space<span class="token punctuation">,</span> Tooltip <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">handleButtonClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token operator">:</span> React<span class="token punctuation">.</span>MouseEvent<span class="token operator">&lt;</span>HTMLButtonElement<span class="token operator">></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  message<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'Click on left button.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'click left button'</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> handleMenuClick<span class="token operator">:</span> MenuProps<span class="token punctuation">[</span><span class="token string">'onClick'</span><span class="token punctuation">]</span> <span class="token operator">=</span> e <span class="token operator">=></span> <span class="token punctuation">{</span>
  message<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'Click on menu item.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> items<span class="token operator">:</span> MenuProps<span class="token punctuation">[</span><span class="token string">'items'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    label<span class="token operator">:</span> <span class="token string">'1st menu item'</span><span class="token punctuation">,</span>
    key<span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
    icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">UserOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    label<span class="token operator">:</span> <span class="token string">'2nd menu item'</span><span class="token punctuation">,</span>
    key<span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
    icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">UserOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    label<span class="token operator">:</span> <span class="token string">'3rd menu item'</span><span class="token punctuation">,</span>
    key<span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
    icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">UserOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> menuProps <span class="token operator">=</span> <span class="token punctuation">{</span>
  items<span class="token punctuation">,</span>
  onClick<span class="token operator">:</span> handleMenuClick<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span> <span class="token attr-name">wrap</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown.Button</span></span> <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menuProps<span class="token punctuation">}</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleButtonClick<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      Dropdown
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown.Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown.Button</span></span> <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menuProps<span class="token punctuation">}</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottom<span class="token punctuation">"</span></span> <span class="token attr-name">icon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">UserOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      Dropdown
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown.Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown.Button</span></span> <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menuProps<span class="token punctuation">}</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleButtonClick<span class="token punctuation">}</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>
      Dropdown
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown.Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown.Button</span></span>
      <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menuProps<span class="token punctuation">}</span></span>
      <span class="token attr-name">buttonsRender</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">[</span>leftButton<span class="token punctuation">,</span> rightButton<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">[</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tooltip</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tooltip<span class="token punctuation">"</span></span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>leftButton<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token punctuation">{</span>leftButton<span class="token punctuation">}</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tooltip</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
        React<span class="token punctuation">.</span><span class="token function">cloneElement</span><span class="token punctuation">(</span>rightButton <span class="token keyword">as</span> React<span class="token punctuation">.</span>ReactElement<span class="token operator">&lt;</span>any<span class="token punctuation">,</span> string<span class="token operator">></span><span class="token punctuation">,</span> <span class="token punctuation">{</span> loading<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">></span></span>
      With Tooltip
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown.Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menuProps<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
          Button
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DownOutlined</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown.Button</span></span> <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menuProps<span class="token punctuation">}</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleButtonClick<span class="token punctuation">}</span></span> <span class="token attr-name">danger</span><span class="token punctuation">></span></span>
      Danger
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown.Button</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> DownOutlined<span class="token punctuation">,</span> UserOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Dropdown<span class="token punctuation">,</span> message<span class="token punctuation">,</span> Space<span class="token punctuation">,</span> Tooltip <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleButtonClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  message<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'Click on left button.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'click left button'</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleMenuClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  message<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'Click on menu item.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'1st menu item'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">UserOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'2nd menu item'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">UserOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'3rd menu item'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">UserOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> menuProps <span class="token operator">=</span> <span class="token punctuation">{</span>
  items<span class="token punctuation">,</span>
  <span class="token literal-property property">onClick</span><span class="token operator">:</span> handleMenuClick<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span> <span class="token attr-name">wrap</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown.Button</span></span> <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menuProps<span class="token punctuation">}</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleButtonClick<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      Dropdown
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown.Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown.Button</span></span> <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menuProps<span class="token punctuation">}</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottom<span class="token punctuation">"</span></span> <span class="token attr-name">icon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">UserOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      Dropdown
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown.Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown.Button</span></span> <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menuProps<span class="token punctuation">}</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleButtonClick<span class="token punctuation">}</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>
      Dropdown
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown.Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown.Button</span></span>
      <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menuProps<span class="token punctuation">}</span></span>
      <span class="token attr-name">buttonsRender</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>leftButton<span class="token punctuation">,</span> rightButton<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">[</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tooltip</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tooltip<span class="token punctuation">"</span></span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>leftButton<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token punctuation">{</span>leftButton<span class="token punctuation">}</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tooltip</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
        React<span class="token punctuation">.</span><span class="token function">cloneElement</span><span class="token punctuation">(</span>rightButton<span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">loading</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
    <span class="token punctuation">></span></span>
      With Tooltip
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown.Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menuProps<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
          Button
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DownOutlined</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown.Button</span></span> <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menuProps<span class="token punctuation">}</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleButtonClick<span class="token punctuation">}</span></span> <span class="token attr-name">danger</span><span class="token punctuation">></span></span>
      Danger
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown.Button</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var d=n(0),O=n(64),t=n(68),s=n(12),a=e(n(0));function e(o){return o&&o.__esModule?o:{default:o}}function c(o,m){return b(o)||y(o,m)||u(o,m)||w()}function w(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function u(o,m){if(!!o){if(typeof o=="string")return l(o,m);var f=Object.prototype.toString.call(o).slice(8,-1);if(f==="Object"&&o.constructor&&(f=o.constructor.name),f==="Map"||f==="Set")return Array.from(o);if(f==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f))return l(o,m)}}function l(o,m){(m==null||m>o.length)&&(m=o.length);for(var f=0,p=new Array(m);f<m;f++)p[f]=o[f];return p}function y(o,m){var f=o==null?null:typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(f!=null){var p=[],r=!0,i=!1,v,D;try{for(f=f.call(o);!(r=(v=f.next()).done)&&(p.push(v.value),!(m&&p.length===m));r=!0);}catch(R){i=!0,D=R}finally{try{!r&&f.return!=null&&f.return()}finally{if(i)throw D}}return p}}function b(o){if(Array.isArray(o))return o}var B=function(m){s.message.info("Click on left button."),console.log("click left button",m)},M=function(m){s.message.info("Click on menu item."),console.log("click",m)},E=[{label:"1st menu item",key:"1",icon:a.default.createElement(t.UserOutlined,null)},{label:"2nd menu item",key:"2",icon:a.default.createElement(t.UserOutlined,null)},{label:"3rd menu item",key:"3",icon:a.default.createElement(t.UserOutlined,null)}],x={items:E,onClick:M},k=function(){return a.default.createElement(s.Space,{wrap:!0},a.default.createElement(s.Dropdown.Button,{menu:x,onClick:B},"Dropdown"),a.default.createElement(s.Dropdown.Button,{menu:x,placement:"bottom",icon:a.default.createElement(t.UserOutlined,null)},"Dropdown"),a.default.createElement(s.Dropdown.Button,{menu:x,onClick:B,disabled:!0},"Dropdown"),a.default.createElement(s.Dropdown.Button,{menu:x,buttonsRender:function(f){var p=c(f,2),r=p[0],i=p[1];return[a.default.createElement(s.Tooltip,{title:"tooltip",key:"leftButton"},r),a.default.cloneElement(i,{loading:!0})]}},"With Tooltip"),a.default.createElement(s.Dropdown,{menu:x},a.default.createElement(s.Button,null,a.default.createElement(s.Space,null,"Button",a.default.createElement(t.DownOutlined,null)))),a.default.createElement(s.Dropdown.Button,{menu:x,onClick:B,danger:!0},"Danger"))},h=k;return d.createElement(h)}}},4444:function(g,C,n){g.exports={content:{"zh-CN":[["p","\u70B9\u51FB\u83DC\u5355\u9879\u540E\u4F1A\u89E6\u53D1\u4E8B\u4EF6\uFF0C\u7528\u6237\u53EF\u4EE5\u901A\u8FC7\u76F8\u5E94\u7684\u83DC\u5355\u9879 key \u8FDB\u884C\u4E0D\u540C\u7684\u64CD\u4F5C\u3002"]],"en-US":[["p","An event will be triggered when you click menu items, in which you can make different operations according to item's key."]]},meta:{order:6,title:{"zh-CN":"\u89E6\u53D1\u4E8B\u4EF6","en-US":"Click event"},filename:"components/dropdown/demo/event.md",id:"components-dropdown-demo-event"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { DownOutlined } from <span class="token string">'@ant-design/icons'</span><span class="token comment" spellcheck="true">;</span>
import type { MenuProps } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import { Dropdown<span class="token punctuation">,</span> message<span class="token punctuation">,</span> Space } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> onClick<span class="token punctuation">:</span> MenuProps<span class="token punctuation">[</span><span class="token string">'onClick'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>{ key }<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  message<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>\`Click on item \${key}\`<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> items<span class="token punctuation">:</span> MenuProps<span class="token punctuation">[</span><span class="token string">'items'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  {
    label<span class="token punctuation">:</span> <span class="token string">'1st menu item'</span><span class="token punctuation">,</span>
    key<span class="token punctuation">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
  {
    label<span class="token punctuation">:</span> <span class="token string">'2nd menu item'</span><span class="token punctuation">,</span>
    key<span class="token punctuation">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
  {
    label<span class="token punctuation">:</span> <span class="token string">'3rd menu item'</span><span class="token punctuation">,</span>
    key<span class="token punctuation">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Dropdown menu<span class="token operator">=</span>{{ items<span class="token punctuation">,</span> onClick }}<span class="token operator">></span>
    <span class="token operator">&lt;</span>a onClick<span class="token operator">=</span>{e <span class="token operator">=</span><span class="token operator">></span> e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>}<span class="token operator">></span>
      <span class="token operator">&lt;</span>Space<span class="token operator">></span>
        Hover me<span class="token punctuation">,</span> Click menu item
        <span class="token operator">&lt;</span>DownOutlined <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Space<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> DownOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> MenuProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Dropdown<span class="token punctuation">,</span> message<span class="token punctuation">,</span> Space <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> onClick<span class="token operator">:</span> MenuProps<span class="token punctuation">[</span><span class="token string">'onClick'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> key <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  message<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Click on item </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> items<span class="token operator">:</span> MenuProps<span class="token punctuation">[</span><span class="token string">'items'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    label<span class="token operator">:</span> <span class="token string">'1st menu item'</span><span class="token punctuation">,</span>
    key<span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    label<span class="token operator">:</span> <span class="token string">'2nd menu item'</span><span class="token punctuation">,</span>
    key<span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    label<span class="token operator">:</span> <span class="token string">'3rd menu item'</span><span class="token punctuation">,</span>
    key<span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> items<span class="token punctuation">,</span> onClick <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>e <span class="token operator">=></span> e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
        Hover me<span class="token punctuation">,</span> Click menu item
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DownOutlined</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> DownOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Dropdown<span class="token punctuation">,</span> message<span class="token punctuation">,</span> Space <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">onClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> key <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  message<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Click on item </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'1st menu item'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'2nd menu item'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'3rd menu item'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span>
    <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
      items<span class="token punctuation">,</span>
      onClick<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
        Hover me<span class="token punctuation">,</span> Click menu item
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DownOutlined</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var d=n(0),O=n(64),t=n(68),s=n(12),a=e(n(0));function e(y){return y&&y.__esModule?y:{default:y}}var c=function(b){var B=b.key;s.message.info("Click on item ".concat(B))},w=[{label:"1st menu item",key:"1"},{label:"2nd menu item",key:"2"},{label:"3rd menu item",key:"3"}],u=function(){return a.default.createElement(s.Dropdown,{menu:{items:w,onClick:c}},a.default.createElement("a",{onClick:function(B){return B.preventDefault()}},a.default.createElement(s.Space,null,"Hover me, Click menu item",a.default.createElement(t.DownOutlined,null))))},l=u;return d.createElement(l)}}},4445:function(g,C,n){g.exports={content:{"zh-CN":[["p","\u5206\u5272\u7EBF\u548C\u4E0D\u53EF\u7528\u83DC\u5355\u9879\u3002"]],"en-US":[["p","Divider and disabled menu item."]]},meta:{order:3,title:{"zh-CN":"\u5176\u4ED6\u5143\u7D20","en-US":"Other elements"},filename:"components/dropdown/demo/item.md",id:"components-dropdown-demo-item"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { DownOutlined } from <span class="token string">'@ant-design/icons'</span><span class="token comment" spellcheck="true">;</span>
import type { MenuProps } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import { Dropdown<span class="token punctuation">,</span> Space } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> items<span class="token punctuation">:</span> MenuProps<span class="token punctuation">[</span><span class="token string">'items'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  {
    label<span class="token punctuation">:</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>a target<span class="token operator">=</span><span class="token string">"_blank"</span> rel<span class="token operator">=</span><span class="token string">"noopener noreferrer"</span> href<span class="token operator">=</span><span class="token string">"https://www.antgroup.com"</span><span class="token operator">></span>
        1st menu item
      <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    key<span class="token punctuation">:</span> <span class="token string">'0'</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
  {
    label<span class="token punctuation">:</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>a target<span class="token operator">=</span><span class="token string">"_blank"</span> rel<span class="token operator">=</span><span class="token string">"noopener noreferrer"</span> href<span class="token operator">=</span><span class="token string">"https://www.aliyun.com"</span><span class="token operator">></span>
        2nd menu item
      <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    key<span class="token punctuation">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
  {
    type<span class="token punctuation">:</span> <span class="token string">'divider'</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
  {
    label<span class="token punctuation">:</span> <span class="token string">'3rd menu item\uFF08disabled\uFF09'</span><span class="token punctuation">,</span>
    key<span class="token punctuation">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
    disabled<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Dropdown menu<span class="token operator">=</span>{{ items }}<span class="token operator">></span>
    <span class="token operator">&lt;</span>a onClick<span class="token operator">=</span>{e <span class="token operator">=</span><span class="token operator">></span> e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>}<span class="token operator">></span>
      <span class="token operator">&lt;</span>Space<span class="token operator">></span>
        Hover me
        <span class="token operator">&lt;</span>DownOutlined <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Space<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> DownOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> MenuProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Dropdown<span class="token punctuation">,</span> Space <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> items<span class="token operator">:</span> MenuProps<span class="token punctuation">[</span><span class="token string">'items'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    label<span class="token operator">:</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.antgroup.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        1st menu item
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    key<span class="token operator">:</span> <span class="token string">'0'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    label<span class="token operator">:</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.aliyun.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        2nd menu item
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    key<span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">'divider'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    label<span class="token operator">:</span> <span class="token string">'3rd menu item\uFF08disabled\uFF09'</span><span class="token punctuation">,</span>
    key<span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
    disabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> items <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>e <span class="token operator">=></span> e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
        Hover me
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DownOutlined</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> DownOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Dropdown<span class="token punctuation">,</span> Space <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.antgroup.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        1st menu item
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.aliyun.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        2nd menu item
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'divider'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'3rd menu item\uFF08disabled\uFF09'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">disabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span>
    <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
      items<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
        Hover me
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DownOutlined</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var d=n(0),O=n(64),t=n(68),s=n(12),a=e(n(0));function e(l){return l&&l.__esModule?l:{default:l}}var c=[{label:a.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.antgroup.com"},"1st menu item"),key:"0"},{label:a.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.aliyun.com"},"2nd menu item"),key:"1"},{type:"divider"},{label:"3rd menu item\uFF08disabled\uFF09",key:"3",disabled:!0}],w=function(){return a.default.createElement(s.Dropdown,{menu:{items:c}},a.default.createElement("a",{onClick:function(b){return b.preventDefault()}},a.default.createElement(s.Space,null,"Hover me",a.default.createElement(t.DownOutlined,null))))},u=w;return d.createElement(u)}}},4446:function(g,C,n){g.exports={content:{"zh-CN":[["p","\u6DFB\u52A0 ",["code","loading"]," \u5C5E\u6027\u5373\u53EF\u8BA9\u6309\u94AE\u5904\u4E8E\u52A0\u8F7D\u72B6\u6001\uFF0C\u6700\u540E\u4E24\u4E2A\u6309\u94AE\u6F14\u793A\u70B9\u51FB\u540E\u8FDB\u5165\u52A0\u8F7D\u72B6\u6001\u3002"]],"en-US":[["p","A loading indicator can be added to a button by setting the ",["code","loading"]," property on the ",["code","Dropdown.Button"],"."]]},meta:{order:12,title:{"zh-CN":"\u52A0\u8F7D\u4E2D\u72B6\u6001","en-US":"Loading"},filename:"components/dropdown/demo/loading.md",id:"components-dropdown-demo-loading"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { DownOutlined } from <span class="token string">'@ant-design/icons'</span><span class="token comment" spellcheck="true">;</span>
import type { MenuProps } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import { Dropdown<span class="token punctuation">,</span> Space } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React<span class="token punctuation">,</span> { useState } from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> items<span class="token punctuation">:</span> MenuProps<span class="token punctuation">[</span><span class="token string">'items'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  {
    label<span class="token punctuation">:</span> <span class="token string">'Submit and continue'</span><span class="token punctuation">,</span>
    key<span class="token punctuation">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> <span class="token punctuation">[</span>loadings<span class="token punctuation">,</span> setLoadings<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>boolean<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> enterLoading <span class="token operator">=</span> <span class="token punctuation">(</span>index<span class="token punctuation">:</span> number<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    <span class="token function">setLoadings</span><span class="token punctuation">(</span>state <span class="token operator">=</span><span class="token operator">></span> {
      <span class="token keyword">const</span> newLoadings <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>state<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>
      newLoadings<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token comment" spellcheck="true">;</span>
      return newLoadings<span class="token comment" spellcheck="true">;</span>
    }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
      <span class="token function">setLoadings</span><span class="token punctuation">(</span>state <span class="token operator">=</span><span class="token operator">></span> {
        <span class="token keyword">const</span> newLoadings <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>state<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>
        newLoadings<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token comment" spellcheck="true">;</span>
        return newLoadings<span class="token comment" spellcheck="true">;</span>
      }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    }<span class="token punctuation">,</span> <span class="token number">6000</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  return <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Space direction<span class="token operator">=</span><span class="token string">"vertical"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Dropdown<span class="token punctuation">.</span>Button type<span class="token operator">=</span><span class="token string">"primary"</span> loading menu<span class="token operator">=</span>{{ items }}<span class="token operator">></span>
        Submit
      <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token punctuation">.</span>Button<span class="token operator">></span>
      <span class="token operator">&lt;</span>Dropdown<span class="token punctuation">.</span>Button type<span class="token operator">=</span><span class="token string">"primary"</span> size<span class="token operator">=</span><span class="token string">"small"</span> loading menu<span class="token operator">=</span>{{ items }}<span class="token operator">></span>
        Submit
      <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token punctuation">.</span>Button<span class="token operator">></span>
      <span class="token operator">&lt;</span>Dropdown<span class="token punctuation">.</span>Button
        type<span class="token operator">=</span><span class="token string">"primary"</span>
        loading<span class="token operator">=</span>{loadings<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>}
        menu<span class="token operator">=</span>{{ items }}
        onClick<span class="token operator">=</span>{<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">enterLoading</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>}
      <span class="token operator">></span>
        Submit
      <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token punctuation">.</span>Button<span class="token operator">></span>
      <span class="token operator">&lt;</span>Dropdown<span class="token punctuation">.</span>Button
        icon<span class="token operator">=</span>{<span class="token operator">&lt;</span>DownOutlined <span class="token operator">/</span><span class="token operator">></span>}
        loading<span class="token operator">=</span>{loadings<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>}
        menu<span class="token operator">=</span>{{ items }}
        onClick<span class="token operator">=</span>{<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">enterLoading</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>}
      <span class="token operator">></span>
        Submit
      <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token punctuation">.</span>Button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Space<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> DownOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> MenuProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Dropdown<span class="token punctuation">,</span> Space <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> items<span class="token operator">:</span> MenuProps<span class="token punctuation">[</span><span class="token string">'items'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    label<span class="token operator">:</span> <span class="token string">'Submit and continue'</span><span class="token punctuation">,</span>
    key<span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>loadings<span class="token punctuation">,</span> setLoadings<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>boolean<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">enterLoading</span> <span class="token operator">=</span> <span class="token punctuation">(</span>index<span class="token operator">:</span> number<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setLoadings</span><span class="token punctuation">(</span>state <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> newLoadings <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>state<span class="token punctuation">]</span><span class="token punctuation">;</span>
      newLoadings<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> newLoadings<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token function">setLoadings</span><span class="token punctuation">(</span>state <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> newLoadings <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>state<span class="token punctuation">]</span><span class="token punctuation">;</span>
        newLoadings<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> newLoadings<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">6000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown.Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">loading</span> <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> items <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
        Submit
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown.Button</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown.Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token attr-name">loading</span> <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> items <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
        Submit
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown.Button</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown.Button</span></span>
        <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span>
        <span class="token attr-name">loading</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>loadings<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> items <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">enterLoading</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">></span></span>
        Submit
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown.Button</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown.Button</span></span>
        <span class="token attr-name">icon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DownOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span>
        <span class="token attr-name">loading</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>loadings<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> items <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">enterLoading</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">></span></span>
        Submit
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown.Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> DownOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Dropdown<span class="token punctuation">,</span> Space <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Submit and continue'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>loadings<span class="token punctuation">,</span> setLoadings<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">enterLoading</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setLoadings</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> newLoadings <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>state<span class="token punctuation">]</span><span class="token punctuation">;</span>
      newLoadings<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> newLoadings<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token function">setLoadings</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> newLoadings <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>state<span class="token punctuation">]</span><span class="token punctuation">;</span>
        newLoadings<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> newLoadings<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">6000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown.Button</span></span>
        <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span>
        <span class="token attr-name">loading</span>
        <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
          items<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">></span></span>
        Submit
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown.Button</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown.Button</span></span>
        <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span>
        <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span>
        <span class="token attr-name">loading</span>
        <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
          items<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">></span></span>
        Submit
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown.Button</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown.Button</span></span>
        <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span>
        <span class="token attr-name">loading</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>loadings<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
          items<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">enterLoading</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">></span></span>
        Submit
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown.Button</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown.Button</span></span>
        <span class="token attr-name">icon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DownOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span>
        <span class="token attr-name">loading</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>loadings<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
          items<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">enterLoading</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">></span></span>
        Submit
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown.Button</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var d=n(0),O=n(64);function t(p){return t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},t(p)}var s=n(68),a=n(12),e=w(n(0));function c(p){if(typeof WeakMap!="function")return null;var r=new WeakMap,i=new WeakMap;return(c=function(D){return D?i:r})(p)}function w(p,r){if(!r&&p&&p.__esModule)return p;if(p===null||t(p)!=="object"&&typeof p!="function")return{default:p};var i=c(r);if(i&&i.has(p))return i.get(p);var v={},D=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var R in p)if(R!=="default"&&Object.prototype.hasOwnProperty.call(p,R)){var A=D?Object.getOwnPropertyDescriptor(p,R):null;A&&(A.get||A.set)?Object.defineProperty(v,R,A):v[R]=p[R]}return v.default=p,i&&i.set(p,v),v}function u(p){return b(p)||y(p)||E(p)||l()}function l(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function y(p){if(typeof Symbol!="undefined"&&p[Symbol.iterator]!=null||p["@@iterator"]!=null)return Array.from(p)}function b(p){if(Array.isArray(p))return x(p)}function B(p,r){return h(p)||k(p,r)||E(p,r)||M()}function M(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function E(p,r){if(!!p){if(typeof p=="string")return x(p,r);var i=Object.prototype.toString.call(p).slice(8,-1);if(i==="Object"&&p.constructor&&(i=p.constructor.name),i==="Map"||i==="Set")return Array.from(p);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return x(p,r)}}function x(p,r){(r==null||r>p.length)&&(r=p.length);for(var i=0,v=new Array(r);i<r;i++)v[i]=p[i];return v}function k(p,r){var i=p==null?null:typeof Symbol!="undefined"&&p[Symbol.iterator]||p["@@iterator"];if(i!=null){var v=[],D=!0,R=!1,A,N;try{for(i=i.call(p);!(D=(A=i.next()).done)&&(v.push(A.value),!(r&&v.length===r));D=!0);}catch(q){R=!0,N=q}finally{try{!D&&i.return!=null&&i.return()}finally{if(R)throw N}}return v}}function h(p){if(Array.isArray(p))return p}var o=[{label:"Submit and continue",key:"1"}],m=function(){var r=(0,e.useState)([]),i=B(r,2),v=i[0],D=i[1],R=function(N){D(function(q){var P=u(q);return P[N]=!0,P}),setTimeout(function(){D(function(q){var P=u(q);return P[N]=!1,P})},6e3)};return e.default.createElement(a.Space,{direction:"vertical"},e.default.createElement(a.Dropdown.Button,{type:"primary",loading:!0,menu:{items:o}},"Submit"),e.default.createElement(a.Dropdown.Button,{type:"primary",size:"small",loading:!0,menu:{items:o}},"Submit"),e.default.createElement(a.Dropdown.Button,{type:"primary",loading:v[0],menu:{items:o},onClick:function(){return R(0)}},"Submit"),e.default.createElement(a.Dropdown.Button,{icon:e.default.createElement(s.DownOutlined,null),loading:v[1],menu:{items:o},onClick:function(){return R(1)}},"Submit"))},f=m;return d.createElement(f)}}},4447:function(g,C,n){g.exports={content:{"zh-CN":[["p","\u6B64\u6F14\u793A\u9700\u8981\u6CE8\u610F\u53BB\u6389 Reset \u6837\u5F0F\u540E\u67E5\u770B Dropdown \u5185 Menu \u7684\u6837\u5F0F\u662F\u5426\u6B63\u5E38\u3002"],["p",["a",{title:null,href:"https://github.com/ant-design/ant-design/pull/19150"},"#19150"]]],"en-US":[["p","This demo was created for debugging Menu styles inside Dropdown."],["p",["a",{title:null,href:"https://github.com/ant-design/ant-design/pull/19150"},"#19150"]]]},meta:{order:100,title:{"zh-CN":"Menu \u5B8C\u6574\u6837\u5F0F","en-US":"Menu full styles"},debug:!0,filename:"components/dropdown/demo/menu-full.md",id:"components-dropdown-demo-menu-full"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { AppstoreOutlined<span class="token punctuation">,</span> DownOutlined<span class="token punctuation">,</span> MailOutlined<span class="token punctuation">,</span> SettingOutlined } from <span class="token string">'@ant-design/icons'</span><span class="token comment" spellcheck="true">;</span>
import type { MenuProps } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import { Dropdown<span class="token punctuation">,</span> Space } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

type MenuItem <span class="token operator">=</span> Required<span class="token operator">&lt;</span>MenuProps<span class="token operator">></span><span class="token punctuation">[</span><span class="token string">'items'</span><span class="token punctuation">]</span><span class="token punctuation">[</span>number<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>

function <span class="token function">getItem</span><span class="token punctuation">(</span>
  label<span class="token punctuation">:</span> React<span class="token punctuation">.</span>ReactNode<span class="token punctuation">,</span>
  key<span class="token punctuation">:</span> React<span class="token punctuation">.</span>Key<span class="token punctuation">,</span>
  icon<span class="token operator">?</span><span class="token punctuation">:</span> React<span class="token punctuation">.</span>ReactNode<span class="token punctuation">,</span>
  children<span class="token operator">?</span><span class="token punctuation">:</span> MenuItem<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  type<span class="token operator">?</span><span class="token punctuation">:</span> <span class="token string">'group'</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">:</span> MenuItem {
  return {
    key<span class="token punctuation">,</span>
    icon<span class="token punctuation">,</span>
    children<span class="token punctuation">,</span>
    label<span class="token punctuation">,</span>
    type<span class="token punctuation">,</span>
  } as MenuItem<span class="token comment" spellcheck="true">;</span>
}

<span class="token keyword">const</span> items<span class="token punctuation">:</span> MenuItem<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token function">getItem</span><span class="token punctuation">(</span>
    <span class="token string">'Item Group'</span><span class="token punctuation">,</span>
    <span class="token string">'group'</span><span class="token punctuation">,</span>
    <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 0'</span><span class="token punctuation">,</span> <span class="token string">'01'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 0'</span><span class="token punctuation">,</span> <span class="token string">'02'</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">'group'</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Navigation One'</span><span class="token punctuation">,</span> <span class="token string">'sub1'</span><span class="token punctuation">,</span> <span class="token operator">&lt;</span>MailOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
    <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Item 1'</span><span class="token punctuation">,</span> <span class="token string">'g1'</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 1'</span><span class="token punctuation">,</span> <span class="token string">'1'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 2'</span><span class="token punctuation">,</span> <span class="token string">'2'</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">'group'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Item 2'</span><span class="token punctuation">,</span> <span class="token string">'g2'</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 3'</span><span class="token punctuation">,</span> <span class="token string">'3'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 4'</span><span class="token punctuation">,</span> <span class="token string">'4'</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">'group'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Navigation Two'</span><span class="token punctuation">,</span> <span class="token string">'sub2'</span><span class="token punctuation">,</span> <span class="token operator">&lt;</span>AppstoreOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
    <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 5'</span><span class="token punctuation">,</span> <span class="token string">'5'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 6'</span><span class="token punctuation">,</span> <span class="token string">'6'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Submenu'</span><span class="token punctuation">,</span> <span class="token string">'sub3'</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 7'</span><span class="token punctuation">,</span> <span class="token string">'7'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 8'</span><span class="token punctuation">,</span> <span class="token string">'8'</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Navigation Three'</span><span class="token punctuation">,</span> <span class="token string">'sub4'</span><span class="token punctuation">,</span> <span class="token operator">&lt;</span>SettingOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
    <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 9'</span><span class="token punctuation">,</span> <span class="token string">'9'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 10'</span><span class="token punctuation">,</span> <span class="token string">'10'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 11'</span><span class="token punctuation">,</span> <span class="token string">'11'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 12'</span><span class="token punctuation">,</span> <span class="token string">'12'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token operator">/</span><span class="token operator">/</span> <span class="token operator">Not</span> crash
  <span class="token keyword">null</span> as any<span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Dropdown
    menu<span class="token operator">=</span>{{
      items<span class="token punctuation">,</span>
      selectedKeys<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">'1'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      openKeys<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">'sub1'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    }}
  <span class="token operator">></span>
    <span class="token operator">&lt;</span>a onClick<span class="token operator">=</span>{e <span class="token operator">=</span><span class="token operator">></span> e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>}<span class="token operator">></span>
      <span class="token operator">&lt;</span>Space<span class="token operator">></span>
        Hover <span class="token keyword">to</span> check menu style
        <span class="token operator">&lt;</span>DownOutlined <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Space<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> AppstoreOutlined<span class="token punctuation">,</span> DownOutlined<span class="token punctuation">,</span> MailOutlined<span class="token punctuation">,</span> SettingOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> MenuProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Dropdown<span class="token punctuation">,</span> Space <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

type MenuItem <span class="token operator">=</span> Required<span class="token operator">&lt;</span>MenuProps<span class="token operator">></span><span class="token punctuation">[</span><span class="token string">'items'</span><span class="token punctuation">]</span><span class="token punctuation">[</span>number<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">getItem</span><span class="token punctuation">(</span>
  label<span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode<span class="token punctuation">,</span>
  key<span class="token operator">:</span> React<span class="token punctuation">.</span>Key<span class="token punctuation">,</span>
  icon<span class="token operator">?</span><span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode<span class="token punctuation">,</span>
  children<span class="token operator">?</span><span class="token operator">:</span> MenuItem<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  type<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">'group'</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token operator">:</span> MenuItem <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    key<span class="token punctuation">,</span>
    icon<span class="token punctuation">,</span>
    children<span class="token punctuation">,</span>
    label<span class="token punctuation">,</span>
    type<span class="token punctuation">,</span>
  <span class="token punctuation">}</span> <span class="token keyword">as</span> MenuItem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> items<span class="token operator">:</span> MenuItem<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token function">getItem</span><span class="token punctuation">(</span>
    <span class="token string">'Item Group'</span><span class="token punctuation">,</span>
    <span class="token string">'group'</span><span class="token punctuation">,</span>
    <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 0'</span><span class="token punctuation">,</span> <span class="token string">'01'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 0'</span><span class="token punctuation">,</span> <span class="token string">'02'</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">'group'</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Navigation One'</span><span class="token punctuation">,</span> <span class="token string">'sub1'</span><span class="token punctuation">,</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MailOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
    <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Item 1'</span><span class="token punctuation">,</span> <span class="token string">'g1'</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 1'</span><span class="token punctuation">,</span> <span class="token string">'1'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 2'</span><span class="token punctuation">,</span> <span class="token string">'2'</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">'group'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Item 2'</span><span class="token punctuation">,</span> <span class="token string">'g2'</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 3'</span><span class="token punctuation">,</span> <span class="token string">'3'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 4'</span><span class="token punctuation">,</span> <span class="token string">'4'</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">'group'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Navigation Two'</span><span class="token punctuation">,</span> <span class="token string">'sub2'</span><span class="token punctuation">,</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">AppstoreOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
    <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 5'</span><span class="token punctuation">,</span> <span class="token string">'5'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 6'</span><span class="token punctuation">,</span> <span class="token string">'6'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Submenu'</span><span class="token punctuation">,</span> <span class="token string">'sub3'</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 7'</span><span class="token punctuation">,</span> <span class="token string">'7'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 8'</span><span class="token punctuation">,</span> <span class="token string">'8'</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Navigation Three'</span><span class="token punctuation">,</span> <span class="token string">'sub4'</span><span class="token punctuation">,</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">SettingOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
    <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 9'</span><span class="token punctuation">,</span> <span class="token string">'9'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 10'</span><span class="token punctuation">,</span> <span class="token string">'10'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 11'</span><span class="token punctuation">,</span> <span class="token string">'11'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 12'</span><span class="token punctuation">,</span> <span class="token string">'12'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token comment">// Not crash</span>
  <span class="token keyword">null</span> <span class="token keyword">as</span> any<span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span>
    <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
      items<span class="token punctuation">,</span>
      selectedKeys<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'1'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      openKeys<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'sub1'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>e <span class="token operator">=></span> e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
        Hover to check menu style
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DownOutlined</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> AppstoreOutlined<span class="token punctuation">,</span> DownOutlined<span class="token punctuation">,</span> MailOutlined<span class="token punctuation">,</span> SettingOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Dropdown<span class="token punctuation">,</span> Space <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token parameter">label<span class="token punctuation">,</span> key<span class="token punctuation">,</span> icon<span class="token punctuation">,</span> children<span class="token punctuation">,</span> type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    key<span class="token punctuation">,</span>
    icon<span class="token punctuation">,</span>
    children<span class="token punctuation">,</span>
    label<span class="token punctuation">,</span>
    type<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token function">getItem</span><span class="token punctuation">(</span>
    <span class="token string">'Item Group'</span><span class="token punctuation">,</span>
    <span class="token string">'group'</span><span class="token punctuation">,</span>
    <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 0'</span><span class="token punctuation">,</span> <span class="token string">'01'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 0'</span><span class="token punctuation">,</span> <span class="token string">'02'</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">'group'</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Navigation One'</span><span class="token punctuation">,</span> <span class="token string">'sub1'</span><span class="token punctuation">,</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MailOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
    <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Item 1'</span><span class="token punctuation">,</span> <span class="token string">'g1'</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 1'</span><span class="token punctuation">,</span> <span class="token string">'1'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 2'</span><span class="token punctuation">,</span> <span class="token string">'2'</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">'group'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Item 2'</span><span class="token punctuation">,</span> <span class="token string">'g2'</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 3'</span><span class="token punctuation">,</span> <span class="token string">'3'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 4'</span><span class="token punctuation">,</span> <span class="token string">'4'</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">'group'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Navigation Two'</span><span class="token punctuation">,</span> <span class="token string">'sub2'</span><span class="token punctuation">,</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">AppstoreOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
    <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 5'</span><span class="token punctuation">,</span> <span class="token string">'5'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 6'</span><span class="token punctuation">,</span> <span class="token string">'6'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Submenu'</span><span class="token punctuation">,</span> <span class="token string">'sub3'</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 7'</span><span class="token punctuation">,</span> <span class="token string">'7'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 8'</span><span class="token punctuation">,</span> <span class="token string">'8'</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Navigation Three'</span><span class="token punctuation">,</span> <span class="token string">'sub4'</span><span class="token punctuation">,</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">SettingOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
    <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 9'</span><span class="token punctuation">,</span> <span class="token string">'9'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 10'</span><span class="token punctuation">,</span> <span class="token string">'10'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 11'</span><span class="token punctuation">,</span> <span class="token string">'11'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'Option 12'</span><span class="token punctuation">,</span> <span class="token string">'12'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token comment">// Not crash</span>
  <span class="token keyword">null</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span>
    <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
      items<span class="token punctuation">,</span>
      <span class="token literal-property property">selectedKeys</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'1'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">openKeys</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'sub1'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
        Hover to check menu style
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DownOutlined</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var d=n(0),O=n(64),t=n(68),s=n(12),a=e(n(0));function e(y){return y&&y.__esModule?y:{default:y}}function c(y,b,B,M,E){return{key:b,icon:B,children:M,label:y,type:E}}var w=[c("Item Group","group",null,[c("Option 0","01"),c("Option 0","02")],"group"),c("Navigation One","sub1",a.default.createElement(t.MailOutlined,null),[c("Item 1","g1",null,[c("Option 1","1"),c("Option 2","2")],"group"),c("Item 2","g2",null,[c("Option 3","3"),c("Option 4","4")],"group")]),c("Navigation Two","sub2",a.default.createElement(t.AppstoreOutlined,null),[c("Option 5","5"),c("Option 6","6"),c("Submenu","sub3",null,[c("Option 7","7"),c("Option 8","8")])]),c("Navigation Three","sub4",a.default.createElement(t.SettingOutlined,null),[c("Option 9","9"),c("Option 10","10"),c("Option 11","11"),c("Option 12","12")]),null],u=function(){return a.default.createElement(s.Dropdown,{menu:{items:w,selectedKeys:["1"],openKeys:["sub1"]}},a.default.createElement("a",{onClick:function(B){return B.preventDefault()}},a.default.createElement(s.Space,null,"Hover to check menu style",a.default.createElement(t.DownOutlined,null))))},l=u;return d.createElement(l)}}},4448:function(g,C,n){g.exports={content:{"zh-CN":[["p","\u9ED8\u8BA4\u662F\u70B9\u51FB\u5173\u95ED\u83DC\u5355\uFF0C\u53EF\u4EE5\u5173\u95ED\u6B64\u529F\u80FD\u3002"]],"en-US":[["p","The default is to close the menu when you click on menu items, this feature can be turned off."]]},meta:{order:12,title:{"zh-CN":"\u83DC\u5355\u9690\u85CF\u65B9\u5F0F","en-US":"The way of hiding menu."},filename:"components/dropdown/demo/overlay-open.md",id:"components-dropdown-demo-overlay-open"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { DownOutlined } from <span class="token string">'@ant-design/icons'</span><span class="token comment" spellcheck="true">;</span>
import type { MenuProps } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import { Dropdown<span class="token punctuation">,</span> Space } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React<span class="token punctuation">,</span> { useState } from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> <span class="token punctuation">[</span>open<span class="token punctuation">,</span> setOpen<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> handleMenuClick<span class="token punctuation">:</span> MenuProps<span class="token punctuation">[</span><span class="token string">'onClick'</span><span class="token punctuation">]</span> <span class="token operator">=</span> e <span class="token operator">=</span><span class="token operator">></span> {
    <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>key <span class="token operator">==</span><span class="token operator">=</span> <span class="token string">'3'</span><span class="token punctuation">)</span> {
      <span class="token function">setOpen</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    }
  }<span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> handleOpenChange <span class="token operator">=</span> <span class="token punctuation">(</span>flag<span class="token punctuation">:</span> boolean<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    <span class="token function">setOpen</span><span class="token punctuation">(</span>flag<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> items<span class="token punctuation">:</span> MenuProps<span class="token punctuation">[</span><span class="token string">'items'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    {
      label<span class="token punctuation">:</span> <span class="token string">'Clicking me will not close the menu.'</span><span class="token punctuation">,</span>
      key<span class="token punctuation">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
    }<span class="token punctuation">,</span>
    {
      label<span class="token punctuation">:</span> <span class="token string">'Clicking me will not close the menu also.'</span><span class="token punctuation">,</span>
      key<span class="token punctuation">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
    }<span class="token punctuation">,</span>
    {
      label<span class="token punctuation">:</span> <span class="token string">'Clicking me will close the menu.'</span><span class="token punctuation">,</span>
      key<span class="token punctuation">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
    }<span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>

  return <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Dropdown
      menu<span class="token operator">=</span>{{
        items<span class="token punctuation">,</span>
        onClick<span class="token punctuation">:</span> handleMenuClick<span class="token punctuation">,</span>
      }}
      onOpenChange<span class="token operator">=</span>{handleOpenChange}
      open<span class="token operator">=</span>{open}
    <span class="token operator">></span>
      <span class="token operator">&lt;</span>a onClick<span class="token operator">=</span>{e <span class="token operator">=</span><span class="token operator">></span> e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>}<span class="token operator">></span>
        <span class="token operator">&lt;</span>Space<span class="token operator">></span>
          Hover me
          <span class="token operator">&lt;</span>DownOutlined <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Space<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> DownOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> MenuProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Dropdown<span class="token punctuation">,</span> Space <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>open<span class="token punctuation">,</span> setOpen<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> handleMenuClick<span class="token operator">:</span> MenuProps<span class="token punctuation">[</span><span class="token string">'onClick'</span><span class="token punctuation">]</span> <span class="token operator">=</span> e <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>key <span class="token operator">===</span> <span class="token string">'3'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setOpen</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleOpenChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>flag<span class="token operator">:</span> boolean<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setOpen</span><span class="token punctuation">(</span>flag<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> items<span class="token operator">:</span> MenuProps<span class="token punctuation">[</span><span class="token string">'items'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      label<span class="token operator">:</span> <span class="token string">'Clicking me will not close the menu.'</span><span class="token punctuation">,</span>
      key<span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      label<span class="token operator">:</span> <span class="token string">'Clicking me will not close the menu also.'</span><span class="token punctuation">,</span>
      key<span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      label<span class="token operator">:</span> <span class="token string">'Clicking me will close the menu.'</span><span class="token punctuation">,</span>
      key<span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span>
      <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        items<span class="token punctuation">,</span>
        onClick<span class="token operator">:</span> handleMenuClick<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">onOpenChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleOpenChange<span class="token punctuation">}</span></span>
      <span class="token attr-name">open</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>open<span class="token punctuation">}</span></span>
    <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>e <span class="token operator">=></span> e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
          Hover me
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DownOutlined</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> DownOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Dropdown<span class="token punctuation">,</span> Space <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>open<span class="token punctuation">,</span> setOpen<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">handleMenuClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>key <span class="token operator">===</span> <span class="token string">'3'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setOpen</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">handleOpenChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">flag</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setOpen</span><span class="token punctuation">(</span>flag<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Clicking me will not close the menu.'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Clicking me will not close the menu also.'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Clicking me will close the menu.'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span>
      <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
        items<span class="token punctuation">,</span>
        <span class="token literal-property property">onClick</span><span class="token operator">:</span> handleMenuClick<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">onOpenChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleOpenChange<span class="token punctuation">}</span></span>
      <span class="token attr-name">open</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>open<span class="token punctuation">}</span></span>
    <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
          Hover me
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DownOutlined</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var d=n(0),O=n(64);function t(k){return t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(h){return typeof h}:function(h){return h&&typeof Symbol=="function"&&h.constructor===Symbol&&h!==Symbol.prototype?"symbol":typeof h},t(k)}var s=n(68),a=n(12),e=w(n(0));function c(k){if(typeof WeakMap!="function")return null;var h=new WeakMap,o=new WeakMap;return(c=function(f){return f?o:h})(k)}function w(k,h){if(!h&&k&&k.__esModule)return k;if(k===null||t(k)!=="object"&&typeof k!="function")return{default:k};var o=c(h);if(o&&o.has(k))return o.get(k);var m={},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in k)if(p!=="default"&&Object.prototype.hasOwnProperty.call(k,p)){var r=f?Object.getOwnPropertyDescriptor(k,p):null;r&&(r.get||r.set)?Object.defineProperty(m,p,r):m[p]=k[p]}return m.default=k,o&&o.set(k,m),m}function u(k,h){return M(k)||B(k,h)||y(k,h)||l()}function l(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function y(k,h){if(!!k){if(typeof k=="string")return b(k,h);var o=Object.prototype.toString.call(k).slice(8,-1);if(o==="Object"&&k.constructor&&(o=k.constructor.name),o==="Map"||o==="Set")return Array.from(k);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return b(k,h)}}function b(k,h){(h==null||h>k.length)&&(h=k.length);for(var o=0,m=new Array(h);o<h;o++)m[o]=k[o];return m}function B(k,h){var o=k==null?null:typeof Symbol!="undefined"&&k[Symbol.iterator]||k["@@iterator"];if(o!=null){var m=[],f=!0,p=!1,r,i;try{for(o=o.call(k);!(f=(r=o.next()).done)&&(m.push(r.value),!(h&&m.length===h));f=!0);}catch(v){p=!0,i=v}finally{try{!f&&o.return!=null&&o.return()}finally{if(p)throw i}}return m}}function M(k){if(Array.isArray(k))return k}var E=function(){var h=(0,e.useState)(!1),o=u(h,2),m=o[0],f=o[1],p=function(D){D.key==="3"&&f(!1)},r=function(D){f(D)},i=[{label:"Clicking me will not close the menu.",key:"1"},{label:"Clicking me will not close the menu also.",key:"2"},{label:"Clicking me will close the menu.",key:"3"}];return e.default.createElement(a.Dropdown,{menu:{items:i,onClick:p},onOpenChange:r,open:m},e.default.createElement("a",{onClick:function(D){return D.preventDefault()}},e.default.createElement(a.Space,null,"Hover me",e.default.createElement(s.DownOutlined,null))))},x=E;return d.createElement(x)}}},4449:function(g,C,n){g.exports={content:{"zh-CN":[["p","\u652F\u6301 6 \u4E2A\u5F39\u51FA\u4F4D\u7F6E\u3002"]],"en-US":[["p","Support 6 placements."]]},meta:{order:1,title:{"zh-CN":"\u5F39\u51FA\u4F4D\u7F6E","en-US":"Placement"},filename:"components/dropdown/demo/placement.md",id:"components-dropdown-demo-placement"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import type { MenuProps } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import { Button<span class="token punctuation">,</span> Dropdown<span class="token punctuation">,</span> Space } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> items<span class="token punctuation">:</span> MenuProps<span class="token punctuation">[</span><span class="token string">'items'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  {
    key<span class="token punctuation">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
    label<span class="token punctuation">:</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>a target<span class="token operator">=</span><span class="token string">"_blank"</span> rel<span class="token operator">=</span><span class="token string">"noopener noreferrer"</span> href<span class="token operator">=</span><span class="token string">"https://www.antgroup.com"</span><span class="token operator">></span>
        1st menu item
      <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
  {
    key<span class="token punctuation">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
    label<span class="token punctuation">:</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>a target<span class="token operator">=</span><span class="token string">"_blank"</span> rel<span class="token operator">=</span><span class="token string">"noopener noreferrer"</span> href<span class="token operator">=</span><span class="token string">"https://www.aliyun.com"</span><span class="token operator">></span>
        2nd menu item
      <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
  {
    key<span class="token punctuation">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
    label<span class="token punctuation">:</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>a target<span class="token operator">=</span><span class="token string">"_blank"</span> rel<span class="token operator">=</span><span class="token string">"noopener noreferrer"</span> href<span class="token operator">=</span><span class="token string">"https://www.luohanacademy.com"</span><span class="token operator">></span>
        3rd menu item
      <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Space direction<span class="token operator">=</span><span class="token string">"vertical"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>Space wrap<span class="token operator">></span>
      <span class="token operator">&lt;</span>Dropdown menu<span class="token operator">=</span>{{ items }} placement<span class="token operator">=</span><span class="token string">"bottomLeft"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>Button<span class="token operator">></span>bottomLeft<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token operator">></span>
      <span class="token operator">&lt;</span>Dropdown menu<span class="token operator">=</span>{{ items }} placement<span class="token operator">=</span><span class="token string">"bottom"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>Button<span class="token operator">></span>bottom<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token operator">></span>
      <span class="token operator">&lt;</span>Dropdown menu<span class="token operator">=</span>{{ items }} placement<span class="token operator">=</span><span class="token string">"bottomRight"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>Button<span class="token operator">></span>bottomRight<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Space<span class="token operator">></span>
    <span class="token operator">&lt;</span>Space wrap<span class="token operator">></span>
      <span class="token operator">&lt;</span>Dropdown menu<span class="token operator">=</span>{{ items }} placement<span class="token operator">=</span><span class="token string">"topLeft"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>Button<span class="token operator">></span>topLeft<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token operator">></span>
      <span class="token operator">&lt;</span>Dropdown menu<span class="token operator">=</span>{{ items }} placement<span class="token operator">=</span><span class="token string">"top"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>Button<span class="token operator">></span>top<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token operator">></span>
      <span class="token operator">&lt;</span>Dropdown menu<span class="token operator">=</span>{{ items }} placement<span class="token operator">=</span><span class="token string">"topRight"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>Button<span class="token operator">></span>topRight<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Space<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Space<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> type <span class="token punctuation">{</span> MenuProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Dropdown<span class="token punctuation">,</span> Space <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> items<span class="token operator">:</span> MenuProps<span class="token punctuation">[</span><span class="token string">'items'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    key<span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.antgroup.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        1st menu item
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    key<span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.aliyun.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        2nd menu item
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    key<span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.luohanacademy.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        3rd menu item
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span> <span class="token attr-name">wrap</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> items <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottomLeft<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>bottomLeft<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> items <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottom<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>bottom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> items <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottomRight<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>bottomRight<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span> <span class="token attr-name">wrap</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> items <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>topLeft<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>topLeft<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> items <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>top<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>top<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> items <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>topRight<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>topRight<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Dropdown<span class="token punctuation">,</span> Space <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.antgroup.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        1st menu item
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.aliyun.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        2nd menu item
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.luohanacademy.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        3rd menu item
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span> <span class="token attr-name">wrap</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span>
        <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
          items<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottomLeft<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>bottomLeft<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span>
        <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
          items<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottom<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>bottom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span>
        <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
          items<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottomRight<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>bottomRight<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span> <span class="token attr-name">wrap</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span>
        <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
          items<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>topLeft<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>topLeft<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span>
        <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
          items<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>top<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>top<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span>
        <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
          items<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>topRight<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>topRight<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var d=n(0),O=n(64),t=n(12),s=a(n(0));function a(u){return u&&u.__esModule?u:{default:u}}var e=[{key:"1",label:s.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.antgroup.com"},"1st menu item")},{key:"2",label:s.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.aliyun.com"},"2nd menu item")},{key:"3",label:s.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.luohanacademy.com"},"3rd menu item")}],c=function(){return s.default.createElement(t.Space,{direction:"vertical"},s.default.createElement(t.Space,{wrap:!0},s.default.createElement(t.Dropdown,{menu:{items:e},placement:"bottomLeft"},s.default.createElement(t.Button,null,"bottomLeft")),s.default.createElement(t.Dropdown,{menu:{items:e},placement:"bottom"},s.default.createElement(t.Button,null,"bottom")),s.default.createElement(t.Dropdown,{menu:{items:e},placement:"bottomRight"},s.default.createElement(t.Button,null,"bottomRight"))),s.default.createElement(t.Space,{wrap:!0},s.default.createElement(t.Dropdown,{menu:{items:e},placement:"topLeft"},s.default.createElement(t.Button,null,"topLeft")),s.default.createElement(t.Dropdown,{menu:{items:e},placement:"top"},s.default.createElement(t.Button,null,"top")),s.default.createElement(t.Dropdown,{menu:{items:e},placement:"topRight"},s.default.createElement(t.Button,null,"topRight"))))},w=c;return d.createElement(w)}}},4450:function(g,C,n){g.exports={content:{"zh-CN":[["p","\u8C03\u8BD5\u7528\u7EC4\u4EF6\uFF0C\u8BF7\u52FF\u76F4\u63A5\u4F7F\u7528\u3002"]],"en-US":[["p","Debug usage. Do not use in your production."]]},meta:{order:999,title:{"zh-CN":"_InternalPanelDoNotUseOrYouWillBeFired","en-US":"_InternalPanelDoNotUseOrYouWillBeFired"},debug:!0,filename:"components/dropdown/demo/render-panel.md",id:"components-dropdown-demo-render-panel"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { SmileOutlined } from <span class="token string">'@ant-design/icons'</span><span class="token comment" spellcheck="true">;</span>
import { Dropdown<span class="token punctuation">,</span> Menu } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> { _InternalPanelDoNotUseOrYouWillBeFired<span class="token punctuation">:</span> InternalDropdown } <span class="token operator">=</span> Dropdown<span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> menu <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Menu
    items<span class="token operator">=</span>{<span class="token punctuation">[</span>
      {
        key<span class="token punctuation">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>a target<span class="token operator">=</span><span class="token string">"_blank"</span> rel<span class="token operator">=</span><span class="token string">"noopener noreferrer"</span> href<span class="token operator">=</span><span class="token string">"https://www.antgroup.com"</span><span class="token operator">></span>
            1st menu item
          <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        key<span class="token punctuation">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>a target<span class="token operator">=</span><span class="token string">"_blank"</span> rel<span class="token operator">=</span><span class="token string">"noopener noreferrer"</span> href<span class="token operator">=</span><span class="token string">"https://www.aliyun.com"</span><span class="token operator">></span>
            2nd menu item <span class="token punctuation">(</span>disabled<span class="token punctuation">)</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
        icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>SmileOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
        disabled<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        key<span class="token punctuation">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>a target<span class="token operator">=</span><span class="token string">"_blank"</span> rel<span class="token operator">=</span><span class="token string">"noopener noreferrer"</span> href<span class="token operator">=</span><span class="token string">"https://www.luohanacademy.com"</span><span class="token operator">></span>
            3rd menu item <span class="token punctuation">(</span>disabled<span class="token punctuation">)</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
        disabled<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        key<span class="token punctuation">:</span> <span class="token string">'4'</span><span class="token punctuation">,</span>
        danger<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token string">'a danger item'</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
    <span class="token punctuation">]</span>}
  <span class="token operator">/</span><span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token operator">&lt;</span>InternalDropdown overlay<span class="token operator">=</span>{menu} <span class="token operator">/</span><span class="token operator">></span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> SmileOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Dropdown<span class="token punctuation">,</span> Menu <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> _InternalPanelDoNotUseOrYouWillBeFired<span class="token operator">:</span> InternalDropdown <span class="token punctuation">}</span> <span class="token operator">=</span> Dropdown<span class="token punctuation">;</span>

<span class="token keyword">const</span> menu <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu</span></span>
    <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        key<span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.antgroup.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            1st menu item
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        key<span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.aliyun.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            2nd menu <span class="token function">item</span> <span class="token punctuation">(</span>disabled<span class="token punctuation">)</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
        icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">SmileOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
        disabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        key<span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.luohanacademy.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            3rd menu <span class="token function">item</span> <span class="token punctuation">(</span>disabled<span class="token punctuation">)</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
        disabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        key<span class="token operator">:</span> <span class="token string">'4'</span><span class="token punctuation">,</span>
        danger<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token string">'a danger item'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">InternalDropdown</span></span> <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> SmileOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Dropdown<span class="token punctuation">,</span> Menu <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">_InternalPanelDoNotUseOrYouWillBeFired</span><span class="token operator">:</span> InternalDropdown <span class="token punctuation">}</span> <span class="token operator">=</span> Dropdown<span class="token punctuation">;</span>
<span class="token keyword">const</span> menu <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu</span></span>
    <span class="token attr-name">items</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.antgroup.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            1st menu item
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.aliyun.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            2nd menu <span class="token function">item</span> <span class="token punctuation">(</span>disabled<span class="token punctuation">)</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">SmileOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">disabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.luohanacademy.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            3rd menu <span class="token function">item</span> <span class="token punctuation">(</span>disabled<span class="token punctuation">)</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">disabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'4'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">danger</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'a danger item'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">InternalDropdown</span></span> <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var d=n(0),O=n(64),t=n(68),s=n(12),a=e(n(0));function e(y){return y&&y.__esModule?y:{default:y}}var c=s.Dropdown._InternalPanelDoNotUseOrYouWillBeFired,w=a.default.createElement(s.Menu,{items:[{key:"1",label:a.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.antgroup.com"},"1st menu item")},{key:"2",label:a.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.aliyun.com"},"2nd menu item (disabled)"),icon:a.default.createElement(t.SmileOutlined,null),disabled:!0},{key:"3",label:a.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.luohanacademy.com"},"3rd menu item (disabled)"),disabled:!0},{key:"4",danger:!0,label:"a danger item"}]}),u=function(){return a.default.createElement(c,{overlay:w})},l=u;return d.createElement(l)}}},4451:function(g,C,n){g.exports={content:{"zh-CN":[["p","\u6DFB\u52A0 ",["code","menu"]," \u4E2D\u7684 ",["code","selectable"]," \u5C5E\u6027\u53EF\u4EE5\u5F00\u542F\u9009\u62E9\u80FD\u529B\u3002"]],"en-US":[["p","Configure the ",["code","selectable"]," property in ",["code","menu"]," to enable selectable ability."]]},meta:{order:13,title:{"zh-CN":"\u83DC\u5355\u53EF\u9009\u9009\u62E9","en-US":"Selectable Menu"},filename:"components/dropdown/demo/selectable.md",id:"components-dropdown-demo-selectable"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { DownOutlined } from <span class="token string">'@ant-design/icons'</span><span class="token comment" spellcheck="true">;</span>
import type { MenuProps } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import { Dropdown<span class="token punctuation">,</span> Space<span class="token punctuation">,</span> Typography } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> items<span class="token punctuation">:</span> MenuProps<span class="token punctuation">[</span><span class="token string">'items'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  {
    key<span class="token punctuation">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
    label<span class="token punctuation">:</span> <span class="token string">'Item 1'</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
  {
    key<span class="token punctuation">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
    label<span class="token punctuation">:</span> <span class="token string">'Item 2'</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
  {
    key<span class="token punctuation">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
    label<span class="token punctuation">:</span> <span class="token string">'Item 3'</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Dropdown
    menu<span class="token operator">=</span>{{
      items<span class="token punctuation">,</span>
      selectable<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      defaultSelectedKeys<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">'3'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    }}
  <span class="token operator">></span>
    <span class="token operator">&lt;</span>Typography<span class="token punctuation">.</span>Link<span class="token operator">></span>
      <span class="token operator">&lt;</span>Space<span class="token operator">></span>
        Selectable
        <span class="token operator">&lt;</span>DownOutlined <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Space<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Typography<span class="token punctuation">.</span>Link<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> DownOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> MenuProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Dropdown<span class="token punctuation">,</span> Space<span class="token punctuation">,</span> Typography <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> items<span class="token operator">:</span> MenuProps<span class="token punctuation">[</span><span class="token string">'items'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    key<span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">'Item 1'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    key<span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">'Item 2'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    key<span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">'Item 3'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span>
    <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
      items<span class="token punctuation">,</span>
      selectable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      defaultSelectedKeys<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'3'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Typography.Link</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
        Selectable
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DownOutlined</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Typography.Link</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> DownOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Dropdown<span class="token punctuation">,</span> Space<span class="token punctuation">,</span> Typography <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Item 1'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Item 2'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Item 3'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span>
    <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
      items<span class="token punctuation">,</span>
      <span class="token literal-property property">selectable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">defaultSelectedKeys</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'3'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Typography.Link</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
        Selectable
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DownOutlined</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Typography.Link</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var d=n(0),O=n(64),t=n(68),s=n(12),a=e(n(0));function e(l){return l&&l.__esModule?l:{default:l}}var c=[{key:"1",label:"Item 1"},{key:"2",label:"Item 2"},{key:"3",label:"Item 3"}],w=function(){return a.default.createElement(s.Dropdown,{menu:{items:c,selectable:!0,defaultSelectedKeys:["3"]}},a.default.createElement(s.Typography.Link,null,a.default.createElement(s.Space,null,"Selectable",a.default.createElement(t.DownOutlined,null))))},u=w;return d.createElement(u)}}},4452:function(g,C,n){g.exports={content:{"zh-CN":[["p","\u4F20\u5165\u7684\u83DC\u5355\u91CC\u6709\u591A\u4E2A\u5C42\u7EA7\u3002"]],"en-US":[["p","The menu has multiple levels."]]},meta:{order:9,title:{"zh-CN":"\u591A\u7EA7\u83DC\u5355","en-US":"Cascading menu"},filename:"components/dropdown/demo/sub-menu.md",id:"components-dropdown-demo-sub-menu"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { DownOutlined } from <span class="token string">'@ant-design/icons'</span><span class="token comment" spellcheck="true">;</span>
import type { MenuProps } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import { Dropdown<span class="token punctuation">,</span> Space } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> items<span class="token punctuation">:</span> MenuProps<span class="token punctuation">[</span><span class="token string">'items'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  {
    key<span class="token punctuation">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
    type<span class="token punctuation">:</span> <span class="token string">'group'</span><span class="token punctuation">,</span>
    label<span class="token punctuation">:</span> <span class="token string">'Group title'</span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      {
        key<span class="token punctuation">:</span> <span class="token string">'1-1'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token string">'1st menu item'</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        key<span class="token punctuation">:</span> <span class="token string">'1-2'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token string">'2nd menu item'</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
  {
    key<span class="token punctuation">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
    label<span class="token punctuation">:</span> <span class="token string">'sub menu'</span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      {
        key<span class="token punctuation">:</span> <span class="token string">'2-1'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token string">'3rd menu item'</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        key<span class="token punctuation">:</span> <span class="token string">'2-2'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token string">'4th menu item'</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
  {
    key<span class="token punctuation">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
    label<span class="token punctuation">:</span> <span class="token string">'disabled sub menu'</span><span class="token punctuation">,</span>
    disabled<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      {
        key<span class="token punctuation">:</span> <span class="token string">'3-1'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token string">'5d menu item'</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        key<span class="token punctuation">:</span> <span class="token string">'3-2'</span><span class="token punctuation">,</span>
        label<span class="token punctuation">:</span> <span class="token string">'6th menu item'</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Dropdown menu<span class="token operator">=</span>{{ items }}<span class="token operator">></span>
    <span class="token operator">&lt;</span>a onClick<span class="token operator">=</span>{e <span class="token operator">=</span><span class="token operator">></span> e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>}<span class="token operator">></span>
      <span class="token operator">&lt;</span>Space<span class="token operator">></span>
        Cascading menu
        <span class="token operator">&lt;</span>DownOutlined <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Space<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> DownOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> MenuProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Dropdown<span class="token punctuation">,</span> Space <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> items<span class="token operator">:</span> MenuProps<span class="token punctuation">[</span><span class="token string">'items'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    key<span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
    type<span class="token operator">:</span> <span class="token string">'group'</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">'Group title'</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        key<span class="token operator">:</span> <span class="token string">'1-1'</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token string">'1st menu item'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        key<span class="token operator">:</span> <span class="token string">'1-2'</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token string">'2nd menu item'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    key<span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">'sub menu'</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        key<span class="token operator">:</span> <span class="token string">'2-1'</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token string">'3rd menu item'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        key<span class="token operator">:</span> <span class="token string">'2-2'</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token string">'4th menu item'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    key<span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">'disabled sub menu'</span><span class="token punctuation">,</span>
    disabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        key<span class="token operator">:</span> <span class="token string">'3-1'</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token string">'5d menu item'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        key<span class="token operator">:</span> <span class="token string">'3-2'</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token string">'6th menu item'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> items <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>e <span class="token operator">=></span> e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
        Cascading menu
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DownOutlined</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> DownOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Dropdown<span class="token punctuation">,</span> Space <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'group'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'Group title'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'1-1'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'1st menu item'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'1-2'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'2nd menu item'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'sub menu'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'2-1'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'3rd menu item'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'2-2'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'4th menu item'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'disabled sub menu'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">disabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'3-1'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'5d menu item'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'3-2'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'6th menu item'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span>
    <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
      items<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
        Cascading menu
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DownOutlined</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var d=n(0),O=n(64),t=n(68),s=n(12),a=e(n(0));function e(l){return l&&l.__esModule?l:{default:l}}var c=[{key:"1",type:"group",label:"Group title",children:[{key:"1-1",label:"1st menu item"},{key:"1-2",label:"2nd menu item"}]},{key:"2",label:"sub menu",children:[{key:"2-1",label:"3rd menu item"},{key:"2-2",label:"4th menu item"}]},{key:"3",label:"disabled sub menu",disabled:!0,children:[{key:"3-1",label:"5d menu item"},{key:"3-2",label:"6th menu item"}]}],w=function(){return a.default.createElement(s.Dropdown,{menu:{items:c}},a.default.createElement("a",{onClick:function(b){return b.preventDefault()}},a.default.createElement(s.Space,null,"Cascading menu",a.default.createElement(t.DownOutlined,null))))},u=w;return d.createElement(u)}}},4453:function(g,C,n){g.exports={content:{"zh-CN":[["p","\u9ED8\u8BA4\u662F\u79FB\u5165\u89E6\u53D1\u83DC\u5355\uFF0C\u53EF\u4EE5\u70B9\u51FB\u89E6\u53D1\u3002"]],"en-US":[["p","The default trigger mode is ",["code","hover"],", you can change it to ",["code","click"],"."]]},meta:{order:5,title:{"zh-CN":"\u89E6\u53D1\u65B9\u5F0F","en-US":"Trigger mode"},filename:"components/dropdown/demo/trigger.md",id:"components-dropdown-demo-trigger"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { DownOutlined } from <span class="token string">'@ant-design/icons'</span><span class="token comment" spellcheck="true">;</span>
import type { MenuProps } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import { Dropdown<span class="token punctuation">,</span> Space } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> items<span class="token punctuation">:</span> MenuProps<span class="token punctuation">[</span><span class="token string">'items'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  {
    label<span class="token punctuation">:</span> <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"https://www.antgroup.com"</span><span class="token operator">></span>1st menu item<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span><span class="token punctuation">,</span>
    key<span class="token punctuation">:</span> <span class="token string">'0'</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
  {
    label<span class="token punctuation">:</span> <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"https://www.aliyun.com"</span><span class="token operator">></span>2nd menu item<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span><span class="token punctuation">,</span>
    key<span class="token punctuation">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
  {
    type<span class="token punctuation">:</span> <span class="token string">'divider'</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
  {
    label<span class="token punctuation">:</span> <span class="token string">'3rd menu item'</span><span class="token punctuation">,</span>
    key<span class="token punctuation">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Dropdown menu<span class="token operator">=</span>{{ items }} trigger<span class="token operator">=</span>{<span class="token punctuation">[</span><span class="token string">'click'</span><span class="token punctuation">]</span>}<span class="token operator">></span>
    <span class="token operator">&lt;</span>a onClick<span class="token operator">=</span>{e <span class="token operator">=</span><span class="token operator">></span> e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>}<span class="token operator">></span>
      <span class="token operator">&lt;</span>Space<span class="token operator">></span>
        Click me
        <span class="token operator">&lt;</span>DownOutlined <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Space<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Dropdown<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> DownOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> MenuProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Dropdown<span class="token punctuation">,</span> Space <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> items<span class="token operator">:</span> MenuProps<span class="token punctuation">[</span><span class="token string">'items'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    label<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.antgroup.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1st menu item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
    key<span class="token operator">:</span> <span class="token string">'0'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    label<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.aliyun.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>2nd menu item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
    key<span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">'divider'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    label<span class="token operator">:</span> <span class="token string">'3rd menu item'</span><span class="token punctuation">,</span>
    key<span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span> <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> items <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">trigger</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'click'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>e <span class="token operator">=></span> e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
        Click me
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DownOutlined</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> DownOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Dropdown<span class="token punctuation">,</span> Space <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.antgroup.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1st menu item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.aliyun.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>2nd menu item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'divider'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'3rd menu item'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Dropdown</span></span>
    <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
      items<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">trigger</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'click'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
        Click me
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DownOutlined</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Space</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Dropdown</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var d=n(0),O=n(64),t=n(68),s=n(12),a=e(n(0));function e(l){return l&&l.__esModule?l:{default:l}}var c=[{label:a.default.createElement("a",{href:"https://www.antgroup.com"},"1st menu item"),key:"0"},{label:a.default.createElement("a",{href:"https://www.aliyun.com"},"2nd menu item"),key:"1"},{type:"divider"},{label:"3rd menu item",key:"3"}],w=function(){return a.default.createElement(s.Dropdown,{menu:{items:c},trigger:["click"]},a.default.createElement("a",{onClick:function(b){return b.preventDefault()}},a.default.createElement(s.Space,null,"Click me",a.default.createElement(t.DownOutlined,null))))},u=w;return d.createElement(u)}}}}]);
