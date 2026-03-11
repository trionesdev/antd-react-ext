import { Radio, RadioGroupProps } from 'antd';
import React, { FC } from 'react';
import ExtFormField from '../ext-form-field';

export type ExtRadioGroupProps = Omit<RadioGroupProps, 'children'> & {
  readOnly?: boolean;
  valueRender?:
    | ((value?: any, option?: any) => React.ReactNode)
    | React.ReactNode;
  defaultRender?: React.ReactNode;
  emptyPlaceholder?: React.ReactNode;
};

export const ExtRadioGroup: FC<ExtRadioGroupProps> = ({
  readOnly = false,
  valueRender,
  defaultRender,
  emptyPlaceholder,
  ...rest
}) => {
  const handleRender = (value: any, options: any) => {
    return options?.find((item: any) => item.value === value)?.label || value;
  };

  return (
    <ExtFormField
      value={rest.value}
      defaultValue={rest.defaultValue}
      options={rest.options}
      readOnly={readOnly}
      valueRender={valueRender}
      defaultRender={defaultRender}
      fieldRender={handleRender}
      emptyPlaceholder={emptyPlaceholder}
    >
      <Radio.Group {...rest} />
    </ExtFormField>
  );
};
