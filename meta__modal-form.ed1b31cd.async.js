"use strict";(self.webpackChunk_trionesdev_antd_react_ext=self.webpackChunk_trionesdev_antd_react_ext||[]).push([[914],{20520:function(o,n,e){var _;e.r(n),e.d(n,{demos:function(){return i}});var a=e(15009),d=e.n(a),m=e(99289),l=e.n(m),r=e(67294),M=e(67039),u=e(80199),c=e(33939),i={"modal-form-demo-base":{component:r.memo(r.lazy(function(){return e.e(3422).then(e.bind(e,14763))})),asset:{type:"BLOCK",id:"modal-form-demo-base",refAtomIds:["modal-form"],dependencies:{"index.tsx":{type:"FILE",value:e(50487).Z},"@trionesdev/antd-react-ext":{type:"NPM",value:"0.0.7-beta.10"},antd:{type:"NPM",value:"5.22.2"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@trionesdev/antd-react-ext":u,antd:c,react:_||(_=e.t(r,2))},renderOpts:{compile:function(){var E=l()(d()().mark(function p(){var s,v=arguments;return d()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,v));case 3:case"end":return t.stop()}},p)}));function f(){return E.apply(this,arguments)}return f}()}}}},70446:function(o,n,e){e.r(n),e.d(n,{texts:function(){return a}});var _=e(67039);const a=[{value:"\u6A21\u6001\u6846\u8868\u5355",paraId:0,tocIndex:0}]},50487:function(o,n){n.Z=`import { ModalForm } from '@trionesdev/antd-react-ext';
import { Button, Form, Input } from 'antd';
import React from 'react';

export default () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <ModalForm
        trigger={<Button>\u65B0\u5EFA</Button>}
        open={open}
        onTriggerClick={() => {
          setOpen(true);
        }}
        onClose={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        title={\`\u8868\u5355\`}
      >
        <Form.Item label={\`\u59D3\u540D\`} name={\`name\`}>
          <Input />
        </Form.Item>
      </ModalForm>
    </div>
  );
};
`}}]);
