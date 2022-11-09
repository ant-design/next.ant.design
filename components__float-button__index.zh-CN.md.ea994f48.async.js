"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[20390],{46061:function(s,o,l){l.r(o);var c=l(2143),p=l(96152),m=l(74775),e=l(5937),Z=l(74399),v=l(56140),a=l(5388),_=l(1160),f=l(95127),h=l(74418),u=l(33098),i=l(67294),t=l(66366);function d(){var r=(0,u.eL)(),n=r.texts;return(0,t.tZ)(u.dY,null,(0,t.tZ)(i.Fragment,null,(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("p",null,n[0].value,(0,t.tZ)("code",null,n[1].value),n[2].value),(0,t.tZ)("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528"},(0,t.tZ)("span",{className:"icon icon-link"})),"\u4F55\u65F6\u4F7F\u7528"),(0,t.tZ)("ul",null,(0,t.tZ)("li",null,n[3].value),(0,t.tZ)("li",null,n[4].value)),(0,t.tZ)("h2",{id:"\u4EE3\u7801\u6F14\u793A"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A"},(0,t.tZ)("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),(0,t.tZ)(a.Z,{items:[{demo:{id:"components-float-button-demo-basic"},previewerProps:{iframe:!0,title:"\u57FA\u672C",filename:"components/float-button/demo/basic.tsx",jsx:`import React from 'react';
import { FloatButton } from 'antd';
const App = () => <FloatButton onClick={() => console.log('click')} />;
export default App;
`,description:"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>"}},{demo:{id:"components-float-button-demo-type"},previewerProps:{iframe:!0,title:"\u7C7B\u578B",filename:"components/float-button/demo/type.tsx",jsx:`import React from 'react';
import { FloatButton } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
const App = () => (
  <>
    <FloatButton
      icon={<QuestionCircleOutlined />}
      type="primary"
      style={{
        right: 24,
      }}
    />
    <FloatButton
      icon={<QuestionCircleOutlined />}
      type="default"
      style={{
        right: 94,
      }}
    />
  </>
);
export default App;
`,description:"<p>\u901A\u8FC7 <code>type</code> \u6539\u53D8\u60AC\u6D6E\u6309\u94AE\u7684\u7C7B\u578B</p>"}},{demo:{id:"components-float-button-demo-shape"},previewerProps:{iframe:!0,title:"\u5F62\u72B6",filename:"components/float-button/demo/shape.tsx",jsx:`import React, { useState } from 'react';
import { FloatButton, Radio } from 'antd';
import { CustomerServiceOutlined } from '@ant-design/icons';
const App = () => {
  const [shape, setShape] = useState('circle');
  const onChange = (e) => {
    setShape(e.target.value);
  };
  return (
    <>
      <Radio.Group
        onChange={onChange}
        value={shape}
        style={{
          margin: 20,
        }}
      >
        <Radio value="circle">\u5706\u5F62</Radio>
        <Radio value="square">\u65B9\u5F62</Radio>
      </Radio.Group>
      <FloatButton icon={<CustomerServiceOutlined />} type="primary" shape={shape} />
    </>
  );
};
export default App;
`,description:"<p>\u4F60\u53EF\u4EE5\u901A\u8FC7 <code>shape</code> \u8BBE\u7F6E\u4E0D\u540C\u7684\u5F62\u72B6</p>"}},{demo:{id:"components-float-button-demo-description"},previewerProps:{iframe:!0,title:"\u63CF\u8FF0",filename:"components/float-button/demo/description.tsx",jsx:`import React from 'react';
import { FloatButton } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';
const App = () => (
  <>
    <FloatButton
      icon={<FileTextOutlined />}
      description="HELP INFO"
      shape="square"
      style={{
        right: 24,
      }}
    />
    <FloatButton
      description="HELP INFO"
      shape="square"
      style={{
        right: 94,
      }}
    />
    <FloatButton
      icon={<FileTextOutlined />}
      description="HELP"
      shape="square"
      style={{
        right: 164,
      }}
    />
  </>
);
export default App;
`,description:`<p>\u53EF\u4EE5\u901A\u8FC7 <code>description</code> \u8BBE\u7F6E\u6587\u5B57\u5185\u5BB9\u3002</p>
<blockquote>
<p>\u4EC5\u5F53 <code>shape</code> \u5C5E\u6027\u4E3A <code>square</code> \u65F6\u652F\u6301\u3002\u7531\u4E8E\u7A7A\u95F4\u8F83\u5C0F\uFF0C\u63A8\u8350\u4F7F\u7528\u6BD4\u8F83\u7CBE\u7B80\u7684\u53CC\u6570\u6587\u5B57\u3002</p>
</blockquote>`}},{demo:{id:"components-float-button-demo-tooltip"},previewerProps:{iframe:!0,title:"\u542B\u6709\u6C14\u6CE1\u5361\u7247\u7684\u60AC\u6D6E\u6309\u94AE",filename:"components/float-button/demo/tooltip.tsx",jsx:`import React from 'react';
import { FloatButton } from 'antd';
const App = () => <FloatButton tooltip={<div>Documents</div>} />;
export default App;
`,description:"<p>\u8BBE\u7F6E tooltip \u5C5E\u6027\uFF0C\u5373\u53EF\u5F00\u542F\u6C14\u6CE1\u5361\u7247</p>"}},{demo:{id:"components-float-button-demo-group"},previewerProps:{iframe:!0,title:"\u6D6E\u52A8\u6309\u94AE\u7EC4",filename:"components/float-button/demo/group.tsx",jsx:`import React from 'react';
import { FloatButton } from 'antd';
import { QuestionCircleOutlined, SyncOutlined } from '@ant-design/icons';
const App = () => (
  <>
    <FloatButton.Group
      shape="circle"
      style={{
        right: 24,
      }}
    >
      <FloatButton icon={<QuestionCircleOutlined />} />
      <FloatButton />
      <FloatButton.BackTop visibilityHeight={-1} />
    </FloatButton.Group>
    <FloatButton.Group
      shape="square"
      style={{
        right: 94,
      }}
    >
      <FloatButton icon={<QuestionCircleOutlined />} />
      <FloatButton />
      <FloatButton icon={<SyncOutlined />} />
      <FloatButton.BackTop visibilityHeight={-1} />
    </FloatButton.Group>
  </>
);
export default App;
`,description:"<p>\u6309\u94AE\u7EC4\u5408\u4F7F\u7528\u65F6\uFF0C\u63A8\u8350\u4F7F\u7528 <code>&#x3C;FloatButton.Group /></code>\uFF0C\u5E76\u901A\u8FC7\u8BBE\u7F6E <code>shape</code> \u5C5E\u6027\u6539\u53D8\u60AC\u6D6E\u6309\u94AE\u7EC4\u7684\u5F62\u72B6\u3002\u60AC\u6D6E\u6309\u94AE\u7EC4\u7684 <code>shape</code> \u4F1A\u8986\u76D6\u5185\u90E8 FloatButton \u7684 <code>shape</code> \u5C5E\u6027\u3002</p>"}},{demo:{id:"components-float-button-demo-group-menu"},previewerProps:{iframe:!0,title:"\u83DC\u5355\u6A21\u5F0F",filename:"components/float-button/demo/group-menu.tsx",jsx:`import React from 'react';
import { FloatButton } from 'antd';
import { CustomerServiceOutlined, CommentOutlined } from '@ant-design/icons';
const App = () => (
  <FloatButton.Group icon={<CustomerServiceOutlined />} type="primary" trigger="click">
    <FloatButton />
    <FloatButton icon={<CommentOutlined />} />
  </FloatButton.Group>
);
export default App;
`,description:"<p>\u8BBE\u7F6E <code>trigger</code> \u5C5E\u6027\u5373\u53EF\u5F00\u542F\u83DC\u5355\u6A21\u5F0F\u3002\u63D0\u4F9B <code>hover</code> \u548C <code>click</code> \u4E24\u79CD\u89E6\u53D1\u65B9\u5F0F</p>"}},{demo:{id:"components-float-button-demo-back-top"},previewerProps:{iframe:!0,title:"\u56DE\u5230\u9876\u90E8",filename:"components/float-button/demo/back-top.tsx",jsx:`import React from 'react';
import { FloatButton } from 'antd';
const App = () => (
  <div
    style={{
      height: '500vh',
      padding: 10,
    }}
  >
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <FloatButton.BackTop />
  </div>
);
export default App;
`,description:"<p>\u8FD4\u56DE\u9875\u9762\u9876\u90E8\u7684\u64CD\u4F5C\u6309\u94AE\u3002</p>"}},{demo:{id:"components-float-button-demo-render-panel"},previewerProps:{debug:!0,title:"_InternalPanelDoNotUseOrYouWillBeFired",filename:"components/float-button/demo/render-panel.tsx",jsx:`import React from 'react';
import { CustomerServiceOutlined, QuestionCircleOutlined, SyncOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';

/** Test usage. Do not use in your production. */
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalFloatButton } = FloatButton;
export default () => (
  <div
    style={{
      display: 'flex',
      columnGap: 16,
      alignItems: 'center',
    }}
  >
    <InternalFloatButton backTop />
    <InternalFloatButton icon={<CustomerServiceOutlined />} />
    <InternalFloatButton
      icon={<QuestionCircleOutlined />}
      description="HELP"
      shape="square"
      type="primary"
    />
    <InternalFloatButton
      shape="square"
      items={[
        {
          icon: <QuestionCircleOutlined />,
        },
        {
          icon: <CustomerServiceOutlined />,
        },
        {
          icon: <SyncOutlined />,
        },
      ]}
    />
    <InternalFloatButton
      icon={<CustomerServiceOutlined />}
      trigger="click"
      open
      items={[
        {
          icon: <QuestionCircleOutlined />,
        },
        {
          icon: <CustomerServiceOutlined />,
        },
        {
          icon: <SyncOutlined />,
        },
      ]}
    />
  </div>
);
`,description:"<p>\u8C03\u8BD5\u7528\u7EC4\u4EF6\uFF0C\u8BF7\u52FF\u76F4\u63A5\u4F7F\u7528\u3002</p>"}}]}),(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("h2",{id:"api"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,t.tZ)("span",{className:"icon icon-link"})),"API"),(0,t.tZ)("h3",{id:"\u5171\u540C\u7684-api"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5171\u540C\u7684-api"},(0,t.tZ)("span",{className:"icon icon-link"})),"\u5171\u540C\u7684 API"),(0,t.tZ)(e.Z,null,(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,n[5].value),(0,t.tZ)("th",null,n[6].value),(0,t.tZ)("th",null,n[7].value),(0,t.tZ)("th",null,n[8].value),(0,t.tZ)("th",null,n[9].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[10].value),(0,t.tZ)("td",null,n[11].value),(0,t.tZ)("td",null,n[12].value),(0,t.tZ)("td",null,n[13].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[14].value),(0,t.tZ)("td",null,n[15].value),(0,t.tZ)("td",null,n[16].value),(0,t.tZ)("td",null,n[17].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[18].value),(0,t.tZ)("td",null,n[19].value),(0,t.tZ)("td",null,n[20].value),(0,t.tZ)("td",null,n[21].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[22].value),(0,t.tZ)("td",null,n[23].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[24].value),n[25].value,(0,t.tZ)("code",null,n[26].value)),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[27].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[28].value),(0,t.tZ)("td",null,n[29].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[30].value),n[31].value,(0,t.tZ)("code",null,n[32].value)),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[33].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[34].value),(0,t.tZ)("td",null,n[35].value),(0,t.tZ)("td",null,n[36].value),(0,t.tZ)("td",null,n[37].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[38].value),(0,t.tZ)("td",null,n[39].value),(0,t.tZ)("td",null,n[40].value),(0,t.tZ)("td",null,n[41].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[42].value),(0,t.tZ)("td",null,n[43].value),(0,t.tZ)("td",null,n[44].value),(0,t.tZ)("td",null,n[45].value),(0,t.tZ)("td",null)))),(0,t.tZ)("h3",{id:"floatbuttongroup"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#floatbuttongroup"},(0,t.tZ)("span",{className:"icon icon-link"})),"FloatButton.Group"),(0,t.tZ)(e.Z,null,(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,n[46].value),(0,t.tZ)("th",null,n[47].value),(0,t.tZ)("th",null,n[48].value),(0,t.tZ)("th",null,n[49].value),(0,t.tZ)("th",null,n[50].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[51].value),(0,t.tZ)("td",null,n[52].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[53].value),n[54].value,(0,t.tZ)("code",null,n[55].value)),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[56].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[57].value),(0,t.tZ)("td",null,n[58].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[59].value),n[60].value,(0,t.tZ)("code",null,n[61].value)),(0,t.tZ)("td",null,n[62].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[63].value),(0,t.tZ)("td",null,n[64].value),(0,t.tZ)("td",null,n[65].value),(0,t.tZ)("td",null,n[66].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[67].value),(0,t.tZ)("td",null,n[68].value),(0,t.tZ)("td",null,n[69].value),(0,t.tZ)("td",null,n[70].value),(0,t.tZ)("td",null)))),(0,t.tZ)("h3",{id:"floatbuttonbacktop"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#floatbuttonbacktop"},(0,t.tZ)("span",{className:"icon icon-link"})),"FloatButton.BackTop"),(0,t.tZ)(e.Z,null,(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,n[71].value),(0,t.tZ)("th",null,n[72].value),(0,t.tZ)("th",null,n[73].value),(0,t.tZ)("th",null,n[74].value),(0,t.tZ)("th",null,n[75].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[76].value),(0,t.tZ)("td",null,n[77].value),(0,t.tZ)("td",null,n[78].value),(0,t.tZ)("td",null,n[79].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[80].value),(0,t.tZ)("td",null,n[81].value),(0,t.tZ)("td",null,n[82].value),(0,t.tZ)("td",null,n[83].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[84].value),(0,t.tZ)("td",null,n[85].value),(0,t.tZ)("td",null,n[86].value),(0,t.tZ)("td",null,n[87].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[88].value),(0,t.tZ)("td",null,n[89].value),(0,t.tZ)("td",null,n[90].value),(0,t.tZ)("td",null,n[91].value),(0,t.tZ)("td",null)))))))}o.default=d}}]);
