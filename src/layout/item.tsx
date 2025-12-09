import classNames from 'classnames';
import React, { FC } from 'react';
import { useCssInJs } from '../hooks';
import { genItemStyle } from './styles';

export type LayoutItemProps = {
  children?: React.ReactNode;
  className?: string | undefined;
  style?: React.CSSProperties;
  auto?: boolean;
};
export const LayoutItem: FC<LayoutItemProps> = ({
  children,
  className,
  style,
  auto,
}) => {
  const prefixCls = 'triones-ant-layout-item';
  const { hashId } = useCssInJs({
    prefix: prefixCls,
    styleFun: genItemStyle,
  });
  return (
    <div
      className={classNames(
        prefixCls,
        { [`${prefixCls}-auto`]: auto },
        className,
        hashId,
      )}
      style={style}
    >
      {children}
    </div>
  );
};
