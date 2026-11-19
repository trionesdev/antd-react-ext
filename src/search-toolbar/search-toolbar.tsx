import { DownOutlined, UpOutlined } from '@ant-design/icons';
import {
  Button,
  Col,
  ConfigProvider,
  Flex,
  Form,
  FormInstance,
  FormItemProps,
  Grid,
  Row,
  Space,
} from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import classNames from 'classnames';
import React, { FC, useCallback, useMemo, useState } from 'react';
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

/**
 * 与 PageHeader / Box 一致：`large` 不适用；`mini` 时 padding 为 0。
 */
export type SearchToolbarSize = Exclude<SizeType, 'large'> | 'default' | 'mini';

function getResponsiveColSpan(
  screens: ReturnType<typeof useBreakpoint>,
  span: number,
  responsiveSpans: ResponsiveSpans,
): number {
  const breakpoints = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'] as const;
  const breakpoint = breakpoints.find(
    (key) =>
      (key === 'xs' || screens[key]) && responsiveSpans[key] !== undefined,
  );
  const value = breakpoint ? responsiveSpans[breakpoint]! : span;
  return Number.isFinite(value)
    ? Math.min(24, Math.max(1, Math.floor(value)))
    : 6;
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
  /**
   * @description 尺寸：`default` | `small` | `mini`（mini 时 padding 为 0）
   * @default default
   */
  size?: SearchToolbarSize;
  /**
   * @description 是否内联模式
   */
  inline?: boolean;
  /**
   * @description 是否显示重置按钮
   */
  showReset?: boolean;
  /**
   * @description 重置按钮文本
   */
  resetText?: string;
  /**
   * @description 是否显示查询按钮
   */
  showSearch?: boolean;
  /**
   * @description 查询按钮文本
   */
  searchText?: string;
  /**
   * @description 收起按钮文本
   */
  closeText?: string;
  /**
   * @description 展开按钮文本
   */
  expandText?: string;
  /**
   * @description 是否在 values 变化时触发搜索
   */
  triggerSearchOnValuesChange?: boolean;
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
  inline = false,
  showReset = true,
  resetText = '重置',
  showSearch = true,
  searchText = '查询',
  closeText = '收起',
  expandText = '展开',
  triggerSearchOnValuesChange = false,
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
  const [internalExpand, setInternalExpand] = useState(defaultExpand);
  const scopeExpand = expand ?? internalExpand;
  const { componentSize } = ConfigProvider.useConfig();

  const mergedSize: SearchToolbarSize =
    size ?? (componentSize === 'small' ? 'small' : 'default');
  const isSmall = mergedSize === 'small';
  const isMini = mergedSize === 'mini';
  const formSize: SizeType = isSmall ? 'small' : 'middle';
  const gutter: [number, number] = isSmall ? [8, 8] : [16, 16];

  const itemSize = items?.length ?? 0;

  const colSpan = useMemo(
    () => getResponsiveColSpan(screens, span, { xs, sm, md, lg, xl, xxl }),
    [screens, span, xs, sm, md, lg, xl, xxl],
  );

  const { collapsedCount, offsetSpan, expandable } = useMemo(() => {
    const rowColSize = Math.max(1, Math.floor(24 / colSpan));
    const collapsedCount = Math.max(1, rowColSize - 1);
    const visibleCount = scopeExpand
      ? itemSize
      : Math.min(itemSize, collapsedCount);
    const usedColumns = visibleCount % rowColSize;
    return {
      collapsedCount,
      offsetSpan: Math.max(0, 24 - (usedColumns + 1) * colSpan),
      expandable: itemSize > collapsedCount,
    };
  }, [colSpan, itemSize, scopeExpand]);

  const handleReset = useCallback(() => {
    usedForm.resetFields();
    const values = usedForm.getFieldsValue(true);
    onSearchParamsChange?.(values);
    onReset?.();
    if (triggerSearchOnValuesChange) {
      onSearch?.(values);
    }
  }, [
    usedForm,
    onSearchParamsChange,
    onReset,
    triggerSearchOnValuesChange,
    onSearch,
  ]);

  const handleToggleExpand = useCallback(() => {
    const nextExpand = !scopeExpand;
    if (expand === undefined) {
      setInternalExpand(nextExpand);
    }
    afterExpandChange?.(nextExpand);
  }, [expand, scopeExpand, afterExpandChange]);

  const actions = (
    <Space wrap size={isSmall ? 'small' : 'middle'}>
      {showReset && (
        <Button size={formSize} onClick={handleReset}>
          {resetText}
        </Button>
      )}
      {showSearch && (
        <Button size={formSize} type="primary" htmlType="submit">
          {searchText}
        </Button>
      )}
      {!inline && expandable && (
        <Button
          size={formSize}
          type="link"
          aria-expanded={scopeExpand}
          onClick={handleToggleExpand}
          icon={scopeExpand ? <UpOutlined /> : <DownOutlined />}
          iconPlacement="end"
        >
          {scopeExpand ? closeText : expandText}
        </Button>
      )}
    </Space>
  );

  const { hashId } = useCssInJs({
    prefix: prefixCls,
    styleFun: genSearchToolbarStyle,
  });

  return (
    <div
      className={classNames(
        className,
        prefixCls,
        {
          [`${prefixCls}-small`]: isSmall,
          [`${prefixCls}-mini`]: isMini,
        },
        hashId,
      )}
      style={style}
    >
      <Form
        form={usedForm}
        layout={layout ?? (inline ? 'inline' : 'horizontal')}
        labelCol={labelCol}
        labelAlign={labelAlign}
        size={formSize}
        onValuesChange={(_, allValues) => {
          onSearchParamsChange?.(allValues);
          if (triggerSearchOnValuesChange) {
            onSearch?.(allValues);
          }
        }}
        onFinish={onSearch}
        initialValues={initialValues}
      >
        {inline ? (
          <Flex wrap gap={isSmall ? 8 : 16} align="start">
            {items?.map((item, index) => (
              <Form.Item
                key={`${item.name?.toString() ?? index}-${index}`}
                {...item}
              />
            ))}
            {(showReset || showSearch) && actions}
          </Flex>
        ) : (
          <Row gutter={gutter}>
            {items?.map((item, index) => (
              <Col
                key={`${item.name?.toString() ?? index}-${index}`}
                span={colSpan}
                className={classNames({
                  [`${prefixCls}-col-hidden`]:
                    index >= collapsedCount && !scopeExpand,
                })}
              >
                <Form.Item {...item} />
              </Col>
            ))}
            {(showReset || showSearch || expandable) && (
              <Col
                span={colSpan}
                offset={offsetSpan}
                style={{ textAlign: 'end' }}
              >
                <Form.Item>{actions}</Form.Item>
              </Col>
            )}
          </Row>
        )}
      </Form>
    </div>
  );
};

export default SearchToolbar;
