import { ImageUpload } from '@trionesdev/antd-react-ext';
import { Flex, Typography } from 'antd';
import React from 'react';

export default () => {
  return (
    <Flex gap={24} wrap>
      <div>
        <Typography.Text type="secondary">可编辑</Typography.Text>
        <ImageUpload />
      </div>
      <div>
        <Typography.Text type="secondary">只读空态</Typography.Text>
        <ImageUpload readOnly />
      </div>
    </Flex>
  );
};
