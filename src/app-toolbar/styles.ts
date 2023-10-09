import {GlobalToken} from "antd";
import {CSSInterpolation} from "@ant-design/cssinjs";

export const genAppToolbarStyle = (
  prefixCls: string,
  token: GlobalToken,
): CSSInterpolation => {
  return {
    [`.${prefixCls}`]: {
      height: '60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottom: `1px solid ${token.colorBorder}`,
      padding: '0px 8px',
      boxSizing: 'border-box',
      [`&-heading`]: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        gap: '8px',

        [`&-left`]: {
          [`&-title`]: {
            color: '#000000d9',
            fontWeight: 600,
            fontSize: '20px',
            lineHeight: '32px',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis'
          },
        },
        [`&-right`]: {},
        [`.ant-menu-horizontal`]: {
          flex: '1 auto',
          height: '60px',
          backgroundColor: 'inherit',
          li: {
            display: 'flex',
            alignItems: 'center',
          },
        },
      },
    },
  };
};
