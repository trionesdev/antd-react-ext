"use strict";(self.webpackChunk_trionesdev_antd_react_ext=self.webpackChunk_trionesdev_antd_react_ext||[]).push([[3050],{62170:function(r,n,e){e.r(n),e.d(n,{demos:function(){return u}});var a=e(97983),d=e.n(a),l=e(40794),m=e.n(l),o=e(67294),u={"editable-desc-demo-base":{component:o.memo(o.lazy(function(){return e.e(5633).then(e.bind(e,57696))})),asset:{type:"BLOCK",id:"editable-desc-demo-base",refAtomIds:["editable-desc"],dependencies:{"index.tsx":{type:"FILE",value:e(85833).Z},"@trionesdev/antd-react-ext":{type:"NPM",value:"0.0.7-beta.1"},antd:{type:"NPM",value:"5.18.0"},react:{type:"NPM",value:"18.2.0"}},entry:"index.tsx"},context:{"@trionesdev/antd-react-ext":e(31021),antd:e(4899),react:e(67294)},renderOpts:{compile:function(){var i=m()(d()().mark(function _(){var s,f=arguments;return d()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(9944).then(e.bind(e,99944));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,f));case 3:case"end":return t.stop()}},_)}));function c(){return i.apply(this,arguments)}return c}()}}}},90252:function(r,n,e){e.r(n),e.d(n,{texts:function(){return a}});const a=[{value:"\u8868\u5355\u5185\u5BB9\u53EF\u7F16\u8F91",paraId:0,tocIndex:0}]},85833:function(r,n){n.Z=`import { EditableDesc } from '@trionesdev/antd-react-ext';
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
