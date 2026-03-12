import { GridTable } from '@trionesdev/antd-react-ext';
import React from 'react';
import { data } from './data';

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

 

  return (
    <div>
      <div style={{ height: 300 }}>
        <GridTable fit={true} columns={columns} dataSource={data} />
      </div>
      <div style={{ height: 300 }}>
        <GridTable
          fit={true}
          resizable={true}
          columns={columns}
          dataSource={data}
        />
      </div>
    </div>
  );
};
