"use strict";(self.webpackChunk_trionesdev_antd_react_ext=self.webpackChunk_trionesdev_antd_react_ext||[]).push([[2899],{33123:function(o,n,e){var r;e.r(n),e.d(n,{demos:function(){return i}});var _=e(15009),d=e.n(_),m=e(99289),u=e.n(m),a=e(67294),O=e(98046),l=e(80199),c=e(33939),i={"drawer-form-demo-base":{component:a.memo(a.lazy(function(){return e.e(1341).then(e.bind(e,98635))})),asset:{type:"BLOCK",id:"drawer-form-demo-base",refAtomIds:["drawer-form"],dependencies:{"index.tsx":{type:"FILE",value:e(92984).Z},"@trionesdev/antd-react-ext":{type:"NPM",value:"0.0.7-beta.10"},antd:{type:"NPM",value:"5.22.2"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@trionesdev/antd-react-ext":l,antd:c,react:r||(r=e.t(a,2))},renderOpts:{compile:function(){var E=u()(d()().mark(function p(){var s,v=arguments;return d()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,v));case 3:case"end":return t.stop()}},p)}));function f(){return E.apply(this,arguments)}return f}()}}}},26920:function(o,n,e){e.r(n),e.d(n,{texts:function(){return _}});var r=e(98046);const _=[{value:"\u62BD\u5C49\u8868\u5355",paraId:0,tocIndex:0}]},92984:function(o,n){n.Z=`import { DrawerForm } from '@trionesdev/antd-react-ext';
import { Button, Form, Input } from 'antd';
import React from 'react';

export default () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <DrawerForm
        trigger={<Button>\u65B0\u5EFA</Button>}
        title={\`\u8868\u5355\`}
        open={open}
        onTriggerClick={() => {
          setOpen(true);
        }}
        onClose={() => setOpen(false)}
        onCancel={() => setOpen(false)}
      >
        <Form.Item label={\`\u59D3\u540D\`} name={\`name\`}>
          <Input />
        </Form.Item>
      </DrawerForm>
    </div>
  );
};
`}}]);
