"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[12913],{71713:function(_,i,e){e.r(i);var p=e(26004),r=e(90568),m=e(23906),d=e(85639),c=e(51888),v=e(35437),o=e(13685),h=e(76925),g=e(30159),Z=e(64501),l=e(15413),a=e(71062),n=e(13103);function s(){var u=(0,l.eL)(),t=u.texts;return(0,n.tZ)(l.dY,null,(0,n.tZ)(a.Fragment,null,(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("p",null,t[0].value),(0,n.tZ)("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u4F55\u65F6\u4F7F\u7528"),(0,n.tZ)("p",null,t[1].value),(0,n.tZ)("h2",{id:"\u4EE3\u7801\u6F14\u793A"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),(0,n.tZ)(o.Z,{items:[{demo:{id:"components-spin-demo-basic"},previewerProps:{title:"\u57FA\u672C\u7528\u6CD5",filename:"components/spin/demo/basic.tsx",jsx:`import React from 'react';
import { Spin } from 'antd';
const App = () => <Spin />;
export default App;
`,description:"<p>\u4E00\u4E2A\u7B80\u5355\u7684 loading \u72B6\u6001\u3002</p>"}},{demo:{id:"components-spin-demo-size"},previewerProps:{title:"\u5404\u79CD\u5927\u5C0F",filename:"components/spin/demo/size.tsx",jsx:`import React from 'react';
import { Space, Spin } from 'antd';
const App = () => (
  <Space size="middle">
    <Spin size="small" />
    <Spin />
    <Spin size="large" />
  </Space>
);
export default App;
`,description:"<p>\u5C0F\u7684\u7528\u4E8E\u6587\u672C\u52A0\u8F7D\uFF0C\u9ED8\u8BA4\u7528\u4E8E\u5361\u7247\u5BB9\u5668\u7EA7\u52A0\u8F7D\uFF0C\u5927\u7684\u7528\u4E8E<strong>\u9875\u9762\u7EA7</strong>\u52A0\u8F7D\u3002</p>"}},{demo:{id:"components-spin-demo-inside"},previewerProps:{title:"\u5BB9\u5668",filename:"components/spin/demo/inside.tsx",jsx:`import React from 'react';
import { Spin } from 'antd';
const App = () => (
  <div className="example">
    <Spin />
  </div>
);
export default App;
`,description:"<p>\u653E\u5165\u4E00\u4E2A\u5BB9\u5668\u4E2D\u3002</p>",style:`.example {
  margin: 20px 0;
  margin-bottom: 20px;
  padding: 30px 50px;
  text-align: center;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}`}},{demo:{id:"components-spin-demo-nested"},previewerProps:{title:"\u5361\u7247\u52A0\u8F7D\u4E2D",filename:"components/spin/demo/nested.tsx",jsx:`import React, { useState } from 'react';
