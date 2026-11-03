import { Avatar, AvatarProps, Menu, MenuProps, Space } from 'antd';
import classNames from 'classnames';
import React, { CSSProperties, FC } from 'react';
import { useCssInJs } from '../hooks';
import { genAppToolbarStyle } from './styles';

export type AppToolbarProps = {
  className?: string;
  style?: React.CSSProperties;
  /**
   * @description 工具栏高度，单位 px；也可传入带单位的字符串
   * @default 60
   */
  height?: number | string;
  logo?: AvatarProps;
  /**
   * @description 标题
   * @default null
   */
  title?: React.ReactNode;
  /**
   * @description 其他组件，在右侧展示
   * @default []
   */
  extra?: React.ReactNode;
  /**
   * @description 水平导航菜单配置；false 或不传时隐藏，true 时使用默认配置
   */
  menu?: boolean | Omit<MenuProps, 'mode'>;
};

const DEFAULT_HEIGHT = 60;

const AppToolbar: FC<AppToolbarProps> = ({
  className,
  style,
  height = DEFAULT_HEIGHT,
  logo,
  title,
  extra,
  menu,
}) => {
  const prefixCls = 'triones-ant-app-toolbar';
  const { hashId } = useCssInJs({
    prefix: prefixCls,
    styleFun: genAppToolbarStyle,
  });

  const heightValue = typeof height === 'number' ? `${height}px` : height;
  const menuProps = typeof menu === 'object' ? menu : undefined;

  const mergedStyle: CSSProperties = {
    ...style,
    height: heightValue,
    ['--triones-app-toolbar-height' as string]: heightValue,
  };

  return (
    <div
      style={mergedStyle}
      className={classNames(prefixCls, hashId, className)}
    >
      <div className={classNames(`${prefixCls}-heading`, hashId)}>
        <div className={classNames(`${prefixCls}-heading-left`, hashId)}>
          {logo && <Avatar size={40} shape="square" {...logo} />}
          <div
            className={classNames(`${prefixCls}-heading-left-title`, hashId)}
            title={typeof title === 'string' ? title : undefined}
          >
            {title}
          </div>
        </div>
        {menu && <Menu {...menuProps} mode="horizontal" />}
        {extra != null && (
          <div className={classNames(`${prefixCls}-heading-right`, hashId)}>
            <Space>{extra}</Space>
          </div>
        )}
      </div>
    </div>
  );
};
export default AppToolbar;
