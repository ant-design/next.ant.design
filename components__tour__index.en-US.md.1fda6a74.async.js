"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[96176],{63005:function(i,l,n){n.r(l);var c=n(2143),Z=n(96152),v=n(74775),u=n(5937),p=n(74399),_=n(56140),o=n(5388),m=n(1160),f=n(95127),h=n(74418),a=n(9577),d=n(67294),t=n(66366);function r(){var s=(0,a.eL)(),e=s.texts;return(0,t.tZ)(a.dY,null,(0,t.tZ)(d.Fragment,null,(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("p",null,e[0].value,(0,t.tZ)("code",null,e[1].value),e[2].value),(0,t.tZ)("h2",{id:"when-to-use"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use"},(0,t.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,t.tZ)("p",null,e[3].value),(0,t.tZ)("h2",{id:"examples"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#examples"},(0,t.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,t.tZ)(o.Z,{items:[{demo:{id:"components-tour-demo-basic"},previewerProps:{title:"Basic",filename:"components/tour/demo/basic.tsx",jsx:`import React, { useRef, useState } from 'react';
import { Button, Divider, Space, Tour } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
const App = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const [open, setOpen] = useState(false);
  const steps = [
    {
      title: 'Upload File',
      description: 'Put your files here.',
      cover: (
        <img
          alt="tour.png"
          src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
        />
      ),
      target: () => ref1.current,
    },
    {
      title: 'Save',
      description: 'Save your changes.',
      target: () => ref2.current,
    },
    {
      title: 'Other Actions',
      description: 'Click to see other actions.',
      target: () => ref3.current,
    },
  ];
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Begin Tour
      </Button>

      <Divider />

      <Space>
        <Button ref={ref1}> Upload</Button>
        <Button ref={ref2} type="primary">
          Save
        </Button>
        <Button ref={ref3} icon={<EllipsisOutlined />} />
      </Space>

      <Tour open={open} onClose={() => setOpen(false)} steps={steps} />
    </>
  );
};
export default App;
`,description:"<p>The most basic usage.</p>"}},{demo:{id:"components-tour-demo-non-modal"},previewerProps:{title:"Non-modal",filename:"components/tour/demo/non-modal.tsx",jsx:`import React, { useRef, useState } from 'react';
import { Button, Divider, Space, Tour } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
const App = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const [open, setOpen] = useState(false);
  const steps = [
    {
      title: 'Upload File',
      description: 'Put your files here.',
      cover: (
        <img
          alt="tour.png"
          src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
        />
      ),
      target: () => ref1.current,
    },
    {
      title: 'Save',
      description: 'Save your changes.',
      target: () => ref2.current,
    },
    {
      title: 'Other Actions',
      description: 'Click to see other actions.',
      target: () => ref3.current,
    },
  ];
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Begin non-modal Tour
      </Button>

      <Divider />

      <Space>
        <Button ref={ref1}> Upload</Button>
        <Button ref={ref2} type="primary">
          Save
        </Button>
        <Button ref={ref3} icon={<EllipsisOutlined />} />
      </Space>

      <Tour open={open} onClose={() => setOpen(false)} mask={false} type="primary" steps={steps} />
    </>
  );
};
export default App;
`,description:'<p>Use <code>mask={false}</code> to make Tour non-modal. At the meantime it is recommended to use with <code>type="primary"</code> to emphasize the guide itself.</p>'}},{demo:{id:"components-tour-demo-placement"},previewerProps:{title:"Placement",filename:"components/tour/demo/placement.tsx",jsx:`import React, { useRef, useState } from 'react';
import { Button, Tour } from 'antd';
const App = () => {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);
  const steps = [
    {
      title: 'Center',
      description: 'Displayed in the center of screen.',
      target: null,
    },
    {
      title: 'Right',
      description: 'On the right of target.',
      placement: 'right',
      target: () => ref.current,
    },
    {
      title: 'Top',
      description: 'On the top of target.',
      placement: 'top',
      target: () => ref.current,
    },
  ];
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)} ref={ref}>
        Begin Tour
      </Button>

      <Tour open={open} onClose={() => setOpen(false)} steps={steps} />
    </>
  );
};
export default App;
`,description:"<p>Change the placement of the guide relative to the target, there are 12 placements available. When <code>target={null}</code> the guide will show in the center.</p>"}},{demo:{id:"components-tour-demo-render-panel"},previewerProps:{debug:!0,title:"_InternalPanelDoNotUseOrYouWillBeFired",filename:"components/tour/demo/render-panel.tsx",jsx:`import React from 'react';
import { Tour } from 'antd';

