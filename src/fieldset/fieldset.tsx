import { useCssInJs } from '@trionesdev/antd-react-ext';
import classNames from 'classnames';
import React, { FC } from 'react';
import { genFieldsetStyle } from './styles';

export type FieldsetProps = {
  children?: React.ReactNode;
  title?: React.ReactNode;
  legend?: React.ReactNode;
};
export const Fieldset: FC<FieldsetProps> = ({ children, title, legend }) => {
  const prefixCls = 'triones-ant-fieldset';
  const { hashId, wrapSSR } = useCssInJs({
    prefix: prefixCls,
    styleFun: genFieldsetStyle,
  });
  return wrapSSR(
    <div className={classNames(prefixCls, hashId)}>
      {(title || legend) && (
        <div className={classNames(`${prefixCls}-title`, hashId)}>
          {title || legend}
        </div>
      )}
      {children}
    </div>,
  );
};
