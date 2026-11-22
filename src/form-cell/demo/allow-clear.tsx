import { CloseOutlined } from '@ant-design/icons';
import { FormCell } from '@trionesdev/antd-react-ext';
import { Button, Form } from 'antd';
import React from 'react';

export default () => {
  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      layout="vertical"
      style={{ maxWidth: 400 }}
      initialValues={{ customer: '上海分公司', region: '华东区' }}
    >
      <Form.Item label="默认清除图标" name="customer">
        <FormCell allowClear placeholder="请选择客户" />
      </Form.Item>
      <Form.Item label="自定义清除图标" name="region">
        <FormCell
          allowClear={{ clearIcon: <CloseOutlined /> }}
          placeholder="请选择区域"
        />
      </Form.Item>
      <Button onClick={() => form.resetFields()}>恢复初始值</Button>
    </Form>
  );
};
