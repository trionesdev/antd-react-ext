"use strict";(self.webpackChunk_trionesdev_antd_react_ext=self.webpackChunk_trionesdev_antd_react_ext||[]).push([[1486],{30305:function(d,t,e){var a;e.r(t),e.d(t,{demos:function(){return i}});var o=e(15009),s=e.n(o),u=e(99289),l=e.n(u),r=e(67294),m=e(71354),c=e(65567),i={"ext-switch-demo-base":{component:r.memo(r.lazy(function(){return e.e(513).then(e.bind(e,58046))})),asset:{type:"BLOCK",id:"ext-switch-demo-base",refAtomIds:["ext-switch"],dependencies:{"index.tsx":{type:"FILE",value:e(93458).Z},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"6.1.0"},"@trionesdev/antd-react-ext":{type:"NPM",value:"6.0.0-beta.0"}},entry:"index.tsx"},context:{react:a||(a=e.t(r,2)),antd:m,"@trionesdev/antd-react-ext":c},renderOpts:{compile:function(){var h=l()(s()().mark(function E(){var _,x=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(250).then(e.bind(e,90250));case 2:return n.abrupt("return",(_=n.sent).default.apply(_,x));case 3:case"end":return n.stop()}},E)}));function v(){return h.apply(this,arguments)}return v}()}}}},58207:function(d,t,e){e.r(t),e.d(t,{texts:function(){return a}});const a=[{value:"\u589E\u52A0Switch\u7684\u53EA\u8BFB\u6A21\u5F0F\uFF0C\u7528\u4E8E\u5C55\u793A",paraId:0,tocIndex:0}]},93458:function(d,t){t.Z=`import React, { useState } from 'react';
import { Switch } from 'antd';
import { ExtSwitch } from '@trionesdev/antd-react-ext';

export default ()=>{
  const [readOnly, setReadOnly] = useState(false);
  const [value, setValue] = useState<any>();
  return (
    <>
      <div>
        <Switch value={readOnly} onChange={setReadOnly} />
      </div>
      <ExtSwitch value={ value} checkedChildren={'\u662F'} unCheckedChildren={'\u5426'} readonly={readOnly} onChange={setValue}/>
    </>
  );
}
`}}]);
