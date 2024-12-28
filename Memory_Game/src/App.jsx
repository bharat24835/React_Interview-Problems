import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Square from './components/Square/Square';

function App() {
  const [count, setCount] = useState(0)
  const[size , setSize] = useState(0);
  const[value  , setValue ]= useState([]);
  const[data , setData ] = useState([]);
 
  useEffect(()=>{
    let a = [];
    for(let i = 0 ; i<size; i++){
        a.push(i+1);
        a.push(i+1);
    }
    setData(a);

  } ,[ size , setSize ])



  // const randomIndex = Math.floor(Math.random() * array.length);

  const chooseNumber  = ()=>{
    const randomIndex = Math.floor(Math.random() * data.length);
    const d = data[randomIndex];
    const newData = data.filter((input , index)=>  index != randomIndex)
    setData(newData);
    return d;
  }

 


  return (
    <div className='div'>
           <Header size = {size} setSize={setSize} setValue ={setValue} />



           {/* how we need to think different */}
           {
            value.map((val1 , index1)=>(
            <div className='col'>
              { value.map((val2, index2 )=>(
               <Square num = {chooseNumber()} />
             ))}
            </div>
            ))
           }
          
           

    </div>
  )
}

export default App
