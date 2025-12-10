import {CSSInterpolation} from '@ant-design/cssinjs';
import {GlobalToken} from 'antd';

export const genLayoutStyle = (
  prefixCls: string,
  token: GlobalToken,
): CSSInterpolation => {
  return {
    [`.${prefixCls}`]: {
      minWidth: 0,
      minHeight: 0,
      height: '100%',
      width: '100%',
      display: 'flex',
      boxSizing: 'border-box',
      [`&-vertical`]: {
        flexDirection: 'column',
        // width:0,
        // flex:'1 1 auto'
        [`>.${prefixCls}-item-auto`]: {
          minWidth: 0,
          minHeight: 0,
        },
      },
      [`&-horizontal`]: {
        flexDirection: 'row',
        // height:0,
        // flex:'1 1 auto'
        [`>.${prefixCls}-item-auto`]: {
          minWidth: 0,
          minHeight: 0,
        },
      },
    },
  };
};

export const genItemStyle = (
  prefixCls: string,
  token: GlobalToken,
): CSSInterpolation => {
  return {
    [`.${prefixCls}`]: {
      flexShrink: 0,
      backgroundColor: token.colorBgBase,
      [`&-auto`]: {
        boxSizing: 'border-box',
        flex: '1 auto',
        minWidth: 0,
        minHeight: 0,
      },
    },
  };
};

export const genSiderStyle = (
  prefixCls: string,
  token: GlobalToken,
  collapsedWidth: number,
): CSSInterpolation => {
  return {
    [`.${prefixCls}`]: {
      boxSizing: 'border-box',
      height: '100%',
      display: 'flex',
      minWidth: 0,
      minHeight: 0,
      flexShrink: 0,
      flexDirection: 'column',
      transition: 'all 0.2s,background 0s',
      borderRight: `1px solid ${token.colorBorder}`,
      [`&-children`]: {
        flex: '1 auto',
        overflowY: 'auto',
        overflowX: 'hidden',
        [`.ant-menu`]: {
          borderInlineEnd: '0px !important',
          [`& > .ant-menu-inline-collapsed`]: {
            width: collapsedWidth
          }
        },
      },
      [`&-trigger`]: {
        textAlign: 'center',
        lineHeight: '48px',
        cursor: 'pointer',
      },
    },
  };
};
