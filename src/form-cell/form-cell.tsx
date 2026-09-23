import { useCssInJs } from '@trionesdev/antd-react-ext';
import { ConfigProvider } from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import { FormItemInputContext, VariantContext } from 'antd/es/form/context';
import classNames from 'classnames';
import React, { FC, useContext, useMemo } from 'react';
import { genFormCellStyle } from './styles';

export type FormCellVariant =
  | 'outlined'
  | 'filled'
  | 'borderless'
  | 'underlined';

export type FormCellStatus = 'error' | 'warning';

export type FormCellProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'prefix'> & {
  /**
   * @description 类名
   * @default
   */
  className?: string;
  /**
   * @description 样式
   * @default
   */
  style?: React.CSSProperties;
  children?: React.ReactNode;
  /**
   * @description 展示内容，优先使用 children
   * @default
   */
  value?: React.ReactNode;
  /**
   * @description 空内容时的占位符
   * @default
   */
  placeholder?: React.ReactNode;
  /**
   * @description 前缀
   * @default
   */
  prefix?: React.ReactNode;
  /**
   * @description 后缀
   * @default
   */
  suffix?: React.ReactNode;
  /**
   * @description 大小
   * @default medium
   */
  size?: SizeType;
  /**
   * @description 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 形态变体，与 antd Input / Select 一致
   * @default outlined
   */
  variant?: FormCellVariant;
  /**
   * @description 校验状态，未传入时会读取 Form.Item 上下文
   * @default
   */
  status?: FormCellStatus;
};

const isEmptyNode = (node: React.ReactNode) => {
  if (node === undefined || node === null || node === false || node === '') {
    return true;
  }
  if (Array.isArray(node)) {
    return node.every(isEmptyNode);
  }
  return false;
};

export const FormCell: FC<FormCellProps> = ({
  className,
  style,
  size,
  value,
  placeholder,
  prefix,
  suffix,
  disabled,
  variant,
  status,
  children,
  ...rest
}) => {
  const { componentDisabled, componentSize } = ConfigProvider.useConfig();
  const { variant: configVariant } = useContext(ConfigProvider.ConfigContext);
  const formVariant = useContext(VariantContext);
  const { status: contextStatus } = useContext(FormItemInputContext);

  const mergedSize = size ?? componentSize;
  const mergedDisabled = disabled ?? componentDisabled ?? false;
  const mergedVariant = variant ?? formVariant ?? configVariant ?? 'outlined';
  const mergedStatus =
    status ??
    (contextStatus === 'error' || contextStatus === 'warning'
      ? contextStatus
      : undefined);

  const prefixCls = 'triones-ant-form-cell';
  const { hashId } = useCssInJs({
    prefix: prefixCls,
    styleFun: genFormCellStyle,
  });

  const sizeCls = useMemo(() => {
    switch (mergedSize) {
      case 'small':
        return `${prefixCls}-sm`;
      case 'large':
        return `${prefixCls}-lg`;
      default:
        return '';
    }
  }, [mergedSize]);

  const content = children ?? value;
  const empty = isEmptyNode(content);

  return (
    <div
      {...rest}
      style={style}
      aria-disabled={mergedDisabled || undefined}
      className={classNames(
        prefixCls,
        `${prefixCls}-${mergedVariant}`,
        sizeCls,
        {
          [`${prefixCls}-disabled`]: mergedDisabled,
          [`${prefixCls}-status-${mergedStatus}`]: mergedStatus,
          [`${prefixCls}-affix`]: prefix || suffix,
          [`${prefixCls}-clickable`]: !!rest.onClick,
        },
        className,
        hashId,
      )}
    >
      {prefix && (
        <span className={classNames(`${prefixCls}-prefix`, hashId)}>
          {prefix}
        </span>
      )}
      <span className={classNames(`${prefixCls}-content`, hashId)}>
        {empty ? (
          <span className={classNames(`${prefixCls}-placeholder`, hashId)}>
            {placeholder}
          </span>
        ) : (
          content
        )}
      </span>
      {suffix && (
        <span className={classNames(`${prefixCls}-suffix`, hashId)}>
          {suffix}
        </span>
      )}
    </div>
  );
};
