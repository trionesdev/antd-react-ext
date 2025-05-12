"use strict";(self.webpackChunk_trionesdev_antd_react_ext=self.webpackChunk_trionesdev_antd_react_ext||[]).push([[2675],{34607:function(r,n,e){var a;e.r(n),e.d(n,{demos:function(){return f}});var s=e(15009),o=e.n(s),m=e(99289),c=e.n(m),d=e(67294),y=e(4250),_=e(22443),u=e(80100),l=e(93967),C=e.n(l),i=e(45667),f={"field-wrapper-demo-base":{component:d.memo(d.lazy(function(){return e.e(6683).then(e.bind(e,4221))})),asset:{type:"BLOCK",id:"field-wrapper-demo-base",refAtomIds:["field-wrapper"],dependencies:{"index.tsx":{type:"FILE",value:e(46827).Z},react:{type:"NPM",value:"18.3.1"},"../field-wrapper.tsx":{type:"FILE",value:e(46291).Z},"@trionesdev/antd-react-ext":{type:"NPM",value:"0.0.7-beta.16"},classnames:{type:"NPM",value:"2.5.1"},"./styles.ts":{type:"FILE",value:e(29286).Z}},entry:"index.tsx"},context:{"../field-wrapper.tsx":_,"./styles.ts":i,react:a||(a=e.t(d,2)),"/home/runner/work/antd-react-ext/antd-react-ext/src/field-wrapper/field-wrapper.tsx":_,"@trionesdev/antd-react-ext":u,classnames:l,"/home/runner/work/antd-react-ext/antd-react-ext/src/field-wrapper/styles.ts":i},renderOpts:{compile:function(){var x=c()(o()().mark(function v(){var p,h=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(p=t.sent).default.apply(p,h));case 3:case"end":return t.stop()}},v)}));function E(){return x.apply(this,arguments)}return E}()}}}},16587:function(r,n,e){e.r(n),e.d(n,{texts:function(){return s}});var a=e(4250);const s=[{value:"\u5B57\u6BB5\u5305\u88C5\u5668\uFF0C\u7528\u4E8E\u5C06\u5185\u5BB9\u5305\u88C5\u6210antd\u7684\u8868\u5355\u5B57\u6BB5\u98CE\u683C",paraId:0,tocIndex:0}]},46827:function(r,n){n.Z=`import React from 'react';
import { FieldWrapper } from '../field-wrapper';

export default () => {
  return (
    <FieldWrapper>
      <div>\u8FD9\u662F\u4E00\u4E2A\u5B57\u6BB5</div>
    </FieldWrapper>
  );
};
`},46291:function(r,n){n.Z=`import { useCssInJs } from '@trionesdev/antd-react-ext';
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
`},29286:function(r,n){n.Z=`import { CSSInterpolation } from '@ant-design/cssinjs';
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
