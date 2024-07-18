import {
  Button,
  Drawer,
  DrawerProps,
  FormInstance,
  FormProps,
  Space,
} from 'antd';
import React, {
  FC,
  useEffect,
  useRef,
  useState,
  type SyntheticEvent,
} from 'react';
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
  onOk?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onCancel?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onClose?: (e: SyntheticEvent) => any;
  form?: FormInstance;
  /**
   * @description 提交回调
   * @default
   */
  onSubmit?: (values: any, form?: FormInstance<any>) => Promise<any> | void;
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
  onOk,
  onCancel,
  onClose,
  form,
  onSubmit,

  formValues,
  formProps,
  ...rest
}) => {
  const formRef = useRef({} as DrawerInnerFormHandle);
  const [scopeOpen, setScopeOpen] = useState(false);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    onOk?.(e);
    if (onSubmit) {
      formRef.current.submit();
    }
  };

  const handleClose = (e: React.MouseEvent | React.KeyboardEvent) => {
    onClose?.(e);
    setScopeOpen(false);
  };

  useEffect(() => {
    if (rest.open !== undefined) {
      setScopeOpen(rest.open);
    }
  }, [rest.open]);

  const footerEl = (
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
      {trigger &&
        React.cloneElement(trigger, {
          ...trigger.props,
          onClick: (e?: SyntheticEvent) => {
            trigger.props.onClick?.(e);
            setScopeOpen(true);
          },
        })}
      <Drawer
        {...rest}
        open={scopeOpen}
        onClose={handleClose}
        footer={footer === undefined ? footerEl : footer}
      >
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
