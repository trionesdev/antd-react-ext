import {
  Column,
  ColumnResizeDirection,
  ColumnResizeMode,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import {useCssInJs} from '@trionesdev/antd-react-ext';
import classNames from 'classnames';
import React, {CSSProperties, FC, PropsWithChildren} from 'react';
import {genDataGridStyle} from './styles';
import {ColumnsType} from "antd/es/table";
import {TableProps} from "antd/es/table/InternalTable";
import type {AnyObject} from "antd/es/_util/type";

export type DataGridColumnProps<RecordType> = ColumnsType<RecordType>;

export type DataGridProps<RecordType = AnyObject> = Omit<TableProps<RecordType>, 'columns'> & {
  columns: DataGridColumnProps<RecordType>;
};
const prefixCls = 'triones-data-grid';

const getCommonPinningStyles = (column: Column<any>): CSSProperties => {
  const isPinned = column.getIsPinned()
  const isLastLeftPinnedColumn =
    isPinned === 'left' && column.getIsLastColumn('left')
  const isFirstRightPinnedColumn =
    isPinned === 'right' && column.getIsFirstColumn('right')

  return {
    boxShadow: isLastLeftPinnedColumn
      ? '-4px 0 4px -4px gray inset'
      : isFirstRightPinnedColumn
        ? '4px 0 4px -4px gray inset'
        : undefined,
    left: isPinned === 'left' ? `${column.getStart('left')}px` : undefined,
    right: isPinned === 'right' ? `${column.getAfter('right')}px` : undefined,
    position: isPinned ? 'sticky' : 'relative',
    width: column.getSize(),
    zIndex: isPinned ? 1 : 0,
  }
}

export const DataGrid: FC<PropsWithChildren<DataGridProps>> = ({
                                                                 children,
                                                                 dataSource,
                                                                 columns,
                                                               }) => {
  const [columnResizeMode, setColumnResizeMode] =
    React.useState<ColumnResizeMode>('onChange');
  const [columnResizeDirection, setColumnResizeDirection] =
    React.useState<ColumnResizeDirection>('ltr');
  const columnHelper = createColumnHelper<any>();
  const columnsDefs = columns.map((column) => {
    return columnHelper.accessor(column.dataIndex, {
      cell: (info) =>
        column.render?.(info.getValue(), info.row.original, info.row.index) ||
        info.getValue(),
      size: column.width,

    });
  });
  const table = useReactTable({
    data: dataSource,
    columns: columnsDefs,
    columnResizeMode: columnResizeMode,
    columnResizeDirection: columnResizeDirection,
    getCoreRowModel: getCoreRowModel(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: true,
    initialState: {
      columnPinning: {
        left: columns.filter(column => column.fixed === 'start').map(column => column.dataIndex),
        right: columns.filter(column => column.fixed === 'end').map(column => column.dataIndex)
      }
    }
  });

  const {hashId} = useCssInJs({
    prefix: prefixCls,
    styleFun: genDataGridStyle,
  });

  return (
    <div className={classNames(`${prefixCls}-wrapper`, hashId)}>
      <div className={classNames(`${prefixCls}-container`, hashId)}>
        <table
          className={classNames(`${prefixCls}`, hashId)}
          style={{
            tableLayout: 'fixed',
            width: table.getTotalSize()
          }}
        >
          <thead className={classNames(`${prefixCls}-head`, hashId)}>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              key={headerGroup.id}
              className={classNames(
                `${prefixCls}-row`,
                `${prefixCls}-row-head`,
                hashId,
              )}
            >
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className={classNames(
                    `${prefixCls}-cell`,
                    `${prefixCls}-cell-head`,
                    `${prefixCls}-cell-sticky-header`,
                    hashId,
                  )}
                  {...{
                    colSpan: header.colSpan,
                    style: {
                      width: header.getSize(),
                      ...getCommonPinningStyles(header.column),
                    },
                  }}
                >
                  <div
                    className={classNames(
                      `${prefixCls}-cell-wrapper`,
                      hashId,
                    )}
                  >
                    {header.column.getIsPinned() === 'right' && <div
                      {...{
                        onMouseDown: (e) => {
                          setColumnResizeDirection('rtl')
                          header.getResizeHandler()(e)
                        },
                        onTouchStart: header.getResizeHandler(),
                        className: `resizer rtl ${
                          header.column.getIsResizing() ? 'isResizing' : ''
                        }`,
                        style: {
                          transform:
                            columnResizeMode === 'onEnd' &&
                            header.column.getIsResizing()
                              ? `translateX(${
                                (table.options.columnResizeDirection ===
                                'rtl'
                                  ? -1
                                  : 1) *
                                (table.getState().columnSizingInfo
                                  .deltaOffset ?? 0)
                              }px)`
                              : '',
                        },
                      }}
                    />}
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                    {(header.column.getIsPinned() !== 'right') && <div
                      {...{
                        onMouseDown: (e) => {
                          setColumnResizeDirection('ltr')
                          header.getResizeHandler()(e)
                        },
                        onTouchStart: header.getResizeHandler(),
                        className: `resizer ltr ${
                          header.column.getIsResizing() ? 'isResizing' : ''
                        }`,
                        style: {
                          transform:
                            columnResizeMode === 'onEnd' &&
                            header.column.getIsResizing()
                              ? `translateX(${
                                (table.options.columnResizeDirection ===
                                'rtl'
                                  ? -1
                                  : 1) *
                                (table.getState().columnSizingInfo
                                  .deltaOffset ?? 0)
                              }px)`
                              : '',
                        },
                      }}
                    />}
                  </div>
                </th>
              ))}
            </tr>
          ))}
          </thead>
          <tbody className={classNames(`${prefixCls}-body`, hashId)}>
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className={classNames(`${prefixCls}-row`, hashId)}
            >
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className={classNames(
                    `${prefixCls}-cell`,
                    `${prefixCls}-cell-body`,
                    hashId,
                  )}
                  {...{
                    style: {
                      // width: cell.column.getSize(),
                      ...getCommonPinningStyles(cell.column),
                    },
                  }}
                >
                  <div style={{overflow: 'hidden'}}>
                    {flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext(),
                    )}
                  </div>
                </td>
              ))}
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
