import { FormInstance, FormProps, Modal, ModalProps } from 'antd';
import React, { FC, useRef, useState, type SyntheticEvent } from 'react';
import ModalInnerForm, { ModalInnerFormHandle } from './modal-inner-form';

export type ModalFormProps = {
  /**
   * @description 触发标签
   * @default
   */
  trigger?: React.ReactElement;

  /**
   * @description 触发标签点击
   * @default
   */
  onTriggerClick?: () => void;
  /**
   * @description 提交回调
   * @default
   */
  onSubmit?: (values: any) => Promise<any> | void;
  form?: FormInstance;
  formValues?: any;
  formProps?: Omit<FormProps, 'form'>;
} & ModalProps;

const ModalForm: FC<ModalFormProps> = ({
  trigger,
  onTriggerClick,
  onSubmit,
  form,
  formValues,
  formProps,
  ...rest
}) => {
  const formRef = useRef({} as ModalInnerFormHandle);
  const [scopeOpen, setScopeOpen] = useState(false);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    rest?.onOk?.(e);
    if (onSubmit) {
      formRef.current.submit();
    }
  };

  return (
    <>
      {trigger &&
        React.cloneElement(trigger, {
          ...trigger.props,
          onClick: (e?: SyntheticEvent) => {
            trigger.props.onClick?.(e);
            onTriggerClick?.();
          },
        })}
      <Modal {...rest} onOk={handleSubmit}>
        <ModalInnerForm
          ref={formRef}
          {...formProps}
          form={form}
          onSubmit={onSubmit}
          formValues={formValues}
        >
          {rest.children}
        </ModalInnerForm>
      </Modal>
    </>
  );
};
export default ModalForm;
