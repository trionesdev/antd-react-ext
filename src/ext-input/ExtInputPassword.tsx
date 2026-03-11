import { Input } from 'antd';
import { PasswordProps } from 'antd/es/input/Password';
import React, { FC } from 'react';
import ExtFormField from '../ext-form-field';

export type ExtInputPasswordProps = PasswordProps & {
  readOnly?: boolean;
  valueRender?: ((value?: any) => React.ReactNode) | React.ReactNode;
  defaultRender?: React.ReactNode;
  emptyPlaceholder?: React.ReactNode;
};
export const ExtInputPassword: FC<ExtInputPasswordProps> = ({
  readOnly,
  valueRender,
  defaultRender,
  emptyPlaceholder,
  ...rest
}) => {
  return (
    <ExtFormField
      value={rest.value}
      defaultValue={rest.defaultValue}
      readOnly={readOnly}
      valueRender={valueRender}
      defaultRender={defaultRender}
      emptyPlaceholder={emptyPlaceholder}
    >
      <Input.Password {...rest} />
    </ExtFormField>
  );
};
