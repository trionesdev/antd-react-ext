import { Layout } from '@trionesdev/antd-react-ext';
import React from 'react';

export default () => {
  return (
    <div style={{ height: 400 }}>
      <Layout direction={`vertical`}>
        <Layout.Item style={{ backgroundColor: '#eee' }}>header</Layout.Item>
        <Layout>
          <Layout.Item style={{ backgroundColor: '#444141' }}>left</Layout.Item>
          <Layout.Item auto>content</Layout.Item>
          <Layout.Item style={{ backgroundColor: '#4b4040' }}>
            right
          </Layout.Item>
        </Layout>
        <Layout.Item style={{ backgroundColor: '#eee' }}>footer</Layout.Item>
      </Layout>
    </div>
  );
};
