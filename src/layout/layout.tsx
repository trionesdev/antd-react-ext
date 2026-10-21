import classNames from 'classnames';
import React, { FC } from 'react';
import { useCssInJs } from '../hooks';
import { genLayoutStyle } from './styles';

export type LayoutProps = {
  children?: React.ReactNode;
  className?: string | undefined;
  style?: React.CSSProperties;
  /**
   * @deprecated
   */
  direction?: 'vertical' | 'horizontal';
  orientation?: 'vertical' | 'horizontal';
  gap?: number;
};

export const Layout: FC<LayoutProps> = ({
  children,
  className,
  style,
  direction,
  orientation,
  gap,
}) => {
  const layoutOrientation = direction || orientation || 'horizontal';
  const prefixCls = 'triones-ant-layout';

  const { hashId } = useCssInJs({
    prefix: prefixCls,
    styleFun: genLayoutStyle,
  });

  return (
    <div
      className={classNames(
        prefixCls,
        `${prefixCls}-${layoutOrientation}`,
        className,
        hashId,
      )}
      style={{ gap: gap, ...style }}
    >
      {children}
    </div>
  );
};
