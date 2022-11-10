"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[745],{57068:function(c,l,t){t.r(l);var p=t(2143),m=t(96152),a=t(74775),i=t(5937),v=t(74399),h=t(56140),r=t(5388),g=t(1160),f=t(95127),C=t(74418),o=t(9577),u=t(67294),n=t(66366);function d(){var s=(0,o.eL)(),e=s.texts;return(0,n.tZ)(o.dY,null,(0,n.tZ)(u.Fragment,null,(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("p",null,e[0].value),(0,n.tZ)("h2",{id:"\u4F7F\u7528"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F7F\u7528"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u4F7F\u7528"),(0,n.tZ)("p",null,e[1].value,(0,n.tZ)("a",{href:"https://facebook.github.io/react/docs/context.html"},e[2].value),e[3].value),(0,n.tZ)(a.Z,{lang:"jsx"},e[4].value),(0,n.tZ)("h3",{id:"content-security-policy"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#content-security-policy"},(0,n.tZ)("span",{className:"icon icon-link"})),"Content Security Policy"),(0,n.tZ)("p",null,e[5].value,(0,n.tZ)("code",null,e[6].value),e[7].value),(0,n.tZ)(a.Z,{lang:"jsx"},e[8].value),(0,n.tZ)("h2",{id:"\u4EE3\u7801\u6F14\u793A"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),(0,n.tZ)(r.Z,{items:[{demo:{id:"components-config-provider-demo-locale"},previewerProps:{title:"\u56FD\u9645\u5316",filename:"components/config-provider/demo/locale.tsx",jsx:`import React, { useState } from 'react';
import {
  Button,
  Calendar,
  ConfigProvider,
  DatePicker,
  Modal,
  Pagination,
  Popconfirm,
  Radio,
  Select,
  Table,
  TimePicker,
  Transfer,
} from 'antd';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import enUS from 'antd/locale/en_US';
import zhCN from 'antd/locale/zh_CN';
dayjs.locale('en');
const { Option } = Select;
const { RangePicker } = DatePicker;
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'filter1',
        value: 'filter1',
      },
    ],
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
];
const Page = () => {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const hideModal = () => {
    setOpen(false);
  };
  const info = () => {
    Modal.info({
      title: 'some info',
      content: 'some info',
    });
  };
  const confirm = () => {
    Modal.confirm({
      title: 'some info',
      content: 'some info',
    });
  };
  return (
    <div className="locale-components">
      <div className="example">
        <Pagination defaultCurrent={1} total={50} showSizeChanger />
      </div>
      <div className="example">
        <Select
          showSearch
          style={{
            width: 200,
          }}
        >
          <Option value="jack">jack</Option>
          <Option value="lucy">lucy</Option>
        </Select>
        <DatePicker />
        <TimePicker />
        <RangePicker
          style={{
            width: 200,
          }}
        />
      </div>
      <div className="example">
        <Button type="primary" onClick={showModal}>
          Show Modal
        </Button>
        <Button onClick={info}>Show info</Button>
        <Button onClick={confirm}>Show confirm</Button>
        <Popconfirm title="Question?">
          <a href="#">Click to confirm</a>
        </Popconfirm>
      </div>
      <div className="example">
        <Transfer dataSource={[]} showSearch targetKeys={[]} />
      </div>
      <div className="site-config-provider-calendar-wrapper">
        <Calendar fullscreen={false} value={dayjs()} />
      </div>
      <div className="example">
        <Table dataSource={[]} columns={columns} />
      </div>
      <Modal title="Locale Modal" open={open} onCancel={hideModal}>
        <p>Locale Modal</p>
      </Modal>
    </div>
  );
};
const App = () => {
  const [locale, setLocal] = useState(enUS);
  const changeLocale = (e) => {
    const localeValue = e.target.value;
    setLocal(localeValue);
    if (!localeValue) {
      dayjs.locale('en');
    } else {
      dayjs.locale('zh-cn');
    }
  };
  return (
    <div>
      <div className="change-locale">
        <span
          style={{
            marginRight: 16,
          }}
        >
          Change locale of components:{' '}
        </span>
        <Radio.Group value={locale} onChange={changeLocale}>
          <Radio.Button key="en" value={enUS}>
            English
          </Radio.Button>
          <Radio.Button key="cn" value={zhCN}>
            \u4E2D\u6587
          </Radio.Button>
        </Radio.Group>
      </div>
      <ConfigProvider locale={locale}>
        <Page
          key={locale ? locale.locale : 'en' /* Have to refresh for production environment */}
        />
      </ConfigProvider>
    </div>
  );
};
export default App;
`,description:"<p>\u6B64\u5904\u5217\u51FA Ant Design \u4E2D\u9700\u8981\u56FD\u9645\u5316\u652F\u6301\u7684\u7EC4\u4EF6\uFF0C\u4F60\u53EF\u4EE5\u5728\u6F14\u793A\u91CC\u5207\u6362\u8BED\u8A00\u3002</p>",style:`.site-config-provider-calendar-wrapper {
  width: 319px;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
}

.locale-components {
  padding-top: 16px;
  border-top: 1px solid #d9d9d9;
}

.code-box-demo .example {
  margin: 16px 0;
}

.code-box-demo .example > * {
  margin-right: 8px;
}

