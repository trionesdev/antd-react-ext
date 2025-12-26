import { Select, SelectProps, Tag } from 'antd';
import { includes } from 'lodash-es';
import React, { FC } from 'react';
import ExtFormField from '../ext-form-field';

export type ExtSelectProps = Omit<SelectProps, 'children'> & {
  readOnly?: boolean;
  valueRender?:
    | ((value?: any, option?: any) => React.ReactNode)
    | React.ReactNode;
  defaultRender?: React.ReactNode;
};
export const ExtSelect: FC<ExtSelectProps> = ({
  readOnly = false,
  valueRender,
  defaultRender,
  ...rest
}) => {
  const valueField = rest.fieldNames?.value ?? 'value';
  const labelField = rest.fieldNames?.label ?? 'label';

  const handleValueOptions = (value: any) => {
    if (rest.mode === 'multiple' || rest.mode === 'tags') {
      return rest.options?.filter((option) => {
        return includes(value, option[valueField]);
      });
    } else {
      return rest.options?.find((option) => option[valueField] === value);
    }
  };

  const handleRender = (value: any, options: any) => {
    if (rest.mode === 'multiple' || rest.mode === 'tags') {
      if (rest.labelInValue) {
        if (rest.mode === 'multiple') {
          return value.map((item: any) => item.label).join(', ');
        } else if (rest.mode === 'tags') {
          return value.map((item: any, index: number) => (
            <Tag key={index}>{item.label}</Tag>
          ));
        }
      } else {
        if (rest.mode === 'multiple') {
          return options?.map((option: any) => option[labelField]).join(', ');
        } else if (rest.mode === 'tags') {
          return options?.map((option: any, index: number) => (
            <Tag key={index}>{option[labelField]}</Tag>
          ));
        }
      }
    } else {
      if (rest.labelInValue) {
        return value?.label;
      }
      return options?.[labelField];
    }
  };

  return (
    <ExtFormField
      value={rest.value}
      defaultValue={rest.defaultValue}
      readOnly={readOnly}
      valueRender={valueRender}
      defaultRender={defaultRender}
      options={handleValueOptions}
      fieldRender={(value, options) => {
        return handleRender(value, options);
      }}
    >
      <Select {...rest} />
    </ExtFormField>
  );
};
