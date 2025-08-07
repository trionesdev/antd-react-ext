import { TreeSelect, TreeSelectProps } from 'antd';
import _ from 'lodash';
import React, { FC, useEffect, useState } from 'react';
import ExtFormField from '../ext-form-field';

export type ExtTreeSelectProps = TreeSelectProps & {
  readOnly?: boolean;
  valueRender?:
    | ((value?: any, option?: any) => React.ReactNode)
    | React.ReactNode;
};
export const ExtTreeSelect: FC<ExtTreeSelectProps> = ({
  readOnly,
  valueRender,
  ...rest
}) => {
  const [options, setOptions] = useState<any[]>([]);
  const valueField = rest.fieldNames?.value ?? 'value';
  const labelField = rest.fieldNames?.label ?? 'label';

  const handleOptions = (options: any[]) => {
    let newOptions: any[] = [];
    options.forEach((option) => {
      newOptions.push({
        ...option,
      });
      if (option.children) {
        let childrenOptions = handleOptions(option.children);
        newOptions.push(...childrenOptions);
      }
    });
    return newOptions;
  };

  const handleValueOptions = (value: any) => {
    if (rest.multiple) {
      return options?.filter((option) => {
        return _.includes(value, option[valueField]);
      });
    } else {
      return options?.find((option) => option[valueField] === value);
    }
  };

  const handleFiledRender = (value: any, valueOptions: any) => {
    if (rest.multiple) {
      return valueOptions?.map((option: any) => option[labelField]).join(', ');
    } else {
      return valueOptions?.[labelField];
    }
  };

  useEffect(() => {
    if (_.isEmpty(rest.treeData)) {
    } else {
      const newOptions = handleOptions(rest.treeData || []);
      setOptions(newOptions);
    }
  }, [rest.treeData]);

  return (
    <ExtFormField
      value={rest.value}
      defaultValue={rest.defaultValue}
      readOnly={readOnly}
      valueRender={valueRender}
      options={handleValueOptions}
      fieldRender={(value, options) => handleFiledRender(value, options)}
    >
      <TreeSelect {...rest} />
    </ExtFormField>
  );
};
