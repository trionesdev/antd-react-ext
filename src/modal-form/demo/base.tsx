import { Button, Form, Input } from 'antd';
import React from 'react';
import {ModalForm} from "@moensun/antd-react-ext";

export default () => (
  <div>
    <ModalForm trigger={<Button>新建</Button>} title={`表单`}>
      <Form.Item label={`姓名`} name={`name`}>
        <Input />
      </Form.Item>
    </ModalForm>
  </div>
);
