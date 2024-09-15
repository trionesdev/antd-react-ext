"use strict";(self.webpackChunk_trionesdev_antd_react_ext=self.webpackChunk_trionesdev_antd_react_ext||[]).push([[273],{55854:function(o,t,e){e.r(t),e.d(t,{demos:function(){return v}});var m=e(97983),r=e.n(m),g=e(40794),c=e.n(g),d=e(67294),v={"grid-table-demo-base":{component:d.memo(d.lazy(function(){return e.e(172).then(e.bind(e,4912))})),asset:{type:"BLOCK",id:"grid-table-demo-base",refAtomIds:["grid-table"],dependencies:{"index.tsx":{type:"FILE",value:e(63761).Z},"@trionesdev/antd-react-ext":{type:"NPM",value:"0.0.7-beta.0"},react:{type:"NPM",value:"18.2.0"}},entry:"index.tsx"},context:{"@trionesdev/antd-react-ext":e(31021),react:e(67294)},renderOpts:{compile:function(){var s=c()(r()().mark(function u(){var a,i=arguments;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(944).then(e.bind(e,99944));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,i));case 3:case"end":return n.stop()}},u)}));function l(){return s.apply(this,arguments)}return l}()}},"grid-table-demo-fit-table":{component:d.memo(d.lazy(function(){return e.e(172).then(e.bind(e,63640))})),asset:{type:"BLOCK",id:"grid-table-demo-fit-table",refAtomIds:["grid-table"],dependencies:{"index.tsx":{type:"FILE",value:e(37373).Z},"@trionesdev/antd-react-ext":{type:"NPM",value:"0.0.7-beta.0"},react:{type:"NPM",value:"18.2.0"}},entry:"index.tsx"},context:{"@trionesdev/antd-react-ext":e(31021),react:e(67294)},renderOpts:{compile:function(){var s=c()(r()().mark(function u(){var a,i=arguments;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(944).then(e.bind(e,99944));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,i));case 3:case"end":return n.stop()}},u)}));function l(){return s.apply(this,arguments)}return l}()}}}},59851:function(o,t,e){e.r(t),e.d(t,{texts:function(){return m}});const m=[{value:"\u8868\u683C",paraId:0,tocIndex:0},{value:"\u6491\u6EE1\u4E00\u4E2A\u9AD8\u5EA6\u4E3A300px\u7684\u5BB9\u5668\uFF0C\u5185\u90E8\u9AD8\u5EA6\u6EDA\u52A8",paraId:1}]},63761:function(o,t){t.Z=`import { GridTable } from '@trionesdev/antd-react-ext';
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
`},37373:function(o,t){t.Z=`import { GridTable } from '@trionesdev/antd-react-ext';
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
