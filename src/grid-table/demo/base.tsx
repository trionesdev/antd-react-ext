import React from 'react';
import GridTable from "../grid-table";

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

  return (
    <div>
      <GridTable columns={columns} dataSource={dataScore} />
    </div>
  );
};
