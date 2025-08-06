import {Select, SelectProps, Tag} from "antd";
import React from "react";
import {FC, useEffect, useState} from "react";
import _ from "lodash";

export type ExtSelectProps = SelectProps & {
  readOnly?: boolean;
  valueRender?: ((value?: any, option?: any) => React.ReactNode) | React.ReactNode;
}
export const ExtSelect: FC<ExtSelectProps> = ({readOnly = false, valueRender, ...rest}) => {
  const [value, setValue] = useState<any>(rest.value || rest.defaultValue);
  const valueField = rest.fieldNames?.value ?? 'value'
  const labelField = rest.fieldNames?.label ?? 'label'

  const handleRender = () => {
    if (valueRender) {
      if (typeof valueRender === 'function') {
        if (Array.isArray(value)) {
          const options = rest.options?.filter(option => {
            return _.includes(value, option[valueField])
          })
          return valueRender(value, options)
        } else {
          const option = rest.options?.find(option => option[valueField] === value)
          return valueRender(value, option);
        }

      } else {
        return valueRender;
      }
    }
    if (rest.mode === 'multiple' || rest.mode === 'tags') {
      return rest.options?.filter(option => {
        return _.includes(value, option[valueField])
      })?.map(option => <Tag
        key={option[valueField]} bordered={false} style={{fontSize: 14}}>{option[labelField]}</Tag>)
    } else {
      return rest.options?.find(option => option[valueField] === value)?.[labelField]
    }
  }
  useEffect(() => {
    if (rest.value === undefined) {
      return
    }
    if (rest.value !== value) {
      setValue(rest.value)
    }
  }, [rest.value]);
  if (readOnly) {
    return <div style={{fontSize: 14}}>{handleRender()}</div>
  } else {
    return <Select {...rest} onChange={(value, option) => {
      setValue(value)
      rest.onChange?.(value, option)
    }}/>
  }
}
