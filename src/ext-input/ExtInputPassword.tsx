import {Input} from 'antd';
import React, {FC} from 'react';
import {PasswordProps} from 'antd/es/input/Password';
import ExtFormField from '../ext-form-field';

export type ExtInputPasswordProps = PasswordProps & {
    readonly?: boolean;
    valueRender?: ((value?: any) => React.ReactNode) | React.ReactNode;
    defaultRender?: React.ReactNode;
};
export const ExtInputPassword: FC<ExtInputPasswordProps> = ({readonly, valueRender, defaultRender, ...rest}) => {
    return (
        <ExtFormField
            value={rest.value}
            defaultValue={rest.defaultValue}
            readonly={readonly}
            valueRender={valueRender}
            defaultRender={defaultRender}
        >
            <Input.Password {...rest} />
        </ExtFormField>
    );
}
