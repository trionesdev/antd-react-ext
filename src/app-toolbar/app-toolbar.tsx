import { Avatar, AvatarProps, Menu, MenuProps, Space } from 'antd';
import classNames from 'classnames';
import _ from 'lodash';
import React, { FC } from 'react';
import { useCssInJs } from '../hooks';
import { genAppToolbarStyle } from './styles';

export type AppToolbarProps = {
  className?: string;
  style?: React.CSSProperties;
  avatar?: AvatarProps;
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
  navItems?: MenuProps['items'];
  selectedKeys?: string[];
};
const AppToolbar: FC<AppToolbarProps> = ({
  className,
  style,
  avatar,
  title,
  extra,
  navItems,
  selectedKeys,
}) => {
  const prefixCls = 'ant-app-toolbar';
  const { hashId, wrapSSR } = useCssInJs({
    prefix: prefixCls,
    styleFun: genAppToolbarStyle,
  });

  return wrapSSR(
    <div style={style} className={classNames(prefixCls, hashId)}>
      <div className={classNames(`${prefixCls}-heading`, hashId, className)}>
        <div className={classNames(`${prefixCls}-heading-left`, hashId)}>
          <Space>
            {avatar && (
              <Avatar
                {...Object.assign({ size: 40, shape: 'square' }, avatar)}
              />
            )}
            <div
              className={classNames(`${prefixCls}-heading-left-title`, hashId)}
            >
              {title}
            </div>
          </Space>
        </div>
        {!_.isEmpty(navItems) && (
          <Menu
            mode="horizontal"
            items={navItems}
            selectedKeys={selectedKeys}
          />
        )}
        <div className={classNames(`${prefixCls}-heading-right`, hashId)}>
          <Space>{extra}</Space>
        </div>
      </div>
    </div>,
  );
};
export default AppToolbar;
