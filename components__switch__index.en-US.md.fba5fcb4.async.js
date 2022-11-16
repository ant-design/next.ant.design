"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[9675],{96707:function(s,l,n){n.r(l);var r=n(2143),m=n(50250),h=n(59378),c=n(28460),Z=n(74775),_=n(5937),v=n(2068),p=n(74399),E=n(46004),x=n(35708),g=n(30138),C=n(56140),u=n(5388),P=n(1160),D=n(13140),O=n(95127),f=n(74418),d=n(54331),a=n(67294),t=n(13946);function i(){var o=(0,d.eL)(),e=o.texts;return(0,t.tZ)(d.dY,null,(0,t.tZ)(a.Fragment,null,(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("p",null,e[0].value),(0,t.tZ)("h2",{id:"when-to-use"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use"},(0,t.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,t.tZ)("ul",null,(0,t.tZ)("li",null,e[1].value),(0,t.tZ)("li",null,e[2].value,(0,t.tZ)("code",null,e[3].value),e[4].value,(0,t.tZ)("code",null,e[5].value),e[6].value,(0,t.tZ)("code",null,e[7].value),e[8].value,(0,t.tZ)("code",null,e[9].value),e[10].value)),(0,t.tZ)("h2",{id:"examples"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#examples"},(0,t.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,t.tZ)(u.Z,{items:[{demo:{id:"components-switch-demo-basic"},previewerProps:{title:"Basic",filename:"components/switch/demo/basic.tsx",jsx:`import React from 'react';
import { Switch } from 'antd';
const onChange = (checked) => {
  console.log(\`switch to \${checked}\`);
};
const App = () => <Switch defaultChecked onChange={onChange} />;
export default App;
`,description:"<p>The most basic usage.</p>"}},{demo:{id:"components-switch-demo-disabled"},previewerProps:{title:"Disabled",filename:"components/switch/demo/disabled.tsx",jsx:`import React, { useState } from 'react';
import { Button, Switch } from 'antd';
const App = () => {
  const [disabled, setDisabled] = useState(true);
  const toggle = () => {
    setDisabled(!disabled);
  };
  return (
    <>
      <Switch disabled={disabled} defaultChecked />
      <br />
      <Button type="primary" onClick={toggle}>
        Toggle disabled
      </Button>
    </>
  );
};
export default App;
`,description:"<p>Disabled state of <code>Switch</code>.</p>"}},{demo:{id:"components-switch-demo-text"},previewerProps:{title:"Text & icon",filename:"components/switch/demo/text.tsx",jsx:`import React from 'react';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Switch, Space } from 'antd';
const App = () => (
  <Space direction="vertical">
    <Switch checkedChildren="\u5F00\u542F" unCheckedChildren="\u5173\u95ED" defaultChecked />
    <Switch checkedChildren="1" unCheckedChildren="0" />
    <Switch
      checkedChildren={<CheckOutlined />}
      unCheckedChildren={<CloseOutlined />}
      defaultChecked
    />
  </Space>
);
export default App;
`,description:"<p>With text and icon.</p>"}},{demo:{id:"components-switch-demo-size"},previewerProps:{title:"Two sizes",filename:"components/switch/demo/size.tsx",jsx:`import React from 'react';
import { Switch } from 'antd';
const App = () => (
  <>
    <Switch defaultChecked />
    <br />
    <Switch size="small" defaultChecked />
  </>
);
export default App;
`,description:'<p><code>size="small"</code> represents a small sized switch.</p>'}},{demo:{id:"components-switch-demo-loading"},previewerProps:{title:"Loading",filename:"components/switch/demo/loading.tsx",jsx:`import React from 'react';
import { Switch } from 'antd';
const App = () => (
  <>
    <Switch loading defaultChecked />
    <br />
    <Switch size="small" loading />
  </>
);
export default App;
`,description:"<p>Mark a pending state of switch.</p>"}}]}),(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("h2",{id:"api"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,t.tZ)("span",{className:"icon icon-link"})),"API"),(0,t.tZ)(_.Z,null,(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,e[11].value),(0,t.tZ)("th",null,e[12].value),(0,t.tZ)("th",null,e[13].value),(0,t.tZ)("th",null,e[14].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[15].value),(0,t.tZ)("td",null,e[16].value),(0,t.tZ)("td",null,e[17].value),(0,t.tZ)("td",null,e[18].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[19].value),(0,t.tZ)("td",null,e[20].value),(0,t.tZ)("td",null,e[21].value),(0,t.tZ)("td",null,e[22].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[23].value),(0,t.tZ)("td",null,e[24].value),(0,t.tZ)("td",null,e[25].value),(0,t.tZ)("td",null,e[26].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[27].value),(0,t.tZ)("td",null,e[28].value),(0,t.tZ)("td",null,e[29].value),(0,t.tZ)("td",null,e[30].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[31].value),(0,t.tZ)("td",null,e[32].value),(0,t.tZ)("td",null,e[33].value),(0,t.tZ)("td",null,e[34].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[35].value),(0,t.tZ)("td",null,e[36].value),(0,t.tZ)("td",null,e[37].value),(0,t.tZ)("td",null,e[38].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[39].value),(0,t.tZ)("td",null,e[40].value),(0,t.tZ)("td",null,e[41].value),(0,t.tZ)("td",null,e[42].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[43].value),(0,t.tZ)("td",null,e[44].value,(0,t.tZ)("code",null,e[45].value),e[46].value,(0,t.tZ)("code",null,e[47].value)),(0,t.tZ)("td",null,e[48].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[49].value))),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[50].value),(0,t.tZ)("td",null,e[51].value),(0,t.tZ)("td",null,e[52].value),(0,t.tZ)("td",null,e[53].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[54].value),(0,t.tZ)("td",null,e[55].value),(0,t.tZ)("td",null,e[56].value),(0,t.tZ)("td",null,e[57].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[58].value),(0,t.tZ)("td",null,e[59].value),(0,t.tZ)("td",null,e[60].value),(0,t.tZ)("td",null,e[61].value)))),(0,t.tZ)("h2",{id:"methods"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#methods"},(0,t.tZ)("span",{className:"icon icon-link"})),"Methods"),(0,t.tZ)(_.Z,null,(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,e[62].value),(0,t.tZ)("th",null,e[63].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[64].value),(0,t.tZ)("td",null,e[65].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[66].value),(0,t.tZ)("td",null,e[67].value)))))))}l.default=i}}]);
