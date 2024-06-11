import type { CSSInterpolation } from '@ant-design/cssinjs';
import { GlobalToken } from 'antd';
import classNames from 'classnames';
import React, { FC } from 'react';
import { useCssInJs } from '../hooks';

interface VPanelProps {
  children?: React.ReactNode;
  className?: string | undefined;
  style?: React.CSSProperties;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

const genVPanelStyle = (
  prefixCls: string,
  token: GlobalToken,
): CSSInterpolation => {
  return {
    [`.${prefixCls}`]: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      boxSizing: 'border-box',
      [`&-header`]: {},
      [`&-content`]: {
        flex: 'auto 1',
        height: 0,
      },
      [`&-footer`]: {},
    },
  };
};

const VPanel: FC<VPanelProps> = ({
  children,
  className,
  style,
  header,
  footer,
}) => {
  const prefixCls = 'triones-ant-vertical-panel';
  const { wrapSSR, hashId } = useCssInJs({
    prefix: prefixCls,
    styleFun: genVPanelStyle,
  });
  return wrapSSR(
    <div style={style} className={classNames(prefixCls, hashId, className)}>
      {header && (
        <div className={classNames(`${prefixCls}-header`, hashId)}>
          {header}
        </div>
      )}
      <div className={classNames(`${prefixCls}-content`, hashId)}>
        {children}
      </div>
      {footer && (
        <div className={classNames(`${prefixCls}-footer`, hashId)}>
          {footer}
        </div>
      )}
    </div>,
  );
};
export default VPanel;
