"use strict";(self.webpackChunk_trionesdev_antd_react_ext=self.webpackChunk_trionesdev_antd_react_ext||[]).push([[3050],{47782:function(_,n,e){var a;e.r(n),e.d(n,{demos:function(){return c}});var r=e(15009),o=e.n(r),l=e(99289),m=e.n(l),d=e(67294),D=e(57601),u=e(62760),i=e(73453),c={"editable-desc-demo-base":{component:d.memo(d.lazy(function(){return e.e(5633).then(e.bind(e,45005))})),asset:{type:"BLOCK",id:"editable-desc-demo-base",refAtomIds:["editable-desc"],dependencies:{"index.tsx":{type:"FILE",value:e(85833).Z},"@trionesdev/antd-react-ext":{type:"NPM",value:"0.0.7-beta.2"},antd:{type:"NPM",value:"5.21.2"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@trionesdev/antd-react-ext":u,antd:i,react:a||(a=e.t(d,2))},renderOpts:{compile:function(){var E=m()(o()().mark(function f(){var s,p=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,p));case 3:case"end":return t.stop()}},f)}));function v(){return E.apply(this,arguments)}return v}()}}}},30447:function(_,n,e){e.r(n),e.d(n,{texts:function(){return r}});var a=e(57601);const r=[{value:"\u8868\u5355\u5185\u5BB9\u53EF\u7F16\u8F91",paraId:0,tocIndex:0}]},85833:function(_,n){n.Z=`import { EditableDesc } from '@trionesdev/antd-react-ext';
import { Button, Form, Input, Select } from 'antd';
import React, { useEffect, useState } from 'react';

export default () => {
  const [form] = Form.useForm();
  const [editing, setEditing] = useState(false);

  const handleSave = () => {
    form.validateFields().then((values) => {
      setEditing(false);
      console.log(values);
    });
  };

  useEffect(() => {
    form.setFieldsValue({
      name: '\u5C0F\u660E',
      gender: 'MALE',
    });
  }, []);

  return (
    <Form form={form}>
      <Form.Item label={\`\u59D3\u540D\`} name={\`name\`}>
        <EditableDesc clickEdit={true} editing={editing}>
          <Input />
        </EditableDesc>
      </Form.Item>
      <Form.Item label={\`\u6027\u522B\`} name={\`gender\`}>
        <EditableDesc
          valueRender={(v) => {
            if (v === 'MALE') {
              return '\u7537';
            } else {
              return '\u5973';
            }
          }}
          clickEdit={true}
          manualChange={true}
          editIcon={false}
          editing={editing}
        >
          <Select>
            <Select.Option value={\`MALE\`}>\u7537</Select.Option>
            <Select.Option value={\`FEMA\`}>\u5973</Select.Option>
          </Select>
        </EditableDesc>
      </Form.Item>
      <Form.Item label={\`\u5E74\u9F84\`} name={\`age\`}>
        <EditableDesc editing={editing} editIcon={true} manualChange={true}>
          <Input />
        </EditableDesc>
      </Form.Item>
      <Form.Item>
        <Button type={\`primary\`} onClick={handleSave}>
          \u4FDD\u5B58
        </Button>
      </Form.Item>
    </Form>
  );
};
`}}]);
