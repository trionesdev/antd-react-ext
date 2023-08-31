import {GridTable, TableToolbar} from '@moensun/antd-react-ext';
import React from 'react';
import {Button} from "antd";

export default () => {
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
    },
  ];

  const dataScore = [
    { name: '小明', age: 19 },
    { name: '小王', age: 38 },
  ];

 const tableBar =  <TableToolbar  title="Table Title"
                extra={[<Button key={`create-user`}>新建用户</Button>]}/>

  return <GridTable style={{border: '1px #bcbcbc solid'}} toolbar={tableBar} columns={columns} dataSource={dataScore} />

};
