import React, {FC} from "react"
import {theme} from "antd";
import {useStyleRegister} from "@ant-design/cssinjs";
import {genLayoutStyle} from "./styles";
import classNames from "classnames";
import Item from "./item";
import Sider from "./sider";

const {useToken} = theme;

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
  const {theme, token, hashId} = useToken();
  const wrapSSR = useStyleRegister(
    {theme, token, hashId, path: [prefixCls]},
    () => [genLayoutStyle(prefixCls, token)],
  );
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
