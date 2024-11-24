"use strict";(self.webpackChunk_trionesdev_antd_react_ext=self.webpackChunk_trionesdev_antd_react_ext||[]).push([[8273],{51054:function(m,t,e){var r;e.r(t),e.d(t,{demos:function(){return p}});var s=e(15009),o=e.n(s),v=e(99289),c=e.n(v),a=e(67294),f=e(82702),g=e(62760),p={"grid-table-demo-base":{component:a.memo(a.lazy(function(){return e.e(2172).then(e.bind(e,86217))})),asset:{type:"BLOCK",id:"grid-table-demo-base",refAtomIds:["grid-table"],dependencies:{"index.tsx":{type:"FILE",value:e(63761).Z},"@trionesdev/antd-react-ext":{type:"NPM",value:"0.0.7-beta.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@trionesdev/antd-react-ext":g,react:r||(r=e.t(a,2))},renderOpts:{compile:function(){var l=c()(o()().mark(function _(){var d,i=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(d=n.sent).default.apply(d,i));case 3:case"end":return n.stop()}},_)}));function u(){return l.apply(this,arguments)}return u}()}},"grid-table-demo-fit-table":{component:a.memo(a.lazy(function(){return e.e(2172).then(e.bind(e,29876))})),asset:{type:"BLOCK",id:"grid-table-demo-fit-table",refAtomIds:["grid-table"],dependencies:{"index.tsx":{type:"FILE",value:e(37373).Z},"@trionesdev/antd-react-ext":{type:"NPM",value:"0.0.7-beta.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@trionesdev/antd-react-ext":g,react:r||(r=e.t(a,2))},renderOpts:{compile:function(){var l=c()(o()().mark(function _(){var d,i=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(d=n.sent).default.apply(d,i));case 3:case"end":return n.stop()}},_)}));function u(){return l.apply(this,arguments)}return u}()}}}},58731:function(m,t,e){e.r(t),e.d(t,{texts:function(){return s}});var r=e(82702);const s=[{value:"\u8868\u683C",paraId:0,tocIndex:0},{value:"\u6491\u6EE1\u4E00\u4E2A\u9AD8\u5EA6\u4E3A300px\u7684\u5BB9\u5668\uFF0C\u5185\u90E8\u9AD8\u5EA6\u6EDA\u52A8",paraId:1}]},63761:function(m,t){t.Z=`import { GridTable } from '@trionesdev/antd-react-ext';
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

  return (
    <div>
      <GridTable columns={columns} dataSource={dataScore} />
    </div>
  );
};
`},37373:function(m,t){t.Z=`import { GridTable } from '@trionesdev/antd-react-ext';
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
    { name: '\u5C0F\u738B', age: 38 },
    { name: '\u5C0F\u738B', age: 38 },
    { name: '\u5C0F\u738B', age: 38 },
    { name: '\u5C0F\u738B', age: 38 },
    { name: '\u5C0F\u738B', age: 38 },
    { name: '\u5C0F\u738B', age: 38 },
    { name: '\u5C0F\u738B', age: 38 },
    { name: '\u5C0F\u738B', age: 38 },
    { name: '\u5C0F\u738B', age: 38 },
    { name: '\u5C0F\u738B', age: 38 },
    { name: '\u5C0F\u738B', age: 38 },
    { name: '\u5C0F\u738B', age: 38 },
    { name: '\u5C0F\u738B', age: 38 },
    { name: '\u5C0F\u738B', age: 38 },
    { name: '\u5C0F\u738B', age: 38 },
    { name: '\u5C0F\u738B', age: 38 },
    { name: '\u5C0F\u738B', age: 38 },
    { name: '\u5C0F\u738B', age: 38 },
    { name: '\u5C0F\u738B', age: 38 },
    { name: '\u5C0F\u738B', age: 38 },
  ];

  return (
    <div style={{ height: 300 }}>
      <GridTable fit={true} columns={columns} dataSource={dataScore} />
    </div>
  );
};
`}}]);
