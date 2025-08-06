import {InputNumber, InputNumberProps} from "antd";
import React, {FC} from "react";
import ReadOnlyField from "../readonly-field";

export type ExtInputNumberProps = InputNumberProps & {
  readOnly?: boolean;
  valueRender?: ((value?: any) => React.ReactNode) | React.ReactNode;
};

const ExtInputNumber: FC<ExtInputNumberProps> = ({readOnly, valueRender, ...rest}) => {
  return <ReadOnlyField readOnly={readOnly} value={rest.value || rest.defaultValue} valueRender={valueRender}>
    <InputNumber {...rest}/>
  </ReadOnlyField>
}
export default ExtInputNumber;
