import { AppToolbar } from '@moensun/antd-react-ext';
import React from 'react';
import {Button} from "antd";

export default () => <AppToolbar title={'个人中心'} extra={[<Button key={`settings-btn`} type={`primary`}>设置</Button>]}/>;
