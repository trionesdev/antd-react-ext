import { Input } from 'antd';
import React, { FC } from 'react';
import { PasswordProps } from 'antd/es/input/Password';
import ExtFormField from '../ext-form-field';

export type ExtInputPasswordProps = PasswordProps & {
  readOnly?: boolean;
  valueRender?: ((value?: any) => React.ReactNode) | React.ReactNode;
};
export const ExtInputPassword: FC<ExtInputPasswordProps> = ({readOnly, valueRender, ...rest}) => {
  return (
    <ExtFormField
      value={rest.value}
      defaultValue={rest.defaultValue}
      readOnly={readOnly}
      valueRender={valueRender}
    >
      <Input.Password {...rest} />
    </ExtFormField>
  );
}
