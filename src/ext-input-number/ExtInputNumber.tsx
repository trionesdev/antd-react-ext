import { InputNumber, InputNumberProps, Space } from 'antd';
import React, {FC} from "react";
import ExtFormField from "../ext-form-field";

export type ExtInputNumberProps = {
  readOnly?: boolean;
  valueRender?: ((value?: any) => React.ReactNode) | React.ReactNode;
  defaultRender?: React.ReactNode;
  emptyPlaceholder?: React.ReactNode;
  addonBefore?: React.ReactNode;
  addonAfter?: React.ReactNode;
} & Omit<InputNumberProps<number>, 'addonBefore' | 'addonAfter'>;

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
        {addonBefore && <Space.Addon>{addonBefore}</Space.Addon>}
        <InputNumber {...rest} />
        {addonAfter && <Space.Addon>{addonAfter}</Space.Addon>}
      </Space.Compact>
    </ExtFormField>
  );
};
