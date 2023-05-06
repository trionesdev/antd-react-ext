import type {CSSInterpolation} from '@ant-design/cssinjs';
import {useStyleRegister} from '@ant-design/cssinjs';
import {Avatar, GlobalToken, Menu, MenuProps, Space, theme} from 'antd';
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
      padding: '0px 24px',
      [`&-inner`]: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
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
  /**
   * @description icon
   * @default null
   */
  icon?: string;
  /**
   * @description icon地址
   * @default null
   */
  iconSrc?: string;
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
                                           icon,
                                           iconSrc,
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
      <div className={classNames(`${prefixCls}-inner`, hashId, className)}>
        <div style={{display: 'flex', alignItems: 'center', flex: '1 auto'}}>
          <Avatar
            size={40}
            shape={`square`}
            icon={icon}
            src={iconSrc}
            style={{marginRight: '12px'}}
          />
          <div
            style={{marginRight: '12px', fontSize: '20px', fontWeight: 600}}
          >
            {title}
          </div>
          {!_.isEmpty(navItems) && (
            <Menu
              mode="horizontal"
              items={navItems}
              selectedKeys={selectedKeys}
            />
          )}
        </div>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <Space>{extra}</Space>
        </div>
      </div>
    </div>,
  );
};
export default AppToolbar;
