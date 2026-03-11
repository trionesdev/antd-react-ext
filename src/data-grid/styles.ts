import { CSSInterpolation } from '@ant-design/cssinjs';
import { GlobalToken } from 'antd';

export const genDataGridStyle = (
  prefixCls: string,
  token: GlobalToken,
): CSSInterpolation => {
  const scrollbar: any = {
    '&::-webkit-scrollbar-track': {
      backgroundColor: 'transparent',
    },
    '&::-webkit-scrollbar': {
      right: 0,
      width: 10,
      height: 10,
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,0.25)',
      borderRadius: 10,
      width: 10,
      height: 10,
    },
  };

  return {
    [`.${prefixCls}`]: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      boxSizing: 'border-box',
      background: token.colorBgContainer,
      border: `1px solid ${token.colorBorderSecondary}`,
      borderRadius: token.borderRadiusLG,
      overflow: 'hidden',
      [`&-has-height`]: {
        height: '100%',
      },
      [`&-container`]: {
        width: '100%',
        flex: '1 auto',
        minHeight: 0,
        overflow: 'auto',
        position: 'relative',
        ...scrollbar,
      },
      [`&-table`]: {
        borderSpacing: 0,
        borderCollapse: 'separate',
        tableLayout: 'fixed',
      },
      [`&-head`]: {
        position: 'sticky',
        top: 0,
        zIndex: 5,
      },
      [`&-row`]: {
      },
      [`&-row-head`]: {
        backgroundColor: token.colorFillAlter,
      },
      [`&-cell`]: {
        boxSizing: 'border-box',
        borderBottom: `1px solid ${token.colorBorderSecondary}`,
        borderRight: `1px solid ${token.colorBorderSecondary}`,
        backgroundColor: token.colorBgContainer,
        '&:last-child': {
          borderRight: 'none',
        },
      },
      [`&-cell-head`]: {
        position: 'relative',
        padding: 0,
        backgroundColor: token.colorFillAlter,
        fontWeight: token.fontWeightStrong,
      },
      [`&-cell-body`]: {
        padding: '12px 16px',
      },
      [`&-cell-content`]: {
        overflow: 'hidden',
      },
      [`&-cell-empty`]: {
        textAlign: 'center',
        padding: '24px 16px',
      },
      [`&-cell-ellipsis`]: {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
      },
      [`&-cell-align-left`]: {
        textAlign: 'left',
      },
      [`&-cell-align-center`]: {
        textAlign: 'center',
      },
      [`&-cell-align-right`]: {
        textAlign: 'right',
      },
      [`&-cell-sticky-header`]: {
        zIndex: 6,
      },
      [`&-cell-wrapper`]: {
        padding: '12px 16px',
        position: 'relative',
        minHeight: 22,
        display: 'flex',
        alignItems: 'center',
      },
      [`&-cell-title`]: {
        display: 'inline-flex',
        alignItems: 'center',
      },
      [`&-resizer`]: {
        position: 'absolute',
        top: 0,
        height: '100%',
        width: 8,
        cursor: 'col-resize',
        userSelect: 'none',
        touchAction: 'none',
        '&:before': {
          content: '""',
          position: 'absolute',
          left: 3,
          top: 0,
          height: '100%',
          width: 2,
          background: token.colorPrimaryBorder,
          opacity: 0.2,
          transition: 'opacity .2s',
        },
      },
      [`&-resizer:hover:before`]: {
        opacity: 0.75,
      },
      [`&-resizer-active:before`]: {
        opacity: 1,
      },
      [`&-resizer-ltr`]: {
        right: -4,
      },
      [`&-resizer-rtl`]: {
        left: -4,
      },
      [`&-pagination`]: {
        borderTop: `1px solid ${token.colorBorderSecondary}`,
        padding: '12px 16px',
        display: 'flex',
        justifyContent: 'flex-end',
      },
    },
  };
};
