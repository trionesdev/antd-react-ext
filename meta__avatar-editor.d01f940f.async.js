"use strict";(self.webpackChunk_trionesdev_antd_react_ext=self.webpackChunk_trionesdev_antd_react_ext||[]).push([[8743],{13206:function(o,e,t){var a;t.r(e),t.d(e,{demos:function(){return v}});var s=t(15009),d=t.n(s),u=t(99289),m=t.n(u),r=t(67294),l=t(77775),i=t(42025),v={"avatar-editor-demo-base":{component:r.memo(r.lazy(function(){return t.e(1728).then(t.bind(t,57584))})),asset:{type:"BLOCK",id:"avatar-editor-demo-base",refAtomIds:["avatar-editor"],dependencies:{"index.tsx":{type:"FILE",value:t(53157).Z},"@trionesdev/antd-react-ext":{type:"NPM",value:"0.0.7-beta.16"},antd:{type:"NPM",value:"5.25.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@trionesdev/antd-react-ext":l,antd:i,react:a||(a=t.t(r,2))},renderOpts:{compile:function(){var c=m()(d()().mark(function p(){var _,f=arguments;return d()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.e(7335).then(t.bind(t,37335));case 2:return n.abrupt("return",(_=n.sent).default.apply(_,f));case 3:case"end":return n.stop()}},p)}));function E(){return c.apply(this,arguments)}return E}()}}}},14554:function(o,e,t){t.r(e),t.d(e,{texts:function(){return a}});const a=[{value:"\u5934\u50CF\u7F16\u8F91\u5668\uFF0C\u5E26\u56FE\u7247\u88C1\u526A\u529F\u80FD\u7684\u5934\u50CF\u7EC4\u4EF6",paraId:0,tocIndex:0}]},53157:function(o,e){e.Z=`import { AvatarEditor } from '@trionesdev/antd-react-ext';
import { Button } from 'antd';
import React from 'react';

export default () => {
  const [avatar, setAvatar] = React.useState<string>('');

  return (
    <div>
      <AvatarEditor />
      <Button
        onClick={() =>
          setAvatar(
            'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          )
        }
      >
        \u8BBE\u7F6E\u56FE\u7247
      </Button>
      <AvatarEditor value={avatar} onChange={setAvatar} />
    </div>
  );
};
`}}]);
