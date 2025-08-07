import React, { useState } from 'react';
import { Input, Switch } from 'antd';
import { ExtInput } from '@trionesdev/antd-react-ext';

export default () => {
  const [readOnly, setReadOnly] = useState(false);
  const [value, setValue] = useState<any>();
  return (
    <div>
      <div>
        <Switch value={readOnly} onChange={setReadOnly} />
      </div>
      <div>
        <ExtInput
          // value={value}
          onChange={(e) => {
            console.log(e.target.value);
            setValue(e.target.value);
          }}
          readOnly={readOnly}
        />
      </div>
    </div>
  );
};
