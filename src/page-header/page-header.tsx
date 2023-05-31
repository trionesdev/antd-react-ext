import {Avatar, AvatarProps, Breadcrumb, BreadcrumbProps, Button, GlobalToken, Space, theme} from "antd";
import React, {FC} from "react";
import classNames from 'classnames';
import {ArrowLeftOutlined} from "@ant-design/icons";
import type {CSSInterpolation} from '@ant-design/cssinjs';
import {useStyleRegister} from '@ant-design/cssinjs';


const {useToken} = theme;
const genPageHeaderStyle = (
  prefixCls: string,
  token: GlobalToken,
): CSSInterpolation => {
  return {
    [`.${prefixCls}`]: {
      backgroundColor: 'white',
      padding: '8px',
      [`&-breadcrumb`]: {},
      [`&-heading`]: {
        display: 'flex',
        justifyContent: 'space-between',
        [`&-title`]: {
          color: '#000000d9',
          fontWeight: 600,
          fontSize: '20px',
          lineHeight: '32px',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis'
        },
        [`&-sub-title`]: {
          color: '#00000073',
          fontSize: '14px',
          lineHeight: 1.5715,
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis'
        }
      },
    },
  };
};


type PageHeaderProps = {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode,
  /**
   * @description 是否展示返回icon
   * @default true
   */
  backIcon?: boolean
  avatar?: AvatarProps
  /**
   * @description 标题
   * @default null
   */
  title?: React.ReactNode,
  /**
   * @description 副标题
   * @default null
   */
  subTitle?: React.ReactNode
  /**
   * @description 面包屑
   * @default null
   */
  breadcrumb?: BreadcrumbProps
  /**
   * @description 额外元素，标题最右侧
   * @default null
   */
  extra?: React.ReactNode
  /**
   * @description 点击返回回调
   * @default null
   */
  onBack?: () => void
  /**
   * @description 底部
   * @default null
   */
  footer?: React.ReactNode
}

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
                                           footer
                                         }) => {

  const prefixCls = 'ant-page-header';
  const {theme, token, hashId} = useToken();
  const wrapSSR = useStyleRegister(
    {theme, token, hashId, path: [prefixCls]},
    () => [genPageHeaderStyle(prefixCls, token)],
  );


  return wrapSSR(
    <div className={classNames(prefixCls, className, hashId)}>
      {breadcrumb &&
        <div className={classNames(`${prefixCls}-breadcrumb`, hashId)}>
          <Space><Breadcrumb {...breadcrumb}/></Space>
        </div>}
      <div className={classNames(`${prefixCls}-heading`, hashId)}><Space>
        {avatar && <Avatar {...avatar}/>}
        {backIcon && <Button type={`text`} icon={<ArrowLeftOutlined/>} onClick={onBack}/>}
        {title && <span className={classNames(`${prefixCls}-heading-title`, hashId)}>{title}</span>}
        {subTitle && <span className={classNames(`${prefixCls}-heading-sub-title`, hashId)}>{subTitle}</span>}
      </Space>
        <Space>{extra}</Space>
      </div>
      {children && <div>{children}</div>}
      {footer && <div>{footer}</div>}
    </div>
  )
}
export default PageHeader
