import React from 'react';
import  {DrawerForm as InternalDrawerForm,DrawerFormProps} from './drawer-form';
import ReactDOM from "react-dom/client";

type DrawerFormShowProps = Omit<DrawerFormProps, 'open' >

const show=(options?:DrawerFormShowProps) => {
  const div = document.createElement('div');
  const body = document.body
  body.appendChild(div)
  const root = ReactDOM.createRoot(
    div as HTMLElement
  );

  function destroy() {
    setTimeout(() => root.unmount())
    if (div.parentNode) {
      div.parentNode.removeChild(div);
    }
  }

  function handleClose(e: React.MouseEvent | React.KeyboardEvent) {
    destroy()
    options?.onClose?.(e)
  }

  function handleAfterOpenChange(open: boolean) {
    options?.afterOpenChange?.(open)
  }

  root.render(<InternalDrawerForm open={true} />)
};

type CompoundedComponent = typeof InternalDrawerForm & {
  show: typeof show
}

export type {DrawerFormProps}

const DrawerForm = InternalDrawerForm as CompoundedComponent
export default DrawerForm
