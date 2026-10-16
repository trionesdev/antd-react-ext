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
          <Button key="pub" type="primary">
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
          <Button key="pub" type="primary" size="small">
            发布
          </Button>,
        ]}
      />
    </div>
    <div>
      <Typography.Text type="secondary">mini（padding 为 0）</Typography.Text>
      <PageHeader
        size="mini"
        title="标题"
        subTitle="副标题"
        extra={[
          <Button key="pub" type="primary">
            发布
          </Button>,
        ]}
      />
    </div>
  </Flex>
);
