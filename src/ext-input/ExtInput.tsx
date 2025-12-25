import { Input, InputProps } from 'antd';
import React, { FC } from 'react';
import ExtFormField, { CommonExtFormFieldProps } from '../ext-form-field';

export type ExtInputProps = InputProps & CommonExtFormFieldProps;

export const ExtInput: FC<ExtInputProps> = ({
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
      <Input {...rest} />
    </ExtFormField>
  );
};
