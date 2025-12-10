import { ModalForm } from '@trionesdev/antd-react-ext';
import { Button, Form, Input } from 'antd';
import React from 'react';

export default () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <ModalForm
        trigger={<Button>新建</Button>}
        open={open}
        onTriggerClick={() => {
          setOpen(true);
        }}

        onCancel={() => setOpen(false)}
        title={`表单`}
      >
        <Form.Item label={`姓名`} name={`name`}>
          <Input />
        </Form.Item>
      </ModalForm>
    </div>
  );
};
