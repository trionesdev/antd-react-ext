"use strict";(self.webpackChunk_trionesdev_antd_react_ext=self.webpackChunk_trionesdev_antd_react_ext||[]).push([[2675],{50433:function(d,n,e){e.r(n),e.d(n,{demos:function(){return s}});var r=e(97983),t=e.n(r),l=e(40794),i=e.n(l),o=e(67294),s={"field-wrapper-demo-base":{component:o.memo(o.lazy(function(){return e.e(6683).then(e.bind(e,99877))})),asset:{type:"BLOCK",id:"field-wrapper-demo-base",refAtomIds:["field-wrapper"],dependencies:{"index.tsx":{type:"FILE",value:e(46827).Z},react:{type:"NPM",value:"18.2.0"},"../field-wrapper.tsx":{type:"FILE",value:e(46291).Z},"@trionesdev/antd-react-ext":{type:"NPM",value:"0.0.7-beta.1"},classnames:{type:"NPM",value:"2.5.1"},"./styles.ts":{type:"FILE",value:e(29286).Z}},entry:"index.tsx"},context:{react:e(67294),"../field-wrapper.tsx":e(93048),"@trionesdev/antd-react-ext":e(31021),classnames:e(93967),"./styles.ts":e(14734)},renderOpts:{compile:function(){var p=i()(t()().mark(function f(){var u,x=arguments;return t()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(9944).then(e.bind(e,99944));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,x));case 3:case"end":return a.stop()}},f)}));function c(){return p.apply(this,arguments)}return c}()}}}},93048:function(d,n,e){e.r(n),e.d(n,{FieldWrapper:function(){return E}});var r=e(11281),t=e.n(r),l=e(97548),i=e.n(l),o=e(31021),s=e(93967),p=e.n(s),c=e(67294),f=e(14734),u=e(85893),x=["className","style","size","children"],E=function(_){var P=_.className,y=_.style,v=_.size,C=_.children,M=i()(_,x),m="triones-ant-field-wrapper",h=(0,o.useCssInJs)({prefix:m,styleFun:f.genFieldWrapperStyle}),g=h.hashId,I=h.wrapSSR,O=(0,c.useMemo)(function(){switch(v){case"small":return"".concat(m,"-sm");case"large":return"".concat(m,"-lg");default:return""}},[v]);return I((0,u.jsx)("div",t()(t()({},M),{},{style:t()(t()({},y),{},{minHeight:31}),className:p()(m,P,O,g),children:C})))}},14734:function(d,n,e){e.r(n),e.d(n,{genFieldWrapperStyle:function(){return l}});var r=e(12812),t=e.n(r),l=function(o,s){return t()({},".".concat(o),t()(t()({boxSizing:"border-box",border:"1px solid ".concat(s.colorBorder),borderRadius:s.borderRadius,paddingBlock:4,paddingInline:11,"&:hover":{border:"1px solid ".concat(s.colorPrimaryBorderHover)}},"&-sm",{paddingBlock:0,paddingInline:11}),"&-lg",{paddingBlock:7,paddingInline:11}))}},96886:function(d,n,e){e.r(n),e.d(n,{texts:function(){return r}});const r=[{value:"\u5B57\u6BB5\u5305\u88C5\u5668\uFF0C\u7528\u4E8E\u5C06\u5185\u5BB9\u5305\u88C5\u6210antd\u7684\u8868\u5355\u5B57\u6BB5\u98CE\u683C",paraId:0,tocIndex:0}]},46827:function(d,n){n.Z=`import React from 'react';
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

type FieldWrapperProps = {
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
