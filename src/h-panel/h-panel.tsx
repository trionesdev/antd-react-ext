import type { CSSInterpolation } from '@ant-design/cssinjs';
import { useCssInJs } from '@trionesdev/antd-react-ext';
import { GlobalToken } from 'antd';
import classNames from 'classnames';
import React, { FC } from 'react';

interface HPanelProps {
  children?: React.ReactNode;
  className?: string | undefined;
  style?: React.CSSProperties;
  left?: React.ReactNode;
  right?: React.ReactNode;
}

const genHPanelStyle = (
  prefixCls: string,
  token: GlobalToken,
): CSSInterpolation => {
  return {
    [`.${prefixCls}`]: {
      height: '100%',
      display: 'flex',
      boxSizing: 'border-box',
      [`&-left`]: {},
      [`&-content`]: {
        flex: 'auto 1',
        width: 0,
      },
      [`&-right`]: {},
    },
  };
};

const HPanel: FC<HPanelProps> = ({
  children,
  className,
  style,
  left,
  right,
}) => {
  const prefixCls = 'triones-ant-horizontal-panel';

  const { wrapSSR, hashId } = useCssInJs({
    prefix: prefixCls,
    styleFun: genHPanelStyle,
  });

  return wrapSSR(
    <div style={style} className={classNames(prefixCls, hashId, className)}>
      {left && (
        <div className={classNames(`${prefixCls}-left`, hashId)}>{left}</div>
      )}
      <div className={classNames(`${prefixCls}-content`, hashId)}>
        {children}
      </div>
      {right && (
        <div className={classNames(`${prefixCls}-right`, hashId)}>{right}</div>
      )}
    </div>,
  );
};
export default HPanel;
