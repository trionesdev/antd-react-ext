import {TableToolbar} from '@moensun/antd-react-ext';
import React from 'react';
import {Button} from "antd";

export default () => <TableToolbar style={{border: '1px #bcbcbc solid'}} title="Table Title"
                                   tools={[<Button key={`create-user`}>新建用户</Button>]}/>;
