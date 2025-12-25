
import React, { useState } from 'react';
import { Radio, Switch } from 'antd';
import { ExtCheckbox } from '@trionesdev/antd-react-ext';


export default ()=>{
  const [readOnly, setReadOnly] = useState(false);
  const [value, setValue] = useState<any>();
  return (
    <>
      <div>
        <Switch value={readOnly} onChange={setReadOnly} />
      </div>
      <div>
        <ExtCheckbox readOnly={readOnly} value={1}>
          是
        </ExtCheckbox>
        <ExtCheckbox.Group
          readOnly={readOnly}
          value={value}
          onChange={(v) => {
            setValue(v);
          }}
          options={[
            {
              label: '是',
              value: 1,
            },
            {
              label: '否',
              value: 2,
            },
          ]}
        />
      </div>
    </>
  );
}
