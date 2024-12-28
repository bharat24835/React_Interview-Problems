import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProgressBar from './components/ProgressBar/ProgressBar'
import DownloadButton from './components/Download-Button/DownloadButton'
import { VALUE } from './contants'
import PauseButton from './components/Pause-Button/PauseButton'

function App() {
  const [value, setValue] = useState(0)
  const[isDownloading , setIsDownloading] = useState(false);
  // 0 for stop , 1 for pause , 2 for countinue

  useEffect(()=>{
    let temp  ;
    if(isDownloading){
      temp = setInterval(()=>{
        setValue((prev)=>prev+1);
      } , 100)
    }
    
    return ()=>{
      if(temp)
      clearInterval(temp);
    }

  } , [isDownloading])


  return (
    <div id='main'>
      <div id='container'>
      <h1>Progress Bar</h1>
      <ProgressBar value = {value} />
      
      <DownloadButton isDownloading = {isDownloading} setIsDownloading = {setIsDownloading}/>
      {/* {isDownloading && (
        <PauseButton setIsDownloading = {setIsDownloading}/>
      )} */}
      
      
      </div>

     
      
    </div>
  )
}

export default App
