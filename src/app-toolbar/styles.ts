import { CSSInterpolation } from '@ant-design/cssinjs';
import { GlobalToken } from 'antd';

export const genAppToolbarStyle = (
  prefixCls: string,
  token: GlobalToken,
): CSSInterpolation => {
  return {
    [`.${prefixCls}`]: {
      height: 'var(--triones-app-toolbar-height, 60px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottom: `1px solid ${token.colorBorder}`,
      padding: `0px ${token.padding}px`,
      boxSizing: 'border-box',
      [`&-heading`]: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        minWidth: 0,
        height: '100%',
        gap: '8px',

        [`&-left`]: {
          display: 'flex',
          alignItems: 'center',
          gap: token.marginXS,
          minWidth: 0,
          flex: '0 1 auto',
          ['.ant-avatar']: {
            display: 'flex',
            flexShrink: 0,
          },
          [`&-title`]: {
            minWidth: 0,
            color: token.colorText,
            fontWeight: 600,
            fontSize: '20px',
            lineHeight: '32px',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
          },
        },
        [`&-right`]: {
          flexShrink: 0,
          marginInlineStart: 'auto',
        },
        [`.ant-menu-horizontal`]: {
          flex: '1 1 0%',
          minWidth: 0,
          height: '100%',
          lineHeight: 'var(--triones-app-toolbar-height, 60px)',
          borderBottom: 'none',
          backgroundColor: 'inherit',
        },
      },
    },
  };
};
