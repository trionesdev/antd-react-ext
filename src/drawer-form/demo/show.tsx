import { DrawerForm } from '@trionesdev/antd-react-ext';
import { Button } from 'antd';
import React from 'react';

export default () => {
  return (
    <div>
      <Button
        onClick={() => {
          DrawerForm.show({});
        }}
      >
        打开
      </Button>
    </div>
  );
};
