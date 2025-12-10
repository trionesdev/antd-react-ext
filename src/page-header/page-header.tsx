import { ArrowLeftOutlined } from '@ant-design/icons';
import {
  Avatar,
  AvatarProps,
  Breadcrumb,
  BreadcrumbProps,
  Button,
  Space,
} from 'antd';
import classNames from 'classnames';
import React, { FC } from 'react';
import { useCssInJs } from '../hooks';
import { genPageHeaderStyle } from './styles';

export type PageHeaderProps = {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  /**
   * @description 是否展示返回icon
   * @default true
   */
  backIcon?: boolean;
  avatar?: AvatarProps;
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
  backIcon = true,
  avatar,
  title,
  subTitle,
  breadcrumb,
  extra,
  onBack,
  footer,
}) => {
  const prefixCls = 'triones-ant-page-header';

  const { hashId } = useCssInJs({
    prefix: prefixCls,
    styleFun: genPageHeaderStyle,
  });

  return (
    <div style={style} className={classNames(prefixCls, className, hashId)}>
      {breadcrumb && (
        <div className={classNames(`${prefixCls}-breadcrumb`, hashId)}>
          <Space>
            <Breadcrumb {...breadcrumb} />
          </Space>
        </div>
      )}
      <div className={classNames(`${prefixCls}-heading`, hashId)}>
        <Space>
          {avatar && <Avatar {...avatar} />}
          {backIcon && (
            <Button
              type={`text`}
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
        <Space>{extra}</Space>
      </div>
      {children && <div>{children}</div>}
      {footer && <div>{footer}</div>}
    </div>
  );
};
export default PageHeader;
