import { DownOutlined, UpOutlined } from '@ant-design/icons';
import {
  Button,
  Col,
  Form,
  FormInstance,
  FormItemProps,
  Grid,
  Row,
  Space,
} from 'antd';
import classNames from 'classnames';
import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { useCssInJs } from '../hooks';
import { genSearchToolbarStyle } from './styled';

const { useBreakpoint } = Grid;

const prefixCls = 'triones-ant-search-toolbar';

type ResponsiveSpans = {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
};

function getResponsiveColSpan(
  screens: ReturnType<typeof useBreakpoint>,
  span: number,
  responsiveSpans: ResponsiveSpans,
): number {
  if (screens.xxl) return responsiveSpans.xxl ?? span;
  if (screens.xl) return responsiveSpans.xl ?? span;
  if (screens.lg) return responsiveSpans.lg ?? span;
  if (screens.md) return responsiveSpans.md ?? span;
  if (screens.sm) return responsiveSpans.sm ?? span;
  if (screens.xs) return responsiveSpans.xs ?? span;
  return span;
}

function getCompensateColCount(
  rowColSize: number,
  itemSize: number,
  expanded: boolean,
): number {
  if (expanded) {
    const remainder = (itemSize + 1) % rowColSize;
    return remainder === 0 ? 0 : rowColSize - remainder;
  }
  return itemSize > rowColSize - 1 ? 0 : rowColSize - itemSize - 1;
}

export type SearchToolbarProps = {
  style?: React.CSSProperties;
  className?: string;
  defaultExpand?: boolean;
  expand?: boolean;
  items?: FormItemProps[];
  layout?: 'horizontal' | 'inline' | 'vertical';
  labelCol?: { span?: number; offset?: number };
  labelAlign?: 'left' | 'right';
  size?: 'large' | 'middle' | 'small';
  initialValues?: any;
  afterExpandChange?: (expanded: boolean) => void;
  /**
   * @description 查询参数改变后回调
   * @default
   */
  onSearchParamsChange?: (values: any) => void;
  onSearch?: (values: any) => void;
  onReset?: () => void;
  span?: number;
  form?: FormInstance;
} & ResponsiveSpans;

const SearchToolbar: FC<SearchToolbarProps> = ({
  style,
  className,
  defaultExpand = false,
  expand,
  items,
  layout,
  labelCol,
  labelAlign,
  size,
  initialValues,
  afterExpandChange,
  onSearch,
  onSearchParamsChange,
  onReset,
  span = 6,
  form,
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
}) => {
  const [internalForm] = Form.useForm();
  const usedForm = form ?? internalForm;
  const screens = useBreakpoint();
  const [scopeExpand, setScopeExpand] = useState(expand ?? defaultExpand);

  const itemSize = items?.length ?? 0;

  const colSpan = useMemo(
    () => getResponsiveColSpan(screens, span, { xs, sm, md, lg, xl, xxl }),
    [screens, span, xs, sm, md, lg, xl, xxl],
  );

  const { rowColSize, offsetSpan, expandable } = useMemo(() => {
    const rowColSize = 24 / colSpan;
    const compensateColCount = getCompensateColCount(
      rowColSize,
      itemSize,
      scopeExpand,
    );

    return {
      rowColSize,
      offsetSpan: colSpan * compensateColCount,
      expandable: itemSize > rowColSize - 1,
    };
  }, [colSpan, itemSize, scopeExpand]);

  const colSpanProps = useMemo(
    () => ({ span, xs, sm, md, lg, xl, xxl }),
    [span, xs, sm, md, lg, xl, xxl],
  );

  const handleSearch = useCallback(() => {
    usedForm.validateFields().then((values: any) => {
      onSearch?.(values);
    });
  }, [usedForm, onSearch]);

  const handleReset = useCallback(() => {
    usedForm.resetFields();
    onSearchParamsChange?.({});
    onReset?.();
  }, [usedForm, onSearchParamsChange, onReset]);

  const handleToggleExpand = useCallback(() => {
    setScopeExpand((prev) => !prev);
  }, []);

  useEffect(() => {
    afterExpandChange?.(scopeExpand);
  }, [scopeExpand, afterExpandChange]);

  useEffect(() => {
    if (expand !== undefined && expand !== scopeExpand) {
      setScopeExpand(expand);
    }
  }, [expand, scopeExpand]);

  const { hashId } = useCssInJs({
    prefix: prefixCls,
    styleFun: genSearchToolbarStyle,
  });

  return (
    <div className={classNames(className, prefixCls, hashId)} style={style}>
      <Form
        form={usedForm}
        layout={layout}
        labelCol={labelCol}
        labelAlign={labelAlign}
        size={size}
        onValuesChange={(_, allValues) => {
          onSearchParamsChange?.(allValues);
        }}
        initialValues={initialValues}
      >
        <Row gutter={[8, 8]}>
          {items?.map((item, index) => (
            <Col
              key={`${item.name?.toString() ?? index}-${index}`}
              {...colSpanProps}
              className={classNames({
                [`${prefixCls}-col-hidden`]:
                  index > rowColSize - 2 && !scopeExpand,
              })}
            >
              <Form.Item {...item} />
            </Col>
          ))}
          <Col
            {...colSpanProps}
            offset={offsetSpan}
            style={{ textAlign: 'end' }}
          >
            <Form.Item>
              <Space>
                <Button onClick={handleReset}>重置</Button>
                <Button type="primary" onClick={handleSearch}>
                  查询
                </Button>
                {expandable && (
                  <Button type="link" onClick={handleToggleExpand}>
                    {scopeExpand ? (
                      <>
                        收起
                        <UpOutlined rev={undefined} />
                      </>
                    ) : (
                      <>
                        展开
                        <DownOutlined rev={undefined} />
                      </>
                    )}
                  </Button>
                )}
              </Space>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default SearchToolbar;
