import { CSSInterpolation } from '@ant-design/cssinjs';
import { GlobalToken } from 'antd';

export const genEditableDescStyle = (
  prefixCls: string,
  token: GlobalToken,
): CSSInterpolation => {
  return {
    [`.${prefixCls}`]: {
      display: 'inline-flex',
      gap: 4,
      alignItems: 'center',
      lineHeight: '31px',
      [`&-col-auto`]: {
        flex: '1 auto',
      },
      [`&-render`]: {
        minWidth: 24,
        minHeight: 31,
        [`&.editable`]: {
          cursor: 'pointer',
        },
      },
    },
  };
};
