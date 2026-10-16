import { Avatar, AvatarProps, Menu, MenuProps, Space } from 'antd';
import classNames from 'classnames';
import { isEmpty } from 'lodash-es';
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
   * @description 导航菜单项
   * @default null
   */
  items?: MenuProps['items'];
  selectedKeys?: string[];
};

const DEFAULT_HEIGHT = 60;

const AppToolbar: FC<AppToolbarProps> = ({
  className,
  style,
  height = DEFAULT_HEIGHT,
  logo,
  title,
  extra,
  items,
  selectedKeys,
}) => {
  const prefixCls = 'triones-ant-app-toolbar';
  const { hashId } = useCssInJs({
    prefix: prefixCls,
    styleFun: genAppToolbarStyle,
  });

  const heightValue = typeof height === 'number' ? `${height}px` : height;

  const mergedStyle: CSSProperties = {
    ...style,
    height: heightValue,
    ['--triones-app-toolbar-height' as string]: heightValue,
  };

  return (
    <div style={mergedStyle} className={classNames(prefixCls, hashId)}>
      <div className={classNames(`${prefixCls}-heading`, hashId, className)}>
        <div className={classNames(`${prefixCls}-heading-left`, hashId)}>
          <Space>
            {logo && (
              <Avatar
                {...Object.assign({ size: 40, shape: 'square' }, logo)}
              />
            )}
            <div
              className={classNames(`${prefixCls}-heading-left-title`, hashId)}
            >
              {title}
            </div>
          </Space>
        </div>
        {!isEmpty(items) && (
          <Menu mode="horizontal" items={items} selectedKeys={selectedKeys} />
        )}
        <div className={classNames(`${prefixCls}-heading-right`, hashId)}>
          <Space>{extra}</Space>
        </div>
      </div>
    </div>
  );
};
export default AppToolbar;
