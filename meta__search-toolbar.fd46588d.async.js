"use strict";(self.webpackChunk_trionesdev_antd_react_ext=self.webpackChunk_trionesdev_antd_react_ext||[]).push([[920],{78767:function(d,e,n){var a;n.r(e),n.d(e,{demos:function(){return i}});var _=n(15009),o=n.n(_),l=n(99289),m=n.n(l),r=n(67294),u=n(77775),c=n(42025),i={"search-toolbar-demo-base":{component:r.memo(r.lazy(function(){return n.e(1553).then(n.bind(n,62055))})),asset:{type:"BLOCK",id:"search-toolbar-demo-base",refAtomIds:["search-toolbar"],dependencies:{"index.tsx":{type:"FILE",value:n(74573).Z},"@trionesdev/antd-react-ext":{type:"NPM",value:"0.0.7-beta.16"},antd:{type:"NPM",value:"5.25.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@trionesdev/antd-react-ext":u,antd:c,react:a||(a=n.t(r,2))},renderOpts:{compile:function(){var p=m()(o()().mark(function x(){var s,v=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(7335).then(n.bind(n,37335));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,v));case 3:case"end":return t.stop()}},x)}));function h(){return p.apply(this,arguments)}return h}()}}}},2139:function(d,e,n){n.r(e),n.d(e,{texts:function(){return a}});const a=[{value:"\u641C\u7D22\u5DE5\u5177\u680F",paraId:0,tocIndex:0},{value:"\u54CD\u5E94\u5F0F\u6805\u683C\uFF0C\u914D\u7F6E\u5EFA\u8BAE span={6} xxl={4} xl={6} lg={6} md={8} sm={12} xs={24}",paraId:1,tocIndex:0}]},74573:function(d,e){e.Z=`import { SearchToolbar } from '@trionesdev/antd-react-ext';
import { Input } from 'antd';
import React from 'react';

export default () => {
  const items: any[] = [
    {
      label: '\u5E74\u9F84',
      name: 'age',
      children: <Input />,
    },
    {
      label: '\u59D3\u540D',
      name: 'name',
      children: <Input />,
    },
    {
      label: '\u624B\u673A\u53F7\u7801',
      name: 'phone',
      children: <Input />,
    },
    {
      label: '\u5730\u5740',
      name: 'addr',
      children: <Input />,
    },
    {
      label: '\u90AE\u7BB1',
      name: 'email',
      children: <Input />,
    },
  ];
  return (
    <SearchToolbar
      span={6}
      xxl={6}
      xl={6}
      lg={6}
      md={8}
      sm={12}
      xs={24}
      items={items}
    />
  );
};
`}}]);
