(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{3908:function(t,n){t.exports={content:["section",["p","\u6309\u7167\u65E5\u5386\u5F62\u5F0F\u5C55\u793A\u6570\u636E\u7684\u5BB9\u5668\u3002"],["h2","\u4F55\u65F6\u4F7F\u7528"],["p","\u5F53\u6570\u636E\u662F\u65E5\u671F\u6216\u6309\u7167\u65E5\u671F\u5212\u5206\u65F6\uFF0C\u4F8B\u5982\u65E5\u7A0B\u3001\u8BFE\u8868\u3001\u4EF7\u683C\u65E5\u5386\u7B49\uFF0C\u519C\u5386\u7B49\u3002\u76EE\u524D\u652F\u6301\u5E74/\u6708\u5207\u6362\u3002"]],meta:{category:"Components",type:"\u6570\u636E\u5C55\u793A",subtitle:"\u65E5\u5386",cols:1,title:"Calendar",cover:"https://gw.alipayobjects.com/zos/antfincdn/dPQmLq08DI/Calendar.svg",filename:"components/calendar/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u4F55\u65F6\u4F7F\u7528",title:"\u4F55\u65F6\u4F7F\u7528"},"\u4F55\u65F6\u4F7F\u7528"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#FAQ",title:"FAQ"},"FAQ"]]],api:["section",["h2","API"],["p",["strong","\u6CE8\u610F\uFF1A"],"Calendar \u90E8\u5206 locale \u662F\u4ECE value \u4E2D\u8BFB\u53D6\uFF0C\u6240\u4EE5\u8BF7\u5148\u6B63\u786E\u8BBE\u7F6E dayjs \u7684 locale\u3002"],["pre",{lang:"jsx",highlighted:`<span class="token comment" spellcheck="true">// \u9ED8\u8BA4\u8BED\u8A00\u4E3A en-US\uFF0C\u6240\u4EE5\u5982\u679C\u9700\u8981\u4F7F\u7528\u5176\u4ED6\u8BED\u8A00\uFF0C\u63A8\u8350\u5728\u5165\u53E3\u6587\u4EF6\u5168\u5C40\u8BBE\u7F6E locale</span>
<span class="token comment" spellcheck="true">// import dayjs from 'dayjs';</span>
<span class="token comment" spellcheck="true">// import 'dayjs/locale/zh-cn';</span>
<span class="token comment" spellcheck="true">// dayjs.locale('zh-cn');</span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Calendar</span>
  <span class="token attr-name">dateCellRender</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>dateCellRender<span class="token punctuation">}</span></span>
  <span class="token attr-name">monthCellRender</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>monthCellRender<span class="token punctuation">}</span></span>
  <span class="token attr-name">onPanelChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onPanelChange<span class="token punctuation">}</span></span>
  <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onSelect<span class="token punctuation">}</span></span>
<span class="token punctuation">/></span></span>`},["code",`// \u9ED8\u8BA4\u8BED\u8A00\u4E3A en-US\uFF0C\u6240\u4EE5\u5982\u679C\u9700\u8981\u4F7F\u7528\u5176\u4ED6\u8BED\u8A00\uFF0C\u63A8\u8350\u5728\u5165\u53E3\u6587\u4EF6\u5168\u5C40\u8BBE\u7F6E locale
// import dayjs from 'dayjs';
// import 'dayjs/locale/zh-cn';
// dayjs.locale('zh-cn');

<Calendar
  dateCellRender={dateCellRender}
  monthCellRender={monthCellRender}
  onPanelChange={onPanelChange}
  onSelect={onSelect}
