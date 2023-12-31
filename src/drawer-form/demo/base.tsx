import { DrawerForm } from '@trionesdev/antd-react-ext';
import { Button, Form, Input } from 'antd';
import React from 'react';

export default () => (
  <div>
    <DrawerForm trigger={<Button>新建</Button>} title={`表单`}>
      <Form.Item label={`姓名`} name={`name`}>
        <Input />
      </Form.Item>
    </DrawerForm>
  </div>
);
