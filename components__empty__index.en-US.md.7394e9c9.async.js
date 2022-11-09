"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[50453],{72047:function(_,i,n){n.r(i);var u=n(2143),p=n(96152),l=n(74775),a=n(5937),c=n(74399),v=n(56140),o=n(5388),h=n(1160),x=n(95127),E=n(74418),s=n(33098),d=n(67294),e=n(66366);function m(){var r=(0,s.eL)(),t=r.texts;return(0,e.tZ)(s.dY,null,(0,e.tZ)(d.Fragment,null,(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("p",null,t[0].value),(0,e.tZ)("h2",{id:"when-to-use"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use"},(0,e.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,e.tZ)("ul",null,(0,e.tZ)("li",null,t[1].value),(0,e.tZ)("li",null,t[2].value)),(0,e.tZ)("h2",{id:"examples"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#examples"},(0,e.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,e.tZ)(o.Z,{items:[{demo:{id:"components-empty-demo-basic"},previewerProps:{title:"Basic",filename:"components/empty/demo/basic.tsx",jsx:`import React from 'react';
import { Empty } from 'antd';
const App = () => <Empty />;
export default App;
`,description:"<p>Simplest Usage.</p>"}},{demo:{id:"components-empty-demo-simple"},previewerProps:{title:"Chose image",filename:"components/empty/demo/simple.tsx",jsx:`import React from 'react';
import { Empty } from 'antd';
const App = () => <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
export default App;
`,description:"<p>You can choose another style of <code>image</code> by setting image to <code>Empty.PRESENTED_IMAGE_SIMPLE</code>.</p>"}},{demo:{id:"components-empty-demo-customize"},previewerProps:{title:"Customize",filename:"components/empty/demo/customize.tsx",jsx:`import React from 'react';
import { Button, Empty } from 'antd';
const App = () => (
  <Empty
    image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
    imageStyle={{
      height: 60,
    }}
    description={
      <span>
        Customize <a href="#API">Description</a>
      </span>
    }
  >
    <Button type="primary">Create Now</Button>
  </Empty>
);
export default App;
`,description:"<p>Customize image source, image size, description and extra content.</p>"}},{demo:{id:"components-empty-demo-config-provider"},previewerProps:{title:"ConfigProvider",filename:"components/empty/demo/config-provider.tsx",jsx:`import React, { useState } from 'react';
import { SmileOutlined } from '@ant-design/icons';
import {
  Cascader,
  ConfigProvider,
  Divider,
  List,
  Select,
  Switch,
  Table,
  Transfer,
  TreeSelect,
} from 'antd';
const customizeRenderEmpty = () => (
  <div
    style={{
      textAlign: 'center',
    }}
  >
    <SmileOutlined
      style={{
        fontSize: 20,
      }}
    />
    <p>Data Not Found</p>
  </div>
);
const style = {
  width: 200,
};
const App = () => {
  const [customize, setCustomize] = useState(false);
  return (
    <div>
      <Switch
        unCheckedChildren="default"
        checkedChildren="customize"
        checked={customize}
        onChange={(val) => {
          setCustomize(val);
        }}
      />

      <Divider />

      <ConfigProvider renderEmpty={customize ? customizeRenderEmpty : undefined}>
        <div className="config-provider">
          <h4>Select</h4>
          <Select style={style} />

          <h4>TreeSelect</h4>
          <TreeSelect style={style} treeData={[]} />

          <h4>Cascader</h4>
          <Cascader style={style} options={[]} showSearch />

          <h4>Transfer</h4>
          <Transfer />

          <h4>Table</h4>
          <Table
            style={{
              marginTop: 8,
            }}
            columns={[
              {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
              },
              {
                title: 'Age',
                dataIndex: 'age',
                key: 'age',
              },
            ]}
          />

          <h4>List</h4>
          <List />
        </div>
      </ConfigProvider>
    </div>
  );
};
export default App;
`,description:"<p>Use ConfigProvider set global Empty style.</p>"}},{demo:{id:"components-empty-demo-description"},previewerProps:{title:"No description",filename:"components/empty/demo/description.tsx",jsx:`import React from 'react';
import { Empty } from 'antd';
const App = () => <Empty description={false} />;
export default App;
`,description:"<p>Simplest Usage with no description.</p>"}}]}),(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("h2",{id:"api"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,e.tZ)("span",{className:"icon icon-link"})),"API"),(0,e.tZ)(l.Z,{lang:"jsx"},t[3].value),(0,e.tZ)(a.Z,null,(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",null,t[4].value),(0,e.tZ)("th",null,t[5].value),(0,e.tZ)("th",null,t[6].value),(0,e.tZ)("th",null,t[7].value),(0,e.tZ)("th",null,t[8].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[9].value),(0,e.tZ)("td",null,t[10].value),(0,e.tZ)("td",null,t[11].value),(0,e.tZ)("td",null,t[12].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[13].value),(0,e.tZ)("td",null,t[14].value),(0,e.tZ)("td",null,t[15].value),(0,e.tZ)("td",null,(0,e.tZ)("code",null,t[16].value)),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[17].value),(0,e.tZ)("td",null,t[18].value),(0,e.tZ)("td",null,t[19].value),(0,e.tZ)("td",null,t[20].value),(0,e.tZ)("td",null)))),(0,e.tZ)("h2",{id:"built-in-images"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#built-in-images"},(0,e.tZ)("span",{className:"icon icon-link"})),"Built-in images"),(0,e.tZ)("ul",null,(0,e.tZ)("li",null,(0,e.tZ)("p",null,t[21].value),(0,e.tZ)("div",{className:"site-empty-buildIn-img site-empty-buildIn-simple"},(0,e.tZ)("div",null))),(0,e.tZ)("li",null,(0,e.tZ)("p",null,t[22].value),(0,e.tZ)("div",{className:"site-empty-buildIn-img site-empty-buildIn-default"}))),(0,e.tZ)("style",null,t[23].value))))}i.default=m}}]);
