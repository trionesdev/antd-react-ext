import { InputNumber, InputNumberProps } from 'antd';
import React, { FC } from 'react';
import ExtFormField from '../ext-form-field';

export type ExtInputNumberProps = InputNumberProps & {
  readOnly?: boolean;
  valueRender?: ((value?: any) => React.ReactNode) | React.ReactNode;
};

const ExtInputNumber: FC<ExtInputNumberProps> = ({
  readOnly,
  valueRender,
  ...rest
}) => {
  return (
    <ExtFormField
      readOnly={readOnly}
      value={rest.value}
      defaultValue={rest.defaultValue}
      valueRender={valueRender}
    >
      <InputNumber {...rest} />
    </ExtFormField>
  );
};
export default ExtInputNumber;
