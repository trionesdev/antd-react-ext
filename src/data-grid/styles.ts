import { CSSInterpolation } from '@ant-design/cssinjs';
import { GlobalToken } from 'antd';

export const genDataGridStyle = (
  prefixCls: string,
  token: GlobalToken,
): CSSInterpolation => {
  const Scrollbar: any = {
    '&::-webkit-scrollbar-track': {
      backgroundColor: 'transparent',
    },
    '&::-webkit-scrollbar': {
      right: 0,
      width: 12,
      height: 12,
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#999',
      borderRadius: 8,
      width: 12,
      height: 12,
    },
  };

  return {
    [`.${prefixCls}`]: {
      display: 'table',
      // width: '100%',
      borderSpacing: 0,
      borderCollapse: 'separate',
      position: 'relative',
      width: 'fit-content',
      [`&-wrapper`]: {},
      [`&-container`]: {
        width: '100%',
        maxWidth: '100%',
        overflow: 'auto',
        position: 'relative',
        // ...Scrollbar,
      },
      [`&-head`]: {
        display: 'table-header-group',
        opacity: 0.97,
        position: 'sticky',
        zIndex: 2,
      },
      [`&-row`]: {
        // display: 'flex',
        width: 'fit-content',
      },
      [`&-row-head`]: {
        color: 'inherit',
        display: 'table-row',
        verticalAlign: 'middle',
        outline: 0,
        backgroundColor: '#fafafa',
        boxShadow: 'rgba(0, 0, 0, 0.1) 4px 0px 8px',
        position: 'sticky',
        top: 0,
      },
      [`&-cell`]: {
        borderBottom: '1px solid #f0f0f0',
        backgroundColor: '#fff',
      },
      [`&-cell-head`]: {
        '.resizer': {
          position: 'absolute',
          top: 0,
          height: '100%',
          width: 2,
          background: 'rgba(0, 0, 0, 0.5)',
          cursor: 'col-resize',
          userSelect: 'none',
          touchAction: 'none',
          '&.rtl': {
            left: 0,
          },
          '&.ltr': {
            right: 0,
          },

        },
      },

      [`&-cell-sticky-header`]: {
        display: 'table-cell',
      },
      [`&-cell-body`]: {
        padding: '16px',
      },
      [`&-cell-wrapper`]: {
        padding: '16px',
        position: 'relative',
      },
      [`&-body`]: {
        display: 'table-row-group',
        position: 'relative',
      },
    },
  };
};
