import { GridTable } from '@trionesdev/antd-react-ext';
import { Table } from 'antd';
import React from 'react';
import { data200 } from './data';

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
      <div style={{ height: 300 }}>
        <GridTable fit={true} columns={columns} dataSource={dataScore} />
      </div>
      <div style={{ height: 300 }}>
        <GridTable
          fit={true}
          columns={columns}
          dataSource={data200}
          summary={(pageData) => {
            return (
              <Table.Summary fixed>
                <Table.Summary.Row>
                  <Table.Summary.Cell index={0}></Table.Summary.Cell>
                  <Table.Summary.Cell index={1}>年龄</Table.Summary.Cell>
                </Table.Summary.Row>
              </Table.Summary>
            );
          }}
        />
      </div>
    </div>
  );
};
