import {Form, FormProps} from "antd";
import React, {forwardRef, useEffect, useImperativeHandle} from "react";
import {NamePath} from "rc-field-form/es/interface";

export interface ModalInnerFormHandle {
  submit: () => void
  resetFields: (fields?: NamePath[]) => void
}

type ModalInnerFormProps = {
  children?: React.ReactElement | React.ReactNode;
  formValues?: any;
  onSubmit?: (values: any) => Promise<any> | void;
} & FormProps
export const ModalInnerForm = forwardRef<ModalInnerFormHandle, ModalInnerFormProps>(({
                                                                                       children,
                                                                                       formValues,
                                                                                       onSubmit,
                                                                                       ...rest
                                                                                     }, componentRef) => {
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
      resetFields: (fields?: NamePath[]) => {
        form.resetFields(fields)
      }
    }
  }, [])

  useEffect(() => {
    if (formValues) {
      form.setFieldsValue(formValues)
    } else {
      form.resetFields()
    }
  }, [formValues])

  return <Form form={form} {...rest}>{children}</Form>
})
export default ModalInnerForm
