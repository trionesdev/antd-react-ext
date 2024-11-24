import { CheckOutlined, CloseOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import classNames from 'classnames';
import _ from 'lodash';
import React, { FC, isValidElement, useEffect, useState } from 'react';
import { useCssInJs } from '../hooks';
import { genEditableDescStyle } from './styles';

export type EditableDescProps = {
  children?: React.ReactElement;
  /**
   * @description 是否编辑状态
   * @default false
   */
  editing?: boolean;
  /**
   * @description 值
   * @default
   */
  value?: any;
  /**
   * @description 值渲染
   * @default
   */
  valueRender?: ((value?: any) => React.ReactNode) | React.ReactNode;
  onChange?: (val: any) => void;
  /**
   * @description 将按钮宽度调整为其父宽度的选项
   * @default
   */
  block?: boolean;
  /**
   * @description 占位符
   * @default
   */
  placeholder?: React.ReactNode;
  /**
   * @description 点击进入编辑,如果设置为true,建议每个每个组件配合 afterEditingChange 独立控制
   * @default false
   */
  clickEdit?: boolean;
  /**
   * @description 手动变更，  为ture 的时候，修改后的值不会直接变化，需要手动确认或取消
   * @default false
   */
  manualChange?: boolean;
  /**
   * @description 是否展示编辑Icon
   * @default false
   */
  editIcon?: boolean;
  /**
   * @description 确定时调用
   * @default
   */
  onOk?: (val: any) => Promise<void>;
  /**
   * @description 取消时调用
   * @default false
   */
  onCancel?: () => void;
  /**
   * @description 编辑状态改变时调用
   * @param editing
   */
  afterEditingChange?: (editing: boolean) => void;
};

export const EditableDesc: FC<EditableDescProps> = ({
  children,
  editing = false,
  value,
  valueRender,
  onChange,
  block = false,
  placeholder,
  clickEdit = false,
  manualChange = false,
  editIcon = false,
  onOk,
  onCancel,
  afterEditingChange,
}) => {
  const [scopeEditing, setScopeEditing] = useState(editing);
  const [scopeValue, setScopeValue] = useState(value);
  const prefixCls = 'triones-ant-editable-desc';
  const { hashId, wrapSSR } = useCssInJs({
    prefix: prefixCls,
    styleFun: genEditableDescStyle,
  });

  const handleWrapperClick = () => {
    if (clickEdit) {
      setScopeEditing(true);
    }
  };

  const handleChange = (val: any) => {
    if (manualChange) {
      if (val?.target) {
        setScopeValue((val.target as HTMLInputElement).value);
      } else {
        setScopeValue(val);
      }
    } else {
      if (onChange) {
        onChange(val);
        if (val?.target) {
          setScopeValue((val.target as HTMLInputElement).value);
        } else {
          setScopeValue(val);
        }
      }
    }
  };

  const handleOk = () => {
    let okAction = onOk?.(scopeValue) || Promise.resolve();
    okAction.then(() => {
      setScopeEditing(false);
      onChange?.(scopeValue);
    });
  };
  const handleCancel = () => {
    setScopeEditing(false);
    setScopeValue(value);
    onCancel?.();
  };

  useEffect(() => {
    console.log('value', value, scopeValue);
    if (!_.isEqual(value, scopeValue)) {
      setScopeValue(value);
    }
  }, [value]);

  useEffect(() => {
    setScopeEditing(editing);
  }, [editing]);

  useEffect(() => {
    afterEditingChange?.(scopeEditing);
  }, [scopeEditing]);

  const text = valueRender
    ? typeof valueRender === 'function'
      ? valueRender(scopeValue)
      : valueRender
    : scopeValue;

  return wrapSSR(
    <div
      className={classNames(prefixCls, hashId)}
      style={{ width: block ? '100%' : 'inherit' }}
    >
      <span className={classNames(`${prefixCls}-col-auto`, hashId)}>
        {scopeEditing ? (
          children && isValidElement(children) ? (
            React.cloneElement(children as React.ReactElement, {
              onChange: handleChange,
              value: scopeValue,
            })
          ) : null
        ) : (
          <div
            className={classNames(
              `${prefixCls}-render`,
              { editable: clickEdit },
              hashId,
            )}
            onClick={handleWrapperClick}
          >
            {scopeValue ? text : placeholder}
          </div>
        )}
      </span>
      {!scopeEditing && editIcon && (
        <Button
          size={`small`}
          type={`text`}
          icon={<EditOutlined rev={undefined} />}
          onClick={() => {
            setScopeEditing(true);
          }}
        />
      )}
      {manualChange && scopeEditing && (
        <Space>
          <Button
            size={`small`}
            type={`text`}
            icon={<CheckOutlined rev={undefined} />}
            onClick={handleOk}
          />
          <Button
            size={`small`}
            type={`text`}
            icon={<CloseOutlined rev={undefined} />}
            onClick={handleCancel}
          />
        </Space>
      )}
    </div>,
  );
};
