import { useCssInJs } from '@trionesdev/antd-react-ext';
import classNames from 'classnames';
import React, { FC } from 'react';
import { genFieldsetStyle } from './styles';

type FieldsetProps = {
  children?: React.ReactNode;
  title?: React.ReactNode;
};
const Fieldset: FC<FieldsetProps> = ({ children, title }) => {
  const prefixCls = 'triones-ant-fieldset';
  const { hashId, wrapSSR } = useCssInJs({
    prefix: prefixCls,
    styleFun: genFieldsetStyle,
  });
  return wrapSSR(
    <div className={classNames(prefixCls, hashId)}>
      {title && (
        <div className={classNames(`${prefixCls}-title`, hashId)}>{title}</div>
      )}
      {children}
    </div>,
  );
};

export default Fieldset;
