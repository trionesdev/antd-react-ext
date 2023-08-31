import type {CSSInterpolation} from '@ant-design/cssinjs';
import {useStyleRegister} from '@ant-design/cssinjs';
import {Avatar, AvatarProps, GlobalToken, Menu, MenuProps, Space, theme} from 'antd';
import classNames from 'classnames';
import _ from 'lodash';
import React, {FC} from 'react';

const {useToken} = theme;
const genAppToolbarStyle = (
  prefixCls: string,
  token: GlobalToken,
): CSSInterpolation => {
  return {
    [`.${prefixCls}`]: {
      height: '60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottom: `1px solid ${token.colorBorder}`,
      padding: '0px 8px',
      boxSizing: 'border-box',
      [`&-heading`]: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',

        [`&-left`]: {
          [`&-title`]: {
            color: '#000000d9',
            fontWeight: 600,
            fontSize: '20px',
            lineHeight: '32px',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis'
          },
        },
        [`&-right`]: {},
        [`.ant-menu-horizontal`]: {
          flex: '1 auto',
          height: '60px',
          backgroundColor: 'inherit',
          li: {
            display: 'flex',
            alignItems: 'center',
          },
        },
      },
    },
  };
};

interface AppToolbarProps {
  className?: string;
  style?: React.CSSProperties;
  avatar?: AvatarProps
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
}

const AppToolbar: FC<AppToolbarProps> = ({
                                           className,
                                           style,
                                           avatar ,
                                           title,
                                           extra,
                                           navItems,
                                           selectedKeys,
                                         }) => {
  const prefixCls = 'ant-app-toolbar';
  const {theme, token, hashId} = useToken();
  const wrapSSR = useStyleRegister(
    {theme, token, hashId, path: [prefixCls]},
    () => [genAppToolbarStyle(prefixCls, token)],
  );

  return wrapSSR(
    <div style={style} className={classNames(prefixCls, hashId)}>
      <div className={classNames(`${prefixCls}-heading`, hashId, className)}>
        <Space className={classNames(`${prefixCls}-heading-left`, hashId)}>
          {avatar && <Avatar
            {...Object.assign({size: 40, shape: 'square'}, avatar)}
          />}
          <div className={classNames(`${prefixCls}-heading-left-title`, hashId)}>
            {title}
          </div>
          {!_.isEmpty(navItems) && (
            <Menu
              mode="horizontal"
              items={navItems}
              selectedKeys={selectedKeys}
            />
          )}
        </Space>
        <Space className={classNames(`${prefixCls}-heading-right`, hashId)}>{extra}</Space>
      </div>
    </div>,
  );
};
export default AppToolbar;
