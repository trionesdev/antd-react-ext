import { PageHeader } from '@trionesdev/antd-react-ext';
import { Button } from 'antd';
import React from 'react';

export default () => (
  <PageHeader
    title={`标题`}
    subTitle={`副标题`}
    extra={[
      <Button key={`pub-btn`} type={`primary`}>
        发布
      </Button>,
    ]}
  />
);
