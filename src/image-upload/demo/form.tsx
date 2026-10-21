import { ImageUpload } from '@trionesdev/antd-react-ext';
import { Button, Form, Input } from 'antd';
import React from 'react';

export default () => {
  return (
    <Form
      layout="vertical"
      style={{ maxWidth: 480 }}
      onFinish={(values) => {
        console.log(values);
      }}
    >
      <Form.Item label="标题" name="title" rules={[{ required: true }]}>
        <Input placeholder="请输入标题" />
      </Form.Item>
      <Form.Item
        label="封面"
        name="cover"
        rules={[{ required: true, message: '请上传封面' }]}
      >
        <ImageUpload width={320} height={180} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form.Item>
    </Form>
  );
};
