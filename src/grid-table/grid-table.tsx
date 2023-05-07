import { CSSInterpolation, useStyleRegister } from '@ant-design/cssinjs';
import { GlobalToken, Table, TableProps, theme } from 'antd';
import classNames from 'classnames';
import React, { FC } from 'react';

const { useToken } = theme;
const genGridTableStyle = (
  prefixCls: string,
  token: GlobalToken,
): CSSInterpolation => {
  return {
    [`.${prefixCls}`]: {
      width: '100%',
      display: `flex`,
      flexDirection: 'column',
      '& .ant-table-fill': {},
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
          },
        },
        '.ant-table': {
          overflow: 'hidden',
          '.ant-table-container': {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
          },
        },
      },
    },
  };
};

interface GridTableProps extends TableProps<any> {
  toolbar?: React.ReactNode;
}

const GridTable: FC<GridTableProps> = (
  { toolbar, style, ...props },
  context,
) => {
  const prefixCls = 'ant-grid-table';
  const { theme, token, hashId } = useToken();
  const wrapSSR = useStyleRegister(
    { theme, token, hashId, path: [prefixCls] },
    () => [genGridTableStyle(prefixCls, token)],
  );

  return wrapSSR(
    <div
      style={style}
      className={classNames(prefixCls, hashId, 'ant-table-fill')}
    >
      <>
        {toolbar}
        <Table {...props} />
      </>
    </div>,
  );
};
export default GridTable;
