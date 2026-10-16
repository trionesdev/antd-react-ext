import { CSSInterpolation } from '@ant-design/cssinjs';
import { GlobalToken } from 'antd';

export const genBoxStyle = (
  prefixCls: string,
  token: GlobalToken,
): CSSInterpolation => {
  return {
    [`.${prefixCls}`]: {
      boxSizing: 'border-box',
      borderRadius: token.borderRadius,
      backgroundColor: token.colorBgContainer,
      padding: token.padding,

      [`&-mini`]: {
        padding: 0,
      },
      [`&-small`]: {
        padding: token.paddingSM,
      },
      [`&-middle`]: {
        padding: token.padding,
      },
      [`&-large`]: {
        padding: token.paddingLG,
      },
      [`&-transparent`]: {
        backgroundColor: 'transparent',
      },
      [`&-fit`]: {
        width: '100%',
        height: '100%',
        minWidth: 0,
        minHeight: 0,
      },
    },
  };
};
