import { DrawerForm } from '@trionesdev/antd-react-ext';
import { Button, Form, Input } from 'antd';
import React from 'react';

export default () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <DrawerForm
        trigger={<Button>新建</Button>}
        title={`表单`}
        open={open}
        onTriggerClick={() => {
          setOpen(true);
        }}
        onClose={() => setOpen(false)}
        onCancel={() => setOpen(false)}
      >
        <Form.Item label={`姓名`} name={`name`}>
          <Input />
        </Form.Item>
      </DrawerForm>
    </div>
  );
};
