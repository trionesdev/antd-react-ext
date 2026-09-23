"use strict";(self.webpackChunk_trionesdev_antd_react_ext=self.webpackChunk_trionesdev_antd_react_ext||[]).push([[300],{31574:(function(a,t,n){var o;n.r(t),n.d(t,{demos:function(){return h}});var _=n(55420),u=n.n(_),m=n(98312),f=n.n(m),i=n(96540),x=n(18552),e=n(58296),c=n(46942),M=n.n(c),E=n(46502),s={};n.r(s),n.d(s,{FieldWrapper:function(){return x.c}});var l={};n.r(l),n.d(l,{AppToolbar:function(){return e.lt},AvatarEditor:function(){return e.VS},DrawerForm:function(){return e.c4},EditableDesc:function(){return e.K},ExtCheckbox:function(){return e.rf},ExtDatePicker:function(){return e.QI},ExtFormField:function(){return e.mj},ExtInput:function(){return e.eE},ExtInputNumber:function(){return e.jB},ExtRadio:function(){return e.XA},ExtSelect:function(){return e.qM},ExtSwitch:function(){return e.M$},ExtTreeSelect:function(){return e.me},FetchSelect:function(){return e.LU},FetchTreeSelect:function(){return e.$0},FieldWrapper:function(){return e.cm},FieldsMapping:function(){return e.W1},Fieldset:function(){return e.LB},FormCell:function(){return e.JT},GridTable:function(){return e.dT},ImageUpload:function(){return e.BR},Layout:function(){return e.PE},ModalForm:function(){return e.Kw},PageHeader:function(){return e.zY},PictureUpload:function(){return e.gh},ReactDomUtils:function(){return e.L$},SearchToolbar:function(){return e.kt},SessionStorageUtils:function(){return e.Ng},TableToolbar:function(){return e.e1},VerificationCodeInput:function(){return e.Px},VideoUpload:function(){return e.p0},useCssInJs:function(){return e.hD}});var d={};n.r(d),n.d(d,{genFieldWrapperStyle:function(){return E.b}});var h={"field-wrapper-demo-base":{component:i.memo(i.lazy(function(){return n.e(7959).then(n.bind(n,59178))})),asset:{type:"BLOCK",id:"field-wrapper-demo-base",refAtomIds:["field-wrapper"],dependencies:{"index.tsx":{type:"FILE",value:n(26536).A},react:{type:"NPM",value:"18.3.1"},"../field-wrapper.tsx":{type:"FILE",value:n(21835).A},"@trionesdev/antd-react-ext":{type:"NPM",value:"6.0.0-beta.11"},classnames:{type:"NPM",value:"2.5.1"},"./styles.ts":{type:"FILE",value:n(70401).A}},entry:"index.tsx"},routeId:"components/field-wrapper/index",context:{"../field-wrapper.tsx":s,"./styles.ts":d,react:o||(o=n.t(i,2)),"/home/runner/work/antd-react-ext/antd-react-ext/src/field-wrapper/field-wrapper.tsx":s,"@trionesdev/antd-react-ext":l,classnames:c,"/home/runner/work/antd-react-ext/antd-react-ext/src/field-wrapper/styles.ts":d},renderOpts:{compile:(function(){var v=f()(u()().mark(function C(){var p,y=arguments;return u()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.e(2306).then(n.bind(n,12306));case 2:return r.abrupt("return",(p=r.sent).default.apply(p,y));case 3:case"end":return r.stop()}},C)}));function P(){return v.apply(this,arguments)}return P})()}}}}),73826:(function(a,t,n){n.r(t);const o=[{value:"\u5B57\u6BB5\u5305\u88C5\u5668\uFF0C\u7528\u4E8E\u5C06\u5185\u5BB9\u5305\u88C5\u6210antd\u7684\u8868\u5355\u5B57\u6BB5\u98CE\u683C",paraId:0,tocIndex:0}];n.d(t,["texts",0,o])}),26536:(function(a,t){t.A=`import React from 'react';
import { FieldWrapper } from '../field-wrapper';

export default () => {
  return (
    <FieldWrapper>
      <div>\u8FD9\u662F\u4E00\u4E2A\u5B57\u6BB5</div>
    </FieldWrapper>
  );
};
`}),21835:(function(a,t){t.A=`import { useCssInJs } from '@trionesdev/antd-react-ext';
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

/**
 * @deprecated \u8BF7\u4F7F\u7528 FormCell
 * @param param0
 * @param param0.className
 * @param param0.style
 * @param param0.size
 * @param param0.children
 * @param param0.props
 * @constructor
 */
export const FieldWrapper: FC<FieldWrapperProps> = ({
  className,
  style,
  size,
  children,
  ...props
}) => {
  const prefixCls = 'triones-ant-field-wrapper';
  const { hashId } = useCssInJs({
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

  return (
    <div
      {...props}
      style={{ ...style, minHeight: 31 }}
      className={classNames(prefixCls, className, sizeCls, hashId)}
    >
      {children}
    </div>
  );
};
`}),70401:(function(a,t){t.A=`import { CSSInterpolation } from '@ant-design/cssinjs';
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
`})}]);
