import {
  DownOutlined,
  SearchOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { FormCell } from '@trionesdev/antd-react-ext';
import { Flex, Input, Typography } from 'antd';
import React from 'react';

export default () => {
  return (
    <Flex vertical gap={16} style={{ maxWidth: 360 }}>
      <div>
        <Typography.Text type="secondary">对照 Input</Typography.Text>
        <Input
          prefix={<UserOutlined />}
          suffix={<SearchOutlined />}
          placeholder="搜索用户"
        />
      </div>
      <div>
        <Typography.Text type="secondary">前缀 / 后缀</Typography.Text>
        <FormCell prefix={<UserOutlined />} suffix={<SearchOutlined />}>
          张三
        </FormCell>
      </div>
      <div>
        <Typography.Text type="secondary">Select 形态</Typography.Text>
        <FormCell
          prefix={<UserOutlined />}
          suffix={<DownOutlined />}
          placeholder="请选择客户"
        >
          华东区 / 上海分公司
        </FormCell>
      </div>
    </Flex>
  );
};
