"use strict";(self.webpackChunk_trionesdev_antd_react_ext=self.webpackChunk_trionesdev_antd_react_ext||[]).push([[250],{13115:function(a,n,e){e.r(n),e.d(n,{demos:function(){return l}});var r=e(97983),o=e.n(r),u=e(40794),m=e.n(u),s=e(67294),l={"app-toolbar-demo-base":{component:s.memo(s.lazy(function(){return e.e(148).then(e.bind(e,67472))})),asset:{type:"BLOCK",id:"app-toolbar-demo-base",refAtomIds:["app-toolbar"],dependencies:{"index.tsx":{type:"FILE",value:e(40866).Z},"@trionesdev/antd-react-ext":{type:"NPM",value:"0.0.6-beta.2"},antd:{type:"NPM",value:"5.18.0"},react:{type:"NPM",value:"18.2.0"}},entry:"index.tsx"},context:{"@trionesdev/antd-react-ext":e(72590),antd:e(54441),react:e(67294)},renderOpts:{compile:function(){var _=m()(o()().mark(function p(){var d,c=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(944).then(e.bind(e,99944));case 2:return t.abrupt("return",(d=t.sent).default.apply(d,c));case 3:case"end":return t.stop()}},p)}));function i(){return _.apply(this,arguments)}return i}()}}}},49334:function(a,n,e){e.r(n),e.d(n,{texts:function(){return r}});const r=[{value:"\u5E94\u7528\u5DE5\u5177\u680F",paraId:0,tocIndex:0}]},40866:function(a,n){n.Z=`import { AppToolbar } from '@trionesdev/antd-react-ext';
import { Button } from 'antd';
import React from 'react';

export default () => {
  const items = [
    {
      key: 'user',
      label: '\u7528\u6237',
    },
    {
      key: 'permission',
      label: '\u6743\u9650',
    },
    {
      key: '1',
      label: '\u529F\u80FD\u6E05\u5355',
    },
  ];
  return (
    <div>
      <AppToolbar
        title={'\u4E2A\u4EBA\u4E2D\u5FC3'}
        navItems={items}
        extra={[
          <Button key={\`settings-btn\`} type={\`primary\`}>
            \u8BBE\u7F6E
          </Button>,
        ]}
      />
    </div>
  );
};
`}}]);
