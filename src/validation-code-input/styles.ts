import { CSSInterpolation } from '@ant-design/cssinjs';
import { GlobalToken } from 'antd';

export const genValidationCodeInputStyle = (
  prefixCls: string,
  token: GlobalToken,
): CSSInterpolation => {
  return {
    [`.${prefixCls}`]: {
      [`&-send`]: {
        cursor: 'pointer',
        '&:hover': {
          color: token.colorPrimary,
        },
      },
      [`&-counting`]: {
        cursor: 'not-allowed',
        color: token.colorTextDisabled,
      },
    },
  };
};
