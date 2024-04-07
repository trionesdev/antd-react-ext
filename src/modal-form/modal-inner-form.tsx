import { Form, FormProps } from 'antd';
import { NamePath } from 'rc-field-form/es/interface';
import React, { forwardRef, useEffect, useImperativeHandle } from 'react';

export interface ModalInnerFormHandle {
  submit: () => void;
  resetFields: (fields?: NamePath[]) => void;
}

type ModalInnerFormProps = {
  children?: React.ReactElement | React.ReactNode;
  formValues?: any;
  onSubmit?: (values: any) => Promise<any> | void;
} & FormProps;
export const ModalInnerForm = forwardRef<
  ModalInnerFormHandle,
  ModalInnerFormProps
>(({ children, formValues, onSubmit, ...rest }, componentRef) => {
  const [form] = Form.useForm();
  /**支持自己传入form，外部传入form的话使用外部传入的form */
  const trueFrom = rest.form ? rest.form : form;
  useImperativeHandle(componentRef, () => {
    return {
      submit: () => {
        trueFrom
          .validateFields()
          .then((values: any) => {
            if (onSubmit) {
              return onSubmit(values);
            } else {
              return Promise.resolve();
            }
          })
          .catch((ex: any) => {
            console.log(ex);
          });
      },
      resetFields: (fields?: NamePath[]) => {
        trueFrom.resetFields(fields);
      },
    };
  });

  useEffect(() => {
    if (formValues) {
      trueFrom.setFieldsValue(formValues);
    } else {
      trueFrom.resetFields();
    }
  }, [formValues]);

  return (
    <Form form={trueFrom} {...rest}>
      {children}
    </Form>
  );
});
export default ModalInnerForm;
