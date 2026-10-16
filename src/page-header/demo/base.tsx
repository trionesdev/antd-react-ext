import { PageHeader } from '@trionesdev/antd-react-ext';
import { Button, message } from 'antd';
import React from 'react';

export default () => (
  <PageHeader
    title="订单详情"
    subTitle="单号：SO-20260326-001"
    onBack={() => message.info('返回上一页')}
    extra={[
      <Button key="edit">编辑</Button>,
      <Button key="pub" type="primary">
        发布
      </Button>,
    ]}
  />
);
