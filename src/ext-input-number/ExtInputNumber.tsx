import {InputNumber, InputNumberProps} from "antd";
import React, {FC} from "react";
import ExtFormField from "../ext-form-field";

export type ExtInputNumberProps = InputNumberProps & {
  readOnly?: boolean;
  valueRender?: ((value?: any) => React.ReactNode) | React.ReactNode;
  defaultRender?: React.ReactNode;
  emptyPlaceholder?: React.ReactNode;
};

export const ExtInputNumber: FC<ExtInputNumberProps> = ({
  readOnly,
  valueRender,
  defaultRender,
  emptyPlaceholder,
  ...rest
}) => {
  const handleRender = (value: any, options: any) => {
    if (value) {
      return (
        <>
          {' '}
          {value}
          {rest.suffix}
        </>
      );
    }
    return emptyPlaceholder;
  };

  return (
    <ExtFormField
      value={rest.value}
      defaultValue={rest.defaultValue}
      readOnly={readOnly}
      valueRender={valueRender}
      defaultRender={defaultRender}
      fieldRender={handleRender}
      emptyPlaceholder={emptyPlaceholder}
    >
      <InputNumber {...rest} />
    </ExtFormField>
  );
};
