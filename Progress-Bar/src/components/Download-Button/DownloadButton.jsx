import React from 'react'
import './download_button.css'

const DownloadButton = ({isDownloading , setIsDownloading} ) => {
  return (
    <button id='button' onClick={()=>setIsDownloading((prev)=>!prev)}  style={{"backgroundColor" : isDownloading==2 ? "#ff5733" :"#00c251"  } }   >
      {isDownloading== 2 ? "Cancel the Download" : "Click here to Download"}
    </button>
  )
}

export default DownloadButton
