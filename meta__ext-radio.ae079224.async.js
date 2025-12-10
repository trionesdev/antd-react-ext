"use strict";(self.webpackChunk_trionesdev_antd_react_ext=self.webpackChunk_trionesdev_antd_react_ext||[]).push([[4378],{14683:function(d,n,e){var a;e.r(n),e.d(n,{demos:function(){return v}});var s=e(15009),o=e.n(s),u=e(99289),l=e.n(u),r=e(67294),m=e(65567),i=e(71354),v={"ext-radio-demo-base":{component:r.memo(r.lazy(function(){return e.e(6008).then(e.bind(e,74538))})),asset:{type:"BLOCK",id:"ext-radio-demo-base",refAtomIds:["ext-radio"],dependencies:{"index.tsx":{type:"FILE",value:e(34562).Z},"@trionesdev/antd-react-ext":{type:"NPM",value:"6.0.0-beta.0"},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"6.1.0"}},entry:"index.tsx"},context:{"@trionesdev/antd-react-ext":m,react:a||(a=e.t(r,2)),antd:i},renderOpts:{compile:function(){var c=l()(o()().mark(function x(){var _,O=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(_=t.sent).default.apply(_,O));case 3:case"end":return t.stop()}},x)}));function E(){return c.apply(this,arguments)}return E}()}}}},43390:function(d,n,e){e.r(n),e.d(n,{texts:function(){return a}});const a=[{value:"\u589E\u52A0Radio\u7684\u53EA\u8BFB\u6A21\u5F0F\uFF0C\u7528\u4E8E\u5C55\u793A",paraId:0,tocIndex:0}]},34562:function(d,n){n.Z=`import { ExtRadio } from '@trionesdev/antd-react-ext';
import React, { useState } from 'react';
import { Radio, Switch } from 'antd';


export default ()=>{
  const [readOnly, setReadOnly] = useState(false);
  const [value, setValue] = useState<any>();
  return (
    <>
      <div>
        <Switch value={readOnly} onChange={setReadOnly} />
      </div>
      <div>
        <ExtRadio readonly={readOnly} value={1}>
          \u662F
        </ExtRadio>
        <ExtRadio.Group
          readonly={readOnly}
          value={value}
          onChange={(v) => {
            setValue(v.target.value);
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
        >
        </ExtRadio.Group>
      </div>
    </>
  );
}
`}}]);
