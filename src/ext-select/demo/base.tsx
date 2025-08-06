import {Switch} from 'antd';
import React, {useState} from 'react';
import {ExtSelect} from "../ExtSelect";

export default () => {
  const [readOnly, setReadOnly] = useState(false);
  const [value, setValue] = useState();
  const [value2, setValue2] = useState();
  const [options, setOptions] = React.useState([
    {value: 1, label: '小明'},
    {value: 2, label: '小红'},
  ]);
  return (
    <div>
      <div>
        <Switch value={readOnly} onChange={setReadOnly}/>
      </div>
      <div>
        <ExtSelect style={{width: 200}} placeholder="请选择" readOnly={readOnly} options={options}
                   value={value}
                   onChange={setValue}
        />
        <ExtSelect style={{width: 200}} placeholder="请选择" readOnly={readOnly} options={options}
                   mode="multiple"
                   value={value2} onChange={setValue2}
        />
        <ExtSelect style={{width: 200}} placeholder="请选择" readOnly={true} options={options}
                   value={1}
                   onChange={setValue}
        />
      </div>
    </div>
  );
};
