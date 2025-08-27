import { GlobalToken } from 'antd';

export const genFieldsetStyle = (
  prefixCls: string,
  token: GlobalToken,
): any => {
  return {
    [`.${prefixCls}`]: {
      [`&-title`]: {
        color: token.colorTextBase,
        fontSize: token.fontSizeHeading5,
        fontWeight: token.fontWeightStrong,
        borderBottom: `1px solid ${token.colorBorder}`,
        marginBottom: '16px',
        paddingBottom: '8px',
        paddingTop: '16px',
      },
    },
  };
};
