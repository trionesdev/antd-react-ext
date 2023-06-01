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
      [`&-tools`]: {
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
   * @description 工具
   * @default []
   */
  tools?: React.ReactNode[] | React.ReactElement[];
}

const TableToolbar: FC<TableToolbarProps> = ({
                                               className,
                                               style,
                                               title,
                                               tools = [],
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
      <Space className={classNames(`${prefixCls}-tools`, hashId)}>
        {tools}
      </Space>
    </div>,
  );
};
export default TableToolbar;
