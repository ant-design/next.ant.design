"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[5981],{78973:function(p,o,e){e.r(o);var c=e(2143),m=e(96152),u=e(74775),l=e(5937),Z=e(74399),v=e(56140),s=e(5388),_=e(1160),f=e(95127),h=e(74418),a=e(33098),i=e(67294),n=e(66366);function d(){var r=(0,a.eL)(),t=r.texts;return(0,n.tZ)(a.dY,null,(0,n.tZ)(i.Fragment,null,(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("p",null,t[0].value),(0,n.tZ)("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u4F55\u65F6\u4F7F\u7528"),(0,n.tZ)("p",null,t[1].value),(0,n.tZ)("h2",{id:"\u4EE3\u7801\u6F14\u793A"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),(0,n.tZ)(s.Z,{items:[{demo:{id:"components-mentions-demo-basic"},previewerProps:{title:"\u57FA\u672C\u4F7F\u7528",filename:"components/mentions/demo/basic.tsx",jsx:`import React from 'react';
import { Mentions } from 'antd';
const { Option } = Mentions;
const onChange = (value) => {
  console.log('Change:', value);
};
const onSelect = (option) => {
  console.log('select', option);
};
const App = () => (
  <Mentions
    style={{
      width: '100%',
    }}
    onChange={onChange}
    onSelect={onSelect}
    defaultValue="@afc163"
  >
    <Option value="afc163">afc163</Option>
    <Option value="zombieJ">zombieJ</Option>
    <Option value="yesmeck">yesmeck</Option>
  </Mentions>
);
export default App;
`,description:"<p>\u57FA\u672C\u4F7F\u7528\u3002</p>"}},{demo:{id:"components-mentions-demo-async"},previewerProps:{title:"\u5F02\u6B65\u52A0\u8F7D",filename:"components/mentions/demo/async.tsx",jsx:`import React, { useCallback, useRef, useState } from 'react';
import { Mentions } from 'antd';
import debounce from 'lodash/debounce';
const { Option } = Mentions;
const App = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const ref = useRef();
  const loadGithubUsers = (key) => {
    if (!key) {
      setUsers([]);
      return;
    }
    fetch(\`https://api.github.com/search/users?q=\${key}\`)
      .then((res) => res.json())
      .then(({ items = [] }) => {
        if (ref.current !== key) return;
        setLoading(false);
        setUsers(items.slice(0, 10));
      });
  };
  const debounceLoadGithubUsers = useCallback(debounce(loadGithubUsers, 800), []);
  const onSearch = (search) => {
    console.log('Search:', search);
    ref.current = search;
    setLoading(!!search);
    setUsers([]);
    debounceLoadGithubUsers(search);
  };
  return (
    <Mentions
      style={{
        width: '100%',
      }}
      loading={loading}
      onSearch={onSearch}
    >
      {users.map(({ login, avatar_url: avatar }) => (
        <Option key={login} value={login} className="antd-demo-dynamic-option">
          <img src={avatar} alt={login} />
          <span>{login}</span>
        </Option>
      ))}
    </Mentions>
  );
};
export default App;
`,description:"<p>\u5339\u914D\u5185\u5BB9\u5217\u8868\u4E3A\u5F02\u6B65\u8FD4\u56DE\u65F6\u3002</p>"}},{demo:{id:"components-mentions-demo-form"},previewerProps:{title:"\u914D\u5408 Form \u4F7F\u7528",filename:"components/mentions/demo/form.tsx",jsx:`import React from 'react';
import { Button, Form, Mentions } from 'antd';
const { Option, getMentions } = Mentions;
const App = () => {
  const [form] = Form.useForm();
  const onReset = () => {
    form.resetFields();
  };
  const onFinish = async () => {
    try {
      const values = await form.validateFields();
      console.log('Submit:', values);
    } catch (errInfo) {
      console.log('Error:', errInfo);
    }
  };
  const checkMention = async (_, value) => {
    const mentions = getMentions(value);
    if (mentions.length < 2) {
      throw new Error('More than one must be selected!');
    }
  };
  return (
    <Form form={form} layout="horizontal" onFinish={onFinish}>
      <Form.Item
        name="coders"
        label="Top coders"
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 16,
        }}
        rules={[
          {
            validator: checkMention,
          },
        ]}
      >
        <Mentions rows={1}>
          <Option value="afc163">afc163</Option>
          <Option value="zombieJ">zombieJ</Option>
          <Option value="yesmeck">yesmeck</Option>
        </Mentions>
      </Form.Item>
      <Form.Item
        name="bio"
        label="Bio"
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 16,
        }}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Mentions rows={3} placeholder="You can use @ to ref user here">
          <Option value="afc163">afc163</Option>
          <Option value="zombieJ">zombieJ</Option>
          <Option value="yesmeck">yesmeck</Option>
        </Mentions>
      </Form.Item>
      <Form.Item
        wrapperCol={{
          span: 14,
          offset: 6,
        }}
      >
        <Button htmlType="submit" type="primary">
          Submit
        </Button>
        &nbsp;&nbsp;&nbsp;
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
      </Form.Item>
    </Form>
  );
};
export default App;
`,description:"<p>\u53D7\u63A7\u6A21\u5F0F\uFF0C\u4F8B\u5982\u914D\u5408 Form \u4F7F\u7528\u3002</p>"}},{demo:{id:"components-mentions-demo-prefix"},previewerProps:{title:"\u81EA\u5B9A\u4E49\u89E6\u53D1\u5B57\u7B26",filename:"components/mentions/demo/prefix.tsx",jsx:`import React, { useState } from 'react';
import { Mentions } from 'antd';
const { Option } = Mentions;
const MOCK_DATA = {
  '@': ['afc163', 'zombiej', 'yesmeck'],
  '#': ['1.0', '2.0', '3.0'],
};
const App = () => {
  const [prefix, setPrefix] = useState('@');
  const onSearch = (_, newPrefix) => {
    setPrefix(newPrefix);
  };
  return (
    <Mentions
      style={{
        width: '100%',
      }}
      placeholder="input @ to mention people, # to mention tag"
      prefix={['@', '#']}
      onSearch={onSearch}
    >
      {(MOCK_DATA[prefix] || []).map((value) => (
        <Option key={value} value={value}>
          {value}
        </Option>
      ))}
    </Mentions>
  );
};
export default App;
`,description:"<p>\u901A\u8FC7 <code>prefix</code> \u5C5E\u6027\u81EA\u5B9A\u4E49\u89E6\u53D1\u5B57\u7B26\u3002\u9ED8\u8BA4\u4E3A <code>@</code>, \u53EF\u4EE5\u5B9A\u4E49\u4E3A\u6570\u7EC4\u3002</p>"}},{demo:{id:"components-mentions-demo-readonly"},previewerProps:{title:"\u65E0\u6548\u6216\u53EA\u8BFB",filename:"components/mentions/demo/readonly.tsx",jsx:`import React from 'react';
import { Mentions } from 'antd';
const { Option } = Mentions;
const getOptions = () =>
  ['afc163', 'zombiej', 'yesmeck'].map((value) => (
    <Option key={value} value={value}>
      {value}
    </Option>
  ));
const App = () => (
  <>
    <div
      style={{
        marginBottom: 10,
      }}
    >
      <Mentions
        style={{
          width: '100%',
        }}
        placeholder="this is disabled Mentions"
        disabled
      >
        {getOptions()}
      </Mentions>
    </div>
    <Mentions
      style={{
        width: '100%',
      }}
      placeholder="this is readOnly Mentions"
      readOnly
    >
      {getOptions()}
    </Mentions>
  </>
);
export default App;
`,description:"<p>\u901A\u8FC7 <code>disabled</code> \u5C5E\u6027\u8BBE\u7F6E\u662F\u5426\u751F\u6548\u3002\u901A\u8FC7 <code>readOnly</code> \u5C5E\u6027\u8BBE\u7F6E\u662F\u5426\u53EA\u8BFB\u3002</p>"}},{demo:{id:"components-mentions-demo-placement"},previewerProps:{title:"\u5411\u4E0A\u5C55\u5F00",filename:"components/mentions/demo/placement.tsx",jsx:`import React from 'react';
import { Mentions } from 'antd';
const { Option } = Mentions;
const App = () => (
  <Mentions
    style={{
      width: '100%',
    }}
    placement="top"
  >
    <Option value="afc163">afc163</Option>
    <Option value="zombieJ">zombieJ</Option>
    <Option value="yesmeck">yesmeck</Option>
  </Mentions>
);
export default App;
`,description:"<p>\u5411\u4E0A\u5C55\u5F00\u5EFA\u8BAE\u3002</p>"}},{demo:{id:"components-mentions-demo-autosize"},previewerProps:{title:"\u81EA\u52A8\u5927\u5C0F",filename:"components/mentions/demo/autoSize.tsx",jsx:`import React from 'react';
import { Mentions } from 'antd';
const { Option } = Mentions;
const App = () => (
  <Mentions
    autoSize
    style={{
      width: '100%',
    }}
  >
    <Option value="afc163">afc163</Option>
    <Option value="zombieJ">zombieJ</Option>
    <Option value="yesmeck">yesmeck</Option>
  </Mentions>
);
export default App;
`,description:"<p>\u81EA\u9002\u5E94\u5185\u5BB9\u9AD8\u5EA6\u3002</p>"}},{demo:{id:"components-mentions-demo-status"},previewerProps:{title:"\u81EA\u5B9A\u4E49\u72B6\u6001",filename:"components/mentions/demo/status.tsx",jsx:`import React from 'react';
import { Mentions, Space } from 'antd';
const { Option } = Mentions;
const onChange = (value) => {
  console.log('Change:', value);
};
const onSelect = (option) => {
  console.log('select', option);
};
const App = () => {
  const options = (
    <>
      <Option value="afc163">afc163</Option>
      <Option value="zombieJ">zombieJ</Option>
      <Option value="yesmeck">yesmeck</Option>
    </>
  );
  return (
    <Space direction="vertical">
      <Mentions onChange={onChange} onSelect={onSelect} defaultValue="@afc163" status="error">
        {options}
      </Mentions>
      <Mentions onChange={onChange} onSelect={onSelect} defaultValue="@afc163" status="warning">
        {options}
      </Mentions>
    </Space>
  );
};
export default App;
`,description:"<p>\u4F7F\u7528 <code>status</code> \u4E3A Mentions \u6DFB\u52A0\u72B6\u6001\u3002\u53EF\u9009 <code>error</code> \u6216\u8005 <code>warning</code>\u3002</p>"}},{demo:{id:"components-mentions-demo-render-panel"},previewerProps:{debug:!0,title:"_InternalPanelDoNotUseOrYouWillBeFired",filename:"components/mentions/demo/render-panel.tsx",jsx:`import React from 'react';
import { Mentions } from 'antd';
const { Option } = Mentions;
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalMentions } = Mentions;
const App = () => (
  <InternalMentions
    style={{
      width: '100%',
    }}
    value="@"
  >
    <Option value="afc163">afc163</Option>
    <Option value="zombieJ">zombieJ</Option>
  </InternalMentions>
);
export default App;
`,description:"<p>\u8C03\u8BD5\u7528\u7EC4\u4EF6\uFF0C\u8BF7\u52FF\u76F4\u63A5\u4F7F\u7528\u3002</p>"}}]}),(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("h2",{id:"api"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,n.tZ)("span",{className:"icon icon-link"})),"API"),(0,n.tZ)(u.Z,{lang:"jsx"},t[2].value),(0,n.tZ)("h3",{id:"mentions"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#mentions"},(0,n.tZ)("span",{className:"icon icon-link"})),"Mentions"),(0,n.tZ)(l.Z,null,(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,t[3].value),(0,n.tZ)("th",null,t[4].value),(0,n.tZ)("th",null,t[5].value),(0,n.tZ)("th",null,t[6].value),(0,n.tZ)("th",null,t[7].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[8].value),(0,n.tZ)("td",null,t[9].value),(0,n.tZ)("td",null,t[10].value),(0,n.tZ)("td",null,t[11].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[12].value),(0,n.tZ)("td",null,t[13].value),(0,n.tZ)("td",null,t[14].value),(0,n.tZ)("td",null,t[15].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[16].value),(0,n.tZ)("td",null,t[17].value),(0,n.tZ)("td",null,t[18].value),(0,n.tZ)("td",null,t[19].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[20].value),(0,n.tZ)("td",null,t[21].value),(0,n.tZ)("td",null,t[22].value),(0,n.tZ)("td",null,t[23].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[24].value),(0,n.tZ)("td",null,t[25].value),(0,n.tZ)("td",null,t[26].value),(0,n.tZ)("td",null,t[27].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[28].value),(0,n.tZ)("td",null,t[29].value),(0,n.tZ)("td",null,t[30].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[31].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[32].value),(0,n.tZ)("td",null,t[33].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[34].value),t[35].value,(0,n.tZ)("code",null,t[36].value)),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[37].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[38].value),(0,n.tZ)("td",null,t[39].value),(0,n.tZ)("td",null,t[40].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[41].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[42].value),(0,n.tZ)("td",null,t[43].value),(0,n.tZ)("td",null,t[44].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,t[45].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[46].value),(0,n.tZ)("td",null,t[47].value),(0,n.tZ)("td",null,t[48].value),(0,n.tZ)("td",null,t[49].value),(0,n.tZ)("td",null,t[50].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[51].value),(0,n.tZ)("td",null,t[52].value),(0,n.tZ)("td",null,t[53].value),(0,n.tZ)("td",null,t[54].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[55].value),(0,n.tZ)("td",null,t[56].value),(0,n.tZ)("td",null,t[57].value),(0,n.tZ)("td",null,t[58].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[59].value),(0,n.tZ)("td",null,t[60].value),(0,n.tZ)("td",null,t[61].value),(0,n.tZ)("td",null,t[62].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[63].value),(0,n.tZ)("td",null,t[64].value),(0,n.tZ)("td",null,t[65].value),(0,n.tZ)("td",null,t[66].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[67].value),(0,n.tZ)("td",null,t[68].value),(0,n.tZ)("td",null,t[69].value),(0,n.tZ)("td",null,t[70].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[71].value),(0,n.tZ)("td",null,t[72].value),(0,n.tZ)("td",null,t[73].value),(0,n.tZ)("td",null,t[74].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[75].value),(0,n.tZ)("td",null,t[76].value),(0,n.tZ)("td",null,t[77].value),(0,n.tZ)("td",null,t[78].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[79].value),(0,n.tZ)("td",null,t[80].value),(0,n.tZ)("td",null,t[81].value),(0,n.tZ)("td",null,t[82].value),(0,n.tZ)("td",null)))),(0,n.tZ)("h3",{id:"mentions-\u65B9\u6CD5"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#mentions-\u65B9\u6CD5"},(0,n.tZ)("span",{className:"icon icon-link"})),"Mentions \u65B9\u6CD5"),(0,n.tZ)(l.Z,null,(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,t[83].value),(0,n.tZ)("th",null,t[84].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[85].value),(0,n.tZ)("td",null,t[86].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[87].value),(0,n.tZ)("td",null,t[88].value)))),(0,n.tZ)("h3",{id:"option"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#option"},(0,n.tZ)("span",{className:"icon icon-link"})),"Option"),(0,n.tZ)(l.Z,null,(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,t[89].value),(0,n.tZ)("th",null,t[90].value),(0,n.tZ)("th",null,t[91].value),(0,n.tZ)("th",null,t[92].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[93].value),(0,n.tZ)("td",null,t[94].value),(0,n.tZ)("td",null,t[95].value),(0,n.tZ)("td",null,t[96].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,t[97].value),(0,n.tZ)("td",null,t[98].value),(0,n.tZ)("td",null,t[99].value),(0,n.tZ)("td",null,t[100].value)))))))}o.default=d}}]);
