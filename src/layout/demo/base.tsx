import { DesktopOutlined, PieChartOutlined } from '@ant-design/icons';
import { Layout } from '@trionesdev/antd-react-ext';
import { Menu } from 'antd';
import React from 'react';

export default () => {
  const menuItems = [
    {
      key: '1',
      label: 'Option A',
      icon: <PieChartOutlined rev={undefined} />,
    },
    {
      key: '2',
      label: 'Option B',
      icon: <DesktopOutlined rev={undefined} />,
    },
  ];

  return (
    <div>
      <div style={{ height: 400, marginBottom: 16 }}>
        <Layout style={{ backgroundColor: '#eee' }}>
          <Layout.Item style={{ backgroundColor: '#6e6b6b' }}>sss</Layout.Item>
          <Layout.Item auto style={{ backgroundColor: '#8d7777' }}>
            auto
          </Layout.Item>
        </Layout>
      </div>
      <div style={{ height: 400, marginBottom: 16 }}>
        <Layout direction={`vertical`} style={{ backgroundColor: '#eee' }}>
          <Layout.Item style={{ backgroundColor: '#6e6b6b' }}>sss</Layout.Item>
          <Layout.Item auto style={{ backgroundColor: '#8d7777' }}>
            auto
          </Layout.Item>
        </Layout>
      </div>
      <div style={{ height: 400, marginBottom: 16 }}>
        <Layout style={{ backgroundColor: '#eee' }}>
          <Layout.Sider style={{ backgroundColor: '#6e6b6b' }}>
            <Menu items={menuItems} />
          </Layout.Sider>
          <Layout.Item auto style={{ backgroundColor: '#8d7777' }}>
            auto
          </Layout.Item>
        </Layout>
      </div>
    </div>
  );
};
