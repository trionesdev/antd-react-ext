import { GridTable } from '@trionesdev/antd-react-ext';
import React from 'react';

export default () => {
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
    },
    {
      title: '地址',
      dataIndex: 'address',
    },
  ];

  const dataSource = [
    { key: '1', name: '小明', age: 19, address: '上海' },
    { key: '2', name: '小王', age: 38, address: '北京' },
  ];

  return (
    <div style={{ height: 360, border: '1px solid #f0f0f0' }}>
      <GridTable fit columns={columns} dataSource={dataSource} />
    </div>
  );
};
