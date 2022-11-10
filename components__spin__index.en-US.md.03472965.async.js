"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[25406],{10116:function(u,i,e){e.r(i);var _=e(26004),r=e(90568),c=e(23906),l=e(85639),m=e(51888),g=e(35437),o=e(13685),h=e(76925),v=e(30159),x=e(64501),d=e(15413),a=e(71062),n=e(13103);function s(){var p=(0,d.eL)(),t=p.texts;return(0,n.tZ)(d.dY,null,(0,n.tZ)(a.Fragment,null,(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("p",null,t[0].value),(0,n.tZ)("h2",{id:"when-to-use"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use"},(0,n.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,n.tZ)("p",null,t[1].value),(0,n.tZ)("h2",{id:"examples"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#examples"},(0,n.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,n.tZ)(o.Z,{items:[{demo:{id:"components-spin-demo-basic"},previewerProps:{title:"basic Usage",filename:"components/spin/demo/basic.tsx",jsx:`import React from 'react';
import { Spin } from 'antd';
const App = () => <Spin />;
export default App;
`,description:"<p>A simple loading status.</p>"}},{demo:{id:"components-spin-demo-size"},previewerProps:{title:"Size",filename:"components/spin/demo/size.tsx",jsx:`import React from 'react';
import { Space, Spin } from 'antd';
const App = () => (
  <Space size="middle">
    <Spin size="small" />
    <Spin />
    <Spin size="large" />
  </Space>
);
export default App;
`,description:"<p>A small <code>Spin</code> is used for loading text, default sized <code>Spin</code> for loading a card-level block, and large <code>Spin</code> used for loading a <strong>page</strong>.</p>"}},{demo:{id:"components-spin-demo-inside"},previewerProps:{title:"Inside a container",filename:"components/spin/demo/inside.tsx",jsx:`import React from 'react';
import { Spin } from 'antd';
const App = () => (
  <div className="example">
    <Spin />
  </div>
);
export default App;
`,description:"<p>Spin in a container.</p>",style:`.example {
  margin: 20px 0;
  margin-bottom: 20px;
  padding: 30px 50px;
  text-align: center;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}`}},{demo:{id:"components-spin-demo-nested"},previewerProps:{title:"Embedded mode",filename:"components/spin/demo/nested.tsx",jsx:`import React, { useState } from 'react';
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
`,description:"<p>Embedding content into <code>Spin</code> will set it into loading state.</p>"}},{demo:{id:"components-spin-demo-tip"},previewerProps:{title:"Customized description",filename:"components/spin/demo/tip.tsx",jsx:`import React from 'react';
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
`,description:"<p>Customized description content.</p>"}},{demo:{id:"components-spin-demo-delayanddebounce"},previewerProps:{title:"delay",filename:"components/spin/demo/delayAndDebounce.tsx",jsx:`import React, { useState } from 'react';
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
`,description:"<p>Specifies a delay for loading state. If <code>spinning</code> ends during delay, loading status won't appear.</p>"}},{demo:{id:"components-spin-demo-custom-indicator"},previewerProps:{title:"Custom spinning indicator",filename:"components/spin/demo/custom-indicator.tsx",jsx:`import React from 'react';
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
`,description:"<p>Use custom loading indicator.</p>"}}]}),(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("h2",{id:"api"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,n.tZ)("span",{className:"icon icon-link"})),"API"),(0,n.tZ)(l.Z,null,(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,t[2].value),(0,n.tZ)("th",null,t[3].value),(0,n.tZ)("th",null,t[4].value),(0,n.tZ)("th",null,t[5].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[6].value),(0,n.tZ)("td",null,t[7].value),(0,n.tZ)("td",null,t[8].value),(0,n.tZ)("td",null,t[9].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[10].value),(0,n.tZ)("td",null,t[11].value),(0,n.tZ)("td",null,t[12].value),(0,n.tZ)("td",null,t[13].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[14].value),(0,n.tZ)("td",null,t[15].value,(0,n.tZ)("code",null,t[16].value),t[17].value,(0,n.tZ)("code",null,t[18].value),t[19].value,(0,n.tZ)("code",null,t[20].value)),(0,n.tZ)("td",null,t[21].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[22].value))),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[23].value),(0,n.tZ)("td",null,t[24].value),(0,n.tZ)("td",null,t[25].value),(0,n.tZ)("td",null,t[26].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[27].value),(0,n.tZ)("td",null,t[28].value),(0,n.tZ)("td",null,t[29].value),(0,n.tZ)("td",null,t[30].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[31].value),(0,n.tZ)("td",null,t[32].value),(0,n.tZ)("td",null,t[33].value),(0,n.tZ)("td",null,t[34].value)))),(0,n.tZ)("h3",{id:"static-method"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#static-method"},(0,n.tZ)("span",{className:"icon icon-link"})),"Static Method"),(0,n.tZ)("ul",null,(0,n.tZ)("li",null,(0,n.tZ)("p",null,(0,n.tZ)("code",null,t[35].value)),(0,n.tZ)("p",null,t[36].value))))))}i.default=s}}]);
