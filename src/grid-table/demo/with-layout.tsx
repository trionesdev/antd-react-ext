import {
  GridTable,
  Layout,
  PageHeader,
  SearchToolbar,
} from '@trionesdev/antd-react-ext';
import { DesktopOutlined, PieChartOutlined } from '@ant-design/icons';
import { Input, Menu } from 'antd';
import React from 'react';
import { data200 } from './data';

export default () => {
  const menuItems = [
    {
      key: '1',
      label: '用户列表',
      icon: <PieChartOutlined rev={undefined} />,
    },
    {
      key: '2',
      label: '权限管理',
      icon: <DesktopOutlined rev={undefined} />,
    },
  ];

  const searchItems = [
    {
      label: '姓名',
      name: 'name',
      children: <Input placeholder="请输入" allowClear />,
    },
    {
      label: '年龄',
      name: 'age',
      children: <Input placeholder="请输入" allowClear />,
    },
  ];

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
      width: 220,
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
      title: '操作',
      dataIndex: 'action',
      width: 100,
      fixed: 'end',
      render: () => <a>查看</a>,
    },
  ];

  return (
    <div style={{ height: 480, border: '1px solid #f0f0f0' }}>
      <Layout direction="vertical">
        <Layout.Item>
          <PageHeader
            size="mini"
            showBack={false}
            title="用户管理"
            subTitle="配合 Layout 使用"
          />
        </Layout.Item>
        <Layout>
          <Layout.Sider width={180} collapsible>
            <Menu items={menuItems} defaultSelectedKeys={['1']} />
          </Layout.Sider>
          <Layout.Item auto>
            <Layout direction="vertical">
              <Layout.Item>
                <SearchToolbar
                  size="mini"
                  span={8}
                  items={searchItems}
                />
              </Layout.Item>
              <Layout.Item auto style={{ minWidth: 0, overflow: 'hidden' }}>
                <GridTable
                  fit
                  resizable
                  columns={columns}
                  dataSource={data200}
                />
              </Layout.Item>
            </Layout>
          </Layout.Item>
        </Layout>
      </Layout>
    </div>
  );
};
