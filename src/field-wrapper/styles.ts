import { CSSInterpolation } from '@ant-design/cssinjs';
import { GlobalToken } from 'antd';

export const genFieldWrapperStyle = (
  prefixCls: string,
  token: GlobalToken,
): CSSInterpolation => {
  return {
    [`.${prefixCls}`]: {
      boxSizing: 'border-box',
      border: `1px solid ${token.colorBorder}`,
      borderRadius: token.borderRadius,
      paddingBlock: 4,
      paddingInline: 11,
      '&:hover': {
        border: `1px solid ${token.colorPrimaryBorderHover}`,
      },
      [`&-sm`]: {
        paddingBlock: 0,
        paddingInline: 11,
      },
      [`&-lg`]: {
        paddingBlock: 7,
        paddingInline: 11,
      },
    },
  };
};