/** Test usage. Do not use in your production. */
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalPanel } = Tour;
export default () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      rowGap: 16,
      background: 'rgba(50,0,0,0.65)',
      padding: 8,
    }}
  >
    <InternalPanel title="Hello World!" description="Hello World?!" />
    <InternalPanel
      title="Hello World!"
      description="Hello World?!"
      cover={
        <img
          alt="tour.png"
          src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
        />
      }
      current={5}
      total={7}
    />
    <InternalPanel
      title="Hello World!"
      description="Hello World?!"
      type="primary"
      current={4}
      total={5}
    />
  </div>
);
`,description:"<p>Debug usage. Do not use in your production.</p>"}}]}),(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("h2",{id:"api"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,t.tZ)("span",{className:"icon icon-link"})),"API"),(0,t.tZ)("h3",{id:"tour"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#tour"},(0,t.tZ)("span",{className:"icon icon-link"})),"Tour"),(0,t.tZ)(u.Z,null,(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,e[4].value),(0,t.tZ)("th",null,e[5].value),(0,t.tZ)("th",null,e[6].value),(0,t.tZ)("th",null,e[7].value),(0,t.tZ)("th",null,e[8].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[9].value),(0,t.tZ)("td",null,e[10].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[11].value),e[12].value,(0,t.tZ)("code",null,e[13].value)),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[14].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[15].value),(0,t.tZ)("td",null,e[16].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[17].value),e[18].value,(0,t.tZ)("code",null,e[19].value),e[20].value,(0,t.tZ)("code",null,e[21].value),e[22].value,(0,t.tZ)("code",null,e[23].value),e[24].value,(0,t.tZ)("code",null,e[25].value),e[26].value,(0,t.tZ)("code",null,e[27].value),e[28].value,(0,t.tZ)("code",null,e[29].value),e[30].value,(0,t.tZ)("code",null,e[31].value),e[32].value,(0,t.tZ)("code",null,e[33].value),e[34].value,(0,t.tZ)("code",null,e[35].value),e[36].value,(0,t.tZ)("code",null,e[37].value),e[38].value,(0,t.tZ)("code",null,e[39].value)),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[40].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[41].value),(0,t.tZ)("td",null,e[42].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[43].value)),(0,t.tZ)("td",null,e[44].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[45].value),(0,t.tZ)("td",null,e[46].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[47].value)),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[48].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[49].value),(0,t.tZ)("td",null,e[50].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[51].value),e[52].value,(0,t.tZ)("code",null,e[53].value)),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[54].value)),(0,t.tZ)("td",null)))),(0,t.tZ)("h3",{id:"tourstep"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#tourstep"},(0,t.tZ)("span",{className:"icon icon-link"})),"TourStep"),(0,t.tZ)(u.Z,null,(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,e[55].value),(0,t.tZ)("th",null,e[56].value),(0,t.tZ)("th",null,e[57].value),(0,t.tZ)("th",null,e[58].value),(0,t.tZ)("th",null,e[59].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[60].value),(0,t.tZ)("td",null,e[61].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[62].value),e[63].value,(0,t.tZ)("code",null,e[64].value)),(0,t.tZ)("td",null,e[65].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[66].value),(0,t.tZ)("td",null,e[67].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[68].value),e[69].value,(0,t.tZ)("code",null,e[70].value)),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[71].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[72].value),(0,t.tZ)("td",null,e[73].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[74].value)),(0,t.tZ)("td",null,e[75].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[76].value),(0,t.tZ)("td",null,e[77].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[78].value)),(0,t.tZ)("td",null,e[79].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[80].value),(0,t.tZ)("td",null,e[81].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[82].value)),(0,t.tZ)("td",null,e[83].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[84].value),(0,t.tZ)("td",null,e[85].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[86].value),e[87].value,(0,t.tZ)("code",null,e[88].value),e[89].value,(0,t.tZ)("code",null,e[90].value),e[91].value,(0,t.tZ)("code",null,e[92].value),e[93].value,(0,t.tZ)("code",null,e[94].value),e[95].value,(0,t.tZ)("code",null,e[96].value),e[97].value,(0,t.tZ)("code",null,e[98].value),e[99].value,(0,t.tZ)("code",null,e[100].value),e[101].value,(0,t.tZ)("code",null,e[102].value),e[103].value,(0,t.tZ)("code",null,e[104].value),e[105].value,(0,t.tZ)("code",null,e[106].value),e[107].value,(0,t.tZ)("code",null,e[108].value)),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[109].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[110].value),(0,t.tZ)("td",null,e[111].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[112].value)),(0,t.tZ)("td",null,e[113].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[114].value),(0,t.tZ)("td",null,e[115].value,(0,t.tZ)("code",null,e[116].value),e[117].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[118].value)),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[119].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[120].value),(0,t.tZ)("td",null,e[121].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[122].value),e[123].value,(0,t.tZ)("code",null,e[124].value)),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[125].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[126].value),(0,t.tZ)("td",null,e[127].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[128].value)),(0,t.tZ)("td",null,e[129].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[130].value),(0,t.tZ)("td",null,e[131].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[132].value)),(0,t.tZ)("td",null,e[133].value),(0,t.tZ)("td",null)))))))}l.default=r}}]);
