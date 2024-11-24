"use strict";(self.webpackChunk_trionesdev_antd_react_ext=self.webpackChunk_trionesdev_antd_react_ext||[]).push([[4034],{9941:function(s,e,n){var a;n.r(e),n.d(e,{demos:function(){return l}});var r=n(15009),d=n.n(r),i=n(99289),m=n.n(i),_=n(67294),y=n(52404),u=n(62760),l={"fields-mapping-demo-base":{component:_.memo(_.lazy(function(){return n.e(7722).then(n.bind(n,75364))})),asset:{type:"BLOCK",id:"fields-mapping-demo-base",refAtomIds:["fields-mapping"],dependencies:{"index.tsx":{type:"FILE",value:n(94219).Z},"@trionesdev/antd-react-ext":{type:"NPM",value:"0.0.7-beta.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@trionesdev/antd-react-ext":u,react:a||(a=n.t(_,2))},renderOpts:{compile:function(){var c=m()(d()().mark(function f(){var o,g=arguments;return d()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(7335).then(n.bind(n,37335));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,g));case 3:case"end":return t.stop()}},f)}));function p(){return c.apply(this,arguments)}return p}()}}}},75150:function(s,e,n){n.r(e),n.d(e,{texts:function(){return r}});var a=n(52404);const r=[{value:"\u5B57\u6BB5\u6620\u5C04",paraId:0,tocIndex:0}]},94219:function(s,e){e.Z=`import { FieldsMapping } from '@trionesdev/antd-react-ext';
import React from 'react';
import { Column } from '../fields-mapping';

export default () => {
  const sourceColumns: Column[] = [
    {
      key: 'field',
      title: '\u5B57\u6BB5',
      width: 80,
      primaryKey: true,
    },
    {
      key: 'type',
      title: '\u7C7B\u578B',
      width: 80,
    },
  ];
  const sourceData = [
    {
      field: 'id',
      type: 'string',
    },
    {
      field: 'name',
      type: 'string',
    },
    {
      field: 'age',
      type: 'int',
    },
  ];

  const targetColumns: Column[] = [
    {
      key: 'field',
      title: '\u5B57\u6BB5',
      width: 80,
      primaryKey: true,
    },
    {
      key: 'type',
      title: '\u7C7B\u578B',
      width: 80,
    },
  ];
  const targetData = [
    {
      field: 'id',
      type: 'string',
    },

    {
      field: 'age',
      type: 'int',
    },
    {
      field: 'name',
      type: 'string',
    },
  ];

  const mappingData = [
    { sourceKey: 'id', targetKey: 'id' },
    // {sourceKey:'age',targetKey:'age'},
    // {sourceKey:'name',targetKey:'name'},
  ];

  return (
    <FieldsMapping
      sourceColumns={sourceColumns}
      sourceData={sourceData}
      targetColumns={targetColumns}
      targetData={targetData}
      mappingData={mappingData}
    />
  );
};
`}}]);
