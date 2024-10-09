"use strict";(self.webpackChunk_trionesdev_antd_react_ext=self.webpackChunk_trionesdev_antd_react_ext||[]).push([[8115],{44190:function(d,n,t){var a;t.r(n),t.d(n,{demos:function(){return I}});var s=t(15009),u=t.n(s),v=t(99289),_=t.n(v),o=t(67294),f=t(41813),L=t(3921),c=t(62760),p=t(73453),I={"layout-demo-base":{component:o.memo(o.lazy(function(){return t.e(2496).then(t.bind(t,41170))})),asset:{type:"BLOCK",id:"layout-demo-base",refAtomIds:["layout"],dependencies:{"index.tsx":{type:"FILE",value:t(3690).Z},"@ant-design/icons":{type:"NPM",value:"5.5.1"},"@trionesdev/antd-react-ext":{type:"NPM",value:"0.0.7-beta.3"},antd:{type:"NPM",value:"5.21.2"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@ant-design/icons":L,"@trionesdev/antd-react-ext":c,antd:p,react:a||(a=t.t(o,2))},renderOpts:{compile:function(){var l=_()(u()().mark(function i(){var r,y=arguments;return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(7335).then(t.bind(t,37335));case 2:return e.abrupt("return",(r=e.sent).default.apply(r,y));case 3:case"end":return e.stop()}},i)}));function m(){return l.apply(this,arguments)}return m}()}},"layout-demo-layout-nest":{component:o.memo(o.lazy(function(){return t.e(2496).then(t.bind(t,4064))})),asset:{type:"BLOCK",id:"layout-demo-layout-nest",refAtomIds:["layout"],dependencies:{"index.tsx":{type:"FILE",value:t(12257).Z},"@trionesdev/antd-react-ext":{type:"NPM",value:"0.0.7-beta.3"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@trionesdev/antd-react-ext":c,react:a||(a=t.t(o,2))},renderOpts:{compile:function(){var l=_()(u()().mark(function i(){var r,y=arguments;return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(7335).then(t.bind(t,37335));case 2:return e.abrupt("return",(r=e.sent).default.apply(r,y));case 3:case"end":return e.stop()}},i)}));function m(){return l.apply(this,arguments)}return m}()}}}},45862:function(d,n,t){t.r(n),t.d(n,{texts:function(){return s}});var a=t(41813);const s=[{value:"\u5E03\u5C40",paraId:0,tocIndex:0}]},3690:function(d,n){n.Z=`import { DesktopOutlined, PieChartOutlined } from '@ant-design/icons';
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
`},12257:function(d,n){n.Z=`import { Layout } from '@trionesdev/antd-react-ext';
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
