import { FormProps, Modal } from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import _ from 'lodash';
import React, { FC, useEffect, useRef, useState } from 'react';
import ModalInnerForm, { ModalInnerFormHandle } from './modal-inner-form';

export type ModalFormProps = {
  /**
   * @description 表单项
   * @default []
   */
  children?: React.ReactElement | React.ReactNode;
  className?: string | undefined;
  style?: React.CSSProperties;
  /**
   * @description 触发标签
   * @default
   */
  trigger?: React.ReactElement;
  /**
   * @description 标题
   * @default null
   */
  title?: React.ReactNode;
  destroyOnClose?: boolean;
  /**
   * @description 是否打开
   * @default false
   */
  open?: boolean;
  /**
   * @description 状态变更后触发
   * @default
   */
  afterOpenChange?: (open: boolean) => void;
  /**
   * @description 取消按钮文本
   * @default 取消
   */
  cancelText?: string;
  /**
   * @description 确定按钮文本
   * @default 确定
   */
  okText?: string;
  /**
   * @description 提交回调
   * @default
   */
  onSubmit?: (values: any) => Promise<any> | void;
  /**
   * @description 关闭回调
   * @default
   */
  onClose?: () => void;
  /**
   * @description 表单值
   * @default
   */
  footer?: React.ReactNode;
  formValues?: any;

  formSize?: SizeType;
} & Omit<FormProps, 'size'>;

const ModalForm: FC<ModalFormProps> = ({
  className,
  style,
  trigger,
  title,
  destroyOnClose,
  open,
  afterOpenChange,
  cancelText = '取消',
  okText = '确定',
  onSubmit,
  onClose,
  footer,
  formValues,
  formSize,
  ...rest
}) => {
  const formRef = useRef({} as ModalInnerFormHandle);
  const [scopeOpen, setScopeOpen] = useState(false);
  const [scopeTrigger, setScopeTrigger] = useState(trigger);

  const handleSubmit = () => {
    formRef.current.submit();
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
    setScopeOpen(false);
  };

  const handleAfterClose = () => {
    formRef.current?.resetFields();
  };

  useEffect(() => {
    if (trigger) {
      const triggerProps = _.assign({}, trigger.props, {
        onClick: () => {
          if (trigger.props.onClick) {
            trigger.props.onClick();
          }
          setScopeOpen(!scopeOpen);
        },
      });
      setScopeTrigger(React.createElement(trigger.type, triggerProps));
    }
  }, []);

  useEffect(() => {
    if (open !== undefined) {
      setScopeOpen(open);
    }
  }, [open]);

  return (
    <>
      {scopeTrigger}
      <Modal
        className={className}
        style={style}
        closable={true}
        destroyOnClose={destroyOnClose}
        open={scopeOpen}
        title={title}
        onCancel={handleClose}
        onOk={handleSubmit}
        afterClose={handleAfterClose}
        afterOpenChange={afterOpenChange}
        footer={footer}
      >
        <ModalInnerForm
          ref={formRef}
          onSubmit={onSubmit}
          formValues={formValues}
          size={formSize}
          {...rest}
        />
      </Modal>
    </>
  );
};
export default ModalForm
