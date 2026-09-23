import { UserOutlined } from '@ant-design/icons';
import { FormCell } from '@trionesdev/antd-react-ext';
import { Flex, Input, Typography } from 'antd';
import React from 'react';

export default () => {
  return (
    <Flex vertical gap={16} style={{ maxWidth: 360 }}>
      <div>
        <Typography.Text type="secondary">small</Typography.Text>
        <Flex vertical gap={8}>
          <Input size="small" prefix={<UserOutlined />} defaultValue="Input" />
          <FormCell size="small" prefix={<UserOutlined />}>
            FormCell
          </FormCell>
        </Flex>
      </div>
      <div>
        <Typography.Text type="secondary">middle</Typography.Text>
        <Flex vertical gap={8}>
          <Input prefix={<UserOutlined />} defaultValue="Input" />
          <FormCell prefix={<UserOutlined />}>FormCell</FormCell>
        </Flex>
      </div>
      <div>
        <Typography.Text type="secondary">large</Typography.Text>
        <Flex vertical gap={8}>
          <Input size="large" prefix={<UserOutlined />} defaultValue="Input" />
          <FormCell size="large" prefix={<UserOutlined />}>
            FormCell
          </FormCell>
        </Flex>
      </div>
    </Flex>
  );
};
