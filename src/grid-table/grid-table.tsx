import { Table, TableProps } from 'antd';
import classNames from 'classnames';
import { assign, debounce, isEqual } from 'lodash-es';
import React, { FC, useEffect, useReducer, useState } from 'react';
import { Resizable } from 'react-resizable';
import { useCssInJs } from '../hooks';
import { genGridTableStyle } from './styles';

enum ColumnsOperation {
  SET_COLUMN_WIDTH = 'setColumnWidth',
  SET_COLUMNS = 'setColumns',
}

const ResizableCell: FC<any> = ({ onResize, width, onWith, ...restProps }) => {
  const cellRef = React.useRef<HTMLTableCellElement>(null);

  useEffect(() => {
    if (cellRef.current && !width) {
      onWith?.(cellRef.current.offsetWidth);
    }
  }, [cellRef.current, width, onWith]);

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
  columnMinWidth?: number;
};

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
  const gridTableRef = React.useRef<HTMLDivElement>(null);

  const [containerHeight, setContainerHeight] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [bodyHeight, setBodyHeight] = useState(0);
  const [bodyWidth, setBodyWidth] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);

  const [scrollX, setScrollX] = useState(false);
  const [scrollY, setScrollY] = useState(false);

  const prefixCls = 'triones-ant-grid-table';
  const { hashId } = useCssInJs({
    prefix: prefixCls,
    styleFun: genGridTableStyle,
  });

  const resizeObserverTableContainer = new ResizeObserver((entries) => {
    for (let entry of entries) {
      const { target, contentRect } = entry;
      const { height, width } = contentRect;
      if (height > 0) {
        setContainerHeight(height);
      }
      if (width > 0) {
        setContainerWidth(width);
      }
    }
  });

  const resizeObserverTableHeader = new ResizeObserver((entries) => {
    for (let entry of entries) {
      const { target, contentRect } = entry;
      const { height } = contentRect;
      if (height > 0) {
        setHeaderHeight(height);
      }
    }
  });

  const resizeObserverTableBody = new ResizeObserver((entries) => {
    for (let entry of entries) {
      const { target, contentRect } = entry;
      const { height, width } = contentRect;
      if (height > 0) {
        setBodyHeight(height);
      }
      if (width > 0) {
        setBodyWidth(width);
      }
    }
  });

  const resizeObserverTableFooter = new ResizeObserver((entries) => {
    for (let entry of entries) {
      const { target, contentRect } = entry;
      const { height } = contentRect;
      if (height > 0) {
        setFooterHeight(height);
      }
    }
  });

  const handleObserverTableContent = () => {
    const hasFixedRight = gridTableRef.current?.querySelector(
      '.ant-table-has-fix-right',
    ) as HTMLDivElement;
    if (hasFixedRight) {
      const fixedHeader = gridTableRef.current?.querySelector(
        '.ant-table-container .ant-table-thead',
      ) as HTMLDivElement;
      const fixedBody = gridTableRef.current?.querySelector(
        '.ant-table-container .ant-table-tbody',
      ) as HTMLDivElement;
      const fixedFooter = gridTableRef.current?.querySelector(
        '.ant-table-container .ant-table-summary',
      ) as HTMLDivElement;
      if (fixedHeader) {
        resizeObserverTableHeader.observe(fixedHeader);
      }
      if (fixedBody) {
        resizeObserverTableBody.observe(fixedBody);
      }
      if (fixedFooter) {
        resizeObserverTableFooter.observe(fixedFooter);
      }
    } else {
      const tableHeader = gridTableRef.current?.querySelector(
        '.ant-table-container .ant-table-thead',
      ) as HTMLDivElement;
      const tableBody = gridTableRef.current?.querySelector(
        '.ant-table-container .ant-table-tbody',
      ) as HTMLDivElement;
      const tableFooter = gridTableRef.current?.querySelector(
        '.ant-table-container .ant-table-summary',
      ) as HTMLDivElement;
      if (tableHeader) {
        resizeObserverTableHeader.observe(tableHeader);
      }
      if (tableBody) {
        resizeObserverTableBody.observe(tableBody);
      }
      if (tableFooter) {
        resizeObserverTableFooter.observe(tableFooter);
      }
    }
  };

  const mutationObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      handleObserverTableContent();
    });
  });

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

  const mergedColumns = columns?.map((column: any, index: number) => {
    return {
      ...column,
      onHeaderCell: (column: any) => ({
        width: column.width,
        onResize: handleResize(index),
        onWith: (width: number) => {
          dispatchColumns({
            type: ColumnsOperation.SET_COLUMN_WIDTH,
            payload: {
              index: index,
              width: width,
            },
          });
        },
      }),
    };
  });

  useEffect(
    debounce(() => {
      if (containerWidth < bodyWidth) {
        if (!props.scroll?.x) {
          setScrollX(true);
        }
        if (
          Math.ceil(containerHeight) <
          Math.ceil(headerHeight + bodyHeight + footerHeight + 8)
        ) {
          setScrollY(true);
        } else {
          setScrollY(false);
        }
      } else {
        if (!props.scroll?.x) {
          setScrollX(false);
        }
        if (
          Math.ceil(containerHeight) <
          Math.ceil(headerHeight + bodyHeight + footerHeight)
        ) {
          setScrollY(true);
        } else {
          setScrollY(false);
        }
      }
    }, 500),
    [
      containerHeight,
      containerWidth,
      headerHeight,
      bodyHeight,
      bodyWidth,
      footerHeight,
    ],
  );

  useEffect(() => {
    const containerEl = gridTableRef.current!.querySelector(
      '.ant-table-container',
    ) as HTMLDivElement;
    resizeObserverTableContainer.observe(containerEl);
    mutationObserver.observe(containerEl, {
      childList: true,
      subtree: true,
    });
    handleObserverTableContent();

    return () => {
      resizeObserverTableContainer.disconnect();
      resizeObserverTableHeader.disconnect();
      resizeObserverTableBody.disconnect();
      resizeObserverTableFooter.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isEqual(props.columns, columns)) {
      dispatchColumns({
        type: ColumnsOperation.SET_COLUMNS,
        payload: props.columns,
      });
    }
  }, [props.columns]);

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

  return (
    <div
      ref={gridTableRef}
      style={style}
      className={classNames(
        prefixCls,
        props.className,
        hashId,
        fit ? 'ant-table-fill' : null,
        scrollY ? 'has-scrollbar-y' : null,
      )}
    >
      <>
        {toolbar}
        <Table
          {...props}
          components={handleComponents()}
          columns={mergedColumns}
          scroll={
            fit
              ? assign({}, props.scroll, { y: '100%' })
              : assign({}, props.scroll, { x: 'max-content' })
          }
        />
      </>
    </div>
  );
};
export default Object.assign(GridTable, {
  Column: Table.Column,
  ColumnGroup: Table.ColumnGroup,
});
