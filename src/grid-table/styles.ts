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
    },
  };
};
