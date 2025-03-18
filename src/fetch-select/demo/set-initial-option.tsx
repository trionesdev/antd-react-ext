import { Button } from 'antd';
import React, { useState } from 'react';
import FetchSelect from '../index';

export default () => {
  const [value, setValue] = React.useState(3);
  const [initialValueOption, setInitialValueOption] = useState<any>();
  return (
    <div>
      <FetchSelect
        fetchRequest={() => {
          return Promise.resolve([
            { id: 1, name: '小明' },
            { id: 2, name: '小红' },
          ]);
        }}
        fieldNames={{ label: 'name', value: 'id' }}
        dropdownFetch={true}
        initialValueOption={initialValueOption}
        fixedOptions={[{ id: 4, name: '小蓝' }]}
        value={value}
        onChange={setValue}
      />
      <Button
        onClick={() => {
          setInitialValueOption({ id: 3, name: '小红' });
        }}
      >
        设置初始选项
      </Button>
    </div>
  );
};
