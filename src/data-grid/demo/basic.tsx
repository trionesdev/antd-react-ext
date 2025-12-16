import React from 'react';
import  {DataGrid, DataGridColumnProps } from '@trionesdev/antd-react-ext';
import { data, data2 } from './data';

export default ()=>{


  const columns: DataGridColumnProps[] = [
    {
      title: 'First Name',
      dataIndex: 'firstName',
      width: 150,
      fixed: 'left',
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      width: 150,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      width: 150,
    },
    {
      title: 'Visits',
      dataIndex: 'visits',
      // width: 150,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      width: 150,
      fixed: 'right',
    },
    {
      title: 'Progress',
      dataIndex: 'progress',
      width: 150,
      fixed: 'right',
    },
  ];

  return <div>
    <DataGrid dataSource={data2} columns={columns}/>
  </div>
}
