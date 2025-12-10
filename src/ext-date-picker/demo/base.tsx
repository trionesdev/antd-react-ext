import React, { useState } from 'react';
import { Input, Switch } from 'antd';
import { ExtDatePicker, ExtInput } from '@trionesdev/antd-react-ext';

export default () => {
  const [readOnly, setReadOnly] = useState(false);
  const [value, setValue] = useState<any>();
  return (
    <div>
      <div>
        <Switch value={readOnly} onChange={setReadOnly} />
      </div>
      <div>
        <ExtDatePicker readonly={readOnly} />
        <ExtDatePicker.RangePicker readonly={readOnly} />
      </div>
    </div>
  );
};
