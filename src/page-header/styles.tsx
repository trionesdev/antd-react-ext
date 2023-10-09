import {GlobalToken} from "antd";
import {CSSInterpolation} from "@ant-design/cssinjs";

export const genPageHeaderStyle = (
  prefixCls: string,
  token: GlobalToken,
): CSSInterpolation => {
  return {
    [`.${prefixCls}`]: {
      backgroundColor: 'white',
      padding: '8px',
      [`&-breadcrumb`]: {},
      [`&-heading`]: {
        display: 'flex',
        justifyContent: 'space-between',
        [`&-title`]: {
          color: '#000000d9',
          fontWeight: 600,
          fontSize: '20px',
          lineHeight: '32px',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
        },
        [`&-sub-title`]: {
          color: '#00000073',
          fontSize: '14px',
          lineHeight: 1.5715,
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
        },
      },
    },
  };
};
