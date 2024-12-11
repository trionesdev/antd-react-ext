import classNames from 'classnames';
import React, { FC } from 'react';
import { useCssInJs } from '../hooks';
import { genLayoutStyle } from './styles';

export type LayoutProps = {
  children?: React.ReactNode;
  className?: string | undefined;
  style?: React.CSSProperties;
  direction?: 'vertical' | 'horizontal';
  gap?: number;
};

export const Layout: FC<LayoutProps> = ({
  children,
  className,
  style,
  direction = 'horizontal',
  gap,
}) => {
  const prefixCls = 'triones-ant-layout';

  const { hashId, wrapSSR } = useCssInJs({
    prefix: prefixCls,
    styleFun: genLayoutStyle,
  });

  return wrapSSR(
    <div
      className={classNames(
        prefixCls,
        `${prefixCls}-${direction}`,
        className,
        hashId,
      )}
      style={{ gap: gap, ...style }}
    >
      {children}
    </div>,
  );
};
