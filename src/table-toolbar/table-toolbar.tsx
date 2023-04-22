import { CSSInterpolation, useStyleRegister } from '@ant-design/cssinjs';
import { RedoOutlined } from '@ant-design/icons';
import { Button, GlobalToken, Space, theme, Tooltip } from 'antd';
import classNames from 'classnames';
import _ from 'lodash';
import React, { FC } from 'react';

const { useToken } = theme;
const genTableToolbarStyle = (
  prefixCls: string,
  token: GlobalToken,
): CSSInterpolation => {
  return {
    [`.${prefixCls}`]: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingBlock: '16px',
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
  /**
   * @description 刷新回调
   * @default ()=>void
   */
  onRefresh?: () => void;
}

const TableToolbar: FC<TableToolbarProps> = ({
  className,
  title,
  tools = [],
  onRefresh,
}) => {
  const prefixCls = 'ant-table-toolbar';
  const { theme, token, hashId } = useToken();
  const wrapSSR = useStyleRegister(
    { theme, token, hashId, path: [prefixCls] },
    () => [genTableToolbarStyle(prefixCls, token)],
  );

  return wrapSSR(
    <div className={classNames(prefixCls, hashId, className)}>
      <div className={classNames(`${prefixCls}-title`, hashId)}>{title}</div>
      <div className={classNames(`${prefixCls}-tools`, hashId)}>
        <Space>
          {!_.isEmpty(tools) &&
            tools!.map((tool) => {
              return tool;
            })}
          <Tooltip title={`刷新`}>
            <Button type={`text`} icon={<RedoOutlined />} onClick={onRefresh} />
          </Tooltip>
        </Space>
      </div>
    </div>,
  );
};
export default TableToolbar;
