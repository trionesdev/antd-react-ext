import React from "react";
import {PageHeader} from "@moensun/antd-react-ext";
import {Button} from "antd";

export default () => <PageHeader title={`标题`} subTitle={`副标题`}
                                 extra={[<Button key={`pub-btn`} type={`primary`}>发布</Button>]}/>;
