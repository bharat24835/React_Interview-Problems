import React from 'react'
import './puasebutton.css'

const PauseButton = ({setIsDownloading}) => {
  return (
    <button onClick={()=>{setIsDownloading(1)}}>
      Pause the Download
    </button>
  )
}

export default PauseButton
