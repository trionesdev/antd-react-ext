import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  DrawerFormProps,
  DrawerForm as InternalDrawerForm,
} from './drawer-form';

type DrawerFormShowProps = Omit<
  DrawerFormProps,
  'open' | 'afterOpenChange' | 'onClose' | 'onCancel'
> & {
  /**
   * @description 关闭回调，如果有回调函数，返回结果是 Promise.resolve(true) 的时候关闭。如果没有回调函数，直接关闭
   * @default
   */
  onClose?: (e: React.MouseEvent | React.KeyboardEvent) => Promise<any>;
  /**
   * @description 取消回调
   * @default
   */
  onCancel?: (e: React.MouseEvent<HTMLButtonElement>) => Promise<any>;
};

const show = (options?: DrawerFormShowProps) => {
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

  const handleClose = (e: React.MouseEvent | React.KeyboardEvent) => {
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
    <InternalDrawerForm
      {...options}
      open={true}
      onClose={handleClose}
      onCancel={handleCancel}
    />,
  );
};
type CompoundedComponent = typeof InternalDrawerForm & {
  show: typeof show;
};

export type { DrawerFormProps };
const DrawerForm = InternalDrawerForm as CompoundedComponent;
DrawerForm.show = show;
export default DrawerForm;
