import {SearchToolbar, SearchToolbarItem} from "@moensun/antd-react-ext";
import React from "react";
import {Input} from "antd";

export default () => {
  const items: SearchToolbarItem[] = [
    {
      label: '年龄',
      name: 'age',
      children: <Input/>
    }
  ]
  return <SearchToolbar
    span={6} xxl={4} xl={6} lg={6} md={8} sm={12} xs={24}
    items={items}
  />
}
