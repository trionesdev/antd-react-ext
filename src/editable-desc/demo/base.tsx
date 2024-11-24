import { EditableDesc } from '@trionesdev/antd-react-ext';
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
      name: '小明',
      gender: 'MALE',
    });
  }, []);

  return (
    <Form form={form}>
      <Form.Item label={`姓名`} name={`name`}>
        <EditableDesc clickEdit={true} editing={editing}>
          <Input />
        </EditableDesc>
      </Form.Item>
      <Form.Item label={`性别`} name={`gender`}>
        <EditableDesc
          valueRender={(v) => {
            if (v === 'MALE') {
              return '男';
            } else {
              return '女';
            }
          }}
          clickEdit={true}
          manualChange={true}
          editIcon={false}
          editing={editing}
        >
          <Select>
            <Select.Option value={`MALE`}>男</Select.Option>
            <Select.Option value={`FEMA`}>女</Select.Option>
          </Select>
        </EditableDesc>
      </Form.Item>
      <Form.Item label={`年龄`} name={`age`}>
        <EditableDesc editing={editing} editIcon={true} manualChange={true}>
          <Input />
        </EditableDesc>
      </Form.Item>
      <Form.Item label={`描述`} name={`description`}>
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
            编辑
          </Button>
          <Button type={`primary`} onClick={handleSave}>
            保存
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};
