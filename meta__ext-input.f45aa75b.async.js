"use strict";(self.webpackChunk_trionesdev_antd_react_ext=self.webpackChunk_trionesdev_antd_react_ext||[]).push([[3036],{58987:function(d,t,e){var a;e.r(t),e.d(t,{demos:function(){return c}});var o=e(15009),_=e.n(o),u=e(99289),l=e.n(u),r=e(67294),m=e(71354),i=e(65567),c={"ext-input-demo-base":{component:r.memo(r.lazy(function(){return e.e(3784).then(e.bind(e,7531))})),asset:{type:"BLOCK",id:"ext-input-demo-base",refAtomIds:["ext-input"],dependencies:{"index.tsx":{type:"FILE",value:e(14775).Z},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"6.1.0"},"@trionesdev/antd-react-ext":{type:"NPM",value:"6.0.0-beta.0"}},entry:"index.tsx"},context:{react:a||(a=e.t(r,2)),antd:m,"@trionesdev/antd-react-ext":i},renderOpts:{compile:function(){var v=l()(_()().mark(function p(){var s,x=arguments;return _()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(250).then(e.bind(e,90250));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,x));case 3:case"end":return n.stop()}},p)}));function E(){return v.apply(this,arguments)}return E}()}}}},67303:function(d,t,e){e.r(t),e.d(t,{texts:function(){return a}});const a=[{value:"\u589E\u52A0Input\u7684\u53EA\u8BFB\u6A21\u5F0F\uFF0C\u7528\u4E8E\u5C55\u793A",paraId:0,tocIndex:0}]},14775:function(d,t){t.Z=`import React, { useState } from 'react';
import { Input, Switch } from 'antd';
import { ExtInput } from '@trionesdev/antd-react-ext';

export default () => {
  const [readOnly, setReadOnly] = useState(false);
  const [value, setValue] = useState<any>();
  return (
    <div>
      <div>
        <Switch value={readOnly} onChange={setReadOnly} />
      </div>
      <div>
        <ExtInput
          // value={value}
          onChange={(e) => {
            console.log(e.target.value);
            setValue(e.target.value);
          }}
          readonly={readOnly}
        />
      </div>
    </div>
  );
};
`}}]);
