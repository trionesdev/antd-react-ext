import React, {FC} from "react"
import {genItemStyle} from "./styles";
import classNames from "classnames";
import {useCssInJs} from "../hooks";

export type LayoutItemProps = {
  children?: React.ReactNode
  className?: string | undefined,
  style?: React.CSSProperties;
  auto?: boolean
}
export const LayoutItem: FC<LayoutItemProps> = ({children, className, style, auto}) => {
  const prefixCls = 'ms-ant-layout-item';
  const {hashId, wrapSSR} = useCssInJs({prefix: prefixCls, styleFun: genItemStyle})
  return wrapSSR(
    <div className={classNames(prefixCls, {[`${prefixCls}-auto`]: auto}, className, hashId)}
         style={style}>{children}</div>
  )
}
