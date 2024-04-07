import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Button, Col, Row, Space } from 'antd';
import classNames from 'classnames';
import _ from 'lodash';
import React, { FC, isValidElement, useEffect, useState } from 'react';
import { useCssInJs } from '../hooks';
import { genEditableDescStyle } from './styles';

export type EditableDescProps = {
  children?: React.ReactNode;
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
   * @description 动作控制  为ture 的时候，不会直接变跟，需要手动确认或取消
   * @default false
   */
  actionControl?: boolean;
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
  placeholder,
  clickEdit = false,
  actionControl = false,
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
    if (actionControl) {
      if (val?.target) {
        setScopeValue((val.target as HTMLInputElement).value);
      } else {
        setScopeValue(val);
      }
    } else {
      if (onChange) {
        onChange(val);
      }
    }
  };

  let cloneChild = null;
  if (children && isValidElement(children)) {
    let childProps = _.cloneDeep(children.props);
    _.assign(childProps, {
      onChange: (val: any) => {
        handleChange(val);
      },
      value: scopeValue,
    });

    cloneChild = React.createElement(children.type, childProps);
  }

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
    <Row gutter={4} className={classNames(prefixCls, hashId)}>
      <Col flex={`auto`}>
        {scopeEditing ? (
          cloneChild
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
      </Col>
      {actionControl && scopeEditing && (
        <Col>
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
        </Col>
      )}
    </Row>,
  );
};
