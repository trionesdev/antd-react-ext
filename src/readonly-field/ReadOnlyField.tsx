import React, {FC, isValidElement, PropsWithChildren, useEffect, useRef, useState} from "react";

type ReadOnlyFieldProps = {
  value?: any;
  readOnly?: boolean;
  valueRender?: ((value?: any) => React.ReactNode) | React.ReactNode;
  onChange?: (val: any) => void;
};
export const ReadOnlyField: FC<PropsWithChildren<ReadOnlyFieldProps>> = ({
                                                                           children,
                                                                           value,
                                                                           readOnly,
                                                                           valueRender,
                                                                           onChange
                                                                         }) => {
  const innerValueRef = useRef( value)
  const handleRender = () => {
    if (valueRender) {
      if (typeof valueRender === 'function') {
        return valueRender(value);
      } else {
        return valueRender;
      }
    }
    return value;
  }

  useEffect(() => {
    if (value === undefined) {
      return
    }
    if (value !== innerValueRef.current) {
      innerValueRef.current = value;
    }
  }, [value]);

  if (readOnly) {
    return <div>{handleRender()}</div>;
  }

  return children && isValidElement(children) && React.cloneElement(children as React.ReactElement, {
    onChange: ( value:any)=>{
      innerValueRef.current = value;
      onChange?.(value)
    },
    value: innerValueRef.current,
    ...children.props
  });
}
