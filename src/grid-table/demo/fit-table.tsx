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
  ];

  const dataScore = [
    { name: '小明', age: 19 },
    { name: '小王', age: 38 },
    { name: '小王', age: 38 },
    { name: '小王', age: 38 },
    { name: '小王', age: 38 },
    { name: '小王', age: 38 },
    { name: '小王', age: 38 },
    { name: '小王', age: 38 },
    { name: '小王', age: 38 },
    { name: '小王', age: 38 },
    { name: '小王', age: 38 },
    { name: '小王', age: 38 },
    { name: '小王', age: 38 },
    { name: '小王', age: 38 },
    { name: '小王', age: 38 },
    { name: '小王', age: 38 },
    { name: '小王', age: 38 },
    { name: '小王', age: 38 },
    { name: '小王', age: 38 },
    { name: '小王', age: 38 },
    { name: '小王', age: 38 },
    { name: '小王', age: 38 },
  ];

  return (
    <div style={{ height: 300 }}>
      <GridTable fit={true} columns={columns} dataSource={dataScore} />
    </div>
  );
};
