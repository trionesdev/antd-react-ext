import {GlobalToken} from 'antd';
import {CSSInterpolation} from '@ant-design/cssinjs';

export const genSearchToolbarStyle = (
    prefixCls: string,
    token: GlobalToken
): CSSInterpolation => {
    return {
        [`.${prefixCls}`]: {
            paddingTop: 16,
            paddingLeft: 16,
            paddingRight: 16,
            boxSizing: 'border-box',
            [`.ant-form-item`]:{
                marginBottom:16
            },
            [`&-col-hidden`]: {
                display: 'none',
            },
        },
    };
};
