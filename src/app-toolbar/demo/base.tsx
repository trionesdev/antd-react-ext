import {AppToolbar} from '@moensun/antd-react-ext';
import React from 'react';
import {Button} from "antd";

export default () => {
  const items = [{
    key: 'user',
    label: '用户'
  },
    {
      key: 'permission',
      label: '权限'
    },
    {
      key: '1',
      label: '功能清单'
    }
  ]
  return <div>
    <AppToolbar title={'个人中心'} navItems={items}
                extra={[<Button key={`settings-btn`} type={`primary`}>设置</Button>]}/>
  </div>
};
