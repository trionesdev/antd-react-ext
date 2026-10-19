import { GridTable } from '@trionesdev/antd-react-ext';
import React from 'react';
import { data200 } from './data';

export default () => {
  const columns: any[] = [
    {
      title: '姓名',
      dataIndex: 'name',
      fixed: 'start',
      width: 120,
    },
    {
      title: '年龄',
      dataIndex: 'age',
      width: 100,
    },
    {
      title: '地址',
      dataIndex: 'address',
      width: 200,
    },
    {
      title: '电话',
      dataIndex: 'phone',
      width: 140,
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      width: 180,
    },
    {
      title: '网站',
      dataIndex: 'website',
      width: 160,
    },
    {
      title: '操作',
      dataIndex: 'action',
      width: 100,
      fixed: 'end',
    },
  ];

  return (
    <div style={{ height: 360, border: '1px solid #f0f0f0' }}>
      <div style={{ height: '100%', display: 'flex', minWidth: 0 }}>
        <div
          style={{
            width: 160,
            flexShrink: 0,
            padding: 12,
            borderRight: '1px solid #f0f0f0',
            background: '#fafafa',
          }}
        >
          侧边区域
        </div>
        <div style={{ flex: 'auto', minWidth: 0, overflow: 'hidden' }}>
          <GridTable
            fit
            resizable
            columns={columns}
            dataSource={data200}
          />
        </div>
      </div>
    </div>
  );
};
