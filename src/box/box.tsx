import { ConfigProvider } from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import classNames from 'classnames';
import React, { FC } from 'react';
import { useCssInJs } from '../hooks';
import { genBoxStyle } from './styles';

/**
 * 容器尺寸：在 antd SizeType 基础上增加 `default`、`mini`。
 * `mini` 时 padding 为 0。
 */
export type BoxSize = SizeType | 'default' | 'mini';

export type BoxProps = React.HTMLAttributes<HTMLDivElement> & {
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
   * @description 尺寸，控制内边距。`mini` 为 0，其余对齐 antd token
   * @default default
   */
  size?: BoxSize;
  /**
   * @description 为 true 时背景透明，否则使用 antd 容器背景色
   * @default false
   */
  transparent?: boolean;
  /**
   * @description 为 true 时宽高撑满父容器
   * @default false
   */
  fit?: boolean;
};

const resolveSizeClass = (
  prefixCls: string,
  size: BoxSize | undefined,
): string => {
  switch (size) {
    case 'mini':
      return `${prefixCls}-mini`;
    case 'small':
      return `${prefixCls}-small`;
    case 'large':
      return `${prefixCls}-large`;
    case 'middle':
    case 'medium':
      return `${prefixCls}-middle`;
    case 'default':
    default:
      return `${prefixCls}-middle`;
  }
};

export const Box: FC<BoxProps> = ({
  className,
  style,
  children,
  size,
  transparent = false,
  fit = false,
  ...rest
}) => {
  const prefixCls = 'triones-ant-box';
  const { componentSize } = ConfigProvider.useConfig();

  const mergedSize: BoxSize =
    size ??
    (componentSize === 'small' ||
    componentSize === 'large' ||
    componentSize === 'middle' ||
    componentSize === 'medium'
      ? componentSize
      : 'default');

  const { hashId } = useCssInJs({
    prefix: prefixCls,
    styleFun: genBoxStyle,
  });

  return (
    <div
      {...rest}
      style={style}
      className={classNames(
        prefixCls,
        resolveSizeClass(prefixCls, mergedSize),
        {
          [`${prefixCls}-transparent`]: transparent,
          [`${prefixCls}-fit`]: fit,
        },
        className,
        hashId,
      )}
    >
      {children}
    </div>
  );
};
