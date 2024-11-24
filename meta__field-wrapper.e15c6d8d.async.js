"use strict";(self.webpackChunk_trionesdev_antd_react_ext=self.webpackChunk_trionesdev_antd_react_ext||[]).push([[2675],{34607:function(d,n,e){var a;e.r(n),e.d(n,{demos:function(){return M}});var r=e(15009),o=e.n(r),m=e(99289),l=e.n(m),_=e(67294),v=e(4250),p=e(22443),E=e(62760),u=e(93967),h=e.n(u),c=e(45667),M={"field-wrapper-demo-base":{component:_.memo(_.lazy(function(){return e.e(6683).then(e.bind(e,4221))})),asset:{type:"BLOCK",id:"field-wrapper-demo-base",refAtomIds:["field-wrapper"],dependencies:{"index.tsx":{type:"FILE",value:e(46827).Z},react:{type:"NPM",value:"18.3.1"},"../field-wrapper.tsx":{type:"FILE",value:e(46291).Z},"@trionesdev/antd-react-ext":{type:"NPM",value:"0.0.7-beta.6"},classnames:{type:"NPM",value:"2.5.1"},"./styles.ts":{type:"FILE",value:e(29286).Z}},entry:"index.tsx"},context:{"../field-wrapper.tsx":p,"./styles.ts":c,react:a||(a=e.t(_,2)),"/home/runner/work/antd-react-ext/antd-react-ext/src/field-wrapper/field-wrapper.tsx":p,"@trionesdev/antd-react-ext":E,classnames:u,"/home/runner/work/antd-react-ext/antd-react-ext/src/field-wrapper/styles.ts":c},renderOpts:{compile:function(){var s=l()(o()().mark(function f(){var i,P=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(i=t.sent).default.apply(i,P));case 3:case"end":return t.stop()}},f)}));function x(){return s.apply(this,arguments)}return x}()}}}},22443:function(d,n,e){e.r(n),e.d(n,{FieldWrapper:function(){return c}});var a=e(97857),r=e.n(a),o=e(13769),m=e.n(o),l=e(62760),_=e(93967),v=e.n(_),p=e(67294),E=e(45667),u=e(85893),h=["className","style","size","children"],c=function(s){var x=s.className,f=s.style,i=s.size,P=s.children,O=m()(s,h),t="triones-ant-field-wrapper",D=(0,l.useCssInJs)({prefix:t,styleFun:E.genFieldWrapperStyle}),C=D.hashId,I=D.wrapSSR,y=(0,p.useMemo)(function(){switch(i){case"small":return"".concat(t,"-sm");case"large":return"".concat(t,"-lg");default:return""}},[i]);return I((0,u.jsx)("div",r()(r()({},O),{},{style:r()(r()({},f),{},{minHeight:31}),className:v()(t,x,y,C),children:P})))}},45667:function(d,n,e){e.r(n),e.d(n,{genFieldWrapperStyle:function(){return o}});var a=e(9783),r=e.n(a),o=function(l,_){return r()({},".".concat(l),r()(r()({boxSizing:"border-box",border:"1px solid ".concat(_.colorBorder),borderRadius:_.borderRadius,paddingBlock:4,paddingInline:11,"&:hover":{border:"1px solid ".concat(_.colorPrimaryBorderHover)}},"&-sm",{paddingBlock:0,paddingInline:11}),"&-lg",{paddingBlock:7,paddingInline:11}))}},16587:function(d,n,e){e.r(n),e.d(n,{texts:function(){return r}});var a=e(4250);const r=[{value:"\u5B57\u6BB5\u5305\u88C5\u5668\uFF0C\u7528\u4E8E\u5C06\u5185\u5BB9\u5305\u88C5\u6210antd\u7684\u8868\u5355\u5B57\u6BB5\u98CE\u683C",paraId:0,tocIndex:0}]},46827:function(d,n){n.Z=`import React from 'react';
import { FieldWrapper } from '../field-wrapper';

export default () => {
  return (
    <FieldWrapper>
      <div>\u8FD9\u662F\u4E00\u4E2A\u5B57\u6BB5</div>
    </FieldWrapper>
  );
};
`},46291:function(d,n){n.Z=`import { useCssInJs } from '@trionesdev/antd-react-ext';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import classNames from 'classnames';
import React, { FC, useMemo } from 'react';
import { genFieldWrapperStyle } from './styles';

export type FieldWrapperProps = {
  /**
   * @description \u7C7B\u540D
   * @default
   */
  className?: string;
  /**
   * @description \u6837\u5F0F
   * @default
   */
  style?: React.CSSProperties;
  children?: React.ReactNode;
  /**
   * @description \u5927\u5C0F
   * @default middle
   */
  size?: SizeType;
  [key: string]: any;
};

export const FieldWrapper: FC<FieldWrapperProps> = ({
  className,
  style,
  size,
  children,
  ...props
}) => {
  const prefixCls = 'triones-ant-field-wrapper';
  const { hashId, wrapSSR } = useCssInJs({
    prefix: prefixCls,
    styleFun: genFieldWrapperStyle,
  });

  const sizeCls = useMemo(() => {
    switch (size) {
      case 'small':
        return \`\${prefixCls}-sm\`;
      case 'large':
        return \`\${prefixCls}-lg\`;
      default:
        return '';
    }
  }, [size]);

  return wrapSSR(
    <div
      {...props}
      style={{ ...style, minHeight: 31 }}
      className={classNames(prefixCls, className, sizeCls, hashId)}
    >
      {children}
    </div>,
  );
};
`},29286:function(d,n){n.Z=`import { CSSInterpolation } from '@ant-design/cssinjs';
import { GlobalToken } from 'antd';

export const genFieldWrapperStyle = (
  prefixCls: string,
  token: GlobalToken,
): CSSInterpolation => {
  return {
    [\`.\${prefixCls}\`]: {
      boxSizing: 'border-box',
      border: \`1px solid \${token.colorBorder}\`,
      borderRadius: token.borderRadius,
      paddingBlock: 4,
      paddingInline: 11,
      '&:hover': {
        border: \`1px solid \${token.colorPrimaryBorderHover}\`,
      },
      [\`&-sm\`]: {
        paddingBlock: 0,
        paddingInline: 11,
      },
      [\`&-lg\`]: {
        paddingBlock: 7,
        paddingInline: 11,
      },
    },
  };
};
`}}]);
