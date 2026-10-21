import { ImageUpload } from '@trionesdev/antd-react-ext';
import { Flex, Typography } from 'antd';
import React from 'react';

const cover =
  'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png';

export default () => {
  return (
    <Flex gap={24} wrap align="flex-start">
      <div>
        <Typography.Text type="secondary">160 × 90</Typography.Text>
        <ImageUpload width={160} height={90} value={{ url: cover }} />
      </div>
      <div>
        <Typography.Text type="secondary">320 × 180</Typography.Text>
        <ImageUpload width={320} height={180} value={{ url: cover }} />
      </div>
      <div>
        <Typography.Text type="secondary">480 × 270</Typography.Text>
        <ImageUpload width={480} height={270} value={{ url: cover }} />
      </div>
    </Flex>
  );
};
