import { GlobalToken } from 'antd';

export const genGridTableStyle = (
  prefixCls: string,
  token: GlobalToken,
): any => {
  const Scrollbar: any = {
    '&::-webkit-scrollbar': {
      width: 8,
      height: 8,
    },
    '&::-webkit-scrollbar-track': {
      background: '#f0f0f0',
      borderRadius: 10,
    },
    '&::-webkit-scrollbar-thumb ': {
      background: '#b4b4b4',
      borderRadius: 10,
    },
    '&::-webkit-scrollbar-thumb:hover': {
      background: '#b4b4b4',
      borderRadius: 10,
    },
    '&::-webkit-scrollbar-thumb:active': {
      background: '#b4b4b4',
      borderRadius: 10,
    },
  };
  const InvisibleScrollbar: any = {
    '&::-webkit-scrollbar': {
      width: 8,
      height: 8,
    },
    '&::-webkit-scrollbar-track': {
      background: 'transparent',
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'transparent',
    },
  };
  return {
    [`.${prefixCls}`]: {
      width: '100%',
      display: `flex`,
      flexDirection: 'column',
      boxSizing: 'border-box',
      '&.ant-table-fill': {
        height: '100%',
        '.ant-table-wrapper': {
          flex: '1 1 0',
          overflow: 'hidden',
          minHeight: 0,
          '.ant-spin-nested-loading': {
            height: '100%',
            '.ant-spin-container': {
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
            },
          },
          '.ant-table': {
            flex: '1 1 0',
            minHeight: 0,
            overflow: 'hidden',
            scrollbarColor: 'inherit !important',
            '.ant-table-container': {
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              minHeight: 0,
              '.ant-table-header': {
                flexShrink: 0,
                overflowY: 'scroll !important',
                ...InvisibleScrollbar,
              },
              '.ant-table-summary': {
                flexShrink: 0,
              },
              '& > .ant-table-content': {
                flex: '1 1 0',
                minHeight: 0,
                overflow: 'auto',
                backgroundColor: token.colorBgContainer,
                ...Scrollbar,
              },
              '.ant-table-thead': {
                '.react-resizable-handle': {
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  bottom: 0,
                  width: 4,
                  cursor: 'col-resize',
                },
              },
              '& > .ant-table-body': {
                flex: '1 1 0',
                minHeight: 0,
                maxHeight: 'none !important',
                overflowY: 'scroll !important',
                ...Scrollbar,
              },
            },
          },
        },
      },
      '.ant-table-wrapper': {
        '.ant-table': {
          overflow: 'hidden',
          scrollbarColor: 'inherit !important',
          '.ant-table-container': {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            '.ant-table-header': {
              overflowY: 'scroll !important',
              ...InvisibleScrollbar,
            },
            '& > .ant-table-content': {
              backgroundColor: token.colorBgContainer,
              ...Scrollbar,
            },
            '.ant-table-thead': {
              '.react-resizable-handle': {
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                width: 4,
                cursor: 'col-resize',
              },
            },
            '& > .ant-table-body': {
              overflowY: 'scroll !important',
              ...Scrollbar,
            },
          },
        },
      },
    },
  };
};
