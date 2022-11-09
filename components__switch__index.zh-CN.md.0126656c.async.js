"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[81564],{89042:function(_,n,e){e.r(n);var r=e(2143),c=e(96152),Z=e(74775),u=e(5937),m=e(74399),v=e(56140),a=e(5388),h=e(1160),p=e(95127),x=e(74418),d=e(33098),i=e(67294),t=e(66366);function s(){var o=(0,d.eL)(),l=o.texts;return(0,t.tZ)(d.dY,null,(0,t.tZ)(i.Fragment,null,(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("p",null,l[0].value),(0,t.tZ)("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528"},(0,t.tZ)("span",{className:"icon icon-link"})),"\u4F55\u65F6\u4F7F\u7528"),(0,t.tZ)("ul",null,(0,t.tZ)("li",null,l[1].value),(0,t.tZ)("li",null,l[2].value,(0,t.tZ)("code",null,l[3].value),l[4].value,(0,t.tZ)("code",null,l[5].value),l[6].value,(0,t.tZ)("code",null,l[7].value),l[8].value)),(0,t.tZ)("h2",{id:"\u4EE3\u7801\u6F14\u793A"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A"},(0,t.tZ)("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),(0,t.tZ)(a.Z,{items:[{demo:{id:"components-switch-demo-basic"},previewerProps:{title:"\u57FA\u672C",filename:"components/switch/demo/basic.tsx",jsx:`import React from 'react';
import { Switch } from 'antd';
const onChange = (checked) => {
  console.log(\`switch to \${checked}\`);
};
const App = () => <Switch defaultChecked onChange={onChange} />;
export default App;
`,description:"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>"}},{demo:{id:"components-switch-demo-disabled"},previewerProps:{title:"\u4E0D\u53EF\u7528",filename:"components/switch/demo/disabled.tsx",jsx:`import React, { useState } from 'react';
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
`,description:"<p>Switch \u5931\u6548\u72B6\u6001\u3002</p>"}},{demo:{id:"components-switch-demo-text"},previewerProps:{title:"\u6587\u5B57\u548C\u56FE\u6807",filename:"components/switch/demo/text.tsx",jsx:`import React from 'react';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Switch } from 'antd';
const App = () => (
  <>
    <Switch checkedChildren="\u5F00\u542F" unCheckedChildren="\u5173\u95ED" defaultChecked />
    <br />
    <Switch checkedChildren="1" unCheckedChildren="0" />
    <br />
    <Switch
      checkedChildren={<CheckOutlined />}
      unCheckedChildren={<CloseOutlined />}
      defaultChecked
    />
  </>
);
export default App;
`,description:"<p>\u5E26\u6709\u6587\u5B57\u548C\u56FE\u6807\u3002</p>"}},{demo:{id:"components-switch-demo-size"},previewerProps:{title:"\u4E24\u79CD\u5927\u5C0F",filename:"components/switch/demo/size.tsx",jsx:`import React from 'react';
import { Switch } from 'antd';
const App = () => (
  <>
    <Switch defaultChecked />
    <br />
    <Switch size="small" defaultChecked />
  </>
);
export default App;
`,description:'<p><code>size="small"</code> \u8868\u793A\u5C0F\u53F7\u5F00\u5173\u3002</p>'}},{demo:{id:"components-switch-demo-loading"},previewerProps:{title:"\u52A0\u8F7D\u4E2D",filename:"components/switch/demo/loading.tsx",jsx:`import React from 'react';
import { Switch } from 'antd';
const App = () => (
  <>
    <Switch loading defaultChecked />
    <br />
    <Switch size="small" loading />
  </>
);
export default App;
`,description:"<p>\u6807\u8BC6\u5F00\u5173\u64CD\u4F5C\u4ECD\u5728\u6267\u884C\u4E2D\u3002</p>"}}]}),(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("h2",{id:"api"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,t.tZ)("span",{className:"icon icon-link"})),"API"),(0,t.tZ)(u.Z,null,(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,l[9].value),(0,t.tZ)("th",null,l[10].value),(0,t.tZ)("th",null,l[11].value),(0,t.tZ)("th",null,l[12].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[13].value),(0,t.tZ)("td",null,l[14].value),(0,t.tZ)("td",null,l[15].value),(0,t.tZ)("td",null,l[16].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[17].value),(0,t.tZ)("td",null,l[18].value),(0,t.tZ)("td",null,l[19].value),(0,t.tZ)("td",null,l[20].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[21].value),(0,t.tZ)("td",null,l[22].value),(0,t.tZ)("td",null,l[23].value),(0,t.tZ)("td",null,l[24].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[25].value),(0,t.tZ)("td",null,l[26].value),(0,t.tZ)("td",null,l[27].value),(0,t.tZ)("td",null,l[28].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[29].value),(0,t.tZ)("td",null,l[30].value),(0,t.tZ)("td",null,l[31].value),(0,t.tZ)("td",null,l[32].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[33].value),(0,t.tZ)("td",null,l[34].value),(0,t.tZ)("td",null,l[35].value),(0,t.tZ)("td",null,l[36].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[37].value),(0,t.tZ)("td",null,l[38].value),(0,t.tZ)("td",null,l[39].value),(0,t.tZ)("td",null,l[40].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[41].value),(0,t.tZ)("td",null,l[42].value,(0,t.tZ)("code",null,l[43].value),l[44].value,(0,t.tZ)("code",null,l[45].value)),(0,t.tZ)("td",null,l[46].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,l[47].value))),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[48].value),(0,t.tZ)("td",null,l[49].value),(0,t.tZ)("td",null,l[50].value),(0,t.tZ)("td",null,l[51].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[52].value),(0,t.tZ)("td",null,l[53].value),(0,t.tZ)("td",null,l[54].value),(0,t.tZ)("td",null,l[55].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[56].value),(0,t.tZ)("td",null,l[57].value),(0,t.tZ)("td",null,l[58].value),(0,t.tZ)("td",null,l[59].value)))),(0,t.tZ)("h2",{id:"\u65B9\u6CD5"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u65B9\u6CD5"},(0,t.tZ)("span",{className:"icon icon-link"})),"\u65B9\u6CD5"),(0,t.tZ)(u.Z,null,(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,l[60].value),(0,t.tZ)("th",null,l[61].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[62].value),(0,t.tZ)("td",null,l[63].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,l[64].value),(0,t.tZ)("td",null,l[65].value)))))))}n.default=s}}]);
