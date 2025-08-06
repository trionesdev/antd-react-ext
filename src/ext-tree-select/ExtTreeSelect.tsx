import {Tag, TreeSelect, TreeSelectProps} from "antd";
import React, {useEffect, useState} from "react";
import {FC} from "react";
import type {DataNode} from 'rc-tree-select/lib/interface';
import _ from "lodash";

export type ExtTreeSelectProps = TreeSelectProps & {
  readOnly?: boolean;
  valueRender?: ((value?: any, option?: any) => React.ReactNode) | React.ReactNode;
};
export const ExtTreeSelect: FC<ExtTreeSelectProps> = ({readOnly,valueRender, ...rest}) => {
  const [value, setValue] = useState(rest.value || rest.defaultValue);
  const [options, setOptions] = useState<any[]>([]);
  const valueField = rest.fieldNames?.value ?? 'value'
  const labelField = rest.fieldNames?.label ?? 'label'

  const handleOptions = (options: DataNode[]) => {
    let newOptions: any[] = []
    options.forEach((option) => {
      newOptions.push({
        ...option
      })
      if (option.children) {
        let childrenOptions = handleOptions(option.children)
        newOptions.push(...childrenOptions)
      }
    })
    return newOptions
  }

  const handleRender = () => {
    if (valueRender) {
      if (typeof valueRender === 'function') {
        if (Array.isArray(value)) {
          const newOptions = options?.filter(option => {
            return _.includes(value, option[valueField])
          })
          return valueRender(value, newOptions)
        } else {
          const option = options?.find(option => option[valueField] === value)
          return valueRender(value, option);
        }

      } else {
        return valueRender;
      }
    }

    if (rest.multiple) {
      return options?.filter(option => {
        return _.includes(value, option[valueField])
      })?.map(option => <Tag
        key={option[valueField]} bordered={false} style={{fontSize: 14}}>{option[labelField]}</Tag>)
    } else {
      return options?.find(option => option[valueField] === value)?.[labelField]
    }
  }

  useEffect(() => {
    if (_.isEmpty(rest.treeData)) {
      setValue([])
    } else {
      const newOptions = handleOptions(rest.treeData || []);
      setOptions(newOptions)
    }
  }, [rest.treeData]);

  useEffect(() => {
    if (rest.value === undefined) {
      return
    }
    if (rest.value !== value) {
      setValue(rest.value)
    }
  }, [rest.value])

  if (readOnly) {
    return <div style={{fontSize: 14}}>{handleRender()}</div>
  }
  return <TreeSelect {...rest} onChange={(value, labelList, extra) => {
    setValue(value)
    rest.onChange?.(value, labelList, extra)
  }}/>
}
