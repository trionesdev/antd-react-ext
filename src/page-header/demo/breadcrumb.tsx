import { PageHeader } from '@trionesdev/antd-react-ext';
import { Button, message } from 'antd';
import React from 'react';

export default () => (
  <PageHeader
    title="用户详情"
    subTitle="UID: 1024"
    onBack={() => message.info('返回')}
    breadcrumb={{
      items: [
        { title: '首页' },
        { title: '用户管理' },
        { title: '用户详情' },
      ],
    }}
    extra={[
      <Button key="more">更多</Button>,
      <Button key="save" type="primary">
        保存
      </Button>,
    ]}
  />
);
