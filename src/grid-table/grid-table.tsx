import { CSSInterpolation, useStyleRegister } from '@ant-design/cssinjs'
import { GlobalToken, Table, TableProps, theme } from 'antd'
import classNames from 'classnames'
import React, { FC } from 'react'

const { useToken } = theme
const genGridTableStyle = (
  prefixCls: string,
  token: GlobalToken
): CSSInterpolation => {
  return {
    [`.${prefixCls}`]: {
      width: '100%',
      display: `flex`,
      flexDirection: 'column',
      '&.ant-table-fill': {
        height: '100%',
        '.ant-table-wrapper': {
          flex: '1 auto',
          overflow: 'hidden',
          '.ant-spin-nested-loading': {
            height: '100%',
            '.ant-spin-container': {
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              flex: '1 auto',
              '.ant-table-header': {
                overflow: 'inherit',
              },
            },
          },
          '.ant-table': {
            overflow: 'hidden',
            '.ant-table-container': {
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
            },
          },
        },
      },
    },
  }
}

interface GridTableProps extends TableProps<any> {
  /**
   * @description 是否撑满外部容器
   * @default
   */
  fit?: boolean
  /**
   * @description 是否展示返回icon
   * @default
   */
  toolbar?: React.ReactNode
}

const GridTable: FC<GridTableProps> = (
  { fit, toolbar, style, ...props },
  context
) => {
  const prefixCls = 'ant-grid-table'
  const { theme, token, hashId } = useToken()
  const wrapSSR = useStyleRegister(
    { theme, token, hashId, path: [prefixCls] },
    () => [genGridTableStyle(prefixCls, token)]
  )

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
        <Table {...props} />
      </>
    </div>
  )
}
export default Object.assign(GridTable, {
  Column: Table.Column,
  ColumnGroup: Table.ColumnGroup,
});
