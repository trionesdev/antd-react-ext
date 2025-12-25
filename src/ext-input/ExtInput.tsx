import { Input, InputProps, Space } from 'antd';
import React, { FC } from 'react';
import ExtFormField, { CommonExtFormFieldProps } from '../ext-form-field';

export type ExtInputProps = InputProps &
  CommonExtFormFieldProps & {
    addonBefore?: React.ReactNode;
    addonAfter?: React.ReactNode;
  };

export const ExtInput: FC<ExtInputProps> = ({
  readOnly,
  valueRender,
  defaultRender,
  emptyPlaceholder,
  addonAfter,
  addonBefore,
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
      <Space.Compact>
        {addonBefore && <Space.Compact>{addonBefore}</Space.Compact>}
        <Input {...rest} />
        {addonAfter && <Space.Compact>{addonAfter}</Space.Compact>}
      </Space.Compact>
    </ExtFormField>
  );
};
