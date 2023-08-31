import {CSSInterpolation, useStyleRegister} from '@ant-design/cssinjs';
import {GlobalToken, Space, theme} from 'antd';
import classNames from 'classnames';
import React, {FC} from 'react';

const {useToken} = theme;
const genTableToolbarStyle = (
  prefixCls: string,
  token: GlobalToken,
): CSSInterpolation => {
  return {
    [`.${prefixCls}`]: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '8px',
      boxSizing: 'border-box',
      [`&-title`]: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
      },
      [`&-extra`]: {
        display: 'flex',
        justifyContent: 'flex-end',
      },
    },
  };
};

interface TableToolbarProps {
  className?: string;
  style?: React.CSSProperties;
  /**
   * @description 标题
   * @default null
   */
  title?: React.ReactNode;
  /**
   * @description 操作区，位于 title 行的行尾
   * @default []
   */
  extra?: React.ReactNode;
}

const TableToolbar: FC<TableToolbarProps> = ({
                                               className,
                                               style,
                                               title,
                                               extra,
                                             }) => {
  const prefixCls = 'ant-table-toolbar';
  const {theme, token, hashId} = useToken();
  const wrapSSR = useStyleRegister(
    {theme, token, hashId, path: [prefixCls]},
    () => [genTableToolbarStyle(prefixCls, token)],
  );

  return wrapSSR(
    <div style={style} className={classNames(prefixCls, hashId, className)}>
      <Space className={classNames(`${prefixCls}-title`, hashId)}>
        <span>{title}</span>
      </Space>
      <Space className={classNames(`${prefixCls}-extra`, hashId)}>
        {extra}
      </Space>
    </div>,
  );
};
export default TableToolbar;
