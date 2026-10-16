import { SearchToolbar } from '@trionesdev/antd-react-ext';
import { Flex, Input, Typography } from 'antd';
import React from 'react';

const items: any[] = [
  {
    label: '年龄',
    name: 'age',
    children: <Input placeholder="请输入" />,
  },
  {
    label: '姓名',
    name: 'name',
    children: <Input placeholder="请输入" />,
  },
  {
    label: '手机号码',
    name: 'phone',
    children: <Input placeholder="请输入" />,
  },
  {
    label: '地址',
    name: 'addr',
    children: <Input placeholder="请输入" />,
  },
  {
    label: '邮箱',
    name: 'email',
    children: <Input placeholder="请输入" />,
  },
];

const responsiveProps = {
  span: 6,
  xxl: 6,
  xl: 6,
  lg: 6,
  md: 8,
  sm: 12,
  xs: 24,
};

export default () => {
  return (
    <Flex vertical gap={24}>
      <div>
        <Typography.Text type="secondary">default</Typography.Text>
        <SearchToolbar {...responsiveProps} items={items} />
      </div>
      <div>
        <Typography.Text type="secondary">small</Typography.Text>
        <SearchToolbar {...responsiveProps} size="small" items={items} />
      </div>
      <div>
        <Typography.Text type="secondary">mini</Typography.Text>
        <SearchToolbar {...responsiveProps} size="mini" items={items} />
      </div>
    </Flex>
  );
};
