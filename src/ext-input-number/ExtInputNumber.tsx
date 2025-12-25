import { InputNumber, InputNumberProps, Space } from 'antd';
import React, {FC} from "react";
import ExtFormField from "../ext-form-field";

export type ExtInputNumberProps = InputNumberProps & {
  readOnly?: boolean;
  valueRender?: ((value?: any) => React.ReactNode) | React.ReactNode;
  defaultRender?: React.ReactNode;
  emptyPlaceholder?: React.ReactNode;
  addonBefore?: React.ReactNode;
  addonAfter?: React.ReactNode;
};

export const ExtInputNumber: FC<ExtInputNumberProps> = ({
  readOnly,
  valueRender,
  defaultRender,
  emptyPlaceholder,
  addonBefore,
  addonAfter,
  ...rest
}) => {
  const handleRender = (value: any, options: any) => {
    if (value) {
      return (
        <>
          {value}
          {rest.suffix || addonAfter}
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
      <Space.Compact>
        {addonBefore && <Space.Compact>{addonBefore}</Space.Compact>}
        <InputNumber {...rest} />
        {addonAfter && <Space.Compact>{addonAfter}</Space.Compact>}
      </Space.Compact>
    </ExtFormField>
  );
};
