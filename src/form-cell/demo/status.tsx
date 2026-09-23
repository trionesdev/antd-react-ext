import { FormCell } from '@trionesdev/antd-react-ext';
import { Flex, Typography } from 'antd';
import React from 'react';

export default () => {
  return (
    <Flex vertical gap={16} style={{ maxWidth: 360 }}>
      <div>
        <Typography.Text type="secondary">error</Typography.Text>
        <FormCell status="error" placeholder="请填写必填项">
          内容不正确
        </FormCell>
      </div>
      <div>
        <Typography.Text type="secondary">warning</Typography.Text>
        <FormCell status="warning">建议补充说明</FormCell>
      </div>
      <div>
        <Typography.Text type="secondary">filled + error</Typography.Text>
        <FormCell status="error" variant="filled">
          填写有误
        </FormCell>
      </div>
    </Flex>
  );
};
