import type {CSSInterpolation} from '@ant-design/cssinjs';
import {useStyleRegister} from '@ant-design/cssinjs';
import {GlobalToken, theme} from 'antd';
import classNames from 'classnames';
import React, {FC} from 'react';

const {useToken} = theme;

interface HPanelProps {
  children?: React.ReactNode;
  className?: string | undefined,
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
      [`&-left`]: {},
      [`&-content`]: {
        flex: 'auto 1',
        width: 0,
      },
      [`&-right`]: {},
    },
  };
};

const HPanel: FC<HPanelProps> = ({children, className, style, left, right}) => {
  const prefixCls = 'ant-horizontal-panel';
  const {theme, token, hashId} = useToken();
  const wrapSSR = useStyleRegister(
    {theme, token, hashId, path: [prefixCls]},
    () => [genHPanelStyle(prefixCls, token)],
  );
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
