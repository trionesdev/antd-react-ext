import { AppToolbar } from '@trionesdev/antd-react-ext';
import { Button } from 'antd';
import React from 'react';

export default () => {
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
  return (
    <div>
      <AppToolbar
        title={'个人中心'}
        navItems={items}
        extra={[
          <Button key={`settings-btn`} type={`primary`}>
            设置
          </Button>,
        ]}
      />
    </div>
  );
};
