import { FieldsMapping } from '@trionesdev/antd-react-ext';
import React from 'react';
import { Column } from '../fields-mapping';

export default () => {
  const sourceColumns: Column[] = [
    {
      key: 'field',
      title: '字段',
      width: 80,
      primaryKey: true,
    },
    {
      key: 'type',
      title: '类型',
      width: 80,
    },
  ];
  const sourceData = [
    {
      field: 'id',
      type: 'string',
    },
    {
      field: 'name',
      type: 'string',
    },
    {
      field: 'age',
      type: 'int',
    },
  ];

  const targetColumns: Column[] = [
    {
      key: 'field',
      title: '字段',
      width: 80,
      primaryKey: true,
    },
    {
      key: 'type',
      title: '类型',
      width: 80,
    },
  ];
  const targetData = [
    {
      field: 'id',
      type: 'string',
    },

    {
      field: 'age',
      type: 'int',
    },
    {
      field: 'name',
      type: 'string',
    },
  ];

  const mappingData = [
    { sourceKey: 'id', targetKey: 'id' },
    // {sourceKey:'age',targetKey:'age'},
    // {sourceKey:'name',targetKey:'name'},
  ];

  return (
    <FieldsMapping
      sourceColumns={sourceColumns}
      sourceData={sourceData}
      targetColumns={targetColumns}
      targetData={targetData}
      mappingData={mappingData}
    />
  );
};
