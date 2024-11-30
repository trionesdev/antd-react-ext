import { Button } from 'antd';
import React from 'react';
import ModalForm from '../index';

export default () => {
  return (
    <div>
      <Button
        onClick={() => {
          ModalForm.show({});
        }}
      >
        打开
      </Button>
    </div>
  );
};
