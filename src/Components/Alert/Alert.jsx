import React, { forwardRef, useImperativeHandle, useState } from 'react'
import "./Alert.css"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
const Alert = forwardRef((props,ref)=> {
    const [showAlert,setShowAlert]=useState(false);

    useImperativeHandle(ref,()=>({
        showalert(){
            setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false)
        }, 3000);
        }
    }))
    // style={{backgroundColor: props.type==="success" ? "#00f593" : "#ff0033"}}
  return (
    <div className='Alert' 
    id={showAlert ? 'show' : 'hide'}>
        <div className="simbol">
        {props.type==="success" ? <CheckCircleIcon className='successIcon'/> : <h1>&#x2613;</h1>}
        </div>
        <div className="message">{props.message}</div>
    </div>
  )
})

export default Alert
