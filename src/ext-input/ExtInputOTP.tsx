import {Input} from 'antd';
import {OTPProps} from 'antd/es/input/OTP';
import React, {FC} from 'react';
import ExtFormField from '../ext-form-field';

export type ExtInputOPTProps = OTPProps & {
    readonly?: boolean;
    valueRender?: ((value?: any) => React.ReactNode) | React.ReactNode;
    defaultRender?: React.ReactNode;
};
export const ExtInputOTP: FC<ExtInputOPTProps> = ({
                                                      readonly,
                                                      valueRender,
                                                      defaultRender,
                                                      ...rest
                                                  }) => {
    return (
        <ExtFormField
            readonly={readonly}
            value={rest.value}
            defaultValue={rest.defaultValue}
            valueRender={valueRender}
            defaultRender={defaultRender}
        >
            <Input.OTP {...rest} />
        </ExtFormField>
    );
};
