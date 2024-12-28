import React, {  useEffect, useState } from 'react'
import './style.css'

const ProgressBar = ({value}) => {
  
  const[percent  , setPercent] = useState(value);

  useEffect(()=>{
   setPercent(Math.min(100 , Math.max(value , 0)));
  } , [value])

  return (
    <div id='progress' >
     <span style={{ color : percent > 49 ? 'white':'black'}}> {percent}</span>
     <div style={{width : `${percent}%` }}/>
    </div>
  )
}

export default ProgressBar
