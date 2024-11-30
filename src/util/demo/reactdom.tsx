import React, {useRef} from "react"
import {Button} from "antd";
import {ReactDomUtils} from "@trionesdev/antd-react-ext";

const El = ({onDestroy}:{onDestroy?:()=>void}) => {
  return <div>ReactDomUtils <Button onClick={onDestroy}>关闭</Button> </div>
}

export default () => {
  const devRef = useRef<any>()

  return <>
    <div ref={devRef}></div>
    <Button onClick={()=>{
      ReactDomUtils.render(<El/>,devRef.current)
    }}>点击</Button>
  </>
}
