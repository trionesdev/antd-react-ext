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
      '&.ant-table-fill': {
        height: '100%',
        '.ant-table-wrapper': {
          flex: '1 auto',
          overflow: 'hidden',
          '.ant-spin-nested-loading': {
            height: '100%',
            '.ant-spin-container': {
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              flex: '1 auto',
              '.ant-table-header': {
                flexShrink: 0,
              },
            },
          },
          '.ant-table': {
            overflow: 'hidden',
            scrollbarColor: 'inherit !important',
            '.ant-table-container': {
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              '& > .ant-table-content': {
                backgroundColor: token.colorBgContainer,
                ...Scrollbar,
              },
              '& > .ant-table-body': {
                overflowY: 'auto !important',
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
            '& > .ant-table-content': {
              backgroundColor: token.colorBgContainer,
              ...Scrollbar,
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
