import { DownOutlined } from '@ant-design/icons';
import { PageHeader } from '@trionesdev/antd-react-ext';
import { Button, Dropdown, Space } from 'antd';
import React from 'react';

export default () => (
  <PageHeader
    title="项目看板"
    subTitle="进行中 12 / 已完成 36"
    showBack={false}
    extra={
      <Space>
        <Button>导出</Button>
        <Dropdown
          menu={{
            items: [
              { key: '1', label: '复制链接' },
              { key: '2', label: '归档' },
              { key: '3', label: '删除', danger: true },
            ],
          }}
        >
          <Button>
            更多 <DownOutlined />
          </Button>
        </Dropdown>
        <Button type="primary">新建任务</Button>
      </Space>
    }
  />
);
