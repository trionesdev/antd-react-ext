"use strict";(self.webpackChunk_trionesdev_antd_react_ext=self.webpackChunk_trionesdev_antd_react_ext||[]).push([[914],{20520:function(t,e,n){var a,d;n.r(e),n.d(e,{demos:function(){return y}});var E=n(15009),s=n.n(E),h=n(99289),f=n.n(h),r=n(67294),C=n(67039),x=n(53511),_=n(33939),p=n(54194),F=n(20745),M=n(58030),v=n(54056),y={"modal-form-demo-base":{component:r.memo(r.lazy(function(){return n.e(3422).then(n.bind(n,14763))})),asset:{type:"BLOCK",id:"modal-form-demo-base",refAtomIds:["modal-form"],dependencies:{"index.tsx":{type:"FILE",value:n(50487).Z},"@trionesdev/antd-react-ext":{type:"NPM",value:"0.0.7-beta.12"},antd:{type:"NPM",value:"5.23.0"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"@trionesdev/antd-react-ext":x,antd:_,react:a||(a=n.t(r,2))},renderOpts:{compile:function(){var l=f()(s()().mark(function u(){var m,c=arguments;return s()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,n.e(7335).then(n.bind(n,37335));case 2:return o.abrupt("return",(m=o.sent).default.apply(m,c));case 3:case"end":return o.stop()}},u)}));function i(){return l.apply(this,arguments)}return i}()}},"modal-form-demo-show":{component:r.memo(r.lazy(function(){return n.e(3422).then(n.bind(n,69977))})),asset:{type:"BLOCK",id:"modal-form-demo-show",refAtomIds:["modal-form"],dependencies:{"index.tsx":{type:"FILE",value:n(96312).Z},antd:{type:"NPM",value:"5.23.0"},react:{type:"NPM",value:"18.3.1"},"../index.tsx":{type:"FILE",value:n(15225).Z},"react-dom":{type:"NPM",value:"18.3.1"},"./modal-form.tsx":{type:"FILE",value:n(5331).Z},"./modal-inner-form.tsx":{type:"FILE",value:n(93043).Z}},entry:"index.tsx"},context:{"../index.tsx":p,"./modal-form.tsx":M,"./modal-inner-form.tsx":v,antd:_,react:a||(a=n.t(r,2)),"/home/runner/work/antd-react-ext/antd-react-ext/src/modal-form/index.tsx":p,"react-dom/client":d||(d=n.t(F,2)),"/home/runner/work/antd-react-ext/antd-react-ext/src/modal-form/modal-form.tsx":M,"/home/runner/work/antd-react-ext/antd-react-ext/src/modal-form/modal-inner-form.tsx":v},renderOpts:{compile:function(){var l=f()(s()().mark(function u(){var m,c=arguments;return s()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,n.e(7335).then(n.bind(n,37335));case 2:return o.abrupt("return",(m=o.sent).default.apply(m,c));case 3:case"end":return o.stop()}},u)}));function i(){return l.apply(this,arguments)}return i}()}}}},70446:function(t,e,n){n.r(e),n.d(e,{texts:function(){return d}});var a=n(67039);const d=[{value:"\u6A21\u6001\u6846\u8868\u5355",paraId:0,tocIndex:0}]},50487:function(t,e){e.Z=`import { ModalForm } from '@trionesdev/antd-react-ext';
import { Button, Form, Input } from 'antd';
import React from 'react';

export default () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <ModalForm
        trigger={<Button>\u65B0\u5EFA</Button>}
        open={open}
        onTriggerClick={() => {
          setOpen(true);
        }}
        onClose={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        title={\`\u8868\u5355\`}
      >
        <Form.Item label={\`\u59D3\u540D\`} name={\`name\`}>
          <Input />
        </Form.Item>
      </ModalForm>
    </div>
  );
};
`},96312:function(t,e){e.Z=`import { Button } from 'antd';
import React from 'react';
import ModalForm from '../index';

export default () => {
  return (
    <div>
      <Button
        onClick={() => {
          ModalForm.show({});
        }}
      >
        \u6253\u5F00
      </Button>
    </div>
  );
};
`},15225:function(t,e){e.Z=`import React, { type SyntheticEvent } from 'react';
import ReactDOM from 'react-dom/client';
import { ModalForm as InternalModalForm, ModalFormProps } from './modal-form';

type ModalFormShowProps = Omit<
  ModalFormProps,
  'open' | 'afterOpenChange' | 'onClose' | 'onCancel'
> & {
  /**
   * @description \u5173\u95ED\u56DE\u8C03\uFF0C\u5982\u679C\u6709\u56DE\u8C03\u51FD\u6570\uFF0C\u8FD4\u56DE\u7ED3\u679C\u662F Promise.resolve(true) \u7684\u65F6\u5019\u5173\u95ED\u3002\u5982\u679C\u6CA1\u6709\u56DE\u8C03\u51FD\u6570\uFF0C\u76F4\u63A5\u5173\u95ED
   * @default
   */
  onClose?: (e: SyntheticEvent) => Promise<any>;
  /**
   * @description \u53D6\u6D88\u56DE\u8C03
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
      onClose={handleClose}
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
`},5331:function(t,e){e.Z=`import { FormInstance, FormProps, Modal, ModalProps } from 'antd';
import React, { FC, useRef, useState, type SyntheticEvent } from 'react';
import ModalInnerForm, { ModalInnerFormHandle } from './modal-inner-form';

export type ModalFormProps = {
  /**
   * @description \u89E6\u53D1\u6807\u7B7E
   * @default
   */
  trigger?: React.ReactElement;

  /**
   * @description \u89E6\u53D1\u6807\u7B7E\u70B9\u51FB
   * @default
   */
  onTriggerClick?: () => void;
  /**
   * @description \u63D0\u4EA4\u56DE\u8C03
   * @default
   */
  onSubmit?: (values: any) => Promise<any> | void;
  form?: FormInstance;
  formValues?: any;
  formProps?: Omit<FormProps, 'form'>;
} & ModalProps;

export const ModalForm: FC<ModalFormProps> = ({
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
`},93043:function(t,e){e.Z=`import { Form, FormProps } from 'antd';
import React, { forwardRef, useEffect, useImperativeHandle } from 'react';

export interface ModalInnerFormHandle {
  submit: () => void;
  resetFields: (fields?: any[]) => void;
}

type ModalInnerFormProps = {
  children: React.ReactElement | React.ReactNode;
  formValues?: any;
  onSubmit?: (values: any) => Promise<any> | void;
} & Omit<FormProps, 'children'>;
export const ModalInnerForm = forwardRef<
  ModalInnerFormHandle,
  ModalInnerFormProps
>(({ children, formValues, onSubmit, ...rest }, componentRef) => {
  const [form] = Form.useForm();
  /**\u652F\u6301\u81EA\u5DF1\u4F20\u5165form\uFF0C\u5916\u90E8\u4F20\u5165form\u7684\u8BDD\u4F7F\u7528\u5916\u90E8\u4F20\u5165\u7684form */
  const finalFrom = rest.form ? rest.form : form;
  useImperativeHandle(componentRef, () => {
    return {
      submit: () => {
        finalFrom
          .validateFields()
          .then((values: any) => {
            onSubmit?.(values);
          })
          .catch((ex: any) => {
            console.error(ex.message);
          });
      },
      resetFields: (fields?: any[]) => {
        finalFrom.resetFields(fields);
      },
    };
  });

  useEffect(() => {
    if (formValues) {
      finalFrom.setFieldsValue(formValues);
    }
  }, [formValues]);

  return (
    <Form {...rest} form={finalFrom}>
      {children}
    </Form>
  );
});
export default ModalInnerForm;
`}}]);
