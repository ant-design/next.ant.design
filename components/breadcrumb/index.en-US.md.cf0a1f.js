(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{3912:function(s,o,a){s.exports={content:["section",["p","A breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy."],["h2","When To Use"],["ul",["li",["p","When the system has more than two layers in a hierarchy."]],["li",["p","When you need to inform the user of where they are."]],["li",["p","When the user may need to navigate back to a higher level."]]],["h3","Usage upgrade after 4.24.0"],function(){var t=a(0),u=a(64),p=e(a(518));function e(n){return n&&n.__esModule?n:{default:n}}return t.createElement(p.default,{message:"After version 4.24.0, we provide a simpler usage <Breadcrumb.Item menu={{ items: [...] }}> with better performance and potential of writing simpler code style in your applications. Meanwhile, we deprecated the old usage in browser console, we will remove it in antd 5.0."})},["pre",{lang:"jsx",highlighted:`<span class="token comment" spellcheck="true">// works when >=4.24.0, recommended \u2705</span>
<span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> label<span class="token punctuation">:</span> <span class="token string">'item 1'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'item-1'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// remember to pass the key prop</span>
  <span class="token punctuation">{</span> label<span class="token punctuation">:</span> <span class="token string">'item 2'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'item-2'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Breadcrumb</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Breadcrumb.Item</span> <span class="token attr-name">menu</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> items <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Ant Design<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Breadcrumb.Item</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Breadcrumb</span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment" spellcheck="true">// works when &lt;4.24.0, deprecated when >=4.24.0 \u{1F645}\u{1F3FB}\u200D\u2640\uFE0F</span>
<span class="token keyword">const</span> menu <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu.Item</span><span class="token punctuation">></span></span>item <span class="token number">1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu.Item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu.Item</span><span class="token punctuation">></span></span>item <span class="token number">2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu.Item</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Menu</span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Breadcrumb</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Breadcrumb.Item</span> <span class="token attr-name">overlay</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>menu<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Ant Design<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Breadcrumb.Item</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Breadcrumb</span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>`},["code",`// works when >=4.24.0, recommended \u2705
const items = [
  { label: 'item 1', key: 'item-1' }, // remember to pass the key prop
  { label: 'item 2', key: 'item-2' },
];
return (
  <Breadcrumb>
    <Breadcrumb.Item menu={{ items }}>Ant Design</Breadcrumb.Item>
  </Breadcrumb>
);

// works when <4.24.0, deprecated when >=4.24.0 \u{1F645}\u{1F3FB}\u200D\u2640\uFE0F
const menu = (
  <Menu>
    <Menu.Item>item 1</Menu.Item>
    <Menu.Item>item 2</Menu.Item>
  </Menu>
);
return (
  <Breadcrumb>
    <Breadcrumb.Item overlay={menu}>Ant Design</Breadcrumb.Item>
  </Breadcrumb>
);`]]],meta:{category:"Components",type:"Navigation",title:"Breadcrumb",cover:"https://gw.alipayobjects.com/zos/alicdn/9Ltop8JwH/Breadcrumb.svg",filename:"components/breadcrumb/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#When-To-Use",title:"When To Use"},"When To Use"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["h3","Breadcrumb"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","itemRender"],["td","Custom item renderer"],["td","(route, params, routes, paths) => ReactNode"],["td","-"],["td"]],["tr",["td","params"],["td","Routing parameters"],["td","object"],["td","-"],["td"]],["tr",["td","routes"],["td","The routing stack information of router"],["td",["a",{title:null,href:"#routes"},"routes","[","]"]],["td","-"],["td"]],["tr",["td","separator"],["td","Custom separator"],["td","ReactNode"],["td",["code","/"]],["td"]]]],["h3","Breadcrumb.Item"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","className"],["td","The additional css class"],["td","string"],["td","-"],["td"]],["tr",["td","dropdownProps"],["td","The dropdown props"],["td",["a",{title:null,href:"/components/dropdown"},"Dropdown"]],["td","-"],["td"]],["tr",["td","href"],["td","Target of hyperlink"],["td","string"],["td","-"],["td"]],["tr",["td","menu"],["td","The menu props"],["td",["a",{title:null,href:"/components/menu/#API"},"MenuProps"]],["td","-"],["td","4.24.0"]],["tr",["td","onClick"],["td","Set the handler to handle click event"],["td","(e:MouseEvent) => void"],["td","-"],["td"]]]],["h3","Breadcrumb.Separator"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","children"],["td","Custom separator"],["td","ReactNode"],["td",["code","/"]],["td"]]]],["blockquote",["p","When using ",["code","Breadcrumb.Separator"],",its parent component must be set to ",["code",'separator=""'],", otherwise the default separator of the parent component will appear."]],["h3","routes"],["pre",{lang:"ts",highlighted:`<span class="token keyword">interface</span> <span class="token class-name">Route</span> <span class="token punctuation">{</span>
  path<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>
  breadcrumbName<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>
  children<span class="token punctuation">:</span> <span class="token keyword">Array</span><span class="token operator">&lt;</span><span class="token punctuation">{</span>
    path<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>
    breadcrumbName<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>`},["code",`interface Route {
  path: string;
  breadcrumbName: string;
  children: Array<{
    path: string;
    breadcrumbName: string;
  }>;
}`]],["h3","Use with browserHistory"],["p","The link of Breadcrumb item targets ",["code","#"]," by default, you can use ",["code","itemRender"]," to make a ",["code","browserHistory"]," Link."],["pre",{lang:"jsx",highlighted:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Link <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-router'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    path<span class="token punctuation">:</span> <span class="token string">'index'</span><span class="token punctuation">,</span>
    breadcrumbName<span class="token punctuation">:</span> <span class="token string">'home'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    path<span class="token punctuation">:</span> <span class="token string">'first'</span><span class="token punctuation">,</span>
    breadcrumbName<span class="token punctuation">:</span> <span class="token string">'first'</span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        path<span class="token punctuation">:</span> <span class="token string">'/general'</span><span class="token punctuation">,</span>
        breadcrumbName<span class="token punctuation">:</span> <span class="token string">'General'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        path<span class="token punctuation">:</span> <span class="token string">'/layout'</span><span class="token punctuation">,</span>
        breadcrumbName<span class="token punctuation">:</span> <span class="token string">'Layout'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        path<span class="token punctuation">:</span> <span class="token string">'/navigation'</span><span class="token punctuation">,</span>
        breadcrumbName<span class="token punctuation">:</span> <span class="token string">'Navigation'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    path<span class="token punctuation">:</span> <span class="token string">'second'</span><span class="token punctuation">,</span>
    breadcrumbName<span class="token punctuation">:</span> <span class="token string">'second'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">itemRender</span><span class="token punctuation">(</span>route<span class="token punctuation">,</span> params<span class="token punctuation">,</span> routes<span class="token punctuation">,</span> paths<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> last <span class="token operator">=</span> routes<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>route<span class="token punctuation">)</span> <span class="token operator">===</span> routes<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> last <span class="token operator">?</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>route<span class="token punctuation">.</span>breadcrumbName<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Link</span> <span class="token attr-name">to</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>paths<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>route<span class="token punctuation">.</span>breadcrumbName<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Link</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Breadcrumb</span> <span class="token attr-name">itemRender</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>itemRender<span class="token punctuation">}</span></span> <span class="token attr-name">routes</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>routes<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>`},["code",`import { Link } from 'react-router';

const routes = [
  {
    path: 'index',
    breadcrumbName: 'home',
  },
  {
    path: 'first',
    breadcrumbName: 'first',
    children: [
      {
        path: '/general',
        breadcrumbName: 'General',
      },
      {
        path: '/layout',
        breadcrumbName: 'Layout',
      },
      {
        path: '/navigation',
        breadcrumbName: 'Navigation',
      },
    ],
  },
  {
    path: 'second',
    breadcrumbName: 'second',
  },
];
function itemRender(route, params, routes, paths) {
  const last = routes.indexOf(route) === routes.length - 1;
  return last ? (
    <span>{route.breadcrumbName}</span>
  ) : (
    <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
  );
}

return <Breadcrumb itemRender={itemRender} routes={routes} />;`]]]}}}]);
