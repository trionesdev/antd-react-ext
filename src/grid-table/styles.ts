import {GlobalToken} from "antd";

export const genGridTableStyle = (
  prefixCls: string,
  token: GlobalToken
): any => {
  return {
    [`.${prefixCls}`]: {
      width: '100%',
      display: `flex`,
      flexDirection: 'column',
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
                overflow: 'inherit!important',
              },
            },
          },
          '.ant-table': {
            overflow: 'hidden',
            '.ant-table-container': {
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              '& > .ant-table-body':{
                overflowY:'auto !important'
              }
            },
          },
        },
      },
    },
  };
};
