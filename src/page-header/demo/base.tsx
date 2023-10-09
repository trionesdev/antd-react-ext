import React from "react";
import {Button} from "antd";
import PageHeader from "../page-header";

export default () => <PageHeader title={`标题`} subTitle={`副标题`}
                                 extra={[<Button key={`pub-btn`} type={`primary`}>发布</Button>]}/>;
