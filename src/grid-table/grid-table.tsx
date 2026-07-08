import { GetRef, Table, TableProps } from 'antd';
import classNames from 'classnames';
import { isEqual } from 'lodash-es';
import React, { FC, useEffect, useReducer, useRef, useState } from 'react';
import { Resizable } from 'react-resizable';
import { useCssInJs } from '../hooks';
import { genGridTableStyle } from './styles';

enum ColumnsOperation {
  SET_COLUMN_WIDTH = 'setColumnWidth',
  SET_COLUMNS = 'setColumns',
}

const ResizableCell: FC<any> = ({
  onResize,
  width,
  reportWidth,
  ...restProps
}) => {
  const cellRef = React.useRef<HTMLTableCellElement>(null);

  useEffect(() => {
    if (cellRef.current && !width) {
      reportWidth?.(cellRef.current.offsetWidth);
    }
  }, [width, reportWidth]);

  if (!onResize || !width) {
    return <th ref={cellRef} {...restProps} />;
  }

  return (
    <Resizable
      width={width}
      height={0}
      resizeHandles={['se']}
      onResize={onResize}
      draggableOpts={{ enableUserSelectHack: false }}
    >
      <th ref={cellRef} {...restProps} />
    </Resizable>
  );
};

const measureClassNames = {
  title: 'measure-title',
  header: 'measure-header',
  body: 'measure-body',
  pagination: 'measure-pagination',
};

const tableClassNames = {
  title: measureClassNames.title,
  header: {
    wrapper: measureClassNames.header,
  },
  body: {
    wrapper: measureClassNames.body,
  },
  pagination: {
    root: measureClassNames.pagination,
  },
};

export type GridTableProps = TableProps<any> & {
  /**
   * @description 是否撑满外部容器
   * @default false
   */
  fit?: boolean;
  /**
   * @description 是否展示返回icon
   * @default
   */
  toolbar?: React.ReactNode;
  /**
   * @description 是否可拖拽列宽
   * @default true
   */
  resizable?: boolean;
  /**
   * @description 列最小宽度
   * @default 20
   */
  columnMinWidth?: number;
};

const prefixCls = 'triones-ant-grid-table';

const GridTable: FC<GridTableProps> = (
  {
    fit = false,
    toolbar,
    resizable = false,
    columnMinWidth = 20,
    style,
    ...props
  },
  context,
) => {
  const [columns, dispatchColumns] = useReducer(
    (preState: any[], action: { type: string; payload: any }) => {
      switch (action.type) {
        case ColumnsOperation.SET_COLUMN_WIDTH: {
          return preState.map((col, index) => {
            if (index === action.payload.index) {
              return {
                ...col,
                width: action.payload.width,
              };
            }
            return col;
          });
        }
        case ColumnsOperation.SET_COLUMNS: {
          return action.payload;
        }
      }
      return [...preState];
    },
    props.columns || [],
  );
  const rootRef = useRef<GetRef<typeof Table>>(null);

  const [scrollY, setScrollY] = useState<any>();
  const [sectionHeight, setSectionHeight] = useState(0);
  const handleResize =
    (index: number) =>
    (e: any, { size }: any) => {
      const column = columns[index];
      if (column.width === size.width) return;
      const minWidth = column.minWidth || columnMinWidth;
      if (size.width <= minWidth) return;
      dispatchColumns({
        type: ColumnsOperation.SET_COLUMN_WIDTH,
        payload: {
          index,
          width: size.width,
        },
      });
    };

  const mergedColumns = resizable
    ? columns?.map((column: any, index: number) => ({
        ...column,
        onHeaderCell: (column: any) => ({
          width: column.width,
          onResize: handleResize(index),
          reportWidth: (width: number) => {
            dispatchColumns({
              type: ColumnsOperation.SET_COLUMN_WIDTH,
              payload: {
                index,
                width,
              },
            });
          },
        }),
      }))
    : columns;

  useEffect(() => {
    if (!isEqual(props.columns, columns)) {
      dispatchColumns({
        type: ColumnsOperation.SET_COLUMNS,
        payload: props.columns,
      });
    }
  }, [props.columns]);

  const getHeight = (className: string | HTMLElement) => {
    const ele =
      typeof className === 'string'
        ? rootRef.current?.nativeElement?.querySelector<HTMLElement>(
            `.${className}`,
          )
        : className;

    if (ele) {
      const styles = getComputedStyle(ele);
      const marginTop = Number.parseFloat(styles.marginTop) || 0;
      const marginBottom = Number.parseFloat(styles.marginBottom) || 0;

      return ele.getBoundingClientRect().height + marginTop + marginBottom;
    }

    return 0;
  };

  useEffect(() => {
    const element = rootRef.current?.nativeElement;

    if (!element) {
      return;
    }

    const measure = () => {
      const totalHeight = getHeight(element);
      const titleHeight = getHeight(measureClassNames.title);
      const headerHeight = getHeight(measureClassNames.header);
      const bodyHeight = getHeight(measureClassNames.body);
      const summaryHeight = getHeight('ant-table-summary');
      const paginationHeight = getHeight(measureClassNames.pagination);

      console.log(
        totalHeight,
        titleHeight,
        headerHeight,
        bodyHeight,
        summaryHeight,
        paginationHeight,
      );
      const scrollYValue = Math.max(
        0,
        Math.floor(
          totalHeight -
            titleHeight -
            headerHeight -
            summaryHeight -
            paginationHeight,
        ),
      );
      if (bodyHeight < scrollYValue) {
        setScrollY(undefined);
      } else {
        setScrollY(scrollYValue);
      }
      setSectionHeight(totalHeight - titleHeight - paginationHeight);
    };

    measure();

    const resizeObserver = new ResizeObserver(measure);

    resizeObserver.observe(element);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const handleComponents = () => {
    if (resizable) {
      return {
        ...props.components,
        header: Object.assign({}, props.components?.header, {
          cell: ResizableCell,
        }),
      };
    } else {
      return props.components;
    }
  };

  const { hashId } = useCssInJs({
    prefix: prefixCls,
    styleFun: genGridTableStyle,
  });

  const incomingStyles = props.styles;

  const tableStyles: TableProps<any>['styles'] = fit
    ? typeof incomingStyles === 'function'
      ? (info) => {
          const resolvedStyles = incomingStyles(info);
          return {
            ...resolvedStyles,
            section: {
              ...resolvedStyles?.section,
              maxHeight: sectionHeight,
            },
          };
        }
      : {
          ...incomingStyles,
          section: {
            ...incomingStyles?.section,
            maxHeight: sectionHeight,
          },
        }
    : incomingStyles;

  return (
    <Table
      {...props}
      ref={rootRef}
      title={toolbar ? () => toolbar : props.title}
      components={handleComponents()}
      columns={mergedColumns}
      className={classNames(hashId, prefixCls, props.className)}
      style={fit ? { ...style, height: '100%' } : style}
      classNames={tableClassNames}
      scroll={fit ? { ...props.scroll, y: scrollY } : props.scroll}
      styles={tableStyles}
    />
  );
};
export default Object.assign(GridTable, {
  Column: Table.Column,
  ColumnGroup: Table.ColumnGroup,
});
