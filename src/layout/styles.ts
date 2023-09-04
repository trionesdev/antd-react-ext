import {GlobalToken, theme} from "antd";
import {CSSInterpolation} from "@ant-design/cssinjs";

export const genLayoutStyle = (
  prefixCls: string,
  token: GlobalToken,
): CSSInterpolation => {
  return {
    [`.${prefixCls}`]: {
      height: '100%',
      width: '100%',
      display: 'flex',
      [`&-vertical`]: {
        flexDirection: 'column',
        // width:0,
        // flex:'1 1 auto'
        [`>.${prefixCls}-item-auto`]:{
          height:0
        }
      },
      [`&-horizontal`]: {
        flexDirection: 'row',
        // height:0,
        // flex:'1 1 auto'
        [`>.${prefixCls}-item-auto`]:{
          width:0
        }
      },
    }
  }
}

export const genItemStyle = (
  prefixCls: string,
  token: GlobalToken,
): CSSInterpolation => {
  return {
    [`.${prefixCls}`]: {
      [`&-auto`]: {
        flex: '1 auto'
      }
    }
  }
}

export const genSiderStyle = (
  prefixCls: string,
  token: GlobalToken,
): CSSInterpolation => {
  return {
    [`.${prefixCls}`]: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      transition: 'all 0.2s,background 0s',
      [`&-children`]: {
        flex: '1 auto'
      },
      [`&-trigger`]: {
        textAlign: 'center',
        lineHeight: '48px',
        cursor: 'pointer'
      }
    }
  }
}
