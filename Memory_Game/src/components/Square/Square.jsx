import React from 'react'
import './Square.css'

const Square = ({num}) => {
  return (
    <div>
       <div className='square'>
         {num}        
        </div>
      
    </div>
  )
}

export default Square
