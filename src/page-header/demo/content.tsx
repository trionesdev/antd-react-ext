import { PageHeader } from '@trionesdev/antd-react-ext';
import { Descriptions, Tabs, Tag } from 'antd';
import React from 'react';

export default () => (
  <PageHeader
    title="合同审批"
    subTitle="CT-2026-0315"
    breadcrumb={{
      items: [
        { title: '工作台' },
        { title: '审批中心' },
        { title: '合同审批' },
      ],
    }}
    footer={
      <Tabs
        items={[
          { key: 'detail', label: '详情' },
          { key: 'flow', label: '流转记录' },
          { key: 'attach', label: '附件' },
        ]}
      />
    }
  >
    <Descriptions size="small" column={3}>
      <Descriptions.Item label="申请人">李四</Descriptions.Item>
      <Descriptions.Item label="部门">销售一部</Descriptions.Item>
      <Descriptions.Item label="状态">
        <Tag color="processing">审批中</Tag>
      </Descriptions.Item>
      <Descriptions.Item label="金额">¥128,000.00</Descriptions.Item>
      <Descriptions.Item label="提交时间">2026-03-15 14:20</Descriptions.Item>
      <Descriptions.Item label="截止时间">2026-03-28</Descriptions.Item>
    </Descriptions>
  </PageHeader>
);