/>`]],["table",["thead",["tr",["th","\u53C2\u6570"],["th","\u8BF4\u660E"],["th","\u7C7B\u578B"],["th","\u9ED8\u8BA4\u503C"],["th","\u7248\u672C"]]],["tbody",["tr",["td","dateCellRender"],["td","\u81EA\u5B9A\u4E49\u6E32\u67D3\u65E5\u671F\u5355\u5143\u683C\uFF0C\u8FD4\u56DE\u5185\u5BB9\u4F1A\u88AB\u8FFD\u52A0\u5230\u5355\u5143\u683C"],["td","function(date: Dayjs): ReactNode"],["td","-"],["td"]],["tr",["td","dateFullCellRender"],["td","\u81EA\u5B9A\u4E49\u6E32\u67D3\u65E5\u671F\u5355\u5143\u683C\uFF0C\u8FD4\u56DE\u5185\u5BB9\u8986\u76D6\u5355\u5143\u683C"],["td","function(date: Dayjs): ReactNode"],["td","-"],["td"]],["tr",["td","defaultValue"],["td","\u9ED8\u8BA4\u5C55\u793A\u7684\u65E5\u671F"],["td",["a",{title:null,href:"https://day.js.org/"},"dayjs"]],["td","-"],["td"]],["tr",["td","disabledDate"],["td","\u4E0D\u53EF\u9009\u62E9\u7684\u65E5\u671F\uFF0C\u53C2\u6570\u4E3A\u5F53\u524D ",["code","value"],"\uFF0C\u6CE8\u610F\u4F7F\u7528\u65F6",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/30987"},"\u4E0D\u8981\u76F4\u63A5\u4FEE\u6539"]],["td","(currentDate: Dayjs) => boolean"],["td","-"],["td"]],["tr",["td","fullscreen"],["td","\u662F\u5426\u5168\u5C4F\u663E\u793A"],["td","boolean"],["td","true"],["td"]],["tr",["td","headerRender"],["td","\u81EA\u5B9A\u4E49\u5934\u90E8\u5185\u5BB9"],["td","function(object:{value: Dayjs, type: string, onChange: f(), onTypeChange: f()})"],["td","-"],["td"]],["tr",["td","locale"],["td","\u56FD\u9645\u5316\u914D\u7F6E"],["td","object"],["td",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json"},"(\u9ED8\u8BA4\u914D\u7F6E)"]],["td"]],["tr",["td","mode"],["td","\u521D\u59CB\u6A21\u5F0F"],["td",["code","month"]," ","|"," ",["code","year"]],["td",["code","month"]],["td"]],["tr",["td","monthCellRender"],["td","\u81EA\u5B9A\u4E49\u6E32\u67D3\u6708\u5355\u5143\u683C\uFF0C\u8FD4\u56DE\u5185\u5BB9\u4F1A\u88AB\u8FFD\u52A0\u5230\u5355\u5143\u683C"],["td","function(date: Dayjs): ReactNode"],["td","-"],["td"]],["tr",["td","monthFullCellRender"],["td","\u81EA\u5B9A\u4E49\u6E32\u67D3\u6708\u5355\u5143\u683C\uFF0C\u8FD4\u56DE\u5185\u5BB9\u8986\u76D6\u5355\u5143\u683C"],["td","function(date: Dayjs): ReactNode"],["td","-"],["td"]],["tr",["td","validRange"],["td","\u8BBE\u7F6E\u53EF\u4EE5\u663E\u793A\u7684\u65E5\u671F"],["td","[",["a",{title:null,href:"https://day.js.org/"},"dayjs"],", ",["a",{title:null,href:"https://day.js.org/"},"dayjs"],"]"],["td","-"],["td"]],["tr",["td","value"],["td","\u5C55\u793A\u65E5\u671F"],["td",["a",{title:null,href:"https://day.js.org/"},"dayjs"]],["td","-"],["td"]],["tr",["td","onChange"],["td","\u65E5\u671F\u53D8\u5316\u56DE\u8C03"],["td","function(date: Dayjs)"],["td","-"],["td"]],["tr",["td","onPanelChange"],["td","\u65E5\u671F\u9762\u677F\u53D8\u5316\u56DE\u8C03"],["td","function(date: Dayjs, mode: string)"],["td","-"],["td"]],["tr",["td","onSelect"],["td","\u70B9\u51FB\u9009\u62E9\u65E5\u671F\u56DE\u8C03"],["td","function(date: Dayjs\uFF09"],["td","-"],["td"]]]],["h2","FAQ"],["h3","\u5982\u4F55\u5728 Calendar \u4E2D\u4F7F\u7528\u81EA\u5B9A\u4E49\u65E5\u671F\u5E93"],["p","\u53C2\u8003 ",["a",{title:null,href:"/docs/react/use-custom-date-library#Calendar"},"\u4F7F\u7528\u81EA\u5B9A\u4E49\u65E5\u671F\u5E93"],"\u3002"],["h3","\u5982\u4F55\u7ED9\u65E5\u671F\u7C7B\u7EC4\u4EF6\u914D\u7F6E\u56FD\u9645\u5316\uFF1F"],["p","\u53C2\u8003 ",["a",{title:null,href:"/components/date-picker/#%E5%9B%BD%E9%99%85%E5%8C%96%E9%85%8D%E7%BD%AE"},"\u5982\u4F55\u7ED9\u65E5\u671F\u7C7B\u7EC4\u4EF6\u914D\u7F6E\u56FD\u9645\u5316"],"\u3002"],["h3","\u4E3A\u4EC0\u4E48\u65F6\u95F4\u7C7B\u7EC4\u4EF6\u7684\u56FD\u9645\u5316 locale \u8BBE\u7F6E\u4E0D\u751F\u6548\uFF1F"],["p","\u53C2\u8003 FAQ ",["a",{title:null,href:"/docs/react/faq#\u4E3A\u4EC0\u4E48\u65F6\u95F4\u7C7B\u7EC4\u4EF6\u7684\u56FD\u9645\u5316-locale-\u8BBE\u7F6E\u4E0D\u751F\u6548\uFF1F"},"\u4E3A\u4EC0\u4E48\u65F6\u95F4\u7C7B\u7EC4\u4EF6\u7684\u56FD\u9645\u5316 locale \u8BBE\u7F6E\u4E0D\u751F\u6548\uFF1F"],"\u3002"]]}}}]);
