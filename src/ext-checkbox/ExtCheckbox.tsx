import { Checkbox, CheckboxProps } from 'antd';
import React, { FC, memo } from 'react';
import ExtFormField from '../ext-form-field';

export type ExtCheckBoxProps = CheckboxProps & {
  readonly?: boolean;
  valueRender?:
    | ((value?: any, options?: any) => React.ReactNode)
    | React.ReactNode;
  defaultRender?: React.ReactNode;
  emptyPlaceholder?: React.ReactNode;
};

export const ExtCheckBox: FC<ExtCheckBoxProps> = memo(
  ({
    readonly = false,
    valueRender,
    defaultRender,
    emptyPlaceholder,
    ...rest
  }) => {
    const handleRender = (value: any, options: any) => {
      return rest.children;
    };
    return (
      <ExtFormField
        readonly={readonly}
        value={rest.value}
        valueRender={valueRender}
        defaultRender={defaultRender}
        fieldRender={handleRender}
        emptyPlaceholder={emptyPlaceholder}
      >
        <Checkbox {...rest} />
      </ExtFormField>
    );
  },
);
