import { Checkbox } from 'antd';
import { CheckboxGroupProps } from 'antd/es/checkbox';
import React, { FC, memo } from 'react';
import ExtFormField from '../ext-form-field';
import { includes } from 'lodash-es';

export type ExtCheckBoxGroupProps = Omit<CheckboxGroupProps, 'children'> & {
  readonly?: boolean;
  valueRender?:
    | ((value?: any, options?: any) => React.ReactNode)
    | React.ReactNode;
  defaultRender?: React.ReactNode;
  emptyPlaceholder?: React.ReactNode;
};

export const ExtCheckboxGroup: FC<ExtCheckBoxGroupProps> = memo(
  ({
    readonly = false,
    valueRender,
    defaultRender,
    emptyPlaceholder,
    ...rest
  }) => {

    const handleValueOptions = (value: any) => {
      return rest.options?.filter((option:any) => {
        return includes(value, option['value']);
      });
    };

    const handleRender = (value: any, options: any) => {
      return  options?.map((option: any) => option['label']).join(', ');
    };

    return (
      <ExtFormField
        value={rest.value}
        defaultValue={rest.defaultValue}
        readonly={readonly}
        valueRender={valueRender}
        defaultRender={defaultRender}
        options={handleValueOptions}
        fieldRender={handleRender}
        emptyPlaceholder={emptyPlaceholder}
      >
        <Checkbox.Group {...rest} />
      </ExtFormField>
    );
  },
);
