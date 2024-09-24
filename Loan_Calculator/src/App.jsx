import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { tenureDate } from './utils/Constants';

function App() {
  const [cost, setCost] = useState(0)
  const [interest, setInterest] = useState(0)
  const [fee, setFee] = useState(0)
  const [downPayment, setDownPayment] = useState(0)
  const [tenure, setTenure] = useState(0)
  const [emi, setEmi] = useState(0)

  const calculateDownPayment = ()=>{
      if(!cost) return;
  }
  const calculateLoanAmount = ()=>{
    if(!cost) return;
  }

  const updateEMI = (e)=>{
    if(!cost) return;
    const dp = Number(e.target.value);
    setDownPayment(dp.toFixed(0));

    // calculate the emi and update it 

  }
  const updateDownPayment = ()=>{
    if(!cost) return;
    const EMI = Number(e.target.value);
    setEmi(EMI.toFixed(0));

    // calculate downpayment and update it  

  }

  const calculateEMI = ()=>{

  }

  return (
    <>
    <div className="App">
      <span className='title'>EMI Calculator</span>
      
      <label htmlFor="" className='label'>Total Cost of Asset</label>
      <input type="number" placeholder='Enter Cost of Asset' value={cost} onChange={(e)=> setCost(e.target.value)} />

      <label htmlFor="" className='label'>Interest Rate (in %)</label>
      <input type="number" placeholder='Enter Interest Rate' value={interest} onChange={(e)=> setInterest(e.target.value)} />

      {/* Processing fees := 1% on loan amount */}
      {/* Loan Amount  = Cost of assert - downpaymeny */}
      <label htmlFor="" className='label'>Processing Fees (in %)</label>
      <input type="number" placeholder='Enter Processing fees ' value={fee} onChange={(e)=> setFee(e.target.value)} />

      <label htmlFor="" className='label'>Down Payment</label>
       <h2 style={{padding : "10px 0px" }}> Total DownPayment {calculateDownPayment()}</h2>
       <input type="range" name="" id="" min={0} max={cost} value={downPayment} onChange={updateEMI} />
       <div className='section'>
            <span>0%</span>
            <span>{downPayment}</span>
            <span>100%</span>
       </div>


       <label htmlFor="" className='label'>Loan Per Month</label>
       <h2 style={{padding : "10px 0px" }}> Total Loan Amount {calculateLoanAmount()}</h2>
       <input type="range" name="" id="" min={calculateEMI(cost)} max={calculateEMI(0)} value={emi} onChange={updateDownPayment} />
       <div className='section'>
            <span>0%</span>
            <span>{emi}</span>
            <span>100%</span>
       </div> 
      <label htmlFor="" className='label'>Tenure</label>
      <div className='tenure'>
      {tenureDate.map((t , index)=>{
        return <button className={`btn ${t === tenure ? "selected" : ""}`} onClick={(e)=> setTenure(t)} > {t} </button>
      })}
      </div>

    </div>
     
    </>
  )
}

export default App
