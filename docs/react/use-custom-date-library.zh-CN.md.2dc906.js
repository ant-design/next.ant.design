(window.webpackJsonp=window.webpackJsonp||[]).push([[225],{4098:function(e,n){e.exports={content:["article",["p","Ant Design \u9ED8\u8BA4\u4F7F\u7528 ",["a",{title:null,href:"https://day.js.org"},"Day.js"]," \u6765\u5904\u7406\u65F6\u95F4\u65E5\u671F\u95EE\u9898\u3002Day.js \u76F8\u6BD4\u4E8E moment \u4F7F\u7528\u4E86\u4E0D\u53EF\u53D8\u6570\u636E\u7ED3\u6784\uFF0C\u6027\u80FD\u66F4\u5FEB\uFF0C\u4F53\u79EF\u4EC5 2KB\uFF0CAPI \u8BBE\u8BA1\u5B8C\u5168\u4E00\u81F4\u3002\u4F60\u53EF\u4EE5\u5F88\u65B9\u4FBF\u7684\u6539\u7528\u5176\u4ED6\u81EA\u5B9A\u4E49\u65E5\u671F\u5E93\u5982\uFF08",["a",{title:null,href:"http://momentjs.com/"},"moment"],"\u3001",["a",{title:null,href:"https://date-fns.org"},"date-fns"],"\uFF09\u3002\u5728\u8FD9\u91CC\u6211\u4EEC\u63D0\u4F9B\u4E86\u4E24\u79CD\u65B9\u5F0F\u6765\u5B9E\u73B0\u66FF\u6362:"],["h2","\u81EA\u5B9A\u4E49\u7EC4\u4EF6"],["p","\u7B2C\u4E00\u79CD\u65B9\u6CD5\u662F\u4F7F\u7528 ",["code","generatePicker"],"\uFF08\u6216 ",["code","generateCalendar"],"\uFF09\u8F85\u52A9\u521B\u5EFA Picker \u7EC4\u4EF6\u3002"],["p","\u6211\u4EEC\u5148\u521D\u59CB\u5316\u4E00\u4E2A ",["code","create-react-app"]," \u7684 antd demo\uFF0C\u4F60\u53EF\u4EE5\u53C2\u8003 ",["a",{title:null,href:"/docs/react/use-in-typescript"},"\u5728 TypeScript \u4E2D\u4F7F\u7528"]," \u8FDB\u884C\u6784\u5EFA\uFF0C\u4E5F\u53EF\u4EE5\u76F4\u63A5\u4ECE\u8FD9\u91CC\u5F00\u59CB",["a",{title:null,href:"https://github.com/xiaohuoni/antd4-generate-picker/commit/47fec964e36d48bd15760f8f5abcb9655c259aa6"},"init antd"]],["h3","DatePicker.tsx"],["p","\u65B0\u5EFA ",["code","src/components/DatePicker.tsx"],"\u3002"],["p","\u7F16\u5199\u5982\u4E0B\u4EE3\u7801:"],["pre",{lang:"tsx",highlighted:`import { Moment } from <span class="token string">'moment'</span><span class="token comment" spellcheck="true">;</span>
import momentGenerateConfig from <span class="token string">'rc-picker/es/generate/moment'</span><span class="token comment" spellcheck="true">;</span>
import generatePicker from <span class="token string">'antd/es/date-picker/generatePicker'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> DatePicker <span class="token operator">=</span> generatePicker<span class="token operator">&lt;</span>Moment<span class="token operator">></span><span class="token punctuation">(</span>momentGenerateConfig<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> DatePicker<span class="token comment" spellcheck="true">;</span>`},["code",`import { Moment } from 'moment';
import momentGenerateConfig from 'rc-picker/es/generate/moment';
import generatePicker from 'antd/es/date-picker/generatePicker';

const DatePicker = generatePicker<Moment>(momentGenerateConfig);

export default DatePicker;`]],["h3","TimePicker.tsx"],["p","\u65B0\u5EFA ",["code","src/components/TimePicker.tsx"],"\u3002"],["p","\u7F16\u5199\u5982\u4E0B\u4EE3\u7801:"],["pre",{lang:"tsx",highlighted:`import { Moment } from <span class="token string">'moment'</span><span class="token comment" spellcheck="true">;</span>
import <span class="token operator">*</span> as React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>
import DatePicker from <span class="token string">'./DatePicker'</span><span class="token comment" spellcheck="true">;</span>
import { PickerTimeProps } from <span class="token string">'antd/es/date-picker/generatePicker'</span><span class="token comment" spellcheck="true">;</span>

export interface TimePickerProps extends Omit<span class="token operator">&lt;</span>PickerTimeProps<span class="token operator">&lt;</span>Moment<span class="token operator">></span><span class="token punctuation">,</span> <span class="token string">'picker'</span><span class="token operator">></span> {}

<span class="token keyword">const</span> TimePicker <span class="token operator">=</span> React<span class="token punctuation">.</span>forwardRef<span class="token operator">&lt;</span>any<span class="token punctuation">,</span> TimePickerProps<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> ref<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  return <span class="token operator">&lt;</span>DatePicker {<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>props} picker<span class="token operator">=</span><span class="token string">"time"</span> mode<span class="token operator">=</span>{undefined} ref<span class="token operator">=</span>{ref} <span class="token operator">/</span><span class="token operator">></span><span class="token comment" spellcheck="true">;</span>
}<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

TimePicker<span class="token punctuation">.</span>displayName <span class="token operator">=</span> <span class="token string">'TimePicker'</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> TimePicker<span class="token comment" spellcheck="true">;</span>`},["code",`import { Moment } from 'moment';
import * as React from 'react';
import DatePicker from './DatePicker';
import { PickerTimeProps } from 'antd/es/date-picker/generatePicker';

export interface TimePickerProps extends Omit<PickerTimeProps<Moment>, 'picker'> {}

const TimePicker = React.forwardRef<any, TimePickerProps>((props, ref) => {
  return <DatePicker {...props} picker="time" mode={undefined} ref={ref} />;
});

TimePicker.displayName = 'TimePicker';

export default TimePicker;`]],["h3","Calendar.tsx"],["p","\u65B0\u5EFA ",["code","src/components/Calendar.tsx"],"\u3002"],["p","\u7F16\u5199\u5982\u4E0B\u4EE3\u7801:"],["pre",{lang:"tsx",highlighted:`import { Moment } from <span class="token string">'moment'</span><span class="token comment" spellcheck="true">;</span>
import momentGenerateConfig from <span class="token string">'rc-picker/es/generate/moment'</span><span class="token comment" spellcheck="true">;</span>
import generateCalendar from <span class="token string">'antd/es/calendar/generateCalendar'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> Calendar <span class="token operator">=</span> generateCalendar<span class="token operator">&lt;</span>Moment<span class="token operator">></span><span class="token punctuation">(</span>momentGenerateConfig<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> Calendar<span class="token comment" spellcheck="true">;</span>`},["code",`import { Moment } from 'moment';
import momentGenerateConfig from 'rc-picker/es/generate/moment';
import generateCalendar from 'antd/es/calendar/generateCalendar';

const Calendar = generateCalendar<Moment>(momentGenerateConfig);

export default Calendar;`]],["h4","\u5BFC\u51FA\u81EA\u5B9A\u4E49\u7EC4\u4EF6"],["p","\u65B0\u5EFA ",["code","src/components/index.tsx"],"\u3002"],["p","\u7F16\u5199\u5982\u4E0B\u4EE3\u7801:"],["pre",{lang:"tsx",highlighted:`export { <span class="token keyword">default</span> as DatePicker } from <span class="token string">'./DatePicker'</span><span class="token comment" spellcheck="true">;</span>
export { <span class="token keyword">default</span> as Calendar } from <span class="token string">'./Calendar'</span><span class="token comment" spellcheck="true">;</span>
export { <span class="token keyword">default</span> as TimePicker } from <span class="token string">'./TimePicker'</span><span class="token comment" spellcheck="true">;</span>`},["code",`export { default as DatePicker } from './DatePicker';
export { default as Calendar } from './Calendar';
export { default as TimePicker } from './TimePicker';`]],["h3","\u4F7F\u7528\u81EA\u5B9A\u4E49\u7EC4\u4EF6"],["p","\u4FEE\u6539 ",["code","src/App.tsx"],"\uFF0C\u5F15\u5165 ",["code","moment"]," \u548C\u81EA\u5B9A\u4E49\u7684\u7EC4\u4EF6\u3002"],["pre",{lang:"diff",highlighted:`<span class="token deleted">- import { DatePicker, Calendar } from 'antd';</span>
<span class="token deleted">- import format from 'dayjs';</span>

<span class="token inserted">+ import { DatePicker, TimePicker, Calendar } from './components';</span>
<span class="token inserted">+ import format from 'moment';</span>`},["code",`- import { DatePicker, Calendar } from 'antd';
- import format from 'dayjs';

+ import { DatePicker, TimePicker, Calendar } from './components';
+ import format from 'moment';`]],["h2","antd-moment-webpack-plugin"],["p","\u6211\u4EEC\u8FD8\u63D0\u4F9B\u53E6\u4E00\u79CD\u5B9E\u73B0\u65B9\u5F0F\u3002\u4F7F\u7528 ",["code","@ant-design/moment-webpack-plugin"]," \u63D2\u4EF6\uFF0C\u65E0\u9700\u5BF9\u73B0\u6709\u4EE3\u7801\u505A\u4EFB\u4F55\u4FEE\u6539\u76F4\u63A5\u66FF\u6362\u6210 ",["code","Moment.js"],"\u3002\u8BF7\u53C2\u8003 ",["a",{title:null,href:"https://github.com/ant-design/antd-moment-webpack-plugin"},"@ant-design/moment-webpack-plugin"],"\u3002"],["pre",{lang:"js",highlighted:`<span class="token comment" spellcheck="true">// webpack-config.js</span>
<span class="token keyword">import</span> AntdMomentWebpackPlugin <span class="token keyword">from</span> <span class="token string">'@ant-design/moment-webpack-plugin'</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment" spellcheck="true">// ...</span>
  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">AntdMomentWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>`},["code",`// webpack-config.js
import AntdMomentWebpackPlugin from '@ant-design/moment-webpack-plugin';

module.exports = {
  // ...
  plugins: [new AntdMomentWebpackPlugin()],
};`]],["h2","\u4F7F\u7528 date-fns"],["p",["a",{title:null,href:"https://date-fns.org/"},"date-fns"]," \u76EE\u524D\u652F\u6301\u548C dayjs \u7C7B\u4F3C\u7684\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u65B9\u6CD5\uFF0C\u533A\u522B\u5728\u4E8E\u4F7F\u7528\u7684\u53C2\u6570\u7C7B\u578B\u4E0D\u540C\uFF0C\u5728 antd 4.5.0 \u4EE5\u4E0A\u7248\u672C\u63D0\u4F9B\u652F\u6301\u3002"],["p","\u505A\u4E00\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50\uFF1A"],["h3","DatePicker.tsx"],["p","\u65B0\u5EFA ",["code","src/components/DatePicker.tsx"],"\u3002"],["p","\u7F16\u5199\u5982\u4E0B\u4EE3\u7801:"],["pre",{lang:"tsx",highlighted:`import dateFnsGenerateConfig from <span class="token string">'rc-picker/es/generate/dateFns'</span><span class="token comment" spellcheck="true">;</span>
import generatePicker from <span class="token string">'antd/es/date-picker/generatePicker'</span><span class="token comment" spellcheck="true">;</span>
import <span class="token string">'antd/es/date-picker/style/index'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> DatePicker <span class="token operator">=</span> generatePicker<span class="token operator">&lt;</span>Date<span class="token operator">></span><span class="token punctuation">(</span>dateFnsGenerateConfig<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> DatePicker<span class="token comment" spellcheck="true">;</span>`},["code",`import dateFnsGenerateConfig from 'rc-picker/es/generate/dateFns';
import generatePicker from 'antd/es/date-picker/generatePicker';
import 'antd/es/date-picker/style/index';

const DatePicker = generatePicker<Date>(dateFnsGenerateConfig);

export default DatePicker;`]]],meta:{order:7.5,title:"\u4F7F\u7528\u81EA\u5B9A\u4E49\u65E5\u671F\u5E93",filename:"docs/react/use-custom-date-library.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u81EA\u5B9A\u4E49\u7EC4\u4EF6",title:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6"},"\u81EA\u5B9A\u4E49\u7EC4\u4EF6"]],["li",["a",{className:"bisheng-toc-h2",href:"#antd-moment-webpack-plugin",title:"antd-moment-webpack-plugin"},"antd-moment-webpack-plugin"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u4F7F\u7528-date-fns",title:"\u4F7F\u7528 date-fns"},"\u4F7F\u7528 date-fns"]]]}}}]);
