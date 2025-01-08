"use strict";(self.webpackChunk_trionesdev_antd_react_ext=self.webpackChunk_trionesdev_antd_react_ext||[]).push([[9250],{87067:function(o,t,e){var a;e.r(t),e.d(t,{demos:function(){return c}});var _=e(15009),d=e.n(_),l=e(99289),m=e.n(l),r=e(67294),M=e(95218),u=e(53511),i=e(33939),c={"app-toolbar-demo-base":{component:r.memo(r.lazy(function(){return e.e(148).then(e.bind(e,71437))})),asset:{type:"BLOCK",id:"app-toolbar-demo-base",refAtomIds:["app-toolbar"],dependencies:{"index.tsx":{type:"FILE",value:e(40866).Z},"@trionesdev/antd-react-ext":{type:"NPM",value:"0.0.7-beta.12"},antd:{type:"NPM",value:"5.23.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@trionesdev/antd-react-ext":u,antd:i,react:a||(a=e.t(r,2))},renderOpts:{compile:function(){var p=m()(d()().mark(function v(){var s,x=arguments;return d()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,x));case 3:case"end":return n.stop()}},v)}));function E(){return p.apply(this,arguments)}return E}()}}}},1384:function(o,t,e){e.r(t),e.d(t,{texts:function(){return _}});var a=e(95218);const _=[{value:"\u5E94\u7528\u5DE5\u5177\u680F",paraId:0,tocIndex:0}]},40866:function(o,t){t.Z=`import { AppToolbar } from '@trionesdev/antd-react-ext';
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
