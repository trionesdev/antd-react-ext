import React, {FC, useEffect, useState} from "react";
import {Form, FormProps, Modal} from "antd";
import _ from "lodash";
import {SizeType} from "antd/es/config-provider/SizeContext";

type ModalFormProps = {
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
  /**
   * @description 是否打开
   * @default false
   */
  open?: boolean;
  /**
   * @description 状态变更后触发
   * @default
   */
  onOpenChange?: (open: boolean) => void;
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
  onSubmit?: (values: any) => (Promise<any> | void);
  /**
   * @description 关闭回调
   * @default
   */
  onClose?: () => void;
  /**
   * @description 表单值
   * @default
   */
  formValues?: any;

  formSize?: SizeType
} & Omit<FormProps, 'size'>

const ModalForm: FC<ModalFormProps> = ({
                                         children,
                                         className,
  style,
                                         trigger,
                                         title,
                                         open,
                                         onOpenChange,
                                         cancelText = '取消',
                                         okText = '确定',
                                         onSubmit,
                                         onClose,
                                         formValues,
  formSize,
                                         ...rest
                                       }) => {
  const [form] = Form.useForm();
  const [scopeOpen, setScopeOpen] = useState(false);
  const [scopeTrigger, setScopeTrigger] = useState(trigger);

  const handleSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        if (onSubmit) {
          return onSubmit(values);
        }
        return Promise.resolve();
      })
      .catch((ex: any) => {
        console.log(ex);
      });
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
    setScopeOpen(false);
  };

  const handleAfterClose = () => {
    form?.resetFields()
  }

  useEffect(() => {
    if (scopeOpen && formValues) {
      form?.setFieldsValue(formValues);
    }
  }, [formValues]);

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
      <Modal style={style}  closable={true} open={scopeOpen}
             title={title}
             onCancel={handleClose}
             onOk={handleSubmit}
             afterClose={handleAfterClose}
      >
        <Form form={form} size={formSize} {...rest}>
          {children}
        </Form>
      </Modal>
    </>
  )
}
export default ModalForm
