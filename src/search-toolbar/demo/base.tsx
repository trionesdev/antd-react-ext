import React from "react";
import {Input} from "antd";
import {SearchToolbar, SearchToolbarItem} from "@moensun/antd-react-ext";

export default () => {
  const items: SearchToolbarItem[] = [
    {
      label: '年龄',
      name: 'age',
      children: <Input/>
    },
    {
      label: '姓名',
      name: 'name',
      children: <Input/>
    },
    {
      label: '手机号码',
      name: 'phone',
      children: <Input/>
    },
    {
      label: '地址',
      name: 'addr',
      children: <Input/>
    },
    {
      label: '邮箱',
      name: 'email',
      children: <Input/>
    }
  ]
  return <SearchToolbar
    span={6} xxl={6} xl={6} lg={6} md={8} sm={12} xs={24}
    items={items}
  />
}
