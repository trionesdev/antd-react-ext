import React, {useState} from "react";
import {Input, Switch} from "antd";
import {ExtInputNumber} from "@trionesdev/antd-react-ext";

export default () => {
  const [readOnly, setReadOnly] = useState(false);
  const [value, setValue] = useState<any>();
  return <div>
    <div>
      <Switch value={readOnly} onChange={setReadOnly}/>
    </div>
    <div>
      <ExtInputNumber readOnly={readOnly} value={value} onChange={(v) => {
        setValue(v)
      }}/>
      <ExtInputNumber readOnly={readOnly} value={1} onChange={(v) => {
        setValue(v)
      }}/>
    </div>
  </div>
}
