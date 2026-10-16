import { AppToolbar } from '@trionesdev/antd-react-ext';
import { Button, Flex, Typography } from 'antd';
import React from 'react';

const items = [
  {
    key: 'user',
    label: '用户',
  },
  {
    key: 'permission',
    label: '权限',
  },
  {
    key: '1',
    label: '功能清单',
  },
];

export default () => {
  return (
    <Flex vertical gap={24}>
      <div>
        <Typography.Text type="secondary">默认高度 60</Typography.Text>
        <AppToolbar
          title="个人中心"
          items={items}
          extra={[
            <Button key="settings-btn" type="primary">
              设置
            </Button>,
          ]}
        />
      </div>
      <div>
        <Typography.Text type="secondary">height=48</Typography.Text>
        <AppToolbar
          height={48}
          title="个人中心"
          items={items}
          extra={[
            <Button key="settings-btn" type="primary" size="small">
              设置
            </Button>,
          ]}
        />
      </div>
    </Flex>
  );
};
