"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[86115],{71569:function(i,l,n){n.r(l);var c=n(2143),r=n(96152),m=n(74775),a=n(5937),v=n(74399),p=n(56140),_=n(5388),Z=n(1160),x=n(95127),h=n(74418),o=n(9577),s=n(67294),t=n(66366);function d(){var u=(0,o.eL)(),e=u.texts;return(0,t.tZ)(o.dY,null,(0,t.tZ)(s.Fragment,null,(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("p",null,(0,t.tZ)("code",null,e[0].value),e[1].value),(0,t.tZ)("h2",{id:"when-to-use"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use"},(0,t.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,t.tZ)("ul",null,(0,t.tZ)("li",null,e[2].value),(0,t.tZ)("li",null,e[3].value)),(0,t.tZ)("h2",{id:"examples"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#examples"},(0,t.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,t.tZ)(_.Z,{items:[{demo:{id:"components-back-top-demo-basic"},previewerProps:{title:"Basic",filename:"components/back-top/demo/basic.tsx",jsx:`import React from 'react';
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
</blockquote>`}}]}),(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("h2",{id:"api"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,t.tZ)("span",{className:"icon icon-link"})),"API"),(0,t.tZ)("blockquote",null,(0,t.tZ)("p",null,e[4].value,(0,t.tZ)("code",null,e[5].value),e[6].value),(0,t.tZ)("p",null,e[7].value,(0,t.tZ)("code",null,e[8].value),e[9].value)),(0,t.tZ)(a.Z,null,(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,e[10].value),(0,t.tZ)("th",null,e[11].value),(0,t.tZ)("th",null,e[12].value),(0,t.tZ)("th",null,e[13].value),(0,t.tZ)("th",null,e[14].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[15].value),(0,t.tZ)("td",null,e[16].value),(0,t.tZ)("td",null,e[17].value),(0,t.tZ)("td",null,e[18].value),(0,t.tZ)("td",null,e[19].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[20].value),(0,t.tZ)("td",null,e[21].value),(0,t.tZ)("td",null,e[22].value),(0,t.tZ)("td",null,e[23].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[24].value),(0,t.tZ)("td",null,e[25].value),(0,t.tZ)("td",null,e[26].value),(0,t.tZ)("td",null,e[27].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[28].value),(0,t.tZ)("td",null,e[29].value),(0,t.tZ)("td",null,e[30].value),(0,t.tZ)("td",null,e[31].value),(0,t.tZ)("td",null)))))))}l.default=d}}]);
