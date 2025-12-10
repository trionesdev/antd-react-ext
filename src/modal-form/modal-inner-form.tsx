import { Form, FormProps } from 'antd';
import React, { forwardRef, useEffect, useImperativeHandle } from 'react';

export interface ModalInnerFormHandle {
  submit: () => void;
  resetFields: (fields?: any[]) => void;
}

type ModalInnerFormProps = {
  children: React.ReactElement | React.ReactNode;
  formValues?: any;
  onSubmit?: (values: any) => Promise<any> | void;
} & Omit<FormProps, 'children'>;
export const ModalInnerForm = forwardRef<
  ModalInnerFormHandle,
  ModalInnerFormProps
>(({ children, formValues, onSubmit, ...rest }, componentRef) => {
  const [form] = Form.useForm();
  /**支持自己传入form，外部传入form的话使用外部传入的form */
  const finalFrom = rest.form ? rest.form : form;
  useImperativeHandle(componentRef, () => {
    return {
      submit: () => {
        finalFrom
          .validateFields()
          .then((values: any) => {
            onSubmit?.(values);
          })
          .catch((ex: any) => {
            console.error(ex.message);
          });
      },
      resetFields: (fields?: any[]) => {
        finalFrom.resetFields(fields);
      },
    };
  });

  useEffect(() => {
    if (formValues) {
      finalFrom.setFieldsValue(formValues);
    }
  }, [formValues]);

  return (
    <Form {...rest} form={finalFrom}>
      {children}
    </Form>
  );
});
export default ModalInnerForm;
