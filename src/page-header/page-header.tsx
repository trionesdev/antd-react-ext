import { ArrowLeftOutlined } from '@ant-design/icons';
import {
  Breadcrumb,
  BreadcrumbProps,
  Button,
  ConfigProvider,
  Space,
} from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import classNames from 'classnames';
import React, { FC } from 'react';
import { useCssInJs } from '../hooks';
import { genPageHeaderStyle } from './styles';

/**
 * 与 antd Card / Box 一致：`large` 不适用；`mini` 时 padding 为 0。
 */
export type PageHeaderSize = Exclude<SizeType, 'large'> | 'default' | 'mini';

export type PageHeaderProps = {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  /**
   * @description 页头尺寸：`default` | `small` | `mini`（mini 时 padding 为 0）
   * @default default
   */
  size?: PageHeaderSize;
  /**
   * @description 是否展示返回按钮
   * @default true
   */
  showBack?: boolean;
  /**
   * @description 标题
   * @default null
   */
  title?: React.ReactNode;
  /**
   * @description 副标题
   * @default null
   */
  subTitle?: React.ReactNode;
  /**
   * @description 面包屑
   * @default null
   */
  breadcrumb?: BreadcrumbProps;
  /**
   * @description 额外元素，标题最右侧
   * @default null
   */
  extra?: React.ReactNode;
  /**
   * @description 点击返回回调
   * @default null
   */
  onBack?: () => void;
  /**
   * @description 底部
   * @default null
   */
  footer?: React.ReactNode;
};

const PageHeader: FC<PageHeaderProps> = ({
  className,
  style,
  children,
  size,
  showBack = true,
  title,
  subTitle,
  breadcrumb,
  extra,
  onBack,
  footer,
}) => {
  const prefixCls = 'triones-ant-page-header';
  const { componentSize } = ConfigProvider.useConfig();

  const mergedSize: PageHeaderSize =
    size ?? (componentSize === 'small' ? 'small' : 'default');
  const isSmall = mergedSize === 'small';
  const isMini = mergedSize === 'mini';

  const { hashId } = useCssInJs({
    prefix: prefixCls,
    styleFun: genPageHeaderStyle,
  });

  return (
    <div
      style={style}
      className={classNames(
        prefixCls,
        {
          [`${prefixCls}-small`]: isSmall,
          [`${prefixCls}-mini`]: isMini,
        },
        className,
        hashId,
      )}
    >
      {breadcrumb && (
        <div className={classNames(`${prefixCls}-breadcrumb`, hashId)}>
          <Space>
            <Breadcrumb {...breadcrumb} />
          </Space>
        </div>
      )}
      <div className={classNames(`${prefixCls}-heading`, hashId)}>
        <Space size={isSmall ? 'small' : 'middle'}>
          {showBack && (
            <Button
              type="text"
              size={isSmall ? 'small' : 'middle'}
              icon={<ArrowLeftOutlined rev={undefined} />}
              onClick={onBack}
            />
          )}
          {title && (
            <span className={classNames(`${prefixCls}-heading-title`, hashId)}>
              {title}
            </span>
          )}
          {subTitle && (
            <span
              className={classNames(`${prefixCls}-heading-sub-title`, hashId)}
            >
              {subTitle}
            </span>
          )}
        </Space>
        <Space size={isSmall ? 'small' : 'middle'}>{extra}</Space>
      </div>
      {children && <div>{children}</div>}
      {footer && <div>{footer}</div>}
    </div>
  );
};
export default PageHeader;
