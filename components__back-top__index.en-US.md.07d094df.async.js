"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[86115],{71569:function(s,l,e){e.r(l);var r=e(2143),m=e(50250),c=e(32406),v=e(96152),h=e(74775),o=e(5937),Z=e(74399),p=e(56140),d=e(5388),E=e(1160),g=e(95127),x=e(74418),_=e(65488),a=e(67294),t=e(13946);function i(){var u=(0,_.eL)(),n=u.texts;return(0,t.tZ)(_.dY,null,(0,t.tZ)(a.Fragment,null,(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("p",null,(0,t.tZ)("code",null,n[0].value),n[1].value),(0,t.tZ)("h2",{id:"when-to-use"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use"},(0,t.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,t.tZ)("ul",null,(0,t.tZ)("li",null,n[2].value),(0,t.tZ)("li",null,n[3].value)),(0,t.tZ)("h2",{id:"examples"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#examples"},(0,t.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,t.tZ)(d.Z,{items:[{demo:{id:"components-back-top-demo-basic"},previewerProps:{title:"Basic",filename:"components/back-top/demo/basic.tsx",jsx:`import React from 'react';
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
`,description:"<p>The most basic usage.</p>",style:`.site-back-top-basic {
  color: rgba(64, 64, 64, 0.6);
}`}},{demo:{id:"components-back-top-demo-custom"},previewerProps:{iframe:!0,title:"Custom style",filename:"components/back-top/demo/custom.tsx",jsx:`import React from 'react';
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
`,description:`<p>You can customize the style of the button, just note the size limit: no more than <code>40px * 40px</code>.</p>
<blockquote>
<p>Note: <code>BackTop</code> expects a element could accept <code>onClick</code> propety as children. If you put a text directly as children the component will not function properly.</p>
</blockquote>`}}]}),(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("h2",{id:"api"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,t.tZ)("span",{className:"icon icon-link"})),"API"),(0,t.tZ)("blockquote",null,(0,t.tZ)("p",null,n[4].value,(0,t.tZ)("code",null,n[5].value),n[6].value),(0,t.tZ)("p",null,n[7].value,(0,t.tZ)("code",null,n[8].value),n[9].value)),(0,t.tZ)(o.Z,null,(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,n[10].value),(0,t.tZ)("th",null,n[11].value),(0,t.tZ)("th",null,n[12].value),(0,t.tZ)("th",null,n[13].value),(0,t.tZ)("th",null,n[14].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[15].value),(0,t.tZ)("td",null,n[16].value),(0,t.tZ)("td",null,n[17].value),(0,t.tZ)("td",null,n[18].value),(0,t.tZ)("td",null,n[19].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[20].value),(0,t.tZ)("td",null,n[21].value),(0,t.tZ)("td",null,n[22].value),(0,t.tZ)("td",null,n[23].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[24].value),(0,t.tZ)("td",null,n[25].value),(0,t.tZ)("td",null,n[26].value),(0,t.tZ)("td",null,n[27].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[28].value),(0,t.tZ)("td",null,n[29].value),(0,t.tZ)("td",null,n[30].value),(0,t.tZ)("td",null,n[31].value),(0,t.tZ)("td",null)))))))}l.default=i}}]);
