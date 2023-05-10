import { Form, FormProps } from 'antd';
import React, { forwardRef, useEffect, useImperativeHandle } from 'react';

export interface DrawerInnerFormHandle {
  submit: () => void;
}

type DrawerInnerFormProps = {
  children?: React.ReactElement | React.ReactNode;
  formValues?: any;
  onSubmit?: (values: any) => Promise<any> | void;
} & FormProps;
export const DrawerInnerForm = forwardRef<
  DrawerInnerFormHandle,
  DrawerInnerFormProps
>(({ children, formValues, onSubmit, ...rest }, componentRef) => {
  const [form] = Form.useForm();
  useImperativeHandle(componentRef, () => {
    return {
      submit: () => {
        form
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
    };
  });

  useEffect(() => {
    if (formValues) {
      form.setFieldsValue(formValues);
    } else {
      form.resetFields();
    }
  }, [formValues]);

  return (
    <Form form={form} {...rest}>
      {children}
    </Form>
  );
});
export default DrawerInnerForm;