import { Alert, Spin, Switch } from 'antd';
const App = () => {
  const [loading, setLoading] = useState(false);
  const toggle = (checked) => {
    setLoading(checked);
  };
  return (
    <div>
      <Spin spinning={loading}>
        <Alert
          message="Alert message title"
          description="Further details about the context of this alert."
          type="info"
        />
      </Spin>
      <div
        style={{
          marginTop: 16,
        }}
      >
        Loading state\uFF1A
        <Switch checked={loading} onChange={toggle} />
      </div>
    </div>
  );
};
export default App;
`,description:"<p>\u53EF\u4EE5\u76F4\u63A5\u628A\u5185\u5BB9\u5185\u5D4C\u5230 <code>Spin</code> \u4E2D\uFF0C\u5C06\u73B0\u6709\u5BB9\u5668\u53D8\u4E3A\u52A0\u8F7D\u72B6\u6001\u3002</p>"}},{demo:{id:"components-spin-demo-tip"},previewerProps:{title:"\u81EA\u5B9A\u4E49\u63CF\u8FF0\u6587\u6848",filename:"components/spin/demo/tip.tsx",jsx:`import React from 'react';
import { Alert, Spin } from 'antd';
const App = () => (
  <Spin tip="Loading...">
    <Alert
      message="Alert message title"
      description="Further details about the context of this alert."
      type="info"
    />
  </Spin>
);
export default App;
`,description:"<p>\u81EA\u5B9A\u4E49\u63CF\u8FF0\u6587\u6848\u3002</p>"}},{demo:{id:"components-spin-demo-delayanddebounce"},previewerProps:{title:"\u5EF6\u8FDF",filename:"components/spin/demo/delayAndDebounce.tsx",jsx:`import React, { useState } from 'react';
import { Alert, Spin, Switch } from 'antd';
const App = () => {
  const [loading, setLoading] = useState(false);
  const toggle = (checked) => {
    setLoading(checked);
  };
  const container = (
    <Alert
      message="Alert message title"
      description="Further details about the context of this alert."
      type="info"
    />
  );
  return (
    <div>
      <Spin spinning={loading} delay={500}>
        {container}
      </Spin>
      <div
        style={{
          marginTop: 16,
        }}
      >
        Loading state\uFF1A
        <Switch checked={loading} onChange={toggle} />
      </div>
    </div>
  );
};
export default App;
`,description:"<p>\u5EF6\u8FDF\u663E\u793A loading \u6548\u679C\u3002\u5F53 spinning \u72B6\u6001\u5728 <code>delay</code> \u65F6\u95F4\u5185\u7ED3\u675F\uFF0C\u5219\u4E0D\u663E\u793A loading \u72B6\u6001\u3002</p>"}},{demo:{id:"components-spin-demo-custom-indicator"},previewerProps:{title:"\u81EA\u5B9A\u4E49\u6307\u793A\u7B26",filename:"components/spin/demo/custom-indicator.tsx",jsx:`import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 24,
    }}
    spin
  />
);
const App = () => <Spin indicator={antIcon} />;
export default App;
`,description:"<p>\u4F7F\u7528\u81EA\u5B9A\u4E49\u6307\u793A\u7B26\u3002</p>"}}]}),(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("h2",{id:"api"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,n.tZ)("span",{className:"icon icon-link"})),"API"),(0,n.tZ)(d.Z,null,(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,t[2].value),(0,n.tZ)("th",null,t[3].value),(0,n.tZ)("th",null,t[4].value),(0,n.tZ)("th",null,t[5].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[6].value),(0,n.tZ)("td",null,t[7].value),(0,n.tZ)("td",null,t[8].value),(0,n.tZ)("td",null,t[9].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[10].value),(0,n.tZ)("td",null,t[11].value),(0,n.tZ)("td",null,t[12].value),(0,n.tZ)("td",null,t[13].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[14].value),(0,n.tZ)("td",null,t[15].value,(0,n.tZ)("code",null,t[16].value),t[17].value,(0,n.tZ)("code",null,t[18].value),t[19].value,(0,n.tZ)("code",null,t[20].value)),(0,n.tZ)("td",null,t[21].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[22].value))),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[23].value),(0,n.tZ)("td",null,t[24].value),(0,n.tZ)("td",null,t[25].value),(0,n.tZ)("td",null,t[26].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[27].value),(0,n.tZ)("td",null,t[28].value),(0,n.tZ)("td",null,t[29].value),(0,n.tZ)("td",null,t[30].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[31].value),(0,n.tZ)("td",null,t[32].value),(0,n.tZ)("td",null,t[33].value),(0,n.tZ)("td",null,t[34].value)))),(0,n.tZ)("h3",{id:"\u9759\u6001\u65B9\u6CD5"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u9759\u6001\u65B9\u6CD5"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u9759\u6001\u65B9\u6CD5"),(0,n.tZ)("ul",null,(0,n.tZ)("li",null,(0,n.tZ)("p",null,(0,n.tZ)("code",null,t[35].value)),(0,n.tZ)("p",null,t[36].value))))))}i.default=s}}]);
