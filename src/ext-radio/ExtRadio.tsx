import { Radio, RadioProps } from 'antd';
import React, { FC } from 'react';
import ExtFormField from '../ext-form-field';

export type ExtRadioProps = RadioProps & {
  readonly?: boolean;
  valueRender?:
    | ((value?: any, options?: any) => React.ReactNode)
    | React.ReactNode;
  defaultRender?: React.ReactNode;
  emptyPlaceholder?: React.ReactNode;
};
export const ExtRadio: FC<ExtRadioProps> = ({
  readonly = false,
  valueRender,
  defaultRender,
  emptyPlaceholder,
  ...rest
}) => {
  const handleValueOptions = (value: any) => {};

  const handleRender = (value: any, options: any) => {
    return rest.children;
  };

  return (
    <ExtFormField
      readonly={readonly}
      value={rest.value}
      valueRender={valueRender}
      defaultRender={defaultRender}
      options={handleValueOptions}
      fieldRender={handleRender}
      emptyPlaceholder={emptyPlaceholder}
    >
      <Radio {...rest} />
    </ExtFormField>
  );
};
