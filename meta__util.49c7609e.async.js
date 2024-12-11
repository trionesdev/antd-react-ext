"use strict";(self.webpackChunk_trionesdev_antd_react_ext=self.webpackChunk_trionesdev_antd_react_ext||[]).push([[5509],{56277:function(o,t,e){var _;e.r(t),e.d(t,{demos:function(){return i}});var r=e(15009),d=e.n(r),u=e(99289),l=e.n(u),a=e(67294),x=e(79845),m=e(33939),c=e(53511),i={"util-demo-reactdom":{component:a.memo(a.lazy(function(){return e.e(185).then(e.bind(e,47129))})),asset:{type:"BLOCK",id:"util-demo-reactdom",refAtomIds:["util"],dependencies:{"index.tsx":{type:"FILE",value:e(54107).Z},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.22.4"},"@trionesdev/antd-react-ext":{type:"NPM",value:"0.0.7-beta.12"}},entry:"index.tsx"},context:{react:_||(_=e.t(a,2)),antd:m,"@trionesdev/antd-react-ext":c},renderOpts:{compile:function(){var v=l()(d()().mark(function D(){var s,f=arguments;return d()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,f));case 3:case"end":return n.stop()}},D)}));function E(){return v.apply(this,arguments)}return E}()}}}},66321:function(o,t,e){e.r(t),e.d(t,{texts:function(){return r}});var _=e(79845);const r=[{value:"\u5DE5\u5177\u7C7B",paraId:0,tocIndex:0},{value:"ReactDomUtils",paraId:1,tocIndex:0},{value:`ReactDomUtils.render \u901A\u8FC7\u9759\u6001\u51FD\u6570\u521B\u5EFA\u7EC4\u4EF6\uFF0C\u53EF\u4EE5\u6307\u5B9A\u6302\u8F7D\u5230\u7684\u5143\u7D20\uFF0C\u5982\u4E0D\u6307\u5B9A\u5219\u6302\u8F7D\u5230body\u4E0B\u3002\u591A\u7528\u4E8E\u521B\u5EFA\u6A21\u6001\u6846\uFF0C\u62BD\u5C49\u7B49\u7EC4\u4EF6\u3002
\u7EC4\u4EF6\u9500\u6BC1\uFF0C\u53EF\u4EE5\u8C03\u7528\u901A\u8FC7\u8C03\u7528 onDestroy \u51FD\u6570\u3002`,paraId:2,tocIndex:0}]},54107:function(o,t){t.Z=`import React, {useRef} from "react"
import {Button} from "antd";
import {ReactDomUtils} from "@trionesdev/antd-react-ext";

const El = ({onDestroy}:{onDestroy?:()=>void}) => {
  return <div>ReactDomUtils <Button onClick={onDestroy}>\u5173\u95ED</Button> </div>
}

export default () => {
  const devRef = useRef<any>()

  return <>
    <div ref={devRef}></div>
    <Button onClick={()=>{
      ReactDomUtils.render(<El/>,devRef.current)
    }}>\u70B9\u51FB</Button>
  </>
}
`}}]);
