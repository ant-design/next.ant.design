"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[34764],{52547:function(m,i,e){e.r(i);var r=e(26004),p=e(90568),d=e(23906),a=e(85639),c=e(51888),h=e(35437),s=e(13685),E=e(76925),v=e(30159),Z=e(64501),l=e(15413),_=e(71062),t=e(13103);function o(){var u=(0,l.eL)(),n=u.texts;return(0,t.tZ)(l.dY,null,(0,t.tZ)(_.Fragment,null,(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("p",null,n[0].value),(0,t.tZ)("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528"},(0,t.tZ)("span",{className:"icon icon-link"})),"\u4F55\u65F6\u4F7F\u7528"),(0,t.tZ)("ul",null,(0,t.tZ)("li",null,n[1].value),(0,t.tZ)("li",null,n[2].value)),(0,t.tZ)("h2",{id:"\u4EE3\u7801\u6F14\u793A"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A"},(0,t.tZ)("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),(0,t.tZ)(s.Z,{items:[{demo:{id:"components-empty-demo-basic"},previewerProps:{title:"\u57FA\u672C",filename:"components/empty/demo/basic.tsx",jsx:`import React from 'react';
import { Empty } from 'antd';
const App = () => <Empty />;
export default App;
`,description:"<p>\u7B80\u5355\u7684\u5C55\u793A\u3002</p>"}},{demo:{id:"components-empty-demo-simple"},previewerProps:{title:"\u9009\u62E9\u56FE\u7247",filename:"components/empty/demo/simple.tsx",jsx:`import React from 'react';
import { Empty } from 'antd';
const App = () => <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
export default App;
`,description:"<p>\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E <code>image</code> \u4E3A <code>Empty.PRESENTED_IMAGE_SIMPLE</code> \u9009\u62E9\u53E6\u4E00\u79CD\u98CE\u683C\u7684\u56FE\u7247\u3002</p>"}},{demo:{id:"components-empty-demo-customize"},previewerProps:{title:"\u81EA\u5B9A\u4E49",filename:"components/empty/demo/customize.tsx",jsx:`import React from 'react';
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
`,description:"<p>\u81EA\u5B9A\u4E49\u56FE\u7247\u94FE\u63A5\u3001\u56FE\u7247\u5927\u5C0F\u3001\u63CF\u8FF0\u3001\u9644\u5C5E\u5185\u5BB9\u3002</p>"}},{demo:{id:"components-empty-demo-config-provider"},previewerProps:{title:"\u5168\u5C40\u5316\u914D\u7F6E",filename:"components/empty/demo/config-provider.tsx",jsx:`import React, { useState } from 'react';
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
`,description:"<p>\u81EA\u5B9A\u4E49\u5168\u5C40\u7EC4\u4EF6\u7684 Empty \u6837\u5F0F\u3002</p>"}},{demo:{id:"components-empty-demo-description"},previewerProps:{title:"\u65E0\u63CF\u8FF0",filename:"components/empty/demo/description.tsx",jsx:`import React from 'react';
import { Empty } from 'antd';
const App = () => <Empty description={false} />;
export default App;
`,description:"<p>\u65E0\u63CF\u8FF0\u5C55\u793A\u3002</p>"}}]}),(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("h2",{id:"api"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,t.tZ)("span",{className:"icon icon-link"})),"API"),(0,t.tZ)(d.Z,{lang:"jsx"},n[3].value),(0,t.tZ)(a.Z,null,(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,n[4].value),(0,t.tZ)("th",null,n[5].value),(0,t.tZ)("th",null,n[6].value),(0,t.tZ)("th",null,n[7].value),(0,t.tZ)("th",null,n[8].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[9].value),(0,t.tZ)("td",null,n[10].value),(0,t.tZ)("td",null,n[11].value),(0,t.tZ)("td",null,n[12].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[13].value),(0,t.tZ)("td",null,n[14].value),(0,t.tZ)("td",null,n[15].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[16].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[17].value),(0,t.tZ)("td",null,n[18].value),(0,t.tZ)("td",null,n[19].value),(0,t.tZ)("td",null,n[20].value),(0,t.tZ)("td",null)))),(0,t.tZ)("h2",{id:"\u5185\u7F6E\u56FE\u7247"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5185\u7F6E\u56FE\u7247"},(0,t.tZ)("span",{className:"icon icon-link"})),"\u5185\u7F6E\u56FE\u7247"),(0,t.tZ)("ul",null,(0,t.tZ)("li",null,(0,t.tZ)("p",null,n[21].value),(0,t.tZ)("div",{className:"site-empty-buildIn-img site-empty-buildIn-simple"},(0,t.tZ)("div",null))),(0,t.tZ)("li",null,(0,t.tZ)("p",null,n[22].value),(0,t.tZ)("div",{className:"site-empty-buildIn-img site-empty-buildIn-default"}))),(0,t.tZ)("style",null,n[23].value))))}i.default=o}}]);
