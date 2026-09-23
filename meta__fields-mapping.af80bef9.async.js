"use strict";(self.webpackChunk_trionesdev_antd_react_ext=self.webpackChunk_trionesdev_antd_react_ext||[]).push([[2508],{50424:(function(i,t,e){var a;e.r(t),e.d(t,{demos:function(){return _}});var c=e(55420),d=e.n(c),l=e(98312),m=e.n(l),o=e(96540),n=e(58296),u={};e.r(u),e.d(u,{AppToolbar:function(){return n.lt},AvatarEditor:function(){return n.VS},DrawerForm:function(){return n.c4},EditableDesc:function(){return n.K},ExtCheckbox:function(){return n.rf},ExtDatePicker:function(){return n.QI},ExtFormField:function(){return n.mj},ExtInput:function(){return n.eE},ExtInputNumber:function(){return n.jB},ExtRadio:function(){return n.XA},ExtSelect:function(){return n.qM},ExtSwitch:function(){return n.M$},ExtTreeSelect:function(){return n.me},FetchSelect:function(){return n.LU},FetchTreeSelect:function(){return n.$0},FieldWrapper:function(){return n.cm},FieldsMapping:function(){return n.W1},Fieldset:function(){return n.LB},FormCell:function(){return n.JT},GridTable:function(){return n.dT},ImageUpload:function(){return n.BR},Layout:function(){return n.PE},ModalForm:function(){return n.Kw},PageHeader:function(){return n.zY},PictureUpload:function(){return n.gh},ReactDomUtils:function(){return n.L$},SearchToolbar:function(){return n.kt},SessionStorageUtils:function(){return n.Ng},TableToolbar:function(){return n.e1},VerificationCodeInput:function(){return n.Px},VideoUpload:function(){return n.p0},useCssInJs:function(){return n.hD}});var _={"fields-mapping-demo-base":{component:o.memo(o.lazy(function(){return e.e(1581).then(e.bind(e,41738))})),asset:{type:"BLOCK",id:"fields-mapping-demo-base",refAtomIds:["fields-mapping"],dependencies:{"index.tsx":{type:"FILE",value:e(78892).A},"@trionesdev/antd-react-ext":{type:"NPM",value:"6.0.0-beta.11"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},routeId:"components/fields-mapping/index",context:{"@trionesdev/antd-react-ext":u,react:a||(a=e.t(o,2))},renderOpts:{compile:(function(){var f=m()(d()().mark(function g(){var s,E=arguments;return d()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(2306).then(e.bind(e,12306));case 2:return r.abrupt("return",(s=r.sent).default.apply(s,E));case 3:case"end":return r.stop()}},g)}));function p(){return f.apply(this,arguments)}return p})()}}}}),43352:(function(i,t,e){e.r(t);const a=[{value:"\u5B57\u6BB5\u6620\u5C04",paraId:0,tocIndex:0}];e.d(t,["texts",0,a])}),78892:(function(i,t){t.A=`import { FieldsMapping } from '@trionesdev/antd-react-ext';
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
`})}]);
