import {GlobalToken} from "antd";
import {CSSInterpolation} from "@ant-design/cssinjs";

export const genEditableDescStyle = (
  prefixCls: string,
  token: GlobalToken
): CSSInterpolation => {
  return {
    [`.${prefixCls}`]: {
      alignItems: 'center',
      [`&-render`]: {
        [`&.editable`]: {
          cursor: 'pointer'
        }
      }
    }
  }
}
