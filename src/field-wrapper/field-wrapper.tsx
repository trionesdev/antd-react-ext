import { useCssInJs } from '@trionesdev/antd-react-ext';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import classNames from 'classnames';
import React, { FC, useMemo } from 'react';
import { genFieldWrapperStyle } from './styles';

type FieldWrapperProps = {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
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
        return `${prefixCls}-sm`;
      case 'large':
        return `${prefixCls}-lg`;
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
