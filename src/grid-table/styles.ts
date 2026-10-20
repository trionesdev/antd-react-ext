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
      boxSizing: 'border-box',
      minWidth: 0,
      maxWidth: '100%',
      [`&-fit`]: {
        position: 'relative',
        width: '100%',
        height: '100%',
        minWidth: 0,
        minHeight: 0,
        overflow: 'hidden',
        // 内容未撑满时不强制显示纵向滚动条
        ['.ant-table-body, .measure-body']: {
          overflowY: 'auto',
        },
        // fit 模式下分页与表格主体用分割线隔开
        ['.measure-pagination']: {
          margin: '0!important',
          paddingBlock: `var(--ant-margin)`,
          borderTop: `${token.lineWidth}px ${token.lineType} ${token.colorSplit}`,
        },
      },
      '.ant-table-wrapper, .ant-table, .ant-table-container': {
        minWidth: 0,
        maxWidth: '100%',
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
    },
  };
};
