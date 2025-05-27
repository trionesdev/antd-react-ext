"use strict";(self.webpackChunk_trionesdev_antd_react_ext=self.webpackChunk_trionesdev_antd_react_ext||[]).push([[4472],{86987:function(o,n,e){var a;e.r(n),e.d(n,{demos:function(){return i}});var s=e(15009),d=e.n(s),l=e(99289),u=e.n(l),r=e(67294),m=e(77775),c=e(42025),i={"table-toolbar-demo-base":{component:r.memo(r.lazy(function(){return e.e(8979).then(e.bind(e,90785))})),asset:{type:"BLOCK",id:"table-toolbar-demo-base",refAtomIds:["table-toolbar"],dependencies:{"index.tsx":{type:"FILE",value:e(29930).Z},"@trionesdev/antd-react-ext":{type:"NPM",value:"0.0.7-beta.16"},antd:{type:"NPM",value:"5.25.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@trionesdev/antd-react-ext":m,antd:c,react:a||(a=e.t(r,2))},renderOpts:{compile:function(){var b=u()(d()().mark(function v(){var _,x=arguments;return d()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(_=t.sent).default.apply(_,x));case 3:case"end":return t.stop()}},v)}));function E(){return b.apply(this,arguments)}return E}()}}}},16947:function(o,n,e){e.r(n),e.d(n,{texts:function(){return a}});const a=[{value:"Table \u7684\u5DE5\u5177\u680F",paraId:0,tocIndex:0}]},29930:function(o,n){n.Z=`import { GridTable, TableToolbar } from '@trionesdev/antd-react-ext';
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
