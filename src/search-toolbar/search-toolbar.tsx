import {Button, Col, Form, Grid, Row, Space} from 'antd';
import React, {FC, useEffect, useState} from 'react';
import _ from 'lodash';
import {DownOutlined, UpOutlined} from '@ant-design/icons';
import classNames from 'classnames';
import {useCssInJs} from '../hooks';
import {genSearchToolbarStyle} from './styled';

const {useBreakpoint} = Grid;

export type SearchToolbarItem = {
  label?: React.ReactNode;
  name?: string | string[];
  children?: React.ReactNode;
}

export type SearchToolbarProps = {
  items?: SearchToolbarItem[];
  layout?: 'horizontal' | 'inline' | 'vertical';
  initialValues?: any;
  onSearch?: (values: any) => void;
  onReset?: () => void
  span?: number;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
};
const SearchToolbar: FC<SearchToolbarProps> = ({
                                                 items,
                                                 layout,
                                                 initialValues,
                                                 onSearch,
                                                 onReset,
                                                 span = 6,
                                                 xs,
                                                 sm,
                                                 md,
                                                 lg,
                                                 xl,
                                                 xxl,
                                               }) => {
  const prefixCls = 'ant-search-toolbar';

  const [form] = Form.useForm();
  const screens = useBreakpoint();
  const [expanded, setExpanded] = useState(true);
  const [colSpan, setColSpan] = useState(span);
  const [rowColSize, setRowColSize] = useState(4);
  const [offsetSpan, setOffsetSpan] = useState(0);
  const [expandable, setExpandable] = useState(false);

  //计算需要补偿的列数
  const handleCompleteCompensateColCount = (
    rowColSize: number,
    itemSize: number
  ) => {
    if (expanded) {
      const remainder = (itemSize + 1) % rowColSize;
      return remainder === 0 ? 0 : rowColSize - (remainder % rowColSize);
    } else {
      return itemSize > rowColSize - 1 ? 0 : rowColSize - itemSize - 1;
    }
  };

  const handleCompute = () => {
    const itemSize = _.size(items);
    const rowColSize = 24 / colSpan;
    const compensateColCount = handleCompleteCompensateColCount(
      rowColSize,
      itemSize
    ); //需要补偿列数
    const offsetSpan = colSpan * compensateColCount;

    console.log(colSpan);
    console.log(rowColSize);
    console.log(compensateColCount);
    console.log(offsetSpan);

    setRowColSize(rowColSize);
    setOffsetSpan(offsetSpan);
    setExpandable(itemSize > rowColSize - 1);
  };

  const handleSearch = () => {
    form.validateFields().then((values: any) => {
      onSearch?.(values);
    });
  };

  const handleReset = () => {
    form.resetFields();
    onReset?.()
  }

  useEffect(() => {
    let colSpan = span;
    if (screens.xxl) {
      colSpan = xxl || span;
    } else if (screens.xl) {
      colSpan = xl || span;
    } else if (screens.lg) {
      colSpan = lg || span;
    } else if (screens.md) {
      colSpan = md || span;
    } else if (screens.sm) {
      colSpan = sm || span;
    } else if (screens.xs) {
      colSpan = xs || span;
    }
    setColSpan(colSpan);
  }, [screens]);

  useEffect(() => {
    handleCompute();
  }, [items, colSpan, expanded]);

  const colSpanProps = {
    span,
    xs,
    sm,
    md,
    lg,
    xl,
    xxl,
  };

  const {hashId, wrapSSR} = useCssInJs({
    prefix: prefixCls,
    styleFun: genSearchToolbarStyle,
  });

  return wrapSSR(
    <div className={classNames(prefixCls, hashId)}>
      <Form form={form}
            layout={layout}
            initialValues={initialValues}
      >
        <Row gutter={[8, 8]}>
          {items?.map((item, index) => (
            <Col
              key={index}
              {...colSpanProps}
              className={classNames({
                [`${prefixCls}-col-hidden`]:
                index > rowColSize - 2 && !expanded,
              })}
            >
              <Form.Item label={item.label} name={item.name}>
                {item.children}
              </Form.Item>
            </Col>
          ))}
          <Col
            {...colSpanProps}
            offset={offsetSpan}
            style={{textAlign: 'end'}}
          >
            <Form.Item>
              <Space>
                <Button onClick={handleReset}>
                  重置
                </Button>
                <Button type={`primary`} onClick={handleSearch}>
                  查询
                </Button>
                {expandable && (
                  <Button
                    type={`link`}
                    onClick={() => setExpanded(!expanded)}
                  >
                    {' '}
                    {expanded ? (
                      <>
                        收起
                        <UpOutlined rev={undefined}/>
                      </>
                    ) : (
                      <>
                        展开
                        <DownOutlined rev={undefined}/>
                      </>
                    )}{' '}
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
export default SearchToolbar
