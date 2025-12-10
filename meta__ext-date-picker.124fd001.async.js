"use strict";(self.webpackChunk_trionesdev_antd_react_ext=self.webpackChunk_trionesdev_antd_react_ext||[]).push([[6043],{32959:function(d,t,e){var a;e.r(t),e.d(t,{demos:function(){return c}});var o=e(15009),_=e.n(o),u=e(99289),l=e.n(u),r=e(67294),m=e(71354),i=e(65567),c={"ext-date-picker-demo-base":{component:r.memo(r.lazy(function(){return e.e(4786).then(e.bind(e,93680))})),asset:{type:"BLOCK",id:"ext-date-picker-demo-base",refAtomIds:["ext-date-picker"],dependencies:{"index.tsx":{type:"FILE",value:e(63716).Z},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"6.1.0"},"@trionesdev/antd-react-ext":{type:"NPM",value:"6.0.0-beta.0"}},entry:"index.tsx"},context:{react:a||(a=e.t(r,2)),antd:m,"@trionesdev/antd-react-ext":i},renderOpts:{compile:function(){var v=l()(_()().mark(function x(){var s,p=arguments;return _()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(250).then(e.bind(e,90250));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,p));case 3:case"end":return n.stop()}},x)}));function E(){return v.apply(this,arguments)}return E}()}}}},48974:function(d,t,e){e.r(t),e.d(t,{texts:function(){return a}});const a=[{value:"\u589E\u52A0DatePicker\u7684\u53EA\u8BFB\u6A21\u5F0F\uFF0C\u7528\u4E8E\u5C55\u793A",paraId:0,tocIndex:0}]},63716:function(d,t){t.Z=`import React, { useState } from 'react';
import { Input, Switch } from 'antd';
import { ExtDatePicker, ExtInput } from '@trionesdev/antd-react-ext';

export default () => {
  const [readOnly, setReadOnly] = useState(false);
  const [value, setValue] = useState<any>();
  return (
    <div>
      <div>
        <Switch value={readOnly} onChange={setReadOnly} />
      </div>
      <div>
        <ExtDatePicker readonly={readOnly} />
        <ExtDatePicker.RangePicker readonly={readOnly} />
      </div>
    </div>
  );
};
`}}]);
