import { FormCell } from '@trionesdev/antd-react-ext';
import { Flex, Input, Typography } from 'antd';
import React from 'react';

export default () => {
  return (
    <Flex vertical gap={16} style={{ maxWidth: 360 }}>
      <div>
        <Typography.Text type="secondary">原生 Input</Typography.Text>
        <Input placeholder="请输入" />
      </div>
      <div>
        <Typography.Text type="secondary">FormCell</Typography.Text>
        <FormCell placeholder="请选择或输入">自定义展示内容</FormCell>
      </div>
      <div>
        <Typography.Text type="secondary">空状态</Typography.Text>
        <FormCell placeholder="请选择客户" />
      </div>
    </Flex>
  );
};
