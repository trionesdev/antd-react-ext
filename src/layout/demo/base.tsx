import React from "react";
import {Layout} from "@moensun/antd-react-ext";

export default () => {
  return <div>
    <div style={{height: 400,marginBottom:16}}>
      <Layout style={{backgroundColor:'#eee'}}>
        <Layout.Item style={{backgroundColor:'#6e6b6b'}}>sss</Layout.Item>
        <Layout.Item auto style={{backgroundColor:'#8d7777'}}>auto</Layout.Item>
      </Layout>
    </div>
    <div style={{height: 400,marginBottom:16}}>
      <Layout direction={`vertical`} style={{backgroundColor:'#eee'}}>
        <Layout.Item style={{backgroundColor:'#6e6b6b'}}>sss</Layout.Item>
        <Layout.Item auto style={{backgroundColor:'#8d7777'}}>auto</Layout.Item>
      </Layout>
    </div>
    <div style={{height: 400,marginBottom:16}}>
      <Layout style={{backgroundColor:'#eee'}}>
        <Layout.Sider style={{backgroundColor:'#6e6b6b'}}>sss</Layout.Sider>
        <Layout.Item auto style={{backgroundColor:'#8d7777'}}>auto</Layout.Item>
      </Layout>
    </div>
  </div>
}
