import {Form, FormInstance, FormProps} from 'antd';
import React, {forwardRef, useEffect, useImperativeHandle} from 'react';

export interface DrawerInnerFormHandle {
  submit: () => void;
}

export type DrawerInnerFormProps = {
  children?: React.ReactElement | React.ReactNode;
  formValues?: any;
  onSubmit?: (values: any, form?: FormInstance<any>) => Promise<any> | void;
} & Omit<FormProps, 'children'>;

export const DrawerInnerForm = forwardRef<
  DrawerInnerFormHandle,
  DrawerInnerFormProps
>(({children, formValues, onSubmit, ...rest}, componentRef) => {
  const [form] = Form.useForm();
  /**支持自己传入form，外部传入form的话使用外部传入的form */
  const finalFrom = rest.form ? rest.form : form;
  useImperativeHandle(componentRef, () => {
    return {
      submit: () => {
        finalFrom
          .validateFields()
          .then((values: any) => {
            if (onSubmit) {
              return onSubmit(values, finalFrom);
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
      finalFrom?.setFieldsValue(formValues);
    }
  }, [formValues]);

  return (
    <Form form={finalFrom} {...rest}>
      {children}
    </Form>
  );
});
export default DrawerInnerForm;
