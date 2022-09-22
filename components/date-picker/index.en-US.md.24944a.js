(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{3928:function(t,e){t.exports={content:["section",["p","To select or input a date."],["h2","When To Use"],["p","By clicking the input box, you can select a date from a popup calendar."]],meta:{category:"Components",type:"Data Entry",title:"DatePicker",cover:"https://gw.alipayobjects.com/zos/alicdn/RT_USzA48/DatePicker.svg",filename:"components/date-picker/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#When-To-Use",title:"When To Use"},"When To Use"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#FAQ",title:"FAQ"},"FAQ"]]],api:["section",["h2","API"],["p","There are five kinds of picker:"],["ul",["li",["p","DatePicker"]],["li",["p","DatePicker","[",'picker="month"]']],["li",["p","DatePicker","[",'picker="week"]']],["li",["p","DatePicker","[",'picker="year"]']],["li",["p","DatePicker","[",'picker="quarter"] (Added in 4.1.0)']],["li",["p","RangePicker"]]],["h3","Localization"],["p","The default locale is en-US, if you need to use other languages, recommend to use internationalized components provided by us at the entrance. Look at: ",["a",{title:null,href:"https://ant.design/components/config-provider/"},"ConfigProvider"],"."],["p","If there are special needs (only modifying single component language), Please use the property: local. Example: ",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json"},"default"],"."],["pre",{lang:"jsx",highlighted:`<span class="token keyword">import</span> <span class="token string">'dayjs/locale/zh-cn'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> locale <span class="token keyword">from</span> <span class="token string">'antd/es/date-picker/locale/zh_CN'</span><span class="token punctuation">;</span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DatePicker</span> <span class="token attr-name">locale</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>locale<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>`},["code",`import 'dayjs/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';

<DatePicker locale={locale} />;`]],["pre",{lang:"jsx",highlighted:`<span class="token comment" spellcheck="true">// The default locale is en-US, if you want to use other locale, just set locale in entry file globally.</span>
<span class="token keyword">import</span> dayjs <span class="token keyword">from</span> <span class="token string">'dayjs'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'dayjs/locale/zh-cn'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> locale <span class="token keyword">from</span> <span class="token string">'antd/es/locale/zh_CN'</span><span class="token punctuation">;</span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ConfigProvider</span> <span class="token attr-name">locale</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>locale<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DatePicker</span> <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token function">dayjs</span><span class="token punctuation">(</span><span class="token string">'2015-01-01'</span><span class="token punctuation">,</span> <span class="token string">'YYYY-MM-DD'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ConfigProvider</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>`},["code",`// The default locale is en-US, if you want to use other locale, just set locale in entry file globally.
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import locale from 'antd/es/locale/zh_CN';

<ConfigProvider locale={locale}>
  <DatePicker defaultValue={dayjs('2015-01-01', 'YYYY-MM-DD')} />
</ConfigProvider>;`]],["h3","Common API"],["p","The following APIs are shared by DatePicker, RangePicker."],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","allowClear"],["td","Whether to show clear button"],["td","boolean"],["td","true"],["td"]],["tr",["td","autoFocus"],["td","If get focus when component mounted"],["td","boolean"],["td","false"],["td"]],["tr",["td","bordered"],["td","Whether has border style"],["td","boolean"],["td","true"],["td"]],["tr",["td","className"],["td","The picker className"],["td","string"],["td","-"],["td"]],["tr",["td","dateRender"],["td","Custom rendering function for date cells"],["td","function(currentDate: dayjs, today: dayjs) => React.ReactNode"],["td","-"],["td"]],["tr",["td","disabled"],["td","Determine whether the DatePicker is disabled"],["td","boolean"],["td","false"],["td"]],["tr",["td","disabledDate"],["td","Specify the date that cannot be selected"],["td","(currentDate: dayjs) => boolean"],["td","-"],["td"]],["tr",["td","popupClassName"],["td","To customize the className of the popup calendar"],["td","string"],["td","-"],["td","4.23.0"]],["tr",["td","getPopupContainer"],["td","To set the container of the floating layer, while the default is to create a ",["code","div"]," element in ",["code","body"]],["td","function(trigger)"],["td","-"],["td"]],["tr",["td","inputReadOnly"],["td","Set the ",["code","readonly"]," attribute of the input tag (avoids virtual keyboard on touch devices)"],["td","boolean"],["td","false"],["td"]],["tr",["td","locale"],["td","Localization configuration"],["td","object"],["td",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json"},"default"]],["td"]],["tr",["td","mode"],["td","The picker panel mode\uFF08 ",["a",{title:null,href:"/docs/react/faq#When-set-mode-to-DatePicker/RangePicker,-cannot-select-year-or-month-anymore?"},"Cannot select year or month anymore?"]," )"],["td",["code","time"]," ","|"," ",["code","date"]," ","|"," ",["code","month"]," ","|"," ",["code","year"]," ","|"," ",["code","decade"]],["td","-"],["td"]],["tr",["td","nextIcon"],["td","The custom next icon"],["td","ReactNode"],["td","-"],["td","4.17.0"]],["tr",["td","open"],["td","The open state of picker"],["td","boolean"],["td","-"],["td"]],["tr",["td","panelRender"],["td","Customize panel render"],["td","(panelNode) => ReactNode"],["td","-"],["td","4.5.0"]],["tr",["td","picker"],["td","Set picker type"],["td",["code","date"]," ","|"," ",["code","week"]," ","|"," ",["code","month"]," ","|"," ",["code","quarter"]," ","|"," ",["code","year"]],["td",["code","date"]],["td",["code","quarter"],": 4.1.0"]],["tr",["td","placeholder"],["td","The placeholder of date input"],["td","string ","|"," ","[","string,string]"],["td","-"],["td"]],["tr",["td","placement"],["td","The position where the selection box pops up"],["td",["code","bottomLeft"]," ",["code","bottomRight"]," ",["code","topLeft"]," ",["code","topRight"]],["td","bottomLeft"],["td"]],["tr",["td","popupStyle"],["td","To customize the style of the popup calendar"],["td","CSSProperties"],["td","{}"],["td"]],["tr",["td","prevIcon"],["td","The custom prev icon"],["td","ReactNode"],["td","-"],["td","4.17.0"]],["tr",["td","size"],["td","To determine the size of the input box, the height of ",["code","large"]," and ",["code","small"],", are 40px and 24px respectively, while default size is 32px"],["td",["code","large"]," ","|"," ",["code","middle"]," ","|"," ",["code","small"]],["td","-"],["td"]],["tr",["td","status"],["td","Set validation status"],["td","'error' ","|"," 'warning'"],["td","-"],["td","4.19.0"]],["tr",["td","style"],["td","To customize the style of the input box"],["td","CSSProperties"],["td","{}"],["td"]],["tr",["td","suffixIcon"],["td","The custom suffix icon"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","superNextIcon"],["td","The custom super next icon"],["td","ReactNode"],["td","-"],["td","4.17.0"]],["tr",["td","superPrevIcon"],["td","The custom super prev icon"],["td","ReactNode"],["td","-"],["td","4.17.0"]],["tr",["td","onOpenChange"],["td","Callback function, can be executed whether the popup calendar is popped up or closed"],["td","function(open)"],["td","-"],["td"]],["tr",["td","onPanelChange"],["td","Callback when picker panel mode is changed"],["td","function(value, mode)"],["td","-"],["td"]]]],["h3","Common Methods"],["table",["thead",["tr",["th","Name"],["th","Description"],["th","Version"]]],["tbody",["tr",["td","blur()"],["td","Remove focus"],["td"]],["tr",["td","focus()"],["td","Get focus"],["td"]]]],["h3","DatePicker"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","defaultPickerValue"],["td","To set default picker date"],["td",["a",{title:null,href:"https://day.js.org/"},"dayjs"]],["td","-"],["td"]],["tr",["td","defaultValue"],["td","To set default date, if start time or end time is null or undefined, the date range will be an open interval"],["td",["a",{title:null,href:"https://day.js.org/"},"dayjs"]],["td","-"],["td"]],["tr",["td","disabledTime"],["td","To specify the time that cannot be selected"],["td","function(date)"],["td","-"],["td"]],["tr",["td","format"],["td","To set the date format, refer to ",["a",{title:null,href:"https://day.js.org/"},"dayjs"],". When an array is provided, all values are used for parsing and first value is used for formatting, support ",["a",{title:null,href:"#components-date-picker-demo-format"},"Custom Format"]],["td","string ","|"," (value: dayjs) => string ","|"," (string ","|"," (value: dayjs) => string)","[","]"],["td",["code","YYYY-MM-DD"]],["td"]],["tr",["td","renderExtraFooter"],["td","Render extra footer in panel"],["td","(mode) => React.ReactNode"],["td","-"],["td"]],["tr",["td","showNow"],["td","Whether to show 'Now' button on panel when ",["code","showTime"]," is set"],["td","boolean"],["td","-"],["td","4.4.0"]],["tr",["td","showTime"],["td","To provide an additional time selection"],["td","object ","|"," boolean"],["td",["a",{title:null,href:"/components/time-picker/#API"},"TimePicker Options"]],["td"]],["tr",["td","showTime.defaultValue"],["td","To set default time of selected date, ",["a",{title:null,href:"#components-date-picker-demo-disabled-date"},"demo"]],["td",["a",{title:null,href:"https://day.js.org/"},"dayjs"]],["td","dayjs()"],["td"]],["tr",["td","showToday"],["td","Whether to show ",["code","Today"]," button"],["td","boolean"],["td","true"],["td"]],["tr",["td","value"],["td","To set date"],["td",["a",{title:null,href:"https://day.js.org/"},"dayjs"]],["td","-"],["td"]],["tr",["td","onChange"],["td","Callback function, can be executed when the selected time is changing"],["td","function(date: dayjs, dateString: string)"],["td","-"],["td"]],["tr",["td","onOk"],["td","Callback when click ok button"],["td","function()"],["td","-"],["td"]],["tr",["td","onPanelChange"],["td","Callback function for panel changing"],["td","function(value, mode)"],["td","-"],["td"]]]],["h3","DatePicker","[","picker=year]"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","defaultPickerValue"],["td","To set default picker date"],["td",["a",{title:null,href:"https://day.js.org/"},"dayjs"]],["td","-"],["td"]],["tr",["td","defaultValue"],["td","To set default date"],["td",["a",{title:null,href:"https://day.js.org/"},"dayjs"]],["td","-"],["td"]],["tr",["td","format"],["td","To set the date format, refer to ",["a",{title:null,href:"https://day.js.org/"},"dayjs"]],["td","string"],["td",["code","YYYY"]],["td"]],["tr",["td","renderExtraFooter"],["td","Render extra footer in panel"],["td","() => React.ReactNode"],["td","-"],["td"]],["tr",["td","value"],["td","To set date"],["td",["a",{title:null,href:"https://day.js.org/"},"dayjs"]],["td","-"],["td"]],["tr",["td","onChange"],["td","Callback function, can be executed when the selected time is changing"],["td","function(date: dayjs, dateString: string)"],["td","-"],["td"]]]],["h3","DatePicker","[","picker=quarter]"],["p","Added in ",["code","4.1.0"],"."],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","defaultPickerValue"],["td","To set default picker date"],["td",["a",{title:null,href:"https://day.js.org/"},"dayjs"]],["td","-"],["td"]],["tr",["td","defaultValue"],["td","To set default date"],["td",["a",{title:null,href:"https://day.js.org/"},"dayjs"]],["td","-"],["td"]],["tr",["td","format"],["td","To set the date format, refer to ",["a",{title:null,href:"https://day.js.org/"},"dayjs"]],["td","string"],["td",["code","YYYY-\\QQ"]],["td"]],["tr",["td","renderExtraFooter"],["td","Render extra footer in panel"],["td","() => React.ReactNode"],["td","-"],["td"]],["tr",["td","value"],["td","To set date"],["td",["a",{title:null,href:"https://day.js.org/"},"dayjs"]],["td","-"],["td"]],["tr",["td","onChange"],["td","Callback function, can be executed when the selected time is changing"],["td","function(date: dayjs, dateString: string)"],["td","-"],["td"]]]],["h3","DatePicker","[","picker=month]"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","defaultPickerValue"],["td","To set default picker date"],["td",["a",{title:null,href:"https://day.js.org/"},"dayjs"]],["td","-"],["td"]],["tr",["td","defaultValue"],["td","To set default date"],["td",["a",{title:null,href:"https://day.js.org/"},"dayjs"]],["td","-"],["td"]],["tr",["td","format"],["td","To set the date format, refer to ",["a",{title:null,href:"https://day.js.org/"},"dayjs"]],["td","string"],["td",["code","YYYY-MM"]],["td"]],["tr",["td","monthCellRender"],["td","Custom month cell content render method"],["td","function(date, locale): ReactNode"],["td","-"],["td"]],["tr",["td","renderExtraFooter"],["td","Render extra footer in panel"],["td","() => React.ReactNode"],["td","-"],["td"]],["tr",["td","value"],["td","To set date"],["td",["a",{title:null,href:"https://day.js.org/"},"dayjs"]],["td","-"],["td"]],["tr",["td","onChange"],["td","Callback function, can be executed when the selected time is changing"],["td","function(date: dayjs, dateString: string)"],["td","-"],["td"]]]],["h3","DatePicker","[","picker=week]"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","defaultPickerValue"],["td","To set default picker date"],["td",["a",{title:null,href:"https://day.js.org/"},"dayjs"]],["td","-"],["td"]],["tr",["td","defaultValue"],["td","To set default date"],["td",["a",{title:null,href:"https://day.js.org/"},"dayjs"]],["td","-"],["td"]],["tr",["td","format"],["td","To set the date format, refer to ",["a",{title:null,href:"https://day.js.org/"},"dayjs"]],["td","string"],["td",["code","YYYY-wo"]],["td"]],["tr",["td","renderExtraFooter"],["td","Render extra footer in panel"],["td","(mode) => React.ReactNode"],["td","-"],["td"]],["tr",["td","value"],["td","To set date"],["td",["a",{title:null,href:"https://day.js.org/"},"dayjs"]],["td","-"],["td"]],["tr",["td","onChange"],["td","Callback function, can be executed when the selected time is changing"],["td","function(date: dayjs, dateString: string)"],["td","-"],["td"]]]],["h3","RangePicker"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","allowEmpty"],["td","Allow start or end input leave empty"],["td","[","boolean, boolean]"],["td","[","false, false]"],["td"]],["tr",["td","dateRender"],["td","Customize date cell. ",["code","info"]," argument is added in 4.3.0"],["td","function(currentDate: dayjs, today: dayjs, info: { range: ",["code","start"]," ","|"," ",["code","end"]," }) => React.ReactNode"],["td","-"],["td"]],["tr",["td","defaultPickerValue"],["td","To set default picker date"],["td","[",["a",{title:null,href:"https://day.js.org/"},"dayjs"],", ",["a",{title:null,href:"https://day.js.org/"},"dayjs"],"]"],["td","-"],["td"]],["tr",["td","defaultValue"],["td","To set default date"],["td","[",["a",{title:null,href:"https://day.js.org/"},"dayjs"],", ",["a",{title:null,href:"https://day.js.org/"},"dayjs"],"]"],["td","-"],["td"]],["tr",["td","disabled"],["td","If disable start or end"],["td","[","boolean, boolean]"],["td","-"],["td"]],["tr",["td","disabledTime"],["td","To specify the time that cannot be selected"],["td","function(date: dayjs, partial: ",["code","start"]," ","|"," ",["code","end"],")"],["td","-"],["td"]],["tr",["td","format"],["td","To set the date format, refer to ",["a",{title:null,href:"https://day.js.org/"},"dayjs"],". When an array is provided, all values are used for parsing and first value is used for formatting"],["td","string ","|"," string","[","]"],["td",["code","YYYY-MM-DD HH:mm:ss"]],["td"]],["tr",["td","ranges"],["td","The preseted ranges for quick selection"],["td","{ ","[","range: string]: ",["a",{title:null,href:"https://day.js.org/"},"dayjs"],"[","] } ","|"," { ","[","range: string]: () => ",["a",{title:null,href:"https://day.js.org/"},"dayjs"],"[","] }"],["td","-"],["td"]],["tr",["td","renderExtraFooter"],["td","Render extra footer in panel"],["td","() => React.ReactNode"],["td","-"],["td"]],["tr",["td","separator"],["td","Set separator between inputs"],["td","React.ReactNode"],["td",["code","<SwapRightOutlined />"]],["td"]],["tr",["td","showTime"],["td","To provide an additional time selection"],["td","object ","|"," boolean"],["td",["a",{title:null,href:"/components/time-picker/#API"},"TimePicker Options"]],["td"]],["tr",["td","showTime.defaultValue"],["td","To set default time of selected date, ",["a",{title:null,href:"#components-date-picker-demo-disabled-date"},"demo"]],["td",["a",{title:null,href:"https://day.js.org/"},"dayjs"],"[","]"],["td","[","dayjs(), dayjs()]"],["td"]],["tr",["td","value"],["td","To set date"],["td","[",["a",{title:null,href:"https://day.js.org/"},"dayjs"],", ",["a",{title:null,href:"https://day.js.org/"},"dayjs"],"]"],["td","-"],["td"]],["tr",["td","onCalendarChange"],["td","Callback function, can be executed when the start time or the end time of the range is changing. ",["code","info"]," argument is added in 4.4.0"],["td","function(dates: ","[","dayjs, dayjs], dateStrings: ","[","string, string], info: { range:",["code","start"],"|",["code","end"]," })"],["td","-"],["td"]],["tr",["td","onChange"],["td","Callback function, can be executed when the selected time is changing"],["td","function(dates: ","[","dayjs, dayjs], dateStrings: ","[","string, string])"],["td","-"],["td"]]]],["h2","FAQ"],["h3","When set mode to DatePicker/RangePicker, cannot select year or month anymore?"],["p","Please refer ",["a",{title:null,href:"/docs/react/faq#When-set-mode-to-DatePicker/RangePicker,-cannot-select-year-or-month-anymore?"},"FAQ"]],["h3","How to use DatePicker with customize date library like dayjs?"],["p","Please refer ",["a",{title:null,href:"/docs/react/use-custom-date-library#DatePicker"},"replace dayjs"]],["h3","Why config dayjs.locale globally not work?"],["p","DatePicker default set ",["code","locale"]," as ",["code","en"]," in v4. You can config DatePicker ",["code","locale"]," prop or ",["a",{title:null,href:"/components/config-provider"},"ConfigProvider ",["code","locale"]]," prop instead."],["h4","Date-related components locale is not working?"],["p","See FAQ ",["a",{title:null,href:"/docs/react/faq#Date-related-components-locale-is-not-working?"},"Date-related-components-locale-is-not-working?"]],["h3","How to modify start day of week?"],["p","Please use correct ",["a",{title:null,href:"/docs/react/i18n"},"language"]," (",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/5605"},"#5605"],"), or update dayjs ",["code","locale"]," config:"],["ul",["li",["p","Example: ",["a",{title:null,href:"https://codesandbox.io/s/moment-day-of-week-6dby5"},"https://codesandbox.io/s/moment-day-of-week-6dby5"]]],["li",["p","Alternate example: ",["a",{title:null,href:"https://stackblitz.com/edit/react-9aegkj"},"https://stackblitz.com/edit/react-9aegkj"]]]],["h3","Why origin panel don't switch when using ",["code","panelRender"],"?"],["p","When you change the layout of nodes by ",["code","panelRender"],", React will unmount and re-mount it which reset the component state. You should keep the layout stable. Please ref ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/27263"},"#27263"]," for more info."],["pre",{lang:"js",highlighted:`dayjs<span class="token punctuation">.</span><span class="token function">locale</span><span class="token punctuation">(</span><span class="token string">'en'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  week<span class="token punctuation">:</span> <span class="token punctuation">{</span>
    dow<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>`},["code",`dayjs.locale('en', {
  week: {
    dow: 1,
  },
});`]]]}}}]);
