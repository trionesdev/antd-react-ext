import { PageHeader } from '@trionesdev/antd-react-ext';
import { Button, Flex, Typography } from 'antd';
import React from 'react';

export default () => (
  <Flex vertical gap={24}>
    <div>
      <Typography.Text type="secondary">default</Typography.Text>
      <PageHeader
        title="标题"
        subTitle="副标题"
        extra={[
          <Button key="pub-btn" type="primary">
            发布
          </Button>,
        ]}
      />
    </div>
    <div>
      <Typography.Text type="secondary">small</Typography.Text>
      <PageHeader
        size="small"
        title="标题"
        subTitle="副标题"
        extra={[
          <Button key="pub-btn" type="primary" size="small">
            发布
          </Button>,
        ]}
      />
    </div>
    <div>
      <Typography.Text type="secondary">noPadding</Typography.Text>
      <PageHeader
        noPadding
        title="标题"
        subTitle="副标题"
        extra={[
          <Button key="pub-btn" type="primary">
            发布
          </Button>,
        ]}
      />
    </div>
  </Flex>
);
