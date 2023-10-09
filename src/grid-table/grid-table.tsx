import {Table, TableProps} from 'antd'
import classNames from 'classnames'
import React, {FC} from 'react'
import _ from "lodash"
import {genGridTableStyle} from "./styles";
import {useCssInJs} from "../hooks";


interface GridTableProps extends TableProps<any> {
  /**
   * @description 是否撑满外部容器
   * @default false
   */
  fit?: boolean
  /**
   * @description 是否展示返回icon
   * @default
   */
  toolbar?: React.ReactNode
}

const GridTable: FC<GridTableProps> = (
  {fit = false, toolbar, style, ...props},
  context
) => {

  const prefixCls = 'ant-grid-table'
  const {hashId, wrapSSR} = useCssInJs({prefix: prefixCls, styleFun: genGridTableStyle})

  return wrapSSR(
    <div
      style={style}
      className={classNames(
        prefixCls,
        hashId,
        fit ? 'ant-table-fill' : null
      )}
    >
      <>
        {toolbar}
        <Table {...props} scroll={fit ? _.assign({}, props.scroll, {y: 'max-content'}) : props.scroll}/>
      </>
    </div>
  )
}
export default Object.assign(GridTable, {
  Column: Table.Column,
  ColumnGroup: Table.ColumnGroup,
});
