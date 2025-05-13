"use strict";(self.webpackChunk_trionesdev_antd_react_ext=self.webpackChunk_trionesdev_antd_react_ext||[]).push([[9250],{87067:function(o,n,e){var a;e.r(n),e.d(n,{demos:function(){return c}});var d=e(15009),_=e.n(d),u=e(99289),l=e.n(u),r=e(67294),m=e(77775),i=e(42025),c={"app-toolbar-demo-base":{component:r.memo(r.lazy(function(){return e.e(148).then(e.bind(e,71437))})),asset:{type:"BLOCK",id:"app-toolbar-demo-base",refAtomIds:["app-toolbar"],dependencies:{"index.tsx":{type:"FILE",value:e(40866).Z},"@trionesdev/antd-react-ext":{type:"NPM",value:"0.0.7-beta.16"},antd:{type:"NPM",value:"5.25.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@trionesdev/antd-react-ext":m,antd:i,react:a||(a=e.t(r,2))},renderOpts:{compile:function(){var p=l()(_()().mark(function E(){var s,f=arguments;return _()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,f));case 3:case"end":return t.stop()}},E)}));function v(){return p.apply(this,arguments)}return v}()}}}},1384:function(o,n,e){e.r(n),e.d(n,{texts:function(){return a}});const a=[{value:"\u5E94\u7528\u5DE5\u5177\u680F",paraId:0,tocIndex:0}]},40866:function(o,n){n.Z=`import { AppToolbar } from '@trionesdev/antd-react-ext';
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
