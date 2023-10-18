import React, {FC, isValidElement, useEffect, useState} from "react";
import _ from "lodash";
import {Button, Col, Row, Space} from "antd";
import {CheckOutlined, CloseOutlined} from "@ant-design/icons";
import {useCssInJs} from "../hooks";
import {genEditableDescStyle} from "./styles";
import classNames from "classnames";

export type EditableDescProps = {
  children?: React.ReactNode
  /**
   * @description 是否编辑状态
   * @default false
   */
  editing?: boolean
  /**
   * @description 值
   * @default
   */
  value?: any,
  /**
   * @description 值渲染
   * @default
   */
  valueRender?: ((value?: any) => React.ReactNode) | React.ReactNode
  onChange?: (val: any) => void
  /**
   * @description 占位符
   * @default
   */
  placeholder?: React.ReactNode
  /**
   * @description 点击进入编辑
   * @default false
   */
  clickEdit?: boolean
  actionControl?: boolean
  onOk?: (val: any) => Promise<void>
  onCancel?: () => void
}
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
                                                      onCancel
                                                    }) => {
  const [scopeEditing, setScopeEditing] = useState(editing)
  const [scopeValue, setScopeValue] = useState(value)
  const prefixCls = "ms-ant-editable-desc"
  const {hashId, wrapSSR} = useCssInJs({prefix: prefixCls, styleFun: genEditableDescStyle})

  const handleWrapperClick = () => {
    if (clickEdit) {
      setScopeEditing(true)
    }
  }

  const handleChange = (val: any) => {
    if (actionControl) {
      if (val?.target) {
        setScopeValue((val.target as HTMLInputElement).value)
      } else {
        setScopeValue(val)
      }

    } else {
      if (onChange) {
        onChange(val)
      }
    }
  }

  let cloneChild = null
  if (children && isValidElement(children)) {
    let childProps = _.cloneDeep(children.props);
    _.assign(childProps, {
      onChange: (val: any) => {
        handleChange(val)
      },
      value: scopeValue
    })

    cloneChild = React.createElement(children.type, childProps)
  }

  const handleOk = () => {
    let okAction = onOk?.(scopeValue) || Promise.resolve()
    okAction.then(() => {
      setScopeEditing(false)
      onChange?.(scopeValue)
    })
  }
  const handleCancel = () => {
    setScopeEditing(false)
    setScopeValue(value)
    onCancel?.()
  }

  useEffect(() => {
    if (!_.isEqual(value, scopeValue)) {
      setScopeValue(value)
    }
  }, [value])

  useEffect(() => {
    setScopeEditing(editing)
  }, [editing]);

  const text = valueRender ? (typeof valueRender === 'function' ? valueRender(scopeValue) : valueRender) : scopeValue

  return wrapSSR(
    <Row gutter={4} className={classNames(prefixCls, hashId)}>
      <Col flex={`auto`}>
        {scopeEditing ? cloneChild :
          <div className={classNames(`${prefixCls}-render`, {'editable': clickEdit}, hashId)}
               onClick={handleWrapperClick}>{scopeValue ? text : placeholder}</div>}
      </Col>
      {actionControl && scopeEditing && <Col>
        <Space>
          <Button size={`small`} type={`text`} icon={<CheckOutlined rev={undefined}/>} onClick={handleOk}/>
          <Button size={`small`} type={`text`} icon={<CloseOutlined rev={undefined}/>} onClick={handleCancel}/>
        </Space>
      </Col>}
    </Row>
  )
}
