import { GridTable } from '@trionesdev/antd-react-ext';
import React from 'react';

export default () => {
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      width: 120,
      fixed: 'start' as const,
    },
    {
      title: '年龄',
      dataIndex: 'age',
      width: 100,
    },
    {
      title: '地址',
      dataIndex: 'address',
      width: 220,
    },
    {
      title: '电话',
      dataIndex: 'phone',
      width: 160,
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      width: 220,
    },
    {
      title: '部门',
      dataIndex: 'dept',
      width: 160,
    },
    {
      title: '职位',
      dataIndex: 'title',
      width: 160,
    },
    {
      title: '入职日期',
      dataIndex: 'joinDate',
      width: 140,
    },
    {
      title: '备注',
      dataIndex: 'remark',
      width: 200,
    },
    {
      title: '操作',
      dataIndex: 'action',
      width: 100,
      fixed: 'end' as const,
      render: () => <a>查看</a>,
    },
  ];

  const dataSource = [
    {
      key: '1',
      name: '小明',
      age: 19,
      address: '上海市浦东新区',
      phone: '13800001111',
      email: 'xiaoming@example.com',
      dept: '研发中心',
      title: '前端工程师',
      joinDate: '2024-03-01',
      remark: '校招生',
    },
    {
      key: '2',
      name: '小王',
      age: 38,
      address: '北京市朝阳区',
      phone: '13900002222',
      email: 'xiaowang@example.com',
      dept: '产品部',
      title: '产品经理',
      joinDate: '2020-08-15',
      remark: '骨干',
    },
  ];

  return (
    <div style={{ height: 360, border: '1px solid #f0f0f0' }}>
      <GridTable
        fit
        columns={columns}
        dataSource={dataSource}
        scroll={{ x: 'max-content' }}
      />
    </div>
  );
};
