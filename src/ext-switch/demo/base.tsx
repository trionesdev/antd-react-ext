import React, { useState } from 'react';
import { Switch } from 'antd';
import { ExtSwitch } from '@trionesdev/antd-react-ext';

export default ()=>{
  const [readOnly, setReadOnly] = useState(false);
  const [value, setValue] = useState<any>();
  return (
    <>
      <div>
        <Switch value={readOnly} onChange={setReadOnly} />
      </div>
      <ExtSwitch value={ value} checkedChildren={'是'} unCheckedChildren={'否'} readonly={readOnly} onChange={setValue}/>
    </>
  );
}
