import {Input, InputProps} from "antd";
import React from "react";
import {FC, useEffect, useState} from "react";
import {TextAreaProps} from "antd/es/input/TextArea";

export type ExtInputTextAreaProps = TextAreaProps & {
  readOnly?: boolean;
  valueRender?: ((value?: any) => React.ReactNode) | React.ReactNode;
};
export const ExtInputTextArea: FC<ExtInputTextAreaProps> = ({readOnly, valueRender, ...rest}) => {
  const [value, setValue] = useState<any>(rest.value || rest.defaultValue);

  const handleRender = () => {
    if (valueRender) {
      if (typeof valueRender === 'function') {
        return valueRender(value);
      } else {
        return valueRender;
      }
    } else {
      return value;
    }
  }

  useEffect(() => {
    if (rest.value === undefined) {
      return
    }
    if (rest.value !== value) {
      setValue(rest.value)
    }
  }, [rest.value])

  if (readOnly) {
    return <div>{handleRender()}</div>
  } else {
    return <Input.TextArea {...rest}
                  onChange={(e) => {
                    setValue(e.target.value)
                    rest.onChange?.(e)
                  }
                  }/>
  }
}
