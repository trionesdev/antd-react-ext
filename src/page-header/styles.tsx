import { CSSInterpolation } from '@ant-design/cssinjs';
import { GlobalToken } from 'antd';

export const genPageHeaderStyle = (
  prefixCls: string,
  token: GlobalToken,
): CSSInterpolation => {
  return {
    [`.${prefixCls}`]: {
      backgroundColor: token.colorBgContainer,
      padding: token.padding,
      display: 'flex',
      flexDirection: 'column',
      gap: token.paddingXS,
      [`&-breadcrumb`]: {},
      [`&-heading`]: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        [`&-title`]: {
          color: token.colorTextHeading,
          fontWeight: token.fontWeightStrong,
          fontSize: token.fontSizeHeading4,
          lineHeight: token.lineHeightHeading4,
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
        },
        [`&-sub-title`]: {
          color: token.colorTextDescription,
          fontSize: token.fontSize,
          lineHeight: token.lineHeight,
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
        },
      },
      [`&-small`]: {
        padding: token.paddingSM,
        gap: token.paddingXXS,
        [`.${prefixCls}-heading-title`]: {
          fontSize: token.fontSizeLG,
          lineHeight: token.lineHeightLG,
        },
        [`.${prefixCls}-heading-sub-title`]: {
          fontSize: token.fontSize,
          lineHeight: token.lineHeight,
        },
      },
      [`&-no-padding`]: {
        padding: 0,
      },
    },
  };
};
