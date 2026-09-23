import {Switch, SwitchProps} from "antd";
import React, {FC} from "react";
import ExtFormField from "../ext-form-field";

export type ExtSwitchProps = SwitchProps & {
  readOnly?: boolean;
  valueRender?:
    | ((value?: any, option?: any) => React.ReactNode)
    | React.ReactNode;
  defaultRender?: React.ReactNode;
};

export const ExtSwitch: FC<ExtSwitchProps> = ({
  readOnly = false,
  valueRender,
  defaultRender,
  ...rest
}) => {
  const handleRender = (value: any, options: any) => {
    return value
      ? rest.checkedChildren || '是'
      : rest.unCheckedChildren || '否';
  };

  return (
    <ExtFormField
      value={rest.value}
      defaultValue={rest.defaultValue}
      readOnly={readOnly}
      valueRender={valueRender}
      defaultRender={defaultRender}
      fieldRender={(value, options) => {
        return handleRender(value, options);
      }}
    >
      <Switch {...rest} />
    </ExtFormField>
  );
};
