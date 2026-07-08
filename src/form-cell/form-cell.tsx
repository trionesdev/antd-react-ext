import { useCssInJs } from '@trionesdev/antd-react-ext';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import classNames from 'classnames';
import React, { FC, useMemo } from 'react';
import { genFormCellStyle } from './styles';

export type FormCellProps = {
  /**
   * @description 类名
   * @default
   */
  className?: string;
  /**
   * @description 样式
   * @default
   */
  style?: React.CSSProperties;
  children?: React.ReactNode;
  /**
   * @description 大小
   * @default middle
   */
  size?: SizeType;
  value?: string;
  [key: string]: any;
};

export const FormCell: FC<FormCellProps> = ({
  className,
  style,
  size,
  value,
  children,
  ...props
}) => {
  const prefixCls = 'triones-ant-form-cell';
  const { hashId } = useCssInJs({
    prefix: prefixCls,
    styleFun: genFormCellStyle,
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

  return (
    <div
      {...props}
      style={{ ...style, minHeight: 31 }}
      className={classNames(prefixCls, className, sizeCls, hashId)}
    >
      {children || value}
    </div>
  );
};
