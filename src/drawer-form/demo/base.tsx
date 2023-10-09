import { Button, Form, Input } from 'antd';
import React from 'react';
import DrawerForm from "../drawer-form";

export default () => (
  <div>
    <DrawerForm trigger={<Button>新建</Button>} title={`表单`}>
      <Form.Item label={`姓名`} name={`name`}>
        <Input />
      </Form.Item>
    </DrawerForm>
  </div>
);
