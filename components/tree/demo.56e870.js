(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{4064:function(P,Q,c){P.exports={"basic-controlled":c(5005),basic:c(5006),"big-data":c(5007),"customized-icon":c(5008),directory:c(5009),"drag-debug":c(5010),draggable:c(5011),dynamic:c(5012),line:c(5013),search:c(5014),"switcher-icon":c(5015),"virtual-scroll":c(5016)}},5005:function(P,Q,c){P.exports={content:{"zh-CN":[["p","\u53D7\u63A7\u64CD\u4F5C\u793A\u4F8B"]],"en-US":[["p","Controlled mode lets parent nodes reflect the status of child nodes more intelligently."]]},meta:{order:1,title:{"zh-CN":"\u53D7\u63A7\u64CD\u4F5C\u793A\u4F8B","en-US":"Controlled Tree"},filename:"components/tree/demo/basic-controlled.md",id:"components-tree-demo-basic-controlled"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { Tree } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import type { DataNode } from <span class="token string">'antd/es/tree'</span><span class="token comment" spellcheck="true">;</span>
import React<span class="token punctuation">,</span> { useState } from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> treeData<span class="token punctuation">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  {
    title<span class="token punctuation">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
    key<span class="token punctuation">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      {
        title<span class="token punctuation">:</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span>
        key<span class="token punctuation">:</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
          { title<span class="token punctuation">:</span> <span class="token string">'0-0-0-0'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'0-0-0-0'</span> }<span class="token punctuation">,</span>
          { title<span class="token punctuation">:</span> <span class="token string">'0-0-0-1'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'0-0-0-1'</span> }<span class="token punctuation">,</span>
          { title<span class="token punctuation">:</span> <span class="token string">'0-0-0-2'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'0-0-0-2'</span> }<span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        title<span class="token punctuation">:</span> <span class="token string">'0-0-1'</span><span class="token punctuation">,</span>
        key<span class="token punctuation">:</span> <span class="token string">'0-0-1'</span><span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
          { title<span class="token punctuation">:</span> <span class="token string">'0-0-1-0'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'0-0-1-0'</span> }<span class="token punctuation">,</span>
          { title<span class="token punctuation">:</span> <span class="token string">'0-0-1-1'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'0-0-1-1'</span> }<span class="token punctuation">,</span>
          { title<span class="token punctuation">:</span> <span class="token string">'0-0-1-2'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'0-0-1-2'</span> }<span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        title<span class="token punctuation">:</span> <span class="token string">'0-0-2'</span><span class="token punctuation">,</span>
        key<span class="token punctuation">:</span> <span class="token string">'0-0-2'</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
  {
    title<span class="token punctuation">:</span> <span class="token string">'0-1'</span><span class="token punctuation">,</span>
    key<span class="token punctuation">:</span> <span class="token string">'0-1'</span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      { title<span class="token punctuation">:</span> <span class="token string">'0-1-0-0'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'0-1-0-0'</span> }<span class="token punctuation">,</span>
      { title<span class="token punctuation">:</span> <span class="token string">'0-1-0-1'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'0-1-0-1'</span> }<span class="token punctuation">,</span>
      { title<span class="token punctuation">:</span> <span class="token string">'0-1-0-2'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'0-1-0-2'</span> }<span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
  {
    title<span class="token punctuation">:</span> <span class="token string">'0-2'</span><span class="token punctuation">,</span>
    key<span class="token punctuation">:</span> <span class="token string">'0-2'</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> <span class="token punctuation">[</span>expandedKeys<span class="token punctuation">,</span> setExpandedKeys<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>React<span class="token punctuation">.</span>Key<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">,</span> <span class="token string">'0-0-1'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>checkedKeys<span class="token punctuation">,</span> setCheckedKeys<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>React<span class="token punctuation">.</span>Key<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>selectedKeys<span class="token punctuation">,</span> setSelectedKeys<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>React<span class="token punctuation">.</span>Key<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>autoExpandParent<span class="token punctuation">,</span> setAutoExpandParent<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>boolean<span class="token operator">></span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> onExpand <span class="token operator">=</span> <span class="token punctuation">(</span>expandedKeysValue<span class="token punctuation">:</span> React<span class="token punctuation">.</span>Key<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onExpand'</span><span class="token punctuation">,</span> expandedKeysValue<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    <span class="token operator">/</span><span class="token operator">/</span> <span class="token keyword">if</span> <span class="token operator">not</span> set autoExpandParent <span class="token keyword">to</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token keyword">if</span> children expanded<span class="token punctuation">,</span> parent can <span class="token operator">not</span> collapse<span class="token punctuation">.</span>
    <span class="token operator">/</span><span class="token operator">/</span> <span class="token operator">or</span><span class="token punctuation">,</span> you can remove all expanded children keys<span class="token punctuation">.</span>
    <span class="token function">setExpandedKeys</span><span class="token punctuation">(</span>expandedKeysValue<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    <span class="token function">setAutoExpandParent</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> onCheck <span class="token operator">=</span> <span class="token punctuation">(</span>checkedKeysValue<span class="token punctuation">:</span> React<span class="token punctuation">.</span>Key<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onCheck'</span><span class="token punctuation">,</span> checkedKeysValue<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    <span class="token function">setCheckedKeys</span><span class="token punctuation">(</span>checkedKeysValue<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> onSelect <span class="token operator">=</span> <span class="token punctuation">(</span>selectedKeysValue<span class="token punctuation">:</span> React<span class="token punctuation">.</span>Key<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> info<span class="token punctuation">:</span> any<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onSelect'</span><span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    <span class="token function">setSelectedKeys</span><span class="token punctuation">(</span>selectedKeysValue<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  return <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Tree
      checkable
      onExpand<span class="token operator">=</span>{onExpand}
      expandedKeys<span class="token operator">=</span>{expandedKeys}
      autoExpandParent<span class="token operator">=</span>{autoExpandParent}
      onCheck<span class="token operator">=</span>{onCheck}
      checkedKeys<span class="token operator">=</span>{checkedKeys}
      onSelect<span class="token operator">=</span>{onSelect}
      selectedKeys<span class="token operator">=</span>{selectedKeys}
      treeData<span class="token operator">=</span>{treeData}
    <span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Tree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> DataNode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd/es/tree'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> treeData<span class="token operator">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
    key<span class="token operator">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'0-0-0-0'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'0-0-0-0'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'0-0-0-1'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'0-0-0-1'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'0-0-0-2'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'0-0-0-2'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'0-0-1'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'0-0-1'</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'0-0-1-0'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'0-0-1-0'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'0-0-1-1'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'0-0-1-1'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'0-0-1-2'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'0-0-1-2'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'0-0-2'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'0-0-2'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">'0-1'</span><span class="token punctuation">,</span>
    key<span class="token operator">:</span> <span class="token string">'0-1'</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'0-1-0-0'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'0-1-0-0'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'0-1-0-1'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'0-1-0-1'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'0-1-0-2'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'0-1-0-2'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">'0-2'</span><span class="token punctuation">,</span>
    key<span class="token operator">:</span> <span class="token string">'0-2'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>expandedKeys<span class="token punctuation">,</span> setExpandedKeys<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>React<span class="token punctuation">.</span>Key<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">,</span> <span class="token string">'0-0-1'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>checkedKeys<span class="token punctuation">,</span> setCheckedKeys<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>React<span class="token punctuation">.</span>Key<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>selectedKeys<span class="token punctuation">,</span> setSelectedKeys<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>React<span class="token punctuation">.</span>Key<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>autoExpandParent<span class="token punctuation">,</span> setAutoExpandParent<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>boolean<span class="token operator">></span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onExpand</span> <span class="token operator">=</span> <span class="token punctuation">(</span>expandedKeysValue<span class="token operator">:</span> React<span class="token punctuation">.</span>Key<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onExpand'</span><span class="token punctuation">,</span> expandedKeysValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// if not set autoExpandParent to false, if children expanded, parent can not collapse.</span>
    <span class="token comment">// or, you can remove all expanded children keys.</span>
    <span class="token function">setExpandedKeys</span><span class="token punctuation">(</span>expandedKeysValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setAutoExpandParent</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onCheck</span> <span class="token operator">=</span> <span class="token punctuation">(</span>checkedKeysValue<span class="token operator">:</span> React<span class="token punctuation">.</span>Key<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onCheck'</span><span class="token punctuation">,</span> checkedKeysValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setCheckedKeys</span><span class="token punctuation">(</span>checkedKeysValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onSelect</span> <span class="token operator">=</span> <span class="token punctuation">(</span>selectedKeysValue<span class="token operator">:</span> React<span class="token punctuation">.</span>Key<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> info<span class="token operator">:</span> any<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onSelect'</span><span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setSelectedKeys</span><span class="token punctuation">(</span>selectedKeysValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tree</span></span>
      <span class="token attr-name">checkable</span>
      <span class="token attr-name">onExpand</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onExpand<span class="token punctuation">}</span></span>
      <span class="token attr-name">expandedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>expandedKeys<span class="token punctuation">}</span></span>
      <span class="token attr-name">autoExpandParent</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>autoExpandParent<span class="token punctuation">}</span></span>
      <span class="token attr-name">onCheck</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onCheck<span class="token punctuation">}</span></span>
      <span class="token attr-name">checkedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>checkedKeys<span class="token punctuation">}</span></span>
      <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onSelect<span class="token punctuation">}</span></span>
      <span class="token attr-name">selectedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>selectedKeys<span class="token punctuation">}</span></span>
      <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Tree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> treeData <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'0-0-0-0'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-0-0'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'0-0-0-1'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-0-1'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'0-0-0-2'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-0-2'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'0-0-1'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-1'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'0-0-1-0'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-1-0'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'0-0-1-1'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-1-1'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'0-0-1-2'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-1-2'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'0-0-2'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-2'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'0-1'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-1'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'0-1-0-0'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-1-0-0'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'0-1-0-1'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-1-0-1'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'0-1-0-2'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-1-0-2'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'0-2'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-2'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>expandedKeys<span class="token punctuation">,</span> setExpandedKeys<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">,</span> <span class="token string">'0-0-1'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>checkedKeys<span class="token punctuation">,</span> setCheckedKeys<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>selectedKeys<span class="token punctuation">,</span> setSelectedKeys<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>autoExpandParent<span class="token punctuation">,</span> setAutoExpandParent<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onExpand</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">expandedKeysValue</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onExpand'</span><span class="token punctuation">,</span> expandedKeysValue<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// if not set autoExpandParent to false, if children expanded, parent can not collapse.</span>
    <span class="token comment">// or, you can remove all expanded children keys.</span>

    <span class="token function">setExpandedKeys</span><span class="token punctuation">(</span>expandedKeysValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setAutoExpandParent</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onCheck</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">checkedKeysValue</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onCheck'</span><span class="token punctuation">,</span> checkedKeysValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setCheckedKeys</span><span class="token punctuation">(</span>checkedKeysValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onSelect</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">selectedKeysValue<span class="token punctuation">,</span> info</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onSelect'</span><span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setSelectedKeys</span><span class="token punctuation">(</span>selectedKeysValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tree</span></span>
      <span class="token attr-name">checkable</span>
      <span class="token attr-name">onExpand</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onExpand<span class="token punctuation">}</span></span>
      <span class="token attr-name">expandedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>expandedKeys<span class="token punctuation">}</span></span>
      <span class="token attr-name">autoExpandParent</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>autoExpandParent<span class="token punctuation">}</span></span>
      <span class="token attr-name">onCheck</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onCheck<span class="token punctuation">}</span></span>
      <span class="token attr-name">checkedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>checkedKeys<span class="token punctuation">}</span></span>
      <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onSelect<span class="token punctuation">}</span></span>
      <span class="token attr-name">selectedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>selectedKeys<span class="token punctuation">}</span></span>
      <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var z=c(0),q=c(66);function D(d){return D=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(p){return typeof p}:function(p){return p&&typeof Symbol=="function"&&p.constructor===Symbol&&p!==Symbol.prototype?"symbol":typeof p},D(d)}var f=c(12),h=C(c(0));function i(d){if(typeof WeakMap!="function")return null;var p=new WeakMap,k=new WeakMap;return(i=function(s){return s?k:p})(d)}function C(d,p){if(!p&&d&&d.__esModule)return d;if(d===null||D(d)!=="object"&&typeof d!="function")return{default:d};var k=i(p);if(k&&k.has(d))return k.get(d);var m={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in d)if(l!=="default"&&Object.prototype.hasOwnProperty.call(d,l)){var e=s?Object.getOwnPropertyDescriptor(d,l):null;e&&(e.get||e.set)?Object.defineProperty(m,l,e):m[l]=d[l]}return m.default=d,k&&k.set(d,m),m}function T(d,p){return R(d)||N(d,p)||S(d,p)||K()}function K(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function S(d,p){if(!!d){if(typeof d=="string")return I(d,p);var k=Object.prototype.toString.call(d).slice(8,-1);if(k==="Object"&&d.constructor&&(k=d.constructor.name),k==="Map"||k==="Set")return Array.from(d);if(k==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(k))return I(d,p)}}function I(d,p){(p==null||p>d.length)&&(p=d.length);for(var k=0,m=new Array(p);k<p;k++)m[k]=d[k];return m}function N(d,p){var k=d==null?null:typeof Symbol!="undefined"&&d[Symbol.iterator]||d["@@iterator"];if(k!=null){var m=[],s=!0,l=!1,e,y;try{for(k=k.call(d);!(s=(e=k.next()).done)&&(m.push(e.value),!(p&&m.length===p));s=!0);}catch(n){l=!0,y=n}finally{try{!s&&k.return!=null&&k.return()}finally{if(l)throw y}}return m}}function R(d){if(Array.isArray(d))return d}var L=[{title:"0-0",key:"0-0",children:[{title:"0-0-0",key:"0-0-0",children:[{title:"0-0-0-0",key:"0-0-0-0"},{title:"0-0-0-1",key:"0-0-0-1"},{title:"0-0-0-2",key:"0-0-0-2"}]},{title:"0-0-1",key:"0-0-1",children:[{title:"0-0-1-0",key:"0-0-1-0"},{title:"0-0-1-1",key:"0-0-1-1"},{title:"0-0-1-2",key:"0-0-1-2"}]},{title:"0-0-2",key:"0-0-2"}]},{title:"0-1",key:"0-1",children:[{title:"0-1-0-0",key:"0-1-0-0"},{title:"0-1-0-1",key:"0-1-0-1"},{title:"0-1-0-2",key:"0-1-0-2"}]},{title:"0-2",key:"0-2"}],A=function(){var p=(0,h.useState)(["0-0-0","0-0-1"]),k=T(p,2),m=k[0],s=k[1],l=(0,h.useState)(["0-0-0"]),e=T(l,2),y=e[0],n=e[1],t=(0,h.useState)([]),o=T(t,2),r=o[0],b=o[1],w=(0,h.useState)(!0),x=T(w,2),a=x[0],u=x[1],v=function(U){console.log("onExpand",U),s(U),u(!1)},g=function(U){console.log("onCheck",U),n(U)},O=function(U,E){console.log("onSelect",E),b(U)};return h.default.createElement(f.Tree,{checkable:!0,onExpand:v,expandedKeys:m,autoExpandParent:a,onCheck:g,checkedKeys:y,onSelect:O,selectedKeys:r,treeData:L})},J=A;return z.createElement(J)}}},5006:function(P,Q,c){P.exports={content:{"zh-CN":[["p","\u6700\u7B80\u5355\u7684\u7528\u6CD5\uFF0C\u5C55\u793A\u53EF\u52FE\u9009\uFF0C\u53EF\u9009\u4E2D\uFF0C\u7981\u7528\uFF0C\u9ED8\u8BA4\u5C55\u5F00\u7B49\u529F\u80FD\u3002"]],"en-US":[["p","The most basic usage, tell you how to use checkable, selectable, disabled, defaultExpandKeys, and etc."]]},meta:{order:0,title:{"zh-CN":"\u57FA\u672C","en-US":"Basic"},filename:"components/tree/demo/basic.md",id:"components-tree-demo-basic"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { Tree } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import type { DataNode<span class="token punctuation">,</span> TreeProps } from <span class="token string">'antd/es/tree'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> treeData<span class="token punctuation">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  {
    title<span class="token punctuation">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    key<span class="token punctuation">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      {
        title<span class="token punctuation">:</span> <span class="token string">'parent 1-0'</span><span class="token punctuation">,</span>
        key<span class="token punctuation">:</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span>
        disabled<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
          {
            title<span class="token punctuation">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            key<span class="token punctuation">:</span> <span class="token string">'0-0-0-0'</span><span class="token punctuation">,</span>
            disableCheckbox<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
          {
            title<span class="token punctuation">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            key<span class="token punctuation">:</span> <span class="token string">'0-0-0-1'</span><span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        title<span class="token punctuation">:</span> <span class="token string">'parent 1-1'</span><span class="token punctuation">,</span>
        key<span class="token punctuation">:</span> <span class="token string">'0-0-1'</span><span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>{ title<span class="token punctuation">:</span> <span class="token operator">&lt;</span>span style<span class="token operator">=</span>{{ color<span class="token punctuation">:</span> <span class="token string">'#1890ff'</span> }}<span class="token operator">></span>sss<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'0-0-1-0'</span> }<span class="token punctuation">]</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> onSelect<span class="token punctuation">:</span> TreeProps<span class="token punctuation">[</span><span class="token string">'onSelect'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>selectedKeys<span class="token punctuation">,</span> info<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'selected'</span><span class="token punctuation">,</span> selectedKeys<span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> onCheck<span class="token punctuation">:</span> TreeProps<span class="token punctuation">[</span><span class="token string">'onCheck'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>checkedKeys<span class="token punctuation">,</span> info<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onCheck'</span><span class="token punctuation">,</span> checkedKeys<span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  return <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Tree
      checkable
      defaultExpandedKeys<span class="token operator">=</span>{<span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">,</span> <span class="token string">'0-0-1'</span><span class="token punctuation">]</span>}
      defaultSelectedKeys<span class="token operator">=</span>{<span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">,</span> <span class="token string">'0-0-1'</span><span class="token punctuation">]</span>}
      defaultCheckedKeys<span class="token operator">=</span>{<span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">,</span> <span class="token string">'0-0-1'</span><span class="token punctuation">]</span>}
      onSelect<span class="token operator">=</span>{onSelect}
      onCheck<span class="token operator">=</span>{onCheck}
      treeData<span class="token operator">=</span>{treeData}
    <span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Tree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> DataNode<span class="token punctuation">,</span> TreeProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd/es/tree'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> treeData<span class="token operator">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    key<span class="token operator">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'parent 1-0'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span>
        disabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            key<span class="token operator">:</span> <span class="token string">'0-0-0-0'</span><span class="token punctuation">,</span>
            disableCheckbox<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            key<span class="token operator">:</span> <span class="token string">'0-0-0-1'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'parent 1-1'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'0-0-1'</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> color<span class="token operator">:</span> <span class="token string">'#1890ff'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>sss<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'0-0-1-0'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> onSelect<span class="token operator">:</span> TreeProps<span class="token punctuation">[</span><span class="token string">'onSelect'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>selectedKeys<span class="token punctuation">,</span> info<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'selected'</span><span class="token punctuation">,</span> selectedKeys<span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> onCheck<span class="token operator">:</span> TreeProps<span class="token punctuation">[</span><span class="token string">'onCheck'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>checkedKeys<span class="token punctuation">,</span> info<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onCheck'</span><span class="token punctuation">,</span> checkedKeys<span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tree</span></span>
      <span class="token attr-name">checkable</span>
      <span class="token attr-name">defaultExpandedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">,</span> <span class="token string">'0-0-1'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">defaultSelectedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">,</span> <span class="token string">'0-0-1'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">defaultCheckedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">,</span> <span class="token string">'0-0-1'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onSelect<span class="token punctuation">}</span></span>
      <span class="token attr-name">onCheck</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onCheck<span class="token punctuation">}</span></span>
      <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Tree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> treeData <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'parent 1-0'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">disabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-0-0'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">disableCheckbox</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-0-1'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'parent 1-1'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-1'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token punctuation">(</span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span>
                <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
                  <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#1890ff'</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
              <span class="token punctuation">></span></span>
                sss
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-1-0'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onSelect</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">selectedKeys<span class="token punctuation">,</span> info</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'selected'</span><span class="token punctuation">,</span> selectedKeys<span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onCheck</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">checkedKeys<span class="token punctuation">,</span> info</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onCheck'</span><span class="token punctuation">,</span> checkedKeys<span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tree</span></span>
      <span class="token attr-name">checkable</span>
      <span class="token attr-name">defaultExpandedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">,</span> <span class="token string">'0-0-1'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">defaultSelectedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">,</span> <span class="token string">'0-0-1'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">defaultCheckedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">,</span> <span class="token string">'0-0-1'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onSelect<span class="token punctuation">}</span></span>
      <span class="token attr-name">onCheck</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onCheck<span class="token punctuation">}</span></span>
      <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var z=c(0),q=c(66),D=c(12),f=h(c(0));function h(K){return K&&K.__esModule?K:{default:K}}var i=[{title:"parent 1",key:"0-0",children:[{title:"parent 1-0",key:"0-0-0",disabled:!0,children:[{title:"leaf",key:"0-0-0-0",disableCheckbox:!0},{title:"leaf",key:"0-0-0-1"}]},{title:"parent 1-1",key:"0-0-1",children:[{title:f.default.createElement("span",{style:{color:"#1890ff"}},"sss"),key:"0-0-1-0"}]}]}],C=function(){var S=function(R,L){console.log("selected",R,L)},I=function(R,L){console.log("onCheck",R,L)};return f.default.createElement(D.Tree,{checkable:!0,defaultExpandedKeys:["0-0-0","0-0-1"],defaultSelectedKeys:["0-0-0","0-0-1"],defaultCheckedKeys:["0-0-0","0-0-1"],onSelect:S,onCheck:I,treeData:i})},T=C;return z.createElement(T)}}},5007:function(P,Q,c){P.exports={content:{"zh-CN":[["p","\u5927\u6570\u636E\u5C55\u793A\u3002"]],"en-US":[["p","Plenty of tree nodes."]]},meta:{order:99,title:{"zh-CN":"\u5927\u6570\u636E","en-US":"Big data"},debug:!0,filename:"components/tree/demo/big-data.md",id:"components-tree-demo-big-data"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { Tree } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import type { DataNode } from <span class="token string">'antd/es/tree'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> treeData<span class="token punctuation">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span>let i <span class="token operator">=</span> <span class="token number">0</span><span class="token comment" spellcheck="true">; i &lt; 100; i += 1) {</span>
  <span class="token keyword">const</span> children<span class="token punctuation">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span>let j <span class="token operator">=</span> <span class="token number">0</span><span class="token comment" spellcheck="true">; j &lt; 100; j += 1) {</span>
    children<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>{
      title<span class="token punctuation">:</span> \`child \${i}<span class="token operator">-</span>\${j}\`<span class="token punctuation">,</span>
      key<span class="token punctuation">:</span> \`l<span class="token operator">-</span>\${i}<span class="token operator">-</span>\${j}\`<span class="token punctuation">,</span>
    }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }

  treeData<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>{
    title<span class="token punctuation">:</span> \`parent \${i}\`<span class="token punctuation">,</span>
    key<span class="token punctuation">:</span> \`l<span class="token operator">-</span>\${i}\`<span class="token punctuation">,</span>
    children<span class="token punctuation">,</span>
  }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token operator">&lt;</span>Tree defaultExpandAll height<span class="token operator">=</span>{<span class="token number">400</span>} treeData<span class="token operator">=</span>{treeData} <span class="token operator">/</span><span class="token operator">></span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Tree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> DataNode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd/es/tree'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> treeData<span class="token operator">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> children<span class="token operator">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> j <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    children<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      title<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">child </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>j<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      key<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">l-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>j<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  treeData<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">parent </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    key<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">l-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    children<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tree</span></span> <span class="token attr-name">defaultExpandAll</span> <span class="token attr-name">height</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">400</span><span class="token punctuation">}</span></span> <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Tree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> treeData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> children <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> j <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    children<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">child </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>j<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">l-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>j<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  treeData<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">parent </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">l-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    children<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tree</span></span> <span class="token attr-name">defaultExpandAll</span> <span class="token attr-name">height</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">400</span><span class="token punctuation">}</span></span> <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var z=c(0),q=c(66),D=c(12),f=h(c(0));function h(N){return N&&N.__esModule?N:{default:N}}for(var i=[],C=0;C<100;C+=1){for(var T=[],K=0;K<100;K+=1)T.push({title:"child ".concat(C,"-").concat(K),key:"l-".concat(C,"-").concat(K)});i.push({title:"parent ".concat(C),key:"l-".concat(C),children:T})}var S=function(){return f.default.createElement(D.Tree,{defaultExpandAll:!0,height:400,treeData:i})},I=S;return z.createElement(I)}}},5008:function(P,Q,c){P.exports={content:{"zh-CN":[["p","\u53EF\u4EE5\u9488\u5BF9\u4E0D\u540C\u7684\u8282\u70B9\u5B9A\u5236\u56FE\u6807\u3002"]],"en-US":[["p","You can customize icons for different nodes."]]},meta:{order:6,title:{"zh-CN":"\u81EA\u5B9A\u4E49\u56FE\u6807","en-US":"Customize Icon"},filename:"components/tree/demo/customized-icon.md",id:"components-tree-demo-customized-icon"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import {
  DownOutlined<span class="token punctuation">,</span>
  FrownFilled<span class="token punctuation">,</span>
  FrownOutlined<span class="token punctuation">,</span>
  MehOutlined<span class="token punctuation">,</span>
  SmileOutlined<span class="token punctuation">,</span>
} from <span class="token string">'@ant-design/icons'</span><span class="token comment" spellcheck="true">;</span>
import { Tree } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import type { DataNode } from <span class="token string">'antd/es/tree'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> treeData<span class="token punctuation">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  {
    title<span class="token punctuation">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    key<span class="token punctuation">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
    icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>SmileOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      {
        title<span class="token punctuation">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
        key<span class="token punctuation">:</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span>
        icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>MehOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        title<span class="token punctuation">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
        key<span class="token punctuation">:</span> <span class="token string">'0-0-1'</span><span class="token punctuation">,</span>
        icon<span class="token punctuation">:</span> <span class="token punctuation">(</span>{ selected }<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>selected <span class="token operator">?</span> <span class="token operator">&lt;</span>FrownFilled <span class="token operator">/</span><span class="token operator">></span> <span class="token punctuation">:</span> <span class="token operator">&lt;</span>FrownOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Tree
    showIcon
    defaultExpandAll
    defaultSelectedKeys<span class="token operator">=</span>{<span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">]</span>}
    switcherIcon<span class="token operator">=</span>{<span class="token operator">&lt;</span>DownOutlined <span class="token operator">/</span><span class="token operator">></span>}
    treeData<span class="token operator">=</span>{treeData}
  <span class="token operator">/</span><span class="token operator">></span>
<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span>
  DownOutlined<span class="token punctuation">,</span>
  FrownFilled<span class="token punctuation">,</span>
  FrownOutlined<span class="token punctuation">,</span>
  MehOutlined<span class="token punctuation">,</span>
  SmileOutlined<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Tree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> DataNode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd/es/tree'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> treeData<span class="token operator">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    key<span class="token operator">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
    icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">SmileOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span>
        icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MehOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'0-0-1'</span><span class="token punctuation">,</span>
        <span class="token function-variable function">icon</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> selected <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>selected <span class="token operator">?</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FrownFilled</span></span> <span class="token punctuation">/></span></span> <span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FrownOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tree</span></span>
    <span class="token attr-name">showIcon</span>
    <span class="token attr-name">defaultExpandAll</span>
    <span class="token attr-name">defaultSelectedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">switcherIcon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DownOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span>
    <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span>
  DownOutlined<span class="token punctuation">,</span>
  FrownFilled<span class="token punctuation">,</span>
  FrownOutlined<span class="token punctuation">,</span>
  MehOutlined<span class="token punctuation">,</span>
  SmileOutlined<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Tree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> treeData <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">SmileOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MehOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-1'</span><span class="token punctuation">,</span>
        <span class="token function-variable function">icon</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> selected <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>selected <span class="token operator">?</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FrownFilled</span></span> <span class="token punctuation">/></span></span> <span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FrownOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tree</span></span>
    <span class="token attr-name">showIcon</span>
    <span class="token attr-name">defaultExpandAll</span>
    <span class="token attr-name">defaultSelectedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">switcherIcon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DownOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span>
    <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var z=c(0),q=c(66),D=c(63),f=c(12),h=i(c(0));function i(S){return S&&S.__esModule?S:{default:S}}var C=[{title:"parent 1",key:"0-0",icon:h.default.createElement(D.SmileOutlined,null),children:[{title:"leaf",key:"0-0-0",icon:h.default.createElement(D.MehOutlined,null)},{title:"leaf",key:"0-0-1",icon:function(I){var N=I.selected;return N?h.default.createElement(D.FrownFilled,null):h.default.createElement(D.FrownOutlined,null)}}]}],T=function(){return h.default.createElement(f.Tree,{showIcon:!0,defaultExpandAll:!0,defaultSelectedKeys:["0-0-0"],switcherIcon:h.default.createElement(D.DownOutlined,null),treeData:C})},K=T;return z.createElement(K)}}},5009:function(P,Q,c){P.exports={content:{"zh-CN":[["p","\u5185\u7F6E\u7684\u76EE\u5F55\u6811\uFF0C",["code","multiple"]," \u6A21\u5F0F\u652F\u6301 ",["code","ctrl(Windows)"]," / ",["code","command(Mac)"]," \u590D\u9009\u3002"]],"en-US":[["p","Built-in directory tree. ",["code","multiple"]," support ",["code","ctrl(Windows)"]," / ",["code","command(Mac)"]," selection."]]},meta:{order:7,title:{"zh-CN":"\u76EE\u5F55","en-US":"directory"},filename:"components/tree/demo/directory.md",id:"components-tree-demo-directory"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { Tree } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import type { DataNode<span class="token punctuation">,</span> DirectoryTreeProps } from <span class="token string">'antd/es/tree'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> { DirectoryTree } <span class="token operator">=</span> Tree<span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> treeData<span class="token punctuation">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  {
    title<span class="token punctuation">:</span> <span class="token string">'parent 0'</span><span class="token punctuation">,</span>
    key<span class="token punctuation">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      { title<span class="token punctuation">:</span> <span class="token string">'leaf 0-0'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span> isLeaf<span class="token punctuation">:</span> <span class="token boolean">true</span> }<span class="token punctuation">,</span>
      { title<span class="token punctuation">:</span> <span class="token string">'leaf 0-1'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'0-0-1'</span><span class="token punctuation">,</span> isLeaf<span class="token punctuation">:</span> <span class="token boolean">true</span> }<span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
  {
    title<span class="token punctuation">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    key<span class="token punctuation">:</span> <span class="token string">'0-1'</span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      { title<span class="token punctuation">:</span> <span class="token string">'leaf 1-0'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'0-1-0'</span><span class="token punctuation">,</span> isLeaf<span class="token punctuation">:</span> <span class="token boolean">true</span> }<span class="token punctuation">,</span>
      { title<span class="token punctuation">:</span> <span class="token string">'leaf 1-1'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'0-1-1'</span><span class="token punctuation">,</span> isLeaf<span class="token punctuation">:</span> <span class="token boolean">true</span> }<span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> onSelect<span class="token punctuation">:</span> DirectoryTreeProps<span class="token punctuation">[</span><span class="token string">'onSelect'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>keys<span class="token punctuation">,</span> info<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Trigger Select'</span><span class="token punctuation">,</span> keys<span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> onExpand<span class="token punctuation">:</span> DirectoryTreeProps<span class="token punctuation">[</span><span class="token string">'onExpand'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>keys<span class="token punctuation">,</span> info<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Trigger Expand'</span><span class="token punctuation">,</span> keys<span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  return <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>DirectoryTree
      multiple
      defaultExpandAll
      onSelect<span class="token operator">=</span>{onSelect}
      onExpand<span class="token operator">=</span>{onExpand}
      treeData<span class="token operator">=</span>{treeData}
    <span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Tree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> DataNode<span class="token punctuation">,</span> DirectoryTreeProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd/es/tree'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> DirectoryTree <span class="token punctuation">}</span> <span class="token operator">=</span> Tree<span class="token punctuation">;</span>

<span class="token keyword">const</span> treeData<span class="token operator">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">'parent 0'</span><span class="token punctuation">,</span>
    key<span class="token operator">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'leaf 0-0'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span> isLeaf<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'leaf 0-1'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'0-0-1'</span><span class="token punctuation">,</span> isLeaf<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    key<span class="token operator">:</span> <span class="token string">'0-1'</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'leaf 1-0'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'0-1-0'</span><span class="token punctuation">,</span> isLeaf<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'leaf 1-1'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'0-1-1'</span><span class="token punctuation">,</span> isLeaf<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> onSelect<span class="token operator">:</span> DirectoryTreeProps<span class="token punctuation">[</span><span class="token string">'onSelect'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>keys<span class="token punctuation">,</span> info<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Trigger Select'</span><span class="token punctuation">,</span> keys<span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> onExpand<span class="token operator">:</span> DirectoryTreeProps<span class="token punctuation">[</span><span class="token string">'onExpand'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>keys<span class="token punctuation">,</span> info<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Trigger Expand'</span><span class="token punctuation">,</span> keys<span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DirectoryTree</span></span>
      <span class="token attr-name">multiple</span>
      <span class="token attr-name">defaultExpandAll</span>
      <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onSelect<span class="token punctuation">}</span></span>
      <span class="token attr-name">onExpand</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onExpand<span class="token punctuation">}</span></span>
      <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Tree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> DirectoryTree <span class="token punctuation">}</span> <span class="token operator">=</span> Tree<span class="token punctuation">;</span>
<span class="token keyword">const</span> treeData <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'parent 0'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'leaf 0-0'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">isLeaf</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'leaf 0-1'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-1'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">isLeaf</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-1'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'leaf 1-0'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-1-0'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">isLeaf</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'leaf 1-1'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-1-1'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">isLeaf</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onSelect</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">keys<span class="token punctuation">,</span> info</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Trigger Select'</span><span class="token punctuation">,</span> keys<span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onExpand</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">keys<span class="token punctuation">,</span> info</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Trigger Expand'</span><span class="token punctuation">,</span> keys<span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DirectoryTree</span></span>
      <span class="token attr-name">multiple</span>
      <span class="token attr-name">defaultExpandAll</span>
      <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onSelect<span class="token punctuation">}</span></span>
      <span class="token attr-name">onExpand</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onExpand<span class="token punctuation">}</span></span>
      <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var z=c(0),q=c(66),D=c(12),f=h(c(0));function h(S){return S&&S.__esModule?S:{default:S}}var i=D.Tree.DirectoryTree,C=[{title:"parent 0",key:"0-0",children:[{title:"leaf 0-0",key:"0-0-0",isLeaf:!0},{title:"leaf 0-1",key:"0-0-1",isLeaf:!0}]},{title:"parent 1",key:"0-1",children:[{title:"leaf 1-0",key:"0-1-0",isLeaf:!0},{title:"leaf 1-1",key:"0-1-1",isLeaf:!0}]}],T=function(){var I=function(L,A){console.log("Trigger Select",L,A)},N=function(L,A){console.log("Trigger Expand",L,A)};return f.default.createElement(i,{multiple:!0,defaultExpandAll:!0,onSelect:I,onExpand:N,treeData:C})},K=T;return z.createElement(K)}}},5010:function(P,Q,c){P.exports={content:[],meta:{order:98,title:{"zh-CN":"Drag Debug","en-US":"Drag Debug"},debug:!0,filename:"components/tree/demo/drag-debug.md",id:"components-tree-demo-drag-debug"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:`<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Tree<span class="token punctuation">,</span> Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> CarryOutOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> y <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> z <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> gData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> generateData <span class="token operator">=</span> <span class="token punctuation">(</span>_level<span class="token punctuation">,</span> _preKey<span class="token punctuation">,</span> _tns<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> preKey <span class="token operator">=</span> _preKey <span class="token operator">||</span> <span class="token string">'0'</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> tns <span class="token operator">=</span> _tns <span class="token operator">||</span> gData<span class="token punctuation">;</span>

  <span class="token keyword">const</span> children <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> x<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> key <span class="token operator">=</span> <span class="token template-string"><span class="token string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>preKey<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\`</span></span><span class="token punctuation">;</span>
    tns<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> title<span class="token punctuation">:</span> key<span class="token punctuation">,</span> key<span class="token punctuation">,</span> icon<span class="token punctuation">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CarryOutOutlined</span> <span class="token punctuation">/></span></span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      children<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>_level <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> tns<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> level <span class="token operator">=</span> _level <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
  children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    tns<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>children <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">generateData</span><span class="token punctuation">(</span>level<span class="token punctuation">,</span> key<span class="token punctuation">,</span> tns<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">generateData</span><span class="token punctuation">(</span>z<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  state <span class="token operator">=</span> <span class="token punctuation">{</span>
    gData<span class="token punctuation">,</span>
    expandedKeys<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">'0-0'</span><span class="token punctuation">,</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span> <span class="token string">'0-0-0-0'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    showLine<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    showIcon<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    showLeafIcon<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  onDragEnter <span class="token operator">=</span> info <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment" spellcheck="true">// expandedKeys \u9700\u8981\u53D7\u63A7\u65F6\u8BBE\u7F6E</span>
    <span class="token comment" spellcheck="true">// this.setState({</span>
    <span class="token comment" spellcheck="true">//   expandedKeys: info.expandedKeys,</span>
    <span class="token comment" spellcheck="true">// });</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  onDrop <span class="token operator">=</span> info <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> dropKey <span class="token operator">=</span> info<span class="token punctuation">.</span>node<span class="token punctuation">.</span>key<span class="token punctuation">;</span>
    <span class="token keyword">const</span> dragKey <span class="token operator">=</span> info<span class="token punctuation">.</span>dragNode<span class="token punctuation">.</span>key<span class="token punctuation">;</span>
    <span class="token keyword">const</span> dropPos <span class="token operator">=</span> info<span class="token punctuation">.</span>node<span class="token punctuation">.</span>pos<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'-'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> dropPosition <span class="token operator">=</span> info<span class="token punctuation">.</span>dropPosition <span class="token operator">-</span> <span class="token function">Number</span><span class="token punctuation">(</span>dropPos<span class="token punctuation">[</span>dropPos<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> loop <span class="token operator">=</span> <span class="token punctuation">(</span>data<span class="token punctuation">,</span> key<span class="token punctuation">,</span> callback<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> data<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>key <span class="token operator">===</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token function">callback</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>children<span class="token punctuation">,</span> key<span class="token punctuation">,</span> callback<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>gData<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment" spellcheck="true">// Find dragObject</span>
    <span class="token keyword">let</span> dragObj<span class="token punctuation">;</span>
    <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> dragKey<span class="token punctuation">,</span> <span class="token punctuation">(</span>item<span class="token punctuation">,</span> index<span class="token punctuation">,</span> arr<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
      arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      dragObj <span class="token operator">=</span> item<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>info<span class="token punctuation">.</span>dropToGap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment" spellcheck="true">// Drop on the content</span>
      <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> dropKey<span class="token punctuation">,</span> item <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
        item<span class="token punctuation">.</span>children <span class="token operator">=</span> item<span class="token punctuation">.</span>children <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment" spellcheck="true">// where to insert \u793A\u4F8B\u6DFB\u52A0\u5230\u5C3E\u90E8\uFF0C\u53EF\u4EE5\u662F\u968F\u610F\u4F4D\u7F6E</span>
        item<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>dragObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>
      <span class="token punctuation">(</span>info<span class="token punctuation">.</span>node<span class="token punctuation">.</span>props<span class="token punctuation">.</span>children <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token comment" spellcheck="true">// Has children</span>
      info<span class="token punctuation">.</span>node<span class="token punctuation">.</span>props<span class="token punctuation">.</span>expanded <span class="token operator">&amp;&amp;</span> <span class="token comment" spellcheck="true">// Is expanded</span>
      dropPosition <span class="token operator">===</span> <span class="token number">1</span> <span class="token comment" spellcheck="true">// On the bottom gap</span>
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> dropKey<span class="token punctuation">,</span> item <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
        item<span class="token punctuation">.</span>children <span class="token operator">=</span> item<span class="token punctuation">.</span>children <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment" spellcheck="true">// where to insert \u793A\u4F8B\u6DFB\u52A0\u5230\u5934\u90E8\uFF0C\u53EF\u4EE5\u662F\u968F\u610F\u4F4D\u7F6E</span>
        item<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>dragObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> ar<span class="token punctuation">;</span>
      <span class="token keyword">let</span> i<span class="token punctuation">;</span>
      <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> dropKey<span class="token punctuation">,</span> <span class="token punctuation">(</span>item<span class="token punctuation">,</span> index<span class="token punctuation">,</span> arr<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
        ar <span class="token operator">=</span> arr<span class="token punctuation">;</span>
        i <span class="token operator">=</span> index<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>dropPosition <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        ar<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> dragObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        ar<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> dragObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      gData<span class="token punctuation">:</span> data<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  setShowLine <span class="token operator">=</span> showLine <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> showLeafIcon <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>showLine<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>showLeafIcon<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          showLine<span class="token punctuation">:</span> <span class="token punctuation">{</span>
            showLeafIcon<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          showLine<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        showLine<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  setShowIcon <span class="token operator">=</span> showIcon <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      showIcon<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  setShowLeafIcon <span class="token operator">=</span> showLeafIcon <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      showLeafIcon<span class="token punctuation">,</span>
      showLine<span class="token punctuation">:</span> <span class="token punctuation">{</span> showLeafIcon <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> showLine<span class="token punctuation">,</span> showIcon<span class="token punctuation">,</span> showLeafIcon<span class="token punctuation">,</span> expandedKeys <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> setShowLine<span class="token punctuation">,</span> setShowIcon<span class="token punctuation">,</span> setShowLeafIcon <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span><span class="token operator">></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginBottom<span class="token punctuation">:</span> <span class="token number">16</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
          showLine<span class="token punctuation">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>showLine<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>setShowLine<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          showIcon<span class="token punctuation">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>showIcon<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>setShowIcon<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          showLeafIcon<span class="token punctuation">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>showLeafIcon<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>setShowLeafIcon<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tree</span>
          <span class="token attr-name">showLine</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>showLine<span class="token punctuation">}</span></span>
          <span class="token attr-name">showIcon</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>showIcon<span class="token punctuation">}</span></span>
          <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>draggable-tree<span class="token punctuation">"</span></span>
          <span class="token attr-name">defaultExpandedKeys</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>expandedKeys<span class="token punctuation">}</span></span>
          <span class="token attr-name">draggable</span>
          <span class="token attr-name">blockNode</span>
          <span class="token attr-name">onDragEnter</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onDragEnter<span class="token punctuation">}</span></span>
          <span class="token attr-name">onDrop</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onDrop<span class="token punctuation">}</span></span>
          <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>gData<span class="token punctuation">}</span></span>
        <span class="token punctuation">/></span></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`}],highlightedCodes:{jsx:`<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Tree<span class="token punctuation">,</span> Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> CarryOutOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> y <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> z <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> gData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">generateData</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">_level<span class="token punctuation">,</span> _preKey<span class="token punctuation">,</span> _tns</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> preKey <span class="token operator">=</span> _preKey <span class="token operator">||</span> <span class="token string">'0'</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> tns <span class="token operator">=</span> _tns <span class="token operator">||</span> gData<span class="token punctuation">;</span>

  <span class="token keyword">const</span> children <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> x<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> key <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>preKey<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
    tns<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> key<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      children<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>_level <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> tns<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> level <span class="token operator">=</span> _level <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
  children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    tns<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>children <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">generateData</span><span class="token punctuation">(</span>level<span class="token punctuation">,</span> key<span class="token punctuation">,</span> tns<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">generateData</span><span class="token punctuation">(</span>z<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  state <span class="token operator">=</span> <span class="token punctuation">{</span>
    gData<span class="token punctuation">,</span>
    <span class="token literal-property property">expandedKeys</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'0-0'</span><span class="token punctuation">,</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span> <span class="token string">'0-0-0-0'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">showLine</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">showIcon</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">showLeafIcon</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function-variable function">onDragEnter</span> <span class="token operator">=</span> <span class="token parameter">info</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// expandedKeys \u9700\u8981\u53D7\u63A7\u65F6\u8BBE\u7F6E</span>
    <span class="token comment">// this.setState({</span>
    <span class="token comment">//   expandedKeys: info.expandedKeys,</span>
    <span class="token comment">// });</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function-variable function">onDrop</span> <span class="token operator">=</span> <span class="token parameter">info</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> dropKey <span class="token operator">=</span> info<span class="token punctuation">.</span>node<span class="token punctuation">.</span>key<span class="token punctuation">;</span>
    <span class="token keyword">const</span> dragKey <span class="token operator">=</span> info<span class="token punctuation">.</span>dragNode<span class="token punctuation">.</span>key<span class="token punctuation">;</span>
    <span class="token keyword">const</span> dropPos <span class="token operator">=</span> info<span class="token punctuation">.</span>node<span class="token punctuation">.</span>pos<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'-'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> dropPosition <span class="token operator">=</span> info<span class="token punctuation">.</span>dropPosition <span class="token operator">-</span> <span class="token function">Number</span><span class="token punctuation">(</span>dropPos<span class="token punctuation">[</span>dropPos<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token function-variable function">loop</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> key<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> data<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>key <span class="token operator">===</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token function">callback</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>children<span class="token punctuation">,</span> key<span class="token punctuation">,</span> callback<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>gData<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">// Find dragObject</span>
    <span class="token keyword">let</span> dragObj<span class="token punctuation">;</span>
    <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> dragKey<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index<span class="token punctuation">,</span> arr</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      dragObj <span class="token operator">=</span> item<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>info<span class="token punctuation">.</span>dropToGap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// Drop on the content</span>
      <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> dropKey<span class="token punctuation">,</span> <span class="token parameter">item</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        item<span class="token punctuation">.</span>children <span class="token operator">=</span> item<span class="token punctuation">.</span>children <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">// where to insert \u793A\u4F8B\u6DFB\u52A0\u5230\u5C3E\u90E8\uFF0C\u53EF\u4EE5\u662F\u968F\u610F\u4F4D\u7F6E</span>
        item<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>dragObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>
      <span class="token punctuation">(</span>info<span class="token punctuation">.</span>node<span class="token punctuation">.</span>props<span class="token punctuation">.</span>children <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token comment">// Has children</span>
      info<span class="token punctuation">.</span>node<span class="token punctuation">.</span>props<span class="token punctuation">.</span>expanded <span class="token operator">&amp;&amp;</span> <span class="token comment">// Is expanded</span>
      dropPosition <span class="token operator">===</span> <span class="token number">1</span> <span class="token comment">// On the bottom gap</span>
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> dropKey<span class="token punctuation">,</span> <span class="token parameter">item</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        item<span class="token punctuation">.</span>children <span class="token operator">=</span> item<span class="token punctuation">.</span>children <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">// where to insert \u793A\u4F8B\u6DFB\u52A0\u5230\u5934\u90E8\uFF0C\u53EF\u4EE5\u662F\u968F\u610F\u4F4D\u7F6E</span>
        item<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>dragObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> ar<span class="token punctuation">;</span>
      <span class="token keyword">let</span> i<span class="token punctuation">;</span>
      <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> dropKey<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index<span class="token punctuation">,</span> arr</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        ar <span class="token operator">=</span> arr<span class="token punctuation">;</span>
        i <span class="token operator">=</span> index<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>dropPosition <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        ar<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> dragObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        ar<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> dragObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">gData</span><span class="token operator">:</span> data<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function-variable function">setShowLine</span> <span class="token operator">=</span> <span class="token parameter">showLine</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> showLeafIcon <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>showLine<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>showLeafIcon<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">showLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">showLeafIcon</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">showLine</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">showLine</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function-variable function">setShowIcon</span> <span class="token operator">=</span> <span class="token parameter">showIcon</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      showIcon<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function-variable function">setShowLeafIcon</span> <span class="token operator">=</span> <span class="token parameter">showLeafIcon</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      showLeafIcon<span class="token punctuation">,</span>
      <span class="token literal-property property">showLine</span><span class="token operator">:</span> <span class="token punctuation">{</span> showLeafIcon <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> showLine<span class="token punctuation">,</span> showIcon<span class="token punctuation">,</span> showLeafIcon<span class="token punctuation">,</span> expandedKeys <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> setShowLine<span class="token punctuation">,</span> setShowIcon<span class="token punctuation">,</span> setShowLeafIcon <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">marginBottom</span><span class="token operator">:</span> <span class="token number">16</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
          <span class="token literal-property property">showLine</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span> <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>showLine<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>setShowLine<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token literal-property property">showIcon</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span> <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>showIcon<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>setShowIcon<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token literal-property property">showLeafIcon</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span> <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>showLeafIcon<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>setShowLeafIcon<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tree</span></span>
          <span class="token attr-name">showLine</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>showLine<span class="token punctuation">}</span></span>
          <span class="token attr-name">showIcon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>showIcon<span class="token punctuation">}</span></span>
          <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>draggable-tree<span class="token punctuation">"</span></span>
          <span class="token attr-name">defaultExpandedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>expandedKeys<span class="token punctuation">}</span></span>
          <span class="token attr-name">draggable</span>
          <span class="token attr-name">blockNode</span>
          <span class="token attr-name">onDragEnter</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onDragEnter<span class="token punctuation">}</span></span>
          <span class="token attr-name">onDrop</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onDrop<span class="token punctuation">}</span></span>
          <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>gData<span class="token punctuation">}</span></span>
        <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`},preview:function(){var z=c(0),q=c(66);function D(a){return D=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},D(a)}var f=C(c(0)),h=c(12),i=c(63);function C(a){return a&&a.__esModule?a:{default:a}}function T(a){return N(a)||I(a)||S(a)||K()}function K(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function S(a,u){if(!!a){if(typeof a=="string")return R(a,u);var v=Object.prototype.toString.call(a).slice(8,-1);if(v==="Object"&&a.constructor&&(v=a.constructor.name),v==="Map"||v==="Set")return Array.from(a);if(v==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v))return R(a,u)}}function I(a){if(typeof Symbol!="undefined"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function N(a){if(Array.isArray(a))return R(a)}function R(a,u){(u==null||u>a.length)&&(u=a.length);for(var v=0,g=new Array(u);v<u;v++)g[v]=a[v];return g}function L(a,u){if(!(a instanceof u))throw new TypeError("Cannot call a class as a function")}function A(a,u){for(var v=0;v<u.length;v++){var g=u[v];g.enumerable=g.enumerable||!1,g.configurable=!0,"value"in g&&(g.writable=!0),Object.defineProperty(a,g.key,g)}}function J(a,u,v){return u&&A(a.prototype,u),v&&A(a,v),Object.defineProperty(a,"prototype",{writable:!1}),a}function d(a,u){if(typeof u!="function"&&u!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(u&&u.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),Object.defineProperty(a,"prototype",{writable:!1}),u&&p(a,u)}function p(a,u){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(g,O){return g.__proto__=O,g},p(a,u)}function k(a){var u=l();return function(){var g=e(a),O;if(u){var M=e(this).constructor;O=Reflect.construct(g,arguments,M)}else O=g.apply(this,arguments);return m(this,O)}}function m(a,u){if(u&&(D(u)==="object"||typeof u=="function"))return u;if(u!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return s(a)}function s(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function l(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(a){return!1}}function e(a){return e=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(v){return v.__proto__||Object.getPrototypeOf(v)},e(a)}function y(a,u,v){return u in a?Object.defineProperty(a,u,{value:v,enumerable:!0,configurable:!0,writable:!0}):a[u]=v,a}var n=3,t=2,o=1,r=[],b=function a(u,v,g){for(var O=v||"0",M=g||r,U=[],E=0;E<n;E++){var H="".concat(O,"-").concat(E);M.push({title:H,key:H,icon:f.default.createElement(i.CarryOutOutlined,null)}),E<t&&U.push(H)}if(u<0)return M;var _=u-1;U.forEach(function($,V){return M[V].children=[],a(_,$,M[V].children)})};b(o);var w=function(a){d(v,a);var u=k(v);function v(){var g;L(this,v);for(var O=arguments.length,M=new Array(O),U=0;U<O;U++)M[U]=arguments[U];return g=u.call.apply(u,[this].concat(M)),y(s(g),"state",{gData:r,expandedKeys:["0-0","0-0-0","0-0-0-0"],showLine:!0,showIcon:!0,showLeafIcon:!0}),y(s(g),"onDragEnter",function(E){console.log(E)}),y(s(g),"onDrop",function(E){console.log(E);var H=E.node.key,_=E.dragNode.key,$=E.node.pos.split("-"),V=E.dropPosition-Number($[$.length-1]),Y=function B(G,sn,an){for(var nn=0;nn<G.length;nn++){if(G[nn].key===sn)return an(G[nn],nn,G);G[nn].children&&B(G[nn].children,sn,an)}},F=T(g.state.gData),j;if(Y(F,_,function(B,G,sn){sn.splice(G,1),j=B}),!E.dropToGap)Y(F,H,function(B){B.children=B.children||[],B.children.push(j)});else if((E.node.props.children||[]).length>0&&E.node.props.expanded&&V===1)Y(F,H,function(B){B.children=B.children||[],B.children.unshift(j)});else{var W,X;Y(F,H,function(B,G,sn){W=sn,X=G}),V===-1?W.splice(X,0,j):W.splice(X+1,0,j)}g.setState({gData:F})}),y(s(g),"setShowLine",function(E){var H=g.state.showLeafIcon;E?H?g.setState({showLine:{showLeafIcon:!0}}):g.setState({showLine:!0}):g.setState({showLine:!1})}),y(s(g),"setShowIcon",function(E){g.setState({showIcon:E})}),y(s(g),"setShowLeafIcon",function(E){g.setState({showLeafIcon:E,showLine:{showLeafIcon:E}})}),g}return J(v,[{key:"render",value:function(){var O=this.state,M=O.showLine,U=O.showIcon,E=O.showLeafIcon,H=O.expandedKeys,_=this.setShowLine,$=this.setShowIcon,V=this.setShowLeafIcon;return f.default.createElement(f.default.Fragment,null,f.default.createElement("div",{style:{marginBottom:16}},"showLine: ",f.default.createElement(h.Switch,{checked:M,onChange:_}),f.default.createElement("br",null),f.default.createElement("br",null),"showIcon: ",f.default.createElement(h.Switch,{checked:U,onChange:$}),f.default.createElement("br",null),f.default.createElement("br",null),"showLeafIcon: ",f.default.createElement(h.Switch,{checked:E,onChange:V})),f.default.createElement(h.Tree,{showLine:M,showIcon:U,className:"draggable-tree",defaultExpandedKeys:H,draggable:!0,blockNode:!0,onDragEnter:this.onDragEnter,onDrop:this.onDrop,treeData:this.state.gData}))}}]),v}(f.default.Component),x=w;return z.createElement(x)}}},5011:function(P,Q,c){P.exports={content:{"zh-CN":[["p","\u5C06\u8282\u70B9\u62D6\u62FD\u5230\u5176\u4ED6\u8282\u70B9\u5185\u90E8\u6216\u524D\u540E\u3002"]],"en-US":[["p","Drag treeNode to insert after the other treeNode or insert into the other parent TreeNode."]]},meta:{order:2,title:{"zh-CN":"\u62D6\u52A8\u793A\u4F8B","en-US":"draggable"},filename:"components/tree/demo/draggable.md",id:"components-tree-demo-draggable"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { Tree } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import type { DataNode<span class="token punctuation">,</span> TreeProps } from <span class="token string">'antd/es/tree'</span><span class="token comment" spellcheck="true">;</span>
import React<span class="token punctuation">,</span> { useState } from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token number">3</span><span class="token comment" spellcheck="true">;</span>
<span class="token keyword">const</span> y <span class="token operator">=</span> <span class="token number">2</span><span class="token comment" spellcheck="true">;</span>
<span class="token keyword">const</span> z <span class="token operator">=</span> <span class="token number">1</span><span class="token comment" spellcheck="true">;</span>
<span class="token keyword">const</span> defaultData<span class="token punctuation">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> generateData <span class="token operator">=</span> <span class="token punctuation">(</span>_level<span class="token punctuation">:</span> number<span class="token punctuation">,</span> _preKey<span class="token operator">?</span><span class="token punctuation">:</span> React<span class="token punctuation">.</span>Key<span class="token punctuation">,</span> _tns<span class="token operator">?</span><span class="token punctuation">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> preKey <span class="token operator">=</span> _preKey || <span class="token string">'0'</span><span class="token comment" spellcheck="true">;</span>
  <span class="token keyword">const</span> tns <span class="token operator">=</span> _tns || defaultData<span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> children <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span>let i <span class="token operator">=</span> <span class="token number">0</span><span class="token comment" spellcheck="true">; i &lt; x; i++) {</span>
    <span class="token keyword">const</span> key <span class="token operator">=</span> \`\${preKey}<span class="token operator">-</span>\${i}\`<span class="token comment" spellcheck="true">;</span>
    tns<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>{ title<span class="token punctuation">:</span> key<span class="token punctuation">,</span> key }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> y<span class="token punctuation">)</span> {
      children<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    }
  }
  <span class="token keyword">if</span> <span class="token punctuation">(</span>_level <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> {
    return tns<span class="token comment" spellcheck="true">;</span>
  }
  <span class="token keyword">const</span> level <span class="token operator">=</span> _level <span class="token operator">-</span> <span class="token number">1</span><span class="token comment" spellcheck="true">;</span>
  children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    tns<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>children <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>
    return <span class="token function">generateData</span><span class="token punctuation">(</span>level<span class="token punctuation">,</span> key<span class="token punctuation">,</span> tns<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>
<span class="token function">generateData</span><span class="token punctuation">(</span>z<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> <span class="token punctuation">[</span>gData<span class="token punctuation">,</span> setGData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span>defaultData<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>expandedKeys<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'0-0'</span><span class="token punctuation">,</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span> <span class="token string">'0-0-0-0'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> onDragEnter<span class="token punctuation">:</span> TreeProps<span class="token punctuation">[</span><span class="token string">'onDragEnter'</span><span class="token punctuation">]</span> <span class="token operator">=</span> info <span class="token operator">=</span><span class="token operator">></span> {
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    <span class="token operator">/</span><span class="token operator">/</span> expandedKeys \u9700\u8981\u53D7\u63A7\u65F6\u8BBE\u7F6E
    <span class="token operator">/</span><span class="token operator">/</span> <span class="token function">setExpandedKeys</span><span class="token punctuation">(</span>info<span class="token punctuation">.</span>expandedKeys<span class="token punctuation">)</span>
  }<span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> onDrop<span class="token punctuation">:</span> TreeProps<span class="token punctuation">[</span><span class="token string">'onDrop'</span><span class="token punctuation">]</span> <span class="token operator">=</span> info <span class="token operator">=</span><span class="token operator">></span> {
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    <span class="token keyword">const</span> dropKey <span class="token operator">=</span> info<span class="token punctuation">.</span>node<span class="token punctuation">.</span>key<span class="token comment" spellcheck="true">;</span>
    <span class="token keyword">const</span> dragKey <span class="token operator">=</span> info<span class="token punctuation">.</span>dragNode<span class="token punctuation">.</span>key<span class="token comment" spellcheck="true">;</span>
    <span class="token keyword">const</span> dropPos <span class="token operator">=</span> info<span class="token punctuation">.</span>node<span class="token punctuation">.</span>pos<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'-'</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    <span class="token keyword">const</span> dropPosition <span class="token operator">=</span> info<span class="token punctuation">.</span>dropPosition <span class="token operator">-</span> <span class="token function">Number</span><span class="token punctuation">(</span>dropPos<span class="token punctuation">[</span>dropPos<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

    <span class="token keyword">const</span> loop <span class="token operator">=</span> <span class="token punctuation">(</span>
      data<span class="token punctuation">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      key<span class="token punctuation">:</span> React<span class="token punctuation">.</span>Key<span class="token punctuation">,</span>
      callback<span class="token punctuation">:</span> <span class="token punctuation">(</span>node<span class="token punctuation">:</span> DataNode<span class="token punctuation">,</span> i<span class="token punctuation">:</span> number<span class="token punctuation">,</span> data<span class="token punctuation">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> void<span class="token punctuation">,</span>
    <span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
      <span class="token keyword">for</span> <span class="token punctuation">(</span>let i <span class="token operator">=</span> <span class="token number">0</span><span class="token comment" spellcheck="true">; i &lt; data.length; i++) {</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>key <span class="token operator">==</span><span class="token operator">=</span> key<span class="token punctuation">)</span> {
          return <span class="token function">callback</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
        }
        <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>children<span class="token punctuation">)</span> {
          <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>children!<span class="token punctuation">,</span> key<span class="token punctuation">,</span> callback<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
        }
      }
    }<span class="token comment" spellcheck="true">;</span>
    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>gData<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>

    <span class="token operator">/</span><span class="token operator">/</span> Find dragObject
    let dragObj<span class="token punctuation">:</span> DataNode<span class="token comment" spellcheck="true">;</span>
    <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> dragKey<span class="token punctuation">,</span> <span class="token punctuation">(</span>item<span class="token punctuation">,</span> index<span class="token punctuation">,</span> arr<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
      arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
      dragObj <span class="token operator">=</span> item<span class="token comment" spellcheck="true">;</span>
    }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>!info<span class="token punctuation">.</span>dropToGap<span class="token punctuation">)</span> {
      <span class="token operator">/</span><span class="token operator">/</span> Drop on the content
      <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> dropKey<span class="token punctuation">,</span> item <span class="token operator">=</span><span class="token operator">></span> {
        item<span class="token punctuation">.</span>children <span class="token operator">=</span> item<span class="token punctuation">.</span>children || <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>
        <span class="token operator">/</span><span class="token operator">/</span> where <span class="token keyword">to</span> insert \u793A\u4F8B\u6DFB\u52A0\u5230\u5934\u90E8\uFF0C\u53EF\u4EE5\u662F\u968F\u610F\u4F4D\u7F6E
        item<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>dragObj<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
      }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    } <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>
      <span class="token punctuation">(</span><span class="token punctuation">(</span>info<span class="token punctuation">.</span>node as any<span class="token punctuation">)</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children || <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">&amp;</span><span class="token operator">&amp;</span> <span class="token operator">/</span><span class="token operator">/</span> Has children
      <span class="token punctuation">(</span>info<span class="token punctuation">.</span>node as any<span class="token punctuation">)</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>expanded <span class="token operator">&amp;</span><span class="token operator">&amp;</span> <span class="token operator">/</span><span class="token operator">/</span> Is expanded
      dropPosition <span class="token operator">==</span><span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">/</span><span class="token operator">/</span> On the bottom gap
    <span class="token punctuation">)</span> {
      <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> dropKey<span class="token punctuation">,</span> item <span class="token operator">=</span><span class="token operator">></span> {
        item<span class="token punctuation">.</span>children <span class="token operator">=</span> item<span class="token punctuation">.</span>children || <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>
        <span class="token operator">/</span><span class="token operator">/</span> where <span class="token keyword">to</span> insert \u793A\u4F8B\u6DFB\u52A0\u5230\u5934\u90E8\uFF0C\u53EF\u4EE5\u662F\u968F\u610F\u4F4D\u7F6E
        item<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>dragObj<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
        <span class="token operator">/</span><span class="token operator">/</span> <span class="token keyword">in</span> previous version<span class="token punctuation">,</span> we use item<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>dragObj<span class="token punctuation">)</span> <span class="token keyword">to</span> insert the
        <span class="token operator">/</span><span class="token operator">/</span> item <span class="token keyword">to</span> the tail of the children
      }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    } <span class="token keyword">else</span> {
      let ar<span class="token punctuation">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>
      let i<span class="token punctuation">:</span> number<span class="token comment" spellcheck="true">;</span>
      <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> dropKey<span class="token punctuation">,</span> <span class="token punctuation">(</span>_item<span class="token punctuation">,</span> index<span class="token punctuation">,</span> arr<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
        ar <span class="token operator">=</span> arr<span class="token comment" spellcheck="true">;</span>
        i <span class="token operator">=</span> index<span class="token comment" spellcheck="true">;</span>
      }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>dropPosition <span class="token operator">==</span><span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> {
        ar<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i!<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> dragObj!<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
      } <span class="token keyword">else</span> {
        ar<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i! <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> dragObj!<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
      }
    }
    <span class="token function">setGData</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  return <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Tree
      className<span class="token operator">=</span><span class="token string">"draggable-tree"</span>
      defaultExpandedKeys<span class="token operator">=</span>{expandedKeys}
      draggable
      blockNode
      onDragEnter<span class="token operator">=</span>{onDragEnter}
      onDrop<span class="token operator">=</span>{onDrop}
      treeData<span class="token operator">=</span>{gData}
    <span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Tree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> DataNode<span class="token punctuation">,</span> TreeProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd/es/tree'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> y <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> z <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> defaultData<span class="token operator">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">generateData</span> <span class="token operator">=</span> <span class="token punctuation">(</span>_level<span class="token operator">:</span> number<span class="token punctuation">,</span> _preKey<span class="token operator">?</span><span class="token operator">:</span> React<span class="token punctuation">.</span>Key<span class="token punctuation">,</span> _tns<span class="token operator">?</span><span class="token operator">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> preKey <span class="token operator">=</span> _preKey <span class="token operator">||</span> <span class="token string">'0'</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> tns <span class="token operator">=</span> _tns <span class="token operator">||</span> defaultData<span class="token punctuation">;</span>

  <span class="token keyword">const</span> children <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> x<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> key <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>preKey<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
    tns<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> title<span class="token operator">:</span> key<span class="token punctuation">,</span> key <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      children<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>_level <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> tns<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> level <span class="token operator">=</span> _level <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
  children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    tns<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>children <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">generateData</span><span class="token punctuation">(</span>level<span class="token punctuation">,</span> key<span class="token punctuation">,</span> tns<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">generateData</span><span class="token punctuation">(</span>z<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>gData<span class="token punctuation">,</span> setGData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span>defaultData<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>expandedKeys<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'0-0'</span><span class="token punctuation">,</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span> <span class="token string">'0-0-0-0'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> onDragEnter<span class="token operator">:</span> TreeProps<span class="token punctuation">[</span><span class="token string">'onDragEnter'</span><span class="token punctuation">]</span> <span class="token operator">=</span> info <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// expandedKeys \u9700\u8981\u53D7\u63A7\u65F6\u8BBE\u7F6E</span>
    <span class="token comment">// setExpandedKeys(info.expandedKeys)</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> onDrop<span class="token operator">:</span> TreeProps<span class="token punctuation">[</span><span class="token string">'onDrop'</span><span class="token punctuation">]</span> <span class="token operator">=</span> info <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> dropKey <span class="token operator">=</span> info<span class="token punctuation">.</span>node<span class="token punctuation">.</span>key<span class="token punctuation">;</span>
    <span class="token keyword">const</span> dragKey <span class="token operator">=</span> info<span class="token punctuation">.</span>dragNode<span class="token punctuation">.</span>key<span class="token punctuation">;</span>
    <span class="token keyword">const</span> dropPos <span class="token operator">=</span> info<span class="token punctuation">.</span>node<span class="token punctuation">.</span>pos<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'-'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> dropPosition <span class="token operator">=</span> info<span class="token punctuation">.</span>dropPosition <span class="token operator">-</span> <span class="token function">Number</span><span class="token punctuation">(</span>dropPos<span class="token punctuation">[</span>dropPos<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token function-variable function">loop</span> <span class="token operator">=</span> <span class="token punctuation">(</span>
      data<span class="token operator">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      key<span class="token operator">:</span> React<span class="token punctuation">.</span>Key<span class="token punctuation">,</span>
      <span class="token function-variable function">callback</span><span class="token operator">:</span> <span class="token punctuation">(</span>node<span class="token operator">:</span> DataNode<span class="token punctuation">,</span> i<span class="token operator">:</span> number<span class="token punctuation">,</span> data<span class="token operator">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> data<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>key <span class="token operator">===</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token function">callback</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>children<span class="token operator">!</span><span class="token punctuation">,</span> key<span class="token punctuation">,</span> callback<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>gData<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">// Find dragObject</span>
    <span class="token keyword">let</span> dragObj<span class="token operator">:</span> DataNode<span class="token punctuation">;</span>
    <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> dragKey<span class="token punctuation">,</span> <span class="token punctuation">(</span>item<span class="token punctuation">,</span> index<span class="token punctuation">,</span> arr<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      dragObj <span class="token operator">=</span> item<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>info<span class="token punctuation">.</span>dropToGap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// Drop on the content</span>
      <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> dropKey<span class="token punctuation">,</span> item <span class="token operator">=></span> <span class="token punctuation">{</span>
        item<span class="token punctuation">.</span>children <span class="token operator">=</span> item<span class="token punctuation">.</span>children <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">// where to insert \u793A\u4F8B\u6DFB\u52A0\u5230\u5934\u90E8\uFF0C\u53EF\u4EE5\u662F\u968F\u610F\u4F4D\u7F6E</span>
        item<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>dragObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>
      <span class="token punctuation">(</span><span class="token punctuation">(</span>info<span class="token punctuation">.</span>node <span class="token keyword">as</span> any<span class="token punctuation">)</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token comment">// Has children</span>
      <span class="token punctuation">(</span>info<span class="token punctuation">.</span>node <span class="token keyword">as</span> any<span class="token punctuation">)</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>expanded <span class="token operator">&amp;&amp;</span> <span class="token comment">// Is expanded</span>
      dropPosition <span class="token operator">===</span> <span class="token number">1</span> <span class="token comment">// On the bottom gap</span>
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> dropKey<span class="token punctuation">,</span> item <span class="token operator">=></span> <span class="token punctuation">{</span>
        item<span class="token punctuation">.</span>children <span class="token operator">=</span> item<span class="token punctuation">.</span>children <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">// where to insert \u793A\u4F8B\u6DFB\u52A0\u5230\u5934\u90E8\uFF0C\u53EF\u4EE5\u662F\u968F\u610F\u4F4D\u7F6E</span>
        item<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>dragObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// in previous version, we use item.children.push(dragObj) to insert the</span>
        <span class="token comment">// item to the tail of the children</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> ar<span class="token operator">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> i<span class="token operator">:</span> number<span class="token punctuation">;</span>
      <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> dropKey<span class="token punctuation">,</span> <span class="token punctuation">(</span>_item<span class="token punctuation">,</span> index<span class="token punctuation">,</span> arr<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        ar <span class="token operator">=</span> arr<span class="token punctuation">;</span>
        i <span class="token operator">=</span> index<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>dropPosition <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        ar<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i<span class="token operator">!</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> dragObj<span class="token operator">!</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        ar<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i<span class="token operator">!</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> dragObj<span class="token operator">!</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">setGData</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tree</span></span>
      <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>draggable-tree<span class="token punctuation">"</span></span>
      <span class="token attr-name">defaultExpandedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>expandedKeys<span class="token punctuation">}</span></span>
      <span class="token attr-name">draggable</span>
      <span class="token attr-name">blockNode</span>
      <span class="token attr-name">onDragEnter</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onDragEnter<span class="token punctuation">}</span></span>
      <span class="token attr-name">onDrop</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onDrop<span class="token punctuation">}</span></span>
      <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>gData<span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Tree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> y <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> z <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> defaultData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">generateData</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">_level<span class="token punctuation">,</span> _preKey<span class="token punctuation">,</span> _tns</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> preKey <span class="token operator">=</span> _preKey <span class="token operator">||</span> <span class="token string">'0'</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> tns <span class="token operator">=</span> _tns <span class="token operator">||</span> defaultData<span class="token punctuation">;</span>
  <span class="token keyword">const</span> children <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> x<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> key <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>preKey<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
    tns<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> key<span class="token punctuation">,</span>
      key<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      children<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>_level <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> tns<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> level <span class="token operator">=</span> _level <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
  children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    tns<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>children <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">generateData</span><span class="token punctuation">(</span>level<span class="token punctuation">,</span> key<span class="token punctuation">,</span> tns<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">generateData</span><span class="token punctuation">(</span>z<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>gData<span class="token punctuation">,</span> setGData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span>defaultData<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>expandedKeys<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'0-0'</span><span class="token punctuation">,</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span> <span class="token string">'0-0-0-0'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onDragEnter</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">info</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// expandedKeys \u9700\u8981\u53D7\u63A7\u65F6\u8BBE\u7F6E</span>
    <span class="token comment">// setExpandedKeys(info.expandedKeys)</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onDrop</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">info</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> dropKey <span class="token operator">=</span> info<span class="token punctuation">.</span>node<span class="token punctuation">.</span>key<span class="token punctuation">;</span>
    <span class="token keyword">const</span> dragKey <span class="token operator">=</span> info<span class="token punctuation">.</span>dragNode<span class="token punctuation">.</span>key<span class="token punctuation">;</span>
    <span class="token keyword">const</span> dropPos <span class="token operator">=</span> info<span class="token punctuation">.</span>node<span class="token punctuation">.</span>pos<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'-'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> dropPosition <span class="token operator">=</span> info<span class="token punctuation">.</span>dropPosition <span class="token operator">-</span> <span class="token function">Number</span><span class="token punctuation">(</span>dropPos<span class="token punctuation">[</span>dropPos<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token function-variable function">loop</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> key<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> data<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>key <span class="token operator">===</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token function">callback</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>children<span class="token punctuation">,</span> key<span class="token punctuation">,</span> callback<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>gData<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// Find dragObject</span>

    <span class="token keyword">let</span> dragObj<span class="token punctuation">;</span>
    <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> dragKey<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index<span class="token punctuation">,</span> arr</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      dragObj <span class="token operator">=</span> item<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>info<span class="token punctuation">.</span>dropToGap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// Drop on the content</span>
      <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> dropKey<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        item<span class="token punctuation">.</span>children <span class="token operator">=</span> item<span class="token punctuation">.</span>children <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// where to insert \u793A\u4F8B\u6DFB\u52A0\u5230\u5934\u90E8\uFF0C\u53EF\u4EE5\u662F\u968F\u610F\u4F4D\u7F6E</span>

        item<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>dragObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>
      <span class="token punctuation">(</span>info<span class="token punctuation">.</span>node<span class="token punctuation">.</span>props<span class="token punctuation">.</span>children <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token comment">// Has children</span>
      info<span class="token punctuation">.</span>node<span class="token punctuation">.</span>props<span class="token punctuation">.</span>expanded <span class="token operator">&amp;&amp;</span> <span class="token comment">// Is expanded</span>
      dropPosition <span class="token operator">===</span> <span class="token number">1</span> <span class="token comment">// On the bottom gap</span>
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> dropKey<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        item<span class="token punctuation">.</span>children <span class="token operator">=</span> item<span class="token punctuation">.</span>children <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// where to insert \u793A\u4F8B\u6DFB\u52A0\u5230\u5934\u90E8\uFF0C\u53EF\u4EE5\u662F\u968F\u610F\u4F4D\u7F6E</span>

        item<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>dragObj<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// in previous version, we use item.children.push(dragObj) to insert the</span>
        <span class="token comment">// item to the tail of the children</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> ar <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> i<span class="token punctuation">;</span>
      <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> dropKey<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">_item<span class="token punctuation">,</span> index<span class="token punctuation">,</span> arr</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        ar <span class="token operator">=</span> arr<span class="token punctuation">;</span>
        i <span class="token operator">=</span> index<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>dropPosition <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        ar<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> dragObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        ar<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> dragObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token function">setGData</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tree</span></span>
      <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>draggable-tree<span class="token punctuation">"</span></span>
      <span class="token attr-name">defaultExpandedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>expandedKeys<span class="token punctuation">}</span></span>
      <span class="token attr-name">draggable</span>
      <span class="token attr-name">blockNode</span>
      <span class="token attr-name">onDragEnter</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onDragEnter<span class="token punctuation">}</span></span>
      <span class="token attr-name">onDrop</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onDrop<span class="token punctuation">}</span></span>
      <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>gData<span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var z=c(0),q=c(66);function D(n){return D=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(n)}var f=c(12),h=C(c(0));function i(n){if(typeof WeakMap!="function")return null;var t=new WeakMap,o=new WeakMap;return(i=function(b){return b?o:t})(n)}function C(n,t){if(!t&&n&&n.__esModule)return n;if(n===null||D(n)!=="object"&&typeof n!="function")return{default:n};var o=i(t);if(o&&o.has(n))return o.get(n);var r={},b=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in n)if(w!=="default"&&Object.prototype.hasOwnProperty.call(n,w)){var x=b?Object.getOwnPropertyDescriptor(n,w):null;x&&(x.get||x.set)?Object.defineProperty(r,w,x):r[w]=n[w]}return r.default=n,o&&o.set(n,r),r}function T(n){return I(n)||S(n)||L(n)||K()}function K(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function S(n){if(typeof Symbol!="undefined"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function I(n){if(Array.isArray(n))return A(n)}function N(n,t){return d(n)||J(n,t)||L(n,t)||R()}function R(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function L(n,t){if(!!n){if(typeof n=="string")return A(n,t);var o=Object.prototype.toString.call(n).slice(8,-1);if(o==="Object"&&n.constructor&&(o=n.constructor.name),o==="Map"||o==="Set")return Array.from(n);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return A(n,t)}}function A(n,t){(t==null||t>n.length)&&(t=n.length);for(var o=0,r=new Array(t);o<t;o++)r[o]=n[o];return r}function J(n,t){var o=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(o!=null){var r=[],b=!0,w=!1,x,a;try{for(o=o.call(n);!(b=(x=o.next()).done)&&(r.push(x.value),!(t&&r.length===t));b=!0);}catch(u){w=!0,a=u}finally{try{!b&&o.return!=null&&o.return()}finally{if(w)throw a}}return r}}function d(n){if(Array.isArray(n))return n}var p=3,k=2,m=1,s=[],l=function n(t,o,r){for(var b=o||"0",w=r||s,x=[],a=0;a<p;a++){var u="".concat(b,"-").concat(a);w.push({title:u,key:u}),a<k&&x.push(u)}if(t<0)return w;var v=t-1;x.forEach(function(g,O){return w[O].children=[],n(v,g,w[O].children)})};l(m);var e=function(){var t=(0,h.useState)(s),o=N(t,2),r=o[0],b=o[1],w=(0,h.useState)(["0-0","0-0-0","0-0-0-0"]),x=N(w,1),a=x[0],u=function(O){console.log(O)},v=function(O){console.log(O);var M=O.node.key,U=O.dragNode.key,E=O.node.pos.split("-"),H=O.dropPosition-Number(E[E.length-1]),_=function j(W,X,B){for(var G=0;G<W.length;G++){if(W[G].key===X)return B(W[G],G,W);W[G].children&&j(W[G].children,X,B)}},$=T(r),V;if(_($,U,function(j,W,X){X.splice(W,1),V=j}),!O.dropToGap)_($,M,function(j){j.children=j.children||[],j.children.unshift(V)});else if((O.node.props.children||[]).length>0&&O.node.props.expanded&&H===1)_($,M,function(j){j.children=j.children||[],j.children.unshift(V)});else{var Y=[],F;_($,M,function(j,W,X){Y=X,F=W}),H===-1?Y.splice(F,0,V):Y.splice(F+1,0,V)}b($)};return h.default.createElement(f.Tree,{className:"draggable-tree",defaultExpandedKeys:a,draggable:!0,blockNode:!0,onDragEnter:u,onDrop:v,treeData:r})},y=e;return z.createElement(y)}}},5012:function(P,Q,c){P.exports={content:{"zh-CN":[["p","\u70B9\u51FB\u5C55\u5F00\u8282\u70B9\uFF0C\u52A8\u6001\u52A0\u8F7D\u6570\u636E\u3002"]],"en-US":[["p","To load data asynchronously when click to expand a treeNode."]]},meta:{order:3,title:{"zh-CN":"\u5F02\u6B65\u6570\u636E\u52A0\u8F7D","en-US":"load data asynchronously"},filename:"components/tree/demo/dynamic.md",id:"components-tree-demo-dynamic"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { Tree } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import React<span class="token punctuation">,</span> { useState } from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

interface DataNode {
  title<span class="token punctuation">:</span> string<span class="token comment" spellcheck="true">;</span>
  key<span class="token punctuation">:</span> string<span class="token comment" spellcheck="true">;</span>
  isLeaf<span class="token operator">?</span><span class="token punctuation">:</span> boolean<span class="token comment" spellcheck="true">;</span>
  children<span class="token operator">?</span><span class="token punctuation">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>
}

<span class="token keyword">const</span> initTreeData<span class="token punctuation">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  { title<span class="token punctuation">:</span> <span class="token string">'Expand to load'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'0'</span> }<span class="token punctuation">,</span>
  { title<span class="token punctuation">:</span> <span class="token string">'Expand to load'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'1'</span> }<span class="token punctuation">,</span>
  { title<span class="token punctuation">:</span> <span class="token string">'Tree Node'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span> isLeaf<span class="token punctuation">:</span> <span class="token boolean">true</span> }<span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>

<span class="token operator">/</span><span class="token operator">/</span> It's just a simple demo<span class="token punctuation">.</span> You can use tree map <span class="token keyword">to</span> optimize update perf<span class="token punctuation">.</span>
<span class="token keyword">const</span> updateTreeData <span class="token operator">=</span> <span class="token punctuation">(</span>list<span class="token punctuation">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> React<span class="token punctuation">.</span>Key<span class="token punctuation">,</span> children<span class="token punctuation">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span><span class="token operator">></span>
  list<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>node <span class="token operator">=</span><span class="token operator">></span> {
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>key <span class="token operator">==</span><span class="token operator">=</span> key<span class="token punctuation">)</span> {
      return {
        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>node<span class="token punctuation">,</span>
        children<span class="token punctuation">,</span>
      }<span class="token comment" spellcheck="true">;</span>
    }
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>children<span class="token punctuation">)</span> {
      return {
        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>node<span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token function">updateTreeData</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>children<span class="token punctuation">,</span> key<span class="token punctuation">,</span> children<span class="token punctuation">)</span><span class="token punctuation">,</span>
      }<span class="token comment" spellcheck="true">;</span>
    }
    return node<span class="token comment" spellcheck="true">;</span>
  }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> <span class="token punctuation">[</span>treeData<span class="token punctuation">,</span> setTreeData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span>initTreeData<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> onLoadData <span class="token operator">=</span> <span class="token punctuation">(</span>{ key<span class="token punctuation">,</span> children }<span class="token punctuation">:</span> any<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span>
    new Promise<span class="token operator">&lt;</span>void<span class="token operator">></span><span class="token punctuation">(</span>resolve <span class="token operator">=</span><span class="token operator">></span> {
      <span class="token keyword">if</span> <span class="token punctuation">(</span>children<span class="token punctuation">)</span> {
        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
        return<span class="token comment" spellcheck="true">;</span>
      }
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
        <span class="token function">setTreeData</span><span class="token punctuation">(</span>origin <span class="token operator">=</span><span class="token operator">></span>
          <span class="token function">updateTreeData</span><span class="token punctuation">(</span>origin<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">[</span>
            { title<span class="token punctuation">:</span> <span class="token string">'Child Node'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> \`\${key}<span class="token operator">-</span><span class="token number">0</span>\` }<span class="token punctuation">,</span>
            { title<span class="token punctuation">:</span> <span class="token string">'Child Node'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> \`\${key}<span class="token operator">-</span><span class="token number">1</span>\` }<span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
      }<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

  return <span class="token operator">&lt;</span>Tree loadData<span class="token operator">=</span>{onLoadData} treeData<span class="token operator">=</span>{treeData} <span class="token operator">/</span><span class="token operator">></span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Tree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">DataNode</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> string<span class="token punctuation">;</span>
  key<span class="token operator">:</span> string<span class="token punctuation">;</span>
  isLeaf<span class="token operator">?</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
  children<span class="token operator">?</span><span class="token operator">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> initTreeData<span class="token operator">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'Expand to load'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'0'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'Expand to load'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'1'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'Tree Node'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span> isLeaf<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// It's just a simple demo. You can use tree map to optimize update perf.</span>
<span class="token keyword">const</span> updateTreeData <span class="token operator">=</span> <span class="token punctuation">(</span>list<span class="token operator">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> key<span class="token operator">:</span> React<span class="token punctuation">.</span>Key<span class="token punctuation">,</span> children<span class="token operator">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=></span>
  list<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>node <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>key <span class="token operator">===</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span>node<span class="token punctuation">,</span>
        children<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span>node<span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token function">updateTreeData</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>children<span class="token punctuation">,</span> key<span class="token punctuation">,</span> children<span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> node<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>treeData<span class="token punctuation">,</span> setTreeData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span>initTreeData<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onLoadData</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> key<span class="token punctuation">,</span> children <span class="token punctuation">}</span><span class="token operator">:</span> any<span class="token punctuation">)</span> <span class="token operator">=></span>
    <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">></span><span class="token punctuation">(</span>resolve <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token function">setTreeData</span><span class="token punctuation">(</span>origin <span class="token operator">=></span>
          <span class="token function">updateTreeData</span><span class="token punctuation">(</span>origin<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'Child Node'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-0</span><span class="token template-punctuation string">\`</span></span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'Child Node'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-1</span><span class="token template-punctuation string">\`</span></span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tree</span></span> <span class="token attr-name">loadData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onLoadData<span class="token punctuation">}</span></span> <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Tree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> initTreeData <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Expand to load'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Expand to load'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Tree Node'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">isLeaf</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// It's just a simple demo. You can use tree map to optimize update perf.</span>

<span class="token keyword">const</span> <span class="token function-variable function">updateTreeData</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">list<span class="token punctuation">,</span> key<span class="token punctuation">,</span> children</span><span class="token punctuation">)</span> <span class="token operator">=></span>
  list<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>key <span class="token operator">===</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token operator">...</span>node<span class="token punctuation">,</span> children <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token operator">...</span>node<span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token function">updateTreeData</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>children<span class="token punctuation">,</span> key<span class="token punctuation">,</span> children<span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> node<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>treeData<span class="token punctuation">,</span> setTreeData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span>initTreeData<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onLoadData</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> key<span class="token punctuation">,</span> children <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span>
    <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token function">setTreeData</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">origin</span><span class="token punctuation">)</span> <span class="token operator">=></span>
          <span class="token function">updateTreeData</span><span class="token punctuation">(</span>origin<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Child Node'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-0</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Child Node'</span><span class="token punctuation">,</span>
              <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-1</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tree</span></span> <span class="token attr-name">loadData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onLoadData<span class="token punctuation">}</span></span> <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var z=c(0),q=c(66);function D(s){return D=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},D(s)}var f=c(12),h=C(c(0));function i(s){if(typeof WeakMap!="function")return null;var l=new WeakMap,e=new WeakMap;return(i=function(n){return n?e:l})(s)}function C(s,l){if(!l&&s&&s.__esModule)return s;if(s===null||D(s)!=="object"&&typeof s!="function")return{default:s};var e=i(l);if(e&&e.has(s))return e.get(s);var y={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var t in s)if(t!=="default"&&Object.prototype.hasOwnProperty.call(s,t)){var o=n?Object.getOwnPropertyDescriptor(s,t):null;o&&(o.get||o.set)?Object.defineProperty(y,t,o):y[t]=s[t]}return y.default=s,e&&e.set(s,y),y}function T(s,l){return R(s)||N(s,l)||S(s,l)||K()}function K(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function S(s,l){if(!!s){if(typeof s=="string")return I(s,l);var e=Object.prototype.toString.call(s).slice(8,-1);if(e==="Object"&&s.constructor&&(e=s.constructor.name),e==="Map"||e==="Set")return Array.from(s);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return I(s,l)}}function I(s,l){(l==null||l>s.length)&&(l=s.length);for(var e=0,y=new Array(l);e<l;e++)y[e]=s[e];return y}function N(s,l){var e=s==null?null:typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(e!=null){var y=[],n=!0,t=!1,o,r;try{for(e=e.call(s);!(n=(o=e.next()).done)&&(y.push(o.value),!(l&&y.length===l));n=!0);}catch(b){t=!0,r=b}finally{try{!n&&e.return!=null&&e.return()}finally{if(t)throw r}}return y}}function R(s){if(Array.isArray(s))return s}function L(s,l){var e=Object.keys(s);if(Object.getOwnPropertySymbols){var y=Object.getOwnPropertySymbols(s);l&&(y=y.filter(function(n){return Object.getOwnPropertyDescriptor(s,n).enumerable})),e.push.apply(e,y)}return e}function A(s){for(var l=1;l<arguments.length;l++){var e=arguments[l]!=null?arguments[l]:{};l%2?L(Object(e),!0).forEach(function(y){J(s,y,e[y])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(e)):L(Object(e)).forEach(function(y){Object.defineProperty(s,y,Object.getOwnPropertyDescriptor(e,y))})}return s}function J(s,l,e){return l in s?Object.defineProperty(s,l,{value:e,enumerable:!0,configurable:!0,writable:!0}):s[l]=e,s}var d=[{title:"Expand to load",key:"0"},{title:"Expand to load",key:"1"},{title:"Tree Node",key:"2",isLeaf:!0}],p=function s(l,e,y){return l.map(function(n){return n.key===e?A(A({},n),{},{children:y}):n.children?A(A({},n),{},{children:s(n.children,e,y)}):n})},k=function(){var l=(0,h.useState)(d),e=T(l,2),y=e[0],n=e[1],t=function(r){var b=r.key,w=r.children;return new Promise(function(x){if(w){x();return}setTimeout(function(){n(function(a){return p(a,b,[{title:"Child Node",key:"".concat(b,"-0")},{title:"Child Node",key:"".concat(b,"-1")}])}),x()},1e3)})};return h.default.createElement(f.Tree,{loadData:t,treeData:y})},m=k;return z.createElement(m)}}},5013:function(P,Q,c){P.exports={content:{"zh-CN":[["p","\u8282\u70B9\u4E4B\u95F4\u5E26\u8FDE\u63A5\u7EBF\u7684\u6811\uFF0C\u5E38\u7528\u4E8E\u6587\u4EF6\u76EE\u5F55\u7ED3\u6784\u5C55\u793A\u3002\u4F7F\u7528 ",["code","showLine"]," \u5F00\u542F\uFF0C\u53EF\u4EE5\u7528 ",["code","switcherIcon"]," \u4FEE\u6539\u9ED8\u8BA4\u56FE\u6807\u3002"]],"en-US":[["p","Tree with connected line between nodes, turn on by ",["code","showLine"],", customize the preseted icon by ",["code","switcherIcon"],"."]]},meta:{order:5,title:{"zh-CN":"\u8FDE\u63A5\u7EBF","en-US":"Tree with line"},filename:"components/tree/demo/line.md",id:"components-tree-demo-line"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { CarryOutOutlined<span class="token punctuation">,</span> FormOutlined } from <span class="token string">'@ant-design/icons'</span><span class="token comment" spellcheck="true">;</span>
import { <span class="token keyword">Switch</span><span class="token punctuation">,</span> Tree } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import type { DataNode } from <span class="token string">'antd/es/tree'</span><span class="token comment" spellcheck="true">;</span>
import React<span class="token punctuation">,</span> { useState } from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> treeData<span class="token punctuation">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  {
    title<span class="token punctuation">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    key<span class="token punctuation">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
    icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>CarryOutOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      {
        title<span class="token punctuation">:</span> <span class="token string">'parent 1-0'</span><span class="token punctuation">,</span>
        key<span class="token punctuation">:</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span>
        icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>CarryOutOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
          { title<span class="token punctuation">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'0-0-0-0'</span><span class="token punctuation">,</span> icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>CarryOutOutlined <span class="token operator">/</span><span class="token operator">></span> }<span class="token punctuation">,</span>
          {
            title<span class="token punctuation">:</span> <span class="token punctuation">(</span>
              <span class="token operator">&lt;></span>
                <span class="token operator">&lt;</span>div<span class="token operator">></span>multiple line title<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
                <span class="token operator">&lt;</span>div<span class="token operator">></span>multiple line title<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
              <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
            key<span class="token punctuation">:</span> <span class="token string">'0-0-0-1'</span><span class="token punctuation">,</span>
            icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>CarryOutOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
          { title<span class="token punctuation">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'0-0-0-2'</span><span class="token punctuation">,</span> icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>CarryOutOutlined <span class="token operator">/</span><span class="token operator">></span> }<span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        title<span class="token punctuation">:</span> <span class="token string">'parent 1-1'</span><span class="token punctuation">,</span>
        key<span class="token punctuation">:</span> <span class="token string">'0-0-1'</span><span class="token punctuation">,</span>
        icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>CarryOutOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>{ title<span class="token punctuation">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'0-0-1-0'</span><span class="token punctuation">,</span> icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>CarryOutOutlined <span class="token operator">/</span><span class="token operator">></span> }<span class="token punctuation">]</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        title<span class="token punctuation">:</span> <span class="token string">'parent 1-2'</span><span class="token punctuation">,</span>
        key<span class="token punctuation">:</span> <span class="token string">'0-0-2'</span><span class="token punctuation">,</span>
        icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>CarryOutOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
          { title<span class="token punctuation">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'0-0-2-0'</span><span class="token punctuation">,</span> icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>CarryOutOutlined <span class="token operator">/</span><span class="token operator">></span> }<span class="token punctuation">,</span>
          {
            title<span class="token punctuation">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            key<span class="token punctuation">:</span> <span class="token string">'0-0-2-1'</span><span class="token punctuation">,</span>
            icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>CarryOutOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
            switcherIcon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>FormOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
  {
    title<span class="token punctuation">:</span> <span class="token string">'parent 2'</span><span class="token punctuation">,</span>
    key<span class="token punctuation">:</span> <span class="token string">'0-1'</span><span class="token punctuation">,</span>
    icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>CarryOutOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      {
        title<span class="token punctuation">:</span> <span class="token string">'parent 2-0'</span><span class="token punctuation">,</span>
        key<span class="token punctuation">:</span> <span class="token string">'0-1-0'</span><span class="token punctuation">,</span>
        icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>CarryOutOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
          { title<span class="token punctuation">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'0-1-0-0'</span><span class="token punctuation">,</span> icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>CarryOutOutlined <span class="token operator">/</span><span class="token operator">></span> }<span class="token punctuation">,</span>
          { title<span class="token punctuation">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'0-1-0-1'</span><span class="token punctuation">,</span> icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>CarryOutOutlined <span class="token operator">/</span><span class="token operator">></span> }<span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> <span class="token punctuation">[</span>showLine<span class="token punctuation">,</span> setShowLine<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>boolean | { showLeafIcon<span class="token punctuation">:</span> boolean }<span class="token operator">></span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>showIcon<span class="token punctuation">,</span> setShowIcon<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>boolean<span class="token operator">></span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>showLeafIcon<span class="token punctuation">,</span> setShowLeafIcon<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>boolean<span class="token operator">></span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> onSelect <span class="token operator">=</span> <span class="token punctuation">(</span>selectedKeys<span class="token punctuation">:</span> React<span class="token punctuation">.</span>Key<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> info<span class="token punctuation">:</span> any<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'selected'</span><span class="token punctuation">,</span> selectedKeys<span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> onSetLeafIcon <span class="token operator">=</span> <span class="token punctuation">(</span>checked<span class="token punctuation">:</span> boolean<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    <span class="token function">setShowLeafIcon</span><span class="token punctuation">(</span>checked<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    <span class="token function">setShowLine</span><span class="token punctuation">(</span>{ showLeafIcon<span class="token punctuation">:</span> checked }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> onSetShowLine <span class="token operator">=</span> <span class="token punctuation">(</span>checked<span class="token punctuation">:</span> boolean<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    <span class="token function">setShowLine</span><span class="token punctuation">(</span>checked <span class="token operator">?</span> { showLeafIcon } <span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  return <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>div style<span class="token operator">=</span>{{ marginBottom<span class="token punctuation">:</span> <span class="token number">16</span> }}<span class="token operator">></span>
        showLine<span class="token punctuation">:</span> <span class="token operator">&lt;</span><span class="token keyword">Switch</span> checked<span class="token operator">=</span>{!!showLine} onChange<span class="token operator">=</span>{onSetShowLine} <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
        showIcon<span class="token punctuation">:</span> <span class="token operator">&lt;</span><span class="token keyword">Switch</span> checked<span class="token operator">=</span>{showIcon} onChange<span class="token operator">=</span>{setShowIcon} <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
        showLeafIcon<span class="token punctuation">:</span> <span class="token operator">&lt;</span><span class="token keyword">Switch</span> checked<span class="token operator">=</span>{showLeafIcon} onChange<span class="token operator">=</span>{onSetLeafIcon} <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>Tree
        showLine<span class="token operator">=</span>{showLine}
        showIcon<span class="token operator">=</span>{showIcon}
        defaultExpandedKeys<span class="token operator">=</span>{<span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">]</span>}
        onSelect<span class="token operator">=</span>{onSelect}
        treeData<span class="token operator">=</span>{treeData}
      <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> CarryOutOutlined<span class="token punctuation">,</span> FormOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Switch<span class="token punctuation">,</span> Tree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> DataNode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd/es/tree'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> treeData<span class="token operator">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    key<span class="token operator">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
    icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'parent 1-0'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span>
        icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'0-0-0-0'</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token punctuation">(</span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>multiple line title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>multiple line title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
            key<span class="token operator">:</span> <span class="token string">'0-0-0-1'</span><span class="token punctuation">,</span>
            icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'0-0-0-2'</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'parent 1-1'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'0-0-1'</span><span class="token punctuation">,</span>
        icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'0-0-1-0'</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'parent 1-2'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'0-0-2'</span><span class="token punctuation">,</span>
        icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'0-0-2-0'</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            key<span class="token operator">:</span> <span class="token string">'0-0-2-1'</span><span class="token punctuation">,</span>
            icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
            switcherIcon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FormOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">'parent 2'</span><span class="token punctuation">,</span>
    key<span class="token operator">:</span> <span class="token string">'0-1'</span><span class="token punctuation">,</span>
    icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'parent 2-0'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'0-1-0'</span><span class="token punctuation">,</span>
        icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'0-1-0-0'</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'0-1-0-1'</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>showLine<span class="token punctuation">,</span> setShowLine<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>boolean <span class="token operator">|</span> <span class="token punctuation">{</span> showLeafIcon<span class="token operator">:</span> boolean <span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>showIcon<span class="token punctuation">,</span> setShowIcon<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>boolean<span class="token operator">></span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>showLeafIcon<span class="token punctuation">,</span> setShowLeafIcon<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>boolean<span class="token operator">></span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onSelect</span> <span class="token operator">=</span> <span class="token punctuation">(</span>selectedKeys<span class="token operator">:</span> React<span class="token punctuation">.</span>Key<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> info<span class="token operator">:</span> any<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'selected'</span><span class="token punctuation">,</span> selectedKeys<span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onSetLeafIcon</span> <span class="token operator">=</span> <span class="token punctuation">(</span>checked<span class="token operator">:</span> boolean<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setShowLeafIcon</span><span class="token punctuation">(</span>checked<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setShowLine</span><span class="token punctuation">(</span><span class="token punctuation">{</span> showLeafIcon<span class="token operator">:</span> checked <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onSetShowLine</span> <span class="token operator">=</span> <span class="token punctuation">(</span>checked<span class="token operator">:</span> boolean<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setShowLine</span><span class="token punctuation">(</span>checked <span class="token operator">?</span> <span class="token punctuation">{</span> showLeafIcon <span class="token punctuation">}</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginBottom<span class="token operator">:</span> <span class="token number">16</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
        showLine<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span> <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token operator">!</span><span class="token operator">!</span>showLine<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onSetShowLine<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
        showIcon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span> <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>showIcon<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>setShowIcon<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
        showLeafIcon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span> <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>showLeafIcon<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onSetLeafIcon<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tree</span></span>
        <span class="token attr-name">showLine</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>showLine<span class="token punctuation">}</span></span>
        <span class="token attr-name">showIcon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>showIcon<span class="token punctuation">}</span></span>
        <span class="token attr-name">defaultExpandedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onSelect<span class="token punctuation">}</span></span>
        <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> CarryOutOutlined<span class="token punctuation">,</span> FormOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Switch<span class="token punctuation">,</span> Tree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> treeData <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'parent 1-0'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-0-0'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token punctuation">(</span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>multiple line title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>multiple line title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-0-1'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-0-2'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'parent 1-1'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-1'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-1-0'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'parent 1-2'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-2'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-2-0'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-2-1'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
            <span class="token literal-property property">switcherIcon</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FormOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'parent 2'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-1'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'parent 2-0'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-1-0'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-1-0-0'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-1-0-1'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>showLine<span class="token punctuation">,</span> setShowLine<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>showIcon<span class="token punctuation">,</span> setShowIcon<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>showLeafIcon<span class="token punctuation">,</span> setShowLeafIcon<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onSelect</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">selectedKeys<span class="token punctuation">,</span> info</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'selected'</span><span class="token punctuation">,</span> selectedKeys<span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onSetLeafIcon</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">checked</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setShowLeafIcon</span><span class="token punctuation">(</span>checked<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setShowLine</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">showLeafIcon</span><span class="token operator">:</span> checked<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onSetShowLine</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">checked</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setShowLine</span><span class="token punctuation">(</span>
      checked
        <span class="token operator">?</span> <span class="token punctuation">{</span>
            showLeafIcon<span class="token punctuation">,</span>
          <span class="token punctuation">}</span>
        <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
          <span class="token literal-property property">marginBottom</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">></span></span>
        <span class="token literal-property property">showLine</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span> <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token operator">!</span><span class="token operator">!</span>showLine<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onSetShowLine<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
        <span class="token literal-property property">showIcon</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span> <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>showIcon<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>setShowIcon<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
        <span class="token literal-property property">showLeafIcon</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span> <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>showLeafIcon<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onSetLeafIcon<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tree</span></span>
        <span class="token attr-name">showLine</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>showLine<span class="token punctuation">}</span></span>
        <span class="token attr-name">showIcon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>showIcon<span class="token punctuation">}</span></span>
        <span class="token attr-name">defaultExpandedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onSelect<span class="token punctuation">}</span></span>
        <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var z=c(0),q=c(66);function D(p){return D=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(k){return typeof k}:function(k){return k&&typeof Symbol=="function"&&k.constructor===Symbol&&k!==Symbol.prototype?"symbol":typeof k},D(p)}var f=c(63),h=c(12),i=T(c(0));function C(p){if(typeof WeakMap!="function")return null;var k=new WeakMap,m=new WeakMap;return(C=function(l){return l?m:k})(p)}function T(p,k){if(!k&&p&&p.__esModule)return p;if(p===null||D(p)!=="object"&&typeof p!="function")return{default:p};var m=C(k);if(m&&m.has(p))return m.get(p);var s={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var e in p)if(e!=="default"&&Object.prototype.hasOwnProperty.call(p,e)){var y=l?Object.getOwnPropertyDescriptor(p,e):null;y&&(y.get||y.set)?Object.defineProperty(s,e,y):s[e]=p[e]}return s.default=p,m&&m.set(p,s),s}function K(p,k){return L(p)||R(p,k)||I(p,k)||S()}function S(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function I(p,k){if(!!p){if(typeof p=="string")return N(p,k);var m=Object.prototype.toString.call(p).slice(8,-1);if(m==="Object"&&p.constructor&&(m=p.constructor.name),m==="Map"||m==="Set")return Array.from(p);if(m==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m))return N(p,k)}}function N(p,k){(k==null||k>p.length)&&(k=p.length);for(var m=0,s=new Array(k);m<k;m++)s[m]=p[m];return s}function R(p,k){var m=p==null?null:typeof Symbol!="undefined"&&p[Symbol.iterator]||p["@@iterator"];if(m!=null){var s=[],l=!0,e=!1,y,n;try{for(m=m.call(p);!(l=(y=m.next()).done)&&(s.push(y.value),!(k&&s.length===k));l=!0);}catch(t){e=!0,n=t}finally{try{!l&&m.return!=null&&m.return()}finally{if(e)throw n}}return s}}function L(p){if(Array.isArray(p))return p}var A=[{title:"parent 1",key:"0-0",icon:i.default.createElement(f.CarryOutOutlined,null),children:[{title:"parent 1-0",key:"0-0-0",icon:i.default.createElement(f.CarryOutOutlined,null),children:[{title:"leaf",key:"0-0-0-0",icon:i.default.createElement(f.CarryOutOutlined,null)},{title:i.default.createElement(i.default.Fragment,null,i.default.createElement("div",null,"multiple line title"),i.default.createElement("div",null,"multiple line title")),key:"0-0-0-1",icon:i.default.createElement(f.CarryOutOutlined,null)},{title:"leaf",key:"0-0-0-2",icon:i.default.createElement(f.CarryOutOutlined,null)}]},{title:"parent 1-1",key:"0-0-1",icon:i.default.createElement(f.CarryOutOutlined,null),children:[{title:"leaf",key:"0-0-1-0",icon:i.default.createElement(f.CarryOutOutlined,null)}]},{title:"parent 1-2",key:"0-0-2",icon:i.default.createElement(f.CarryOutOutlined,null),children:[{title:"leaf",key:"0-0-2-0",icon:i.default.createElement(f.CarryOutOutlined,null)},{title:"leaf",key:"0-0-2-1",icon:i.default.createElement(f.CarryOutOutlined,null),switcherIcon:i.default.createElement(f.FormOutlined,null)}]}]},{title:"parent 2",key:"0-1",icon:i.default.createElement(f.CarryOutOutlined,null),children:[{title:"parent 2-0",key:"0-1-0",icon:i.default.createElement(f.CarryOutOutlined,null),children:[{title:"leaf",key:"0-1-0-0",icon:i.default.createElement(f.CarryOutOutlined,null)},{title:"leaf",key:"0-1-0-1",icon:i.default.createElement(f.CarryOutOutlined,null)}]}]}],J=function(){var k=(0,i.useState)(!0),m=K(k,2),s=m[0],l=m[1],e=(0,i.useState)(!1),y=K(e,2),n=y[0],t=y[1],o=(0,i.useState)(!0),r=K(o,2),b=r[0],w=r[1],x=function(g,O){console.log("selected",g,O)},a=function(g){w(g),l({showLeafIcon:g})},u=function(g){l(g?{showLeafIcon:b}:!1)};return i.default.createElement("div",null,i.default.createElement("div",{style:{marginBottom:16}},"showLine: ",i.default.createElement(h.Switch,{checked:!!s,onChange:u}),i.default.createElement("br",null),i.default.createElement("br",null),"showIcon: ",i.default.createElement(h.Switch,{checked:n,onChange:t}),i.default.createElement("br",null),i.default.createElement("br",null),"showLeafIcon: ",i.default.createElement(h.Switch,{checked:b,onChange:a})),i.default.createElement(h.Tree,{showLine:s,showIcon:n,defaultExpandedKeys:["0-0-0"],onSelect:x,treeData:A}))},d=J;return z.createElement(d)}}},5014:function(P,Q,c){P.exports={content:{"zh-CN":[["p","\u53EF\u641C\u7D22\u7684\u6811\u3002"]],"en-US":[["p","Searchable Tree."]]},meta:{order:4,title:{"zh-CN":"\u53EF\u641C\u7D22","en-US":"Searchable"},filename:"components/tree/demo/search.md",id:"components-tree-demo-search"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { Input<span class="token punctuation">,</span> Tree } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import type { DataNode } from <span class="token string">'antd/es/tree'</span><span class="token comment" spellcheck="true">;</span>
import React<span class="token punctuation">,</span> { useMemo<span class="token punctuation">,</span> useState } from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> { Search } <span class="token operator">=</span> Input<span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token number">3</span><span class="token comment" spellcheck="true">;</span>
<span class="token keyword">const</span> y <span class="token operator">=</span> <span class="token number">2</span><span class="token comment" spellcheck="true">;</span>
<span class="token keyword">const</span> z <span class="token operator">=</span> <span class="token number">1</span><span class="token comment" spellcheck="true">;</span>
<span class="token keyword">const</span> defaultData<span class="token punctuation">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> generateData <span class="token operator">=</span> <span class="token punctuation">(</span>_level<span class="token punctuation">:</span> number<span class="token punctuation">,</span> _preKey<span class="token operator">?</span><span class="token punctuation">:</span> React<span class="token punctuation">.</span>Key<span class="token punctuation">,</span> _tns<span class="token operator">?</span><span class="token punctuation">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> preKey <span class="token operator">=</span> _preKey || <span class="token string">'0'</span><span class="token comment" spellcheck="true">;</span>
  <span class="token keyword">const</span> tns <span class="token operator">=</span> _tns || defaultData<span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> children <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span>let i <span class="token operator">=</span> <span class="token number">0</span><span class="token comment" spellcheck="true">; i &lt; x; i++) {</span>
    <span class="token keyword">const</span> key <span class="token operator">=</span> \`\${preKey}<span class="token operator">-</span>\${i}\`<span class="token comment" spellcheck="true">;</span>
    tns<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>{ title<span class="token punctuation">:</span> key<span class="token punctuation">,</span> key }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> y<span class="token punctuation">)</span> {
      children<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    }
  }
  <span class="token keyword">if</span> <span class="token punctuation">(</span>_level <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> {
    return tns<span class="token comment" spellcheck="true">;</span>
  }
  <span class="token keyword">const</span> level <span class="token operator">=</span> _level <span class="token operator">-</span> <span class="token number">1</span><span class="token comment" spellcheck="true">;</span>
  children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    tns<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>children <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>
    return <span class="token function">generateData</span><span class="token punctuation">(</span>level<span class="token punctuation">,</span> key<span class="token punctuation">,</span> tns<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>
<span class="token function">generateData</span><span class="token punctuation">(</span>z<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> dataList<span class="token punctuation">:</span> { key<span class="token punctuation">:</span> React<span class="token punctuation">.</span>Key<span class="token comment" spellcheck="true">; title: string }[] = [];</span>
<span class="token keyword">const</span> generateList <span class="token operator">=</span> <span class="token punctuation">(</span>data<span class="token punctuation">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">for</span> <span class="token punctuation">(</span>let i <span class="token operator">=</span> <span class="token number">0</span><span class="token comment" spellcheck="true">; i &lt; data.length; i++) {</span>
    <span class="token keyword">const</span> node <span class="token operator">=</span> data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>
    <span class="token keyword">const</span> { key } <span class="token operator">=</span> node<span class="token comment" spellcheck="true">;</span>
    dataList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>{ key<span class="token punctuation">,</span> title<span class="token punctuation">:</span> key as string }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>children<span class="token punctuation">)</span> {
      <span class="token function">generateList</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    }
  }
}<span class="token comment" spellcheck="true">;</span>
<span class="token function">generateList</span><span class="token punctuation">(</span>defaultData<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> getParentKey <span class="token operator">=</span> <span class="token punctuation">(</span>key<span class="token punctuation">:</span> React<span class="token punctuation">.</span>Key<span class="token punctuation">,</span> tree<span class="token punctuation">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span> React<span class="token punctuation">.</span>Key <span class="token operator">=</span><span class="token operator">></span> {
  let parentKey<span class="token punctuation">:</span> React<span class="token punctuation">.</span>Key<span class="token comment" spellcheck="true">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span>let i <span class="token operator">=</span> <span class="token number">0</span><span class="token comment" spellcheck="true">; i &lt; tree.length; i++) {</span>
    <span class="token keyword">const</span> node <span class="token operator">=</span> tree<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>children<span class="token punctuation">)</span> {
      <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span>item <span class="token operator">=</span><span class="token operator">></span> item<span class="token punctuation">.</span>key <span class="token operator">==</span><span class="token operator">=</span> key<span class="token punctuation">)</span><span class="token punctuation">)</span> {
        parentKey <span class="token operator">=</span> node<span class="token punctuation">.</span>key<span class="token comment" spellcheck="true">;</span>
      } <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">getParentKey</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> node<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">)</span> {
        parentKey <span class="token operator">=</span> <span class="token function">getParentKey</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> node<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
      }
    }
  }
  return parentKey!<span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> <span class="token punctuation">[</span>expandedKeys<span class="token punctuation">,</span> setExpandedKeys<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>React<span class="token punctuation">.</span>Key<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>searchValue<span class="token punctuation">,</span> setSearchValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>autoExpandParent<span class="token punctuation">,</span> setAutoExpandParent<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> onExpand <span class="token operator">=</span> <span class="token punctuation">(</span>newExpandedKeys<span class="token punctuation">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    <span class="token function">setExpandedKeys</span><span class="token punctuation">(</span>newExpandedKeys<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    <span class="token function">setAutoExpandParent</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> onChange <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token punctuation">:</span> React<span class="token punctuation">.</span>ChangeEvent<span class="token operator">&lt;</span>HTMLInputElement<span class="token operator">></span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    <span class="token keyword">const</span> { value } <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token comment" spellcheck="true">;</span>
    <span class="token keyword">const</span> newExpandedKeys <span class="token operator">=</span> dataList
      <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>item <span class="token operator">=</span><span class="token operator">></span> {
        <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>title<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> {
          return <span class="token function">getParentKey</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>key<span class="token punctuation">,</span> defaultData<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
        }
        return <span class="token keyword">null</span><span class="token comment" spellcheck="true">;</span>
      }<span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> i<span class="token punctuation">,</span> self<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> item <span class="token operator">&amp;</span><span class="token operator">&amp;</span> self<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">==</span><span class="token operator">=</span> i<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    <span class="token function">setExpandedKeys</span><span class="token punctuation">(</span>newExpandedKeys as React<span class="token punctuation">.</span>Key<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    <span class="token function">setSearchValue</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    <span class="token function">setAutoExpandParent</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> treeData <span class="token operator">=</span> <span class="token function">useMemo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    <span class="token keyword">const</span> loop <span class="token operator">=</span> <span class="token punctuation">(</span>data<span class="token punctuation">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span><span class="token operator">></span>
      data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>item <span class="token operator">=</span><span class="token operator">></span> {
        <span class="token keyword">const</span> strTitle <span class="token operator">=</span> item<span class="token punctuation">.</span>title as string<span class="token comment" spellcheck="true">;</span>
        <span class="token keyword">const</span> index <span class="token operator">=</span> strTitle<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>searchValue<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
        <span class="token keyword">const</span> beforeStr <span class="token operator">=</span> strTitle<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
        <span class="token keyword">const</span> afterStr <span class="token operator">=</span> strTitle<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>index <span class="token operator">+</span> searchValue<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
        <span class="token keyword">const</span> title <span class="token operator">=</span>
          index <span class="token operator">></span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">?</span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>span<span class="token operator">></span>
              {beforeStr}
              <span class="token operator">&lt;</span>span className<span class="token operator">=</span><span class="token string">"site-tree-search-value"</span><span class="token operator">></span>{searchValue}<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
              {afterStr}
            <span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
          <span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>span<span class="token operator">></span>{strTitle}<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
          <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>children<span class="token punctuation">)</span> {
          return { title<span class="token punctuation">,</span> key<span class="token punctuation">:</span> item<span class="token punctuation">.</span>key<span class="token punctuation">,</span> children<span class="token punctuation">:</span> <span class="token function">loop</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>children<span class="token punctuation">)</span> }<span class="token comment" spellcheck="true">;</span>
        }

        return {
          title<span class="token punctuation">,</span>
          key<span class="token punctuation">:</span> item<span class="token punctuation">.</span>key<span class="token punctuation">,</span>
        }<span class="token comment" spellcheck="true">;</span>
      }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

    return <span class="token function">loop</span><span class="token punctuation">(</span>defaultData<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token punctuation">,</span> <span class="token punctuation">[</span>searchValue<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

  return <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>Search style<span class="token operator">=</span>{{ marginBottom<span class="token punctuation">:</span> <span class="token number">8</span> }} placeholder<span class="token operator">=</span><span class="token string">"Search"</span> onChange<span class="token operator">=</span>{onChange} <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Tree
        onExpand<span class="token operator">=</span>{onExpand}
        expandedKeys<span class="token operator">=</span>{expandedKeys}
        autoExpandParent<span class="token operator">=</span>{autoExpandParent}
        treeData<span class="token operator">=</span>{treeData}
      <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Input<span class="token punctuation">,</span> Tree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> DataNode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd/es/tree'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useMemo<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> Search <span class="token punctuation">}</span> <span class="token operator">=</span> Input<span class="token punctuation">;</span>

<span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> y <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> z <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> defaultData<span class="token operator">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">generateData</span> <span class="token operator">=</span> <span class="token punctuation">(</span>_level<span class="token operator">:</span> number<span class="token punctuation">,</span> _preKey<span class="token operator">?</span><span class="token operator">:</span> React<span class="token punctuation">.</span>Key<span class="token punctuation">,</span> _tns<span class="token operator">?</span><span class="token operator">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> preKey <span class="token operator">=</span> _preKey <span class="token operator">||</span> <span class="token string">'0'</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> tns <span class="token operator">=</span> _tns <span class="token operator">||</span> defaultData<span class="token punctuation">;</span>

  <span class="token keyword">const</span> children <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> x<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> key <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>preKey<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
    tns<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> title<span class="token operator">:</span> key<span class="token punctuation">,</span> key <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      children<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>_level <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> tns<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> level <span class="token operator">=</span> _level <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
  children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    tns<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>children <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">generateData</span><span class="token punctuation">(</span>level<span class="token punctuation">,</span> key<span class="token punctuation">,</span> tns<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">generateData</span><span class="token punctuation">(</span>z<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> dataList<span class="token operator">:</span> <span class="token punctuation">{</span> key<span class="token operator">:</span> React<span class="token punctuation">.</span>Key<span class="token punctuation">;</span> title<span class="token operator">:</span> string <span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">generateList</span> <span class="token operator">=</span> <span class="token punctuation">(</span>data<span class="token operator">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> data<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> node <span class="token operator">=</span> data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> key <span class="token punctuation">}</span> <span class="token operator">=</span> node<span class="token punctuation">;</span>
    dataList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> key<span class="token punctuation">,</span> title<span class="token operator">:</span> key <span class="token keyword">as</span> string <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">generateList</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">generateList</span><span class="token punctuation">(</span>defaultData<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> getParentKey <span class="token operator">=</span> <span class="token punctuation">(</span>key<span class="token operator">:</span> React<span class="token punctuation">.</span>Key<span class="token punctuation">,</span> tree<span class="token operator">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> React<span class="token punctuation">.</span>Key <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> parentKey<span class="token operator">:</span> React<span class="token punctuation">.</span>Key<span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> tree<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> node <span class="token operator">=</span> tree<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span>item <span class="token operator">=></span> item<span class="token punctuation">.</span>key <span class="token operator">===</span> key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        parentKey <span class="token operator">=</span> node<span class="token punctuation">.</span>key<span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">getParentKey</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> node<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        parentKey <span class="token operator">=</span> <span class="token function">getParentKey</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> node<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> parentKey<span class="token operator">!</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>expandedKeys<span class="token punctuation">,</span> setExpandedKeys<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>React<span class="token punctuation">.</span>Key<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>searchValue<span class="token punctuation">,</span> setSearchValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>autoExpandParent<span class="token punctuation">,</span> setAutoExpandParent<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onExpand</span> <span class="token operator">=</span> <span class="token punctuation">(</span>newExpandedKeys<span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setExpandedKeys</span><span class="token punctuation">(</span>newExpandedKeys<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setAutoExpandParent</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token operator">:</span> React<span class="token punctuation">.</span>ChangeEvent<span class="token operator">&lt;</span>HTMLInputElement<span class="token operator">></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> value <span class="token punctuation">}</span> <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">;</span>
    <span class="token keyword">const</span> newExpandedKeys <span class="token operator">=</span> dataList
      <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>item <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>title<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token function">getParentKey</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>key<span class="token punctuation">,</span> defaultData<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> i<span class="token punctuation">,</span> self<span class="token punctuation">)</span> <span class="token operator">=></span> item <span class="token operator">&amp;&amp;</span> self<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">===</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setExpandedKeys</span><span class="token punctuation">(</span>newExpandedKeys <span class="token keyword">as</span> React<span class="token punctuation">.</span>Key<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setSearchValue</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setAutoExpandParent</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> treeData <span class="token operator">=</span> <span class="token function">useMemo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> loop <span class="token operator">=</span> <span class="token punctuation">(</span>data<span class="token operator">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=></span>
      data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>item <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> strTitle <span class="token operator">=</span> item<span class="token punctuation">.</span>title <span class="token keyword">as</span> string<span class="token punctuation">;</span>
        <span class="token keyword">const</span> index <span class="token operator">=</span> strTitle<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>searchValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> beforeStr <span class="token operator">=</span> strTitle<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> afterStr <span class="token operator">=</span> strTitle<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>index <span class="token operator">+</span> searchValue<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> title <span class="token operator">=</span>
          index <span class="token operator">></span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">?</span> <span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>
              <span class="token punctuation">{</span>beforeStr<span class="token punctuation">}</span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>site-tree-search-value<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>searchValue<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
              <span class="token punctuation">{</span>afterStr<span class="token punctuation">}</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
          <span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>strTitle<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
          <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token punctuation">{</span> title<span class="token punctuation">,</span> key<span class="token operator">:</span> item<span class="token punctuation">.</span>key<span class="token punctuation">,</span> children<span class="token operator">:</span> <span class="token function">loop</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> <span class="token punctuation">{</span>
          title<span class="token punctuation">,</span>
          key<span class="token operator">:</span> item<span class="token punctuation">.</span>key<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token function">loop</span><span class="token punctuation">(</span>defaultData<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>searchValue<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Search</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginBottom<span class="token operator">:</span> <span class="token number">8</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Search<span class="token punctuation">"</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tree</span></span>
        <span class="token attr-name">onExpand</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onExpand<span class="token punctuation">}</span></span>
        <span class="token attr-name">expandedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>expandedKeys<span class="token punctuation">}</span></span>
        <span class="token attr-name">autoExpandParent</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>autoExpandParent<span class="token punctuation">}</span></span>
        <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Input<span class="token punctuation">,</span> Tree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useMemo<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> Search <span class="token punctuation">}</span> <span class="token operator">=</span> Input<span class="token punctuation">;</span>
<span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> y <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> z <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> defaultData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">generateData</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">_level<span class="token punctuation">,</span> _preKey<span class="token punctuation">,</span> _tns</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> preKey <span class="token operator">=</span> _preKey <span class="token operator">||</span> <span class="token string">'0'</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> tns <span class="token operator">=</span> _tns <span class="token operator">||</span> defaultData<span class="token punctuation">;</span>
  <span class="token keyword">const</span> children <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> x<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> key <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>preKey<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
    tns<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> key<span class="token punctuation">,</span>
      key<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      children<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>_level <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> tns<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> level <span class="token operator">=</span> _level <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
  children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    tns<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>children <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">generateData</span><span class="token punctuation">(</span>level<span class="token punctuation">,</span> key<span class="token punctuation">,</span> tns<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">generateData</span><span class="token punctuation">(</span>z<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> dataList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">generateList</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> data<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> node <span class="token operator">=</span> data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> key <span class="token punctuation">}</span> <span class="token operator">=</span> node<span class="token punctuation">;</span>
    dataList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      key<span class="token punctuation">,</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> key<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">generateList</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">generateList</span><span class="token punctuation">(</span>defaultData<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">getParentKey</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> tree</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> parentKey<span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> tree<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> node <span class="token operator">=</span> tree<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> item<span class="token punctuation">.</span>key <span class="token operator">===</span> key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        parentKey <span class="token operator">=</span> node<span class="token punctuation">.</span>key<span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">getParentKey</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> node<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        parentKey <span class="token operator">=</span> <span class="token function">getParentKey</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> node<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> parentKey<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>expandedKeys<span class="token punctuation">,</span> setExpandedKeys<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>searchValue<span class="token punctuation">,</span> setSearchValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>autoExpandParent<span class="token punctuation">,</span> setAutoExpandParent<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onExpand</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">newExpandedKeys</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setExpandedKeys</span><span class="token punctuation">(</span>newExpandedKeys<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setAutoExpandParent</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> value <span class="token punctuation">}</span> <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">;</span>
    <span class="token keyword">const</span> newExpandedKeys <span class="token operator">=</span> dataList
      <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>title<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token function">getParentKey</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>key<span class="token punctuation">,</span> defaultData<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> i<span class="token punctuation">,</span> self</span><span class="token punctuation">)</span> <span class="token operator">=></span> item <span class="token operator">&amp;&amp;</span> self<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">===</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setExpandedKeys</span><span class="token punctuation">(</span>newExpandedKeys<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setSearchValue</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setAutoExpandParent</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> treeData <span class="token operator">=</span> <span class="token function">useMemo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token function-variable function">loop</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span>
      data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> strTitle <span class="token operator">=</span> item<span class="token punctuation">.</span>title<span class="token punctuation">;</span>
        <span class="token keyword">const</span> index <span class="token operator">=</span> strTitle<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>searchValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> beforeStr <span class="token operator">=</span> strTitle<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> afterStr <span class="token operator">=</span> strTitle<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>index <span class="token operator">+</span> searchValue<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> title <span class="token operator">=</span>
          index <span class="token operator">></span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">?</span> <span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>
              <span class="token punctuation">{</span>beforeStr<span class="token punctuation">}</span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>site-tree-search-value<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>searchValue<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
              <span class="token punctuation">{</span>afterStr<span class="token punctuation">}</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
          <span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>strTitle<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
          <span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token punctuation">{</span>
            title<span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> item<span class="token punctuation">.</span>key<span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token function">loop</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> <span class="token punctuation">{</span>
          title<span class="token punctuation">,</span>
          <span class="token literal-property property">key</span><span class="token operator">:</span> item<span class="token punctuation">.</span>key<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token function">loop</span><span class="token punctuation">(</span>defaultData<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>searchValue<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Search</span></span>
        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
          <span class="token literal-property property">marginBottom</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Search<span class="token punctuation">"</span></span>
        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tree</span></span>
        <span class="token attr-name">onExpand</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onExpand<span class="token punctuation">}</span></span>
        <span class="token attr-name">expandedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>expandedKeys<span class="token punctuation">}</span></span>
        <span class="token attr-name">autoExpandParent</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>autoExpandParent<span class="token punctuation">}</span></span>
        <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var z=c(0),q=c(66);function D(n){return D=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(n)}var f=c(12),h=C(c(0));function i(n){if(typeof WeakMap!="function")return null;var t=new WeakMap,o=new WeakMap;return(i=function(b){return b?o:t})(n)}function C(n,t){if(!t&&n&&n.__esModule)return n;if(n===null||D(n)!=="object"&&typeof n!="function")return{default:n};var o=i(t);if(o&&o.has(n))return o.get(n);var r={},b=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in n)if(w!=="default"&&Object.prototype.hasOwnProperty.call(n,w)){var x=b?Object.getOwnPropertyDescriptor(n,w):null;x&&(x.get||x.set)?Object.defineProperty(r,w,x):r[w]=n[w]}return r.default=n,o&&o.set(n,r),r}function T(n,t){return R(n)||N(n,t)||S(n,t)||K()}function K(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function S(n,t){if(!!n){if(typeof n=="string")return I(n,t);var o=Object.prototype.toString.call(n).slice(8,-1);if(o==="Object"&&n.constructor&&(o=n.constructor.name),o==="Map"||o==="Set")return Array.from(n);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return I(n,t)}}function I(n,t){(t==null||t>n.length)&&(t=n.length);for(var o=0,r=new Array(t);o<t;o++)r[o]=n[o];return r}function N(n,t){var o=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(o!=null){var r=[],b=!0,w=!1,x,a;try{for(o=o.call(n);!(b=(x=o.next()).done)&&(r.push(x.value),!(t&&r.length===t));b=!0);}catch(u){w=!0,a=u}finally{try{!b&&o.return!=null&&o.return()}finally{if(w)throw a}}return r}}function R(n){if(Array.isArray(n))return n}var L=f.Input.Search,A=3,J=2,d=1,p=[],k=function n(t,o,r){for(var b=o||"0",w=r||p,x=[],a=0;a<A;a++){var u="".concat(b,"-").concat(a);w.push({title:u,key:u}),a<J&&x.push(u)}if(t<0)return w;var v=t-1;x.forEach(function(g,O){return w[O].children=[],n(v,g,w[O].children)})};k(d);var m=[],s=function n(t){for(var o=0;o<t.length;o++){var r=t[o],b=r.key;m.push({key:b,title:b}),r.children&&n(r.children)}};s(p);var l=function n(t,o){for(var r,b=0;b<o.length;b++){var w=o[b];w.children&&(w.children.some(function(x){return x.key===t})?r=w.key:n(t,w.children)&&(r=n(t,w.children)))}return r},e=function(){var t=(0,h.useState)([]),o=T(t,2),r=o[0],b=o[1],w=(0,h.useState)(""),x=T(w,2),a=x[0],u=x[1],v=(0,h.useState)(!0),g=T(v,2),O=g[0],M=g[1],U=function($){b($),M(!1)},E=function($){var V=$.target.value,Y=m.map(function(F){return F.title.indexOf(V)>-1?l(F.key,p):null}).filter(function(F,j,W){return F&&W.indexOf(F)===j});b(Y),u(V),M(!0)},H=(0,h.useMemo)(function(){var _=function $(V){return V.map(function(Y){var F=Y.title,j=F.indexOf(a),W=F.substring(0,j),X=F.slice(j+a.length),B=j>-1?h.default.createElement("span",null,W,h.default.createElement("span",{className:"site-tree-search-value"},a),X):h.default.createElement("span",null,F);return Y.children?{title:B,key:Y.key,children:$(Y.children)}:{title:B,key:Y.key}})};return _(p)},[a]);return h.default.createElement("div",null,h.default.createElement(L,{style:{marginBottom:8},placeholder:"Search",onChange:E}),h.default.createElement(f.Tree,{onExpand:U,expandedKeys:r,autoExpandParent:O,treeData:H}))},y=e;return z.createElement(y)},style:`.site-tree-search-value {
  color: #f50;
}
[data-theme="dark"] .site-tree-search-value {
  color: #d84a1b;
}
`,highlightedStyle:`<span class="token selector"><span class="token class">.site-tree-search-value</span> </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token hexcode">#f50</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>`}},5015:function(P,Q,c){P.exports={content:{"zh-CN":[["p","\u81EA\u5B9A\u4E49\u5C55\u5F00/\u6298\u53E0\u56FE\u6807\u3002"]],"en-US":[["p","customize collapse/expand icon of tree node"]]},meta:{order:8,title:{"zh-CN":"\u81EA\u5B9A\u4E49\u5C55\u5F00/\u6298\u53E0\u56FE\u6807","en-US":"Customize collapse/expand icon"},filename:"components/tree/demo/switcher-icon.md",id:"components-tree-demo-switcher-icon"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { DownOutlined } from <span class="token string">'@ant-design/icons'</span><span class="token comment" spellcheck="true">;</span>
import { Tree } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import type { DataNode<span class="token punctuation">,</span> TreeProps } from <span class="token string">'antd/es/tree'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> treeData<span class="token punctuation">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  {
    title<span class="token punctuation">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    key<span class="token punctuation">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      {
        title<span class="token punctuation">:</span> <span class="token string">'parent 1-0'</span><span class="token punctuation">,</span>
        key<span class="token punctuation">:</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
          {
            title<span class="token punctuation">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            key<span class="token punctuation">:</span> <span class="token string">'0-0-0-0'</span><span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
          {
            title<span class="token punctuation">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            key<span class="token punctuation">:</span> <span class="token string">'0-0-0-1'</span><span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
          {
            title<span class="token punctuation">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            key<span class="token punctuation">:</span> <span class="token string">'0-0-0-2'</span><span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        title<span class="token punctuation">:</span> <span class="token string">'parent 1-1'</span><span class="token punctuation">,</span>
        key<span class="token punctuation">:</span> <span class="token string">'0-0-1'</span><span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
          {
            title<span class="token punctuation">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            key<span class="token punctuation">:</span> <span class="token string">'0-0-1-0'</span><span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        title<span class="token punctuation">:</span> <span class="token string">'parent 1-2'</span><span class="token punctuation">,</span>
        key<span class="token punctuation">:</span> <span class="token string">'0-0-2'</span><span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
          {
            title<span class="token punctuation">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            key<span class="token punctuation">:</span> <span class="token string">'0-0-2-0'</span><span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
          {
            title<span class="token punctuation">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            key<span class="token punctuation">:</span> <span class="token string">'0-0-2-1'</span><span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> onSelect<span class="token punctuation">:</span> TreeProps<span class="token punctuation">[</span><span class="token string">'onSelect'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>selectedKeys<span class="token punctuation">,</span> info<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'selected'</span><span class="token punctuation">,</span> selectedKeys<span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  return <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Tree
      showLine
      switcherIcon<span class="token operator">=</span>{<span class="token operator">&lt;</span>DownOutlined <span class="token operator">/</span><span class="token operator">></span>}
      defaultExpandedKeys<span class="token operator">=</span>{<span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">]</span>}
      onSelect<span class="token operator">=</span>{onSelect}
      treeData<span class="token operator">=</span>{treeData}
    <span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> DownOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Tree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> DataNode<span class="token punctuation">,</span> TreeProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd/es/tree'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> treeData<span class="token operator">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    key<span class="token operator">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'parent 1-0'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            key<span class="token operator">:</span> <span class="token string">'0-0-0-0'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            key<span class="token operator">:</span> <span class="token string">'0-0-0-1'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            key<span class="token operator">:</span> <span class="token string">'0-0-0-2'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'parent 1-1'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'0-0-1'</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            key<span class="token operator">:</span> <span class="token string">'0-0-1-0'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'parent 1-2'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'0-0-2'</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            key<span class="token operator">:</span> <span class="token string">'0-0-2-0'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            key<span class="token operator">:</span> <span class="token string">'0-0-2-1'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> onSelect<span class="token operator">:</span> TreeProps<span class="token punctuation">[</span><span class="token string">'onSelect'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>selectedKeys<span class="token punctuation">,</span> info<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'selected'</span><span class="token punctuation">,</span> selectedKeys<span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tree</span></span>
      <span class="token attr-name">showLine</span>
      <span class="token attr-name">switcherIcon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DownOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span>
      <span class="token attr-name">defaultExpandedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onSelect<span class="token punctuation">}</span></span>
      <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> DownOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Tree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> treeData <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'parent 1-0'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-0-0'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-0-1'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-0-2'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'parent 1-1'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-1'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-1-0'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'parent 1-2'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-2'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-2-0'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'0-0-2-1'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onSelect</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">selectedKeys<span class="token punctuation">,</span> info</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'selected'</span><span class="token punctuation">,</span> selectedKeys<span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tree</span></span>
      <span class="token attr-name">showLine</span>
      <span class="token attr-name">switcherIcon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DownOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span>
      <span class="token attr-name">defaultExpandedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onSelect<span class="token punctuation">}</span></span>
      <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var z=c(0),q=c(66),D=c(63),f=c(12),h=i(c(0));function i(S){return S&&S.__esModule?S:{default:S}}var C=[{title:"parent 1",key:"0-0",children:[{title:"parent 1-0",key:"0-0-0",children:[{title:"leaf",key:"0-0-0-0"},{title:"leaf",key:"0-0-0-1"},{title:"leaf",key:"0-0-0-2"}]},{title:"parent 1-1",key:"0-0-1",children:[{title:"leaf",key:"0-0-1-0"}]},{title:"parent 1-2",key:"0-0-2",children:[{title:"leaf",key:"0-0-2-0"},{title:"leaf",key:"0-0-2-1"}]}]}],T=function(){var I=function(R,L){console.log("selected",R,L)};return h.default.createElement(f.Tree,{showLine:!0,switcherIcon:h.default.createElement(D.DownOutlined,null),defaultExpandedKeys:["0-0-0"],onSelect:I,treeData:C})},K=T;return z.createElement(K)}}},5016:function(P,Q,c){P.exports={content:{"zh-CN":[["p","\u4F7F\u7528 ",["code","height"]," \u5C5E\u6027\u5219\u5207\u6362\u4E3A\u865A\u62DF\u6EDA\u52A8\u3002"]],"en-US":[["p","Use virtual list through ",["code","height"]," prop."]]},meta:{order:9,title:{"zh-CN":"\u865A\u62DF\u6EDA\u52A8","en-US":"Virtual scroll"},filename:"components/tree/demo/virtual-scroll.md",id:"components-tree-demo-virtual-scroll"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { Tree } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import type { DataNode } from <span class="token string">'antd/es/tree'</span><span class="token comment" spellcheck="true">;</span>
import React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> dig <span class="token operator">=</span> <span class="token punctuation">(</span>path <span class="token operator">=</span> <span class="token string">'0'</span><span class="token punctuation">,</span> level <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span>let i <span class="token operator">=</span> <span class="token number">0</span><span class="token comment" spellcheck="true">; i &lt; 10; i += 1) {</span>
    <span class="token keyword">const</span> key <span class="token operator">=</span> \`\${path}<span class="token operator">-</span>\${i}\`<span class="token comment" spellcheck="true">;</span>
    <span class="token keyword">const</span> treeNode<span class="token punctuation">:</span> DataNode <span class="token operator">=</span> {
      title<span class="token punctuation">:</span> key<span class="token punctuation">,</span>
      key<span class="token punctuation">,</span>
    }<span class="token comment" spellcheck="true">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>level <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> {
      treeNode<span class="token punctuation">.</span>children <span class="token operator">=</span> <span class="token function">dig</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> level <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    }

    list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>treeNode<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }
  return list<span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> treeData <span class="token operator">=</span> <span class="token function">dig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> App<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token operator">&lt;</span>Tree treeData<span class="token operator">=</span>{treeData} height<span class="token operator">=</span>{<span class="token number">233</span>} defaultExpandAll <span class="token operator">/</span><span class="token operator">></span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> App<span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Tree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> DataNode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd/es/tree'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> dig <span class="token operator">=</span> <span class="token punctuation">(</span>path <span class="token operator">=</span> <span class="token string">'0'</span><span class="token punctuation">,</span> level <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> key <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>path<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> treeNode<span class="token operator">:</span> DataNode <span class="token operator">=</span> <span class="token punctuation">{</span>
      title<span class="token operator">:</span> key<span class="token punctuation">,</span>
      key<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>level <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      treeNode<span class="token punctuation">.</span>children <span class="token operator">=</span> <span class="token function">dig</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> level <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>treeNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> list<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> treeData <span class="token operator">=</span> <span class="token function">dig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tree</span></span> <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span> <span class="token attr-name">height</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">233</span><span class="token punctuation">}</span></span> <span class="token attr-name">defaultExpandAll</span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Tree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> dig <span class="token operator">=</span> <span class="token punctuation">(</span>path <span class="token operator">=</span> <span class="token string">'0'</span><span class="token punctuation">,</span> level <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> key <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>path<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> treeNode <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> key<span class="token punctuation">,</span>
      key<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>level <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      treeNode<span class="token punctuation">.</span>children <span class="token operator">=</span> <span class="token function">dig</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> level <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>treeNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> list<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> treeData <span class="token operator">=</span> <span class="token function">dig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tree</span></span> <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span> <span class="token attr-name">height</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">233</span><span class="token punctuation">}</span></span> <span class="token attr-name">defaultExpandAll</span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
`},preview:function(){var z=c(0),q=c(66),D=c(12),f=h(c(0));function h(S){return S&&S.__esModule?S:{default:S}}var i=function S(){for(var I=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"0",N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:3,R=[],L=0;L<10;L+=1){var A="".concat(I,"-").concat(L),J={title:A,key:A};N>0&&(J.children=S(A,N-1)),R.push(J)}return R},C=i(),T=function(){return f.default.createElement(D.Tree,{treeData:C,height:233,defaultExpandAll:!0})},K=T;return z.createElement(K)}}}}]);
