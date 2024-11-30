"use strict";(self.webpackChunk_trionesdev_antd_react_ext=self.webpackChunk_trionesdev_antd_react_ext||[]).push([[3050],{47782:function(i,t,e){var r;e.r(t),e.d(t,{demos:function(){return v}});var l=e(15009),o=e.n(l),f=e(99289),_=e.n(f),a=e(67294),g=e(57601),E=e(53511),p=e(33939),v={"editable-desc-demo-base":{component:a.memo(a.lazy(function(){return e.e(5633).then(e.bind(e,45005))})),asset:{type:"BLOCK",id:"editable-desc-demo-base",refAtomIds:["editable-desc"],dependencies:{"index.tsx":{type:"FILE",value:e(85833).Z},"@trionesdev/antd-react-ext":{type:"NPM",value:"0.0.7-beta.11"},antd:{type:"NPM",value:"5.22.2"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@trionesdev/antd-react-ext":E,antd:p,react:r||(r=e.t(a,2))},renderOpts:{compile:function(){var s=_()(o()().mark(function u(){var d,c=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(d=n.sent).default.apply(d,c));case 3:case"end":return n.stop()}},u)}));function m(){return s.apply(this,arguments)}return m}()}},"editable-desc-demo-form":{component:a.memo(a.lazy(function(){return e.e(5633).then(e.bind(e,70124))})),asset:{type:"BLOCK",id:"editable-desc-demo-form",refAtomIds:["editable-desc"],dependencies:{"index.tsx":{type:"FILE",value:e(34248).Z},"@trionesdev/antd-react-ext":{type:"NPM",value:"0.0.7-beta.11"},antd:{type:"NPM",value:"5.22.2"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@trionesdev/antd-react-ext":E,antd:p,react:r||(r=e.t(a,2))},renderOpts:{compile:function(){var s=_()(o()().mark(function u(){var d,c=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(d=n.sent).default.apply(d,c));case 3:case"end":return n.stop()}},u)}));function m(){return s.apply(this,arguments)}return m}()}}}},30447:function(i,t,e){e.r(t),e.d(t,{texts:function(){return l}});var r=e(57601);const l=[{value:"\u8868\u5355\u5185\u5BB9\u53EF\u7F16\u8F91",paraId:0,tocIndex:0}]},85833:function(i,t){t.Z=`import { EditableDesc } from '@trionesdev/antd-react-ext';
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
