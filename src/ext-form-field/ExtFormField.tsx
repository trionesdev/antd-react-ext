import React, {
  FC,
  PropsWithChildren,
  isValidElement,
  memo,
  useEffect,
  useState,
} from 'react';

export type ExtFormFieldProps = {
  value?: any;
  defaultValue?: any;
  options?: any | ((value?: any) => any[]);
  readOnly?: boolean;
  valueRender?:
    | ((value?: any, options?: any) => React.ReactNode)
    | React.ReactNode;
  defaultRender?: React.ReactNode;
  fieldRender?: (value?: any, options?: any) => React.ReactNode;
  onChange?: (val: any, options?: any, extra?: any) => void;
};
export const ExtFormField: FC<PropsWithChildren<ExtFormFieldProps>> = memo(
  ({
     children,
     value,
     defaultValue,
     options,
     readOnly,
     valueRender,
     defaultRender,
     fieldRender,
     onChange,
   }) => {
    const [internalValue, setInternalValue] = useState(value || defaultValue);
    const handleRender = () => {
      const valueOptions = typeof options === 'function' ? options(internalValue) : options;
      if (valueRender) {
        if (typeof valueRender === 'function') {
          return valueRender(internalValue, valueOptions);
        } else {
          return valueRender;
        }
      }
      if (fieldRender) {
        return fieldRender(internalValue, valueOptions);
      }
      return internalValue;
    };

    useEffect(() => {
      if (value === undefined) {
        return;
      }
      if (value !== internalValue) {
        setInternalValue(value);
      }
    }, [value]);

    if (readOnly) {
      return <div style={{fontSize: 14}}>{handleRender() || defaultRender}</div>;
    }

    return (
      children &&
      isValidElement(children) &&
      React.cloneElement(children as React.ReactElement, {
        ...children.props,
        value: internalValue,
        onChange: (value: any, options: any, extra: any) => {
          if (value && typeof value === 'object' && 'nativeEvent' in value) {
            setInternalValue(value.target.value);
          } else {
            setInternalValue(value);
          }
          onChange?.(value, options, extra);
        },
      })
    );
  },
);
