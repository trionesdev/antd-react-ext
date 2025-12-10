import React, { type SyntheticEvent } from 'react';
import ReactDOM from 'react-dom/client';
import { ModalForm as InternalModalForm, ModalFormProps } from './modal-form';

type ModalFormShowProps = Omit<
  ModalFormProps,
  'open' | 'afterOpenChange' | 'onClose' | 'onCancel'
> & {
  /**
   * @description 关闭回调，如果有回调函数，返回结果是 Promise.resolve(true) 的时候关闭。如果没有回调函数，直接关闭
   * @default
   */
  onClose?: (e: SyntheticEvent) => Promise<any>;
  /**
   * @description 取消回调
   * @default
   */
  onCancel?: (e: React.MouseEvent<HTMLButtonElement>) => Promise<any>;
};
const show = (options?: ModalFormShowProps) => {
  const div = document.createElement('div');
  const body = document.body;
  body.appendChild(div);
  const root = ReactDOM.createRoot(div as HTMLElement);

  function destroy() {
    setTimeout(() => root.unmount());
    if (div.parentNode) {
      div.parentNode.removeChild(div);
    }
  }

  const handleClose = (e: SyntheticEvent) => {
    if (options?.onClose) {
      options?.onClose(e).then((result) => {
        destroy();
      });
    } else {
      destroy();
    }
  };

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (options?.onCancel) {
      options?.onCancel?.(e).then((res) => {
        destroy();
      });
    } else {
      destroy();
    }
  };

  root.render(
    <InternalModalForm
      {...options}
      open={true}
      onCancel={handleCancel}
    />,
  );
};

type CompoundedComponent = typeof InternalModalForm & {
  show: typeof show;
};
export type { ModalFormProps };
const ModalForm = InternalModalForm as CompoundedComponent;
ModalForm.show = show;
export default ModalForm;
