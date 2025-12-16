import {
  ColumnResizeDirection,
  ColumnResizeMode,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useCssInJs } from '@trionesdev/antd-react-ext';
import classNames from 'classnames';
import React, { FC, PropsWithChildren } from 'react';
import { genDataGridStyle } from './styles';

export type DataGridColumnProps = {
  title?: string;
  dataIndex: string;
  key?: string;
  width?: number;
  fixed?: 'left' | 'right' | boolean;
  render?: (text: any, record: any, index: number) => React.ReactNode;
};

export type DataGridProps = {
  dataSource: any[];
  columns: DataGridColumnProps[];
};
const prefixCls = 'triones-data-grid';
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
      size: column.width || 100,
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
  });

  const { hashId } = useCssInJs({
    prefix: prefixCls,
    styleFun: genDataGridStyle,
  });

  return (
    <div className={classNames(`${prefixCls}-wrapper`, hashId)}>
      <div className={classNames(`${prefixCls}-container`, hashId)}>
        <table
          className={classNames(`${prefixCls}`, hashId)}
          style={{ width: table.getTotalSize() }}
        >
          <colgroup>
            {table.getHeaderGroups().map((headerGroup) => {
              return (
                <React.Fragment key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <col key={header.id} width={header.getSize()} />
                  ))}
                </React.Fragment>
              );
            })}
          </colgroup>
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
                      },
                    }}
                  >
                    <div
                      className={classNames(
                        `${prefixCls}-cell-wrapper`,
                        hashId,
                      )}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                      <div
                        {...{
                          onMouseDown: header.getResizeHandler(),
                          onTouchStart: header.getResizeHandler(),
                          className: `resizer ${
                            table.options.columnResizeDirection
                          } ${
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
                      />
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
                      },
                    }}
                  >
                    <div style={{ overflow: 'hidden' }}>
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
