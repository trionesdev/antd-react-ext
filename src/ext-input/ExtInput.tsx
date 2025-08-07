import { Input, InputProps } from 'antd';
import React, { FC } from 'react';
import ExtFormField from '../ext-form-field';

export type ExtInputProps = InputProps & {
  readOnly?: boolean;
  valueRender?: ((value?: any) => React.ReactNode) | React.ReactNode;
};
export const ExtInput: FC<ExtInputProps> = ({
  readOnly,
  valueRender,
  ...rest
}) => {
  return (
    <ExtFormField
      value={rest.value}
      defaultValue={rest.defaultValue}
      readOnly={readOnly}
      valueRender={valueRender}
    >
      <Input {...rest} />
    </ExtFormField>
  );
};
