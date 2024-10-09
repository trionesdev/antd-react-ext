"use strict";(self.webpackChunk_trionesdev_antd_react_ext=self.webpackChunk_trionesdev_antd_react_ext||[]).push([[4472],{86987:function(o,t,e){var a;e.r(t),e.d(t,{demos:function(){return i}});var _=e(15009),d=e.n(_),s=e(99289),u=e.n(s),r=e(67294),M=e(58365),m=e(62760),c=e(73453),i={"table-toolbar-demo-base":{component:r.memo(r.lazy(function(){return e.e(8979).then(e.bind(e,90785))})),asset:{type:"BLOCK",id:"table-toolbar-demo-base",refAtomIds:["table-toolbar"],dependencies:{"index.tsx":{type:"FILE",value:e(29930).Z},"@trionesdev/antd-react-ext":{type:"NPM",value:"0.0.7-beta.3"},antd:{type:"NPM",value:"5.21.2"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@trionesdev/antd-react-ext":m,antd:c,react:a||(a=e.t(r,2))},renderOpts:{compile:function(){var b=u()(d()().mark(function x(){var l,v=arguments;return d()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,v));case 3:case"end":return n.stop()}},x)}));function E(){return b.apply(this,arguments)}return E}()}}}},16947:function(o,t,e){e.r(t),e.d(t,{texts:function(){return _}});var a=e(58365);const _=[{value:"Table \u7684\u5DE5\u5177\u680F",paraId:0,tocIndex:0}]},29930:function(o,t){t.Z=`import { GridTable, TableToolbar } from '@trionesdev/antd-react-ext';
import { Button } from 'antd';
import React from 'react';

export default () => {
  const columns = [
    {
      title: '\u59D3\u540D',
      dataIndex: 'name',
    },
    {
      title: '\u5E74\u9F84',
      dataIndex: 'age',
    },
  ];

  const dataScore = [
    { name: '\u5C0F\u660E', age: 19 },
    { name: '\u5C0F\u738B', age: 38 },
  ];

  const tableBar = (
    <TableToolbar
      title="Table Title"
      extra={[<Button key={\`create-user\`}>\u65B0\u5EFA\u7528\u6237</Button>]}
    />
  );

  return (
    <GridTable
      style={{ border: '1px #bcbcbc solid' }}
      toolbar={tableBar}
      columns={columns}
      dataSource={dataScore}
    />
  );
};
`}}]);
