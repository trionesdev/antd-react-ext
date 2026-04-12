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
  return {
    [`.${prefixCls}`]: {
      width: '100%',
      display: `flex`,
      flexDirection: 'column',
      boxSizing: 'border-box',
      '&.has-scrollbar-y': {
        '.ant-table-thead > tr': {
          '&::after': {
            content: '""',
            display: 'table-cell',
            width: '8px',
            minWidth: '8px',
          },
        },
      },
      '&.ant-table-fill': {
        height: '100%',
        '.ant-table-wrapper': {
          flex: '1 1 auto',
          overflow: 'hidden',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          '.ant-spin-nested-loading': {
            height: '100%',
            flex: '1 1 auto',
            display: 'flex',
            flexDirection: 'column',
            '.ant-spin-container': {
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              flex: '1 1 auto',
              '.ant-table': {
                height: '100%',
                flex: '1 1 auto',
                display: 'flex',
                flexDirection: 'column',
              },
              '.ant-table-header': {
                flexShrink: 0,
              },
              '.ant-table-summary': {
                flexShrink: 0,
              },
            },
          },
          '.ant-table': {
            height: '100%',
            overflow: 'hidden',
            scrollbarColor: 'inherit !important',
            '.ant-table-container': {
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              '.ant-table-header': {
                flexShrink: 0,
                overflow: 'hidden',
              },
              '.ant-table-body': {
                flex: '1 1 auto',
                minHeight: 0,
                overflow: 'auto !important',
                ...Scrollbar,
              },
              '& > .ant-table-content': {
                flex: '1 1 auto',
                minHeight: 0,
                overflow: 'auto',
                backgroundColor: token.colorBgContainer,
                ...Scrollbar,
              },
              '.ant-table-thead': {
                '.react-resizable-handle': {
                  position: 'absolute',
                  top: 0,
                  right: '-2px',
                  bottom: 0,
                  width: '4px',
                  cursor: 'col-resize',
                  zIndex: 1,
                },
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
            '& > .ant-table-content': {
              backgroundColor: token.colorBgContainer,
              ...Scrollbar,
            },
            '.ant-table-thead': {
              position: 'relative',
              '.react-resizable-handle': {
                position: 'absolute',
                top: 0,
                right: '-2px',
                bottom: 0,
                width: '4px',
                cursor: 'col-resize',
                zIndex: 1,
              },
            },
            '& > .ant-table-body': {
              overflowY: 'auto !important',
              ...Scrollbar,
            },
          },
        },
      },
    },
  };
};
