import { ExtSelect } from '@trionesdev/antd-react-ext/ext-select';
import { Switch } from 'antd';
import React, { useState } from 'react';

export default () => {
  const [readOnly, setReadOnly] = useState(false);
  const [options, setOptions] = React.useState([
    { value: 1, label: '小明' },
    { value: 2, label: '小红' },
  ]);
  return (
    <div>
      <div>
        <Switch value={readOnly} onChange={setReadOnly} />
      </div>
      <div>
        <ExtSelect readOnly={readOnly} options={options} />
      </div>
    </div>
  );
};
