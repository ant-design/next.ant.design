(window.webpackJsonp=window.webpackJsonp||[]).push([[224],{4090:function(e,n){e.exports={content:["article",["p","Bu default, Ant Design use ",["a",{title:null,href:"https://day.js.org"},"Day.js"]," to handle time and date. Day.js is an immutable date-time library alternative to Moment.js with the same API."],["p","You might want to use another date library (",["strong","Ant design currently supports ",["a",{title:null,href:"http://momentjs.com/"},"moment"]," and ",["a",{title:null,href:"https://date-fns.org"},"date-fns"]],"). We provide two ways to customize:"],["h2","Custom component"],["p","The first way is to use ",["code","generatePicker"]," (or ",["code","generateCalendar"],") to help create Picker components."],["p","First, we initialize an antd demo with ",["code","create-react-app"],". You can refer to ",["a",{title:null,href:"/docs/react/use-in-typescript"},"Use in TypeScript"],", or you can start directly here ",["a",{title:null,href:"https://github.com/xiaohuoni/antd4-generate-picker/commit/47fec964e36d48bd15760f8f5abcb9655c259aa6"},"init antd"]],["h3","DatePicker.tsx"],["p","Create ",["code","src/components/DatePicker.tsx"],"."],["p","For example:"],["pre",{lang:"tsx",highlighted:`import type { Moment } from <span class="token string">'moment'</span><span class="token comment" spellcheck="true">;</span>
import momentGenerateConfig from <span class="token string">'rc-picker/lib/generate/moment'</span><span class="token comment" spellcheck="true">;</span>
import generatePicker from <span class="token string">'antd/es/date-picker/generatePicker'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> DatePicker <span class="token operator">=</span> generatePicker<span class="token operator">&lt;</span>Moment<span class="token operator">></span><span class="token punctuation">(</span>momentGenerateConfig<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> DatePicker<span class="token comment" spellcheck="true">;</span>`},["code",`import type { Moment } from 'moment';
import momentGenerateConfig from 'rc-picker/lib/generate/moment';
import generatePicker from 'antd/es/date-picker/generatePicker';

const DatePicker = generatePicker<Moment>(momentGenerateConfig);

export default DatePicker;`]],["h3","TimePicker.tsx"],["p","Create ",["code","src/components/TimePicker.tsx"],"."],["p","For example:"],["pre",{lang:"tsx",highlighted:`import type { Moment } from <span class="token string">'moment'</span><span class="token comment" spellcheck="true">;</span>
import <span class="token operator">*</span> as React from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>
import type { PickerTimeProps } from <span class="token string">'antd/es/date-picker/generatePicker'</span><span class="token comment" spellcheck="true">;</span>
import DatePicker from <span class="token string">'./DatePicker'</span><span class="token comment" spellcheck="true">;</span>

export interface TimePickerProps extends Omit<span class="token operator">&lt;</span>PickerTimeProps<span class="token operator">&lt;</span>Moment<span class="token operator">></span><span class="token punctuation">,</span> <span class="token string">'picker'</span><span class="token operator">></span> {}

<span class="token keyword">const</span> TimePicker <span class="token operator">=</span> React<span class="token punctuation">.</span>forwardRef<span class="token operator">&lt;</span>any<span class="token punctuation">,</span> TimePickerProps<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> ref<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>DatePicker {<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>props} picker<span class="token operator">=</span><span class="token string">"time"</span> mode<span class="token operator">=</span>{undefined} ref<span class="token operator">=</span>{ref} <span class="token operator">/</span><span class="token operator">></span>
<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

TimePicker<span class="token punctuation">.</span>displayName <span class="token operator">=</span> <span class="token string">'TimePicker'</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> TimePicker<span class="token comment" spellcheck="true">;</span>`},["code",`import type { Moment } from 'moment';
import * as React from 'react';
import type { PickerTimeProps } from 'antd/es/date-picker/generatePicker';
import DatePicker from './DatePicker';

export interface TimePickerProps extends Omit<PickerTimeProps<Moment>, 'picker'> {}

const TimePicker = React.forwardRef<any, TimePickerProps>((props, ref) => (
  <DatePicker {...props} picker="time" mode={undefined} ref={ref} />
));

TimePicker.displayName = 'TimePicker';

export default TimePicker;`]],["h3","Calendar.tsx"],["p","Create ",["code","src/components/Calendar.tsx"],"."],["p","For example:"],["pre",{lang:"tsx",highlighted:`import type { Moment } from <span class="token string">'moment'</span><span class="token comment" spellcheck="true">;</span>
import momentGenerateConfig from <span class="token string">'rc-picker/lib/generate/moment'</span><span class="token comment" spellcheck="true">;</span>
import generateCalendar from <span class="token string">'antd/es/calendar/generateCalendar'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> Calendar <span class="token operator">=</span> generateCalendar<span class="token operator">&lt;</span>Moment<span class="token operator">></span><span class="token punctuation">(</span>momentGenerateConfig<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> Calendar<span class="token comment" spellcheck="true">;</span>`},["code",`import type { Moment } from 'moment';
import momentGenerateConfig from 'rc-picker/lib/generate/moment';
import generateCalendar from 'antd/es/calendar/generateCalendar';

const Calendar = generateCalendar<Moment>(momentGenerateConfig);

export default Calendar;`]],["h3","Export Custom component"],["p","Create ",["code","src/components/index.tsx"],"."],["p","For example:"],["pre",{lang:"tsx",highlighted:`export { <span class="token keyword">default</span> as DatePicker } from <span class="token string">'./DatePicker'</span><span class="token comment" spellcheck="true">;</span>
export { <span class="token keyword">default</span> as Calendar } from <span class="token string">'./Calendar'</span><span class="token comment" spellcheck="true">;</span>
export { <span class="token keyword">default</span> as TimePicker } from <span class="token string">'./TimePicker'</span><span class="token comment" spellcheck="true">;</span>`},["code",`export { default as DatePicker } from './DatePicker';
export { default as Calendar } from './Calendar';
export { default as TimePicker } from './TimePicker';`]],["h3","Use Custom component"],["p","Modify ",["code","src/App.tsx"],",import ",["code","moment"]," and custom component."],["pre",{lang:"diff",highlighted:`<span class="token deleted">- import { DatePicker, Calendar } from 'antd';</span>
<span class="token deleted">- import format from 'dayjs';</span>

<span class="token inserted">+ import { DatePicker, TimePicker, Calendar } from './components';</span>
<span class="token inserted">+ import format from 'moment';</span>`},["code",`- import { DatePicker, Calendar } from 'antd';
- import format from 'dayjs';

+ import { DatePicker, TimePicker, Calendar } from './components';
+ import format from 'moment';`]],["h2","antd-moment-webpack-plugin"],["p","We also provide another implementation, which we provide with ",["code","@ant-design/moment-webpack-plugin"],", replacing ",["code","Day.js"]," with ",["code","moment"]," directly without changing a line of existing code. More info can be found at ",["a",{title:null,href:"https://github.com/ant-design/antd-moment-webpack-plugin"},"@ant-design/moment-webpack-plugin"],"."],["pre",{lang:"js",highlighted:`<span class="token comment" spellcheck="true">// webpack-config.js</span>
<span class="token keyword">import</span> AntdMomentWebpackPlugin <span class="token keyword">from</span> <span class="token string">'@ant-design/moment-webpack-plugin'</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment" spellcheck="true">// ...</span>
  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">AntdMomentWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>`},["code",`// webpack-config.js
import AntdMomentWebpackPlugin from '@ant-design/moment-webpack-plugin';

module.exports = {
  // ...
  plugins: [new AntdMomentWebpackPlugin()],
};`]],["h2","Use date-fns"],["p",["a",{title:null,href:"https://date-fns.org/"},"date-fns"]," currently supports custom component methods similar to ",["code","dayjs"],". The difference is that the parameter types used are different. Support is provided in antd 4.5.0 and above."],["p","For Example:"],["h3","DatePicker.tsx"],["p","Create ",["code","src/components/DatePicker.tsx"],"."],["p","Code as follows:"],["pre",{lang:"tsx",highlighted:`import dateFnsGenerateConfig from <span class="token string">'rc-picker/lib/generate/dateFns'</span><span class="token comment" spellcheck="true">;</span>
import generatePicker from <span class="token string">'antd/es/date-picker/generatePicker'</span><span class="token comment" spellcheck="true">;</span>
import <span class="token string">'antd/es/date-picker/style/index'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> DatePicker <span class="token operator">=</span> generatePicker<span class="token operator">&lt;</span>Date<span class="token operator">></span><span class="token punctuation">(</span>dateFnsGenerateConfig<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

export <span class="token keyword">default</span> DatePicker<span class="token comment" spellcheck="true">;</span>`},["code",`import dateFnsGenerateConfig from 'rc-picker/lib/generate/dateFns';
import generatePicker from 'antd/es/date-picker/generatePicker';
import 'antd/es/date-picker/style/index';

const DatePicker = generatePicker<Date>(dateFnsGenerateConfig);

export default DatePicker;`]]],meta:{order:7.5,title:"Use custom date library",filename:"docs/react/use-custom-date-library.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Custom-component",title:"Custom component"},"Custom component"]],["li",["a",{className:"bisheng-toc-h2",href:"#antd-moment-webpack-plugin",title:"antd-moment-webpack-plugin"},"antd-moment-webpack-plugin"]],["li",["a",{className:"bisheng-toc-h2",href:"#Use-date-fns",title:"Use date-fns"},"Use date-fns"]]]}}}]);
