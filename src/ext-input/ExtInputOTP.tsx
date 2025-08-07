import { Input } from 'antd';
import { OTPProps } from 'antd/es/input/OTP';
import React, { FC } from 'react';
import ExtFormField from '../ext-form-field';

export type ExtInputOPTProps = OTPProps & {
  readOnly?: boolean;
  valueRender?: ((value?: any) => React.ReactNode) | React.ReactNode;
};
export const ExtInputOTP: FC<ExtInputOPTProps> = ({
  readOnly,
  valueRender,
  ...rest
}) => {
  return (
    <ExtFormField
      readOnly={readOnly}
      value={rest.value}
      defaultValue={rest.defaultValue}
      valueRender={valueRender}
    >
      <Input.OTP {...rest} />
    </ExtFormField>
  );
};
