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
      minWidth: 0,
      [`.ant-form-item`]: {
        marginBottom: 0,
      },
      [`.ant-form-inline .ant-form-item`]: {
        marginInlineEnd: 0,
      },
      [`&-col-hidden`]: {
        display: 'none',
      },
      [`&-small`]: {
        padding: token.paddingSM,
      },
      [`&-mini`]: {
        padding: 0,
      },
    },
  };
};
