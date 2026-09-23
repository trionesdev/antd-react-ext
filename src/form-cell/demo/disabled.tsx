import { UserOutlined } from '@ant-design/icons';
import { FormCell } from '@trionesdev/antd-react-ext';
import { Flex, Input, Typography } from 'antd';
import React from 'react';

export default () => {
  return (
    <Flex vertical gap={16} style={{ maxWidth: 360 }}>
      <div>
        <Typography.Text type="secondary">outlined</Typography.Text>
        <Flex vertical gap={8}>
          <Input disabled prefix={<UserOutlined />} defaultValue="禁用 Input" />
          <FormCell disabled prefix={<UserOutlined />}>
            禁用 FormCell
          </FormCell>
        </Flex>
      </div>
      <div>
        <Typography.Text type="secondary">filled</Typography.Text>
        <FormCell disabled variant="filled" prefix={<UserOutlined />}>
          禁用 FormCell
        </FormCell>
      </div>
      <div>
        <Typography.Text type="secondary">空状态禁用</Typography.Text>
        <FormCell disabled placeholder="不可选择" />
      </div>
    </Flex>
  );
};
