(window.webpackJsonp=window.webpackJsonp||[]).push([[218],{4086:function(e,n){e.exports={content:["article",["p","This document will help you upgrade from antd ",["code","4.x"]," version to antd ",["code","5.x"]," version. If you are using ",["code","3.x"]," or older version, please refer to the previous ",["a",{title:null,href:"/docs/react/migration-v4"},"upgrade document"]," to 4.x."],["h2","Upgrade preparation"],["ol",["li",["p","Please upgrade to the latest version of 4.x first, and remove / modify related APIs according to the console warning message."]]],["h2","Incompatible changes in v5"],["h3","Design specification"],["ul",["li",["p","Basic rounded corner adjustment, changed from ",["code","2px"]," to four layers of radius, which are ",["code","2px"]," ",["code","4px"]," ",["code","6px"]," and ",["code","8px"],". For example, radius of default Button is modified from ",["code","2px"]," to ",["code","6px"],"."]],["li",["p","Primary color adjustment, changed from ",["div",{style:"display: inline-block; width: 16px; height: 16px; border-radius: 4px; background: rgb(24, 144, 255); vertical-align: text-bottom;"}]," ",["code","#1890ff"]," to ",["div",{style:"display: inline-block; width: 16px; height: 16px; border-radius: 4px; background: rgb(22, 119, 255); vertical-align: text-bottom;"}]," ",["code","#1677ff"],"."]],["li",["p","Global shadow optimization, adjusted from three layers of shadows to two layers, which are used in common components (Card .e.g) and popup components (Dropdown .e.g)."]],["li",["p","Overall reduction in wireframe usage."]]],["h3","Technology adjustment"],["ul",["li",["p","Remove less, adopt CSS-in-JS, for better support of dynamic themes. The bottom layer uses ",["a",{title:null,href:"https://github.com/ant-design/cssinjs"},"@ant-design/cssinjs"]," as a solution."],["ul",["li",["p","All less files are removed, and less variables are no longer exported."]],["li",["p","Css files are no longer included in package. Since CSS-in-JS supports importing on demand, the original ",["code","antd/dist/antd.css"]," has also been abandoned. If you need to reset some basic styles, please import ",["code","antd/dist/reset.css"],"."]]]],["li",["p","Remove css variables and dynamic theme built on top of them."]],["li",["p","Remove ",["code","lib"],", only provide ",["code","dist"]," and ",["code","es"]," in package."]],["li",["p",["code","babel-plugin-import"]," is no longer supported. CSS-in-JS itself has the ability to import on demand, and plugin support is no longer required. Umi users can remove related configurations."]]],["pre",{lang:"diff",highlighted:`// config/config.ts
export default {
  antd: {
<span class="token deleted">-   import: true,</span>
  },
};`},["code",`// config/config.ts
export default {
  antd: {
-   import: true,
  },
};`]],["h3","Compatibility"],["ul",["li",["p","DO NOT support IE browser anymore."]]],["h4","Component API adjustment"],["ul",["li",["p","The classname API of the component popup box is unified to ",["code","popupClassName"],", and ",["code","dropdownClassName"]," and other similar APIs will be replaced."],["ul",["li",["p","AutoComplete"]],["li",["p","Cascader"]],["li",["p","Select"]],["li",["p","TreeSelect"]],["li",["p","TimePicker"]],["li",["p","DatePicker"]],["li",["p","Mentions"]]]]],["pre",{lang:"diff",highlighted:`  import { Select } from 'antd';

  const App: React.FC = () => (
    &lt;Select
<span class="token deleted">-     dropdownClassName="my-select-popup"</span>
<span class="token inserted">+     popupClassName="my-select-popup"</span>
    />
  );

  export default App;`},["code",`  import { Select } from 'antd';

  const App: React.FC = () => (
    <Select
-     dropdownClassName="my-select-popup"
+     popupClassName="my-select-popup"
    />
  );

  export default App;`]],["ul",["li",["p","The controlled visible API of the component popup is unified to ",["code","open"],", and ",["code","visible"]," and other similar APIs will be replaced."],["ul",["li",["p","Drawer ",["code","visible"]," changed to ",["code","open"],"."]],["li",["p","Modal ",["code","visible"]," changed to ",["code","open"],"."]],["li",["p","Dropdown ",["code","visible"]," changed to ",["code","open"],"."]],["li",["p","Tooltip ",["code","visible"]," changed to ",["code","open"],"."]],["li",["p","Tag ",["code","visible"]," is removed."]],["li",["p","Slider ",["code","tooltip"]," related API converged to ",["code","tooltip"]," property."]],["li",["p","Table ",["code","filterDropdownVisible"]," changed to ",["code","filterDropdownOpen"],"."]]]]],["pre",{lang:"diff",highlighted:`  import { Modal, Tag, Table, Slider } from 'antd';

  const App: React.FC = () => {
    const [visible, setVisible] = useState(true);

    return (
      &lt;>
<span class="token deleted">-       &lt;Modal visible={visible}>content&lt;/Modal></span>
<span class="token inserted">+       &lt;Modal open={visible}>content&lt;/Modal></span>

<span class="token deleted">-       &lt;Tag visible={visible}>tag&lt;/Tag></span>
<span class="token inserted">+       {visible &amp;&amp; &lt;Tag>tag&lt;/Tag>}</span>

        &lt;Table
          data={[]}
          columns={[
            {
              title: 'Name',
              dataIndex: 'name',
<span class="token deleted">-             filterDropdownVisible: visible,</span>
<span class="token inserted">+             filterDropdownOpen: visible,</span>
            }
          ]}
        />

<span class="token deleted">-       &lt;Slider tooltipVisible={visible} /></span>
<span class="token inserted">+       &lt;Slider tooltip={{ open: visible }} /></span>
      &lt;/>
    );
  }

  export default App;`},["code",`  import { Modal, Tag, Table, Slider } from 'antd';

  const App: React.FC = () => {
    const [visible, setVisible] = useState(true);

    return (
      <>
-       <Modal visible={visible}>content</Modal>
+       <Modal open={visible}>content</Modal>

-       <Tag visible={visible}>tag</Tag>
+       {visible && <Tag>tag</Tag>}

        <Table
          data={[]}
          columns={[
            {
              title: 'Name',
              dataIndex: 'name',
-             filterDropdownVisible: visible,
+             filterDropdownOpen: visible,
            }
          ]}
        />

-       <Slider tooltipVisible={visible} />
+       <Slider tooltip={{ open: visible }} />
      </>
    );
  }

  export default App;`]],["ul",["li",["p",["code","getPopupContainer"],": All ",["code","getPopupContainer"]," are guaranteed to return a unique div. This method will be called repeatedly under React 18 concurrent mode."]],["li",["p","Dropdown"],["ul",["li",["p","The style of the wrapper element has been removed, please use the Space component."]],["li",["p",["code","prefixCls"]," of Dropdown.Button changed to ",["code","dropdown"],"."]]]],["li",["p","Upload List structure changes."]],["li",["p","Notification"],["ul",["li",["p","Static methods are no longer allowed to dynamically set ",["code","prefixCls"]," ",["code","maxCount"]," ",["code","top"]," ",["code","bottom"]," ",["code","getContainer"]," in ",["code","open"],", Notification static methods will now have only one instance. If you need a different configuration, use ",["code","useNotification"],"."]],["li",["p",["code","close"]," was renamed to ",["code","destroy"]," to be consistent with message."]]]],["li",["p","Drawer"],["ul",["li",["p",["code","style"]," & ",["code","className"]," are migrated to Drawer Panel, the original properties are replaced by ",["code","rootClassName"]," and ",["code","rootStyle"],"."]]]]],["h4","Component refactoring and removal"],["ul",["li",["p","PageHeader and Comment components are removed in ant-design and moved to ",["a",{title:null,href:"https://github.com/ant-design/pro-components"},"pro-components"]," for maintenance. If you still need to use them, you can ",["a",{title:null,href:"/docs/react/migration-v5#Import-the-obsolete-PageHeader-and-Comment-components-via-@ant-design/compatible-package"},"import them from the compatible package"],"."]]],["pre",{lang:"diff",highlighted:`<span class="token deleted">- import { PageHeader, Comment, Input, Button } from 'antd';</span>
<span class="token inserted">+ import { PageHeader, Comment } from '@ant-design/compatible';</span>
<span class="token inserted">+ import '@ant-design/compatible/assets/index.css';</span>
<span class="token inserted">+ import { Input, Button } from 'antd';</span>

  const App: React.FC = () => (
    &lt;div>
      &lt;PageHeader />
      &lt;Comment />
    &lt;/div>
  );

  export default App;`},["code",`- import { PageHeader, Comment, Input, Button } from 'antd';
+ import { PageHeader, Comment } from '@ant-design/compatible';
+ import '@ant-design/compatible/assets/index.css';
+ import { Input, Button } from 'antd';

  const App: React.FC = () => (
    <div>
      <PageHeader />
      <Comment />
    </div>
  );

  export default App;`]],["ul",["li",["p","BackTop is deprecated in ",["code","5.0.0"],", and is merged into FloatButton."]]],["pre",{lang:"diff",highlighted:`<span class="token deleted">- import { BackTop } from 'antd';</span>
<span class="token inserted">+ import { FloatButton } from 'antd';</span>

  const App: React.FC = () => (
    &lt;div>
<span class="token deleted">-     &lt;BackTop /></span>
<span class="token inserted">+     &lt;FloatButton.BackTop /></span>
    &lt;/div>
  );

  export default App;`},["code",`- import { BackTop } from 'antd';
+ import { FloatButton } from 'antd';

  const App: React.FC = () => (
    <div>
-     <BackTop />
+     <FloatButton.BackTop />
    </div>
  );

  export default App;`]],["h2","Start upgrading"],["p","You can apply the changes mentioned above manually, and also we will provide codemod tool after released to help you upgrade."],["h2","Encounter problems"],["p","If you encounter problems during the upgrade, please go to ",["a",{title:null,href:"http://new-issue.ant.design/"},"GitHub issues"]," for feedback. We will respond and improve this document as soon as possible."]],meta:{order:8,title:"V4 to V5",filename:"docs/react/migration-v5.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Upgrade-preparation",title:"Upgrade preparation"},"Upgrade preparation"]],["li",["a",{className:"bisheng-toc-h2",href:"#Incompatible-changes-in-v5",title:"Incompatible changes in v5"},"Incompatible changes in v5"]],["li",["a",{className:"bisheng-toc-h2",href:"#Start-upgrading",title:"Start upgrading"},"Start upgrading"]],["li",["a",{className:"bisheng-toc-h2",href:"#Encounter-problems",title:"Encounter problems"},"Encounter problems"]]]}}}]);
