"use strict";(self.webpackChunk_trionesdev_antd_react_ext=self.webpackChunk_trionesdev_antd_react_ext||[]).push([[2899],{33123:function(s,t,e){var a;e.r(t),e.d(t,{demos:function(){return E}});var m=e(15009),d=e.n(m),v=e(99289),c=e.n(v),r=e(67294),h=e(98046),p=e(75330),f=e(34445),E={"drawer-form-demo-base":{component:r.memo(r.lazy(function(){return e.e(1341).then(e.bind(e,98635))})),asset:{type:"BLOCK",id:"drawer-form-demo-base",refAtomIds:["drawer-form"],dependencies:{"index.tsx":{type:"FILE",value:e(92984).Z},"@trionesdev/antd-react-ext":{type:"NPM",value:"0.0.7-beta.12"},antd:{type:"NPM",value:"5.24.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@trionesdev/antd-react-ext":p,antd:f,react:a||(a=e.t(r,2))},renderOpts:{compile:function(){var u=c()(d()().mark(function l(){var o,i=arguments;return d()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,i));case 3:case"end":return n.stop()}},l)}));function _(){return u.apply(this,arguments)}return _}()}},"drawer-form-demo-show":{component:r.memo(r.lazy(function(){return e.e(1341).then(e.bind(e,22596))})),asset:{type:"BLOCK",id:"drawer-form-demo-show",refAtomIds:["drawer-form"],dependencies:{"index.tsx":{type:"FILE",value:e(45975).Z},"@trionesdev/antd-react-ext":{type:"NPM",value:"0.0.7-beta.12"},antd:{type:"NPM",value:"5.24.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@trionesdev/antd-react-ext":p,antd:f,react:a||(a=e.t(r,2))},renderOpts:{compile:function(){var u=c()(d()().mark(function l(){var o,i=arguments;return d()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,i));case 3:case"end":return n.stop()}},l)}));function _(){return u.apply(this,arguments)}return _}()}}}},26920:function(s,t,e){e.r(t),e.d(t,{texts:function(){return m}});var a=e(98046);const m=[{value:"\u62BD\u5C49\u8868\u5355",paraId:0,tocIndex:0}]},92984:function(s,t){t.Z=`import { DrawerForm } from '@trionesdev/antd-react-ext';
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
`},45975:function(s,t){t.Z=`import { DrawerForm } from '@trionesdev/antd-react-ext';
import { Button } from 'antd';
import React from 'react';

export default () => {
  return (
    <div>
      <Button
        onClick={() => {
          DrawerForm.show({});
        }}
      >
        \u6253\u5F00
      </Button>
    </div>
  );
};
`}}]);
