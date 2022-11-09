"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[24455],{79044:function(s,e,l){l.r(e);var r=l(2143),c=l(96152),m=l(74775),_=l(5937),v=l(74399),Z=l(56140),d=l(5388),p=l(1160),x=l(95127),E=l(74418),o=l(33098),u=l(67294),t=l(66366);function a(){var i=(0,o.eL)(),n=i.texts;return(0,t.tZ)(o.dY,null,(0,t.tZ)(u.Fragment,null,(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("p",null,n[0].value),(0,t.tZ)("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528"},(0,t.tZ)("span",{className:"icon icon-link"})),"\u4F55\u65F6\u4F7F\u7528"),(0,t.tZ)("ul",null,(0,t.tZ)("li",null,n[1].value),(0,t.tZ)("li",null,n[2].value)),(0,t.tZ)("h2",{id:"\u4EE3\u7801\u6F14\u793A"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A"},(0,t.tZ)("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),(0,t.tZ)(d.Z,{items:[{demo:{id:"components-back-top-demo-basic"},previewerProps:{title:"\u57FA\u672C",filename:"components/back-top/demo/basic.tsx",jsx:`import React from 'react';
import { BackTop } from 'antd';
const App = () => (
  <>
    <BackTop />
    Scroll down to see the bottom-right
    <strong className="site-back-top-basic"> gray </strong>
    button.
  </>
);
export default App;
`,description:"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>",style:`.site-back-top-basic {
  color: rgba(64, 64, 64, 0.6);
}`}},{demo:{id:"components-back-top-demo-custom"},previewerProps:{iframe:!0,title:"\u81EA\u5B9A\u4E49\u6837\u5F0F",filename:"components/back-top/demo/custom.tsx",jsx:`import React from 'react';
import { BackTop } from 'antd';
const style = {
  height: 40,
  width: 40,
  lineHeight: '40px',
  borderRadius: 4,
  backgroundColor: '#1088e9',
  color: '#fff',
  textAlign: 'center',
  fontSize: 14,
};
const App = () => (
  <div
    style={{
      height: '600vh',
      padding: 8,
    }}
  >
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <BackTop>
      <div style={style}>UP</div>
    </BackTop>
  </div>
);
export default App;
`,description:`<p>\u53EF\u4EE5\u81EA\u5B9A\u4E49\u56DE\u5230\u9876\u90E8\u6309\u94AE\u7684\u6837\u5F0F\uFF0C\u9650\u5236\u5BBD\u9AD8\uFF1A<code>40px * 40px</code>\u3002</p>
<blockquote>
<p>\u6CE8\u610F\uFF1A<code>BackTop</code> \u9700\u8981\u4E00\u4E2A\u53EF\u63A5\u53D7 <code>onClick</code> \u4E8B\u4EF6\u7684\u5143\u7D20\u4F5C\u4E3A <code>children</code>\u3002 \u5982\u679C\u60A8\u76F4\u63A5\u5C06\u6587\u672C\u4F5C\u4E3A\u5B50\u9879\u653E\u7F6E\uFF0C\u5219\u8BE5\u7EC4\u4EF6\u5C06\u65E0\u6CD5\u6B63\u5E38\u8FD0\u884C\u3002</p>
</blockquote>`}}]}),(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("h2",{id:"api"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,t.tZ)("span",{className:"icon icon-link"})),"API"),(0,t.tZ)("blockquote",null,(0,t.tZ)("p",null,n[3].value,(0,t.tZ)("code",null,n[4].value),n[5].value),(0,t.tZ)("p",null,n[6].value)),(0,t.tZ)(_.Z,null,(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,n[7].value),(0,t.tZ)("th",null,n[8].value),(0,t.tZ)("th",null,n[9].value),(0,t.tZ)("th",null,n[10].value),(0,t.tZ)("th",null,n[11].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[12].value),(0,t.tZ)("td",null,n[13].value),(0,t.tZ)("td",null,n[14].value),(0,t.tZ)("td",null,n[15].value),(0,t.tZ)("td",null,n[16].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[17].value),(0,t.tZ)("td",null,n[18].value),(0,t.tZ)("td",null,n[19].value),(0,t.tZ)("td",null,n[20].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[21].value),(0,t.tZ)("td",null,n[22].value),(0,t.tZ)("td",null,n[23].value),(0,t.tZ)("td",null,n[24].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[25].value),(0,t.tZ)("td",null,n[26].value),(0,t.tZ)("td",null,n[27].value),(0,t.tZ)("td",null,n[28].value),(0,t.tZ)("td",null)))))))}e.default=a}}]);
