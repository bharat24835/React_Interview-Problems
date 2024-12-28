import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HeartIcon, SpinnerIcon } from './icons/Icons'

function App() {
  const [liked , setLiked] = useState(false);
  const[isFetching , setIsFetching] = useState(false);
  const[error   , setError] = useState(null);

  const handleLikeUnLike = async()=>{
    setIsFetching(true)
    setError(null);
    
    try {
      const res = await fetch("https://www.greatfrontend.com/api/questions/like-button" , {
        method : "POST",
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify({
          action : liked ? "unlike" : "like"
        })
      })

      if(res.status >=200 && res.status < 300){
        setLiked(!liked);
      }
      else{
        const response = await res.json();
        setError(response.message);
        return;
      }
      
    } finally{
      setIsFetching(false);
    }

    
  }
  

  return (
    <div className='app'>
     <button className={`btn ${liked  ? 'liked' : ""}`} onClick={handleLikeUnLike}>
      {isFetching ? <SpinnerIcon/> : <HeartIcon/>}  <span>{liked ? "Liked" : "Like"}</span>
     </button>
     {error && <div>{error}</div>}
    
    </div>
  )
}

export default App
