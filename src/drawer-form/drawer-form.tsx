import {
  Button,
  Drawer,
  DrawerProps,
  FormInstance,
  FormProps,
  Space,
} from 'antd';
import React, { FC, useRef, type SyntheticEvent } from 'react';
import DrawerInnerForm, { DrawerInnerFormHandle } from './drawer-inner-form';

export type DrawerFormProps = {
  /**
   * @description 触发标签
   * @default
   */
  trigger?: React.ReactElement;
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
  footer?: React.ReactNode;
  /**
   * @description 触发标签点击
   * @default
   */
  onTriggerClick?: () => void;
  onOk?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onCancel?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /**
   * @description 提交回调
   * @default
   */
  onSubmit?: (values: any, form?: FormInstance<any>) => Promise<any> | void;
  form?: FormInstance;
  /**
   * @description 表单值
   * @default
   */
  formValues?: any;
  formProps?: Omit<FormProps, 'form' | 'children'>;
} & DrawerProps;

const DrawerForm: FC<DrawerFormProps> = ({
  trigger,
  cancelText = '取消',
  okText = '确定',
  footer,
  onTriggerClick,
  onOk,
  onCancel,
  form,
  onSubmit,

  formValues,
  formProps,
  ...rest
}) => {
  const formRef = useRef({} as DrawerInnerFormHandle);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    onOk?.(e);
    if (onSubmit) {
      formRef.current.submit();
    }
  };

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    onCancel?.(e);
  };

  const footerEl = (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Space>
        <Button onClick={handleCancel}>{cancelText}</Button>
        <Button type={`primary`} onClick={handleSubmit}>
          {okText}
        </Button>
      </Space>
    </div>
  );
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
      <Drawer {...rest} footer={footer === undefined ? footerEl : footer}>
        <DrawerInnerForm
          ref={formRef}
          {...formProps}
          form={form}
          onSubmit={onSubmit}
          formValues={formValues}
        >
          {rest.children}
        </DrawerInnerForm>
      </Drawer>
    </>
  );
};
export default DrawerForm;
