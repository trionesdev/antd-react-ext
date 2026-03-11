import { GridTable } from '@trionesdev/antd-react-ext';
import { ColumnGroupType, ColumnType } from 'antd/es/table';
import React from 'react';

export default () => {
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      width: 100,
    },
    {
      title: '年龄',
      dataIndex: 'age',
    },
  ];

  const dataScore = [
    { name: '小明', age: 19 },
    { name: '小王', age: 38 },
  ];

  const columns2 = [
    {
      title: '姓名',
      dataIndex: 'name',

    },
    {
      title: '年龄',
      dataIndex: 'age',
      width: 100,
    },
    {
      title: '地址',
      dataIndex: 'address',
    },
    {
      title: '电话',
      dataIndex: 'phone',
    },
    {
      title: '邮箱',
      dataIndex: 'email',
    },
    {
      title: '网站',
      dataIndex: 'website',
    },
    {
      title: 'QQ',
      dataIndex: 'qq',
    },
    {
      title: '操作',
      dataIndex: 'action',
      width: 100,
    },
  ];

  const columns3 = [
    {
      title: '姓名',
      dataIndex: 'name',
      fixed: 'start',
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
    },
    {
      title: '邮箱',
      dataIndex: 'email',
    },
    {
      title: '网站',
      dataIndex: 'website',
    },
    {
      title: 'QQ',
      dataIndex: 'qq',
    },
    {
      title: '操作',
      dataIndex: 'action',
      width: 100,
      fixed: 'end',
    },
  ];

  return (
    <div>
      <GridTable columns={columns} dataSource={dataScore} />
      <GridTable
        columns={columns2}
        dataSource={dataScore}
        scroll={{ x: 'max-content' }}
      />
      <GridTable
        columns={columns3 as (ColumnGroupType<any> | ColumnType<any>)[]}
        dataSource={dataScore}
        resizable={true}
        scroll={{ x: 'max-content' }}
      />
      <GridTable
        bordered={true}
        columns={columns3 as (ColumnGroupType<any> | ColumnType<any>)[]}
        dataSource={dataScore}
        resizable={true}
        scroll={{ x: 'max-content' }}
      />
    </div>
  );
};
