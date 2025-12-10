"use strict";(self.webpackChunk_trionesdev_antd_react_ext=self.webpackChunk_trionesdev_antd_react_ext||[]).push([[5509],{56277:function(r,e,n){var o;n.r(e),n.d(e,{demos:function(){return i}});var l=n(15009),d=n.n(l),u=n(99289),_=n.n(u),a=n(67294),m=n(65567),c=n(71354),i={"util-demo-reactdom":{component:a.memo(a.lazy(function(){return n.e(185).then(n.bind(n,47129))})),asset:{type:"BLOCK",id:"util-demo-reactdom",refAtomIds:["util"],dependencies:{"index.tsx":{type:"FILE",value:n(54107).Z},"@trionesdev/antd-react-ext":{type:"NPM",value:"6.0.0-beta.0"},antd:{type:"NPM",value:"6.1.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@trionesdev/antd-react-ext":m,antd:c,react:o||(o=n.t(a,2))},renderOpts:{compile:function(){var v=_()(d()().mark(function E(){var s,f=arguments;return d()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(250).then(n.bind(n,90250));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,f));case 3:case"end":return t.stop()}},E)}));function D(){return v.apply(this,arguments)}return D}()}}}},66321:function(r,e,n){n.r(e),n.d(e,{texts:function(){return o}});const o=[{value:"\u5DE5\u5177\u7C7B",paraId:0,tocIndex:0},{value:"ReactDomUtils",paraId:1,tocIndex:0},{value:`ReactDomUtils.render \u901A\u8FC7\u9759\u6001\u51FD\u6570\u521B\u5EFA\u7EC4\u4EF6\uFF0C\u53EF\u4EE5\u6307\u5B9A\u6302\u8F7D\u5230\u7684\u5143\u7D20\uFF0C\u5982\u4E0D\u6307\u5B9A\u5219\u6302\u8F7D\u5230body\u4E0B\u3002\u591A\u7528\u4E8E\u521B\u5EFA\u6A21\u6001\u6846\uFF0C\u62BD\u5C49\u7B49\u7EC4\u4EF6\u3002
\u7EC4\u4EF6\u9500\u6BC1\uFF0C\u53EF\u4EE5\u8C03\u7528\u901A\u8FC7\u8C03\u7528 onDestroy \u51FD\u6570\u3002`,paraId:2,tocIndex:0}]},54107:function(r,e){e.Z=`import { ReactDomUtils } from '@trionesdev/antd-react-ext';
import { Button, Modal } from 'antd';
import React, { useRef, useState } from 'react';

const El = ({ onDestroy }: { onDestroy?: () => void }) => {
  return (
    <div>
      ReactDomUtils <Button onClick={onDestroy}>\u5173\u95ED</Button>
    </div>
  );
};

const ModalEl = ({
  container,
  onDestroy,
}: {
  container?: any;
  onDestroy?: () => void;
}) => {
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    onDestroy?.();
  };
  return (
    <Modal
      title={\`\u786E\u5B9A\u5220\u9664\uFF1F\`}
      open={open}
      onCancel={handleClose}
      getContainer={container}
    >
      \u8FD9\u662F\u4E00\u4E2A\u53EF\u4EE5\u5173\u95ED\u7684\u5F39\u7A97
    </Modal>
  );
};

export default () => {
  const devRef = useRef<any>();

  return (
    <>
      <div ref={devRef}></div>
      <Button
        onClick={() => {
          ReactDomUtils.render(<El />, devRef.current);
        }}
      >
        \u6709\u6307\u5B9A\u6302\u8F7Ddom
      </Button>
      <Button
        onClick={() => {
          ReactDomUtils.render(<El />);
        }}
      >
        \u65E0\u6307\u5B9Adom
      </Button>
      <Button
        onClick={() => {
          ReactDomUtils.render(<ModalEl />);
        }}
      >
        \u70B9\u51FB
      </Button>
    </>
  );
};
`}}]);
