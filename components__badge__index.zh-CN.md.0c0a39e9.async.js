"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[7729],{37182:function(u,a,t){t.r(a);var c=t(2143),p=t(50250),_=t(59378),g=t(28460),m=t(74775),o=t(5937),v=t(2068),h=t(74399),b=t(46004),B=t(35708),Z=t(30138),f=t(56140),d=t(5388),x=t(1160),C=t(13140),A=t(95127),w=t(74418),l=t(54331),r=t(67294),n=t(13946);function s(){var i=(0,l.eL)(),e=i.texts;return(0,n.tZ)(l.dY,null,(0,n.tZ)(r.Fragment,null,(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("p",null,e[0].value),(0,n.tZ)("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u4F55\u65F6\u4F7F\u7528"),(0,n.tZ)("p",null,e[1].value),(0,n.tZ)("h2",{id:"\u4EE3\u7801\u6F14\u793A"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),(0,n.tZ)(d.Z,{items:[{demo:{id:"components-badge-demo-basic"},previewerProps:{title:"\u57FA\u672C",filename:"components/badge/demo/basic.tsx",jsx:`import React from 'react';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Avatar, Badge } from 'antd';
const App = () => (
  <>
    <Badge count={5}>
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge count={0} showZero>
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge
      count={
        <ClockCircleOutlined
          style={{
            color: '#f5222d',
          }}
        />
      }
    >
      <Avatar shape="square" size="large" />
    </Badge>
  </>
);
export default App;
`,description:"<p>\u7B80\u5355\u7684\u5FBD\u7AE0\u5C55\u793A\uFF0C\u5F53 <code>count</code> \u4E3A <code>0</code> \u65F6\uFF0C\u9ED8\u8BA4\u4E0D\u663E\u793A\uFF0C\u4F46\u662F\u53EF\u4EE5\u4F7F\u7528 <code>showZero</code> \u4FEE\u6539\u4E3A\u663E\u793A\u3002</p>"}},{demo:{id:"components-badge-demo-no-wrapper"},previewerProps:{title:"\u72EC\u7ACB\u4F7F\u7528",filename:"components/badge/demo/no-wrapper.tsx",jsx:`import React, { useState } from 'react';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Badge, Space, Switch } from 'antd';
const App = () => {
  const [show, setShow] = useState(true);
  return (
    <Space>
      <Switch checked={show} onChange={() => setShow(!show)} />
      <Badge count={show ? 25 : 0} />
      <Badge
        count={
          show ? (
            <ClockCircleOutlined
              style={{
                color: '#f5222d',
              }}
            />
          ) : (
            0
          )
        }
      />
      <Badge
        className="site-badge-count-109"
        count={show ? 109 : 0}
        style={{
          backgroundColor: '#52c41a',
        }}
      />
    </Space>
  );
};
export default App;
`,description:`<p>\u4E0D\u5305\u88F9\u4EFB\u4F55\u5143\u7D20\u5373\u662F\u72EC\u7ACB\u4F7F\u7528\uFF0C\u53EF\u81EA\u5B9A\u6837\u5F0F\u5C55\u73B0\u3002</p>
<blockquote>
<p>\u5728\u53F3\u4E0A\u89D2\u7684 badge \u5219\u9650\u5B9A\u4E3A\u7EA2\u8272\u3002</p>
</blockquote>`}},{demo:{id:"components-badge-demo-overflow"},previewerProps:{title:"\u5C01\u9876\u6570\u5B57",filename:"components/badge/demo/overflow.tsx",jsx:`import React from 'react';
import { Avatar, Badge } from 'antd';
const App = () => (
  <>
    <Badge count={99}>
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge count={100}>
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge count={99} overflowCount={10}>
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge count={1000} overflowCount={999}>
      <Avatar shape="square" size="large" />
    </Badge>
  </>
);
export default App;
`,description:"<p>\u8D85\u8FC7 <code>overflowCount</code> \u7684\u4F1A\u663E\u793A\u4E3A <code>${overflowCount}+</code>\uFF0C\u9ED8\u8BA4\u7684 <code>overflowCount</code> \u4E3A <code>99</code>\u3002</p>"}},{demo:{id:"components-badge-demo-dot"},previewerProps:{title:"\u8BA8\u5ACC\u7684\u5C0F\u7EA2\u70B9",filename:"components/badge/demo/dot.tsx",jsx:`import React from 'react';
import { NotificationOutlined } from '@ant-design/icons';
import { Badge } from 'antd';
const App = () => (
  <>
    <Badge dot>
      <NotificationOutlined
        style={{
          fontSize: 16,
        }}
      />
    </Badge>
    <Badge dot>
      <a href="#">Link something</a>
    </Badge>
  </>
);
export default App;
`,description:"<p>\u6CA1\u6709\u5177\u4F53\u7684\u6570\u5B57\u3002</p>"}},{demo:{id:"components-badge-demo-change"},previewerProps:{title:"\u52A8\u6001",filename:"components/badge/demo/change.tsx",jsx:`import React, { useState } from 'react';
import { MinusOutlined, PlusOutlined, QuestionOutlined } from '@ant-design/icons';
import { Avatar, Badge, Button, Divider, Switch } from 'antd';
const ButtonGroup = Button.Group;
const App = () => {
  const [count, setCount] = useState(5);
  const [show, setShow] = useState(true);
  const increase = () => {
    setCount(count + 1);
  };
  const decline = () => {
    let newCount = count - 1;
    if (newCount < 0) {
      newCount = 0;
    }
    setCount(newCount);
  };
  const random = () => {
    const newCount = Math.floor(Math.random() * 100);
    setCount(newCount);
  };
  const onChange = (checked) => {
    setShow(checked);
  };
  return (
    <>
      <Badge count={count}>
        <Avatar shape="square" size="large" />
      </Badge>
      <ButtonGroup>
        <Button onClick={decline}>
          <MinusOutlined />
        </Button>
        <Button onClick={increase}>
          <PlusOutlined />
        </Button>
        <Button onClick={random}>
          <QuestionOutlined />
        </Button>
      </ButtonGroup>
      <Divider />
      <Badge dot={show}>
        <Avatar shape="square" size="large" />
      </Badge>
      <Switch onChange={onChange} checked={show} />
    </>
  );
};
export default App;
`,description:"<p>\u5C55\u793A\u52A8\u6001\u53D8\u5316\u7684\u6548\u679C\u3002</p>"}},{demo:{id:"components-badge-demo-link"},previewerProps:{title:"\u53EF\u70B9\u51FB",filename:"components/badge/demo/link.tsx",jsx:`import React from 'react';
import { Avatar, Badge } from 'antd';
const App = () => (
  <a href="#">
    <Badge count={5}>
      <Avatar shape="square" size="large" />
    </Badge>
  </a>
);
export default App;
`,description:"<p>\u7528 a \u6807\u7B7E\u8FDB\u884C\u5305\u88F9\u5373\u53EF\u3002</p>"}},{demo:{id:"components-badge-demo-offset"},previewerProps:{title:"\u81EA\u5B9A\u4E49\u4F4D\u7F6E\u504F\u79FB",filename:"components/badge/demo/offset.tsx",jsx:`import React from 'react';
import { Avatar, Badge } from 'antd';
const App = () => (
  <Badge count={5} offset={[10, 10]}>
    <Avatar shape="square" size="large" />
  </Badge>
);
export default App;
`,description:"<p>\u8BBE\u7F6E\u72B6\u6001\u70B9\u7684\u4F4D\u7F6E\u504F\u79FB\uFF0C\u683C\u5F0F\u4E3A <code>[left, top]</code>\uFF0C\u8868\u793A\u72B6\u6001\u70B9\u8DDD\u9ED8\u8BA4\u4F4D\u7F6E\u5DE6\u4FA7\u3001\u4E0A\u65B9\u7684\u504F\u79FB\u91CF\u3002</p>"}},{demo:{id:"components-badge-demo-size"},previewerProps:{title:"\u5927\u5C0F",filename:"components/badge/demo/size.tsx",jsx:`import React from 'react';
import { Avatar, Badge } from 'antd';
const App = () => (
  <>
    <Badge size="default" count={5}>
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge size="small" count={5}>
      <Avatar shape="square" size="large" />
    </Badge>
  </>
);
export default App;
`,description:"<p>\u53EF\u4EE5\u8BBE\u7F6E\u6709\u6570\u5B57\u5FBD\u6807\u7684\u5927\u5C0F\u3002</p>"}},{demo:{id:"components-badge-demo-status"},previewerProps:{title:"\u72B6\u6001\u70B9",filename:"components/badge/demo/status.tsx",jsx:`import React from 'react';
import { Badge, Space } from 'antd';
const App = () => (
  <>
    <Space>
      <Badge status="success" />
      <Badge status="error" />
      <Badge status="default" />
      <Badge status="processing" />
      <Badge status="warning" />
    </Space>
    <br />
    <Space direction="vertical">
      <Badge status="success" text="Success" />
      <Badge status="error" text="Error" />
      <Badge status="default" text="Default" />
      <Badge status="processing" text="Processing" />
      <Badge status="warning" text="Warning" />
    </Space>
  </>
);
export default App;
`,description:"<p>\u7528\u4E8E\u8868\u793A\u72B6\u6001\u7684\u5C0F\u5706\u70B9\u3002</p>"}},{demo:{id:"components-badge-demo-colorful"},previewerProps:{title:"\u591A\u5F69\u5FBD\u6807",filename:"components/badge/demo/colorful.tsx",jsx:`import React from 'react';
import { Badge, Divider, Space } from 'antd';
const colors = [
  'pink',
  'red',
  'yellow',
  'orange',
  'cyan',
  'green',
  'blue',
  'purple',
  'geekblue',
  'magenta',
  'volcano',
  'gold',
  'lime',
];
const App = () => (
  <>
    <Divider orientation="left">Presets</Divider>
    <Space direction="vertical">
      {colors.map((color) => (
        <Badge key={color} color={color} text={color} />
      ))}
    </Space>
    <Divider orientation="left">Custom</Divider>
    <Space direction="vertical">
      <Badge color="#f50" text="#f50" />
      <Badge color="rgb(45, 183, 245)" text="rgb(45, 183, 245)" />
      <Badge color="hsl(102, 53%, 61%)" text="hsl(102, 53%, 61%)" />
      <Badge color="hwb(205 6% 9%)" text="hwb(205 6% 9%)" />
    </Space>
  </>
);
export default App;
`,description:"<p>\u6211\u4EEC\u6DFB\u52A0\u4E86\u591A\u79CD\u9884\u8BBE\u8272\u5F69\u7684\u5FBD\u6807\u6837\u5F0F\uFF0C\u7528\u4F5C\u4E0D\u540C\u573A\u666F\u4F7F\u7528\u3002\u5982\u679C\u9884\u8BBE\u503C\u4E0D\u80FD\u6EE1\u8DB3\u4F60\u7684\u9700\u6C42\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u5177\u4F53\u7684\u8272\u503C\u3002</p>"}},{demo:{id:"components-badge-demo-ribbbon"},previewerProps:{title:"\u7F0E\u5E26",filename:"components/badge/demo/ribbbon.tsx",jsx:`import React from 'react';
import { Badge, Card } from 'antd';
const App = () => (
  <>
    <Badge.Ribbon text="Hippies">
      <Card title="Pushes open the window" size="small">
        and raises the spyglass.
      </Card>
    </Badge.Ribbon>
    <Badge.Ribbon text="Hippies" color="pink">
      <Card title="Pushes open the window" size="small">
        and raises the spyglass.
      </Card>
    </Badge.Ribbon>
    <Badge.Ribbon text="Hippies" color="red">
      <Card title="Pushes open the window" size="small">
        and raises the spyglass.
      </Card>
    </Badge.Ribbon>
    <Badge.Ribbon text="Hippies" color="cyan">
      <Card title="Pushes open the window" size="small">
        and raises the spyglass.
      </Card>
    </Badge.Ribbon>
    <Badge.Ribbon text="Hippies" color="green">
      <Card title="Pushes open the window" size="small">
        and raises the spyglass.
      </Card>
    </Badge.Ribbon>
    <Badge.Ribbon text="Hippies" color="purple">
      <Card title="Pushes open the window" size="small">
        and raises the spyglass.
      </Card>
    </Badge.Ribbon>
    <Badge.Ribbon text="Hippies" color="volcano">
      <Card title="Pushes open the window" size="small">
        and raises the spyglass.
      </Card>
    </Badge.Ribbon>
    <Badge.Ribbon text="Hippies" color="magenta">
      <Card title="Pushes open the window" size="small">
        and raises the spyglass.
      </Card>
    </Badge.Ribbon>
  </>
);
export default App;
`,description:"<p>\u4F7F\u7528\u7F0E\u5E26\u578B\u7684\u5FBD\u6807\u3002</p>",style:`#components-badge-demo-ribbbon .ant-card {
  margin-bottom: 16px;
}`}},{demo:{id:"components-badge-demo-ribbon-debug"},previewerProps:{debug:!0,title:"Ribbon Debug",filename:"components/badge/demo/ribbon-debug.tsx",jsx:`import React from 'react';
import { Badge, Card, Space } from 'antd';
const App = () => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
  >
    <Badge.Ribbon text="\u5566\u5566\u5566\u5566">
      <Card>\u63A8\u5F00\u7A97\u6237\u4E3E\u8D77\u671B\u8FDC\u955C</Card>
    </Badge.Ribbon>
    <Badge.Ribbon text="\u5566\u5566\u5566\u5566" color="purple">
      <Card>\u63A8\u5F00\u7A97\u6237\u4E3E\u8D77\u671B\u8FDC\u955C</Card>
    </Badge.Ribbon>
    <Badge.Ribbon text="\u5566\u5566\u5566\u5566" color="#2db7f5">
      <Card>\u63A8\u5F00\u7A97\u6237\u4E3E\u8D77\u671B\u8FDC\u955C</Card>
    </Badge.Ribbon>
    <Badge.Ribbon text="\u5566\u5566\u5566\u5566" color="#2db7f5" placement="start">
      <Card>\u63A8\u5F00\u7A97\u6237\u4E3E\u8D77\u671B\u8FDC\u955C</Card>
    </Badge.Ribbon>
    <Badge.Ribbon text="\u5566\u5566\u5566\u5566" color="#2db7f5" placement="end">
      <Card>\u63A8\u5F00\u7A97\u6237\u4E3E\u8D77\u671B\u8FDC\u955C</Card>
    </Badge.Ribbon>
  </Space>
);
export default App;
`,description:"<p>Buggy!</p>"}},{demo:{id:"components-badge-demo-mix"},previewerProps:{debug:!0,title:"\u5404\u79CD\u6DF7\u7528\u7684\u60C5\u51B5",filename:"components/badge/demo/mix.tsx",jsx:`import React from 'react';
import { Avatar, Badge } from 'antd';
const App = () => (
  <>
    <Badge count={5} status="success">
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge count={5} status="warning">
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge count={5} color="blue">
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge count={5} color="#fa541c">
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge dot status="success">
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge dot status="warning">
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge dot color="blue">
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge dot color="#fa541c">
      <Avatar shape="square" size="large" />
    </Badge>
  </>
);
export default App;
`,description:"<p>\u6D4B\u8BD5 <code>count</code> <code>stauts</code> <code>color</code> <code>dot</code> \u5171\u7528\u7684\u60C5\u51B5\u3002</p>"}},{demo:{id:"components-badge-demo-title"},previewerProps:{debug:!0,title:"\u81EA\u5B9A\u4E49\u6807\u9898",filename:"components/badge/demo/title.tsx",jsx:`import React from 'react';
import { Avatar, Badge } from 'antd';
const App = () => (
  <>
    <Badge count={5} title="Custom hover text">
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge count={-5} title="Negative">
      <Avatar shape="square" size="large" />
    </Badge>
  </>
);
export default App;
`,description:"<p>\u8BBE\u7F6E\u9F20\u6807\u653E\u5728\u72B6\u6001\u70B9\u4E0A\u65F6\u663E\u793A\u7684\u6587\u5B57\u3002</p>"}},{demo:{id:"components-badge-demo-colorful-with-count-debug"},previewerProps:{debug:!0,title:"\u591A\u5F69\u5FBD\u6807\u652F\u6301 count \u663E\u793A Debug",filename:"components/badge/demo/colorful-with-count-debug.tsx",jsx:`import React from 'react';
import { Badge } from 'antd';
const colors = [
  'pink',
  'red',
  'yellow',
  'orange',
  'cyan',
  'green',
  'blue',
  'purple',
  'geekblue',
  'magenta',
  'volcano',
  'gold',
  'lime',
];
const App = () => (
  <>
    {colors.map((color) => (
      <div
        key={color}
        style={{
          display: 'inline-block',
          verticalAlign: 'middle',
        }}
      >
        <Badge color={color} count={44}>
          <div
            style={{
              width: 90,
              height: 90,
              lineHeight: '90px',
              background: '#ccc',
              textAlign: 'center',
              marginBottom: 10,
            }}
          >
            {color}
          </div>
        </Badge>
      </div>
    ))}
  </>
);
export default App;
`,description:"<p>\u5728\u4F7F\u7528\u591A\u5F69\u5FBD\u6807\u7684\u540C\u65F6\uFF0C\u652F\u6301 count \u5C5E\u6027\u663E\u793A</p>",style:`.ant-tag {
  margin-bottom: 8px;
}`}}]}),(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("h2",{id:"api"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,n.tZ)("span",{className:"icon icon-link"})),"API"),(0,n.tZ)("h3",{id:"badge"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#badge"},(0,n.tZ)("span",{className:"icon icon-link"})),"Badge"),(0,n.tZ)(o.Z,null,(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,e[2].value),(0,n.tZ)("th",null,e[3].value),(0,n.tZ)("th",null,e[4].value),(0,n.tZ)("th",null,e[5].value),(0,n.tZ)("th",null,e[6].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[7].value),(0,n.tZ)("td",null,e[8].value),(0,n.tZ)("td",null,e[9].value),(0,n.tZ)("td",null,e[10].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[11].value),(0,n.tZ)("td",null,e[12].value,(0,n.tZ)("code",null,e[13].value),e[14].value),(0,n.tZ)("td",null,e[15].value),(0,n.tZ)("td",null,e[16].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[17].value),(0,n.tZ)("td",null,e[18].value),(0,n.tZ)("td",null,e[19].value),(0,n.tZ)("td",null,e[20].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[21].value),(0,n.tZ)("td",null,e[22].value),(0,n.tZ)("td",null,e[23].value),(0,n.tZ)("td",null,e[24].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[25].value),(0,n.tZ)("td",null,e[26].value),(0,n.tZ)("td",null,e[27].value),(0,n.tZ)("td",null,e[28].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[29].value),(0,n.tZ)("td",null,e[30].value),(0,n.tZ)("td",null,e[31].value),(0,n.tZ)("td",null,e[32].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[33].value),(0,n.tZ)("td",null,e[34].value,(0,n.tZ)("code",null,e[35].value),e[36].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,e[37].value),e[38].value,(0,n.tZ)("code",null,e[39].value)),(0,n.tZ)("td",null,e[40].value),(0,n.tZ)("td",null,e[41].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[42].value),(0,n.tZ)("td",null,e[43].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,e[44].value),e[45].value,(0,n.tZ)("code",null,e[46].value),e[47].value,(0,n.tZ)("code",null,e[48].value),e[49].value,(0,n.tZ)("code",null,e[50].value),e[51].value,(0,n.tZ)("code",null,e[52].value)),(0,n.tZ)("td",null,e[53].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[54].value),(0,n.tZ)("td",null,e[55].value,(0,n.tZ)("code",null,e[56].value),e[57].value),(0,n.tZ)("td",null,e[58].value),(0,n.tZ)("td",null,e[59].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[60].value),(0,n.tZ)("td",null,e[61].value),(0,n.tZ)("td",null,e[62].value),(0,n.tZ)("td",null,e[63].value),(0,n.tZ)("td",null)))),(0,n.tZ)("h3",{id:"badgeribbon-450"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#badgeribbon-450"},(0,n.tZ)("span",{className:"icon icon-link"})),"Badge.Ribbon (4.5.0+)"),(0,n.tZ)(o.Z,null,(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,e[64].value),(0,n.tZ)("th",null,e[65].value),(0,n.tZ)("th",null,e[66].value),(0,n.tZ)("th",null,e[67].value),(0,n.tZ)("th",null,e[68].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[69].value),(0,n.tZ)("td",null,e[70].value),(0,n.tZ)("td",null,e[71].value),(0,n.tZ)("td",null,e[72].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[73].value),(0,n.tZ)("td",null,e[74].value,(0,n.tZ)("code",null,e[75].value),e[76].value,(0,n.tZ)("code",null,e[77].value),e[78].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,e[79].value),e[80].value,(0,n.tZ)("code",null,e[81].value)),(0,n.tZ)("td",null,(0,n.tZ)("code",null,e[82].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[83].value),(0,n.tZ)("td",null,e[84].value),(0,n.tZ)("td",null,e[85].value),(0,n.tZ)("td",null,e[86].value),(0,n.tZ)("td",null)))))))}a.default=s}}]);
