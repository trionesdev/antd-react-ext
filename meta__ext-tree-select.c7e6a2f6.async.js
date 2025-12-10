"use strict";(self.webpackChunk_trionesdev_antd_react_ext=self.webpackChunk_trionesdev_antd_react_ext||[]).push([[58],{31888:function(s,t,e){var a;e.r(t),e.d(t,{demos:function(){return i}});var o=e(15009),d=e.n(o),_=e(99289),u=e.n(_),r=e(67294),m=e(71354),c=e(65567),i={"ext-tree-select-demo-base":{component:r.memo(r.lazy(function(){return e.e(5679).then(e.bind(e,17458))})),asset:{type:"BLOCK",id:"ext-tree-select-demo-base",refAtomIds:["ext-tree-select"],dependencies:{"index.tsx":{type:"FILE",value:e(84229).Z},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"6.1.0"},"@trionesdev/antd-react-ext":{type:"NPM",value:"6.0.0-beta.0"}},entry:"index.tsx"},context:{react:a||(a=e.t(r,2)),antd:m,"@trionesdev/antd-react-ext":c},renderOpts:{compile:function(){var v=u()(d()().mark(function O(){var l,h=arguments;return d()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(250).then(e.bind(e,90250));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,h));case 3:case"end":return n.stop()}},O)}));function E(){return v.apply(this,arguments)}return E}()}}}},12006:function(s,t,e){e.r(t),e.d(t,{texts:function(){return a}});const a=[{value:"\u589E\u52A0TreeSelect\u7684\u53EA\u8BFB\u6A21\u5F0F\uFF0C\u7528\u4E8E\u5C55\u793A",paraId:0,tocIndex:0}]},84229:function(s,t){t.Z=`import React, {useState} from "react";
import {Switch} from "antd";
import {ExtTreeSelect} from "@trionesdev/antd-react-ext";

export default ()=>{
  const [readOnly, setReadOnly] = useState(false);
  const [value, setValue] = useState();
  const [value2, setValue2] = useState();
  const [options, setOptions] = React.useState([
    {value: 1, label: '\u5C0F\u660E'},
    {value: 2, label: '\u5C0F\u7EA2'},
  ]);

  return (
    <div>
      <div>
        <Switch value={readOnly} onChange={setReadOnly}/>
      </div>
      <div>
        <ExtTreeSelect
          style={{width: 200}}
          readonly={readOnly}
          value={value}
          onChange={setValue}
          treeData={options}
        />
        <ExtTreeSelect
          style={{width: 200}}
          readonly={readOnly}
          value={value2}
          onChange={setValue2}
          treeData={options}
          multiple
        />
      </div>
    </div>
  )
}
`}}]);
