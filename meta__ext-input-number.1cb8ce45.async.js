"use strict";(self.webpackChunk_trionesdev_antd_react_ext=self.webpackChunk_trionesdev_antd_react_ext||[]).push([[1847],{76327:function(d,n,e){var a;e.r(n),e.d(n,{demos:function(){return v}});var s=e(15009),u=e.n(s),o=e(99289),l=e.n(o),r=e(67294),m=e(71354),i=e(65567),v={"ext-input-number-demo-base":{component:r.memo(r.lazy(function(){return e.e(9592).then(e.bind(e,46418))})),asset:{type:"BLOCK",id:"ext-input-number-demo-base",refAtomIds:["ext-input-number"],dependencies:{"index.tsx":{type:"FILE",value:e(75766).Z},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"6.1.0"},"@trionesdev/antd-react-ext":{type:"NPM",value:"6.0.0-beta.0"}},entry:"index.tsx"},context:{react:a||(a=e.t(r,2)),antd:m,"@trionesdev/antd-react-ext":i},renderOpts:{compile:function(){var c=l()(u()().mark(function p(){var _,x=arguments;return u()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(_=t.sent).default.apply(_,x));case 3:case"end":return t.stop()}},p)}));function E(){return c.apply(this,arguments)}return E}()}}}},74555:function(d,n,e){e.r(n),e.d(n,{texts:function(){return a}});const a=[{value:"\u589E\u52A0InputNumber\u7684\u53EA\u8BFB\u6A21\u5F0F\uFF0C\u7528\u4E8E\u5C55\u793A",paraId:0,tocIndex:0}]},75766:function(d,n){n.Z=`import React, {useState} from "react";
import {Input, Switch} from "antd";
import {ExtInputNumber} from "@trionesdev/antd-react-ext";

export default () => {
  const [readOnly, setReadOnly] = useState(false);
  const [value, setValue] = useState<any>();
  return <div>
    <div>
      <Switch value={readOnly} onChange={setReadOnly}/>
    </div>
    <div>
      <ExtInputNumber readonly={readOnly} value={value} onChange={(v) => {
        setValue(v)
      }}/>
      <ExtInputNumber readonly={readOnly} value={1} onChange={(v) => {
        setValue(v)
      }}/>
    </div>
  </div>
}
`}}]);
