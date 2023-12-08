import React, {FC} from "react"
import {genLayoutStyle} from "./styles";
import classNames from "classnames";
import {LayoutItem} from "./item";
import {useCssInJs} from "../hooks";
import {LayoutSider} from "./sider";


export type LayoutProps = {
  children?: React.ReactNode
  className?: string | undefined
  style?: React.CSSProperties
  direction?: 'vertical' | 'horizontal'
}

const Layout: FC<LayoutProps> = ({
                                   children,
                                   className,
                                   style,
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
  Item: LayoutItem,
  Sider: LayoutSider
})
