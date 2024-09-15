"use strict";(self.webpackChunk_trionesdev_antd_react_ext=self.webpackChunk_trionesdev_antd_react_ext||[]).push([[115],{57500:function(u,n,t){t.r(n),t.d(n,{demos:function(){return v}});var d=t(97983),a=t.n(d),c=t(40794),y=t.n(c),r=t(67294),v={"layout-demo-base":{component:r.memo(r.lazy(function(){return t.e(496).then(t.bind(t,41947))})),asset:{type:"BLOCK",id:"layout-demo-base",refAtomIds:["layout"],dependencies:{"index.tsx":{type:"FILE",value:t(3690).Z},"@ant-design/icons":{type:"NPM",value:"5.3.7"},"@trionesdev/antd-react-ext":{type:"NPM",value:"0.0.7-beta.0"},antd:{type:"NPM",value:"5.18.0"},react:{type:"NPM",value:"18.2.0"}},entry:"index.tsx"},context:{"@ant-design/icons":t(61200),"@trionesdev/antd-react-ext":t(31021),antd:t(54441),react:t(67294)},renderOpts:{compile:function(){var s=y()(a()().mark(function m(){var o,i=arguments;return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(944).then(t.bind(t,99944));case 2:return e.abrupt("return",(o=e.sent).default.apply(o,i));case 3:case"end":return e.stop()}},m)}));function l(){return s.apply(this,arguments)}return l}()}},"layout-demo-layout-nest":{component:r.memo(r.lazy(function(){return t.e(496).then(t.bind(t,9880))})),asset:{type:"BLOCK",id:"layout-demo-layout-nest",refAtomIds:["layout"],dependencies:{"index.tsx":{type:"FILE",value:t(12257).Z},"@trionesdev/antd-react-ext":{type:"NPM",value:"0.0.7-beta.0"},react:{type:"NPM",value:"18.2.0"}},entry:"index.tsx"},context:{"@trionesdev/antd-react-ext":t(31021),react:t(67294)},renderOpts:{compile:function(){var s=y()(a()().mark(function m(){var o,i=arguments;return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(944).then(t.bind(t,99944));case 2:return e.abrupt("return",(o=e.sent).default.apply(o,i));case 3:case"end":return e.stop()}},m)}));function l(){return s.apply(this,arguments)}return l}()}}}},18332:function(u,n,t){t.r(n),t.d(n,{texts:function(){return d}});const d=[{value:"\u5E03\u5C40",paraId:0,tocIndex:0}]},3690:function(u,n){n.Z=`import { DesktopOutlined, PieChartOutlined } from '@ant-design/icons';
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
        <Layout direction={\`vertical\`} style={{ backgroundColor: '#eee' }}>
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
`},12257:function(u,n){n.Z=`import { Layout } from '@trionesdev/antd-react-ext';
import React from 'react';

export default () => {
  return (
    <div style={{ height: 400 }}>
      <Layout direction={\`vertical\`}>
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
`}}]);
