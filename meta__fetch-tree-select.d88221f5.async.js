"use strict";(self.webpackChunk_trionesdev_antd_react_ext=self.webpackChunk_trionesdev_antd_react_ext||[]).push([[3704],{61676:function(s,t,e){var a;e.r(t),e.d(t,{demos:function(){return c}});var o=e(15009),_=e.n(o),l=e(99289),u=e.n(l),r=e(67294),m=e(65567),c={"fetch-tree-select-demo-base":{component:r.memo(r.lazy(function(){return e.e(9744).then(e.bind(e,18639))})),asset:{type:"BLOCK",id:"fetch-tree-select-demo-base",refAtomIds:["fetch-tree-select"],dependencies:{"index.tsx":{type:"FILE",value:e(49291).Z},"@trionesdev/antd-react-ext":{type:"NPM",value:"6.0.0-beta.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@trionesdev/antd-react-ext":m,react:a||(a=e.t(r,2))},renderOpts:{compile:function(){var i=u()(_()().mark(function h(){var d,f=arguments;return _()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(250).then(e.bind(e,90250));case 2:return n.abrupt("return",(d=n.sent).default.apply(d,f));case 3:case"end":return n.stop()}},h)}));function v(){return i.apply(this,arguments)}return v}()}}}},7284:function(s,t,e){e.r(t),e.d(t,{texts:function(){return a}});const a=[{value:"\u83B7\u53D6\u8FDC\u7A0B\u6570\u636E\u7684TreeSelect",paraId:0,tocIndex:0}]},49291:function(s,t){t.Z=`import { FetchTreeSelect } from '@trionesdev/antd-react-ext';
import React from 'react';

export default () => {
  const [value, setValue] = React.useState(2);
  return (
    <FetchTreeSelect
      style={{ width: 300 }}
      fetchRequest={() => {
        return Promise.resolve([
          { id: 1, name: '\u5C0F\u660E', children: [{ id: 11, name: '\u5C0F\u660E1' }] },
          { id: 2, name: '\u5C0F\u7EA2' },
        ]);
      }}
      fieldNames={{ label: 'name', value: 'id' }}
      initialValueOptions={[{ id: 2, name: '\u5C0F\u7EA2' }]}
      value={value}
      onChange={setValue}
    />
  );
};
`}}]);
