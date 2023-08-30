import {GlobalToken} from "antd";
import {CSSInterpolation} from "@ant-design/cssinjs";

export const genFieldsMappingStyle = (
  prefixCls: string,
  token: GlobalToken,
): CSSInterpolation => {
  return {
    [`.${prefixCls}`]: {
      position: 'relative',
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      boxSizing: 'border-box',
      [`&.drawing`]:{
        userSelect:'none'
      },
      [`&-table`]: {
        color: '#666',
        fontSize: '12px',
        zIndex: 3,
        [`&-head`]: {
          backgroundColor: '#f0f0f0',
        },
        [`&-row`]: {
          display: 'flex',
          gap: '8px',
          height: 36,
          position: 'relative',
          [`&-port`]: {
            [`&::before`]: {
              content: '\' \'',
              display: 'inline-block',
              position: 'absolute',
              backgroundColor: token.colorPrimary,
              width: 6,
              height: 6,
              borderRadius: 6,
              boxShadow: '0px 0.5px 1.5px rgba(0, 0, 0, 0.22) inset'
            },
            position: 'absolute',
            top: 'calc(50% - 7px)',
            width: 14,
            height: 14,
            borderRadius: 14,
            backgroundColor: '#FFF',
            padding: 4,
            boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.2)',
            cursor: 'crosshair',
            boxSizing: 'border-box'
          }
        },
        [`&-body`]: {
          backgroundColor: '#fcfcfc',
          [`.${prefixCls}`]: {
            [`&-table`]: {
              [`&-row`]: {
                borderBottom: '1px dashed #dddddd'
              }
            }
          }
        },
        [`&-cell`]: {
          height: '100%',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          boxSizing: 'border-box',
          display: 'flex',
          alignItems: 'center',
          padding: '8px 16px'
        },

      },
      [`&-source`]: {
        [`.${prefixCls}`]: {
          [`&-table`]: {
            [`&-row`]: {
              [`&-port`]: {
                right: '-7px'
              }
            }
          }
        }
      },
      [`&-target`]: {
        [`.${prefixCls}`]: {
          [`&-table`]: {
            [`&-row`]: {
              [`&-port`]: {
                left: '-7px'
              }
            }
          }
        }
      },
      [`&-lines`]: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        boxSizing: 'border-box',
        [`svg`]: {
          [`.${prefixCls}-line`]: {
            stroke: token.colorPrimary,
            fill: 'none'
          }
        }
      }
    }
  }
}
