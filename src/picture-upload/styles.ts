import { GlobalToken } from 'antd';

export const genPictureUploadStyle = (
  prefixCls: string,
  token: GlobalToken,
): any => {
  return {
    [`.${prefixCls}`]: {
      [`&-image`]: {
        position: 'relative',
        objectFit: 'cover',
        borderRadius: token.borderRadiusLG,
        '&:hover': {
          [`.${prefixCls}-image-tooltip`]: {
            visibility: 'visible',
          },
        },
        '.ant-image': {
          borderRadius: 4,
          overflow: 'hidden',
        },
        [`&-tooltip`]: {
          position: 'absolute',
          left: '50%',
          bottom: 8,
          transform: 'translateX(-50%)',
          background: 'rgba(18, 18, 18, 0.75) none repeat scroll 0% 0%',
          borderRadius: 4,
          visibility: 'hidden',
          button: {
            color: 'white',
            '&:hover': {
              color: 'white!important',
            },
          },
          '.ant-divider': {
            borderInlineStart: '1px solid white',
          },
        },
      },
      '.ant-upload-wrapper': {
        width: '100%',
        height: '100%',
        display: 'flex',
        '.ant-upload': {
          width: '100%!important',
          height: '100%!important',
        },
      },
    },
  };
};
