"use strict";(self.webpackChunk_trionesdev_antd_react_ext=self.webpackChunk_trionesdev_antd_react_ext||[]).push([[4034],{66188:function(r,e,n){n.r(e),n.d(e,{demos:function(){return m}});var a=n(97983),s=n.n(a),u=n(40794),i=n.n(u),o=n(67294),m={"fields-mapping-demo-base":{component:o.memo(o.lazy(function(){return n.e(7722).then(n.bind(n,74928))})),asset:{type:"BLOCK",id:"fields-mapping-demo-base",refAtomIds:["fields-mapping"],dependencies:{"index.tsx":{type:"FILE",value:n(94219).Z},"@trionesdev/antd-react-ext":{type:"NPM",value:"0.0.7-beta.2"},react:{type:"NPM",value:"18.2.0"}},entry:"index.tsx"},context:{"@trionesdev/antd-react-ext":n(31021),react:n(67294)},renderOpts:{compile:function(){var l=i()(s()().mark(function p(){var d,c=arguments;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(9944).then(n.bind(n,99944));case 2:return t.abrupt("return",(d=t.sent).default.apply(d,c));case 3:case"end":return t.stop()}},p)}));function _(){return l.apply(this,arguments)}return _}()}}}},28875:function(r,e,n){n.r(e),n.d(e,{texts:function(){return a}});const a=[{value:"\u5B57\u6BB5\u6620\u5C04",paraId:0,tocIndex:0}]},94219:function(r,e){e.Z=`import { FieldsMapping } from '@trionesdev/antd-react-ext';
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
