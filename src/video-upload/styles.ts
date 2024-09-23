import { GlobalToken } from 'antd';

export const genVideoUploadStyle = (
  prefixCls: string,
  token: GlobalToken,
): any => {
  return {
    [`.${prefixCls}`]: {
      borderRadius: token.borderRadiusLG,
      border: `1px solid ${token.colorBorder}`,
      padding: 8,
      [`&-player`]: {
        overflow: 'hidden',
        [`&-upload-wrapper`]: {
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
      },
    },
  };
};
