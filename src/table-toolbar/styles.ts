import {GlobalToken} from "antd";
import {CSSInterpolation} from "@ant-design/cssinjs";

export const genTableToolbarStyle = (
  prefixCls: string,
  token: GlobalToken,
): CSSInterpolation => {
  return {
    [`.${prefixCls}`]: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '8px',
      boxSizing: 'border-box',
      [`&-title`]: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
      },
      [`&-extra`]: {
        display: 'flex',
        justifyContent: 'flex-end',
      },
    },
  };
};
