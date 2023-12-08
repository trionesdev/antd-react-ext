import {LayoutItem} from "./item";
import React, {FC, useEffect, useState} from "react";
import {genSiderStyle} from "./styles";
import {Button} from "antd";
import classNames from "classnames";
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";
import {useCssInJs} from "../hooks";


export type LayoutSiderProps = {
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
export const LayoutSider: FC<LayoutSiderProps> = ({
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

  const {hashId, wrapSSR} = useCssInJs({prefix: prefixCls, styleFun: genSiderStyle})
  const handleCollapse = () => {
    const changeCollapsed = !scopeCollapsed
    setScopeCollapsed(changeCollapsed)
    onCollapse?.(changeCollapsed)
  }

  useEffect(() => {
    setScopeCollapsed(collapsed)
  }, [collapsed])

  const displayWidth = scopeCollapsed ? collapsedWidth : width
  return wrapSSR(<LayoutItem className={classNames(prefixCls, className, hashId)} style={{
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
  </LayoutItem>)
}
