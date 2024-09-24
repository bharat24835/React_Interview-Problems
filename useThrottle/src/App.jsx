import { useEffect, useState } from 'react'
// import useThrottle from './hooks/useThrottle';
import useThrottle from './hooks/useThrottle';


function App() {
  const [windowSize, setWindowSize] = useState({
    width : window.innerWidth,
    height : window.innerHeight,
  });

const handleResize = ()=>{
setWindowSize({
  width : window.innerWidth,
  height : window.innerHeight,
});

// here this can be any expensive operation and API call
}

const throttledHandleResize = useThrottle(handleResize , 1000) ; // (function , time )


useEffect(()=>{
  window.addEventListener("resize" , throttledHandleResize)

  return ()=>{
    window.removeEventListener("resize" , throttledHandleResize);
  }
},[])


  return (
    <>
      <h1>Window Size : {windowSize.width} * {windowSize.height} </h1>
    </>
  )
}

export default App
