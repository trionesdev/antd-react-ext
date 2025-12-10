import { ExtRadio } from '@trionesdev/antd-react-ext';
import React, { useState } from 'react';
import { Radio, Switch } from 'antd';


export default ()=>{
  const [readOnly, setReadOnly] = useState(false);
  const [value, setValue] = useState<any>();
  return (
    <>
      <div>
        <Switch value={readOnly} onChange={setReadOnly} />
      </div>
      <div>
        <ExtRadio readonly={readOnly} value={1}>
          是
        </ExtRadio>
        <ExtRadio.Group
          readonly={readOnly}
          value={value}
          onChange={(v) => {
            setValue(v.target.value);
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
        >
        </ExtRadio.Group>
      </div>
    </>
  );
}
