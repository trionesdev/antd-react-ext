import { Box } from '@trionesdev/antd-react-ext';
import { Flex, Typography } from 'antd';
import React from 'react';

const sizes = ['mini', 'small', 'default', 'large'] as const;

export default () => {
  return (
    <Flex vertical gap={16}>
      {sizes.map((size) => (
        <div key={size}>
          <Typography.Text type="secondary">size={size}</Typography.Text>
          <Box size={size}>
            <div>Box 内容区域</div>
          </Box>
        </div>
      ))}
      <div>
        <Typography.Text type="secondary">transparent</Typography.Text>
        <div style={{ background: '#f5f5f5', padding: 8 }}>
          <Box transparent size="default">
            <div>透明背景，可看到外层灰底</div>
          </Box>
        </div>
      </div>
    </Flex>
  );
};
