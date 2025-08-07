import { Select, SelectProps } from 'antd';
import _ from 'lodash';
import React, { FC } from 'react';
import ExtFormField from '../ext-form-field';

export type ExtSelectProps = SelectProps & {
  readOnly?: boolean;
  valueRender?:
    | ((value?: any, option?: any) => React.ReactNode)
    | React.ReactNode;
};
export const ExtSelect: FC<ExtSelectProps> = ({
  readOnly = false,
  valueRender,
  ...rest
}) => {
  const valueField = rest.fieldNames?.value ?? 'value';
  const labelField = rest.fieldNames?.label ?? 'label';

  const handleValueOptions = (value: any) => {
    if (rest.mode === 'multiple' || rest.mode === 'tags') {
      return rest.options?.filter((option) => {
        return _.includes(value, option[valueField]);
      });
    } else {
      return rest.options?.find((option) => option[valueField] === value);
    }
  };

  const handleRender = (value: any, options: any) => {
    if (rest.mode === 'multiple' || rest.mode === 'tags') {
      return options?.map((option: any) => option[labelField]).join(', ');
    } else {
      return options?.[labelField];
    }
  };

  return (
    <ExtFormField
      value={rest.value}
      defaultValue={rest.defaultValue}
      readOnly={readOnly}
      valueRender={valueRender}
      options={handleValueOptions}
      fieldRender={(value, options) => {
        return handleRender(value, options);
      }}
    >
      <Select {...rest} />
    </ExtFormField>
  );
};
