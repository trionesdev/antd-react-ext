import { CSSInterpolation } from '@ant-design/cssinjs';
import { GlobalToken } from 'antd';

export const genFormCellStyle = (
  prefixCls: string,
  token: GlobalToken,
): CSSInterpolation => {
  const paddingInline = 11;
  const paddingInlineSM = 7;

  return {
    [`.${prefixCls}`]: {
      boxSizing: 'border-box',
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      width: '100%',
      minWidth: 0,
      height: token.controlHeight,
      paddingInline,
      fontSize: token.fontSize,
      lineHeight: token.lineHeight,
      color: token.colorText,
      backgroundColor: token.colorBgContainer,
      borderWidth: token.lineWidth,
      borderStyle: token.lineType,
      borderColor: 'transparent',
      borderRadius: token.borderRadius,
      transition: `all ${token.motionDurationMid}`,
      cursor: 'text',
      [`&-clickable`]: {
        cursor: 'pointer',
      },

      [`&-sm`]: {
        height: token.controlHeightSM,
        paddingInline: paddingInlineSM,
        borderRadius: token.borderRadiusSM,
        fontSize: token.fontSize,
      },
      [`&-lg`]: {
        height: token.controlHeightLG,
        paddingInline,
        borderRadius: token.borderRadiusLG,
        fontSize: token.fontSizeLG,
      },

      [`&-prefix, &-suffix`]: {
        display: 'flex',
        flex: 'none',
        alignItems: 'center',
        color: token.colorTextDescription,
        lineHeight: 0,
        '> .anticon': {
          fontSize: token.fontSize,
        },
      },
      [`&-prefix`]: {
        marginInlineEnd: token.paddingXXS,
      },
      [`&-suffix`]: {
        marginInlineStart: token.paddingXXS,
      },
      [`&-lg &-prefix > .anticon, &-lg &-suffix > .anticon`]: {
        fontSize: token.fontSizeLG,
      },

      [`&-content`]: {
        flex: 'auto',
        minWidth: 0,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
      },
      [`&-placeholder`]: {
        color: token.colorTextPlaceholder,
        userSelect: 'none',
      },

      [`&-outlined`]: {
        backgroundColor: token.colorBgContainer,
        borderColor: token.colorBorder,
        [`&:not(.${prefixCls}-disabled):hover`]: {
          borderColor: token.colorPrimaryHover,
        },
      },
      [`&-filled`]: {
        backgroundColor: token.colorFillTertiary,
        borderColor: 'transparent',
        [`&:not(.${prefixCls}-disabled):hover`]: {
          backgroundColor: token.colorFillSecondary,
        },
      },
      [`&-borderless`]: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
      },
      [`&-underlined`]: {
        backgroundColor: 'transparent',
        borderRadius: 0,
        borderWidth: 0,
        borderBottomWidth: token.lineWidth,
        borderStyle: token.lineType,
        borderColor: 'transparent',
        borderBottomColor: token.colorBorder,
        [`&:not(.${prefixCls}-disabled):hover`]: {
          borderBottomColor: token.colorPrimaryHover,
        },
      },

      [`&-disabled`]: {
        color: token.colorTextDisabled,
        backgroundColor: token.colorBgContainerDisabled,
        borderColor: token.colorBorder,
        cursor: 'not-allowed',
        [`&.${prefixCls}-filled`]: {
          backgroundColor: token.colorFillTertiary,
          borderColor: 'transparent',
        },
        [`&.${prefixCls}-borderless`]: {
          backgroundColor: 'transparent',
          borderColor: 'transparent',
        },
        [`&.${prefixCls}-underlined`]: {
          backgroundColor: 'transparent',
          borderBottomColor: token.colorBorder,
        },
        [`.${prefixCls}-prefix, .${prefixCls}-suffix, .${prefixCls}-placeholder`]:
          {
            color: token.colorTextDisabled,
          },
      },

      [`&-status-error`]: {
        [`&.${prefixCls}-outlined`]: {
          borderColor: token.colorError,
          [`&:not(.${prefixCls}-disabled):hover`]: {
            borderColor: token.colorErrorBorderHover,
          },
        },
        [`&.${prefixCls}-filled`]: {
          backgroundColor: token.colorErrorBg,
          borderColor: token.colorError,
          [`&:not(.${prefixCls}-disabled):hover`]: {
            backgroundColor: token.colorErrorBgHover,
            borderColor: token.colorErrorBorderHover,
          },
        },
        [`&.${prefixCls}-underlined`]: {
          borderBottomColor: token.colorError,
          [`&:not(.${prefixCls}-disabled):hover`]: {
            borderBottomColor: token.colorErrorBorderHover,
          },
        },
      },
      [`&-status-warning`]: {
        [`&.${prefixCls}-outlined`]: {
          borderColor: token.colorWarning,
          [`&:not(.${prefixCls}-disabled):hover`]: {
            borderColor: token.colorWarningBorderHover,
          },
        },
        [`&.${prefixCls}-filled`]: {
          backgroundColor: token.colorWarningBg,
          borderColor: token.colorWarning,
          [`&:not(.${prefixCls}-disabled):hover`]: {
            backgroundColor: token.colorWarningBgHover,
            borderColor: token.colorWarningBorderHover,
          },
        },
        [`&.${prefixCls}-underlined`]: {
          borderBottomColor: token.colorWarning,
          [`&:not(.${prefixCls}-disabled):hover`]: {
            borderBottomColor: token.colorWarningBorderHover,
          },
        },
      },

      [`&:focus-within`]: {
        outline: 'none',
      },
    },
  };
};
