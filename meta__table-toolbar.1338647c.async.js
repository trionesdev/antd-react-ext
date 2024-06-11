"use strict";(self.webpackChunk_trionesdev_antd_react_ext=self.webpackChunk_trionesdev_antd_react_ext||[]).push([[472],{28209:function(r,n,e){e.r(n),e.d(n,{demos:function(){return m}});var a=e(97983),o=e.n(a),l=e(40794),u=e.n(l),d=e(67294),m={"table-toolbar-demo-base":{component:d.memo(d.lazy(function(){return e.e(979).then(e.bind(e,6955))})),asset:{type:"BLOCK",id:"table-toolbar-demo-base",refAtomIds:["table-toolbar"],dependencies:{"index.tsx":{type:"FILE",value:e(29930).Z},"@trionesdev/antd-react-ext":{type:"NPM",value:"0.0.6-beta.0"},antd:{type:"NPM",value:"5.18.0"},react:{type:"NPM",value:"18.2.0"}},entry:"index.tsx"},context:{"@trionesdev/antd-react-ext":e(72590),antd:e(54441),react:e(67294)},renderOpts:{compile:function(){var _=u()(o()().mark(function i(){var s,b=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(944).then(e.bind(e,99944));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,b));case 3:case"end":return t.stop()}},i)}));function c(){return _.apply(this,arguments)}return c}()}}}},28011:function(r,n,e){e.r(n),e.d(n,{texts:function(){return a}});const a=[{value:"Table \u7684\u5DE5\u5177\u680F",paraId:0,tocIndex:0}]},29930:function(r,n){n.Z=`import { GridTable, TableToolbar } from '@trionesdev/antd-react-ext';
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
