import {Space, theme} from 'antd';
import classNames from 'classnames';
import React, {FC} from 'react';
import {useCssInJs} from "../hooks";
import {genTableToolbarStyle} from "./styles";

export type TableToolbarProps = {
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

  const {hashId, wrapSSR} = useCssInJs({prefix: prefixCls, styleFun: genTableToolbarStyle})

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
export default TableToolbar
