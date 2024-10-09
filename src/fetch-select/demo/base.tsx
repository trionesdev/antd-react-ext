import React from 'react';
import FetchSelect from '../index';

export default () => {
  const [value, setValue] = React.useState(2);
  return (
    <FetchSelect
      fetchRequest={() => {
        return Promise.resolve([
          { id: 1, name: '小明' },
          { id: 2, name: '小红' },
        ]);
      }}
      fieldNames={{ label: 'name', value: 'id' }}
      initialValueOption={{ id: 2, name: '小红' }}
      value={value}
      onChange={setValue}
    />
  );
};
