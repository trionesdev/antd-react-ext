import React, {FC} from "react"
import {genLayoutStyle} from "./styles";
import classNames from "classnames";
import Item from "./item";
import Sider from "./sider";
import {useCssInJs} from "../hooks";


type LayoutProps = {
  children?: React.ReactNode
  className?: string | undefined
  style?: React.CSSProperties
  direction?: 'vertical' | 'horizontal'
}

const Layout: FC<LayoutProps> = ({
                                   children,
                                   className, style,
                                   direction = "horizontal"
                                 }) => {
  const prefixCls = 'ms-ant-layout';

  const {hashId, wrapSSR} = useCssInJs({prefix: prefixCls, styleFun: genLayoutStyle})

  return wrapSSR(
    <div className={classNames(prefixCls, `${prefixCls}-${direction}`, className, hashId)} style={style}>
      {children}
    </div>
  )
}
export default Object.assign(Layout, {
  Item,
  Sider
})
