import React, {FC} from "react"
import {useStyleRegister} from "@ant-design/cssinjs";
import {genItemStyle} from "./styles";
import {theme} from "antd";
import classNames from "classnames";

const {useToken} = theme;
type ItemProps = {
  children?: React.ReactNode
  className?: string | undefined,
  style?: React.CSSProperties;
  auto?: boolean
}
const Item: FC<ItemProps> = ({children, className, style, auto}) => {
  const prefixCls = 'ms-ant-layout-item';
  const {theme, token, hashId} = useToken();
  const wrapSSR = useStyleRegister(
    {theme, token, hashId, path: [prefixCls]},
    () => [genItemStyle(prefixCls, token)],
  );
  return wrapSSR(
    <div className={classNames(prefixCls, {[`${prefixCls}-auto`]: auto}, className, hashId)}
         style={style}>{children}</div>
  )
}
export default Item
