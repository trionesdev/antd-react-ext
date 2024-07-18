import { FormInstance, FormProps, Modal, ModalProps } from 'antd';
import React, {
  FC,
  useEffect,
  useRef,
  useState,
  type SyntheticEvent,
} from 'react';
import ModalInnerForm, { ModalInnerFormHandle } from './modal-inner-form';

export type ModalFormProps = {
  /**
   * @description 触发标签
   * @default
   */
  trigger?: React.ReactElement;
  form?: FormInstance;
  formValues?: any;
  /**
   * @description 提交回调
   * @default
   */
  onSubmit?: (values: any) => Promise<any> | void;
  formProps?: Omit<FormProps, 'form'>;
} & ModalProps;

const ModalForm: FC<ModalFormProps> = ({
  trigger,
  form,
  onSubmit,
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

  const handleClose = (e: SyntheticEvent) => {
    rest?.onClose?.(e);
    setScopeOpen(false);
  };

  const handleAfterClose = () => {
    rest?.afterClose?.();
    formRef.current?.resetFields();
  };

  useEffect(() => {
    if (rest.open !== undefined) {
      setScopeOpen(rest.open);
    }
  }, [rest.open]);

  return (
    <>
      {trigger &&
        React.cloneElement(trigger, {
          ...trigger.props,
          onClick: (e?: SyntheticEvent) => {
            trigger.props.onClick?.(e);
            setScopeOpen(true);
          },
        })}
      <Modal
        {...rest}
        closable={true}
        open={scopeOpen}
        onCancel={handleClose}
        onOk={handleSubmit}
        afterClose={handleAfterClose}
      >
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
