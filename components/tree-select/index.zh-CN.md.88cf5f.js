(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{4061:function(t,e){t.exports={content:["section",["p","\u6811\u578B\u9009\u62E9\u63A7\u4EF6\u3002"],["h2","\u4F55\u65F6\u4F7F\u7528"],["p","\u7C7B\u4F3C Select \u7684\u9009\u62E9\u63A7\u4EF6\uFF0C\u53EF\u9009\u62E9\u7684\u6570\u636E\u7ED3\u6784\u662F\u4E00\u4E2A\u6811\u5F62\u7ED3\u6784\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 TreeSelect\uFF0C\u4F8B\u5982\u516C\u53F8\u5C42\u7EA7\u3001\u5B66\u79D1\u7CFB\u7EDF\u3001\u5206\u7C7B\u76EE\u5F55\u7B49\u7B49\u3002"]],meta:{category:"Components",subtitle:"\u6811\u9009\u62E9",type:"\u6570\u636E\u5F55\u5165",title:"TreeSelect",cover:"https://gw.alipayobjects.com/zos/alicdn/Ax4DA0njr/TreeSelect.svg",filename:"components/tree-select/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u4F55\u65F6\u4F7F\u7528",title:"\u4F55\u65F6\u4F7F\u7528"},"\u4F55\u65F6\u4F7F\u7528"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#FAQ",title:"FAQ"},"FAQ"]]],api:["section",["h2","API"],["h3","Tree props"],["table",["thead",["tr",["th","\u53C2\u6570"],["th","\u8BF4\u660E"],["th","\u7C7B\u578B"],["th","\u9ED8\u8BA4\u503C"],["th","\u7248\u672C"]]],["tbody",["tr",["td","allowClear"],["td","\u663E\u793A\u6E05\u9664\u6309\u94AE"],["td","boolean"],["td","false"],["td"]],["tr",["td","autoClearSearchValue"],["td","\u5F53\u591A\u9009\u6A21\u5F0F\u4E0B\u503C\u88AB\u9009\u62E9\uFF0C\u81EA\u52A8\u6E05\u7A7A\u641C\u7D22\u6846"],["td","boolean"],["td","true"],["td"]],["tr",["td","bordered"],["td","\u662F\u5426\u663E\u793A\u8FB9\u6846"],["td","boolean"],["td","true"],["td"]],["tr",["td","defaultValue"],["td","\u6307\u5B9A\u9ED8\u8BA4\u9009\u4E2D\u7684\u6761\u76EE"],["td","string ","|"," string","[","]"],["td","-"],["td"]],["tr",["td","disabled"],["td","\u662F\u5426\u7981\u7528"],["td","boolean"],["td","false"],["td"]],["tr",["td","popupClassName"],["td","\u4E0B\u62C9\u83DC\u5355\u7684 className \u5C5E\u6027"],["td","string"],["td","-"],["td","4.23.0"]],["tr",["td","dropdownMatchSelectWidth"],["td","\u4E0B\u62C9\u83DC\u5355\u548C\u9009\u62E9\u5668\u540C\u5BBD\u3002\u9ED8\u8BA4\u5C06\u8BBE\u7F6E ",["code","min-width"],"\uFF0C\u5F53\u503C\u5C0F\u4E8E\u9009\u62E9\u6846\u5BBD\u5EA6\u65F6\u4F1A\u88AB\u5FFD\u7565\u3002false \u65F6\u4F1A\u5173\u95ED\u865A\u62DF\u6EDA\u52A8"],["td","boolean ","|"," number"],["td","true"],["td"]],["tr",["td","dropdownRender"],["td","\u81EA\u5B9A\u4E49\u4E0B\u62C9\u6846\u5185\u5BB9"],["td","(originNode: ReactNode, props) => ReactNode"],["td","-"],["td"]],["tr",["td","dropdownStyle"],["td","\u4E0B\u62C9\u83DC\u5355\u7684\u6837\u5F0F"],["td","object"],["td","-"],["td"]],["tr",["td","fieldNames"],["td","\u81EA\u5B9A\u4E49\u8282\u70B9 label\u3001value\u3001children \u7684\u5B57\u6BB5"],["td","object"],["td","{ label: ",["code","label"],", value: ",["code","value"],", children: ",["code","children"]," }"],["td","4.17.0"]],["tr",["td","filterTreeNode"],["td","\u662F\u5426\u6839\u636E\u8F93\u5165\u9879\u8FDB\u884C\u7B5B\u9009\uFF0C\u9ED8\u8BA4\u7528 treeNodeFilterProp \u7684\u503C\u4F5C\u4E3A\u8981\u7B5B\u9009\u7684 TreeNode \u7684\u5C5E\u6027\u503C"],["td","boolean ","|"," function(inputValue: string, treeNode: TreeNode) (\u51FD\u6570\u9700\u8981\u8FD4\u56DE bool \u503C)"],["td","function"],["td"]],["tr",["td","getPopupContainer"],["td","\u83DC\u5355\u6E32\u67D3\u7236\u8282\u70B9\u3002\u9ED8\u8BA4\u6E32\u67D3\u5230 body \u4E0A\uFF0C\u5982\u679C\u4F60\u9047\u5230\u83DC\u5355\u6EDA\u52A8\u5B9A\u4F4D\u95EE\u9898\uFF0C\u8BD5\u8BD5\u4FEE\u6539\u4E3A\u6EDA\u52A8\u7684\u533A\u57DF\uFF0C\u5E76\u76F8\u5BF9\u5176\u5B9A\u4F4D\u3002",["a",{title:null,href:"https://codepen.io/afc163/pen/zEjNOy?editors=0010"},"\u793A\u4F8B"]],["td","function(triggerNode)"],["td","() => document.body"],["td"]],["tr",["td","labelInValue"],["td","\u662F\u5426\u628A\u6BCF\u4E2A\u9009\u9879\u7684 label \u5305\u88C5\u5230 value \u4E2D\uFF0C\u4F1A\u628A value \u7C7B\u578B\u4ECE ",["code","string"]," \u53D8\u4E3A {value: string, label: ReactNode, halfChecked(treeCheckStrictly \u65F6\u6709\u6548): string","[","] } \u7684\u683C\u5F0F"],["td","boolean"],["td","false"],["td"]],["tr",["td","listHeight"],["td","\u8BBE\u7F6E\u5F39\u7A97\u6EDA\u52A8\u9AD8\u5EA6"],["td","number"],["td","256"],["td"]],["tr",["td","loadData"],["td","\u5F02\u6B65\u52A0\u8F7D\u6570\u636E"],["td","function(node)"],["td","-"],["td"]],["tr",["td","maxTagCount"],["td","\u6700\u591A\u663E\u793A\u591A\u5C11\u4E2A tag\uFF0C\u54CD\u5E94\u5F0F\u6A21\u5F0F\u4F1A\u5BF9\u6027\u80FD\u4EA7\u751F\u635F\u8017"],["td","number ","|"," ",["code","responsive"]],["td","-"],["td","responsive: 4.10"]],["tr",["td","maxTagPlaceholder"],["td","\u9690\u85CF tag \u65F6\u663E\u793A\u7684\u5185\u5BB9"],["td","ReactNode ","|"," function(omittedValues)"],["td","-"],["td"]],["tr",["td","multiple"],["td","\u652F\u6301\u591A\u9009\uFF08\u5F53\u8BBE\u7F6E treeCheckable \u65F6\u81EA\u52A8\u53D8\u4E3A true\uFF09"],["td","boolean"],["td","false"],["td"]],["tr",["td","notFoundContent"],["td","\u5F53\u4E0B\u62C9\u5217\u8868\u4E3A\u7A7A\u65F6\u663E\u793A\u7684\u5185\u5BB9"],["td","ReactNode"],["td",["code","Not Found"]],["td"]],["tr",["td","placeholder"],["td","\u9009\u62E9\u6846\u9ED8\u8BA4\u6587\u5B57"],["td","string"],["td","-"],["td"]],["tr",["td","placement"],["td","\u9009\u62E9\u6846\u5F39\u51FA\u7684\u4F4D\u7F6E"],["td",["code","bottomLeft"]," ",["code","bottomRight"]," ",["code","topLeft"]," ",["code","topRight"]],["td","bottomLeft"],["td"]],["tr",["td","searchValue"],["td","\u641C\u7D22\u6846\u7684\u503C\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",["code","onSearch"]," \u83B7\u53D6\u7528\u6237\u8F93\u5165"],["td","string"],["td","-"],["td"]],["tr",["td","showArrow"],["td","\u662F\u5426\u663E\u793A ",["code","suffixIcon"],"\uFF0C\u5355\u9009\u6A21\u5F0F\u4E0B\u9ED8\u8BA4 ",["code","true"]],["td","boolean"],["td","-"],["td"]],["tr",["td","showCheckedStrategy"],["td","\u914D\u7F6E ",["code","treeCheckable"]," \u65F6\uFF0C\u5B9A\u4E49\u9009\u4E2D\u9879\u56DE\u586B\u7684\u65B9\u5F0F\u3002",["code","TreeSelect.SHOW_ALL"],": \u663E\u793A\u6240\u6709\u9009\u4E2D\u8282\u70B9(\u5305\u62EC\u7236\u8282\u70B9)\u3002",["code","TreeSelect.SHOW_PARENT"],": \u53EA\u663E\u793A\u7236\u8282\u70B9(\u5F53\u7236\u8282\u70B9\u4E0B\u6240\u6709\u5B50\u8282\u70B9\u90FD\u9009\u4E2D\u65F6)\u3002 \u9ED8\u8BA4\u53EA\u663E\u793A\u5B50\u8282\u70B9"],["td",["code","TreeSelect.SHOW_ALL"]," ","|"," ",["code","TreeSelect.SHOW_PARENT"]," ","|"," ",["code","TreeSelect.SHOW_CHILD"]],["td",["code","TreeSelect.SHOW_CHILD"]],["td"]],["tr",["td","showSearch"],["td","\u662F\u5426\u652F\u6301\u641C\u7D22\u6846"],["td","boolean"],["td","\u5355\u9009\uFF1Afalse ","|"," \u591A\u9009\uFF1Atrue"],["td"]],["tr",["td","size"],["td","\u9009\u62E9\u6846\u5927\u5C0F"],["td",["code","large"]," ","|"," ",["code","middle"]," ","|"," ",["code","small"]],["td","-"],["td"]],["tr",["td","status"],["td","\u8BBE\u7F6E\u6821\u9A8C\u72B6\u6001"],["td","'error' ","|"," 'warning'"],["td","-"],["td","4.19.0"]],["tr",["td","suffixIcon"],["td","\u81EA\u5B9A\u4E49\u7684\u9009\u62E9\u6846\u540E\u7F00\u56FE\u6807, \u591A\u9009\u6A21\u5F0F\u4E0B\u5FC5\u987B\u540C\u65F6\u8BBE\u7F6E ",["code","showArrow"]," \u4E3A true"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","switcherIcon"],["td","\u81EA\u5B9A\u4E49\u6811\u8282\u70B9\u7684\u5C55\u5F00/\u6298\u53E0\u56FE\u6807"],["td","ReactNode ","|"," ((props: AntTreeNodeProps) => ReactNode)"],["td","-"],["td","renderProps: 4.20.0"]],["tr",["td","tagRender"],["td","\u81EA\u5B9A\u4E49 tag \u5185\u5BB9\uFF0C\u591A\u9009\u65F6\u751F\u6548"],["td","(props) => ReactNode"],["td","-"],["td"]],["tr",["td","treeCheckable"],["td","\u663E\u793A Checkbox"],["td","boolean"],["td","false"],["td"]],["tr",["td","treeCheckStrictly"],["td",["code","checkable"]," \u72B6\u6001\u4E0B\u8282\u70B9\u9009\u62E9\u5B8C\u5168\u53D7\u63A7\uFF08\u7236\u5B50\u8282\u70B9\u9009\u4E2D\u72B6\u6001\u4E0D\u518D\u5173\u8054\uFF09\uFF0C\u4F1A\u4F7F\u5F97 ",["code","labelInValue"]," \u5F3A\u5236\u4E3A true"],["td","boolean"],["td","false"],["td"]],["tr",["td","treeData"],["td","treeNodes \u6570\u636E\uFF0C\u5982\u679C\u8BBE\u7F6E\u5219\u4E0D\u9700\u8981\u624B\u52A8\u6784\u9020 TreeNode \u8282\u70B9\uFF08value \u5728\u6574\u4E2A\u6811\u8303\u56F4\u5185\u552F\u4E00\uFF09"],["td","array","<","{value, title, children, ","[","disabled, disableCheckbox, selectable, checkable]}>"],["td","[","]"],["td"]],["tr",["td","treeDataSimpleMode"],["td","\u4F7F\u7528\u7B80\u5355\u683C\u5F0F\u7684 treeData\uFF0C\u5177\u4F53\u8BBE\u7F6E\u53C2\u8003\u53EF\u8BBE\u7F6E\u7684\u7C7B\u578B (\u6B64\u65F6 treeData \u5E94\u53D8\u4E3A\u8FD9\u6837\u7684\u6570\u636E\u7ED3\u6784: ","[",`{id:1, pId:0, value:'1', title:"test1",...},...]\uFF0C `,["code","pId"]," \u662F\u7236\u8282\u70B9\u7684 id)"],["td","boolean ","|"," object","<","{ id: string, pId: string, rootPId: string }>"],["td","false"],["td"]],["tr",["td","treeDefaultExpandAll"],["td","\u9ED8\u8BA4\u5C55\u5F00\u6240\u6709\u6811\u8282\u70B9"],["td","boolean"],["td","false"],["td"]],["tr",["td","treeDefaultExpandedKeys"],["td","\u9ED8\u8BA4\u5C55\u5F00\u7684\u6811\u8282\u70B9"],["td","string","[","]"],["td","-"],["td"]],["tr",["td","treeExpandAction"],["td","\u70B9\u51FB\u8282\u70B9 title \u65F6\u7684\u5C55\u5F00\u903B\u8F91\uFF0C\u53EF\u9009\uFF1Afalse ","|"," ",["code","click"]," ","|"," ",["code","doubleClick"]],["td","string ","|"," boolean"],["td","false"],["td","4.21.0"]],["tr",["td","treeExpandedKeys"],["td","\u8BBE\u7F6E\u5C55\u5F00\u7684\u6811\u8282\u70B9"],["td","string","[","]"],["td","-"],["td"]],["tr",["td","treeIcon"],["td","\u662F\u5426\u5C55\u793A TreeNode title \u524D\u7684\u56FE\u6807\uFF0C\u6CA1\u6709\u9ED8\u8BA4\u6837\u5F0F\uFF0C\u5982\u8BBE\u7F6E\u4E3A true\uFF0C\u9700\u8981\u81EA\u884C\u5B9A\u4E49\u56FE\u6807\u76F8\u5173\u6837\u5F0F"],["td","boolean"],["td","false"],["td"]],["tr",["td","treeLine"],["td","\u662F\u5426\u5C55\u793A\u7EBF\u6761\u6837\u5F0F\uFF0C\u8BF7\u53C2\u8003 ",["a",{title:null,href:"/components/tree/#components-tree-demo-line"},"Tree - showLine"]],["td","boolean ","|"," object"],["td","false"],["td","4.17.0"]],["tr",["td","treeLoadedKeys"],["td","\uFF08\u53D7\u63A7\uFF09\u5DF2\u7ECF\u52A0\u8F7D\u7684\u8282\u70B9\uFF0C\u9700\u8981\u914D\u5408 ",["code","loadData"]," \u4F7F\u7528"],["td","string[]"],["td","[]"],["td"]],["tr",["td","treeNodeFilterProp"],["td","\u8F93\u5165\u9879\u8FC7\u6EE4\u5BF9\u5E94\u7684 treeNode \u5C5E\u6027"],["td","string"],["td",["code","value"]],["td"]],["tr",["td","treeNodeLabelProp"],["td","\u4F5C\u4E3A\u663E\u793A\u7684 prop \u8BBE\u7F6E"],["td","string"],["td",["code","title"]],["td"]],["tr",["td","value"],["td","\u6307\u5B9A\u5F53\u524D\u9009\u4E2D\u7684\u6761\u76EE"],["td","string ","|"," string","[","]"],["td","-"],["td"]],["tr",["td","virtual"],["td","\u8BBE\u7F6E false \u65F6\u5173\u95ED\u865A\u62DF\u6EDA\u52A8"],["td","boolean"],["td","true"],["td","4.1.0"]],["tr",["td","onChange"],["td","\u9009\u4E2D\u6811\u8282\u70B9\u65F6\u8C03\u7528\u6B64\u51FD\u6570"],["td","function(value, label, extra)"],["td","-"],["td"]],["tr",["td","onDropdownVisibleChange"],["td","\u5C55\u5F00\u4E0B\u62C9\u83DC\u5355\u7684\u56DE\u8C03"],["td","function(open)"],["td","-"],["td"]],["tr",["td","onSearch"],["td","\u6587\u672C\u6846\u503C\u53D8\u5316\u65F6\u56DE\u8C03"],["td","function(value: string)"],["td","-"],["td"]],["tr",["td","onSelect"],["td","\u88AB\u9009\u4E2D\u65F6\u8C03\u7528"],["td","function(value, node, extra)"],["td","-"],["td"]],["tr",["td","onTreeExpand"],["td","\u5C55\u793A\u8282\u70B9\u65F6\u8C03\u7528"],["td","function(expandedKeys)"],["td","-"],["td"]]]],["h3","Tree \u65B9\u6CD5"],["table",["thead",["tr",["th","\u540D\u79F0"],["th","\u63CF\u8FF0"],["th","\u7248\u672C"]]],["tbody",["tr",["td","blur()"],["td","\u79FB\u9664\u7126\u70B9"],["td"]],["tr",["td","focus()"],["td","\u83B7\u53D6\u7126\u70B9"],["td"]]]],["h3","TreeNode props"],["blockquote",["p","\u5EFA\u8BAE\u4F7F\u7528 treeData \u6765\u4EE3\u66FF TreeNode\uFF0C\u514D\u53BB\u624B\u5DE5\u6784\u9020\u9EBB\u70E6"]],["table",["thead",["tr",["th","\u53C2\u6570"],["th","\u8BF4\u660E"],["th","\u7C7B\u578B"],["th","\u9ED8\u8BA4\u503C"],["th","\u7248\u672C"]]],["tbody",["tr",["td","checkable"],["td","\u5F53\u6811\u4E3A Checkbox \u65F6\uFF0C\u8BBE\u7F6E\u72EC\u7ACB\u8282\u70B9\u662F\u5426\u5C55\u793A Checkbox"],["td","boolean"],["td","-"],["td"]],["tr",["td","disableCheckbox"],["td","\u7981\u6389 Checkbox"],["td","boolean"],["td","false"],["td"]],["tr",["td","disabled"],["td","\u662F\u5426\u7981\u7528"],["td","boolean"],["td","false"],["td"]],["tr",["td","isLeaf"],["td","\u662F\u5426\u662F\u53F6\u5B50\u8282\u70B9"],["td","boolean"],["td","false"],["td"]],["tr",["td","key"],["td","\u6B64\u9879\u5FC5\u987B\u8BBE\u7F6E\uFF08\u5176\u503C\u5728\u6574\u4E2A\u6811\u8303\u56F4\u5185\u552F\u4E00\uFF09"],["td","string"],["td","-"],["td"]],["tr",["td","selectable"],["td","\u662F\u5426\u53EF\u9009"],["td","boolean"],["td","true"],["td"]],["tr",["td","title"],["td","\u6811\u8282\u70B9\u663E\u793A\u7684\u5185\u5BB9"],["td","ReactNode"],["td",["code","---"]],["td"]],["tr",["td","value"],["td","\u9ED8\u8BA4\u6839\u636E\u6B64\u5C5E\u6027\u503C\u8FDB\u884C\u7B5B\u9009\uFF08\u5176\u503C\u5728\u6574\u4E2A\u6811\u8303\u56F4\u5185\u552F\u4E00\uFF09"],["td","string"],["td","-"],["td"]]]],["h2","FAQ"],["h3","onChange \u65F6\u5982\u4F55\u83B7\u5F97\u7236\u8282\u70B9\u4FE1\u606F\uFF1F"],["p","\u4ECE\u6027\u80FD\u89D2\u5EA6\u8003\u8651\uFF0C\u6211\u4EEC\u9ED8\u8BA4\u4E0D\u900F\u51FA\u7236\u8282\u70B9\u4FE1\u606F\u3002\u4F60\u53EF\u4EE5\u8FD9\u6837\u83B7\u5F97\uFF1A",["a",{title:null,href:"https://codesandbox.io/s/wk080nn81k"},"https://codesandbox.io/s/wk080nn81k"]],["h3","\u81EA\u5B9A\u4E49 Option \u6837\u5F0F\u5BFC\u81F4\u6EDA\u52A8\u5F02\u5E38\u600E\u4E48\u529E\uFF1F"],["p","\u8BF7\u53C2\u8003 Select \u7684 ",["a",{title:null,href:"/components/select"},"FAQ"],"\u3002"]]}}}]);
