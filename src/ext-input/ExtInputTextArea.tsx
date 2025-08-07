import { Input } from 'antd';
import React, { FC } from 'react';
import { TextAreaProps } from 'antd/es/input/TextArea';
import ExtFormField from '../ext-form-field';

export type ExtInputTextAreaProps = TextAreaProps & {
  readOnly?: boolean;
  valueRender?: ((value?: any) => React.ReactNode) | React.ReactNode;
};
export const ExtInputTextArea: FC<ExtInputTextAreaProps> = ({readOnly, valueRender, ...rest}) => {
  return (
    <ExtFormField
      value={rest.value}
      defaultValue={rest.defaultValue}
      readOnly={readOnly}
      valueRender={valueRender}
    >
      <Input.TextArea {...rest} />
    </ExtFormField>
  );
}
