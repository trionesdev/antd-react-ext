import { CSSInterpolation } from '@ant-design/cssinjs';
import { GlobalToken } from 'antd';

export const genSearchToolbarStyle = (
  prefixCls: string,
  token: GlobalToken,
): CSSInterpolation => {
  return {
    [`.${prefixCls}`]: {
      padding: token.padding,
      boxSizing: 'border-box',
      [`.ant-form-item`]: {
        marginBottom: token.margin,
      },
      [`&-col-hidden`]: {
        display: 'none',
      },
      [`&-small`]: {
        padding: token.paddingSM,
        [`.ant-form-item`]: {
          marginBottom: token.marginSM,
        },
      },
      [`&-mini`]: {
        padding: 0,
      },
    },
  };
};
