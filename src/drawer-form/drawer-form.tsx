import { Button, Drawer, Form, Space } from 'antd';
import { FormLayout } from 'antd/es/form/Form';
import _ from 'lodash';
import React, { FC, useEffect, useState } from 'react';

interface DrawerFormProps {
  /**
   * @description 表单项
   * @default []
   */
  children?: React.ReactElement | React.ReactNode;
  className?: string | undefined;
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
  onSubmit?: (values: any) => Promise<void>;
  /**
   * @description 关闭回调
   * @default
   */
  onClose?: () => void;
  /**
   * @description 表单布局
   * @default
   */
  formLayout?: FormLayout;
  /**
   * @description 初始化值
   * @default
   */
  initialValues?: any;
  /**
   * @description 表单值
   * @default
   */
  formValues?: any;
}

const DrawerForm: FC<DrawerFormProps> = ({
  children,
  className,
  trigger,
  title,
  open,
  onOpenChange,
  cancelText = '取消',
  okText = '确定',
  onSubmit,
  onClose,
  formLayout = 'vertical',
  initialValues,
  formValues,
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
        } else {
          return Promise.resolve();
        }
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

  const footer = (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Space>
        <Button onClick={handleClose}>{cancelText}</Button>
        <Button type={`primary`} onClick={handleSubmit}>
          {okText}
        </Button>
      </Space>
    </div>
  );
  return (
    <>
      {scopeTrigger}
      <Drawer
        closable={true}
        open={scopeOpen}
        onClose={handleClose}
        afterOpenChange={onOpenChange}
        title={title}
        footer={footer}
      >
        <Form form={form} layout={formLayout} initialValues={initialValues}>
          {children}
        </Form>
      </Drawer>
    </>
  );
};
export default DrawerForm;
