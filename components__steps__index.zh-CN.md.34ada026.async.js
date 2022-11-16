"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[6573],{64982:function(c,l,e){e.r(l);var m=e(2143),v=e(50250),_=e(59378),Z=e(28460),u=e(74775),s=e(5937),o=e(2068),h=e(74399),g=e(46004),S=e(35708),f=e(30138),x=e(56140),r=e(5388),P=e(1160),E=e(13140),C=e(95127),A=e(74418),i=e(54331),a=e(67294),n=e(13946);function d(){var p=(0,i.eL)(),t=p.texts;return(0,n.tZ)(i.dY,null,(0,n.tZ)(a.Fragment,null,(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("p",null,t[0].value),(0,n.tZ)("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u4F55\u65F6\u4F7F\u7528"),(0,n.tZ)("p",null,t[1].value),(0,n.tZ)("h3",{id:"4240-\u7528\u6CD5\u5347\u7EA7"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#4240-\u7528\u6CD5\u5347\u7EA7"},(0,n.tZ)("span",{className:"icon icon-link"})),"4.24.0 \u7528\u6CD5\u5347\u7EA7")),(0,n.tZ)(o.Z,{message:"\u5728 4.24.0 \u7248\u672C\u540E\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86 <Steps items={[...]} /> \u7684\u7B80\u5199\u65B9\u5F0F\uFF0C\u6709\u66F4\u597D\u7684\u6027\u80FD\u548C\u66F4\u65B9\u4FBF\u7684\u6570\u636E\u7EC4\u7EC7\u65B9\u5F0F\uFF0C\u5F00\u53D1\u8005\u4E0D\u518D\u9700\u8981\u81EA\u884C\u62FC\u63A5 JSX\u3002\u540C\u65F6\u6211\u4EEC\u5E9F\u5F03\u4E86\u539F\u5148\u7684\u5199\u6CD5\uFF0C\u4F60\u8FD8\u662F\u53EF\u4EE5\u5728 4.x \u7EE7\u7EED\u4F7F\u7528\uFF0C\u4F46\u4F1A\u5728\u63A7\u5236\u53F0\u770B\u5230\u8B66\u544A\uFF0C\u5E76\u4F1A\u5728 5.0 \u540E\u79FB\u9664\u3002"}),(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)(u.Z,{lang:"jsx"},t[2].value),(0,n.tZ)("h2",{id:"\u4EE3\u7801\u6F14\u793A"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),(0,n.tZ)(r.Z,{items:[{demo:{id:"components-steps-demo-deprecated"},previewerProps:{title:"\u57FA\u672C\u7528\u6CD5 (\u5E9F\u5F03\u7684\u8BED\u6CD5\u7CD6)",filename:"components/steps/demo/deprecated.tsx",jsx:`import React from 'react';
import { Steps } from 'antd';
const { Step } = Steps;
const description = 'This is a description.';
const App = () => (
  <Steps current={1}>
    <Step title="Finished" description={description} />
    <Step title="In Progress" description={description} subTitle="Left 00:00:08" />
    <Step title="Waiting" description={description} />
  </Steps>
);
export default App;
`,description:"<p>\u7B80\u5355\u7684\u6B65\u9AA4\u6761\u3002</p>"}},{demo:{id:"components-steps-demo-simple"},previewerProps:{title:"\u57FA\u672C\u7528\u6CD5",filename:"components/steps/demo/simple.tsx",jsx:`import React from 'react';
import { Steps } from 'antd';
const description = 'This is a description.';
const App = () => (
  <Steps
    current={1}
    items={[
      {
        title: 'Finished',
        description,
      },
      {
        title: 'In Progress',
        description,
        subTitle: 'Left 00:00:08',
      },
      {
        title: 'Waiting',
        description,
      },
    ]}
  />
);
export default App;
`,description:"<p>\u7B80\u5355\u7684\u6B65\u9AA4\u6761\u3002</p>"}},{demo:{id:"components-steps-demo-small-size"},previewerProps:{title:"\u8FF7\u4F60\u7248",filename:"components/steps/demo/small-size.tsx",jsx:`import React from 'react';
import { Steps } from 'antd';
const App = () => (
  <Steps
    size="small"
    current={1}
    items={[
      {
        title: 'Finished',
      },
      {
        title: 'In Progress',
      },
      {
        title: 'Waiting',
      },
    ]}
  />
);
export default App;
`,description:'<p>\u8FF7\u4F60\u7248\u7684\u6B65\u9AA4\u6761\uFF0C\u901A\u8FC7\u8BBE\u7F6E <code>&#x3C;Steps size="small"></code> \u542F\u7528.</p>'}},{demo:{id:"components-steps-demo-icon"},previewerProps:{title:"\u5E26\u56FE\u6807\u7684\u6B65\u9AA4\u6761",filename:"components/steps/demo/icon.tsx",jsx:`import React from 'react';
import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { Steps } from 'antd';
const App = () => (
  <Steps
    items={[
      {
        title: 'Login',
        status: 'finish',
        icon: <UserOutlined />,
      },
      {
        title: 'Verification',
        status: 'finish',
        icon: <SolutionOutlined />,
      },
      {
        title: 'Pay',
        status: 'process',
        icon: <LoadingOutlined />,
      },
      {
        title: 'Done',
        status: 'wait',
        icon: <SmileOutlined />,
      },
    ]}
  />
);
export default App;
`,description:"<p>\u901A\u8FC7\u8BBE\u7F6E <code>items</code> \u7684 <code>icon</code> \u5C5E\u6027\uFF0C\u53EF\u4EE5\u542F\u7528\u81EA\u5B9A\u4E49\u56FE\u6807\u3002</p>"}},{demo:{id:"components-steps-demo-step-next"},previewerProps:{title:"\u6B65\u9AA4\u5207\u6362",filename:"components/steps/demo/step-next.tsx",jsx:`import React, { useState } from 'react';
import { Button, message, Steps } from 'antd';
const steps = [
  {
    title: 'First',
    content: 'First-content',
  },
  {
    title: 'Second',
    content: 'Second-content',
  },
  {
    title: 'Last',
    content: 'Last-content',
  },
];
const App = () => {
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  return (
    <>
      <Steps current={current} items={items} />
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: '0 8px',
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div>
    </>
  );
};
export default App;
`,description:"<p>\u901A\u5E38\u914D\u5408\u5185\u5BB9\u53CA\u6309\u94AE\u4F7F\u7528\uFF0C\u8868\u793A\u4E00\u4E2A\u6D41\u7A0B\u7684\u5904\u7406\u8FDB\u5EA6\u3002</p>",style:`.steps-content {
  min-height: 200px;
  margin-top: 16px;
  padding-top: 80px;
  text-align: center;
  background-color: #fafafa;
  border: 1px dashed #e9e9e9;
  border-radius: 2px;
}

.steps-action {
  margin-top: 24px;
}`}},{demo:{id:"components-steps-demo-vertical"},previewerProps:{title:"\u7AD6\u76F4\u65B9\u5411\u7684\u6B65\u9AA4\u6761",filename:"components/steps/demo/vertical.tsx",jsx:`import React from 'react';
import { Steps } from 'antd';
const description = 'This is a description.';
const App = () => (
  <Steps
    direction="vertical"
    current={1}
    items={[
      {
        title: 'Finished',
        description,
      },
      {
        title: 'In Progress',
        description,
      },
      {
        title: 'Waiting',
        description,
      },
    ]}
  />
);
export default App;
`,description:"<p>\u7B80\u5355\u7684\u7AD6\u76F4\u65B9\u5411\u7684\u6B65\u9AA4\u6761\u3002</p>"}},{demo:{id:"components-steps-demo-vertical-small"},previewerProps:{title:"\u7AD6\u76F4\u65B9\u5411\u7684\u5C0F\u578B\u6B65\u9AA4\u6761",filename:"components/steps/demo/vertical-small.tsx",jsx:`import React from 'react';
import { Steps } from 'antd';
const description = 'This is a description.';
const App = () => (
  <Steps
    direction="vertical"
    size="small"
    current={1}
    items={[
      {
        title: 'Finished',
        description,
      },
      {
        title: 'In Progress',
        description,
      },
      {
        title: 'Waiting',
        description,
      },
    ]}
  />
);
export default App;
`,description:"<p>\u7B80\u5355\u7684\u7AD6\u76F4\u65B9\u5411\u7684\u5C0F\u578B\u6B65\u9AA4\u6761\u3002</p>"}},{demo:{id:"components-steps-demo-error"},previewerProps:{title:"\u6B65\u9AA4\u8FD0\u884C\u9519\u8BEF",filename:"components/steps/demo/error.tsx",jsx:`import React from 'react';
import { Steps } from 'antd';
const description = 'This is a description';
const App = () => (
  <Steps
    current={1}
    status="error"
    items={[
      {
        title: 'Finished',
        description,
      },
      {
        title: 'In Process',
        description,
      },
      {
        title: 'Waiting',
        description,
      },
    ]}
  />
);
export default App;
`,description:"<p>\u4F7F\u7528 Steps \u7684 <code>status</code> \u5C5E\u6027\u6765\u6307\u5B9A\u5F53\u524D\u6B65\u9AA4\u7684\u72B6\u6001\u3002</p>"}},{demo:{id:"components-steps-demo-progress-dot"},previewerProps:{title:"\u70B9\u72B6\u6B65\u9AA4\u6761",filename:"components/steps/demo/progress-dot.tsx",jsx:`import React from 'react';
import { Divider, Steps } from 'antd';
const App = () => (
  <>
    <Steps
      progressDot
      current={1}
      items={[
        {
          title: 'Finished',
          description: 'This is a description.',
        },
        {
          title: 'In Progress',
          description: 'This is a description.',
        },
        {
          title: 'Waiting',
          description: 'This is a description.',
        },
      ]}
    />
    <Divider />
    <Steps
      progressDot
      current={1}
      direction="vertical"
      items={[
        {
          title: 'Finished',
          description: 'This is a description. This is a description.',
        },
        {
          title: 'Finished',
          description: 'This is a description. This is a description.',
        },
        {
          title: 'In Progress',
          description: 'This is a description. This is a description.',
        },
        {
          title: 'Waiting',
          description: 'This is a description.',
        },
        {
          title: 'Waiting',
          description: 'This is a description.',
        },
      ]}
    />
  </>
);
export default App;
`,description:"<p>\u5305\u542B\u6B65\u9AA4\u70B9\u7684\u8FDB\u5EA6\u6761\u3002</p>"}},{demo:{id:"components-steps-demo-customized-progress-dot"},previewerProps:{title:"\u81EA\u5B9A\u4E49\u70B9\u72B6\u6B65\u9AA4\u6761",filename:"components/steps/demo/customized-progress-dot.tsx",jsx:`import React from 'react';
import { Popover, Steps } from 'antd';
const customDot = (dot, { status, index }) => (
  <Popover
    content={
      <span>
        step {index} status: {status}
      </span>
    }
  >
    {dot}
  </Popover>
);
const description = 'You can hover on the dot.';
const App = () => (
  <Steps
    current={1}
    progressDot={customDot}
    items={[
      {
        title: 'Finished',
        description,
      },
      {
        title: 'In Progress',
        description,
      },
      {
        title: 'Waiting',
        description,
      },
      {
        title: 'Waiting',
        description,
      },
    ]}
  />
);
export default App;
`,description:"<p>\u4E3A\u70B9\u72B6\u6B65\u9AA4\u6761\u589E\u52A0\u81EA\u5B9A\u4E49\u5C55\u793A\u3002</p>"}},{demo:{id:"components-steps-demo-progress-dot-small"},previewerProps:{debug:!0,title:"\u8FF7\u4F60\u7248\u70B9\u72B6\u6B65\u9AA4\u6761",filename:"components/steps/demo/progress-dot-small.tsx",jsx:`import React from 'react';
import { Divider, Steps } from 'antd';
const App = () => (
  <>
    <Steps
      progressDot
      current={1}
      size="small"
      items={[
        {
          title: 'Finished',
          description: 'This is a description.',
        },
        {
          title: 'In Progress',
          description: 'This is a description.',
        },
        {
          title: 'Waiting',
          description: 'This is a description.',
        },
      ]}
    />
    <Divider />
    <Steps
      progressDot
      current={1}
      direction="vertical"
      size="small"
      items={[
        {
          title: 'Finished',
          description: 'This is a description. This is a description.',
        },
        {
          title: 'Finished',
          description: 'This is a description. This is a description.',
        },
        {
          title: 'In Progress',
          description: 'This is a description. This is a description.',
        },
        {
          title: 'Waiting',
          description: 'This is a description.',
        },
        {
          title: 'Waiting',
          description: 'This is a description.',
        },
      ]}
    />
  </>
);
export default App;
`,description:"<p>\u5305\u542B\u6B65\u9AA4\u70B9\u7684\u8FDB\u5EA6\u6761\u3002</p>"}},{demo:{id:"components-steps-demo-clickable"},previewerProps:{title:"\u53EF\u70B9\u51FB",filename:"components/steps/demo/clickable.tsx",jsx:`import React, { useState } from 'react';
import { Divider, Steps } from 'antd';
const App = () => {
  const [current, setCurrent] = useState(0);
  const onChange = (value) => {
    console.log('onChange:', current);
    setCurrent(value);
  };
  const description = 'This is a description.';
  return (
    <>
      <Steps
        current={current}
        onChange={onChange}
        items={[
          {
            title: 'Step 1',
            description,
          },
          {
            title: 'Step 2',
            description,
          },
          {
            title: 'Step 3',
            description,
          },
        ]}
      />

      <Divider />

      <Steps
        current={current}
        onChange={onChange}
        direction="vertical"
        items={[
          {
            title: 'Step 1',
            description,
          },
          {
            title: 'Step 2',
            description,
          },
          {
            title: 'Step 3',
            description,
          },
        ]}
      />
    </>
  );
};
export default App;
`,description:"<p>\u8BBE\u7F6E <code>onChange</code> \u540E\uFF0CSteps \u53D8\u4E3A\u53EF\u70B9\u51FB\u72B6\u6001\u3002</p>"}},{demo:{id:"components-steps-demo-nav"},previewerProps:{title:"\u5BFC\u822A\u6B65\u9AA4",filename:"components/steps/demo/nav.tsx",jsx:`import React, { useState } from 'react';
import { Steps } from 'antd';
const App = () => {
  const [current, setCurrent] = useState(0);
  const onChange = (value) => {
    console.log('onChange:', value);
    setCurrent(value);
  };
  return (
    <>
      <Steps
        type="navigation"
        size="small"
        current={current}
        onChange={onChange}
        className="site-navigation-steps"
        items={[
          {
            title: 'Step 1',
            subTitle: '00:00:05',
            status: 'finish',
            description: 'This is a description.',
          },
          {
            title: 'Step 2',
            subTitle: '00:01:02',
            status: 'process',
            description: 'This is a description.',
          },
          {
            title: 'Step 3',
            subTitle: 'waiting for longlong time',
            status: 'wait',
            description: 'This is a description.',
          },
        ]}
      />
      <Steps
        type="navigation"
        current={current}
        onChange={onChange}
        className="site-navigation-steps"
        items={[
          {
            status: 'finish',
            title: 'Step 1',
          },
          {
            status: 'process',
            title: 'Step 2',
          },
          {
            status: 'wait',
            title: 'Step 3',
          },
          {
            status: 'wait',
            title: 'Step 4',
          },
        ]}
      />
      <Steps
        type="navigation"
        size="small"
        current={current}
        onChange={onChange}
        className="site-navigation-steps"
        items={[
          {
            status: 'finish',
            title: 'finish 1',
          },
          {
            status: 'finish',
            title: 'finish 2',
          },
          {
            status: 'process',
            title: 'current process',
          },
          {
            status: 'wait',
            title: 'wait',
            disabled: true,
          },
        ]}
      />
    </>
  );
};
export default App;
`,description:"<p>\u5BFC\u822A\u7C7B\u578B\u7684\u6B65\u9AA4\u6761\u3002</p>",style:`[data-theme='compact'] .site-navigation-steps.ant-steps.ant-steps-navigation,
.site-navigation-steps.ant-steps.ant-steps-navigation {
  margin-bottom: 60px;
  box-shadow: 0px -1px 0 0 #e8e8e8 inset;
}`}},{demo:{id:"components-steps-demo-progress"},previewerProps:{title:"\u5E26\u6709\u8FDB\u5EA6\u7684\u6B65\u9AA4",filename:"components/steps/demo/progress.tsx",jsx:`import React from 'react';
import { Steps } from 'antd';
const description = 'This is a description.';
const App = () => (
  <Steps
    current={1}
    percent={60}
    items={[
      {
        title: 'Finished',
        description,
      },
      {
        title: 'In Progress',
        subTitle: 'Left 00:00:08',
        description,
      },
      {
        title: 'Waiting',
        description,
      },
    ]}
  />
);
export default App;
`,description:"<p>\u5E26\u6709\u8FDB\u5EA6\u7684\u6B65\u9AA4\u3002</p>"}},{demo:{id:"components-steps-demo-label-placement"},previewerProps:{title:"\u6807\u7B7E\u653E\u7F6E\u4F4D\u7F6E",filename:"components/steps/demo/label-placement.tsx",jsx:`import React from 'react';
import { Steps } from 'antd';
const description = 'This is a description.';
const items = [
  {
    title: 'Finished',
    description,
  },
  {
    title: 'In Progress',
    description,
  },
  {
    title: 'Waiting',
    description,
  },
];
const App = () => (
  <>
    <Steps current={1} labelPlacement="vertical" items={items} />
    <br />
    <Steps current={1} percent={60} labelPlacement="vertical" items={items} />
    <br />
    <Steps current={1} size="small" labelPlacement="vertical" items={items} />
  </>
);
export default App;
`,description:"<p>\u4FEE\u6539\u6807\u7B7E\u653E\u7F6E\u4F4D\u7F6E\u4E3A <code>vertical</code>\u3002</p>"}},{demo:{id:"components-steps-demo-progress-debug"},previewerProps:{debug:!0,title:"Progress Debug",filename:"components/steps/demo/progress-debug.tsx",jsx:`import React, { useState } from 'react';
import { Button, Steps } from 'antd';
const App = () => {
  const [percent, setPercentage] = useState(0);
  const [current, setCurrent] = useState(1);
  const [status, setStatus] = useState('process');
  const description = 'This is a description.';
  const items = [
    {
      title: 'Finished',
      description,
    },
    {
      title: 'In Progress',
      subTitle: 'Left 00:00:08',
      description,
    },
    {
      title: 'Waiting',
      description,
    },
  ];
  return (
    <>
      <Button onClick={() => setPercentage(0)}>Percentage to undefined</Button>
      <Button onClick={() => setPercentage((percent + 10) % 100)}>Percentage +</Button>
      <Button
        onClick={() => {
          setCurrent((current + 1) % 3);
          setPercentage(0);
        }}
      >
        Current +
      </Button>
      <Button onClick={() => setStatus('wait')}>Status Wait</Button>
      <Button onClick={() => setStatus('process')}>Status Process</Button>
      <Button onClick={() => setStatus('finish')}>Status Finish</Button>
      <Button onClick={() => setStatus('error')}>Status Error</Button>
      <Steps current={current} percent={percent} status={status} items={items} />
      <Steps current={current} percent={percent} status={status} size="small" items={items} />
      <Steps
        current={current}
        percent={percent}
        status={status}
        direction="vertical"
        items={items}
      />
      <Steps
        current={current}
        percent={percent}
        status={status}
        size="small"
        direction="vertical"
        items={items}
      />
    </>
  );
};
export default App;
`,description:"<p>Buggy!</p>"}},{demo:{id:"components-steps-demo-steps-in-steps"},previewerProps:{debug:!0,title:"Steps \u5D4C\u5957 Steps",filename:"components/steps/demo/steps-in-steps.tsx",jsx:`import React, { useState } from 'react';
import { Card, Radio, Steps } from 'antd';
const App = () => {
  const [size, setSize] = useState('default');
  const description = 'This is a description.';
  const horizontalSteps = (
    <Card>
      <Steps
        size={size}
        items={[
          {
            title: 'Finished',
            description,
          },
          {
            title: 'In Progress',
            description,
          },
          {
            title: 'Waiting',
            description,
          },
        ]}
      />
    </Card>
  );
  return (
    <>
      <Radio.Group
        style={{
          marginBottom: 16,
        }}
        value={size}
        onChange={(e) => setSize(e.target.value)}
      >
        <Radio value="small">Small</Radio>
        <Radio value="default">Default</Radio>
      </Radio.Group>
      <Steps
        size={size}
        direction="vertical"
        items={[
          {
            title: 'Finished',
            description: horizontalSteps,
          },
          {
            title: 'In Progress',
            description,
          },
          {
            title: 'Waiting',
            description,
          },
        ]}
      />
    </>
  );
};
export default App;
`,description:"<p>\u6D4B\u8BD5 Steps \u5D4C\u5957 Steps \u7684\u6837\u5F0F\u3002</p>"}},{demo:{id:"components-steps-demo-inline"},previewerProps:{title:"\u5185\u8054\u6B65\u9AA4",filename:"components/steps/demo/inline.tsx",jsx:`import React from 'react';
import { Steps, List, Avatar } from 'antd';
const data = [
  {
    title: 'Ant Design Title 1',
    current: 0,
  },
  {
    title: 'Ant Design Title 2',
    current: 1,
    status: 'error',
  },
  {
    title: 'Ant Design Title 3',
    current: 2,
  },
  {
    title: 'Ant Design Title 4',
    current: 1,
  },
];
const items = [
  {
    title: 'Step 1',
    description: 'This is a Step 1.',
  },
  {
    title: 'Step 2',
    description: 'This is a Step 2.',
  },
  {
    title: 'Step 3',
    description: 'This is a Step 3.',
  },
];
const App = () => (
  <div>
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title={<a href="https://ant.design">{item.title}</a>}
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          />
          <Steps
            style={{
              marginTop: 8,
            }}
            type="inline"
            current={item.current}
            status={item.status}
            items={items}
          />
        </List.Item>
      )}
    />
  </div>
);
export default App;
`,description:"<p>\u5185\u8054\u7C7B\u578B\u7684\u6B65\u9AA4\u6761\uFF0C\u9002\u7528\u4E8E\u5217\u8868\u5185\u5BB9\u573A\u666F\u4E2D\u5C55\u793A\u5BF9\u8C61\u6240\u5728\u6D41\u7A0B\u3001\u5F53\u524D\u72B6\u6001\u7684\u60C5\u51B5\u3002</p>"}}]}),(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("h2",{id:"api"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,n.tZ)("span",{className:"icon icon-link"})),"API"),(0,n.tZ)("h3",{id:"steps"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#steps"},(0,n.tZ)("span",{className:"icon icon-link"})),"Steps"),(0,n.tZ)("p",null,t[3].value),(0,n.tZ)(s.Z,null,(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,t[4].value),(0,n.tZ)("th",null,t[5].value),(0,n.tZ)("th",null,t[6].value),(0,n.tZ)("th",null,t[7].value),(0,n.tZ)("th",null,t[8].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[9].value),(0,n.tZ)("td",null,t[10].value),(0,n.tZ)("td",null,t[11].value),(0,n.tZ)("td",null,t[12].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[13].value),(0,n.tZ)("td",null,t[14].value,(0,n.tZ)("code",null,t[15].value),t[16].value),(0,n.tZ)("td",null,t[17].value),(0,n.tZ)("td",null,t[18].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[19].value),(0,n.tZ)("td",null,t[20].value,(0,n.tZ)("code",null,t[21].value),t[22].value,(0,n.tZ)("code",null,t[23].value),t[24].value),(0,n.tZ)("td",null,t[25].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[26].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[27].value),(0,n.tZ)("td",null,t[28].value),(0,n.tZ)("td",null,t[29].value),(0,n.tZ)("td",null,t[30].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[31].value),(0,n.tZ)("td",null,t[32].value,(0,n.tZ)("code",null,t[33].value),t[34].value),(0,n.tZ)("td",null,t[35].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[36].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[37].value),(0,n.tZ)("td",null,t[38].value,(0,n.tZ)("code",null,t[39].value),t[40].value),(0,n.tZ)("td",null,t[41].value),(0,n.tZ)("td",null,t[42].value),(0,n.tZ)("td",null,t[43].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[44].value),(0,n.tZ)("td",null,t[45].value,(0,n.tZ)("code",null,t[46].value)),(0,n.tZ)("td",null,t[47].value),(0,n.tZ)("td",null,t[48].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[49].value),(0,n.tZ)("td",null,t[50].value,(0,n.tZ)("code",null,t[51].value),t[52].value),(0,n.tZ)("td",null,t[53].value),(0,n.tZ)("td",null,t[54].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[55].value),(0,n.tZ)("td",null,t[56].value,(0,n.tZ)("code",null,t[57].value),t[58].value,(0,n.tZ)("code",null,t[59].value),t[60].value),(0,n.tZ)("td",null,t[61].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[62].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[63].value),(0,n.tZ)("td",null,t[64].value,(0,n.tZ)("code",null,t[65].value),t[66].value,(0,n.tZ)("code",null,t[67].value),t[68].value,(0,n.tZ)("code",null,t[69].value),t[70].value,(0,n.tZ)("code",null,t[71].value)),(0,n.tZ)("td",null,t[72].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[73].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[74].value),(0,n.tZ)("td",null,t[75].value,(0,n.tZ)("code",null,t[76].value),t[77].value,(0,n.tZ)("code",null,t[78].value),t[79].value,(0,n.tZ)("code",null,t[80].value)),(0,n.tZ)("td",null,t[81].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[82].value)),(0,n.tZ)("td",null,t[83].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[84].value),(0,n.tZ)("td",null,t[85].value),(0,n.tZ)("td",null,t[86].value),(0,n.tZ)("td",null,t[87].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[88].value),(0,n.tZ)("td",null,t[89].value),(0,n.tZ)("td",null,(0,n.tZ)(i.rU,{to:"#StepItem"},t[90].value)),(0,n.tZ)("td",null,t[91].value),(0,n.tZ)("td",null,t[92].value)))),(0,n.tZ)("h3",{id:"typeinline"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#typeinline"},(0,n.tZ)("span",{className:"icon icon-link"})),(0,n.tZ)("code",null,t[93].value)),(0,n.tZ)(s.Z,null,(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,t[94].value),(0,n.tZ)("th",null,t[95].value),(0,n.tZ)("th",null,t[96].value),(0,n.tZ)("th",null,t[97].value),(0,n.tZ)("th",null,t[98].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[99].value),(0,n.tZ)("td",null,t[100].value),(0,n.tZ)("td",null,t[101].value),(0,n.tZ)("td",null,t[102].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[103].value),(0,n.tZ)("td",null,t[104].value,(0,n.tZ)("code",null,t[105].value),t[106].value),(0,n.tZ)("td",null,t[107].value),(0,n.tZ)("td",null,t[108].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[109].value),(0,n.tZ)("td",null,t[110].value),(0,n.tZ)("td",null,t[111].value),(0,n.tZ)("td",null,t[112].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[113].value),(0,n.tZ)("td",null,t[114].value,(0,n.tZ)("code",null,t[115].value),t[116].value,(0,n.tZ)("code",null,t[117].value),t[118].value,(0,n.tZ)("code",null,t[119].value),t[120].value,(0,n.tZ)("code",null,t[121].value)),(0,n.tZ)("td",null,t[122].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[123].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[124].value),(0,n.tZ)("td",null,t[125].value),(0,n.tZ)("td",null,t[126].value),(0,n.tZ)("td",null,t[127].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[128].value),(0,n.tZ)("td",null,t[129].value,(0,n.tZ)("code",null,t[130].value),t[131].value,(0,n.tZ)("code",null,t[132].value)),(0,n.tZ)("td",null,(0,n.tZ)(i.rU,{to:"#StepItem"},t[133].value)),(0,n.tZ)("td",null,t[134].value),(0,n.tZ)("td",null,t[135].value)))),(0,n.tZ)("h3",{id:"stepitem"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#stepitem"},(0,n.tZ)("span",{className:"icon icon-link"})),"StepItem"),(0,n.tZ)("p",null,t[136].value),(0,n.tZ)(s.Z,null,(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,t[137].value),(0,n.tZ)("th",null,t[138].value),(0,n.tZ)("th",null,t[139].value),(0,n.tZ)("th",null,t[140].value),(0,n.tZ)("th",null,t[141].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[142].value),(0,n.tZ)("td",null,t[143].value),(0,n.tZ)("td",null,t[144].value),(0,n.tZ)("td",null,t[145].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[146].value),(0,n.tZ)("td",null,t[147].value),(0,n.tZ)("td",null,t[148].value),(0,n.tZ)("td",null,t[149].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[150].value),(0,n.tZ)("td",null,t[151].value),(0,n.tZ)("td",null,t[152].value),(0,n.tZ)("td",null,t[153].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[154].value),(0,n.tZ)("td",null,t[155].value,(0,n.tZ)("code",null,t[156].value),t[157].value,(0,n.tZ)("code",null,t[158].value),t[159].value,(0,n.tZ)("code",null,t[160].value),t[161].value,(0,n.tZ)("code",null,t[162].value),t[163].value,(0,n.tZ)("code",null,t[164].value)),(0,n.tZ)("td",null,t[165].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[166].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[167].value),(0,n.tZ)("td",null,t[168].value),(0,n.tZ)("td",null,t[169].value),(0,n.tZ)("td",null,t[170].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[171].value),(0,n.tZ)("td",null,t[172].value),(0,n.tZ)("td",null,t[173].value),(0,n.tZ)("td",null,t[174].value),(0,n.tZ)("td",null)))))))}l.default=d}}]);
