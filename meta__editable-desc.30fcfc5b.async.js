"use strict";(self.webpackChunk_trionesdev_antd_react_ext=self.webpackChunk_trionesdev_antd_react_ext||[]).push([[3050],{47782:function(i,t,e){var a;e.r(t),e.d(t,{demos:function(){return g}});var f=e(15009),d=e.n(f),v=e(99289),c=e.n(v),r=e(67294),E=e(65567),p=e(71354),g={"editable-desc-demo-base":{component:r.memo(r.lazy(function(){return e.e(5633).then(e.bind(e,45005))})),asset:{type:"BLOCK",id:"editable-desc-demo-base",refAtomIds:["editable-desc"],dependencies:{"index.tsx":{type:"FILE",value:e(85833).Z},"@trionesdev/antd-react-ext":{type:"NPM",value:"6.0.0-beta.0"},antd:{type:"NPM",value:"6.1.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@trionesdev/antd-react-ext":E,antd:p,react:a||(a=e.t(r,2))},renderOpts:{compile:function(){var l=c()(d()().mark(function m(){var o,u=arguments;return d()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(250).then(e.bind(e,90250));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,u));case 3:case"end":return n.stop()}},m)}));function s(){return l.apply(this,arguments)}return s}()}},"editable-desc-demo-form":{component:r.memo(r.lazy(function(){return e.e(5633).then(e.bind(e,70124))})),asset:{type:"BLOCK",id:"editable-desc-demo-form",refAtomIds:["editable-desc"],dependencies:{"index.tsx":{type:"FILE",value:e(34248).Z},"@trionesdev/antd-react-ext":{type:"NPM",value:"6.0.0-beta.0"},antd:{type:"NPM",value:"6.1.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@trionesdev/antd-react-ext":E,antd:p,react:a||(a=e.t(r,2))},renderOpts:{compile:function(){var l=c()(d()().mark(function m(){var o,u=arguments;return d()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(250).then(e.bind(e,90250));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,u));case 3:case"end":return n.stop()}},m)}));function s(){return l.apply(this,arguments)}return s}()}}}},30447:function(i,t,e){e.r(t),e.d(t,{texts:function(){return a}});const a=[{value:"\u8868\u5355\u5185\u5BB9\u53EF\u7F16\u8F91",paraId:0,tocIndex:0}]},85833:function(i,t){t.Z=`import { EditableDesc } from '@trionesdev/antd-react-ext';
import { Button, Form, Input, Select, Space } from 'antd';
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
      description: '\u63CF\u8FF0',
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
      <Form.Item label={\`\u63CF\u8FF0\`} name={\`description\`}>
        <EditableDesc block={true} editing={editing}>
          <Input.TextArea />
        </EditableDesc>
      </Form.Item>
      <Form.Item>
        <Space>
          <Button
            onClick={() => {
              setEditing(true);
            }}
          >
            \u7F16\u8F91
          </Button>
          <Button
            onClick={() => {
              setEditing(false);
            }}
          >
            \u53D6\u6D88
          </Button>
          <Button type={\`primary\`} onClick={handleSave}>
            \u4FDD\u5B58
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};
`},34248:function(i,t){t.Z=`import { EditableDesc } from '@trionesdev/antd-react-ext';
import { Button, Form, Input, Select, Space } from 'antd';
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
      description: '\u63CF\u8FF0',
    });
  }, []);

  return (
    <Form form={form}>
      <Form.Item label={\`\u59D3\u540D\`} name={\`name\`}>
        <EditableDesc editing={editing}>
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
          editing={editing}
        >
          <Select>
            <Select.Option value={\`MALE\`}>\u7537</Select.Option>
            <Select.Option value={\`FEMA\`}>\u5973</Select.Option>
          </Select>
        </EditableDesc>
      </Form.Item>
      <Form.Item label={\`\u5E74\u9F84\`} name={\`age\`}>
        <EditableDesc editing={editing}>
          <Input />
        </EditableDesc>
      </Form.Item>
      <Form.Item label={\`\u63CF\u8FF0\`} name={\`description\`}>
        <EditableDesc block={true} editing={editing}>
          <Input.TextArea />
        </EditableDesc>
      </Form.Item>
      <Form.Item label={\`\u63CF\u8FF02\`} name={\`description2\`}>
        <EditableDesc block={true} editing={editing}>
          <textarea />
        </EditableDesc>
      </Form.Item>
      <Form.Item>
        <Space>
          <Button
            onClick={() => {
              setEditing(true);
            }}
          >
            \u7F16\u8F91
          </Button>
          <Button
            onClick={() => {
              setEditing(false);
            }}
          >
            \u53D6\u6D88
          </Button>
          <Button type={\`primary\`} onClick={handleSave}>
            \u4FDD\u5B58
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};
`}}]);
