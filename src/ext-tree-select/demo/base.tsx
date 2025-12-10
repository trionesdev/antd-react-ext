import React, {useState} from "react";
import {Switch} from "antd";
import {ExtTreeSelect} from "@trionesdev/antd-react-ext";

export default ()=>{
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
        <ExtTreeSelect
          style={{width: 200}}
          readonly={readOnly}
          value={value}
          onChange={setValue}
          treeData={options}
        />
        <ExtTreeSelect
          style={{width: 200}}
          readonly={readOnly}
          value={value2}
          onChange={setValue2}
          treeData={options}
          multiple
        />
      </div>
    </div>
  )
}
