import {Empty, Pagination, Spin} from 'antd';
import type {AnyObject} from 'antd/es/_util/type';
import type {TableProps} from 'antd/es/table/InternalTable';
import type {ColumnType} from 'antd/lib/table/interface';
import {
  ColumnDef,
  ColumnResizeDirection,
  ColumnResizeMode,
  Row,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import classNames from 'classnames';
import React, {
  CSSProperties,
  FC,
  PropsWithChildren,
  UIEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {useCssInJs} from '../hooks';
import {genDataGridStyle} from './styles';

export type DataGridColumnProps<RecordType = AnyObject> = Omit<
  ColumnType<RecordType>,
  'width' | 'children'
> & {
  width?: number;
  minWidth?: number;
  maxWidth?: number;
  children?: DataGridColumnProps<RecordType>[];
};

export type DataGridColumnType<RecordType = AnyObject> =
  DataGridColumnProps<RecordType>;

export type DataGridProps<RecordType = AnyObject> = Omit<
  TableProps<RecordType>,
  'columns' | 'dataSource'
> & {
  dataSource?: RecordType[];
  columns: DataGridColumnProps<RecordType>[];
  height?: CSSProperties['height'];
  minColumnWidth?: number;
};

const prefixCls = 'triones-data-grid';

type PaginationState = {
  current: number;
  pageSize: number;
};

const getDataIndexKey = (dataIndex: ColumnType<any>['dataIndex']) => {
  if (Array.isArray(dataIndex)) {
    return dataIndex.join('.');
  }

  if (dataIndex === undefined || dataIndex === null) {
    return undefined;
  }

  return String(dataIndex);
};

const getColumnKey = (
  column: DataGridColumnProps<any>,
  index: number,
  parentKey?: string,
) => {
  return (
    column.key?.toString() ??
    getDataIndexKey(column.dataIndex) ??
    `${parentKey ? `${parentKey}-` : ''}${index}`
  );
};

const getCellValue = (record: any, dataIndex: ColumnType<any>['dataIndex']) => {
  if (record === null || record === undefined || dataIndex === undefined) {
    return undefined;
  }

  if (Array.isArray(dataIndex)) {
    return dataIndex.reduce((acc, key) => acc?.[key], record);
  }

  return record[dataIndex];
};

const toColumnDefs = (
  columns: DataGridColumnProps<any>[],
  minColumnWidth: number,
  parentKey?: string,
): {
  defs: ColumnDef<any>[];
  leftPinned: string[];
  rightPinned: string[];
  defaultColumnSizing: Record<string, number>;
} => {
  const leftPinned: string[] = [];
  const rightPinned: string[] = [];
  const defaultColumnSizing: Record<string, number> = {};

  const defs = columns.map((column, index) => {
    const columnKey = getColumnKey(column, index, parentKey);
    const fixed = column.fixed === 'start' ? 'left' : column.fixed;

    if (fixed === 'left') {
      leftPinned.push(columnKey);
    }
    if (fixed === 'right' || fixed === 'end') {
      rightPinned.push(columnKey);
    }

    if (typeof column.width === 'number') {
      defaultColumnSizing[columnKey] = column.width;
    }

    if (column.children?.length) {
      const childResult = toColumnDefs(column.children, minColumnWidth, columnKey);
      leftPinned.push(...childResult.leftPinned);
      rightPinned.push(...childResult.rightPinned);
      Object.assign(defaultColumnSizing, childResult.defaultColumnSizing);

      return {
        id: columnKey,
        header: () => column.title,
        columns: childResult.defs,
      } as ColumnDef<any>;
    }

    return {
      id: columnKey,
      accessorFn: (row) => getCellValue(row, column.dataIndex),
      header: () => column.title,
      cell: (ctx) => {
        const value = ctx.getValue();
        if (column.render) {
          return column.render(value, ctx.row.original, ctx.row.index);
        }
        return value as React.ReactNode;
      },
      size:
        typeof column.width === 'number' ? column.width : Math.max(minColumnWidth, 120),
      minSize: Math.max(minColumnWidth, column.minWidth ?? 0),
      maxSize: column.maxWidth ?? Number.MAX_SAFE_INTEGER,
      meta: {
        align: column.align,
        className: column.className,
        ellipsis: column.ellipsis,
        onCell: column.onCell,
        onHeaderCell: column.onHeaderCell,
      },
    } as ColumnDef<any>;
  });

  return {
    defs,
    leftPinned,
    rightPinned,
    defaultColumnSizing,
  };
};

const getCommonPinningStyles = (column: any): CSSProperties => {
  const isPinned = column.getIsPinned();
  const isLastLeftPinnedColumn = isPinned === 'left' && column.getIsLastColumn('left');
  const isFirstRightPinnedColumn =
    isPinned === 'right' && column.getIsFirstColumn('right');

  return {
    boxShadow: isLastLeftPinnedColumn
      ? '-4px 0 4px -4px rgba(0, 0, 0, 0.16) inset'
      : isFirstRightPinnedColumn
        ? '4px 0 4px -4px rgba(0, 0, 0, 0.16) inset'
        : undefined,
    left: isPinned === 'left' ? `${column.getStart('left')}px` : undefined,
    right: isPinned === 'right' ? `${column.getAfter('right')}px` : undefined,
    position: isPinned ? 'sticky' : 'relative',
    zIndex: isPinned ? 2 : 1,
    background: '#fff',
  };
};

const resolveRowKey = (
  rowKey: DataGridProps<any>['rowKey'],
  record: any,
  index: number,
) => {
  if (typeof rowKey === 'function') {
    return rowKey(record);
  }

  if (typeof rowKey === 'string') {
    return record?.[rowKey];
  }

  return record?.key ?? index;
};

const getPaginationConfig = (
  pagination: DataGridProps<any>['pagination'],
  total: number,
) => {
  if (pagination === false) {
    return false;
  }

  if (!pagination) {
    return {
      current: 1,
      pageSize: 10,
      total,
      showSizeChanger: true,
    };
  }

  return {
    current: pagination.current ?? 1,
    pageSize: pagination.pageSize ?? 10,
    total: pagination.total ?? total,
    showSizeChanger: pagination.showSizeChanger ?? true,
    pageSizeOptions: pagination.pageSizeOptions,
    hideOnSinglePage: pagination.hideOnSinglePage,
    showQuickJumper: pagination.showQuickJumper,
    showTotal: pagination.showTotal,
    onChange: pagination.onChange,
  };
};

const DataGridInternal: FC<PropsWithChildren<DataGridProps>> = ({
                                                                  className,
                                                                  style,
                                                                  columns,
                                                                  dataSource = [],
                                                                  height,
                                                                  minColumnWidth = 80,
                                                                  loading,
                                                                  rowClassName,
                                                                  rowKey,
                                                                  onRow,
                                                                  locale,
                                                                  pagination,
                                                                  scroll,
                                                                  children,
                                                                }) => {
  const [columnResizeMode] = useState<ColumnResizeMode>('onChange');
  const [columnResizeDirection, setColumnResizeDirection] =
    useState<ColumnResizeDirection>('ltr');
  const [innerPagination, setInnerPagination] = useState<PaginationState>({
    current: 1,
    pageSize: 10,
  });
  const headContainerRef = useRef<HTMLDivElement>(null);

  const {hashId} = useCssInJs({
    prefix: prefixCls,
    styleFun: genDataGridStyle,
  });

  const paginationConfig = useMemo(
    () => getPaginationConfig(pagination, dataSource.length),
    [pagination, dataSource.length],
  );
  const controlledPagination =
    pagination && typeof pagination === 'object' ? pagination : undefined;

  useEffect(() => {
    if (paginationConfig === false) {
      return;
    }

    setInnerPagination({
      current: paginationConfig.current ?? 1,
      pageSize: paginationConfig.pageSize ?? 10,
    });
  }, [paginationConfig]);

  const {defs, leftPinned, rightPinned, defaultColumnSizing} = useMemo(
    () => toColumnDefs(columns, minColumnWidth),
    [columns, minColumnWidth],
  );

  const pageData = useMemo(() => {
    if (paginationConfig === false) {
      return dataSource;
    }

    const current = controlledPagination?.current ?? innerPagination.current;
    const pageSize = controlledPagination?.pageSize ?? innerPagination.pageSize;
    const start = (current - 1) * pageSize;
    return dataSource.slice(start, start + pageSize);
  }, [controlledPagination, dataSource, innerPagination, paginationConfig]);

  const table = useReactTable({
    data: pageData,
    columns: defs,
    getCoreRowModel: getCoreRowModel(),
    enableColumnResizing: true,
    columnResizeMode,
    columnResizeDirection,
    defaultColumn: {
      minSize: minColumnWidth,
      size: 120,
    },
    initialState: {
      columnPinning: {
        left: leftPinned,
        right: rightPinned,
      },
      columnSizing: defaultColumnSizing,
    },
  });

  const hasData = table.getRowModel().rows.length > 0;

  const containerStyle = useMemo(() => {
    const nextStyle: CSSProperties = {};

    if (height !== undefined && height !== null) {
      nextStyle.height = '100%';
    }

    return nextStyle;
  }, [height]);

  const bodyContainerStyle = useMemo(() => {
    const nextStyle: CSSProperties = {};

    if (height !== undefined && height !== null) {
      nextStyle.flex = '1 1 auto';
      nextStyle.minHeight = 0;
    } else if (scroll?.y) {
      nextStyle.maxHeight =
        typeof scroll.y === 'number' || typeof scroll.y === 'string'
          ? scroll.y
          : undefined;
    }

    return nextStyle;
  }, [height, scroll?.y]);

  const wrapperStyle = useMemo(() => {
    if (height === undefined || height === null) {
      return style;
    }

    return {
      ...style,
      height,
    };
  }, [height, style]);

  const tableStyle = useMemo(() => {
    const nextStyle: CSSProperties = {};
    if (scroll?.x === true) {
      nextStyle.width = table.getTotalSize();
    } else if (typeof scroll?.x === 'number') {
      nextStyle.width = Math.max(scroll.x, table.getTotalSize());
    } else if (typeof scroll?.x === 'string') {
      nextStyle.width = scroll.x;
    } else {
      nextStyle.width = '100%';
    }
    return nextStyle;
  }, [scroll?.x, table]);

  const emptyNode = useMemo(() => {
    if (typeof locale?.emptyText === 'function') {
      return locale.emptyText();
    }
    return locale?.emptyText ?? <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/>;
  }, [locale?.emptyText]);

  const onPaginationChange = (nextCurrent: number, nextPageSize: number) => {
    if (!controlledPagination?.onChange) {
      setInnerPagination({
        current: nextCurrent,
        pageSize: nextPageSize,
      });
    }

    controlledPagination?.onChange?.(nextCurrent, nextPageSize);
  };

  const renderRow = (row: Row<any>) => {
    const record = row.original;
    const originIndex = row.index;
    const mergedKey = resolveRowKey(rowKey, record, originIndex);
    const rowProps = onRow?.(record, originIndex) ?? {};
    const computedRowClassName =
      typeof rowClassName === 'function'
        ? rowClassName(record, originIndex, 0)
        : rowClassName;

    return (
      <tr
        key={String(mergedKey)}
        {...rowProps}
        className={classNames(
          `${prefixCls}-row`,
          computedRowClassName,
          rowProps.className,
          hashId,
        )}
      >
        {row.getVisibleCells().map((cell) => {
          const columnMeta = cell.column.columnDef.meta as any;
          const originCellProps = columnMeta?.onCell?.(record, originIndex) ?? {};
          const align = columnMeta?.align;
          const ellipsis = columnMeta?.ellipsis;
          return (
            <td
              key={cell.id}
              {...originCellProps}
              className={classNames(
                `${prefixCls}-cell`,
                `${prefixCls}-cell-body`,
                align ? `${prefixCls}-cell-align-${align}` : null,
                ellipsis ? `${prefixCls}-cell-ellipsis` : null,
                columnMeta?.className,
                originCellProps.className,
                hashId,
              )}
              style={{
                width: cell.column.getSize(),
                ...getCommonPinningStyles(cell.column),
                ...originCellProps.style,
              }}
            >
              <div className={classNames(`${prefixCls}-cell-content`, hashId)}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </div>
            </td>
          );
        })}
      </tr>
    );
  };

  const onBodyScroll = (event: UIEvent<HTMLDivElement>) => {
    const scrollLeft = event.currentTarget.scrollLeft;
    if (headContainerRef.current) {
      headContainerRef.current.scrollLeft = scrollLeft;
    }
  };

  return (
    <div
      className={classNames(
        prefixCls,
        hashId,
        className,
        height !== undefined && height !== null ? `${prefixCls}-has-height` : null,
      )}
      style={wrapperStyle}
    >
      <div className={classNames(`${prefixCls}-container`, hashId)} style={containerStyle}>
        <div
          ref={headContainerRef}
          className={classNames(`${prefixCls}-head-container`, hashId)}
        >
          <table className={classNames(`${prefixCls}-table`, hashId)} style={tableStyle}>
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
                {headerGroup.headers.map((header) => {
                  const meta = header.column.columnDef.meta as any;
                  const align = meta?.align;
                  const originHeaderProps = meta?.onHeaderCell?.({
                    key: header.column.id,
                  });
                  const canResize = header.column.getCanResize();
                  const pinned = header.column.getIsPinned();

                  return (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      {...originHeaderProps}
                      className={classNames(
                        `${prefixCls}-cell`,
                        `${prefixCls}-cell-head`,
                        `${prefixCls}-cell-sticky-header`,
                        align ? `${prefixCls}-cell-align-${align}` : null,
                        pinned ? `${prefixCls}-cell-pinned` : null,
                        originHeaderProps?.className,
                        hashId,
                      )}
                      style={{
                        width: header.getSize(),
                        ...getCommonPinningStyles(header.column),
                        ...originHeaderProps?.style,
                      }}
                    >
                      <div className={classNames(`${prefixCls}-cell-wrapper`, hashId)}>
                            <span className={classNames(`${prefixCls}-cell-title`, hashId)}>
                              {header.isPlaceholder
                                ? null
                                : flexRender(
                                  header.column.columnDef.header,
                                  header.getContext(),
                                )}
                            </span>
                        {canResize ? (
                          <span
                            className={classNames(
                              `${prefixCls}-resizer`,
                              pinned === 'right'
                                ? `${prefixCls}-resizer-rtl`
                                : `${prefixCls}-resizer-ltr`,
                              header.column.getIsResizing()
                                ? `${prefixCls}-resizer-active`
                                : null,
                              hashId,
                            )}
                            onMouseDown={(event) => {
                              setColumnResizeDirection(
                                pinned === 'right' ? 'rtl' : 'ltr',
                              );
                              header.getResizeHandler()(event);
                            }}
                            onTouchStart={header.getResizeHandler()}
                            style={{
                              transform:
                                columnResizeMode === 'onEnd' &&
                                header.column.getIsResizing()
                                  ? `translateX(${
                                    (table.options.columnResizeDirection === 'rtl'
                                      ? -1
                                      : 1) *
                                    (table.getState().columnSizingInfo
                                      .deltaOffset ?? 0)
                                  }px)`
                                  : undefined,
                            }}
                          />
                        ) : null}
                      </div>
                    </th>
                  );
                })}
              </tr>
            ))}
            </thead>
          </table>
        </div>
        <div
          className={classNames(`${prefixCls}-body-container`, hashId)}
          style={bodyContainerStyle}
          onScroll={onBodyScroll}
        >
          <table className={classNames(`${prefixCls}-table`, hashId)} style={tableStyle}>
            <tbody className={classNames(`${prefixCls}-body`, hashId)}>
            {hasData ? (
              table.getRowModel().rows.map((row) => renderRow(row))
            ) : (
              <tr className={classNames(`${prefixCls}-row`, hashId)}>
                <td
                  className={classNames(
                    `${prefixCls}-cell`,
                    `${prefixCls}-cell-empty`,
                    hashId,
                  )}
                  colSpan={Math.max(columns.length, 1)}
                >
                  {emptyNode}
                </td>
              </tr>
            )}
            </tbody>
          </table>
        </div>
      </div>
      {children}
      {paginationConfig === false ? null : (
        <div className={classNames(`${prefixCls}-pagination`, hashId)}>
          <Pagination
            {...paginationConfig}
            current={controlledPagination?.current ?? innerPagination.current}
            pageSize={controlledPagination?.pageSize ?? innerPagination.pageSize}
            total={paginationConfig.total}
            onChange={onPaginationChange}
          />
        </div>
      )}
    </div>
  );
};

export const DataGrid = DataGridInternal;

export default DataGrid;
