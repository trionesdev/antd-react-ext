import { LeftCircleOutlined, LeftOutlined } from '@ant-design/icons';
import { PageHeader } from '@trionesdev/antd-react-ext';
import { Button, Flex, Typography, message } from 'antd';
import React from 'react';

export default () => (
  <Flex vertical gap={24}>
    <div>
      <Typography.Text type="secondary">默认返回按钮</Typography.Text>
      <PageHeader
        title="订单详情"
        onBack={() => message.info('返回')}
        extra={<Button type="primary">发布</Button>}
      />
    </div>
    <div>
      <Typography.Text type="secondary">自定义图标按钮</Typography.Text>
      <PageHeader
        title="订单详情"
        onBack={() => message.info('返回')}
        back={
          <Button type="text" icon={<LeftCircleOutlined />} />
        }
        extra={<Button type="primary">发布</Button>}
      />
    </div>
    <div>
      <Typography.Text type="secondary">自定义文案返回</Typography.Text>
      <PageHeader
        title="订单详情"
        onBack={() => message.info('返回')}
        back={
          <Button type="link" icon={<LeftOutlined />}>
            返回列表
          </Button>
        }
        extra={<Button type="primary">发布</Button>}
      />
    </div>
  </Flex>
);
