import { Input } from 'antd';
import { TextAreaProps } from 'antd/es/input/TextArea';
import React, { FC } from 'react';
import ExtFormField from '../ext-form-field';

export type ExtInputTextAreaProps = TextAreaProps & {
  readOnly?: boolean;
  valueRender?: ((value?: any) => React.ReactNode) | React.ReactNode;
  defaultRender?: React.ReactNode;
  emptyPlaceholder?: React.ReactNode;
};
export const ExtInputTextArea: FC<ExtInputTextAreaProps> = ({
  readOnly,
  valueRender,
  defaultRender,
  emptyPlaceholder,
  ...rest
}) => {
  return (
    <ExtFormField
      value={rest.value}
      defaultValue={rest.defaultValue}
      readOnly={readOnly}
      valueRender={valueRender}
      defaultRender={defaultRender}
      emptyPlaceholder={emptyPlaceholder}
    >
      <Input.TextArea {...rest} />
    </ExtFormField>
  );
};
