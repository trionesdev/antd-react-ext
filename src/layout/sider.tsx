import Item from "./item";
import React, {FC, useEffect, useState} from "react";
import {useStyleRegister} from "@ant-design/cssinjs";
import {genSiderStyle} from "./styles";
import {Button, theme} from "antd";
import classNames from "classnames";
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";

const {useToken} = theme;

type SiderProps = {
  children?: React.ReactNode
  className?: string | undefined,
  style?: React.CSSProperties;
  collapsedWidth?: number
  collapsed?: boolean,
  collapsible?: boolean
  width?: number | string
  onCollapse?: (collapsed: boolean) => void
  trigger?: React.ReactNode
}
const Sider: FC<SiderProps> = ({
                                 children,
                                 className,
                                 style,
                                 collapsedWidth = 80,
                                 collapsed = false,
                                 collapsible = false,
                                 width = 200,
                                 trigger,
                                 onCollapse,
                               }) => {
  const [scopeCollapsed, setScopeCollapsed] = useState(collapsed)
  const prefixCls = 'ms-ant-layout-sider';
  const {theme, token, hashId} = useToken();
  const wrapSSR = useStyleRegister(
    {theme, token, hashId, path: [prefixCls]},
    () => [genSiderStyle(prefixCls, token)],
  );

  const handleCollapse = () => {
    const changeCollapsed = !scopeCollapsed
    setScopeCollapsed(changeCollapsed)
    onCollapse?.(changeCollapsed)
  }

  useEffect(() => {
    setScopeCollapsed(collapsed)
  }, [collapsed])

  const displayWidth = scopeCollapsed ? collapsedWidth : width
  return wrapSSR(<Item className={classNames(prefixCls, className, hashId)} style={{
    ...style,
    flexBasis: displayWidth,
    maxWidth: displayWidth,
    minWidth: displayWidth,
    width: displayWidth
  }}>
    <div className={classNames(`${prefixCls}-children`, hashId)}>{children}</div>
    {collapsedWidth > 0 && <div className={classNames(`${prefixCls}-trigger`, hashId)}>
      {trigger || <Button type={`text`}
                          icon={scopeCollapsed ? <MenuUnfoldOutlined rev={undefined}/> :
                            <MenuFoldOutlined rev={undefined}/>}
                          onClick={handleCollapse}/>}
    </div>}
  </Item>)
}
export default Sider
