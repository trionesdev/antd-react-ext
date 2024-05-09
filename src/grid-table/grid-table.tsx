import { Table, TableProps } from 'antd';
import classNames from 'classnames';
import _ from 'lodash';
import React, { FC, useEffect, useState } from 'react';
import { useCssInJs } from '../hooks';
import { genGridTableStyle } from './styles';

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
};

const GridTable: FC<GridTableProps> = (
  { fit = false, toolbar, style, ...props },
  context,
) => {
  const gridTableRef = React.useRef<HTMLDivElement>(null);

  const [containerHeight, setContainerHeight] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [bodyHeight, setBodyHeight] = useState(0);
  const [bodyWidth, setBodyWidth] = useState(0);

  const [scrollY, setScrollY] = useState(false);

  const prefixCls = 'triones-ant-grid-table';
  const { hashId, wrapSSR } = useCssInJs({
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

  const mutationObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
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
        resizeObserverTableHeader.observe(fixedHeader);
        resizeObserverTableBody.observe(fixedBody);
      } else {
        const tableHeader = gridTableRef.current?.querySelector(
          '.ant-table-container .ant-table-thead',
        ) as HTMLDivElement;
        const tableBody = gridTableRef.current?.querySelector(
          '.ant-table-container .ant-table-tbody',
        ) as HTMLDivElement;
        resizeObserverTableHeader.observe(tableHeader);
        resizeObserverTableBody.observe(tableBody);
      }
    });
  });

  useEffect(
    _.debounce(() => {
      if (containerWidth < bodyWidth) {
        if (containerHeight < headerHeight + bodyHeight + 17) {
          setScrollY(true);
        } else {
          setScrollY(false);
        }
      } else {
        if (containerHeight < headerHeight + bodyHeight) {
          setScrollY(true);
        } else {
          setScrollY(false);
        }
      }
    }, 500),
    [containerHeight, containerWidth, headerHeight, bodyHeight, bodyWidth],
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

    return () => {
      resizeObserverTableContainer.disconnect();
      resizeObserverTableHeader.disconnect();
      resizeObserverTableBody.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return wrapSSR(
    <div
      ref={gridTableRef}
      style={style}
      className={classNames(
        prefixCls,
        props.className,
        hashId,
        fit ? 'ant-table-fill' : null,
      )}
    >
      <>
        {toolbar}
        <Table
          {...props}
          scroll={
            fit
              ? _.assign({}, props.scroll, scrollY ? { y: true } : {})
              : props.scroll
          }
        />
      </>
    </div>,
  );
};
export default Object.assign(GridTable, {
  Column: Table.Column,
  ColumnGroup: Table.ColumnGroup,
});
