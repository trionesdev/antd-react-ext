import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { FormCell } from '@trionesdev/antd-react-ext';
import { Button, Flex, Form, Input, Select } from 'antd';
import React from 'react';

export default () => {
  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      layout="vertical"
      style={{ maxWidth: 400 }}
      initialValues={{
        name: '张三',
        customer: '华东区 / 上海分公司',
      }}
    >
      <Form.Item label="姓名" name="name" rules={[{ required: true }]}>
        <Input placeholder="请输入姓名" />
      </Form.Item>
      <Form.Item label="客户" name="customer" rules={[{ required: true }]}>
        <FormCell
          prefix={<UserOutlined />}
          suffix={<DownOutlined />}
          placeholder="请选择客户"
        />
      </Form.Item>
      <Form.Item label="来源" name="source">
        <Select
          placeholder="请选择"
          options={[
            { label: '官网', value: 'web' },
            { label: '转介绍', value: 'ref' },
          ]}
        />
      </Form.Item>
      <Form.Item>
        <Flex gap={8}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
          <Button onClick={() => form.resetFields()}>重置</Button>
        </Flex>
      </Form.Item>
    </Form>
  );
};
