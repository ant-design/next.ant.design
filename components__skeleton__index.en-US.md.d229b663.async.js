"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[81527],{31257:function(r,a,n){n.r(a);var c=n(2143),p=n(96152),v=n(74775),l=n(5937),Z=n(74399),m=n(56140),o=n(5388),h=n(1160),_=n(95127),k=n(74418),u=n(33098),i=n(67294),t=n(66366);function d(){var s=(0,u.eL)(),e=s.texts;return(0,t.tZ)(u.dY,null,(0,t.tZ)(i.Fragment,null,(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("p",null,e[0].value),(0,t.tZ)("h2",{id:"when-to-use"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use"},(0,t.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,t.tZ)("ul",null,(0,t.tZ)("li",null,e[1].value),(0,t.tZ)("li",null,e[2].value),(0,t.tZ)("li",null,e[3].value),(0,t.tZ)("li",null,e[4].value)),(0,t.tZ)("h2",{id:"examples"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#examples"},(0,t.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,t.tZ)(o.Z,{items:[{demo:{id:"components-skeleton-demo-basic"},previewerProps:{title:"Basic",filename:"components/skeleton/demo/basic.tsx",jsx:`import React from 'react';
import { Skeleton } from 'antd';
const App = () => <Skeleton />;
export default App;
`,description:"<p>Simplest Skeleton usage.</p>"}},{demo:{id:"components-skeleton-demo-complex"},previewerProps:{title:"Complex combination",filename:"components/skeleton/demo/complex.tsx",jsx:`import React from 'react';
import { Skeleton } from 'antd';
const App = () => (
  <Skeleton
    avatar
    paragraph={{
      rows: 4,
    }}
  />
);
export default App;
`,description:"<p>Complex combination with avatar and multiple paragraphs.</p>"}},{demo:{id:"components-skeleton-demo-active"},previewerProps:{title:"Active Animation",filename:"components/skeleton/demo/active.tsx",jsx:`import React from 'react';
import { Skeleton } from 'antd';
const App = () => <Skeleton active />;
export default App;
`,description:"<p>Display active animation.</p>"}},{demo:{id:"components-skeleton-demo-element"},previewerProps:{title:"Button/Avatar/Input/Image/Node",filename:"components/skeleton/demo/element.tsx",jsx:`import React, { useState } from 'react';
import { Divider, Form, Radio, Skeleton, Space, Switch } from 'antd';
import { DotChartOutlined } from '@ant-design/icons';
const App = () => {
  const [active, setActive] = useState(false);
  const [block, setBlock] = useState(false);
  const [size, setSize] = useState('default');
  const [buttonShape, setButtonShape] = useState('default');
  const [avatarShape, setAvatarShape] = useState('circle');
  const handleActiveChange = (checked) => {
    setActive(checked);
  };
  const handleBlockChange = (checked) => {
    setBlock(checked);
  };
  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };
  const handleShapeButton = (e) => {
    setButtonShape(e.target.value);
  };
  const handleAvatarShape = (e) => {
    setAvatarShape(e.target.value);
  };
  return (
    <>
      <Space>
        <Skeleton.Button active={active} size={size} shape={buttonShape} block={block} />
        <Skeleton.Avatar active={active} size={size} shape={avatarShape} />
        <Skeleton.Input active={active} size={size} />
      </Space>
      <br />
      <br />
      <Skeleton.Button active={active} size={size} shape={buttonShape} block={block} />
      <br />
      <br />
      <Skeleton.Input active={active} size={size} block={block} />
      <br />
      <br />
      <Space>
        <Skeleton.Image active={active} />
        <Skeleton.Node active={active}>
          <DotChartOutlined
            style={{
              fontSize: 40,
              color: '#bfbfbf',
            }}
          />
        </Skeleton.Node>
      </Space>
      <Divider />
      <Form
        layout="inline"
        style={{
          margin: '16px 0',
        }}
      >
        <Form.Item label="Active">
          <Switch checked={active} onChange={handleActiveChange} />
        </Form.Item>
        <Form.Item label="Button and Input Block">
          <Switch checked={block} onChange={handleBlockChange} />
        </Form.Item>
        <Form.Item label="Size">
          <Radio.Group value={size} onChange={handleSizeChange}>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
            <Radio.Button value="small">Small</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Button Shape">
          <Radio.Group value={buttonShape} onChange={handleShapeButton}>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="square">Square</Radio.Button>
            <Radio.Button value="round">Round</Radio.Button>
            <Radio.Button value="circle">Circle</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Avatar Shape">
          <Radio.Group value={avatarShape} onChange={handleAvatarShape}>
            <Radio.Button value="square">Square</Radio.Button>
            <Radio.Button value="circle">Circle</Radio.Button>
          </Radio.Group>
        </Form.Item>
      </Form>
    </>
  );
};
export default App;
`,description:"<p>Skeleton Button, Avatar, Input, Image and Node.</p>"}},{demo:{id:"components-skeleton-demo-children"},previewerProps:{title:"Contains sub component",filename:"components/skeleton/demo/children.tsx",jsx:`import React, { useState } from 'react';
import { Button, Skeleton } from 'antd';
const App = () => {
  const [loading, setLoading] = useState(false);
  const showSkeleton = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };
  return (
    <div className="article">
      <Skeleton loading={loading}>
        <div>
          <h4>Ant Design, a design language</h4>
          <p>
            We supply a series of design principles, practical patterns and high quality design
            resources (Sketch and Axure), to help people create their product prototypes beautifully
            and efficiently.
          </p>
        </div>
      </Skeleton>
      <Button onClick={showSkeleton} disabled={loading}>
        Show Skeleton
      </Button>
    </div>
  );
};
export default App;
`,description:"<p>Skeleton contains sub component.</p>"}},{demo:{id:"components-skeleton-demo-list"},previewerProps:{title:"List",filename:"components/skeleton/demo/list.tsx",jsx:`import React, { useState } from 'react';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, List, Skeleton, Switch } from 'antd';
const listData = Array.from({
  length: 3,
}).map((_, i) => ({
  href: 'https://ant.design',
  title: \`ant design part \${i}\`,
  avatar: 'https://joeschmoe.io/api/v1/random',
  description:
    'Ant Design, a design language for background applications, is refined by Ant UED Team.',
  content:
    'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
}));
const IconText = ({ icon, text }) => (
  <span>
    {React.createElement(icon, {
      style: {
        marginRight: 8,
      },
    })}
    {text}
  </span>
);
const App = () => {
  const [loading, setLoading] = useState(true);
  const onChange = (checked) => {
    setLoading(!checked);
  };
  return (
    <>
      <Switch checked={!loading} onChange={onChange} />

      <List
        itemLayout="vertical"
        size="large"
        dataSource={listData}
        renderItem={(item) => (
          <List.Item
            key={item.title}
            actions={
              !loading
                ? [
                    <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                    <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                    <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                  ]
                : undefined
            }
            extra={
              !loading && (
                <img
                  width={272}
                  alt="logo"
                  src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                />
              )
            }
          >
            <Skeleton loading={loading} active avatar>
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={<a href={item.href}>{item.title}</a>}
                description={item.description}
              />
              {item.content}
            </Skeleton>
          </List.Item>
        )}
      />
    </>
  );
};
export default App;
`,description:"<p>Use skeleton in list component.</p>"}}]}),(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("h2",{id:"api"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,t.tZ)("span",{className:"icon icon-link"})),"API"),(0,t.tZ)("h3",{id:"skeleton"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#skeleton"},(0,t.tZ)("span",{className:"icon icon-link"})),"Skeleton"),(0,t.tZ)(l.Z,null,(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,e[5].value),(0,t.tZ)("th",null,e[6].value),(0,t.tZ)("th",null,e[7].value),(0,t.tZ)("th",null,e[8].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[9].value),(0,t.tZ)("td",null,e[10].value),(0,t.tZ)("td",null,e[11].value),(0,t.tZ)("td",null,e[12].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[13].value),(0,t.tZ)("td",null,e[14].value),(0,t.tZ)("td",null,e[15].value,(0,t.tZ)("a",{href:"#SkeletonAvatarProps"},e[16].value)),(0,t.tZ)("td",null,e[17].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[18].value),(0,t.tZ)("td",null,e[19].value),(0,t.tZ)("td",null,e[20].value),(0,t.tZ)("td",null,e[21].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[22].value),(0,t.tZ)("td",null,e[23].value),(0,t.tZ)("td",null,e[24].value,(0,t.tZ)("a",{href:"#SkeletonParagraphProps"},e[25].value)),(0,t.tZ)("td",null,e[26].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[27].value),(0,t.tZ)("td",null,e[28].value),(0,t.tZ)("td",null,e[29].value),(0,t.tZ)("td",null,e[30].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[31].value),(0,t.tZ)("td",null,e[32].value),(0,t.tZ)("td",null,e[33].value,(0,t.tZ)("a",{href:"#SkeletonTitleProps"},e[34].value)),(0,t.tZ)("td",null,e[35].value)))),(0,t.tZ)("h3",{id:"skeletonavatarprops"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#skeletonavatarprops"},(0,t.tZ)("span",{className:"icon icon-link"})),"SkeletonAvatarProps"),(0,t.tZ)(l.Z,null,(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,e[36].value),(0,t.tZ)("th",null,e[37].value),(0,t.tZ)("th",null,e[38].value),(0,t.tZ)("th",null,e[39].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[40].value),(0,t.tZ)("td",null,e[41].value),(0,t.tZ)("td",null,e[42].value),(0,t.tZ)("td",null,e[43].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[44].value),(0,t.tZ)("td",null,e[45].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[46].value),e[47].value,(0,t.tZ)("code",null,e[48].value)),(0,t.tZ)("td",null,e[49].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[50].value),(0,t.tZ)("td",null,e[51].value),(0,t.tZ)("td",null,e[52].value,(0,t.tZ)("code",null,e[53].value),e[54].value,(0,t.tZ)("code",null,e[55].value),e[56].value,(0,t.tZ)("code",null,e[57].value)),(0,t.tZ)("td",null,e[58].value)))),(0,t.tZ)("h3",{id:"skeletontitleprops"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#skeletontitleprops"},(0,t.tZ)("span",{className:"icon icon-link"})),"SkeletonTitleProps"),(0,t.tZ)(l.Z,null,(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,e[59].value),(0,t.tZ)("th",null,e[60].value),(0,t.tZ)("th",null,e[61].value),(0,t.tZ)("th",null,e[62].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[63].value),(0,t.tZ)("td",null,e[64].value),(0,t.tZ)("td",null,e[65].value),(0,t.tZ)("td",null,e[66].value)))),(0,t.tZ)("h3",{id:"skeletonparagraphprops"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#skeletonparagraphprops"},(0,t.tZ)("span",{className:"icon icon-link"})),"SkeletonParagraphProps"),(0,t.tZ)(l.Z,null,(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,e[67].value),(0,t.tZ)("th",null,e[68].value),(0,t.tZ)("th",null,e[69].value),(0,t.tZ)("th",null,e[70].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[71].value),(0,t.tZ)("td",null,e[72].value),(0,t.tZ)("td",null,e[73].value),(0,t.tZ)("td",null,e[74].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[75].value),(0,t.tZ)("td",null,e[76].value),(0,t.tZ)("td",null,e[77].value),(0,t.tZ)("td",null,e[78].value)))),(0,t.tZ)("h3",{id:"skeletonbuttonprops"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#skeletonbuttonprops"},(0,t.tZ)("span",{className:"icon icon-link"})),"SkeletonButtonProps"),(0,t.tZ)(l.Z,null,(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,e[79].value),(0,t.tZ)("th",null,e[80].value),(0,t.tZ)("th",null,e[81].value),(0,t.tZ)("th",null,e[82].value),(0,t.tZ)("th",null,e[83].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[84].value),(0,t.tZ)("td",null,e[85].value),(0,t.tZ)("td",null,e[86].value),(0,t.tZ)("td",null,e[87].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[88].value),(0,t.tZ)("td",null,e[89].value),(0,t.tZ)("td",null,e[90].value),(0,t.tZ)("td",null,e[91].value),(0,t.tZ)("td",null,e[92].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[93].value),(0,t.tZ)("td",null,e[94].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[95].value),e[96].value,(0,t.tZ)("code",null,e[97].value),e[98].value,(0,t.tZ)("code",null,e[99].value),e[100].value,(0,t.tZ)("code",null,e[101].value)),(0,t.tZ)("td",null,e[102].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[103].value),(0,t.tZ)("td",null,e[104].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[105].value),e[106].value,(0,t.tZ)("code",null,e[107].value),e[108].value,(0,t.tZ)("code",null,e[109].value)),(0,t.tZ)("td",null,e[110].value),(0,t.tZ)("td",null)))),(0,t.tZ)("h3",{id:"skeletoninputprops"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#skeletoninputprops"},(0,t.tZ)("span",{className:"icon icon-link"})),"SkeletonInputProps"),(0,t.tZ)(l.Z,null,(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,e[111].value),(0,t.tZ)("th",null,e[112].value),(0,t.tZ)("th",null,e[113].value),(0,t.tZ)("th",null,e[114].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[115].value),(0,t.tZ)("td",null,e[116].value),(0,t.tZ)("td",null,e[117].value),(0,t.tZ)("td",null,e[118].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[119].value),(0,t.tZ)("td",null,e[120].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[121].value),e[122].value,(0,t.tZ)("code",null,e[123].value),e[124].value,(0,t.tZ)("code",null,e[125].value)),(0,t.tZ)("td",null,e[126].value)))))))}a.default=d}}]);
