"use strict";(self.webpackChunk_trionesdev_antd_react_ext=self.webpackChunk_trionesdev_antd_react_ext||[]).push([[5320],{48542:(function(c,n,t){var u;t.r(n),t.d(n,{demos:function(){return m}});var s=t(55420),d=t.n(s),l=t(98312),_=t.n(l),o=t(96540),e=t(58296),a={};t.r(a),t.d(a,{AppToolbar:function(){return e.lt},AvatarEditor:function(){return e.VS},DrawerForm:function(){return e.c4},EditableDesc:function(){return e.K},ExtCheckbox:function(){return e.rf},ExtDatePicker:function(){return e.QI},ExtFormField:function(){return e.mj},ExtInput:function(){return e.eE},ExtInputNumber:function(){return e.jB},ExtRadio:function(){return e.XA},ExtSelect:function(){return e.qM},ExtSwitch:function(){return e.M$},ExtTreeSelect:function(){return e.me},FetchSelect:function(){return e.LU},FetchTreeSelect:function(){return e.$0},FieldWrapper:function(){return e.cm},FieldsMapping:function(){return e.W1},Fieldset:function(){return e.LB},FormCell:function(){return e.JT},GridTable:function(){return e.dT},ImageUpload:function(){return e.BR},Layout:function(){return e.PE},ModalForm:function(){return e.Kw},PageHeader:function(){return e.zY},PictureUpload:function(){return e.gh},ReactDomUtils:function(){return e.L$},SearchToolbar:function(){return e.kt},SessionStorageUtils:function(){return e.Ng},TableToolbar:function(){return e.e1},VerificationCodeInput:function(){return e.Px},VideoUpload:function(){return e.p0},useCssInJs:function(){return e.hD}});var m={"fetch-tree-select-demo-base":{component:o.memo(o.lazy(function(){return t.e(3063).then(t.bind(t,46950))})),asset:{type:"BLOCK",id:"fetch-tree-select-demo-base",refAtomIds:["fetch-tree-select"],dependencies:{"index.tsx":{type:"FILE",value:t(78536).A},"@trionesdev/antd-react-ext":{type:"NPM",value:"6.0.0-beta.11"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},routeId:"components/fetch-tree-select/index",context:{"@trionesdev/antd-react-ext":a,react:u||(u=t.t(o,2))},renderOpts:{compile:(function(){var f=_()(d()().mark(function h(){var i,p=arguments;return d()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.e(2306).then(t.bind(t,12306));case 2:return r.abrupt("return",(i=r.sent).default.apply(i,p));case 3:case"end":return r.stop()}},h)}));function E(){return f.apply(this,arguments)}return E})()}}}}),93490:(function(c,n,t){t.r(n);const u=[{value:"\u83B7\u53D6\u8FDC\u7A0B\u6570\u636E\u7684TreeSelect",paraId:0,tocIndex:0}];t.d(n,["texts",0,u])}),78536:(function(c,n){n.A=`import { FetchTreeSelect } from '@trionesdev/antd-react-ext';
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
`})}]);
