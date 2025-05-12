import { GlobalToken } from 'antd';

export const genFieldsetStyle = (
  prefixCls: string,
  token: GlobalToken,
): any => {
  return {
    [`.${prefixCls}`]: {
      [`&-title`]: {
        color: 'rgba(0,0,0,0.45)',
        fontSize: token.fontSize,
        borderBottom: `1px solid ${token.colorBorder}`,
        marginBottom: '16px',
        paddingBottom: '8px',
        paddingTop: '8px',
      },
    },
  };
};
