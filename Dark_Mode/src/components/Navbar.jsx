import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { useTheme } from '../context/useTheme'

const Navbar = () => {
    const {theme , toggleTheme} = useTheme();
    
    
    
  return (
    <div>
      <nav>
        <div className='app'>
            <Link to  = '/' style={{textDecoration : 'none'}}>Home</Link>
            <Link to  = '/about' style={{textDecoration : 'none'}}>About</Link>
            <Link to  = '/blog' style={{textDecoration : 'none'}}>Blog</Link>

            <button className='btn' onClick={toggleTheme}>{theme}</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
