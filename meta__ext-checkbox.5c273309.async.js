"use strict";(self.webpackChunk_trionesdev_antd_react_ext=self.webpackChunk_trionesdev_antd_react_ext||[]).push([[359],{99363:function(o,n,e){var a;e.r(n),e.d(n,{demos:function(){return i}});var s=e(15009),d=e.n(s),l=e(99289),u=e.n(l),r=e(67294),m=e(71354),c=e(65567),i={"ext-checkbox-demo-base":{component:r.memo(r.lazy(function(){return e.e(3448).then(e.bind(e,47557))})),asset:{type:"BLOCK",id:"ext-checkbox-demo-base",refAtomIds:["ext-checkbox"],dependencies:{"index.tsx":{type:"FILE",value:e(88076).Z},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"6.1.0"},"@trionesdev/antd-react-ext":{type:"NPM",value:"6.0.0-beta.0"}},entry:"index.tsx"},context:{react:a||(a=e.t(r,2)),antd:m,"@trionesdev/antd-react-ext":c},renderOpts:{compile:function(){var v=u()(d()().mark(function h(){var _,E=arguments;return d()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(_=t.sent).default.apply(_,E));case 3:case"end":return t.stop()}},h)}));function x(){return v.apply(this,arguments)}return x}()}}}},47281:function(o,n,e){e.r(n),e.d(n,{texts:function(){return a}});const a=[{value:"\u589E\u52A0Checkbox\u7684\u53EA\u8BFB\u6A21\u5F0F\uFF0C\u7528\u4E8E\u5C55\u793A",paraId:0,tocIndex:0}]},88076:function(o,n){n.Z=`
import React, { useState } from 'react';
import { Radio, Switch } from 'antd';
import { ExtCheckbox } from '@trionesdev/antd-react-ext';


export default ()=>{
  const [readOnly, setReadOnly] = useState(false);
  const [value, setValue] = useState<any>();
  return (
    <>
      <div>
        <Switch value={readOnly} onChange={setReadOnly} />
      </div>
      <div>
        <ExtCheckbox readonly={readOnly} value={1}>
          \u662F
        </ExtCheckbox>
        <ExtCheckbox.Group
          readonly={readOnly}
          value={value}
          onChange={(v) => {
            setValue(v);
          }}
          options={[
            {
              label: '\u662F',
              value: 1,
            },
            {
              label: '\u5426',
              value: 2,
            },
          ]}
        />
      </div>
    </>
  );
}
`}}]);