.change-locale {
  margin-bottom: 16px;
}`}},{demo:{id:"components-config-provider-demo-direction"},previewerProps:{title:"\u65B9\u5411",filename:"components/config-provider/demo/direction.tsx",jsx:`import React, { useState } from 'react';
import {
  DownloadOutlined,
  LeftOutlined,
  MinusOutlined,
  PlusOutlined,
  RightOutlined,
  SearchOutlined as SearchIcon,
  SmileOutlined,
} from '@ant-design/icons';
import {
  Badge,
  Button,
  Cascader,
  Col,
  ConfigProvider,
  Divider,
  Input,
  InputNumber,
  Modal,
  Pagination,
  Radio,
  Rate,
  Row,
  Select,
  Steps,
  Switch,
  Tree,
  TreeSelect,
} from 'antd';
const InputGroup = Input.Group;
const ButtonGroup = Button.Group;
const { Option } = Select;
const { TreeNode } = Tree;
const { Search } = Input;
const cascaderOptions = [
  {
    value: 'tehran',
    label: '\u062A\u0647\u0631\u0627\u0646',
    children: [
      {
        value: 'tehran-c',
        label: '\u062A\u0647\u0631\u0627\u0646',
        children: [
          {
            value: 'saadat-abad',
            label: '\u0633\u0639\u0627\u062F\u062A \u0622\u06CC\u0627\u062F',
          },
        ],
      },
    ],
  },
  {
    value: 'ardabil',
    label: '\u0627\u0631\u062F\u0628\u06CC\u0644',
    children: [
      {
        value: 'ardabil-c',
        label: '\u0627\u0631\u062F\u0628\u06CC\u0644',
        children: [
          {
            value: 'primadar',
            label: '\u067E\u06CC\u0631\u0645\u0627\u062F\u0631',
          },
        ],
      },
    ],
  },
  {
    value: 'gilan',
    label: '\u06AF\u06CC\u0644\u0627\u0646',
    children: [
      {
        value: 'rasht',
        label: '\u0631\u0634\u062A',
        children: [
          {
            value: 'district-3',
            label: '\u0645\u0646\u0637\u0642\u0647 \u06F3',
          },
        ],
      },
    ],
  },
];
const Page = ({ popupPlacement }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [badgeCount, setBadgeCount] = useState(5);
  const [showBadge, setShowBadge] = useState(true);
  const selectBefore = (
    <Select
      defaultValue="Http://"
      style={{
        width: 90,
      }}
    >
      <Option value="Http://">Http://</Option>
      <Option value="Https://">Https://</Option>
    </Select>
  );
  const selectAfter = (
    <Select
      defaultValue=".com"
      style={{
        width: 80,
      }}
    >
      <Option value=".com">.com</Option>
      <Option value=".jp">.jp</Option>
      <Option value=".cn">.cn</Option>
      <Option value=".org">.org</Option>
    </Select>
  );

  // ==== Cascader ====
  const cascaderFilter = (inputValue, path) =>
    path.some((option) => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
  const onCascaderChange = (value) => {
    console.log(value);
  };
  // ==== End Cascader ====

  // ==== Modal ====
  const showModal = () => {
    setModalOpen(true);
  };
  const handleOk = (e) => {
    console.log(e);
    setModalOpen(false);
  };
  const handleCancel = (e) => {
    console.log(e);
    setModalOpen(false);
  };

  // ==== End Modal ====

  const onStepsChange = (newCurrentStep) => {
    console.log('onChange:', newCurrentStep);
    setCurrentStep(newCurrentStep);
  };

  // ==== Badge ====

  const increaseBadge = () => {
    setBadgeCount(badgeCount + 1);
  };
  const declineBadge = () => {
    let newBadgeCount = badgeCount - 1;
    if (newBadgeCount < 0) {
      newBadgeCount = 0;
    }
    setBadgeCount(newBadgeCount);
  };
  const onChangeBadge = (checked) => {
    setShowBadge(checked);
  };
  // ==== End Badge ====

  return (
    <div className="direction-components">
      <Row>
        <Col span={24}>
          <Divider orientation="left">Cascader example</Divider>
          <Cascader
            suffixIcon={<SearchIcon />}
            options={cascaderOptions}
            onChange={onCascaderChange}
            placeholder="\u06CC\u06A9 \u0645\u0648\u0631\u062F \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F"
            popupPlacement={popupPlacement}
          />
          &nbsp;&nbsp;&nbsp;&nbsp; With search:
          <Cascader
            suffixIcon={<SmileOutlined />}
            options={cascaderOptions}
            onChange={onCascaderChange}
            placeholder="Select an item"
            popupPlacement={popupPlacement}
            showSearch={{
              filter: cascaderFilter,
            }}
          />
        </Col>
      </Row>
      <br />
      <Row>
        <Col span={12}>
          <Divider orientation="left">Switch example</Divider>
          &nbsp;&nbsp;
          <Switch defaultChecked />
          &nbsp;&nbsp;
          <Switch loading defaultChecked />
          &nbsp;&nbsp;
          <Switch size="small" loading />
        </Col>
        <Col span={12}>
          <Divider orientation="left">Radio Group example</Divider>

          <Radio.Group defaultValue="c" buttonStyle="solid">
            <Radio.Button value="a">\u062A\u0647\u0631\u0627\u0646</Radio.Button>
            <Radio.Button value="b" disabled>
              \u0627\u0635\u0641\u0647\u0627\u0646
            </Radio.Button>
            <Radio.Button value="c">\u0641\u0627\u0631\u0633</Radio.Button>
            <Radio.Button value="d">\u062E\u0648\u0632\u0633\u062A\u0627\u0646</Radio.Button>
          </Radio.Group>
        </Col>
      </Row>
      <br />
      <Row>
        <Col span={12}>
          <Divider orientation="left">Button example</Divider>
          <div className="button-demo">
            <Button type="primary" icon={<DownloadOutlined />} />
            <Button type="primary" shape="circle" icon={<DownloadOutlined />} />
            <Button type="primary" shape="round" icon={<DownloadOutlined />} />
            <Button type="primary" shape="round" icon={<DownloadOutlined />}>
              Download
            </Button>
            <Button type="primary" icon={<DownloadOutlined />}>
              Download
            </Button>
            <br />
            <Button.Group>
              <Button type="primary">
                <LeftOutlined />
                Backward
              </Button>
              <Button type="primary">
                Forward
                <RightOutlined />
              </Button>
            </Button.Group>
            <Button type="primary" loading>
              Loading
            </Button>
            <Button type="primary" size="small" loading>
              Loading
            </Button>
          </div>
        </Col>
        <Col span={12}>
          <Divider orientation="left">Tree example</Divider>
          <Tree
            showLine
            checkable
            defaultExpandedKeys={['0-0-0', '0-0-1']}
            defaultSelectedKeys={['0-0-0', '0-0-1']}
            defaultCheckedKeys={['0-0-0', '0-0-1']}
          >
            <TreeNode title="parent 1" key="0-0">
              <TreeNode title="parent 1-0" key="0-0-0" disabled>
                <TreeNode title="leaf" key="0-0-0-0" disableCheckbox />
                <TreeNode title="leaf" key="0-0-0-1" />
              </TreeNode>
              <TreeNode title="parent 1-1" key="0-0-1">
                <TreeNode
                  title={
                    <span
                      style={{
                        color: '#1890ff',
                      }}
                    >
                      sss
                    </span>
                  }
                  key="0-0-1-0"
                />
              </TreeNode>
            </TreeNode>
          </Tree>
        </Col>
      </Row>
      <br />
      <Row>
        <Col span={24}>
          <Divider orientation="left">Input (Input Group) example</Divider>
          <InputGroup size="large">
            <Row gutter={8}>
              <Col span={5}>
                <Input defaultValue="0571" />
              </Col>
              <Col span={8}>
                <Input defaultValue="26888888" />
              </Col>
            </Row>
          </InputGroup>
          <br />
          <InputGroup compact>
            <Input
              style={{
                width: '20%',
              }}
              defaultValue="0571"
            />
            <Input
              style={{
                width: '30%',
              }}
              defaultValue="26888888"
            />
          </InputGroup>
          <br />
          <InputGroup compact>
            <Select defaultValue="Option1">
              <Option value="Option1">Option1</Option>
              <Option value="Option2">Option2</Option>
            </Select>
            <Input
              style={{
                width: '50%',
              }}
              defaultValue="input content"
            />
            <InputNumber />
          </InputGroup>
          <br />
          <Search placeholder="input search text" enterButton="Search" size="large" />
          <br />
          <br />
          <div
            style={{
              marginBottom: 16,
            }}
          >
            <Input addonBefore={selectBefore} addonAfter={selectAfter} defaultValue="mysite" />
          </div>
          <br />
          <Row>
            <Col span={12}>
              <Divider orientation="left">Select example</Divider>
              <Select
                mode="multiple"
                defaultValue="\u0645\u0648\u0631\u0686\u0647"
                style={{
                  width: 120,
                }}
              >
                <Option value="jack">Jack</Option>
                <Option value="\u0645\u0648\u0631\u0686\u0647">\u0645\u0648\u0631\u0686\u0647</Option>
                <Option value="disabled" disabled>
                  Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
              <Select
                defaultValue="\u0645\u0648\u0631\u0686\u0647"
                style={{
                  width: 120,
                }}
                disabled
              >
                <Option value="\u0645\u0648\u0631\u0686\u0647">\u0645\u0648\u0631\u0686\u0647</Option>
              </Select>
              <Select
                defaultValue="\u0645\u0648\u0631\u0686\u0647"
                style={{
                  width: 120,
                }}
                loading
              >
                <Option value="\u0645\u0648\u0631\u0686\u0647">\u0645\u0648\u0631\u0686\u0647</Option>
              </Select>
              <Select
                showSearch
                style={{
                  width: 200,
                }}
                placeholder="Select a person"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option?.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
              >
                <Option value="jack">Jack</Option>
                <Option value="\u0633\u0639\u06CC\u062F">\u0633\u0639\u06CC\u062F</Option>
                <Option value="tom">Tom</Option>
              </Select>
            </Col>
            <Col span={12}>
              <Divider orientation="left">TreeSelect example</Divider>
              <div>
                <TreeSelect
                  showSearch
                  style={{
                    width: '100%',
                  }}
                  dropdownStyle={{
                    maxHeight: 400,
                    overflow: 'auto',
                  }}
                  placeholder="Please select"
                  allowClear
                  treeDefaultExpandAll
                >
                  <TreeNode title="parent 1" key="0-1">
                    <TreeNode title="parent 1-0" key="0-1-1">
                      <TreeNode title="my leaf" key="random" />
                      <TreeNode title="your leaf" key="random1" />
                    </TreeNode>
                    <TreeNode title="parent 1-1" key="random2">
                      <TreeNode
                        title={
                          <b
                            style={{
                              color: '#08c',
                            }}
                          >
                            sss
                          </b>
                        }
                        key="random3"
                      />
                    </TreeNode>
                  </TreeNode>
                </TreeSelect>
              </div>
            </Col>
          </Row>
          <br />
          <Row>
            <Col span={24}>
              <Divider orientation="left">Modal example</Divider>
              <div>
                <Button type="primary" onClick={showModal}>
                  Open Modal
                </Button>
                <Modal title="\u067E\u0646\u0686\u0631\u0647 \u0633\u0627\u062F\u0647" open={modalOpen} onOk={handleOk} onCancel={handleCancel}>
                  <p>\u0646\u06AF\u0627\u0634\u062A\u0647\u200C\u0647\u0627\u06CC \u062E\u0648\u062F \u0631\u0627 \u0627\u06CC\u0646\u062C\u0627 \u0642\u0631\u0627\u0631\u062F\u0647\u06CC\u062F</p>
                  <p>\u0646\u06AF\u0627\u0634\u062A\u0647\u200C\u0647\u0627\u06CC \u062E\u0648\u062F \u0631\u0627 \u0627\u06CC\u0646\u062C\u0627 \u0642\u0631\u0627\u0631\u062F\u0647\u06CC\u062F</p>
                  <p>\u0646\u06AF\u0627\u0634\u062A\u0647\u200C\u0647\u0627\u06CC \u062E\u0648\u062F \u0631\u0627 \u0627\u06CC\u0646\u062C\u0627 \u0642\u0631\u0627\u0631\u062F\u0647\u06CC\u062F</p>
                </Modal>
              </div>
            </Col>
          </Row>
          <br />
          <Row>
            <Col span={24}>
              <Divider orientation="left">Steps example</Divider>
              <div>
                <Steps
                  progressDot
                  current={currentStep}
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
                <br />
                <Steps
                  current={currentStep}
                  onChange={onStepsChange}
                  items={[
                    {
                      title: 'Step 1',
                      description: 'This is a description.',
                    },
                    {
                      title: 'Step 2',
                      description: 'This is a description.',
                    },
                    {
                      title: 'Step 3',
                      description: 'This is a description.',
                    },
                  ]}
                />
              </div>
            </Col>
          </Row>
          <br />
          <Row>
            <Col span={12}>
              <Divider orientation="left">Rate example</Divider>
              <div>
                <Rate defaultValue={2.5} />
                <br />
                <strong>* Note:</strong> Half star not implemented in RTL direction, it will be
                supported after <a href="https://github.com/react-component/rate">rc-rate</a>{' '}
                implement rtl support.
              </div>
            </Col>
            <Col span={12}>
              <Divider orientation="left">Badge example</Divider>
              <div>
                <div>
                  <Badge count={badgeCount}>
                    <a href="#" className="head-example" />
                  </Badge>
                  <ButtonGroup>
                    <Button onClick={declineBadge}>
                      <MinusOutlined />
                    </Button>
                    <Button onClick={increaseBadge}>
                      <PlusOutlined />
                    </Button>
                  </ButtonGroup>
                </div>
                <div
                  style={{
                    marginTop: 10,
                  }}
                >
                  <Badge dot={showBadge}>
                    <a href="#" className="head-example" />
                  </Badge>
                  <Switch onChange={onChangeBadge} checked={showBadge} />
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      <br />
      <br />
      <Row>
        <Col span={24}>
          <Divider orientation="left">Pagination example</Divider>
          <Pagination showSizeChanger defaultCurrent={3} total={500} />
        </Col>
      </Row>
      <br />
      <Row>
        <Col span={24}>
          <Divider orientation="left">Grid System example</Divider>
          <div className="grid-demo">
            <div className="code-box-demo">
              <p>
                <strong>* Note:</strong> Every calculation in RTL grid system is from right side
                (offset, push, etc.)
              </p>
              <Row>
                <Col span={8}>col-8</Col>
                <Col span={8} offset={8}>
                  col-8
                </Col>
              </Row>
              <Row>
                <Col span={6} offset={6}>
                  col-6 col-offset-6
                </Col>
                <Col span={6} offset={6}>
                  col-6 col-offset-6
                </Col>
              </Row>
              <Row>
                <Col span={12} offset={6}>
                  col-12 col-offset-6
                </Col>
              </Row>
              <Row>
                <Col span={18} push={6}>
                  col-18 col-push-6
                </Col>
                <Col span={6} pull={18}>
                  col-6 col-pull-18
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
const App = () => {
  const [direction, setDirection] = useState('ltr');
  const [popupPlacement, setPopupPlacement] = useState('bottomLeft');
  const changeDirection = (e) => {
    const directionValue = e.target.value;
    setDirection(directionValue);
    if (directionValue === 'rtl') {
      setPopupPlacement('bottomRight');
    } else {
      setPopupPlacement('bottomLeft');
    }
  };
  return (
    <>
      <div
        style={{
          marginBottom: 16,
        }}
      >
        <span
          style={{
            marginRight: 16,
          }}
        >
          Change direction of components:{' '}
        </span>
        <Radio.Group defaultValue="ltr" onChange={changeDirection}>
          <Radio.Button key="ltr" value="ltr">
            LTR
          </Radio.Button>
          <Radio.Button key="rtl" value="rtl">
            RTL
          </Radio.Button>
        </Radio.Group>
      </div>
      <ConfigProvider direction={direction}>
        <Page popupPlacement={popupPlacement} />
      </ConfigProvider>
    </>
  );
};
export default App;
`,description:"<p>\u8FD9\u91CC\u5217\u51FA\u4E86\u652F\u6301 <code>rtl</code> \u65B9\u5411\u7684\u7EC4\u4EF6\uFF0C\u60A8\u53EF\u4EE5\u5728\u6F14\u793A\u4E2D\u5207\u6362\u65B9\u5411\u3002</p>",style:`.button-demo .ant-btn,
.button-demo .ant-btn-group {
  margin-right: 8px;
  margin-bottom: 12px;
}
.button-demo .ant-btn-group > .ant-btn,
.button-demo .ant-btn-group > span > .ant-btn {
  margin-right: 0;
  margin-left: 0;
}

.head-example {
  display: inline-block;
  width: 42px;
  height: 42px;
  vertical-align: middle;
  background: #eee;
  border-radius: 4px;
}

.ant-badge:not(.ant-badge-not-a-wrapper) {
  margin-right: 20px;
}
.ant-badge-rtl:not(.ant-badge-not-a-wrapper) {
  margin-right: 0;
  margin-left: 20px;
}`}},{demo:{id:"components-config-provider-demo-size"},previewerProps:{title:"\u7EC4\u4EF6\u5C3A\u5BF8",filename:"components/config-provider/demo/size.tsx",jsx:`import React, { useState } from 'react';
import {
  Button,
  Card,
  ConfigProvider,
  DatePicker,
  Divider,
  Input,
  Radio,
  Select,
  Table,
  Tabs,
} from 'antd';
const { TabPane } = Tabs;
const App = () => {
  const [componentSize, setComponentSize] = useState('small');
  return (
    <div>
      <Radio.Group
        value={componentSize}
        onChange={(e) => {
          setComponentSize(e.target.value);
        }}
      >
        <Radio.Button value="small">Small</Radio.Button>
        <Radio.Button value="middle">Middle</Radio.Button>
        <Radio.Button value="large">Large</Radio.Button>
      </Radio.Group>
      <Divider />
      <ConfigProvider componentSize={componentSize}>
        <div className="example">
          <Input />
        </div>
        <div className="example">
          <Tabs defaultActiveKey="1">
            <TabPane tab="Tab 1" key="1">
              Content of Tab Pane 1
            </TabPane>
            <TabPane tab="Tab 2" key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Tab 3" key="3">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
        </div>
        <div className="example">
          <Input.Search allowClear />
        </div>
        <div className="example">
          <Input.TextArea allowClear />
        </div>
        <div className="example">
          <Select
            defaultValue="demo"
            options={[
              {
                value: 'demo',
              },
            ]}
          />
        </div>
        <div className="example">
          <DatePicker />
        </div>
        <div className="example">
          <DatePicker.RangePicker />
        </div>
        <div className="example">
          <Button>Button</Button>
        </div>
        <div className="example">
          <Card title="Card">
            <Table
              columns={[
                {
                  title: 'Name',
                  dataIndex: 'name',
                },
                {
                  title: 'Age',
                  dataIndex: 'age',
                },
              ]}
              dataSource={[
                {
                  key: '1',
                  name: 'John Brown',
                  age: 32,
                },
                {
                  key: '2',
                  name: 'Jim Green',
                  age: 42,
                },
                {
                  key: '3',
                  name: 'Joe Black',
                  age: 32,
                },
              ]}
            />
          </Card>
        </div>
      </ConfigProvider>
    </div>
  );
};
export default App;
`,description:"<p>\u4FEE\u6539\u9ED8\u8BA4\u7EC4\u4EF6\u5C3A\u5BF8\u3002</p>"}},{demo:{id:"components-config-provider-demo-theme"},previewerProps:{title:"\u4E3B\u9898",filename:"components/config-provider/demo/theme.tsx",jsx:`import React, { useState } from 'react';
import {
  ClockCircleOutlined,
  DownOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import {
  Alert,
  Button,
  Card,
  Checkbox,
  Col,
  ConfigProvider,
  DatePicker,
  Divider,
  Dropdown,
  Form,
  Input,
  InputNumber,
  Mentions,
  Menu,
  Pagination,
  Progress,
  Radio,
  Row,
  Select,
  Slider,
  Space,
  Spin,
  Steps,
  Switch,
  Table,
  Tabs,
  Tag,
  Timeline,
  TimePicker,
  Transfer,
  Tree,
  TreeSelect,
  Typography,
} from 'antd';
import { SketchPicker } from 'react-color';
const SplitSpace = (props) => <Space split={<Divider type="vertical" />} size={4} {...props} />;
const menuItems = [
  {
    key: 'mail',
    icon: <MailOutlined />,
    label: 'Mail',
  },
  {
    key: 'SubMenu',
    icon: <SettingOutlined />,
    label: 'Submenu',
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            key: 'setting:1',
            label: 'Option 1',
          },
          {
            key: 'setting:2',
            label: 'Option 2',
          },
        ],
      },
    ],
  },
];
const inputProps = {
  style: {
    width: 128,
  },
};
const selectProps = {
  ...inputProps,
  options: [
    {
      value: 'light',
      label: 'Light',
    },
    {
      value: 'bamboo',
      label: 'Bamboo',
    },
    {
      value: 'little',
      label: 'Little',
    },
  ],
};
const treeData = [
  {
    value: 'little',
    key: 'little',
    label: 'Little',
    title: 'Little',
    children: [
      {
        value: 'light',
        key: 'light',
        label: 'Light',
        title: 'Light',
      },
      {
        value: 'bamboo',
        key: 'bamboo',
        label: 'Bamboo',
        title: 'Bamboo',
      },
    ],
  },
];
const treeSelectProps = {
  ...inputProps,
  treeCheckable: true,
  maxTagCount: 'responsive',
  treeData,
};
const carTabListNoTitle = [
  {
    key: 'article',
    tab: 'article',
  },
  {
    key: 'app',
    tab: 'app',
  },
  {
    key: 'project',
    tab: 'project',
  },
];
const MyTransfer = () => {
  const mockData = [];
  for (let i = 0; i < 20; i++) {
    mockData.push({
      key: i.toString(),
      title: \`content\${i + 1}\`,
      description: \`description of content\${i + 1}\`,
    });
  }
  return (
    <Transfer
      dataSource={mockData}
      targetKeys={['18']}
      selectedKeys={['3']}
      render={(item) => item.title}
    />
  );
};
const App = () => {
  const [color, setColor] = useState({
    primaryColor: '#1890ff',
    errorColor: '#ff4d4f',
    warningColor: '#faad14',
    successColor: '#52c41a',
    infoColor: '#1890ff',
  });
  const onColorChange = (nextColor) => {
    const mergedNextColor = {
      ...color,
      ...nextColor,
    };
    setColor(mergedNextColor);
    ConfigProvider.config({
      theme: mergedNextColor,
    });
  };
  return (
    <Row gutter={16} wrap={false}>
      <Col flex="none">
        <Space direction="vertical" align="center">
          {/* Primary Color */}
          <SketchPicker
            presetColors={['#1890ff', '#25b864', '#ff6f00']}
            color={color.primaryColor}
            onChange={({ hex }) => {
              onColorChange({
                primaryColor: hex,
              });
            }}
          />

          <span
            style={{
              color: 'var(--ant-primary-color)',
            }}
          >
            var(\`--ant-primary-color\`)
          </span>

          {/* Error Color */}
          <SketchPicker
            presetColors={['#ff4d4f']}
            color={color.errorColor}
            onChange={({ hex }) => {
              onColorChange({
                errorColor: hex,
              });
            }}
          />

          <span
            style={{
              color: 'var(--ant-error-color)',
            }}
          >
            var(\`--ant-error-color\`)
          </span>

          {/* Warning Color */}
          <SketchPicker
            presetColors={['#faad14']}
            color={color.warningColor}
            onChange={({ hex }) => {
              onColorChange({
                warningColor: hex,
              });
            }}
          />

          <span
            style={{
              color: 'var(--ant-warning-color)',
            }}
          >
            var(\`--ant-warning-color\`)
          </span>

          {/* Success Color */}
          <SketchPicker
            presetColors={['#52c41a']}
            color={color.successColor}
            onChange={({ hex }) => {
              onColorChange({
                successColor: hex,
              });
            }}
          />

          <span
            style={{
              color: 'var(--ant-success-color)',
            }}
          >
            var(\`--ant-success-color\`)
          </span>

          {/* Info Color */}
          <SketchPicker
            presetColors={['#1890ff']}
            color={color.infoColor}
            onChange={({ hex }) => {
              onColorChange({
                infoColor: hex,
              });
            }}
          />

          <span
            style={{
              color: 'var(--ant-info-color)',
            }}
          >
            var(\`--ant-info-color\`)
          </span>
        </Space>
      </Col>

      <Col flex="auto">
        <Space
          direction="vertical"
          split={<Divider />}
          style={{
            width: '100%',
          }}
          size={0}
        >
          {/* Primary Button */}
          <SplitSpace>
            <Button type="primary">Primary</Button>
            <Button>Default</Button>
            <Button type="dashed">Dashed</Button>
            <Button type="text">Text</Button>
            <Button type="link">Link</Button>
          </SplitSpace>

          {/* Danger Button */}
          <SplitSpace>
            <Button danger type="primary">
              Primary
            </Button>
            <Button danger>Default</Button>
            <Button danger type="dashed">
              Dashed
            </Button>
            <Button danger type="text">
              Text
            </Button>
            <Button danger type="link">
              Link
            </Button>
          </SplitSpace>

          {/* Ghost Button */}
          <SplitSpace
            style={{
              background: 'rgb(190, 200, 200)',
            }}
          >
            <Button type="primary" ghost>
              Primary
            </Button>
            <Button ghost>Default</Button>
            <Button type="dashed" ghost>
              Dashed
            </Button>
            <Button type="primary" ghost danger>
              Primary
            </Button>
            <Button ghost danger>
              Default
            </Button>
            <Button type="dashed" ghost danger>
              Dashed
            </Button>
          </SplitSpace>

          {/* Typography */}
          <SplitSpace>
            <Typography.Text type="success">Text (success)</Typography.Text>
            <Typography.Text type="warning">Text(warning)</Typography.Text>
            <Typography.Text type="danger">Text(danger)</Typography.Text>
            <Typography.Link href="https://ant.design" target="_blank">
              Link
            </Typography.Link>
            <Typography.Text copyable>Text</Typography.Text>

            {/* Dropdown */}
            <Dropdown
              menu={{
                items: [
                  {
                    key: '1',
                    label: '1st menu item',
                  },
                  {
                    key: '2',
                    label: 'a danger item',
                    danger: true,
                  },
                ],
              }}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Hover me
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>

            {/* Spin */}
            <Spin />
          </SplitSpace>

          {/* Menu - horizontal */}
          <Row gutter={16}>
            <Col span={12}>
              <Menu mode="horizontal" defaultSelectedKeys={['mail']} items={menuItems} />
            </Col>
            <Col span={12}>
              <Menu
                mode="horizontal"
                theme="dark"
                defaultSelectedKeys={['mail']}
                items={menuItems}
              />
            </Col>
          </Row>

          {/* Menu - vertical */}
          <Row gutter={16}>
            <Col span={12}>
              <Menu mode="inline" defaultSelectedKeys={['mail']} items={menuItems} />
            </Col>
            <Col span={12}>
              <Menu mode="vertical" theme="dark" defaultSelectedKeys={['mail']} items={menuItems} />
            </Col>
          </Row>

          {/* Pagination */}
          <Pagination showQuickJumper defaultCurrent={2} total={500} />

          {/* Steps */}
          <Steps
            current={1}
            percent={60}
            items={[
              {
                title: 'Finished',
                description: 'This is a description.',
              },
              {
                title: 'In Progress',
                subTitle: 'Left 00:00:08',
                description: 'This is a description.',
              },
              {
                title: 'Waiting',
                description: 'This is a description.',
              },
            ]}
          />

          {/* Steps - dot */}
          <Steps
            current={2}
            status="error"
            progressDot
            items={[
              {
                title: 'Finished',
                description: 'You can hover on the dot.',
              },
              {
                title: 'In Progress',
                description: 'You can hover on the dot.',
              },
              {
                title: 'Error',
                description: 'You can hover on the dot.',
              },
              {
                title: 'Waiting',
                description: 'You can hover on the dot.',
              },
            ]}
          />

          {/* Form - Input */}
          <Form>
            <SplitSpace>
              <Form.Item>
                <Input {...inputProps} />
              </Form.Item>
              <Form.Item hasFeedback validateStatus="success">
                <Input {...inputProps} />
              </Form.Item>
              <Form.Item hasFeedback validateStatus="warning">
                <Input {...inputProps} />
              </Form.Item>
              <Form.Item hasFeedback validateStatus="error">
                <Input {...inputProps} />
              </Form.Item>
              <Form.Item hasFeedback validateStatus="validating">
                <Input {...inputProps} />
              </Form.Item>
            </SplitSpace>
          </Form>

          {/* Form - Select */}
          <Form>
            <SplitSpace>
              <Form.Item>
                <Select {...selectProps} />
              </Form.Item>
              <Form.Item hasFeedback validateStatus="success">
                <Select {...selectProps} />
              </Form.Item>
              <Form.Item hasFeedback validateStatus="warning">
                <Select {...selectProps} />
              </Form.Item>
              <Form.Item hasFeedback validateStatus="error">
                <Select {...selectProps} />
              </Form.Item>
              <Form.Item hasFeedback validateStatus="validating">
                <Select {...selectProps} />
              </Form.Item>
            </SplitSpace>
          </Form>

          {/* Form - TreeSelect */}
          <Form>
            <SplitSpace>
              <Form.Item>
                <TreeSelect {...treeSelectProps} />
              </Form.Item>
              <Form.Item hasFeedback validateStatus="success">
                <TreeSelect {...treeSelectProps} />
              </Form.Item>
              <Form.Item hasFeedback validateStatus="warning">
                <TreeSelect {...treeSelectProps} />
              </Form.Item>
              <Form.Item hasFeedback validateStatus="error">
                <TreeSelect {...treeSelectProps} />
              </Form.Item>
              <Form.Item hasFeedback validateStatus="validating">
                <TreeSelect {...treeSelectProps} />
              </Form.Item>
            </SplitSpace>
          </Form>

          {/* Form - InputNumber */}
          <Form>
            <SplitSpace>
              <Form.Item>
                <InputNumber />
              </Form.Item>
              <Form.Item hasFeedback validateStatus="success">
                <InputNumber />
              </Form.Item>
              <Form.Item hasFeedback validateStatus="warning">
                <InputNumber />
              </Form.Item>
              <Form.Item hasFeedback validateStatus="error">
                <InputNumber />
              </Form.Item>
              <Form.Item hasFeedback validateStatus="validating">
                <InputNumber />
              </Form.Item>
            </SplitSpace>
          </Form>

          {/* Form - DatePicker */}
          <Form>
            <SplitSpace>
              <Form.Item>
                <DatePicker />
              </Form.Item>
              <Form.Item hasFeedback validateStatus="success">
                <DatePicker />
              </Form.Item>
              <Form.Item hasFeedback validateStatus="warning">
                <DatePicker />
              </Form.Item>
              <Form.Item hasFeedback validateStatus="error">
                <DatePicker />
              </Form.Item>
              <Form.Item hasFeedback validateStatus="validating">
                <DatePicker />
              </Form.Item>
            </SplitSpace>
          </Form>

          <SplitSpace>
            <Checkbox>Checkbox</Checkbox>

            <Radio.Group defaultValue="bamboo">
              <Radio value="bamboo">Bamboo</Radio>
              <Radio value="light">Light</Radio>
              <Radio value="little">Little</Radio>
            </Radio.Group>

            <Mentions placeholder="Mention by @">
              <Mentions.Option value="afc163">afc163</Mentions.Option>
              <Mentions.Option value="zombieJ">zombieJ</Mentions.Option>
              <Mentions.Option value="yesmeck">yesmeck</Mentions.Option>
            </Mentions>

            <Slider
              defaultValue={30}
              style={{
                width: 100,
              }}
            />

            <Switch defaultChecked />
          </SplitSpace>

          <SplitSpace>
            <DatePicker.RangePicker />
            <TimePicker.RangePicker />
          </SplitSpace>

          <Row gutter={16}>
            <Col span={8}>
              {/* Card */}
              <Card
                style={{
                  width: '100%',
                }}
                tabList={carTabListNoTitle}
                tabBarExtraContent={<a href="#">More</a>}
              />
            </Col>
            <Col span={8}>
              {/* Table */}
              <Table
                size="small"
                bordered
                rowSelection={{}}
                columns={[
                  {
                    title: 'Key',
                    dataIndex: 'key',
                    filters: [
                      {
                        text: 'Little',
                        value: 'little',
                      },
                    ],
                    sorter: (a, b) => a.key.length - b.key.length,
                  },
                ]}
                dataSource={[
                  {
                    key: 'Bamboo',
                  },
                  {
                    key: 'Light',
                  },
                  {
                    key: 'Little',
                  },
                ]}
              />
            </Col>
            <Col span={8}>
              {/* Table */}
              <Tabs defaultActiveKey="1">
                <Tabs.TabPane tab="Tab 1" key="1">
                  Content of Tab Pane 1
                </Tabs.TabPane>
                <Tabs.TabPane tab="Tab 2" key="2">
                  Content of Tab Pane 2
                </Tabs.TabPane>
                <Tabs.TabPane tab="Tab 3" key="3">
                  Content of Tab Pane 3
                </Tabs.TabPane>
              </Tabs>
            </Col>
          </Row>

          <SplitSpace>
            <Tag color="success">success</Tag>
            <Tag color="processing">processing</Tag>
            <Tag color="error">error</Tag>
            <Tag color="warning">warning</Tag>
            <Tag color="default">default</Tag>
            <Tag.CheckableTag checked>CheckableTag</Tag.CheckableTag>
          </SplitSpace>

          <Row gutter={16}>
            <Col span={16}>
              <Timeline mode="alternate">
                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item color="gray">
                  Solve initial network problems 2015-09-01
                </Timeline.Item>
                <Timeline.Item
                  dot={
                    <ClockCircleOutlined
                      style={{
                        fontSize: '16px',
                      }}
                    />
                  }
                >
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                  veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </Timeline.Item>
              </Timeline>
            </Col>

            <Col span={8}>
              <Tree treeData={treeData} height={200} defaultExpandAll checkable />
            </Col>
          </Row>

          {/* Alert */}
          <Row gutter={16}>
            <Col span={6}>
              <Alert showIcon message="Success Text" type="success" />
            </Col>
            <Col span={6}>
              <Alert showIcon message="Info Text" type="info" />
            </Col>
            <Col span={6}>
              <Alert showIcon message="Warning Text" type="warning" />
            </Col>
            <Col span={6}>
              <Alert showIcon message="Error Text" type="error" />
            </Col>
          </Row>

          {/* Progress */}
          <Row gutter={16}>
            <Col flex="auto">
              <Progress percent={30} />
              <Progress percent={70} status="exception" />
              <Progress percent={100} />
            </Col>
            <Col flex="none">
              <Progress type="circle" percent={75} />
              <Progress type="circle" percent={70} status="exception" />
              <Progress type="circle" percent={100} />
            </Col>
          </Row>

          <MyTransfer />
        </Space>
      </Col>
    </Row>
  );
};
export default App;
`,description:'<p>\u901A\u8FC7 css variable \u4FEE\u6539\u5168\u5C40\u4E3B\u9898\u8272\uFF08\u4F60\u53EF\u4EE5\u5207\u6362\u5230\u7EC4\u4EF6\u9875\u9762\u67E5\u770B\u66F4\u8BE6\u7EC6\u7684\u6837\u5F0F\u5C55\u793A\uFF09\uFF0C\u4E0D\u652F\u6301 IE\u3002\u81EA\u52A8\u751F\u6210\u7684\u53D8\u91CF\u53EF\u80FD\u4F1A\u6839\u636E\u8BBE\u8BA1\u8C03\u6574\uFF0C\u8BF7\u52FF\u76F4\u63A5\u4F9D\u8D56\u3002\u8BE6\u7EC6\u914D\u7F6E\u8BF7<a href="/docs/react/customize-theme-variable">\u70B9\u51FB\u67E5\u770B</a>\u3002</p>'}},{demo:{id:"components-config-provider-demo-prefixcls"},previewerProps:{debug:!0,title:"\u524D\u7F00",filename:"components/config-provider/demo/prefixCls.tsx",jsx:`import React, { useState } from 'react';
import { SmileOutlined } from '@ant-design/icons';
import { Button, ConfigProvider, Select } from 'antd';

// Ant Design site use \`es\` module for view
// but do not replace related lib \`lib\` with \`es\`
// which do not show correct in site.
// We may need do convert in site also.
const App = () => {
  const [prefixCls, setPrefixCls] = useState('light');
  return (
    <div>
      <Button
        style={{
          marginBottom: '12px',
        }}
        type="primary"
        onClick={() => setPrefixCls('dark')}
      >
        toggle prefixCls
      </Button>
      <div>
        <ConfigProvider prefixCls={prefixCls} iconPrefixCls="bamboo">
          <SmileOutlined />
          <Select />
        </ConfigProvider>
      </div>
    </div>
  );
};
export default App;
`,description:"<p>\u4FEE\u6539\u7EC4\u4EF6\u548C\u56FE\u6807\u524D\u7F00\u3002</p>"}}]}),(0,n.tZ)("div",{className:"markdown"},(0,n.tZ)("h2",{id:"api"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,n.tZ)("span",{className:"icon icon-link"})),"API"),(0,n.tZ)(i.Z,null,(0,n.tZ)("thead",null,(0,n.tZ)("tr",null,(0,n.tZ)("th",null,e[9].value),(0,n.tZ)("th",null,e[10].value),(0,n.tZ)("th",null,e[11].value),(0,n.tZ)("th",null,e[12].value),(0,n.tZ)("th",null,e[13].value))),(0,n.tZ)("tbody",null,(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[14].value),(0,n.tZ)("td",null,e[15].value,(0,n.tZ)("code",null,e[16].value),e[17].value),(0,n.tZ)("td",null,e[18].value),(0,n.tZ)("td",null,e[19].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[20].value),(0,n.tZ)("td",null,e[21].value),(0,n.tZ)("td",null,e[22].value),(0,n.tZ)("td",null,e[23].value),(0,n.tZ)("td",null,e[24].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[25].value),(0,n.tZ)("td",null,e[26].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,e[27].value),e[28].value,(0,n.tZ)("code",null,e[29].value),e[30].value,(0,n.tZ)("code",null,e[31].value)),(0,n.tZ)("td",null,e[32].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[33].value),(0,n.tZ)("td",null,e[34].value,(0,n.tZ)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP"},e[35].value),e[36].value),(0,n.tZ)("td",null,e[37].value),(0,n.tZ)("td",null,e[38].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[39].value),(0,n.tZ)("td",null,e[40].value,(0,n.tZ)(o.rU,{to:"#components-config-provider-demo-direction"},e[41].value)),(0,n.tZ)("td",null,(0,n.tZ)("code",null,e[42].value),e[43].value,(0,n.tZ)("code",null,e[44].value)),(0,n.tZ)("td",null,(0,n.tZ)("code",null,e[45].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[46].value),(0,n.tZ)("td",null,e[47].value,(0,n.tZ)("code",null,e[48].value),e[49].value,(0,n.tZ)("code",null,e[50].value),e[51].value),(0,n.tZ)("td",null,e[52].value),(0,n.tZ)("td",null,e[53].value),(0,n.tZ)("td",null,e[54].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[55].value),(0,n.tZ)("td",null,e[56].value),(0,n.tZ)("td",null,e[57].value,(0,n.tZ)(o.rU,{to:"/components/form/#validateMessages"},e[58].value),e[59].value,(0,n.tZ)("code",null,e[60].value),e[61].value),(0,n.tZ)("td",null,e[62].value),(0,n.tZ)("td",null,e[63].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[64].value),(0,n.tZ)("td",null,e[65].value),(0,n.tZ)("td",null,e[66].value),(0,n.tZ)("td",null,e[67].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[68].value),(0,n.tZ)("td",null,e[69].value),(0,n.tZ)("td",null,e[70].value),(0,n.tZ)("td",null,e[71].value),(0,n.tZ)("td",null,e[72].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[73].value),(0,n.tZ)("td",null,e[74].value,(0,n.tZ)("code",null,e[75].value),e[76].value,(0,n.tZ)("a",{href:"https://github.com/ant-design/ant-design/blob/d943b85a523bdf181dabc12c928226f3b4b893de/components/style/themes/default.less#L106"},e[77].value),e[78].value),(0,n.tZ)("td",null,e[79].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,e[80].value)),(0,n.tZ)("td",null,e[81].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[82].value),(0,n.tZ)("td",null,e[83].value),(0,n.tZ)("td",null,e[84].value),(0,n.tZ)("td",null,e[85].value),(0,n.tZ)("td",null,e[86].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[87].value),(0,n.tZ)("td",null,e[88].value,(0,n.tZ)("a",{href:"http://unpkg.com/antd/locale/"},e[89].value),e[90].value),(0,n.tZ)("td",null,e[91].value),(0,n.tZ)("td",null,e[92].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[93].value),(0,n.tZ)("td",null,e[94].value,(0,n.tZ)("code",null,e[95].value),e[96].value,(0,n.tZ)("a",{href:"https://github.com/ant-design/ant-design/blob/2c6c789e3a9356f96c47aea0083f5a15538315cf/components/style/themes/default.less#L7"},e[97].value),e[98].value),(0,n.tZ)("td",null,e[99].value),(0,n.tZ)("td",null,(0,n.tZ)("code",null,e[100].value)),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[101].value),(0,n.tZ)("td",null,e[102].value,(0,n.tZ)(o.rU,{to:"/components/empty/"},e[103].value)),(0,n.tZ)("td",null,e[104].value),(0,n.tZ)("td",null,e[105].value),(0,n.tZ)("td",null)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[106].value),(0,n.tZ)("td",null,e[107].value,(0,n.tZ)("code",null,e[108].value),e[109].value,(0,n.tZ)(o.rU,{to:"/components/space"},e[110].value)),(0,n.tZ)("td",null,e[111].value,(0,n.tZ)("code",null,e[112].value),e[113].value,(0,n.tZ)("code",null,e[114].value),e[115].value,(0,n.tZ)("code",null,e[116].value),e[117].value,(0,n.tZ)("code",null,e[118].value),e[119].value),(0,n.tZ)("td",null,e[120].value),(0,n.tZ)("td",null,e[121].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[122].value),(0,n.tZ)("td",null,e[123].value,(0,n.tZ)(o.rU,{to:"/docs/react/customize-theme-v5-cn"},e[124].value)),(0,n.tZ)("td",null,e[125].value),(0,n.tZ)("td",null,e[126].value),(0,n.tZ)("td",null,e[127].value)),(0,n.tZ)("tr",null,(0,n.tZ)("td",null,e[128].value),(0,n.tZ)("td",null,e[129].value,(0,n.tZ)("code",null,e[130].value),e[131].value),(0,n.tZ)("td",null,e[132].value),(0,n.tZ)("td",null,e[133].value),(0,n.tZ)("td",null,e[134].value)))),(0,n.tZ)("h3",{id:"configproviderconfig-4130"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#configproviderconfig-4130"},(0,n.tZ)("span",{className:"icon icon-link"})),"ConfigProvider.config() ",(0,n.tZ)("code",null,e[135].value)),(0,n.tZ)("p",null,e[136].value,(0,n.tZ)("code",null,e[137].value),e[138].value,(0,n.tZ)("code",null,e[139].value),e[140].value,(0,n.tZ)("code",null,e[141].value),e[142].value),(0,n.tZ)(a.Z,{lang:"jsx"},e[143].value),(0,n.tZ)("h2",{id:"faq"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#faq"},(0,n.tZ)("span",{className:"icon icon-link"})),"FAQ"),(0,n.tZ)("h4",{id:"\u5982\u4F55\u589E\u52A0\u4E00\u4E2A\u65B0\u7684\u8BED\u8A00\u5305"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5982\u4F55\u589E\u52A0\u4E00\u4E2A\u65B0\u7684\u8BED\u8A00\u5305"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u5982\u4F55\u589E\u52A0\u4E00\u4E2A\u65B0\u7684\u8BED\u8A00\u5305\uFF1F"),(0,n.tZ)("p",null,e[144].value,(0,n.tZ)(o.rU,{to:"/docs/react/i18n#%E5%A2%9E%E5%8A%A0%E8%AF%AD%E8%A8%80%E5%8C%85"},e[145].value),e[146].value),(0,n.tZ)("h4",{id:"\u4E3A\u4EC0\u4E48\u65F6\u95F4\u7C7B\u7EC4\u4EF6\u7684\u56FD\u9645\u5316-locale-\u8BBE\u7F6E\u4E0D\u751F\u6548"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4E3A\u4EC0\u4E48\u65F6\u95F4\u7C7B\u7EC4\u4EF6\u7684\u56FD\u9645\u5316-locale-\u8BBE\u7F6E\u4E0D\u751F\u6548"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u4E3A\u4EC0\u4E48\u65F6\u95F4\u7C7B\u7EC4\u4EF6\u7684\u56FD\u9645\u5316 locale \u8BBE\u7F6E\u4E0D\u751F\u6548\uFF1F"),(0,n.tZ)("p",null,e[147].value,(0,n.tZ)(o.rU,{to:"/docs/react/faq#%E4%B8%BA%E4%BB%80%E4%B9%88%E6%97%B6%E9%97%B4%E7%B1%BB%E7%BB%84%E4%BB%B6%E7%9A%84%E5%9B%BD%E9%99%85%E5%8C%96-locale-%E8%AE%BE%E7%BD%AE%E4%B8%8D%E7%94%9F%E6%95%88%EF%BC%9F"},e[148].value),e[149].value),(0,n.tZ)("h4",{id:"\u914D\u7F6E-getpopupcontainer-\u5BFC\u81F4-modal-\u62A5\u9519"},(0,n.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u914D\u7F6E-getpopupcontainer-\u5BFC\u81F4-modal-\u62A5\u9519"},(0,n.tZ)("span",{className:"icon icon-link"})),"\u914D\u7F6E ",(0,n.tZ)("code",null,e[150].value)," \u5BFC\u81F4 Modal \u62A5\u9519\uFF1F"),(0,n.tZ)("p",null,e[151].value,(0,n.tZ)("a",{href:"https://github.com/ant-design/ant-design/issues/19974"},e[152].value)),(0,n.tZ)("p",null,e[153].value,(0,n.tZ)("code",null,e[154].value),e[155].value,(0,n.tZ)("code",null,e[156].value),e[157].value,(0,n.tZ)("code",null,e[158].value),e[159].value,(0,n.tZ)("a",{href:"https://github.com/afc163/feedback-antd/commit/3e4d1ad1bc1a38460dc3bf3c56517f737fe7d44a"},e[160].value),e[161].value),(0,n.tZ)(a.Z,{lang:"diff"},e[162].value))))}l.default=d}}]);
