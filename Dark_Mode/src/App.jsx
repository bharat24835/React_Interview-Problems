import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Navbar from './components/Navbar'
import { ThemeProvider, useTheme } from './context/useTheme'

function App() {
  
  

  return(
  <ThemeProvider>
     <BrowserRouter>
  {/* {Navbar} */}
  {/* {Routes} */}

 <Navbar/>
  <Routes>
    <Route path='/' element= {<Home/>} />
    <Route path='/about' element= {<About/>} />
    <Route path='/blog' element= {<Blog/>} />

  </Routes>
  </BrowserRouter>
  </ThemeProvider>
  )
}

export default App
