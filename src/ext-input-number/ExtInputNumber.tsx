import {InputNumber, InputNumberProps} from "antd";
import React, {FC} from "react";
import ExtFormField from "../ext-form-field";

export type ExtInputNumberProps = InputNumberProps & {
  readonly?: boolean;
  valueRender?: ((value?: any) => React.ReactNode) | React.ReactNode;
  defaultRender?: React.ReactNode;
};

export const ExtInputNumber: FC<ExtInputNumberProps> = ({readonly, valueRender, defaultRender, ...rest}) => {

  const handleRender = (value: any, options: any) => {
    return <>{value}{rest.suffix}</>
  };

  return (
    <ExtFormField
      value={rest.value}
      defaultValue={rest.defaultValue}
      readonly={readonly}
      valueRender={valueRender}
      defaultRender={defaultRender}
      fieldRender={handleRender}
    >
      <InputNumber {...rest} />
    </ExtFormField>
  );
}
