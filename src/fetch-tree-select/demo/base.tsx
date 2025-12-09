import { FetchTreeSelect } from '@trionesdev/antd-react-ext';
import React from 'react';

export default () => {
  const [value, setValue] = React.useState(2);
  return (
    <FetchTreeSelect
      style={{ width: 300 }}
      fetchRequest={() => {
        return Promise.resolve([
          { id: 1, name: '小明', children: [{ id: 11, name: '小明1' }] },
          { id: 2, name: '小红' },
        ]);
      }}
      fieldNames={{ label: 'name', value: 'id' }}
      initialValueOptions={[{ id: 2, name: '小红' }]}
      value={value}
      onChange={setValue}
    />
  );
};
