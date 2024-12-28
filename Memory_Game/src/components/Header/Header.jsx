import React, { useEffect } from 'react'
import './header.css'

const Header = ({size , setSize , setValue}) => {
  useEffect(()=>{
    let a = [];
        for(let i = 0 ; i<size; i++){
            a.push(i+1);
        }
        setValue(a);
        // console.log(value);
        

  } , [size , setSize])
  return (
    <div className='nav'>
         <h1>Memory Game</h1> <br />
            <span>Grid size :- 
              <input type="number" value={size} onChange={(e)=>{setSize(e.target.value)}} />
            </span>
      
    </div>
  )
}

export default Header
