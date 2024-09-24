import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import usePasswordGenerator from './hooks/UseGeneratePassword'

function App() {
  // const[password , setPassword] = useState("");
  const[length , setLength] = useState(6);
  const[checkbox , setCheckBox] = useState([
    {operation : 'Include UpperCase Letters' , status : false},
    {operation : 'Include LowerCase Letters' , status : false},
    {operation : 'Include Numbers' , status : false},
    {operation : 'Include Symbols' , status : false},
  ])
  const [strength  , setStrength] =useState("");  
  const[copied , setCopied] = useState(false);


  const {password , error , generatePassword} = usePasswordGenerator();

  const handleCheckBoxChange = (index)=>{
    const updatedCheckBox = [... checkbox];
    updatedCheckBox[index].status = !updatedCheckBox[index].status;
    setCheckBox(updatedCheckBox);
  }
  const handleCopy = ()=>{
    navigator.clipboard.writeText(password);
    setCopied(true);

    setTimeout(()=>{
       setCopied(false);
    } , 1000)
  }

  return (
    <div className='main'>
          <div id="box">
             {password && <div id="header">
                 <h3>{password}</h3>
                 <button id='header-button' onClick={handleCopy}>{copied ? "COPIED!" : "COPY"}</button>
             </div>}
              <div id="header-bottom">
                <h2>Character Length</h2>
                <span id ='length'>{length}</span>
              </div>
              <input type="range" name="" id="range" min={4} max={20} onChange={(e)=>{setLength(e.target.value)}}  value={length} />

              <div id="checkboxes">
                 {checkbox.map((op , index)=>(
                  <div key={index} className='checkboxes-div'>
                  <input type="checkbox" name="" id="" checked = {op.status} onChange={(e)=>{handleCheckBoxChange(index)}} />
                  <label >{op.operation}</label>
                  </div>
                 ))}
              </div>
             {strength &&  <div id="strength">
                <label >Strength : </label>
                <label >{strength}</label>
              </div>}
             {error &&  <div id="error">
                <label>{error}</label>
              </div>}
              <button id='generatePassword' onClick={()=>{generatePassword(checkbox , length)}}>Generate PassWord</button>

            </div>     
    </div>
  )
}

export default App
